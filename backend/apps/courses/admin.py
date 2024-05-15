from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import Category, Course, LessonMaterial, LessonVideo, Module


class ModuleAdminInline(admin.TabularInline):
    model = Module
    extra = 0
    ordering = ['ordinal_number']


class CourseAdminConfig(admin.ModelAdmin):
    list_display = ['title', 'price', 'cover']
    inlines = [ModuleAdminInline, ]

    def cover(self, instance):
        return mark_safe(f'''
        <img src="{instance.cover_image.url}" height=80 />
        ''')


class LessonVideoAdminInline(admin.TabularInline):
    model = LessonVideo
    extra = 0
    ordering = ['ordinal_number']


class LessonMaterialInline(admin.TabularInline):
    model = LessonMaterial
    extra = 0
    ordering = ['ordinal_number']


class ModuleAdminConfig(admin.ModelAdmin):
    list_display = ['title', 'course', 'ordinal_number']
    inlines = [LessonVideoAdminInline, LessonMaterialInline]


class LessonDataAdminConfig(admin.ModelAdmin):
    list_display = ['module', 'ordinal_number']
    ordering = ['module', '-ordinal_number']


admin.site.register(Category)
admin.site.register(Course, CourseAdminConfig)
admin.site.register(Module, ModuleAdminConfig)
admin.site.register(LessonVideo, LessonDataAdminConfig)
admin.site.register(LessonMaterial, LessonDataAdminConfig)

