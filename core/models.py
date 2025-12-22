from django.db import models
from django.utils.translation import gettext_lazy as _
from ckeditor.fields import RichTextField

# Create your models here.


class SEOMixin(models.Model):
    """Абстрактная модель для SEO метаданных"""
    meta_title = models.CharField(
        max_length=255,
        blank=True,
        verbose_name=_("Meta Title"),
        help_text=_("Заголовок страницы для поисковых систем (до 60 символов)")
    )
    meta_description = models.CharField(
        max_length=500,
        blank=True,
        verbose_name=_("Meta Description"),
        help_text=_("Описание страницы для поисковых систем (до 160 символов)")
    )
    meta_keywords = models.CharField(
        max_length=500,
        blank=True,
        verbose_name=_("Meta Keywords"),
        help_text=_("Ключевые слова через запятую")
    )

    class Meta:
        abstract = True

    def get_meta_title(self):
        """Возвращает meta_title или генерирует из title/name"""
        if self.meta_title:
            return self.meta_title
        return getattr(self, 'title', getattr(self, 'name', ''))

    def get_meta_description(self):
        """Возвращает meta_description или генерирует из description"""
        if self.meta_description:
            return self.meta_description
        description = getattr(self, 'description', '')
        if description:
            # Убираем HTML теги для чистого текста
            from django.utils.html import strip_tags
            clean_description = strip_tags(str(description))
            return clean_description[:500]
        return ''


class City(models.Model):
    """Модель города"""
    name = models.CharField(max_length=100, unique=True, verbose_name=_("Название"))
    is_active = models.BooleanField(default=True, verbose_name=_("Активен"))
    sort_order = models.PositiveIntegerField(default=0, verbose_name=_("Порядок сортировки"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Создан"))
    
    class Meta:
        verbose_name = "Город"
        verbose_name_plural = "Города"
        ordering = ["sort_order", "name"]
    
    def __str__(self) -> str:
        return self.name


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


class StaticPage(SEOMixin, models.Model):
    title = models.CharField(max_length=255, verbose_name=_("Заголовок"))
    slug = models.SlugField(max_length=255, unique=True, verbose_name=_("Слаг"))
    content = RichTextField(blank=True, verbose_name=_("Содержимое"))
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
