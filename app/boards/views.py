from django.shortcuts import render  # was here before
from django.http import HttpResponse
from rest_framework import generics
from boards.models import Restaurant
from boards.serializers import RestaurantSerializer
from rest_framework import viewsets

def home(request):
    return HttpResponse('Hello, World!')


# class RestaurantListCreate(generics.ListCreateAPIView):
class RestaurantView(viewsets.ModelViewSet):

    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer