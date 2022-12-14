from django.db import models
from facilities.models import Facility
# Create your models here.

class HR (models.Model):
    class gender(models.TextChoices):
        male='male'
        female='female'

    id=models.AutoField(primary_key=True)
    facility=models.ForeignKey(Facility, on_delete=models.CASCADE, blank=True, null=True)
    full_name=models.CharField(max_length=100,blank=True,null=True)
    position_level=models.CharField(max_length=100,blank=True,null=True)
    genders=models.CharField(max_length=10,choices=gender.choices,blank=True,null=True)
    educatioin_level=models.CharField(max_length=100,blank=True,null=True)
    years_in_service=models.IntegerField(   blank=True,null=True)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    year_in_position=models.IntegerField(blank=True,null=True)