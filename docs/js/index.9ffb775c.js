(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],f=0,l=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={index:0},c=[];function a(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"395a0cbf"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=a(e);var s=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,n[1](s)}o[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dontexpired-web/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"365c":function(e,t,n){"use strict";var r=n("0631"),o=n.n(r),c={id:"oaLzmC7gTYliUse2S2nnvlW2-gzGzoHsz",key:"OntfdRFAVrhQGcAuDXV9LYD9",server:"https://oalzmc7g.lc-cn-n1-shared.com"};o.a.init({appId:c.id,appKey:c.key,serverURL:c.server}),window.AV=o.a;n("7db0");function a(e){throw console.log(e),e}var i={getCurrUser:function(){return o.a.User.current()},logOut:function(){return o.a.User.logOut()},getItemList:function(){return new o.a.Query("TestObject").find().catch(a)},addItem:function(e){var t,n=o.a.Object.extend("TestObject"),r=new n;for(t in e)r.set(t,e[t]);return r.save().then((function(e){console.log("TestObject已经创建",e)})).catch(a)}};t["a"]={itemApi:i}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("830f"),o=n("5c40"),c={id:"app"},a={id:"nav"},i=Object(o["h"])("Home"),u=Object(o["h"])(" | "),s=Object(o["h"])("Add");function f(e,t){var n=Object(o["u"])("router-link"),r=Object(o["u"])("router-view");return Object(o["p"])(),Object(o["e"])("div",c,[Object(o["i"])("div",a,[Object(o["i"])(n,{to:"/"},{default:Object(o["A"])((function(){return[i]})),_:1}),u,Object(o["i"])(n,{to:"/add"},{default:Object(o["A"])((function(){return[s]})),_:1})]),Object(o["i"])(r)])}n("64be");const d={};d.render=f;var l=d,b=(n("d3b7"),n("8c4f")),p={class:"home"};function v(e,t){var n=Object(o["u"])("Items");return Object(o["p"])(),Object(o["e"])("div",p,[Object(o["i"])(n)])}var m=n("9ff4"),h=Object(o["C"])("data-v-53aaf04c");Object(o["s"])("data-v-53aaf04c");var O={class:"hello"};Object(o["q"])();var j=h((function(e,t){return Object(o["p"])(),Object(o["e"])("div",O,[(Object(o["p"])(!0),Object(o["e"])(o["b"],null,Object(o["t"])(e.items,(function(e){return Object(o["p"])(),Object(o["e"])("p",{key:e._id,class:"text-center"},Object(m["E"])(e),1)})),128))])})),g=(n("4160"),n("3ca3"),n("159b"),n("ddb0"),n("365c"));function y(){return Promise.all([g["a"].itemApi.getItemList()]).then((function(e){return console.log("getData, results",e),window.results=e,e}))}function w(e){var t={};return e[0].forEach((function(e){t[e.id]=e.attributes})),t}console.log("api",g["a"]);var x={name:"Items",props:{msg:String},setup:function(){var e=[],t=!1;return{items:e,isloading:t}},mounted:function(){var e=this;this.isloading=!0,y().then((function(t){e.isloading=!1,e.items=w(t),console.log("mounted()",t,w(t))}))},methods:{refresh:function(){var e=this;this.isloading=!0,y().then((function(t){e.isloading=!1,e.items=w(t)}))}}};n("a1cf");x.render=j,x.__scopeId="data-v-53aaf04c";var A=x,_={name:"别过期了",components:{Items:A}};_.render=v;var P=_,k=[{path:"/",name:"Home",component:P},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/add",name:"Add",component:function(){return n.e("about").then(n.bind(null,"7e55"))}}],I=Object(b["a"])({history:Object(b["b"])("/dontexpired-web/"),routes:k}),S=I,T=n("5502"),L=T["a"].createStore({state:{},mutations:{},actions:{},modules:{}});Object(r["a"])(l).use(S).use(L).mount("#app")},"613c":function(e,t,n){},"64be":function(e,t,n){"use strict";n("ca3b")},a1cf:function(e,t,n){"use strict";n("613c")},ca3b:function(e,t,n){}});
//# sourceMappingURL=index.9ffb775c.js.map