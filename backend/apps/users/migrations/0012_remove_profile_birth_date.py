# Generated by Django 5.0.3 on 2024-04-26 03:58

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("users", "0011_merge_20240426_0358"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="profile",
            name="birth_date",
        ),
    ]
