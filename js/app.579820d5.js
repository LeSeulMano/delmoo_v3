(function(){"use strict";var e={9385:function(e,n,t){var r=t(9242),o=t(3396);const i={class:"app"},u={class:"home"};function a(e,n,t,r,a,c){const s=(0,o.up)("router-link"),f=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",u,[(0,o._)("nav",null,[(0,o.Wm)(s,{style:{"text-decoration":"none",color:"inherit"},to:"/"})]),(0,o.Wm)(f)])])}var c={name:"App",components:{}},s=t(89);const f=(0,s.Z)(c,[["render",a]]);var d=f,l=t(2483),p=t(4161);const m=(0,l.p7)({history:(0,l.PO)(),routes:[{path:"/",name:"Home",component:()=>t.e(581).then(t.bind(t,4581))},{path:"/login",component:()=>t.e(441).then(t.bind(t,8441))},{path:"/cours",name:"Cours",props:!0,component:()=>t.e(397).then(t.bind(t,2397))},{path:"/admin",name:"mod",component:()=>t.e(399).then(t.bind(t,4399)),meta:{requiresAuth:!0},children:[{path:"/admin/test",name:"admin",component:()=>t.e(581).then(t.bind(t,4581))},{path:"/admin/oui",name:"oui",component:()=>t.e(397).then(t.bind(t,2397))}]}]});function h(){return document.cookie.includes("session=")}async function v(){if(1!=h())return!1;{const n=`; ${document.cookie}`;let t=n.split("; session=");2===t.length&&(t=t.pop().split(";").shift()),p.Z.defaults.headers.common={Authorization:`Bearer ${t}`};try{return await p.Z.get("/api/mod-cours",{withCredentials:!0}),!0}catch(e){return!1}}}m.beforeEach((async(e,n,t)=>{e.matched.some((e=>e.meta.requiresAuth))?1==await v()?t():t({name:"Home"}):t()}));var b=m;(0,r.ri)(d).use(b).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var u=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(f--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{397:"f7ba5761",399:"46e0d417",441:"ae0d894e",581:"edd99310"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{397:"c82265af",399:"5e76c1a8",441:"37a6d72b",581:"6c1996af"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="dev-server:";t.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var d=s[f];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+i){a=d;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+i),a.src=r),e[r]=[o];var l=function(n,t){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var u=function(t){if(i.onerror=i.onload=null,"load"===t.type)r();else{var u=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,i.parentNode&&i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=u,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var u=t.miniCssF(r),a=t.p+u;if(n(u,a))return o();e(r,a,null,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={397:1,399:1,441:1,581:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(n),a=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};t.l(u,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,u=r[0],a=r[1],c=r[2],s=0;if(u.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var f=c(t)}for(n&&n(r);s<u.length;s++)i=u[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(f)},r=self["webpackChunkdev_server"]=self["webpackChunkdev_server"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(9385)}));r=t.O(r)})();
//# sourceMappingURL=app.579820d5.js.map