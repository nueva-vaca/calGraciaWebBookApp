








/*
// Laia me propuso este código para : elegir un item de una lista
document.querySelectorAll('.lista-de-seleccion-unica select').forEach(elementoHtmlSelect => {
        elementoHtmlSelect.addEventListener('change', () => {
        // para cada elemento html <select> que esté dentro de un contenedor con la clase '.lista-de-seleccion-unica'   -adjunta:   un evento 'change' ( que se dispara cuando el usuario selecciona una opción <option> diferente ). 
            elementoHtmlSelect.previousElementSibling.textContent = elementoHtmlSelect.value;
            // [0] cuando ocurre "ese" cambio, [1] el código toma el elemento hermano inmediatamente anterior del <select> (previousElementSibling) -y: [2] reemplaza su texto (textContent) -con: el valor del item <option> seleccionado (elementoHtmlSelect.value).

        });   // FIN DE : elementoHtmlSelect.addEventListener('change', () => { 

});   // FIN DE :   document.querySelectorAll('.lista-de-seleccion-unica select').forEach(elementoHtmlSelect => { 
*/





























/* 
this:   (()=>{...})();   <-is:   an IIFE = an Immediately Invoked Function Expression   =   a JavaScript pattern where you define an anonymous function and call it right away. Breaking it down:
(               // wrap in parens to make it an expression
  () => {       // arrow function with no parameters
    ...         // function body
  }
)();            // immediately invoke it with ()

(()=>{...})();   =   (function(){...})(); 
*/

(() => {



    // Evita registrar listeners duplicados
    if (window.__listasJsInicializado) return   ;
    window.__listasJsInicializado = true   ;




    /* antiguo código:     
    const obtenerObjetivo = (select) => {        
        const targetSelector = select.dataset.target;        
        if (targetSelector) return document.querySelector(targetSelector)   ;        
        return select.previousElementSibling; // fallback    
    }  ;
    */
    // nombre de función = 
    const obtenerObjetivo = (elementoHtmlSelect) => { 
    // el parámetro select es simplemente el elemento <select> del DOM que tú le pasas cuando llamas a la función. No es una palabra reservada, es un nombre de variable. Podrías haberlo llamado " elemento, combo, dropdown o incluso x ". Tú decides el nombre.
    const targetSelector = elementoHtmlSelect.dataset.idListaDeSeleccionUnica   ;   // Lee un selector CSS <--- desde un atributo data-* 
    // si existe el selector css descrito en la linea anterior --->entonces: 
    if (targetSelector) {
        // Busca primero ("el objetivo" = ) dentro del mismo contenedor inyectado (#contenidoPrincipal)
        const main = document.getElementById('contenidoPrincipal');
        if (main) {
            const dentro = main.querySelector(targetSelector);
            if (dentro) return dentro;
        }
        // Fallback: buscar en todo el documento
        return document.querySelector(targetSelector);
    }   // FIN DE :   if (targetSelector) { 
    // si NO existe el selector css "select.dataset.idListaDeSeleccionUnica" --->entonces:
    return elementoHtmlSelect.previousElementSibling; // fallback +o-= Devuelve el elemento hermano anterior 
    };   // FIN DE :   const obtenerObjetivo = (select) => { 



    const sincronizar = (elementoHtmlSelect) => {
        const objetivo = obtenerObjetivo(elementoHtmlSelect);
        if (objetivo) objetivo.textContent = elementoHtmlSelect.value;
    };





    // const selector = '.lista-de-seleccion-unica select';
    // Cambiar el selector en listas.js para que funcione con cualquier <select> que tenga data-id-lista-de-seleccion-unica (no solo los que están dentro de .lista-de-seleccion-unica):
    const selector = 'select[data-id-lista-de-seleccion-unica]'   ;   // <- selecciona cualquier elemento <select> que tenga el atributo data-id-lista-de-seleccion-unica (con cualquier valor).

    // Inicializa selects presentes
    document.querySelectorAll(selector).forEach(sincronizar);
    // .querySelectorAll('select[data-id-lista-de-seleccion-unica]')   <- selecciona cualquier elemento <select> que tenga el atributo data-id-lista-de-seleccion-unica (con cualquier valor). 
    // .querySelectorAll('.lista-de-seleccion-unica select')   <- selecciona cualquier elemento <select> que esté dentro de otro (cualquier) elemento html tenga la clase 'lista-de-seleccion-unica' 



    // Funciona también con contenido inyectado dinámicamente
    document.addEventListener('change', (event) => {
    const select = event.target.closest(selector);
    if (!select) return;
    sincronizar(select);
    });   // FIN DE :   document.addEventListener('change', (event) => { 


        
})();   // FIN DE :   (() => { 






































/*
(() => {



    // Evita registrar listeners duplicados
    if (window.__listasJsInicializado) return;
    window.__listasJsInicializado = true;



    //const selector = 'select[data-id-lista-de-seleccion-unica]'   ; 



    // El <select> ya muestra la primera <option> por defecto -
    // solo necesitamos escuchar cambios futuros (delegación de eventos)
    document.addEventListener('change', (event) => {
        const select = event.target.closest('select[data-id-lista-de-seleccion-unica]');
        if (!select) return
        // aquí puedes añadir lógica adicional si en el futuro
        // necesitas sincronizar algo con el valor seleccionado
        console.log('lista cambiada:', select.dataset.idListaDeSeleccionUnica, '=', select.value);
    });



})();   // FIN DE :   (() => { 
*/