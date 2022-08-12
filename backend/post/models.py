from django.db import models

from campaign.models import Campaign
from postingCalendar.models import PostingCalendar

from company.models import Company


class Post(models.Model):
    channel = models.TextField()
    link = models.TextField()
    COMPLETION_CHOICES = [
        (1, 'Not done yet'),
        (2, 'In progress'),
        (3, 'Done'),
    ]
    completion = models.IntegerField(choices=COMPLETION_CHOICES)
    author = models.ForeignKey(to=Company, on_delete=models.CASCADE, related_name='posts')
    campaign = models.ForeignKey(to=Campaign, on_delete=models.CASCADE, related_name='posts')
    posting_calendar = models.ForeignKey(to=PostingCalendar, on_delete=models.CASCADE, related_name='posts')

    def __str__(self):
        return f'Post from {self.author.user.username}'





