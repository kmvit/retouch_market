from django.db import models
from django.utils.text import slugify
from django.utils.translation import gettext_lazy as _
from django.conf import settings
from ckeditor.fields import RichTextField


class Category(models.Model):
    name = models.CharField(max_length=255, verbose_name=_("Название"))
    slug = models.SlugField(max_length=255, unique=True, blank=True, verbose_name=_("Слаг"))
    parent = models.ForeignKey(
        "self", null=True, blank=True, on_delete=models.CASCADE, related_name="children", verbose_name=_("Родительская категория")
    )

    class Meta:
        verbose_name = "Категория"
        verbose_name_plural = "Категории"
        ordering = ["name"]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self) -> str:
        return self.name


class Product(models.Model):
    COLOR_CHOICES = [
        ("red", "Красный"),
        ("green", "Зеленый"),
        ("blue", "Синий"),
        ("black", "Черный"),
        ("white", "Белый"),
    ]
    SHAPE_CHOICES = [
        ("round", "Круглая"),
        ("square", "Квадратная"),
        ("rect", "Прямоугольная"),
        ("other", "Другая"),
    ]

    category = models.ForeignKey(Category, on_delete=models.PROTECT, related_name="products", verbose_name=_("Категория"))
    seller = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="products",
        null=True,
        blank=True,
        verbose_name=_("Продавец")
    )
    name = models.CharField(max_length=255, verbose_name=_("Название"))
    slug = models.SlugField(max_length=255, unique=True, blank=True, verbose_name=_("Слаг"))
    description = RichTextField(blank=True, verbose_name=_("Описание"))
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name=_("Цена"))
    discount_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True, verbose_name=_("Цена со скидкой"))
    color = models.CharField(max_length=20, choices=COLOR_CHOICES, blank=True, verbose_name=_("Цвет"))
    shape = models.CharField(max_length=20, choices=SHAPE_CHOICES, blank=True, verbose_name=_("Форма"))
    is_active = models.BooleanField(default=True, verbose_name=_("Активен"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Создан"))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_("Обновлен"))

    class Meta:
        verbose_name = "Товар"
        verbose_name_plural = "Товары"
        ordering = ["-created_at"]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self) -> str:
        return self.name


class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="images", verbose_name=_("Товар"))
    image = models.ImageField(upload_to="products/", verbose_name=_("Изображение"))
    alt_text = models.CharField(max_length=255, blank=True, verbose_name=_("Alt-текст"))
    is_main = models.BooleanField(default=False, verbose_name=_("Основное"))
    sort_order = models.PositiveIntegerField(default=0, verbose_name=_("Порядок"))

    class Meta:
        verbose_name = "Изображение товара"
        verbose_name_plural = "Изображения товара"
        ordering = ["sort_order", "id"]

    def __str__(self) -> str:
        return f"Image #{self.id} for {self.product_id}"
