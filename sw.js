/* Smart Arrow Tracing App - offline service worker
   Does not change app logic; only caches static files for offline/PWA use. */
const CACHE = 'smart-arrow-tracing-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((res) => {
        const copy = res.clone();
        if (res.ok && event.request.url.startsWith(self.location.origin)) {
          caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        }
        return res;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
