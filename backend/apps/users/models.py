from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    first_name = None
    last_name = None
    username = models.CharField(
        max_length=60,
        unique=True,
        verbose_name='Имя пользователя'
    )
    password = models.TextField(verbose_name='Пароль')
    email = models.EmailField(unique=True, verbose_name='Почта')
    date_joined = models.DateTimeField(
        auto_now_add=True,
        verbose_name='Дата регистрации'
    )
    is_superuser = models.BooleanField(
        default=False,
        verbose_name='Администратор'
    )
    is_active = models.BooleanField(
        default=False,
        verbose_name='Верифицировал почту'
    )
    is_staff = models.BooleanField(
        default=False,
        verbose_name='Сотрудник'
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    class Meta:
        db_table = 'users'
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
    
    def __str__(self):
        return self.email

class Profile(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        verbose_name='Пользователь'
    )
    first_name = models.CharField(
        max_length=60,
        verbose_name='Имя'
    )
    last_name = models.CharField(
        max_length=60,
        verbose_name='Фамилия'
    )
    birth_date = models.DateField(
        null=True,
        blank=True,
        verbose_name='Дата рождения',
    )
    profile_photo = models.ImageField(
        upload_to='users/profiles',
        null=True,
        blank=True,
        verbose_name='Фото профиля',
        default='default_profile.png'
    )
    telegram_nickname = models.CharField(
        max_length=120,
        null=True,
        blank=True,
        verbose_name='Ник в телеграм'
    )

    class Meta:
        db_table = 'profiles'
        verbose_name = 'Профиль'
        verbose_name_plural = 'Профили'
    
    def __str__(self):
        return f'{self.user}: {self.first_name} {self.last_name}'


