from .models import SiteSettings


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


