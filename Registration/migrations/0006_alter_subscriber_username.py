# Generated by Django 3.2.8 on 2021-10-31 18:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Registration', '0005_auto_20211031_2357'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subscriber',
            name='username',
            field=models.CharField(max_length=300),
        ),
    ]