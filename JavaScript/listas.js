








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
    // nombre de función = 'obtenerElElementoSelectAdecuado'   <-el cual:   devuelve el elemento del DOM que está vinculado a "un elemento <select> determinado"
    // recibe un elemento <select> (del DOM) como parámetro (llamado 'elementoHtmlSelect')
    const obtenerElElementoSelectAdecuado = (elementoHtmlSelect) => { 
    
    // Lee un selector CSS <--- desde un atributo data-* = data-id-lista-de-seleccion-unica
    const elementoSelectConElAtributoIdListaDeSeleccionUnica = elementoHtmlSelect.dataset.idListaDeSeleccionUnica   ;   

    // si existe el selector css con el atributo data-id-lista-de-seleccion-unica   --->entonces: 
    if (elementoSelectConElAtributoIdListaDeSeleccionUnica) {
        // Busca primero ( "el objetivo" = elemento Select Con El Atributo : Id Lista De Seleccion Unica ) dentro del mismo contenedor inyectado (#contenidoPrincipal)
        const hayContenidoPrincipal = document.getElementById('contenidoPrincipal')   ;
        // si hay "contenido principal" --->entonces:
        if (hayContenidoPrincipal) {
            // ¿ hay El Select Adecuado Dentro De : Contenido Principal ?
            const hayElSelectAdecuadoDentroDeContenidoPrincipal = hayContenidoPrincipal.querySelector(elementoSelectConElAtributoIdListaDeSeleccionUnica)   ;
            // si : [ hay El Select Adecuado Dentro De : Contenido Principal ]   ---> entonces :   [ "devolver" : " el elemento Select Con El Atributo : Id-Lista-De-Seleccion-Unica " ]
            if (hayElSelectAdecuadoDentroDeContenidoPrincipal) return hayElSelectAdecuadoDentroDeContenidoPrincipal   ;
        }
        // Fallback: buscar en todo el documento
        return document.querySelector(elementoSelectConElAtributoIdListaDeSeleccionUnica);
    }   // FIN DE :   if (elementoSelectConElAtributoIdListaDeSeleccionUnica) { 


    // si NO existe el selector css "select.dataset.idListaDeSeleccionUnica" --->entonces:
    return elementoHtmlSelect.previousElementSibling; // fallback +o-= Devuelve el elemento hermano anterior 


    };   // FIN DE :   const obtenerElElementoSelectAdecuado = (select) => { 






    // crea una función -llamda: 'reemplazarElTextoEnElElmentoAdecuadoPorElValorSeleccionadoEnElSelect' >que:   actualiza el contenido de texto de un elemento objetivo usando el valor actual de un <select> 
    // Su propósito es producir un efecto: reemplazar el texto en otro elemento -con: el valor seleccionado en el <select>.
    // recibe un elemento <select> como parámetro (llamado 'elementoHtmlSelect')
    const reemplazarElTextoEnElElmentoAdecuadoPorElValorSeleccionadoEnElSelect = (elementoHtmlSelect) => {

        // Llama a : "la constante función" 'obtenerElElementoSelectAdecuado'   --->para que:   devuelva el elemento del DOM que está vinculado a "un elemento <select> determinado" 
        const elementoHtmlQueMuestraLaOpciónSeleccionada = obtenerElElementoSelectAdecuado(elementoHtmlSelect)   ;

        // Si existe ese elemento "objetivo", actualiza su texto 
        if (elementoHtmlQueMuestraLaOpciónSeleccionada) elementoHtmlQueMuestraLaOpciónSeleccionada.textContent = elementoHtmlSelect.value   ;

    };   // FIN DE :    const reemplazarElTextoEnElElmentoAdecuadoPorElValorSeleccionadoEnElSelect = (elementoHtmlSelect) => {








    // const selector = '.lista-de-seleccion-unica select';
    // Cambiar el selector en listas.js para que funcione con cualquier <select> que tenga data-id-lista-de-seleccion-unica (no solo los que están dentro de .lista-de-seleccion-unica):
    const selector = 'select[data-id-lista-de-seleccion-unica]'   ;   // <- selecciona cualquier elemento <select> que tenga el atributo data-id-lista-de-seleccion-unica (con cualquier valor).

    // Inicializa selects presentes
    document.querySelectorAll(selector).forEach(reemplazarElTextoEnElElmentoAdecuadoPorElValorSeleccionadoEnElSelect);
    // .querySelectorAll('select[data-id-lista-de-seleccion-unica]')   <- selecciona cualquier elemento <select> que tenga el atributo data-id-lista-de-seleccion-unica (con cualquier valor). 
    // .querySelectorAll('.lista-de-seleccion-unica select')   <- selecciona cualquier elemento <select> que esté dentro de otro (cualquier) elemento html tenga la clase 'lista-de-seleccion-unica' 



    // Funciona también con contenido inyectado dinámicamente
    document.addEventListener('change', (event) => {
    const select = event.target.closest(selector);
    if (!select) return;
    reemplazarElTextoEnElElmentoAdecuadoPorElValorSeleccionadoEnElSelect(select);
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