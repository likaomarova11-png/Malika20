const form=document.getElementById('form');
const success=document.getElementById('success');
form.addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(form);
  const name=(data.get('name')||'гость').trim();
  const service=data.get('service');
  success.textContent=`Спасибо, ${name}! Заявка на услугу «${service}» сформирована в демо-режиме. Никакие данные никуда не отправляются.`;
  form.reset();
});
const menu=document.querySelector('.menu'), nav=document.querySelector('nav');
menu.addEventListener('click',()=>nav.classList.toggle('show'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('show')));
