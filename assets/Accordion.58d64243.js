var N=Object.defineProperty,S=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var p=(o,r,s)=>r in o?N(o,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[r]=s,u=(o,r)=>{for(var s in r||(r={}))d.call(r,s)&&p(o,s,r[s]);if(c)for(var s of c(r))m.call(r,s)&&p(o,s,r[s]);return o},A=(o,r)=>S(o,$(r));var f=(o,r)=>{var s={};for(var a in o)d.call(o,a)&&r.indexOf(a)<0&&(s[a]=o[a]);if(o!=null&&c)for(var a of c(o))r.indexOf(a)<0&&m.call(o,a)&&(s[a]=o[a]);return s};import{a7 as y}from"./vendor.5a53546f.js";import{u as z}from"./useToggleState.0427b3e7.js";import{j as e,a as v}from"./index.a9ccaecb.js";import{c as g}from"./createSvgIcon.1b57581c.js";var C=g(e("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown"),G=g(e("path",{d:"m7 14 5-5 5 5z"}),"ArrowDropUp");const q=y((o,r)=>{const l=o,{children:s=[],className:a="",defaultOpen:h=!1,disableGutters:j=!1}=l,w=f(l,["children","className","defaultOpen","disableGutters"]),[t,D]=z(h),b=`Accordion ${j?"noGutters":""} ${t?"open":""} ${a}`,[n,i]=s,x=t?e(G,{}):e(C,{});return v("div",A(u({className:b},w),{ref:r,children:[n&&v("div",{onClick:D,className:"Accordion-summary",children:[x,n]}),t&&i&&e("div",{className:"Accordion-details",children:i})]}))});export{q as A,G as a,C as b};
