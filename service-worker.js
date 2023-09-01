var cacheName = 'pwaTeste+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',
        './assets/img/barba.png',
        './assets/img/cabelo.png',
        './assets/img/design.png',
        './assets/img/header-gb.png',
        './assets/img/map-image.png',
        './assets/img/map-image2.png',
        './assets/img/navbar-logo.png',
        './assets/img/team/1.jpg',
        './assets/img/team/2.jpg',
        './assets/img/team/3.jpg',
        './assets/img/portfolio/1.png',
        './assets/img/portfolio/2.png',
        './assets/img/portfolio/3.png',
        './assets/img/portfolio/4.png',
        './assets/img/portfolio/5.png',
        './assets/img/portfolio/6.png',
        './assets/img/icons/AppIcons/appstore.png',
        './assets/img/icons/AppIcons/playstore.png',
        './assets/img/about/1.png',
        './assets/img/about/2.png',
        './assets/img/about/3.png',
        './assets/img/about/4.png',
        './assets/img/about/5.png',
        './assets/img/icons/AppIcons/Assets.xcassets/AppIcon.appiconset/_/29.png',
        './assets/img/icons/AppIcons/Assets.xcassets/AppIcon.appiconset/_/40.png',
        './assets/img/icons/AppIcons/Assets.xcassets/AppIcon.appiconset/_/57.png',
        './assets/img/icons/AppIcons/Assets.xcassets/AppIcon.appiconset/_/58.png',
        './assets/img/icons/AppIcons/Assets.xcassets/AppIcon.appiconset/_/60.png',
        './assets/img/icons/AppIcons/Assets.xcassets/AppIcon.appiconset/_/80.png',
        './assets/img/icons/AppIcons/Assets.xcassets/AppIcon.appiconset/_/87.png',
        './assets/img/icons/AppIcons/Assets.xcassets/AppIcon.appiconset/_/114.png',
        './assets/img/icons/AppIcons/Assets.xcassets/AppIcon.appiconset/_/120.png',
        './assets/img/icons/AppIcons/Assets.xcassets/AppIcon.appiconset/_/180.png',
        './assets/img/icons/AppIcons/Assets.xcassets/AppIcon.appiconset/_/1024.png',
        '.assets/img/icons/Applcons/android/mipmap-hdpi/ic_launcher.png',
        'assets/img/icons/Applcons/android/mipmap-mdpi/ic_launcher.png',
        'assets/img/icons/Applcons/android/mipmap-xhdpi/ic_launcher.png',
        'assets/img/icons/Applcons/android/mipmap-xxhdpi/ic_launcher.png',
        'assets/img/icons/Applcons/android/mipmap-xxxhdpi/ic_launcher.png',
        './assets/img/favicon.png.icon',
        './assets/img/',

      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});