var y=Object.defineProperty,U=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var p=(t,e,o)=>e in t?y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,a=(t,e)=>{for(var o in e||(e={}))l.call(e,o)&&p(t,o,e[o]);if(n)for(var o of n(e))c.call(e,o)&&p(t,o,e[o]);return t},u=(t,e)=>U(t,v(e));var m=(t,e)=>{var o={};for(var r in t)l.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&n)for(var r of n(t))e.indexOf(r)<0&&c.call(t,r)&&(o[r]=t[r]);return o};import{s as w}from"./vendor.2dfd018b.js";import{a as C,j as b}from"./index.24c64bef.js";import{B as F}from"./Box.688de84c.js";import{B as R}from"./Button.7d4ed2bb.js";const f={button:{padding:"0.5rem 1rem",margin:0,color:"rgba(16, 16, 16, 0.8)",border:"1px solid rgba(16, 16, 16, 0.5)","&:hover":{border:"1px solid rgba(16, 16, 16, 0.8)",backgroundColor:"rgba(210, 210, 210, 0.2)"}},input:{opacity:0,width:0,maxWidth:0}};function W(D){var d=D,{id:t="upload",multiple:e=!1,label:o="Upload",mimeType:r="image/*",onChange:g,style:x={}}=d,h=m(d,["id","multiple","label","mimeType","onChange","style"]);const i=w(),j=()=>{const s=i.current.files;g(s)},B=a(a({},f.button),x);return C(F,{children:[b(R,u(a({variant:"outlined",htmlFor:t,component:"label",sx:B},h),{children:o})),b("input",{name:t,id:t,type:"file",multiple:e,accept:r,style:f.input,ref:s=>i.current=s,onChange:j})]})}const q=async t=>new Promise(e=>{const o=new FileReader;o.onload=r=>e(r.target.result),o.readAsDataURL(t)});export{W as U,q as f};
