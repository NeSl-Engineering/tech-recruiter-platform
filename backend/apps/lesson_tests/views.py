from django.db.models import query
from drf_yasg.utils import swagger_auto_schema
from rest_framework import viewsets, permissions, status, mixins
from rest_framework.response import Response

from .models import LessonTest, Answer
from .serializers import LessonTestSerializer, AnswerSerializer


class LessonTestViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = LessonTestSerializer

    def get_queryset(self):
        queryset = LessonTest.objects \
            .prefetch_related('questions') \
            .prefetch_related('questions__options') \
            .all()
        module = self.request.GET.get('module')
        try:
            module = int(module)
        except TypeError:
            pass
        else:
            queryset = queryset.filter(module=module)
        return queryset


class AnswerViewSet(
    mixins.CreateModelMixin,
    viewsets.GenericViewSet
):
    serializer_class = AnswerSerializer
    queryset = Answer.objects.all()
    permission_classes = [permissions.IsAuthenticated]

    @swagger_auto_schema(
        request_body=AnswerSerializer(many=True)
    )
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(
            data=request.data,
            many=True,
            context={'request': request}
        )
        if serializer.is_valid():
            serializer.create(serializer.validated_data)
            headers = self.get_success_headers(serializer.data)
            return Response(
                serializer.data,
                status=status.HTTP_201_CREATED,
                headers=headers
            )
        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

