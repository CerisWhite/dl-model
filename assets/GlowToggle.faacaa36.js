var u=Object.defineProperty;var s=Object.getOwnPropertySymbols;var n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;var g=(o,a,e)=>a in o?u(o,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[a]=e,i=(o,a)=>{for(var e in a||(a={}))n.call(a,e)&&g(o,e,a[e]);if(s)for(var e of s(a))r.call(a,e)&&g(o,e,a[e]);return o};var v=(o,a)=>{var e={};for(var l in o)n.call(o,l)&&a.indexOf(l)<0&&(e[l]=o[l]);if(o!=null&&s)for(var l of s(o))a.indexOf(l)<0&&r.call(o,l)&&(e[l]=o[l]);return e};import{ax as d}from"./vendor.dead0e45.js";function $(w){var c=w,{type:o,value:a,icon:e,checked:l=!1,name:t=a,onClick:G=()=>{}}=c,f=v(c,["type","value","icon","checked","name","onClick"]);const m=`GlowToggle ${l?"checked":""}`,p=o==="icon"?d("img",{src:e,alt:t}):d("span",null,t);return d("div",i({className:m,"data-type":o,"data-value":a,onClick:G},f),p)}export{$ as G};
