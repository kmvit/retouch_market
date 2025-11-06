from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'core/home.html')

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