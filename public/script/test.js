'use strict';

// fetch('http://pokeapi.co/api/v1/pokedex/1/').then(function(response) {  
//     console.log(response.headers.get('Content-Type'));  
//     console.log(response.headers.get('Date'));
//     console.log(response.status);  
//     console.log(response.statusText);  
//     console.log(response.type);  
//     console.log(response.url);  
// });


// fetch('http://pokeapi.co/api/v1/pokedex/1/')  
//   .then(  
//     function(response) 
//     {  
//       if (response.status !== 200) 
//       {  
//         console.log('Looks like there was a problem. Status Code: ' +  
//           response.status);  
//         return;  
//       }

//         response.json().then
//         (function(data) {console.log(data)} )  
//     }  
//   )  
//   .catch(function(err) {  
//     console.log('Fetch Error :-S', err);  
//   });


var images = document.querySelectorAll("img");
//var Images = document.getElementsByTagName("img");
console.log(images)


for (var i = 0; i < images.length; i++)
 images[i].src = `http://pokeapi.co/media/img/${i+1}.png`

	 