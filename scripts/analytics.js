/*! Baoshuo's OI Blog | Build: c982252 | Baoshuo ( https://baoshuo.ren ) */
"use strict";!function(r,i){function o(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(i.hostname)||"file:"===i.protocol)return c("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"==window.localStorage.plausible_ignore)return c("localStorage flag")}catch(e){}var n={};n.n=e,n.u=i.href,n.d=l.getAttribute("data-domain"),n.r=r.referrer||null,n.w=window.innerWidth,t&&t.meta&&(n.m=JSON.stringify(t.meta)),t&&t.props&&(n.p=JSON.stringify(t.props));var a=new XMLHttpRequest;a.open("POST",s,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(n)),a.onreadystatechange=function(){4==a.readyState&&t&&t.callback&&t.callback()}}}function e(e){for(var t=e.target,n="auxclick"==e.type&&2==e.which,a="click"==e.type;t&&(void 0===t.tagName||"a"!=t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.host&&t.host!==i.host&&((n||a)&&o("Outbound Link: Click",{props:{url:t.href}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!a||(setTimeout(function(){i.href=t.href},150),e.preventDefault()))}var l=r.currentScript,c=function(e){console.warn("Ignoring Event: "+e)},s=l.getAttribute("data-api")||new URL(l.src).origin+"/api/event";r.addEventListener("click",e),r.addEventListener("auxclick",e),(window.plausible&&window.plausible.q||[]).forEach(function(e){return o.apply(null,e)}),window.plausible=o,"complete"===r.readyState?o("pageview"):window.addEventListener("load",function(){return o("pageview")})}(window.document,window.location);