(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),i=n(2),s=n(9),u=n(0),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(s.a)(e))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:r,onChange:function(e){o(e.target.value)},placeholder:"Busca un gif y pulsta intro..."})})},d=n(10),j=function(e){e.id;var t=e.title,n=e.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(u.jsx)("img",{src:n,alt:t}),Object(u.jsx)("p",{children:t})]})},l=n(6),p=n.n(l),h=n(8),f=function(){var e=Object(h.a)(p.a.mark((function e(t){var n,a,c,r,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"1yXTHElz01qs8MwUzaTpOx5DYV5E0QxT","https://api.giphy.com/v1/gifs/search",50,n="".concat("https://api.giphy.com/v1/gifs/search","?q=").concat(encodeURI(t),"&limit=").concat(50,"&api_key=").concat("1yXTHElz01qs8MwUzaTpOx5DYV5E0QxT"),e.next=6,fetch(n);case 6:return a=e.sent,e.next=9,a.json();case 9:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){f(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),r&&Object(u.jsx)("p",{className:"animate__animated animate__flash",children:"Loading..."}),Object(u.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(u.jsx)(j,Object(d.a)({},e),e.id)}))})]})},m=function(){var e=Object(a.useState)(["one punch"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"GifExpertApp"}),Object(u.jsxs)("p",{children:["Buscador de gifs utilizando el"," ",Object(u.jsx)("a",{href:"https://developers.giphy.com/",target:"_blank",children:"API de Giphy"}),"."]}),Object(u.jsx)(o,{setCategories:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("ul",{children:n.map((function(e){return Object(u.jsx)(b,{category:e},e)}))})]})};n(17);r.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4d9a0f5e.chunk.js.map