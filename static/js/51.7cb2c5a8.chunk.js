(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[51],{171:function(t,n,e){"use strict";function r(t,n){var e=URL.createObjectURL(t),r=document.createElement("a");r.style.display="none",r.href=e,r.download=n,document.body.appendChild(r),r.click(),window.URL.revokeObjectURL(e),document.body.removeChild(r)}e.d(n,"a",(function(){return r}))},198:function(t,n,e){"use strict";n.a=[{format:"stl",name:"STL",options:["binary"]},{format:"ply",name:"PLY",options:["binary"]}]},497:function(t,n,e){"use strict";e.r(n),e.d(n,"exportModel",(function(){return p}));var r=e(34),a=e.n(r),c=e(46),u=e(171),o=e(18),s=e(198),i={stl:function(t,n){return b.apply(this,arguments)},gltf:function(t,n){return w.apply(this,arguments)},usdz:function(t){return v.apply(this,arguments)},ply:function(t,n){return k.apply(this,arguments)}};function p(t,n){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(a.a.mark((function t(n,e){var r,c,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.format,c=s.a.find((function(t){return t.format===r})).options,u=Object(o.d)(e,c),i[r](n,u);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t,n){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(a.a.mark((function t(n,r){var c,u,o,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.rotateX(Math.PI/2),t.next=3,e.e(63).then(e.bind(null,478));case 3:return c=t.sent,u=c.STLExporter,o=new u,s=o.parse(n,r),n.rotateX(-Math.PI/2),t.abrupt("return",s);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(){return(b=Object(c.a)(a.a.mark((function t(n,e){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(n,e);case 2:r=t.sent,c=new Blob([r],{type:"text/plain"}),"model.stl",Object(u.a)(c,"model.stl");case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t,n){return y.apply(this,arguments)}function y(){return(y=Object(c.a)(a.a.mark((function t(n,r){var c,u,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(61).then(e.bind(null,479));case 2:return c=t.sent,u=c.GLTFExporter,o=new u,t.abrupt("return",new Promise((function(t){return o.parse(n,t,r)})));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(){return(w=Object(c.a)(a.a.mark((function t(n,e){var r,c,o,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(n,e);case 2:r=t.sent,c=e.binary,o=c?new Blob([r],{type:"application/octet-stream"}):new Blob([JSON.stringify(r)],{type:"text/plain"}),s="model.".concat(c?"glb":"gltf"),Object(u.a)(o,s);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=Object(c.a)(a.a.mark((function t(n){var r,c,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(64).then(e.bind(null,480));case 2:return r=t.sent,c=r.USDZExporter,u=new c,t.abrupt("return",u.parse(n));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(){return(v=Object(c.a)(a.a.mark((function t(n){var e,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(n);case 2:e=t.sent,r=new Blob([e],{type:"application/octet-stream"}),"model.usdz",Object(u.a)(r,"model.usdz");case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(t,n){return j.apply(this,arguments)}function j(){return(j=Object(c.a)(a.a.mark((function t(n,r){var c,u,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(62).then(e.bind(null,481));case 2:return c=t.sent,u=c.PLYExporter,o=new u,t.abrupt("return",new Promise((function(t){return o.parse(n,t,r)})));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(){return(k=Object(c.a)(a.a.mark((function t(n,e){var r,c,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(n,e);case 2:r=t.sent,c=e.binary,o=c?new Blob([r],{type:"application/octet-stream"}):new Blob([r],{type:"text/plain"}),"model.ply",Object(u.a)(o,"model.ply");case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=51.7cb2c5a8.chunk.js.map