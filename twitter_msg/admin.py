from django.contrib import admin

# Register your models here.
from twitter_msg.models import Message

admin.site.register(Message)