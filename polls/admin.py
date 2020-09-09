from django.contrib import admin

from .models import Question,Choice,ProfilePicModel
mymodels = [Question,Choice,ProfilePicModel]
class ChoiceInline(admin.TabularInline):
    model = Choice
    extra = 0
class QuestionAdmin(admin.ModelAdmin):
    fieldsets = [
        (None,  {'fields':['question_text']}),
        ('Date Information',{'fields':['pub_date'],
        'classes': ['collapse']}),

    ]
    inlines = [ChoiceInline]
admin.site.register(mymodels)