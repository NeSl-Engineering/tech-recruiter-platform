import datetime

from autoslug import AutoSlugField
from django_ckeditor_5.fields import CKEditor5Field
from django.db import models
from slugify import slugify

from tutors.models import Tutor


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


class Affert(models.Model):
    content = CKEditor5Field(verbose_name='Содержание')

    class Meta:
        db_table = 'afferts'
        verbose_name_plural = 'оферты'
        verbose_name = 'оферта'

    def __str__(self):
        return f'Оферта Nº{self.id}'


class Course(models.Model):
    title = models.CharField(max_length=120, verbose_name='Название Курса')
    description = models.TextField('Описание', null=True, blank=True)
    # I do know this is shit code. We did not have time to think on it.
    # The changes were made after the main structure was already built.

    # The fields below are used in courses main page. Those are required by the frontend.
    block1_title = models.CharField('Заголовок к первому блоку', max_length=64, null=True, blank=True)

    block1_subtitle1 = models.CharField('Подзаголовок к первому блоку первому отделу', max_length=64, null=True, blank=True)
    block1_content1 = models.TextField('Контент к первому блоку первому отделу', null=True, blank=True)

    block1_subtitle2 = models.CharField('Подзаголовок к первому блоку второму отделу', max_length=64, null=True, blank=True)
    block1_content2 = models.TextField('Контент к первому блоку второму отделу', null=True, blank=True)

    block1_subtitle3 = models.CharField('Подзаголовок к первому блоку третьему отделу', max_length=64, null=True, blank=True)
    block1_content3 = models.TextField('Контент к первому блоку третьему отделу', null=True, blank=True)

    block1_subtitle4 = models.CharField('Подзаголовок к первому блоку четвертому отделу', max_length=64, null=True, blank=True)
    block1_content4 = models.TextField('Контент к первому блоку четвертому отделу', null=True, blank=True)


    block2_title = models.CharField('Заголовок ко второму блоку', max_length=64, null=True, blank=True)

    block2_subtitle1 = models.CharField('Заголовок ко второму блоку первому отделу', max_length=64, null=True, blank=True)
    block2_content1 = models.TextField('Контент к первому блоку первому отделу', null=True, blank=True)

    block2_subtitle2 = models.CharField('Заголовок ко второму блоку второму отделу', max_length=64, null=True, blank=True)
    block2_content2 = models.TextField('Контент к второму блоку второму отделу', null=True, blank=True)

    block2_subtitle3 = models.CharField('Заголовок ко второму блоку третьему отделу', max_length=64, null=True, blank=True)
    block2_content3 = models.TextField('Контент к второму блоку третьему отделу', null=True, blank=True)

    block2_subtitle4 = models.CharField('Заголовок ко второму блоку четвертому отделу', max_length=64, null=True, blank=True)
    block2_content4 = models.TextField('Контент к второму блоку четвертому отделу', null=True, blank=True)

    # Default price
    pricex = models.DecimalField(
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
    affert = models.ForeignKey(
        Affert,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        verbose_name='Оферта'
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

    @property
    def price(self):
        now = datetime.datetime.now()
        price_objects = self.prices.filter(start_time__lte=now, end_time__gte=now)
        if price_objects.exists():
            return price_objects.first().price
        return self.pricex


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
    tutor = models.ForeignKey(
        Tutor,
        on_delete=models.SET_NULL,
        null=True,
        verbose_name='Автор',
        related_name='modules'
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
        ordering = ['course', 'ordinal_number']
        constraints = [
            models.UniqueConstraint(
                fields=['course', 'ordinal_number'],
                name='unique_course_module_order'
            )
        ]

    def __str__(self):
        return f'{self.course}: {self.title}'


class Price(models.Model):
    '''
    Course prices are diferent in specific date ranges.
    This model represents price for a specific course in a given date range.
    '''
    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
        verbose_name='Курс',
        related_name='prices'
    )
    price = models.DecimalField(
        max_digits=15,
        decimal_places=2,
        verbose_name='Цена'
    )
    start_time = models.DateTimeField(
        null=True,
        blank=True,
        verbose_name='Дата начала'
    )
    end_time = models.DateTimeField(
        null=True,
        blank=True,
        verbose_name='Дата окончания'
    )

    class Meta:
        db_table = 'course_prices'
        verbose_name_plural = 'Цены'
        verbose_name = 'Цена'

