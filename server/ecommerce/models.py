from django.db import models
from django.contrib.auth.admin import  User
# Create your models here.
class Product(models.Model):
    user=models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    name=models.CharField(max_length=75,null=True,blank=True)
    brand=models.CharField(max_length=75,null=True,blank=True)
    subtitle=models.CharField(max_length=75,null=True,blank=True)
    decsription=models.TextField(max_length=75,null=True,blank=True)
    price=models.DecimalField(decimal_places=2,default=0,max_length=7)
    stock=models.IntegerField(default=0)
    rating=models.DecimalField(decimal_places=2,default=1,max_digits=5)
    category=models.CharField(null=True,blank=True)
    image=models.ImageField(upload_to='media')
    

    price=models.IntegerField(default=0)
    def __str__(self):
        return self.name