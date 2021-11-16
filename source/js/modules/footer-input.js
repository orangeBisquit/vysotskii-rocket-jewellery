const footerEmail = document.querySelector('#sub-email');

footerEmail.addEventListener('focusout', () => {
  if (footerEmail.value.length > 0) {
    footerEmail.style.paddingLeft = '10px';
  } else {
    footerEmail.style.paddingLeft = '0';
  }
});

footerEmail.addEventListener('focusin', () => {
  footerEmail.style.paddingLeft = '10px';
});
