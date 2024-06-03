from rest_framework import serializers

from lessons.serializers import MaterialSerializer
from .models import (
    Category,
    Course,
    Module,
)


class ModuleSerializer(serializers.ModelSerializer):
    materials = MaterialSerializer(many=True)

    class Meta:
        model = Module
        fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):
    is_paid = serializers.BooleanField(read_only=True)

    class Meta:
        model = Course
        fields = (
            'id',
            'title',
            'price',
            'start_time',
            'end_time',
            'is_infinite',
            'cover_image',
            'category',
            'is_paid',
            'slug'
        )


class CategorySerializer(serializers.ModelSerializer):
    courses = CourseSerializer(many=True)

    class Meta:
        model = Category
        fields = ['id', 'title', 'courses', 'slug']

