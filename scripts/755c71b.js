/*! Baoshuo's OI Blog | Build: 7d1b0eb | Baoshuo ( https://baoshuo.ren ) */
/* scripts/buttons.js */
!function(n){var t=function(t){return n.getElementById(t)},e=t("tocMask"),l=t("tocToggler"),o=t("toc");if(l){var c={block:"none",none:"block"},i=function(){e.style.display=c[e.style.display],o.style.display=c[o.style.display]};[e,l,o].map((function(n){return n.addEventListener("click",i)}))}}(document);