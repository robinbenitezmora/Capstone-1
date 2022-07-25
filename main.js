const openSlideMenu = document.querySelector('.menu');
const closeSlideMenu = document.querySelector('.cls');

openSlideMenu.addEventListener('click', () => {
    document.querySelector('.slide-menu').classList.add('active');
});

closeSlideMenu.addEventListener('click', () => {
    document.querySelector('.slide-menu').classList.remove('active');
});