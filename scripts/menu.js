const navUl = document.querySelector('.nav__items');
const leadSectionNavItems = document.querySelector('.lead__nav-items');
const leadMenuButton = document.querySelector('.lead__menu-icon');
const navMenuButton = document.querySelector('.nav__menu-icon');
let menuOpen = false;


function toggleMenuIcon(icon) {
  icon.classList.toggle('open');
};


if (leadMenuButton) {
  leadMenuButton.addEventListener('click', () => {
    if (!menuOpen) {
      leadMenuButton.classList.add('open');
      menuOpen = true;
    } else {
      leadMenuButton.classList.remove('open');
      menuOpen = false;
    }
    toggleMenuIcon(leadSectionNavItems);
  });
}

navMenuButton.addEventListener('click', () => {
  if (!menuOpen) {
    navMenuButton.classList.add('open');

    menuOpen = true;
  } else {
    navMenuButton.classList.remove('open');
    menuOpen = false;
  }
  toggleMenuIcon(navUl);
});