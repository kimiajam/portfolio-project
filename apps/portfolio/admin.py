from django.contrib import admin
from .models import Project
from .models import About

admin.site.register(About)
admin.site.register(Project)