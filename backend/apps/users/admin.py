from django.contrib import admin
from django.contrib.auth.models import Group
from django.utils.safestring import mark_safe

from .models import Profile, User


class UserAdminConfig(admin.ModelAdmin):
    list_display = ['email', 'last_login', 'is_superuser']


class ProfileAdminConfig(admin.ModelAdmin):
    list_display = ['user', 'first_name', 'last_name', 'photo']

    def photo(self, instance):
        return mark_safe(f'''
        <img
            src={instance.profile_photo.url}
            alt={instance.user.email}
            height=60
        />
        ''')


admin.site.register(User, UserAdminConfig)
admin.site.register(Profile, ProfileAdminConfig)
admin.site.unregister(Group)

