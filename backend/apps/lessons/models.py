from autoslug import AutoSlugField
from django.db import models
from slugify import slugify

from courses.models import Course, Module


class Lesson(models.Model):
    module = models.ForeignKey(
        Module,
        on_delete=models.CASCADE,
        related_name='lessons',
        verbose_name='Модуль',
        null=True
    )
    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
        related_name='lessons',
        verbose_name='Курс',
        null=True
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

    def __str__(self):
        if self.module:
            return f'{self.module}: {self.ordinal_number}'
        return f'{self.course}: {self.ordinal_number}'


class Material(models.Model):
    module = models.ForeignKey(
        Module,
        on_delete=models.CASCADE,
        related_name='materials',
        verbose_name='Модуль'
    )
    file = models.FileField(
        upload_to='materials',
        verbose_name='Файл',
        null=True,
        blank=True
    )
    link = models.URLField(verbose_name='Ссылка', null=True, blank=True)

    class Meta:
        db_table = 'materials'
        verbose_name = 'Материал'
        verbose_name_plural = 'Материалы'

