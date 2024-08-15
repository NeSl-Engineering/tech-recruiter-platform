1. Фронт энд сайта Tech-recruiter написан на react => Next.js
2. Использованы библиотеки такие как:
   ui {
   Tailwind css,
   scss,
   framer motion,
   classnames,
   lucide-react,
   react-hot-toast.
   }
   js {
   tanstack/react-query,
   js-cookie,
   react-hook-form,
   }

3. Основная архитектура реализован на "module architecture". Основная цель этой архитектуры совмещать стили и логики компонентов в одну папку.
4. Подключение ко внешнему api в .env. Там есть NEX_BASE_URL который можно изменит в любое время. Подключенные api в папке /services/. Там сервисы которые отвечают за все api. Все настроено чтоб свободно все переиспользовать.
5. В папке /api/ есть interceptors.ts. Это базовый конфиг где конфигурирую headers, и токен.
6. Готовый функционал для сохранение токена в cookie в папке /services/auth-token.service.ts
7. Задал все роуты который есть в папке config.
8. Все типы которые связаны с работы api в папке /types
9. Есть middleware для заблокирование приватных роутов.
10. Все статичные фотографии в папке /public
