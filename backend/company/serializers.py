from rest_framework import serializers

from campaign.serializers import CampaignSerializer
from company.models import Company


class CompanySerializer(serializers.ModelSerializer):
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
        model = Company
        fields = ('id','name','avatar','avatar_url','rating','country','company_category','size','influencer_experience','description','date_created','language','user','influencers','liked_by','campaigns')

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['avatar'] = representation.pop('avatar_url')
        return representation