import{_ as h,j as e,a}from"./index.24c64bef.js";import{a2 as k,ab as p,a5 as u}from"./vendor.2dfd018b.js";import{C as s}from"./ColorButton.5761da63.js";const v=[{name:"Green",hex:"#00ff00"},{name:"Black",hex:"#000000"},{name:"Discord",hex:"#36393f",title:"Discord Dark Mode"},{name:"Grey",hex:"#cccccc"},{name:"Discord",hex:"#f2f3f5",title:"Discord Light Mode"},{name:"White",hex:"#ffffff"}];const x=k(()=>h(()=>import("./index.f5fee188.js"),["assets/index.f5fee188.js","assets/vendor.2dfd018b.js","assets/index.65f1d40b.js"]).then(c=>({default:c.ChromePicker})));function D({initColor:c="#cccccc",onSelect:t}){const[r,n]=p(c),i=({hex:o})=>n(o),d=o=>n(o.target.value),m=()=>t(r),f=e("div",{className:"ColorPicker-common",children:v.map(({name:o,hex:l,title:C})=>e(s,{onClick:d,value:l,color:l,title:C,children:o},l))});return a("div",{className:"ColorPicker",children:[a("div",{className:"ColorPicker-select",children:[f,e(u,{fallback:null,children:e(x,{color:r,onChangeComplete:i})})]}),e(s,{color:r,onClick:m,children:"Apply"})]})}export{D as C};
