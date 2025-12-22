import requests
import logging
from typing import Optional, Dict, Any
from django.conf import settings
from .models import City

logger = logging.getLogger(__name__)


def get_client_ip(request) -> str:
    """Получает IP-адрес клиента из запроса"""
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0].strip()
    else:
        ip = request.META.get('REMOTE_ADDR', '127.0.0.1')
    return ip


def get_city_by_ip(ip: str) -> Optional[City]:
    """
    Определяет город по IP-адресу используя бесплатный API ip-api.com
    Возвращает объект City или None если не удалось определить
    """
    # Для локального IP возвращаем None
    if ip in ('127.0.0.1', 'localhost', '::1') or ip.startswith('192.168.') or ip.startswith('10.'):
        return None
    
    try:
        # Используем бесплатный API ip-api.com (без регистрации, до 45 запросов/минуту)
        # Формат: http://ip-api.com/json/{ip}?fields=status,message,city,country
        url = f'http://ip-api.com/json/{ip}?fields=status,message,city,country'
        response = requests.get(url, timeout=3)
        
        if response.status_code == 200:
            data = response.json()
            if data.get('status') == 'success' and data.get('city'):
                city_name = data.get('city')
                # Пытаемся найти город в базе данных
                city = City.objects.filter(name__iexact=city_name, is_active=True).first()
                if city:
                    return city
                # Если город не найден, создаем его (опционально)
                # Или возвращаем None и используем город по умолчанию
                logger.info(f"Город '{city_name}' не найден в базе данных")
        else:
            logger.warning(f"Ошибка при запросе к ip-api.com: {response.status_code}")
    except requests.exceptions.RequestException as e:
        logger.error(f"Ошибка при определении города по IP {ip}: {e}")
    except Exception as e:
        logger.error(f"Неожиданная ошибка при определении города: {e}")
    
    return None


def get_default_city() -> City:
    """Возвращает город по умолчанию (Москва)"""
    city, _ = City.objects.get_or_create(
        name='Москва',
        defaults={'is_active': True, 'sort_order': 0}
    )
    return city


def get_seo_context(obj: Any = None, default_title: str = 'Haron Market', default_description: str = '', default_keywords: str = '', og_image: str = None) -> Dict[str, str]:
    """
    Получает SEO контекст из объекта или использует значения по умолчанию.
    
    Args:
        obj: Объект с SEO полями (Product, Category, StaticPage и т.д.)
        default_title: Заголовок по умолчанию
        default_description: Описание по умолчанию
        default_keywords: Ключевые слова по умолчанию
        og_image: URL изображения для OG (если не указано, будет получено из объекта)
    
    Returns:
        Словарь с SEO данными для контекста шаблона
    """
    seo_context = {
        'seo_meta_title': default_title,
        'seo_meta_description': default_description,
        'seo_meta_keywords': default_keywords,
        'seo_og_image': og_image,
    }
    
    if obj:
        # Получаем meta_title
        if hasattr(obj, 'get_meta_title'):
            seo_context['seo_meta_title'] = obj.get_meta_title() or default_title
        elif hasattr(obj, 'meta_title') and obj.meta_title:
            seo_context['seo_meta_title'] = obj.meta_title
        elif hasattr(obj, 'title'):
            seo_context['seo_meta_title'] = f"{obj.title} - {default_title}"
        elif hasattr(obj, 'name'):
            seo_context['seo_meta_title'] = f"{obj.name} - {default_title}"
        
        # Получаем meta_description
        if hasattr(obj, 'get_meta_description'):
            seo_context['seo_meta_description'] = obj.get_meta_description() or default_description
        elif hasattr(obj, 'meta_description') and obj.meta_description:
            seo_context['seo_meta_description'] = obj.meta_description
        elif hasattr(obj, 'description') and obj.description:
            from django.utils.html import strip_tags
            clean_description = strip_tags(str(obj.description))[:500]
            seo_context['seo_meta_description'] = clean_description or default_description
        
        # Получаем meta_keywords
        if hasattr(obj, 'meta_keywords') and obj.meta_keywords:
            seo_context['seo_meta_keywords'] = obj.meta_keywords
        
        # Получаем OG изображение
        if not og_image:
            # Для товаров - основное изображение
            if hasattr(obj, 'images'):
                main_image = obj.images.filter(is_main=True).first()
                if not main_image:
                    main_image = obj.images.first()
                if main_image and main_image.image:
                    seo_context['seo_og_image'] = main_image.image.url
            # Для других объектов - можно добавить логику получения изображения
            elif hasattr(obj, 'image') and obj.image:
                seo_context['seo_og_image'] = obj.image.url
    
    # Если OG изображение не найдено, используем логотип сайта
    if not seo_context['seo_og_image']:
        try:
            from .models import SiteSettings
            site_settings = SiteSettings.objects.first()
            if site_settings and site_settings.logo:
                seo_context['seo_og_image'] = site_settings.logo.url
        except Exception:
            pass
    
    # OG изображение будет преобразовано в абсолютный URL в шаблоне через request
    # Здесь оставляем относительный URL
    
    return seo_context

