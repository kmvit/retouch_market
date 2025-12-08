from django.shortcuts import render, get_object_or_404, redirect
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.contrib import messages
from catalog.models import Product
from .models import CartItem
from .utils import get_or_create_cart


def cart_detail(request):
    """Отображение корзины с товарами"""
    cart = get_or_create_cart(request)
    cart_items = cart.items.select_related('product').prefetch_related('product__images').all()
    
    # Добавляем вычисленную старую общую цену для каждого товара
    for item in cart_items:
        if item.product.price > item.unit_price:
            item.old_total_price = item.product.price * item.quantity
        else:
            item.old_total_price = None
    
    context = {
        'cart': cart,
        'cart_items': cart_items,
    }
    return render(request, 'cart/cart.html', context)


@require_POST
def add_to_cart(request, product_id):
    """Добавление товара в корзину (AJAX)"""
    product = get_object_or_404(Product, id=product_id, is_active=True)
    cart = get_or_create_cart(request)
    
    try:
        quantity = int(request.POST.get('quantity', 1))
        if quantity < 1:
            quantity = 1
    except (ValueError, TypeError):
        quantity = 1
    
    # Определяем цену товара (если есть скидка, используем её)
    unit_price = product.discount_price if product.discount_price else product.price
    
    # Получаем или создаем позицию в корзине
    cart_item, created = CartItem.objects.get_or_create(
        cart=cart,
        product=product,
        defaults={
            'quantity': quantity,
            'unit_price': unit_price
        }
    )
    
    if not created:
        # Если товар уже есть в корзине, увеличиваем количество
        cart_item.quantity += quantity
        cart_item.unit_price = unit_price  # Обновляем цену на случай изменения
        cart_item.save()
    
    # Возвращаем JSON для AJAX запроса
    return JsonResponse({
        'success': True,
        'message': 'Товар добавлен в корзину',
        'cart_total_quantity': cart.total_quantity,
        'cart_total_amount': float(cart.total_amount),
    })


@require_POST
def remove_from_cart(request, item_id):
    """Удаление товара из корзины"""
    cart = get_or_create_cart(request)
    cart_item = get_object_or_404(CartItem, id=item_id, cart=cart)
    cart_item.delete()
    
    if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
        return JsonResponse({
            'success': True,
            'message': 'Товар удален из корзины',
            'cart_total_quantity': cart.total_quantity,
            'cart_total_amount': float(cart.total_amount),
        })
    
    messages.success(request, 'Товар удален из корзины')
    return redirect('cart:detail')


@require_POST
def update_cart_item(request, item_id):
    """Обновление количества товара в корзине"""
    cart = get_or_create_cart(request)
    cart_item = get_object_or_404(CartItem, id=item_id, cart=cart)
    
    try:
        quantity = int(request.POST.get('quantity', 1))
        if quantity < 1:
            quantity = 1
    except (ValueError, TypeError):
        quantity = 1
    
    cart_item.quantity = quantity
    cart_item.save()
    
    if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
        return JsonResponse({
            'success': True,
            'message': 'Количество обновлено',
            'item_total_price': float(cart_item.total_price),
            'cart_total_quantity': cart.total_quantity,
            'cart_total_amount': float(cart.total_amount),
        })
    
    messages.success(request, 'Количество обновлено')
    return redirect('cart:detail')
