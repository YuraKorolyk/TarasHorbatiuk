'use strict'
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__nav');
const body = document.querySelector('body');

burger.addEventListener('click', ()=>{
   burger.classList.toggle('active');
   menu.classList.toggle('active');
   body.classList.toggle('lock');
});


// modal
const modalOpenBtn = document.querySelectorAll('[data-open]');
const modalCloseBtn = document.querySelector('[data-close]');
const modal = document.querySelector('.modal');

function openModal () {
   modal.style.display = 'block';
   document.body.style.overflow = 'hidden';
   modal.classList.add('show');

}
modalOpenBtn.forEach(item =>{
   item.addEventListener ('click', () => {
      openModal();
   });
   
});
function closeModal () {
   modal.style.display = 'none';
   document.body.style.overflow = '';
   modal.classList.remove('show');

}
modalCloseBtn.addEventListener ('click', closeModal);

modal.addEventListener ('click', (event) => {
   const target = event.target;
   if (target === modal) {
      closeModal();
   }
});

// document.addEventListener('keydown', (e) =>{
//    e.preventDefault();
//    if (e.code === 'Escape' && modal.classList.contains('show')) closeModal();
// });


const topBtn = document.querySelector('#return-to-top');
window.onscroll = () => {
   if (window.scrollY >= 50) {
      topBtn.style.display = 'block';
   } 
   if (window.scrollY <= 50) {
      topBtn.style.display = 'none';
   }
   topBtn.addEventListener('click', () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth"
     });
   });
};





(() => {
   const mobileMenu = document.querySelector(".js-menu-container");
   const openMenuBtn = document.querySelector(".js-open-menu");
   const closeMenuBtn = document.querySelector(".js-close-menu");
   const body = document.querySelector('body');
 
   const toggleMenu = () => {
     const isMenuOpen =
       openMenuBtn.getAttribute("aria-expanded") === "true" || false;
     openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
     mobileMenu.classList.toggle("is-open");
     body.classList.toggle("lock");
 
     const scrollLockMethod = !isMenuOpen
       ? "disableBodyScroll"
       : "enableBodyScroll";
     bodyScrollLock[scrollLockMethod](document.body);
   };
 
   openMenuBtn.addEventListener("click", toggleMenu);
   closeMenuBtn.addEventListener("click", toggleMenu);
 
   // Close the mobile menu on wider screens if the device orientation changes
   window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
     if (!e.matches) return;
     mobileMenu.classList.remove("is-open");
     openMenuBtn.setAttribute("aria-expanded", false);
     bodyScrollLock.enableBodyScroll(document.body);
   });
 })();






