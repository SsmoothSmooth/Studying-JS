function testes(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
           
            const erro = false;
    
            if(erro){
                reject('Erro..!!.');
            }else{
                resolve("A promisse foi resolvida com sucesso !");
            }

        },200)


    })
}

async function testes2(){
    await testes().then(function(res){
        alert(res);
    });
    alert('Hi')
}

testes2();