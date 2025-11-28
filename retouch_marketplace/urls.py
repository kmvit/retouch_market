"""
URL configuration for retouch_marketplace project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
import os

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('core.urls')),
    path('catalog/', include('catalog.urls')),
    path('cart/', include('cart.urls')),
    path('orders/', include('orders.urls')),
    path('accounts/', include('accounts.urls')),
]

# Раздача медиа-файлов
# В продакшене рекомендуется настроить веб-сервер (nginx/apache) для раздачи медиа-файлов
# Это обеспечит лучшую производительность и безопасность
# Для временного решения раздаем медиа и при DEBUG=False
# Для отключения раздачи через Django установите DJANGO_SERVE_MEDIA=false
serve_media = os.getenv('DJANGO_SERVE_MEDIA', 'true').lower() in ('1', 'true', 'yes')
if settings.DEBUG or serve_media:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
