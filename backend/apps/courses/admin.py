from django.contrib import admin

from .models import Category, Course, LessonMaterial, LessonVideo, Module

admin.site.register(Category)
admin.site.register(Course)
admin.site.register(Module)
admin.site.register(LessonVideo)
admin.site.register(LessonMaterial)

