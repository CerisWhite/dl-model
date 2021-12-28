var Q=Object.defineProperty;var M=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var D=(o,e,t)=>e in o?Q(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,y=(o,e)=>{for(var t in e||(e={}))W.call(e,t)&&D(o,t,e[t]);if(M)for(var t of M(e))$.call(e,t)&&D(o,t,e[t]);return o};import{j as a,J as q,K as z,k as E,a as h}from"./index.506fef86.js";import{ao as J,ab as p,y as b,a8 as K}from"./vendor.2dfd018b.js";import{L as P,u as R,S as H}from"./lists.bd5e1043.js";import{f as O,B as U,F as V,a as X}from"./filterConfig.5fa5f414.js";import{G as Y}from"./GlowToggle.547fc2e9.js";import{u as Z,G as _}from"./Gallery.0d9b6cbd.js";import{M as T,C as tt,c as G,u as k,s as c}from"./styles.e6a6b1ef.js";import{g as et}from"./index.0e2aa822.js";import{B as C}from"./Box.01a649a7.js";import{a as ot,b as at}from"./DialogTitle.c06b3cd9.js";import{I as st}from"./Close.83b23c74.js";import"./createSvgIcon.b8abb96e.js";import"./ButtonBase.3406accd.js";import"./Popover.67c4bab7.js";/* empty css               */const nt=[],it=["w","b"],rt=o=>it.some(e=>o.startsWith(e)),lt=o=>rt(o.id)?a(T,y({},o)):a(tt,y({},o));function ct({compact:o,content:e,searchQuery:t,searchAll:s,filter:n=nt,onSelect:i}){var u;const l=(u=Z(g=>g[e]))!=null?u:[],[r,d]=p([]),[x,m]=p(!1);return b(()=>d(l),[e]),b(()=>{m(!0);async function g(){if(s)return t?await q(t):l;const f=await z(l,t);return await O(f,n)}setTimeout(async()=>{const f=await g();d(f),m(!1)})},[t,n,s]),l.length&&!x?a(_,{list:r,component:o?T:lt,onClick:i}):a(P,{})}var dt=J(ct);const mt=o=>{let e=G;const t=[];return o.forEach(s=>{const n=e[s],i=n==null?void 0:n.value;i!==void 0&&(t.push(i),e=n.options)}),t.join("-")},L=[];function Tt({compact:o,onSelect:e=()=>{},onAfterSelect:t}){const{indices:s,setIndex:n,showFilter:i,toggleFilter:l,searchAll:r,toggleSearchAll:d}=E(),x=!!indexedDB,[m,u]=p(""),g=R(m,500),[f,B]=p(L),w=o||k("(max-width:640px)")||k("(max-height:640px)"),S=K(I=>{const{value:N,name:A}=I.currentTarget.dataset;e(N,A),t==null||t()},[]),F=mt(s),j=et(F);b(()=>B(L),[i,s]),b(()=>{u(""),r&&d()},[s]);const v=s.join();return h(C,{className:"ModelCatalog",sx:c.root,children:[h(C,{sx:c.top,children:[a(ot,{sx:c.title,children:"Model Select"}),a(U,{options:G,selectedIndices:s,setIndex:n}),h(C,{sx:c.searchFilter,children:[h(C,{sx:c.search,children:[x&&a(Y,{type:"text",value:"All",checked:r,onClick:d,title:"Whether to search all model"}),a(H,{query:m,onChange:u},v),j&&!r&&a(st,{title:"Toggle Filter",onClick:l,size:"large",children:a(V,{})})]}),!r&&i&&j&&a(X,{config:j,onChange:B,compact:w},v)]})]}),a(at,{sx:c.content,children:a(dt,{compact:w,searchQuery:g,filter:f,content:F,onSelect:S,searchAll:r})})]})}export{Tt as default};
