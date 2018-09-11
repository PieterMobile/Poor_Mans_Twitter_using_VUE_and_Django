from django.db import models
from datetime import datetime

# Create your models here.
class Message(models.Model):
    message_id = models.AutoField(primary_key=True)
    message_name = models.CharField(max_length=50)
    message_content = models.TextField(max_length=50)
    message_time = models.DateTimeField(default=datetime.now().replace(microsecond=0))