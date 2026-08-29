const CACHE='poprus-v1';const ASSETS=['./','./index.html','./style.css','./game.js','./assets/hero-casual.jpg','./assets/hero-sunglasses.jpg','./assets/hero-dog.jpg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));