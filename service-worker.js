/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4e315f0f282adb200491ddf01ce3e201"
  },
  {
    "url": "arch/categories/index.html",
    "revision": "5852d51fb5ca98d84fd3539ec5d5e1fd"
  },
  {
    "url": "arch/index.html",
    "revision": "d767c28e005cc379acd827314c36915f"
  },
  {
    "url": "arch/tags/index.html",
    "revision": "080fc2b2ae6c9f69c5f92281622b8ef1"
  },
  {
    "url": "assets/css/0.styles.b144cfa2.css",
    "revision": "b785ea6e02960dc0f8403a9d870fb8f8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.95f0c4e0.js",
    "revision": "ab8b0a4cc16c61a80a8fe1b4b759e490"
  },
  {
    "url": "assets/js/10.4c4c6981.js",
    "revision": "2ea25e1a985c85737b65464a7977c246"
  },
  {
    "url": "assets/js/11.f0ada945.js",
    "revision": "ed8c267a85d10f9713a149d3ad8b8389"
  },
  {
    "url": "assets/js/12.41d78ff3.js",
    "revision": "6c6fa757b0ba49767eb597c4bbcc81bf"
  },
  {
    "url": "assets/js/13.69eca858.js",
    "revision": "6ec33881eca48148932acd78d0ae3326"
  },
  {
    "url": "assets/js/14.2db73523.js",
    "revision": "fc4107fc57163b83c0bc7e20a47cb380"
  },
  {
    "url": "assets/js/15.94ce3273.js",
    "revision": "74bce09d0c18f22a308bd1db64471989"
  },
  {
    "url": "assets/js/16.c32ce9a7.js",
    "revision": "e32c8ee0ed7242c37b0cd421f30563d2"
  },
  {
    "url": "assets/js/17.f46020c1.js",
    "revision": "cf7cb28a9797253f1d86fb27374e628a"
  },
  {
    "url": "assets/js/18.fd25ce06.js",
    "revision": "b529920a2ecc29d05cd30a99543f1afb"
  },
  {
    "url": "assets/js/3.9c52e84e.js",
    "revision": "12d1c0e25d69422e5b4abb1cb5c68fa3"
  },
  {
    "url": "assets/js/4.91c446c5.js",
    "revision": "71e12cbcdc021ad75f2afb55435e4bf2"
  },
  {
    "url": "assets/js/5.4fdb6f15.js",
    "revision": "dfe8aa58401717a1f53f537ac9fb470b"
  },
  {
    "url": "assets/js/6.e0cae711.js",
    "revision": "250120e55001e8e7cbb3ef353ff555a1"
  },
  {
    "url": "assets/js/7.2a49468b.js",
    "revision": "ee66744ff4257c14bd9b38221a9907d9"
  },
  {
    "url": "assets/js/8.0c89f9cc.js",
    "revision": "1edbbfcc162ca59ac06b2817db321e2b"
  },
  {
    "url": "assets/js/9.ba8229bc.js",
    "revision": "23021f7f13e7289b090372094c367637"
  },
  {
    "url": "assets/js/app.a4e6a25b.js",
    "revision": "499f46415b1972898d682a03c9d051e3"
  },
  {
    "url": "index.html",
    "revision": "102a376d7852c271c21b4c19b6dafebd"
  },
  {
    "url": "notes/git.html",
    "revision": "80b8cb23315f47fd6605b95a4dc74563"
  },
  {
    "url": "notes/tailwind.html",
    "revision": "bb0dd591330d55305cc00b6d9f02908a"
  },
  {
    "url": "notes/vuepress.html",
    "revision": "214196685be40a16527bb074d91b3725"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
