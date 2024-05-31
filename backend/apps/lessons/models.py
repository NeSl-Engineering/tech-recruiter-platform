from django.db import models

from courses.models import Module


class Lesson(models.Model):
    module = models.ForeignKey(
        Module,
        on_delete=models.CASCADE,
        related_name='lessons',
        verbose_name='Модуль'
    )
    video = models.FileField(upload_to='lessons', verbose_name='Видео')
    ordinal_number = models.PositiveIntegerField(verbose_name='Порядковый номер')

    class Meta:
        db_table = 'lessons'
        verbose_name = 'Урок'
        verbose_name_plural = 'Уроки'
        constraints = [
            models.UniqueConstraint(
                name='unique_order',
                fields=('module', 'ordinal_number')
            )
        ]


class Material(models.Model):
    module = models.ForeignKey(
        Module,
        on_delete=models.CASCADE,
        related_name='materials',
        verbose_name='Модуль'
    )
    file = models.FileField(upload_to='materials', verbose_name='Файл')

    class Meta:
        db_table = 'materials'
        verbose_name = 'Материал'
        verbose_name_plural = 'Материалы'

