fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1',{
    method: 'GET'
})
.then(response => response.json())
.then(function(json){

    console.log(json);
})