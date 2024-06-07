from django.contrib.auth import get_user_model
from django.db.models.fields import validators
from django.contrib.auth import password_validation
from rest_framework import serializers
from rest_framework.validators import UniqueValidator, ValidationError

from .models import Profile
from .otp import OTP

User = get_user_model()


class ProfileSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username')
    email = serializers.CharField(source='user.email', read_only=True)

    class Meta:
        model = Profile
        fields = [
            'username',
            'email',
            'first_name',
            'last_name',
            'birth_date',
            'profile_photo',
            'telegram_nickname'
        ]

    def validate_username(self, value):
        if User.objects.filter(username=value).exists():
            raise ValidationError(
                'пользователь с таким username уже существует'
            )
        return value

    def update(self, *args, **kwargs):
        self.instance.user.username = self.initial_data.get('username')
        self.instance.user.save()
        for field in self.Meta.fields:
            if field in ['username', 'emai']:
                continue
            setattr(
                self.instance,
                field,
                self.validated_data.get(
                    field,
                    getattr(self.instance, field)
                )
            )
        return self.instance


class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer

    class Meta:
        model = User
        fields = [
            'username',
            'email',
            'is_superuser',
            'profile'
        ]


class RegistrationSerializer(serializers.Serializer):
    username = serializers.CharField(
        validators=[
            UniqueValidator(
                queryset=User.objects.all(),
                message='User with such username already exists'
            )
        ]
    )
    email = serializers.EmailField(
        validators=[
            UniqueValidator(
                queryset=User.objects.all(),
                message='User with such email already exists'
            )
        ]
    )
    password = serializers.CharField()
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    birth_date = serializers.DateField(required=False)
    profile_photo = serializers.ImageField(required=False)
    telegram_nickname = serializers.CharField(required=False)

    def validate_password(self, value):
        try:
            password_validation.validate_password(value)
        except Exception as exc:
            raise ValidationError(str(exc))
        return value

    def create(self, validated_data):
        user = User(
            username=validated_data.get('username'),
            email=validated_data.get('email'),
        )
        user.set_password(validated_data.get('password'))
        user.save()
        profile = Profile(
            user=user,
            first_name=validated_data.get('first_name'),
            last_name=validated_data.get('last_name'),
            birth_date=validated_data.get('birth_date'),
            profile_photo = validated_data.get('profile_photo'),
            telegram_nickname=validated_data.get('telegram_nickname')
        )
        profile.save()
        OTP.send_email(user.email, profile.first_name, profile.last_name)
        return user, profile


class EmailVerificationSerializer(serializers.Serializer):
    email = serializers.EmailField()
    otp = serializers.CharField()

    def validate_email(self, value):
        user = User.objects.filter(email=value)
        if not user.exists():
            raise ValidationError('User with such email doesn\'t exist')
        if user.first().is_active:
            raise ValidationError('This email was already validated')
        return value

    def validate_otp(self, value):
        if not OTP.validate_password(self.initial_data['email'], value):
            raise ValidationError('OTP is not valid or was already expired')
        return value

    def verify_user(self):
        user = User.objects.get(email=self.validated_data['email'])
        user.is_active = True
        user.save()


class OTPResendSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate_email(self, value):
        user = User.objects.filter(email=value)
        if not user.exists():
            raise ValidationError('User with such email doesn\'t exist')
        if user.first().is_active:
            raise ValidationError('This email was already validated')
        self.user = user[0]
        return value

    def create(self, validated_data):
        OTP.send_email(
            self.user.email,
            self.user.profile.first_name,
            self.user.profile.last_name
        )


class UsernameSerializer(serializers.Serializer):
    username = serializers.CharField()


class PasswordUpdateSerializer(serializers.Serializer):
    old_password = serializers.CharField()
    new_password = serializers.CharField()

    def validate_old_password(self, value):
        if not self.context['request'].user.check_password(value):
            raise ValidationError("Старый пароль неверный")

    def save(self):
        self.context['request'].user.set_password(self.validated_data.get('new_password'))
        self.context['request'].user.save()

