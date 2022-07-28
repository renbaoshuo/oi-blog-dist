importScripts("https://static.cdn.baoshuo.ren/packages/workbox-cdn@6.5.3/workbox-sw.js");
workbox.setConfig({
    modulePathPrefix: "https://static.cdn.baoshuo.ren/packages/workbox-cdn@6.5.3/"
});
var core = workbox.core, precaching = workbox.precaching, routing = workbox.routing, strategies = workbox.strategies, expiration = workbox.expiration, cacheableResponse = workbox.cacheableResponse, backgroundSync = workbox.backgroundSync;
var CacheFirst = strategies.CacheFirst, NetworkFirst = strategies.NetworkFirst, NetworkOnly = strategies.NetworkOnly, StaleWhileRevalidate = strategies.StaleWhileRevalidate;
var ExpirationPlugin = expiration.ExpirationPlugin;
var CacheableResponsePlugin = cacheableResponse.CacheableResponsePlugin;
var cacheSuffixVersion = "-220521";
core.setCacheNameDetails({
    prefix: "baoshuo-oi-blog",
    suffix: cacheSuffixVersion
});
core.skipWaiting();
core.clientsClaim();
precaching.cleanupOutdatedCaches();
/*
 * Precache
 */ precaching.precacheAndRoute([
    {
        url: "https://cdnjs.baoshuo.ren/ajax/libs/Primer/20.2.2/base.min.css",
        revision: null
    },
    {
        url: "https://cdnjs.baoshuo.ren/ajax/libs/Primer/20.2.2/layout.min.css",
        revision: null
    },
    {
        url: "https://cdnjs.baoshuo.ren/ajax/libs/Primer/20.2.2/utilities.min.css",
        revision: null
    },
    {
        url: "https://cdnjs.baoshuo.ren/ajax/libs/Primer/20.2.2/subhead.min.css",
        revision: null
    },
    {
        url: "https://cdnjs.baoshuo.ren/ajax/libs/Primer/20.2.2/labels.min.css",
        revision: null
    },
    {
        url: "https://cdnjs.baoshuo.ren/ajax/libs/Primer/20.2.2/links.min.css",
        revision: null
    },
    {
        url: "https://cdnjs.baoshuo.ren/ajax/libs/KaTeX/0.16.0/katex.min.css",
        revision: null
    },
    {
        url: "https://cdnjs.baoshuo.ren/ajax/libs/KaTeX/0.16.0/contrib/copy-tex.min.js",
        revision: null
    },
    {
        url: "https://cdnjs.baoshuo.ren/ajax/libs/instant.page/5.1.0/instantpage.min.js",
        revision: null
    }, 
]);
/*
 * Images from SM.MS
 * i.loli.net | s2.loli.net | vip1.loli.net | vip2.loli.net | arina.loli.net | vip1.loli.io | vip2.loli.io | s1.baoshuo.ren | s1.u.sb
 *
 * Method: CacheFirst
 * cacheName: img-cache
 * cacheTime: 30d
 */ routing.registerRoute(/^https?:\/\/(?:(?:i|vip[1-2]|s[1-2])\.loli\.(?:io|net)|arina\.loli\.net|s1\.(?:baoshuo\.ren|u\.sb))/, new CacheFirst({
    cacheName: "img-cache" + cacheSuffixVersion,
    fetchOptions: {
        mode: "cors",
        credentials: "omit"
    },
    plugins: [
        new ExpirationPlugin({
            maxAgeSeconds: 30 * 24 * 60 * 60,
            purgeOnQuotaError: true
        }), 
    ]
}));
/*
 * CDN
 * cdnjs.baoshuo.ren | jsd.baoshuo.ren | static.cdn.baoshuo.ren
 *
 * Method: CacheFirst
 * cacheName: cdn-cache
 * cacheTime: 7d
 */ routing.registerRoute(function(param) {
    var url = param.url;
    return [
        "cdnjs.baoshuo.ren",
        "jsd.baoshuo.ren",
        "static.cdn.baoshuo.ren"
    ].includes(url.hostname);
}, new CacheFirst({
    cacheName: "cdn-cache" + cacheSuffixVersion,
    fetchOptions: {
        mode: "cors",
        credentials: "omit"
    },
    plugins: [
        new ExpirationPlugin({
            maxAgeSeconds: 7 * 24 * 60 * 60,
            purgeOnQuotaError: true
        }), 
    ]
}));
/*
 * xTom Analytics - No Cache
 * stat.xtom.com | stat.u.sb
 *
 * Mathod: networkOnly
 */ routing.registerRoute(/https?:\/\/stat\.(?:xtom\.com|u\.sb)/, new NetworkOnly({
    plugins: [
        new backgroundSync.BackgroundSyncPlugin("Optical_Collect", {
            maxRetentionTime: 24 * 60
        }), 
    ]
}));
/*
 * Others img
 * Method: staleWhileRevalidate
 * cacheName: img-cache
 */ routing.registerRoute(// Cache image files
/.*\.(?:png|jpg|jpeg|svg|gif|webp)/, new StaleWhileRevalidate({
    cacheName: "img-cache" + cacheSuffixVersion
}));
/*
 * Static Assets
 * Method: staleWhileRevalidate
 * cacheName: static-assets-cache
 */ routing.registerRoute(// Cache CSS files
/.*\.(css|js)/, // Use cache but update in the background ASAP
new StaleWhileRevalidate({
    cacheName: "static-assets-cache" + cacheSuffixVersion
}));
/*
 * sw.js - Revalidate every time
 * staleWhileRevalidate
 */ routing.registerRoute("/sw.js", new StaleWhileRevalidate());
/*
 * Default - Serve as it is
 * networkFirst
 */ routing.setDefaultHandler(new NetworkFirst({
    networkTimeoutSeconds: 3
}));
