# Generated by Django 3.2.8 on 2021-10-23 11:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Registration', '0003_auto_20211023_1716'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subscriber',
            name='bio',
            field=models.TextField(),
        ),
    ]
