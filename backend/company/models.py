from django.contrib.auth import get_user_model
from django.db import models
from django_countries.fields import CountryField

from influencer.models import Influencer

User = get_user_model()


def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    return f'{instance.user.id}/{filename}'


class Company(models.Model):
    name = models.CharField(max_length=250)
    user = models.OneToOneField(to=User, on_delete=models.CASCADE, related_name='company_profile')
    avatar = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
    influencers = models.ManyToManyField(to=Influencer, related_name='companies', blank=True)
    RATING_CHOICES = [
        (1, '1'),
        (2, '2'),
        (3, '3'),
        (4, '4'),
        (5, '5'),
    ]
    rating = models.IntegerField(choices=RATING_CHOICES, blank=True, null=True)
    country = CountryField()
    MARKETING_BUDGET_CHOICES = [
        (1, '<1k '),
        (2, '1\'000-10\'000'),
        (3, '10\'000- 50\'000'),
        (4, '50\'000- 100\'000'),
        (5, '100\'000-500\'000'),
        (6, '500\'000-1\'000\'000'),
        (7, '1\'000\'000 - 2\'500\'000'),
        (8, '2\'500\'000 5\'000\'000'),
        (9, '5\'000\'000 10\'000\'000'),
        (10, '> 10\'000\'000'),
    ]
    marketing_budget = models.IntegerField(choices=MARKETING_BUDGET_CHOICES)
    COMPANY_CATEGORY_CHOICES = [
        (1, 'Ecommerce'),
        (2, 'B2C'),
        (3, 'B2B'),
        (4, 'Non-profit'),
        (5, 'Agency'),
        (6, 'Other'),
    ]
    company_category = models.IntegerField(choices=COMPANY_CATEGORY_CHOICES)
    SIZE_CHOICES = [
        (1, 'Start-up'),
        (2, 'Small company'),
        (3, 'Medium-sized company'),
        (4, 'Large company'),
    ]
    size = models.IntegerField(choices=SIZE_CHOICES)
    INFLUENCER_EXPERIENCE_CHOICES = [
        (1, 'None'),
        (2, '1-5'),
        (3, '5-25'),
        (4, 'More than 25'),
    ]
    influencer_experience = models.IntegerField(choices=INFLUENCER_EXPERIENCE_CHOICES,
                                                verbose_name='Number of influencer(s) you worked with in the past',
                                                blank=True, null=True)
    description = models.TextField()
    liked_by = models.ManyToManyField(to=Influencer, related_name='liked_companies', blank=True)
    date_created = models.DateField(auto_now_add=True)
    language = models.CharField(max_length=250, blank=True)

    def __str__(self):
        return f'{self.name}'

