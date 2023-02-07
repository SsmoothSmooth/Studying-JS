// Arrow function - É uma forma de declarar função
const testes = (texto,par)=> {
    par(texto);
}

testes('Olá Mundo',(texto)=>{
    alert(texto);
});