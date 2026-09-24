// TripVolanza — lógica del sitio

// ===================== MENÚ MOBILE =====================
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.querySelector('.main-nav');

// El "if" es importante: en 404.html no hay menú, así que sin esto
// tiraría un error en esa página al no encontrar los elementos.
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const abierto = mainNav.classList.toggle('is-open');
    menuToggle.classList.toggle('is-active', abierto);
    menuToggle.setAttribute('aria-expanded', abierto);
  });

  // Si el usuario toca un link del menú, lo cerramos automáticamente
  document.querySelectorAll('.main-nav__list a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      menuToggle.classList.remove('is-active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ===================== CARRUSEL DEL HERO =====================
const heroSlides = document.querySelectorAll('.hero__slide');

if (heroSlides.length > 1) {
  let slideActual = 0;

  setInterval(() => {
    heroSlides[slideActual].classList.remove('hero__slide--activa');
    slideActual = (slideActual + 1) % heroSlides.length;
    heroSlides[slideActual].classList.add('hero__slide--activa');
  }, 5000); // cambia de imagen cada 5 segundos
}