var A=Object.defineProperty;var w=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var F=(o,e,t)=>e in o?A(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,y=(o,e)=>{for(var t in e||(e={}))z.call(e,t)&&F(o,t,e[t]);if(w)for(var t of w(e))Q.call(e,t)&&F(o,t,e[t]);return o};import{aU as $,aD as p,az as C,av as a,aG as q}from"./vendor.0af045b4.js";import{x as E,y as P,i as R}from"./index.ee318473.js";import{u as U,S as W}from"./lists.9f1cd60b.js";import{f as H,B as J,F as K,a as O}from"./filterConfig.fbcf942c.js";import{G as V}from"./GlowToggle.50d2d622.js";import{b as X}from"./useAppData.889f8996.js";import{G as Y}from"./Gallery.95fb88f8.js";import{M,C as Z,s as c}from"./styles.9d0018fb.js";import{L as _,I as tt}from"./LoadSpinner.8aa50140.js";import{g as et}from"./index.102a0288.js";import{c as G,u as T}from"./categories.1ca0f7df.js";import{B as x}from"./Box.36edcd22.js";import{D as ot,a as at}from"./DialogTitle.a02af59f.js";import"./ButtonBase.749220ee.js";import"./Popover.fb02a82b.js";import"./MenuItem.992d5651.js";import"./ToggleGroup.22f21e39.js";import"./DialogContext.faaa0fa1.js";const st=[],nt=["w","b"],it=o=>nt.some(e=>o.startsWith(e)),rt=o=>it(o.id)?a(M,y({},o)):a(Z,y({},o));function lt({compact:o,content:e,searchQuery:t,searchAll:s,filter:n=st,onSelect:i}){var m;const l=(m=X(u=>u[e]))!=null?m:[],[r,d]=p([]),[h,f]=p(!1);return C(()=>d(l),[e]),C(()=>{f(!0);async function u(){if(s)return t?await E(t):l;const g=await P(l,t);return await H(g,n)}setTimeout(async()=>{const g=await u();d(g),f(!1)})},[t,n,s]),l.length&&!h?a(Y,{list:r,component:o?M:rt,onClick:i}):a(_,null)}var ct=$(lt);const dt=o=>{let e=G;const t=[];return o.forEach(s=>{const n=e[s],i=n==null?void 0:n.value;i!==void 0&&(t.push(i),e=n.options)}),t.join("-")},L=[];function Lt({compact:o,onSelect:e=()=>{},onAfterSelect:t}){const{indices:s,setIndex:n,showFilter:i,toggleFilter:l,searchAll:r,toggleSearchAll:d}=R(),h=!!indexedDB,[f,m]=p(""),u=U(f,500),[g,b]=p(L),B=o||T("(max-width:640px)")||T("(max-height:640px)"),S=q(k=>{const{value:I,name:N}=k.currentTarget.dataset;e(I,N),t==null||t()},[]),D=dt(s),j=et(D);C(()=>b(L),[i,s]),C(()=>{m(""),r&&d()},[s]);const v=s.join();return a(x,{className:"ModelCatalog",sx:c.root},a(x,{sx:c.top},a(ot,{sx:c.title},"Model Select"),a(J,{options:G,selectedIndices:s,setIndex:n}),a(x,{sx:c.searchFilter},a(x,{sx:c.search},h&&a(V,{type:"text",value:"All",checked:r,onClick:d}),a(W,{key:v,query:f,onChange:m}),j&&!r&&a(tt,{onClick:l,size:"large"},a(K,null))),!r&&i&&j&&a(O,{key:v,config:j,onChange:b,compact:B}))),a(at,{sx:c.content},a(ct,{compact:B,searchQuery:u,filter:g,content:D,onSelect:S,searchAll:r})))}export{Lt as default};
