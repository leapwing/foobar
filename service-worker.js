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
    "revision": "9327b3ecb567e63e016bc71c5150ca7a"
  },
  {
    "url": "arch/categories/index.html",
    "revision": "c176a926c27d1990f89421323189384c"
  },
  {
    "url": "arch/index.html",
    "revision": "8405aedc129bc9422c63c6d2cecface6"
  },
  {
    "url": "arch/tags/index.html",
    "revision": "4eedcab8da93de58dfc8442b8fc71247"
  },
  {
    "url": "assets/css/0.styles.7e5a5ac8.css",
    "revision": "7a78eb2ad85d350297e9f2ec7263676d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.0e2871d4.js",
    "revision": "471f422acd61129ba68e615b3c95d828"
  },
  {
    "url": "assets/js/10.5a0a4396.js",
    "revision": "6a0d9629c257723f20da5573db114378"
  },
  {
    "url": "assets/js/11.a21bc13d.js",
    "revision": "ece747a916c818fe47c772e6cb2356b4"
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
    "url": "assets/js/17.4e346d0b.js",
    "revision": "0e44ece9efee4000c66c6be17c89150d"
  },
  {
    "url": "assets/js/18.8ba6b52b.js",
    "revision": "d06f1593466f5d466cfc9047dae0e710"
  },
  {
    "url": "assets/js/19.0f0580ed.js",
    "revision": "80bbb1cea50a2dbfdd55f7289752e020"
  },
  {
    "url": "assets/js/20.c25d13a5.js",
    "revision": "ba682089c4e9df7499387f292e81f11f"
  },
  {
    "url": "assets/js/3.25fffafa.js",
    "revision": "5cbfbf32de945c27dcc4dadf84e9cf21"
  },
  {
    "url": "assets/js/4.9b50fe92.js",
    "revision": "5b431fb3f6932f8d2c60223cb70f73db"
  },
  {
    "url": "assets/js/5.03c740d8.js",
    "revision": "3e1d61c45ec5a31a2888bdaadd3a2621"
  },
  {
    "url": "assets/js/6.b9a9cb4e.js",
    "revision": "07d340abc18a0064a555c69131c1221a"
  },
  {
    "url": "assets/js/7.db99624c.js",
    "revision": "add8254e4d57d372d3e42abc6ea74fec"
  },
  {
    "url": "assets/js/8.f8a13aea.js",
    "revision": "c8eec0aa1f9f385773dcf231dd9a2624"
  },
  {
    "url": "assets/js/9.4530e761.js",
    "revision": "8770869eb895ed4bcc63b93583ac67a4"
  },
  {
    "url": "assets/js/app.b95a8a97.js",
    "revision": "486b5807047436c1b526d5f8aab8c6e7"
  },
  {
    "url": "index.html",
    "revision": "62e091f51672b93f24139d4c9327e87b"
  },
  {
    "url": "notes/git.html",
    "revision": "8971d56a552792f52036b30d5f42e527"
  },
  {
    "url": "notes/javascript_base.html",
    "revision": "4b5c9288df5c34c0159a19c3d236ac78"
  },
  {
    "url": "notes/tailwind.html",
    "revision": "51853684f707c3f0f8c4e2df58cc8ea4"
  },
  {
    "url": "notes/vuepress.html",
    "revision": "5edfb7b87bdb3c4e540df4d8a9eb0e08"
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
