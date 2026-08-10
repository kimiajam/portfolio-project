from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()

    image = models.ImageField(upload_to="projects/", blank=True)

    github_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)
    technologies = models.CharField(max_length=200, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    @property
    def tech_list(self):
     return self.technologies.split(",")
    def __str__(self):
        return self.title


class About(models.Model):
    full_name = models.CharField(max_length=100)
    job_title = models.CharField(max_length=150)
    bio = models.TextField()

    profile_image = models.ImageField(upload_to="profile/")
    cv = models.FileField(upload_to="cv/", blank=True)

    github = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)

    def __str__(self):
        return self.full_name

class Skill(models.Model):
    name = models.CharField(max_length=100)
    percentage = models.PositiveIntegerField(default=80)

    def __str__(self):
        return self.name

class Education(models.Model):
    TYPE_CHOICES = [
        ("degree", "Bachelor's Degree"),
        ("certificate", "Certificate"),
        ("course", "Course"),
    ]

    title = models.CharField(max_length=150)
    education_type = models.CharField(
        max_length=50,
        choices=TYPE_CHOICES
    )
    description = models.TextField(blank=True)

    def __str__(self):
        return self.title

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.email}"