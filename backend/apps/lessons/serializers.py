from rest_framework import serializers

from .models import Lesson, Material


class LessonSerializer(serializers.ModelSerializer):

    class Meta:
        model = Lesson
        fields = '__all__'


class MaterialSerializer(serializers.ModelSerializer):

    class Meta:
        model = Lesson
        fields = '__all__'

