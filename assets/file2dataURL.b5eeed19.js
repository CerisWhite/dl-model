var y=Object.defineProperty,U=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var p=(t,e,o)=>e in t?y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,n=(t,e)=>{for(var o in e||(e={}))c.call(e,o)&&p(t,o,e[o]);if(r)for(var o of r(e))d.call(e,o)&&p(t,o,e[o]);return t},u=(t,e)=>U(t,v(e));var m=(t,e)=>{var o={};for(var a in t)c.call(t,a)&&e.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&r)for(var a of r(t))e.indexOf(a)<0&&d.call(t,a)&&(o[a]=t[a]);return o};import{s as w}from"./vendor.f9034472.js";import{a as C,j as b}from"./index.8f7ac7ee.js";import{B as F}from"./Box.0aacd1ae.js";import{B as R}from"./Button.baabc438.js";const f={button:{padding:"0.5rem 1rem",margin:0,color:"rgba(16, 16, 16, 0.8)",border:"1px solid rgba(16, 16, 16, 0.5)","&:hover":{border:"1px solid rgba(16, 16, 16, 0.8)",backgroundColor:"rgba(210, 210, 210, 0.2)"}},input:{opacity:0,width:0,maxWidth:0}};function W(D){var i=D,{id:t="upload",multiple:e=!1,label:o="Upload",mimeType:a="image/*",onChange:g,style:x={}}=i,h=m(i,["id","multiple","label","mimeType","onChange","style"]);const l=w(),j=()=>{const s=l.current.files;g(s)},B=n(n({},f.button),x);return C(F,{children:[b(R,u(n({variant:"outlined",htmlFor:t,component:"label",sx:B},h),{children:o})),b("input",{name:t,id:t,type:"file",multiple:e,accept:a,style:f.input,ref:s=>l.current=s,onChange:j})]})}const q=async t=>new Promise(e=>{const o=new FileReader;o.onload=a=>e(a.target.result),o.readAsDataURL(t)});export{W as U,q as f};
