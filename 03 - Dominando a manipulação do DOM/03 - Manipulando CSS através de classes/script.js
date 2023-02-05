var elementos = document.getElementsByClassName('box');



for(var i = 0; i < elementos.length; i++){
    var el = elementos[i];

    el.style.width = "100px";
    el.style.height = "100px";
    el.style.backgroundColor = "blue";
    
    el.style.marginLeft = "45%";
    el.style.marginTop = '10px';


    el.style.borderWidth = '2px';
    el.style.borderColor = 'red';
    el.style.borderStyle = 'solid';
}