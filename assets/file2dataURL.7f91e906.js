var y=Object.defineProperty,U=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var p=(t,e,o)=>e in t?y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,n=(t,e)=>{for(var o in e||(e={}))d.call(e,o)&&p(t,o,e[o]);if(a)for(var o of a(e))c.call(e,o)&&p(t,o,e[o]);return t},u=(t,e)=>U(t,v(e));var m=(t,e)=>{var o={};for(var r in t)d.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&a)for(var r of a(t))e.indexOf(r)<0&&c.call(t,r)&&(o[r]=t[r]);return o};import{a3 as w}from"./vendor.732e1712.js";import{a as C,j as f}from"./index.6f055f91.js";import{B as F}from"./Box.655b44ea.js";import{B as R}from"./Button.48735844.js";const b={button:{padding:"0.5rem 1rem",margin:0,color:"rgba(16, 16, 16, 0.8)",border:"1px solid rgba(16, 16, 16, 0.5)","&:hover":{border:"1px solid rgba(16, 16, 16, 0.8)",backgroundColor:"rgba(210, 210, 210, 0.2)"}},input:{opacity:0,width:0,maxWidth:0}};function W(D){var i=D,{id:t="upload",multiple:e=!1,label:o="Upload",mimeType:r="image/*",onChange:g,style:x={}}=i,h=m(i,["id","multiple","label","mimeType","onChange","style"]);const l=w(),j=()=>{const s=l.current.files;g(s)},B=n(n({},b.button),x);return C(F,{children:[f(R,u(n({variant:"outlined",htmlFor:t,component:"label",sx:B},h),{children:o})),f("input",{name:t,id:t,type:"file",multiple:e,accept:r,style:b.input,ref:s=>l.current=s,onChange:j})]})}const q=async t=>new Promise(e=>{const o=new FileReader;o.onload=r=>e(r.target.result),o.readAsDataURL(t)});export{W as U,q as f};
