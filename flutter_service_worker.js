'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "59446d33e9107cefdca1249a5ecde246",
"assets/assets/Alkebra.png": "de1d0b744ddad6193984d4adace2a47a",
"assets/assets/background.png": "9f994057f3e75969d4c0f4a96d697b5c",
"assets/assets/bgimgdark.png": "67f2ccdd9e7d26576a4e010959468c65",
"assets/assets/bothmf.png": "d905482290fe4534211f55316b8f6338",
"assets/assets/car_1_50.png": "f0ba93174ec68c8265a976430c91c62b",
"assets/assets/eye-test.png": "72f5f04c7d984d2f2071df5be251cb81",
"assets/assets/eye-test1.png": "a92934cdc823d4347f241034d8e26ffe",
"assets/assets/female.png": "f79f16b4ace465c38ccd3c12a5cd9513",
"assets/assets/flat1.png": "47810f87828e5a07963f5402a9cdb68c",
"assets/assets/flat2.png": "d24a5f055d107fc413c4e1c6c6859e03",
"assets/assets/flat3.png": "c20027e8e0ff3eb8aa2312e1f4025517",
"assets/assets/fonts/Poppins-Light.ttf": "2a47a29ceb33c966c8d79f8d5a5ea448",
"assets/assets/fonts/Poppins-Medium.ttf": "ba95810b56f476990ca71d15139d5111",
"assets/assets/fonts/Poppins-Regular.ttf": "41e8dead03fb979ecc23b8dfb0fef627",
"assets/assets/fonts/Poppins-SemiBold.ttf": "342ba3d8ac29ac8c38d7cef8efbf2dc9",
"assets/assets/fonts/Poppins-Thin.ttf": "c0fafa8397437c95848724aed686d63b",
"assets/assets/icons/accountIcon.png": "4c49cdca4c55144a5edab942fce5533b",
"assets/assets/icons/adsIcon.png": "5a1d0de4d6efafd0c84ae51b61fc3eee",
"assets/assets/icons/augmented.png": "b2372f05bde58ca67931701e876d1b6d",
"assets/assets/icons/cameraIcon.png": "3f08d659ec6cc87acbff87725b197f00",
"assets/assets/icons/category_icon.png": "90c2672cfb48dad934faa33f88fdb3d0",
"assets/assets/icons/chatIcon.png": "2479017c0715778168805937d08267a6",
"assets/assets/icons/comment.png": "5f63c992fcc261d687ca63fba15a5a18",
"assets/assets/icons/comment1.png": "70ba36e05083586d58e39c93d01389b8",
"assets/assets/icons/homeIcon.png": "ec7883b00a4e816e42c5d2adae4c50c2",
"assets/assets/icons/location_logo.png": "5a929bc3a0edd6851249d4428c1dcb82",
"assets/assets/icons/photoicon.png": "c74b9286c05fe8a94cad14f66ec6c248",
"assets/assets/icons/steering-wheel.png": "0a2efa8313158e58886b5747342f30b2",
"assets/assets/icons/telephone-call.png": "945c6c14c93e6b89d3075a78a01ad663",
"assets/assets/icons/telephone-call1.png": "107ae1da803dd13c0b1c524817269e12",
"assets/assets/icons/whatsapp.png": "602c2336856702b3934b94f2336bf9d8",
"assets/assets/icons/whatsapp1.png": "40a47f549481cb5bf5b1f546cd59afe5",
"assets/assets/location_icon.png": "0c1f2b9acca9ffe8c17f66140d97d4d8",
"assets/assets/location_icon1.png": "899aaf88498cb99bd224d92504bcc88e",
"assets/assets/location_icon2.png": "0d48cba0f776de12a71079cd6d5913eb",
"assets/assets/logo-qatar.jpg": "d3ae711a6d2932c44c5b484d2ce462e7",
"assets/assets/lottie/close1.json": "ff6ec5c70022488eff8be7a213b8b493",
"assets/assets/lottie/directions.json": "bd7cf7bd61b818b78db2be3471597fb6",
"assets/assets/lottie/menu1.json": "32e88cb1f70657685894135e5a323f8e",
"assets/assets/lottie/nomessage.json": "648b6abbc68c3fe14b4132ba56d64cb9",
"assets/assets/lottie/nomessage1.json": "037d76559e3a3cd9bf494314728102d9",
"assets/assets/male.png": "b9523a23150a6cac61bb33de542f05e0",
"assets/assets/marker.bmp": "999df67c34f82b316582226bf104130b",
"assets/assets/marker.png": "a2f620d3f54c2fbd4892434369b21014",
"assets/assets/marker2x.png": "1d335db5e7217ae5ce2d9e17434aa116",
"assets/assets/marker3x.png": "ea5b6efe777d1f9e94eb5205fe96a1ac",
"assets/assets/notick.png": "4c271d89e5cba2d4279185818cfbd16d",
"assets/assets/qatar-logo.jpg": "fda6d9531e2c4ca5167471dc305582b6",
"assets/assets/sedan.png": "4d3394522caeed1e82bdcd95ff84cb6a",
"assets/assets/splashImg1.png": "269d56bb3bc55d15ba89d86bb3de9366",
"assets/assets/splashImgWhole.png": "0a618dc3397b96d15731d4f60f3190bb",
"assets/assets/tick.png": "113b54f3095d95d6bcbe1b999bbd1bbf",
"assets/assets/traffic.png": "f46a7b3202e2dfd4398245e9aa488b53",
"assets/assets/wholesale.png": "d7d68d0f65bcb0279f57cc15c48ac472",
"assets/FontManifest.json": "b978e8ccd0aa17c999d3d7bf5b0fa579",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/lib/languages/ar.json": "a6e818ec3d650e2c0810fa4144ae56c8",
"assets/lib/languages/en.json": "c229828ac73fefbcc9aecef8337812f6",
"assets/NOTICES": "f965940e40c84198ac438ef2f5df1f2e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d950032eba0f7001ca250892e68af082",
"/": "d950032eba0f7001ca250892e68af082",
"main.dart.js": "ce68f6d29f636c3f8f7a93d0c9650230",
"manifest.json": "4f706363d74075cde86cc1bcabe7d985",
"version.json": "c1476e8de86ae7e658c729e889c08851"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
