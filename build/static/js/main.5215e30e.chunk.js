(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{16:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(5),o=n.n(r),s=(n(15),n(16),n(8)),i=n(3),l=n(9),u=n.n(l),j=(n(37),n(38),n(39),n(1));function b(e){var t=e.onSubmit,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],o=a[1];return Object(j.jsx)("header",{className:"Searchbar",children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r),o("")},className:"SearchForm",children:[Object(j.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(j.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(j.jsx)("input",{className:"SearchForm-input",type:"text",name:"request",autoComplete:"off",onChange:function(e){o(e.currentTarget.value)},value:r,autoFocus:!0,placeholder:"Search images and photos"})]})})}n(41);var m=function(e){var t=e.children;return Object(j.jsx)("ul",{className:"ImageGallery",children:t})},h=(n(42),n(10)),d=n.n(h);function f(e){var t=e.images,n=e.openModal;return Object(j.jsx)(c.Fragment,{children:t.map((function(e){var t=e.webformatURL,c=e.largeImageURL,a=e.tags;return Object(j.jsx)("li",{className:"ImageGalleryItem",children:Object(j.jsx)("img",{onClick:function(){return n({largeImageURL:c,tags:a})},src:t,alt:a,className:"ImageGalleryItem-image"})},d()())}))})}n(43);var O=function(e){var t=e.onClick;return Object(j.jsx)("button",{onClick:t,type:"button",className:"Button ",children:"Load more"})};n(44);function g(e){var t=e.children,n=e.onClose,a=document.querySelector("#modal-root");Object(c.useEffect)((function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}}));var o=function(e){"Escape"===e.code&&n(null)};return Object(r.createPortal)(Object(j.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&n(null)},children:Object(j.jsx)("div",{className:"Modal",children:t})}),a)}function p(){var e=Object(c.useState)("forest"),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(1),o=Object(i.a)(r,2),l=o[0],h=o[1],d=Object(c.useState)([]),p=Object(i.a)(d,2),x=p[0],v=p[1],S=Object(c.useState)(!1),y=Object(i.a)(S,2),w=y[0],k=y[1],N=Object(c.useState)(null),C=Object(i.a)(N,2),I=C[0],E=C[1],F=Object(c.useState)(!1),L=Object(i.a)(F,2),T=L[0],q=L[1];Object(c.useEffect)((function(){k(!0),function(e,t){return fetch("".concat("https://pixabay.com/api/?image_type=photo&orientation=horizontal&","q=").concat(t,"&page=").concat(e,"&per_page=").concat(12,"&key=").concat("21935547-b3d05227bb87eef1eed42c097")).then((function(e){if(e.ok)return e.json()}))}(l,n).then(M).catch((function(e){alert(e)})).finally((function(){k(!1),l>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))}),[n,l]);var M=function(e){var t=e.hits;t.length||alert("Try another word"),t.length<12?q(!1):q(!0),v((function(e){return[].concat(Object(s.a)(e),Object(s.a)(t))}))};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{onSubmit:function(e){e.trim()?(v(""),h(1),a(e)):alert("Enter search request")}}),x&&Object(j.jsxs)(c.Fragment,{children:[Object(j.jsx)(m,{children:Object(j.jsx)(f,{images:x,openModal:E})}),T&&Object(j.jsx)(O,{onClick:function(){h((function(e){return e+1}))}})]}),w&&Object(j.jsx)(u.a,{className:"loader",type:"ThreeDots",color:"#3f51b5",height:120,width:120}),I&&Object(j.jsx)(g,{onClose:E,children:Object(j.jsx)("img",{src:I.largeImageURL,alt:I.tags})})]})}o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.5215e30e.chunk.js.map