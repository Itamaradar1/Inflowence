from django.contrib.auth import get_user_model
from django.db import models
from django_countries.fields import CountryField

User = get_user_model()


def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    return f'{instance.user.id}/{filename}'


class Influencer(models.Model):
    user = models.OneToOneField(to=User, on_delete=models.CASCADE, related_name='influencer_profile')
    country = CountryField()
    avatar = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
    age = models.IntegerField()
    GENDER_CHOICES = [
        (1, 'Man'),
        (2, 'Woman'),
        (3, 'Other'),
        (4, 'Prefer not to respond'),
    ]
    gender = models.IntegerField(choices=GENDER_CHOICES)
    price = models.IntegerField()
    CURRENCY_CHOICE = [
        (1, '$'),
        (2, '€'),
        (3, 'JP¥'),
        (4, '£ '),
        (5, 'CHF'),
        (6, 'CAD'),
    ]
    currency = models.IntegerField(choices=CURRENCY_CHOICE)
    charging_method = models.TextField()
    payement_method = models.TextField()
    channels = models.TextField()
    description = models.TextField()
    language = models.CharField(max_length=250, blank=True)
    date_created = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'Influencer: {self.user.username}'
