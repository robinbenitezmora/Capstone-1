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
