import{ax as o}from"./vendor.dead0e45.js";import{G as g}from"./GlowToggle.faacaa36.js";function i({type:r,value:c,options:l,icons:t=[],onClick:s,labels:n=[]}){const d=e=>{e.stopPropagation();const{value:a}=e.currentTarget.dataset;s(a)},m=l.map((e,a)=>o(g,{type:r,value:e,name:n[a],icon:t[a],onClick:d,key:e,checked:c===e}));return o("div",{className:"Selector"},m)}export{i as S};
