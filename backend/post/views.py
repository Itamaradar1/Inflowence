from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from post.models import Post
from post.serializers import PostSerializer


class ListCreatePost(ListCreateAPIView):
    """
    get:
    Returns all the Posts

    post:
    Creates a new Post instance and returns it
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = []


class GetPatchDeletePost(RetrieveUpdateDestroyAPIView):
    """
    get:
    Get the details of a Post by providing its id.

    patch:
    Update a Post by id.

    delete:
    Delete a Post by id.
    """
    lookup_field = 'id'
    queryset = Post.objects.all()
    permission_classes = []
    serializer_class = PostSerializer
