// we don't actually need a service worker for this SPA
// but it is required by the PWA standard

self.addEventListener('install', (event) => {});

self.addEventListener('activate', (event) => {});

self.addEventListener('fetch', (event) => {});
