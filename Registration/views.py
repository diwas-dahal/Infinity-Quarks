from django.shortcuts import render
from .forms import *
from django.http import HttpResponse
from django.core.exceptions import PermissionDenied, BadRequest
# Create your views here.


def Subs(requests):
    if requests.method == 'POST':
        instance = SubscriberForm(requests.POST)
        if instance.is_valid():
            instance.save()
            return HttpResponse(status=201)
        else:
            return HttpResponse(status=406)
    else:
        return HttpResponse(status=405)
