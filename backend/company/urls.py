from django.urls import path

from company.views import ListCreateCompany, GetPatchDeleteCompany

urlpatterns = [
    path('', ListCreateCompany.as_view()),
    path('<int:id>/', GetPatchDeleteCompany.as_view()),
]
