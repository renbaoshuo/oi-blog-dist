/*! Baoshuo's OI Blog | Build: 69b218b | Baoshuo ( https://baoshuo.ren ) */
/* scripts/cfga.js */
!function(a,d,g){var c,b=function(){var b=[l(m(4))+"="+l(m(6)),"ga="+a.ga_tid,"dt="+i(d.title),"de="+i(d.characterSet||d.charset),"dr="+i(d.referrer),"ul="+(g.language||g.browserLanguage||g.userLanguage),"sd="+h.colorDepth+"-bit","sr="+h.width+"x"+h.height,"vp="+j(d.documentElement.clientWidth,a.innerWidth||0)+"x"+j(d.documentElement.clientHeight,a.innerHeight||0),"plt="+k(f.loadEventStart-p||0),"dns="+k(f.domainLookupEnd-f.domainLookupStart||0),"pdt="+k(f.responseEnd-f.responseStart||0),"rrt="+k(f.redirectEnd-f.redirectStart||0),"tcp="+k(f.connectEnd-f.connectStart||0),"srt="+k(f.responseStart-f.requestStart||0),"dit="+k(f.domInteractive-f.domLoading||0),"clt="+k(f.domContentLoadedEventStart-p||0),"z="+Date.now(),];b.push("fp="+k(n("first-paint")[0].startTime||0)),b.push("fcp="+k(n("first-contentful-paint")[0].startTime||0)),fetch(a.ga_api+"?"+b.join("&"),{mode:"no-cors",credentials:"include"}).catch(function(b){o(a.ga_tid),console.error("Failed to Connect Baoshuo's Google Analytics API:\n",b)})},h=a.screen,i=encodeURIComponent,j=Math.max,e=a.performance,k=function(a){return isNaN(a)||a==1/0||a<0?void 0:a},l=function(a){return Math.random().toString(36).slice(-a)},m=function(a){return Math.ceil(Math.random()*(a-1))+1},n=function(a){return e.getEntriesByName(a)},o=function(i){var b,f,g,h,c,e;b=a,f=d,g="script",h="https://www.google-analytics.com/analytics.js",c="ga",b.GoogleAnalyticsObject=c,b[c]=b[c]||function(){(b[c].q=b[c].q||[]).push(arguments)},b[c].l=1*new Date,e=f.createElement(g),first_element=f.getElementsByTagName(g)[0],e.async=!0,e.src=h,first_element.parentNode.insertBefore(e,first_element),ga("create",i,"auto"),ga("send","pageview")},f=(c="navigation",e.getEntriesByType(c))[0],p=f.startTime;a.cfga=b,"complete"===d.readyState?b():a.addEventListener("load",b)}(window,document,navigator)