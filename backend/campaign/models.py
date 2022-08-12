from django.db import models

import postingCalendar
from company.models import Company
from influencer.models import Influencer

def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    return f'campaign/{instance.id}/{filename}'

class Campaign(models.Model):
    name = models.CharField(max_length=250)
    company = models.ForeignKey(to=Company, on_delete=models.CASCADE, related_name='campaigns')
    influencers = models.ManyToManyField(to=Influencer, related_name='campaigns', blank=True)
    BUDGET_CHOICES = [
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
    budget_amount = models.IntegerField(choices=BUDGET_CHOICES)
    BUDGET_CURRENCY = [
        (1, '$'),
        (2, '€'),
        (3, 'JP¥'),
        (4, '£ '),
        (5, 'CHF'),
        (6, 'CAD'),
    ]
    budget_currency = models.IntegerField(choices=BUDGET_CURRENCY)
    start_date = models.DateField()
    end_date = models.DateField()
    location = models.CharField(max_length=250, blank=True)
    channels = models.TextField()
    description = models.TextField()
    product = models.TextField()
    language = models.CharField(max_length=250, blank=True)
    date_created = models.DateField(auto_now_add=True)
    image = models.ImageField(upload_to=user_directory_path, blank=True, null=True)

    def __str__(self):
        return f'{self.name} by {self.company.name} from {self.start_date} to {self.end_date}'
