const body = document.querySelector('body');
const mobileMenu = document.querySelector('.mobile-menu');

window.addEventListener('load', () => {
  body.classList.remove('js-disabled');
  mobileMenu.classList.remove('mobile-menu--active');
});
