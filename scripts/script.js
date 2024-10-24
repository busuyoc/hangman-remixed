'use strict';

const menuModalEl = document.querySelector('.menu-modal');
const playBtn = document.querySelector('.play-button');
const tutorialBtn = document.querySelector('.tutorial-button');

const overlayEl = document.querySelector('.overlay');

// NOTE: make a function that takes 2 params,
// applying hidden to the first one
// and visible to the second one

// ----- maybe use toggle, not sure about the flow
// something like "visible-no"/"visible-yes" and the part with no/yes
// can be switched with string interpolation
// ??? what happens if the el has display: flex

// actually maybe have more params so i can control yes/no more dynamically
// contains(class) maybe
// tutorialBtn.addEventListener('click', () => {
//   menuModalEl.classList.add('hidden');
//   overlayEl.classList.remove('hidden');
//   overlayEl.classList.add('visible');
//   console.log('HELLO OVERLAY');
// });

// nesting things inside OVERLAY is NOT a good idea
tutorialBtn.addEventListener('click', () => {
  hideAndShow(menuModalEl, overlayEl);
});
function hideAndShow(elToHide, elToShow, hideClass = 'hidden', showClass = 'visible') {
  elToHide.classList.remove(showClass);
  elToHide.classList.add(hideClass);

  elToShow.classList.remove(hideClass);
  elToShow.classList.add(showClass);
}
