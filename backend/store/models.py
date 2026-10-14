from django.db import models

# Create your models here.
class Product(models.Model):
    PLATFORM_CHOICES = [
        ('PSN', 'PlayStation'),
        ('STEAM', 'Steam'),
        ('XBOX', 'Xbox'),
        ('NINTENDO', 'Nintendo'),
        ('EPIC', 'Epic Games Store'),
        ('ORIGIN', 'Origin'),
        ('GOG', 'GOG'),
        ('UBISOFT', 'Ubisoft Store'),
        ('BATTLE_NET', 'Battle.net'),
        ('Valorant', 'Valorant'),
        ('OTHER', 'Other'),
    ]

    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=6, decimal_places=2) # Max price 9999.99
    platform = models.CharField(max_length=50, choices=PLATFORM_CHOICES)
    stock_quantity = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    #Images
    image = models.ImageField(upload_to='product_images/', null=True, blank=True)

def __str__(self):
    return f"{self.name} - {self.platform}"