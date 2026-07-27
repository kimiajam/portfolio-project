from django.shortcuts import render
from .models import Project , About


def home(request):
    projects = Project.objects.all()
    about = About.objects.first()

    context = {
        "projects": projects,
        "about": about,
    }

    return render(request, "home.html", context)