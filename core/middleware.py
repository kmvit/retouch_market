from django.utils.deprecation import MiddlewareMixin
from .utils import get_client_ip, get_city_by_ip, get_default_city


class CityDetectionMiddleware(MiddlewareMixin):
    """
    Middleware для определения города по IP при первом посещении
    """
    
    def process_request(self, request):
        # Определяем город только если:
        # 1. Город еще не подтвержден пользователем
        # 2. Город еще не определен в этой сессии
        if 'city_confirmed' not in request.session and 'detected_city_id' not in request.session:
            ip = get_client_ip(request)
            detected_city = get_city_by_ip(ip)
            
            if detected_city:
                # Сохраняем определенный город в сессии для подтверждения
                request.session['detected_city_id'] = detected_city.id
            else:
                # Если не удалось определить, используем город по умолчанию
                default_city = get_default_city()
                request.session['detected_city_id'] = default_city.id
        
        return None

