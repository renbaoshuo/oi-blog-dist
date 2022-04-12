/*! Baoshuo's OI Blog | Build: acb4fd5 | Baoshuo ( https://baoshuo.ren ) */
"use strict";!function(a,o,r,i){function c(e){return a.getElementById(e)}function s(e){return new Uint8Array(e.match(/[\da-f]{2}/gi).map(function(e){return parseInt(e,16)}))}function n(t,e){return!(32<=t)&&(setTimeout(function(){return window.plausible&&window.plausible("Post: Decrypt",{props:{value:location.pathname+"@"+t+"@"+(e?"auto":"manual"),path:location.pathname,password:t,auto:e}})},0),n=t,o.importKey("raw",(new TextEncoder).encode(n),{name:"PBKDF2"},!1,["deriveKey","deriveBits"]).then(function(e){return Promise.all([(n=e,o.deriveKey({name:"PBKDF2",hash:"SHA-256",salt:(new TextEncoder).encode(u).buffer,iterations:1024},n,{name:"HMAC",hash:"SHA-256",length:256},!0,["verify"])),(n=e,o.deriveKey({name:"PBKDF2",hash:"SHA-256",salt:(new TextEncoder).encode(u).buffer,iterations:1024},n,{name:"AES-CBC",length:256},!0,["decrypt"])),(e=e,o.deriveBits({name:"PBKDF2",hash:"SHA-256",salt:(new TextEncoder).encode(d).buffer,iterations:512},e,128))]).then(function(e){var n=e[0],t=e[1],e=e[2];return t=t,e=e,n=n,Promise.all([p(l.encryptedContent,l.contentHmacDigest,t,e,n),p(l.encryptedToc,l.tocHmacDigest,t,e,n)]).then(function(e){var n=e[0],t=e[1];if(n&&t){var r=c("content"),e=c("encrypt-panel"),n=a.createRange().createContextualFragment(n);return r.innerHTML=null,r.appendChild(n),r.style.display=null,e.style.display="none",c("tocToggler")&&c("tocHTML")&&(c("tocToggler").style.display=null,c("tocHTML").innerHTML=t),window.codeGroup&&window.codeGroup(),!0}return!1})}).then(function(e){e?r.setItem("password@"+i,t):(c("encrypt-message").innerHTML="密码错误。",l.hint&&(c("encrypt-message").innerHTML+="<br><small>提示："+l.hint+"</small>"))});var n}));var n}function t(){c("password-submit").addEventListener("click",function(){return n(c("password-input").value)}),c("password-input").addEventListener("keydown",function(e){"Enter"===e.key&&n(c("password-input").value)})}var u="oi.baoshuo.ren_key_salt",d="oi.baoshuo.ren_iv_salt",l=JSON.parse(a.getElementById("encrypt-data").innerText),p=function(e,t,n,r,a){return o.decrypt({name:"AES-CBC",iv:r},n,s(e).buffer).then(function(n){return e=n,o.verify({name:"HMAC",hash:"SHA-256"},a,s(t).buffer,e).then(function(e){return!!e&&(new TextDecoder).decode(n)});var e}).catch(function(e){return!1})},e=new URL(location.href).searchParams.get("password")||r.getItem("password@"+i);e?n(e,!0).then(function(e){e||t()}):t()}(document,window.crypto.subtle||window.crypto.webkitSubtle,localStorage,location.pathname);