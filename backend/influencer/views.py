from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView

from influencer.models import Influencer
from influencer.serializers import InfluencerSerializer, InfluencerSerializerCount


class ListCreateInfluencer(ListCreateAPIView):
    """
    get:
    Returns all the Influencers

    post:
    Creates a new Influencer instance and returns it
    """
    queryset = Influencer.objects.all()
    serializer_class = InfluencerSerializer
    permission_classes = []


class GetPatchDeleteInfluencer(RetrieveUpdateDestroyAPIView):
    """
    get:
    Get the details of a Influencer by providing its id.

    patch:
    Update a Influencer by id.

    delete:
    Delete a Influencer by id.
    """
    lookup_field = 'id'
    queryset = Influencer.objects.all()
    permission_classes = []
    serializer_class = InfluencerSerializer


class GetAllInfluencerIDs(ListCreateAPIView):
    queryset = Influencer.objects.all()
    serializer_class = InfluencerSerializerCount

