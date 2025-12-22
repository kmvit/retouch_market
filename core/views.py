from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse, HttpResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from pathlib import Path
from catalog.models import Category, Product
from .models import City, StaticPage
from .utils import get_seo_context

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
    
    # Получаем SEO данные для главной страницы
    seo_context = get_seo_context(
        default_title='Haron Market - Интернет-магазин ритуальных товаров',
        default_description='Haron Market - удобный Интернет-магазин для покупки ритуальных товаров. Большой выбор товаров по выгодным ценам.',
        default_keywords='маркетплейс, ритуальные товары, покупки, интернет магазин'
    )
    
    context = {
        'categories_with_products': categories_with_products,
        'sort_by': sort_by,
        **seo_context,
    }
    return render(request, 'core/home.html', context)

def tariffs(request):
    seo_context = get_seo_context(
        default_title='Тарифы - Haron Market',
        default_description='Тарифы и условия работы на маркетплейсе Haron Market',
        default_keywords='тарифы, условия, маркетплейс'
    )
    context = {**seo_context}
    return render(request, 'core/tariffs.html', context)

def partner(request):
    seo_context = get_seo_context(
        default_title='Партнерская программа - Haron Market',
        default_description='Станьте партнером Haron Market и зарабатывайте вместе с нами',
        default_keywords='партнерская программа, сотрудничество, заработок'
    )
    context = {**seo_context}
    return render(request, 'core/partner.html', context)

def static_page(request, page_slug):
    # Пытаемся получить страницу из базы данных
    try:
        page = StaticPage.objects.get(slug=page_slug, is_active=True)
        page_title = page.title
        seo_context = get_seo_context(
            obj=page,
            default_title=f"{page.title} - Haron Market",
            default_description=page.content[:500] if page.content else ''
        )
    except StaticPage.DoesNotExist:
        # Fallback на старый способ для обратной совместимости
        page_titles = {
            'info': 'Информация',
            'help': 'Помощь',
            'work': 'Работа на портале',
            'contacts': 'Контакты',
            'requisites': 'Реквизиты',
            'privacy': 'Политика конфиденциальности',
        }
        page_title = page_titles.get(page_slug, 'Страница')
        page = None
        seo_context = get_seo_context(
            default_title=f"{page_title} - Haron Market",
            default_description=f"Информация о {page_title.lower()} на Haron Market"
        )
    
    context = {
        'page': page,
        'page_title': page_title,
        **seo_context,
    }
    return render(request, 'core/static_page.html', context)


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


@csrf_exempt
def get_cities_list(request):
    """Возвращает список всех активных городов для выпадающего списка"""
    try:
        cities = City.objects.filter(is_active=True).order_by('sort_order', 'name')
        cities_list = [{'id': city.id, 'name': city.name} for city in cities]
        return JsonResponse({'cities': cities_list})
    except Exception as e:
        import logging
        logger = logging.getLogger(__name__)
        logger.error(f"Ошибка при получении списка городов: {str(e)}", exc_info=True)
        return JsonResponse({'cities': [], 'error': str(e)}, status=500)


def robots_txt(request):
    """Отдает robots.txt файл из корня проекта"""
    robots_path = Path(settings.BASE_DIR) / 'robots.txt'
    try:
        with open(robots_path, 'r', encoding='utf-8') as f:
            content = f.read()
        return HttpResponse(content, content_type='text/plain')
    except FileNotFoundError:
        return HttpResponse('User-agent: *\nAllow: /', content_type='text/plain', status=404)