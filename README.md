# ✦ Kimia Jamshidi — Personal Portfolio

> A modern, full-stack personal portfolio built with Django to showcase my projects, technical skills, certifications, and experience.

<p align="center">
  <a href="https://github.com/kimiajam">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="https://www.linkedin.com/in/kimiajam-dev/">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
</p>

---

## 🚀 About The Project

This project is my personal developer portfolio, designed and developed from scratch with **Django**.

The goal was to build more than a static portfolio — the website uses Django's backend architecture and admin panel to manage dynamic content, projects, personal information, and uploaded files.

It serves as a central place to present my development journey, technical work, and projects.

---

## ✨ Highlights

* 🧩 Dynamic project management
* 🛠️ Django-powered backend
* 🎛️ Custom Django Admin integration
* 📁 File and CV management
* 📝 Blog functionality
* 🖼️ Project image management
* 🔗 GitHub & LinkedIn integration
* 📱 Responsive UI
* 🗄️ Database-driven content
* ⚡ Custom CSS & JavaScript
* 🔐 Environment-based configuration

---

## 🧰 Tech Stack

| Category        | Technologies              |
| --------------- | ------------------------- |
| Backend         | Python · Django           |
| Database        | SQLite · PostgreSQL       |
| Frontend        | HTML5 · CSS3 · JavaScript |
| Version Control | Git · GitHub              |
| Development     | VS Code                   |

---

## 🏗️ Architecture

```text
portfolio-project/
│
├── apps/
│   └── portfolio/
│       ├── migrations/
│       ├── models.py
│       ├── views.py
│       ├── admin.py
│       └── ...
│
├── core/
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
│
├── templates/
│   ├── base.html
│   ├── home.html
│   └── includes/
│       └── navbar.html
│
├── static/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
│
├── manage.py
├── requirements.txt
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/kimiajam/portfolio-project.git
cd portfolio-project
```

### 2. Create a virtual environment

```bash
python -m venv .venv
```

Activate it:

**macOS / Linux**

```bash
source .venv/bin/activate
```

**Windows**

```bash
.venv\Scripts\activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Apply migrations

```bash
python manage.py migrate
```

### 5. Create an admin account

```bash
python manage.py createsuperuser
```

### 6. Run the development server

```bash
python manage.py runserver
```

Open:

```text
http://127.0.0.1:8000/
```

---

## 🎛️ Content Management

One of the main purposes of using Django for this project was to make the portfolio **dynamic and manageable**.

Content can be updated through Django Admin without modifying the frontend code.

```text
/admin/
```

This includes managing portfolio projects, personal information, uploaded files, and other database-driven content.

---

## 🗄️ Database

The project uses Django's ORM for database interaction.

Development:

```text
SQLite
```

Production-ready configuration:

```text
PostgreSQL
```

Database schema changes are handled through Django migrations.

---

## 📌 What I Practiced

Building this project helped me work with:

* Django project architecture
* Django apps
* Models & relationships
* Views
* URL routing
* Templates
* Template inheritance
* Django ORM
* Migrations
* Django Admin
* Static & media files
* Database management
* Git & GitHub workflow
* Backend-focused web development

---

## 🔮 Future Improvements

* [ ] Add authentication for private sections
* [ ] Improve search functionality
* [ ] Add project filtering by technology
* [ ] Add automated contact form handling
* [ ] Deploy with PostgreSQL
* [ ] Add production environment configuration
* [ ] Add automated testing
* [ ] Deploy the project with a production server

---

## 👩🏻‍💻 Author

### Kimia Jamshidi

Python & Backend Developer

**GitHub**
https://github.com/kimiajam

**LinkedIn**
https://www.linkedin.com/in/kimiajam-dev/

---

<p align="center">
  Built with Python & Django.
</p>
