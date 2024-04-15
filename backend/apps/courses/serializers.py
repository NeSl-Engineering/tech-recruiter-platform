from rest_framework import serializers

from .models import (
    Category,
    Course,
    Module,
    LessonVideo,
    LessonMaterial
)


class ModuleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Module
        exclude = ('course',)


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):
    modules = ModuleSerializer(many=True)
    
    class Meta:
        model = Course
        fields = '__all__'

