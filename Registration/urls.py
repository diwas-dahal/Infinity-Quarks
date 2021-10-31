from django.urls import path
from .views import *

urlpatterns = [
    path('', RegistrationPage),
    path('data/', Subs)
]