from rest_framework import serializers

from enrolls.models import Enroll
from .models import Order


class OrderSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(
        read_only=True,
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = Order
        fields = ('course', 'user')

    def save(self, **kwargs):
        """Include default for read_only `user` field"""
        kwargs["user"] = self.fields["user"].get_default()
        return super().save(**kwargs)


class OrderNotificationSerializer(serializers.Serializer):
    OrderId = serializers.CharField()
    Success = serializers.BooleanField()
    Status = serializers.CharField()
    PaymentId = serializers.CharField()

    def process(self):
        order = Order.objects.get(id=self.initial_data['OrderId'])
        if self.initial_data['Status'] == 'CONFIRMED':
            order.status = 'paid'
            Enroll.objects.create(user=order.user, course=order.course)
            order.save()
        elif self.initial_data['Status'] in ['СANCELED', 'REJECTED', 'REVERSED']:
            order.status = 'failed'
            order.save()

