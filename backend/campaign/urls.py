from django.urls import path

from campaign.views import ListCreateCampaign, GetPatchDeleteCampaign

urlpatterns = [
    path('',  ListCreateCampaign.as_view()),
    path('<int:id>/', GetPatchDeleteCampaign.as_view()),
]
