from django.db import models
from django.contrib.auth import get_user_model

from lessons.models import Lesson

User = get_user_model()


class LessonTest(models.Model):
    lesson = models.OneToOneField(
        Lesson,
        on_delete=models.CASCADE,
        related_name='test',
        verbose_name='Урок'
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


class Solution(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        verbose_name='Пользователь',
        related_name='solutions'
    )
    test = models.ForeignKey(
        LessonTest,
        on_delete=models.CASCADE,
        related_name='solutions',
        verbose_name='Тест'
    )

    class Meta:
        db_table = 'test_solutions'
        verbose_name = 'Решение теста от пользователя'
        verbose_name = 'Решения тестов от пользователя'
        constraints = [
            models.UniqueConstraint(
                fields=('user', 'test'),
                name='unique_user_test'
            )
        ]


class Answer(models.Model):
    question = models.ForeignKey(
        Question,
        on_delete=models.CASCADE,
        verbose_name='Вопрос',
        related_name='answers'
    )
    option = models.ForeignKey(
        Option,
        on_delete=models.CASCADE,
        verbose_name='Вариант',
        related_name='answers'
    )
    solution = models.ForeignKey(
        Solution,
        on_delete=models.CASCADE,
        verbose_name='Решение',
        related_name='answers'
    )

    class Meta:
        db_table = 'test_answers'
        verbose_name = 'Ответ пользователя'
        verbose_name_plural = 'Ответы пользователей'

