from django.urls import path
from . import views

# app_name is used to namespace the urls
app_name = 'catalog'

# urlpatterns is a list of urls 
urlpatterns = [
    path('', views.catalog, name='catalog'),
    path('product/<int:product_id>/', views.product_detail, name='detail'),
]


