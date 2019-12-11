from django.contrib import admin
from .models import Dish, Restaurant, Address, CityArea, City, Street, Review

# Register your models here.

class DishAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')

class RestaurantAdmin(admin.ModelAdmin):
    list_display = ()

class AddressAdmin(admin.ModelAdmin):
    list_display = ()

class CityAdmin(admin.ModelAdmin):
    list_display = ('name',)

class CityAreaAdmin(admin.ModelAdmin):
    list_display = ('name',)

class StreetAdmin(admin.ModelAdmin):
    list_display = ()


class ReviewAdmin(admin.ModelAdmin):
    list_display = ()


admin.site.register(Dish, DishAdmin)
admin.site.register(Restaurant, RestaurantAdmin)
admin.site.register(Address, AddressAdmin)
admin.site.register(City, CityAdmin)
admin.site.register(CityArea, CityAreaAdmin)
admin.site.register(Street, StreetAdmin)
admin.site.register(Review, ReviewAdmin)
