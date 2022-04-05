/*! Baoshuo's OI Blog | Build: 6b35545 | Baoshuo ( https://baoshuo.ren ) */
"use strict";(async(o,d,l,c)=>{async function a(e,a){void 0===a&&(a=!1);var t,n=(r=e,await d.subtle.importKey("raw",(new TextEncoder).encode(r),{name:"PBKDF2"},!1,["deriveKey","deriveBits"])),r=(s=n,await d.subtle.deriveKey({name:"PBKDF2",hash:"SHA-256",salt:(new TextEncoder).encode(u).buffer,iterations:1024},s,{name:"HMAC",hash:"SHA-256",length:256},!0,["verify"])),s=(s=n,await d.subtle.deriveKey({name:"PBKDF2",hash:"SHA-256",salt:(new TextEncoder).encode(u).buffer,iterations:1024},s,{name:"AES-CBC",length:256},!0,["decrypt"])),n=(n=n,await d.subtle.deriveBits({name:"PBKDF2",hash:"SHA-256",salt:(new TextEncoder).encode(w).buffer,iterations:512},n,128));if(e.length<=32){setTimeout(()=>window.plausible&&window.plausible("Post: Decrypt",{props:{value:location.pathname+"@"+e+"@"+(a?"auto":"manual"),path:location.pathname,password:e,auto:a}}),0);s=(t=r,await d.subtle.decrypt({name:"AES-CBC",iv:n},s,y(m.encryptedData).buffer).then(async e=>{return!!await h(t,e)&&(new TextDecoder).decode(e)}).catch(e=>!1));if(s){const i=p("content");s=o.createRange().createContextualFragment(s);return i.innerHTML=null,i.appendChild(s),i.style.display=null,p("encrypt-panel").style.display="none",window.codeGroup&&window.codeGroup(),l.setItem("password@"+c,e),!0}}return p("encrypt-message").innerHTML="密码错误。<br><small>提示："+m.hint+"</small>",!1}const p=e=>o.getElementById(e),u="oi.baoshuo.ren_key_salt",w="oi.baoshuo.ren_iv_salt",m=JSON.parse(o.getElementById("encrypt-data").innerText),y=e=>new Uint8Array(e.match(/[\da-f]{2}/gi).map(e=>parseInt(e,16))),h=(e,a)=>d.subtle.verify({name:"HMAC",hash:"SHA-256"},e,y(m.hmacDigest).buffer,a);var e=new URL(location.href).searchParams.get("password")||l.getItem("password@"+c);let t=!1;e&&(t=await a(e,!0)),t||(p("password-submit").addEventListener("click",()=>a(p("password-input").value)),p("password-input").addEventListener("keydown",async e=>{"Enter"===e.key&&await a(p("password-input").value)}))})(document,window.crypto,localStorage,location.pathname);