"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[2594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),y=a,f=d["".concat(l,".").concat(y)]||d[y]||m[y]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:3},i="Payment Flow Error Handling",s={unversionedId:"pos/payment-flows/payment-flow-error-handling",id:"pos/payment-flows/payment-flow-error-handling",title:"Payment Flow Error Handling",description:"Of all the ways a payment flow can fail, there are some error scenarios related to initiating payment flows that the client needs to focus on. The following sections describes how to handle payment-in-progress errors and how to handle payments hanging in the Reserved state.",source:"@site/docs/pos/payment-flows/payment-flow-error-handling.md",sourceDirName:"pos/payment-flows",slug:"/pos/payment-flows/payment-flow-error-handling",permalink:"/MobilePay-Payments-API/docs/pos/payment-flows/payment-flow-error-handling",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Prepared Payment Flow",permalink:"/MobilePay-Payments-API/docs/pos/payment-flows/prepared-payment-flow"},next:{title:"Refunds",permalink:"/MobilePay-Payments-API/docs/pos/payment-flows/refunds"}},l={},p=[{value:"Payment in progress error handling",id:"payment-in-progress-error-handling",level:2},{value:"Hanging payments in reserved state",id:"hanging-payments-in-reserved-state",level:2}],c={toc:p};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"payment-flow-error-handling"},"Payment Flow Error Handling"),(0,a.kt)("p",null,"Of all the ways a payment flow can fail, there are some error scenarios related to initiating payment flows that the client needs to focus on. The following sections describes how to handle payment-in-progress errors and how to handle payments hanging in the ",(0,a.kt)("em",{parentName:"p"},"Reserved")," state."),(0,a.kt)("h2",{id:"payment-in-progress-error-handling"},"Payment in progress error handling"),(0,a.kt)("p",null,"In the case of an unexpected restart of the client where the payment flow cannot be continued it might be necessary to cancel the active payment since there can be only one active payment on a PoS. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"paymentId")," of the active payment is lost it can be retrieved by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /v10/payments")," using the ",(0,a.kt)("inlineCode",{parentName:"p"},"posId")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"orderId"),". When the ",(0,a.kt)("inlineCode",{parentName:"p"},"paymentId")," is retrieved the payment can be cancelled and the PoS is now ready for a new payment flow. A sequence diagram showing how to handle a payment-in-progress error is shown below."),(0,a.kt)("img",{src:n(3846).Z,alt:"Initiate payment error",width:"650"}),(0,a.kt)("h2",{id:"hanging-payments-in-reserved-state"},"Hanging payments in reserved state"),(0,a.kt)("p",null,"The client is responsible for persisting if a reserved payment should be cancelled or captured. In case the client gets a timeout (or other errors resulting in failed calls) trying to either call capture or cancel on a payment, it is crucial that they persist whether the payment should be captured or cancelled so they can try again later."),(0,a.kt)("p",null,"It is required of the client to implement a periodically scheduled job of running through all their payments left in ",(0,a.kt)("em",{parentName:"p"},"Reserved")," state, and try to either cancel or capture it. A sequence diagram of this flow is shown below. It is the responsibility of the client to keep track of the payments left in ",(0,a.kt)("em",{parentName:"p"},"Reserved")," state."),(0,a.kt)("img",{src:n(98890).Z,alt:"Payment capture cancel",width:"650"}))}m.isMDXComponent=!0},98890:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pos-capture_cancel_hanging_reservations-a2f9440de60772c383c4c70bb60ff68f.png"},3846:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pos-initiate_payment_error_active_payment-0c9b3f6ef7576c54a70664b4e4af0cc3.png"}}]);