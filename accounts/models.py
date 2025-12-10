from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _
from django.utils import timezone
import secrets
import string
import base64
import hashlib


class User(AbstractUser):
    phone = models.CharField(max_length=20, blank=True, verbose_name=_("Телефон"))
    is_seller = models.BooleanField(default=False, verbose_name=_("Продавец"))
    middle_name = models.CharField(max_length=150, blank=True, verbose_name=_("Отчество"))
    city = models.ForeignKey(
        'core.City',
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        verbose_name=_("Город")
    )
    legal_form = models.CharField(max_length=50, blank=True, verbose_name=_("ИП или ООО"))
    passport_data = models.TextField(blank=True, verbose_name=_("Паспортные данные"))
    is_verified = models.BooleanField(default=False, verbose_name=_("Верифицирован"))

    def __str__(self) -> str:
        return self.get_username()

    def get_initials(self):
        """Получает инициалы пользователя"""
        initials = ""
        if self.first_name:
            initials += self.first_name[0].upper()
        if self.last_name:
            initials += self.last_name[0].upper()
        if not initials and self.username:
            initials = self.username[0].upper()
        return initials or "U"

    def get_avatar_color(self):
        """Генерирует цвет для аватара на основе имени пользователя"""
        # Используем хеш имени для генерации стабильного цвета
        name = self.get_full_name() or self.username
        hash_obj = hashlib.md5(name.encode())
        hash_int = int(hash_obj.hexdigest(), 16)
        
        # Генерируем приятные цвета (не слишком темные и не слишком светлые)
        colors = [
            "#2196F3",  # Синий
            "#4CAF50",  # Зеленый
            "#FF9800",  # Оранжевый
            "#9C27B0",  # Фиолетовый
            "#F44336",  # Красный
            "#00BCD4",  # Голубой
            "#FF5722",  # Глубокий оранжевый
            "#795548",  # Коричневый
            "#607D8B",  # Сине-серый
            "#E91E63",  # Розовый
        ]
        return colors[hash_int % len(colors)]

    def get_avatar_svg(self, size=40):
        """Генерирует SVG аватар с инициалами"""
        initials = self.get_initials()
        color = self.get_avatar_color()
        
        svg = f'''<svg width="{size}" height="{size}" xmlns="http://www.w3.org/2000/svg">
            <circle cx="{size//2}" cy="{size//2}" r="{size//2}" fill="{color}"/>
            <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="{size//2.5}" 
                  font-weight="bold" fill="white" text-anchor="middle" 
                  dominant-baseline="central">{initials}</text>
        </svg>'''
        
        # Кодируем в data URI
        encoded = base64.b64encode(svg.encode('utf-8')).decode('utf-8')
        return f"data:image/svg+xml;base64,{encoded}"

    @property
    def avatar_svg(self):
        """Property для использования в шаблонах"""
        return self.get_avatar_svg()

    class Meta:
        verbose_name = "Пользователь"
        verbose_name_plural = "Пользователи"


class Company(models.Model):
    """Модель компании/организации"""
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name='company',
        verbose_name=_("Пользователь")
    )
    name = models.CharField(max_length=255, blank=True, verbose_name=_("Название компании"))
    inn = models.CharField(max_length=20, blank=True, verbose_name=_("ИНН"))
    city = models.ForeignKey(
        'core.City',
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        verbose_name=_("Город")
    )
    work_phone = models.CharField(max_length=20, blank=True, verbose_name=_("Рабочий телефон"))
    work_email = models.EmailField(blank=True, verbose_name=_("Рабочий E-mail"))
    bank_account = models.CharField(max_length=50, blank=True, verbose_name=_("Расчетный счет"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Создана"))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_("Обновлена"))
    
    class Meta:
        verbose_name = "Компания"
        verbose_name_plural = "Компании"
    
    def __str__(self) -> str:
        return self.name or f"Компания {self.user.username}"


class AuthCode(models.Model):
    """Модель для хранения кодов подтверждения при авторизации"""
    email = models.EmailField(verbose_name=_("Email"))
    code = models.CharField(max_length=6, verbose_name=_("Код"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Создан"))
    expires_at = models.DateTimeField(verbose_name=_("Истекает"))
    is_used = models.BooleanField(default=False, verbose_name=_("Использован"))
    
    @staticmethod
    def generate_code(length=6):
        """Генерирует случайный числовой код"""
        return ''.join(secrets.choice(string.digits) for _ in range(length))
    
    def is_valid(self):
        """Проверяет, действителен ли код"""
        return not self.is_used and timezone.now() < self.expires_at
    
    def mark_as_used(self):
        """Помечает код как использованный"""
        self.is_used = True
        self.save()
    
    class Meta:
        verbose_name = "Код авторизации"
        verbose_name_plural = "Коды авторизации"
        ordering = ['-created_at']
