var A=Object.defineProperty;var v=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var F=(o,e,t)=>e in o?A(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,h=(o,e)=>{for(var t in e||(e={}))E.call(e,t)&&F(o,t,e[t]);if(v)for(var t of v(e))Q.call(e,t)&&F(o,t,e[t]);return o};import{aV as $,aE as p,aA as C,aw as a,aH as q}from"./vendor.fe894b4a.js";import{x as z,y as H,i as P}from"./index.7d9187de.js";import{u as R,S as V}from"./lists.8f5bdbde.js";import{f as W,B as J,F as K,a as O}from"./filterConfig.7776ebfd.js";import{G as U}from"./GlowToggle.82bde0aa.js";import{b as X}from"./useAppData.977799ba.js";import{G as Y}from"./Gallery.e9fc7a5e.js";import{M,C as Z,s as c}from"./styles.f06d74bf.js";import{L as _}from"./LoadSpinner.37ebc576.js";import{g as tt}from"./index.4376371d.js";import{c as G,u as T}from"./categories.52451c2b.js";import{B as j}from"./Box.5574f6c8.js";import{D as et,a as ot}from"./DialogTitle.30aca7f1.js";import{I as at}from"./Close.0cbd14cc.js";import"./ButtonBase.415db68d.js";import"./Popover.81573183.js";import"./MenuItem.dd1ea573.js";import"./ToggleGroup.7df67400.js";import"./DialogContext.e1e8d0f9.js";const st=[],nt=["w","b"],it=o=>nt.some(e=>o.startsWith(e)),rt=o=>it(o.id)?a(M,h({},o)):a(Z,h({},o));function lt({compact:o,content:e,searchQuery:t,searchAll:s,filter:n=st,onSelect:i}){var u;const l=(u=X(f=>f[e]))!=null?u:[],[r,d]=p([]),[x,m]=p(!1);return C(()=>d(l),[e]),C(()=>{m(!0);async function f(){if(s)return t?await z(t):l;const g=await H(l,t);return await W(g,n)}setTimeout(async()=>{const g=await f();d(g),m(!1)})},[t,n,s]),l.length&&!x?a(Y,{list:r,component:o?M:rt,onClick:i}):a(_,null)}var ct=$(lt);const dt=o=>{let e=G;const t=[];return o.forEach(s=>{const n=e[s],i=n==null?void 0:n.value;i!==void 0&&(t.push(i),e=n.options)}),t.join("-")},L=[];function St({compact:o,onSelect:e=()=>{},onAfterSelect:t}){const{indices:s,setIndex:n,showFilter:i,toggleFilter:l,searchAll:r,toggleSearchAll:d}=P(),x=!!indexedDB,[m,u]=p(""),f=R(m,500),[g,y]=p(L),B=o||T("(max-width:640px)")||T("(max-height:640px)"),S=q(k=>{const{value:I,name:N}=k.currentTarget.dataset;e(I,N),t==null||t()},[]),w=dt(s),b=tt(w);C(()=>y(L),[i,s]),C(()=>{u(""),r&&d()},[s]);const D=s.join();return a(j,{className:"ModelCatalog",sx:c.root},a(j,{sx:c.top},a(et,{sx:c.title},"Model Select"),a(J,{options:G,selectedIndices:s,setIndex:n}),a(j,{sx:c.searchFilter},a(j,{sx:c.search},x&&a(U,{type:"text",value:"All",checked:r,onClick:d}),a(V,{key:D,query:m,onChange:u}),b&&!r&&a(at,{onClick:l,size:"large"},a(K,null))),!r&&i&&b&&a(O,{key:D,config:b,onChange:y,compact:B}))),a(ot,{sx:c.content},a(ct,{compact:B,searchQuery:f,filter:g,content:w,onSelect:S,searchAll:r})))}export{St as default};
