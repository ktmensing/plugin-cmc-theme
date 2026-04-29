const nav = document.querySelector('header');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 4);
});
