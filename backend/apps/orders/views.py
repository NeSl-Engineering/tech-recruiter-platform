from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework import status, serializers, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import GenericViewSet

from .payment import TinkoffPayment, PaymentException
from .serializers import OrderSerializer, OrderNotificationSerializer


class OrderViewSet(GenericViewSet):
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticated]

    @swagger_auto_schema(
        responses={
            status.HTTP_200_OK: openapi.Response(
                description="Success Response",
                schema=openapi.Schema(
                    type=openapi.TYPE_OBJECT,
                    properties={
                        'payment_url': openapi.Schema(
                            type=openapi.TYPE_STRING, description=''
                        )
                    }
                )
            ),
            status.HTTP_424_FAILED_DEPENDENCY: openapi.Response(
                description="Error accessing payment api",
                schema=openapi.Schema(
                    type=openapi.TYPE_OBJECT,
                    properties={
                        'message': openapi.Schema(
                            type=openapi.TYPE_STRING, description=''
                        )
                    }
                )
            )
        }
    )
    def create(self, request):
        serializer = self.serializer_class(
            data=request.data,
            context={'request': request}
        )
        if not serializer.is_valid():
            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )
        order = serializer.save()
        payment = TinkoffPayment()
        try:
            payment_url = payment.create_order(order)
        except PaymentException:
            return Response(
                data={'message': 'Не удалось создать заказ. '
                                 'Попробуйте позже.'},
                status=status.HTTP_424_FAILED_DEPENDENCY
            )
        return Response({'payment_url': payment_url})


class OrderNotificationAPIView(APIView):
    def post(self, request):
        print('ORDERNOTIFICATION: ', request.data, flush=True)
        serializer = OrderNotificationSerializer(data=request.data)
        serializer.process()
        return Response('OK')

