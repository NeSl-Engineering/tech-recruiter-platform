from rest_framework.viewsets import ReadOnlyModelViewSet

from .models import Post, Tag
from .serializers import PostSerializer, TagSerializer


class PostViewSet(ReadOnlyModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class TagViewSet(ReadOnlyModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

