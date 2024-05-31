from django.db.models import (
    Count, Q, F, Func,
    Subquery, OuterRef,
    BooleanField,
    ExpressionWrapper,
    Exists
)
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework import viewsets, permissions
from rest_framework.exceptions import ValidationError

from enrolls.models import Enroll
from .models import Course, Category, Module
from .serializers import (
    CourseSerializer,
    CategorySerializer,
    ModuleSerializer
)


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CourseViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = CourseSerializer

    def get_queryset(self):
        user = self.request.user
        if not user.is_authenticated:
            return Course.objects.all()
        enroll = Subquery(Enroll.objects.filter(user=user, course=OuterRef('id')))
        queryset = Course.objects.annotate(is_paid=Exists(enroll))
        is_paid = self.request.GET.get('is_paid')
        if is_paid:
            queryset = queryset.filter(is_paid=(is_paid == 'true'))
        return queryset

    @swagger_auto_schema(
        manual_parameters=[
            openapi.Parameter('is_paid', 'query',  type=openapi.TYPE_BOOLEAN)
        ]
    )
    def list(self, *args, **kwargs):
        return super().list(*args, **kwargs)


class ModuleViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = ModuleSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        course_id = self.request.GET.get('course')
        if not course_id:
            raise ValidationError(detail='No course id provided')
        modules = Module.objects.filter(course=course_id).all()
        return modules

    @swagger_auto_schema(
        manual_parameters=[
            openapi.Parameter('course', 'query',  type=openapi.TYPE_INTEGER)
        ]
    )
    def list(self, *args, **kwargs):
        return super().list(*args, **kwargs)

