"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
app_name = 'polls'
urlpatterns = [


    path('', views.main_page, name = 'main'),
    path('index', views.index, name='index'),
    path('signup',views.signup, name='signup'),
    path('login', views.login, name = 'login'),
    path('logout', views.logout, name= 'logout'),
    path('signup_success',views.signup_success,name = 'sign_success'),
    path('<int:question_id>/', views.detail, name='detail'),
    path('<int:question_id>/results/', views.results, name='results'),
    path('<int:question_id>/vote/', views.vote, name='vote'),
    path('show',views.adminView.as_view(),name = 'show'),
    path('update/<int:id>',views.update,name = 'update'),
    path('delete/<int:id>', views.delete, name='delete'),
    path('scrap',views.scrap,name = 'scrap'),
    path('scrap_flipkart',views.scrap_flipkart,name = 'scrap_flipkart'),
    path('payment',views.payment,name = 'payment'),
    path('payprocess/',views.pay_process,name = 'payprocess'),
    path('paysuccess',views.paysuccess,name = 'paysuccess'),
    path('addcustomerpage',views.addsqcustomerpage,name='addcustomerpage'),
    path('addcustomer',views.sq_create_customer,name='addcustomer'),
    path('sms',views.twilio_sms,name='sms'),
    path('mail',views.sendmail,name='mail')
    # path('pdf',views.pdf_view,name='pdf')




    #URLs for Generic views

    #path('', views.IndexView.as_view(), name='index'),
    #path('<int:pk>/', views.DetailView.as_view(), name='detail'),
    #path('<int:pk>/results/', views.ResultsView.as_view(), name='results'),
]

if settings.DEBUG:
        urlpatterns += static(settings.MEDIA_URL,
                              document_root=settings.MEDIA_ROOT)



