document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const dropdownMenu = document.getElementById('dropdownMenu');
  const themeInline = document.getElementById('themeInline');

  function closeMenu() {
    menuToggle.classList.remove('open');
    dropdownMenu.classList.remove('open');
  }

  function toggleMenu() {
    menuToggle.classList.toggle('open');
    dropdownMenu.classList.toggle('open');
  }

  function toggleTheme(e) {
    e.stopPropagation();
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    if (isDark) {
      html.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  menuToggle.addEventListener('click', toggleMenu);
  themeInline.addEventListener('click', toggleTheme);

  document.addEventListener('click', (event) => {
    if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
      closeMenu();
    }
  });

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
});