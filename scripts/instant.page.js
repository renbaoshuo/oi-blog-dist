/*! Baoshuo's OI Blog | Build: 23ecf31 | Baoshuo ( https://baoshuo.ren ) */
"use strict";var mouseoverTimer,lastTouchTimestamp,intensity,milliseconds,eventListenersOptions,triggeringFunction,prefetches=new Set,prefetchElement=document.createElement("link"),isSupported=prefetchElement.relList&&prefetchElement.relList.supports&&prefetchElement.relList.supports("prefetch")&&window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype,allowQueryString="instantAllowQueryString"in document.body.dataset,allowExternalLinks="instantAllowExternalLinks"in document.body.dataset,useWhitelist="instantWhitelist"in document.body.dataset,mousedownShortcut="instantMousedownShortcut"in document.body.dataset,DELAY_TO_NOT_BE_CONSIDERED_A_TOUCH_INITIATED_ACTION=1111,delayOnHover=65,useMousedown=!1,useMousedownOnly=!1,useViewport=!1;function touchstartListener(e){lastTouchTimestamp=performance.now();e=e.target.closest("a");isPreloadable(e)&&preload(e.href)}function mouseoverListener(e){var t;performance.now()-lastTouchTimestamp<DELAY_TO_NOT_BE_CONSIDERED_A_TOUCH_INITIATED_ACTION||isPreloadable(t=e.target.closest("a"))&&(t.addEventListener("mouseout",mouseoutListener,{passive:!0}),mouseoverTimer=setTimeout(function(){preload(t.href),mouseoverTimer=void 0},delayOnHover))}function mousedownListener(e){e=e.target.closest("a");isPreloadable(e)&&preload(e.href)}function mouseoutListener(e){e.relatedTarget&&e.target.closest("a")==e.relatedTarget.closest("a")||mouseoverTimer&&(clearTimeout(mouseoverTimer),mouseoverTimer=void 0)}function mousedownShortcutListener(e){var t;performance.now()-lastTouchTimestamp<DELAY_TO_NOT_BE_CONSIDERED_A_TOUCH_INITIATED_ACTION||(t=e.target.closest("a"),1<e.which||e.metaKey||e.ctrlKey||t&&(t.addEventListener("click",function(e){1337!=e.detail&&e.preventDefault()},{capture:!0,passive:!1,once:!0}),e=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1,detail:1337}),t.dispatchEvent(e)))}function isPreloadable(e){if(e&&e.href&&(!useWhitelist||"instant"in e.dataset)&&(allowExternalLinks||e.origin==location.origin||"instant"in e.dataset)&&["http:","https:"].includes(e.protocol)&&("http:"!=e.protocol||"https:"!=location.protocol)&&(allowQueryString||!e.search||"instant"in e.dataset)&&!(e.hash&&e.pathname+e.search==location.pathname+location.search||"noInstant"in e.dataset))return!0}function preload(e){var t;prefetches.has(e)||((t=document.createElement("link")).rel="prefetch",t.href=e,document.head.appendChild(t),prefetches.add(e))}"instantIntensity"in document.body.dataset&&("mousedown"==(intensity=document.body.dataset.instantIntensity).substr(0,"mousedown".length)?(useMousedown=!0,"mousedown-only"==intensity&&(useMousedownOnly=!0)):"viewport"==intensity.substr(0,"viewport".length)?navigator.connection&&(navigator.connection.saveData||navigator.connection.effectiveType&&navigator.connection.effectiveType.includes("2g"))||("viewport"==intensity?document.documentElement.clientWidth*document.documentElement.clientHeight<45e4&&(useViewport=!0):"viewport-all"==intensity&&(useViewport=!0)):(milliseconds=parseInt(intensity),isNaN(milliseconds)||(delayOnHover=milliseconds))),isSupported&&(eventListenersOptions={capture:!0,passive:!0},useMousedownOnly||document.addEventListener("touchstart",touchstartListener,eventListenersOptions),useMousedown?mousedownShortcut||document.addEventListener("mousedown",mousedownListener,eventListenersOptions):document.addEventListener("mouseover",mouseoverListener,eventListenersOptions),mousedownShortcut&&document.addEventListener("mousedown",mousedownShortcutListener,eventListenersOptions),useViewport&&(triggeringFunction=window.requestIdleCallback?function(e){requestIdleCallback(e,{timeout:1500})}:function(e){e()})(function(){var t=new IntersectionObserver(function(e){e.forEach(function(e){e.isIntersecting&&(e=e.target,t.unobserve(e),preload(e.href))})});document.querySelectorAll("a").forEach(function(e){isPreloadable(e)&&t.observe(e)})}));