from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
import requests
import json

def home(request):
    return render(request, "home.html", {})

def about(request):
    return render(request, "about.html", {})

def register(request):
    if (request.method == "POST"):
        return redirect("home");
    else:
        return render(request, "register.html", {})

def login_choice(request):
    return render(request, "log-in.html", {})

def try_login(request):
    email = request.POST['email']
    password = request.POST['password']

    # Make HTTP POST request
    payload = {'email' : email,
          'password' : password}
    r = requests.post(r'http://safe-springs-46272.herokuapp.com/auth/login/', data=payload)
    result = json.loads(r.text)
    token = result.get('auth_token', None)
    if (token is not None):
        request.session['token'] = token
        return redirect("profile")
    else:
        return render(request, "login.html", {"error":r.text})

def login(request):
    return render(request, "login.html", {})

def for_restaurants(request):
    return render(request, "for-restaurants.html", {})

def features(request):
    return render(request, "features.html", {})

def logout(request):
    if ('token' in request.session):
        del request.session['token']
    return redirect("home")

def profile(request):
    if ("token" not in request.session):
        return redirect("login")
    else:
        return render(request, "profile.html", {})
