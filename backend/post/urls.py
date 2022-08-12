from django.urls import path

from post.views import ListCreatePost, GetPatchDeletePost

urlpatterns = [
    path('', ListCreatePost.as_view()),
    path('<int:id>/', GetPatchDeletePost.as_view()),
]
