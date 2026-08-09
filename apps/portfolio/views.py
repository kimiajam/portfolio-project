from django.shortcuts import render
from .models import Project, About, Skill, Education


def home(request):
    projects = Project.objects.all()
    about = About.objects.first()
    skills = Skill.objects.all()
    educations = Education.objects.all()

    context = {
        "projects": projects,
        "about": about,
        "skills": skills,
        "educations": educations,
    }

    return render(request, "home.html", context)