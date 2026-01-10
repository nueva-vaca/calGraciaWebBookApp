// INSTRUCCIONES e información: 
// (-) ' la clase '.inciso' - se esconde por defecto 
// [1]  Esconde : (casi) todos los elementos html >que: tengan la 'clase inciso' 
// i: "original code" "sourced" from 'co.pilot' (?) <-- cuando le pedí "un stretch.text" (@ 12.025)





// [1] Esconde : (casi) todos los elementos html >que: tengan la 'clase inciso' + ( ) excepto : cuando tb tenga la clase "visiblePorDefecto" 
document.querySelectorAll('.inciso').forEach(inciso => {inciso.style.display = 'none'; }); 



// [1]: Encuentra todos los elementos html con la clase '.clicableParaExpandir' -y: [2]: a cada uno - añadirles un "EventListener" 
document.querySelectorAll('.clicableParaExpandir').forEach((clicable_para_expandir, índice) => 
{

    /*// Set the title attribute to display the index on hover = " mira que número de indice es cada elemento "
    clicable_para_expandir.setAttribute('title', `Índice: ${índice}`);*/

    clicable_para_expandir.addEventListener('click', () => {
        
        // Crea una variable que "guarde" el índice de : [ cada uno de 'los elementos html -con: la clase 'inciso'' ] - según su orden en el documento
        let incisoActualQueTieneQueAparecerODesaparecer = document.querySelectorAll('.inciso')[índice];


            /*// Mostrar los índices en la consola
            console.log(`Índice del "expandible" clicado: ${índice}`);
            console.log(`Elemento clicado:`, clicable_para_expandir);
            console.log(`Índice del inciso asociado: ${índice}`);
            console.log(`Elemento asociado (inciso):`, incisoActualQueTieneQueAparecerODesaparecer);*/

         // Check if the inciso is currently hidden
        if (incisoActualQueTieneQueAparecerODesaparecer.style.display === 'none') {
            // Get the HTML tag name of the inciso element (e.g., 'UL', 'OL', 'SPAN')
            const tagName = incisoActualQueTieneQueAparecerODesaparecer.tagName;
            
            // If the inciso is a list (UL or OL), set its display to 'block'
            // This ensures list items stack vertically.
            if (tagName === 'UL' || tagName === 'OL') {
                incisoActualQueTieneQueAparecerODesaparecer.style.display = 'block';
            } else {
                // For any other element type (like a SPAN), display it inline.
                incisoActualQueTieneQueAparecerODesaparecer.style.display = 'inline';
            }
        } else {
            // If the inciso is already visible, hide it.
            incisoActualQueTieneQueAparecerODesaparecer.style.display = 'none';
        }

    });

}); /* FIN DEL CÓDIGO DE "STRETCH.TEXT" */






//////////////////// BOTÓN QUE HACE QUE "SE RESALTEN" "LOS ELEMENTOS CLICABLES PARA EXPANDIR" 
// [ ] add: "if 'botónParaResaltarLosExpandibles' no esta presente → entonces : "desactivar este "script""" 
    document.getElementById('botónParaResaltarLosExpandibles').addEventListener('click', () => {
        let elements = document.querySelectorAll('.clicableParaExpandir');
        
        elements.forEach(element => {
            let times = 0;
            let interval = setInterval(() => {
                element.style.visibility = (element.style.visibility === 'hidden') ? 'visible' : 'hidden';
                times++;
                if (times >= 4) { // Toggle twice (4 changes: visible → hidden → visible → hidden → visible)
                    clearInterval(interval);
                    element.style.visibility = 'visible'; // Ensure final state is visible
                }
            }, 300); // 300ms interval for blinking effect
        });
    });







































/* // UNA VERSIÓN (que funciona) PARA HACER "STRETCH.TEXT" :
var listaDeClicablesQueSeExpanden = document.querySelectorAll (`.clicableParaExpandir`);
var listaDeIncisos = document.querySelectorAll(`.inciso`); 

for ( indexDelIncisoActual = 0 ; indexDelIncisoActual < listaDeIncisos.length ; indexDelIncisoActual++ ) 
{ listaDeIncisos[indexDelIncisoActual].style["display"] = "none" ; } 

for ( i=0 ; i<listaDeClicablesQueSeExpanden.length ; i++ )
    {
    let x = listaDeClicablesQueSeExpanden[i]; 
    let y = listaDeIncisos[i]; 
    x.onclick = function()
        {
         y.style.display =  y.style.display === "none" ? "inline" : "none" ;
        }
    }

*/































/* // OTRA VERSION DE "STRETCH.TEXT" DE 'COPILOT' 
document.querySelectorAll('.inciso').forEach(inciso => {inciso.style.display = 'none';}); // Hide all incisos initially

document.querySelectorAll('.clicableParaExpandir').forEach(clicable => {
    clicable.addEventListener('click', function() {
        let inciso = this.nextElementSibling;
        if (inciso && inciso.classList.contains('inciso')) {
            inciso.style.display = inciso.style.display === 'none' ? 'inline' : 'none';
        }
    });
});
*/





























/* //////////////////////////// UNA DE LAS PRIMERAS VERSIONES DE "STRETCH.TEXT" QUE CONSEGUÍ 
// 1. lista (en formato ‘HTMLColelction’) -de: ‘elementos html’ que contienen la clase “cuando clico --> entonces se muestra el inciso “correspondiente”” = listaDeClicablesQueSeExpanden 
var listaDeClicablesQueSeExpanden = document.querySelectorAll (`.clicableParaExpandir`); //for (i=0;i<listaDeClicablesQueSeExpanden.length;i++){console.log(listaDeClicablesQueSeExpanden[i]);}

// 2. lista (en formato ‘HTMLColelction’) -de: los ‘emementos html’ que contienen la clase ‘inciso’ = listaDeIncisos 
var listaDeIncisos = document.querySelectorAll(`.inciso`); //for (i=0;i<listaDeIncisos.length;i++){console.log(listaDeIncisos[i]);}

// 3. “poner.le” la propiedad ‘display: none’ -a: todos los elementos que son “incisos”  
for ( incisoActual = 0 ; incisoActual < listaDeIncisos.length ; incisoActual++ ) 
{ listaDeIncisos[incisoActual].style["display"] = "none" ; } 

// 4. uno por uno - coger cada elemento de "la lista de clicables que se expanden" -y: añadir.les una 'función on.click', --> entonces : "hacer un "if-then" para {hacer visible o esconder} el "inciso" 
for ( i=0 ; i<listaDeClicablesQueSeExpanden.length ; i++ )
    {
    let x = listaDeClicablesQueSeExpanden[i]; 
    let y = listaDeIncisos[i]; 
    x.onclick = function()
        {
         y.style.display =  y.style.display === "none" ? "inline" : "none" ;
        }
    }
// (funciona) código alternativo: for (i=0;i<listaDeClicablesQueSeExpanden.length;i++){let x = listaDeClicablesQueSeExpanden[i]; let y = listaDeIncisos[i]; x.onclick = function(){if (y.style["display"] == "none"){y.style["display"] = "inline";} else {y.style["display"] = "none";} return false; }}
 */