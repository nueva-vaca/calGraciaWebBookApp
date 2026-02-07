// INSTRUCCIONES e información:  
// [1]: Esconde : los elementos de la clase 'contenido' 
// [2]: Añade 'EventListeners' a los elementos con clase '.contenedor' -y: "expandir" o "colapsar" los elementos '.contenido' correspondientes 



// [[[ 1 ]]]:  ESCONDE '.contenido' - al cargar la página
// [1d1]: Esconde : (casi) todos los elementos html >que: tengan la 'clase contenido' + ( ) excepto : cuando tb tenga la clase "visiblePorDefecto" 
document.querySelectorAll('.contenido').forEach(contenido => {     contenido.style.display = 'none';     })   ; 






// [[[ 2 ]]] "TOGGLEA" LA VISIBILIDAD DE '.contenido' - AL HACER CLICK EN '.contenedor'
// [1d6]: Encuentra todos los elementos html con la clase '.contenedor' -y: a cada unos de ellos...:
document.querySelectorAll('.contenedor').forEach( contenedor_para_expandir => 
{

    // [2d6]: Añade un "EventListener" -a: cada uno de los elementos html con la clase '.contenedor', y caundo se clique en ellos...:
    contenedor_para_expandir.addEventListener( 'click' , () => {
        
        // [ se usa el atributo "data-*" ] -para: [ saber : cual es el identificador (ID) de los elementos con la clase '.contenido' que tiene que {aparecer -o: desaparecer} ]
        // [3d6] obten el valor del atributo 'data-contenidor-id' actual del elemento clicado. Este valor (valor del atributo 'data-contenidor-id' del elemento en el que se hizo clic ---> contenidorIdActual) se utiliza para {identificar -y: seleccionar} los elementos '.contenido' correspondientes - que deben ser {mostrados -u: ocultados}
        const contenidorIdActual = contenedor_para_expandir.dataset.contenidorId   ; 


        // [4d6] Si el elemento clicalbe con la clase '.contenedor' no tiene un (atributo) 'data-contenido-id' ---> entonces : " no hacer nada "  
        // si : NO hay contenidorIdActual -pq: no hay atributo 'data-contenidor-id' --->entonces...:
        if (!contenidorIdActual) {
            // la consola muestra la advertencia de arriba -y: el código se detiene aquí -sin hacer nada más 
            console.warn("This clickable element is missing a 'data-contenidor-id' attribute:" , contenedor_para_expandir )   ;
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
            

    }); // fin de :    contenedor_para_expandir.addEventListener('click', () => {     

}); // fin de :    document.querySelectorAll('.contenedor').forEach( contenedor_para_expandir => {






























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




















 




/* [1] the script 'contenidor.js' runs immediately <--- when index.html first loads. Later pages (like inicio.html) - are injected later <-by: the "router api history". Because contenidor.js has already finished running by the time inicio.html arrives, the new elements (like "landing page" and its expandable content) don't get the event listeners they need.

Here is the recommended Lifecycle Approach to fix this using your specific files.

Step 1: Wrap the Logic in contenidor.js
You need to turn your code into a reusable function



*/