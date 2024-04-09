#!/bin/sh

python manage.py flush --no-input
python manage.py migrate
gunicorn core.wsgi:application --bind 0.0.0.0:8000
