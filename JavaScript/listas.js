








/*
// Laia me propuso este código para : elegir un item de una lista
document.querySelectorAll('.lista-de-selección-única select').forEach(elementoHtmlSelect => {
        elementoHtmlSelect.addEventListener('change', () => {
        // para cada elemento html <select> que esté dentro de un contenedor con la clase '.lista-de-selección-única'   -adjunta:   un evento 'change' ( que se dispara cuando el usuario selecciona una opción <option> diferente ). 
            elementoHtmlSelect.previousElementSibling.textContent = elementoHtmlSelect.value;
            // [0] cuando ocurre "ese" cambio, [1] el código toma el elemento hermano inmediatamente anterior del <select> (previousElementSibling) -y: [2] reemplaza su texto (textContent) -con: el valor del item <option> seleccionado (elementoHtmlSelect.value).

        });   // FIN DE : elementoHtmlSelect.addEventListener('change', () => { 

});   // FIN DE :   document.querySelectorAll('.lista-de-selección-única select').forEach(elementoHtmlSelect => { 
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
    if (window.__listasJsInicializado) return;
    window.__listasJsInicializado = true;



    // const selector = '.lista-de-selección-única select';
    // Cambiar el selector en listas.js para que funcione con cualquier <select> que tenga data-lista-de-selección-única (no solo los que están dentro de .lista-de-selección-única):
    const selector = 'select[data-lista-de-selección-única]'; 



    /*antiguo código:
    const obtenerObjetivo = (select) => {
        const targetSelector = select.dataset.target;
        if (targetSelector) return document.querySelector(targetSelector);
        return select.previousElementSibling; // fallback
    };*/
    const obtenerObjetivo = (select) => {
    const targetSelector = select.dataset.target;
    if (targetSelector) {
        // Busca primero dentro del mismo contenedor inyectado (#contenidoPrincipal)
        const main = document.getElementById('contenidoPrincipal');
        if (main) {
            const dentro = main.querySelector(targetSelector);
            if (dentro) return dentro;
        }
        // Fallback: buscar en todo el documento
        return document.querySelector(targetSelector);
    }
    return select.previousElementSibling; // fallback
    };



    const sincronizar = (select) => {
        const objetivo = obtenerObjetivo(select);
        if (objetivo) objetivo.textContent = select.value;
    };



    // Inicializa selects presentes
    document.querySelectorAll(selector).forEach(sincronizar);



    // Funciona también con contenido inyectado dinámicamente
    document.addEventListener('change', (event) => {
    const select = event.target.closest(selector);
    if (!select) return;
    sincronizar(select);
    });   // FIN DE :   document.addEventListener('change', (event) => { 


        
})();   // FIN DE :   (() => { 