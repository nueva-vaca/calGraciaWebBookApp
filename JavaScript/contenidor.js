// INSTRUCCIONES e información:  
// [1]: Esconde : los elementos de la clase 'contenido' 
// [2]: Añade 'EventListeners' a los elementos con clase '.contenedor' -y: "expandir" o "colapsar" los elementos '.contenido' correspondientes 










/*



// [[[ 1 ]]]:  ESCONDE '.contenido' - al cargar la página
// [1d1]: Esconde : (casi) todos los elementos html >que: tengan la 'clase contenido' + ( ) excepto : cuando tb tenga la clase "visiblePorDefecto" 
document.querySelectorAll('.contenido').forEach(contenido => {     contenido.style.display = 'none';     })   ; 






// [[[ 2 ]]] "TOGGLEA" LA VISIBILIDAD DE '.contenido' - AL HACER CLICK EN '.contenedor'
// [1d6]: Encuentra todos los elementos html con la clase '.contenedor' -y: a cada unos de ellos...:
document.querySelectorAll('.contenedor').forEach( el_contenedor_clicado_para_expandir => 
{
// + 'document' = the entire web page - loaded in the browser window 

    // [2d6]: Añade un "EventListener" -a: cada uno de los elementos html con la clase '.contenedor', y caundo se clique en ellos...:
    el_contenedor_clicado_para_expandir.addEventListener( 'click' , () => {
        
        // [ se usa el atributo "data-*" ] -para: [ saber : cual es el identificador (ID) de los elementos con la clase '.contenido' que tiene que {aparecer -o: desaparecer} ]
        // [3d6] obten el valor del atributo 'data-contenidor-id' actual del elemento clicado. Este valor (valor del atributo 'data-contenidor-id' del elemento en el que se hizo clic ---> contenidorIdActual) se utiliza para {identificar -y: seleccionar} los elementos '.contenido' correspondientes - que deben ser {mostrados -u: ocultados}
        const contenidorIdActual = el_contenedor_clicado_para_expandir.dataset.contenidorId   ; 


        // [4d6] Si el elemento clicalbe con la clase '.contenedor' no tiene un (atributo) 'data-contenido-id' ---> entonces : " no hacer nada "  
        // si : NO hay contenidorIdActual -pq: no hay atributo 'data-contenidor-id' --->entonces...:
        if (!contenidorIdActual) {
            // la consola muestra la advertencia de arriba -y: el código se detiene aquí -sin hacer nada más 
            console.warn("This clickable element is missing a 'data-contenidor-id' attribute:" , el_contenedor_clicado_para_expandir )   ;
            // el código se detiene aquí - sin hacer nada más 
            return; 
        }


        
        // [5d6] Encuentra todos los elementos con la clase '.contenido' que tienen un 'data-contenidor-id' coincidente con el 'data-contenidor-id' del elemento '.contenedor' que fue clicado. Crea un array con esos elementos.  
        const contenidoActualQueTieneQueAparecerODesaparecer = document.querySelectorAll(`.contenido[data-contenidor-id="${contenidorIdActual}"]`); 

         // [6d6] [6.1] 'Loop though' = "Buclea" = "Recorre" : cada uno de los elementos encontrados que tengan { 'el atributo data' con el identificador coincidente con su "contenedor" } -y: [6.2] toggle = "alterna" su visibilidad. 
        contenidoActualQueTieneQueAparecerODesaparecer.forEach( contenidoConIdCoincidente => { 
            // [ Si el elemento "contenido" está oculto ( = 'style.display === 'none' ) ] ---> entonces : [ comprueba su etiqueta HTML (ej: 'ul' ; 'ol' ; 'span') -y: ponle el 'style.display' adecuado ( = 'block' -o: 'inline' ) ] 
            if (contenidoConIdCoincidente.style.display === 'none') { 
                // obtiene la etiqueta HTML (ej: 'ul' ; 'ol' ; 'span') del elemento "contenido" actual
                const EtiquetaDelElementoActual = contenidoConIdCoincidente.tagName;
                // [ Si la etiqueta HTML (ej: 'ul' ; 'ol' ; 'span') del elemento "contenido" actual -es: { 'ul' -ó: 'ol' } ] --> entonces : [ ponerle el 'style.display' > 'block' ] , -de otra forma: --> entonces : ponerle el 'style.display' === 'inline'
                contenidoConIdCoincidente.style.display = (
                    EtiquetaDelElementoActual === 'UL' || 
                    EtiquetaDelElementoActual === 'OL' || 
                    EtiquetaDelElementoActual === 'H1' || 
                    EtiquetaDelElementoActual === 'P'
                ) ? 'block' : 'inline'  ;
            // Si el elemento "contenido" ya es visible --> entonces : escondelo 
            } else {
                contenidoConIdCoincidente.style.display = 'none' ;
            }
        }); // fin de :    contenidoActualQueTieneQueAparecerODesaparecer.forEach(contenidoConIdCoincidente => {
            

    }); // fin de :    el_contenedor_clicado_para_expandir.addEventListener('click', () => {     

}); // fin de :    document.querySelectorAll('.contenedor').forEach( el_contenedor_clicado_para_expandir => {



*/ 


























// BOTÓN QUE HACE QUE "SE RESALTEN" "LOS ELEMENTOS .CONTENEDOR" 
// BOTÓN QUE HACE QUE "SE RESALTEN" "LOS ELEMENTOS .CONTENEDOR" 
// BOTÓN QUE HACE QUE "SE RESALTEN" "LOS ELEMENTOS .CONTENEDOR" 
// BOTÓN QUE HACE QUE "SE RESALTEN" "LOS ELEMENTOS .CONTENEDOR" 
// BOTÓN QUE HACE QUE "SE RESALTEN" "LOS ELEMENTOS .CONTENEDOR" 
// BOTÓN QUE HACE QUE "SE RESALTEN" "LOS ELEMENTOS .CONTENEDOR" 
// BOTÓN QUE HACE QUE "SE RESALTEN" "LOS ELEMENTOS .CONTENEDOR" 
// BOTÓN QUE HACE QUE "SE RESALTEN" "LOS ELEMENTOS .CONTENEDOR" 
// BOTÓN QUE HACE QUE "SE RESALTEN" "LOS ELEMENTOS .CONTENEDOR" 
// BOTÓN QUE HACE QUE "SE RESALTEN" "LOS ELEMENTOS .CONTENEDOR" 
// BOTÓN QUE HACE QUE "SE RESALTEN" "LOS ELEMENTOS .CONTENEDOR" 
// BOTÓN QUE HACE QUE "SE RESALTEN" "LOS ELEMENTOS .CONTENEDOR"


// [X] add: "if 'botónParaResaltarLosExpandibles' no esta presente → entonces : "desactivar este "script""" 
const hayBotónParaResaltarLosContenedores = document.getElementById('botónParaResaltarLosContenedores') ;
    
if (hayBotónParaResaltarLosContenedores) 
    { 
    hayBotónParaResaltarLosContenedores.addEventListener( 'click' , () =>
    {
    
        // [1] "coge" todos los elementos que tengan la clase 'contenedor' 
    const todosLosContenedoresEnHTMLCollection = document.getElementsByClassName('contenedor'); 
    // [ convertir 'HTMCollection' a "Array" ] <---pq: [ ' el método .forEach' - no "soporta" : el tipo de datos 'HTMLCollection' ]
     const todosLosContenedoresEnArray = Array.from(todosLosContenedoresEnHTMLCollection) ;
     
     
    
     todosLosContenedoresEnArray.forEach( contenedor_actual => {
        let times = 0;
        let interval = setInterval(() => {
            contenedor_actual.style.visibility = (contenedor_actual.style.visibility === 'hidden') ? 'visible' : 'hidden';
            times++;
            if (times >= 4) { // Toggle twice (4 changes: visible → hidden → visible → hidden → visible)
                // [1] "resetea" "el intervalo"
                // [2] pon "el clicable para expandir" en 'visible' < 'display' < 'style' 
                clearInterval(interval);
                contenedor_actual.style.visibility = 'visible'; // <- para asegurarse que : [ "los clicables para expandir" - "end up" : visibles ] 
            } 
        }, 300); // intervalo de : { " intermmitente ; parpadeo " } 
    });

} ) /* FINAL DE: hayBotónParaResaltarLosContenedores.addEventListener( 'click' , () => {    */
 }; /* FINAL DE: if (hayBotónParaResaltarLosContenedores)    */




















 




/* abandoned ( bc I think I found something better )

- how to apply the centenidor.js in the inicio.html ? 

+- the script 'contenidor.js' runs immediately <--- when index.html first loads. Later pages (like inicio.html) - are injected later <-by: the "router api history". Because : [ contenidor.js has already ran by the time inicio.html arrives ] ---> the new { injected / inserted } elements (like "the landing page" and its "expandable" content) don't get the event listeners they need -bc: ... ?




+ Here is the recommended 'Lifecycle Approach' <--- to fix this using your specific files.

Step 1: "Wrap" : 'the "Logic" in contenidor.js'
    You need : to turn your code -into: a reusable function   - so : you can "call" it - every time a new page loads. 
    Modify contenidor.js - to look like "this". We "wrap" "the logic" -in: a function attached to window ---> so : it's globally accessible:
    +-   1. Define the function globally +o-= 'window'."aplicarLogicaContenidor" = function() {   "writing of : la función principal de contenidor.js "   } 
    + // 2. document.addEventListener('DOMContentLoaded', window.aplicarLogicaContenidor);   --->   Run it once for the initial page load (index.html content) 
const btnResaltar = document.getElementById('botónParaResaltarLosContenedores');
if (btnResaltar) {
    // ... your existing button logic ...
}

Step 2: Trigger it in router api history.js 
    Now update your router to "re-apply" this logic instantly after it injects the new HTML.
    Look for the inyectarPáginaEnrutada function -and: add the call at the end:

(t) Why this works:
    ] Index Loads --> contenidor.js defines the function 'aplicarLogicaContenidor'.
    ] User clicks "About".
    ] Router Fetches: router api history.js gets the new HTML and puts it in the page.
    ] Router Calls: inyectarPáginaEnrutada calls aplicarLogicaContenidor().
    ] Script Applies: The function finds the new .contenedor elements from the new page and makes them clickable.

*/

















/*
+ you can replace "the direct event listeners" -with: "event delegation" ( > one listener, works forever, zero maintenance). This means = you attach one listener on "a parent - that never gets replaced", --->and: it automatically works for any injected content   +and:   no "re-initialization" needed. 

*/



// INSTRUCCIONES e información:  
// [1]: Esconde : los elementos de la clase 'contenido' >   [1a] primero en 'index.html' -y: [1b] después en : ...?
// [2]: "delegación de eventos"(?) [2a] Añade 'EventListeners' a los elementos con clase '.contenedor' -y: [2b] {"expandir" o "colapsar"} : los elementos '.contenido' correspondientes 



// [[[ 1 ]]]:  ESCONDE '.contenido' - al cargar la página
// [1d1]: Esconde : (casi) todos los elementos html >que: tengan la 'clase contenido' + ( ) excepto : cuando tb tenga la clase "visiblePorDefecto" 
// NOTA: Ahora usamos un MutationObserver para esconder automáticamente cualquier '.contenido' nuevo que aparezca en el DOM
// (esto reemplaza el querySelectorAll inicial que sólo corría una vez)

// [1a] Esconde los '.contenido' 
document.querySelectorAll('.contenido').forEach(contenido => { contenido.style.display = 'none'; });

// [1b] esconde los '.contenido' nuevos automáticamente <--- cada vez que se inyecta HTML nuevo <--- observando el DOM 
// + new - create an 'instance' of an 'object' (from a 'constructor')
const observadorDeContenido = new MutationObserver((mutaciones) => {
    mutaciones.forEach(mutacion => {
        mutacion.addedNodes.forEach(nodo => {
            // Si el nodo añadido es un elemento
            if (nodo.nodeType === 1) {
                // Si el propio nodo es '.contenido', escóndelo
                if (nodo.classList && nodo.classList.contains('contenido')) {
                    nodo.style.display = 'none';
                }
                // También esconde cualquier '.contenido' dentro del nodo añadido
                nodo.querySelectorAll && nodo.querySelectorAll('.contenido').forEach(contenido => {
                    contenido.style.display = 'none';
                });
            }
        });
    });
});

observadorDeContenido.observe(document.body, { childList: true, subtree: true });





// [[[ 2 ]]] "TOGGLEA" LA VISIBILIDAD DE '.contenido' - AL HACER CLICK EN '.contenedor'
// DELEGACIÓN DE EVENTOS: Un solo listener en 'document.body'(!) ( = the <body> element of the current HTML document ) que funciona para CUALQUIER '.contenedor', >incluyendo: los que se inyectan después (ej: inicio.html inyectado por el router) 
// - añade un 'event listener' -en: 'el body de la página web cargada en la ventana'
document.body.addEventListener('click', (seHaClicadoAlgo) => { 
// + 'document' = the entire web page - loaded in the browser window 
// + the .body 'property' - specifically gives you : direct access to 'the <body> tag / element(?)' 



    // Busca: si lo que se clicó -es: un '.contenedor' (o está dentro de uno)
        const el_contenedor_clicado_para_expandir = seHaClicadoAlgo.target.classList.contains('contenedor')  ?   seHaClicadoAlgo.target   :    null   ; 
        // + [1] It checks if the clicked element (= seHaClicadoAlgo.target) has the class 'contenedor' -and: {   [1y] if yes, it assigns that element to 'the variable el_contenedor_clicado_para_expandir'   -vs:   [1n] if not, it assigns null   } 
    //const el_contenedor_clicado_para_expandir = seHaClicadoAlgo.target.closest('.contenedor')   ;

    // Si no se clicó en un '.contenedor', no hagas nada
    if (!el_contenedor_clicado_para_expandir) return   ;




    // [[[ cambia la visibilidad de : todos los contenidos "pertinentes" ]]]

    // [3d6] obten el valor del atributo 'data-contenidor-id' del elemento '.contenedor' clicado actual 
    const contenidorIdActual = el_contenedor_clicado_para_expandir.dataset.contenidorId   ;

    // [4d6] Si no tiene 'data-contenidor-id' --> no hacer nada +o-= salir 
    if (!contenidorIdActual) {   return   ;   }

    // [5d6] Encuentra : [ todos los elementos html con la classe '.contenido' que también tengan el mismo 'data-contenidor-id' (en la variable 'contenidorIdActual' justo arriba) ] 
    const contenidoActualQueTieneQueAparecerODesaparecer = document.querySelectorAll(`.contenido[data-contenidor-id="${contenidorIdActual}"]`)   ; 
    // resulta en : una colección de 'elementos html' +o-= 'NodeList'(?)  
    // + 'document.querySelectorAll method' -returns: a static NodeList of all elements in the document that match the specified CSS selector 
    // + The selector string -uses: template literals |-> { backticks -and: ${} } <---to: dynamically insert the value of the variable 'contenidorIdActual' into the attribute selector. 

    // [6d6] Toggle su visibilidad
    contenidoActualQueTieneQueAparecerODesaparecer.forEach(contenidoConIdCoincidente => {
        if (contenidoConIdCoincidente.style.display === 'none') { 
            const EtiquetaDelElementoActual = contenidoConIdCoincidente.tagName   ;
            contenidoConIdCoincidente.style.display = (
                EtiquetaDelElementoActual === 'UL' ||
                EtiquetaDelElementoActual === 'OL' ||
                EtiquetaDelElementoActual === 'H1' ||
                EtiquetaDelElementoActual === 'P'
            ) ? 'block' : 'inline'   ;
        } else {
            contenidoConIdCoincidente.style.display = 'none'   ;
        }
    });

}); // fin de : document.body.addEventListener('click', ...






























// BOTÓN QUE HACE QUE "SE RESALTEN" "LOS ELEMENTOS .CONTENEDOR" 
// ...existing code... (this section stays exactly the same)