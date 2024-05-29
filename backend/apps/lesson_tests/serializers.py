from typing import List
from django.db import transaction
from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from .models import LessonTest, Question, Option, Answer


class OptionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Option
        exclude = ('is_correct',)


class QuestionSerializer(serializers.ModelSerializer):
    options = OptionSerializer(many=True)

    class Meta:
        model = Question
        fields = '__all__'


class LessonTestSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True)

    class Meta:
        model = LessonTest
        fields = '__all__'


class AnswerListSerializer(serializers.ListSerializer):

    def validate(self, data):
        print('List Validate', data, flush=True)
        return data

    def create(self, validated_data):
        answers = [Answer(**item, user=self.context['request'].user) for item in validated_data]
        return Answer.objects.bulk_create(answers)


class AnswerSerializer(serializers.Serializer):

    class Meta:
        model = Answer
        list_serializer_class = AnswerListSerializer
 
