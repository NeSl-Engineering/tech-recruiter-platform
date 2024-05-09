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
    videos = LessonVideoSerializer(many=True)
    materials = LessonMaterialSerializer(many=True)

    class Meta:
        model = Module
        exclude = ('course',)


class CourseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Course
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    courses = CourseSerializer(many=True)

    class Meta:
        model = Category
        fields = ['id', 'title', 'courses']


class CourseWithModulesSerializer(serializers.ModelSerializer):
    modules = ModuleSerializer(many=True)
    
    class Meta:
        model = Course
        fields = '__all__'

