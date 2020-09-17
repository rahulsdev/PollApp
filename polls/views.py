from itertools import zip_longest
import PyPDF2 as p2
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse,HttpResponseRedirect
from django.template.loader import render_to_string
from django.urls import reverse
from django.views import generic
from .forms import SignUpForm,LoginForm,Profile
from .models import Question,Choice,User,ProfilePicModel
from django.contrib.auth import authenticate,login as auth_login ,logout as auth_logout
from bs4 import BeautifulSoup
import requests


def signup(request):
    user_form        = SignUpForm(request.POST)
    profile_form     = Profile(request.POST,request.FILES)
    if request.method == 'POST':
        if user_form.is_valid() and profile_form.is_valid():
            user = user_form.save()
            profile = profile_form.save(commit=False)
            profile.user = user
            if 'image' in request.FILES:
                profile.picture = request.FILES['image']
                profile.save()
            return redirect('polls:sign_success')
        else:
            print(user_form.errors,profile_form.errors)
    context = {'form': user_form, 'picture_form': profile_form}
    return render(request,'polls/signup.html',context)

# def pdf_view(request):
#     file = open("media/pdf/A Sample PDF.pdf","rb")
#     pdfread = p2.PdfFileReader(file)
#     x = pdfread.getPage(0)
#     textFile = open("media/txt/text.txt",'a')
#     textFile.write(x.extractText())
#     text ={}
#     text["t"] = x.extractText()
#     return render(request,'polls/pdf_view.html',text)


def scrap(request):
    link = request.POST['url']
    source = requests.get(link).text
    soup = BeautifulSoup(source,'lxml')
    code = soup.prettify()

    return render(request,'polls/scrap_code.html',{'soup':code})



def scrap_flipkart(request):
    source = requests.get('https://www.flipkart.com/').text
    soup = BeautifulSoup(source,'lxml')
    product_list = []
    area = soup.find_all('div',class_='_1GRhLX _3JslKL')
    for all in area:
        data_list = []
        heading = all.find('h2', class_='puxlXr').text
        section = all.find_all('div',class_='_2kSfQ4')
        test = {'heading':heading}

        for each in section:
            product_data = {}
            name     = each.find('div', class_='iUmrbN')
            discount = each.find('div', class_='BXlZdc')
            more     = each.find('div', class_='_3o3r66')

            product_data["name"] = name.text
            product_data["discount"] = discount.text
            product_data["more"] = more.text

            data_list.append(product_data)
        test["data"] = data_list
        product_list.append(test)
    print(product_list)
    page1 = {'product_list':product_list}
    return render(request,'polls/scrap_flipkart.html',page1)







class adminView(LoginRequiredMixin,generic.ListView):
    login_url = '/login'
    model = User
    template_name = 'polls/show.html'
    context_object_name = 'user_details'

    def get_queryset(self):
        return User.objects.filter(is_superuser = 0)
@login_required(login_url='/login')
def update(request,id):
    obj = User.objects.get(id = id)
    context_update ={}
    form = SignUpForm(request.POST or None, instance=obj)
    if form.is_valid():
        form.save()
        return redirect('polls:show')
    context_update["form2"] = form
    context_update["obj2"] = obj
    return render(request,'polls/signup.html',context_update)

@login_required(login_url='/login')
def delete(request,id):
    user = User.objects.get(id = id)
    user.delete()
    return redirect("polls:show")

def login(request):
    form = LoginForm()
    username = request.POST.get('username')
    password = request.POST.get('password')

    if(request.method == 'POST'):
        roles = User.objects.filter(username=username).first().profilepicmodel.role
        user = authenticate(request, username = username, password = password)
        if user is not None and roles =='User' :
            auth_login(request,user)
            return redirect('polls:index')
        elif user is not None and roles == 'Admin':
            auth_login(request, user)
            return redirect('polls:show')
        else:
            return HttpResponse('Invalid Inputs')

    else:
        return render(request,'polls/login.html',{'form':form})

def signup_success(request):
    return render(request,'polls/signup_success.html')

def logout(request):
    auth_logout(request)
    return redirect('polls:login')

def main_page(request):
    return render(request,'polls/main_page.html')






#----------------------------------------------------------------
@login_required(login_url='/login')
def results(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'polls/results.html', {'question': question})

@login_required(login_url='/login')
def index(request):
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    context = {'latest_question_list': latest_question_list}
    return render(request, 'polls/index.html', context)
@login_required(login_url='/login')
def detail(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'polls/detail.html', {'question': question})
@login_required(login_url='/login')
def vote(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    try:
        selected_choice = question.choice_set.get(pk=request.POST['choice'])
    except (KeyError, Choice.DoesNotExist):
        # Redisplay the question voting form.
        return render(request, 'polls/detail.html', {
            'question': question,
            'error_message': "You didn't select a choice.",
        })
    else:
        selected_choice.votes += 1
        selected_choice.save()
        return HttpResponseRedirect(reverse('polls:results', args=(question.id,)))
#-------------------------------------------------------------------------------------
# GENERIC VIEW

'''class IndexView(generic.ListView):
    template_name = 'polls/index.html'
    context_object_name = 'latest_question_list'

    def get_queryset(self):
        return Question.objects.order_by('-pub_date')[:5]


class DetailView(generic.DetailView):
    ...
    def get_queryset(self):
        """
        Excludes any questions that aren't published yet.
        """
        return Question.objects.filter(pub_date__lte=timezone.now())


class ResultsView(generic.DetailView):
    model = Question
    template_name = 'polls/results.html'

'''