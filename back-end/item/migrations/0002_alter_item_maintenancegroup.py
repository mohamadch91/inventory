# Generated by Django 4.0.6 on 2022-12-19 01:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('item', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='MaintenanceGroup',
            field=models.CharField(blank=True, max_length=150, null=True),
        ),
    ]
