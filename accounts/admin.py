from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as DjangoUserAdmin
from django.utils import timezone

from .models import User, AuthCode, Company


@admin.register(User)
class UserAdmin(DjangoUserAdmin):
    list_display = ("username", "email", "first_name", "last_name", "city", "is_seller", "is_staff", "is_active")
    list_filter = ("is_seller", "is_staff", "is_active", "city")
    fieldsets = (
        (None, {"fields": ("username", "password")} ),
        ("Personal info", {
            "fields": ("first_name", "last_name", "middle_name", "email", "phone", "city")
        }),
        ("Partner info", {
            "fields": ("product_position", "legal_form", "passport_data"),
            "classes": ("collapse",)
        }),
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
    search_fields = ("username", "email", "phone", "first_name", "last_name", "city")
    ordering = ("id",)


@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ("name", "user", "inn", "city", "work_email", "created_at")
    list_filter = ("city", "created_at")
    search_fields = ("name", "inn", "work_email", "user__username", "user__email")
    readonly_fields = ("created_at", "updated_at")
    fieldsets = (
        (None, {"fields": ("user",)}),
        ("Информация о компании", {
            "fields": ("name", "inn", "city", "work_phone", "work_email", "bank_account")
        }),
        ("Даты", {"fields": ("created_at", "updated_at")}),
    )


@admin.register(AuthCode)
class AuthCodeAdmin(admin.ModelAdmin):
    list_display = ("email", "code", "created_at", "expires_at", "is_used", "is_valid_display")
    list_filter = ("is_used", "created_at")
    search_fields = ("email", "code")
    readonly_fields = ("code", "created_at", "expires_at")
    ordering = ("-created_at",)
    
    def is_valid_display(self, obj):
        """Отображает статус действительности кода"""
        if obj.is_used:
            return "Использован"
        if timezone.now() >= obj.expires_at:
            return "Истек"
        return "Действителен"
    is_valid_display.short_description = "Статус"
