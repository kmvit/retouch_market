from django.urls import path
from . import views

app_name = 'core'

urlpatterns = [
    path('', views.index, name='index'),
    path('robots.txt', views.robots_txt, name='robots-txt'),
    path('partner/', views.partner, name='partner'),
    path('tariffs/', views.tariffs, name='tariffs'),
    path('info/', views.static_page, {'page_slug': 'info'}, name='info'),
    path('help/', views.static_page, {'page_slug': 'help'}, name='help'),
    path('work/', views.static_page, {'page_slug': 'work'}, name='work'),
    path('contacts/', views.static_page, {'page_slug': 'contacts'}, name='contacts'),
    path('requisites/', views.static_page, {'page_slug': 'requisites'}, name='requisites'),
    path('privacy/', views.static_page, {'page_slug': 'privacy'}, name='privacy'),
    path('set-city/', views.set_city, name='set-city'),
    path('confirm-city/', views.confirm_detected_city, name='confirm-city'),
    path('cities-list/', views.get_cities_list, name='cities-list'),
]

