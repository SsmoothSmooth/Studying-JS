/*
var nomes = [
    {
        nome:'João'
    },
    {
        nome:'Smoother'
    },
    
]


const objetos = [...nomes,{
    nome:'Smooth'
}];
*/

// REST nos permite representar um número indefinido de argumentos como um array

function testes(...numeros){
    console.log(numeros[0][0]);
}


// testes(1,2,3,4,5,6,{nome: 'sabonete'});
testes([1,2,3,4,5]);