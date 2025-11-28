from django.shortcuts import render
from catalog.models import Category, Product

# Create your views here.
def index(request):
    sort_by = request.GET.get('sort', 'date')  # По умолчанию сортировка по дате
    
    # Определяем порядок сортировки
    sort_options = {
        'price_asc': 'price',  # По цене (по возрастанию)
        'price_desc': '-price',  # По цене (по убыванию)
        'name': 'name',  # По алфавиту (А-Я)
        'date': '-created_at',  # По дате (новые сначала)
    }
    
    order_by = sort_options.get(sort_by, '-created_at')
    
    # Получаем все родительские категории (без родителя)
    categories = Category.objects.filter(parent__isnull=True).order_by('name')[:5]  # Ограничиваем до 5 категорий для табов
    
    # Для каждой категории получаем активные товары с изображениями
    categories_with_products = []
    for category in categories:
        products = Product.objects.filter(
            category=category,
            is_active=True
        ).prefetch_related('images').order_by(order_by)[:8]  # Ограничиваем до 8 товаров на категорию
        
        if products.exists():
            categories_with_products.append({
                'category': category,
                'products': products
            })
    
    context = {
        'categories_with_products': categories_with_products,
        'sort_by': sort_by,
    }
    return render(request, 'core/home.html', context)

def tariffs(request):
    return render(request, 'core/tariffs.html')

def partner(request):
    return render(request, 'core/partner.html')

def static_page(request, page_slug):
    page_titles = {
        'info': 'Информация',
        'help': 'Помощь',
        'work': 'Работа на портале',
        'contacts': 'Контакты',
        'requisites': 'Реквизиты',
        'privacy': 'Политика конфиденциальности',
    }
    page_title = page_titles.get(page_slug, 'Страница')
    return render(request, 'core/static_page.html', {'page_title': page_title})