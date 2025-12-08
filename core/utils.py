import requests
import logging
from typing import Optional
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

