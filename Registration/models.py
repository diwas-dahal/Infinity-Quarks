from django.db import models

# Create your models here.


class Subscriber(models.Model):
    phoneNumber = models.BigIntegerField()
    email = models.EmailField()
    bio = models.TextField()
    url = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.email

