'use strict';

// dom variables
// overlay
const overlayEl = document.querySelector('.overlay');
// welcome menu "page"
const welcomePage = document.querySelector(
  '.flow-control--parent-section-container.welcome-page--section'
);
const welcomeMenuPlayBtn = document.querySelector('.welcome-menu--play-button');
const howToPlayBtn = document.querySelector('.how-to-play--button');
// tutorial (howtoplay) page
const tutorialPage = document.querySelector(
  '.flow-control--parent-section-container.tutorial-page--section'
);
const tutorialGoBackBtn = document.querySelector('.go-back-button.tutorial-page--section');
// choose the category page
const categoriesPage = document.querySelector(
  '.flow-control--parent-section-container.categories-page--section'
);
const categoriesGoBackButton = document.querySelector('.go-back-button.categories-page--section');
const chooseCategoryBtns = document.querySelectorAll('.choose-category-button');
// actual game page
const gamePage = document.querySelector(
  '.flow-control--parent-section-container.game-page--section'
);
const burgerMenuButton = document.querySelector('.burger-menu-button');
// game overview page and menu
const gameOverviewPage = document.querySelector(
  '.flow-control--parent-section-container.game-overview-page--section'
);
const continueButton = document.querySelector('.continue-button');
const anotherCategoryButton = document.querySelector('.another-category-button');
const quitButton = document.querySelector('.special-button.quit-button');

// event listeners for buttons
welcomeMenuPlayBtn.addEventListener('click', () => {
  toggleOverlay2();
  // hideAndShow(welcomePage, categoriesPage);
  toggleVisibility(welcomePage, true);
  toggleVisibility(categoriesPage, false);
});
howToPlayBtn.addEventListener('click', () => {
  toggleOverlay2();
  // hideAndShow(welcomePage, tutorialPage);
  toggleVisibility(welcomePage, true)
  toggleVisibility(tutorialPage, false)
});
tutorialGoBackBtn.addEventListener('click', () => {
  toggleOverlay();
  hideAndShow(tutorialPage, welcomePage);
});
categoriesGoBackButton.addEventListener('click', () => {
  toggleOverlay();
  hideAndShow(categoriesPage, welcomePage);
});
chooseCategoryBtns.forEach((categoryBtn) => {
  categoryBtn.addEventListener('click', () => {
    hideAndShow(categoriesPage, gamePage);
  });
});
burgerMenuButton.addEventListener('click', () => {
  incZidx(overlayEl, gameOverviewPage);
  gameOverviewPage.classList.remove('hidden');
});
quitButton.addEventListener('click', () => {
  decZidx();
  toggleOverlay();
  hideAndShow(gameOverviewPage, welcomePage);
  hideAndShow(gamePage, welcomePage);
});
anotherCategoryButton.addEventListener('click', () => {
  decZidx();
  // toggleOverlay();
  hideAndShow(gameOverviewPage, categoriesPage);
  hideAndShow(gamePage, categoriesPage);
});
continueButton.addEventListener('click', () => {
  decZidx();
  gameOverviewPage.classList.remove('visible');
  gameOverviewPage.classList.add('hidden');
});

// helper functions
function toggleOverlay() {
  overlayEl.classList.toggle('visible');
  overlayEl.classList.toggle('hidden');
}
// make a function for toggling visibility in general

function hideAndShow(elToHide, elToShow, hideClass = 'hidden', showClass = 'visible') {
  elToHide.classList.remove(showClass);
  elToHide.classList.add(hideClass);

  elToShow.classList.remove(hideClass);
  elToShow.classList.add(showClass);
}
// >>>>>>>>>>>>>>>>>>>>>>>>> TESTING AREA
function toggleVisibility(element, isVisible) {
  if (isVisible) {
    element.classList.remove('visible');
    element.classList.add('hidden');
  } else {
    element.classList.remove('hidden');
    element.classList.add('visible');
  }
}
function toggleOverlay2() {
  overlayEl.classList.contains('visible')
    ? toggleVisibility(overlayEl, true)
    : toggleVisibility(overlayEl, false);
}
// <<<<<<<<<<<<<<<<<<<<<<<<<< TESTING AREA
// overlay z-index is 1; pages z-index is 2;
function incZidx(el1 = overlayEl, el2 = gameOverviewPage) {
  el1.style.zIndex = 3;
  el2.style.zIndex = 4;
}
function decZidx(el1 = overlayEl, el2 = gameOverviewPage) {
  el1.style.zIndex = 1;
  el2.style.zIndex = 2;
}

// HIGH : rewrite the navigation between the "screens" using the history API
//
// implement the keyboard, word categories, hints, difficulty, gimmicks (freeze, invincibility, hardcore mode)
// make it responsive
// local storage -- achievements, score, leaderboard
// make some new menus -- settings, game modes, aesthetic themes, languages