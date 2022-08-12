from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from campaign.models import Campaign
from campaign.serializers import CampaignSerializer


class ListCreateCampaign(ListCreateAPIView):
    """
    get:
    Returns all the Campaigns

    post:
    Creates a new Campaign instance and returns it
    """
    queryset = Campaign.objects.all()
    serializer_class = CampaignSerializer
    permission_classes = []


class GetPatchDeleteCampaign(RetrieveUpdateDestroyAPIView):
    """
    get:
    Get the details of a Campaign by providing its id.

    patch:
    Update a Campaign by id.

    delete:
    Delete a Campaign by id.
    """
    lookup_field = 'id'
    queryset = Campaign.objects.all()
    permission_classes = []
    serializer_class = CampaignSerializer
