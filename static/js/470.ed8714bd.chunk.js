"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[470],{3033:function(e,n,t){t.d(n,{u:function(){return O}});var r,a,s,o=t(2791),i=t(4164),l="Modal_backdrop__xTnIT",c="Modal_modal__DJDMv",u="Modal_contentWrapper__c26jw",d="Modal_title__3HkNf",m="Modal_titlePeace__VPEUm",p="Modal_image__PGSjp",f="Modal_description__zKB3H",_="Modal_crossWrapper__34jD1",h="Modal_cross__5k9Me",x="Modal_accessor__E201w",j="Modal_generalInfoWrapper__3GcYf",v="Modal_genInfo__eHy0s",g="Modal_line__tPcoa",N="Modal_addInfoDiv__aJHyi",y="Modal_roundedSpan__Vqjjc",w="Modal_blue__bRO9O",C="Modal_animCross__9+0sg",b="Modal_lastWrapper__t6hdY",I="Modal_rentalConditions__5lW1M",k="Modal_rentalCarButton__Pp4r-",P="Modal_rentalCarText__Nxl-s",E=["title","titleId"];function M(){return M=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},M.apply(this,arguments)}function A(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function L(e,n){var t=e.title,i=e.titleId,l=A(e,E);return o.createElement("svg",M({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:n,"aria-labelledby":i},l),t?o.createElement("title",{id:i},t):null,r||(r=o.createElement("desc",null,"\n\t\t\tCreated with Pixso.\n\t")),a||(a=o.createElement("defs",null,o.createElement("clipPath",{id:"clip57_500"},o.createElement("rect",{id:"x",width:24,height:24,fill:"white",fillOpacity:0})))),s||(s=o.createElement("g",{clipPath:"url(#clip57_500)"},o.createElement("path",{id:"Vector",d:"M18 6L6 18",strokeOpacity:1,strokeWidth:1.8,strokeLinejoin:"round",strokeLinecap:"round"}),o.createElement("path",{id:"Vector",d:"M6 6L18 18",strokeOpacity:1,strokeWidth:1.8,strokeLinejoin:"round",strokeLinecap:"round"}))))}var S=o.forwardRef(L),D=(t.p,t(9914)),W=t(184),B=function(e){var n=e.children,t=e.css,r=(0,D.q_)({opacity:1,from:{opacity:0},config:{duration:300,delay:400}});return(0,W.jsx)(D.q.div,{style:r,className:t||"",children:n})},U=document.getElementById("modal-root");function O(e){var n=e.onClose,t=e.car;(0,o.useEffect)((function(){if(!U)throw new Error("Cannot find modal root element")}),[]);var r=function(){if(t){var e=t?t.rentalConditions.split("\n"):[],n=e[0].split(" ");return[n[n.length-1],e[1],e[2]]}},a=function(){var e;if(t){var n=t.address.split(" ");return e=n[n.length-1],[n[n.length-2].replace(/,/g,""),e]}return[]}(),s=(0,o.useRef)(null);(0,o.useEffect)((function(){var e=function(e){"Escape"===e.code&&n()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[n]);var E=t.make,M=t.model,A=t.year,L=t.type,D=t.id,O=t.fuelConsumption,F=t.engineSize,H=t.functionalities,R=t.accessories,T=function(){if(t)return H.concat(R)};return(0,i.createPortal)(t&&(0,W.jsx)(B,{children:(0,W.jsx)("div",{className:l,ref:s,onClick:function(e){e&&e.target===e.currentTarget&&n()},children:(0,W.jsxs)("div",{className:c,children:[(0,W.jsx)("div",{className:_,children:(0,W.jsx)("button",{type:"button",onClick:n,className:h,children:(0,W.jsx)(S,{className:C})})}),(0,W.jsxs)("div",{className:u,children:[(0,W.jsx)("img",{src:t.img,alt:E,className:p}),(0,W.jsxs)("h1",{className:d,children:[E," ",(0,W.jsx)("span",{className:m,children:M}),", ",A]}),(0,W.jsxs)("div",{className:j,children:[(0,W.jsx)("p",{className:v,children:a[0]}),(0,W.jsx)("span",{className:g}),(0,W.jsx)("p",{className:v,children:a[1]}),(0,W.jsx)("span",{className:g}),(0,W.jsxs)("p",{className:v,children:["Id: ",D]}),(0,W.jsx)("span",{className:g}),(0,W.jsxs)("p",{className:v,children:["Year: ",A]}),(0,W.jsx)("span",{className:g}),(0,W.jsxs)("p",{className:v,children:["Type: ",L]}),(0,W.jsx)("span",{className:g})]}),(0,W.jsxs)("div",{className:j,children:[(0,W.jsxs)("p",{className:v,children:["Fuel Consumption: ",O]}),(0,W.jsx)("span",{className:g}),(0,W.jsxs)("p",{className:v,children:["Engine Size: ",F]})]}),(0,W.jsx)("p",{className:f,children:t.description}),(0,W.jsx)("h4",{className:x,children:"Accessories and functionalities"}),(0,W.jsx)("div",{className:N,children:T().map((function(e,n){return(0,W.jsxs)("span",{children:[(0,W.jsx)("span",{className:v,children:e}),n!==T.length-1&&(0,W.jsx)("span",{className:g})]},n)}))}),(0,W.jsx)("h4",{className:I,children:"Rental Conditions"}),(0,W.jsxs)("div",{className:b,children:[(0,W.jsxs)("span",{className:y,children:["Minimum age:"," ",(0,W.jsx)("span",{className:w,children:r()[0]})," "]}),(0,W.jsx)("span",{className:y,children:r()[1]}),(0,W.jsx)("span",{className:y,children:r()[2]}),(0,W.jsxs)("span",{className:y,children:["Mileage:"," ",(0,W.jsx)("span",{className:w,children:t.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]}),(0,W.jsxs)("span",{className:"".concat(y," ").concat(w),children:["".concat(t.rentalPrice).slice(1),"$"]})]}),(0,W.jsx)("div",{className:k,children:(0,W.jsx)("a",{href:"tel:+380730000000",className:P,children:"Rental Car"})})]})]})})}),U)}},8146:function(e,n,t){t.d(n,{l:function(){return a}});t(2791);var r=t(184),a=function(e){var n=e.render,t=e.of;return(0,r.jsx)(r.Fragment,{children:Array.isArray(t)&&t.map((function(e,t){return n(e,t)}))})}},982:function(e,n,t){t.d(n,{d:function(){return s}});var r=t(9439),a=t(2791),s=function(e){var n=(0,a.useState)(null),t=(0,r.Z)(n,2),s=t[0],o=t[1];return(0,a.useEffect)((function(){var n=null,t=null;a.Children.forEach(e.children,(function(e){void 0===e.props.isTrue?t=e:n||!0!==e.props.isTrue||(n=e)})),o(n||t)}),[e.children]),s};s.When=function(e){var n=e.isTrue,t=e.children;return n?t:null},s.Else=function(e){return e.children}},2470:function(e,n,t){t.r(n),t.d(n,{default:function(){return we}});var r,a=t(9439),s=t(2791),o=t(9434),i=t(3433),l="Filter_label__yak4X",c="Filter_test__IEcKW",u="Filter_test2__Vo3LN",d="Filter_test3__DDHEI",m="Filter_buttonStyle__HikfW",p="Filter_filterForm__hD2lP",f="Filter_leftInput__3y-+o",_="Filter_rightInput__DrYlF",h="Filter_labelLayout__EfGTU",x=JSON.parse('["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"]'),j={makeInput:"MakeDropdown_makeInput__UhhLD",makeDiv:"MakeDropdown_makeDiv__MfVCL",arrowDown:"MakeDropdown_arrowDown__45dqo",optionWrapper:"MakeDropdown_optionWrapper__2WEw6",open:"MakeDropdown_open__iXhkg",option:"MakeDropdown_option__xLL-m",scrollWrapper:"MakeDropdown_scrollWrapper__CKq46"},v={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},g=new Uint8Array(16);function N(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(g)}for(var y=[],w=0;w<256;++w)y.push((w+256).toString(16).slice(1));function C(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return y[e[n+0]]+y[e[n+1]]+y[e[n+2]]+y[e[n+3]]+"-"+y[e[n+4]]+y[e[n+5]]+"-"+y[e[n+6]]+y[e[n+7]]+"-"+y[e[n+8]]+y[e[n+9]]+"-"+y[e[n+10]]+y[e[n+11]]+y[e[n+12]]+y[e[n+13]]+y[e[n+14]]+y[e[n+15]]}var b=function(e,n,t){if(v.randomUUID&&!n&&!e)return v.randomUUID();var r=(e=e||{}).random||(e.rng||N)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,n){t=t||0;for(var a=0;a<16;++a)n[t+a]=r[a];return n}return C(r)},I=t(8146),k=t(184),P=function(e){var n=e.onSelectCar,r=(0,s.useState)(!1),o=(0,a.Z)(r,2),i=o[0],l=o[1],c=(0,s.useState)(""),u=(0,a.Z)(c,2),d=u[0],m=u[1],p=(0,s.useState)([]),f=(0,a.Z)(p,2),_=f[0],h=f[1],v=document.getElementById("makeInput"),g=(0,s.useRef)(null),N=(0,s.useRef)(null),y=function(){var e;i||(null===(e=g.current)||void 0===e||e.focus());l(!i)},w=function(e){N.current&&!N.current.contains(e.target)&&l(!1)};(0,s.useEffect)((function(){return document.addEventListener("mousedown",w),function(){document.removeEventListener("mousedown",w)}}),[]);var C=function(e){var t=e.target.textContent;n(t),v.value=e.target.textContent,m("")};return(0,k.jsxs)("div",{className:j.wrapper,children:[(0,k.jsxs)("div",{className:j.makeDiv,children:[(0,k.jsx)("input",{id:"makeInput",ref:g,onChange:function(e){var t=e.target.value;m(t),n(t);var r=x.filter((function(e){return t.length&&e.toLowerCase().includes(t.toLowerCase())}));h(r)},onClick:y,placeholder:"Enter the text",type:"text",className:j.makeInput}),(0,k.jsx)("button",{type:"button",onClick:y,className:j.arrowDown,children:(0,k.jsx)("img",{src:t(9065),alt:"arrow-down"})})]}),(0,k.jsx)("div",{ref:N,className:"".concat(j.optionWrapper," ").concat(i?j.open:""),children:(0,k.jsx)("div",{className:j.scrollWrapper,children:d?(0,k.jsx)(I.l,{of:_,render:function(e,n){return(0,k.jsx)("button",{className:j.option,onClick:C,children:e},b())}}):(0,k.jsx)(I.l,{of:x,render:function(e,n){return(0,k.jsx)("button",{className:j.option,onClick:C,children:e},b())}})})})]})},E="PriceDropdown_optionWrapper__LuVrm",M="PriceDropdown_open__GX8zm",A="PriceDropdown_backspan__+yzWM",L="PriceDropdown_wrapper__zsoQr",S="PriceDropdown_arrowDown__GK4--",D="PriceDropdown_option__wdEkt",W="PriceDropdown_scrollWrapper__3y20h",B="PriceDropdown_to__E85U+",U=function(e){var n=e.onSelectPrice,r=(0,s.useState)(!1),o=(0,a.Z)(r,2),i=o[0],l=o[1],c=function(e,n,t){for(var r=[],a=e;a<=n;a+=t)r.push(a);return r}(0,200,10),u=(0,s.useRef)(null),d=(0,s.useRef)(null),m=document.getElementById("priceInput"),p=function(e){var n;i||(null===(n=u.current)||void 0===n||n.focus());l(!i)},f=function(e){d.current&&!d.current.contains(e.target)&&l(!1)};(0,s.useEffect)((function(){return document.addEventListener("mousedown",f),function(){document.removeEventListener("mousedown",f)}}),[]);var _=function(e){var t=e.target.textContent;n(t),m.value=e.target.textContent};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)("div",{className:L,children:[(0,k.jsx)("input",{id:"priceInput",ref:u,onClick:p,onChange:function(e){n(e.target.value)},className:"".concat(A)}),(0,k.jsx)("button",{onClick:p,className:S}),(0,k.jsx)("img",{src:t(9065),alt:"arrow-down",className:S}),(0,k.jsx)("span",{className:B,children:"To $"})]}),(0,k.jsx)("div",{className:"".concat(E," ").concat(i?M:""),ref:d,children:(0,k.jsx)("div",{className:W,children:(0,k.jsx)(I.l,{of:c,render:function(e,n){return(0,k.jsx)("button",{type:"button",className:D,onClick:_,children:e},e)}})})})]})};var O,F,H,R=t(1183),T=t(2076),Z=function(e){var n=e.onClick,t=e.onClearClick,r=(0,s.useState)(""),x=(0,a.Z)(r,2),j=x[0],v=x[1],g=(0,s.useState)(""),N=(0,a.Z)(g,2),y=N[0],w=N[1],C=(0,s.useState)([0,0]),b=(0,a.Z)(C,2),I=b[0],E=b[1],M=(0,o.I0)(),A=function(e,n){E((function(t){var r=(0,i.Z)(t);return r[e]=Number(n),r}))};return(0,k.jsxs)("form",{id:"filterForm",onSubmit:function(e){e.preventDefault(),M((0,R.YZ)({make:j,mileage:I,rentalPrice:y}))},className:p,children:[(0,k.jsx)("button",{type:"button",onClick:function(){M((0,R.sx)()),v(""),w(""),E([0,0]),M((0,T.Jo)()),document.getElementById("leftInput").value="",document.getElementById("rightInput").value="",document.getElementById("makeInput").value="",document.getElementById("priceInput").value="",t()},className:m,children:(0,k.jsx)("span",{children:"Clear Filters"})}),(0,k.jsxs)("label",{className:l,children:["Car brand",(0,k.jsx)(P,{onSelectCar:function(e){if(e){var n=(0,i.Z)(e.toLowerCase()).slice(1).join(""),t=e[0].toUpperCase()+n;v(t)}}})]}),(0,k.jsxs)("label",{className:l,children:["Price / 1 hour",(0,k.jsx)(U,{onSelectPrice:function(e){w(e)}})]}),(0,k.jsxs)("div",{className:"".concat(l),children:[(0,k.jsx)("span",{className:"".concat(c),children:"Car mileage / km"}),(0,k.jsxs)("div",{className:"".concat(h),children:[(0,k.jsx)("span",{className:u,children:"From"}),(0,k.jsx)("span",{className:d,children:"To"}),(0,k.jsx)("input",{id:"leftInput",className:f,min:"0",type:"number",onChange:function(e){return A(0,e.target.value)}}),(0,k.jsx)("input",{id:"rightInput",className:_,min:"0",type:"number",onChange:function(e){return A(1,e.target.value)}})]})]}),(0,k.jsx)("button",{type:"submit",className:m,onClick:n,children:"Search"})]})},V="LoadMoreButton_buttonLoadMore__pISKX",z="LoadMoreButton_visuallyHidden__90-Fz",J=function(e){var n=e.text,t=e.onClick,r=e.disabled,a=e.isLoading;return(0,k.jsx)("button",{type:"button",onClick:t,className:a?z:V,disabled:r,children:r?"No more images":n})},Y=t(3033),G=function(e){return e.pagedCatalog.items},K=function(e){return e.pagedCatalog.page},Q=t(3394),q={container:"HomePage_container__uNu-e",image:"HomePage_image__Su6Pd",modelPrice:"HomePage_modelPrice__gh7zS",modelPricePart:"HomePage_modelPricePart__IdWtA",modelFeatures:"HomePage_modelFeatures__qLxL5",buttonLearnMore:"HomePage_buttonLearnMore__aPoh7",layout:"HomePage_layout__mk08q",wrapper:"HomePage_wrapper__fbr7T",noItems:"HomePage_noItems__2NEtu"},X=t(1878),$=t(6218),ee="InventoryItem_image__hQwb+",ne="InventoryItem_modelPrice__NeH14",te="InventoryItem_modelPricePart__NfUCr",re="InventoryItem_modelFeatures__b4ViM",ae="InventoryItem_buttonLearnMore__8tBqo",se="InventoryItem_wrapper__c76vU",oe="InventoryItem_genInfo__VdiUC",ie="InventoryItem_line__1QeBP",le="InventoryItem_wrap__d4Qm9",ce="InventoryItem_star__wo6Uc",ue="InventoryItem_starred__fUC0x",de="InventoryItem_starButton__sbiaN",me=t(6201),pe=["title","titleId"];function fe(){return fe=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},fe.apply(this,arguments)}function _e(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function he(e,n){var t=e.title,r=e.titleId,a=_e(e,pe);return s.createElement("svg",fe({width:17.177307,height:15.173859,viewBox:"0 0 17.1773 15.1739",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:n,"aria-labelledby":r},a),t?s.createElement("title",{id:r},t):null,O||(O=s.createElement("desc",null,"\n\t\t\tCreated with Pixso.\n\t")),F||(F=s.createElement("defs",null)),H||(H=s.createElement("path",{id:"Vector",d:"M13.88 1.06418C13.3794 0.85675 12.8428 0.75 12.301 0.75C11.7591 0.75 11.2225 0.85675 10.7219 1.06418C10.2214 1.27161 9.76654 1.57562 9.38348 1.95886L8.58844 2.75388L7.79346 1.95886C7.01971 1.18509 5.97021 0.750397 4.87598 0.750397C3.78168 0.750397 2.73224 1.18509 1.9585 1.95886C1.18469 2.73264 0.75 3.7821 0.75 4.87637C0.75 5.97064 1.18469 7.02011 1.9585 7.79388L2.75348 8.58887L8.58844 14.4239L14.4235 8.58887L15.2184 7.79388C15.6017 7.4108 15.9057 6.95599 16.1132 6.45538C16.3206 5.9548 16.4273 5.41824 16.4273 4.87637C16.4273 4.3345 16.3206 3.79794 16.1132 3.29736C15.9057 2.79675 15.6017 2.34195 15.2184 1.95886C14.8354 1.57562 14.3806 1.27161 13.88 1.06418Z",strokeOpacity:.8,strokeWidth:1.5,strokeLinejoin:"round"})))}var xe=s.forwardRef(he),je=(t.p,t(4808)),ve=function(e){var n=e.car,t=e.index,r=e.openModal,i=(0,o.I0)(),l=(0,s.useState)(!1),c=(0,a.Z)(l,2),u=c[0],d=c[1],m=(0,o.v9)(je.T);(0,s.useEffect)((function(){d(m.some((function(e){return e.id===n.id})))}),[m,n]);var p=function(){var e;if(n){var t=n.address.split(" ");return e=t[t.length-1],[t[t.length-2].replace(/,/g,""),e]}return[]}();return(0,k.jsxs)("li",{className:se,children:[(0,k.jsxs)("div",{className:le,children:[(0,k.jsx)("button",{type:"button",onClick:function(){i(u?(0,me.fu)(n.id):(0,me.IO)(n)),d(!u)},className:de,children:(0,k.jsx)(xe,{className:" ".concat(u?ue:ce)})}),n.img?(0,k.jsx)("img",{src:n.img,alt:n.make,className:ee,style:{objectFit:"cover"}}):"No image",(0,k.jsxs)("div",{className:ne,children:[(0,k.jsxs)("p",{children:[n.make," ",(0,k.jsx)("span",{className:te,children:n.model}),","," ",n.year]}),(0,k.jsx)("p",{children:n.rentalPrice})]}),(0,k.jsxs)("div",{className:re,children:[(0,k.jsx)("p",{className:oe,children:p[0]}),(0,k.jsx)("span",{className:ie}),(0,k.jsx)("p",{className:oe,children:p[1]}),(0,k.jsx)("span",{className:ie}),(0,k.jsx)("p",{className:oe,children:n.rentalCompany}),(0,k.jsx)("span",{className:ie}),(0,k.jsx)("p",{className:oe,children:n.type}),(0,k.jsx)("span",{className:ie}),(0,k.jsx)("p",{className:oe,children:n.model}),(0,k.jsx)("span",{className:ie}),(0,k.jsx)("p",{className:oe,children:n.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),(0,k.jsx)("span",{className:ie}),(0,k.jsx)("p",{className:oe,children:n.accessories[n.accessories.length-1]})]})]}),(0,k.jsx)("button",{type:"button",className:ae,onClick:function(){return r(t)},children:"Learn more"})]},n.id)},ge=t(2639),Ne=t(7216),ye=t(982),we=function(){var e=(0,o.I0)(),n=(0,s.useState)(!1),t=(0,a.Z)(n,2),r=t[0],i=t[1],l=(0,s.useState)(""),c=(0,a.Z)(l,2),u=c[0],d=c[1],m=(0,s.useState)(!0),p=(0,a.Z)(m,2),f=p[0],_=p[1],h=(0,o.v9)(G),x=(0,o.v9)(K),j=(0,o.v9)(X.dB),v=(0,o.v9)(X.gF),g=function(e){var n=h[e];d(n),i(!0),document.body.classList.add("body-scroll-lock")},N=f?h:j;(0,s.useEffect)((function(){return e((0,T.Jo)()),function(){e((0,T.Jo)())}}),[e]),(0,s.useEffect)((function(){e((0,Q.R)({page:x}))}),[e,x]);return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)("section",{className:q.container,children:[(0,k.jsx)(Z,{onClick:function(){e((0,$.x)()),_(!1)},onClearClick:function(){_(!0),e((0,T.Jo)()),e((0,Q.R)({page:x}))}}),(0,k.jsxs)(ye.d,{children:[(0,k.jsx)(ye.d.When,{isTrue:v,children:(0,k.jsx)(ge.a,{})}),(0,k.jsx)(ye.d.When,{isTrue:!v&&0===N.length,children:(0,k.jsx)(Ne.Z,{className:q.noResults})}),(0,k.jsx)("ul",{className:q.layout,children:(0,k.jsx)(ye.d.When,{isTrue:N.length>0,children:(0,k.jsx)(I.l,{of:N,render:function(e,n){return(0,k.jsx)(ve,{car:e,index:n,openModal:g},e.id)}})})})]}),(0,k.jsx)(ye.d,{children:(0,k.jsx)(ye.d.When,{isTrue:!v&&0!==N.length&&N.length<=32,children:(0,k.jsx)(J,{text:"Load more",onClick:function(){e((0,T.Ws)())}})})}),(0,k.jsx)(ye.d,{children:(0,k.jsx)(ye.d.When,{isTrue:r,children:(0,k.jsx)(Y.u,{onClose:function(){i(!1),document.body.classList.remove("body-scroll-lock")},car:u})})})]})})}},1878:function(e,n,t){t.d(n,{dB:function(){return a},gF:function(){return s}});var r=t(6916),a=(0,r.P1)([function(e){return e.catalog},function(e){return e.filter}],(function(e,n){var t=e.items,r=n.make,a=n.mileage,s=n.rentalPrice,o=a[0],i=a[1];return t.filter((function(e){var n=!0;return r&&e.make!==r&&(n=!1),a&&(o||i)&&(o&&e.mileage<o||i&&e.mileage>i)&&(n=!1),s&&parseInt(e.rentalPrice.replace(/\$/g,""))>s&&(n=!1),n}))})),s=(0,r.P1)([function(e){return e.pagedCatalog.isLoading},function(e){return e.catalog.isLoading}],(function(e,n){return e||n}))},4808:function(e,n,t){t.d(n,{T:function(){return r}});var r=function(e){return e.favorites.items}},9065:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACZSURBVHgB7Y5NDoMgEIUfcSWmSSPWeotegZvUm0hv1h6ht+iicaWwVNSYKMH/neFLJoThzfABjvPjmQ3GbimlwUMp+Z0bXJtDGN2rruJsOhNnfQ5Lhj69EH1wgHCfBlCy/JjL9JvobuSlZPHGEmGUCJvp0KzJ2GY9W7P51TTVxYdm+f8nsJWx6bzZzqUHl/VcWZLqesLhaKkBQi016Sz7IVAAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=470.ed8714bd.chunk.js.map