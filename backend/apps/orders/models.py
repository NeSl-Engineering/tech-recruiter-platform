import uuid

from django.db import models
from django.contrib.auth import get_user_model

from courses.models import Course

User = get_user_model()

STATUSES = {
    'pending': 'Ожидается',
    'paid': 'Оплачено',
    'canceled': 'Отменено'
}


class Order(models.Model):
    id = models.UUIDField(
        primary_key=True,
        serialize=False,
        max_length=36,
        default=uuid.uuid4
    )
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        verbose_name='Пользователь'
    )
    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
        verbose_name='Курс'
    )
    status = models.CharField(
        verbose_name='Статус',
        max_length=16,
        choices=STATUSES
    )
    payment_id = models.CharField(
        verbose_name='Id платежа',
        max_length=60,
        null=True,
        blank=True
    )
    payment_url = models.URLField(
        verbose_name='URL платежа',
        null=True,
        blank=True
    )
    created_at = models.DateTimeField(
        verbose_name='Создан',
        auto_now_add=True
    )
    updated_at = models.DateTimeField(
        verbose_name='Обновлен',
        auto_now=True
    )

    class Meta:
        db_table = 'orders'
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'

    def __str__(self):
        return f'Заказ: {self.id}'

