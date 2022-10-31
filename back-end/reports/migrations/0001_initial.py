# Generated by Django 4.0.6 on 2022-09-29 10:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('settings', '0001_initial'),
        ('facilities', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='gapSave',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('code', models.CharField(blank=True, max_length=20, null=True)),
                ('condition', models.IntegerField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('req_capacity', models.FloatField(default=0)),
                ('available', models.FloatField(default=0)),
                ('func_cap', models.FloatField(default=0)),
                ('exces', models.FloatField(default=0)),
                ('calculate_for', models.CharField(blank=True, max_length=20, null=True)),
                ('general', models.IntegerField(blank=True, default=0, null=True)),
                ('under_1', models.IntegerField(blank=True, default=0, null=True)),
                ('planned', models.BooleanField(default=False)),
                ('facility', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='facility_gap', to='facilities.facility')),
                ('level', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='level', to='settings.levelconfig')),
                ('parent_fac', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='parent_fac', to='facilities.facility')),
            ],
        ),
        migrations.CreateModel(
            name='plannedGap',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('pqs_type', models.IntegerField()),
                ('pqs_id', models.IntegerField()),
                ('provided', models.BooleanField(default=False)),
                ('asiign', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('gap', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='saved_gap', to='reports.gapsave')),
            ],
        ),
    ]