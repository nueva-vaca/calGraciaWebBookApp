// This -is: a clean little vanilla‑JavaScript router for a single‑page application. It - { 
// [1] intercepts ALL link clicks automatically (no onclick needed!)
// [2] route() changes / updates the URL with pushState -and: calls handleLocation()
// [3] loads the corresponding HTML fragment into a container  
// }









// [1d3]
// [1.0] routes 'object' -maps: URL paths to their corresponding HTML files (that will(!) be fetched and injected). ( Includes a 404 fallback for unmatched routes. )  
// [1.1] crea una (variable) constante -llamada: 'routes' - que es un objeto 
const routes = {
    404:       "/404.html", 
    "/":       "/inicio.html",        /* when the page first loads at the root path = "/" it tries to fetch : 'inicio.html' */
    "/inicio": "/inicio.html",
    "/test":   "/test.html",
    "/about":  "/DespertarMásFamilia/about.html",
    "/working-on/lista1": "/working on (max 3 itmes)/selector desde una lista.html",
    "/working-on/lista2": "/working on (max 3 itmes)/item aleatorio dentro de lista.html",
    "/working-on/lista3": "/working on (max 3 itmes)/lista selectora.html",
}; 









// [2d3]
// [2.0] the route() function - handles navigation <-by: { [2.1] using 'the History API' to update the URL without a page reload, then : [2.2] calls handleLocation() <--- to render the new content } 
// [2.1] [ crea una (variable) constante -llamada: 'route' ] - que equivale a : [ una función tipo flecha = 'arrow function' ] 
const route = (href) => {
    // [2.2] Pushes a new URL -into: the browser history   +o-=   cambia la url que ves en la barra de direcciones 
    window.history.pushState({}, "", href);
    // 'window.history.pushState()' -is: part of the History API -and: it allows you to change the URL in the browser without reloading the page
    // The first argument ({}) -is: the state object (not used here)
    // The second argument ("") -is: the title (also not used here)
    // The third argument (href) -is: the new URL to set

    // [2.3] "llama" a la función 'handleLocation()' <- para cargar el contenido de la página web correcta 
    handleLocation();
}; 









// [3d3]
// [3.0] the function handleLocation() -fetches: the HTML content for the current path -and: injects it into "the main-page" element = <main id="contenidoPrincipal". 
// [3.1] crea una función (en una constante) -llamada: 'handleLocation' 
const handleLocation = async () => {
    // [3.2] Reads the current URL path 
    const path = window.location.pathname;
    // [3.3] Looks it up in the routes object 
    const route = routes[path] || routes[404];
    // [3.4] Fetches the corresponding HTML file 
    const html = await fetch(route).then((data) => data.text());
    // [3.5] Injects it into the element with id 'contenidoPrincipal' 
    document.getElementById("contenidoPrincipal").innerHTML = html;
};









// [4d4] ✨ AUTOMATIC LINK INTERCEPTION ✨
// This is the magic part! It automatically catches ALL clicks on <a> tags
// No need for onclick="route(event)" in your HTML anymore!

document.addEventListener("click", (event) => {
    // [4.1] Find the closest <a> tag (in case user clicked on something inside the link)
    const anchor = event.target.closest("a");
    
    // [4.2] If no link was clicked, do nothing
    if (!anchor) return;
    
    // [4.3] Get the href attribute
    const href = anchor.getAttribute("href");
    
    // [4.4] Check if this is an internal link (starts with /)
    // External links (http://, https://, mailto:, etc.) will be ignored
    if (href && href.startsWith("/")) {
        // [4.5] Prevent the browser from doing a full page reload
        event.preventDefault();
        
        // [4.6] Use our router instead!
        route(href);
    }
    // If it's an external link or has no href, let the browser handle it normally
});









// Back/forward button support - via 'onpopstate' 
window.onpopstate = handleLocation;

// Expose 'route()' globally - for backwards compatibility (in case you still want to use onclick sometimes)
window.route = (event) => {
    event.preventDefault();
    route(event.target.href);
};

// Loads the correct page when the site first opens.
handleLocation();
