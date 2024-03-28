from django.contrib.auth import get_user_model
from rest_framework import serializers

from .models import Profile


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
        model = get_user_model()
        fields = [
            'username',
            'email',
            'is_superuser',
            'profile'
        ]

