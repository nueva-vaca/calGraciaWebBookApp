
  // [1] Obtener la ruta -y: [2] dividir la ruta en segmentos

  const rutaUrlSinDominio = window.location.pathname    ; 
  // 'window.location' -es: 'un objeto global' > que contiene información sobre la URL actual. '.pathname' -es: una propiedad (del objeto 'window.location') que devuelve : la parte de la URL que sigue al dominio ( e incluyendo el primer '/' ). Por ejemplo, si la URL es "https://www.ejemplo.com/productos/electronica", entonces window.location.pathname devolverá "/productos/electronica".

  // [2] obtiene un array ( de segmentos de la ruta URL (sin el dominio) )
  const segmentosDeLaRutaUrlSinDominio = rutaUrlSinDominio.split('/').filter(Boolean) ; // ---> array ( de "segmentos" de la ruta sin el dominio )
    // '.split('/')' -es: un método de cadena <-que: [ divide la cadena en : un array de subcadenas <---utilizando: el carácter '/' como separador ]. Por ejemplo: si : [ rutaUrlSinDominio -es: "/productos/electronica" ] --->entonces:  [ 'rutaUrlSinDominio.split('/')' -devolverá: ["", "productos", "electronica"] ].
    // '.filter(Boolean)' -es: un método de array <-que: filtra los elementos del array, manteniendo solo aquellos que son "verdaderos" (truthy). En este caso, se utiliza para eliminar los elementos vacíos que resultan de la división. Por ejemplo: si : [ el resultado de split -es: ["", "productos", "electronica"] ] --->entonces: [ filter(Boolean) -devolverá: ["productos", "electronica"] ].
    // En resumen: esta línea de código - [1] toma la ruta de la URL sin el dominio,[2] la divide en segmentos utilizando '/' como separador, y luego [3] filtra los segmentos -para: eliminar cualquier elemento vacío, [4] resultando en : un array de segmentos de la ruta.

  // obtiene la referencia a:l elemento del DOM > cuyo atributo id es 'breadcrumb'
  const eslabónDeLaCadenaDeRutaUrlSinDominio = document.getElementById('breadcrumb')  ;
  //  Este { elemento / variable / constante } -será: el contenedor donde se insertarán dinámicamente : los elementos de la navegación "ruta en cadena", permitiendo mostrar al usuario : la ruta de navegación actual < dentro del sitio web. 

  // declara / define una variable ( para acumular la ruta a medida que se construye la navegación en cadena ) -e: inicializa esa variable con una cadena vacía
  let accumulatedPath = ''  ;









  // Agregar el enlace a la página de inicio
  const homeLi = document.createElement('li');
  const homeLink = document.createElement('a');
  homeLink.href = '/';
  homeLink.textContent = 'Inicio';
  homeLi.appendChild(homeLink);
  eslabónDeLaCadenaDeRutaUrlSinDominio.appendChild(homeLi);










  // Agregar los demás segmentos
  segmentosDeLaRutaUrlSinDominio.forEach((segment, idx) => {
    accumulatedPath += '/' + segment;
    const li = document.createElement('li');
    if (idx === segmentosDeLaRutaUrlSinDominio.length - 1) {
      // Último segmento, solo texto
      li.textContent = decodeURIComponent(segment);
    } else {
      // Segmentos intermedios, enlaces
      const link = document.createElement('a');
      link.href = accumulatedPath;
      link.textContent = decodeURIComponent(segment);
      li.appendChild(link);
    }
    eslabónDeLaCadenaDeRutaUrlSinDominio.appendChild(li);
  });
