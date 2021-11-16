const filter = document.querySelector('.filter');

// Accordeon
if (filter) {
  const filterInputs = filter.querySelectorAll('input');
  const filterButtons = filter.querySelectorAll('.filter__category-toggle');
  const filterCategories = filter.querySelectorAll('.filter__category');
  const filterClearButton = filter.querySelector('.filter__button-clear');

  filter.addEventListener('click', (evt) => {
    filterButtons.forEach((button, index) => {
      if (filterButtons[index] === evt.target) {
        evt.preventDefault();
        filterCategories[index].classList.toggle('filter__category--active');
      }
    });
  });

  // Form Clear
  filterClearButton.addEventListener('click', () => {
    filterInputs.forEach((input) => {
      input.checked = false;
      input.removeAttribute('checked');
    });
  });

  // Mobile Popup
  const filterOpenButton = document.querySelector('.catalog__filter-toggle');
  const body = document.querySelector('body');

  const openFilter = () => {
    filter.classList.add('filter--open');
    body.classList.add('no-scroll');
  };

  const closeFilter = () => {
    filter.classList.remove('filter--open');
    body.classList.remove('no-scroll');
  };

  filterOpenButton.addEventListener('click', () => {
    openFilter();

    const filterCloseButton = filter.querySelector('.filter__button-close');

    filterCloseButton.addEventListener('click', () => {
      closeFilter();
    });

    filter.addEventListener('click', (evt) => {
      if (evt.target === filter) {
        closeFilter();
      }
    });

    window.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        closeFilter();
      }
    });
  });

  // Tabs
  const filterInteractiveElements = filter.querySelectorAll('button, a, input');
  const firstFilterElement = filterInteractiveElements[0];
  const lastFilterElement = filterInteractiveElements[filterInteractiveElements.length - 1];

  window.addEventListener('keydown', (evt) => {
    const isTabUp = evt.shiftKey && evt.keyCode === 9;
    const isTabDown = evt.keyCode === 9 && !evt.shiftKey;
    const current = document.activeElement;

    if (filter.classList.contains('filter--open')) {
      if (isTabDown && current === lastFilterElement) {
        evt.preventDefault();
        firstFilterElement.focus();
      }
      if (isTabUp && current === firstFilterElement) {
        evt.preventDefault();
        lastFilterElement.focus();
      }
    }
  });
}

