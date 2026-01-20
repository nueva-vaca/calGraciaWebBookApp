

// 1. lista (en formato ‘HTMLColelction’) -de: ‘elementos html’ que contienen la clase “cuando clico  entonces se muestra el inciso “correspondiente”” = listaDeClicablesQueSeExpanden 
var listaDeClicablesQueSeExpanden = document.querySelectorAll (`.clicableParaExpandir`);
for (i=0;i<listaDeClicablesQueSeExpanden.length;i++){console.log(listaDeClicablesQueSeExpanden[i]);}

// 2. lista (en formato ‘HTMLColelction’) -de: los ‘emementos html’ que contienen la clase ‘inciso’ = listaDeIncisos 
var listaDeIncisos = document.querySelectorAll(`.inciso`); //for (i=0;i<listaDeIncisos.length;i++){console.log(listaDeIncisos[i]);}

// 3. “poner.le” la propiedad ‘display: none’ -a: todos los elementos que son “incisos”  
for ( incisoActual = 0 ; incisoActual < listaDeIncisos.length ; incisoActual++ ) 
{ listaDeIncisos[incisoActual].style["display"] = "none" ; } 
// [ ] mira que 'valor' tiene 'la propiedad : 'display'' - en los elementos html con la clase inciso 
// document.querySelectorAll(".inciso").forEach(element => {console.log(element.style.display);}); /* +-= for (i=0;i<listaDeIncisos.length;i++) {console.log(document.getElementsByClassName("inciso")[i].style.display); } */ 


// 4. uno por uno - coger cada elemento de "la lista de clicables que se expanden" -y: añadir.les una 'función on.click', --> entonces : "hacer un "if-then" para {hacer visible o esconder} el "inciso" 
// FUNCIONA FUNCIONA FUNCIONA 
// for (i=0;i<listaDeClicablesQueSeExpanden.length;i++){let x = listaDeClicablesQueSeExpanden[i]; let y = listaDeIncisos[i]; x.onclick = function(){if (y.style["display"] == "none"){y.style["display"] = "inline";} else {y.style["display"] = "none";} return false; }}




 
for ( i=0 ; i<listaDeClicablesQueSeExpanden.length ; i++ )
    {
    let x = listaDeClicablesQueSeExpanden[i]; 
    let y = listaDeIncisos[i]; 
    x.onclick = function()
        {
         y.style.display =  y.style.display === "none" ? "inline" : "none" ;
        }
    }












/*
// 4. “poner.le” la función ‘onclick’ -a: cada uno de “los elementos html que cuando se clican --> entonces : muestran el "inciso" correspondiente” 
for (
elementoActualDeLaListaDeClicablesQueSeExpanden = 0; 
elementoActualDeLaListaDeClicablesQueSeExpanden < listaDeClicablesQueSeExpanden.length;
elementoActualDeLaListaDeClicablesQueSeExpanden++
)
{

// [ ] coge : [ cada elemento actual de la lista ‘HTMLColection’ de “listaDeClicablesQueSeExpanden” ] -para: añadirle el ‘on.lick’  
let elemementoActualAlQueAñadirUnOnClick = listaDeClicablesQueSeExpanden[elementoActualDeLaListaDeClicablesQueSeExpanden]; 

// [ ] coge : [ cada elemento actual de la lista ‘HTMLColection’ de “listaDeIncisos” ] -para: mostrarlo o ocultarlo (cuando se clique)  
let incisoActualAlQueDisplayOrDesdisplay = listaDeIncisos [elementoActualDeLaListaDeClicablesQueSeExpanden];  

elemementoActualAlQueAñadirUnOnClick.onclick = function () 
{ 
incisoActualAlQueDisplayOrDesdisplay.style.display === "none" ? "inline" : "none"; 
return false; 
}

} */