from rest_framework import serializers

from lessons.serializers import MaterialSerializer
from tutors.serializers import TutorSerializer
from .models import (
    Category,
    Course,
    Module,
)


class ModuleSerializer(serializers.ModelSerializer):
    materials = MaterialSerializer(many=True)
    tutor = TutorSerializer()

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
            'description',
            'block1_title',
            'block1_subtitle1',
            'block1_content1',
            'block1_subtitle2',
            'block1_content2',
            'block1_subtitle3',
            'block1_content3',
            'block1_subtitle4',
            'block1_content4',
            'block2_title',
            'block2_subtitle1',
            'block2_content1',
            'block2_subtitle2',
            'block2_content2',
            'block2_subtitle3',
            'block2_content3',
            'block2_subtitle4',
            'block2_content4',
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

