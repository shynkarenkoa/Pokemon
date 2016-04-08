'use strict';

var pokemonsData = {}
var links = document.querySelectorAll("span");
var images = document.querySelectorAll(".list img");
var part = 0;
var typesElement;

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
        	for (var i = 0; i < 12; i++) ///insert data in span elements
        	{
        		images[i].src = `http://pokeapi.co/media/img/${data.objects[i].pkdx_id}.png`
 				    links[i].setAttribute("id",data.objects[i].pkdx_id);
 				    links[i].childNodes[1].innerHTML = data.objects[i].name;
            
            ///SET TYPES
            for (var j = 0; j < data.objects[i].types.length; j++) 
              {
                typesElement = links[i].childNodes[2].childNodes[j];
                typesElement.innerHTML = data.objects[i].types[j].name;
                typesElement.setAttribute("onclick","filterType(this)");
                typesElement.setAttribute("style","border: solid 1px black; border-radius: 5px");
                
                switch(data.objects[i].types[j].name)
                {
                  case 'grass': {styleElement("grass","#00cd00");break}
                  case 'poison': {styleElement("poison","#964c96");break}
                  case 'water': {styleElement("water","#008282");break}
                  case 'fire': {styleElement("fire","#ff1919");break}
                  case 'flying': {styleElement("flying","#00ffff");break}
                  case 'electric': {styleElement("electric","#fff68f");break}
                  case 'steel': {styleElement("steel","#666666");break}
                  case 'ground': {styleElement("ground","#ffae00");break}
                  case 'bug': {styleElement("bug","#46a346");break}
                  case 'fighting': {styleElement("fighting","#f52900");break}
                  case 'normal': {styleElement("normal","#ffc7c7");break}
                  case 'psychic': {styleElement("psychic","#46a346");break}
                  case 'rock': {styleElement("rock","#00ff7b");break}
                  case 'dark': {styleElement("dark","#2b2121");break}
                  case 'fairy': {styleElement("fairy","#ff004c");break}
                  case 'ice': {styleElement("ice","#ccffda");break}
                }
              }
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

function styleElement(type, color)
{
    typesElement.setAttribute("style",`border:solid 1px;border-radius: 5px;background:linear-gradient(to bottom,#ffffff,${color})`);
    typesElement.setAttribute("type",`${type}`);
}

function select(objId)
{
	var id = objId.getAttribute("id");
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
  for (var i = 0; i < 12; i++) {links[i].style.visibility="visible"}
}

function filterType(objType)
{
    var type = objType.getAttribute("type");

    for (var i = 0; i < 12; i++) 
    {
      if ((links[i].childNodes[2].childNodes[0].getAttribute("type") != type)
        && (links[i].childNodes[2].childNodes[1].getAttribute("type")!= type)) 
        links[i].style.visibility="hidden"       
    }
}


	