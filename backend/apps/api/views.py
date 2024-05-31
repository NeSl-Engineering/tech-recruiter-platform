from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from rest_framework.views import APIView, Response, status

from blog.models import Post
from courses.models import Course, Module
from .utils import search
from .serializers import SearchSerializer


schema_view = get_schema_view(
   openapi.Info(
      title="Tech Recruiter API",
      default_version='v1',
      description="<h2>Api for tech recruiter platform</h2>",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
   url='http://localhost:8000/api'
)


class SearchAPIView(APIView):
    serializer_class = SearchSerializer

    @swagger_auto_schema(
        responses={200: SearchSerializer},
        manual_parameters=[
            openapi.Parameter(
                'query',
                openapi.IN_QUERY,
                description="Search query",
                type=openapi.TYPE_STRING
            )
        ]
    )
    def get(self, request):
        query = request.GET.get('query')
        if query is None:
            return Response(
                'Search query was not provided',
                status=status.HTTP_400_BAD_REQUEST
            )
        posts = search(
            Post,
            query,
            {'title': 'A', 'content': 'B'}
        )
        courses = search(
            Course,
            query,
            {'title': 'A', 'category__title': 'C'}
        )
        modules = search(
            Module,
            query,
            {'title': 'A'}
        )
        serializer = self.serializer_class({
            'posts': posts,
            'courses': courses,
            'modules': modules
        })
        return Response(serializer.data)

