from django.db import models

from company.models import Company
from influencer.models import Influencer


class PostingCalendar(models.Model):
    influencer = models.OneToOneField(to=Influencer, on_delete=models.PROTECT, related_name='postingCalendar')
    company = models.OneToOneField(to=Company, on_delete=models.PROTECT, related_name='postingCalendar')

    def __str__(self):
        return f'Posting Calendar of influencer {self.influencer.user.username} for company {self.company.user.username}'
