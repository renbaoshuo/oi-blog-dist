/*! Baoshuo's OI Blog | Build: f737146 | Baoshuo ( https://baoshuo.ren ) */
"use strict";((e,n,a)=>{const r=e.screen,o=encodeURIComponent,i=Math.max,c=e.performance,s=t=>isNaN(t)||t==1/0||t<0?void 0:t,d=t=>Math.random().toString(36).slice(-t),g=t=>Math.ceil(Math.random()*(t-1))+1,l=t=>c.getEntriesByName(t);const m=t=>{!function(t,e,n,a){t.GoogleAnalyticsObject=a,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=+new Date;a=e.createElement(n);first_element=e.getElementsByTagName(n)[0],a.async=!0,a.src="https://www.google-analytics.com/analytics.js",first_element.parentNode.insertBefore(a,first_element)}(e,n,"script","ga"),ga("create",t,"auto"),ga("send","pageview")},p=c.getEntriesByType("navigation")[0],u=p.startTime;function t(){var t=[d(g(4))+"="+d(g(6)),"ga="+e.ga_tid,"dt="+o(n.title),"de="+o(n.characterSet||n.charset),"dr="+o(n.referrer),"ul="+(a.language||a.browserLanguage||a.userLanguage),"sd="+r.colorDepth+"-bit","sr="+r.width+"x"+r.height,"vp="+i(n.documentElement.clientWidth,e.innerWidth||0)+"x"+i(n.documentElement.clientHeight,e.innerHeight||0),"plt="+s(p.loadEventStart-u||0),"dns="+s(p.domainLookupEnd-p.domainLookupStart||0),"pdt="+s(p.responseEnd-p.responseStart||0),"rrt="+s(p.redirectEnd-p.redirectStart||0),"tcp="+s(p.connectEnd-p.connectStart||0),"srt="+s(p.responseStart-p.requestStart||0),"dit="+s(p.domInteractive-p.domLoading||0),"clt="+s(p.domContentLoadedEventStart-u||0),"z="+Date.now()];t.push("fp="+s(l("first-paint")[0].startTime||0)),t.push("fcp="+s(l("first-contentful-paint")[0].startTime||0)),fetch(e.ga_api+"?"+t.join("&"),{mode:"no-cors",credentials:"include"}).catch(t=>{m(e.ga_tid),console.error("Failed to Connect Baoshuo's Google Analytics API:\n",t)})}e.cfga=t,"complete"===n.readyState?t():e.addEventListener("load",t)})(window,document,navigator);