(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[42],{465:function(e,t,n){"use strict";n.r(t);var o=n(11),r=n(470),a=n(1),c=n(17),i=Object(a.lazy)((function(){return n.e(23).then(n.bind(null,453))})),s=Object(a.lazy)((function(){return n.e(33).then(n.bind(null,454))})),l=Object(a.lazy)((function(){return n.e(29).then(n.bind(null,455))}));var d=function(e){var t,n=e.openControl;switch(Object(a.useContext)(c.b).app.sideContent){case"settings":t=Object(o.jsx)(i,{openControl:n});break;case"chainMaker":t=Object(o.jsx)(s,{openControl:n});break;case"advanced":t=Object(o.jsx)(l,{openControl:n})}return Object(o.jsx)(a.Suspense,{fallback:Object(o.jsx)("div",{children:"Loading"}),children:t})},u=n(28),b=n(255),p=n.n(b),j=n(257),g=n.n(j),h=n(467),m=n(101),O=n(6),f=n(72),x=O.d,C=Object(m.a)((function(e){return{downloadButton:{color:"black",display:"flex",alignItems:"center",justifyContent:"center",width:"2rem",height:"2rem",borderRadius:"50%",position:"absolute",left:"0",top:"0",margin:"1rem",cursor:"pointer",backgroundColor:"rgba(255,255,255,0.5)","&:hover":{backgroundColor:"rgba(255,255,255,0.8)"}},closeDrawerButton:{color:"black",display:"flex",alignItems:"center",justifyContent:"center",width:"2rem",height:"2rem",borderRadius:"50%",position:"absolute",right:"0",top:"0",margin:"1rem",cursor:"pointer",backgroundColor:"rgba(255,255,255,0.5)","&:hover":{backgroundColor:"rgba(255,255,255,0.8)"}},root:{height:"4rem",minHeight:"4rem",width:"100%",fontSize:"1.5rem",display:"flex",position:"sticky",top:0,zIndex:5,justifyContent:"center",alignItems:"center",backgroundColor:x,backgroundImage:"url(".concat(f.a,")"),backgroundSize:"auto 100vh",backgroundPosition:"center",color:"white",marginBottom:"0.5rem"}}}));var k=function(e){var t=e.toggleDrawerOpen,n=C(),r=Object(a.useContext)(c.a),i=Object(a.useContext)(c.b),s=i.capture.codec,l=i.ascii.enable;return Object(a.useEffect)((function(){try{var e=O.C.filter((function(e){return MediaRecorder.isTypeSupported(e)})),t={type:"update",key:"capture",value:{supportedCodecs:Object(u.a)(e),codec:e[0]}};r(t)}catch(n){console.log(n)}}),[r]),Object(o.jsxs)("div",{className:n.root,children:[Object(o.jsx)("span",{children:"Settings"}),Object(o.jsx)("div",{className:n.closeDrawerButton,onClick:t,children:Object(o.jsx)(p.a,{})}),s&&!l&&Object(o.jsx)(h.a,{title:"Save animation as video (experimental)",placement:"bottom-end",children:Object(o.jsx)("div",{className:n.downloadButton,onClick:function(){r({type:"toggle",key:"capture",value:"enable"})},children:Object(o.jsx)(g.a,{})})})]})},v=n(71);t.default=function(e){var t=e.toggleSidebarOpen,n=e.open,a=e.openControl,c=Object(v.a)();return Object(o.jsxs)(r.a,{className:c.drawer,variant:"persistent",anchor:"left",open:n,classes:{paper:c.drawerPaper},children:[Object(o.jsx)(k,{toggleDrawerOpen:t}),Object(o.jsx)(d,{openControl:a})]})}}}]);
//# sourceMappingURL=42.01fcf1b6.chunk.js.map