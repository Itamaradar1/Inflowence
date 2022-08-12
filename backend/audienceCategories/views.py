from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from audienceCategories.models import audienceCategories
from audienceCategories.serializers import audienceCategoriesSerializer


class ListCreateAudienceCategories(ListCreateAPIView):
    """
       get:
       Returns all the Audience Categories

       post:
       Creates a new Audience Category instance and returns it
    """
    queryset = audienceCategories.objects.all()
    serializer_class = audienceCategoriesSerializer
    permission_classes = []


class GetPatchDeleteAudienceCategory(RetrieveUpdateDestroyAPIView):
    """
        get:
        Get the details of an Audience Category by providing its id.

        patch:
        Update an Audience Category by id.

        delete:
        Delete an Audience Category by id.
    """
    lookup_field = 'id'
    queryset = audienceCategories.objects.all()
    permission_classes = []
    serializer_class = audienceCategoriesSerializer

