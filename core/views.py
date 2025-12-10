from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
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
    
    # Для каждой категории получаем активные товары с изображениями, все товары со всех городов
    categories_with_products = []
    for category in categories:
        products = Product.objects.filter(
            category=category,
            is_active=True,
            seller__isnull=False  # Только товары с продавцом
        ).select_related('seller').prefetch_related('images').order_by(order_by)[:8]  # Ограничиваем до 8 товаров на категорию
        
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


@require_http_methods(["POST"])
def set_city(request):
    """Устанавливает выбранный город в сессию"""
    city_id = request.POST.get('city_id')
    
    if city_id:
        try:
            city = get_object_or_404(City, id=city_id, is_active=True)
            request.session['selected_city_id'] = city.id
            request.session['city_confirmed'] = True
            # Удаляем определенный город, так как пользователь выбрал вручную
            if 'detected_city_id' in request.session:
                del request.session['detected_city_id']
            return JsonResponse({'success': True, 'city_name': city.name})
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)}, status=400)
    
    return JsonResponse({'success': False, 'error': 'Не указан ID города'}, status=400)


@require_http_methods(["POST"])
def confirm_detected_city(request):
    """Подтверждает определенный по IP город"""
    request.session['city_confirmed'] = True
    # Если был определен город по IP, устанавливаем его как выбранный
    detected_city_id = request.session.get('detected_city_id')
    if detected_city_id:
        try:
            city = City.objects.filter(id=detected_city_id, is_active=True).first()
            if city:
                request.session['selected_city_id'] = city.id
                return JsonResponse({'success': True, 'city_name': city.name})
        except Exception:
            pass
    
    return JsonResponse({'success': True})


def get_cities_list(request):
    """Возвращает список всех активных городов для выпадающего списка"""
    cities = City.objects.filter(is_active=True).order_by('sort_order', 'name')
    cities_list = [{'id': city.id, 'name': city.name} for city in cities]
    return JsonResponse({'cities': cities_list})