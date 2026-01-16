// This -is: a clean little vanilla‑JS router for a single‑page application. It - { 
// [1] intercepts link clicks ( in the html -and: calls the function route() )
// [2] updates the URL with pushState ( in the step 1.3 ) 
// [3] loads the corresponding HTML fragment into a container  

// Let’s break it down - so you can see exactly : { how it works -and: where you might want to improve or extend it }.





// [1.0] route() function <- Handles navigation clicks -by: { [1.2] preventing default link behavior -and: using the History API to update the URL without a page reload, [1.4] then - calls handleLocation() <- to render the new content } 
// [1.1] [ crea una (variable) constante -llamada: 'route' ] - que equivale a : [ una función tipo flecha = 'arrow function' ] 
const route = (event) => {
    // [1.2] Prevents the browser from doing a full page reload
    event.preventDefault()   ; 
    // [1.3] Pushes a new URL -into: the browser history
    window.history.pushState({}, "", event.target.href)   ;
    // [1.4] "llama" a la función 'handleLocation()' <- para cargar el contenido de la página web correcta 
    handleLocation()   ;
    }; 
// This function is meant to be used in your HTML like: <a href="/about" onclick="route()">About</a>





// [2.0] routes object <- Maps URL paths to their corresponding HTML files (that will(!) be fetched and injected). ( Includes a 404 fallback for unmatched routes. )  
// [2.1] crea una (variable) constante -llamada: 'routes' - que es un objeto 
const routes = {
    404:        "/pages/404.html"          ,
    "/":        "/pages/index.html"        ,
    "/about":   "/pages/about.html"        ,
    "/lorem":   "/pages/lorem.html"        ,
    }; 





// [3.0] handleLocation() function <- Fetches the HTML content for the current path -and: injects it into the main-page element. 
// [3.1] crea una función (en una constante) -llamada: 'handleLocation' 
const handleLocation = async () => {
    // [3.2] Reads the current URL path 
    const path = window.location.pathname;
    // [3.3] Looks it up in the routes object 
    const route = routes[path] || routes[404];
    // [3.4] Fetches the corresponding HTML file 
    const html = await fetch(route).then((data) => data.text());
    // [3.5] Injects it into the element with id 'main-page' 
    document.getElementById("main-page").innerHTML = html;
    };


// Back/forward button support - via 'onpopstate' 
window.onpopstate = handleLocation;

// Expose 'route()' globally - for use in your HTML links
window.route = route;


// Loads the correct page when the site first opens.
handleLocation();
