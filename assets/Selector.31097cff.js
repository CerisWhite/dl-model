import{G as m}from"./GlowToggle.be965452.js";import{j as a}from"./index.43450d12.js";function j({type:r,value:c,options:l,icons:s=[],onClick:t,labels:n=[]}){const d=e=>{e.stopPropagation();const{value:o}=e.currentTarget.dataset;t(o)},i=l.map((e,o)=>a(m,{type:r,value:e,name:n[o],icon:s[o],onClick:d,checked:c===e},e));return a("div",{className:"Selector",children:i})}export{j as S};
