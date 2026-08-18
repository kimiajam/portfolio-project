from django.shortcuts import render, redirect

from .models import (
    Project,
    About,
    Contact,
    Education,
    Certificate,
    ContactMessage,
)


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
    contact = Contact.objects.first()

    educations = Education.objects.all().order_by("-id")
    certificates = Certificate.objects.all().order_by("-id")

    contact_messages = ContactMessage.objects.order_by(
        "-created_at"
    )

    context = {
        "projects": projects,
        "about": about,
        "contact": contact,
        "educations": educations,
        "certificates": certificates,
        "contact_messages": contact_messages,
    }

    return render(
        request,
        "home.html",
        context
    )