
// Retorna todos os elementos da páginas que tem a tag <p></p>
var p = document.getElementsByTagName('p');

for(var i = 0; i < 10; i++){
    p[0].innerHTML = p[0].innerHTML + i;
}