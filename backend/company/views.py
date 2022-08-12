from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from company.models import Company
from company.serializers import CompanySerializer


class ListCreateCompany(ListCreateAPIView):
    """
    get:
    Returns all the Companies

    post:
    Creates a new Company instance and returns it
    """
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    permission_classes = []


class GetPatchDeleteCompany(RetrieveUpdateDestroyAPIView):
    """
    get:
    Get the details of a Company by providing its id.

    patch:
    Update a Company by id.

    delete:
    Delete a Company by id.
    """
    lookup_field = 'id'
    queryset = Company.objects.all()
    permission_classes = []
    serializer_class = CompanySerializer
