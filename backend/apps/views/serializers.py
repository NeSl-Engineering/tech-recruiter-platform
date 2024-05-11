from rest_framework import serializers

from .models import VideoView, MaterialView


class VideoViewSerializer(serializers.ModelSerializer):

    class Meta:
        model = VideoView
        fields = '__all__'


class MaterialViewSerializer(serializers.ModelSerializer):

    class Meta:
        model = MaterialView
        fields = '__all__'

