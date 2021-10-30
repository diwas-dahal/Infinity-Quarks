# Generated by Django 3.2.8 on 2021-10-23 11:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Registration', '0002_alter_subscriber_phonenumber'),
    ]

    operations = [
        migrations.AddField(
            model_name='subscriber',
            name='bio',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='subscriber',
            name='url',
            field=models.URLField(blank=True, null=True),
        ),
    ]