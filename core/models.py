from django.db import models
from django.utils.translation import gettext_lazy as _
from ckeditor.fields import RichTextField

# Create your models here.


class SiteSettings(models.Model):
    phone = models.CharField(max_length=30, blank=True, verbose_name=_("Телефон"))
    email = models.EmailField(blank=True, verbose_name=_("Email"))
    logo = models.ImageField(upload_to="site/", blank=True, null=True, verbose_name=_("Логотип"))
    address = models.CharField(max_length=500, blank=True, verbose_name=_("Адрес"))

    class Meta:
        verbose_name = "Настройки сайта"
        verbose_name_plural = "Настройки сайта"

    def __str__(self) -> str:
        return "Настройки сайта"


class StaticPage(models.Model):
    title = models.CharField(max_length=255, verbose_name=_("Заголовок"))
    slug = models.SlugField(max_length=255, unique=True, verbose_name=_("Слаг"))
    content = RichTextField(blank=True, verbose_name=_("Содержимое"))
    meta_title = models.CharField(max_length=255, blank=True, verbose_name=_("Meta title"))
    meta_description = models.CharField(max_length=500, blank=True, verbose_name=_("Meta description"))
    is_active = models.BooleanField(default=True, verbose_name=_("Активна"))
    sort_order = models.PositiveIntegerField(default=0, verbose_name=_("Порядок"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Создана"))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_("Обновлена"))

    class Meta:
        verbose_name = "Статическая страница"
        verbose_name_plural = "Статические страницы"
        ordering = ["sort_order", "title"]

    def __str__(self) -> str:
        return self.title
