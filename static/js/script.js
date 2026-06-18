document.addEventListener("DOMContentLoaded", () => {

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  document.querySelectorAll('.marquee-inner').forEach(el => {
    el.innerHTML += el.innerHTML;
    gsap.to(el, {
      xPercent: -50,
      ease: "none",
      duration: 15,
      repeat: -1
    });
  });

  const codeLines = [
    'const developer = {',
    '    name: "Aarav",',
    '    stack: [',
    '        "Django",',
    '        "React",',
    '        "JavaScript"',
    '    ]',
    '};'
  ];

  const codeEl = document.getElementById('typing-code');
  let lineIndex = 0;
  let charIndex = 0;
  let currentLine = '';

  function typeLoop() {
    if (lineIndex < codeLines.length) {
      const target = codeLines[lineIndex];
      if (charIndex < target.length) {
        currentLine += target[charIndex];
        charIndex++;
        codeEl.textContent = currentLine;
        setTimeout(typeLoop, 30 + Math.random() * 25);
      } else {
        currentLine += '\n';
        lineIndex++;
        charIndex = 0;
        setTimeout(typeLoop, 150);
      }
    }
  }

  setTimeout(typeLoop, 500);

  const techMarquee = document.querySelector('.tech-marquee-inner');
  if (techMarquee) {
    techMarquee.innerHTML += techMarquee.innerHTML;
    gsap.to(techMarquee, {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) lenis.scrollTo(target, { offset: -100 });
    });
  });

  const msg = document.querySelector('.message');
  if (msg) {
    setTimeout(() => {
      msg.style.opacity = '0';
      msg.style.transform = 'translateY(-10px)';
      msg.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      setTimeout(() => msg.remove(), 300);
    }, 3000);
  }

});
