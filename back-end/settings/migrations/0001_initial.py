# Generated by Django 4.0.6 on 2022-09-29 10:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CountryConfig',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('country', models.CharField(blank=True, max_length=50, null=True)),
                ('codecountry', models.CharField(blank=True, db_column='CodeCountry', max_length=10, null=True)),
                ('currency', models.CharField(blank=True, db_column='Currency', max_length=50, null=True)),
                ('levels', models.IntegerField(blank=True, db_column='Levels', null=True)),
                ('logo', models.ImageField(blank=True, db_column='Logo', max_length=200, null=True, upload_to='')),
                ('secondLogo', models.ImageField(blank=True, db_column='SecondLogo', max_length=200, null=True, upload_to='')),
                ('poptarget', models.CharField(choices=[('General population', 'General'), ('Under-1 Population', 'Under')], db_column='PopTarget', max_length=20, null=True)),
                ('poprate', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('havehr', models.BooleanField(blank=True, null=True)),
                ('mainlocation', models.CharField(blank=True, max_length=100, null=True)),
                ('logo2', models.CharField(blank=True, db_column='Logo2', max_length=100, null=True)),
                ('usingtool', models.BooleanField(blank=True, db_column='usingTool', null=True)),
                ('usingmaintenance', models.BooleanField(blank=True, db_column='usingMaintenance', null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'db_table': 'CountryConfig',
            },
        ),
        migrations.CreateModel(
            name='LevelConfig',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('maxpop', models.IntegerField(blank=True, null=True)),
                ('minpop', models.IntegerField(blank=True, null=True)),
                ('uppervol', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('undervol', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('m25vol', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('m70vol', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('m25volnew', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('m70volnew', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('uppervolnew', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('undervolnew', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('name', models.CharField(blank=True, max_length=50, null=True)),
                ('dryvol', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('dryvolnew', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('country', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='settings.countryconfig')),
                ('parent', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='settings.levelconfig')),
            ],
            options={
                'db_table': 'LevelConfig',
            },
        ),
    ]
