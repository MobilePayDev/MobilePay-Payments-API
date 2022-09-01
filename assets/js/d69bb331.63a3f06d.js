"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[9582],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),y=r,d=u["".concat(p,".").concat(y)]||u[y]||m[y]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:6},i="Payment Points",l={unversionedId:"payment-points",id:"payment-points",title:"Payment Points",description:"This topic explains what payment points are and how to manage them.",source:"@site/docs/payment-points.md",sourceDirName:".",slug:"/payment-points",permalink:"/MobilePay-Payments-API/docs/payment-points",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Build on Mobile",permalink:"/MobilePay-Payments-API/docs/guides/app-payments/build-on-mobile"},next:{title:"Overview",permalink:"/MobilePay-Payments-API/docs/payments-refunds/overview"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Management of payment points",id:"management-of-payment-points",level:2},{value:"Retrieve a list of payment points",id:"retrieve-a-list-of-payment-points",level:2},{value:"Setting up custom transfer reference",id:"setting-up-custom-transfer-reference",level:2}],c={toc:s};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"payment-points"},"Payment Points"),(0,r.kt)("p",null,"This topic explains what payment points are and how to manage them."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"After signing up to use ",(0,r.kt)("a",{parentName:"p",href:"/docs/payments-refunds/create-payments"},"Payments API"),", merchant needs to create a payment point."),(0,r.kt)("p",null,"Single business can have multiple payment points. Each payment point is a location and it has a MobilePay-assigned ",(0,r.kt)("inlineCode",{parentName:"p"},"PaymentPointId"),". Establishing multiple payment points is optional but useful for reporting and tracking sales over time. Most customer-related transactions must be to a specific payment point in the API call."),(0,r.kt)("h2",{id:"management-of-payment-points"},"Management of payment points"),(0,r.kt)("p",null,"Creating and editing payment points is done in ",(0,r.kt)("a",{parentName:"p",href:"https://portal.mobilepay.dk/payments/paymentpoints"},"MobilePay portal"),". The payment point name and bank account are mandatory fields. If no logo image is provided the default one will be used."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Setup payment points",src:n(55708).Z,width:"600",height:"436"})),(0,r.kt)("h2",{id:"retrieve-a-list-of-payment-points"},"Retrieve a list of payment points"),(0,r.kt)("p",null,"In order to get the details of payment points like ",(0,r.kt)("inlineCode",{parentName:"p"},"PaymentPointId"),", you need to use Payment Points API. The following request retrieves information about all payment points for a merchant account usable with Payments API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Retrieve all payment points"',title:'"Retrieve',all:!0,payment:!0,'points"':!0},"curl https://api.mobilepay.dk/v1/paymentpoints \\\n  -X GET \\\n  -H 'Authorization: Bearer {ACCESS_TOKEN}' \\\n  -H 'Content-Type: application/json'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response JSON example"',title:'"Response',JSON:!0,'example"':!0},'{\n  "pageSize": 100,\n  "nextPageNumber": null,\n  "paymentPoints": [\n    {\n      "paymentPointId": "04e8a246-bc31-425b-928a-10808f8497a0",\n      "paymentPointName": "test",\n      "state": "active"\n    },\n    {\n      "paymentPointId": "68170df8-c6e1-4938-915b-c09abce96ae4",\n      "paymentPointName": "test2",\n      "state": "active"\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"setting-up-custom-transfer-reference"},"Setting up custom transfer reference"),(0,r.kt)("p",null,"If you have any transactions during the day, then you will receive collected money during the night. MobilePay runs a job that transfers all the money to your specified bank account. There is one transfer per payment point. When configuring payment points you can choose ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mobilepay.dk/node/2551"},"default MobilePay references")," or set up custom references that would reflect in your bank account statement. One of the use cases is when there is a need to set up automation to transfer money further, i.e. franchisee. Custom transfer reference consists of 20 characters: 19 - set by you and a check digit is always automatically added at the end of the reference. Allowed characters are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"characters"),(0,r.kt)("th",{parentName:"tr",align:null},"action"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0-9"),(0,r.kt)("td",{parentName:"tr",align:null},"Will not be replaced")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{style:{color:"#5acbff"}},"YY")),(0,r.kt)("td",{parentName:"tr",align:null},"Will be replaced with the current year")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{style:{color:"#5a78ff"}},"MM")),(0,r.kt)("td",{parentName:"tr",align:null},"Will be replaced with the current month")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{style:{color:"#8f5aff"}},"DD")),(0,r.kt)("td",{parentName:"tr",align:null},"Will be replaced with the current day")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{style:{color:"#FF79C6"}},"RRR")),(0,r.kt)("td",{parentName:"tr",align:null},"Will be replaced with the running number (incremented with each transfer and reset each day) ",(0,r.kt)("br",null)," Running number is unique for every payment point")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{style:{color:"#00DA46"}},"X")," (added automatically)"),(0,r.kt)("td",{parentName:"tr",align:null},"Check digit")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'Example: Payment point has custom transfer reference set to "',(0,r.kt)("a",{style:{color:"#FF79C6"}},"RRR"),"5555555555",(0,r.kt)("a",{style:{color:"#5acbff"}},"YY"),(0,r.kt)("a",{style:{color:"#5a78ff"}},"MM"),(0,r.kt)("a",{style:{color:"#8f5aff"}},"DD"),'". Reference in bank statement "',(0,r.kt)("a",{style:{color:"#FF79C6"}},"001"),"5555555555",(0,r.kt)("a",{style:{color:"#5acbff"}},"21"),(0,r.kt)("a",{style:{color:"#5a78ff"}},"10"),(0,r.kt)("a",{style:{color:"#8f5aff"}},"01"),(0,r.kt)("a",{style:{color:"#00DA46"}},"3"),'" indicates that the transfer was the first transfer for this payment point and it was made on 2021-10-01.')))}m.isMDXComponent=!0},55708:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/portal-create-pp-c67072ff4da1f6745061c185ec561ca5.gif"}}]);