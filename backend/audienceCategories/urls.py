from django.urls import path

from audienceCategories.views import ListCreateAudienceCategories, GetPatchDeleteAudienceCategory

urlpatterns = [
    path('', ListCreateAudienceCategories.as_view()),
    path('<int:id>/', GetPatchDeleteAudienceCategory.as_view()),
]
