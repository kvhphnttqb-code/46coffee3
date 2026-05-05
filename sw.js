self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('coffee-timer').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json'
      ]);
    })
  );
});
