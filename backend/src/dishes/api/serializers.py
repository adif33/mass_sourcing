from rest_framework import serializers

# from backend.src.dishes.models import Dish
from dishes.models import Dish



class DishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dish
        fields = ('title', 'content')