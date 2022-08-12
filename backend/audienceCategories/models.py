from django.db import models
from django_countries.fields import CountryField

from campaign.models import Campaign
from company.models import Company
from influencer.models import Influencer


class audienceCategories(models.Model):
    name = models.CharField(max_length=250)
    GENDER_CHOICES = [
        (1, 'Men'),
        (2, 'Women'),
        (3, 'Men and Women'),
        (4, 'Teenager'),
        (5, 'Children'),
    ]
    gender = models.IntegerField(choices=GENDER_CHOICES)
    age = models.IntegerField()
    language = models.CharField(max_length=250, blank=True)
    targeted_country = CountryField()
    influencers = models.ManyToManyField(to=Influencer, related_name='audienceCategories', blank=True)
    companies = models.ManyToManyField(to=Company, related_name='audienceCategories',  blank=True)
    campaigns = models.ManyToManyField(to=Campaign, related_name='audienceCategories',  blank=True)
    description = models.TextField()
    average_spending = models.TextField()
    channels = models.TextField()

