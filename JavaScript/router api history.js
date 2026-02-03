// This -is: a clean little vanilla‑JavaScript router for a single‑page application. It - { 
// [1] intercepts link clicks (in the html)   -and:    calls the function route() 
// [2] route() changes / updates the URL with pushState ( in the step 1.3 )   -and:   calls handleLocation()
// [3] loads the corresponding HTML fragment into a container  
// }

// Let’s break it down - so you can see exactly : { how it works -and: where you might want to improve or extend it }.









// [1d3]
// !!!!!!!! This function is meant to be used in your HTML like: <a href="/about" onclick="route()">About</a>
// When you click a link, ---> this function runs
// [1.0] the route() function - handles navigation clicks <-by: { [1.2] preventing default link behavior   -and:   [1.3] using 'the History API' to update the URL without a page reload, then : [1.4] calls handleLocation() <--- to render the new content } 

// [1.1] [ crea una (variable) constante -llamada: 'route' ] - que equivale a : [ una función tipo flecha = 'arrow function' ] 
const route = (event) => {

    // [1.2] Prevents the browser from doing a full page reload, which is it's normal thing to do 
    event.preventDefault()   ; 

    // [1.3] Pushes a new URL -into: the browser history   +o-=   cambia la url que ves en la barra de direcciones 
    window.history.pushState({}, "", event.target.href)   ;
    // 'window.history.pushState()' -is: part of the History API -and: it allows you to change the URL in the browser without reloading the page
    // The first argument ({}) -is: the state object (not used here)
    // The second argument ("") -is: the title (also not used here)
    // The third argument (event.target.href) -is: the new URL to set (taken from the clicked link's href attribute)

    // [1.4] "llama" a la función 'handleLocation()' <- para cargar el contenido de la página web correcta 
    handleLocation()   ;

    }; // fin -de:   const route = (event) => {
// !!!!!!!! This function is meant to be used in your HTML like: <a href="/about" onclick="route()">About</a>









// [2d3]
// [2.0] routes object <- Maps URL paths to their corresponding HTML files (that will(!) be fetched and injected). ( Includes a 404 fallback for unmatched routes. )  
// [2.1] crea una (variable) constante -llamada: 'routes' - que es un objeto 
const routes = {
    404:        "/pages/404.html"          ,
    "/":        "/pages/index.html"        ,
    "/about":   "/pages/about.html"        ,
    "/lorem":   "/pages/lorem.html"        ,
    }; 









// [3d3]
// [3.0] handleLocation() function <- fetches the HTML content for the current path -and: injects it into the main-page element. 
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
