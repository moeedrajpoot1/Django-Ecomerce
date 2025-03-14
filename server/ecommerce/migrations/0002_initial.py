# Generated by Django 5.1.6 on 2025-03-10 23:07

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('ecommerce', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=75, null=True)),
                ('brand', models.CharField(blank=True, max_length=75, null=True)),
                ('subtitle', models.CharField(blank=True, max_length=75, null=True)),
                ('description', models.TextField(blank=True, max_length=75, null=True)),
                ('price', models.DecimalField(decimal_places=2, default=0, max_digits=7)),
                ('discount', models.IntegerField(default=0)),
                ('stock', models.IntegerField(default=0)),
                ('onSale', models.BooleanField(default=False)),
                ('rating', models.DecimalField(decimal_places=2, default=1, max_digits=5)),
                ('category', models.CharField(blank=True, max_length=75, null=True)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ProductImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='media')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='ecommerce.product')),
            ],
        ),
    ]
