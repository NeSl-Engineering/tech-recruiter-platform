from rest_framework.exceptions import status
from rest_framework.mixins import Response
from rest_framework.viewsets import GenericViewSet
from rest_framework.permissions import IsAuthenticated

from .models import VideoView, MaterialView
from .serializers import VideoViewSerializer, MaterialViewSerializer


class VideoViewViewSet(GenericViewSet):
    serializer_class = VideoViewSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request):
        user = self.request.user
        print(f'{request.data = }')
        serializer = self.serializer_class(
            data={'video': request.data.get('video')},
            context={'request': request}
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )


class MaterialViewViewSet(GenericViewSet):
    serializer_class = MaterialViewSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request):
        user = self.request.user
        serializer = self.serializer_class(
            data={'material': request.data.get('material')},
            context={'request': request}
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

