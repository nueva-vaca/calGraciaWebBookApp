// código "vainilla" en java.script -para: enrutar páginas html - en "single‑page application". 
// It - { 
// [1] define : las rutas a los archivos html < ( en el objeto 'rutaUrlSinDominio' )
// [2] intercepta los clics   -y:   "llama" a la función 'inyectarPáginaEnrutada()' 
// [3] lee la "cola de url" 
// loads the corresponding HTML fragment -into: the main section with the id contenidoPrincial  
// }

// [3.0] the function inyectarPáginaEnrutada() [3.2] reads the current URL path (the part after the domain) -and:   [3.3] looks it up in the rutaUrlSinDominio object to find the corresponding HTML file, then : [3.4] fetches that HTML file and [3.5] injects it into the page













// "configuración" de RUTAS "hard.wired" 
// "configuración" de RUTAS "hard.wired" 
// "configuración" de RUTAS "hard.wired" 
// "configuración" de RUTAS "hard.wired" 
// "configuración" de RUTAS "hard.wired" 
// "configuración" de RUTAS "hard.wired" 
// "configuración" de RUTAS "hard.wired" 
// "configuración" de RUTAS "hard.wired" 
// "configuración" de RUTAS "hard.wired" 
// "configuración" de RUTAS "hard.wired" 
// "configuración" de RUTAS "hard.wired" 
// "configuración" de RUTAS "hard.wired" 

// [0.0] rutaUrlSinDominio 'object' -maps: URL paths to their corresponding HTML files (that will(!) be fetched and injected).   
// [1.1] crea una (variable) constante -llamada: 'rutaUrlSinDominio' - que es un objeto 
const rutaUrlSinDominio = { 

    // clave/key = nombre en el href del <a> ( = lo que ves en la barra de direcciones )   
    // -y:   
    // valor/value = el archivo HTML que se va a cargar para esa ruta 

    404:            "/404.html"           ,   /*   + fallback route -for: unmatched rutaUrlSinDominio. If a user tries to navigate to a path that doesn't exist, they'll get this 404 page.   */ 
    "/":            "/inicio.html"        ,   /*    [1] when the page first loads at the root path = "/" <-| key   --->  [2] it tries to fetch : 'inicio.html' <-| value   */
    "./inicio":      "/inicio.html"        ,
    "./index.html":  "/inicio.html"        , 

    "/1":           "/DespetarMásFamilia/las masías del Gracia/1.0] SABIDURÍA/SABIDURIAinicio.html"      ,

    "/test1":  "/test.html"               ,

    "/about":  "/DespetarMásFamilia/about.html"   ,

    "/working-on/lista1": "/working on (max 3 itmes)/selector desde una lista.html",
    "/working-on/lista2": "/working on (max 3 itmes)/item aleatorio dentro de lista.html",
    "/working-on/lista3": "/working on (max 3 itmes)/lista selectora.html",
    "/seleccionar-bricks": "/seleccionar bricks.html" ,



}; // fin -de:   const rutaUrlSinDominio = { 

// fin de "configuración" de RUTAS "hard.wired" 
// fin de "configuración" de RUTAS "hard.wired" 
// fin de "configuración" de RUTAS "hard.wired" 
// fin de "configuración" de RUTAS "hard.wired" 
// fin de "configuración" de RUTAS "hard.wired" 
// fin de "configuración" de RUTAS "hard.wired" 
// fin de "configuración" de RUTAS "hard.wired" 
// fin de "configuración" de RUTAS "hard.wired" 
// fin de "configuración" de RUTAS "hard.wired" 
// fin de "configuración" de RUTAS "hard.wired" 
// fin de "configuración" de RUTAS "hard.wired" 
// fin de "configuración" de RUTAS "hard.wired"

















// INTERCEPTAR CLICS EN LOS ENLACES
// INTERCEPTAR CLICS EN LOS ENLACES
// INTERCEPTAR CLICS EN LOS ENLACES
// INTERCEPTAR CLICS EN LOS ENLACES
// INTERCEPTAR CLICS EN LOS ENLACES
// INTERCEPTAR CLICS EN LOS ENLACES
// INTERCEPTAR CLICS EN LOS ENLACES
// INTERCEPTAR CLICS EN LOS ENLACES
// INTERCEPTAR CLICS EN LOS ENLACES
// INTERCEPTAR CLICS EN LOS ENLACES
// INTERCEPTAR CLICS EN LOS ENLACES
// INTERCEPTAR CLICS EN LOS ENLACES
// INTERCEPTAR CLICS EN LOS ENLACES
// INTERCEPTAR CLICS EN LOS ENLACES
// INTERCEPTAR CLICS EN LOS ENLACES
// INTERCEPTAR CLICS EN LOS ENLACES


// Este listener escucha TODOS los clics en la página.
// Si el clic fue en un <a> con href que empieza por "/", lo intercepta.
document.addEventListener("click", (event) => {
// event = 'a MouseEvent object' ( automatically passed by the browser when someone clicks anywhere on the page ) 

    // 1: Busca si lo que se clicó es un <a> (o está dentro de uno)
    const linkReciénClicado = event.target.closest("a") ; 
    // event.target = todo el elemento <a> que fue clicado   <-ej: <a href="/about">About</a>  

    // 1.1: Si no es un enlace, no hagas nada
    if (!linkReciénClicado) return ;

    // 2: Obtén el href del enlace
    const hrefDelAnchorReciénClicado = linkReciénClicado.getAttribute("href") ;
    // linkReciénClicado.getAttribute("href") = sólo el 'href' del elemento <a> que fue clicado   <-ej: '/about'

    // 2.1: Si el <a> { no tiene href -o: es un enlace externo (http...) } --->entonces: déjalo funcionar normal 
    if (!hrefDelAnchorReciénClicado || !hrefDelAnchorReciénClicado.startsWith("/")) return ;
    // si : ( no tiene href  |ó|  el href no empieza con "/" ) --->entonces:  return +o-= la función termina inmediatamente con return, permitiendo que el navegador maneje el clic de manera predeterminada. 

    // 3: Evita que el navegador recargue la página
    event.preventDefault() ; 
    // event.preventDefault() = method to stop the default browser behavior ( = navigating away from the current page ) when a link is clicked 

    // 4: Cambia la URL en la barra de direcciones (sin recargar)
    window.history.pushState({}, "", hrefDelAnchorReciénClicado) ; 
    // The pushState() method of the History interface -adds: an entry to the browser's session history stack.
        // The first argument ({}) -is: the state object (not used here)
        // The second argument ("") -is: the title (also not used here)
        // The third argument (event.target.href) -is: the new URL to set (taken from the clicked link's href attribute)
        // The third argument (hrefDelAnchorReciénClicado -vs: event.target.href) - toma la "cola de URL" del enlace <a> que fue clicado -y: la establece como la nueva URL en la barra de direcciones 

    // 5: Carga el contenido correspondiente -mediante: la función 'inyectarPáginaEnrutada()'
    inyectarPáginaEnrutada()  ;

} // fin de : (event) => { 
); // fin de : document.addEventListener( 


















// inyectarPáginaEnrutada()
// inyectarPáginaEnrutada()
// inyectarPáginaEnrutada()
// inyectarPáginaEnrutada()
// inyectarPáginaEnrutada()
// inyectarPáginaEnrutada()
// inyectarPáginaEnrutada()
// inyectarPáginaEnrutada()
// inyectarPáginaEnrutada()
// inyectarPáginaEnrutada()
// inyectarPáginaEnrutada()
// inyectarPáginaEnrutada()
// inyectarPáginaEnrutada()
// inyectarPáginaEnrutada()
// inyectarPáginaEnrutada()
// inyectarPáginaEnrutada()
// inyectarPáginaEnrutada()
// inyectarPáginaEnrutada()
// inyectarPáginaEnrutada()
// inyectarPáginaEnrutada()
// inyectarPáginaEnrutada()
// inyectarPáginaEnrutada()

// [3d3] 
// [3.0] the function inyectarPáginaEnrutada() [3.2] reads the current URL path (the part after the domain) -and:   [3.3] looks it up in the rutaUrlSinDominio object to find the corresponding HTML file, then : [3.4] fetches that HTML file and [3.5] injects it into the page.
// 
// -fetches: the HTML content for the current path -and: injects it into "the main-page" element = <main id="contenidoPrincipal".

// [3.1] crea una función (en una constante) -llamada: 'inyectarPáginaEnrutada' 
const inyectarPáginaEnrutada = async () => {
    // [3.2] Reads the current URL path ( pero la parte de la ruta después del dominio ) - and saves it in a variable called 'path' 
    const path = window.location.pathname   ; 
    //   La 'propiedad' > 'window.location.pathname' <-devuelve: la ruta del archivo de la URL actual, ( excluyendo : { el dominio, el protocolo, los parámetros de consulta } ) 
    // [3.3] Looks it ( = la parte de la ruta después del dominio ) up in the rutaUrlSinDominio object 
    const route = rutaUrlSinDominio[path] || rutaUrlSinDominio[404] ;
    // [3.4] Fetches the corresponding HTML file 
    const html = await fetch(route).then((data) => data.text()) ;
    // [3.5] Injects it into the element with id 'contenidoPrincipal' 
    document.getElementById("contenidoPrincipal").innerHTML = html ;
    // [3.X] Actualiza el breadcrumb después de inyectar el contenido
    if (window.actualizarRutaDeNavegaciónEnEslabonesDeCadena) window.actualizarRutaDeNavegaciónEnEslabonesDeCadena();
    };






// Loads the correct page when the site first opens.
inyectarPáginaEnrutada();





// Back/forward button support - via 'onpopstate' 
window.onpopstate = inyectarPáginaEnrutada;


