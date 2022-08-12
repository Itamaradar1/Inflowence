from django.urls import path

from influencer.views import ListCreateInfluencer, GetPatchDeleteInfluencer, GetAllInfluencerIDs

urlpatterns = [
    path('', ListCreateInfluencer.as_view()),
    path('<int:id>/', GetPatchDeleteInfluencer.as_view()),
    path('all/', GetAllInfluencerIDs.as_view()),
]
