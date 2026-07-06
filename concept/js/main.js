const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const gsapReady = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';

if (gsapReady) {
  gsap.registerPlugin(ScrollTrigger);
}

function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.querySelector('.hamburger');
  const isOpen = menu.classList.toggle('open');
  menu.setAttribute('aria-hidden', !isOpen);
  btn.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';

  if (isOpen) {
    const firstFocusable = menu.querySelector('a, button');
    if (firstFocusable) firstFocusable.focus();
  } else {
    btn.focus();
  }
}

// Esc closes the mobile menu, Tab cycles focus within it (simple focus trap).
document.addEventListener('keydown', (e) => {
  const menu = document.getElementById('mobileMenu');
  if (!menu.classList.contains('open')) return;

  if (e.key === 'Escape') {
    toggleMenu();
    return;
  }

  if (e.key === 'Tab') {
    const focusable = Array.from(menu.querySelectorAll('a, button'));
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});

if (gsapReady && !reduceMotion) {
  document.documentElement.classList.add('js-reveal-ready');

  gsap.timeline({ delay: 0.2, defaults: { ease: 'power3.out', duration: 0.95 } })
    .to('.hero-overlay', { opacity: 1, duration: 0.5, ease: 'power2.out' }, 0)
    .to('.reveal-up', { y: 0, opacity: 1, stagger: 0.08, duration: 0.85 }, 0.2);

  gsap.to('.hero-overlay', { scale: 1, duration: 1.6, ease: 'power2.out' });

  gsap.to('.grain img', {
    yPercent: 12,
    ease: 'none',
    scrollTrigger: {
      trigger: '.grain',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    }
  });

  document.querySelectorAll('.reveal-up').forEach(el => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.85,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        once: true
      }
    });
  });

  document.querySelectorAll('.reveal-clip').forEach(el => {
    gsap.to(el, {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true
      }
    });
  });

  const topbar = document.querySelector('.topbar');
  ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    onUpdate: ({ isActive }) => {
      topbar.classList.toggle('scrolled', isActive);
    }
  });
} else {
  document.querySelectorAll('.reveal-up').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
  document.querySelectorAll('.reveal-clip').forEach(el => {
    el.style.clipPath = 'none';
  });
}
