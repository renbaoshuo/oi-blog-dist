/*! Baoshuo's OI Blog | Build: 685fa76 | Baoshuo ( https://baoshuo.ren ) */
/* scripts/analytics.js */
!function(t,e){var n=t.currentScript,r=function(t){console.warn("Ignoring Event: "+t)},a=n.getAttribute("data-api")||new URL(n.src).origin+"/api/event",i=function(i,o,c){if(void 0===c&&(c=!0),/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(e.hostname)||"file:"===e.protocol)return r("localhost");if(!(window.navigator.webdriver||window._phantom||window.__nightmare||window.Cypress)){try{if("true"==window.localStorage.plausible_ignore)return r("localStorage flag")}catch(t){}var s={};if(s.n=i,s.u=e.href,s.d=n.getAttribute("data-domain"),s.r=t.referrer||null,s.w=window.screen.width,o&&o.meta&&(s.m=JSON.stringify(o.meta)),o&&o.props&&(s.p=JSON.stringify(o.props)),"fetch"in window)fetch(a,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(s),keepalive:!0}).then((function(){o.callback&&o.callback()}));else{var l=new XMLHttpRequest;l.open("POST",a,c),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(s)),l.onreadystatechange=function(){4==l.readyState&&o&&o.callback&&o.callback()}}}};window.plausible=i,(window.plausible&&window.plausible.q||[]).forEach((function(t){return i.apply(null,t)}));var o=function(t){for(var n=t.target,r="auxclick"==t.type&&2==t.which,a="click"==t.type;n&&(void 0===n.tagName||"a"!==n.tagName.toLowerCase()||!n.href);)n=n.parentNode;var o=n;o&&o.href&&o.host&&o.host!==e.host&&((r||a)&&i("Outbound Link: Click",{props:{url:o.href}},!1),o.target&&!o.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!a||(setTimeout((function(){e.href=o.href}),150),t.preventDefault()))};t.addEventListener("click",o),t.addEventListener("auxclick",o);var c=function(){if("getEntriesByType"in window.performance){var t,e=window.performance,n=function(t){return e.getEntriesByName(t)},r=function(t){return isNaN(t)||t==1/0||t<0?void 0:t},a=function(t,e){return i("Web Vitals: "+t,{props:{value:e}})},o=(t="navigation",e.getEntriesByType(t))[0];a("TTFB",r(o.responseStart-o.fetchStart||0)),a("PDT",r(o.responseEnd-o.responseStart||0)),a("SRT",r(o.responseEnd-o.requestStart||0)),a("PLT",r(o.loadEventStart-o.startTime||0)),a("CLT",r(o.domContentLoadedEventStart-o.startTime||0)),a("RRT",r(o.redirectEnd-o.redirectStart||0));var c=n("first-contentful-paint");c.length&&a("FCP",r(c[0].startTime||0));var s=n("largest-contentful-paint");s.length&&a("LCP",r(s[0].startTime||0))}};"complete"===t.readyState?(i("pageview"),c()):window.addEventListener("load",(function(){return i("pageview"),c()}))}(document,location);