from rest_framework import viewsets, mixins

from .models import Homework, Solution
from .serializers import HomeworkSerializer, SolutionSerializer


class HomeworkViewSet(viewsets.ReadOnlyModelViewSet):
    '''
    Запрос на получение одного домашнего задания выглядит так:
    /api/homework/{lesson_id} 
    '''
    queryset = Homework.objects.all()
    serializer_class = HomeworkSerializer
    lookup_field = 'lesson'


class HwSolutionViewSet(
    mixins.CreateModelMixin,
    viewsets.GenericViewSet
):
    serializer_class = SolutionSerializer

