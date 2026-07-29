const CACHE_NAME = 'expenses-app-v1';
const ASSETS_TO_CACHE = [
  './calculator.html',
  './manifest.json',
  'https://cdn-icons-png.flaticon.com/512/25/25694.png'
];

// تثبيت الملفات في الكاش
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// قراءة الملفات من الكاش عند عدم وجود إنترنت
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
