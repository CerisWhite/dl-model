var p=Object.defineProperty,B=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var c=(t,o,n)=>o in t?p(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,e=(t,o)=>{for(var n in o||(o={}))f.call(o,n)&&c(t,n,o[n]);if(s)for(var n of s(o))u.call(o,n)&&c(t,n,o[n]);return t},g=(t,o)=>B(t,C(o));var x=(t,o)=>{var n={};for(var r in t)f.call(t,r)&&o.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&s)for(var r of s(t))o.indexOf(r)<0&&u.call(t,r)&&(n[r]=t[r]);return n};import{j as b}from"./index.506fef86.js";import{B as d}from"./Button.c98ef41c.js";const m=t=>{const o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null},j=({r:t,g:o,b:n})=>(t*299+o*587+n*114)/1e3,v=t=>{const o=m(t);return j(o)>128?"#000000":"#ffffff"};function R(I){var a=I,{color:t,children:o=null,title:n=void 0,style:r={}}=a,i=x(a,["color","children","title","style"]);const l=e({color:v(t),backgroundColor:t,"&:hover":{backgroundColor:t}},r);return b(d,g(e({className:"ColorButton",sx:l,variant:"contained",title:n},i),{children:o!=null?o:t}))}export{R as C};
