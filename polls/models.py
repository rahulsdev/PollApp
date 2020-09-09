from django.db import models
from django.utils import timezone
import datetime
from django.contrib.auth.models import User
# Create your models here.

class ProfilePicModel(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)

    role = models.CharField(max_length=10)
    image = models.ImageField(upload_to='static/images',blank=True)
    class Meta:
        db_table = 'ProfilePicModel'


class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date      = models.DateTimeField('date published')

    def was_published_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.pub_date <= now
    def __str__(self):
        return self.question_text
    class Meta:
        db_table = 'question'

class Choice(models.Model):
    question    = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes       = models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text
    class Meta:
        db_table = 'choice'