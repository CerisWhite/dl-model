var x=Object.defineProperty;var a=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var g=(t,o,n)=>o in t?x(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,s=(t,o)=>{for(var n in o||(o={}))u.call(o,n)&&g(t,n,o[n]);if(a)for(var n of a(o))f.call(o,n)&&g(t,n,o[n]);return t};var c=(t,o)=>{var n={};for(var r in t)u.call(t,r)&&o.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&a)for(var r of a(t))o.indexOf(r)<0&&f.call(t,r)&&(n[r]=t[r]);return n};import{ax as B}from"./vendor.ad1e55a4.js";import{B as C}from"./Button.e6630a8d.js";const b=t=>{const o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null},l=({r:t,g:o,b:n})=>(t*299+o*587+n*114)/1e3,m=t=>{const o=b(t);return l(o)>128?"#000000":"#ffffff"};function k(v){var e=v,{color:t,children:o=null,title:n=void 0,style:r={}}=e,d=c(e,["color","children","title","style"]);const p=s({color:m(t),backgroundColor:t,"&:hover":{backgroundColor:t}},r);return B(C,s({className:"ColorButton",sx:p,variant:"contained",title:n},d),o!=null?o:t)}export{k as C};
