/*! Baoshuo's OI Blog | Build: 1110db8 | Baoshuo ( https://baoshuo.ren ) */
/* scripts/search.js */
!function(e,n){var t,r,o=new URL(n.href).searchParams.get("q"),a=function(n){return e.getElementById(n)},l=a("result"),i=function(e){return'<p>你也可以前往 <a href="https://www.google.com/search?q='+encodeURIComponent("site:"+n.hostname+" "+e)+'" target="_blank" rel="nofollow noopener noreferrer">Google</a> 或 <a href="https://www.bing.com/search?q='+encodeURIComponent("site:"+n.hostname+" "+e)+'" target="_blank" rel="nofollow noopener noreferrer">Bing</a> 搜索「<a href="https://www.google.com/search?q='+encodeURIComponent("site:"+n.hostname+" "+e)+'" target="_blank" rel="nofollow noopener noreferrer">'+e+"</a>」。</p>"},c=function(e){var n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","…":"&hellip;"};return e.replace(/[&<>"]/g,(function(e){return n[e]||e}))},s=function(e){return e.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&")};if("content"in e.createElement("template"))if(o)t=(new Date).getTime(),a("input").value=o,a("search-tips").style.display="none",a("search-loading").style.display=null,fetch("/search.json").then((function(e){return e.json()})).then((function(n){return function(n,o){n.length<=32&&setTimeout((function(){return window.plausible&&window.plausible("Search",{props:{query:n}})}),0);var u=a("result-template").content,h=[],p=n.trim().split(/[\s\-]+/).map(c),f=p.map((function(e){return e.toLowerCase()})),m=new RegExp(p.map(s).join("|"),"gi");o.forEach((function(n){if(n.title&&n.content){var t=n.title,r=n.content,o=n.tags,a=n.categories,l=t.toLowerCase(),i=r.toLowerCase(),c=o&&o.map((function(e){return e.toLowerCase()}))||[],s=a&&a.map((function(e){return e.toLowerCase()}))||[],g=-1,d=-1,w=0,v=0,y=0;if(f.forEach((function(e){var n=l.indexOf(e),t=i.indexOf(e),r=c.indexOf(e),o=s.indexOf(e);if((n>=0||t>=0||r>=0||o>=0)&&w++,r>=0&&v++,o>=0&&y++,w>0){var a=i.lastIndexOf(e);t>=0&&(g=g<0?t:Math.min(g,t)),a>=0&&(d=d<0?a:Math.max(d,a))}})),!(w!==p.length&&w<2)){var L,C,M,T=0,b=0;g>=0&&(T=Math.max(g-10,0)),d>=0&&(M=Math.min(d+10,r.length)),M-T<50&&(M=T+300),C=r.substring(T,M);var q=function(e,n){var t=0;return e.replace(m,(function(e){return b+=t>0?n*(1+t/10):1*n,t++,"<mark>"+e+"</mark>"}))};L=q(t,4),C=q(C,1),b+=2*v,b+=3*y,u.querySelector("a").href=n.url,u.querySelector("[data-title]").innerHTML=L,u.querySelector("[data-content]").innerHTML=C,h.push({content:e.importNode(u,!0),weight:b})}}})),h=h.sort((function(e,n){return n.weight-e.weight})),r=(new Date).getTime();var g="<small>（耗时 "+Number(r-t)+" 毫秒）</small>";a("search-loading").remove(),h.length?(l.innerHTML='<div class="result-info">找到 '+h.length+" 条结果"+g+"</div>",h.forEach((function(e){return l.appendChild(e.content)}))):l.innerHTML="<p>未找到任何结果，请尝试搜索其他关键字。"+g+"</p>"+i(n)}(o,n)})).catch((function(e){return function(e,n){a("search-tips").innerHTML='<p>出错了，请 <a href="javascript:location.reload()">重试</a>。</p>'+i(e),a("search-tips").style.display=null,a("search-loading").style.display="none",console.error(n)}(o,e)}));else{var u=e.createElement("link");u.rel="prefetch",u.as="fetch",u.href="/search.json",e.head.appendChild(u)}else l.innerHTML='<p>您当前使用的浏览器不支持 HTML5 标准中的 <code>&lt;template&gt;</code> 标签。</p><p>推荐使用最新版的 <a href="https://google.cn/chrome/" target="_blank" rel="external noopener nofollow">Google Chrome 浏览器</a> 访问本站。</p>'}(document,location);