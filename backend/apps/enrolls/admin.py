from django.contrib import admin

from .models import Enroll


class EnrollAdminConfig(admin.ModelAdmin):
    list_display = ['course', 'user', 'created_at']


admin.site.register(Enroll, EnrollAdminConfig)

