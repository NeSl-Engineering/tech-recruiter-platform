from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)

from blog.views import PostViewSet
from users.views import (
    EmailVerificationAPIView,
    OTPResendAPIView,
    RegistrationAPIView,
    ProfileAPIView
)
from courses.views import (
    CategoryViewSet,
    CourseViewSet,
    ModuleViewSet
)
from lessons.views import LessonViewSet
from lesson_tests.views import LessonTestViewSet, AnswerViewSet
from orders.views import OrderViewSet, OrderNotificationAPIView
from .views import schema_view, SearchAPIView

router = routers.DefaultRouter()
router.register('answers', AnswerViewSet, 'answers')
router.register('posts', PostViewSet, 'posts')
router.register('course-categories', CategoryViewSet, 'course-categories')
router.register('courses', CourseViewSet, 'courses')
router.register('lessons', LessonViewSet, 'lessons')
router.register('lesson-tests', LessonTestViewSet, 'lesson-tests')
router.register('modules', ModuleViewSet, 'modules')
router.register('orders', OrderViewSet, 'orders')

urlpatterns = [
    path('docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('auth/register/', RegistrationAPIView.as_view(), name='register_user'),
    path('auth/resend-otp/', OTPResendAPIView.as_view(), name='resend-otp'),
    path('auth/verify-email/', EmailVerificationAPIView.as_view(), name='verify_email'),
    path('auth/password_reset/', include('django_rest_passwordreset.urls', namespace='password_reset')),
    path('orders/notifications/', OrderNotificationAPIView.as_view(), name='order-notification'),
    path('profile/', ProfileAPIView.as_view(), name='profile'),
    path('search/', SearchAPIView.as_view(), name='search'),
]

urlpatterns += router.urls

