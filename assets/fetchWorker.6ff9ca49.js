(()=>{(function(n){"use strict";const o=async t=>await(await fetch(t)).json(),a=async t=>(await o(t)).data,c="https://dgk3593.github.io/dl-model",r=t=>`${c}/data/${t}.json`,i=t=>{const s=t.map(a);return Promise.all(s)};return addEventListener("message",async t=>{const s=t.data,e=s.map(r),u=await i(e),d=s.map((p,f)=>[p,u[f]]),h=Object.fromEntries(d);postMessage(h)}),n.fetchJsonData=a,Object.defineProperty(n,"__esModule",{value:!0}),n})({});})();
