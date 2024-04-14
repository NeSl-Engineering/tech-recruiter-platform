from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()

    class Meta:
        db_table = 'posts'
        verbose_name_plural = 'Посты'

