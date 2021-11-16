const menuContainer = document.querySelector('.mobile-menu');
const menuToggle = menuContainer.querySelector('.header__menu-toggle');
const body = document.querySelector('body');

const mobileMenuToggle = () => {
  menuContainer.classList.toggle('mobile-menu--active');
  body.classList.toggle('no-scroll');
};

menuToggle.addEventListener('click', () => {
  mobileMenuToggle();
});

const searchInput = menuContainer.querySelector('#header-search');
const searchTabDown = menuContainer.querySelector('#searchTabDownTarget');
const searchTabUp = menuContainer.querySelector('#searchTabUpTarget');
const lastInteractiveElement = menuContainer.querySelector('#lastTabDown');
const firstInteractiveElement = menuToggle;


menuContainer.addEventListener('keydown', (evt) => {
  const isTabUp = evt.shiftKey && evt.keyCode === 9;
  const isTabDown = evt.keyCode === 9 && !evt.shiftKey;
  const current = document.activeElement;
  const isMenuOpen = menuContainer.classList.contains('mobile-menu--active');

  if (isTabUp && isMenuOpen) {
    if (current === searchTabDown) {
      evt.preventDefault();
      searchInput.focus();
      return;
    }
    if (current === searchInput) {
      evt.preventDefault();
      searchTabUp.focus();
    }
    if (current === firstInteractiveElement) {
      evt.preventDefault();
      lastInteractiveElement.focus();
    }
  }

  if (isTabDown && isMenuOpen) {
    if (current === searchTabUp) {
      evt.preventDefault();
      searchInput.focus();
      return;
    }
    if (current === searchInput) {
      evt.preventDefault();
      searchTabDown.focus();
    }
    if (current === lastInteractiveElement) {
      evt.preventDefault();
      firstInteractiveElement.focus();
    }
  }

  if (isMenuOpen && evt.key === 'Escape') {
    mobileMenuToggle();
  }
});

export { mobileMenuToggle };
