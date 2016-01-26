from django.conf.urls import url
from django.contrib import admin
from restaurant_app import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', views.home, name='home'),
    url(r'^about', views.about, name='about'),
    url(r'^register', views.register, name='register'),
    url(r'^try_login', views.try_login, name="try-login"),
    url(r'^log-in', views.login_choice, name='log-in'),
    url(r'^login', views.login, name='login'),
    url(r'^logout', views.logout, name='logout'),
    url(r'^for-restaurants', views.for_restaurants, name='for-restaurants'),
    url(r'^features', views.features, name='features'),
    url(r'^profile', views.profile, name='profile')
]
