from django.contrib import admin

from .models import MaterialView, VideoView


class MaterialViewAdmin(admin.ModelAdmin):
    list_display = ['user', 'material', 'date_seen']

    def has_delete_permission(self, *args, **kwargs):
        return False

    def has_edit_permission(self, *args, **kwargs):
        return False

admin.site.register(MaterialView, MaterialViewAdmin)
admin.site.register(VideoView)
