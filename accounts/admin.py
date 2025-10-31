from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as DjangoUserAdmin

from .models import User


@admin.register(User)
class UserAdmin(DjangoUserAdmin):
    list_display = ("username", "email", "is_seller", "is_staff", "is_active")
    list_filter = ("is_seller", "is_staff", "is_active")
    fieldsets = (
        (None, {"fields": ("username", "password")} ),
        ("Personal info", {"fields": ("first_name", "last_name", "email", "phone")} ),
        ("Permissions", {"fields": ("is_active", "is_staff", "is_superuser", "is_seller", "groups", "user_permissions")} ),
        ("Important dates", {"fields": ("last_login", "date_joined")} ),
    )
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": ("username", "email", "phone", "password1", "password2", "is_seller"),
            },
        ),
    )
    search_fields = ("username", "email", "phone")
    ordering = ("id",)
