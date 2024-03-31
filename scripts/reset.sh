#!/usr/bin/env bash
rm backend/db.sqlite3
python backend/manage.py migrate
python backend/manage.py runserver
