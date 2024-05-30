# Generated by Django 5.0.3 on 2024-05-30 10:16

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("courses", "0007_remove_lessonvideo_module_delete_lessonmaterial_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="Lesson",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("video", models.FileField(upload_to="lessons", verbose_name="Видео")),
                (
                    "ordinal_number",
                    models.PositiveIntegerField(verbose_name="Порядковый номер"),
                ),
                (
                    "module",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="lessons",
                        to="courses.module",
                        verbose_name="Модуль",
                    ),
                ),
            ],
            options={
                "verbose_name": "Урок",
                "verbose_name_plural": "Уроки",
                "db_table": "lessons",
            },
        ),
        migrations.CreateModel(
            name="Material",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("file", models.FileField(upload_to="materials", verbose_name="Файл")),
                (
                    "module",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="materials",
                        to="courses.module",
                        verbose_name="Модуль",
                    ),
                ),
            ],
            options={
                "verbose_name": "Материал",
                "verbose_name_plural": "Материалы",
                "db_table": "materials",
            },
        ),
        migrations.AddConstraint(
            model_name="lesson",
            constraint=models.UniqueConstraint(
                fields=("module", "ordinal_number"), name="unique_order"
            ),
        ),
    ]