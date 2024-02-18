"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[835],{5837:function(e,s,a){a.d(s,{u:function(){return D}});var n,t,l,r,c=a(2791),i=a(4164),o="Modal_backdrop__xTnIT",d="Modal_modal__DJDMv",m="Modal_contentWrapper__c26jw",p="Modal_title__3HkNf",u="Modal_titlePeace__VPEUm",_="Modal_image__PGSjp",h="Modal_description__zKB3H",j="Modal_crossWrapper__34jD1",x="Modal_cross__5k9Me",f="Modal_accessor__E201w",N="Modal_generalInfoWrapper__3GcYf",v="Modal_genInfo__eHy0s",g="Modal_line__tPcoa",y="Modal_addInfoDiv__aJHyi",k="Modal_roundedSpan__Vqjjc",b="Modal_blue__bRO9O",w="Modal_lastWrapper__t6hdY",M="Modal_rentalConditions__5lW1M",E="Modal_rentalCarButton__Pp4r-",F="Modal_rentalCarText__Nxl-s",C=["title","titleId"];function I(){return I=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},I.apply(this,arguments)}function P(e,s){if(null==e)return{};var a,n,t=function(e,s){if(null==e)return{};var a,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],s.indexOf(a)>=0||(t[a]=e[a]);return t}(e,s);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}function O(e,s){var a=e.title,i=e.titleId,o=P(e,C);return c.createElement("svg",I({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:s,"aria-labelledby":i},o),a?c.createElement("title",{id:i},a):null,n||(n=c.createElement("desc",null,"\n\t\t\tCreated with Pixso.\n\t")),t||(t=c.createElement("defs",null,c.createElement("clipPath",{id:"clip57_500"},c.createElement("rect",{id:"x",width:24,height:24,fill:"white",fillOpacity:0})))),l||(l=c.createElement("rect",{id:"x",width:24,height:24,fill:"#FFFFFF",fillOpacity:0})),r||(r=c.createElement("g",{clipPath:"url(#clip57_500)"},c.createElement("path",{id:"Vector",d:"M18 6L6 18",stroke:"#121417",strokeOpacity:1,strokeWidth:1.8,strokeLinejoin:"round",strokeLinecap:"round"}),c.createElement("path",{id:"Vector",d:"M6 6L18 18",stroke:"#121417",strokeOpacity:1,strokeWidth:1.8,strokeLinejoin:"round",strokeLinecap:"round"}))))}var L=c.forwardRef(O),S=(a.p,a(184)),B=document.getElementById("modal-root");function D(e){var s=e.onClose,a=e.car;(0,c.useEffect)((function(){if(!B)throw new Error("Cannot find modal root element")}),[]);var n=function(){if(a){var e=a?a.rentalConditions.split("\n"):[],s=e[0].split(" ");return[s[s.length-1],e[1],e[2]]}},t=function(){var e;if(a){var s=a.address.split(" ");return e=s[s.length-1],[s[s.length-2].replace(/,/g,""),e]}return[]}(),l=(0,c.useRef)(null);(0,c.useEffect)((function(){var e=function(e){"Escape"===e.code&&s()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[s]);var r=a.make,C=a.model,I=a.year,P=a.type,O=a.id,D=a.fuelConsumption,W=a.engineSize,V=a.functionalities,R=a.accessories,T=function(){if(a)return V.concat(R)};return(0,i.createPortal)(a&&(0,S.jsx)("div",{className:o,ref:l,onClick:function(e){e&&e.target===e.currentTarget&&s()},children:(0,S.jsxs)("div",{className:d,children:[(0,S.jsx)("div",{className:j,children:(0,S.jsx)("button",{type:"button",onClick:s,className:x,children:(0,S.jsx)(L,{})})}),(0,S.jsxs)("div",{className:m,children:[(0,S.jsx)("img",{src:a.img,alt:r,className:_}),(0,S.jsxs)("h1",{className:p,children:[r," ",(0,S.jsx)("span",{className:u,children:C}),", ",I]}),(0,S.jsxs)("div",{className:N,children:[(0,S.jsx)("p",{className:v,children:t[0]}),(0,S.jsx)("span",{className:g}),(0,S.jsx)("p",{className:v,children:t[1]}),(0,S.jsx)("span",{className:g}),(0,S.jsxs)("p",{className:v,children:["Id: ",O]}),(0,S.jsx)("span",{className:g}),(0,S.jsxs)("p",{className:v,children:["Year: ",I]}),(0,S.jsx)("span",{className:g}),(0,S.jsxs)("p",{className:v,children:["Type: ",P]}),(0,S.jsx)("span",{className:g})]}),(0,S.jsxs)("div",{className:N,children:[(0,S.jsxs)("p",{className:v,children:["Fuel Consumption: ",D]}),(0,S.jsx)("span",{className:g}),(0,S.jsxs)("p",{className:v,children:["Engine Size: ",W]})]}),(0,S.jsx)("p",{className:h,children:a.description}),(0,S.jsx)("h4",{className:f,children:"Accessories and functionalities"}),(0,S.jsx)("div",{className:y,children:T().map((function(e,s){return(0,S.jsxs)("span",{children:[(0,S.jsx)("span",{className:v,children:e}),s!==T.length-1&&(0,S.jsx)("span",{className:g})]},s)}))}),(0,S.jsx)("h4",{className:M,children:"Rental Conditions"}),(0,S.jsxs)("div",{className:w,children:[(0,S.jsxs)("span",{className:k,children:["Minimum age:"," ",(0,S.jsx)("span",{className:b,children:n()[0]})," "]}),(0,S.jsx)("span",{className:k,children:n()[1]}),(0,S.jsx)("span",{className:k,children:n()[2]}),(0,S.jsxs)("span",{className:k,children:["Mileage:"," ",(0,S.jsx)("span",{className:b,children:a.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]}),(0,S.jsxs)("span",{className:"".concat(k," ").concat(b),children:["".concat(a.rentalPrice).slice(1),"$"]})]}),(0,S.jsx)("div",{className:E,children:(0,S.jsx)("a",{href:"tel:+380730000000",className:F,children:"Rental Car"})})]})]})}),B)}},8835:function(e,s,a){a.r(s),a.d(s,{default:function(){return y}});var n=a(9439),t=a(2791),l=a(9434),r=a(6201),c="FavoriteItem_image__5vJpg",i="FavoriteItem_modelPrice__uAsqZ",o="FavoriteItem_modelPricePart__is+Dn",d="FavoriteItem_modelFeatures__UzVND",m="FavoriteItem_buttonLearnMore__lbm6B",p="FavoriteItem_wrapper__bsZq3",u="FavoriteItem_genInfo__S60sy",_="FavoriteItem_line__9GdZX",h=a(184),j=function(e){var s=e.car,a=e.index,n=e.openModal,t=e.id,j=(0,l.I0)();var x=function(){var e;if(s){var a=s.address.split(" ");return e=a[a.length-1],[a[a.length-2].replace(/,/g,""),e]}return[]}();return(0,h.jsxs)("li",{className:p,children:[(0,h.jsxs)("div",{children:[s.img?(0,h.jsx)("img",{src:s.img,alt:s.make,className:c,style:{objectFit:"cover"}}):"No image",(0,h.jsxs)("div",{className:i,children:[(0,h.jsxs)("p",{children:[s.make," ",(0,h.jsx)("span",{className:o,children:s.model}),","," ",s.year]}),(0,h.jsx)("p",{children:s.rentalPrice})]}),(0,h.jsxs)("div",{className:d,children:[(0,h.jsx)("p",{className:u,children:x[0]}),(0,h.jsx)("span",{className:_}),(0,h.jsx)("p",{className:u,children:x[1]}),(0,h.jsx)("span",{className:_}),(0,h.jsx)("p",{className:u,children:s.rentalCompany}),(0,h.jsx)("span",{className:_}),(0,h.jsx)("p",{className:u,children:s.type}),(0,h.jsx)("span",{className:_}),(0,h.jsx)("p",{className:u,children:s.model}),(0,h.jsx)("span",{className:_}),(0,h.jsx)("p",{className:u,children:s.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),(0,h.jsx)("span",{className:_}),(0,h.jsx)("p",{className:u,children:s.accessories[s.accessories.length-1]})]})]}),(0,h.jsx)("button",{type:"button",className:m,onClick:function(){return n(a)},children:"Learn More"}),(0,h.jsx)("button",{type:"button",className:m,onClick:function(){return j((0,r.fu)(t))},children:"Delete"})]},s.id)},x=a(5837),f=function(e){return e.favorites.items},N="FavoritePage_container__uiEWf",v="FavoritePage_buttonLearnMore__Kc-B4",g="FavoritePage_layout__8Vu1M",y=function(){var e=(0,l.I0)(),s=(0,t.useState)(!1),a=(0,n.Z)(s,2),c=a[0],i=a[1],o=(0,t.useState)(""),d=(0,n.Z)(o,2),m=d[0],p=d[1],u=(0,l.v9)(f),_=function(e){var s=u[e];p(s),i(!0),document.body.classList.add("body-scroll-lock")};return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("section",{className:N,children:[(0,h.jsx)("button",{type:"button",className:v,onClick:function(){e((0,r._2)())},children:"Delete All Favorites"}),(0,h.jsx)("ul",{className:g,children:u.length>0&&u.map((function(e,s){return(0,h.jsx)(j,{car:e,index:s,openModal:_,id:e.id},e.id)}))}),c&&(0,h.jsx)(x.u,{onClose:function(){i(!1),document.body.classList.remove("body-scroll-lock")},car:m})]})})}}}]);
//# sourceMappingURL=835.4a2efeaf.chunk.js.map