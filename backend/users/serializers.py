from rest_framework import serializers

from campaign.serializers import CampaignSerializer
from company.serializers import CompanySerializer
from influencer.serializers import InfluencerSerializer
from users.models import User


class UserSerializer(serializers.ModelSerializer):
    company_profile = CompanySerializer(read_only=True)
    influencer_profile = InfluencerSerializer(read_only=True)
    class Meta:
        model = User
        fields = ('id','username','first_name', 'last_name', 'email', 'company_profile', 'influencer_profile')

class UserSerializerLogin(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        email = serializers.EmailField()
        username = serializers.CharField(max_length=20)
        password = serializers.CharField(max_length=20)

