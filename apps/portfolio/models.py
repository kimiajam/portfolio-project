from django.db import models


# =========================
# PROJECT
# =========================

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()

    image = models.ImageField(
        upload_to="projects/",
        blank=True
    )

    github_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)

    technologies = models.CharField(
        max_length=200,
        blank=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    @property
    def tech_list(self):
        return self.technologies.split(",")

    def __str__(self):
        return self.title


# =========================
# ABOUT
# =========================

class About(models.Model):
    full_name = models.CharField(
        max_length=100,
        blank=True
    )

    job_title = models.CharField(
        max_length=150,
        blank=True
    )

    bio = models.TextField(
        blank=True
    )

    profile_image = models.ImageField(
        upload_to="profile/",
        blank=True
    )

    cv = models.FileField(
        upload_to="cv/",
        blank=True
    )

    def __str__(self):
        return self.full_name or "About"


# =========================
# CONTACT
# =========================

class Contact(models.Model):
    email = models.EmailField(
        blank=True
    )

    github = models.URLField(
        blank=True
    )

    linkedin = models.URLField(
        blank=True
    )

    whatsapp = models.URLField(
        blank=True
    )

    def __str__(self):
        return "Contact"


# =========================
# EDUCATION
# =========================

class Education(models.Model):

    title = models.CharField(
        max_length=150
    )

    description = models.TextField(
        blank=True
    )

    def __str__(self):
        return self.title


# =========================
# CERTIFICATES & COURSES
# =========================

class Certificate(models.Model):

    title = models.CharField(
        max_length=150
    )

    description = models.TextField(
        blank=True
    )

    def __str__(self):
        return self.title


# =========================
# CONTACT MESSAGES
# =========================

class ContactMessage(models.Model):
    name = models.CharField(
        max_length=100
    )

    email = models.EmailField()

    message = models.TextField()

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return f"{self.name} - {self.email}"