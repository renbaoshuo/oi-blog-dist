/*! Baoshuo's OI Blog | Build: dff3716 | Baoshuo ( https://baoshuo.ren ) */
"use strict";let mouseoverTimer,lastTouchTimestamp;const prefetches=new Set,prefetchElement=document.createElement("link"),isSupported=prefetchElement.relList&&prefetchElement.relList.supports&&prefetchElement.relList.supports("prefetch")&&window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype,allowQueryString="instantAllowQueryString"in document.body.dataset,allowExternalLinks="instantAllowExternalLinks"in document.body.dataset,useWhitelist="instantWhitelist"in document.body.dataset,mousedownShortcut="instantMousedownShortcut"in document.body.dataset,DELAY_TO_NOT_BE_CONSIDERED_A_TOUCH_INITIATED_ACTION=1111;let delayOnHover=65,useMousedown=!1,useMousedownOnly=!1,useViewport=!1;if("instantIntensity"in document.body.dataset){const a=document.body.dataset.instantIntensity;if("mousedown"==a.substr(0,"mousedown".length))useMousedown=!0,"mousedown-only"==a&&(useMousedownOnly=!0);else if("viewport"==a.substr(0,"viewport".length))navigator.connection&&(navigator.connection.saveData||navigator.connection.effectiveType&&navigator.connection.effectiveType.includes("2g"))||("viewport"==a?document.documentElement.clientWidth*document.documentElement.clientHeight<45e4&&(useViewport=!0):"viewport-all"==a&&(useViewport=!0));else{const b=parseInt(a);isNaN(b)||(delayOnHover=b)}}if(isSupported){const c={capture:!0,passive:!0};if(useMousedownOnly||document.addEventListener("touchstart",touchstartListener,c),useMousedown?mousedownShortcut||document.addEventListener("mousedown",mousedownListener,c):document.addEventListener("mouseover",mouseoverListener,c),mousedownShortcut&&document.addEventListener("mousedown",mousedownShortcutListener,c),useViewport){let e;e=window.requestIdleCallback?e=>{requestIdleCallback(e,{timeout:1500})}:e=>{e()},e(()=>{const t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e=e.target,t.unobserve(e),preload(e.href))})});document.querySelectorAll("a").forEach(e=>{isPreloadable(e)&&t.observe(e)})})}}function touchstartListener(e){lastTouchTimestamp=performance.now();e=e.target.closest("a");isPreloadable(e)&&preload(e.href)}function mouseoverListener(e){if(!(performance.now()-lastTouchTimestamp<DELAY_TO_NOT_BE_CONSIDERED_A_TOUCH_INITIATED_ACTION)){const t=e.target.closest("a");isPreloadable(t)&&(t.addEventListener("mouseout",mouseoutListener,{passive:!0}),mouseoverTimer=setTimeout(()=>{preload(t.href),mouseoverTimer=void 0},delayOnHover))}}function mousedownListener(e){e=e.target.closest("a");isPreloadable(e)&&preload(e.href)}function mouseoutListener(e){e.relatedTarget&&e.target.closest("a")==e.relatedTarget.closest("a")||mouseoverTimer&&(clearTimeout(mouseoverTimer),mouseoverTimer=void 0)}function mousedownShortcutListener(e){if(!(performance.now()-lastTouchTimestamp<DELAY_TO_NOT_BE_CONSIDERED_A_TOUCH_INITIATED_ACTION)){const t=e.target.closest("a");1<e.which||e.metaKey||e.ctrlKey||t&&(t.addEventListener("click",function(e){1337!=e.detail&&e.preventDefault()},{capture:!0,passive:!1,once:!0}),e=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1,detail:1337}),t.dispatchEvent(e))}}function isPreloadable(e){if(e&&e.href&&(!useWhitelist||"instant"in e.dataset)&&(allowExternalLinks||e.origin==location.origin||"instant"in e.dataset)&&["http:","https:"].includes(e.protocol)&&("http:"!=e.protocol||"https:"!=location.protocol)&&(allowQueryString||!e.search||"instant"in e.dataset)&&!(e.hash&&e.pathname+e.search==location.pathname+location.search||"noInstant"in e.dataset))return!0}function preload(e){if(!prefetches.has(e)){const t=document.createElement("link");t.rel="prefetch",t.href=e,document.head.appendChild(t),prefetches.add(e)}}