var P=Object.defineProperty,k=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var D=(a,e,t)=>e in a?P(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,v=(a,e)=>{for(var t in e||(e={}))Q.call(e,t)&&D(a,t,e[t]);if(T)for(var t of T(e))$.call(e,t)&&D(a,t,e[t]);return a},w=(a,e)=>k(a,N(e));import{aG as i,aD as C,aJ as q}from"./vendor.7867cdc7.js";import{u as z}from"./useToggleState.269650a2.js";import{u as A,S as E}from"./lists.fdff6818.js";import{F as J}from"./FacePartSelector.3cd6cfb2.js";import{f as R,c as W,B as H,F as K,a as O}from"./filterConfig.3a0759b6.js";import{u as U}from"./useAppData.dd089d42.js";import{G as V}from"./Gallery.0d7609d5.js";import{M as X,C as Y,s as c}from"./styles.5a6029bd.js";import{L as Z}from"./LoadSpinner.8b3575a7.js";import{j as s,I as _,a as x}from"./index.afacb44a.js";import{c as ee,u as I}from"./categories.42c549c6.js";import{B as j}from"./Box.9af05db4.js";import{D as te,a as ae}from"./DialogTitle.62ce4fc8.js";import{I as se}from"./Close.0a7c778c.js";import"./TextField.a06e4176.js";import"./ButtonBase.15677c61.js";import"./Popover.a25425a2.js";import"./Selector.f9cba00f.js";import"./GlowToggle.1decaa68.js";import"./MenuItem.6b63ef3c.js";import"./ToggleGroup.d40e5b6b.js";/* empty css               */import"./DialogContext.af79ebf6.js";function oe({compact:a,searchQuery:e,filter:t,content:d,onSelect:r}){var h;const m=(h=U(o=>o[`chara-${d}`]))!=null?h:[],u=m.filter(({id:o})=>!o.endsWith("h")),[p,n]=i([]),[b,f]=i(!1);return C(()=>n(u),[d]),C(()=>{f(!0);async function o(){const l=e?await _(e):u;return await R(l,t)}setTimeout(async()=>{const l=await o();n(l),f(!1)})},[e,t]),m.length&&!b?s(V,{list:p,component:a?X:Y,onClick:r}):s(Z,{})}const F=ee.find(({value:a})=>a==="chara").options,re=[],ie=w(v({},c.top),{"& .Selector":{margin:"0.1rem 2rem 0.1rem 0"}});function Me({compact:a,onSelect:e,onAfterSelect:t}){const d=!!indexedDB,[r,m]=i(0),u=(S,g)=>m(g),[p,n]=i(""),b=A(p,500);C(()=>{n("")},[r]);const[f,h]=i(re),[o,l]=i("Both"),[L,M]=z(!0),y=F[r].value==="regular"&&W,B=a||I("(max-width:640px)")||I("(max-height:640px)"),G=q(S=>{const{value:g}=S.currentTarget.dataset;o!=="Eyes"&&e(g,"mouth"),o!=="Mouth"&&e(g,"eye"),t==null||t()},[o]);return x(j,{className:"ModelCatalog",sx:c.root,children:[x(j,{sx:ie,children:[s(te,{sx:c.title,children:"Select Texture"}),s(J,{value:o,onClick:l}),s(H,{options:F,selectedIndices:[r],setIndex:u}),x(j,{sx:c.searchFilter,children:[x(j,{sx:c.search,children:[s(E,{query:p,onChange:n,placeholder:d?"Search All":"Search"},r[0]),y&&s(se,{onClick:M,size:"large",children:s(K,{})})]}),L&&y&&s(O,{config:y,onChange:h,compact:B})]})]}),s(ae,{sx:c.content,children:s(oe,{compact:B,searchQuery:b,filter:f,content:F[r].value,onSelect:G})})]})}export{Me as default};
