(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],d=0,l=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={index:0},a={index:0},c=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"89207bbc"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"bdb966b9"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===a))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],d=s.getAttribute("data-href");if(d===r||d===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],f.parentNode.removeChild(f),n(c)},f.href=a;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dontexpired-web/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"365c":function(e,t,n){"use strict";var r=n("0631"),o=n.n(r),a={id:"oaLzmC7gTYliUse2S2nnvlW2-gzGzoHsz",key:"OntfdRFAVrhQGcAuDXV9LYD9",server:"https://oalzmc7g.lc-cn-n1-shared.com"};o.a.init({appId:a.id,appKey:a.key,serverURL:a.server}),window.AV=o.a;n("7db0");function c(e){throw console.log(e),e}var u={getCurrUser:function(){return o.a.User.current()},logOut:function(){return o.a.User.logOut()},getItemList:function(){return new o.a.Query("TestObject").find().catch(c)},addItem:function(e){var t,n=o.a.Object.extend("TestObject"),r=new n;for(t in e)r.set(t,e[t]);return r.save().then((function(e){console.log("TestObject已经创建",e)})).catch(c)}};t["a"]={itemApi:u}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("830f"),o=n("5c40"),a={id:"app"},c={id:"nav"},u=Object(o["h"])("Home"),i=Object(o["h"])(" | "),s=Object(o["h"])("Add");function d(e,t){var n=Object(o["u"])("router-link"),r=Object(o["u"])("router-view");return Object(o["p"])(),Object(o["e"])("div",a,[Object(o["i"])("div",c,[Object(o["i"])(n,{to:"/"},{default:Object(o["A"])((function(){return[u]})),_:1}),i,Object(o["i"])(n,{to:"/add"},{default:Object(o["A"])((function(){return[s]})),_:1})]),Object(o["i"])(r)])}n("64be");const l={};l.render=d;var f=l,b=(n("d3b7"),n("8c4f")),p={class:"home"};function h(e,t){var n=Object(o["u"])("Items");return Object(o["p"])(),Object(o["e"])("div",p,[Object(o["i"])(n)])}var m=n("9ff4"),v=Object(o["C"])("data-v-53aaf04c");Object(o["s"])("data-v-53aaf04c");var g={class:"hello"};Object(o["q"])();var O=v((function(e,t){return Object(o["p"])(),Object(o["e"])("div",g,[(Object(o["p"])(!0),Object(o["e"])(o["b"],null,Object(o["t"])(e.items,(function(e){return Object(o["p"])(),Object(o["e"])("p",{key:e._id,class:"text-center"},Object(m["E"])(e),1)})),128))])})),j=(n("4160"),n("3ca3"),n("159b"),n("ddb0"),n("365c"));function y(){return Promise.all([j["a"].itemApi.getItemList()]).then((function(e){return console.log("getData, results",e),window.results=e,e}))}function w(e){var t={};return e[0].forEach((function(e){t[e.id]=e.attributes})),t}console.log("api",j["a"]);var A={name:"Items",props:{msg:String},setup:function(){var e=[],t=!1;return{items:e,isloading:t}},mounted:function(){var e=this;this.isloading=!0,y().then((function(t){e.isloading=!1,e.items=w(t),console.log("mounted()",t,w(t))}))},methods:{refresh:function(){var e=this;this.isloading=!0,y().then((function(t){e.isloading=!1,e.items=w(t)}))}}};n("a1cf");A.render=O,A.__scopeId="data-v-53aaf04c";var _=A,x={name:"别过期了",components:{Items:_}};x.render=h;var k=x,S=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/add",name:"Add",component:function(){return n.e("about").then(n.bind(null,"7e55"))}}],E=Object(b["a"])({history:Object(b["b"])("/dontexpired-web/"),routes:S}),P=E,T=n("5502"),C=T["a"].createStore({state:{},mutations:{},actions:{},modules:{}});Object(r["a"])(f).use(P).use(C).mount("#app")},"613c":function(e,t,n){},"64be":function(e,t,n){"use strict";n("ca3b")},a1cf:function(e,t,n){"use strict";n("613c")},ca3b:function(e,t,n){}});
//# sourceMappingURL=index.0ed24a2d.js.map