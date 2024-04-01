#!/usr/bin/env bash
rm backend/db.sqlite3
rm -r backend/media
python backend/manage.py migrate
python backend/manage.py runserver
