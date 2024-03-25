from django.db import models


class Category(models.Model):
    title = models.CharField(max_length=120)

    class Meta:
        db_table = 'categories'


class Course(models.Model):
    title = models.CharField(max_length=120)
    price = models.DecimalField(decimal_places=2)
    start_time = models.DateField(null=True)
    end_time = models.DateField(null=True)
    is_infinite = models.BooleanField(default=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    cover_image = models.ImageField(upload_to='courses')

    class Meta:
        db_table = 'courses'


class Module(models.Model):
    title = models.CharField(max_length=120)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    is_demo = models.BooleanField(default=False)
    ordinal_number = models.IntegerField()

    class Meta:
        db_table = 'modules'


class LessonVideo(models.Model):
    file = models.FileField()
    module = models.ForeignKey(Module, on_delete=models.CASCADE)
    ordinal_number = models.IntegerField()
    length = models.FloatField()

    class Meta:
        db_table = 'lesson_videos'


class LessonMaterial(models.Model):
    file = models.FileField()
    module = models.ForeignKey(Module, on_delete=models.CASCADE)
    ordinal_number = models.IntegerField()

    class Meta:
        db_table = 'lesson_materials'

