"use strict";var precacheConfig=[["./index.html","9c545a01c65a390c6c363769a9aaa9fc"],["./static/css/main.c6e7d0ba.css","97d7a3ab53ff38622fb156dc919aa47c"],["./static/js/main.0903930e.js","aa6c29b81e2300e703d461fc6842c10d"],["./static/media/fa-brands-400.48461ea4.woff2","48461ea4e797c9774dabb4a0440d2f56"],["./static/media/fa-brands-400.7b464e27.woff","7b464e274bc331f9a765d765359635a5"],["./static/media/fa-brands-400.947b9537.ttf","947b9537bc0fecc8130d48eb753495a1"],["./static/media/fa-brands-400.9b6c8da3.eot","9b6c8da3c489424e2b3e9c9fb6314b37"],["./static/media/fa-brands-400.b5472631.svg","b5472631dbace30d549357ec325b9c62"],["./static/media/fa-regular-400.381af09a.woff","381af09a1366b6c2ae65eac5dd6f0588"],["./static/media/fa-regular-400.73fe7f1e.ttf","73fe7f1effbf382f499831a0a9f18626"],["./static/media/fa-regular-400.7422060c.eot","7422060ca379ee9939d3b687d072acad"],["./static/media/fa-regular-400.949a2b06.woff2","949a2b066ec37f5a384712fc7beaf2f1"],["./static/media/fa-regular-400.b5a61b22.svg","b5a61b229c9c92a6ac21f5b0e3c6e9f1"],["./static/media/fa-solid-900.0079a0ab.ttf","0079a0ab6bec4da7d6e16f2a2e87cd71"],["./static/media/fa-solid-900.14a08198.woff2","14a08198ec7d1eb96d515362293fed36"],["./static/media/fa-solid-900.38508b2e.svg","38508b2e7fac045869a86a15936433f7"],["./static/media/fa-solid-900.70e65a7d.eot","70e65a7d34902f2c350816ecfe2f6492"],["./static/media/fa-solid-900.815694de.woff","815694de1120d6c1e9d1f0895ee81056"],["./static/media/logo-adalab.471b278d.svg","471b278da4c31b13e10f07ce7a1613a4"],["./static/media/panda.6e42b8b3.jpg","6e42b8b3606bc0dae06824ae13bb6451"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="./index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});