# Generated by Django 5.0.3 on 2024-05-15 03:45

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("courses", "0005_alter_course_category"),
    ]

    operations = [
        migrations.AddConstraint(
            model_name="module",
            constraint=models.UniqueConstraint(
                fields=("course", "ordinal_number"), name="unique_course_module_order"
            ),
        ),
    ]
