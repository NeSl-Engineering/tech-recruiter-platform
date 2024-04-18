# Generated by Django 5.0.3 on 2024-04-17 05:48

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("courses", "0002_alter_category_options_alter_course_end_time_and_more"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="category",
            options={"verbose_name_plural": "Категории курсов"},
        ),
        migrations.AlterModelOptions(
            name="course",
            options={"verbose_name": "Курс", "verbose_name_plural": "Курсы"},
        ),
        migrations.AlterModelOptions(
            name="lessonmaterial",
            options={
                "verbose_name": "Материал к урокам",
                "verbose_name_plural": "Материалы к урокам",
            },
        ),
        migrations.AlterModelOptions(
            name="lessonvideo",
            options={"verbose_name": "Видеоурок", "verbose_name_plural": "Видеоуроки"},
        ),
        migrations.AlterModelOptions(
            name="module",
            options={"verbose_name": "Модуль", "verbose_name_plural": "Модули"},
        ),
        migrations.AlterField(
            model_name="course",
            name="category",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                to="courses.category",
                verbose_name="Категория",
            ),
        ),
        migrations.AlterField(
            model_name="course",
            name="cover_image",
            field=models.ImageField(upload_to="courses", verbose_name="Обложка"),
        ),
        migrations.AlterField(
            model_name="course",
            name="end_time",
            field=models.DateField(
                blank=True, null=True, verbose_name="Дата окончания"
            ),
        ),
        migrations.AlterField(
            model_name="course",
            name="is_infinite",
            field=models.BooleanField(
                default=True, verbose_name="Не имеет длительности"
            ),
        ),
        migrations.AlterField(
            model_name="course",
            name="price",
            field=models.DecimalField(
                decimal_places=2, max_digits=15, verbose_name="Цена"
            ),
        ),
        migrations.AlterField(
            model_name="course",
            name="start_time",
            field=models.DateField(blank=True, null=True, verbose_name="Дата начала"),
        ),
        migrations.AlterField(
            model_name="course",
            name="title",
            field=models.CharField(max_length=120, verbose_name="Название Курса"),
        ),
        migrations.AlterField(
            model_name="lessonmaterial",
            name="file",
            field=models.FileField(upload_to="", verbose_name="Файл"),
        ),
        migrations.AlterField(
            model_name="lessonmaterial",
            name="module",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                to="courses.module",
                verbose_name="Модуль",
            ),
        ),
        migrations.AlterField(
            model_name="lessonmaterial",
            name="ordinal_number",
            field=models.IntegerField(verbose_name="Порядковый номер"),
        ),
        migrations.AlterField(
            model_name="lessonvideo",
            name="file",
            field=models.FileField(upload_to="", verbose_name="Файл"),
        ),
        migrations.AlterField(
            model_name="lessonvideo",
            name="length",
            field=models.FloatField(verbose_name="Длительность"),
        ),
        migrations.AlterField(
            model_name="lessonvideo",
            name="module",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                to="courses.module",
                verbose_name="Модуль",
            ),
        ),
        migrations.AlterField(
            model_name="lessonvideo",
            name="ordinal_number",
            field=models.IntegerField(verbose_name="Порядковый номер"),
        ),
        migrations.AlterField(
            model_name="module",
            name="course",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="modules",
                to="courses.course",
                verbose_name="Курс",
            ),
        ),
        migrations.AlterField(
            model_name="module",
            name="is_demo",
            field=models.BooleanField(default=False, verbose_name="Демо"),
        ),
        migrations.AlterField(
            model_name="module",
            name="ordinal_number",
            field=models.IntegerField(verbose_name="Порядковый номер"),
        ),
        migrations.AlterField(
            model_name="module",
            name="title",
            field=models.CharField(max_length=120, verbose_name="Название"),
        ),
    ]
