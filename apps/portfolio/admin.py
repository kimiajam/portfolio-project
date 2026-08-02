from django.contrib import admin
from .models import Project, About, Skill

admin.site.register(About)
admin.site.register(Project)
admin.site.register(Skill)