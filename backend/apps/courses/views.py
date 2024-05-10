from django.db.models import (
    Count, Q, F, Func,
    Subquery, OuterRef,
    BooleanField,
    ExpressionWrapper,
)
from rest_framework import viewsets, permissions
from rest_framework.exceptions import ValidationError

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
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


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

