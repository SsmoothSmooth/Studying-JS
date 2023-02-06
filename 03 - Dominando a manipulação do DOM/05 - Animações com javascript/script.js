var box = document.querySelectorAll('.box')[0];

/*
// Movendo o quadrado depois de 1seg
setTimeout(() =>{
    box.classList.add('animEsquerda')
}, 1000)
*/

box.addEventListener('click', ()=> {
    box.classList.add('animEsquerda');
})