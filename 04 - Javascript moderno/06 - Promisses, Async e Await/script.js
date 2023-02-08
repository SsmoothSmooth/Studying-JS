function testes(){
    return new Promise(function(resolve, reject){

        const erro = true;

        if(erro){
            reject('Erro..!!.');
        }else{
            resolve("A promisse foi resolvida com sucesso !");
        }

    })
}

testes().then(function(res){
    alert(res);
}).catch(function(err){
    alert(err);
})