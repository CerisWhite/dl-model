var G=Object.defineProperty,N=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var v=(s,e,t)=>e in s?G(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,w=(s,e)=>{for(var t in e||(e={}))Q.call(e,t)&&v(s,t,e[t]);if(T)for(var t of T(e))$.call(e,t)&&v(s,t,e[t]);return s},D=(s,e)=>N(s,P(e));import{ab as i,y as j,a8 as q}from"./vendor.10b98a91.js";import{u as z}from"./useToggleState.e53855b8.js";import{L as E,u as R,S as W}from"./lists.2c6cf86d.js";import{F as A}from"./FacePartSelector.9596dfcb.js";import{f as H,c as J,B as K,F as O,a as U}from"./filterConfig.14a38594.js";import{u as V,G as X}from"./Gallery.d3ba89ae.js";import{M as Y,C as Z,c as _,s as n,u as I}from"./styles.467f4114.js";import{j as a,I as ee,a as g}from"./index.dd7b006e.js";import{B as b}from"./Box.4250058c.js";import{a as te,b as se}from"./DialogTitle.c3bb6572.js";import{I as ae}from"./Close.7c6948bb.js";function oe({compact:s,searchQuery:e,filter:t,content:d,onSelect:r}){var p;const u=(p=V(o=>o[`chara-${d}`]))!=null?p:[],m=u.filter(({id:o})=>!o.endsWith("h")),[h,c]=i([]),[y,f]=i(!1);return j(()=>c(m),[d]),j(()=>{f(!0);async function o(){const l=e?await ee(e):m;return await H(l,t)}setTimeout(async()=>{const l=await o();c(l),f(!1)})},[e,t]),u.length&&!y?a(X,{list:h,component:s?Y:Z,onClick:r}):a(E,{})}const C=_.find(({value:s})=>s==="chara").options,re=[],ie=D(w({},n.top),{"& .Selector":{margin:"0.1rem 2rem 0.1rem 0"}});function ye({compact:s,onSelect:e,onAfterSelect:t}){const d=!!indexedDB,[r,u]=i(0),m=(S,x)=>u(x),[h,c]=i(""),y=R(h,500);j(()=>{c("")},[r]);const[f,p]=i(re),[o,l]=i("Both"),[L,M]=z(!0),F=C[r].value==="regular"&&J,B=s||I("(max-width:640px)")||I("(max-height:640px)"),k=q(S=>{const{value:x}=S.currentTarget.dataset;o!=="Eyes"&&e(x,"mouth"),o!=="Mouth"&&e(x,"eye"),t==null||t()},[o]);return g(b,{className:"FaceTexture",sx:n.root,children:[g(b,{sx:ie,children:[a(te,{sx:n.title,children:"Select Texture"}),a(A,{value:o,onClick:l}),a(K,{options:C,selectedIndices:[r],setIndex:m}),g(b,{sx:n.searchFilter,children:[g(b,{sx:n.search,children:[a(W,{query:h,onChange:c,placeholder:d?"Search All":"Search"},r[0]),F&&a(ae,{onClick:M,size:"large",children:a(O,{})})]}),L&&F&&a(U,{config:F,onChange:p,compact:B})]})]}),a(se,{sx:n.content,children:a(oe,{compact:B,searchQuery:y,filter:f,content:C[r].value,onSelect:k})})]})}export{ye as F};
