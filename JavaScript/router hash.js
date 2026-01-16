// router hash - made by : Calude '26.01.15 


// How it all works together:
// 1: User clicks <a href="#/user/123">Profile</a>
// 2: route() changes URL to #/user/123
// 3: This triggers handleLocation()
// 4: matchRoute() finds /user/:id pattern and extracts { id: "123" }
// 5: Fetches /pages/user.html
// 6: Displays it in main-page
// 7: Attaches click handlers to any new links in the loaded HTML





// [1d?]
// When you click a link, ---> this function runs
// [1.1] THE 'route()' FUNCTION - is created, and it (= the route() function ) <- handles "navigation clicks" <---by: [1.2] + [1.3] 
const route = (event) => {
   
    // [1.2] Prevents the browser from doing a full page reload, which is it's normal thing to do 
    event.preventDefault()   ;
    
    // [1.3] = [1.3.1] reads the href attribute from the clicked link -and [1.3.2] sets the URL hash to that value 
    window.location.hash = event.target.getAttribute('href')   ;
    // 'window.location.hash = ...' controls/is/changes the part of the URL after the # symbol 
    // 'event.target' is the element that was clicked ( usually an <a> tag ) + ".getAttribute('href')" retrieves the literal value written in the HTML 

};





// [2d?] 
// [2.0] THE 'routes' OBJECT <- maps URL paths to their corresponding HTML files (that will(!) be fetched and injected). ( Includes a 404 fallback for unmatched routes. ) 
const routes = {

    404:            "/pages/404.html"       ,
    "/":            "/pages/index.html"     ,
    "/about":       "/pages/about.html"     ,
    "/lorem":       "/pages/lorem.html"     ,
    "/user/:id":    "/pages/user.html"      ,
    // '/user/:id' -is: a dynamic route +o-= the ':id' part -can be: anything ( like : 123, abc; so {'/user/123' -and: '/user/456'} both use : the same HTML file (= user.html) )
    "/post/:slug":  "/pages/post.html"      ,
    // A slug ( <- dynamic parameter ) -is simply: a human‑readable identifier used in URLs. It’s usually made of words <> instead of numbers, and it describes the content of a page.
    "/user/:username": "user"               ,

};





// [3d?] 
// create a function -called: 'matchRoute' 
const matchRoute = (path) => {
    
    // Try exact match first
    // [3.1] First: It checks if the path matches exactly, and if it does find an exact match in the 'routes object' (above) ---> then : it returns it
    if (routes[path]) {
        return { route: routes[path], params: {} };
    }
    
    // Try dynamic routes 
    // [3.2] If no exact match is found, it loops through all routes - looking for dynamic ones
    // It converts '/user/:id' -into: a regex pattern ( +o-= a way to match text patterns ), so '/user/:id' -becomes: '/user/"followed by anything" = ([^/]+)'. Then - it checks : if the current path matches this pattern
    for (let pattern in routes) {
        const regex = new RegExp("^" + pattern.replace(/:\w+/g, "([^/]+)") + "$");
        const match = path.match(regex);
        
        // [3.2.?] If it matches ---> 
                              // [] Extract the parameter names (like id from :id)
                              // [] Extract the values from the URL (like 123 from /user/123) 
                              // [] Put them together: { id: "123" }  
        if (match) {
            const keys = pattern.match(/:\w+/g) || [];
            const params = {};
            
            keys.forEach((key, index) => {
                params[key.substring(1)] = match[index + 1];
            });
            
            // Return which HTML file to load and the parameters
            return { route: routes[pattern], params };
        }
    }
    
    // Finally: If nothing matches, return the 404 page.
    return { route: routes[404], params: {} };
};





// [4d?] handleLocation() function <- Fetches the HTML content for the current path -and: injects it into the main-page element 
const handleLocation = async () => {
    
    // Gets the current hash from URL (e.g., #/about becomes /about) 
    const path = window.location.hash.slice(1) || "/";
    
    // Calls the function 'matchRoute()' to find which HTML file to load
    const { route, params } = matchRoute(path);

    // Fetches that HTML file from the server (like downloading it)
    const html = await fetch(route).then((data) => data.text());
    
    // Puts the HTML content inside the element with id 'main-page'
    document.getElementById("main-page").innerHTML = html;
    
    // Stores/saves the params/parameters globally - so pages can access them - and other code can use them
    window.routeParams = params;
};





// [5d?]
const attachRouteListeners = () => {
    // Finds all links that start with / or #/
    // Attaches the route() function to each link's click event. Now when you click those links, they use our custom routing instead of reloading the page. 
    document.querySelectorAll('a[href^="/"], a[href^="#/"]').forEach(link => {
        link.addEventListener('click', route);
    });
};




// Initialization 1d4: When the hash changes (back/forward buttons), run handleLocation()
window.onhashchange = handleLocation;
// Initialization 2d4: Make route available globally (just in case you need it)
window.route = route;





// Initialization 3d4: Load the initial page 
handleLocation();





// [ ] Attach listeners on initial load and after each route change 
const observer = new MutationObserver(attachRouteListeners);
// Watches the main-page element for changes. When new HTML is loaded (and new links appear), it automatically runs attachRouteListeners() again. This ensures even dynamically loaded links work with our router. 
observer.observe(document.getElementById("main-page"), {
    childList: true,
    subtree: true
});
// Initialization 4d4: Attach click handlers to existing links
attachRouteListeners();
// Auto-attach links - attachRouteListeners() automatically finds and attaches the route handler to all internal links, re-running via MutationObserver when content changes