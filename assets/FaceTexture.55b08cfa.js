var G=Object.defineProperty,N=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var v=(a,e,t)=>e in a?G(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,w=(a,e)=>{for(var t in e||(e={}))Q.call(e,t)&&v(a,t,e[t]);if(T)for(var t of T(e))$.call(e,t)&&v(a,t,e[t]);return a},D=(a,e)=>N(a,P(e));import{ab as i,a4 as C,a8 as q}from"./vendor.732e1712.js";import{u as z}from"./useToggleState.6a131330.js";import{L as E,u as H,S as R}from"./lists.eba2818a.js";import{F as W}from"./FacePartSelector.183fe0e9.js";import{f as A,c as J,B as K,F as O,a as U}from"./filterConfig.ba38d443.js";import{u as V,G as X}from"./Gallery.3c42d8a9.js";import{M as Y,C as Z,c as _,s as n,u as L}from"./styles.5fc17128.js";import{j as s,H as ee,a as g}from"./index.24c02062.js";import{B as y}from"./Box.086246af.js";import{a as te,b as ae}from"./DialogTitle.7f735737.js";import{I as se}from"./Close.95dfaf61.js";function oe({compact:a,searchQuery:e,filter:t,content:d,onSelect:r}){var p;const u=(p=V(o=>o[`chara-${d}`]))!=null?p:[],m=u.filter(({id:o})=>!o.endsWith("h")),[h,c]=i([]),[F,f]=i(!1);return C(()=>c(m),[d]),C(()=>{f(!0);async function o(){const l=e?await ee(e):m;return await A(l,t)}setTimeout(async()=>{const l=await o();c(l),f(!1)})},[e,t]),u.length&&!F?s(X,{list:h,component:a?Y:Z,onClick:r}):s(E,{})}const B=_.find(({value:a})=>a==="chara").options,re=[],ie=D(w({},n.top),{"& .Selector":{margin:"0.1rem 2rem 0.1rem 0"}});function Fe({compact:a,onSelect:e,onAfterSelect:t}){const d=!!indexedDB,[r,u]=i(0),m=(S,x)=>u(x),[h,c]=i(""),F=H(h,500);C(()=>{c("")},[r]);const[f,p]=i(re),[o,l]=i("Both"),[I,M]=z(!0),j=B[r].value==="regular"&&J,b=a||L("(max-width:640px)")||L("(max-height:640px)"),k=q(S=>{const{value:x}=S.currentTarget.dataset;o!=="Eyes"&&e(x,"mouth"),o!=="Mouth"&&e(x,"eye"),t==null||t()},[o]);return g(y,{className:"FaceTexture",sx:n.root,children:[g(y,{sx:ie,children:[s(te,{sx:n.title,children:"Select Texture"}),s(W,{value:o,onClick:l}),s(K,{options:B,selectedIndices:[r],setIndex:m}),g(y,{sx:n.searchFilter,children:[g(y,{sx:n.search,children:[s(R,{query:h,onChange:c,placeholder:d?"Search All":"Search"},r[0]),j&&s(se,{onClick:M,size:"large",children:s(O,{})})]}),I&&j&&s(U,{config:j,onChange:p,compact:b})]})]}),s(ae,{sx:n.content,children:s(oe,{compact:b,searchQuery:F,filter:f,content:B[r].value,onSelect:k})})]})}export{Fe as F};
