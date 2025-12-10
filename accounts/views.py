from django.shortcuts import render, redirect
from django.contrib.auth import logout, authenticate, login as auth_login
from django.contrib.auth import get_user_model
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from django.views import View
from django.utils import timezone
from django.core.mail import send_mail
from django.conf import settings
from .models import AuthCode, Company
from datetime import timedelta
import json
import logging

logger = logging.getLogger(__name__)

User = get_user_model()


class AccountView(LoginRequiredMixin, View):
    """Класс для работы с аккаунтом пользователя"""
    login_url = '/accounts/login/'
    
    def dispatch(self, request, *args, **kwargs):
        """Определяет action из kwargs и вызывает соответствующий метод"""
        self.action = kwargs.pop('action', None)
        return super().dispatch(request, *args, **kwargs)
    
    def get(self, request):
        """Отображение страницы личного кабинета"""
        # Получаем пользователя из базы данных, чтобы убедиться, что данные актуальны
        try:
            user = User.objects.select_related('city', 'company__city').get(pk=request.user.pk)
        except User.DoesNotExist:
            # Если пользователь не найден, перенаправляем на страницу входа
            return redirect('/accounts/login/')
        
        # Получаем или создаем компанию для пользователя
        company, created = Company.objects.get_or_create(user=user)
        
        context = {
            'user': user,
            'company': company,
        }
        return render(request, 'accounts/account-main.html', context)
    
    def post(self, request):
        """Обрабатывает POST запросы в зависимости от action"""
        if self.action == 'update-basic-info':
            return self.update_basic_info(request)
        elif self.action == 'update-company-info':
            return self.update_company_info(request)
        elif self.action == 'change-password':
            return self.change_password(request)
        else:
            return JsonResponse({
                'success': False,
                'message': 'Неверный action'
            }, status=400)
    
    def update_basic_info(self, request):
        """Обновление основной информации пользователя"""
        if not request.user.is_authenticated:
            return JsonResponse({
                'success': False,
                'message': 'Требуется авторизация'
            }, status=401)
        
        # Проверка верификации
        if not request.user.is_verified:
            return JsonResponse({
                'success': False,
                'message': 'Ваш аккаунт находится на верификации. Функционал будет доступен после проверки администратором.'
            }, status=403)
        
        try:
            data = json.loads(request.body)
            user = request.user
            
            # Получаем данные из формы
            first_name = data.get('first_name', '').strip()
            last_name = data.get('last_name', '').strip()
            middle_name = data.get('middle_name', '').strip()
            phone = data.get('phone', '').strip()
            email = data.get('email', '').strip()
            
            # Валидация обязательных полей
            if not all([first_name, last_name, middle_name, phone, email]):
                return JsonResponse({
                    'success': False,
                    'message': 'Заполните все обязательные поля'
                }, status=400)
            
            # Проверяем, не занят ли email другим пользователем
            if email != user.email and User.objects.filter(email=email).exists():
                return JsonResponse({
                    'success': False,
                    'message': 'Пользователь с таким email уже существует'
                }, status=400)
            
            # Обновляем данные пользователя
            user.first_name = first_name
            user.last_name = last_name
            user.middle_name = middle_name
            user.phone = phone
            user.email = email
            user.save()
            
            return JsonResponse({
                'success': True,
                'message': 'Данные успешно обновлены'
            })
            
        except json.JSONDecodeError:
            return JsonResponse({
                'success': False,
                'message': 'Неверный формат данных'
            }, status=400)
        except Exception as e:
            logger.error(f"Ошибка обновления основной информации: {str(e)}")
            return JsonResponse({
                'success': False,
                'message': f'Ошибка обновления: {str(e)}'
            }, status=500)
    
    def update_company_info(self, request):
        """Обновление информации о компании"""
        if not request.user.is_authenticated:
            return JsonResponse({
                'success': False,
                'message': 'Требуется авторизация'
            }, status=401)
        
        # Проверка верификации
        if not request.user.is_verified:
            return JsonResponse({
                'success': False,
                'message': 'Ваш аккаунт находится на верификации. Функционал будет доступен после проверки администратором.'
            }, status=403)
        
        try:
            data = json.loads(request.body)
            user = request.user
            
            # Получаем или создаем компанию
            company, created = Company.objects.get_or_create(user=user)
            
            # Получаем данные из формы
            name = data.get('name', '').strip()
            inn = data.get('inn', '').strip()
            city_id = data.get('city_id', '')
            work_phone = data.get('work_phone', '').strip()
            work_email = data.get('work_email', '').strip()
            bank_account = data.get('bank_account', '').strip()
            
            # Валидация обязательных полей
            if not all([name, inn, city_id, work_phone, work_email, bank_account]):
                return JsonResponse({
                    'success': False,
                    'message': 'Заполните все обязательные поля'
                }, status=400)
            
            # Получаем объект города
            try:
                from core.models import City
                city = City.objects.get(id=city_id, is_active=True)
            except (City.DoesNotExist, ValueError, TypeError):
                return JsonResponse({
                    'success': False,
                    'message': 'Выбранный город не найден или неактивен'
                }, status=400)
            
            # Обновляем данные компании
            company.name = name
            company.inn = inn
            company.city = city
            company.work_phone = work_phone
            company.work_email = work_email
            company.bank_account = bank_account
            company.save()
            
            return JsonResponse({
                'success': True,
                'message': 'Информация о компании успешно обновлена'
            })
            
        except json.JSONDecodeError:
            return JsonResponse({
                'success': False,
                'message': 'Неверный формат данных'
            }, status=400)
        except Exception as e:
            logger.error(f"Ошибка обновления информации о компании: {str(e)}")
            return JsonResponse({
                'success': False,
                'message': f'Ошибка обновления: {str(e)}'
            }, status=500)
    
    def change_password(self, request):
        """Смена пароля пользователя"""
        if not request.user.is_authenticated:
            return JsonResponse({
                'success': False,
                'message': 'Требуется авторизация'
            }, status=401)
        
        # Смена пароля доступна всегда, даже без верификации
        
        try:
            data = json.loads(request.body)
            user = request.user
            
            # Получаем данные из формы
            old_password = data.get('old_password', '').strip()
            new_password = data.get('new_password', '').strip()
            confirm_password = data.get('confirm_password', '').strip()
            
            # Валидация обязательных полей
            if not all([old_password, new_password, confirm_password]):
                return JsonResponse({
                    'success': False,
                    'message': 'Заполните все поля'
                }, status=400)
            
            # Проверяем старый пароль
            if not user.check_password(old_password):
                return JsonResponse({
                    'success': False,
                    'message': 'Неверный старый пароль'
                }, status=400)
            
            # Проверяем совпадение новых паролей
            if new_password != confirm_password:
                return JsonResponse({
                    'success': False,
                    'message': 'Новые пароли не совпадают'
                }, status=400)
            
            # Проверяем, что новый пароль отличается от старого
            if user.check_password(new_password):
                return JsonResponse({
                    'success': False,
                    'message': 'Новый пароль должен отличаться от старого'
                }, status=400)
            
            # Валидация пароля через Django validators
            from django.contrib.auth.password_validation import validate_password
            from django.core.exceptions import ValidationError
            
            try:
                validate_password(new_password, user)
            except ValidationError as e:
                errors = e.messages
                return JsonResponse({
                    'success': False,
                    'message': '; '.join(errors)
                }, status=400)
            
            # Устанавливаем новый пароль
            user.set_password(new_password)
            user.save()
            
            # Обновляем сессию, чтобы пользователь не разлогинился
            from django.contrib.auth import update_session_auth_hash
            update_session_auth_hash(request, user)
            
            return JsonResponse({
                'success': True,
                'message': 'Пароль успешно изменен'
            })
            
        except json.JSONDecodeError:
            return JsonResponse({
                'success': False,
                'message': 'Неверный формат данных'
            }, status=400)
        except Exception as e:
            logger.error(f"Ошибка смены пароля: {str(e)}")
            return JsonResponse({
                'success': False,
                'message': f'Ошибка смены пароля: {str(e)}'
            }, status=500)


@require_http_methods(["GET"])
def get_cities(request):
    """Возвращает список активных городов"""
    try:
        from core.models import City
        cities = City.objects.filter(is_active=True).order_by('sort_order', 'name')
        cities_list = [{'id': city.id, 'name': city.name} for city in cities]
        return JsonResponse({
            'success': True,
            'cities': cities_list
        })
    except Exception as e:
        logger.error(f"Ошибка получения списка городов: {str(e)}")
        return JsonResponse({
            'success': False,
            'message': f'Ошибка получения списка городов: {str(e)}'
        }, status=500)

# Create your views here.
def login(request):
    return render(request, 'accounts/auth.html')

@login_required
def account_catalog(request):
    """Страница каталога в личном кабинете"""
    from catalog.models import Category, Product
    
    # Проверка верификации - страница доступна, но функционал будет заблокирован
    # Получаем все родительские категории
    categories = Category.objects.filter(parent__isnull=True).order_by('name')
    
    # Получаем выбранную категорию из GET параметра
    category_id = request.GET.get('category')
    selected_category = None
    products = []
    
    if category_id:
        try:
            selected_category = Category.objects.get(id=category_id, parent__isnull=True)
            # Получаем товары пользователя для выбранной категории с оптимизацией запросов для изображений
            products = Product.objects.filter(
                category=selected_category,
                seller=request.user,
                is_active=True
            ).prefetch_related('images').order_by('-created_at')
        except Category.DoesNotExist:
            pass
    
    # Если категория не выбрана, показываем первую категорию по умолчанию
    if not selected_category and categories.exists():
        selected_category = categories.first()
        products = Product.objects.filter(
            category=selected_category,
            seller=request.user,
            is_active=True
        ).prefetch_related('images').order_by('-created_at')
    
    context = {
        'catalog_categories': categories,
        'selected_category': selected_category,
        'products': products,
        'is_verified': request.user.is_verified,
    }
    return render(request, 'accounts/account-catalog.html', context)

@login_required
@require_http_methods(["POST"])
def add_product(request):
    """Добавление нового товара"""
    from catalog.models import Category, Product, ProductImage
    import logging
    
    logger = logging.getLogger(__name__)
    
    # Проверка верификации
    if not request.user.is_verified:
        return JsonResponse({
            'success': False,
            'message': 'Ваш аккаунт находится на верификации. Функционал будет доступен после проверки администратором.'
        }, status=403)
    
    try:
        # Получаем данные из формы (FormData)
        category_id = request.POST.get('category_id', '').strip()
        name = request.POST.get('name', '').strip()
        description = request.POST.get('description', '').strip()
        price = request.POST.get('price', '').strip()
        discount_price = request.POST.get('discount_price', '').strip() or None
        color = request.POST.get('color', '').strip() or ''
        shape = request.POST.get('shape', '').strip() or ''
        
        # Получаем загруженные файлы
        images = request.FILES.getlist('images')
        
        # Логируем для отладки
        logger.info(f"Получено изображений: {len(images)}")
        if images:
            for img in images:
                logger.info(f"Изображение: {img.name}, размер: {img.size}, тип: {img.content_type}")
        
        # Валидация обязательных полей
        if not all([category_id, name, price]):
            return JsonResponse({
                'success': False,
                'message': 'Заполните все обязательные поля: категория, название, цена'
            }, status=400)
        
        # Проверяем категорию
        try:
            category = Category.objects.get(id=category_id, parent__isnull=True)
        except (Category.DoesNotExist, ValueError, TypeError):
            return JsonResponse({
                'success': False,
                'message': 'Выбранная категория не найдена'
            }, status=400)
        
        # Проверяем цену
        try:
            price_decimal = float(price)
            if price_decimal <= 0:
                raise ValueError("Цена должна быть положительным числом")
        except (ValueError, TypeError):
            return JsonResponse({
                'success': False,
                'message': 'Неверный формат цены'
            }, status=400)
        
        # Проверяем цену со скидкой, если указана
        discount_price_decimal = None
        if discount_price:
            try:
                discount_price_decimal = float(discount_price)
                if discount_price_decimal <= 0:
                    raise ValueError("Цена со скидкой должна быть положительным числом")
                if discount_price_decimal >= price_decimal:
                    return JsonResponse({
                        'success': False,
                        'message': 'Цена со скидкой должна быть меньше обычной цены'
                    }, status=400)
            except (ValueError, TypeError):
                return JsonResponse({
                    'success': False,
                    'message': 'Неверный формат цены со скидкой'
                }, status=400)
        
        # Создаем товар
        product = Product.objects.create(
            category=category,
            seller=request.user,
            name=name,
            description=description,
            price=price_decimal,
            discount_price=discount_price_decimal,
            color=color if color in dict(Product.COLOR_CHOICES) else '',
            shape=shape if shape in dict(Product.SHAPE_CHOICES) else '',
            is_active=True
        )
        
        # Сохраняем изображения
        saved_images_count = 0
        if images:
            for index, image_file in enumerate(images):
                # Проверяем тип файла
                if not image_file.content_type.startswith('image/'):
                    logger.warning(f"Пропущен файл {image_file.name}: не является изображением")
                    continue
                
                # Первое изображение делаем основным
                is_main = (index == 0)
                
                try:
                    ProductImage.objects.create(
                        product=product,
                        image=image_file,
                        alt_text=name,
                        is_main=is_main,
                        sort_order=index
                    )
                    saved_images_count += 1
                    logger.info(f"Изображение {image_file.name} успешно сохранено")
                except Exception as e:
                    logger.error(f"Ошибка сохранения изображения {image_file.name}: {str(e)}")
        
        logger.info(f"Всего сохранено изображений: {saved_images_count}")
        
        return JsonResponse({
            'success': True,
            'message': 'Товар успешно добавлен',
            'product_id': product.id,
            'redirect_url': f'/accounts/account/catalog/?category={category_id}'
        })
        
    except Exception as e:
        logger.error(f"Ошибка добавления товара: {str(e)}")
        return JsonResponse({
            'success': False,
            'message': f'Ошибка добавления товара: {str(e)}'
        }, status=500)


@login_required
@require_http_methods(["POST"])
def delete_product(request, product_id):
    """Удаление товара пользователя"""
    from catalog.models import Product
    import logging
    
    logger = logging.getLogger(__name__)
    
    # Проверка верификации
    if not request.user.is_verified:
        return JsonResponse({
            'success': False,
            'message': 'Ваш аккаунт находится на верификации. Функционал будет доступен после проверки администратором.'
        }, status=403)
    
    try:
        # Получаем товар и проверяем, что он принадлежит текущему пользователю
        try:
            product = Product.objects.get(id=product_id, seller=request.user)
        except Product.DoesNotExist:
            return JsonResponse({
                'success': False,
                'message': 'Товар не найден или у вас нет прав на его удаление'
            }, status=404)
        
        product_name = product.name
        
        # Удаляем товар (при удалении товара также удалятся все связанные изображения через CASCADE)
        product.delete()
        
        logger.info(f"Товар '{product_name}' (ID: {product_id}) удален пользователем {request.user.id}")
        
        return JsonResponse({
            'success': True,
            'message': f'Товар "{product_name}" успешно удален'
        })
        
    except Exception as e:
        logger.error(f"Ошибка удаления товара {product_id}: {str(e)}")
        return JsonResponse({
            'success': False,
            'message': f'Ошибка при удалении товара: {str(e)}'
        }, status=500)


def logout_view(request):
    logout(request)
    return redirect('core:index')


@require_http_methods(["POST"])
def send_auth_code(request):
    """Отправляет код подтверждения на почту"""
    try:
        data = json.loads(request.body)
        email = data.get('email', '').strip()
        password = data.get('password', '').strip()
        
        if not email or not password:
            return JsonResponse({
                'success': False,
                'message': 'Email и пароль обязательны'
            }, status=400)
        
        # Проверяем, существует ли пользователь с таким email и паролем
        try:
            user = User.objects.get(email=email)
            if not user.check_password(password):
                return JsonResponse({
                    'success': False,
                    'message': 'Неверный email или пароль'
                }, status=400)
        except User.DoesNotExist:
            return JsonResponse({
                'success': False,
                'message': 'Пользователь с таким email не найден'
            }, status=404)
        
        # Генерируем код
        code = AuthCode.generate_code()
        expires_at = timezone.now() + timedelta(minutes=10)  # Код действителен 10 минут
        
        # Помечаем старые коды как использованные
        AuthCode.objects.filter(email=email, is_used=False).update(is_used=True)
        
        # Создаем новый код
        auth_code = AuthCode.objects.create(
            email=email,
            code=code,
            expires_at=expires_at
        )
        
        # Логируем код для отладки (только в режиме разработки)
        if settings.DEBUG:
            logger.info(f"Код авторизации для {email}: {code}")
            print(f"[DEBUG] Код авторизации для {email}: {code}")
        
        # Отправляем письмо
        subject = 'Код подтверждения для входа'
        message = f'Ваш код подтверждения: {code}\n\nКод действителен в течение 10 минут.'
        from_email = settings.DEFAULT_FROM_EMAIL
        
        try:
            send_mail(
                subject,
                message,
                from_email,
                [email],
                fail_silently=False,
            )
            return JsonResponse({
                'success': True,
                'message': 'Код отправлен на вашу почту'
            })
        except Exception as e:
            auth_code.delete()
            return JsonResponse({
                'success': False,
                'message': f'Ошибка отправки письма: {str(e)}'
            }, status=500)
            
    except json.JSONDecodeError:
        return JsonResponse({
            'success': False,
            'message': 'Неверный формат данных'
        }, status=400)
    except Exception as e:
        return JsonResponse({
            'success': False,
            'message': f'Ошибка: {str(e)}'
        }, status=500)


@require_http_methods(["POST"])
def verify_auth_code(request):
    """Проверяет код и авторизует пользователя"""
    try:
        data = json.loads(request.body)
        email = data.get('email', '').strip()
        code = data.get('code', '').strip()
        
        if not email or not code:
            return JsonResponse({
                'success': False,
                'message': 'Email и код обязательны'
            }, status=400)
        
        # Ищем действительный код
        try:
            auth_code = AuthCode.objects.filter(
                email=email,
                code=code,
                is_used=False
            ).order_by('-created_at').first()
            
            if not auth_code or not auth_code.is_valid():
                return JsonResponse({
                    'success': False,
                    'message': 'Неверный или истекший код'
                }, status=400)
            
            # Находим пользователя
            try:
                user = User.objects.get(email=email)
            except User.DoesNotExist:
                return JsonResponse({
                    'success': False,
                    'message': 'Пользователь не найден'
                }, status=404)
            
            # Помечаем код как использованный
            auth_code.mark_as_used()
            
            # Авторизуем пользователя
            auth_login(request, user)
            
            return JsonResponse({
                'success': True,
                'message': 'Авторизация успешна',
                'redirect_url': '/accounts/account/'
            })
            
        except Exception as e:
            return JsonResponse({
                'success': False,
                'message': f'Ошибка проверки кода: {str(e)}'
            }, status=500)
            
    except json.JSONDecodeError:
        return JsonResponse({
            'success': False,
            'message': 'Неверный формат данных'
        }, status=400)
    except Exception as e:
        return JsonResponse({
            'success': False,
            'message': f'Ошибка: {str(e)}'
        }, status=500)


@require_http_methods(["POST"])
def register_partner(request):
    """Регистрация нового партнера"""
    try:
        data = json.loads(request.body)
        
        # Получаем данные из формы
        email = data.get('email', '').strip()
        password = data.get('password', '').strip()
        first_name = data.get('first_name', '').strip()
        last_name = data.get('last_name', '').strip()
        middle_name = data.get('middle_name', '').strip()
        phone = data.get('phone', '').strip()
        city_id = data.get('city_id', '')
        legal_form = data.get('legal_form', '').strip()
        passport_data = data.get('passport_data', '').strip()
        
        # Валидация обязательных полей
        required_fields = {
            'email': email,
            'password': password,
            'first_name': first_name,
            'last_name': last_name,
            'middle_name': middle_name,
            'city_id': city_id,
            'legal_form': legal_form,
            'passport_data': passport_data,
        }
        
        missing_fields = [field for field, value in required_fields.items() if not value]
        if missing_fields:
            return JsonResponse({
                'success': False,
                'message': f'Заполните все обязательные поля: {", ".join(missing_fields)}'
            }, status=400)
        
        # Проверяем, не существует ли уже пользователь с таким email
        if User.objects.filter(email=email).exists():
            return JsonResponse({
                'success': False,
                'message': 'Пользователь с таким email уже существует'
            }, status=400)
        
        # Получаем объект города
        try:
            from core.models import City
            city = City.objects.get(id=city_id, is_active=True)
        except (City.DoesNotExist, ValueError, TypeError):
            return JsonResponse({
                'success': False,
                'message': 'Выбранный город не найден или неактивен'
            }, status=400)
        
        # Создаем username из email (до символа @)
        username = email.split('@')[0]
        # Если username уже занят, добавляем число
        base_username = username
        counter = 1
        while User.objects.filter(username=username).exists():
            username = f"{base_username}{counter}"
            counter += 1
        
        # Создаем пользователя
        user = User.objects.create_user(
            username=username,
            email=email,
            password=password,
            first_name=first_name,
            last_name=last_name,
            middle_name=middle_name,
            phone=phone if phone else '',
            city=city,
            legal_form=legal_form,
            passport_data=passport_data,
            is_seller=True,  # Партнер автоматически становится продавцом
            is_active=True
        )
        
        # Авторизуем пользователя
        auth_login(request, user)
        
        return JsonResponse({
            'success': True,
            'message': 'Регистрация успешна! Добро пожаловать!',
            'redirect_url': '/accounts/account/'
        })
        
    except json.JSONDecodeError:
        return JsonResponse({
            'success': False,
            'message': 'Неверный формат данных'
        }, status=400)
    except Exception as e:
        logger.error(f"Ошибка регистрации партнера: {str(e)}")
        return JsonResponse({
            'success': False,
            'message': f'Ошибка регистрации: {str(e)}'
        }, status=500)
