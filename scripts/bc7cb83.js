/*! Baoshuo's OI Blog | Build: 521c3cb | Baoshuo ( https://baoshuo.ren ) */
/* scripts/cfga.js */
!function(t,e,n){var a,r=function(){var a=[g(l(4))+"="+g(l(6)),"ga="+t.ga_tid,"dt="+i(e.title),"de="+i(e.characterSet||e.charset),"dr="+i(e.referrer),"ul="+(n.language||n.browserLanguage||n.userLanguage),"sd="+o.colorDepth+"-bit","sr="+o.width+"x"+o.height,"vp="+c(e.documentElement.clientWidth,t.innerWidth||0)+"x"+c(e.documentElement.clientHeight,t.innerHeight||0),"plt="+d(p.loadEventStart-f||0),"dns="+d(p.domainLookupEnd-p.domainLookupStart||0),"pdt="+d(p.responseEnd-p.responseStart||0),"rrt="+d(p.redirectEnd-p.redirectStart||0),"tcp="+d(p.connectEnd-p.connectStart||0),"srt="+d(p.responseStart-p.requestStart||0),"dit="+d(p.domInteractive-p.domLoading||0),"clt="+d(p.domContentLoadedEventStart-f||0),"z="+Date.now()];a.push("fp="+d(u("first-paint")[0].startTime||0)),a.push("fcp="+d(u("first-contentful-paint")[0].startTime||0)),fetch(t.ga_api+"?"+a.join("&"),{mode:"no-cors",credentials:"include"}).catch((function(e){m(t.ga_tid),console.error("Failed to Connect Baoshuo's Google Analytics API:\n",e)}))},o=t.screen,i=encodeURIComponent,c=Math.max,s=t.performance,d=function(t){return isNaN(t)||t==1/0||t<0?void 0:t},g=function(t){return Math.random().toString(36).slice(-t)},l=function(t){return Math.ceil(Math.random()*(t-1))+1},u=function(t){return s.getEntriesByName(t)},m=function(n){!function(t,e,n,a,r){t.GoogleAnalyticsObject=r,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date;var o=e.createElement(n);first_element=e.getElementsByTagName(n)[0],o.async=!0,o.src="https://www.google-analytics.com/analytics.js",first_element.parentNode.insertBefore(o,first_element)}(t,e,"script",0,"ga"),ga("create",n,"auto"),ga("send","pageview")},p=(a="navigation",s.getEntriesByType(a))[0],f=p.startTime;t.cfga=r,"complete"===e.readyState?r():t.addEventListener("load",r)}(window,document,navigator);