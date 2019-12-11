from django.urls import path
from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    path('create', views.RestaurantListCreate.as_view() ),
    url(r'^admin/', admin.site.urls),
]