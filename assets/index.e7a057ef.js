import{ab as g}from"./vendor.1559e0f8.js";import{u}from"./useToggleState.e5df3c77.js";import{v as t,a as d,F as C,j as e,u as x}from"./index.23d0fe95.js";import{G as P}from"./GlowToggle.5877e55b.js";import{B as s}from"./Button.8c2b3aa9.js";import{b}from"./Popover.a93e15a1.js";import{S as k,B as T,b as j,a as B,P as F,c as R}from"./SkipPrevious.799f29d3.js";import{I as w,C as y}from"./Close.9b3b351e.js";import"./ButtonBase.ef63be26.js";import"./createSvgIcon.e2bb91a9.js";const v={popover:{backgroundColor:"#101010",minHeight:"16.5rem",maxHeight:"80vh",display:"flex",padding:"0.3rem",paddingBottom:"1.5rem",flexDirection:"column",justifyContent:"flex-end",alignItems:"center","& .MuiSlider-root":{marginRight:"3.2rem"}},slider:{minHeight:"15rem",maxHeight:"90%","& span.MuiSlider-markLabel":{color:"#bbb",textAlign:"right",width:"2.3rem"},"& span.MuiSlider-markLabelActive":{color:"#fff"}}},A=[.25,.5,.75,1,1.25,1.5,1.75,2].map(o=>({value:o,label:`${o}x`}));function I(){const[o,l]=g(t.loop.timeScale),[i,a]=g(null),c=r=>{r.stopPropagation(),a(r.currentTarget)},m=()=>a(null),p=(r,n)=>{t.loop.timeScale=n,l(n)};return d(C,{children:[e(s,{title:"Time Scale",onClick:c,children:`${o}x`}),e(b,{anchorEl:i,open:!!i,onClose:m,className:"TimeScaleSelect",PaperProps:{sx:v.popover},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"left"},children:e(k,{orientation:"vertical",track:!1,marks:A,min:.25,max:2,step:.05,value:o,onChange:p,sx:v.slider})})]})}function J(){const[o,l]=u(t.loop.paused),[i,a]=u(t.loop.reverse),{toggleTimeControl:c}=x(),m=()=>{o?t.loop.resume():t.loop.pause(),l()},p=()=>{t.loop.reverse=!i,a()},r=n=>{const{dir:h}=n.currentTarget.dataset,f=h==="next"?1:-1,S=1/60*f;t.update(S)};return d("div",{className:"TimeControl",children:[d(T,{children:[e(s,{variant:"contained","data-dir":"prev",onClick:r,title:"Previous Frame",children:e(j,{})}),e(s,{variant:"contained",onClick:m,title:o?"Resume":"Pause",children:o?e(B,{}):e(F,{})}),e(s,{variant:"contained","data-dir":"next",onClick:r,title:"Next Frame",children:e(R,{})})]}),e(P,{type:"text",value:"Reverse",checked:i,onClick:p,title:"Click to change animation direction"}),e(I,{}),e(w,{onClick:c,title:"Close",children:e(y,{})})]})}export{J as default};
