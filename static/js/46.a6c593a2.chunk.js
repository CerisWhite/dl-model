(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[46],{174:function(e,t,n){"use strict";var r=n(8),a=n(0),o=Object(a.lazy)((function(){return n.e(15).then(n.bind(null,261))})),c=Object(a.lazy)((function(){return n.e(17).then(n.bind(null,263))})),l=Object(a.lazy)((function(){return n.e(21).then(n.bind(null,264))})),i=Object(a.lazy)((function(){return n.e(19).then(n.bind(null,265))})),s=Object(a.lazy)((function(){return n.e(18).then(n.bind(null,262))})),u=Object(a.lazy)((function(){return Promise.all([n.e(7),n.e(20)]).then(n.bind(null,259))})),d=Object(a.lazy)((function(){return Promise.all([n.e(30),n.e(37)]).then(n.bind(null,266))})),b=Object(a.lazy)((function(){return n.e(16).then(n.bind(null,267))})),j=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(6),n.e(7),n.e(34)]).then(n.bind(null,260))}));t.a=function(e){var t=e.mode,n=e.closeModal,h=e.handleSelect,g=e.docked,f=e.setDock,m=null;switch(t){case"adv":case"texture":m=o;break;case"dragon":m=c;break;case"face":case"eye":case"mouth":m=l;break;case"dragonFace":case"dragonEye":case"dragonMouth":m=i;break;case"weapon":m=s;break;case"animation":m=u;break;case"nonHumanAni":m=d;break;case"background":m=b;break;case"share":m=j;break;default:m=t.includes("-")?b:null}var p=f&&function(){f(t,h),n()};return Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)("div",{children:"Loading"}),children:Object(r.jsx)(m,{mode:t,docked:g,close:n,handleSelect:h,moveToDock:p})})}},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(8),a=n(31),o=n(279),c=n(174);var l=function(e){var t=e.mode,n=e.closeModal,l=e.handleSelect,i=e.setDock;return t?Object(a.createPortal)(Object(r.jsx)(o.a,{maxWidth:"lg",onClose:n,open:!!t,scroll:"paper",PaperProps:{classes:{root:"Modal"}},children:Object(r.jsx)(c.a,{mode:t,closeModal:n,handleSelect:l,setDock:i})}),document.getElementById("modal-root")):null}},475:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var r=n(13),a=n(8),o=n(0),c=n(486),l=n(36),i=n(14),s=n(276),u=n.n(s),d=n(278),b=n.n(d),j=n(487),h=n(123),g=n(9),f=n.p+"static/media/Rose-Petals.bc11ecc7.svg",m=g.f,p=Object(h.a)((function(e){return{downloadButton:{color:"black",display:"flex",alignItems:"center",justifyContent:"center",width:"2rem",height:"2rem",borderRadius:"50%",position:"absolute",left:"0",top:"0",margin:"1rem",cursor:"pointer",backgroundColor:"rgba(255,255,255,0.5)","&:hover":{backgroundColor:"rgba(255,255,255,0.8)"}},closeDrawerButton:{color:"black",display:"flex",alignItems:"center",justifyContent:"center",width:"2rem",height:"2rem",borderRadius:"50%",position:"absolute",right:"0",top:"0",margin:"1rem",cursor:"pointer",backgroundColor:"rgba(255,255,255,0.5)","&:hover":{backgroundColor:"rgba(255,255,255,0.8)"}},root:{height:"4rem",minHeight:"4rem",width:"100%",fontSize:"1.5rem",display:"flex",position:"sticky",top:0,zIndex:5,justifyContent:"center",alignItems:"center",backgroundColor:m,backgroundImage:"url(".concat(f,")"),backgroundSize:"auto 100vh",backgroundPosition:"center",color:"white",marginBottom:"0.5rem"}}}));var k=function(e){var t=e.toggleSidebar,n=p(),r=Object(o.useContext)(i.a),c=Object(o.useContext)(i.b),s=c.capture.codec,d=c.ascii.enable;return Object(o.useEffect)((function(){if(MediaRecorder){var e=g.G.filter(MediaRecorder.isTypeSupported),t={type:"update",key:"capture",value:{supportedCodecs:Object(l.a)(e),codec:e[0]}};r(t)}}),[r]),Object(a.jsxs)("div",{className:n.root,children:[Object(a.jsx)("span",{children:"Settings"}),Object(a.jsx)("div",{className:n.closeDrawerButton,onClick:t,children:Object(a.jsx)(u.a,{})}),s&&!d&&Object(a.jsx)(j.a,{title:"Save animation as video (experimental)",placement:"bottom-end",children:Object(a.jsx)("div",{className:n.downloadButton,onClick:function(){r({type:"toggle",key:"capture",value:"enable"})},children:Object(a.jsx)(b.a,{})})})]})},O={settings:Object(o.lazy)((function(){return n.e(29).then(n.bind(null,481))})),chainMaker:Object(o.lazy)((function(){return n.e(42).then(n.bind(null,489))})),advanced:Object(o.lazy)((function(){return n.e(41).then(n.bind(null,490))}))};var v=function(e){var t=e.openModal,n=Object(o.useContext)(i.b).app.sidebarContent,r=O[n];return Object(a.jsx)(o.Suspense,{fallback:Object(a.jsx)("div",{children:"Loading"}),children:Object(a.jsx)(r,{openModal:t})})},x=n(217),y=Object(h.a)((function(){return{drawer:{width:g.g,overflowY:"scroll"},drawerPaper:{alignItems:"center",backgroundColor:g.f,backgroundImage:"url(".concat(f,")"),backgroundSize:"cover",backgroundPosition:"center",width:g.g,"& button":{marginBottom:"0.2rem"}}}}));var w=function(e){var t=e.open,n=e.toggleSidebar,l=e.setDock,i=y(),s=Object(o.useState)(""),u=Object(r.a)(s,2),d=u[0],b=u[1],j=Object(o.useRef)(null);return Object(a.jsxs)(c.a,{className:i.drawer,variant:"persistent",anchor:"left",open:t,classes:{paper:i.drawerPaper},children:[Object(a.jsx)(k,{toggleSidebar:n}),Object(a.jsx)(v,{openModal:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;j.current=t,b(e)}}),Object(a.jsx)(x.a,{mode:d,closeModal:function(){return b("")},handleSelect:j.current,setDock:l})]})}}}]);
//# sourceMappingURL=46.a6c593a2.chunk.js.map