var c=Object.defineProperty;var t=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var a=(s,e,n)=>e in s?c(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n,i=(s,e)=>{for(var n in e||(e={}))m.call(e,n)&&a(s,n,e[n]);if(t)for(var n of t(e))d.call(e,n)&&a(s,n,e[n]);return s};import{B as l,C as o}from"./index.cb250fb3.js";function p(){return new Worker("/dl-model/assets/aniWorker.91904fe7.js",{type:"module"})}const u=async s=>{const e=new p;return new Promise(n=>{e.addEventListener("message",r=>{e.terminate(),n(r.data)}),e.postMessage(i({},s))})},w=async s=>{const e=await u(s);await l(e,"animation"),console.log("Animation DB Initialized")},A=s=>o({type:"search",store:"animation",index:"fullName",value:s}),B=s=>o({type:"getAllByIndex",store:"animation",index:"User",value:s});export{B as g,w as i,A as s};
