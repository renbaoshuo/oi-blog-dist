/*! Baoshuo's OI Blog | Build: b3aa5a0 | Baoshuo ( https://baoshuo.ren ) */
"use strict";window.codeGroup=function(n){(n=void 0===n?window.document:n).querySelectorAll("#content div[data-group]").forEach(e=>{e.style.background="var(--group-background)",e.style.padding="0.5rem 0.75rem 0.75rem",e.style.borderRadius="calc(var(--radius) / 2)";let l=n.createElement("div");l.style.display="flex",l.style.marginBottom="0.75rem",e.prepend(l);const d=e.querySelectorAll("div[data-title]");d.forEach((e,t)=>{let r=n.createElement("div");r.innerText=e.getAttribute("data-title"),r.style.cursor="pointer",r.style.padding="0.25rem 0.5rem",t?e.style.display="none":r.style.borderBottom="2px solid var(--accent)",r.addEventListener("click",()=>{d.forEach(e=>e.style.display="none"),Array.from(l.children).forEach(e=>e.style.borderBottom=null),r.style.borderBottom="2px solid var(--accent)",e.style.display=null}),l.appendChild(r);const o=e.lastElementChild;o&&(o.style.marginBottom=0)})})},window.codeGroup(document);