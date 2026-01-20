////////////////////////// IMPROVED "STRETCH.TEXT" VERSION FROM COPILOT
document.querySelectorAll('.inciso').forEach(inciso => {inciso.style.display = 'none'; }); // "esconde" todos los 'elementos html' con la 'clase' 'inciso' 

document.querySelectorAll('.clicableParaExpandir').forEach((clicable_para_expandir, índice) => 
{

    /*// Set the title attribute to display the index on hover
    clicable_para_expandir.setAttribute('title', `Índice: ${índice}`);*/

    clicable_para_expandir.addEventListener('click', () => {
        
        // Crea una variable que "store" el índice
        let incisoActualQueTieneQueAparecerODesaparecer = document.querySelectorAll('.inciso')[índice];


        /*// Mostrar los índices en la consola
        console.log(`Índice del "expandible" clicado: ${índice}`);
        console.log(`Elemento clicado:`, clicable_para_expandir);
        console.log(`Índice del inciso asociado: ${índice}`);
        console.log(`Elemento asociado (inciso):`, incisoActualQueTieneQueAparecerODesaparecer);*/

        // Alternar visibilidad 
        incisoActualQueTieneQueAparecerODesaparecer.style.display = (incisoActualQueTieneQueAparecerODesaparecer.style.display === 'none') ? 'inline' : 'none';
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