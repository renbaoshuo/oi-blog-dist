/*! Baoshuo's OI Blog | Build: 2cd16a0 | Baoshuo ( https://baoshuo.ren ) */
/* scripts/code-group.js */
window.codeGroup=function(e){void 0===e&&(e=window.document),e.querySelectorAll("#content div[data-group]").forEach((function(t){t.style.background="var(--group-background)",t.style.padding="0.5rem 0.75rem 0.75rem",t.style.borderRadius="calc(var(--radius) / 2)";var r=e.createElement("div");r.style.display="flex",r.style.marginBottom="0.75rem",t.prepend(r);var o=t.querySelectorAll("div[data-title]");o.forEach((function(t,n){var l=e.createElement("div");l.innerText=t.getAttribute("data-title"),l.style.cursor="pointer",l.style.padding="0.25rem 0.5rem",n?t.style.display="none":l.style.borderBottom="2px solid var(--accent)",l.addEventListener("click",(function(){o.forEach((function(e){return e.style.display="none"})),Array.from(r.children).forEach((function(e){return e.style.borderBottom=null})),l.style.borderBottom="2px solid var(--accent)",t.style.display=null})),r.appendChild(l);var d=t.lastElementChild;d&&(d.style.marginBottom=0)}))}))},window.codeGroup(document);