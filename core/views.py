from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.contrib import messages
from django.conf import settings

def home(request):
    return render(request, 'core/home.html')

def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name', '')
        email = request.POST.get('email', '')
        message = request.POST.get('message', '')

        body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"

        send_mail(
            subject=f"Portfolio Contact — {name}",
            message=body,
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[settings.EMAIL_HOST_USER],
            fail_silently=False,
        )

        messages.success(request, 'Message sent successfully!')
        return redirect('home')
    return redirect('home')

