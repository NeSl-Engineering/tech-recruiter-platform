from django.core.mail import send_mail
from django.template.loader import render_to_string
from drf_yasg import openapi
from drf_yasg.utils import serializers, swagger_auto_schema
from rest_framework import status, permissions
from rest_framework.parsers import MultiPartParser, JSONParser
from rest_framework.permissions import IsAuthenticated
from rest_framework.routers import Response
from rest_framework.views import APIView

from .models import User
from .otp import OTP
from .serializers import (
    EmailVerificationSerializer,
    OTPResendSerializer,
    ProfileSerializer,
    RegistrationSerializer,
    UsernameSerializer,
    PasswordUpdateSerializer
)


class RegistrationAPIView(APIView):
    serializer_class = RegistrationSerializer
    parser_classes = (MultiPartParser,)

    @swagger_auto_schema(
        request_body=RegistrationSerializer(),
        responses={
            200: RegistrationSerializer()
        }
    )
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            user, profile  = serializer.create(serializer.validated_data)
            return Response(serializer.data)
        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )


class OTPResendAPIView(APIView):
    serializer_class = OTPResendSerializer

    @swagger_auto_schema(
        request_body=OTPResendSerializer(),
        responses={200: OTPResendSerializer()}
    )
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.create(serializer.validated_data)
            return Response(serializer.data)
        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )


class EmailVerificationAPIView(APIView):
    serializer_class = EmailVerificationSerializer

    @swagger_auto_schema(
        request_body=EmailVerificationSerializer(),
        responses={200: EmailVerificationSerializer()}
    )
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.verify_user()
            return Response(serializer.data)
        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )


class ProfileAPIView(APIView):
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]
    parser_classes = (MultiPartParser,JSONParser)

    def get_object(self):
        return self.request.user.profile

    @swagger_auto_schema(
        responses={200: ProfileSerializer()}
    )
    def get(self, request):
        serializer = self.serializer_class(instance=self.get_object())
        data = dict(serializer.data)
        data['email'] = request.user.email
        return Response(data)

    @swagger_auto_schema(
        request_body=ProfileSerializer(),
        responses={200: ProfileSerializer()}
    )
    def patch(self, request):
        serializer = self.serializer_class(
            instance=self.get_object(),
            data=request.data,
            partial=True
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )


class UsernameAPIView(APIView):

    @swagger_auto_schema(
        query_serializer=UsernameSerializer(),
        responses={200: openapi.Schema('is_valid', type=openapi.TYPE_BOOLEAN)}
    )
    def get(self, request):
        serializer = UsernameSerializer(data=request.GET)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        username = serializer.data.get('username')
        username_valid = not User.objects.filter(username=username).exists()
        return Response(username_valid)


class PasswordUpdateAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    @swagger_auto_schema(
        request_body=PasswordUpdateSerializer(),
        response={200: openapi.Schema('detail', type=openapi.TYPE_STRING)}
    )
    def post(self, request):
        print(request.data, flush=True)
        serializer = PasswordUpdateSerializer(
            data=request.data,
            context={'request': request}
        )
        if serializer.is_valid():
            serializer.save()
            return Response({"detail": "Ok"})

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

