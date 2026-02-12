document.getElementById('load-btn').addEventListener('click', async () => {
      
      
      const status   =   document.getElementById('status')   ; 
      const results   =   document.getElementById('results')   ; 
      status.textContent   =   'Cargando test.html…'   ; 
      results.innerHTML   =   ''   ; 



      // + a try block -is used to: wrap code that might throw an error during execution.if an error occurs, control is passed to a corresponding catch block (if present)
      try {





        //FETCH
        const resp = await fetch('test.html')   ;
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`)   ;
        const html = await resp.text();

        // Parse into a temporary hidden DOM so we can walk styled nodes
                // + "Walk" in "parse and walk" -means: to {traverse or iterate} through the {elements or nodes} of a data structure (such as the DOM tree of an HTML document) one by one, >ej: usually to {inspect, process, or extract} information from each node. In this context, after parsing the HTML, "walk" refers to : systematically visiting each text node in the DOM <-to: {find and process} bracketed text.
        const container = document.createElement('div');
        container.style.display = 'none';
        document.body.appendChild(container);
        container.innerHTML = html;

        const entries = [];
        let idCounter = 1;

        // Walk every text node looking for bracket pairs
        const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
        // We'll accumulate all text with associated style info by collecting
        // sequential runs of (text, color) across the entire document.
        // Because brackets and their content can span multiple <span>s,
        // we need a linear scan approach.

        const textRuns = [];
        const walker2 = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker2.nextNode())) {
          const color = getComputedColor(node.parentElement);
          const text = node.textContent;
          for (const ch of text) {
            textRuns.push({ ch, color, element: node.parentElement });
          }
        }

        // Now find matching [ ... ] pairs (non-nested, outermost)
        let i = 0;
        while (i < textRuns.length) {
          if (textRuns[i].ch === '[') {
            const openColor = textRuns[i].color;
            // find matching close bracket
            let depth = 1;
            let j = i + 1;
            let closeColor = null;
            while (j < textRuns.length && depth > 0) {
              if (textRuns[j].ch === '[') depth++;
              if (textRuns[j].ch === ']') {
                depth--;
                if (depth === 0) {
                  closeColor = textRuns[j].color;
                }
              }
              j++;
            }
            if (depth === 0) {
              // Extract inner text (between [ and ])
              const innerChars = textRuns.slice(i + 1, j - 1);
              const innerText = innerChars.map(r => r.ch).join('').trim();
              // Use the color of the opening bracket
              entries.push({
                id: idCounter++,
                text: innerText,
                bracketColor: openColor,
                closeColor: closeColor
              });
              i = j; // skip past the closing bracket
              continue;
            }
          }
          i++;
        }

        document.body.removeChild(container);

        if (entries.length === 0) {
          status.textContent = 'No se encontraron corchetes [...] en test.html.';
          return;
        }

        status.textContent = `Se encontraron ${entries.length} bloques entre corchetes.`;


// Build table
// Build table
// Build table
// Build table
// Build table
// Build table
// Build table
// Build table
// Build table
// Build table
// Build table
// Build table
// Build table
// Build table
// Build table
// Build table
// Build table
// Build table
// Build table
// Build table

        const table = document.createElement('table');
        const thead = document.createElement('thead');
        thead.innerHTML = `<tr>
          <th>ID</th>
          <th>Color de Corchetes (apertura)</th>
          <th>Texto Interior</th>
        </tr>`;
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        for (const entry of entries) {
          const tr = document.createElement('tr');

          const tdId = document.createElement('td');
          tdId.textContent = entry.id;

          const tdColor = document.createElement('td');
          tdColor.innerHTML = `<span class="color-swatch" style="background:${entry.bracketColor}"></span><code>${escapeHtml(entry.bracketColor)}</code>`;

          const tdText = document.createElement('td');
          tdText.textContent = entry.text;

          tr.appendChild(tdId);
          tr.appendChild(tdColor);
          tr.appendChild(tdText);
          tbody.appendChild(tr);
        }
        table.appendChild(tbody);
        results.appendChild(table);







    // end of try {
    // end of try {
    // end of try {
    // end of try {
    // end of try {
    // end of try {
    // end of try {
    // end of try {
    // end of try {
      } catch (err) {
        status.textContent = 'Error: ' + err.message;
      }
   
   
   


   
   
}); // END OF: document.getElementById('load-btn').addEventListener('click', async () => {











    function getComputedColor(el) {
      if (!el || !el.style) return 'rgb(0, 0, 0)';
      // Walk up to find an explicit color
      let current = el;
      while (current && current !== document.body) {
        const style = window.getComputedStyle(current);
        const color = style.color;
        if (color && color !== 'inherit') return color;
        current = current.parentElement;
      }
      return 'rgb(0, 0, 0)';
    }


















    function escapeHtml(str) {
      return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    }
