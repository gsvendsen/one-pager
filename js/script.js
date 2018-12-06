const menuContainer = document.querySelector('.main-header');
const headerLogo = document.querySelector('.logo');
// const dropMenu = document.querySelector('.menu-all');

window.addEventListener('scroll', () =>{
  
  if(pageYOffset < 350){
    menuContainer.style.opacity = 1 - window.pageYOffset/250;
    menuContainer.classList.remove('switch');
    headerLogo.style.display = "block";
  } else {
    menuContainer.style.opacity = window.pageYOffset/350 - 1;
    menuContainer.classList.add('switch');
    headerLogo.style.display = "none";
  }
  
});