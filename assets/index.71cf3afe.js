var D=Object.defineProperty;var g=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var f=(t,a,o)=>a in t?D(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,m=(t,a)=>{for(var o in a||(a={}))k.call(a,o)&&f(t,o,a[o]);if(g)for(var o of g(a))x.call(a,o)&&f(t,o,a[o]);return t};var b=(t,a)=>{var o={};for(var e in t)k.call(t,e)&&a.indexOf(e)<0&&(o[e]=t[e]);if(t!=null&&g)for(var e of g(t))a.indexOf(e)<0&&x.call(t,e)&&(o[e]=t[e]);return o};import{ax as r,aA as I,aF as C,aD as R}from"./vendor.ad1e55a4.js";import{T as W}from"./TabBar.57b9dbd5.js";import{C as $}from"./ColorPicker.442c6881.js";import{T as F,b as v}from"./useAppData.d2bce40a.js";import{G as L}from"./Gallery.a1b7f12b.js";import{B as h}from"./Box.716a1938.js";import{B}from"./Button.e6630a8d.js";import{v as j}from"./index.3b58a545.js";import{D as A,a as G}from"./DialogTitle.77baed34.js";import"./ButtonBase.82953207.js";import"./Popover.76590f8b.js";import"./ColorButton.e701beb6.js";import"./DialogContext.04a3e750.js";const y={gallery:{gap:"1rem"},container:{boxSizing:"border-box",maxWidth:"8rem",maxHeight:"8rem",position:"relative",cursor:"pointer",borderRadius:"5%",overflow:"hidden",filter:"drop-shadow(0 0 2px rgba(0,0,0,0.5))",objectFit:"cover",contentVisibility:"auto",containIntrinsicSize:"0 8rem",alignSelf:"stretch",margin:"auto","&:hover":{border:"1px solid white",filter:"drop-shadow(0.1rem 0.1rem 0.2rem black)"},"&[data-name]::after":{content:"attr(data-name)",position:"absolute",bottom:"0.25rem",left:0,backgroundColor:"rgba(0,0,0,0.8)",color:"#fff",textAlign:"center",padding:"0.1rem",width:"100%"},"&[data-name]:hover::after":{backgroundColor:"rgba(255,255,255,0.6)",color:"black"}},image:{maxWidth:"100%"}},S=({src:t,value:a,name:o,onClick:e})=>r(h,{sx:y.container,"data-name":o},r("img",{src:t,"data-value":a,onClick:e,style:y.image})),U=({list:t,onClick:a})=>r(L,{style:y.gallery,onClick:a,list:t,component:S}),w={button:{padding:"0.5rem 1rem",margin:0,color:"rgba(16, 16, 16, 0.8)",border:"1px solid rgba(16, 16, 16, 0.5)","&:hover":{border:"1px solid rgba(16, 16, 16, 0.8)",backgroundColor:"rgba(210, 210, 210, 0.2)"}},input:{opacity:0,width:0,maxWidth:0}};function z(l){var c=l,{id:t="upload",multiple:a=!1,label:o="Upload",mimeType:e="image/*",onChange:s,style:n={}}=c,i=b(c,["id","multiple","label","mimeType","onChange","style"]);const d=I(),p=()=>{const u=d.current.files;s(u)},T=m(m({},w.button),n);return r(h,null,r(B,m({variant:"outlined",htmlFor:t,component:"label",sx:T},i),o),r("input",{name:t,id:t,type:"file",multiple:a,accept:e,style:w.input,ref:u=>d.current=u,onChange:p}))}const P={input:{paddingRight:"0.2rem",minWidth:"8rem"},button:{padding:"0.5rem 1rem",margin:0,backgroundColor:"rgba(16, 16, 16, 0.8)",color:"rgba(255, 255, 255, 0.9)",border:"1px solid rgba(16, 16, 16, 0.5)","&:hover":{backgroundColor:"rgba(50, 50, 50, 0.8)",border:"1px solid rgba(16, 16, 16, 0.8)"}}};function N(e){var s=e,{onApply:t,applyLabel:a="Apply"}=s,o=b(s,["onApply","applyLabel"]);const[n,i]=C(""),l=p=>i(p.target.value),c=()=>t(n),d=r(B,{sx:P.button,variant:"contained",onClick:c},a);return r(F,m({value:n,onChange:l,placeholder:"Enter URL",margin:"none",InputProps:{endAdornment:d,sx:P.input},inputProps:{type:"url"},size:"small"},o))}const E=async t=>new Promise(a=>{const o=new FileReader;o.onload=e=>a(e.target.result),o.readAsDataURL(t)}),H={external:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"0.5rem",maxWidth:"100%",marginBottom:"0.5rem"}};function V({onSelect:t}){const a=v(n=>n["background-image"]),o=n=>{const{value:i}=n.target.dataset,l=`img:${i}`;t(l)},e=async n=>{const l=`img:${await E(n[0])}`;t(l)},s=n=>{if(!n)return;const i=`img:${n}`;t(i)};return r(R,null,r(h,{sx:H.external},r(z,{onChange:e}),r(N,{onApply:s})),r(U,{list:a,onClick:o}))}function _({onSelect:t}){const a=v(e=>e["background-skybox"]);return r(U,{list:a,onClick:e=>{const{value:s}=e.target.dataset,n=`sky:${s}`;t(n)}})}const q=["Color","Image","Skybox"].map(t=>({name:t})),J={Color:$,Image:V,Skybox:_},K=t=>t.startsWith("sky:")?"Skybox":t.startsWith("img:")?"Image":"Color";function lt({onAfterSelect:t}){var l;const a=K(j.background),[o,e]=C(a),s=c=>{j.background=c,t==null||t()},n=(c,d)=>e(d),i=(l=J[o])!=null?l:()=>null;return r("div",{className:"BackgroundPicker"},r(A,{sx:{textAlign:"center"}},"Choose a background"),r(W,{value:o,onChange:n,tabs:q}),r(G,null,r(i,{onSelect:s})))}export{lt as default};
