from .models import SiteSettings, City
from .utils import get_default_city


def site_settings(request):
    settings_instance = SiteSettings.objects.first()
    return {"site_settings": settings_instance}


def catalog_categories(request):
    """Добавляет категории каталога в контекст всех шаблонов"""
    try:
        from catalog.models import Category, Product
        from django.db.models import Prefetch
        # Получаем категории с предзагрузкой только активных товаров
        active_products = Prefetch(
            'products',
            queryset=Product.objects.filter(is_active=True).order_by('-created_at')
        )
        categories = Category.objects.filter(
            parent__isnull=True
        ).prefetch_related(active_products).order_by('name')
        return {"catalog_categories": categories}
    except Exception:
        # Если модель Category еще не создана или есть ошибка, возвращаем пустой список
        return {"catalog_categories": []}


def cart_quantity(request):
    """Добавляет количество товаров в корзине в контекст всех шаблонов"""
    try:
        from cart.utils import get_or_create_cart
        cart = get_or_create_cart(request)
        cart_quantity = cart.total_quantity
        return {"cart_quantity": cart_quantity}
    except Exception:
        return {"cart_quantity": 0}


def current_city(request):
    """Добавляет текущий город в контекст всех шаблонов"""
    try:
        city_id = request.session.get('selected_city_id')
        if city_id:
            city = City.objects.filter(id=city_id, is_active=True).first()
            if city:
                return {"current_city": city}
        
        # Если город не выбран, используем город по умолчанию
        default_city = get_default_city()
        return {"current_city": default_city}
    except Exception:
        default_city = get_default_city()
        return {"current_city": default_city}


def detected_city(request):
    """Добавляет определенный по IP город для подтверждения"""
    # Показываем модальное окно только если город еще не подтвержден
    if 'city_confirmed' not in request.session:
        detected_city_id = request.session.get('detected_city_id')
        if detected_city_id:
            city = City.objects.filter(id=detected_city_id, is_active=True).first()
            if city:
                return {"detected_city": city, "show_city_confirmation": True}
    
    return {"detected_city": None, "show_city_confirmation": False}


def latest_products(request):
    """Добавляет последние товары в контекст всех шаблонов"""
    try:
        from catalog.models import Product
        # Получаем последние 4 активных товара с продавцом
        products = Product.objects.filter(
            is_active=True,
            seller__isnull=False
        ).order_by('-created_at')[:4]
        return {"latest_products": products}
    except Exception:
        # Если модель Product еще не создана или есть ошибка, возвращаем пустой список
        return {"latest_products": []}


