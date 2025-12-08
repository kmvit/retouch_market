from .models import Cart
from django.contrib.sessions.models import Session


def get_or_create_cart(request):
    """
    Получает или создает корзину для пользователя.
    Для авторизованных пользователей - по user, для анонимных - по session_key.
    """
    if request.user.is_authenticated:
        cart, created = Cart.objects.get_or_create(
            user=request.user,
            defaults={'session_key': ''}
        )
    else:
        if not request.session.session_key:
            request.session.create()
        session_key = request.session.session_key
        cart, created = Cart.objects.get_or_create(
            session_key=session_key,
            defaults={'user': None}
        )
    return cart

