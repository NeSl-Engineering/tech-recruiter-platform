from django.db.models import query
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework import viewsets, permissions, status, mixins
from rest_framework.response import Response

from .models import LessonTest, Answer
from .serializers import LessonTestSerializer, SolutionSerializer


class LessonTestViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = LessonTestSerializer

    def get_queryset(self):
        queryset = LessonTest.objects \
            .prefetch_related('questions') \
            .prefetch_related('questions__options') \
            .all()
        lesson = self.request.GET.get('lesson')
        try:
            lesson = int(lesson)
        except TypeError:
            pass
        else:
            queryset = queryset.filter(lesson=lesson)
        return queryset

    @swagger_auto_schema(
        manual_parameters=[
            openapi.Parameter('lesson', 'query',  type=openapi.TYPE_STRING)
        ]
    )
    def list(self, *args, **kwargs):
        return super().list(*args, **kwargs)


class SolutionViewSet(viewsets.GenericViewSet):
    serializer_class = SolutionSerializer

    def create(self, request):
        print(request.data)
        serializer = SolutionSerializer(
            data=request.data,
            context={'request': request}
        )
        print(serializer.initial_data, flush=True)
        print(serializer.is_valid())
        print(serializer.errors)
        print(serializer.data, flush=True)
        return Response()

