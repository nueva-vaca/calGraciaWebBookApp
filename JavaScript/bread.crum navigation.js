
  // Obtener la ruta y dividirla en segmentos
  const path = window.location.pathname;
  const segments = path.split('/').filter(Boolean);

  const breadcrumb = document.getElementById('breadcrumb');
  let accumulatedPath = '';

  // Agregar el enlace a la página de inicio
  const homeLi = document.createElement('li');
  const homeLink = document.createElement('a');
  homeLink.href = '/';
  homeLink.textContent = 'Inicio';
  homeLi.appendChild(homeLink);
  breadcrumb.appendChild(homeLi);

  // Agregar los demás segmentos
  segments.forEach((segment, idx) => {
    accumulatedPath += '/' + segment;
    const li = document.createElement('li');
    if (idx === segments.length - 1) {
      // Último segmento, solo texto
      li.textContent = decodeURIComponent(segment);
    } else {
      // Segmentos intermedios, enlaces
      const link = document.createElement('a');
      link.href = accumulatedPath;
      link.textContent = decodeURIComponent(segment);
      li.appendChild(link);
    }
    breadcrumb.appendChild(li);
  });
