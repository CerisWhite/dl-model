var z=Object.defineProperty;var D=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var v=(o,e,t)=>e in o?z(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,b=(o,e)=>{for(var t in e||(e={}))A.call(e,t)&&v(o,t,e[t]);if(D)for(var t of D(e))Q.call(e,t)&&v(o,t,e[t]);return o};import{aV as $,aF as g,aB as j,ax as a,aI as q}from"./vendor.dead0e45.js";import{y as E,z as P,h as R}from"./index.8ad11a6b.js";import{u as V,S as W}from"./lists.2be258dc.js";import{f as H,B as J,F as K,a as O}from"./filterConfig.8301821e.js";import{G as U}from"./GlowToggle.faacaa36.js";import{u as X}from"./useAppData.6764ef1c.js";import{G as Y}from"./Gallery.35e3bb01.js";import{M,C as Z,s as c}from"./styles.3c98084a.js";import{L as _}from"./LoadSpinner.1b65fa94.js";import{g as tt}from"./index.4659a016.js";import{c as T,u as G}from"./categories.870b2a18.js";import{B as C}from"./Box.93a277ea.js";import{D as et,a as ot}from"./DialogTitle.ba06c24c.js";import{I as at}from"./Close.27d103a5.js";import"./ButtonBase.7e212a37.js";import"./Popover.92ce4ff4.js";import"./TextField.a09e8e5c.js";import"./MenuItem.8bfdfe3d.js";import"./ToggleGroup.eac58929.js";/* empty css               */import"./DialogContext.3bb3b8e3.js";const st=[],nt=["w","b"],it=o=>nt.some(e=>o.startsWith(e)),rt=o=>it(o.id)?a(M,b({},o)):a(Z,b({},o));function lt({compact:o,content:e,searchQuery:t,searchAll:s,filter:n=st,onSelect:i}){var u;const l=(u=X(p=>p[e]))!=null?u:[],[r,d]=g([]),[x,m]=g(!1);return j(()=>d(l),[e]),j(()=>{m(!0);async function p(){if(s)return t?await E(t):l;const f=await P(l,t);return await H(f,n)}setTimeout(async()=>{const f=await p();d(f),m(!1)})},[t,n,s]),l.length&&!x?a(Y,{list:r,component:o?M:rt,onClick:i}):a(_,null)}var ct=$(lt);const dt=o=>{let e=T;const t=[];return o.forEach(s=>{const n=e[s],i=n==null?void 0:n.value;i!==void 0&&(t.push(i),e=n.options)}),t.join("-")},L=[];function kt({compact:o,onSelect:e=()=>{},onAfterSelect:t}){const{indices:s,setIndex:n,showFilter:i,toggleFilter:l,searchAll:r,toggleSearchAll:d}=R(),x=!!indexedDB,[m,u]=g(""),p=V(m,500),[f,y]=g(L),B=o||G("(max-width:640px)")||G("(max-height:640px)"),I=q(S=>{const{value:k,name:N}=S.currentTarget.dataset;e(k,N),t==null||t()},[]),F=dt(s),h=tt(F);j(()=>y(L),[i,s]),j(()=>{u(""),r&&d()},[s]);const w=s.join();return a(C,{className:"ModelCatalog",sx:c.root},a(C,{sx:c.top},a(et,{sx:c.title},"Model Select"),a(J,{options:T,selectedIndices:s,setIndex:n}),a(C,{sx:c.searchFilter},a(C,{sx:c.search},x&&a(U,{type:"text",value:"All",checked:r,onClick:d}),a(W,{key:w,query:m,onChange:u}),h&&!r&&a(at,{onClick:l,size:"large"},a(K,null))),!r&&i&&h&&a(O,{key:w,config:h,onChange:y,compact:B}))),a(ot,{sx:c.content},a(ct,{compact:B,searchQuery:p,filter:f,content:F,onSelect:I,searchAll:r})))}export{kt as default};
