from rest_framework import serializers

from campaign.serializers import CampaignSerializer
from influencer.models import Influencer


class InfluencerSerializer(serializers.ModelSerializer):
    avatar_url = serializers.SerializerMethodField()
    campaigns = CampaignSerializer(read_only=True, many=True)

    def get_avatar_url(self, obj):
        try:
            domain_name = 'https://inflowence.propulsion-learn.ch'
            full_path = domain_name + obj.avatar.url
            return full_path
        except Exception:
            return None

    class Meta:
        model = Influencer
        fields = '__all__'
        depth = 1

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['avatar'] = representation.pop('avatar_url')
        return representation




class InfluencerSerializerCount(serializers.ModelSerializer):

    class Meta:
        model = Influencer
        fields = ('id',)



