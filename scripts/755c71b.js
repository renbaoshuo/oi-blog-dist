/*! Baoshuo's OI Blog | Build: 444bb9f | Baoshuo ( https://baoshuo.ren ) */
/* scripts/buttons.js */
!function(n){var t=function(t){return n.getElementById(t)},e=t("tocMask"),l=t("tocToggler"),o=t("toc");if(l){var c={block:"none",none:"block"},i=function(){e.style.display=c[e.style.display],o.style.display=c[o.style.display]};[e,l,o].map((function(n){return n.addEventListener("click",i)}))}}(document);