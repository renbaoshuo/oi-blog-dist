/*! Baoshuo's OI Blog | Build: bc55557 | Baoshuo ( https://baoshuo.ren ) */
"use strict";!function(t,e,n){var a,r=t.screen,o=encodeURIComponent,i=Math.max,c=t.performance,s=function(t){return isNaN(t)||t==1/0||t<0?void 0:t},d=function(t){return Math.random().toString(36).slice(-t)},g=function(t){return Math.ceil(Math.random()*(t-1))+1},l=function(t){return c.getEntriesByName(t)},u=(a="navigation",c.getEntriesByType(a))[0],m=u.startTime;function p(){var a=[d(g(4))+"="+d(g(6)),"ga="+t.ga_tid,"dt="+o(e.title),"de="+o(e.characterSet||e.charset),"dr="+o(e.referrer),"ul="+(n.language||n.browserLanguage||n.userLanguage),"sd="+r.colorDepth+"-bit","sr="+r.width+"x"+r.height,"vp="+i(e.documentElement.clientWidth,t.innerWidth||0)+"x"+i(e.documentElement.clientHeight,t.innerHeight||0),"plt="+s(u.loadEventStart-m||0),"dns="+s(u.domainLookupEnd-u.domainLookupStart||0),"pdt="+s(u.responseEnd-u.responseStart||0),"rrt="+s(u.redirectEnd-u.redirectStart||0),"tcp="+s(u.connectEnd-u.connectStart||0),"srt="+s(u.responseStart-u.requestStart||0),"dit="+s(u.domInteractive-u.domLoading||0),"clt="+s(u.domContentLoadedEventStart-m||0),"z="+Date.now()];a.push("fp="+s(l("first-paint")[0].startTime||0)),a.push("fcp="+s(l("first-contentful-paint")[0].startTime||0)),fetch(t.ga_api+"?"+a.join("&"),{mode:"no-cors",credentials:"include"}).catch((function(n){var a;a=t.ga_tid,function(t,e,n,a,r){t.GoogleAnalyticsObject=r,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date;var o=e.createElement(n);first_element=e.getElementsByTagName(n)[0],o.async=!0,o.src="https://www.google-analytics.com/analytics.js",first_element.parentNode.insertBefore(o,first_element)}(t,e,"script",0,"ga"),ga("create",a,"auto"),ga("send","pageview"),console.error("Failed to Connect Baoshuo's Google Analytics API:\n",n)}))}t.cfga=p,"complete"===e.readyState?p():t.addEventListener("load",p)}(window,document,navigator);