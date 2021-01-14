const navUl = document.querySelector('.nav__items');
const leadSectionNavItems = document.querySelector('.lead__nav-items');
const leadMenuButton = document.querySelector('.lead__menu-icon');
const navMenuButton = document.querySelector('.nav__menu-icon');
let menuOpen = false;
let leadMenuOpen = false;



function toggleMenuIcon(icon) {
  icon.classList.toggle('show');
};


if (leadMenuButton) {
  leadMenuButton.addEventListener('click', () => {
    if (!leadMenuOpen) {
      leadMenuButton.classList.add('open');
      leadMenuOpen = true;
    } else {
      leadMenuButton.classList.remove('open');
      leadMenuOpen = false;
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

