from rest_framework import routers
from twitter_msg.viewsets import MessageViewSet

router = routers.DefaultRouter()

router.register(r'message', MessageViewSet)

