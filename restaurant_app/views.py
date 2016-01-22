from django.shortcuts import render

def home(request):
    # Display home page
    return render(request, "home.html", {})

def about(request):
    return render(request, "about.html", {})

def register(request):
    return render(request, "register.html", {})

def loginchoice(request):
    return render(request, "log-in.html", {})

def login(request):
    return render(request, "login.html", {})

def restaurants(request):
    return render(request, "restaurants.html", {})

def features(request):
    return render(request, "features.html", {})