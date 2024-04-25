from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import Category, Course, LessonMaterial, LessonVideo, Module


class CourseAdminConfig(admin.ModelAdmin):
    list_display = ['title', 'price', 'cover']

    def cover(self, instance):
        return mark_safe(f'''
        <img src="{instance.cover_image.url}" height=80 />
        ''')


admin.site.register(Category)
admin.site.register(Course, CourseAdminConfig)
admin.site.register(Module)
admin.site.register(LessonVideo)
admin.site.register(LessonMaterial)

