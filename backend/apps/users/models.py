from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    username = models.CharField(max_length=60, unique=True)
    password = models.TextField()
    email = models.EmailField(unique=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    class Meta:
        db_table = 'users'


class Profile(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE
    )
    first_name = models.CharField(max_length=60)
    last_name = models.CharField(max_length=60)
    profile_photo = models.ImageField(
        upload_to='users/profiles',
        null=True,
        blank=True
    )
    telegram_nickname = models.CharField(
        max_length=120,
        null=True,
        blank=True
    )

    class Meta:
        db_table = 'profiles'

