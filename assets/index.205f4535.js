var j=Object.defineProperty;var u=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var h=(e,a,t)=>a in e?j(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,m=(e,a)=>{for(var t in a||(a={}))v.call(a,t)&&h(e,t,a[t]);if(u)for(var t of u(a))b.call(a,t)&&h(e,t,a[t]);return e};import{b as p,j as c,F as y,a as f}from"./index.afacb44a.js";import{E as g,M}from"./getTexturePath.4e0951a9.js";import{M as B,a as F}from"./MeshMouthSelect.a0ebfddf.js";import{B as C}from"./Button.ada8b095.js";import{D as P,a as N}from"./DialogTitle.62ce4fc8.js";import"./vendor.7867cdc7.js";import"./Box.9af05db4.js";import"./ButtonBase.15677c61.js";import"./DialogContext.af79ebf6.js";const D=[1,2,3,4,5,6,7,8,9],E={eye:g,mouth:M},T={eye:B,mouth:F};function x({part:e,onSelect:a}){var i;const{activeModel:t}=p(),n=(i=t==null?void 0:t.face)==null?void 0:i.type,o=s=>{const l=parseInt(s.currentTarget.dataset.index);a(l,e)};switch(n){case"uv":const s=E[e],l=t.face[`${e}Texture`];return f("div",{className:"PartialFaceSelect-body",children:[D.map(d=>c(s,{index:d,texture:l,"data-index":d,onClick:o},d)),c(C,{"data-index":"0",onClick:o,children:"Remove"})]});case"meshes":const r=T[e];return c("div",{className:"PartialFaceSelect-body",children:c(r,{target:t,onSelect:a})});default:return c(y,{children:"Not Available"})}}const k={eye:"Select Eye",mouth:"Select Mouth"};function S({part:e,onSelect:a,onAfterSelect:t}){var s;const{activeModel:n}=p(),o=(s=n==null?void 0:n.face)==null?void 0:s.type;if(!o)return c(y,{children:"Not Available"});const i=(l,r)=>{a(l,r),t==null||t()};return o==="uv"?f("div",{className:"PartialFaceSelect","data-type":o,children:[c(P,{sx:{textAlign:"center"},children:k[e]}),c(N,{sx:{padding:"1rem"},children:c(x,{part:e,onSelect:i})})]}):c("div",{className:"PartialFaceSelect","data-type":o,children:c(x,{part:e,onSelect:i})})}const J=e=>c(S,m({part:"eye"},e)),K=e=>c(S,m({part:"mouth"},e));export{J as EyeSelect,K as MouthSelect,S as default};
