import{G as m}from"./GlowToggle.3b22a66a.js";import{j as o}from"./index.1b9db1ea.js";function j({type:r,value:c,options:l,icons:s=[],onClick:t,labels:n=[]}){const d=e=>{e.stopPropagation();const{value:a}=e.currentTarget.dataset;t(a)},i=l.map((e,a)=>o(m,{type:r,value:e,name:n[a],icon:s[a],onClick:d,checked:c===e},e));return o("div",{className:"Selector",children:i})}export{j as S};
