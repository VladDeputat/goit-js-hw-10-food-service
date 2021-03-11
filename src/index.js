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

function themeReplace(oldTheme, newTheme) {
  document.body.classList.replace(oldTheme, newTheme);
  localStorage.setItem('theme', newTheme);
}

function swithTheme() {
  if (this.checked) {
    themeReplace(Theme.LIGHT, Theme.DARK);
  } else {
    themeReplace(Theme.DARK, Theme.LIGHT);
  }
}

function checkTheme() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    document.body.classList.add(Theme.DARK);
    switcher.checked = true;
  } else {
    document.body.classList.add(Theme.LIGHT);
}}
