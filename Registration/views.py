from django.shortcuts import render
from .forms import *
from django.http import HttpResponse
# Create your views here.


def RegistrationPage(requests):
    return render(requests, 'Registration/Register.html')


def Subs(requests):
    if requests.method == 'POST':
        instance = SubscriberForm(requests.POST)
        if instance.is_valid():
            instance.save()
            return HttpResponse(status=201)  # Successfully Saved
        else:
            return HttpResponse(status=406)  # Invalid request
    else:
        return HttpResponse(status=405)  # Method not allowed
