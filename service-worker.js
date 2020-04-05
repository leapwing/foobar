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
    "url": "arch/categories/index.html",
    "revision": "554f85a7b9d61b1df49d585762cda4ce"
  },
  {
    "url": "arch/index.html",
    "revision": "c9e36fd95c074cf94e83ecccc2582aac"
  },
  {
    "url": "arch/tags/index.html",
    "revision": "d7886016642cdda67ec85998a35b071b"
  },
  {
    "url": "assets/css/0.styles.893bc35d.css",
    "revision": "99a9e7181476576d0bbe864c96b77e46"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.233079d1.js",
    "revision": "82ddaa68c14acf2ea8488a6935f02078"
  },
  {
    "url": "assets/js/10.adfd4aa9.js",
    "revision": "d58980b90237387a1ddaedbed0e3f188"
  },
  {
    "url": "assets/js/11.60ecd651.js",
    "revision": "b57c3944259f00a5ac978cf19376f8f5"
  },
  {
    "url": "assets/js/12.29c9b15f.js",
    "revision": "a71813ee98f7c92466abba00ef6fbe41"
  },
  {
    "url": "assets/js/13.acf4550f.js",
    "revision": "db8784140ffc66357e5d206376ccc56d"
  },
  {
    "url": "assets/js/14.8ad3f05f.js",
    "revision": "851a628a90e19d6d744b59050a6b5d93"
  },
  {
    "url": "assets/js/15.d9ff820a.js",
    "revision": "656ae751d576b822e8a045547c5fdc76"
  },
  {
    "url": "assets/js/16.f77b70b6.js",
    "revision": "002509f4f3480803868f2ac50bd2c7f2"
  },
  {
    "url": "assets/js/17.f324de3b.js",
    "revision": "2f8ab37c54546289a052acf007e991a2"
  },
  {
    "url": "assets/js/18.b3fd4fad.js",
    "revision": "df6dc2ec2af107a0f81f8f54b985bc80"
  },
  {
    "url": "assets/js/19.93187a23.js",
    "revision": "4622263d10004a4dc8da60770528a95c"
  },
  {
    "url": "assets/js/20.56b81df1.js",
    "revision": "20c5e83d9455c5129301075a6b337761"
  },
  {
    "url": "assets/js/21.39a3ff99.js",
    "revision": "fc2cada4486dfa307065bee35ce56174"
  },
  {
    "url": "assets/js/22.bc7087d3.js",
    "revision": "a10c622ca4408d091fac6ede3e8ae1b5"
  },
  {
    "url": "assets/js/3.df0e9039.js",
    "revision": "205e2845bc32047eb85807e4d97f2f21"
  },
  {
    "url": "assets/js/4.fe02e54a.js",
    "revision": "2e14e86f5663e4702a18d31e11a39953"
  },
  {
    "url": "assets/js/5.de4a0940.js",
    "revision": "2b77dbcf8fb180ba8a6467ce3ae10320"
  },
  {
    "url": "assets/js/6.bfe1bab2.js",
    "revision": "ffa401b471a0ecf3ec9302efe92e461b"
  },
  {
    "url": "assets/js/7.3eb5359f.js",
    "revision": "1e42a2fe44235f614764c4640398ee9c"
  },
  {
    "url": "assets/js/8.f08c19cd.js",
    "revision": "9f2b899bb7d723c822dc1af8582c790b"
  },
  {
    "url": "assets/js/9.09be44b5.js",
    "revision": "a43ace6faffd7da6fa0e34363efc6540"
  },
  {
    "url": "assets/js/app.b4951f3c.js",
    "revision": "2a546564c98c2a8d40bb0f4780ce7f48"
  },
  {
    "url": "index.html",
    "revision": "77b7d3d06cffa3a56836c47e503ff8fa"
  },
  {
    "url": "js_script_load.jpg",
    "revision": "3663e115183632615c51a8cbd318b50a"
  },
  {
    "url": "notes/gatsbyjs_tailwind.html",
    "revision": "f85399ce0fc53069796fa564e74b3ede"
  },
  {
    "url": "notes/git.html",
    "revision": "bdca977b473cecf59092a2cf041a00f6"
  },
  {
    "url": "notes/javascript_base.html",
    "revision": "b8849dc3f732c77293bb13e00a427e21"
  },
  {
    "url": "notes/tailwind.html",
    "revision": "6d83b5e63acdc70619d30d67b624082d"
  },
  {
    "url": "notes/vuepress.html",
    "revision": "b38380f2dce42f256ae2fc44b9d58774"
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
