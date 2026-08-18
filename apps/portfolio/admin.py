from django.contrib import admin

from .models import (
    Project,
    About,
    Contact,
    Education,
    Certificate,
    ContactMessage,
)


# =========================
# PROJECT
# =========================

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "created_at",
    )


# =========================
# ABOUT
# =========================

@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = (
        "full_name",
        "job_title",
    )


# =========================
# CONTACT
# =========================

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = (
        "email",
        "github",
        "linkedin",
        "whatsapp",
    )


# =========================
# EDUCATION
# =========================

@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = (
        "title",
    )


# =========================
# CERTIFICATES & COURSES
# =========================

@admin.register(Certificate)
class CertificateAdmin(admin.ModelAdmin):
    list_display = (
        "title",
    )


# =========================
# CONTACT MESSAGES
# =========================

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "email",
        "created_at",
    )

    ordering = (
        "-created_at",
    )