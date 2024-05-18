from django.contrib.postgres.search import SearchQuery, SearchRank, SearchVector
from rest_framework import serializers

from blog.serializers import PostSerializer
from courses.serializers import CourseSerializer, ModuleSerializer
from .utils import search


class SearchSerializer(serializers.Serializer):
    posts = PostSerializer(many=True)
    courses = CourseSerializer(many=True)
    modules = ModuleSerializer(many=True)
    
