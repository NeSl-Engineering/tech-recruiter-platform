import base64

import pyotp
from django.conf import settings
from django.core.mail import send_mail
from django.template.loader import render_to_string


class OTP:
    '''
    Utility class for working with
    one-time-passwords (aka OTP)
    '''

    @classmethod
    def send_email(
        cls,
        email: str,
        first_name: str,
        last_name: str
    ):
        '''

        '''
        context = {
            'otp': OTP.get_password(email),
            'first_name': first_name,
            'last_name': last_name
        }
        message = render_to_string(
            'users/email_activation_message.html',
            context 
        )
        send_mail(
            "Email Activation",
            message,
            "nazar@gmail.com",
            [email]
        )


    @classmethod
    def get_password(cls, email: str) -> str:
        '''
        Accepts users email
        Returns otp
        '''
        key = cls.generate_key(email)
        OTP = pyotp.TOTP(
            key,
            interval=settings.OTP_EXPIRE_TIME
        )
        return OTP.now()

    @classmethod
    def validate_password(cls, email: str, password: str) -> bool:
        '''
        Accepts users email
                otp
        Return boolean value representing whether
        otp is valid
        '''
        key = cls.generate_key(email)
        OTP = pyotp.TOTP(
            key,
            interval=settings.OTP_EXPIRE_TIME
        )
        return OTP.verify(password)

    @staticmethod
    def generate_key(email):
        '''
        Generates secret key for otp for specific email
        '''
        return base64.b32encode(f'{email}{settings.SECRET_KEY}'.encode())

