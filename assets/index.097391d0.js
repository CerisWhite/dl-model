var b=Object.defineProperty;var u=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var h=(e,a,t)=>a in e?b(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,m=(e,a)=>{for(var t in a||(a={}))j.call(a,t)&&h(e,t,a[t]);if(u)for(var t of u(a))f.call(a,t)&&h(e,t,a[t]);return e};import{b as p,j as c,F as y,a as x}from"./index.5610d2e8.js";import{E as B,M as F,b as M,c as g}from"./MeshMouthSelect.63908d18.js";import{B as C}from"./Button.d9341628.js";import{a as P,b as N}from"./DialogTitle.36bbc29c.js";import"./vendor.2dfd018b.js";import"./Box.c4d10462.js";import"./ButtonBase.c57369c0.js";const E=[1,2,3,4,5,6,7,8,9],T={eye:B,mouth:F},D={eye:M,mouth:g};function S({part:e,onSelect:a}){var l;const{activeModel:t}=p(),n=(l=t==null?void 0:t.face)==null?void 0:l.type,s=o=>{const i=parseInt(o.currentTarget.dataset.index);a(i,e)};switch(n){case"uv":const o=T[e],i=t.face[`${e}Texture`];return x("div",{className:"PartialFaceSelect-body",children:[E.map(d=>c(o,{index:d,texture:i,"data-index":d,onClick:s},d)),c(C,{"data-index":"0",onClick:s,children:"Remove"})]});case"meshes":const r=D[e];return c("div",{className:"PartialFaceSelect-body",children:c(r,{target:t,onSelect:a})});default:return c(y,{children:"Not Available"})}}const k={eye:"Select Eye",mouth:"Select Mouth"};function v({part:e,onSelect:a,onAfterSelect:t}){var o;const{activeModel:n}=p(),s=(o=n==null?void 0:n.face)==null?void 0:o.type;if(!s)return c(y,{children:"Not Available"});const l=(i,r)=>{a(i,r),t==null||t()};return s==="uv"?x("div",{className:"PartialFaceSelect","data-type":s,children:[c(P,{sx:{textAlign:"center"},children:k[e]}),c(N,{sx:{padding:"1rem"},children:c(S,{part:e,onSelect:l})})]}):c("div",{className:"PartialFaceSelect","data-type":s,children:c(S,{part:e,onSelect:l})})}const G=e=>c(v,m({part:"eye"},e)),H=e=>c(v,m({part:"mouth"},e));export{G as EyeSelect,H as MouthSelect,v as default};
