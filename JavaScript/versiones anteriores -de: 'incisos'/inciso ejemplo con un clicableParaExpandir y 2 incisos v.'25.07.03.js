// INSTRUCCIONES e información:
// (-) ' la clase '.inciso' - se esconde por defecto
// [1]  Esconde : (casi) todos los elementos html >que: tengan la 'clase inciso'

// [1] Hide all elements with the 'inciso' class by default.
document.querySelectorAll('.inciso').forEach(inciso => {
    inciso.style.display = 'none';
});















// This -is: "a helper function" <-- to toggle the visibility of an element. 
// It -checks: the element's tag <-- to apply the correct 'display' style ('block' for lists, 'inline' for others).
const toggleDisplay = (elemento) => {
    // First, check if the element actually exists to prevent errors.
    if (!elemento) {
        return;
    }

    // Check if the element is currently hidden.
    if (elemento.style.display === 'none') {
        const tagNameDelElemento = elemento.tagName;
        // If it's a list ('UL' or 'OL'), display it as a block.
        if (tagNameDelElemento === 'UL' || tagNameDelElemento === 'OL') {
            elemento.style.display = 'block';
        } else {
            // For any other element, display it as inline.
            elemento.style.display = 'inline';
        }
    } else {
        // If the element is already visible, hide it.
        elemento.style.display = 'none';
    }
};






















// [1]: Find all elements with the class '.clicableParaExpandir' and [2]: add an "EventListener" to each.
document.querySelectorAll('.clicableParaExpandir').forEach(clicable_para_expandir => {

    clicable_para_expandir.addEventListener('click', () => {
        // MODIFIED LOGIC: Use 'data-inciso-id' to find target elements.

        // 1. Get the ID from the 'data-inciso-id' attribute of the element that was clicked.
        const incisoId = clicable_para_expandir.dataset.incisoId;

        // 2. If the clickable element doesn't have a 'data-inciso-id', do nothing.
        if (!incisoId) {
            console.warn("This clickable element is missing a 'data-inciso-id' attribute:", clicable_para_expandir);
            return;
        }

        // 3. Find ALL elements with the '.inciso' class that have a matching 'data-inciso-id'.
        const incisosParaAlternar = document.querySelectorAll(`.inciso[data-inciso-id="${incisoId}"]`);

        // 4. Loop through each of the found elements and toggle its visibility.
        incisosParaAlternar.forEach(inciso => {
            toggleDisplay(inciso);
        });
    });

}); /* FIN DEL CÓDIGO DE "STRETCH.TEXT" */


