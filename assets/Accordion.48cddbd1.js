var x=Object.defineProperty,N=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;var l=(o,e,r)=>e in o?x(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,m=(o,e)=>{for(var r in e||(e={}))d.call(e,r)&&l(o,r,e[r]);if(c)for(var r of c(e))i.call(e,r)&&l(o,r,e[r]);return o},p=(o,e)=>N(o,S(e));var A=(o,e)=>{var r={};for(var s in o)d.call(o,s)&&e.indexOf(s)<0&&(r[s]=o[s]);if(o!=null&&c)for(var s of c(o))e.indexOf(s)<0&&i.call(o,s)&&(r[s]=o[s]);return r};import{a7 as $}from"./vendor.732e1712.js";import{u as b}from"./useToggleState.6a131330.js";import{j as a,a as f}from"./index.fd6a0e27.js";import{c as u}from"./createSvgIcon.877e22de.js";var z=u(a("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown"),C=u(a("path",{d:"m7 14 5-5 5 5z"}),"ArrowDropUp");const k=$((o,e)=>{const t=o,{children:r,className:s="",defaultOpen:v=!1,disableGutters:g=!1}=t,h=A(t,["children","className","defaultOpen","disableGutters"]),[n,j]=b(v),w=`Accordion ${g?"noGutters":""} ${n?"open":""} ${s}`,D=n?a(C,{}):a(z,{});return f("div",p(m({className:w},h),{ref:e,children:[r[0]&&f("div",{onClick:j,className:"Accordion-summary",children:[D,r[0]]}),n&&r[1]&&a("div",{className:"Accordion-details",children:r[1]})]}))});export{k as A,C as a,z as b};
