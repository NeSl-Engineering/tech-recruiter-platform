from django.core.mail import send_mail
from django.template.loader import render_to_string
from rest_framework import status
from rest_framework.parsers import MultiPartParser
from rest_framework.routers import Response
from rest_framework.views import APIView

from .otp import OTP
from .serializers import RegistrationSerializer


class RegistrationAPIView(APIView):
    serializer_class = RegistrationSerializer
    parser_classes = (MultiPartParser, )

    def post(self, request):
        serializer = self.serializer_class(
            data=request.data,
        )
        if serializer.is_valid():
            user, profile  = serializer.create(serializer.validated_data)
            # send otp to user.email
            context = {
                'otp': OTP.get_password(user.email),
                'first_name': profile.first_name,
                'last_name': profile.last_name
            }
            message = render_to_string(
                'users/email_activation_message.html',
                context 
            )
            send_mail(
                "Email Activation",
                message,
                "nazar@gmail.com",
                [user.email]
            )
            return Response({'status': 200})
        else:
            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )

