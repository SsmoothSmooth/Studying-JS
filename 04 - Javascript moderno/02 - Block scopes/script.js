/*
 Block scopes = tudo que for colocado entre {} e declarado com let (variavel local)
 vai ficar definido apenas neste scopo;
*/
{
    let nome = 'smooth';
    
    let testes = function (){
        console.log(nome);
    }
    
    testes();
}


