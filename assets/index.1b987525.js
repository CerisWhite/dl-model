var T=Object.defineProperty;var d=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var h=(t,o,a)=>o in t?T(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,k=(t,o)=>{for(var a in o||(o={}))u.call(o,a)&&h(t,a,o[a]);if(d)for(var a of d(o))b.call(o,a)&&h(t,a,o[a]);return t};var f=(t,o)=>{var a={};for(var e in t)u.call(t,e)&&o.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&d)for(var e of d(t))o.indexOf(e)<0&&b.call(t,e)&&(a[e]=t[e]);return a};import{ab as x}from"./vendor.732e1712.js";import{T as I}from"./TabBar.9ddc7ca1.js";import{C as P}from"./ColorPicker.e322033e.js";import{G as w,T as R,u as y}from"./Gallery.698fb6ec.js";import{j as n,a as g,F as W,v as C}from"./index.147e1819.js";import{B as v}from"./Box.4723af1e.js";import{U as L,f as $}from"./file2dataURL.9102005d.js";import{B as D}from"./Button.d0de8397.js";import{a as F,b as G}from"./DialogTitle.f45e78dc.js";import"./ButtonBase.8b64ccb9.js";import"./Popover.630f97b4.js";import"./createSvgIcon.95897ade.js";import"./ColorButton.5f64cb5f.js";const p={gallery:{gap:"1rem"},container:{boxSizing:"border-box",maxWidth:"8rem",maxHeight:"8rem",position:"relative",cursor:"pointer",borderRadius:"5%",overflow:"hidden",filter:"drop-shadow(0 0 2px rgba(0,0,0,0.5))",objectFit:"cover",contentVisibility:"auto",containIntrinsicSize:"0 8rem",alignSelf:"stretch",margin:"auto","&:hover":{border:"1px solid white",filter:"drop-shadow(0.1rem 0.1rem 0.2rem black)"},"&[data-name]::after":{content:"attr(data-name)",position:"absolute",bottom:"0.25rem",left:0,backgroundColor:"rgba(0,0,0,0.8)",color:"#fff",textAlign:"center",padding:"0.1rem",width:"100%"},"&[data-name]:hover::after":{backgroundColor:"rgba(255,255,255,0.6)",color:"black"}},image:{maxWidth:"100%"}},S=({src:t,value:o,name:a,onClick:e})=>n(v,{sx:p.container,"data-name":a,children:n("img",{src:t,"data-value":o,onClick:e,style:p.image})}),B=({list:t,onClick:o})=>n(w,{style:p.gallery,onClick:o,list:t,component:S}),j={input:{paddingRight:"0.2rem",minWidth:"8rem"},button:{padding:"0.5rem 1rem",margin:0,backgroundColor:"rgba(16, 16, 16, 0.8)",color:"rgba(255, 255, 255, 0.9)",border:"1px solid rgba(16, 16, 16, 0.5)","&:hover":{backgroundColor:"rgba(50, 50, 50, 0.8)",border:"1px solid rgba(16, 16, 16, 0.8)"}}};function z(e){var i=e,{onApply:t,applyLabel:o="Apply"}=i,a=f(i,["onApply","applyLabel"]);const[r,s]=x(""),l=U=>s(U.target.value),c=()=>t(r),m=n(D,{sx:j.button,variant:"contained",onClick:c,children:o});return n(R,k({value:r,onChange:l,placeholder:"Enter URL",margin:"none",InputProps:{endAdornment:m,sx:j.input},inputProps:{type:"url"},size:"small"},a))}const A={external:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"0.5rem",maxWidth:"100%",marginBottom:"0.5rem"}};function N({onSelect:t}){const o=y(r=>r["background-image"]),a=r=>{const{value:s}=r.target.dataset,l=`img:${s}`;t(l)},e=async r=>{const l=`img:${await $(r[0])}`;t(l)},i=r=>{if(!r)return;const s=`img:${r}`;t(s)};return g(W,{children:[g(v,{sx:A.external,children:[n(L,{onChange:e}),n(z,{onApply:i})]}),n(B,{list:o,onClick:a})]})}function E({onSelect:t}){const o=y(e=>e["background-skybox"]);return n(B,{list:o,onClick:e=>{const{value:i}=e.target.dataset,r=`sky:${i}`;t(r)}})}const H=["Color","Image","Skybox"].map(t=>({name:t})),V={Color:P,Image:N,Skybox:E},_=t=>t.startsWith("sky:")?"Skybox":t.startsWith("img:")?"Image":"Color";function nt({onAfterSelect:t}){var l;const o=_(C.background),[a,e]=x(o),i=c=>{C.background=c,t==null||t()},r=(c,m)=>e(m),s=(l=V[a])!=null?l:()=>null;return g("div",{className:"BackgroundPicker",children:[n(F,{sx:{textAlign:"center"},children:"Choose a background"}),n(I,{value:a,onChange:r,tabs:H}),n(G,{children:n(s,{onSelect:i})})]})}export{nt as default};
