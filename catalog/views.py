from django.shortcuts import render, get_object_or_404
from django.db.models import Q
from .models import Category, Product

# Create your views here.
def catalog(request):
    search_query = request.GET.get('q', '').strip()
    sort_by = request.GET.get('sort', 'date')  # По умолчанию сортировка по дате
    
    # Определяем порядок сортировки
    sort_options = {
        'price_asc': 'price',  # По цене (по возрастанию)
        'price_desc': '-price',  # По цене (по убыванию)
        'name': 'name',  # По алфавиту (А-Я)
        'date': '-created_at',  # По дате (новые сначала)
    }
    
    order_by = sort_options.get(sort_by, '-created_at')
    
    # Если есть поисковый запрос, показываем результаты поиска
    if search_query:
        # Поиск по названию товара (без учета регистра), все товары со всех городов
        products = Product.objects.filter(
            Q(name__icontains=search_query) | Q(description__icontains=search_query),
            is_active=True,
            seller__isnull=False  # Только товары с продавцом
        ).select_related('seller').prefetch_related('images').order_by(order_by)
        
        context = {
            'categories_with_products': [],
            'search_query': search_query,
            'search_results': products,
            'is_search': True,
            'sort_by': sort_by,
        }
    else:
        # Получаем все родительские категории (без родителя)
        categories = Category.objects.filter(parent__isnull=True).order_by('name')
        
        # Для каждой категории получаем активные товары с изображениями, все товары со всех городов
        categories_with_products = []
        for category in categories:
            products = Product.objects.filter(
                category=category,
                is_active=True,
                seller__isnull=False  # Только товары с продавцом
            ).select_related('seller').prefetch_related('images').order_by(order_by)[:12]  # Ограничиваем до 12 товаров на категорию
            
            if products.exists():
                categories_with_products.append({
                    'category': category,
                    'products': products
                })
        
        context = {
            'categories_with_products': categories_with_products,
            'search_query': '',
            'search_results': [],
            'is_search': False,
            'sort_by': sort_by,
        }
    
    return render(request, 'catalog/catalog.html', context)

def product_detail(request, product_id):
    product = get_object_or_404(Product, id=product_id, is_active=True)
    product.images_list = product.images.all().order_by('sort_order', 'id')
    
    # Получаем связанные товары из той же категории, все товары со всех городов
    related_products = Product.objects.filter(
        category=product.category,
        is_active=True,
        seller__isnull=False  # Только товары с продавцом
    ).exclude(id=product.id).select_related('seller').prefetch_related('images')[:4]
    
    context = {
        'product': product,
        'related_products': related_products,
    }
    return render(request, 'catalog/detail.html', context)