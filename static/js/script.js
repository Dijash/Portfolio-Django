gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  });

  lenis.on('scroll', ScrollTrigger.update);

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

  ScrollTrigger.refresh();

});
