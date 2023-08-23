from email.policy import default
from django.db import models
class Student(models.Model):
    sid = models.IntegerField()
    sBD = models.DateField()
    name = models.CharField(max_length = 500)
    phone = models.CharField(max_length=11)
    email = models.CharField(max_length = 500)
    level = models.CharField(max_length = 10)
    Dpt = models.CharField(max_length = 200, null=True, blank=True)
    sgpa = models.CharField(max_length=200)
    level = models.CharField(max_length=200)
    gender = models.BooleanField(default= True)
    stat = models.BooleanField(default = True)

