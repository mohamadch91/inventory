"use strict";(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[865],{865:function(e,c,l){l.r(c);var i=l(4942),n=l(1413),s=l(29439),t=l(56890),a=l(35855),r=l(53994),d=l(53382),h=l(72791),o=l(69778),x=l(40277),u=l(95907),m=l(23821),v=l(65218),j=l(59909),f=(l(5227),l(87004),l(2423),l(30606)),p=l(80184);c.default=function(){var e=(0,h.useState)([]),c=(0,s.Z)(e,2),l=c[0],Z=c[1],b=(0,h.useState)([]),k=(0,s.Z)(b,2),g=k[0],N=k[1],S=(0,h.useState)([]),P=(0,s.Z)(S,2),w=P[0],y=P[1],C=(0,h.useState)({}),I=(0,s.Z)(C,2),Q=I[0],T=I[1],L=(0,h.useState)({}),F=(0,s.Z)(L,2),z=F[0],E=F[1],A=(0,h.useState)(null),B=(0,s.Z)(A,2),q=B[0],O=B[1],R=(0,h.useState)(!0),X=(0,s.Z)(R,2),M=X[0],_=X[1],D=(0,h.useState)(0),G=(0,s.Z)(D,2),H=G[0],J=G[1];function K(){o.Z.getItemTypes().then((function(e){var c;(Z(e.data),H&&"0"!==H)?N(null===e||void 0===e||null===(c=e.data)||void 0===c?void 0:c.filter((function(e){return e.itemclass===parseInt(H)}))):N(e.data);_(!1)})).catch((function(e){v.ZP.error((0,p.jsx)(f.c,{children:"There is a problem loading data"})),_(!1)}))}function U(e){var c=e.target,l=c.name,s=c.value;T((0,n.Z)((0,n.Z)({},Q),{},(0,i.Z)({},l,s)))}function V(e){var c=e.target,l=c.name,s=c.value;E((0,n.Z)((0,n.Z)({},z),{},(0,i.Z)({},l,s)))}function W(){var e;if(Object.keys(Q).every((function(e){return""!==Q[e]}))){_(!0);var c={id:(e=Q).id,title:e.title,code:e.code,active:e.active,havePQS:e.havePQS,itemclass:e.itemclass};o.Z.putItemTypes(c).then((function(e){K()})).catch((function(e){v.ZP.error((0,p.jsx)(f.c,{children:e.response.data})),v.ZP.error((0,p.jsx)(f.c,{children:"There is a problem sending data"})),_(!1)})),O(null),T({})}else v.ZP.error((0,p.jsx)(f.c,{children:"Please fill all the fields"}))}return(0,h.useEffect)((function(){o.Z.getItemClasses().then((function(e){var c=e.data.filter((function(e){return!0===e.active}));y(c),K()})).catch((function(e){v.ZP.error((0,p.jsx)(f.c,{children:"There is a problem loading data"})),_(!1)}))}),[]),(0,h.useEffect)((function(){console.log(H),N(H&&"0"!==H?null===l||void 0===l?void 0:l.filter((function(e){return e.itemclass===parseInt(H)})):l)}),[H]),(0,h.useEffect)((function(){E((0,n.Z)((0,n.Z)({},z),{},{itemClass:w[0],active:!0,havePQS:!1}))}),[w]),(0,p.jsx)("div",{className:"item-class-page",children:M?(0,p.jsx)(j.Z,{}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"mb-4",children:[(0,p.jsx)("div",{className:"mb-2",children:(0,p.jsx)("h4",{className:"page-title",children:(0,p.jsx)(f.c,{children:"Item class Filter to list categories"})})}),(0,p.jsx)("div",{className:"",children:(0,p.jsxs)("select",{name:"itemclass",onChange:function(e){J(e.target.value)},value:H,children:[(0,p.jsx)("option",{value:0,children:"All"}),w.map((function(e,c){return(0,p.jsx)("option",{value:e.id,children:e.title},e.id)}))]})})]}),(0,p.jsxs)("div",{className:"add-row mt-4 mb-2",children:[(0,p.jsxs)("h3",{children:[" ",(0,p.jsx)(f.c,{children:"Enter new item category"})]}),(0,p.jsxs)("div",{className:"row",children:[(0,p.jsxs)("div",{className:"col-md-3 flex-column d-flex",children:[(0,p.jsx)("label",{children:(0,p.jsx)(f.c,{children:"Title"})}),(0,p.jsx)("input",{name:"title",type:"text",tabIndex:1,onChange:V,value:null===z||void 0===z?void 0:z.title,required:!0})]}),(0,p.jsxs)("div",{className:"col-md-3 flex-column d-flex",children:[(0,p.jsx)("label",{children:(0,p.jsx)(f.c,{children:"Item class"})}),(0,p.jsx)("select",{name:"itemClass",tabIndex:2,onChange:V,value:null===z||void 0===z?void 0:z.itemClass,children:w.map((function(e,c){return(0,p.jsx)("option",{value:e.id,selected:0===c,children:e.title},e.id)}))})]}),(0,p.jsxs)("div",{className:"col-md-6 d-flex justify-content-center align-items-center mt-3",children:[(0,p.jsx)("label",{children:(0,p.jsx)(f.c,{children:"Active"})}),(0,p.jsx)("div",{class:"form-check form-check-primary mt-3",children:(0,p.jsxs)("label",{className:"form-check-label",children:[(0,p.jsx)("input",{name:"active",tabIndex:3,className:"mr-1",type:"checkbox",onChange:function(){return E((0,n.Z)((0,n.Z)({},z),{},{active:!z.active}))},checked:null===z||void 0===z?void 0:z.active}),(0,p.jsx)("i",{className:"input-helper mt-3"})]})}),(0,p.jsx)("label",{children:(0,p.jsx)(f.c,{children:"Is it from PQS/PIS list?"})}),(0,p.jsx)("div",{class:"form-check form-check-primary mt-3",children:(0,p.jsxs)("label",{className:"form-check-label",children:[(0,p.jsx)("input",{name:"havePQS",className:"mr-1",tabIndex:4,type:"checkbox",onChange:function(){return E((0,n.Z)((0,n.Z)({},z),{},{havePQS:!z.havePQS}))},checked:null===z||void 0===z?void 0:z.havePQS}),(0,p.jsx)("i",{className:"input-helper mt-3"})]})}),(0,p.jsx)("button",{tabIndex:5,className:"save-btn w-50",onClick:function(){var e;if(Object.keys(z).every((function(e){return""!==z[e]}))){var c;_(!0);var l={title:(e=z).title,code:e.code,active:e.active,havePQS:e.havePQS};null!==z&&void 0!==z&&null!==(c=z.itemClass)&&void 0!==c&&c.id?l.itemclass=parseInt(z.itemClass.id):l.itemclass=parseInt(z.itemClass),o.Z.postItemType(l).then((function(e){K()})).catch((function(e){v.ZP.error((0,p.jsx)(f.c,{children:e.response.data})),v.ZP.error((0,p.jsx)(f.c,{children:"There is a problem sending data"})),_(!1)})),E((0,n.Z)((0,n.Z)({},z),{},{active:!0,havePQS:!1,title:""}))}else v.ZP.error((0,p.jsx)(f.c,{children:"Please fill all the fields"}))},children:(0,p.jsx)(f.c,{children:"Save"})})]})]})]}),(0,p.jsx)("h3",{className:"page-title mb-3",children:(0,p.jsx)(f.c,{children:"Items category list"})}),(0,p.jsx)("div",{className:"mb-2",children:(0,p.jsxs)(m.Z,{children:[(0,p.jsx)(t.Z,{children:(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(r.Z,{}),(0,p.jsx)(r.Z,{children:(0,p.jsx)(f.c,{children:"Title"})}),(0,p.jsx)(r.Z,{children:(0,p.jsx)(f.c,{children:"Item class"})}),(0,p.jsx)(r.Z,{children:(0,p.jsx)(f.c,{children:"Code"})}),(0,p.jsx)(r.Z,{children:(0,p.jsx)(f.c,{children:"Active"})}),(0,p.jsx)(r.Z,{children:(0,p.jsx)(f.c,{children:"Is it from PQS/PIS list?"})}),(0,p.jsx)(r.Z,{children:(0,p.jsx)(f.c,{children:"Edit"})})]})}),(0,p.jsx)(d.Z,{children:null===g||void 0===g?void 0:g.map((function(e,c){var i,s;return(0,p.jsx)(p.Fragment,{children:q!==e.id?(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(r.Z,{children:c+1}),(0,p.jsx)(r.Z,{children:e.title}),(0,p.jsx)(r.Z,{children:null===(s=e.itemclass,i=w.find((function(e){return e.id===s})))||void 0===i?void 0:i.title}),(0,p.jsx)(r.Z,{children:e.code}),(0,p.jsx)(r.Z,{children:(0,p.jsx)("div",{class:"form-check form-check-primary",children:(0,p.jsxs)("label",{className:"form-check-label",children:[(0,p.jsx)("input",{type:"checkbox",className:"from-check-input",checked:e.active,id:"cb1",disabled:!0}),(0,p.jsx)("i",{className:"input-helper"})]})})}),(0,p.jsx)(r.Z,{children:(0,p.jsx)("div",{class:"form-check form-check-primary",children:(0,p.jsxs)("label",{className:"form-check-label",children:[(0,p.jsx)("input",{type:"checkbox",className:"custom-check",id:"cb1",checked:e.havePQS,disabled:!0}),(0,p.jsx)("i",{className:"input-helper"})]})})}),(0,p.jsx)(r.Z,{children:(0,p.jsx)("button",{className:"edit-btn",onClick:function(c){return function(e){var c=l.find((function(c){return c.id===e.id}));T(c),O(e.id)}(e)},children:(0,p.jsx)(u.Z,{})})})]}):(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(r.Z,{children:c+1}),(0,p.jsx)(r.Z,{children:(0,p.jsx)("input",{name:"title",type:"text",onChange:U,value:null===Q||void 0===Q?void 0:Q.title,required:!0})}),(0,p.jsx)(r.Z,{children:(0,p.jsx)("select",{name:"itemclass",onChange:U,value:null===Q||void 0===Q?void 0:Q.itemClass,children:w.map((function(c,l){return(0,p.jsx)("option",{value:c.id,selected:e.itemclass===c.id,children:c.title},c.id)}))})}),(0,p.jsx)(r.Z,{children:null===Q||void 0===Q?void 0:Q.code}),(0,p.jsx)(r.Z,{children:(0,p.jsx)("div",{class:"form-check form-check-primary",children:(0,p.jsxs)("label",{className:"form-check-label",children:[(0,p.jsx)("input",{name:"active",type:"checkbox",onChange:function(){return T((0,n.Z)((0,n.Z)({},Q),{},{active:!Q.active}))},checked:null===Q||void 0===Q?void 0:Q.active}),(0,p.jsx)("i",{className:"input-helper"})]})})}),(0,p.jsx)(r.Z,{children:(0,p.jsx)("div",{class:"form-check form-check-primary",children:(0,p.jsxs)("label",{className:"form-check-label",children:[(0,p.jsx)("input",{name:"havePQS",type:"checkbox",onChange:function(){return T((0,n.Z)((0,n.Z)({},Q),{},{havePQS:!Q.havePQS}))},checked:null===Q||void 0===Q?void 0:Q.havePQS}),(0,p.jsx)("i",{className:"input-helper"})]})})}),(0,p.jsxs)(r.Z,{children:[(0,p.jsx)("button",{className:"save-btn",onClick:W,children:(0,p.jsx)(f.c,{children:"Save"})}),(0,p.jsx)("button",{className:"close-btn",onClick:function(){return O(null)},children:(0,p.jsx)(x.Z,{})})]})]})})}))})]})})]})})}},40277:function(e,c,l){var i=l(80184);c.Z=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"121.31px",height:"122.876px",viewBox:"0 0 121.31 122.876",enableBackground:"new 0 0 121.31 122.876",xmlSpace:"preserve",children:(0,i.jsx)("g",{children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z"})})})})}},95907:function(e,c,l){var i=l(80184);c.Z=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"30",height:"30",xmlnsXlink:"http://www.w3.org/1999/xlink","enable-background":"new 0 0 512 512",children:(0,i.jsx)("path",{d:"m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z"})})})}},23821:function(e,c,l){var i=l(39281),n=l(79836),s=l(80184);c.Z=function(e){var c=e.children;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(i.Z,{children:(0,s.jsx)(n.Z,{children:c})})})}}}]);
//# sourceMappingURL=865.c6d15996.chunk.js.map