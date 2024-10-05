from django.db import models
from django.contrib.auth.models import User  # Fixed import for User

# Create your models here.
class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=75, null=True, blank=True)
    brand = models.CharField(max_length=75, null=True, blank=True)
    subtitle = models.CharField(max_length=75, null=True, blank=True)
    description = models.TextField(max_length=75, null=True, blank=True)  # Fixed typo in 'description'
    price = models.DecimalField(decimal_places=2, default=0, max_digits=7)  # Changed to max_digits
    stock = models.IntegerField(default=0)
    rating = models.DecimalField(decimal_places=2, default=1, max_digits=5)  # Adjusted for max_digits
    category = models.CharField(max_length=75, null=True, blank=True)  # Added max_length
    image = models.ImageField(upload_to='media', default='media/default_image.png')  # Added default value

    def __str__(self):
        return self.name
