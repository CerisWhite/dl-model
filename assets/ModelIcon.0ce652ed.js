var j=Object.defineProperty;var a=Object.getOwnPropertySymbols;var t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;var e=(n,c,o)=>c in n?j(n,c,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[c]=o,g=(n,c)=>{for(var o in c||(c={}))t.call(c,o)&&e(n,o,c[o]);if(a)for(var o of a(c))r.call(c,o)&&e(n,o,c[o]);return n};var h=(n,c)=>{var o={};for(var s in n)t.call(n,s)&&c.indexOf(s)<0&&(o[s]=n[s]);if(n!=null&&a)for(var s of a(n))c.indexOf(s)<0&&r.call(n,s)&&(o[s]=n[s]);return o};import{j as l}from"./index.276de4a8.js";const p=n=>n&&["b","c","d","h","r","w"].includes(n[0]);function f(o){var s=o,{modelId:n}=s,c=h(s,["modelId"]);const i=p(n)?`img/icon/${n}.png`:"";return i&&l("img",g({src:i,alt:n,loading:"lazy"},c))}export{f as M,p as h};
