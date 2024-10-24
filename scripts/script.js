'use strict';

const modalMenuEl = document.querySelector('.modal-menu-container');
const menuPlayBtn = document.querySelector('.menu-play-button');
const menuTutorialBtn = document.querySelector('.menu-tutorial-button');

const overlayEl = document.querySelector('.overlay');

const tutorialContainerEl = document.querySelector('.tutorial-container');
const goBackBtn = document.querySelector('.go-back-button');

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
//   modalMenuEl.classList.add('hidden');
//   overlayEl.classList.remove('hidden');
//   overlayEl.classList.add('visible');
//   console.log('HELLO OVERLAY');
// });

// nesting things inside OVERLAY is NOT a good idea

// should keep overlay toggling separate from hiding/showing
menuTutorialBtn.addEventListener('click', () => {
  toggleOverlay();
  hideAndShow(modalMenuEl, tutorialContainerEl);
});
goBackBtn.addEventListener('click', () => {
  toggleOverlay();
  hideAndShow(tutorialContainerEl, modalMenuEl);
});
// helper function

function toggleOverlay() {
  if (overlayEl.classList.contains('visible')) {
    overlayEl.classList.remove('visible');
    overlayEl.classList.add('hidden');
  } else if (overlayEl.classList.contains('hidden')) {
    overlayEl.classList.remove('hidden');
    overlayEl.classList.add('visible');
  }
}
// problem here because instructionsContainer has flex, not block
// NOTE: having flex on body kills the flow
// possible solution: have a container for the "screen" u r moving to
// so there is no need for flex handling below ????
function hideAndShow(elToHide, elToShow, hideClass = 'hidden', showClass = 'visible') {
  elToHide.classList.remove(showClass);
  elToHide.classList.add(hideClass);

  elToShow.classList.remove(hideClass);
  elToShow.classList.add(showClass);
}
