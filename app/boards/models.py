from django.db import models
from django.contrib.auth.models import User



class Address(models.Model):
    street = models.ForeignKey('Street', related_name='%(class)s', on_delete=models.PROTECT)
    number = models.IntegerField()

class Restaurant(models.Model):
    name = models.CharField(max_length=30, unique=True)  # do we want it to be unique?
    address = models.ForeignKey(Address, related_name='%(class)s', on_delete=models.PROTECT)



class City(models.Model):
    name = models.CharField(max_length=30, unique=True)

class CityArea(models.Model):
    name = models.CharField(max_length=30, unique=True)
    city = models.ForeignKey(City, related_name='%(class)s', on_delete=models.PROTECT)

class Dish(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=100)
    restaurant = models.ForeignKey(Restaurant, related_name='%(class)s', on_delete=models.PROTECT)

class Street(models.Model):
    name = models.CharField(max_length=30)
    city = models.ForeignKey(City, related_name='%(class)s', on_delete=models.PROTECT)
    city_area = models.ForeignKey(CityArea, related_name='%(class)s', on_delete=models.PROTECT)


class Review(models.Model):
    user = User()
    description = models.CharField(max_length=100)
    dish = models.ForeignKey(Dish, related_name='%(class)s', on_delete=models.PROTECT)
