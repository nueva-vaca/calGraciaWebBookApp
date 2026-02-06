// This -is: a clean little vanilla‑JavaScript router for a single‑page application. It - { 
// [1] intercepts all link clicks (in the html)   -and:    calls the function route() 
// [2] route() changes / updates the URL with pushState ( in the step 1.3 )   -and:   calls handleLocation()
// [3] loads the corresponding HTML fragment -into: the main section with the id contenidoPrincial  
// }

// Let’s break it down - so you can see exactly : { how it works -and: where you might want to improve or extend it }.















// "configuración" de RUTAS "hard.wired" 
// "configuración" de RUTAS "hard.wired" 
// "configuración" de RUTAS "hard.wired" 
// "configuración" de RUTAS "hard.wired" 
// "configuración" de RUTAS "hard.wired" 
// "configuración" de RUTAS "hard.wired" 
// "configuración" de RUTAS "hard.wired" 

// [0.0] routes 'object' -maps: URL paths to their corresponding HTML files (that will(!) be fetched and injected).   
// [1.1] crea una (variable) constante -llamada: 'routes' - que es un objeto 
const routes = { 

    // clave/key = nombre en el href del <a> ( = lo que ves en la barra de direcciones )   
    // -y:   
    // valor/value = el archivo HTML que se va a cargar para esa ruta 

    404:       "/404.html"           ,   /*   + fallback route -for: unmatched routes. If a user tries to navigate to a path that doesn't exist, they'll get this 404 page.   */ 
    "/":       "/inicio.html"        ,   /*    [1] when the page first loads at the root path = "/" <-| key   --->  [2] it tries to fetch : 'inicio.html' <-| value   */
    "/inicio": "/inicio.html"        ,

    "/test1":  "/test.html"               ,

    "/about":  "/DespetarMásFamilia/about.html"   ,

    "/working-on/lista1": "/working on (max 3 itmes)/selector desde una lista.html",
    "/working-on/lista2": "/working on (max 3 itmes)/item aleatorio dentro de lista.html",
    "/working-on/lista3": "/working on (max 3 itmes)/lista selectora.html",

}; // fin -de:   const routes = { 
















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

    // 1. Busca si lo que se clicó es un <a> (o está dentro de uno)
    const linkReciénClicado = event.target.closest("a");

    // 2. Si no es un enlace, no hagas nada
    if (!linkReciénClicado) return;

    // 3. Obtén el href del enlace
    const href = linkReciénClicado.getAttribute("href");

    // 4. Si no tiene href, o es un enlace externo (http...), déjalo funcionar normal
    if (!href || !href.startsWith("/")) return;
    // si : ( no tiene href  |ó|  el href no empieza con "/" ) --->entonces:  return +o-= deja que el enlace funcione normalmente 

    // 5. Evita que el navegador recargue la página
    event.preventDefault();

    // 6. Cambia la URL en la barra de direcciones (sin recargar)
    window.history.pushState({}, "", href);

    // 7. Carga el contenido correspondiente
    handleLocation();

});





















// ROUTE()
// ROUTE()
// ROUTE()
// ROUTE()
// ROUTE()
// ROUTE()
// ROUTE()
// ROUTE()
// ROUTE()
// ROUTE()
// ROUTE()
// ROUTE()

// When you click a link, ---> this function runs
// [1.0] the route() function - handles navigation clicks <---by: { [1.2] preventing default link behavior   -and:   [1.3] using 'the History API' to update the URL without a page reload, then : [1.4] calls handleLocation() <--- to render the new content } 

// [1.1] [ crea una (variable) constante -llamada: 'route' ] - que equivale a : [ una función tipo flecha = 'arrow function' ] 
// llamarle "enrutar" 
const route = (event) => {

    // [1.2] Prevents the browser from doing a full page reload, which is it's normal thing to do 
    event.preventDefault()   ; 

    // [1.3] Pushes a new URL -into: the browser history   +o-=   cambia la url que ves en la barra de direcciones 
    window.history.pushState({}, "", event.target.href)   ;
    // 'window.history.pushState()' -is: part of the History API -and: it allows you to change the URL in the browser without reloading the page
    // The first argument ({}) -is: the state object (not used here)
    // The second argument ("") -is: the title (also not used here)
    // The third argument (event.target.href) -is: the new URL to set (taken from the clicked link's href attribute)
    // The third argument (event.target.href) - toma la URL del enlace que fue clicado -y: la establece como la nueva URL en la barra de direcciones 

    // [1.4] "llama" a la función 'handleLocation()' <- para cargar el contenido de la página web correcta 
    handleLocation()   ;

    }; // fin -de:   const route = (event) => {


















// HANDLE.LOCATION()
// HANDLE.LOCATION()
// HANDLE.LOCATION()
// HANDLE.LOCATION()
// HANDLE.LOCATION()
// HANDLE.LOCATION()
// HANDLE.LOCATION()
// HANDLE.LOCATION()
// HANDLE.LOCATION()
// HANDLE.LOCATION()
// HANDLE.LOCATION()
// HANDLE.LOCATION()

// [3d3] 
// [3.0] the function handleLocation() [3.2] reads the current URL path (the part after the domain) -and:   [3.3] looks it up in the routes object to find the corresponding HTML file, then : [3.4] fetches that HTML file and [3.5] injects it into the page.
// 
// -fetches: the HTML content for the current path -and: injects it into "the main-page" element = <main id="contenidoPrincipal".

// [3.1] crea una función (en una constante) -llamada: 'handleLocation' 
const handleLocation = async () => {
    // [3.2] Reads the current URL path ( pero la parte de la ruta después del dominio ) - and saves it in a variable called 'path' 
    const path = window.location.pathname ; 
    //   La 'propiedad' > 'window.location.pathname' <-devuelve: la ruta del archivo de la URL actual, ( excluyendo : { el dominio, el protocolo, los parámetros de consulta } ) 
    // [3.3] Looks it ( = la parte de la ruta después del dominio ) up in the routes object 
    const route = routes[path] || routes[404] ;
    // [3.4] Fetches the corresponding HTML file 
    const html = await fetch(route).then((data) => data.text()) ;
    // [3.5] Injects it into the element with id 'contenidoPrincipal' 
    document.getElementById("contenidoPrincipal").innerHTML = html ;
    };






// Back/forward button support - via 'onpopstate' 
window.onpopstate = handleLocation;






// Loads the correct page when the site first opens.
handleLocation();
