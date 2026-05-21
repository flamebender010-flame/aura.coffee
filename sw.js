const cacheName = 'aura-coffee-v1';
const assets = [
  './',
  './index.html',
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&family=Playfair+Display:ital,wght@0,700;1,700&display=swap&subset=cyrillic,latin-ext'
];

// Kurulum ve Cache'leme
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// Veri Зekme Stratejisi
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});