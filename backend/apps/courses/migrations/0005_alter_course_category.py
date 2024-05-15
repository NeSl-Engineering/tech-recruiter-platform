# Generated by Django 5.0.3 on 2024-05-10 17:21

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("courses", "0004_alter_lessonmaterial_module_alter_lessonvideo_module"),
    ]

    operations = [
        migrations.AlterField(
            model_name="course",
            name="category",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="courses",
                to="courses.category",
                verbose_name="Категория",
            ),
        ),
    ]