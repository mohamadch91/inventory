"use strict";(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[4084],{84084:function(e,s,c){c.r(s),c.d(s,{default:function(){return v}});var l=c(29439),a=c(72791),n=c(77063),i=c(74165),t=c(15861),d=c(91933),r=c(74936),o=c(24849),h=c(30606),x=c(40355),m=c(80184),j=function(e){var s=(0,d.useQuery)(["result-table"],(0,t.Z)((0,i.Z)().mark((function s(){var c;return(0,i.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(console.log(e.QRString),null===e.QRString){s.next=9;break}return s.next=4,r.Z.getQrData("code="+e.QRString);case 4:return c=s.sent,console.log(c.data),s.abrupt("return",c.data);case 9:return s.abrupt("return",[]);case 10:case"end":return s.stop()}}),s)}))),{refetchOnMount:!0}),c=s.data,l=s.isLoading;return l?(0,m.jsx)(o.Z,{}):l||0!==c.length?(0,m.jsx)("div",{className:"table-responsive mt-3",children:(0,m.jsxs)("div",{className:"column",children:[(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-6",children:(0,m.jsx)("h4",{className:"text-black",children:(0,m.jsx)(h.c,{children:"Facility"})})}),(0,m.jsx)("div",{className:"col-6",children:(0,m.jsx)("h4",{className:"text-black",children:null===c||void 0===c?void 0:c.facility})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-6",children:(0,m.jsx)("h4",{className:"text-black",children:(0,m.jsx)(h.c,{children:"Item class"})})}),(0,m.jsx)("div",{className:"col-6",children:(0,m.jsx)("h4",{className:"text-black",children:null===c||void 0===c?void 0:c.item_class})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-6",children:(0,m.jsx)("h4",{className:"text-black",children:(0,m.jsx)(h.c,{children:"Items category"})})}),(0,m.jsx)("div",{className:"col-6",children:(0,m.jsx)("h4",{className:"text-black",children:null===c||void 0===c?void 0:c.item_type})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-6",children:(0,m.jsx)("h4",{className:"text-black",children:(0,m.jsx)(h.c,{children:"Model"})})}),(0,m.jsx)("div",{className:"col-6",children:(0,m.jsx)("h4",{className:"text-black",children:null===c||void 0===c?void 0:c.model})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-6",children:(0,m.jsx)("h4",{className:"text-black",children:(0,m.jsx)(h.c,{children:"PQS code"})})}),(0,m.jsx)("div",{className:"col-6",children:(0,m.jsx)("h4",{className:"text-black",children:null===c||void 0===c?void 0:c.pqs_code})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-6",children:(0,m.jsx)("h4",{className:"text-black",children:(0,m.jsx)(h.c,{children:"Code"})})}),(0,m.jsx)("div",{className:"col-6",children:(0,m.jsx)("h4",{className:"text-black",children:null===c||void 0===c?void 0:c.code})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-6",children:(0,m.jsx)("h4",{className:"text-black",children:(0,m.jsx)(h.c,{children:"Capacity"})})}),(0,m.jsx)("div",{className:"col-6",children:(0,m.jsx)("h4",{className:"text-black",children:null===c||void 0===c?void 0:c.capacity})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-6",children:(0,m.jsx)("h4",{className:"text-black",children:(0,m.jsx)(h.c,{children:"Manufacturer"})})}),(0,m.jsx)("div",{className:"col-6",children:(0,m.jsx)("h4",{className:"text-black",children:null===c||void 0===c?void 0:c.manufac})})]}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-6",children:(0,m.jsx)("h4",{className:"text-black",children:(0,m.jsx)(h.c,{children:"Functioning Status"})})}),(0,m.jsx)("div",{className:"col-6",children:(0,m.jsx)("h4",{className:"text-black",children:null!==c&&void 0!==c&&c.functioning?(0,m.jsx)(h.c,{children:"Working"}):(0,m.jsx)(h.c,{children:"Not working"})})})]})]})}):(0,m.jsx)(x.Z,{message:"No data was found with the desired QR code"})},u=(c(54725),c(11175)),v=function(){var e=(0,a.useState)(null),s=(0,l.Z)(e,2),c=s[0],i=s[1],t=(0,a.useState)(!0),d=(0,l.Z)(t,2),r=d[0],o=d[1],x=(0,a.useState)(!1),v=(0,l.Z)(x,2),N=v[0],b=v[1];return(0,m.jsxs)("div",{className:"card w-75 h-100 m-auto ".concat(u.Z.scanPage),children:[(0,m.jsx)("button",{onClick:function(){b(!0)},type:"button",className:"btn btn-primary   w-75 ",children:(0,m.jsx)(h.c,{children:"Search QR code"})}),r&&(0,m.jsx)(n.T,{className:" w-100 m-auto h-100 ",onResult:function(e,s){e&&(i(null===e||void 0===e?void 0:e.text),o(!1)),s&&console.log(s)},constraints:{facingMode:"environment"},scanDelay:100}),c&&!r&&(0,m.jsxs)("div",{className:"w-75 m-auto pt-3 text-center",children:[(0,m.jsx)("h3",{className:"display-4 text-black",children:(0,m.jsx)(h.c,{children:"Code Scanned Successfully"})}),(0,m.jsx)("h3",{className:"display-4 text-black",children:(0,m.jsx)(h.c,{children:c})})]}),N&&(0,m.jsxs)("div",{children:[(0,m.jsx)(j,{QRString:c}),(0,m.jsx)("button",{onClick:function(){i(null),o(!0),b(!1)},type:"button",className:"btn btn-light btn-fw mt-3 w-25 mb-3  ",children:(0,m.jsx)(h.c,{children:"Search QR code"})})]})]})}},40355:function(e,s,c){c(72791);var l=c(30606),a=c(80184);s.Z=function(e){return(0,a.jsxs)("div",{className:"alert alert-danger w-100 mb-5 text-center m-auto",role:"alert",children:[(0,a.jsxs)("p",{className:"display-4",children:[(0,a.jsx)(l.c,{children:"We've been looking everywhere, nothing was found ..."})," \ud83d\ude1f"]}),e.message&&(0,a.jsx)("p",{children:(0,a.jsx)(l.c,{children:e.message})})]})}},11175:function(e,s){s.Z={inputResponsive:"ItemsQR_inputResponsive__ShY-3",codeInputResponsive:"ItemsQR_codeInputResponsive__iEFAF",buttonResponsive:"ItemsQR_buttonResponsive__OgujR",scanPage:"ItemsQR_scanPage__1C9Ao"}}}]);
//# sourceMappingURL=4084.7361ba9f.chunk.js.map