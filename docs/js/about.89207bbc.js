(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"20a7":function(t,e,n){},"4c53":function(t,e,n){"use strict";var a=n("23e7"),u=n("857a"),c=n("af03");a({target:"String",proto:!0,forced:c("sub")},{sub:function(){return u(this,"sub","","")}})},"7e55":function(t,e,n){"use strict";n.r(e);n("b0c0"),n("4c53");var a=n("5c40"),u=n("9ff4"),c=n("830f"),i={class:"form-element"},r=Object(a["h"])("  ",1);function l(t,e){return Object(a["p"])(),Object(a["e"])("div",i,[Object(a["i"])("h2",null,Object(u["E"])(t.state.title),1),Object(a["i"])("div",null,[Object(a["B"])(Object(a["i"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.state.name=e}),placeholder:"产品名称"},null,512),[[c["b"],t.state.name]])]),Object(a["i"])("div",null,[Object(a["B"])(Object(a["i"])("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.state.brand=e}),placeholder:"品牌"},null,512),[[c["b"],t.state.brand]])]),Object(a["i"])("div",null,[Object(a["B"])(Object(a["i"])("input",{type:"date","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.state.manufacturingDate=e}),placeholder:"生产日期"},null,512),[[c["b"],t.state.manufacturingDate]])]),Object(a["i"])("div",null,[Object(a["B"])(Object(a["i"])("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=function(e){return t.state.keepDate=e}),placeholder:"保值期/天"},null,512),[[c["b"],t.state.keepDate]])]),Object(a["i"])("div",null,[Object(a["B"])(Object(a["i"])("input",{type:"date","onUpdate:modelValue":e[5]||(e[5]=function(e){return t.state.expiryDate=e}),placeholder:"过期日期"},null,512),[[c["b"],t.state.expiryDate]])]),Object(a["i"])("div",null,[Object(a["B"])(Object(a["i"])("input",{type:"text","onUpdate:modelValue":e[6]||(e[6]=function(e){return t.state.wegth=e}),placeholder:"计量/克/公斤"},null,512),[[c["b"],t.state.wegth]])]),Object(a["i"])("div",null,[Object(a["B"])(Object(a["i"])("input",{type:"text","onUpdate:modelValue":e[7]||(e[7]=function(e){return t.state.sub=e}),placeholder:"大类"},null,512),[[c["b"],t.state.sub]])]),r,Object(a["i"])("div",null,[Object(a["B"])(Object(a["i"])("input",{type:"text","onUpdate:modelValue":e[8]||(e[8]=function(e){return t.state.tag=e}),placeholder:"tag"},null,512),[[c["b"],t.state.tag]])]),Object(a["i"])("div",null,[Object(a["i"])("button",{onClick:e[9]||(e[9]=function(e){return t.add(e)})}," Submit ")]),Object(a["i"])("div",null," Values: "+Object(u["E"])(t.state.name+" "+t.state.manufacturingDate),1)])}var o=n("a1e9"),b=n("365c"),d={setup:function(){var t=Object(o["h"])(0),e=function(){t.value++;var e={name:n.name,brand:n.brand,manufacturingDate:n.manufacturingDate,expiryDate:n.expiryDate,keepDate:n.keepDate,wegth:n.wegth,sub:n.sub,tub:n.tub,tag:n.tag};console.log("add ",n);var a=b["a"].itemApi.addItem(e);console.log("add",e,a)},n=Object(o["g"])({title:"赶紧加上，别过期了",name:"",brand:"",manufacturingDate:"",expiryDate:"",keepDate:"",wegth:"",sub:"",tub:"",tag:""});return{count:t,add:e,state:n}}};n("c293");d.render=l;e["default"]=d},"857a":function(t,e,n){var a=n("1d80"),u=/"/g;t.exports=function(t,e,n,c){var i=String(a(t)),r="<"+e;return""!==n&&(r+=" "+n+'="'+String(c).replace(u,"&quot;")+'"'),r+">"+i+"</"+e+">"}},af03:function(t,e,n){var a=n("d039");t.exports=function(t){return a((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b0c0:function(t,e,n){var a=n("83ab"),u=n("9bf2").f,c=Function.prototype,i=c.toString,r=/^\s*function ([^ (]*)/,l="name";a&&!(l in c)&&u(c,l,{configurable:!0,get:function(){try{return i.call(this).match(r)[1]}catch(t){return""}}})},c293:function(t,e,n){"use strict";n("20a7")},f820:function(t,e,n){"use strict";n.r(e);var a=n("5c40"),u={class:"about"},c=Object(a["i"])("h1",null,"This is an about page",-1);function i(t,e){return Object(a["p"])(),Object(a["e"])("div",u,[c])}const r={};r.render=i;e["default"]=r}}]);
//# sourceMappingURL=about.89207bbc.js.map