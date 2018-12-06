const menuScreen = document.querySelector('.menu-fullscreen');
const menuToggle = document.querySelector('.menu-container');
const menuContainer = document.querySelector('.main-header');
const headerLogo = document.querySelector('.logo');

menuToggle.addEventListener('click', () => {
  menuScreen.classList.toggle('menu-fullscreen__open');
});

menuScreen.style.transformOrigin = "right top";

window.addEventListener('scroll', () =>{
  
  if(pageYOffset < 350){
    menuContainer.style.opacity = 1 - window.pageYOffset/250;
    menuScreen.style.transformOrigin = "right top";
    menuContainer.classList.remove('switch');
    headerLogo.style.display = "block";
  } else {
    menuContainer.style.opacity = window.pageYOffset/350 - 1;
    menuScreen.style.transformOrigin = "left top";
    menuContainer.classList.add('switch');
    headerLogo.style.display = "none";
  }
  
});