# Generated by Django 4.2.1 on 2024-03-25 12:07

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("users", "0001_initial"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="user",
            options={},
        ),
        migrations.AlterModelTable(
            name="profile",
            table="profiles",
        ),
        migrations.AlterModelTable(
            name="user",
            table="users",
        ),
    ]
