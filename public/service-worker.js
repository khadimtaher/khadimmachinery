const CACHE_NAME = "khadim-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/url.png" // aapka icon
];

// Install - cache static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all(
        urlsToCache.map((url) =>
          fetch(url)
            .then((res) => {
              if (!res.ok) throw new Error(`Failed to fetch ${url}`);
              return cache.put(url, res);
            })
            .catch((err) => console.warn("Skipping cache for", url, err))
        )
      )
    )
  );
  self.skipWaiting();
});


// Activate - remove old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch - serve cached assets only
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return; // skip POST / non-GET

  event.respondWith(
    caches.match(event.request).then((cachedRes) => {
      return cachedRes || fetch(event.request);
    })
  );
});
