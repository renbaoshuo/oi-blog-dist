/*! Baoshuo's OI Blog | Build: 9ea579c | Baoshuo ( https://baoshuo.ren ) */
"use strict";window.codeGroup=function(l){(l=void 0===l?window.document:l).querySelectorAll("#content div[data-group]").forEach(function(e){e.style.background="var(--group-background)",e.style.padding="0.5rem 0.75rem 0.75rem",e.style.borderRadius="calc(var(--radius) / 2)";var o=l.createElement("div");o.style.display="flex",o.style.marginBottom="0.75rem",e.prepend(o);var n=e.querySelectorAll("div[data-title]");n.forEach(function(e,t){var r=l.createElement("div");r.innerText=e.getAttribute("data-title"),r.style.cursor="pointer",r.style.padding="0.25rem 0.5rem",t?e.style.display="none":r.style.borderBottom="2px solid var(--accent)",r.addEventListener("click",function(){n.forEach(function(e){return e.style.display="none"}),Array.from(o.children).forEach(function(e){return e.style.borderBottom=null}),r.style.borderBottom="2px solid var(--accent)",e.style.display=null}),o.appendChild(r);t=e.lastElementChild;t&&(t.style.marginBottom=0)})})},window.codeGroup(document);