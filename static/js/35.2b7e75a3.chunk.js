(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[35],{130:function(e,a,n){"use strict";n.d(a,"a",(function(){return r}));var t=n(2),i=n(1),c=n.n(i),d=n(73);function r(e,a){var n=function(a,n){return c.a.createElement(d.a,Object(t.a)({ref:n},a),e)};return n.muiName=d.a.muiName,c.a.memo(c.a.forwardRef(n))}},400:function(e,a,n){"use strict";var t=n(64);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=t(n(1)),c=(0,t(n(79)).default)(i.default.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");a.default=c},468:function(e,a,n){"use strict";n.r(a);var t=n(31),i=n(9),c=n(11),d=n(462),r=n(6),s=n(139),l=n.n(s);var u=function(e){var a=e.change,n=a.id,t=a.time,i=a.eyeIdx,s=a.mouthIdx,u=e.deleteFaceChange,j=e.handleChange,h={type:"number",step:1,min:1,max:9};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"ChainAniFace-delete",onClick:u,id:n,children:Object(c.jsx)(l.a,{})}),Object(c.jsx)(d.a,{onChange:j,inputProps:Object(r.a)(Object(r.a)({},h),{},{max:100,"data-name":"time","data-id":n}),value:t}),Object(c.jsx)(d.a,{onChange:j,inputProps:Object(r.a)(Object(r.a)({},h),{},{"data-name":"eyeIdx","data-id":n}),value:i}),Object(c.jsx)(d.a,{onChange:j,inputProps:Object(r.a)(Object(r.a)({},h),{},{"data-name":"mouthIdx","data-id":n}),value:s})]})},j=n(400),h=n.n(j);var o=function(e){var a=e.faceChanges,n=e.deleteFaceChange,t=e.updateFaceChanges,d=e.addFaceChange,s=function(e){var n=e.currentTarget,c=n.value,d=n.dataset,s=d.id,l=d.name,u=a.find((function(e){return e.id===s})),j=Object(r.a)(Object(r.a)({},u),{},Object(i.a)({},l,c));t(s,j)},l=null===a||void 0===a?void 0:a.map((function(e){return Object(c.jsx)(u,{change:e,deleteFaceChange:n,handleChange:s},e.id)}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"ChainAniFace-title",children:"Facial Expression"}),Object(c.jsxs)("div",{className:"ChainAniFace-list",children:[(null===a||void 0===a?void 0:a.length)>0&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{children:"Time (%)"}),Object(c.jsx)("div",{children:"Eye"}),Object(c.jsx)("div",{children:"Mouth"}),l]}),Object(c.jsx)("div",{className:"ChainAniFace-delete",onClick:d,children:Object(c.jsx)(h.a,{})})]})]})},m=n(63);a.default=function(e){var a=e.timeScale,n=e.repetitions,r=e.faceChanges,s=e.updateParams,l=function(e){var a=e.target,n=a.name,t=a.value,c=Object(i.a)({},n,t);s(c)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"ChainAni-fields",children:[Object(c.jsx)(d.a,{onChange:l,label:"Speed",size:"small",margin:"dense",variant:"outlined",inputProps:{type:"number",step:.25,name:"timeScale"},value:a}),Object(c.jsx)(d.a,{onChange:l,label:"Repetitions",size:"small",margin:"dense",variant:"outlined",inputProps:{type:"number",name:"repetitions"},value:n})]}),Object(c.jsx)(o,{faceChanges:r,deleteFaceChange:function(e){var a=e.currentTarget.id,n=r.filter((function(e){return e.id!==a}));s({faceChanges:n})},updateFaceChanges:function(e,a){var n=r.map((function(n){return n.id===e?a:n}));s({faceChanges:n})},addFaceChange:function(){var e={id:Object(m.a)(),time:"",eyeIdx:"",mouthIdx:""},a={faceChanges:[].concat(Object(t.a)(r),[e])};s(a)}})]})}}}]);
//# sourceMappingURL=35.2b7e75a3.chunk.js.map