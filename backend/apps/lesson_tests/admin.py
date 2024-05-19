from django.contrib import admin
import nested_admin

from .models import LessonTest, Question, Answer, Option


class OptionInline(nested_admin.NestedTabularInline):
    model = Option
    fk_name = 'question'
    extra = 1


class QuestionInline(nested_admin.NestedStackedInline):
    model = Question
    fk_name = 'lesson_test'
    extra = 1
    inlines = [OptionInline]


class LessonTestAdminConfig(nested_admin.NestedModelAdmin):
    list_display = ['module']
    inlines = [QuestionInline]


admin.site.register(LessonTest, LessonTestAdminConfig)

