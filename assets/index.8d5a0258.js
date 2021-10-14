import{aC as y,aG as L,aD as N}from"./vendor.7867cdc7.js";import{u as T}from"./useKey.331ec04f.js";import{b as A,a as s,F as M,j as a,l as k,J as w,v}from"./index.afacb44a.js";import{S as F}from"./Stretcher.c2f3e9de.js";import{a as I,b as B,A as E}from"./AttachmentSetting.2c31b770.js";import{B as b}from"./Button.ada8b095.js";import{B as u}from"./Box.9af05db4.js";import{D as G,a as K}from"./DialogTitle.62ce4fc8.js";import{S as P}from"./TextField.a06e4176.js";import{M as $}from"./MenuItem.6b63ef3c.js";/* empty css               */import"./ModelIcon.802c1e72.js";import"./useToggleState.269650a2.js";import"./Popover.a25425a2.js";import"./ButtonBase.15677c61.js";import"./ColorButton.0af29465.js";import"./Close.0a7c778c.js";import"./DialogContext.af79ebf6.js";function q({bone:e,add:l}){var c;const{activeModel:o}=A(),h=(c=o==null?void 0:o.attachment[e])!=null?c:[],r=n=>{n.stopPropagation(),l(e)};return s(I,{defaultOpen:!0,className:"BoneManager",disableGutters:!0,children:[s(M,{children:[a("div",{className:"BoneManager-name",children:e}),a(b,{variant:"contained",className:"BoneManager-add",onClick:r,children:a(B,{})})]}),a(M,{children:h.map(n=>{var i,d;return a(E,{target:n,label:(d=(i=n==null?void 0:n.userData)==null?void 0:i.name)!=null?d:n.id})})})]})}function oe(){var g,f;const{activeModel:e}=A(),[l,o]=T(),{inputModel:h}=k(),r=y(()=>{}),c=["root",...(f=(g=e==null?void 0:e.bones)==null?void 0:g.list)!=null?f:[]],[n,i]=L(c[0]),d=w(e.attachment.list.map(t=>t.parentBone));N(()=>{if(!e)return;r.current();const t=e.addEventListener("AttachmentChanged",o);return r.current=()=>e.removeEventListener("AttachmentChanged",t),r.current},[e]);const C=t=>{i(t.target.value)},p=async(t=n)=>{const j=await h();if(!j)return;const[S,x]=j,m=await v.loadDLModel(S);m.userData.name=x,e.attach(m,t==="root"?void 0:t),m.outline.code=e.outline.code,m.material.code=e.material.code,v.render()},D=()=>p();return s(u,{className:"AttachmentManager",children:[s(u,{className:"AttachmentManager-top",children:[a(G,{children:"Manage Attachments"}),s(u,{className:"AttachmentManager-add",children:[a(P,{onChange:C,value:n,className:"AttachmentManager-select",children:c.map(t=>a($,{value:t,children:t},t))}),a(b,{title:"Add Attachment",variant:"contained",onClick:D,children:a(B,{})})]})]}),s(K,{className:"AttachmentManager-body",children:[a(F,{}),d.map(t=>a(q,{add:p,bone:t},t))]},l)]})}export{oe as default};
