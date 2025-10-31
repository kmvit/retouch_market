from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _


class User(AbstractUser):
    phone = models.CharField(max_length=20, blank=True, verbose_name=_("Телефон"))
    is_seller = models.BooleanField(default=False, verbose_name=_("Продавец"))

    def __str__(self) -> str:
        return self.get_username()

    class Meta:
        verbose_name = "Пользователь"
        verbose_name_plural = "Пользователи"
