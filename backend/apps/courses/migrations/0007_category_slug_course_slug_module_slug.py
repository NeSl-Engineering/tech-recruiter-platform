# Generated by Django 5.0.3 on 2024-05-31 09:27

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
        ("courses", "0006_module_unique_course_module_order"),
    ]

    operations = [
        migrations.AddField(
            model_name="category",
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
        migrations.AddField(
            model_name="course",
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
        migrations.AddField(
            model_name="module",
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