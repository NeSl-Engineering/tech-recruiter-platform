from django.db import models
from django.contrib.auth import get_user_model

from courses.models import Module

User = get_user_model()


class LessonTest(models.Model):
    module = models.OneToOneField(
        Module,
        on_delete=models.CASCADE,
        verbose_name='Модуль',
        related_name='test'
    )

    class Meta:
        db_table = 'lesson_tests'
        verbose_name = 'Тест к уроку'
        verbose_name_plural = 'Тесты к урокам'


class Question(models.Model):
    lesson_test = models.ForeignKey(
        LessonTest,
        on_delete=models.CASCADE,
        verbose_name='Тест',
        related_name='questions'
    )
    content = models.CharField(verbose_name='Вопрос', max_length=120)
    image = models.ImageField(
        verbose_name='Приложенная картинка',
        upload_to='courses/questions',
        null=True,
        blank=True
    )

    class Meta:
        db_table = 'test_questions'
        verbose_name = 'Вопрос к тесту'
        verbose_name_plural = 'Вопросы к тестам'


class Option(models.Model):
    question = models.ForeignKey(
        Question,
        on_delete=models.CASCADE,
        verbose_name='Вопрос',
        related_name='options'
    )
    content = models.CharField(verbose_name='Вариант ответа', max_length=120)
    is_correct = models.BooleanField(verbose_name='Правильный')

    class Meta:
        db_table = 'test_options'
        verbose_name = 'Вариант ответа'
        verbose_name_plural = 'Варианты ответов'


class Answer(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        verbose_name='Пользователь',
        related_name='answers'
    )
    question = models.ForeignKey(
        Question,
        on_delete=models.CASCADE,
        verbose_name='Вопрос',
        related_name='answers'
    )
    option = models.ForeignKey(
        Option,
        on_delete=models.CASCADE,
        verbose_name='',
        related_name='answers'
    )

    class Meta:
        db_table = 'test_answers'
        verbose_name = 'Ответ пользователя'
        verbose_name_plural = 'Ответы пользователей'

