const modalBtn = document.querySelector('.btn');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');
const subBtn = document.querySelector('#sub');

modalBtn.addEventListener('click', function(){
    modalBg.classList.add('bg-active');
})

modalClose.addEventListener('click', function(){
    modalBg.classList.remove('bg-active');
})

subBtn.addEventListener('click', function(){
    modalBg.classList.remove('bg-active');
})