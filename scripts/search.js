/*! Baoshuo's OI Blog | Build: 810448f | Baoshuo ( https://baoshuo.ren ) */
"use strict";!function(C,n){function t(e){return C.getElementById(e)}function r(e){return'<p>你也可以前往 <a href="https://www.google.com/search?q='+encodeURIComponent("site:"+n.hostname+" "+e)+'" target="_blank" rel="nofollow noopener noreferrer">Google</a> 或 <a href="https://www.bing.com/search?q='+encodeURIComponent("site:"+n.hostname+" "+e)+'" target="_blank" rel="nofollow noopener noreferrer">Bing</a> 搜索「<a href="https://www.google.com/search?q='+encodeURIComponent("site:"+n.hostname+" "+e)+'" target="_blank" rel="nofollow noopener noreferrer">'+e+"</a>」。</p>"}function o(e){var n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","…":"&hellip;"};return e.replace(/[&<>"]/g,function(e){return n[e]||e})}function a(e){return e.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&")}var l,i,e,c=new URL(n).searchParams.get("q"),s=t("result");!1 in C.createElement("template")?s.innerHTML='<p>您当前使用的浏览器不支持 HTML5 标准中的 <code>&lt;template&gt;</code> 标签。</p><p>推荐使用最新版的 <a href="https://google.cn/chrome/" target="_blank" rel="external noopener nofollow">Google Chrome 浏览器</a> 访问本站。</p>':c?(l=(new Date).getTime(),t("input").value=c,t("search-tips").style.display="none",t("search-loading").style.display=null,fetch("/search.json").then(function(e){return e.json()}).then(function(e){return function(e,n){e.length<=32&&setTimeout(function(){return window.plausible&&window.plausible("Search",{props:{query:e}})},0);var d=t("result-template").content,w=[],v=e.trim().split(/[\s\-]+/).map(o),y=v.map(function(e){return e.toLowerCase()}),L=new RegExp(v.map(a).join("|"),"gi");n.forEach(function(e){var n,t,a,l,i,c,s,u,p,h,f,r,o,m,g;e.title&&e.content&&(g=e.title,n=e.content,t=e.tags,o=e.categories,a=g.toLowerCase(),l=n.toLowerCase(),i=t&&t.map(function(e){return e.toLowerCase()})||[],c=o&&o.map(function(e){return e.toLowerCase()})||[],u=s=-1,f=h=p=0,y.forEach(function(e){var n=a.indexOf(e),t=l.indexOf(e),r=i.indexOf(e),o=c.indexOf(e);(0<=n||0<=t||0<=r||0<=o)&&p++,0<=r&&h++,0<=o&&f++,0<p&&(e=l.lastIndexOf(e),0<=t&&(s=s<0?t:Math.min(s,t)),0<=e&&(u=u<0?e:Math.max(u,e)))}),p!==v.length&&p<2||((r=o=0)<=s&&(o=Math.max(s-10,0)),0<=u&&(m=Math.min(u+10,n.length)),o=n.substring(o,m=m-o<50?o+300:m),g=(m=function(e,n){var t=0;return e=e.replace(L,function(e){return r+=0<t?n*(1+t/10):+n,t++,"<mark>"+e+"</mark>"})})(g,4),o=m(o,1),r+=2*h,r+=3*f,d.querySelector("a").href=e.url,d.querySelector("[data-title]").innerHTML=g,d.querySelector("[data-content]").innerHTML=o,w.push({content:C.importNode(d,!0),weight:r})))}),w=w.sort(function(e,n){return n.weight-e.weight}),i=(new Date).getTime();n="<small>（耗时 "+Number(i-l)+" 毫秒）</small>";t("search-loading").remove(),w.length?(s.innerHTML='<div class="result-info">找到 '+w.length+" 条结果"+n+"</div>",w.forEach(function(e){return s.appendChild(e.content)})):s.innerHTML="<p>未找到任何结果，请尝试搜索其他关键字。"+n+"</p>"+r(e)}(c,e)}).catch(function(e){return n=c,e=e,t("search-tips").innerHTML='<p>出错了，请 <a href="javascript:location.reload()">重试</a>。</p>'+r(n),t("search-tips").style.display=null,t("search-loading").style.display="none",void console.error(e);var n})):((e=C.createElement("link")).rel="prefetch",e.as="fetch",e.href="/search.json",C.head.appendChild(e))}(document,location);