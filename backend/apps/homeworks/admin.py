from django.contrib import admin

from .models import Homework, Solution


class HomeworkAdminConfig(admin.ModelAdmin):
    list_display = ['id', 'lesson']


class SolutionAdminConfig(admin.ModelAdmin):
    list_display = ['id', 'homework', 'user']


admin.site.register(Homework, HomeworkAdminConfig)
admin.site.register(Solution, SolutionAdminConfig)

