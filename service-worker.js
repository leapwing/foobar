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
    "revision": "0bb87dc0688096b6fb1245d767b7af36"
  },
  {
    "url": "arch/categories/index.html",
    "revision": "028cbcd9628b26785da987536c983050"
  },
  {
    "url": "arch/index.html",
    "revision": "93037350630a49bebbaba4fb93b23864"
  },
  {
    "url": "arch/tags/index.html",
    "revision": "ed0236d189a223485c8646d02f58b293"
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
    "url": "assets/js/18.07e2df53.js",
    "revision": "cf59bb062fb663298a57afa363befce1"
  },
  {
    "url": "assets/js/19.1315ae9f.js",
    "revision": "4622263d10004a4dc8da60770528a95c"
  },
  {
    "url": "assets/js/20.96f64bfa.js",
    "revision": "88ea5f74f836455252bd81925e8f776f"
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
    "url": "assets/js/app.b8fd7e20.js",
    "revision": "eeb0b83efb5694a8c7c9bcbdace8bd18"
  },
  {
    "url": "index.html",
    "revision": "81930fe855b3373ffbb848a873fcd72e"
  },
  {
    "url": "notes/gatsbyjs_tailwind.html",
    "revision": "3c4404092ec730303780dccddebec40c"
  },
  {
    "url": "notes/git.html",
    "revision": "d02adf8c01bfb6db5bb6d2527307ff00"
  },
  {
    "url": "notes/javascript_base.html",
    "revision": "66b59d2526d154b75bc032cf4cdc6ba5"
  },
  {
    "url": "notes/tailwind.html",
    "revision": "1829f6c6dab1865ccd0bb5129de55619"
  },
  {
    "url": "notes/vuepress.html",
    "revision": "f426fff5a7b0a4e281d6044179a92c9b"
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
