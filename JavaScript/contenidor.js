// INSTRUCCIONES e información: 
// (-) La clase '.contenido' - se esconde por defecto 
// [1]  Esconde : (casi) todos los elementos html >que: tengan la 'clase contenido' 






// [[[ 1 ]]]
// [1] Esconde : (casi) todos los elementos html >que: tengan la 'clase contenido' + ( ) excepto : cuando tb tenga la clase "visiblePorDefecto" 
document.querySelectorAll('.contenido').forEach(contenido => {     contenido.style.display = 'none';     }); 






// [[[ 2 ]]] 
// [1]: Encuentra todos los elementos html con la clase '.contenedor' -y: [2]: a cada uno - añadirles un "EventListener" -y: [3] ??? 
document.querySelectorAll('.contenedor').forEach( contenedor_para_expandir => 
{

    // [2]: Añade un "EventListener" -a: cada uno de los elementos html con la clase '.contenedor'
    contenedor_para_expandir.addEventListener('click', () => {
        
        // usa el atributo "data-*" -para: saber : cual es el índice de los elementos con la clase '.contenido' que tiene que {aparecer -o: desaparecer}.
        // obten el ID ( -o: índice(?) ) de : el elemento 'contenedor_para_expandir' actual con el atributo 'data-contenidor-id' - del elemento clicado.
        // 1. obtiene el valor del atributo 'data-contenidor-id' del elemento en el que se hizo clic (contenedor_para_expandir). Este valor (valor del atributo 'data-contenidor-id' del elemento en el que se hizo clic --> contenidorIdActual) se utiliza para {identificar y seleccionar} los elementos '.contenido' correspondientes - que deben ser {mostrados -u: ocultados}
        const contenidorIdActual = contenedor_para_expandir.dataset.contenidorId; 


        // 2. Si el elemento clicalbe con la clase '.contenedor' no tiene un (atributo) 'data-contenido-id' ---> entonces : " nohacer nada " . 
        if (!contenidorIdActual) {
            // si NO hay contenidorIdActual -pq: no hay atributo 'data-contenido-id'  
            console.warn("This clickable element is missing a 'data-contenido-id' attribute:", contenedor_para_expandir);
            // la consola muestra la advertencia de arriva -y: el código se detiene aquí -sin hacer nada más
            return;
            // ell código se detiene aquí -sin hacer nada más 
        }


        // 3. Encuentra todos los elementos con la clase '.contenido' que tienen un 'data-contenidor-id' coincidente.
        const contenidoActualQueTieneQueAparecerODesaparecer = document.querySelectorAll(`.contenido[data-contenidor-id="${contenidorIdActual}"]`); 

         // 4. [1] Loop though = "Bulcea" = Repite cada uno de los elementos encontrados que tengan { el atributo data con el identificador coincidente con su contenedor } -y: [2] toggle = "alterna" su visibilidad.
        contenidoActualQueTieneQueAparecerODesaparecer.forEach(contenido => {
            toggleDisplay(contenido);
        });

    }); /* fin de :     contenedor_para_expandir.addEventListener('click', () => {     */

}); /* fin de :    document.querySelectorAll('.contenedor').forEach( contenedor_para_expandir => 
{     */










/*




//        CODIGO ANTERIOR -QUE FUNCIONABA :
        let incisoActualQueTieneQueAparecerODesaparecer = document.querySelectorAll('.inciso')[índice];


         // Comprueba si "el inciso que tiene que aparecer" - está escondido 
        if (incisoActualQueTieneQueAparecerODesaparecer.style.display === 'none') {
            
            // [ Si "el inciso que tiene que aparecer" - está escondido ] --> entonces : [ comprueba : cual es la etiqueta (ej: 'ul' ; 'ol' ; 'span') del elemento "actual con la clase 'inciso'" ]
            const tagNameDelElementoHTMLActual = incisoActualQueTieneQueAparecerODesaparecer.tagName;
            
            // [ Si la etiqueta (ej: 'ul' ; 'ol' ; 'span') del "elemento actual" ("con la clase 'inciso'") - que tiene que aparecer ] -es: [ { 'ul' -ó: 'ol' } ] --> entonces : [ ponerle el 'style' > 'display' > 'block' ] 
            // This ensures list items stack vertically.
            if (tagNameDelElementoHTMLActual === 'UL' || tagNameDelElementoHTMLActual === 'OL' || tagNameDelElementoHTMLActual === 'H1') {
                incisoActualQueTieneQueAparecerODesaparecer.style.display = 'block';
            } else {
                // Para cualquier otro tipo de elemento html (= no 'ul' -y: no 'ol') --> [ ponerle el 'style' > 'display' > 'inline' ] 
                incisoActualQueTieneQueAparecerODesaparecer.style.display = 'inline';
            }
        } else {
            // Si "el inciso" ya es visible --> entonces : escondelo 
            incisoActualQueTieneQueAparecerODesaparecer.style.display = 'none';
        }

    });

}); // FIN DEL CÓDIGO DE "STRETCH.TEXT" */




















// BOTÓN QUE HACE QUE "SE RESALTEN" "LOS ELEMENTOS CLICABLES PARA EXPANDIR" // BOTÓN QUE HACE QUE "SE RESALTEN" "LOS ELEMENTOS CLICABLES PARA EXPANDIR" // BOTÓN QUE HACE QUE "SE RESALTEN" "LOS ELEMENTOS CLICABLES PARA EXPANDIR" 
// BOTÓN QUE HACE QUE "SE RESALTEN" "LOS ELEMENTOS CLICABLES PARA EXPANDIR" // BOTÓN QUE HACE QUE "SE RESALTEN" "LOS ELEMENTOS CLICABLES PARA EXPANDIR" // BOTÓN QUE HACE QUE "SE RESALTEN" "LOS ELEMENTOS CLICABLES PARA EXPANDIR" 
// BOTÓN QUE HACE QUE "SE RESALTEN" "LOS ELEMENTOS CLICABLES PARA EXPANDIR" // BOTÓN QUE HACE QUE "SE RESALTEN" "LOS ELEMENTOS CLICABLES PARA EXPANDIR" // BOTÓN QUE HACE QUE "SE RESALTEN" "LOS ELEMENTOS CLICABLES PARA EXPANDIR" 
// [X] add: "if 'botónParaResaltarLosExpandibles' no esta presente → entonces : "desactivar este "script""" 
const hayBotónParaResaltarLosExpandibles = document.getElementById('botónParaResaltarLosExpandibles');
    
if (hayBotónParaResaltarLosExpandibles) 
    { 
    hayBotónParaResaltarLosExpandibles.addEventListener('click' , ()=>
    {
    
        // [1] "coge" todos los elementos que tengan la clase 'clicableParaExpandir' 
    const todosLosClicablesParaExpandirEnHTMLCollection = document.getElementsByClassName('clicableParaExpandir');
    /*console.log(todosLosClicablesParaExpandirEnHTMLCollection);*/ 
    // [ convertir 'HTMCollection' a "Array" ] <---pq: [ ' el método .forEach' - no "soporta" : el tipo de datos 'HTMLCollection' ]
     const todosLosClicablesParaExpandirEnArray = Array.from(todosLosClicablesParaExpandirEnHTMLCollection);
    /*console.log(todosLosClicablesParaExpandirEnArray);*/
     
     
    
     todosLosClicablesParaExpandirEnArray.forEach( clicable_para_expandir_actual => {
        let times = 0;
        let interval = setInterval(() => {
            clicable_para_expandir_actual.style.visibility = (clicable_para_expandir_actual.style.visibility === 'hidden') ? 'visible' : 'hidden';
            times++;
            if (times >= 4) { // Toggle twice (4 changes: visible → hidden → visible → hidden → visible)
                // [1] "resetea" "el intervalo"
                // [2] pon "el clicable para expandir" en 'visible' < 'display' < 'style' 
                clearInterval(interval);
                clicable_para_expandir_actual.style.visibility = 'visible'; // <- para asegurarse que : [ "los clicables para expandir" - "end up" : visibles ] 
            } 
        }, 300); // intervalo de : { " intermmitente ; parpadeo " } 
    });

} ) }; 


/*
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
}
    */






































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