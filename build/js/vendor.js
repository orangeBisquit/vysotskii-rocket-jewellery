import Swiper from 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/7.2.0/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 2,
  slidesPerGroup: 2,
  loop: false,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'new__pagination-item',
    bulletActiveClass: 'new__pagination-item--current',
    renderBullet: function (index, className) {
      return `<button class="${className}">${index + 1}</button>`;
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: '10.3448275862%',
      pagination: {
        type: 'fraction',
        renderFraction(currentClass, totalClass, index, total) {
          return `<span class="${currentClass}"type="button">0 ${index} </span>
          of  <span class="${totalClass}"type="button">0 ${total} </span>`;
        },
      },
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: '4.42477876106%',
      pagination: {
        type: 'bullets',
      },
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: '2.5641025641%',
      pagination: {
        type: 'bullets',
      },
    },
  },
});

swiper;
