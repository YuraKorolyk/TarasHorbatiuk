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
