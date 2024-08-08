from django.contrib import admin
from django.utils.safestring import mark_safe

from lessons.models import Material, Lesson
from .models import Affert, Category, Course, Module, Price


class ModuleAdminInline(admin.TabularInline):
    model = Module
    extra = 0
    ordering = ['ordinal_number']


class LessonAdminInline(admin.StackedInline):
    model = Lesson
    extra = 0
    ordering = ['ordinal_number']


class PriceAdminInline(admin.TabularInline):
    model = Price
    extra = 0


class CourseAdminConfig(admin.ModelAdmin):
    list_display = ['title', 'price', 'cover']
    inlines = [ModuleAdminInline, LessonAdminInline, PriceAdminInline]

    def cover(self, instance):
        return mark_safe(f'''
        <img src="{instance.cover_image.url}" height=80 />
        ''')


class MaterialInline(admin.TabularInline):
    model = Material
    extra = 0


class ModuleAdminConfig(admin.ModelAdmin):
    list_display = ['title', 'course', 'ordinal_number']
    inlines = [MaterialInline]
    ordering = ['course', 'ordinal_number']


admin.site.register(Affert)
admin.site.register(Category)
admin.site.register(Course, CourseAdminConfig)
admin.site.register(Module, ModuleAdminConfig)

