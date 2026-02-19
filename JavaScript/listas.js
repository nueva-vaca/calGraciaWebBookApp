









// Laia me propuso este código para : elegir un item de una lista
document.querySelectorAll('.lista-de-selección-única select').forEach(elementoHtmlSelect => {
        elementoHtmlSelect.addEventListener('change', () => {
        // para cada elemento html <select> que esté dentro de un contenedor con la clase '.lista-de-selección-única'   -adjunta:   un evento 'change' ( que se dispara cuando el usuario selecciona una opción <option> diferente ). 
            elementoHtmlSelect.previousElementSibling.textContent = elementoHtmlSelect.value;
            // [0] cuando ocurre "ese" cambio, [1] el código toma el elemento hermano inmediatamente anterior del <select> (previousElementSibling) -y: [2] reemplaza su texto (textContent) -con: el valor del item <option> seleccionado (elementoHtmlSelect.value).

        });   // FIN DE : elementoHtmlSelect.addEventListener('change', () => { 

});   // FIN DE :   document.querySelectorAll('.lista-de-selección-única select').forEach(elementoHtmlSelect => { 