from django.db import models
from django.contrib.auth import get_user_model

from courses.models import LessonVideo, LessonMaterial


class VideoView(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    video = models.ForeignKey(LessonVideo, on_delete=models.CASCADE)
    date_seen = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'video_views'


class MaterialView(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    material = models.ForeignKey(LessonMaterial, on_delete=models.CASCADE)
    date_seen = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'material_views'

