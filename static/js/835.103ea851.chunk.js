"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[835],{3033:function(e,s,a){a.d(s,{u:function(){return V}});var n,t,l,r=a(2791),c=a(4164),i="Modal_backdrop__xTnIT",o="Modal_modal__DJDMv",d="Modal_contentWrapper__c26jw",m="Modal_title__3HkNf",p="Modal_titlePeace__VPEUm",u="Modal_image__PGSjp",_="Modal_description__zKB3H",h="Modal_crossWrapper__34jD1",j="Modal_cross__5k9Me",x="Modal_accessor__E201w",f="Modal_generalInfoWrapper__3GcYf",N="Modal_genInfo__eHy0s",v="Modal_line__tPcoa",g="Modal_addInfoDiv__aJHyi",y="Modal_roundedSpan__Vqjjc",M="Modal_blue__bRO9O",b="Modal_animCross__9+0sg",k="Modal_lastWrapper__t6hdY",w="Modal_rentalConditions__5lW1M",C="Modal_rentalCarButton__Pp4r-",E="Modal_rentalCarText__Nxl-s",I=["title","titleId"];function P(){return P=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},P.apply(this,arguments)}function F(e,s){if(null==e)return{};var a,n,t=function(e,s){if(null==e)return{};var a,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],s.indexOf(a)>=0||(t[a]=e[a]);return t}(e,s);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}function O(e,s){var a=e.title,c=e.titleId,i=F(e,I);return r.createElement("svg",P({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:s,"aria-labelledby":c},i),a?r.createElement("title",{id:c},a):null,n||(n=r.createElement("desc",null,"\n\t\t\tCreated with Pixso.\n\t")),t||(t=r.createElement("defs",null,r.createElement("clipPath",{id:"clip57_500"},r.createElement("rect",{id:"x",width:24,height:24,fill:"white",fillOpacity:0})))),l||(l=r.createElement("g",{clipPath:"url(#clip57_500)"},r.createElement("path",{id:"Vector",d:"M18 6L6 18",strokeOpacity:1,strokeWidth:1.8,strokeLinejoin:"round",strokeLinecap:"round"}),r.createElement("path",{id:"Vector",d:"M6 6L18 18",strokeOpacity:1,strokeWidth:1.8,strokeLinejoin:"round",strokeLinecap:"round"}))))}var L=r.forwardRef(O),S=(a.p,a(9914)),B=a(184),D=function(e){var s=e.children,a=e.css,n=(0,S.q_)({opacity:1,from:{opacity:0},config:{duration:300,delay:400}});return(0,B.jsx)(S.q.div,{style:n,className:a||"",children:s})},W=document.getElementById("modal-root");function V(e){var s=e.onClose,a=e.car;(0,r.useEffect)((function(){if(!W)throw new Error("Cannot find modal root element")}),[]);var n=function(){if(a){var e=a?a.rentalConditions.split("\n"):[],s=e[0].split(" ");return[s[s.length-1],e[1],e[2]]}},t=function(){var e;if(a){var s=a.address.split(" ");return e=s[s.length-1],[s[s.length-2].replace(/,/g,""),e]}return[]}(),l=(0,r.useRef)(null);(0,r.useEffect)((function(){var e=function(e){"Escape"===e.code&&s()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[s]);var I=a.make,P=a.model,F=a.year,O=a.type,S=a.id,V=a.fuelConsumption,q=a.engineSize,R=a.functionalities,T=a.accessories,Z=function(){if(a)return R.concat(T)};return(0,c.createPortal)(a&&(0,B.jsx)(D,{children:(0,B.jsx)("div",{className:i,ref:l,onClick:function(e){e&&e.target===e.currentTarget&&s()},children:(0,B.jsxs)("div",{className:o,children:[(0,B.jsx)("div",{className:h,children:(0,B.jsx)("button",{type:"button",onClick:s,className:j,children:(0,B.jsx)(L,{className:b})})}),(0,B.jsxs)("div",{className:d,children:[(0,B.jsx)("img",{src:a.img,alt:I,className:u}),(0,B.jsxs)("h1",{className:m,children:[I," ",(0,B.jsx)("span",{className:p,children:P}),", ",F]}),(0,B.jsxs)("div",{className:f,children:[(0,B.jsx)("p",{className:N,children:t[0]}),(0,B.jsx)("span",{className:v}),(0,B.jsx)("p",{className:N,children:t[1]}),(0,B.jsx)("span",{className:v}),(0,B.jsxs)("p",{className:N,children:["Id: ",S]}),(0,B.jsx)("span",{className:v}),(0,B.jsxs)("p",{className:N,children:["Year: ",F]}),(0,B.jsx)("span",{className:v}),(0,B.jsxs)("p",{className:N,children:["Type: ",O]}),(0,B.jsx)("span",{className:v})]}),(0,B.jsxs)("div",{className:f,children:[(0,B.jsxs)("p",{className:N,children:["Fuel Consumption: ",V]}),(0,B.jsx)("span",{className:v}),(0,B.jsxs)("p",{className:N,children:["Engine Size: ",q]})]}),(0,B.jsx)("p",{className:_,children:a.description}),(0,B.jsx)("h4",{className:x,children:"Accessories and functionalities"}),(0,B.jsx)("div",{className:g,children:Z().map((function(e,s){return(0,B.jsxs)("span",{children:[(0,B.jsx)("span",{className:N,children:e}),s!==Z.length-1&&(0,B.jsx)("span",{className:v})]},s)}))}),(0,B.jsx)("h4",{className:w,children:"Rental Conditions"}),(0,B.jsxs)("div",{className:k,children:[(0,B.jsxs)("span",{className:y,children:["Minimum age:"," ",(0,B.jsx)("span",{className:M,children:n()[0]})," "]}),(0,B.jsx)("span",{className:y,children:n()[1]}),(0,B.jsx)("span",{className:y,children:n()[2]}),(0,B.jsxs)("span",{className:y,children:["Mileage:"," ",(0,B.jsx)("span",{className:M,children:a.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]}),(0,B.jsxs)("span",{className:"".concat(y," ").concat(M),children:["".concat(a.rentalPrice).slice(1),"$"]})]}),(0,B.jsx)("div",{className:C,children:(0,B.jsx)("a",{href:"tel:+380730000000",className:E,children:"Rental Car"})})]})]})})}),W)}},8835:function(e,s,a){a.r(s),a.d(s,{default:function(){return y}});var n=a(9439),t=a(2791),l=a(9434),r=a(6201),c="FavoriteItem_image__5vJpg",i="FavoriteItem_modelPrice__uAsqZ",o="FavoriteItem_modelPricePart__is+Dn",d="FavoriteItem_modelFeatures__UzVND",m="FavoriteItem_buttonLearnMore__lbm6B",p="FavoriteItem_wrapper__bsZq3",u="FavoriteItem_genInfo__S60sy",_="FavoriteItem_line__9GdZX",h=a(184),j=function(e){var s=e.car,a=e.index,n=e.openModal,t=e.id,j=(0,l.I0)();var x=function(){var e;if(s){var a=s.address.split(" ");return e=a[a.length-1],[a[a.length-2].replace(/,/g,""),e]}return[]}();return(0,h.jsxs)("li",{className:p,children:[(0,h.jsxs)("div",{children:[s.img?(0,h.jsx)("img",{src:s.img,alt:s.make,className:c,style:{objectFit:"cover"}}):"No image",(0,h.jsxs)("div",{className:i,children:[(0,h.jsxs)("p",{children:[s.make," ",(0,h.jsx)("span",{className:o,children:s.model}),","," ",s.year]}),(0,h.jsx)("p",{children:s.rentalPrice})]}),(0,h.jsxs)("div",{className:d,children:[(0,h.jsx)("p",{className:u,children:x[0]}),(0,h.jsx)("span",{className:_}),(0,h.jsx)("p",{className:u,children:x[1]}),(0,h.jsx)("span",{className:_}),(0,h.jsx)("p",{className:u,children:s.rentalCompany}),(0,h.jsx)("span",{className:_}),(0,h.jsx)("p",{className:u,children:s.type}),(0,h.jsx)("span",{className:_}),(0,h.jsx)("p",{className:u,children:s.model}),(0,h.jsx)("span",{className:_}),(0,h.jsx)("p",{className:u,children:s.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),(0,h.jsx)("span",{className:_}),(0,h.jsx)("p",{className:u,children:s.accessories[s.accessories.length-1]})]})]}),(0,h.jsx)("button",{type:"button",className:m,onClick:function(){return n(a)},children:"Learn More"}),(0,h.jsx)("button",{type:"button",className:m,onClick:function(){return j((0,r.fu)(t))},children:"Delete"})]},s.id)},x=a(3033),f=function(e){return e.favorites.items},N="FavoritePage_container__uiEWf",v="FavoritePage_buttonLearnMore__Kc-B4",g="FavoritePage_layout__8Vu1M",y=function(){var e=(0,l.I0)(),s=(0,t.useState)(!1),a=(0,n.Z)(s,2),c=a[0],i=a[1],o=(0,t.useState)(""),d=(0,n.Z)(o,2),m=d[0],p=d[1],u=(0,l.v9)(f),_=function(e){var s=u[e];p(s),i(!0),document.body.classList.add("body-scroll-lock")};return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("section",{className:N,children:[(0,h.jsx)("button",{type:"button",className:v,onClick:function(){e((0,r._2)())},children:"Delete All Favorites"}),(0,h.jsx)("ul",{className:g,children:u.length>0&&u.map((function(e,s){return(0,h.jsx)(j,{car:e,index:s,openModal:_,id:e.id},e.id)}))}),c&&(0,h.jsx)(x.u,{onClose:function(){i(!1),document.body.classList.remove("body-scroll-lock")},car:m})]})})}}}]);
//# sourceMappingURL=835.103ea851.chunk.js.map