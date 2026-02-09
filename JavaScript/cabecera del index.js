// hacer : {expandir a contenido -o: contraer a 3 lineas} el <header> ( = "nevegador" ) <--- caundo : aprete / clique "el icono hamburguesa de índice" con id="menúÍndice"
// expandir : mostrar el contenido del header ( = "nevegador" ) con un efecto de transición suave
document.addEventListener("DOMContentLoaded", () => {
// + 'document' = the entire web page - loaded in the browser window 
// +- 'DOMContentLoaded' = [2] evento que se dispara <--- [1] cuando el documento HTML ha sido completamente cargado y parseado ( ---> puede acceder y manipular el DOM ), -pero: [3] antes de que se hayan cargado recursos externos (como imágenes y hojas de estilo +o-= sin esperar a que todos los recursos de la página estén disponibles ). 
    
    const header = document.querySelector("header")  ;
    const menúÍndice = document.getElementById("menúÍndice")    ;

    // Estado inicial: contraído
    header.classList.add("contraído");

    menúÍndice.addEventListener("click", () => {
        if (header.classList.contains("contraído")) {
            header.classList.remove("contraído");
            header.classList.add("expandido");
        } else {
            header.classList.remove("expandido");
            header.classList.add("contraído");
        }
    });
}); 




/*
header {
    overflow: hidden;
    transition: max-height 0.3s ease;
}

header.contraído {
    max-height: 3.6em; 
    line-height: 1.2em;
}

header.expandido {
    max-height: none;
}
*/