# Generated by Django 3.1 on 2020-09-09 06:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0004_auto_20200909_1124'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profilepicmodel',
            name='role',
            field=models.CharField(choices=[(1, 'Admin'), (2, 'User')], default=2, max_length=10),
        ),
    ]
