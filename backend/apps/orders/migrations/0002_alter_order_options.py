# Generated by Django 5.0.3 on 2024-05-19 13:23

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("orders", "0001_initial"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="order",
            options={"verbose_name": "Заказ", "verbose_name_plural": "Заказы"},
        ),
    ]