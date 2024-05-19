from django.contrib import admin

from .models import Order


class OrderAdminConfig(admin.ModelAdmin):
    list_display = ['id', 'user', 'course', 'payment_id']


admin.site.register(Order, OrderAdminConfig)

