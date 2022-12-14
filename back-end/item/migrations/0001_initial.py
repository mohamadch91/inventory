# Generated by Django 4.0.6 on 2022-09-29 10:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('items', '0001_initial'),
        ('facilities', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='item',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=20, null=True)),
                ('TypeP', models.CharField(blank=True, max_length=50, null=True)),
                ('Manufacturer', models.CharField(blank=True, max_length=50, null=True)),
                ('Model', models.CharField(blank=True, max_length=50, null=True)),
                ('Type1', models.CharField(blank=True, max_length=50, null=True)),
                ('Type2', models.CharField(blank=True, max_length=50, null=True)),
                ('Type3', models.CharField(blank=True, max_length=50, null=True)),
                ('Type4', models.CharField(blank=True, max_length=50, null=True)),
                ('Type5', models.CharField(blank=True, max_length=50, null=True)),
                ('Type1P', models.CharField(blank=True, max_length=50, null=True)),
                ('Height', models.FloatField(blank=True, null=True)),
                ('Width', models.FloatField(blank=True, null=True)),
                ('Length', models.FloatField(blank=True, null=True)),
                ('GrossVolume', models.FloatField(blank=True, null=True)),
                ('NetShippingVolume', models.FloatField(blank=True, null=True)),
                ('Weightkg', models.FloatField(blank=True, null=True)),
                ('ExternalSize', models.CharField(blank=True, max_length=50, null=True)),
                ('NumberOfDoors', models.IntegerField(blank=True, null=True)),
                ('IsThereInsideDoor', models.BooleanField(blank=True, null=True)),
                ('DoesItHaveAnAlarmSystem', models.BooleanField(blank=True, null=True)),
                ('DoesItHaveAdequateShelves', models.BooleanField(blank=True, null=True)),
                ('DoesItHaveCurtain', models.BooleanField(blank=True, null=True)),
                ('PhysicalConditions', models.CharField(blank=True, max_length=50, null=True)),
                ('TechnicalConditions', models.CharField(blank=True, max_length=50, null=True)),
                ('WorkingConditions', models.CharField(blank=True, max_length=50, null=True)),
                ('IsItFunctioning', models.BooleanField(blank=True, null=True)),
                ('NotInUseSince', models.IntegerField(blank=True, null=True)),
                ('ReasonsForNotFunctioning', models.CharField(blank=True, max_length=50, null=True)),
                ('YearInstalled', models.CharField(blank=True, max_length=50, null=True)),
                ('RunningTime', models.IntegerField(blank=True, null=True)),
                ('RunningTimeKm', models.IntegerField(blank=True, null=True)),
                ('StorageCondition', models.CharField(blank=True, max_length=50, null=True)),
                ('NetVaccineStorageCapacity', models.FloatField(blank=True, null=True)),
                ('EnergySource', models.CharField(blank=True, max_length=50, null=True)),
                ('FreezerNetCapacity', models.FloatField(blank=True, null=True)),
                ('IceMakingCapacity', models.FloatField(blank=True, null=True)),
                ('CoolWaterProductionCapacity', models.IntegerField(blank=True, null=True)),
                ('NumberOfCoolingUnits', models.IntegerField(blank=True, null=True)),
                ('WorkingTemperatureRange', models.CharField(blank=True, max_length=50, null=True)),
                ('RefrigerantGas', models.CharField(blank=True, max_length=50, null=True)),
                ('IsTheRefrigerantGasCFCFree', models.BooleanField(blank=True, null=True)),
                ('DoesItHaveFreezingCompartment', models.BooleanField(blank=True, null=True)),
                ('DoesItHaveContinuousTemperatureMonitoringDevice', models.BooleanField(blank=True, null=True)),
                ('DoesItHaveBuiltInThermometer', models.BooleanField(blank=True, null=True)),
                ('NumberOfCoolantPacksRequired', models.IntegerField(blank=True, null=True)),
                ('CoolantPackNominalCapacity', models.IntegerField(blank=True, null=True)),
                ('Voltage', models.IntegerField(blank=True, null=True)),
                ('Phase', models.IntegerField(blank=True, null=True)),
                ('NetGeneratedPower', models.IntegerField(blank=True, null=True)),
                ('EnergySource_generator', models.CharField(blank=True, max_length=50, null=True)),
                ('DoesItHaveAnExtraFuelTank', models.BooleanField(blank=True, null=True)),
                ('PowerOrFuelConsumption', models.IntegerField(blank=True, null=True)),
                ('IsThereAnAutomaticStartUpSystem', models.BooleanField(blank=True, null=True)),
                ('FinancialSource', models.IntegerField(blank=True, null=True)),
                ('UnitCostWhenInstalled', models.IntegerField(blank=True, null=True)),
                ('UnitCostAtPresent', models.IntegerField(blank=True, null=True)),
                ('OriginalCost', models.IntegerField(blank=True, null=True)),
                ('wVSSMCode', models.CharField(blank=True, max_length=50, null=True)),
                ('UNICEFCatalogueCodes', models.CharField(blank=True, max_length=50, null=True)),
                ('OtherCode', models.CharField(blank=True, max_length=50, null=True)),
                ('PQSPISCode', models.CharField(blank=True, max_length=50, null=True)),
                ('PQSPISType', models.CharField(blank=True, max_length=50, null=True)),
                ('PQSPISManufacturer', models.CharField(blank=True, max_length=50, null=True)),
                ('PQSPISRefrigerantGas', models.CharField(blank=True, max_length=50, null=True)),
                ('PQSPISTemperatureWorkingZone', models.CharField(blank=True, max_length=50, null=True)),
                ('DoesTheDryStoreHaveAdequateLighting', models.BooleanField(blank=True, null=True)),
                ('DoesTheDryStoreHaveHeating', models.BooleanField(blank=True, null=True)),
                ('DoesTheDryStoreHaveAirConditioning', models.BooleanField(blank=True, null=True)),
                ('IsTheDryStorageAreaProtectedFromDirectSunlight', models.BooleanField(blank=True, null=True)),
                ('IsTheDryStorageArea', models.BooleanField(blank=True, null=True)),
                ('IsTheDryStorageAreaClean', models.BooleanField(blank=True, null=True)),
                ('IsTheDryStorageAreaDry', models.BooleanField(blank=True, null=True)),
                ('IsTheDryStorageAreaEquippedWithMechanical', models.BooleanField(blank=True, null=True)),
                ('SurfaceArea', models.IntegerField(blank=True, null=True)),
                ('AccessibleHeight', models.IntegerField(blank=True, null=True)),
                ('SerialNumber', models.CharField(blank=True, max_length=50, null=True)),
                ('RepairAndMaintenanceHistory', models.CharField(blank=True, max_length=50, null=True)),
                ('MaintenanceGroup', models.CharField(blank=True, max_length=50, null=True)),
                ('OtherFieldsItem1', models.CharField(blank=True, max_length=50, null=True)),
                ('OtherFieldsItem2', models.BooleanField(blank=True, null=True)),
                ('OtherFieldsItem3', models.CharField(blank=True, max_length=50, null=True)),
                ('OtherFieldsItemParameter4', models.CharField(blank=True, max_length=50, null=True)),
                ('isDel', models.BooleanField(default=False)),
                ('delete_reason', models.CharField(blank=True, max_length=50, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('updated_at', models.DateTimeField(auto_now=True, null=True)),
                ('facility', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='facilities.facility')),
                ('item_class', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='items.itemclass')),
                ('item_type', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='items.itemtype')),
            ],
        ),
    ]
