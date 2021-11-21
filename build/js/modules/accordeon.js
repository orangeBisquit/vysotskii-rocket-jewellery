const accordeonList = document.querySelector('.questions__list');

if (accordeonList) {
  const accordeonButtons = accordeonList.querySelectorAll('.questions__list-item button');
  const accordeonBlocks = accordeonList.querySelectorAll('.questions__list-item');

  accordeonButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      accordeonBlocks[index].classList.toggle('questions__list-item--active');
    });
  });
}

