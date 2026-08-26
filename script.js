// Menú móvil
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Puntos del hero (decorativo, listo para conectar a un carrusel real)
const dots = document.querySelectorAll('.dot');
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    dots.forEach(d => d.classList.remove('is-active'));
    dot.classList.add('is-active');
  });
});
