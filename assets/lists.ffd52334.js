import{aF as d,aB as i,ax as a}from"./vendor.ffd395ab.js";import{f as m}from"./ButtonBase.e40964c1.js";import{c as u}from"./Popover.80b4a490.js";import{T as l}from"./TextField.6c373f07.js";import{C as h,I as S}from"./Close.ca078ff9.js";function x(e,t){const[n,o]=d(e);return i(()=>{const r=setTimeout(()=>{o(e)},t);return()=>{clearTimeout(r)}},[e]),n}var f=u(m("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");const p={margin:"0.2rem",maxWidth:"15rem","& input":{margin:"0.2rem 0",padding:"0.1rem 0.5rem"},"& div.MuiInputBase-root.MuiInputBase-adornedEnd":{paddingRight:0}},g=({onClick:e})=>a(S,{onClick:e,size:"large"},a(h,null));function C({query:e,onChange:t,placeholder:n="Search by name"}){return a(l,{className:"SearchBox",value:e,onChange:s=>{const{value:c}=s.target;t(c)},placeholder:n,InputProps:{endAdornment:a(g,{onClick:()=>t("")}),startAdornment:a(f,null)},sx:p})}const F=["Sword","Blade","Dagger","Axe","Lance","Bow","Wand","Staff","Manacaster"],W=["Flame","Water","Wind","Light","Shadow"],b=["Flame","Water","Wind","Light","Shadow","None"],v=["3","4","5"],R=["1","2","3","4","5","6"];export{W as E,R as F,v as R,C as S,F as W,b as a,x as u};
