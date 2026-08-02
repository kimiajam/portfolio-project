from django.shortcuts import render
from .models import Project , About , Skill


def home(request):
    projects = Project.objects.all()
    about = About.objects.first()
    skills = Skill.objects.all()

    context = {
        "projects": projects,
        "about": about,
        "skills": skills,
    }

    return render(request, "home.html", context)