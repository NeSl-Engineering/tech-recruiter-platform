from django.db import models
from django_ckeditor_5.fields import CKEditor5Field


class Tag(models.Model):
    title = models.CharField(
        max_length=40,
        unique=True,
        verbose_name='Тэг'
    )

    class Meta:
        db_table = 'post_tags'
        verbose_name = 'Тэг'
        verbose_name_plural = 'Тэги'

    def __str__(self):
        return self.title


class Post(models.Model):
    title = models.CharField(
        max_length=120,
        verbose_name='Заголовок'
    )
    content = CKEditor5Field(verbose_name='Содержание')
    image = models.ImageField(
        verbose_name='Обложка',
        upload_to='blog_posts',
        null=True
    )
    tags = models.ManyToManyField(
        Tag,
        related_name='posts',
        verbose_name='Тэги'
    )

    class Meta:
        db_table = 'posts'
        verbose_name = 'Пост'
        verbose_name_plural = 'Посты'


