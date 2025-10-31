from django.db import models
from django.conf import settings
from django.utils.translation import gettext_lazy as _
from catalog.models import Product


class Cart(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, null=True, blank=True, on_delete=models.CASCADE, related_name="carts", verbose_name=_("Пользователь")
    )
    session_key = models.CharField(max_length=40, blank=True, db_index=True, verbose_name=_("Ключ сессии"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Создана"))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_("Обновлена"))

    class Meta:
        verbose_name = "Корзина"
        verbose_name_plural = "Корзины"

    def __str__(self) -> str:
        owner = self.user or self.session_key or "anon"
        return f"Cart {self.id} ({owner})"

    @property
    def total_quantity(self) -> int:
        return sum(item.quantity for item in self.items.all())

    @property
    def total_amount(self):
        return sum(item.total_price for item in self.items.all())


class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name="items", verbose_name=_("Корзина"))
    product = models.ForeignKey(Product, on_delete=models.CASCADE, verbose_name=_("Товар"))
    quantity = models.PositiveIntegerField(default=1, verbose_name=_("Количество"))
    unit_price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name=_("Цена за единицу"))

    class Meta:
        verbose_name = "Позиция корзины"
        verbose_name_plural = "Позиции корзины"
        unique_together = ("cart", "product")

    def __str__(self) -> str:
        return f"{self.product} x {self.quantity}"

    @property
    def total_price(self):
        return self.unit_price * self.quantity
