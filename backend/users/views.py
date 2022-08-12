from django.contrib.auth.hashers import make_password
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView, GenericAPIView, \
    get_object_or_404, RetrieveAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import filters
from users.models import User
from users.serializers import UserSerializer, UserSerializerLogin


class ListCreateUser(ListCreateAPIView):
    """
    get:
    Returns all the Users

    post:
    Creates a new User instance and returns it
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []


class SearchUserByEmail(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []
    lookup_field = 'email'
    lookup_field_kwarg = 'email'



class GetPatchDeleteUser(RetrieveUpdateDestroyAPIView):
    """
    get:
    Get the details of a User by providing its id.

    patch:
    Update a User by id.

    delete:
    Delete a User by id.
    """
    lookup_field = 'id'
    queryset = User.objects.all()
    permission_classes = []
    serializer_class = UserSerializer


class RegisterUser(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializerLogin
    permission_classes = [AllowAny]


class UserValidationProfile(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializerLogin
    permission_classes = []
    lookup_field = "email"

    def get_object(self):
        obj = get_object_or_404(self.get_queryset().filter(email=self.request.data['email']))
        return obj

    def patch(self, request, *args, **kwargs):
        user_to_be_validated = self.get_object()
        serializer = self.get_serializer(user_to_be_validated, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save(password=make_password(serializer.validated_data['password']))
        return Response(serializer.data)


class GetUserMeAPIView(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []

    def get(self, request, *args, **kwargs):
        instance = self.request.user
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def patch(self, request, *args, **kwargs):
        instance = self.request.user
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
