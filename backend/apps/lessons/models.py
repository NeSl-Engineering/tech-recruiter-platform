from autoslug import AutoSlugField
from django.db import models
from slugify import slugify

from courses.models import Module


class Lesson(models.Model):
    module = models.ForeignKey(
        Module,
        on_delete=models.CASCADE,
        related_name='lessons',
        verbose_name='Модуль'
    )
    title = models.TextField(max_length=120, null=True)
    video = models.FileField(upload_to='lessons', verbose_name='Видео')
    ordinal_number = models.PositiveIntegerField(verbose_name='Порядковый номер')
    slug = AutoSlugField(
        populate_from='title',
        slugify=slugify,
        null=True,
        blank=True,
        default=None
    )

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

