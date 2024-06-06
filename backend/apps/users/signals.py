from django.conf import settings
from django.core.mail import send_mail
from django.dispatch import receiver
from django.template.loader import render_to_string

from django_rest_passwordreset.signals import reset_password_token_created


@receiver(reset_password_token_created)
def password_reset_token_created(
    sender,
    instance,
    reset_password_token,
    *args,
    **kwargs
):
    user = reset_password_token.user
    context = {
        'token': reset_password_token.key,
        'first_name': user.profile.first_name,
        'last_name': user.profile.last_name,
    }
    message = render_to_string(
        'users/password_reset_message.html',
        context=context
    )
    send_mail(
        'Password Reset',
        '',
        settings.EMAIL_HOST,
        [user.email],
        html_message=message
    )

