/*! Baoshuo's OI Blog | Build: 959132a | Baoshuo ( https://baoshuo.ren ) */
/* scripts/instant.page.js */
/*! instant.page v5.1.0 - (C) 2019-2020 Alexandre Dieulot - https://instant.page/license */var mouseoverTimer,lastTouchTimestamp,touchstartListener=function(e){lastTouchTimestamp=performance.now();var t=e.target.closest("a");isPreloadable(t)&&preload(t.href)},mouseoverListener=function(e){if(!(performance.now()-lastTouchTimestamp<DELAY_TO_NOT_BE_CONSIDERED_A_TOUCH_INITIATED_ACTION)){var t=e.target.closest("a");isPreloadable(t)&&(t.addEventListener("mouseout",mouseoutListener,{passive:!0}),mouseoverTimer=setTimeout((function(){preload(t.href),mouseoverTimer=void 0}),delayOnHover))}},mousedownListener=function(e){var t=e.target.closest("a");isPreloadable(t)&&preload(t.href)},mouseoutListener=function(e){e.relatedTarget&&e.target.closest("a")==e.relatedTarget.closest("a")||mouseoverTimer&&(clearTimeout(mouseoverTimer),mouseoverTimer=void 0)},mousedownShortcutListener=function(e){if(!(performance.now()-lastTouchTimestamp<DELAY_TO_NOT_BE_CONSIDERED_A_TOUCH_INITIATED_ACTION)){var t=e.target.closest("a");if(!(e.which>1||e.metaKey||e.ctrlKey)&&t){t.addEventListener("click",(function(e){1337!=e.detail&&e.preventDefault()}),{capture:!0,passive:!1,once:!0});var n=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1,detail:1337});t.dispatchEvent(n)}}},isPreloadable=function(e){if(e&&e.href&&(!useWhitelist||"instant"in e.dataset)&&(allowExternalLinks||e.origin==location.origin||"instant"in e.dataset)&&["http:","https:"].includes(e.protocol)&&("http:"!=e.protocol||"https:"!=location.protocol)&&(allowQueryString||!e.search||"instant"in e.dataset)&&!(e.hash&&e.pathname+e.search==location.pathname+location.search||"noInstant"in e.dataset))return!0},preload=function(e){if(!prefetches.has(e)){var t=document.createElement("link");t.rel="prefetch",t.href=e,document.head.appendChild(t),prefetches.add(e)}},prefetches=new Set,prefetchElement=document.createElement("link"),isSupported=prefetchElement.relList&&prefetchElement.relList.supports&&prefetchElement.relList.supports("prefetch")&&window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype,allowQueryString="instantAllowQueryString"in document.body.dataset,allowExternalLinks="instantAllowExternalLinks"in document.body.dataset,useWhitelist="instantWhitelist"in document.body.dataset,mousedownShortcut="instantMousedownShortcut"in document.body.dataset,DELAY_TO_NOT_BE_CONSIDERED_A_TOUCH_INITIATED_ACTION=1111,delayOnHover=65,useMousedown=!1,useMousedownOnly=!1,useViewport=!1;if("instantIntensity"in document.body.dataset){var intensity=document.body.dataset.instantIntensity;if("mousedown"==intensity.substr(0,"mousedown".length))useMousedown=!0,"mousedown-only"==intensity&&(useMousedownOnly=!0);else if("viewport"==intensity.substr(0,"viewport".length))navigator.connection&&(navigator.connection.saveData||navigator.connection.effectiveType&&navigator.connection.effectiveType.includes("2g"))||("viewport"==intensity?document.documentElement.clientWidth*document.documentElement.clientHeight<45e4&&(useViewport=!0):"viewport-all"==intensity&&(useViewport=!0));else{var milliseconds=parseInt(intensity);isNaN(milliseconds)||(delayOnHover=milliseconds)}}if(isSupported){var triggeringFunction,eventListenersOptions={capture:!0,passive:!0};if(useMousedownOnly||document.addEventListener("touchstart",touchstartListener,eventListenersOptions),useMousedown?mousedownShortcut||document.addEventListener("mousedown",mousedownListener,eventListenersOptions):document.addEventListener("mouseover",mouseoverListener,eventListenersOptions),mousedownShortcut&&document.addEventListener("mousedown",mousedownShortcutListener,eventListenersOptions),useViewport)(triggeringFunction=window.requestIdleCallback?function(e){requestIdleCallback(e,{timeout:1500})}:function(e){e()})((function(){var e=new IntersectionObserver((function(t){t.forEach((function(t){if(t.isIntersecting){var n=t.target;e.unobserve(n),preload(n.href)}}))}));document.querySelectorAll("a").forEach((function(t){isPreloadable(t)&&e.observe(t)}))}))}