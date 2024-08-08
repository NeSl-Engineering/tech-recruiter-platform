from django.db import models
from django.db.models.fields import TextField


class Tutor(models.Model):
    full_name = models.CharField('Полное имя', max_length=120, null=False)
    description = TextField('Описание')
    image = models.ImageField('Изображение', upload_to='tutors')

    class Meta:
        db_table = 'tutors'
        verbose_name = 'Наставник'
        verbose_name_plural = 'Наставники'

    def __str__(self):
        return self.full_name

