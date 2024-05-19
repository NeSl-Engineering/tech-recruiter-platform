from rest_framework import serializers

from .models import (
    Category,
    Course,
    Module,
    LessonVideo,
    LessonMaterial
)


class LessonVideoSerializer(serializers.ModelSerializer):

    class Meta:
        model = LessonVideo
        exclude = ('module',)


class LessonMaterialSerializer(serializers.ModelSerializer):

    class Meta:
        model = LessonMaterial
        exclude = ('module',)


class ModuleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Module
        fields = '__all__'


class ClientModuleSerializer(serializers.ModelSerializer):
    videos = LessonVideoSerializer(many=True)
    materials = LessonMaterialSerializer(many=True)
    is_seen = serializers.BooleanField()
    is_open = serializers.BooleanField()
                                                    
    class Meta:
        model = Module
        fields = [
            'title',
            'is_demo',
            'ordinal_number',
            'is_seen',
            'is_open',
            'videos',
            'materials',
        ]


class CourseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Course
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    courses = CourseSerializer(many=True)

    class Meta:
        model = Category
        fields = ['id', 'title', 'courses']

