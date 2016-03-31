'use strict';

fetch('http://pokeapi.co/api/v1/pokedex/1/').then(function(response) {  
    console.log(response.headers.get('Content-Type'));  
    console.log(response.headers.get('Date'));
    console.log(response.status);  
    console.log(response.statusText);  
    console.log(response.type);  
    console.log(response.url);  
});



// fetch('/article/fetch/user.json')
//   .then(function(response) {
//     alert(response.headers.get('Content-Type')); // application/json; charset=utf-8
//     alert(response.status); // 200

//     return response.json();
//    })
//   .then(function(user) {
//     alert(user.name); // iliakan
//   })
//   .catch( alert );