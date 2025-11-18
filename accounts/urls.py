from django.urls import path
from . import views

app_name = 'accounts'

urlpatterns = [
    path('login/', views.login, name='login'),
    path('account/', views.AccountView.as_view(), name='account-main'),
    path('account/catalog/', views.account_catalog, name='account-catalog'),
    path('logout/', views.logout_view, name='logout'),
    path('api/send-auth-code/', views.send_auth_code, name='send-auth-code'),
    path('api/verify-auth-code/', views.verify_auth_code, name='verify-auth-code'),
    path('api/register-partner/', views.register_partner, name='register-partner'),
    path('api/cities/', views.get_cities, name='get-cities'),
    path('api/account/update-basic-info/', views.AccountView.as_view(), {'action': 'update-basic-info'}, name='update-basic-info'),
    path('api/account/update-company-info/', views.AccountView.as_view(), {'action': 'update-company-info'}, name='update-company-info'),
    path('api/account/change-password/', views.AccountView.as_view(), {'action': 'change-password'}, name='change-password'),
]


