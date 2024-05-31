from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response

from .models import Lesson
from .serializers import LessonSerializer


class LessonViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = LessonSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = Lesson.objects.all()

    def filter_queryset(self, queryset):
        module  = self.request.query_params.get('module', None)
        if module is not None:
            queryset = queryset.filter(module=module)
        return queryset

    @swagger_auto_schema(
        manual_parameters=[
            openapi.Parameter('module', 'query',  type=openapi.TYPE_INTEGER)
        ]
    )
    def list(self, *args, **kwargs):
        module  = self.request.query_params.get('module', None)
        if module is None:
            return Response(
                {'detail': 'Не указан id модуля'},
                status=status.HTTP_400_BAD_REQUEST
            )
        return super().list(*args, **kwargs)

