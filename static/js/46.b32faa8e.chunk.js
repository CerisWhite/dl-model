(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[46],{173:function(e,t,n){"use strict";var r=n(8),o=n(0),a=Object(o.lazy)((function(){return n.e(15).then(n.bind(null,261))})),c=Object(o.lazy)((function(){return n.e(17).then(n.bind(null,263))})),l=Object(o.lazy)((function(){return n.e(20).then(n.bind(null,264))})),i=Object(o.lazy)((function(){return n.e(18).then(n.bind(null,262))})),s=Object(o.lazy)((function(){return Promise.all([n.e(7),n.e(19)]).then(n.bind(null,259))})),u=Object(o.lazy)((function(){return Promise.all([n.e(29),n.e(36)]).then(n.bind(null,265))})),d=Object(o.lazy)((function(){return n.e(16).then(n.bind(null,266))})),b=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(6),n.e(7),n.e(33)]).then(n.bind(null,260))}));t.a=function(e){var t=e.mode,n=e.closeModal,j=e.handleSelect,h=e.docked,g=e.setDock,m=null;switch(t){case"adv":case"texture":m=a;break;case"dragon":m=c;break;case"face":case"eye":case"mouth":m=l;break;case"weapon":m=i;break;case"animation":m=s;break;case"nonHumanAni":m=u;break;case"background":m=d;break;case"share":m=b;break;default:m=t.includes("-")?d:null}var p=g&&function(){g(t,j),n()};return Object(r.jsx)(o.Suspense,{fallback:Object(r.jsx)("div",{children:"Loading"}),children:Object(r.jsx)(m,{mode:t,docked:h,close:n,handleSelect:j,moveToDock:p})})}},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(8),o=n(31),a=n(278),c=n(173);var l=function(e){var t=e.mode,n=e.closeModal,l=e.handleSelect,i=e.setDock;return t?Object(o.createPortal)(Object(r.jsx)(a.a,{maxWidth:"lg",onClose:n,open:!!t,scroll:"paper",PaperProps:{classes:{root:"Modal"}},children:Object(r.jsx)(c.a,{mode:t,closeModal:n,handleSelect:l,setDock:i})}),document.getElementById("modal-root")):null}},471:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var r=n(13),o=n(8),a=n(0),c=n(483),l=n(36),i=n(14),s=n(275),u=n.n(s),d=n(277),b=n.n(d),j=n(484),h=n(123),g=n(9),m=n.p+"static/media/Rose-Petals.bc11ecc7.svg",p=g.f,f=Object(h.a)((function(e){return{downloadButton:{color:"black",display:"flex",alignItems:"center",justifyContent:"center",width:"2rem",height:"2rem",borderRadius:"50%",position:"absolute",left:"0",top:"0",margin:"1rem",cursor:"pointer",backgroundColor:"rgba(255,255,255,0.5)","&:hover":{backgroundColor:"rgba(255,255,255,0.8)"}},closeDrawerButton:{color:"black",display:"flex",alignItems:"center",justifyContent:"center",width:"2rem",height:"2rem",borderRadius:"50%",position:"absolute",right:"0",top:"0",margin:"1rem",cursor:"pointer",backgroundColor:"rgba(255,255,255,0.5)","&:hover":{backgroundColor:"rgba(255,255,255,0.8)"}},root:{height:"4rem",minHeight:"4rem",width:"100%",fontSize:"1.5rem",display:"flex",position:"sticky",top:0,zIndex:5,justifyContent:"center",alignItems:"center",backgroundColor:p,backgroundImage:"url(".concat(m,")"),backgroundSize:"auto 100vh",backgroundPosition:"center",color:"white",marginBottom:"0.5rem"}}}));var k=function(e){var t=e.toggleSidebar,n=f(),r=Object(a.useContext)(i.a),c=Object(a.useContext)(i.b),s=c.capture.codec,d=c.ascii.enable;return Object(a.useEffect)((function(){try{var e=g.G.filter((function(e){return MediaRecorder.isTypeSupported(e)})),t={type:"update",key:"capture",value:{supportedCodecs:Object(l.a)(e),codec:e[0]}};r(t)}catch(n){console.log(n)}}),[r]),Object(o.jsxs)("div",{className:n.root,children:[Object(o.jsx)("span",{children:"Settings"}),Object(o.jsx)("div",{className:n.closeDrawerButton,onClick:t,children:Object(o.jsx)(u.a,{})}),s&&!d&&Object(o.jsx)(j.a,{title:"Save animation as video (experimental)",placement:"bottom-end",children:Object(o.jsx)("div",{className:n.downloadButton,onClick:function(){r({type:"toggle",key:"capture",value:"enable"})},children:Object(o.jsx)(b.a,{})})})]})},O={settings:Object(a.lazy)((function(){return n.e(28).then(n.bind(null,477))})),chainMaker:Object(a.lazy)((function(){return n.e(41).then(n.bind(null,486))})),advanced:Object(a.lazy)((function(){return n.e(40).then(n.bind(null,487))}))};var v=function(e){var t=e.openModal,n=Object(a.useContext)(i.b).app.sidebarContent,r=O[n];return Object(o.jsx)(a.Suspense,{fallback:Object(o.jsx)("div",{children:"Loading"}),children:Object(o.jsx)(r,{openModal:t})})},x=n(217),y=Object(h.a)((function(){return{drawer:{width:g.g,overflowY:"scroll"},drawerPaper:{alignItems:"center",backgroundColor:g.f,backgroundImage:"url(".concat(m,")"),backgroundSize:"cover",backgroundPosition:"center",width:g.g,"& button":{marginBottom:"0.2rem"}}}}));var w=function(e){var t=e.open,n=e.toggleSidebar,l=e.setDock,i=y(),s=Object(a.useState)(""),u=Object(r.a)(s,2),d=u[0],b=u[1],j=Object(a.useRef)(null);return Object(o.jsxs)(c.a,{className:i.drawer,variant:"persistent",anchor:"left",open:t,classes:{paper:i.drawerPaper},children:[Object(o.jsx)(k,{toggleSidebar:n}),Object(o.jsx)(v,{openModal:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;j.current=t,b(e)}}),Object(o.jsx)(x.a,{mode:d,closeModal:function(){return b("")},handleSelect:j.current,setDock:l})]})}}}]);
//# sourceMappingURL=46.b32faa8e.chunk.js.map