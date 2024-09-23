
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
     path('',include('ecommerce.urls')),
      path('pos/',include('pos.urls')),
       path('classified',include('classified.urls')),
    path('admin/', admin.site.urls),
]
