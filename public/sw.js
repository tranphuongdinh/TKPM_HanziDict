if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),d={module:{uri:n},exports:t,require:r};s[n]=Promise.all(i.map((e=>d[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/IXragA70Z4lgKHxf6ZBCp/_buildManifest.js",revision:"beb5fca73b30c62cb95133b2d05cb520"},{url:"/_next/static/IXragA70Z4lgKHxf6ZBCp/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/IXragA70Z4lgKHxf6ZBCp/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/246-1dd85e652dc2d33f.js",revision:"1dd85e652dc2d33f"},{url:"/_next/static/chunks/295-06f0696bb53a227e.js",revision:"06f0696bb53a227e"},{url:"/_next/static/chunks/313-442a9eab0ecbd2dd.js",revision:"442a9eab0ecbd2dd"},{url:"/_next/static/chunks/412-538ff46e9569ca2e.js",revision:"538ff46e9569ca2e"},{url:"/_next/static/chunks/549-4d9797ec87eb1145.js",revision:"4d9797ec87eb1145"},{url:"/_next/static/chunks/569-e93b2e4d6413f0a4.js",revision:"e93b2e4d6413f0a4"},{url:"/_next/static/chunks/656-330d86467650d0d3.js",revision:"330d86467650d0d3"},{url:"/_next/static/chunks/657-63e8edf9e9198024.js",revision:"63e8edf9e9198024"},{url:"/_next/static/chunks/911-c7d1e38dad89c113.js",revision:"c7d1e38dad89c113"},{url:"/_next/static/chunks/framework-bb5c596eafb42b22.js",revision:"bb5c596eafb42b22"},{url:"/_next/static/chunks/main-dcd289efe82eedeb.js",revision:"dcd289efe82eedeb"},{url:"/_next/static/chunks/pages/404-b9805fb65811e90c.js",revision:"b9805fb65811e90c"},{url:"/_next/static/chunks/pages/_app-7ffe4baeb925cb60.js",revision:"7ffe4baeb925cb60"},{url:"/_next/static/chunks/pages/_error-d419484d69bbcf53.js",revision:"d419484d69bbcf53"},{url:"/_next/static/chunks/pages/about-1592ad8f09e009ab.js",revision:"1592ad8f09e009ab"},{url:"/_next/static/chunks/pages/account-c6e5a6d7ec807969.js",revision:"c6e5a6d7ec807969"},{url:"/_next/static/chunks/pages/characters/%5Bid%5D-8be63b3efd00cd52.js",revision:"8be63b3efd00cd52"},{url:"/_next/static/chunks/pages/characters/not-found-e57e098da8aa690d.js",revision:"e57e098da8aa690d"},{url:"/_next/static/chunks/pages/contribution-2459220b9644076b.js",revision:"2459220b9644076b"},{url:"/_next/static/chunks/pages/index-be64a987b196c918.js",revision:"be64a987b196c918"},{url:"/_next/static/chunks/pages/management-74daf1575fac9365.js",revision:"74daf1575fac9365"},{url:"/_next/static/chunks/pages/writing-26210751b3a57e1f.js",revision:"26210751b3a57e1f"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-42cdea76c8170223.js",revision:"42cdea76c8170223"},{url:"/_next/static/css/048f93238fcb70cb.css",revision:"048f93238fcb70cb"},{url:"/_next/static/css/0c273800daac6a22.css",revision:"0c273800daac6a22"},{url:"/_next/static/css/1c9d6cf25bcc01b3.css",revision:"1c9d6cf25bcc01b3"},{url:"/_next/static/css/2f8ae4bb32ae6bb5.css",revision:"2f8ae4bb32ae6bb5"},{url:"/_next/static/css/3b8c454e25c0620d.css",revision:"3b8c454e25c0620d"},{url:"/_next/static/css/4933fe1f61ee107c.css",revision:"4933fe1f61ee107c"},{url:"/_next/static/css/8e22cd7c871b646f.css",revision:"8e22cd7c871b646f"},{url:"/_next/static/css/98e2013f65dc86bd.css",revision:"98e2013f65dc86bd"},{url:"/_next/static/media/fontawesome-webfont.2b13baa7.eot",revision:"2b13baa7"},{url:"/_next/static/media/fontawesome-webfont.8a7cb27d.ttf",revision:"8a7cb27d"},{url:"/_next/static/media/fontawesome-webfont.cf011583.woff",revision:"cf011583"},{url:"/_next/static/media/fontawesome-webfont.da909aa0.svg",revision:"da909aa0"},{url:"/_next/static/media/fontawesome-webfont.e9955780.woff2",revision:"e9955780"},{url:"/_next/static/media/logocute.429b90f3.png",revision:"79cd7e547decac518a481e8de3c89f99"},{url:"/icon-192x192.png",revision:"fb79f911d13a270c29997901a8ced913"},{url:"/icon-256x256.png",revision:"b2dc63c5ec3b9a9956827a2684e0a5a6"},{url:"/icon-384x384.png",revision:"1c3997ac7d5fe35a85c948daa79433bb"},{url:"/icon-512x512.png",revision:"bbc06a16522876919fbe3ad3881bf010"},{url:"/images/avatar-cute.png",revision:"dfa1994a24b66f02f6ef7199cb3d4015"},{url:"/images/avatar.jpg",revision:"888d4de14ac2931a2d1a97e61c5343cd"},{url:"/images/background.png",revision:"3eb06f6e63545d0d12f8186e20b40db9"},{url:"/images/logocute.png",revision:"79cd7e547decac518a481e8de3c89f99"},{url:"/images/slider-image-1.webp",revision:"8663a3cb3067a60f41f9805bb7995d3a"},{url:"/images/slider-image-2.webp",revision:"a72fa3ef87b412ac0cb5471c383cc6d4"},{url:"/images/slider-image-3.webp",revision:"380a16719415a721734a9d532b757fca"},{url:"/images/slider-image-4.webp",revision:"03e2e0feca43b049a323c657e672f532"},{url:"/images/slider-image-5.webp",revision:"947b143922ddd28398c0751b3e3350ff"},{url:"/images/slider-image-6.webp",revision:"cdb8d8a3266b4dbf5df66359fb31a2ce"},{url:"/images/slider-image-7.webp",revision:"82b75641b5cf07236f34b892fad56b76"},{url:"/images/slider-image-8.webp",revision:"a4ec09f09ca52f7b0900d6b8d901c29d"},{url:"/manifest.json",revision:"f2f002e3e6be480786bd49462521d1d6"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
