from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    username = models.CharField(max_length=60, unique=True)
    password = models.TextField()
    email = models.EmailField(unique=True)
    date_joined = models.DateTimeField()
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        db_table = 'users'


class Profile(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE
    )
    first_name = models.CharField(max_length=60)
    last_name = models.CharField(max_length=60)
    profile_photo = models.ImageField(upload_to='users/profiles')
    telegram_id = models.CharField(max_length=120)

    class Meta:
        db_table = 'profiles'

