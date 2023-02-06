var lastIndex = 0;

var images = document.querySelectorAll('.container img');

images.forEach((item,index)=>{
    document.querySelectorAll('.bullet-single')[index]
    .addEventListener('click',()=>{
        let lastImage = document.querySelectorAll('.container img')[lastIndex];
        let actualImage = document.querySelectorAll('.container img')[index];
        lastIndex = index;

        lastImage.style.opacity = 0;
        actualImage.style.opacity = 1;
    })
})