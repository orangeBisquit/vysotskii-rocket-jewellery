const accordeonList = document.querySelector('.questions__list');

if (accordeonList) {
  const accordeonButtons = accordeonList.querySelectorAll('.questions__list-item button');
  const accordeonBlocks = accordeonList.querySelectorAll('.questions__list-item');

  accordeonList.addEventListener('click', (evt) => {
    accordeonButtons.forEach((button, index) => {
      if (accordeonButtons[index] === evt.target) {
        accordeonBlocks[index].classList.toggle('questions__list-item--active');
      }
    });
  });
}
