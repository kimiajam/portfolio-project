from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()

    github_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)

    image = models.ImageField(upload_to="projects/", blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    