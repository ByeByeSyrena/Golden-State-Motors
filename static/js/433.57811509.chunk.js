"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[433],{3033:function(e,n,t){t.d(n,{u:function(){return H}});var a,r,s,l=t(2791),i=t(4164),c="Modal_backdrop__xTnIT",o="Modal_modal__DJDMv",d="Modal_contentWrapper__c26jw",u="Modal_title__3HkNf",m="Modal_titlePeace__VPEUm",p="Modal_image__PGSjp",h="Modal_description__zKB3H",_="Modal_crossWrapper__34jD1",f="Modal_cross__5k9Me",j="Modal_accessor__E201w",x="Modal_generalInfoWrapper__3GcYf",g="Modal_genInfo__eHy0s",v="Modal_line__tPcoa",N="Modal_addInfoDiv__aJHyi",k="Modal_roundedSpan__Vqjjc",y="Modal_blue__bRO9O",b="Modal_animCross__9+0sg",w="Modal_lastWrapper__t6hdY",M="Modal_rentalConditions__5lW1M",E="Modal_rentalCarButton__Pp4r-",P="Modal_rentalCarText__Nxl-s",I=["title","titleId"];function O(){return O=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},O.apply(this,arguments)}function C(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function L(e,n){var t=e.title,i=e.titleId,c=C(e,I);return l.createElement("svg",O({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:n,"aria-labelledby":i},c),t?l.createElement("title",{id:i},t):null,a||(a=l.createElement("desc",null,"\n\t\t\tCreated with Pixso.\n\t")),r||(r=l.createElement("defs",null,l.createElement("clipPath",{id:"clip57_500"},l.createElement("rect",{id:"x",width:24,height:24,fill:"white",fillOpacity:0})))),s||(s=l.createElement("g",{clipPath:"url(#clip57_500)"},l.createElement("path",{id:"Vector",d:"M18 6L6 18",strokeOpacity:1,strokeWidth:1.8,strokeLinejoin:"round",strokeLinecap:"round"}),l.createElement("path",{id:"Vector",d:"M6 6L18 18",strokeOpacity:1,strokeWidth:1.8,strokeLinejoin:"round",strokeLinecap:"round"}))))}var F=l.forwardRef(L),S=(t.p,t(9914)),W=t(184),V=function(e){var n=e.children,t=e.css,a=(0,S.q_)({opacity:1,from:{opacity:0},config:{duration:300,delay:400}});return(0,W.jsx)(S.q.div,{style:a,className:t||"",children:n})},B=document.getElementById("modal-root");function H(e){var n=e.onClose,t=e.car;(0,l.useEffect)((function(){if(!B)throw new Error("Cannot find modal root element")}),[]);var a=function(){if(t){var e=t?t.rentalConditions.split("\n"):[],n=e[0].split(" ");return[n[n.length-1],e[1],e[2]]}},r=function(){var e;if(t){var n=t.address.split(" ");return e=n[n.length-1],[n[n.length-2].replace(/,/g,""),e]}return[]}(),s=(0,l.useRef)(null);(0,l.useEffect)((function(){var e=function(e){"Escape"===e.code&&n()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[n]);var I=t.make,O=t.model,C=t.year,L=t.type,S=t.id,H=t.fuelConsumption,Z=t.engineSize,D=t.functionalities,R=t.accessories,T=function(){if(t)return D.concat(R)};return(0,i.createPortal)(t&&(0,W.jsx)(V,{children:(0,W.jsx)("div",{className:c,ref:s,onClick:function(e){e&&e.target===e.currentTarget&&n()},children:(0,W.jsxs)("div",{className:o,children:[(0,W.jsx)("div",{className:_,children:(0,W.jsx)("button",{type:"button",onClick:n,className:f,children:(0,W.jsx)(F,{className:b})})}),(0,W.jsxs)("div",{className:d,children:[(0,W.jsx)("img",{src:t.img,alt:I,className:p}),(0,W.jsxs)("h1",{className:u,children:[I," ",(0,W.jsx)("span",{className:m,children:O}),", ",C]}),(0,W.jsxs)("div",{className:x,children:[(0,W.jsx)("p",{className:g,children:r[0]}),(0,W.jsx)("span",{className:v}),(0,W.jsx)("p",{className:g,children:r[1]}),(0,W.jsx)("span",{className:v}),(0,W.jsxs)("p",{className:g,children:["Id: ",S]}),(0,W.jsx)("span",{className:v}),(0,W.jsxs)("p",{className:g,children:["Year: ",C]}),(0,W.jsx)("span",{className:v}),(0,W.jsxs)("p",{className:g,children:["Type: ",L]}),(0,W.jsx)("span",{className:v})]}),(0,W.jsxs)("div",{className:x,children:[(0,W.jsxs)("p",{className:g,children:["Fuel Consumption: ",H]}),(0,W.jsx)("span",{className:v}),(0,W.jsxs)("p",{className:g,children:["Engine Size: ",Z]})]}),(0,W.jsx)("p",{className:h,children:t.description}),(0,W.jsx)("h4",{className:j,children:"Accessories and functionalities"}),(0,W.jsx)("div",{className:N,children:T().map((function(e,n){return(0,W.jsxs)("span",{children:[(0,W.jsx)("span",{className:g,children:e}),n!==T.length-1&&(0,W.jsx)("span",{className:v})]},n)}))}),(0,W.jsx)("h4",{className:M,children:"Rental Conditions"}),(0,W.jsxs)("div",{className:w,children:[(0,W.jsxs)("span",{className:k,children:["Minimum age:"," ",(0,W.jsx)("span",{className:y,children:a()[0]})," "]}),(0,W.jsx)("span",{className:k,children:a()[1]}),(0,W.jsx)("span",{className:k,children:a()[2]}),(0,W.jsxs)("span",{className:k,children:["Mileage:"," ",(0,W.jsx)("span",{className:y,children:t.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]}),(0,W.jsxs)("span",{className:"".concat(k," ").concat(y),children:["".concat(t.rentalPrice).slice(1),"$"]})]}),(0,W.jsx)("div",{className:E,children:(0,W.jsx)("a",{href:"tel:+380730000000",className:P,children:"Rental Car"})})]})]})})}),B)}},8875:function(e,n,t){t.r(n),t.d(n,{default:function(){return H}});var a,r,s,l,i,c=t(9439),o=t(2791),d=t(9434),u=t(6201),m="FavoriteItem_image__5vJpg",p="FavoriteItem_modelPrice__uAsqZ",h="FavoriteItem_modelPricePart__is+Dn",_="FavoriteItem_modelFeatures__UzVND",f="FavoriteItem_buttonLearnMore__lbm6B",j="FavoriteItem_wrapper__bsZq3",x="FavoriteItem_genInfo__S60sy",g="FavoriteItem_line__9GdZX",v="FavoriteItem_trash__E+RzG",N="FavoriteItem_trashButton__vGyrM",k=["title","titleId"];function y(){return y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},y.apply(this,arguments)}function b(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function w(e,n){var t=e.title,c=e.titleId,d=b(e,k);return o.createElement("svg",y({width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":c},d),t?o.createElement("title",{id:c},t):null,a||(a=o.createElement("path",{d:"M10 11V17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),r||(r=o.createElement("path",{d:"M14 11V17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),s||(s=o.createElement("path",{d:"M4 7H20",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),l||(l=o.createElement("path",{d:"M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),i||(i=o.createElement("path",{d:"M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var M=o.forwardRef(w),E=(t.p,t(184)),P=function(e){var n=e.car,t=e.index,a=e.openModal,r=e.id,s=(0,d.I0)();var l=function(){var e;if(n){var t=n.address.split(" ");return e=t[t.length-1],[t[t.length-2].replace(/,/g,""),e]}return[]}();return(0,E.jsxs)("li",{className:j,children:[(0,E.jsx)("button",{type:"button",className:N,onClick:function(){return s((0,u.fu)(r))},children:(0,E.jsx)(M,{className:v})}),(0,E.jsxs)("div",{children:[n.img?(0,E.jsx)("img",{src:n.img,alt:n.make,className:m,style:{objectFit:"cover"}}):"No image",(0,E.jsxs)("div",{className:p,children:[(0,E.jsxs)("p",{children:[n.make," ",(0,E.jsx)("span",{className:h,children:n.model}),","," ",n.year]}),(0,E.jsx)("p",{children:n.rentalPrice})]}),(0,E.jsxs)("div",{className:_,children:[(0,E.jsx)("p",{className:x,children:l[0]}),(0,E.jsx)("span",{className:g}),(0,E.jsx)("p",{className:x,children:l[1]}),(0,E.jsx)("span",{className:g}),(0,E.jsx)("p",{className:x,children:n.rentalCompany}),(0,E.jsx)("span",{className:g}),(0,E.jsx)("p",{className:x,children:n.type}),(0,E.jsx)("span",{className:g}),(0,E.jsx)("p",{className:x,children:n.model}),(0,E.jsx)("span",{className:g}),(0,E.jsx)("p",{className:x,children:n.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),(0,E.jsx)("span",{className:g}),(0,E.jsx)("p",{className:x,children:n.accessories[n.accessories.length-1]})]})]}),(0,E.jsx)("button",{type:"button",className:f,onClick:function(){return a(t)},children:"Learn More"})]},n.id)},I=t(3033),O=t(4808),C="FavoritePage_container__uiEWf",L="FavoritePage_buttonLearnMore__Kc-B4",F="FavoritePage_layout__8Vu1M",S="FavoritePage_noItems__fZzkg",W="FavoritePage_imgWrapper__ikNPc",V=t(1878),B=t(2639),H=function(){var e=(0,d.I0)(),n=(0,o.useState)(!1),a=(0,c.Z)(n,2),r=a[0],s=a[1],l=(0,o.useState)(""),i=(0,c.Z)(l,2),m=i[0],p=i[1],h=(0,d.v9)(O.T),_=(0,d.v9)(V.gF),f=function(e){var n=h[e];p(n),s(!0),document.body.classList.add("body-scroll-lock")};return(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)("section",{className:C,children:[0===h.length&&(0,E.jsx)("div",{className:W,children:(0,E.jsx)("img",{className:S,src:t(1333),alt:"No items"})}),h.length>0&&(0,E.jsx)("button",{type:"button",className:L,onClick:function(){e((0,u._2)())},children:"Delete All Favorites"}),_&&(0,E.jsx)(B.a,{}),(0,E.jsx)("ul",{className:F,children:h.length>0&&h.map((function(e,n){return(0,E.jsx)(P,{car:e,index:n,openModal:f,id:e.id},e.id)}))}),r&&(0,E.jsx)(I.u,{onClose:function(){s(!1),document.body.classList.remove("body-scroll-lock")},car:m})]})})}},1878:function(e,n,t){t.d(n,{dB:function(){return r},gF:function(){return s}});var a=t(6916),r=(0,a.P1)([function(e){return e.catalog},function(e){return e.filter}],(function(e,n){var t=e.items,a=n.make,r=n.mileage,s=n.rentalPrice,l=r[0],i=r[1];return t.filter((function(e){var n=!0;return a&&e.make!==a&&(n=!1),r&&(l||i)&&(l&&e.mileage<l||i&&e.mileage>i)&&(n=!1),s&&parseInt(e.rentalPrice.replace(/\$/g,""))>s&&(n=!1),n}))})),s=(0,a.P1)([function(e){return e.pagedCatalog.isLoading},function(e){return e.catalog.isLoading}],(function(e,n){return e||n}))},4808:function(e,n,t){t.d(n,{T:function(){return a}});var a=function(e){return e.favorites.items}},1333:function(e,n,t){e.exports=t.p+"static/media/Screenshot_4.a1ff606dce9eaa57ea8c.png"}}]);
//# sourceMappingURL=433.57811509.chunk.js.map