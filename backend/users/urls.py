from django.urls import path

from users.views import ListCreateUser, GetPatchDeleteUser, RegisterUser, UserValidationProfile, GetUserMeAPIView, SearchUserByEmail

urlpatterns = [
    path('', ListCreateUser.as_view()),
    path('<int:id>/', GetPatchDeleteUser.as_view()),
    path('registration/', RegisterUser.as_view()),
    path('validation/', UserValidationProfile.as_view()),
    path('me/', GetUserMeAPIView.as_view()),
    path('search/<str:email>/', SearchUserByEmail.as_view()),
]
