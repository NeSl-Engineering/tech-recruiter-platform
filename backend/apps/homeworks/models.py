from django.db import models
from django.contrib.auth import get_user_model
from django_ckeditor_5.fields import CKEditor5Field

from lessons.models import Lesson

User = get_user_model()


class Homework(models.Model):
    lesson = models.OneToOneField(
        Lesson,
        on_delete=models.CASCADE,
        related_name='homework',
        verbose_name='Урок'
    )
    content = CKEditor5Field(verbose_name='Содержание')
    link = models.URLField(verbose_name='Ссылка')
    file = models.FileField(upload_to='homeworks', verbose_name='Файл')

    class Meta:
        db_table = 'homeworks'
        verbose_name_plural = 'Домашние задания'


class Solution(models.Model):
    homework = models.ForeignKey(
        Homework,
        on_delete=models.CASCADE,
        related_name='solutions',
        verbose_name='Домашнее задание'
    )
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='hw_solutions',
        verbose_name='Пользователь'
    )
    content = CKEditor5Field(verbose_name='Содержание')
    link = models.URLField(verbose_name='Ссылка')
    file = models.FileField(upload_to='homeworks', verbose_name='Файл')

    class Meta:
        db_table = 'solutions'
        verbose_name_plural = 'Ответы к домашним заданиям'

