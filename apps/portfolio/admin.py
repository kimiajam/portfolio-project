from django.contrib import admin

from .models import (
    Project,
    About,
    Contact,
    Skill,
    Education,
    ContactMessage,
)


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "created_at",
    )


@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = (
        "full_name",
        "job_title",
    )


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = (
        "email",
        "github",
        "linkedin",
        "whatsapp",
    )


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "percentage",
    )


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "education_type",
    )


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