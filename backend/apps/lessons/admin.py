from django.contrib import admin

from .models import Lesson


class LessonAdminConfig(admin.ModelAdmin):
    list_display = ['module', 'ordinal_number']


admin.site.register(Lesson, LessonAdminConfig)

