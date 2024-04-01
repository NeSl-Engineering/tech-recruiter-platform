from django.core.mail import send_mail
from rest_framework import status
from rest_framework.parsers import MultiPartParser
from rest_framework.routers import Response
from rest_framework.views import APIView

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
            send_mail(
                "Subject",
                "Message",
                "nazar@gmail.com",
                [user.email]
            )
            return Response({'status': 200})
        else:
            return Response(
                serializer.error_messages,
                status=status.HTTP_400_BAD_REQUEST
            )
