# Generated by Django 5.0.3 on 2024-05-30 11:50

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("lessons", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="lesson",
            name="title",
            field=models.TextField(max_length=120, null=True),
        ),
    ]