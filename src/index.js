import './css/styles.css';

// ======== Menu items ==============
import menuItems from './js/menu.json';
import menuTemplate from './templates/menu.hbs';

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', menuTemplate(menuItems));

// ======== Theme switch =============
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switcher = document.querySelector('.theme-switch__toggle');
switcher.addEventListener('change', swithTheme);
checkTheme();

function swithTheme() {
  if (this.checked) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', 'dark-theme');
  } else {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', 'light-theme');
  }
}

function checkTheme() {
  document.body.classList.add(localStorage.getItem('theme'));
  if (localStorage.getItem('theme') === 'dark-theme') {
    switcher.checked = true;
  }
}
