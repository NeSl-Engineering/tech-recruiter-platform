from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework import viewsets, permissions, status, exceptions
from rest_framework.response import Response

from courses.models import Module
from enrolls.models import Enroll
from .models import Lesson
from .serializers import LessonSerializer


class LessonViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = LessonSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = Lesson.objects.all()

    def get_queryset(self):
        queryset = Lesson.objects.all()
        module  = self.request.query_params.get('module')
        module = Module.objects.filter(pk=module)
        if not module.exists():
            raise exceptions.NotFound('Модуль с указанным id не найден.')
        module = module.first()
        if module.is_demo:
            return queryset
        course = module.course
        enroll = Enroll.objects.filter(user=self.request.user, course=course)
        # if enroll exists it means course was paid
        if not enroll.exists():
            raise exceptions.PermissionDenied('Курс не оплачен')
        return queryset

    def filter_queryset(self, queryset):
        module  = self.request.query_params.get('module')
        if module is not None:
            queryset = queryset.filter(module=module)
        return queryset

    @swagger_auto_schema(
        manual_parameters=[
            openapi.Parameter(
                'module',
                'query',
                type=openapi.TYPE_INTEGER,
                required=True
            )
        ]
    )
    def list(self, *args, **kwargs):
        module  = self.request.query_params.get('module')
        if module is None:
            return Response(
                {'detail': 'Не указан id модуля'},
                status=status.HTTP_400_BAD_REQUEST
            )
        return super().list(*args, **kwargs)
