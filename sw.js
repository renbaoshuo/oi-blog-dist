/*! Baoshuo's OI Blog | Build: 0494695 | Baoshuo ( https://baoshuo.ren ) */
"use strict";importScripts("/lib/workbox/workbox-sw.js"),workbox.setConfig({modulePathPrefix:"/lib/workbox/"});const{core,precaching,routing,strategies,expiration,cacheableResponse,backgroundSync}=workbox,{CacheFirst,NetworkFirst,NetworkOnly,StaleWhileRevalidate}=strategies,ExpirationPlugin=expiration["ExpirationPlugin"],CacheableResponsePlugin=cacheableResponse["CacheableResponsePlugin"],cacheSuffixVersion="-220115";core.setCacheNameDetails({prefix:"baoshuo-oi-blog",suffix:cacheSuffixVersion}),core.skipWaiting(),core.clientsClaim(),precaching.cleanupOutdatedCaches(),routing.registerRoute(/^https?:\/\/(?:(?:i|vip[1-2]|s[1-2])\.loli\.(?:io|net)|arina\.loli\.net|s1\.(?:baoshuo\.ren|u\.sb))/,new CacheFirst({cacheName:"img-cache"+cacheSuffixVersion,fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new ExpirationPlugin({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),routing.registerRoute(/https?:\/\/stat\.(?:xtom\.com|u\.sb)/,new NetworkOnly({plugins:[new backgroundSync.BackgroundSyncPlugin("Optical_Collect",{maxRetentionTime:1440})]})),routing.registerRoute(/^https?:\/\/friends\.baoshuo\.ren(.*)(png|jpg|jpeg|svg|gif)/,new StaleWhileRevalidate({cacheName:"img-cache"+cacheSuffixVersion,fetchOptions:{mode:"cors",credentials:"omit"}})),routing.registerRoute(/^https?:\/\/friends\.baoshuo\.ren\/links\.json/,new StaleWhileRevalidate),routing.registerRoute(/.*\.(?:png|jpg|jpeg|svg|gif|webp)/,new StaleWhileRevalidate({cacheName:"img-cache"+cacheSuffixVersion})),routing.registerRoute(/.*\.(css|js)/,new StaleWhileRevalidate({cacheName:"static-assets-cache"+cacheSuffixVersion})),routing.registerRoute("/sw.js",new StaleWhileRevalidate),routing.setDefaultHandler(new NetworkFirst({networkTimeoutSeconds:3}));