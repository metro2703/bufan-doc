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
    "revision": "e3be1e1969901a41339e356368d11125"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.4fc22246.css",
    "revision": "18a2b40cf9efb7b986c1e03eab3be399"
  },
  {
    "url": "assets/img/alert_ie.29610ef6.png",
    "revision": "29610ef6e8f94f05c503e0178f76ca13"
  },
  {
    "url": "assets/img/alert.c9987207.gif",
    "revision": "c99872074396e625445880535c841073"
  },
  {
    "url": "assets/img/assic.d1c1e9fe.jpg",
    "revision": "d1c1e9fe2a613e4002a43ac950aac1f4"
  },
  {
    "url": "assets/img/baidu.338265f2.png",
    "revision": "338265f24d93df932f3972ebec3fbfa9"
  },
  {
    "url": "assets/img/bf.b6eae9c3.jpg",
    "revision": "b6eae9c3213aace0f446209fab76c41e"
  },
  {
    "url": "assets/img/bianliang.28aef8c2.png",
    "revision": "28aef8c2e335f94fce334205b3b6bf08"
  },
  {
    "url": "assets/img/canshu.f69fc363.png",
    "revision": "f69fc363c0271e8790e9ce1e7651a13d"
  },
  {
    "url": "assets/img/canshu2.229980d9.png",
    "revision": "229980d9d43b0c21cac8e39296ce515c"
  },
  {
    "url": "assets/img/cj.366a9a89.png",
    "revision": "366a9a89fba8b8fc48f64b2cd92ba0d7"
  },
  {
    "url": "assets/img/code-style.4e1bf55c.svg",
    "revision": "4e1bf55c1445c7807f63326fb6b02174"
  },
  {
    "url": "assets/img/console.3ce37ae3.gif",
    "revision": "3ce37ae3650a5099fa9a0825b6b7e54d"
  },
  {
    "url": "assets/img/date.bde9c2fb.png",
    "revision": "bde9c2fb7de18855bd56f1096252723c"
  },
  {
    "url": "assets/img/dom.0ed3cfe2.png",
    "revision": "0ed3cfe29904ec41ecad4315d7072e38"
  },
  {
    "url": "assets/img/dom1.96b01af9.png",
    "revision": "96b01af9a453ccc896db8f0b5f419117"
  },
  {
    "url": "assets/img/dom2.f94d591a.png",
    "revision": "f94d591ab3d7aa82b352378f96aad7ac"
  },
  {
    "url": "assets/img/family-delete-refs.f63e85b0.svg",
    "revision": "f63e85b0fbf75211fbd4f268b60e8a9b"
  },
  {
    "url": "assets/img/family-no-family.476baf7a.svg",
    "revision": "476baf7a8e29c02a4cc6a1680cfb73ab"
  },
  {
    "url": "assets/img/family-no-father-2.10cde306.svg",
    "revision": "10cde30632d2c6a7b6bb0a80ab11f209"
  },
  {
    "url": "assets/img/family-no-father.2d4788a7.svg",
    "revision": "2d4788a7f9572e86c5d784ec627064b9"
  },
  {
    "url": "assets/img/family.da067c44.svg",
    "revision": "da067c44faa1c18273bfae85db15cbce"
  },
  {
    "url": "assets/img/fn.20094426.png",
    "revision": "200944266ebc7e91659ac8e993a4470c"
  },
  {
    "url": "assets/img/for.dc69de96.png",
    "revision": "dc69de961a078699bd1a4ed656c7bd6e"
  },
  {
    "url": "assets/img/garbage-collection-1.228589bf.svg",
    "revision": "228589bf8a1740556d9b91a4ed79d9bd"
  },
  {
    "url": "assets/img/garbage-collection-2.4b90fcfa.svg",
    "revision": "4b90fcfa0b487eca1faf70101c53a6fa"
  },
  {
    "url": "assets/img/garbage-collection-3.6661c335.svg",
    "revision": "6661c335b11fb7d91c44425129ec6499"
  },
  {
    "url": "assets/img/garbage-collection-4.df635e9e.svg",
    "revision": "df635e9ea4cfa855c5164571aab890c5"
  },
  {
    "url": "assets/img/garbage-collection-5.22fb9c67.svg",
    "revision": "22fb9c67b071b7042a24887a8386c20e"
  },
  {
    "url": "assets/img/Hbuild.7088efbc.jpg",
    "revision": "7088efbcf3702c661c8f383c4acb7d39"
  },
  {
    "url": "assets/img/if.94ec5021.png",
    "revision": "94ec50210e49ab32406f7715128b2730"
  },
  {
    "url": "assets/img/inner-1.fc59321c.png",
    "revision": "fc59321c3929332afedc6675f730c318"
  },
  {
    "url": "assets/img/inner.c8c688da.png",
    "revision": "c8c688daf6303c5604b9f85825e83725"
  },
  {
    "url": "assets/img/jiayou.fe07cf27.png",
    "revision": "fe07cf2788d7423b2f546e274ea88d31"
  },
  {
    "url": "assets/img/memory-user-john-admin.b8d46412.svg",
    "revision": "b8d464125ae8430bd0d21166108b62c2"
  },
  {
    "url": "assets/img/memory-user-john-lost.fda8f4fb.svg",
    "revision": "fda8f4fb42d0f679ab382258fb30cb18"
  },
  {
    "url": "assets/img/memory-user-john.9c3475ef.svg",
    "revision": "9c3475efed9da20d22fcfb8a91cd6584"
  },
  {
    "url": "assets/img/picpik.03a1e4db.png",
    "revision": "03a1e4db5c456b3beac2a3f6d70e9146"
  },
  {
    "url": "assets/img/pow.f3f05a45.svg",
    "revision": "f3f05a45a09ec67a6441e0313a48899c"
  },
  {
    "url": "assets/img/prompt.7d9b038e.gif",
    "revision": "7d9b038e2a277df222c0efaac4ae15df"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/sublime.c28c8377.jpg",
    "revision": "c28c83779cec0e1d16986c8c2bd38eab"
  },
  {
    "url": "assets/img/tl1.afa8ad10.png",
    "revision": "afa8ad1004224aebe34037233b690d14"
  },
  {
    "url": "assets/img/tl2.6258a231.png",
    "revision": "6258a231895515c07bb375503a16076a"
  },
  {
    "url": "assets/img/ts.af1fe9b9.png",
    "revision": "af1fe9b90215ea0b92844ee6a497144c"
  },
  {
    "url": "assets/img/ts1.7ef3f24d.png",
    "revision": "7ef3f24dc30d2a07ad0db4f54b50b665"
  },
  {
    "url": "assets/img/ts2.02678020.png",
    "revision": "026780202320b7feb8dc0939cb402c72"
  },
  {
    "url": "assets/img/ts3.e40782d7.png",
    "revision": "e40782d7e5c8f091857edcb5761daa0e"
  },
  {
    "url": "assets/img/undefined-err.de2d5c8c.png",
    "revision": "de2d5c8c7a5a65f4fe2ae6fdb61df0ba"
  },
  {
    "url": "assets/img/VScode.1ffe38b9.jpg",
    "revision": "1ffe38b96152415436edf7f852a444d8"
  },
  {
    "url": "assets/js/10.3b8a5562.js",
    "revision": "3d08828d693ad27df2c96bff1bb032f1"
  },
  {
    "url": "assets/js/100.4ba68262.js",
    "revision": "c9e82b5f0c2ae10dc729ce0da654b09d"
  },
  {
    "url": "assets/js/101.6db92bf8.js",
    "revision": "0ed89690c65c00cde7b2395880bec0a5"
  },
  {
    "url": "assets/js/102.01d55fe2.js",
    "revision": "8c331dc1e424bcb3e6d95d9b0b973ba4"
  },
  {
    "url": "assets/js/103.4104b1e2.js",
    "revision": "a6f51703fa93d98b470d8d489919f3db"
  },
  {
    "url": "assets/js/104.af35539f.js",
    "revision": "704d82b8e22d5164cd7b51abf787f8a9"
  },
  {
    "url": "assets/js/105.64f144d2.js",
    "revision": "e33ceaab0d16d585b05af658b5cea333"
  },
  {
    "url": "assets/js/106.1ad49cc0.js",
    "revision": "fd2df4095ca7c43fc875f0219c5c48f1"
  },
  {
    "url": "assets/js/107.b3243d38.js",
    "revision": "5e8ac35285dad240ece4859e36c58811"
  },
  {
    "url": "assets/js/108.e4f06cdf.js",
    "revision": "2140a56e9f656ca5796deeb65e8192f8"
  },
  {
    "url": "assets/js/109.f82c6f4f.js",
    "revision": "73b716b85455038e8a41d03893474cd3"
  },
  {
    "url": "assets/js/11.dabd9edf.js",
    "revision": "4ab9a98272c6261de406030b0ec369de"
  },
  {
    "url": "assets/js/110.43ef8a19.js",
    "revision": "1d75537d519c2fef0c41d48c9345e4f3"
  },
  {
    "url": "assets/js/111.8d21dabd.js",
    "revision": "68f8bcd6471fd674886ccb768ebea0c2"
  },
  {
    "url": "assets/js/112.97d55372.js",
    "revision": "7002e72ef3560e508ae7bdea84daaadc"
  },
  {
    "url": "assets/js/113.17be5afc.js",
    "revision": "1466311415256a1ca357e8f4030a9518"
  },
  {
    "url": "assets/js/114.7c7c0031.js",
    "revision": "7db899ff306f28836969f6631ba0d626"
  },
  {
    "url": "assets/js/115.6191c96c.js",
    "revision": "f98001ca5bae139860a5a2d5a3a365ec"
  },
  {
    "url": "assets/js/116.f8406fce.js",
    "revision": "9e20878689e8022173d6fe99f75358e1"
  },
  {
    "url": "assets/js/117.7e6ced5f.js",
    "revision": "c50c88717984cdd15f651afb24c16d2a"
  },
  {
    "url": "assets/js/118.95f2b2c6.js",
    "revision": "abc1e8dd21bbad6f810b11bdbad29058"
  },
  {
    "url": "assets/js/119.656fb4a6.js",
    "revision": "9cb9407cf3ef9aa82a8de8e1d7b9f398"
  },
  {
    "url": "assets/js/12.28f15829.js",
    "revision": "6a9e705332f9af6b0a4e3a6a5cef58fb"
  },
  {
    "url": "assets/js/120.884f6058.js",
    "revision": "6ad41d9caecd8be0acea3564efd2cf8b"
  },
  {
    "url": "assets/js/121.1ea98fcd.js",
    "revision": "fc5ad37afb90c9d6aea64caafa0725d3"
  },
  {
    "url": "assets/js/122.ff3c9d25.js",
    "revision": "b61bbd673616892cedf45f5da1f04a68"
  },
  {
    "url": "assets/js/123.2d0a0879.js",
    "revision": "469d16d9d7b42983bb125ae8364c6186"
  },
  {
    "url": "assets/js/124.dbee8ca1.js",
    "revision": "422ae31bfa57c4969dbfdd2294c2335f"
  },
  {
    "url": "assets/js/125.fe02abe6.js",
    "revision": "f73e71f16ce2c3133b047b575e377c77"
  },
  {
    "url": "assets/js/126.ea7f7bb5.js",
    "revision": "acd32b3e112c326897f41c9a414eac10"
  },
  {
    "url": "assets/js/127.606c2de1.js",
    "revision": "68af575d786c0b1df345745b1a367a56"
  },
  {
    "url": "assets/js/128.0f2b467b.js",
    "revision": "252d2bec1e33d8291935ce4bcc156554"
  },
  {
    "url": "assets/js/129.97cbaeca.js",
    "revision": "2f6fb635c69124096e8e41edf13bc786"
  },
  {
    "url": "assets/js/13.83be0207.js",
    "revision": "af92f4e561781e706eda1b14f70d029f"
  },
  {
    "url": "assets/js/14.618a24b7.js",
    "revision": "c0914ac020c37f0ca45ef7d01e24ab9b"
  },
  {
    "url": "assets/js/15.671b0072.js",
    "revision": "1500cc0a2ffa6409d6f63fa08218f14e"
  },
  {
    "url": "assets/js/16.6425c53e.js",
    "revision": "803d96320cd0c5d2e2b3d952fff9b90b"
  },
  {
    "url": "assets/js/17.f748524f.js",
    "revision": "c218f75b10eb651b050c86813f703de8"
  },
  {
    "url": "assets/js/18.dae45be7.js",
    "revision": "6cd470fcf321f9357fbbbbd2d411bfdd"
  },
  {
    "url": "assets/js/19.a61fe4f0.js",
    "revision": "490f6c51ab16a15ace1f8d3c1bcc0f9f"
  },
  {
    "url": "assets/js/20.80399a10.js",
    "revision": "919916ec3584201967bcca6b65bb2421"
  },
  {
    "url": "assets/js/21.d424c18b.js",
    "revision": "7bb0f4f786c6bae9cfc886840342ce09"
  },
  {
    "url": "assets/js/22.5d82a21d.js",
    "revision": "d9e9f2fc32c88b876ff9ac597ac13103"
  },
  {
    "url": "assets/js/23.36b6d0a0.js",
    "revision": "4163806d864b47ce336df5b776379bfd"
  },
  {
    "url": "assets/js/24.b2436ce4.js",
    "revision": "00dc9f9072ae356fc1a08e8fb90a63a2"
  },
  {
    "url": "assets/js/25.d0c6e25f.js",
    "revision": "1ce829077fc82eb179c88f237e2e8ef2"
  },
  {
    "url": "assets/js/26.b5e3c19c.js",
    "revision": "e8d584881503c6c3bf48c546656d1f75"
  },
  {
    "url": "assets/js/27.a524df1a.js",
    "revision": "c0d2c635ee9c18006d2b9f214c45a024"
  },
  {
    "url": "assets/js/28.25c0ed5e.js",
    "revision": "3cf6ce0a0af62f6fdcf7e9182d3108fd"
  },
  {
    "url": "assets/js/29.f9b5a855.js",
    "revision": "51e815edb9057856a134403c83b27694"
  },
  {
    "url": "assets/js/3.08e48031.js",
    "revision": "bffdb8116334c01a1d95159b37d8cc8f"
  },
  {
    "url": "assets/js/30.67d39ab6.js",
    "revision": "25fe671b1ecf374df00f8f032e7edcca"
  },
  {
    "url": "assets/js/31.92b1b15d.js",
    "revision": "85050a9c5b3b2a0c387123e0ca0cabdf"
  },
  {
    "url": "assets/js/32.f4e82e10.js",
    "revision": "d33e23075e65678d6508ca39327d0686"
  },
  {
    "url": "assets/js/33.8e078611.js",
    "revision": "80867cb5066f8fbf7d671a9f8f0ad1f3"
  },
  {
    "url": "assets/js/34.b4bea20d.js",
    "revision": "63efba8c5e5419377f4e340eb8dcea62"
  },
  {
    "url": "assets/js/35.24d90a48.js",
    "revision": "a4f8b058f234b4149a0dcf54ed6605f9"
  },
  {
    "url": "assets/js/36.ef702182.js",
    "revision": "baf41682c6913ffdb36aecc581900fb3"
  },
  {
    "url": "assets/js/37.f5cc6f4f.js",
    "revision": "db7c50e5abd1bf42c1dee404ca79feb0"
  },
  {
    "url": "assets/js/38.45b62383.js",
    "revision": "3ada35bc80c9239ce47c19f6c770ab9f"
  },
  {
    "url": "assets/js/39.5351a017.js",
    "revision": "ef2574c73e4bb8637c5205ecb2e6bfa4"
  },
  {
    "url": "assets/js/4.d60abc91.js",
    "revision": "d46b711216f4b222f2cd361d44de4155"
  },
  {
    "url": "assets/js/40.39da4318.js",
    "revision": "eb14b711709acdfdc0a460f3cc231b61"
  },
  {
    "url": "assets/js/41.bc5678de.js",
    "revision": "4926eebf4b11aa81ccb7bf64ffb28ded"
  },
  {
    "url": "assets/js/42.f4a5cc7c.js",
    "revision": "f7037d52ef0473f4af7717fb81dcbba0"
  },
  {
    "url": "assets/js/43.83e2ec23.js",
    "revision": "b171fa61ef8bfcf236262242bd3039c7"
  },
  {
    "url": "assets/js/44.4675ab38.js",
    "revision": "e0b57b21cf8ea57e58b440539b7a305d"
  },
  {
    "url": "assets/js/45.72d3f200.js",
    "revision": "2ddae20c0fa4e8630f69e9225ecf6a31"
  },
  {
    "url": "assets/js/46.8d77ad14.js",
    "revision": "d72d1cbc00057d70c8e2c706610b206e"
  },
  {
    "url": "assets/js/47.7daeae21.js",
    "revision": "6cf98e8a5b9d62e9e39fb3cd97e1548c"
  },
  {
    "url": "assets/js/48.8c3532fd.js",
    "revision": "be0644c9f1bae22624723b4d86a8762c"
  },
  {
    "url": "assets/js/49.d2ceb345.js",
    "revision": "b8e2a11346230cab836b4beda1e57b52"
  },
  {
    "url": "assets/js/5.38bfdf08.js",
    "revision": "6b54994343bfe44334138de683690a24"
  },
  {
    "url": "assets/js/50.41300c4a.js",
    "revision": "18c02b813b8ba3d445d3c32af1f029de"
  },
  {
    "url": "assets/js/51.7123e828.js",
    "revision": "bdfd187dc8031f7258935653ecf0a812"
  },
  {
    "url": "assets/js/52.96ab2ac5.js",
    "revision": "21d4031ee2fc5e3445d856844f7d7772"
  },
  {
    "url": "assets/js/53.01bcfe44.js",
    "revision": "edf93f5db523775c3b977eafbda0e1ce"
  },
  {
    "url": "assets/js/54.379a6e11.js",
    "revision": "af4cfdbd67a859d60b4e2d1dea51f7bb"
  },
  {
    "url": "assets/js/55.05379669.js",
    "revision": "14fe7d9ccc299d1166dc708edcf05f65"
  },
  {
    "url": "assets/js/56.380aaeac.js",
    "revision": "2e54dd2b3938348b8abb5f338198c435"
  },
  {
    "url": "assets/js/57.5638cfe7.js",
    "revision": "b9820ca756e4036a3dc28bea44059413"
  },
  {
    "url": "assets/js/58.4aaf9b06.js",
    "revision": "7ea484b969f8f2cafc1bbc6dc6289fcb"
  },
  {
    "url": "assets/js/59.6db0022e.js",
    "revision": "3478f78c68a30575d7500be59038e6f3"
  },
  {
    "url": "assets/js/6.2c430a05.js",
    "revision": "6afa9e41704d217e637a18c34ee83264"
  },
  {
    "url": "assets/js/60.5b1ba8d4.js",
    "revision": "867973fa2ebdc565fb1e22bd85603d4a"
  },
  {
    "url": "assets/js/61.f226504c.js",
    "revision": "6682d9f6e5fd20c2903e8d1cd9bcbec1"
  },
  {
    "url": "assets/js/62.2563abf3.js",
    "revision": "bd9d6a956b9decd6a3f5fab4015377db"
  },
  {
    "url": "assets/js/63.94b44c4a.js",
    "revision": "da6264421434898f7e1ab071e612a600"
  },
  {
    "url": "assets/js/64.2b0b61cf.js",
    "revision": "9daaa780f42038e6f1fef84d0e459ce3"
  },
  {
    "url": "assets/js/65.6d2830f1.js",
    "revision": "4896431e31d12f53945e6a71ec39ed9d"
  },
  {
    "url": "assets/js/66.65a4cc01.js",
    "revision": "df3e2a55dc8fbe83f0e40351bccec22e"
  },
  {
    "url": "assets/js/67.7b270307.js",
    "revision": "a98cbaf41b82bb9d34037dd8a83ba9e1"
  },
  {
    "url": "assets/js/68.a8fe45f4.js",
    "revision": "953b93df401adecdecce9c9744a3e5fb"
  },
  {
    "url": "assets/js/69.8f88d229.js",
    "revision": "239a69b90e4a4f30f3ad0916fc62143e"
  },
  {
    "url": "assets/js/7.e6ecd274.js",
    "revision": "c20ab7cd97b0207779aebf32cdbdbd27"
  },
  {
    "url": "assets/js/70.1ddc66b4.js",
    "revision": "ac5232261ecd8d292e33339bfb3066f9"
  },
  {
    "url": "assets/js/71.77170c41.js",
    "revision": "734fa0634a931e092232e68778392b88"
  },
  {
    "url": "assets/js/72.1dc4049b.js",
    "revision": "803fb23a77a6139fb86a5dfcac6c9e20"
  },
  {
    "url": "assets/js/73.7da3757c.js",
    "revision": "cf8849e5cb290e1d8119669ca6e5547e"
  },
  {
    "url": "assets/js/74.2181d25c.js",
    "revision": "d6031c648aa016de32cfcb7d1f76ecb1"
  },
  {
    "url": "assets/js/75.be8d5dc6.js",
    "revision": "e7a9fd9dca9d4cb216708bf8b9f67121"
  },
  {
    "url": "assets/js/76.4cbdb224.js",
    "revision": "cabf7a886359f6e641992e0a49c051de"
  },
  {
    "url": "assets/js/77.5ee263b6.js",
    "revision": "462b92a0e368eac7934c4aeb1fbe1c50"
  },
  {
    "url": "assets/js/78.6b078925.js",
    "revision": "1ba3ad322c00ae03afa30c901763d7bc"
  },
  {
    "url": "assets/js/79.414db56b.js",
    "revision": "292600fe265a3bfbeca6052e58811f43"
  },
  {
    "url": "assets/js/8.156e0c5d.js",
    "revision": "9d7ece3eb9f82d3dbaf9bf9c1a89479e"
  },
  {
    "url": "assets/js/80.213572d0.js",
    "revision": "87052facb57359e919806737e5921dd7"
  },
  {
    "url": "assets/js/81.33f5de66.js",
    "revision": "ca8927f5b1dc714088a92679d014d7e9"
  },
  {
    "url": "assets/js/82.d854fa6f.js",
    "revision": "2d0efe76be74e95bda9b9b7790ae3f45"
  },
  {
    "url": "assets/js/83.110c252e.js",
    "revision": "31ca6f42202662f39a220e1c443ea399"
  },
  {
    "url": "assets/js/84.473df94b.js",
    "revision": "d646e6422d81a628b3a8782a567b3544"
  },
  {
    "url": "assets/js/85.ee0c2c9c.js",
    "revision": "bafe7e5b37b5a6255fa2e2898e2842da"
  },
  {
    "url": "assets/js/86.ec58ee6e.js",
    "revision": "19037177f88f9862246f8adc21fda312"
  },
  {
    "url": "assets/js/87.82972f59.js",
    "revision": "548bb90c086f4e7c15328c6a3fd1c7ea"
  },
  {
    "url": "assets/js/88.23a39bc5.js",
    "revision": "a0ca5220838dc952f8209ceddd901004"
  },
  {
    "url": "assets/js/89.4be8b33a.js",
    "revision": "b1a4b0cf0f18efbd90b915d893d404c8"
  },
  {
    "url": "assets/js/9.44c09d8c.js",
    "revision": "1a54b62d196880f3fe45cb2355781c8e"
  },
  {
    "url": "assets/js/90.44c2861c.js",
    "revision": "7c4572c302e368969a3af9bf2abda80e"
  },
  {
    "url": "assets/js/91.468becad.js",
    "revision": "31820f0875b542e44dfc85066d3ea02c"
  },
  {
    "url": "assets/js/92.9e5ceb34.js",
    "revision": "f0e4aab11e73984476a49b4e32464e1a"
  },
  {
    "url": "assets/js/93.9032fb68.js",
    "revision": "98d76dad232ba20d42e5aad1aa0b0362"
  },
  {
    "url": "assets/js/94.d7e6c360.js",
    "revision": "9a2b5e4efa771ec6dce7f29e2251999b"
  },
  {
    "url": "assets/js/95.0fa635fb.js",
    "revision": "14dd9a6ecd2a7c0b56dcf8e48a52bf79"
  },
  {
    "url": "assets/js/96.c7a82be8.js",
    "revision": "bbeeeef6b20f1dbf05d801ace20f1544"
  },
  {
    "url": "assets/js/97.bf5ce894.js",
    "revision": "7a10baa6d8045d14e4db841c08244669"
  },
  {
    "url": "assets/js/98.9d46ee61.js",
    "revision": "1ad114af462f10c45680b3a25014da71"
  },
  {
    "url": "assets/js/99.40ccc798.js",
    "revision": "1b4adfa9ec761f42fed330f602f6860e"
  },
  {
    "url": "assets/js/app.f4cc6427.js",
    "revision": "dcf68b616eeef93d5c02ff6cf67ea9f1"
  },
  {
    "url": "assets/js/vendors~notification.8531c786.js",
    "revision": "8256d7a3410ef0cdc147407db4c28a8a"
  },
  {
    "url": "bf.jpg",
    "revision": "b6eae9c3213aace0f446209fab76c41e"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "efa5684a51df6bb8b4fe8a92c9c0ff91"
  },
  {
    "url": "interview/chrome/web安全.html",
    "revision": "7af39721a7ea1bb92adf57ad8e6ebbb0"
  },
  {
    "url": "interview/chrome/浏览器相关基础.html",
    "revision": "72366bcf4d33c141dc270217665bef51"
  },
  {
    "url": "interview/chrome/网络协议.html",
    "revision": "e740a65a3a34e457064df4f6e7a31933"
  },
  {
    "url": "interview/chrome/跨域.html",
    "revision": "07ca36986abf7904d1879b0f00c7fc1d"
  },
  {
    "url": "interview/design/常见算法.html",
    "revision": "e6cb918b7bbf42cb72918c6c1ff8a8e8"
  },
  {
    "url": "interview/design/设计模式.html",
    "revision": "79deba7c62a6b510018ee66e6f43030b"
  },
  {
    "url": "interview/dev-env/index.html",
    "revision": "511cf5181638e501cf1feac0d838feb6"
  },
  {
    "url": "interview/index.html",
    "revision": "0b84e8f97079b2301dc0ef712111d70e"
  },
  {
    "url": "interview/js/ES6.html",
    "revision": "03c211a468ec57f82a47a29d3d6ef90c"
  },
  {
    "url": "interview/js/js基础.html",
    "revision": "85c4416d082a16d376375f9a94796855"
  },
  {
    "url": "interview/js/WebAPI.html",
    "revision": "30a5a0a43ae7783a6be21757bba46b7b"
  },
  {
    "url": "interview/js/原型与继承.html",
    "revision": "ba7c9f84c393d8ff3a0e80247e4f19c2"
  },
  {
    "url": "interview/js/异步编程与EventLoop.html",
    "revision": "688296c306eb5eb24735b1782baf4ae7"
  },
  {
    "url": "interview/performance/index.html",
    "revision": "03da3601f2dc7df4b958e12c85500192"
  },
  {
    "url": "interview/performance/提升加载速度.html",
    "revision": "1f13cdd35f9a3f23d4beb9e482dcf9e2"
  },
  {
    "url": "interview/performance/提升页面渲染.html",
    "revision": "8d6ba28b1b2965036c49d3e395ef6acd"
  },
  {
    "url": "interview/vue/Vue常考知识点.html",
    "revision": "70c7afa80f8d9188ff41023e45059f0e"
  },
  {
    "url": "interview/vue/项目问题及解决方法.html",
    "revision": "67b5ff71d299322672f5de6f961eee27"
  },
  {
    "url": "learn/bom/index.html",
    "revision": "f13e918be43e2fda6858bd7b2d04db8c"
  },
  {
    "url": "learn/canvas/index.html",
    "revision": "5acf7ab779fd717bf7d7be8963f20e63"
  },
  {
    "url": "learn/code/index.html",
    "revision": "8eb98af0e744e6a88f031a3aa86aac56"
  },
  {
    "url": "learn/dom/index.html",
    "revision": "c62dbe31e83ddd6257140f6ca841f4a6"
  },
  {
    "url": "learn/es6/01-let和const.html",
    "revision": "4536c059eabdd48dfc736c0f6bb5b72c"
  },
  {
    "url": "learn/es6/02-箭头函数.html",
    "revision": "2aeb4f7d7588df70590b1c3cc7f78790"
  },
  {
    "url": "learn/es6/03-函数默认值.html",
    "revision": "4873aa72212e70f4405e7a12840fec7f"
  },
  {
    "url": "learn/es6/04-模板字符串.html",
    "revision": "f52310baae00a8ae3b75bd40b53ff0c9"
  },
  {
    "url": "learn/es6/05-解构赋值.html",
    "revision": "fe09d75e700082ed6a16f7e2abd020c0"
  },
  {
    "url": "learn/es6/06-数组的扩展.html",
    "revision": "b75ae9e573dfb0e85326b980a2d56d51"
  },
  {
    "url": "learn/es6/07-Set和Map数据结构.html",
    "revision": "2d9ab07a9ef3f0b8e663f93b32090a29"
  },
  {
    "url": "learn/es6/08-对象的扩展.html",
    "revision": "475961bab6a54e3ab482c67afc1d0cac"
  },
  {
    "url": "learn/es6/09-symbol.html",
    "revision": "b111ed9159a04a9f70b51e9254c2f0a9"
  },
  {
    "url": "learn/es6/10-Iterator(遍历器).html",
    "revision": "3b90bd3bb40d0cfd63c925714ed8e31a"
  },
  {
    "url": "learn/es6/11-class.html",
    "revision": "e9772bdbc1391a1ac062f949d9e54fa7"
  },
  {
    "url": "learn/es6/12-Promise.html",
    "revision": "cd0ab8350e4246be268e1790d7cd526c"
  },
  {
    "url": "learn/es6/13-async、await.html",
    "revision": "1807f89d0b2122949f6fac961c052912"
  },
  {
    "url": "learn/es6/index.html",
    "revision": "a8f84eaf25bcef9319e0a1e5485f0658"
  },
  {
    "url": "learn/git-and-github/index.html",
    "revision": "30ca85fea8711e69b02209b0c5ca0cad"
  },
  {
    "url": "learn/html-and-css/01-网页初识.html",
    "revision": "d3a7364c6171828c7a33a59bbdc5f14b"
  },
  {
    "url": "learn/html-and-css/02-HTML初识.html",
    "revision": "f2079ebe4c9787986f1be51bc7a13944"
  },
  {
    "url": "learn/html-and-css/03-HTML常用标签.html",
    "revision": "7f4c226c4ca5bb7a6b9710c4efd8c4da"
  },
  {
    "url": "learn/html-and-css/04-CSS初识.html",
    "revision": "ca1089026d2e16bcd9ef13d2f6a9bb5f"
  },
  {
    "url": "learn/html-and-css/05-CSS盒子模型.html",
    "revision": "5145ad4091e22ed3f1cd4c4a8cb9c587"
  },
  {
    "url": "learn/html-and-css/06-CSS常用布局.html",
    "revision": "fc690d0dc8103dee1f55d700cb024bbe"
  },
  {
    "url": "learn/html5-and-css3/CSS3介绍.html",
    "revision": "5334965241048ba5bf799f35ff745bd2"
  },
  {
    "url": "learn/html5-and-css3/FLEX布局介绍.html",
    "revision": "4292179b79d49819896cfeb153544e07"
  },
  {
    "url": "learn/html5-and-css3/HTML5介绍.html",
    "revision": "b78259ac423cf05aa763312ce307edf3"
  },
  {
    "url": "learn/html5-and-css3/index.html",
    "revision": "f813e725c4519314138e456d3bd73fcf"
  },
  {
    "url": "learn/index.html",
    "revision": "e67b912b3148964e8a0c57b6afc2639f"
  },
  {
    "url": "learn/javascript-advance/正则表达式.html",
    "revision": "655bbab714392f0fd5ffa2dbbabf6192"
  },
  {
    "url": "learn/javascript-advance/面向对象.html",
    "revision": "dbffa6d4f6bacc5f3aaa19d60356b8d0"
  },
  {
    "url": "learn/javascript/01-JavaScript初识.html",
    "revision": "0e176a7cc1b9c88b8bbf9bfad67db886"
  },
  {
    "url": "learn/javascript/02-变量和数据类型.html",
    "revision": "08f0f574c824c4dbf1351dcf81131562"
  },
  {
    "url": "learn/javascript/03-数据类型转换.html",
    "revision": "2ff25766b61ea5b690b53f5beb735114"
  },
  {
    "url": "learn/javascript/04-常用运算符.html",
    "revision": "ccb9dfa69103dced570f261ece261de7"
  },
  {
    "url": "learn/javascript/05-Date和Math对象.html",
    "revision": "ed95812a517172c65c67c95d2fd3ba47"
  },
  {
    "url": "learn/javascript/06-流程控制语句.html",
    "revision": "27372baad9c26f2699482c37c9194181"
  },
  {
    "url": "learn/javascript/07-数组初识.html",
    "revision": "c8980cf1c2ac9bb62a121da34ec29867"
  },
  {
    "url": "learn/javascript/08-函数初识.html",
    "revision": "413ba1cb592af9b6a812cfb33ff73ab7"
  },
  {
    "url": "learn/javascript/09-排序和递归算法.html",
    "revision": "13feeaa11eccdcfe82034890aff844ad"
  },
  {
    "url": "learn/javascript/10-对象初识.html",
    "revision": "1cb1022d739190e1b65118fe26e01839"
  },
  {
    "url": "learn/javascript/11-数组和字符串常用方法.html",
    "revision": "cab3b1200f088bd7b5ec50e61a608f66"
  },
  {
    "url": "learn/javascript/12-垃圾回收机制.html",
    "revision": "bad2e6e1c42f39b6388638383621f6d3"
  },
  {
    "url": "learn/javascript/13-代码风格和压缩.html",
    "revision": "c55a8451d895b2499f9cb1f9cb5e88d1"
  },
  {
    "url": "learn/jquery/index.html",
    "revision": "f0f42a27d3dfdfd083bda8a80e932b0d"
  },
  {
    "url": "learn/just-coding/index.html",
    "revision": "a6f5fb2f3452175293717ce68ad01f4f"
  },
  {
    "url": "learn/mobile-web/01-移动端适配.html",
    "revision": "14a2e9301fc5c17982c854d5f9e5af84"
  },
  {
    "url": "learn/mobile-web/02-移动端事件.html",
    "revision": "c2a4bc91e26d137eec455a878072be40"
  },
  {
    "url": "learn/mobile-web/03-媒体查询.html",
    "revision": "e5236e6427babeb9c6b94a074561f260"
  },
  {
    "url": "learn/mobile-web/04-常见移动端问题.html",
    "revision": "196bb47ba0542b94ff30117112dc6a29"
  },
  {
    "url": "learn/mobile-web/05-补充.html",
    "revision": "0c4af56c47731c1d39d1f863a821d2f5"
  },
  {
    "url": "learn/mobile-web/index.html",
    "revision": "9bdca32506b0333b8519777d06c95b0d"
  },
  {
    "url": "learn/node-and-ajax/AJAX.html",
    "revision": "58b1f9701851068050916dabf8514555"
  },
  {
    "url": "learn/node-and-ajax/node.html",
    "revision": "52009bd7fdeae6753663b1059aba5c9d"
  },
  {
    "url": "learn/node-and-ajax/Sass介绍.html",
    "revision": "da397403766dcddb7a7dad8b8cd86fa7"
  },
  {
    "url": "learn/site1/index.html",
    "revision": "ab4f398888b6c374411e7c7bad48cd46"
  },
  {
    "url": "learn/site1/manlv.html",
    "revision": "867196e868c930de94070d5371b77b32"
  },
  {
    "url": "learn/site1/sheying.html",
    "revision": "a02ebcf15729c6fa1ce4fbdf930b7d2e"
  },
  {
    "url": "learn/soft/index.html",
    "revision": "be29da5eafe0c61816d570b62e47cb74"
  },
  {
    "url": "learn/uni/index.html",
    "revision": "d37ddc276748f123e6516fe9ee6ff513"
  },
  {
    "url": "learn/uni/uniApp注意事项.html",
    "revision": "85e876efa3d4e50ee8eddc1e1191be15"
  },
  {
    "url": "learn/vue/01-vue入门.html",
    "revision": "28f3cca824bb829ab32bad60e835f87a"
  },
  {
    "url": "learn/vue/02-计算属性和侦听器.html",
    "revision": "73931faae48c3bf897269c7f72568636"
  },
  {
    "url": "learn/vue/03-Class与Style绑定.html",
    "revision": "26db7c3850715b31ab695c0bc453e7b5"
  },
  {
    "url": "learn/vue/04-事件处理.html",
    "revision": "f7d420e1ec4e7c602d36a7ac6bd08306"
  },
  {
    "url": "learn/vue/05-组件基础.html",
    "revision": "e1eccceba0c0f4b8211670abd9217b03"
  },
  {
    "url": "learn/vue/06-生命周期.html",
    "revision": "a34b3c407fefddb0e25387f12f38ca6c"
  },
  {
    "url": "learn/vue/07-插槽.html",
    "revision": "6e7e8b2f7465fc01bf45c4189796e1b9"
  },
  {
    "url": "learn/vue/08-动态组件.html",
    "revision": "de3da58a6821e75b6640bc92a4e285d2"
  },
  {
    "url": "learn/vue/09-处理边界情况.html",
    "revision": "87f40fe9b8fa4092e96e9419f696b2a0"
  },
  {
    "url": "learn/vue/10-过渡和动画.html",
    "revision": "80ad8f2262774eeb109c6a3ee0354b16"
  },
  {
    "url": "learn/vue/11-可复用性和组合.html",
    "revision": "eae16f6fad3a47e4950372097f8c7a46"
  },
  {
    "url": "learn/vue/12-vue-cli.html",
    "revision": "a68abf14900403b19e4f05cfc9b51f8f"
  },
  {
    "url": "learn/vue/13-vue-router.html",
    "revision": "3a95a240d0ffc151d497135cc8d655bc"
  },
  {
    "url": "learn/vue/14-vuex入门.html",
    "revision": "379fe995f2edc1c98b692db017b749eb"
  },
  {
    "url": "learn/vue/15-vuex高级.html",
    "revision": "4792cd093844f04334ea1e35a5af962d"
  },
  {
    "url": "learn/vue/16-axios.html",
    "revision": "25532d0d9a605b4eeb9da8dba5ac4de0"
  },
  {
    "url": "learn/vue/index.html",
    "revision": "6b0fca0450b16825855a27e81aeb3e36"
  },
  {
    "url": "learn/wx-lite/01-小程序使用.html",
    "revision": "5ccda6cb4f5ec4120e004b72c6e7fc49"
  },
  {
    "url": "learn/wx-lite/02-小程序的生命周期.html",
    "revision": "ca3a2254e20cddd528a53790332418d4"
  },
  {
    "url": "learn/wx-lite/03-小程序事件处理.html",
    "revision": "301ff07c4bdeb46ee03540994de69814"
  },
  {
    "url": "learn/wx-lite/04-自定义组件.html",
    "revision": "fac33b15bf5b487b56905bc3d0bb3e6c"
  },
  {
    "url": "learn/wx-lite/05-图片操作.html",
    "revision": "8fdd39c0fcb604d960e7abefb90a71b7"
  },
  {
    "url": "learn/wx-lite/06-网络请求.html",
    "revision": "e0a11319f6009c0aab4d154cfd96348e"
  },
  {
    "url": "learn/wx-lite/07-微信本地存储.html",
    "revision": "99b8b1f298feed297c749801c5cb4de4"
  },
  {
    "url": "learn/wx-lite/08-页面通信.html",
    "revision": "c545aaf8754bfbd6417cc904117bd24d"
  },
  {
    "url": "learn/wx-lite/09-小程序鉴权.html",
    "revision": "23c5898f9896b79353a7c2600bbfa792"
  },
  {
    "url": "learn/wx-lite/10-弹窗.html",
    "revision": "09b3290e24fde232d1de2e708a976f3c"
  },
  {
    "url": "learn/wx-lite/11-补充知识.html",
    "revision": "def817946fc63765e221e7cd9ef87c4d"
  },
  {
    "url": "learn/wx-lite/12-注意事项.html",
    "revision": "bd35a51f2002f8593797298786f40477"
  },
  {
    "url": "learn/wx-lite/index.html",
    "revision": "015aae4893af0bec3c86a0e1e84e719b"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.jpg",
    "revision": "6d611592466671d193359ad4cf1c11a7"
  },
  {
    "url": "miscellaneous/design-concepts.html",
    "revision": "51be04b2ab1812d8863b1c09d2e6cb01"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "bea1fee7a8d9eb11c393c0ba26f9bb96"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "15992da23fedea93ea599dd3b2ea6b7b"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
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
