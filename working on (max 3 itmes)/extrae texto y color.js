// Aquí tienes un script en JavaScript vainilla (sin dependencias externas) para Node.js que lee tu archivo test.html, extrae el texto y conserva los colores, generando un HTML simplificado donde solo se mantienen los <span style="color:..."> y el texto relevante. Elimina el resto de etiquetas y estilos innecesarios.







const fs = require('fs');

// Leer el archivo original
const html = fs.readFileSync('/workspaces/calGraciaWebBookApp/test.html', 'utf8');

// Extraer solo el contenido del <body>
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
let body = bodyMatch ? bodyMatch[1] : html;

// Conservar solo los <span style="color:..."> y eliminar otras etiquetas, excepto <b>, <i>, <u>, <br>, <p>
body = body
  // Eliminar comentarios
  .replace(/<!--[\s\S]*?-->/g, '')
  // Eliminar scripts y estilos
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<style[\s\S]*?<\/style>/gi, '')
  // Eliminar atributos innecesarios en <p>
  .replace(/<p[^>]*>/gi, '<p>')
  // Eliminar todas las etiquetas excepto las permitidas
  .replace(/<(?!\/?(span|b|i|u|br|p)(\s|>|\/))/gi, '&lt;')
  // Limpiar clases y estilos de <span> que no sean color
  .replace(/<span([^>]*)style=['"][^'"]*color:\s*([^;'"]+)[^'"]*['"][^>]*>/gi, (m, attrs, color) => `<span style="color:${color}">`)
  .replace(/<span[^>]*>/gi, '<span>')
  // Eliminar atributos de cierre innecesarios
  .replace(/<\/span[^>]*>/gi, '</span>')
  // Eliminar atributos de cierre innecesarios en otras etiquetas
  .replace(/<\/?(b|i|u|p|br)[^>]*>/gi, (m) => m.replace(/ .+?>/, '>'));

// Opcional: limpiar espacios y saltos de línea redundantes
body = body.replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();

// Generar HTML final
const resultHtml = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Texto simplificado con colores</title>
</head>
<body>
${body}
</body>
</html>
`;

// Guardar el resultado
fs.writeFileSync('/workspaces/calGraciaWebBookApp/test_colored.html', resultHtml);

console.log('HTML simplificado con colores guardado en test_colored.html');