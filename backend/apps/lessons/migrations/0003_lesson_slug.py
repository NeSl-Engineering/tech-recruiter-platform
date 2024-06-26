# Generated by Django 5.0.3 on 2024-05-31 10:02

import autoslug.fields
from slugify import slugify
from django.db import migrations


def migrate_slug_forward(apps, schema_editor):
    Category = apps.get_model('courses', 'Category')
    Course = apps.get_model('courses', 'Course')
    Module = apps.get_model('courses', 'Module')
    for model in [Category, Course, Module]:
        for instance in model.objects.all():
            instance.save() # Will trigger slug update


def migrate_slug_backward(apps, schema_editor):
    pass


class Migration(migrations.Migration):
    dependencies = [
        ("lessons", "0002_lesson_title"),
    ]

    operations = [
        migrations.AddField(
            model_name="lesson",
            name="slug",
            field=autoslug.fields.AutoSlugField(
                blank=True,
                default=None,
                editable=False,
                null=True,
                populate_from="title",
                slugify=slugify,
            ),
        ),
        migrations.RunPython(migrate_slug_forward, migrate_slug_backward),
    ]

