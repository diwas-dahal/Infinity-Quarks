from django.db import models

# Create your models here.


class Subscriber(models.Model):
    username = models.CharField(max_length=300)
    phoneNumber = models.BigIntegerField()
    email = models.EmailField()
    bio = models.TextField()

    def __str__(self):
        return self.email

