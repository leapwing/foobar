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
    "revision": "878df892c7aecbfe2d09f75fcb8cfe65"
  },
  {
    "url": "arch/categories/index.html",
    "revision": "ae0a07fde038c9360f682a22190fe521"
  },
  {
    "url": "arch/index.html",
    "revision": "bdd0edcc83d48d934d2e67e0c5649497"
  },
  {
    "url": "arch/tags/index.html",
    "revision": "4866af12b3b5b1995a7fd38245395c60"
  },
  {
    "url": "assets/css/0.styles.903b4bf5.css",
    "revision": "2a6be479f3e9bf77a21d83db497c5cbc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.fc5ff44d.js",
    "revision": "d81c0c696ab2dad259f50255be3c4edc"
  },
  {
    "url": "assets/js/10.cc9f4cc7.js",
    "revision": "7cdf0ca06a0ed9f4c99249a461dcb2e2"
  },
  {
    "url": "assets/js/11.8e95327c.js",
    "revision": "aad2d307b48f955658e762269cfe2682"
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
    "url": "assets/js/16.0adc8610.js",
    "revision": "e5ee375d4ade43fa7be7a36da43c12f7"
  },
  {
    "url": "assets/js/17.9827686b.js",
    "revision": "2f8ab37c54546289a052acf007e991a2"
  },
  {
    "url": "assets/js/18.97e8e9e4.js",
    "revision": "c98f930bd58cd935b673fbb3b853395f"
  },
  {
    "url": "assets/js/19.1315ae9f.js",
    "revision": "4622263d10004a4dc8da60770528a95c"
  },
  {
    "url": "assets/js/20.fa4e1c6e.js",
    "revision": "76cbbf1b65b529d0d8c4136858bc5cc4"
  },
  {
    "url": "assets/js/21.fa2b3159.js",
    "revision": "fc2cada4486dfa307065bee35ce56174"
  },
  {
    "url": "assets/js/3.4f092156.js",
    "revision": "4e7fdb7b615f692413708f38c344b6aa"
  },
  {
    "url": "assets/js/4.c0425ed9.js",
    "revision": "a8d2865027d5ccf0f61b7fe66d8671c0"
  },
  {
    "url": "assets/js/5.76ad5f85.js",
    "revision": "02f9030aae601458ddb0d5d364a56813"
  },
  {
    "url": "assets/js/6.41e834d9.js",
    "revision": "b50e7bf2812427d1ff4da094bb80c320"
  },
  {
    "url": "assets/js/7.3c87c912.js",
    "revision": "ab9358628930a5bda3671a52d1d3892c"
  },
  {
    "url": "assets/js/8.91945c07.js",
    "revision": "aa4ca20f31cddc3f50965c5a06e998fc"
  },
  {
    "url": "assets/js/9.f9f1b19e.js",
    "revision": "36a4fa57fea6630733186bbe2909f2e5"
  },
  {
    "url": "assets/js/app.a8599eb2.js",
    "revision": "dd6444a79539ddc7240e8ea2c513bb02"
  },
  {
    "url": "index.html",
    "revision": "559da29f892e4d1d1dbb290abd61347f"
  },
  {
    "url": "js_script_load.jpg",
    "revision": "3663e115183632615c51a8cbd318b50a"
  },
  {
    "url": "notes/gatsbyjs_tailwind.html",
    "revision": "b3f1654795c56f0a893c156d97bfdef2"
  },
  {
    "url": "notes/git.html",
    "revision": "8a216f227b4ec88950fea95ccf878fe7"
  },
  {
    "url": "notes/javascript_base.html",
    "revision": "8ed181ce7fb6cc9914f8ed40b3770e40"
  },
  {
    "url": "notes/tailwind.html",
    "revision": "de174a0c2bd5be57c0429070498ec986"
  },
  {
    "url": "notes/vuepress.html",
    "revision": "45ec198081d1016fea81a7cbf5e3e3a1"
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
