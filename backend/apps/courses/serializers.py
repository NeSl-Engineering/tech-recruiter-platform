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


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):
    modules = ModuleSerializer(many=True)
    
    class Meta:
        model = Course
        fields = '__all__'


class ClientCourseSerializer(serializers.ModelSerializer):
    modules = ClientModuleSerializer(many=True)

    class Meta:
        model = Course
        fields = '__all__'

