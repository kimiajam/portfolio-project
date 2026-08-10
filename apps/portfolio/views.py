from django.shortcuts import render, redirect
from .models import Project, About, Skill, Education, ContactMessage


def home(request):

    if request.method == "POST":

        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")

        ContactMessage.objects.create(
            name=name,
            email=email,
            message=message
        )

        return redirect("home")


    projects = Project.objects.all()
    about = About.objects.first()
    skills = Skill.objects.all()
    educations = Education.objects.all()
    contact_messages = ContactMessage.objects.order_by("-created_at")


    context = {
        "projects": projects,
        "about": about,
        "skills": skills,
        "educations": educations,
        "contact_messages": contact_messages,
    }


    return render(request, "home.html", context)