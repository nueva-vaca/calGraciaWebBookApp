// INSTRUCTIONS: 
// (-) ' la clase '.inciso' - se esconde por defecto 
// [ ]  Hide all elements with the 'inciso' class by default









////////////////////////// IMPROVED "STRETCH.TEXT" VERSION
// Hide all elements with the 'inciso' class by default
document.querySelectorAll('.inciso').forEach(inciso => {
    inciso.style.display = 'none'; 
});



// [1]: Encuentra todos los elementos html con la clase '.clicableParaExpandir' -y: [2]: a cada uno - añadirles un "EventListener"  
document.querySelectorAll('.clicableParaExpandir').forEach((clicable_para_expandir, índice) => {

/*
        // Set the title attribute to display the index on hover = " mira que número de indice es cada elemento "
    clicable_para_expandir.setAttribute('title', `Índice: ${índice}`);
    */
    
    clicable_para_expandir.addEventListener('click', () => {
        // Get the corresponding 'inciso' element based on its order in the document
        let incisoActual = document.querySelectorAll('.inciso')[índice];


 // Mostrar los índices en la consola
            /*
            console.log(`Índice del "expandible" clicado: ${índice}`);
            console.log(`Elemento clicado:`, clicable_para_expandir);
            console.log(`Índice del inciso asociado: ${índice}`);
            console.log(`Elemento asociado (inciso):`, incisoActualQueTieneQueAparecerODesaparecer);
            */



        // Check if the inciso is currently hidden
        if (incisoActual.style.display === 'none') {
            // Get the HTML tag name of the inciso element (e.g., 'UL', 'OL', 'SPAN')
            const tagName = incisoActual.tagName;
            
            // If the inciso is a list (UL or OL), set its display to 'block'
            // This ensures list items stack vertically.
            if (tagName === 'UL' || tagName === 'OL') {
                incisoActual.style.display = 'block';
            } else {
                // For any other element type (like a SPAN), display it inline.
                incisoActual.style.display = 'inline';
            }
        } else {
            // If the inciso is already visible, hide it.
            incisoActual.style.display = 'none';
        }
    });

}); /* END OF "STRETCH.TEXT" CODE */



//////////////////// BUTTON TO HIGHLIGHT EXPANDABLE ELEMENTS
// Check if the highlight button exists before adding an event listener
const botonParaResaltar = document.getElementById('botónParaResaltarLosExpandibles');



if (botonParaResaltar) {
    botonParaResaltar.addEventListener('click', () => {
        
        const elements = document.querySelectorAll('.clicableParaExpandir');
        
        elements.forEach(element => {
            let times = 0;
            const interval = setInterval(() => {
                element.style.visibility = (element.style.visibility === 'hidden') ? 'visible' : 'hidden';
                times++;
                if (times >= 4) { // Blinks twice
                    clearInterval(interval);
                    element.style.visibility = 'visible'; // Ensure it ends up visible
                }
            }, 300); // Blinking interval
        });
    });
}
