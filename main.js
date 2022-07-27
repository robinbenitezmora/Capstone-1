const openSlideMenu = document.querySelector('.hamburger-menu');
const closeSlideMenu = document.querySelector('.cls');
const closeNav = document.querySelector('.items');

openSlideMenu.addEventListener('click', () => {
  document.getElementById('slide_menu').classList.add('active');
});

closeSlideMenu.addEventListener('click', () => {
  document.getElementById('slide_menu').classList.remove('active');
});

closeNav.addEventListener('click', () => {
  document.getElementById('slide_menu').classList.remove('active');
});

// Open Capstone
const openAbout = document.querySelector('.menu__topics');
const openSlideMenuAbout = document.querySelector('.hamburger-menu__about');
const returnMainPage = document.querySelector('.logo__slide-menu');

openAbout.addEventListener('click', () => {
  document.getElementById('about').classList.add('active');
});

openSlideMenuAbout.addEventListener('click', () => {
  document.getElementById('slide_menu').classList.add('active');
});

returnMainPage.addEventListener('click', () => {
  document.getElementById('about').classList.remove('active');
});



