'''
This module is required to work tinkoff MerchantAPI(MAPI)
'''
import hashlib

import requests
from django.conf import settings


class PaymentException(Exception):
    pass


class TinkoffPayment:
    def _generate_token(
        self,
        data
    ) -> str:
        '''
        Returns token for signing request to MAPI
        '''
        data = {
            **data,
            'Password': settings.TINKOFF_MAPI['TERMINAL_PASSWORD'],
        }
        keys_to_remove = [
            key for key in data.keys()
            if type(data[key]) not in [str, int, float]
        ]
        [data.pop(key) for key in keys_to_remove]
        sorted_data = sorted(data.items(), key=lambda x: x[0][0])
        print(sorted_data, flush=True)
        values = ''.join(map(lambda x: str(x[1]), sorted_data))
        token = hashlib.sha256(values.encode()).hexdigest()
        return token
    
    def create_order(
        self,
        order,
    ) -> str:
        '''
        Calls init method of MAPI.
        Returns PaymentURL.
        '''
        price = int(order.course.price * 100)
        payload = {
            "TerminalKey": settings.TINKOFF_MAPI['TERMINAL_KEY'],
            "Amount": price,
            "OrderId": str(order.id),
            "Description": settings.TINKOFF_MAPI['ORDER_DESCRIPTION'],
            "DATA": {
                "Email": order.user.email
            },
            "Receipt": {
                "Email": order.user.email,
                "Taxation": "osn",
                "Items": [
                    {
                        "Name": order.course.title,
                        "Price": price,
                        "Quantity": 1,
                        "Amount": price,
                        "Tax": "vat10"
                    }
                ]
            },
            "SuccessURL": settings.TINKOFF_MAPI['SUCCESS_URL'],
            "FailURL": settings.TINKOFF_MAPI['FAIL_URL'],
            "NotificationURL": settings.TINKOFF_MAPI['NOTIFICATION_URL']
        }
        token = self._generate_token(payload)
        payload['Token'] = token
        headers = {'Content-Type': 'application/json'}
        response = requests.post(
            f'{settings.TINKOFF_MAPI["BASE_URL"]}/Init/',
            json=payload,
            headers=headers 
        )
        if response.status_code != 200 or not response.json().get('Success'):
            order.delete()
            raise PaymentException
        data = response.json()
        order.payment_id = data['PaymentId']
        order.payment_url = data['PaymentURL']
        order.save()
        return data['PaymentURL']
    
    def order_payment_finished(self, order) -> bool:
        payload = {
            'TerminalKey': settings.TINKOFF_MAPI['TERMINAL_KEY'],
            'OrderId': str(order.id),
        }
        token = self._generate_token(payload)
        payload['Token'] = token
        headers = {'Content-Type': 'application/json'}
        response = requests.post(
            f'{settings.TINKOFF_MAPI["BASE_URL"]}/CheckOrder/',
            json=payload,
            headers=headers
        )
        if response.status_code != 200 or not response.json().get('Success'):
            raise PaymentException
        return response.json()['PAYMENTS']['Status'] == 'CONFIRMED'

