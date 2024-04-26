from courses.models import LessonMaterial, LessonVideo
from django.contrib.auth import get_user_model
from django.db import models


class VideoView(models.Model):
    user = models.ForeignKey(
        get_user_model(),
        on_delete=models.CASCADE,
        related_name='video_views'
    )
    video = models.ForeignKey(
        LessonVideo,
        on_delete=models.CASCADE,
        related_name='views' 
    )
    date_seen = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'video_views'
        verbose_name_plural = 'Просмотры видеоуроков'


class MaterialView(models.Model):
    user = models.ForeignKey(
        get_user_model(),
        on_delete=models.CASCADE,
        related_name='material_views'
    )
    material = models.ForeignKey(
        LessonMaterial,
        on_delete=models.CASCADE,
        related_name='views'
    )
    date_seen = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'material_views'
        verbose_name_plural = 'Просмотры материалов по урокам'

