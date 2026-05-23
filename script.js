document.addEventListener('DOMContentLoaded', () => {

  const SCROLL_STICKY_THRESHOLD = 20;
  const SMOOTH_SCROLL_OFFSET = 16;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- Sticky nav background ---
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > SCROLL_STICKY_THRESHOLD);
    });
  }

  // --- Hamburger menu ---
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // --- Smooth scroll ---
  if (!prefersReducedMotion) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight - SMOOTH_SCROLL_OFFSET;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  // --- Active nav highlight on scroll (scroll-spy) ---
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navAnchorMap = {};
  if (navLinks) {
    navLinks.querySelectorAll('a[href^="#"]').forEach(a => {
      navAnchorMap[a.getAttribute('href').slice(1)] = a;
    });
  }

  if (sections.length > 0) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          Object.values(navAnchorMap).forEach(a => a.classList.remove('active'));
          const a = navAnchorMap[entry.target.id];
          if (a) a.classList.add('active');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(s => observer.observe(s));
  }

  // --- Fade-in on scroll ---
  if (!prefersReducedMotion) {
    const fadeObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));
  } else {
    // Immediately show all fade-in elements for users who prefer reduced motion
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
  }

});
