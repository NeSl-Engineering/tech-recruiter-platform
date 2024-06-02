from rest_framework import serializers

from .models import Post, Tag


class PostTagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag
        fields = '__all__'

    def to_representation(self, instance):
        return instance.title


class PostSerializer(serializers.ModelSerializer):
    tags = PostTagSerializer(many=True)

    class Meta:
        model = Post
        fields = '__all__'


class TagPostSerializer(serializers.ModelSerializer):
    tags = PostTagSerializer(many=True)

    class Meta:
        model = Post
        fields = '__all__'


class TagSerializer(serializers.ModelSerializer):
    posts = TagPostSerializer(many=True)

    class Meta:
        model = Tag
        fields = '__all__'

