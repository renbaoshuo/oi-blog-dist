/*! Baoshuo's OI Blog | Build: c982252 | Baoshuo ( https://baoshuo.ren ) */
"use strict";!function(e,n,a){function r(t){return isNaN(t)||t==1/0||t<0?void 0:t}function o(t){return Math.random().toString(36).slice(-t)}function i(t){return Math.ceil(Math.random()*(t-1))+1}function c(t){return u.getEntriesByName(t)}function s(t){!function(t,e,n,a){t.GoogleAnalyticsObject=a,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=+new Date;a=e.createElement(n);first_element=e.getElementsByTagName(n)[0],a.async=!0,a.src="https://www.google-analytics.com/analytics.js",first_element.parentNode.insertBefore(a,first_element)}(e,n,"script","ga"),ga("create",t,"auto"),ga("send","pageview")}var t,d=e.screen,g=encodeURIComponent,l=Math.max,u=e.performance,m=(t="navigation",u.getEntriesByType(t)[0]),p=m.startTime;function f(){var t=[o(i(4))+"="+o(i(6)),"ga="+e.ga_tid,"dt="+g(n.title),"de="+g(n.characterSet||n.charset),"dr="+g(n.referrer),"ul="+(a.language||a.browserLanguage||a.userLanguage),"sd="+d.colorDepth+"-bit","sr="+d.width+"x"+d.height,"vp="+l(n.documentElement.clientWidth,e.innerWidth||0)+"x"+l(n.documentElement.clientHeight,e.innerHeight||0),"plt="+r(m.loadEventStart-p||0),"dns="+r(m.domainLookupEnd-m.domainLookupStart||0),"pdt="+r(m.responseEnd-m.responseStart||0),"rrt="+r(m.redirectEnd-m.redirectStart||0),"tcp="+r(m.connectEnd-m.connectStart||0),"srt="+r(m.responseStart-m.requestStart||0),"dit="+r(m.domInteractive-m.domLoading||0),"clt="+r(m.domContentLoadedEventStart-p||0),"z="+Date.now()];t.push("fp="+r(c("first-paint")[0].startTime||0)),t.push("fcp="+r(c("first-contentful-paint")[0].startTime||0)),fetch(e.ga_api+"?"+t.join("&"),{mode:"no-cors",credentials:"include"}).catch(function(t){s(e.ga_tid),console.error("Failed to Connect Baoshuo's Google Analytics API:\n",t)})}e.cfga=f,"complete"===n.readyState?f():e.addEventListener("load",f)}(window,document,navigator);