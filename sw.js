if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise(async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()})),s.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},s=(s,i)=>{Promise.all(s.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(s)};self.define=(s,o,r)=>{i[s]||(i[s]=Promise.resolve().then(()=>{let i={};const a={uri:location.origin+s.slice(1)};return Promise.all(o.map(s=>{switch(s){case"exports":return i;case"module":return a;default:return e(s)}})).then(e=>{const s=r(...e);return i.default||(i.default=s),i})}))}}define("./sw.js",["./workbox-a1d34bd3"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"05cbfe18.js",revision:"43707fbec6dae1ae552a04f8332a2a8d"},{url:"assets/img/logo/ClinicallyMedia.js",revision:"c8fc5a1f850f298a1893ee77dc3d179b"},{url:"assets/img/logo/CompassIcon.js",revision:"34d0718069fe2b8c2a823daa18bcb43a"},{url:"assets/img/logo/CompassOfDesign.js",revision:"126f034d6f3793a5846fb7a3b6225730"},{url:"assets/img/logo/GlassFrontier.js",revision:"d959ef75614129a88be27cd7e74338e9"},{url:"assets/img/logo/index.js",revision:"1f562dceddac909e5289397884517eae"},{url:"assets/img/logo/KeySpark.js",revision:"fb2933b77a4dfb53a4a15bb59275f1a1"},{url:"assets/img/logo/KeySparkIcon.js",revision:"77d5a64a326aa0484d0bbf911c9f58b2"},{url:"assets/img/logo/logo.js",revision:"759d9f7c15ea104cee5b304da9797a88"},{url:"assets/img/logo/Microsoft.js",revision:"767f705206938fa39663006ace4e4400"},{url:"assets/img/logo/Minimum.js",revision:"1f25e5b074b340fa9829ff3db240211b"},{url:"assets/img/logo/RockAgile.js",revision:"96555c037c502e62a6f9301bc9c96198"},{url:"assets/img/logo/Shiplane.js",revision:"50bcf323b8b7c4b5e2cd4b34ed4e89ab"},{url:"assets/img/logo/SoMagnetic.js",revision:"aba7f40c9c437eaa1a1db67043e77e40"},{url:"assets/img/logo/Travelight.js",revision:"6131bbffaba9e2f9157be9e76f9916a9"},{url:"assets/img/logo/WorkLogos.js",revision:"96c2e69c71210d16579ce7e64175ea64"},{url:"index.html",revision:"b061ffd1534a68b75620f2288140cb11"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map
