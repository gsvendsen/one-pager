const menuContainer = document.querySelector('.main-header');

window.addEventListener('scroll', () =>{
  
  menuContainer.style.opacity = 1 - window.pageYOffset/250;
});