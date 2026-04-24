const CACHE_NAME = 'match4chips-v1';
const ASSETS = [
  './',
  './index.html',
  './download.html',
  './style.css',
  './script.js',
  './bgscript.js',
  './logo.png',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap',
  'https://code.jquery.com/jquery-3.7.1.js'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activate Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
});

// Fetch Assets
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
