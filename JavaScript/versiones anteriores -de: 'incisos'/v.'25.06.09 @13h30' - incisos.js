// orignal source -by: Bekah at https://www.thefrugalgamer.net/programming/Stretchtext/stretch.js, which is licensed under : CC0 1.0 Universal (Public domain). 





// [ ] crea una lista -con: todos los elementos html (en el documento) que contienen la clase 'inciso' 
var listaDeIncisos = document.getElementsByClassName("inciso"); 
/* ( ) mostrar : [ la lista de elementos html (en el documento) que contienen la clase 'inciso' ] <- en la consola */ console.log(`la lista de "incisos" es esta: ` + [...listaDeIncisos]);
/* ( ) mostrar : [ la lista de elementos html (en el documento) que contienen la clase 'inciso' ] <- en la consola */ console.log([...listaDeIncisos]);
/* ( ) [ mostrar : el tipo de datos - que es : la lista de elementos html (en el documento) que contienen la clase 'inciso' ] <- en la consola */ console.log(`los elementos html (en el documento) que contienen la clase 'inciso' -son: `+(typeof listaDeIncisos)); 


// Build two lists for all the stretch elements we've added to the document. We use getElementsByClassName so that the lists are live and not static
/* lista de elementos que "spawn.nean" 'incisos' */ var stretchLinks = document.getElementsByClassName("stretchLink");
///* [ ] crea una lista de elementos de que "spawn.nean" 'incisos' */ for ( x = 0 ; x < stretchLinks.length ; x++) {console.log(stretchLinks[x]);}

var stretchElem = document.getElementsByClassName ("stretch"); // devuelve : un 'HTMLCollection' (?) 
 

 /* Mostrar cada elemento en la consola */ for (var i = 0; i < stretchElem.length; i++) {console.log(stretchElem[i]);}
 /* Mostrar cada elemento en la consola */ for (var i = 0; i < stretchElem.length; i++) {console.log([...stretchElem]);}






// First I'm going to go through and explicity set the display: none property in each element. It will still work if we don't do this, but because the DOM doesn't have the style set explicity on page load, it means the user will have to click twice before getting any feedback (once for JS to set the property, and then again to process it properly). That's too counterintuitive for me, so setting it here makes things much smoother. Alternatively, we could simple type "style='display: none;'" into all of our <span> tags, but I'm trying to keep the text as simplified as possible, so I'd rather not.
for(i = 0; i < stretchElem.length; i++){
stretchElem[i].style["display"] = "none";
//stretchElem[i].innerHTML += " <a href=# class='close'>(close)</a>";
}



// Now we'll loop through them all
for(i = 0; i < stretchLinks.length; i++){
// Grab the current element out of each array. This handles some scope issues that can crop up if we reference them directly. If you don't set them directly, you can't pass the index along through the onclick function
	let slink = stretchLinks[i];
	let sspan = stretchElem[i];

	// Attach an onclick function to the link
	slink.onclick = function(){
	// If it's invisible, show it
	if(sspan.style["display"] == "none")
		sspan.style["display"] = "inline";
	// Otherwise hide it
	else
		sspan.style["display"] = "none";
	return false;
	}
}



// This adds some additional code to activate the close links at the end of the stretched out text
/*
var stretchClose = document.getElementsByClassName("close");

for(j = 0; j < stretchClose.length; j++){
	let closelink = stretchClose[j];
	let sspan = stretchClose[j].parentElement;

	 // Attach an onclick function to the link
	 closelink.onclick = function(){
	 	// If it's invisible, show it
	 	if(sspan.style["display"] == "none")
	 		sspan.style["display"] = "inline";
	 	// Otherwise hide it
	 	else
	 		sspan.style["display"] = "none";
	 	return false;
	 }
}
*/