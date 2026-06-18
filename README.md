```markdown
# Portfolio-Django

A professional personal portfolio application built with Django. This platform showcases projects, personal information, and provides an integrated contact mechanism for potential clients or employers.

---

## 🚀 Features

* **Dynamic Project Showcase:** Easily add, edit, or remove project entries from the backend.
* **Responsive Design:** Fully mobile-friendly layout optimized for all screen sizes.
* **Contact Management:** Secure contact form for user inquiries with email notifications.
* **Admin Panel:** Utilizes Django's built-in Admin interface for robust content management.

## 🛠️ Tech Stack

* **Framework:** Django (Python)
* **Environment Management:** `python-dotenv`
* **Database:** SQLite (Development) / PostgreSQL (Production ready)
* **Frontend:** HTML5, CSS3, JavaScript

## ⚙️ Prerequisites

Ensure you have the following installed on your local environment:
* Python 3.x
* pip (Python package installer)
* Git

---

## 📥 Installation & Setup

### 1. Clone the repository
```bash
git clone [https://github.com/Dijash/Portfolio-Django.git](https://github.com/Dijash/Portfolio-Django.git)
cd Portfolio-Django

```

### 2. Set up a virtual environment

```bash
# Create virtual environment
python -m venv venv

# Activate on Windows:
venv\Scripts\activate

# Activate on macOS/Linux:
source venv/bin/activate

```

### 3. Install dependencies

```bash
pip install python-dotenv
pip install -r requirements.txt

```

### 4. Environment Variables Configuration (`.env`)

Create a `.env` file in your root directory (the same folder where `manage.py` lives). **Do not commit this file to GitHub.**

```env
DEBUG=True
SECRET_KEY=your_django_secret_key_here

# Email Configuration (SMTP)
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your16characterapppassword

```

### 5. Apply Migrations

```bash
python manage.py migrate

```

### 6. Create a Superuser

```bash
python manage.py createsuperuser

```

### 7. Run the Development Server

```bash
python manage.py runserver

```

Open your browser and navigate to `http://127.0.0.1:8000/`.

---


## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute to the project structure or codebase.

## 👤 Author

* **GitHub:** [@Dijash](https://www.google.com/search?q=https://github.com/Dijash)

```

```
