const CACHE_NAME = 'jan-seva-v3';
const RUNTIME_CACHE = 'jan-seva-runtime-v3';

const CORE_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
];

self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Caching core files');
      return cache.addAll(CORE_FILES).catch(() => {
        console.log('[ServiceWorker] Some files could not be cached');
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activating...');
  event.waitUntil(
    caches.keys().then((names) => {
      return Promise.all(
        names.map((name) => {
          if (name !== CACHE_NAME && name !== RUNTIME_CACHE) {
            console.log('[ServiceWorker] Deleting old cache:', name);
            return caches.delete(name);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  if (event.request.url.includes('chrome-extension')) {
    return;
  }
  const url = new URL(event.request.url);
  if (url.pathname.match(/\.(mp4|mov|MP4|MOV)$/)) {
    return; 
  }

  const reqUrl = new URL(event.request.url);

  // Redirect legacy asset paths (e.g. /src/assets/images/...) to public folder (/images/...)
  if (reqUrl.pathname.includes('/src/assets/images/')) {
    const newPath = reqUrl.pathname.replace('/src/assets/images/', '/images/');
    const redirectRequest = new Request(newPath, { method: 'GET', headers: event.request.headers, mode: 'same-origin' });

    event.respondWith(
      fetch(redirectRequest)
        .then((response) => {
          if (response && response.status === 200) {
            caches.open(RUNTIME_CACHE).then((c) => c.put(redirectRequest, response.clone()));
            return response;
          }
          return response;
        })
        .catch(() => {
          return caches.match(redirectRequest).then((cached) => cached || new Response('Offline - Resource not available', { status: 503, statusText: 'Service Unavailable' }));
        })
    );
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (!response || response.status !== 200) {
          return response;
        }

        const cache = event.request.destination === 'image'
          ? RUNTIME_CACHE
          : CACHE_NAME;

        const responseToCache = response.clone();
        caches.open(cache).then((c) => {
          c.put(event.request, responseToCache);
        });

        return response;
      })
      .catch(() => {
        return caches.match(event.request).then((response) => {
          if (response) {
            return response;
          }

          if (event.request.headers.get('accept')?.includes('text/html')) {
            return caches.match('/index.html');
          }

          return new Response('Offline - Resource not available', {
            status: 503,
            statusText: 'Service Unavailable',
          });
        });
      })
  );
});