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
    "revision": "466efc3a9a13cd989f9fecea700a83e8"
  },
  {
    "url": "arch/categories/index.html",
    "revision": "1e1b62841682ec6b2de65e89b4adb0fa"
  },
  {
    "url": "arch/index.html",
    "revision": "fd0bdff68d719845ccb68c3c4f1cb4b8"
  },
  {
    "url": "arch/tags/index.html",
    "revision": "b9a7cbd3b1245de2d4a24bfe24e071ad"
  },
  {
    "url": "assets/css/0.styles.53851ed2.css",
    "revision": "84cceba8663691cea4459af31a8e4ec7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.83f6c9d1.js",
    "revision": "e42ff7c9790c1ff3195fff491294c013"
  },
  {
    "url": "assets/js/10.6e962275.js",
    "revision": "651a309ecad311a43b96feebfc221d79"
  },
  {
    "url": "assets/js/11.47b1dc19.js",
    "revision": "29786fb2dafabb221c3b679bbfb17e4b"
  },
  {
    "url": "assets/js/12.a5c9fcef.js",
    "revision": "a71813ee98f7c92466abba00ef6fbe41"
  },
  {
    "url": "assets/js/13.a497e0cf.js",
    "revision": "db8784140ffc66357e5d206376ccc56d"
  },
  {
    "url": "assets/js/14.837f11d2.js",
    "revision": "851a628a90e19d6d744b59050a6b5d93"
  },
  {
    "url": "assets/js/15.2b7ff8e0.js",
    "revision": "656ae751d576b822e8a045547c5fdc76"
  },
  {
    "url": "assets/js/16.195af8e8.js",
    "revision": "c6464c51ad4c5bbf3e41b8b367fd3519"
  },
  {
    "url": "assets/js/17.fe78c914.js",
    "revision": "20b53b4a8534a7db06446c77b9e6a703"
  },
  {
    "url": "assets/js/18.7a6c5d80.js",
    "revision": "2ca423d5004f10d61e0011dd582e712e"
  },
  {
    "url": "assets/js/19.68ff020c.js",
    "revision": "882620ddee4f5a5c9435aba7141a8f06"
  },
  {
    "url": "assets/js/3.8276ed36.js",
    "revision": "dbaa0ba866483ff9b4d2d3f90ae38b1e"
  },
  {
    "url": "assets/js/4.e26b16d6.js",
    "revision": "34c345748623e49665bdeeeacabfb7ee"
  },
  {
    "url": "assets/js/5.8a33ff03.js",
    "revision": "a2eee7ef08632b65d6118126b17ca32c"
  },
  {
    "url": "assets/js/6.36392a82.js",
    "revision": "53b7a3174f5b07cdced4a6a02b46ec1e"
  },
  {
    "url": "assets/js/7.916f95bd.js",
    "revision": "060b6962ac75608149d37a6868a6e24f"
  },
  {
    "url": "assets/js/8.a118ee77.js",
    "revision": "6934d38fd7ce44bfc95f11efb5adac50"
  },
  {
    "url": "assets/js/9.c641a5d0.js",
    "revision": "809e3622844ac1f308faeb61541fbf58"
  },
  {
    "url": "assets/js/app.be8be6c2.js",
    "revision": "ae09786f39961f0868ae971bb30cd71f"
  },
  {
    "url": "index.html",
    "revision": "fc4f8fa9aeb0f8775450cdc72cd78bb4"
  },
  {
    "url": "notes/git.html",
    "revision": "3ea4087111364e0354927811d60811e5"
  },
  {
    "url": "notes/tailwind.html",
    "revision": "e555ef8526001da8e7cfab5f63836712"
  },
  {
    "url": "notes/vuepress.html",
    "revision": "793548db87e424da56d143f5159d8051"
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
