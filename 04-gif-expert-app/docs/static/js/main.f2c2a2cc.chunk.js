(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),i=(n(15),n(2)),s=n(9),o=n(0),u=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],u=c[1];return Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.log("Submit hecho"),r.trim().length>2?(t((function(e){return[r].concat(Object(s.a)(e))})),u("")):console.log("inputValue vacido")},children:Object(o.jsx)("input",{type:"text",value:r,onChange:function(e){u(e.target.value)}})})},l=n(10),j=n(6),d=n.n(j),b=n(8),p=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,a,c,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=VBgswINHv9vM76LeKiJlxdNaqCqu9Qv8"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){return console.log(e),Object(o.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(o.jsx)("img",{src:e.url,alt:e.title}),Object(o.jsxs)("p",{children:[" ",e.title," "]})]})},m=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){p(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,r=n.loading;return console.log(r),console.log(c),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),r&&Object(o.jsx)("p",{className:"animate__animated animate__flash",children:"Loading..."}),Object(o.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(o.jsx)(f,Object(l.a)({},e),e.id)}))})]})},h=function(){var e=Object(a.useState)(["One Piace"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"GifExpertApp"}),Object(o.jsx)(u,{setCategories:c}),Object(o.jsx)("hr",{}),Object(o.jsx)("ol",{children:n.map((function(e){return Object(o.jsx)(m,{category:e},e)}))})]})};r.a.render(Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(h,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.f2c2a2cc.chunk.js.map