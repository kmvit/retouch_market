from django.urls import path
from . import views

app_name = 'core'

urlpatterns = [
    path('', views.index, name='index'),
    path('partner/', views.partner, name='partner'),
    path('tariffs/', views.tariffs, name='tariffs'),
    path('info/', views.static_page, {'page_slug': 'info'}, name='info'),
    path('help/', views.static_page, {'page_slug': 'help'}, name='help'),
    path('work/', views.static_page, {'page_slug': 'work'}, name='work'),
    path('contacts/', views.static_page, {'page_slug': 'contacts'}, name='contacts'),
]

