(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[41],{129:function(e,n,a){"use strict";var t=a(80),i=a(81);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=i(a(0)),r=(0,t(a(82)).default)(c.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");n.default=r},284:function(e,n,a){},486:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return b}));var t=a(36),i=a(8),c=a(0),r=a(14),s=a(129),l=a.n(s),d=a(86),o=a(22),u=a(42),j=(a(284),Object(c.lazy)((function(){return a.e(30).then(a.bind(null,490))}))),h={adv:"animation",dragon:"nonHumanAni"};var b=function(e){var n=e.openModal,a=Object(c.useContext)(r.b),s=a.chainMaker.chain,b=a.app.viewerType,f=Object(c.useContext)(r.a),v=function(e,n){f({type:"update",key:e,value:n})},O=function(e){return v("chainMaker",{chain:e})},p=function(e){v("animation",{code:e})};return Object(i.jsxs)("div",{className:"ChainMaker",children:[Object(i.jsxs)("div",{className:"ChainMaker-header",children:[Object(i.jsx)("div",{className:"ChainMaker-title",children:"Chain Maker"}),Object(i.jsx)("div",{className:"ChainMaker-close",onClick:function(){v("app",{sidebarContent:"settings"})},children:Object(i.jsx)(l.a,{})})]}),Object(i.jsxs)(c.Suspense,{fallback:Object(i.jsx)("div",{children:"Loading"}),children:[Object(i.jsxs)("div",{className:"ChainMaker-btns",children:[Object(i.jsx)(d.a,{onClick:function(){var e=Object(o.e)(s);p(e)},className:"ChainMaker-btn",children:"Play All"}),Object(i.jsx)(d.a,{onClick:function(){n(h[b],(function(e,n){var a=Object(u.j)(e,n),i=[].concat(Object(t.a)(s),Object(t.a)(a));O(i)}))},className:"ChainMaker-btn",children:"Add"})]}),Object(i.jsx)("div",{className:"ChainMaker-list",children:Object(i.jsx)(j,{openModal:n,playAni:function(e){var n=e.currentTarget.id,a=s.find((function(e){return e.id===n})),t=Object(o.e)([a]);p(t)},deleteAni:function(e){if(1!==s.length){var n=e.currentTarget.id,a=s.filter((function(e){return e.id!==n}));O(a)}},updateAni:function(e,n){var a=s.map((function(a){return a.id===e?n:a}));O(a)},chain:s})})]})]})}}}]);
//# sourceMappingURL=41.e814504a.chunk.js.map