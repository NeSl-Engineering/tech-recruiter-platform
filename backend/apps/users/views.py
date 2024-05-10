from django.core.mail import send_mail
from django.template.loader import render_to_string
from drf_yasg.utils import swagger_auto_schema
from rest_framework import status 
from rest_framework.parsers import MultiPartParser, JSONParser
from rest_framework.permissions import IsAuthenticated
from rest_framework.routers import Response
from rest_framework.views import APIView

from .otp import OTP
from .serializers import (
    EmailVerificationSerializer,
    OTPResendSerializer,
    ProfileSerializer,
    RegistrationSerializer
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

