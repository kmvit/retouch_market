from django.contrib import admin


admin.site.site_header = "Администрирование HaronMarket"
admin.site.site_title = "HaronMarket"
admin.site.index_title = "Администрирование HaronMarket"

from django.contrib import admin
from .models import SiteSettings, StaticPage


@admin.register(SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):
    list_display = ("phone", "email",)

    def has_add_permission(self, request):
        # Разрешаем создать запись только если её ещё нет
        if SiteSettings.objects.exists():
            return False
        return super().has_add_permission(request)


@admin.register(StaticPage)
class StaticPageAdmin(admin.ModelAdmin):
    list_display = ("title", "slug", "is_active", "sort_order")
    list_filter = ("is_active",)
    search_fields = ("title", "slug", "content")
    prepopulated_fields = {"slug": ("title",)}
    ordering = ("sort_order", "title")
