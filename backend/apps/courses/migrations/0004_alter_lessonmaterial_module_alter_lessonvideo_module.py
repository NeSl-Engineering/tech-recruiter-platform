# Generated by Django 5.0.3 on 2024-04-23 05:33

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("courses", "0003_alter_category_options_alter_course_options_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="lessonmaterial",
            name="module",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="materials",
                to="courses.module",
                verbose_name="Модуль",
            ),
        ),
        migrations.AlterField(
            model_name="lessonvideo",
            name="module",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="videos",
                to="courses.module",
                verbose_name="Модуль",
            ),
        ),
    ]