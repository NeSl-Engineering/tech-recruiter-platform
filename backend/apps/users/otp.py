import base64

from django.conf import settings

import pyotp


class OTP:
    '''
    Utility class for working with
    one-time-passwords (aka OTP)
    '''
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

