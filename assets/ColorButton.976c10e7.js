var p=Object.defineProperty,B=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var c=(t,o,n)=>o in t?p(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,s=(t,o)=>{for(var n in o||(o={}))u.call(o,n)&&c(t,n,o[n]);if(a)for(var n of a(o))f.call(o,n)&&c(t,n,o[n]);return t},g=(t,o)=>B(t,C(o));var x=(t,o)=>{var n={};for(var r in t)u.call(t,r)&&o.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&a)for(var r of a(t))o.indexOf(r)<0&&f.call(t,r)&&(n[r]=t[r]);return n};import{j as b}from"./index.7a118c53.js";import{B as d}from"./Button.2a2aeeaa.js";const m=t=>{const o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null},j=({r:t,g:o,b:n})=>(t*299+o*587+n*114)/1e3,v=t=>{const o=m(t);return j(o)>128?"#000000":"#ffffff"};function R(I){var e=I,{color:t,children:o=null,title:n=void 0,style:r={}}=e,i=x(e,["color","children","title","style"]);const l=s({color:v(t),backgroundColor:t,"&:hover":{backgroundColor:t}},r);return b(d,g(s({className:"ColorButton",sx:l,variant:"contained",title:n},i),{children:o!=null?o:t}))}export{R as C};
