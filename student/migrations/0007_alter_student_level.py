# Generated by Django 4.0.4 on 2022-05-22 20:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0006_rename_status_student_stat'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='level',
            field=models.CharField(max_length=200),
        ),
    ]
