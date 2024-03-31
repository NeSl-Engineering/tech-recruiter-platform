from django.contrib.auth import get_user_model
from rest_framework import serializers

from .models import Profile

User = get_user_model()


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = [
            'first_name',
            'last_name',
            'profile_photo',
            'telegram_id'
        ]


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
    username = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField()
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    profile_photo = serializers.ImageField(required=False)
    telegram_nickname = serializers.CharField(required=False)

    def validate(self, attrs):
        print(attrs)
        return attrs

    def create(self, validated_data):
        print(validated_data)
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
            profile_photo = validated_data.get('profile_photo'),
            telegram_nickname=validated_data.get('telegram_nickname')
        )
        profile.save()
        return user, profile

