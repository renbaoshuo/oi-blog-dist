/*! Baoshuo's OI Blog (8ba5d40) | Baoshuo ( https://baoshuo.ren ) */
!function(e){var n=function(){var n=e.getElementById("content").getElementsByClassName("bs__tabs");Array.from(n).forEach((function(e){for(var n=function(e){r.children[e].addEventListener("click",(function(){for(var n=0;n<r.children.length;n++)r.children[n].ariaCurrent=null;r.children[e].ariaCurrent="page";for(var a=0;a<t.children.length;a++)t.children[a].classList.remove("d-block"),t.children[a].classList.add("d-none");t.children[e].classList.remove("d-none"),t.children[e].classList.add("d-block")}))},r=e.getElementsByClassName("bs__tab-nav")[0],t=e.getElementsByClassName("bs__tab-contents")[0],a=0;a<r.children.length;a++)n(a)}))};n(),window.codeGroup=n}(document);