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

// Open Capstone Mobile
const openAbout = document.querySelector('.menu__topics');
const openSlideMenuAbout = document.querySelector('.hamburger-menu__about');
const returnMainPage = document.querySelector('.logo__slide-menu');

openAbout.addEventListener('click', () => {
  document.getElementById('main-page').classList.remove('active');
  document.getElementById('about').classList.add('active');
});

openSlideMenuAbout.addEventListener('click', () => {
  document.getElementById('slide_menu').classList.add('active');
});

returnMainPage.addEventListener('click', () => {
  document.getElementById('about').classList.remove('active');
});

// Open Capstone Desktop
const openAboutDesktop = document.querySelector('.menu__item');
const closeAboutDesktop = document.querySelector('.logo');

openAboutDesktop.addEventListener('click', () => {
  document.getElementById('about').classList.add('active');
});

closeAboutDesktop.addEventListener('click', () => {
  document.getElementById('about').classList.remove('active');
})


// Dynamic Creation of Bands
const BANDS = [
  {
    name: 'Guns N Roses',
    stars: 'Axl Rose, Duff McKagan, Slash, Sting, Tommy Pickett, and more',
    description: 'Guns N Roses is a bands that was formed in the United States in the mid-1980s. The bands is known for its hard rock style, and is one of the best-selling bands of the 1980s.',
    img: './images/guns-and-roses.jpg',
  },
  {
    name: 'Metallica',
    stars: 'James Hetfield, Lars Ulrich, Kirk Hammett, Robert Trujillo, and more',
    description: 'Metallica is a heavy metal bands that formed in Los Angeles, California in 1981. The bands is known for its heavy metal style, and is one of the best-selling bands of the 1980s.',
    img: './images/metallica.jpg',
  },
  {
    name: 'Aerosmith',
    stars: 'Steven Tyler, John Deacon, and more',
    description: 'Aerosmith is a rock bands that formed in Los Angeles, California in 1970. The bands is known for its hard rock style, and is one of the best-selling bands of the 1980s.',
    img: './images/aerosmith.jpg',
  },
  {
    name: 'Red Hot Chili Peppers',
    stars: 'Anthony Kiedis, Flea, and more',
    description: 'Red Hot Chili Peppers is a rock bands that formed in Los Angeles, California in 1983.  The bands is known for its hard rock style, and is one of the best-selling bands of the 1980s.',
    img: './images/red-hot-chili-peppers.png',
  },
  {
    name: 'Maroon 5',
    stars: 'Adam Levine, James Valentine, and more',
    description: 'Maroon 5 is a rock bands that formed in Los Angeles, California in 2001. The band is known for its soft rock style, and is one of the best-selling bands of the 2000s.',
    img: './images/maroon-5.png',
  },
  {
    name: 'Iron Maiden',
    stars: 'Steve Harris, Mark Knopfler, and more',
    description: 'Iron Maiden is a rock band that formed in London, England in 1975. The band is known for its heavy metal style, and is one of the best-selling bands of the 1980s.',
    img: './images/iron-maiden.png',
  },
  {
    name: 'Bon Jovi',
    stars: 'Jhon Bon Jovi, David Bryan, and more',
    description: 'Bon Jovi is a rock band that formed in Los Angeles, California in 1983. The band is known for its hard rock style, and is one of the best-selling bands of the 1980s.',
    img: './images/bon-jovi.png',
  },
  {
    name: 'Radiohead',
    stars: 'Thom Yorke, Jonny Greenwood, and more',
    description: 'Radiohead is a rock band that formed in London, England in 1985. The band is known for its soft rock style, and is one of the best-selling bands of the 1990s.',
    img: './images/radiohead.png',
  },
];

const cards = document.getElementById('bands');

function createCards() {
  BANDS.forEach( (data) => {
    cards.innerHTML += `
    <ul>
      <li class='bands__item'>
        <img src='${ data.img }' alt='${ data.name }'>
        <div>
          <h4>${ data.name }</h4>
          <h5>Stars: ${ data.stars }</h5>
          <h6>${ data.description }</h6>
        </div>
      </li>
    </ul>
`;
  })
}

createCards();
