var c=Object.defineProperty;var a=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var t=(s,e,n)=>e in s?c(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n,i=(s,e)=>{for(var n in e||(e={}))d.call(e,n)&&t(s,n,e[n]);if(a)for(var n of a(e))m.call(e,n)&&t(s,n,e[n]);return s};import{r as l,s as o}from"./index.75d3cd0a.js";function p(){return new Worker("/dl-model/assets/aniWorker.63742bf1.js",{type:"module"})}const u=async s=>{const e=new p;return new Promise(n=>{e.addEventListener("message",r=>{e.terminate(),n(r.data)}),e.postMessage(i({},s))})},w=async s=>{const e=await u(s);await l(e,"animation"),console.log("Animation DB Initialized")},A=s=>o({type:"search",store:"animation",index:"fullName",value:s}),x=s=>o({type:"getAllByIndex",store:"animation",index:"User",value:s});export{x as g,w as i,A as s};
