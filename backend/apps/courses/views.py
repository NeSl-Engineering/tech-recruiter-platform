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
from views.models import VideoView, MaterialView
from .models import Course, Category, Module
from .serializers import (
    CourseSerializer,
    CategorySerializer,
    ClientModuleSerializer
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
    serializer_class = ClientModuleSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        course_id = self.request.query_params.get('course')
        if not course_id:
            raise ValidationError(detail='No course id provided')
        user_id = self.request.user.id 
        # Subquery to get modules, videos, and materials seen by the user
        video_views = Subquery(VideoView.objects.filter(
            video__module=OuterRef('id'),
            user=user_id
        ).annotate(
            count=Func(F('id'), function='Count')
        ).values('count'))
        material_views = Subquery(MaterialView.objects.filter(
            material__module=OuterRef('id'),
            user=user_id
        ).annotate(
            count=Func(F('id'), function='Count')
        ).values('count'))
        
        prev_module_seen = Subquery(Module.objects.filter(
            course=course_id,
            ordinal_number=OuterRef('ordinal_number')-1,
        ).annotate(
            video_count=Count('videos'),
            material_count=Count('materials')
        ).annotate(
            is_seen=ExpressionWrapper(
                Q(video_count=video_views) & Q(material_count=material_views) \
                & (Q(material_count__gt=0) | Q(video_count__gt=0)),
                output_field=BooleanField()
            )
        ).values('is_seen'))

        modules = Module.objects.filter(course=course_id) \
        .annotate(
            video_count=Count('videos'),
            material_count=Count('materials')
        ) \
        .annotate(
            is_seen=ExpressionWrapper(
                Q(video_count=video_views) & Q(material_count=material_views) \
                & (Q(material_count__gt=0) | Q(video_count__gt=0)),
                output_field=BooleanField()
            ),
            is_open=ExpressionWrapper(
                prev_module_seen | Q(is_demo=True),
                output_field=BooleanField()
            )
        )
        return modules

