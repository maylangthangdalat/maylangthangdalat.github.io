'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "72dd478c6f8cf83b24571025e7687a42",
"index.html": "53e963c898c6e83ad9de4a8fc2b940d0",
"/": "53e963c898c6e83ad9de4a8fc2b940d0",
"main.dart.js": "a10f0b9cafdceb08795f8aa2289cab32",
"favicon.png": "831d82a7c419af01310caf029b2c724a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7472327d9ce9efced013676591ee0956",
"mailer.js": "03f987372e255901c39905214be75a24",
".git/config": "e8b63c547b44c8c24ef9a624e2f46765",
".git/objects/68/bae1c30964561055ebe907c86c44c9eeaaaa8b": "2141221674a3f2c9404d449813a5e37a",
".git/objects/68/72bbc55330b30594b34a28406b462023b623aa": "af2c9bca6885b2e289d7c73dafb7bdb3",
".git/objects/94/9d695d2621a0675c6cf04c7f57120da86fc504": "398de6f9e5c1f4a39765f898aa55fec9",
".git/objects/5f/ff10eeaed5b858a191f3c3c6418c5ab02aa53f": "a1f35f266534d9f8c44d2197f19ad4fd",
".git/objects/b5/82a2ad84ff8a37d501dcd3888af88c2b6a9446": "06002b6aa94de361e11e572b28964d85",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b4/1090090ae31cf896131e82dc6280b31946a37c": "146250d88d07f4b388e9301a7d415e72",
".git/objects/e5/87bd129990f08dd3d9ebd7def87a451674a7ea": "73ce8c4cced6bce31320c5fb6fcd1eab",
".git/objects/e2/9fb7f29879ed236db12e8cf9220edb1b881000": "73f2b8a2af94c404aed917f01e414164",
".git/objects/f4/ac595900692d6975ca1678afe1f728d57f396b": "6949b2008ea18e44311a46d3dc061379",
".git/objects/ee/7a910f21ac5f95fdf30ca2952e3bb426794d00": "a989f96a1f8e8988b326c252b5cfaa2c",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/42/3f18a56bad4babaec70725d5a970fe90521973": "28b33886bc32075f7b9930ce68e1e4fd",
".git/objects/80/ac10bc202f596be54bffb15d465e616f658196": "ae52b462035ef97211fee90cf80c5818",
".git/objects/8f/3216b85e64044d164fb4c09ecf9be4bd51e1f6": "5814ecf49fc0b2e0f8ef9ac0930c0469",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/72/0746b32c826acd5cb97c9634d3892af1469114": "8171d4304fdd0620bb4baa71faab33d1",
".git/objects/2f/31826ef3228bc60f4109a88cbf79b092286e37": "40f7078354fbc3db0f66c4ceadc049ed",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/eae2df142fe8b3b34501430f46b1e1c1074419": "4ac606bf911a1a85b0f55341bbbc3697",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/31/1c74485f0c16b4c8221a9f80762a0b3429e78c": "25af41ec82a4260312165447f2db9ec4",
".git/objects/37/db048888cb6cb1892b539f57b63ff1ba345144": "8007cf0c69705bb9e82cb0337c4f0019",
".git/objects/6d/5d0ad1412ce68f420cbe543a7f7df705778e4b": "778e70e8393902b1cd50e6dd61f1a1db",
".git/objects/01/449e20305af71fdbc2111d9ed43e1d7dd439b7": "2dd73e70724710ace7051e0f590eb98a",
".git/objects/55/52065e26a794dcaa49c39e8222e118abecc187": "5e772d82e758fdcbf98648e57e4bcc69",
".git/objects/d3/6df165525d56fa9916fa3e7bcf2fa4fb1e454e": "839dfd7afebc644fe3b689f9f8fb25ba",
".git/objects/d3/d83eae914370fef5d14af89a81ac7ed185fdec": "dee9e79c6b25d29085279c2a5152a2f6",
".git/objects/a0/8eeb4ac4b83981e300c52675bfc77f69bd90e0": "52ee761af2faf56b2e5d421706c78bdd",
".git/objects/d2/c6fa2874ebf5f6f85f94afd45cb945f2a48397": "179c7e9c1fe17da4fe5baa9081b69387",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/af0ae81a720d403f6b460419b3fc530c11dd32": "91294b6001ed7cc377722fc7c74c3ecd",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b0/a6652f88e9a0ea6fc5857a804205ec5c9b6b5d": "6c30045df180c446f48cbb1b998face1",
".git/objects/cc/4427ae56fe2f8fdd51cc8d2edf078c2674e1fc": "d8e9a5a345c162b19b094edf9bbd2e01",
".git/objects/e6/7f9a075d62568d8a20cb8c17a05d4c53b2988d": "aa678fb0195f4c11ee558a579f533201",
".git/objects/e8/06cc985970397f473f146a0d8edd6944b1efc6": "94a4790dc9fe204f40a26c5fd8e074f4",
".git/objects/ff/3400d494365bb717dc94d4f67add1ef02d6ac8": "e1db6923ece28dc97b2624885ac5259d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/fd5718cb9a0c0702e75ce4441cfb6f04016b75": "05b0764c9a70aaf89c8cfdef823a55de",
".git/objects/77/d10b6db93a27b73a01f0ec9ffdadcc6ddba5dd": "5364c0cf01841b7e2c2e69a8aa54be71",
".git/objects/48/df126ff6e982972ada408dd38863b0a8eec8c7": "b85b179f36f686d1a69e85843a62b826",
".git/objects/78/09d359305d3b67895864214e2271fafe14a269": "70049a75bad9e48581387a79e4707aaa",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7e62ab047eafaab706770fe5383ef80f",
".git/logs/refs/heads/master": "7e62ab047eafaab706770fe5383ef80f",
".git/logs/refs/remotes/origin/master": "841567837ea912166825dd45a781aff4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/refs/heads/master": "36620fca997e933cd11f4544331ea9e8",
".git/refs/remotes/origin/master": "36620fca997e933cd11f4544331ea9e8",
".git/index": "76849ba8e6efcc3c7b5299148e0cd9ed",
".git/COMMIT_EDITMSG": "89e0ee1957ca6cbb732e6247230ca1df",
"assets/AssetManifest.json": "890e7fd4baad3b73b812dda8d7b2ff18",
"assets/NOTICES": "6cb11e2907a8c52ecdc5f60e243881a3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/logo_bot_l.png": "a49c2ede62d380a7a4000dfca4898799",
"assets/assets/images/logo_bot.png": "84eea394d7df4375a1ca91a94b916d0f",
"assets/assets/images/index.png": "b7b9e6e6f967ebc3a6dd29730a43d7b9",
"assets/assets/images/logo_top_web.png": "2f0c0c937ef1e94a78104e27d7e18888",
"assets/assets/images/logo_top.png": "dbff15b57c575041047441a928e73a35",
"favicon_old.png": "5dcef449791fa27946b3d35ad8803796"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
