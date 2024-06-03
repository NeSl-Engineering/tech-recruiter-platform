from typing import List
from django.db import transaction
from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from .models import LessonTest, Question, Option, Answer, Solution


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


class AnswerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Answer
        fields = ('question', 'option')


class SolutionSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True)
    user = serializers.PrimaryKeyRelatedField(
        read_only=True,
        default=serializers.CurrentUserDefault()
    )

    def save(self, **kwargs):
        """Include default for read_only `user` field"""
        kwargs["user"] = self.fields["user"].get_default()
        return super().save(**kwargs)

    def validate_answers(self, value):
        for answer in value:
            question = answer['question']
            question_id = question.lesson_test.id 
            if question_id != self.initial_data['test']:
                raise ValidationError(
                    f'В данном тесте нету вопроса с id {question_id}'
                )
            option = answer['option']
            if option.question != question:
                raise ValidationError(
                    f'У вопроса с id {question_id} нету варианта'
                    f' ответа с id {option.id}'
                )
        return value

    class Meta:
        model = Solution
        fields = '__all__'

