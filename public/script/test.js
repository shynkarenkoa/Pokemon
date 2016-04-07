'use strict';

var pokemonsData = {}
var links = document.querySelectorAll("span");
var images = document.querySelectorAll(".list img");
var part = 0;


getData(part);

function getData(offset)
{
	fetch(`http://pokeapi.co/api/v1/pokemon/?offset=${offset}&limit=12`)  
  .then(  
    function(response) 
    {  
      if (response.status !== 200) 
      {  
        console.log('Looks like there was a problem. Status Code: ' +  
          response.status);  
        return;  
      }
        response.json().then(function(data)
        {
        	for (var i = 0; i < 12; i++)
        	{
        		images[i].src = `http://pokeapi.co/media/img/${data.objects[i].pkdx_id}.png`
 				links[i].setAttribute("id",data.objects[i].pkdx_id);
        	}
        	pokemonsData = data;
        	console.log(pokemonsData) ///testing response data
        } )
    }  
  )  
  .catch(function(err) {  
    console.log('Fetch Error : ', err);  
  });
}


function select(id)
{
	console.log(id.getAttribute("id"))
	document.querySelector("sidebar").style.visibility="visible";
	document.querySelector("#pic").src = `http://pokeapi.co/media/img/${id.getAttribute("id")}.png`
	
}

function change()
{
	part +=12;
	getData(part);
	document.querySelector("sidebar").style.visibility="hidden";
}


	