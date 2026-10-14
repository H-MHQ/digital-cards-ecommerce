from django.contrib import admin
from django.urls import path
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

@api_view(['GET'])
def api_status(request):
    return Response({"status": "API is running", "project": "Digital Cards E-commerce"})

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/status/', api_status),
    path('api/', include('store.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)