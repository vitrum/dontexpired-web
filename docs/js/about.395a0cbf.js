(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"4c53":function(t,e,n){"use strict";var a=n("23e7"),u=n("857a"),c=n("af03");a({target:"String",proto:!0,forced:c("sub")},{sub:function(){return u(this,"sub","","")}})},"7e55":function(t,e,n){"use strict";n.r(e);n("b0c0"),n("4c53");var a=n("5c40"),u=n("9ff4"),c=n("830f"),r={class:"form-element"},l=Object(a["h"])("  ",1);function i(t,e){return Object(a["p"])(),Object(a["e"])("div",r,[Object(a["i"])("h2",null,Object(u["E"])(t.state.title),1),Object(a["i"])("p",null,[Object(a["B"])(Object(a["i"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.state.name=e}),placeholder:"产品名称"},null,512),[[c["b"],t.state.name]])]),Object(a["i"])("p",null,[Object(a["B"])(Object(a["i"])("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.state.brand=e}),placeholder:"品牌"},null,512),[[c["b"],t.state.brand]])]),Object(a["i"])("p",null,[Object(a["B"])(Object(a["i"])("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.state.manufacturingDate=e}),placeholder:"生产日期"},null,512),[[c["b"],t.state.manufacturingDate]])]),Object(a["i"])("p",null,[Object(a["B"])(Object(a["i"])("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=function(e){return t.state.expiryDate=e}),placeholder:"过期日期"},null,512),[[c["b"],t.state.expiryDate]])]),Object(a["i"])("p",null,[Object(a["B"])(Object(a["i"])("input",{type:"text","onUpdate:modelValue":e[5]||(e[5]=function(e){return t.state.keepDate=e}),placeholder:"保值期"},null,512),[[c["b"],t.state.keepDate]])]),Object(a["i"])("p",null,[Object(a["B"])(Object(a["i"])("input",{type:"text","onUpdate:modelValue":e[6]||(e[6]=function(e){return t.state.wegth=e}),placeholder:"计量"},null,512),[[c["b"],t.state.wegth]])]),Object(a["i"])("p",null,[Object(a["B"])(Object(a["i"])("input",{type:"text","onUpdate:modelValue":e[7]||(e[7]=function(e){return t.state.sub=e}),placeholder:"大类"},null,512),[[c["b"],t.state.sub]])]),l,Object(a["i"])("p",null,[Object(a["B"])(Object(a["i"])("input",{type:"text","onUpdate:modelValue":e[8]||(e[8]=function(e){return t.state.tag=e}),placeholder:"tag"},null,512),[[c["b"],t.state.tag]])]),Object(a["i"])("p",null,[Object(a["i"])("button",{onClick:e[9]||(e[9]=function(e){return t.add(e)})}," Submit ")]),Object(a["i"])("p",null," Values: "+Object(u["E"])(t.state.name+" "+t.state.manufacturingDate),1)])}var o=n("a1e9"),b=n("365c"),p={setup:function(){var t=Object(o["h"])(0),e=function(){t.value++;var e={name:n.name,brand:n.brand,manufacturingDate:n.manufacturingDate,expiryDate:n.expiryDate,keepDate:n.keepDate,wegth:n.wegth,sub:n.sub,tub:n.tub,tag:n.tag};console.log("add ",n);var a=b["a"].itemApi.addItem(e);console.log("add",e,a)},n=Object(o["g"])({title:"赶紧加上，别过期了",name:"",brand:"",manufacturingDate:"",expiryDate:"",keepDate:"",wegth:"",sub:"",tub:"",tag:""});return{count:t,add:e,state:n}}};p.render=i;e["default"]=p},"857a":function(t,e,n){var a=n("1d80"),u=/"/g;t.exports=function(t,e,n,c){var r=String(a(t)),l="<"+e;return""!==n&&(l+=" "+n+'="'+String(c).replace(u,"&quot;")+'"'),l+">"+r+"</"+e+">"}},af03:function(t,e,n){var a=n("d039");t.exports=function(t){return a((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b0c0:function(t,e,n){var a=n("83ab"),u=n("9bf2").f,c=Function.prototype,r=c.toString,l=/^\s*function ([^ (]*)/,i="name";a&&!(i in c)&&u(c,i,{configurable:!0,get:function(){try{return r.call(this).match(l)[1]}catch(t){return""}}})},f820:function(t,e,n){"use strict";n.r(e);var a=n("5c40"),u={class:"about"},c=Object(a["i"])("h1",null,"This is an about page",-1);function r(t,e){return Object(a["p"])(),Object(a["e"])("div",u,[c])}const l={};l.render=r;e["default"]=l}}]);
//# sourceMappingURL=about.395a0cbf.js.map