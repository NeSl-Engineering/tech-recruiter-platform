from django.urls import path
from rest_framework import routers
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

from blog.views import PostViewSet
from users.views import RegistrationAPIView
from .views import schema_view

router = routers.DefaultRouter()
router.register('posts', PostViewSet, 'posts')

urlpatterns = [
    path('docs', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/register/', RegistrationAPIView.as_view(), name='register_user'),
]

urlpatterns += router.urls

