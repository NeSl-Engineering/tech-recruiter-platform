import json

from django.db.models import (
    Exists, F,
    OuterRef, Prefetch,
    Q, Subquery
)
from django.db import connection

from courses.models import Course, Module
from courses.serializers import ClientCourseSerializer
from users.models import User
from views.models import MaterialView, VideoView

user = User.objects.get(email='user1@example.com')

prev_module = Subquery(
    Module.objects.filter(pk=OuterRef('id')-1).values('id')
)
modules = Module.objects.all().annotate(prev=prev_module)


video_views = Subquery(VideoView.objects.filter(user=user, pk=OuterRef('pk')))
modules = Module.objects.annotate(is_open=F('is_demo'), is_seen=Exists(video_views))
courses = Course.objects. \
    prefetch_related(
        Prefetch('modules', queryset=modules)
    )


print(
    json.dumps(
        ClientCourseSerializer(courses, many=True).data,
        indent=4,
        ensure_ascii=False
    )   
)

print(connection.queries)
print(len(connection.queries))

