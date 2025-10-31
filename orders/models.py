from django.db import models
from django.conf import settings
from django.utils.translation import gettext_lazy as _
from catalog.models import Product


class Order(models.Model):
    STATUS_CHOICES = [
        ("new", "Новый"),
        ("paid", "Оплачен"),
        ("shipped", "Отправлен"),
        ("completed", "Завершен"),
        ("canceled", "Отменен"),
    ]

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, null=True, blank=True, on_delete=models.SET_NULL, related_name="orders", verbose_name=_("Пользователь")
    )
    email = models.EmailField(verbose_name=_("Email"))
    phone = models.CharField(max_length=20, blank=True, verbose_name=_("Телефон"))
    full_name = models.CharField(max_length=255, blank=True, verbose_name=_("ФИО"))
    address = models.CharField(max_length=500, blank=True, verbose_name=_("Адрес"))
    comment = models.TextField(blank=True, verbose_name=_("Комментарий"))
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="new", verbose_name=_("Статус"))
    total_amount = models.DecimalField(max_digits=12, decimal_places=2, default=0, verbose_name=_("Сумма заказа"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Создан"))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_("Обновлен"))

    class Meta:
        verbose_name = "Заказ"
        verbose_name_plural = "Заказы"
        ordering = ["-created_at"]

    def __str__(self) -> str:
        return f"Order #{self.id}"


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name="items", verbose_name=_("Заказ"))
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True, verbose_name=_("Товар"))
    quantity = models.PositiveIntegerField(default=1, verbose_name=_("Количество"))
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name=_("Цена"))

    class Meta:
        verbose_name = "Позиция заказа"
        verbose_name_plural = "Позиции заказа"

    @property
    def total_price(self):
        return self.price * self.quantity
