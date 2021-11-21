import {Swiper } from '../vendor.js';

// Инициализация
let swiper;

const createSlider = () => {
  swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 2,
    slidesPerGroup: 2,
    loop: false,
    edgeSwipeDetection: true,
    keyboard: true,
    updateOnWindowResize: true,
    observer: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: 'new__pagination-item',
      bulletActiveClass: 'new__pagination-item--current',
      renderBullet: function (index, className) {
        return `<button class="${className}">${index + 1}</button>`;
      },
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

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
};
createSlider();

const swiperContainer = document.querySelector('.swiper-wrapper');
const slides = document.querySelectorAll('.swiper-slide a');
const firstSlide = slides[0];
const lastSlide = slides[slides.length - 1];

// Кастомное передвижение фокуса
let progress = 0;
let step;

if (window.matchMedia('(max-width: 1023px)').matches) {
  step = (100 / (slides.length - 2)) / 100;
} else {
  step = step = (100 / (slides.length - 4)) / 100;
}

window.addEventListener('resize', ()=> {
  if (window.matchMedia('(max-width: 1023px)').matches) {
    step = (100 / (slides.length - 2)) / 100;
  } else {
    step = step = (100 / (slides.length - 4)) / 100;
  }
});

firstSlide.addEventListener('focus', () => {
  progress = 0;
  swiper.setProgress(0, 1000);
});

lastSlide.addEventListener('focus', () => {
  progress = 1;
  swiper.setProgress(1, 1000);
});

swiperContainer.addEventListener('keydown', (evt) => {
  const isTabDown = evt.keyCode === 9 && !evt.shiftKey;
  const isTabUp = evt.shiftKey && evt.keyCode === 9;

  if (isTabDown) {
    progress += step;
    swiper.setProgress(progress, 1000);
  }
  if (isTabUp) {
    progress -= step;
    swiper.setProgress(progress, 1000);
  }
});

// Перерисовка булетов на разных версиях
document.addEventListener('DOMContentLoaded', () => {
  let resizeEnd;

  window.addEventListener('resize', () => {
    clearTimeout(resizeEnd);
    resizeEnd = setTimeout(() => {
      const evt = new Event('resize-end');
      window.dispatchEvent(evt);

    }, 500);
  });
});

window.addEventListener('resize-end', () => {
  createSlider();
});
