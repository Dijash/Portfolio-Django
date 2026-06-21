gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  });

  lenis.on('scroll', (e) => {
    ScrollTrigger.update();
    const progressBar = document.getElementById('scrollProgress');
    if (progressBar) {
      progressBar.style.width = `${e.progress * 100}%`;
    }
  });

  ScrollTrigger.scrollerProxy(document.body, {
    scrollTop(value) {
      if (arguments.length) {
        lenis.scrollTo(value, { immediate: true });
      }
      return lenis.scroll;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    }
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {

    gsap.from(".code-block", {
      x: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3
    });

    gsap.from(".intro h1", {
      x: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.5
    });

    gsap.from(".bio-container p", {
      y: 60,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".bio-container",
        start: "top 85%",
        end: "top 45%",
        scrub: true
      }
    });

    gsap.from(".works-header h2", {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".works-section",
        start: "top 80%",
        end: "top 40%",
        scrub: true
      }
    });

    gsap.from(".coming-soon-text", {
      scale: 0.8,
      opacity: 0,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".works-coming-soon",
        start: "top 85%",
        end: "top 45%",
        scrub: true
      }
    });

    gsap.from(".coming-soon-sub", {
      y: 30,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".works-coming-soon",
        start: "top 85%",
        end: "top 45%",
        scrub: true
      }
    });

    gsap.from(".skills-column", {
      y: 60,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".other-skills-container",
        start: "top 80%",
        end: "top 40%",
        scrub: true
      }
    });

    gsap.from(".contact-header h2", {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
        end: "top 40%",
        scrub: true
      }
    });

    gsap.from(".form-container", {
      x: -60,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".contact-content",
        start: "top 80%",
        end: "top 40%",
        scrub: true
      }
    });

    gsap.from(".info-container", {
      x: 60,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".contact-content",
        start: "top 80%",
        end: "top 40%",
        scrub: true
      }
    });

    gsap.from(".cert-card", {
      y: 60,
      opacity: 0,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".cert-section",
        start: "top 80%",
        end: "top 40%",
        scrub: true
      }
    });

    const hero = document.querySelector('.hero');
    const codeBlock = document.querySelector('.code-block');
    if (hero && codeBlock) {
      hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(codeBlock, {
          rotationY: x * 4,
          rotationX: -y * 4,
          transformPerspective: 800,
          ease: 'power2.out',
          duration: 0.6,
        });
      });
      hero.addEventListener('mouseleave', () => {
        gsap.to(codeBlock, {
          rotationY: 0,
          rotationX: 0,
          ease: 'power2.out',
          duration: 0.6,
        });
      });
    }

    gsap.to('.about .marquee-inner', {
      yPercent: -15,
      ease: 'none',
      scrollTrigger: {
        trigger: '.about',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    gsap.to('#skills .marquee-inner', {
      yPercent: -15,
      ease: 'none',
      scrollTrigger: {
        trigger: '#skills',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    gsap.to('.cert-section .marquee-inner', {
      yPercent: -15,
      ease: 'none',
      scrollTrigger: {
        trigger: '.cert-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  });

  mm.add("(prefers-reduced-motion: reduce)", () => {
    gsap.set(".code-block, .intro h1, .bio-container p, .works-header h2, .coming-soon-text, .coming-soon-sub, .skills-column, .contact-header h2, .form-container, .info-container, .cert-card", {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1
    });
  });

  const marqueeTweens = [];
  document.querySelectorAll('.marquee-inner').forEach(el => {
    el.innerHTML += el.innerHTML;
    const tween = gsap.to(el, {
      xPercent: -50,
      ease: "none",
      duration: 15,
      repeat: -1
    });
    marqueeTweens.push({ el, tween });
    el.addEventListener('mouseenter', () => tween.pause());
    el.addEventListener('mouseleave', () => tween.resume());
  });

  const navLinks = document.querySelectorAll('.dropdown-menu a');
  const sections = document.querySelectorAll('section[id]');
  let activeNavId = '';

  function updateActiveNav(id) {
    if (id === activeNavId) return;
    activeNavId = id;
    navLinks.forEach(link => {
      const isActive = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('active', isActive);
    });
  }

  sections.forEach(section => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top 40%',
      end: 'bottom 40%',
      onEnter: () => updateActiveNav(section.id),
      onEnterBack: () => updateActiveNav(section.id),
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
  let techTween = null;
  if (techMarquee) {
    techMarquee.innerHTML += techMarquee.innerHTML;
    techTween = gsap.to(techMarquee, {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1
    });
    techMarquee.addEventListener('mouseenter', () => techTween.pause());
    techMarquee.addEventListener('mouseleave', () => techTween.resume());
  }

  const codeBlockDrag = document.querySelector('.code-block');
  const heroSection = document.querySelector('.hero');
  if (codeBlockDrag && heroSection) {
    let isDragging = false;
    let startX, startY, origX, origY, dragX = 0, dragY = 0;
    let bMinX, bMaxX, bMinY, bMaxY;

    function onStart(e) {
      isDragging = true;
      const point = e.touches ? e.touches[0] : e;
      startX = point.clientX;
      startY = point.clientY;
      origX = dragX;
      origY = dragY;
      const hRect = heroSection.getBoundingClientRect();
      const bRect = codeBlockDrag.getBoundingClientRect();
      bMinX = hRect.left - bRect.left;
      bMaxX = hRect.right - bRect.right;
      bMinY = hRect.top - bRect.top;
      bMaxY = hRect.bottom - bRect.bottom;
      codeBlockDrag.style.cursor = 'grabbing';
    }

    function onMove(e) {
      if (!isDragging) return;
      e.preventDefault();
      const point = e.touches ? e.touches[0] : e;
      const dx = point.clientX - startX;
      const dy = point.clientY - startY;
      dragX = Math.max(bMinX, Math.min(bMaxX, origX + dx));
      dragY = Math.max(bMinY, Math.min(bMaxY, origY + dy));
      gsap.set(codeBlockDrag, { x: dragX, y: dragY });
    }

    function onEnd() {
      if (!isDragging) return;
      isDragging = false;
      codeBlockDrag.style.cursor = 'grab';
    }

    codeBlockDrag.addEventListener('mousedown', onStart);
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onEnd);
    codeBlockDrag.addEventListener('touchstart', onStart, { passive: true });
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('touchend', onEnd);
    codeBlockDrag.style.cursor = 'grab';
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

  ScrollTrigger.refresh();

});
