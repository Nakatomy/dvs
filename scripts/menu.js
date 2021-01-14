// const navMenuButton = document.querySelector('.nav__menu-icon');
// let menuOpen = false;
// const navUl = document.querySelector('.nav__items');

// const leadNavMenuIcon = document.querySelector('.lead__menu-icon');
const leadSectionNavItems = document.querySelector('.lead__nav-items');


function toggleMenuIcon(icon) {
  icon.classList.toggle('open');
};


// navMenuButton.addEventListener('click', () => {
//   toggleMenuIcon(navUl);
// })

// if (leadNavMenuIcon) {
//   leadNavMenuIcon.addEventListener('click', () => {
//     toggleMenuIcon(leadSectionNavItems);

//   })
// }
// navMenuButton.addEventListener('click', () => {
//   if(!menuOpen)
//   {
//     navMenuButton.classList.add('')
//   }
// })


const menuBtn = document.querySelector('.lead__menu-icon');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');

    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }

  toggleMenuIcon(leadSectionNavItems);
});