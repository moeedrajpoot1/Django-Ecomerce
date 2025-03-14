from rest_framework import serializers
from .models import *



class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model=ProductImage
        fields=["image"]

class ProductSerialzer(serializers.ModelSerializer):
    images=ProductImageSerializer(many=True,read_only=True)
    class Meta:
        model=Product
        fields="__all__"