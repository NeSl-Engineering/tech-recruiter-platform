from django.db import models


class Category(models.Model):
    title = models.CharField(max_length=120)

    class Meta:
        db_table = 'categories'
        verbose_name_plural = 'Категории курсов'


class Course(models.Model):
    title = models.CharField(max_length=120)
    price = models.DecimalField(
        max_digits=15,
        decimal_places=2
    )
    start_time = models.DateField(null=True, blank=True)
    end_time = models.DateField(null=True, blank=True)
    is_infinite = models.BooleanField(default=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    cover_image = models.ImageField(upload_to='courses')

    class Meta:
        db_table = 'courses'
        verbose_name_plural = 'Курсы'


class Module(models.Model):
    title = models.CharField(max_length=120)
    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
        related_name='modules'
    )
    is_demo = models.BooleanField(default=False)
    ordinal_number = models.IntegerField()

    class Meta:
        db_table = 'modules'
        verbose_name_plural = 'Модули'


class LessonVideo(models.Model):
    file = models.FileField()
    module = models.ForeignKey(Module, on_delete=models.CASCADE)
    ordinal_number = models.IntegerField()
    length = models.FloatField()

    class Meta:
        db_table = 'lesson_videos'
        verbose_name_plural = 'Видеоуроки'


class LessonMaterial(models.Model):
    file = models.FileField()
    module = models.ForeignKey(Module, on_delete=models.CASCADE)
    ordinal_number = models.IntegerField()

    class Meta:
        db_table = 'lesson_materials'
        verbose_name_plural = 'Материалы к урокам'
