from django.contrib import admin
from django.contrib.auth.models import Group

from .models import Profile, User

admin.site.register(User)
admin.site.register(Profile)
admin.site.unregister(Group)

