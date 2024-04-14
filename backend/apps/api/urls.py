from blog.views import PostViewSet
from django.urls import path
from rest_framework import routers
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)
from users.views import (
    EmailVerificationAPIView,
    OTPResendAPIView,
    RegistrationAPIView
)

from .views import schema_view

router = routers.DefaultRouter()
router.register('posts', PostViewSet, 'posts')

urlpatterns = [
    path('docs', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/register/', RegistrationAPIView.as_view(), name='register_user'),
    path('auth/resend-otp/', OTPResendAPIView.as_view(), name='resend-otp'),
    path('auth/verify-email/', EmailVerificationAPIView.as_view(), name='verify_email'),
]

urlpatterns += router.urls

