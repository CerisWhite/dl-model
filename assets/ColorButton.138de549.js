var l=Object.defineProperty,p=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var c=(t,o,n)=>o in t?l(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,a=(t,o)=>{for(var n in o||(o={}))u.call(o,n)&&c(t,n,o[n]);if(s)for(var n of s(o))f.call(o,n)&&c(t,n,o[n]);return t},g=(t,o)=>p(t,B(o));var x=(t,o)=>{var n={};for(var r in t)u.call(t,r)&&o.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&s)for(var r of s(t))o.indexOf(r)<0&&f.call(t,r)&&(n[r]=t[r]);return n};import{j as C}from"./index.43450d12.js";import{B as b}from"./Button.02c6198a.js";const m=t=>{const o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null},j=({r:t,g:o,b:n})=>(t*299+o*587+n*114)/1e3,v=t=>{const o=m(t);return j(o)>128?"#000000":"#ffffff"};function R(I){var e=I,{color:t,children:o=null,title:n=void 0,style:r={}}=e,d=x(e,["color","children","title","style"]);const i=a({color:v(t),backgroundColor:t,"&:hover":{backgroundColor:t}},r);return C(b,g(a({className:"ColorButton",sx:i,variant:"contained",title:n},d),{children:o!=null?o:t}))}export{R as C};
