# Generated by Django 5.1.1 on 2024-11-17 20:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecommerce', '0003_product_brand_product_category_product_description_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='discount',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='product',
            name='onSale',
            field=models.BooleanField(default=False),
        ),
    ]
