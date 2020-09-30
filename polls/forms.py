from django import forms
from django.contrib.auth.forms import UserCreationForm,AuthenticationForm
from django.contrib.auth.models import User
from .models import ProfilePicModel


class SignUpForm(UserCreationForm):

    username     = forms.CharField(widget = forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Username'})
                                   ,required=False)
    first_name   = forms.CharField(widget =forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'First Name'}),
                                 max_length=32, required=False)
    last_name    = forms.CharField(widget =forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Last Name'}),
                                max_length=32,required=False)

    password1    = forms.CharField(widget =forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Password'})
                                   ,required=False)
    password2    = forms.CharField(widget =forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Password Again'}),
                                   required=False)

    class Meta:
        model = User
        fields =  ('first_name', 'last_name','username',)

class Profile(forms.ModelForm):
    roles = (('User', 'User'), ('Admin', 'Admin'))
    role = forms.ChoiceField(widget=forms.Select(attrs={'class': 'form-control'}), choices=roles, required=False)
    class Meta:
        model = ProfilePicModel
        fields = ('image','role')


class LoginForm(AuthenticationForm):
    username = forms.CharField(required=True, widget= forms.TextInput(attrs={'class' : 'form-control'}))
    password = forms.CharField(required=True, widget= forms.PasswordInput(attrs={'class' : 'form-control'}))

    class Meta:
        fields = ['username', 'password','user']




