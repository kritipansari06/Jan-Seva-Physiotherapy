const CACHE_NAME = 'jan-seva-cache-v1';

// Install event
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  // Delete old caches
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          })
      );
    })
  );
  self.clients.claim();
});

// Fetch event
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip chrome extensions and data requests
  if (
    event.request.url.includes('chrome-extension') ||
    event.request.url.includes('data:')
  ) {
    return;
  }

  event.respondWith(
    // Try network first, fallback to cache
    fetch(event.request)
      .then((response) => {
        // Don't cache unsuccessful responses
        if (!response || response.status !== 200) {
          return response;
        }

        // Clone and cache successful responses
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      })
      .catch(() => {
        // Network failed, try cache
        return caches.match(event.request).then((response) => {
          if (response) {
            console.log('Serving from cache:', event.request.url);
            return response;
          }

          // Return offline page for HTML requests
          if (event.request.headers.get('accept').includes('text/html')) {
            return new Response(
              'You are offline. Please check your internet connection.',
              {
                status: 503,
                statusText: 'Service Unavailable',
                headers: new Headers({
                  'Content-Type': 'text/html',
                }),
              }
            );
          }

          // Return error for other types
          return new Response('Not available offline', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
              'Content-Type': 'text/plain',
            }),
          });
        });
      })
  );
});