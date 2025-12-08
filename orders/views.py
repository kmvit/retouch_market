from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.views.decorators.http import require_http_methods
from cart.utils import get_or_create_cart
from .models import Order, OrderItem


@require_http_methods(["GET", "POST"])
def order_create(request):
    """Создание заказа из корзины"""
    cart = get_or_create_cart(request)
    cart_items = cart.items.select_related('product').prefetch_related('product__images').all()
    
    # Проверяем, что корзина не пуста
    if not cart_items.exists():
        messages.warning(request, 'Ваша корзина пуста. Добавьте товары перед оформлением заказа.')
        return redirect('cart:detail')
    
    if request.method == 'POST':
        # Получаем данные из формы
        email = request.POST.get('email', '').strip()
        phone = request.POST.get('phone', '').strip()
        last_name = request.POST.get('last_name', '').strip()
        first_name = request.POST.get('first_name', '').strip()
        middle_name = request.POST.get('middle_name', '').strip()
        address = request.POST.get('address', '').strip()
        comment = request.POST.get('comment', '').strip()
        
        # Валидация обязательных полей
        if not email:
            messages.error(request, 'Пожалуйста, укажите email')
            # Добавляем вычисленную старую общую цену для каждого товара
            for item in cart_items:
                if item.product.price > item.unit_price:
                    item.old_total_price = item.product.price * item.quantity
                else:
                    item.old_total_price = None
            # Подготавливаем данные формы для повторного отображения
            form_data = {
                'email': email,
                'phone': phone,
                'last_name': last_name,
                'first_name': first_name,
                'middle_name': middle_name,
                'address': address,
                'comment': comment,
            }
            return render(request, 'orders/order.html', {
                'cart': cart,
                'cart_items': cart_items,
                'form_data': form_data
            })
        
        # Формируем ФИО
        full_name_parts = [last_name, first_name, middle_name]
        full_name = ' '.join([part for part in full_name_parts if part]).strip()
        
        # Создаем заказ
        order = Order.objects.create(
            user=request.user if request.user.is_authenticated else None,
            email=email,
            phone=phone,
            full_name=full_name,
            address=address,
            comment=comment,
            total_amount=cart.total_amount,
            status='new'
        )
        
        # Создаем позиции заказа из корзины
        for cart_item in cart_items:
            OrderItem.objects.create(
                order=order,
                product=cart_item.product,
                quantity=cart_item.quantity,
                price=cart_item.unit_price
            )
        
        # Очищаем корзину после создания заказа
        cart.items.all().delete()
        
        messages.success(request, f'Заказ #{order.id} успешно оформлен!')
        return redirect('orders:success', order_id=order.id)
    
    # GET запрос - отображаем форму
    # Добавляем вычисленную старую общую цену для каждого товара
    for item in cart_items:
        if item.product.price > item.unit_price:
            item.old_total_price = item.product.price * item.quantity
        else:
            item.old_total_price = None
    
    # Автозаполнение для авторизованных пользователей
    form_data = {}
    if request.user.is_authenticated:
        form_data = {
            'email': request.user.email or '',
            'phone': request.user.phone or '',
            'last_name': request.user.last_name or '',
            'first_name': request.user.first_name or '',
            'middle_name': request.user.middle_name or '',
        }
    
    context = {
        'cart': cart,
        'cart_items': cart_items,
        'form_data': form_data,
    }
    return render(request, 'orders/order.html', context)


def order_success(request, order_id):
    """Страница успешного оформления заказа"""
    order = get_object_or_404(Order, id=order_id)
    # Проверяем, что заказ принадлежит пользователю (если авторизован) или доступен по сессии
    if request.user.is_authenticated:
        if order.user and order.user != request.user:
            messages.error(request, 'У вас нет доступа к этому заказу')
            return redirect('core:index')
    else:
        # Для анонимных пользователей можно добавить проверку по email или просто показывать
        pass
    
    context = {
        'order': order,
    }
    return render(request, 'orders/success.html', context)
