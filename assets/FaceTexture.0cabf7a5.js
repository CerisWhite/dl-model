var G=Object.defineProperty,N=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var v=(a,e,t)=>e in a?G(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,w=(a,e)=>{for(var t in e||(e={}))Q.call(e,t)&&v(a,t,e[t]);if(T)for(var t of T(e))$.call(e,t)&&v(a,t,e[t]);return a},D=(a,e)=>N(a,P(e));import{ab as i,y as j,a8 as q}from"./vendor.10b98a91.js";import{u as z}from"./useToggleState.e53855b8.js";import{L as E,u as H,S as R}from"./lists.35f78dc9.js";import{F as W}from"./FacePartSelector.61eb7cd2.js";import{f as A,c as J,B as K,F as O,a as U}from"./filterConfig.5be4aad7.js";import{u as V,G as X}from"./Gallery.8f8cdb48.js";import{M as Y,C as Z,c as _,s as n,u as L}from"./styles.e4bd0529.js";import{j as s,H as ee,a as g}from"./index.5b8c164b.js";import{B as b}from"./Box.5b768769.js";import{a as te,b as ae}from"./DialogTitle.a3a245da.js";import{I as se}from"./Close.055c51a6.js";function oe({compact:a,searchQuery:e,filter:t,content:d,onSelect:r}){var p;const u=(p=V(o=>o[`chara-${d}`]))!=null?p:[],m=u.filter(({id:o})=>!o.endsWith("h")),[h,c]=i([]),[y,f]=i(!1);return j(()=>c(m),[d]),j(()=>{f(!0);async function o(){const l=e?await ee(e):m;return await A(l,t)}setTimeout(async()=>{const l=await o();c(l),f(!1)})},[e,t]),u.length&&!y?s(X,{list:h,component:a?Y:Z,onClick:r}):s(E,{})}const C=_.find(({value:a})=>a==="chara").options,re=[],ie=D(w({},n.top),{"& .Selector":{margin:"0.1rem 2rem 0.1rem 0"}});function ye({compact:a,onSelect:e,onAfterSelect:t}){const d=!!indexedDB,[r,u]=i(0),m=(S,x)=>u(x),[h,c]=i(""),y=H(h,500);j(()=>{c("")},[r]);const[f,p]=i(re),[o,l]=i("Both"),[I,M]=z(!0),F=C[r].value==="regular"&&J,B=a||L("(max-width:640px)")||L("(max-height:640px)"),k=q(S=>{const{value:x}=S.currentTarget.dataset;o!=="Eyes"&&e(x,"mouth"),o!=="Mouth"&&e(x,"eye"),t==null||t()},[o]);return g(b,{className:"FaceTexture",sx:n.root,children:[g(b,{sx:ie,children:[s(te,{sx:n.title,children:"Select Texture"}),s(W,{value:o,onClick:l}),s(K,{options:C,selectedIndices:[r],setIndex:m}),g(b,{sx:n.searchFilter,children:[g(b,{sx:n.search,children:[s(R,{query:h,onChange:c,placeholder:d?"Search All":"Search"},r[0]),F&&s(se,{onClick:M,size:"large",children:s(O,{})})]}),I&&F&&s(U,{config:F,onChange:p,compact:B})]})]}),s(ae,{sx:n.content,children:s(oe,{compact:B,searchQuery:y,filter:f,content:C[r].value,onSelect:k})})]})}export{ye as F};
