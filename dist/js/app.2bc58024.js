(function(e){function t(t){for(var r,o,c=t[0],i=t[1],s=t[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-12570233":"6317dd5e","chunk-1f669c74":"1486f3ed","chunk-2a106db4":"cffcc565","chunk-54674f00":"7535350c","chunk-5df5dab1":"5c33e481","chunk-70b7652a":"180a6c7b","chunk-2d230e44":"9e5d9e8e","chunk-6347a43f":"2bb8a594"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-12570233":1,"chunk-1f669c74":1,"chunk-2a106db4":1,"chunk-54674f00":1,"chunk-5df5dab1":1,"chunk-70b7652a":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-12570233":"e3ed997e","chunk-1f669c74":"00e5b4a1","chunk-2a106db4":"df9457a3","chunk-54674f00":"6c85eacf","chunk-5df5dab1":"93f37cef","chunk-70b7652a":"65f3d4c6","chunk-2d230e44":"31d6cfe0","chunk-6347a43f":"31d6cfe0"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],p.parentNode.removeChild(p),n(u)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Article"}},[n("router-view")],1)],1)},a=[],u=(n("034f"),n("2877")),c={},i=Object(u["a"])(c,o,a,!1,null,null,null),s=i.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(l["a"]);var f=function(){return Promise.all([n.e("chunk-70b7652a"),n.e("chunk-6347a43f")]).then(n.bind(null,"0f9e"))},p=function(){return Promise.all([n.e("chunk-12570233"),n.e("chunk-5df5dab1")]).then(n.bind(null,"9cc0"))},d=function(){return Promise.all([n.e("chunk-70b7652a"),n.e("chunk-2d230e44")]).then(n.bind(null,"ede4"))},h=function(){return Promise.all([n.e("chunk-12570233"),n.e("chunk-2a106db4")]).then(n.bind(null,"f778"))},m=function(){return Promise.all([n.e("chunk-12570233"),n.e("chunk-1f669c74")]).then(n.bind(null,"b3d7"))},b=function(){return Promise.all([n.e("chunk-12570233"),n.e("chunk-54674f00")]).then(n.bind(null,"fa20"))},g=[{path:"",redirect:"/home"},{path:"/home",component:m},{path:"/register",component:f},{path:"/userinfo",component:p,meta:{isToken:!0}},{path:"/login",component:d},{path:"/edit",component:h,meta:{isToken:!0}},{path:"/article/:id",component:b}],k=new l["a"]({mode:"history",base:"/",routes:g});k.beforeEach((function(e,t,n){localStorage.getItem("id")||localStorage.getItem("token")||!0!==e.meta.isToken?n():(k.push("/login"),r["a"].prototype.$msg.fail("请先登录"))}));var v=l["a"].prototype.push;l["a"].prototype.push=function(e){return v.call(this,e).catch((function(e){return e}))};var y=k,w=n("2f62");r["a"].use(w["a"]);var P=new w["a"].Store({state:{},mutations:{},actions:{},modules:{}}),S=n("b970"),j=n("d399"),O=(n("157a"),n("bc3a")),E=n.n(O),T=E.a.create({baseURL:"http://112.74.99.5:3000/web/api",timeout:5e3});T.interceptors.request.use((function(e){return localStorage.getItem("id")&&localStorage.getItem("token")&&(e.headers.Authorization="Bearer "+localStorage.getItem("token")),e}),(function(e){console.log(e)})),T.interceptors.response.use((function(e){return e}),(function(e){return 401!==e.response.status&&402!==e.response.status||(y.push("/login"),r["a"].prototype.$msg.fail(e.response.data.message)),Promise.reject(e)}));var _=T;r["a"].use(S["a"]),r["a"].config.productionTip=!1,r["a"].prototype.$http=_,r["a"].prototype.$msg=j["a"],new r["a"]({router:y,store:P,render:function(e){return e(s)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.2bc58024.js.map