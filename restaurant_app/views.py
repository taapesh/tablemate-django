from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login

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
    user = authenticate(email=email, password=password)
    if user is not None:
        if user.is_active:
            login(request, user)
            # Redirect to a success page.
            return redirect("home")
        else:
            # Return a 'disabled account' error message
    else:
        # Return an 'invalid login' error message.
        return render(request, "login.html", {"error":"There was an error"})

def login(request):
    return render(request, "login.html", {})

def for_restaurants(request):
    return render(request, "for-restaurants.html", {})

def features(request):
    return render(request, "features.html", {})