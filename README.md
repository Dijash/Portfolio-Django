# Portfolio — Aarav Bhattarai

Personal portfolio website built with Django. Features smooth scrolling, dark/light theme, typing animation, and a contact form with email notifications.

## Tech Stack

- **Backend:** Django 6.0 (Python 3.12)
- **Frontend:** HTML5, CSS3, JavaScript
- **Animation:** Lenis (smooth scroll), GSAP (marquees, typing)
- **Email:** SMTP via Gmail (app password)

## Features

- Hero section with code-block typing animation
- About section with marquee + bio
- Skills section with tech icon marquee + 3-column grid
- Projects section with "Coming Soon" placeholder and GitHub link
- Certification cards with PDF download links
- Contact form that emails submissions via Gmail SMTP
- Dark/light theme toggle persisted to localStorage
- Responsive design (breakpoints at 1024px, 768px, 480px)
- Smooth anchor scrolling via Lenis

## Setup

1. **Clone and enter the project:**
   ```bash
   git clone https://github.com/dijash/Portfolio-Django.git
   cd Portfolio-Django
   ```

2. **Create and activate a virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   venv\Scripts\activate     # Windows
   ```

3. **Install dependencies:**
   ```bash
   pip install django python-dotenv
   ```

4. **Create a `.env` file** in the project root:
   ```env
   SECRET_KEY=your-django-secret-key
   DEBUG=True
   EMAIL_HOST_USER=your-email@gmail.com
   EMAIL_HOST_PASSWORD=your-16-char-gmail-app-password
   ```

5. **Run migrations and start the server:**
   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

Visit `http://127.0.0.1:8000/` in your browser.

## Project Structure

```
├── core/                    # Django app (views, URLs, templates)
│   ├── templates/core/      # home.html (single-page content)
│   ├── urls.py              # Route definitions
│   └── views.py             # Home + contact views
├── portfolio/               # Django project configuration
│   ├── settings.py          # All settings
│   ├── urls.py              # Root URL config
│   └── templates/           # Shared templates
│       ├── layouts/         # base.html
│       └── includes/        # navbar.html, footer.html
├── static/                  # Static assets
│   ├── css/                 # global.css, navbar.css, footer.css
│   ├── js/                  # script.js, navbar.js
│   └── assets/              # Certificates PDFs
├── .env                     # Environment variables (not committed)
└── manage.py
```

## Author

**Aarav Bhattarai**
- GitHub: [@dijash](https://github.com/dijash)
- LinkedIn: [Aarav Bhattarai](https://www.linkedin.com/in/aarav-bhattarai-90497724b/)
