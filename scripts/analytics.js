/*! Baoshuo's OI Blog | Build: 6b35545 | Baoshuo ( https://baoshuo.ren ) */
"use strict";!function(){var a=window.location,r=window.document,o=r.currentScript,s=o.getAttribute("data-api")||new URL(o.src).origin+"/api/event";function l(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(a.hostname)||"file:"===a.protocol)return l("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"==window.localStorage.plausible_ignore)return l("localStorage flag")}catch(t){}var i={};i.n=t,i.u=a.href,i.d=o.getAttribute("data-domain"),i.r=r.referrer||null,i.w=window.innerWidth,e&&e.meta&&(i.m=JSON.stringify(e.meta)),e&&e.props&&(i.p=JSON.stringify(e.props));var n=new XMLHttpRequest;n.open("POST",s,!0),n.setRequestHeader("Content-Type","text/plain"),n.send(JSON.stringify(i)),n.onreadystatechange=function(){4==n.readyState&&e&&e.callback&&e.callback()}}}function e(t){for(var e=t.target,i="auxclick"==t.type&&2==t.which,n="click"==t.type;e&&(void 0===e.tagName||"a"!=e.tagName.toLowerCase()||!e.href);)e=e.parentNode;e&&e.href&&e.host&&e.host!==a.host&&((i||n)&&plausible("Outbound Link: Click",{props:{url:e.href}}),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!n||(setTimeout(function(){a.href=e.href},150),t.preventDefault()))}r.addEventListener("click",e),r.addEventListener("auxclick",e);var i=window.plausible&&window.plausible.q||[];window.plausible=t;for(var n,c=0;c<i.length;c++)t.apply(this,i[c]);function p(){n!==a.pathname&&(n=a.pathname,t("pageview"))}var d,u=window.history;u.pushState&&(d=u.pushState,u.pushState=function(){d.apply(this,arguments),p()},window.addEventListener("popstate",p)),"prerender"===r.visibilityState?r.addEventListener("visibilitychange",function(){n||"visible"!==r.visibilityState||p()}):p()}();