'use strict'
document.addEventListener("DOMContentLoaded", function(){
   const burger = document.querySelector('.header__burger');
   const menu = document.querySelector('.header__nav');
   const body = document.querySelector('body');
   const navLink = document.querySelectorAll('.nav__link');
   // const girls = document.querySelector()

   burger.addEventListener('click', ()=>{
      burger.classList.toggle('active');
      menu.classList.toggle('active');
      body.classList.toggle('lock');
   });
   // function closeNav () {
      navLink.forEach(item => {
         item.addEventListener('click', ()=> {
            burger.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('lock');
         });
      });
   // }

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




   // articles
   const articlesName = document.querySelectorAll(".articles__name");
   const articlesText = document.querySelectorAll(".articles__text");

   articlesName.forEach((item) => {
   item.addEventListener("click", (e) => {
      const content = e.target.nextElementSibling;
      if (content.style.maxHeight) {
         closeAcord();
      } else {
         closeAcord();
         item.classList.add("active");
         content.style.maxHeight = content.scrollHeight + "px";
      }
   });
   });
   function closeAcord() {
   articlesText.forEach((item) => {
      item.style.maxHeight = null;
   });
   articlesName.forEach(item => {
      item.classList.remove("active");
   });
   }
});