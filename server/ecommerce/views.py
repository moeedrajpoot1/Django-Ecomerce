from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import ProductSerialzer

from .models import *
# Create your views here.
@api_view(["GET"])
def fetchAllProducts(request):
    products=Product.objects.all()
    serailzer=ProductSerialzer(products,many=True)
    return Response(serailzer.data)

@api_view(['GET'])
def fetchProduct(request,id):
    product=Product.objects.get(id=id)
    serializer=ProductSerialzer(product,many=False)
    return Response(serializer.data)
def index(request):
    pass