# Инструкция по загрузке фикстур

## Загрузка фикстур

Для загрузки тестовых данных (города, пользователи, категории, товары) выполните следующие команды:

```bash
# Загрузить города
python manage.py loaddata core/fixtures/cities.json

# Загрузить пользователей
python manage.py loaddata accounts/fixtures/users.json

# Загрузить категории
python manage.py loaddata catalog/fixtures/categories.json

# Загрузить товары
python manage.py loaddata catalog/fixtures/products.json
```

Или загрузить все сразу:

```bash
python manage.py loaddata core/fixtures/cities.json accounts/fixtures/users.json catalog/fixtures/categories.json catalog/fixtures/products.json
```

## Установка паролей для пользователей

После загрузки фикстур необходимо установить пароли для пользователей. По умолчанию все пользователи имеют пароль `admin123`.

Для установки паролей выполните:

```bash
python manage.py changepassword admin
python manage.py changepassword seller1
python manage.py changepassword seller2
python manage.py changepassword buyer1
```

Или установите пароль `admin123` для всех пользователей через Django shell:

```python
python manage.py shell
```

```python
from accounts.models import User
from django.contrib.auth.hashers import make_password

password = make_password('admin123')
User.objects.all().update(password=password)
```

## Тестовые пользователи

- **admin** - администратор (is_superuser=True, is_staff=True, is_seller=True)
- **seller1** - продавец 1 (is_seller=True)
- **seller2** - продавец 2 (is_seller=True)
- **buyer1** - покупатель (is_seller=False)

Все пользователи имеют пароль: `admin123` (после установки через changepassword или shell)

## Данные в фикстурах

- **Города**: Москва, Санкт-Петербург, Красноярск, Новосибирск
- **Категории**: 
  - Ретушь ритуальных фотографий (с подкатегориями: Базовая ретушь, Премиум ретушь)
  - Реставрация старых фотографий (с подкатегориями: Удаление дефектов, Восстановление цвета)
  - Обработка памятных фото
  - Создание коллажей и альбомов
  - Цветокоррекция ритуальных фото
- **Товары**: 12 товаров в различных категориях, связанных с ритуальными услугами и ретушью фотографий:
  - Ретушь ритуальных портретов (базовая и премиум)
  - Реставрация и восстановление старых фотографий
  - Обработка памятных альбомов и семейных фото
  - Создание памятных коллажей и дизайн альбомов
  - Цветокоррекция ритуальных фотографий

