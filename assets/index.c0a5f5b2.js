import{a as l,j as n,F as c,k as B,A as v,v as y}from"./index.6f738348.js";import{a4 as f}from"./vendor.732e1712.js";import{u as b}from"./useKey.fc9f7fb9.js";import{A as h}from"./Accordion.fff748e5.js";/* empty css               */import{M as T}from"./ModelIcon.2449c581.js";import{B as C}from"./Button.4d5ff30d.js";import{C as I}from"./Check.e152c127.js";import{B as M}from"./Box.3a0e655c.js";import{a as D,b as k}from"./DialogTitle.919d179e.js";import"./useToggleState.6a131330.js";import"./createSvgIcon.8f8852a2.js";import"./ButtonBase.b64d0cd3.js";function N({list:e,label:o,defaultOpen:r=!1,onSelect:i}){return l(h,{disableGutters:!0,defaultOpen:r,className:"BoneChildren",children:[n(c,{children:o}),n(c,{children:e.map(t=>n(p,{target:t,onSelect:i},t.uniqueId))})]})}function p({target:e,onSelect:o}){if(!e)return null;const[r,i]=b();f(()=>{const s=e.addEventListener("AttachmentChanged",i);return()=>e.removeEventListener("AttachmentChanged",s)},[]),f(()=>{e.userData.name||B(e.id).then(s=>{e.userData.name=s==null?void 0:s.name,i()})},[]);const t=e.id,a=e==null?void 0:e.userData.name,x=a!=null?a:t,j=n(T,{modelId:t,alt:a!=null?a:t,className:"ModelTree-icon"}),d=v(e.attachment.list.map(s=>s.parentBone)),g=()=>o(e),u=l(c,{children:[j,n("div",{className:"target-name",children:x}),n(C,{title:"Select",variant:"contained",onClick:g,children:n(I,{})})]});return d.length?l(h,{disableGutters:!0,className:"ModelTree",children:[u,n(c,{children:d.map(s=>n(N,{defaultOpen:d.length===1,label:s,onSelect:o,list:e.attachment[s]}))})]},r):n("div",{className:"ModelTree",children:u},r)}const m={root:{display:"flex",flexDirection:"column",overflowY:"hidden",minHeight:"20rem",minWidth:"20rem"},title:{textAlign:"center",padding:"0.5rem 2rem",display:"flex",alignItems:"center",justifyContent:"center",borderBottom:"1px solid rgba(16, 16, 16, 0.4)",boxShadow:"0 0.2rem 0.3rem rgba(16, 16, 16, 0.4)",minHeight:"4rem"},content:{padding:"2rem 1rem",display:"flex",flexDirection:"column",flexWrap:"wrap"}};function U({onSelect:e=console.log,onAfterSelect:o}){const r=y.model,i=t=>{e(t),o==null||o()};return l(M,{sx:m.root,className:"TargetPicker",children:[n(D,{sx:m.title,children:"Select Target"}),n(k,{sx:m.content,children:r.map(t=>n(p,{target:t,onSelect:i},t.uniqueId))})]})}export{U as default};
