# Generated by Django 5.0.3 on 2024-06-01 12:57

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("blog", "0004_alter_post_content"),
    ]

    operations = [
        migrations.CreateModel(
            name="Tag",
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
                    "title",
                    models.CharField(max_length=40, unique=True, verbose_name="Тэг"),
                ),
            ],
            options={
                "db_table": "post_tags",
            },
        ),
        migrations.AddField(
            model_name="post",
            name="tags",
            field=models.ManyToManyField(
                related_name="posts", to="blog.tag", verbose_name="Тэги"
            ),
        ),
    ]
