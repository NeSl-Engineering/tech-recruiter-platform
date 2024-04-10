from django.core.mail import send_mail
from django.template.loader import render_to_string
from rest_framework import status
from rest_framework.parsers import MultiPartParser
from rest_framework.routers import Response
from rest_framework.views import APIView

from .otp import OTP
from .serializers import EmailVerificationSerializer, OTPResendSerializer, RegistrationSerializer


class RegistrationAPIView(APIView):
    serializer_class = RegistrationSerializer
    parser_classes = (MultiPartParser, )

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            user, profile  = serializer.create(serializer.validated_data)
            return Response({'status': 200})
        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )


class OTPResendAPIView(APIView):
    serializer_class = OTPResendSerializer

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

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.verify_user()
            return Response(serializer.data)
        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

