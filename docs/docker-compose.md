# Документация по Docker Compose для проекта Tech-Recruiter

## Общий обзор

Проект Tech-Recruiter состоит из нескольких взаимосвязанных сервисов, которые совместно обеспечивают функционирование веб-приложения. Каждый сервис работает в отдельном контейнере, что позволяет проекту быть легко масштабируемым и изолированным от системных зависимостей.

## Структура Docker Compose

version: '3.8': Указывает версию Docker Compose. Версия 3.8 поддерживает последние возможности Docker, включая сервисы, сети и тома.

Сервисы
1. api
* Роль: Основной бэкенд сервис, отвечающий за обработку запросов к приложению и взаимодействие с базой данных.
* Контекст сборки: ./backend
* Dockerfile: ./backend/backend.dockerfile
* Тома:
    * ./backend/:/home/app/web: Монтирует исходный код бэкенда в контейнер.
    * static_volume:/home/app/web/staticfiles: Хранение статических файлов.
    * media_volume:/home/app/web/mediafiles: Хранение медиафайлов.
* Переменные окружения: Читаются из файла .env.
* Зависимости: Сервис api зависит от db и redis, то есть они должны быть запущены до api.


2. db

* Роль: База данных PostgreSQL, хранит все данные проекта.
* Образ: postgres:15
* Тома:
    * postgres_data:/var/lib/postgresql/data: Хранение данных базы данных.
* Переменные окружения: Читаются из файла .env.db.
* Порты: Маппинг порта 8001 на 5432 для доступа к базе данных.


3. nginx

* Роль: Обратный прокси-сервер для управления трафиком, направляемым к фронтенду и бэкенду.
* Контекст сборки: ./nginx
* Тома:
    * static_volume:/home/app/web/staticfiles: Доступ к статическим файлам.
    * media_volume:/home/app/web/mediafiles: Доступ к медиафайлам.
* Порты: Маппинг порта 8000 на 80 для доступа к веб-приложению.
* Зависимости: nginx зависит от api и front.


4. front

* Роль: Фронтенд сервис, отвечающий за клиентскую часть приложения.
* Контекст сборки: ./frontend
* Dockerfile: frontend.dockerfile
* Тома:
    * ./frontend:/app: Монтирует исходный код фронтенда в контейнер.
    * /app/node_modules: Хранение установленных npm-пакетов.
    * /app/.next: Хранение кэша Next.js.
* Переменные окружения: Читаются из файла .env.front.
* Зависимости: front зависит от api.

5. celery

* Роль: Выполнение фоновых задач с использованием Celery.
* Контекст сборки: ./backend
* Dockerfile: ./backend/celery.dockerfile
* Команда: celery --app=core worker --loglevel=info
* Тома:
    * ./backend:/home/app/web: Монтирует исходный код бэкенда в контейнер.
* Переменные окружения: Читаются из файла .env.
* Зависимости: celery зависит от api и redis.

6. celery-flower

* Роль: Мониторинг задач Celery с использованием Flower.
* Контекст сборки: ./backend
* Dockerfile: ./backend/celery.dockerfile
* Команда: celery flower -A core --port=5555
* Порты: Маппинг порта 5555 на 5555 для доступа к Flower.
* Переменные окружения: Читаются из файла .env.
* Зависимости: celery-flower зависит от api и redis.

7. celery-beat

* Роль: Планировщик задач для Celery.
* Контекст сборки: ./backend
* Dockerfile: ./backend/celery.dockerfile
* Команда: celery --app=core beat --loglevel=info
* Тома:
    * ./backend:/home/app/web: Монтирует исходный код бэкенда в контейнер.
* Переменные окружения: Читаются из файла .env.
* Зависимости: celery-beat зависит от api и redis.

8. redis

* Роль: Сервис для хранения кэша и очередей сообщений для Celery.
* Образ: redis:7-alpine

9. minio

* Роль: Обеспечивает S3-совместимое хранилище для файлов, используемых в приложении.
* Образ: minio/minio
* Команда: server /data --console-address ":9001"
* Переменные окружения:
    * MINIO_ROOT_USER=minioadmin: Пользователь MinIO.
    * MINIO_ROOT_PASSWORD=minioadmin: Пароль MinIO.
* Тома:
    * minio_data:/data: Хранение данных MinIO.
* Порты:
    * 9000:9000 — доступ к MinIO API.
    * 9001:9001 — доступ к консоли MinIO.

10. minio-client

* Роль: Клиент MinIO для управления хранилищем.
* Образ: minio/mc:latest
* Команда:
    * Настраивает подключение к MinIO и создает хранилище tech-recruiter.
    * Открывает доступ для скачивания файлов в этом хранилище.
* Зависимости: minio-client зависит от minio.

* Тома
    * postgres_data: Содержит данные PostgreSQL.
    * static_volume: Содержит статические файлы приложения.
    * media_volume: Содержит медиафайлы приложения.
    * minio_data: Содержит данные MinIO.