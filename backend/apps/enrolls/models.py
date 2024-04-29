from django.db import models
from django.contrib.auth import get_user_model

from courses.models import Course


User = get_user_model()

class Enroll(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        related_name='enrolls',
        verbose_name='Пользователь',
        null=True,
    )
    course = models.ForeignKey(
        Course,
        on_delete=models.SET_NULL,
        related_name='enrolls',
        verbose_name='Курс',
        null=True,
    )
    created_at = models.DateTimeField(
        verbose_name='Была создана',
        auto_now_add=True
    )
   
    class Meta:
        db_table = 'enrolls'
        verbose_name = 'Запись на курс'
        verbose_name_plural = 'Записи на курсы'

    def __str__(self):
        return f'Курс: {self.course}; Пользователь: {self.user}'

