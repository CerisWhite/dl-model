(()=>{var H=Object.defineProperty,J=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var S=(u,c,i)=>c in u?H(u,c,{enumerable:!0,configurable:!0,writable:!0,value:i}):u[c]=i,v=(u,c)=>{for(var i in c||(c={}))Y.call(c,i)&&S(u,i,c[i]);if(L)for(var i of L(c))Z.call(c,i)&&S(u,i,c[i]);return u},P=(u,c)=>J(u,X(c));(function(){"use strict";const u=(e,t)=>t.some(n=>e instanceof n);let c,i;function k(){return c||(c=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function C(){return i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const D=new WeakMap,m=new WeakMap,M=new WeakMap,p=new WeakMap,b=new WeakMap;function j(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(l(e.result)),o()},a=()=>{r(e.error),o()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&D.set(n,e)}).catch(()=>{}),b.set(t,e),t}function A(e){if(m.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),o()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});m.set(e,t)}let g={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return m.get(e);if(t==="objectStoreNames")return e.objectStoreNames||M.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return l(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function T(e){g=e(g)}function N(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(h(this),t,...n);return M.set(r,t.sort?t.sort():[t]),l(r)}:C().includes(e)?function(...t){return e.apply(h(this),t),l(D.get(this))}:function(...t){return l(e.apply(h(this),t))}}function K(e){return typeof e=="function"?N(e):(e instanceof IDBTransaction&&A(e),u(e,k())?new Proxy(e,g):e)}function l(e){if(e instanceof IDBRequest)return j(e);if(p.has(e))return p.get(e);const t=K(e);return t!==e&&(p.set(e,t),b.set(t,e)),t}const h=e=>b.get(e);function F(e,t,{blocked:n,upgrade:r,blocking:o,terminated:s}={}){const a=indexedDB.open(e,t),f=l(a);return r&&a.addEventListener("upgradeneeded",d=>{r(l(a.result),d.oldVersion,d.newVersion,l(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),f.then(d=>{s&&d.addEventListener("close",()=>s()),o&&d.addEventListener("versionchange",()=>o())}).catch(()=>{}),f}const O=["get","getKey","getAll","getAllKeys","count"],R=["put","add","delete","clear"],I=new Map;function E(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(I.get(t))return I.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=R.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||O.includes(n)))return;const s=async function(a,...f){const d=this.transaction(a,o?"readwrite":"readonly");let y=d.store;return r&&(y=y.index(f.shift())),(await Promise.all([y[n](...f),o&&d.done]))[0]};return I.set(t,s),s}T(e=>P(v({},e),{get:(t,n,r)=>E(t,n)||e.get(t,n,r),has:(t,n)=>!!E(t,n)||e.has(t,n)}));const w=F("model-viewer",3,{upgrade(e){e.objectStoreNames.contains("model")||e.createObjectStore("model",{keyPath:"id"}).createIndex("Name","name"),e.objectStoreNames.contains("animation")||e.createObjectStore("animation",{keyPath:"fullName"}).createIndex("User","user")}}),W=async(e,t)=>{const r=(await w).transaction(t,"readwrite"),o=e.map(s=>r.store.put(s));await Promise.all([...o,r.done])},V=async(e,t)=>await(await w).get(t,e),Q=async(e,t,n)=>await(await w).getFromIndex(t,n,e),U=async(e,t,n)=>{const r=await w,o=IDBKeyRange.bound(t,n);return await r.getAll(e,o)},$=async(e,t,n)=>await(await w).getAllFromIndex(t,n,e),z=async(e,t)=>{const n=new Map;let s=await(await w).transaction(e,"readonly").store.openCursor();for(;s;)n.set(s.key,t?s.value[t]:s.value),s=await s.continue();return n},G=async(e,t,n)=>{var d,y,x;if(!e)return[];const r=[],s=(await w).transaction(t,"readonly"),a=e.toLowerCase();let f=await s.store.openCursor();for(;f;){const B=(y=(d=f.value[n])==null?void 0:d.toLowerCase)==null?void 0:y.call(d);((x=B.includes)==null?void 0:x.call(B,a))&&r.push(f.value),f=await f.continue()}return r};addEventListener("message",async e=>{const{type:t,store:n,value:r,index:o}=e.data;switch(t){case"put":await W(r,n),postMessage("");break;case"get":postMessage(await V(r,n));break;case"getByIndex":postMessage(await Q(r,n,o));break;case"getAllByIndex":postMessage(await $(r,n,o));break;case"getByKeyRange":const[s,a]=r.split("-");postMessage(await U(n,s,a));break;case"getMap":postMessage(await z(n,o));break;case"search":postMessage(await G(r,n,o))}})})();})();
