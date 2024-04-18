from django.db import models


class Post(models.Model):
    title = models.CharField(
        max_length=120,
        verbose_name='Заголовок'
    )
    content = models.TextField(verbose_name='Содержание')

    class Meta:
        db_table = 'posts'
        verbose_name = 'Пост'
        verbose_name_plural = 'Посты'

