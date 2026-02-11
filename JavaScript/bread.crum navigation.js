function actualizarRutaDeNavegaciónEnEslabonesDeCadena() {
// { convertir / englobar / wrap } la lógica del breadcrumb en una función y llamarla cada vez que se navegue a una nueva ruta
  
  
  
  // [1] Obtener la ruta -y: [2] dividir la ruta en segmentos

  const rutaUrlActualSinDominio = window.location.pathname   ; 
  // 'window.location' -es: 'un objeto global' > que contiene información sobre la URL actual. '.pathname' -es: una propiedad (del objeto 'window.location') que devuelve : la parte de la URL que sigue al dominio ( e incluyendo el primer '/' ). Por ejemplo, si la URL es "https://www.ejemplo.com/productos/electronica", entonces window.location.pathname devolverá "/productos/electronica".





  // obtiene la referencia a:l elemento del DOM > cuyo atributo id es 'breadcrumb'
  const cadenaDeRutaActual = document.getElementById('breadcrumb')   ;
  //  Este { elemento / variable / constante } -será: el contenedor donde se insertarán(!) dinámicamente : los elementos de la navegación "ruta en cadena", permitiendo mostrar al usuario : la ruta de navegación actual < dentro del sitio web. 
  
  // Limpia el breadcrumb anterior antes de reconstruirlo
  if (!cadenaDeRutaActual) return;
  cadenaDeRutaActual.innerHTML = ''; 




  // obtiene un array ( de segmentos de la ruta URL (sin el dominio) )
  const segmentosDeLaRutaUrlSinDominio = rutaUrlActualSinDominio.split('/').filter(Boolean)   ; // ---> array ( de "segmentos" de la ruta sin el dominio )
    // '.split('/')' -es: un método de cadena <-que: [ divide la cadena en : un array de subcadenas <---utilizando: el carácter '/' como separador ]. Por ejemplo: si : [ rutaUrlActualSinDominio -es: "/productos/electronica" ] --->entonces:  [ 'rutaUrlActualSinDominio.split('/')' -devolverá: ["", "productos", "electronica"] ].
    // '.filter(Boolean)' -es: un método de array <-que: filtra los elementos del array, manteniendo solo aquellos que son "verdaderos" (truthy). En este caso, se utiliza para eliminar los elementos vacíos que resultan de la división. Por ejemplo: si : [ el resultado de split -es: ["", "productos", "electronica"] ] --->entonces: [ filter(Boolean) -devolverá: ["productos", "electronica"] ].
    // En resumen: esta línea de código - [1] toma la ruta de la URL sin el dominio,[2] la divide en segmentos utilizando '/' como separador, y luego [3] filtra los segmentos -para: eliminar cualquier elemento vacío, [4] resultando en : un array de segmentos de la ruta.





  // { declara / define } una variable ( para acumular la ruta a medida que se construye la navegación en cadena ) -e: inicializa esa variable con una cadena vacía
  let eslabonesEnLaCadenaDeRutaActual = ''   ;
    // Esta variable se utilizará para ir acumulando progresivamente cada segmento de la ruta a medida que se construyen los enlaces de la breadcrumb. Así, cada vez que se agregue un nuevo segmento, se actualizará esta variable para reflejar la ruta parcial correspondiente, facilitando la creación de enlaces navegables para cada nivel de la ruta.








  // Agregar el enlace a la página de inicio
  const homeLi = document.createElement('li')   ;
 if (segmentosDeLaRutaUrlSinDominio.length === 0) {
    homeLi.textContent = 'Inicio';
    homeLi.setAttribute('aria-current', 'page');
  } else {
    const homeLink = document.createElement('a');
    homeLink.href = '/';
    homeLink.textContent = 'Inicio';
    homeLi.appendChild(homeLink);
  }
  cadenaDeRutaActual.appendChild(homeLi);











  // Agregar los demás segmentos
  segmentosDeLaRutaUrlSinDominio.forEach((segmentoOEslabónActual, idx) => {
    console.log('segmentosDeLaRutaUrlSinDominio:', eslabonesEnLaCadenaDeRutaActual); // Depuración: muestra el segmento actual en la consola
    eslabonesEnLaCadenaDeRutaActual += '/' + segmentoOEslabónActual;
    const li = document.createElement('li');
    if (idx === segmentosDeLaRutaUrlSinDominio.length - 1) {
      // Último segmento, solo texto
      li.textContent = decodeURIComponent(segmentoOEslabónActual);
    } else {
      // Segmentos intermedios, enlaces
      const link = document.createElement('a');
      link.href = eslabonesEnLaCadenaDeRutaActual;
      link.textContent = decodeURIComponent(segmentoOEslabónActual);
      li.appendChild(link);
    }
    cadenaDeRutaActual.appendChild(li);
  });





} // FIN DE : function actualizarRutaDeNavegaciónEnEslabonesDeCadena() {




















// Ejecutar al cargar la página
actualizarRutaDeNavegaciónEnEslabonesDeCadena()   ;
















// Hacer la función 'actualizarRutaDeNavegaciónEnEslabonesDeCadena()' global ( para usarla en otros archivos (si es necesario) )
window.actualizarRutaDeNavegaciónEnEslabonesDeCadena = actualizarRutaDeNavegaciónEnEslabonesDeCadena   ;
// 'window' = 'objeto' que representa la ventana abierta del navegador
// '.actualizarRutaDeNavegaciónEnEslabonesDeCadena' = 'una propiedad' del 'objeto' 'window' 
// se le asigna la función 'actualizarRutaDeNavegaciónEnEslabonesDeCadena' -a: 'window.actualizarRutaDeNavegaciónEnEslabonesDeCadena' ---> y esto hace que : la función sea accesible globalmente, lo que permite que otros scripts en la página/ventana/navegador puedan llamarla/invocarla para actualizar el "breadcrumb" cuando sea necesario, como p.ej. después de una navegación o cambio de ruta.
