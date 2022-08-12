#from django.contrib.auth import get_user_model
from rest_framework import serializers

from audienceCategories.models import audienceCategories
#from users.serializers import UserSerializer

#User = get_user_model()


class audienceCategoriesSerializer(serializers.ModelSerializer):
    #user = UserSerializer(read_only=True)

    class Meta:
        model = audienceCategories
        fields = '__all__'
        depth = 1
