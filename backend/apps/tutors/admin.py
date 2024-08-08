from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import Tutor


class TutorAdminConfig(admin.ModelAdmin):
    list_display = ['full_name', 'photo']

    def photo(self, instance):
        return mark_safe(f'''
            <img
                src="{instance.image.url}"
                height=80
            />
        ''')

    photo.short_description = 'Изображение'


admin.site.register(Tutor, TutorAdminConfig)

