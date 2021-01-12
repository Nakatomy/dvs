const navMenuButton = document.querySelector('.nav__menu-icon');
const navUl = document.querySelector('.nav__items');

const leadNavMenuIcon = document.querySelector('.lead__menu-icon');
const leadSectionNavItems = document.querySelector('.lead__nav-items');


function toggleMenuIcon(icon) {
  icon.classList.toggle('open');
};


navMenuButton.addEventListener('click', () => {
  toggleMenuIcon(navUl);
})

if (leadNavMenuIcon) {
  leadNavMenuIcon.addEventListener('click', () => {
    toggleMenuIcon(leadSectionNavItems);

  })
}