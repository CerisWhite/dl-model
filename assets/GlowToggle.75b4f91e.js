var v=Object.defineProperty,w=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;var t=(o,a,e)=>a in o?v(o,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[a]=e,g=(o,a)=>{for(var e in a||(a={}))n.call(a,e)&&t(o,e,a[e]);if(s)for(var e of s(a))r.call(a,e)&&t(o,e,a[e]);return o},f=(o,a)=>w(o,x(a));var G=(o,a)=>{var e={};for(var l in o)n.call(o,l)&&a.indexOf(l)<0&&(e[l]=o[l]);if(o!=null&&s)for(var l of s(o))a.indexOf(l)<0&&r.call(o,l)&&(e[l]=o[l]);return e};import{j as c}from"./index.afb4a268.js";function $(T){var i=T,{type:o,value:a,icon:e,checked:l=!1,name:d=a,onClick:h=()=>{}}=i,j=G(i,["type","value","icon","checked","name","onClick"]);const m=`GlowToggle ${l?"checked":""}`,p=o==="icon"?c("img",{src:e,alt:d}):c("span",{children:d});return c("div",f(g({className:m,"data-type":o,"data-value":a,onClick:h},j),{children:p}))}export{$ as G};
