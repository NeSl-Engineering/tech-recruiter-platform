from autoslug import AutoSlugField
from django.db import models
from slugify import slugify


class Category(models.Model):
    title = models.CharField(max_length=120)
    slug = AutoSlugField(
        populate_from='title',
        slugify=slugify,
        null=True,
        blank=True,
        default=None
    )

    class Meta:
        db_table = 'categories'
        verbose_name_plural = 'Категории курсов'

    def __str__(self):
        return self.title


class Course(models.Model):
    title = models.CharField(max_length=120, verbose_name='Название Курса')
    price = models.DecimalField(
        max_digits=15,
        decimal_places=2,
        verbose_name='Цена'
    )
    start_time = models.DateField(
        null=True,
        blank=True,
        verbose_name='Дата начала'
    )
    end_time = models.DateField(
        null=True,
        blank=True,
        verbose_name='Дата окончания'
    )
    is_infinite = models.BooleanField(
        default=True,
        verbose_name='Не имеет длительности'
    )
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        verbose_name='Категория',
        related_name='courses'
    )
    cover_image = models.ImageField(
        upload_to='courses',
        verbose_name='Обложка'
    )
    slug = AutoSlugField(
        populate_from='title',
        slugify=slugify,
        null=True,
        blank=True,
        default=None
    )

    class Meta:
        db_table = 'courses'
        verbose_name = 'Курс'
        verbose_name_plural = 'Курсы'

    def __str__(self):
        return self.title


class Module(models.Model):
    title = models.CharField(
        max_length=120,
        verbose_name='Название'
    )
    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
        related_name='modules',
        verbose_name='Курс'
    )
    is_demo = models.BooleanField(
        default=False,
        verbose_name='Демо'
    )
    ordinal_number = models.IntegerField(
        verbose_name='Порядковый номер'
    )
    slug = AutoSlugField(
        populate_from='title',
        slugify=slugify,
        null=True,
        blank=True,
        default=None
    )

    class Meta:
        db_table = 'modules'
        verbose_name = 'Модуль'
        verbose_name_plural = 'Модули'
        constraints = [
            models.UniqueConstraint(
                fields=['course', 'ordinal_number'],
                name='unique_course_module_order'
            )
        ]


class LessonVideo(models.Model):
    file = models.FileField(verbose_name='Файл')
    module = models.ForeignKey(
        Module,
        on_delete=models.CASCADE,
        related_name='videos',
        verbose_name='Модуль'
    )
    ordinal_number = models.IntegerField(verbose_name='Порядковый номер')
    length = models.FloatField(verbose_name='Длительность')

    class Meta:
        db_table = 'lesson_videos'
        verbose_name = 'Видеоурок'
        verbose_name_plural = 'Видеоуроки'


class LessonMaterial(models.Model):
    file = models.FileField(verbose_name='Файл')
    module = models.ForeignKey(
        Module,
        on_delete=models.CASCADE,
        related_name='materials',
        verbose_name='Модуль'
    )
    ordinal_number = models.IntegerField(verbose_name='Порядковый номер')

    class Meta:
        db_table = 'lesson_materials'
        verbose_name = 'Материал к урокам'
        verbose_name_plural = 'Материалы к урокам'

