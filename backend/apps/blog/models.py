from django.db import models
from django_ckeditor_5.fields import CKEditor5Field


class Post(models.Model):
    title = models.CharField(
        max_length=120,
        verbose_name='Заголовок'
    )
    content = CKEditor5Field(verbose_name='Содержание')

    class Meta:
        db_table = 'posts'
        verbose_name = 'Пост'
        verbose_name_plural = 'Посты'

