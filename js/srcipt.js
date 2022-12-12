'use strict'
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__nav');
const body = document.querySelector('body');

burger.addEventListener('click', ()=>{
   burger.classList.toggle('active');
   menu.classList.toggle('active');
   body.classList.toggle('lock');
});