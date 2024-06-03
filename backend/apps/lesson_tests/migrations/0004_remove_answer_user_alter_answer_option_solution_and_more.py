# Generated by Django 5.0.3 on 2024-06-02 14:46

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("lesson_tests", "0003_lessontest_lesson"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RemoveField(
            model_name="answer",
            name="user",
        ),
        migrations.AlterField(
            model_name="answer",
            name="option",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="answers",
                to="lesson_tests.option",
                verbose_name="Вариант",
            ),
        ),
        migrations.CreateModel(
            name="Solution",
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
                (
                    "test",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="solutions",
                        to="lesson_tests.lessontest",
                        verbose_name="Тест",
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="solutions",
                        to=settings.AUTH_USER_MODEL,
                        verbose_name="Пользователь",
                    ),
                ),
            ],
            options={
                "verbose_name": "Решения тестов от пользователя",
                "db_table": "test_solutions",
            },
        ),
        migrations.AddField(
            model_name="answer",
            name="solution",
            field=models.ForeignKey(
                default=1,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="answers",
                to="lesson_tests.solution",
                verbose_name="Решение",
            ),
            preserve_default=False,
        ),
    ]
