from rest_framework import serializers

from campaign.models import Campaign


class CampaignSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    def get_image_url(self, obj):
        try:
            domain_name = 'https://inflowence.propulsion-learn.ch'
            full_path = domain_name + obj.image.url
            return full_path
        except Exception:
            return None

    class Meta:
        model = Campaign
        fields = '__all__'

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['image'] = representation.pop('image_url')
        return representation