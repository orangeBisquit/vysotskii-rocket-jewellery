import { mobileMenuToggle } from './mobile-menu.js';

// Login Toggle
const loginLink = document.querySelector('.header__user-button');
const mobileLogin = document.querySelector('.header__sub-login-button');

const login = document.querySelector('.login');
const loginCloseButton = login.querySelector('.login__button-close');
const firstFocusField = login.querySelector('#login-email');
const body = document.querySelector('body');

const closeLogin = () => {
  login.classList.remove('login--open');
  body.classList.remove('no-scroll');
};

const openLogin = (evt) => {
  evt.preventDefault();
  login.classList.add('login--open');
  body.classList.add('no-scroll');
  firstFocusField.focus();
};

const assignListeners = () => {
  loginCloseButton.addEventListener('click', () => {
    closeLogin();
  });

  login.addEventListener('click', (e) => {
    if (e.target === login) {
      closeLogin();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLogin();
    }
  });
};

loginLink.addEventListener('click', (evt) => {
  openLogin(evt);
  assignListeners();
});

mobileLogin.addEventListener('click', (evt) => {
  mobileMenuToggle();
  openLogin(evt);
  assignListeners();
});

// Login Tabs
window.addEventListener('keydown', (evt) => {
  const isTabUp = evt.shiftKey && evt.keyCode === 9;
  const isTabDown = evt.keyCode === 9 && !evt.shiftKey;
  const current = document.activeElement;
  const isLoginOpen = login.classList.contains('login--open');

  const loginInteractiveElements = login.querySelectorAll('button, a, input');
  const firstLoginElement = loginInteractiveElements[0];
  const lastLoginElement = loginInteractiveElements[loginInteractiveElements.length - 1];

  if (isLoginOpen) {
    if (isTabDown && current === lastLoginElement) {
      evt.preventDefault();
      firstLoginElement.focus();
    }
    if (isTabUp && current === firstLoginElement) {
      evt.preventDefault();
      lastLoginElement.focus();
    }
  }
});
