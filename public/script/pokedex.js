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
 				links[i].childNodes[1].innerHTML = data.objects[i].name;
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


function select(ObjId)
{
	var id = ObjId.getAttribute("id");
	document.querySelector("sidebar").style.visibility="visible";
	
	document.querySelector("#pic").src = `http://pokeapi.co/media/img/${id}.png`
	pokemonsData.objects.forEach(function(element) 
	{
    	if (element.pkdx_id == id)
    	{
    		document.querySelector("sidebar h2").innerHTML = element.name + " #" + element.pkdx_id;
    		document.querySelector("#Type").innerHTML = element.types[0].name;
    		document.querySelector("#Attack").innerHTML = element.attack;
    		document.querySelector("#Defense").innerHTML = element.defense;
    		document.querySelector("#HP").innerHTML = element.hp;
    		document.querySelector("#SP_Attack").innerHTML = element.sp_atk;
    		document.querySelector("#SP_Defense").innerHTML = element.sp_def;
    		document.querySelector("#Speed").innerHTML = element.speed;
    		document.querySelector("#Weight").innerHTML = element.weight;
    		document.querySelector("#Total_moves").innerHTML = element.moves.length;
    	}
    });
}

function change()
{
	part +=12;
	getData(part);
	document.querySelector("sidebar").style.visibility="hidden";
}


	