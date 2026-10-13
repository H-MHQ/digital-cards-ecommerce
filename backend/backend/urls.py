from django.contrib import admin
from django.urls import path
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.urls import path, include
@api_view(['GET'])
def api_status(request):
    return Response({"status": "API is running", "project": "Digital Cards E-commerce"})

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/status/', api_status),
    path('api/', include('store.urls')),
]