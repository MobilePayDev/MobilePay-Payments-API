"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[6219],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),m=o,u=h["".concat(l,".").concat(m)]||h[m]||p[m]||i;return n?a.createElement(u,r(r({ref:t},d),{},{components:n})):a.createElement(u,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},71428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={sidebar_position:5},r="Point-of-Sale Management",s={unversionedId:"pos/pos-management",id:"pos/pos-management",title:"Point-of-Sale Management",description:"The Point-of-Sale (PoS) represents the contact point between a customer wanting to pay with MobilePay and the merchant.",source:"@site/docs/pos/pos-management.md",sourceDirName:"pos",slug:"/pos/pos-management",permalink:"/MobilePay-Payments-API/docs/pos/pos-management",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Partial Capture",permalink:"/MobilePay-Payments-API/docs/pos/payment-flows/partial-capture"},next:{title:"Notification Service",permalink:"/MobilePay-Payments-API/docs/pos/notification-service"}},l={},c=[{value:"Onboarding",id:"onboarding",level:2},{value:"No existing solution",id:"no-existing-solution",level:3},{value:"Existing solution",id:"existing-solution",level:3},{value:"PoS Creation",id:"pos-creation",level:2},{value:"Beacons",id:"beacons",level:3},{value:"Client that only supports dynamic QR codes",id:"client-that-only-supports-dynamic-qr-codes",level:4},{value:"Client that only supports static QR codes",id:"client-that-only-supports-static-qr-codes",level:4},{value:"Client that supports physical devices (terminals, MobilePay white boxes)",id:"client-that-supports-physical-devices-terminals-mobilepay-white-boxes",level:4},{value:"Preventing checkin before payment",id:"preventing-checkin-before-payment",level:3},{value:"Callback",id:"callback",level:3},{value:"Naming",id:"naming",level:3},{value:"PoS Updating and Deletion",id:"pos-updating-and-deletion",level:2},{value:"Keeping in sync with MobilePay",id:"keeping-in-sync-with-mobilepay",level:2},{value:"When PoS reboots",id:"when-pos-reboots",level:3},{value:"Master Data",id:"master-data",level:2}],d={toc:c};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"point-of-sale-management"},"Point-of-Sale Management"),(0,o.kt)("p",null,"The Point-of-Sale (PoS) represents the contact point between a customer wanting to pay with MobilePay and the merchant.\nTo initiate a MobilePay payment it is necessary to first create a PoS."),(0,o.kt)("h2",{id:"onboarding"},"Onboarding"),(0,o.kt)("p",null,"Each PoS belongs to a ",(0,o.kt)("em",{parentName:"p"},"Store")," which belongs to a ",(0,o.kt)("em",{parentName:"p"},"Brand"),". A brand can be thought of as a combination of a name and a logo. An example of a brand could be 7-Eleven in Denmark or K-Market in Finland. Each brand consists of one or more stores. A store is the representation of a merchant's shop. It contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"storeId")," as well as the name and the address of the shop. When a MobilePay customer checks in on a PoS they will see the brand logo and name as well as the shop name in the app, which helps the customer confirm that they have in fact checked in where they intended.\nWhen an integrator needs to onboard a PoS they need the ",(0,o.kt)("inlineCode",{parentName:"p"},"storeId")," to create all the PoSes on that store. The ",(0,o.kt)("inlineCode",{parentName:"p"},"storeId")," will therefore have to be persisted in an application configuration file for subsequent calls to the V10 API. There are generally two ways to acquire the ",(0,o.kt)("inlineCode",{parentName:"p"},"storeId"),". The recommended option depends on the merchant being a migrated merchant or not. The two different approaches are described below."),(0,o.kt)("h3",{id:"no-existing-solution"},"No existing solution"),(0,o.kt)("p",null,"When an integrator is building a new integration for a merchant they need to know the store to which the PoS should be created. The goal is to get a list of all the stores that belongs to a merchant and then use the ",(0,o.kt)("inlineCode",{parentName:"p"},"storeId")," from the appropriate store to create the PoS. First the integrator needs to call ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /v10/stores")," without any query parameters and the endpoint will return all the ",(0,o.kt)("inlineCode",{parentName:"p"},"storeId"),"s based on the Merchant VAT either provided in the ",(0,o.kt)("inlineCode",{parentName:"p"},"x-mobilepay-merchant-vat-number")," header or provided in the access token (see ",(0,o.kt)("a",{parentName:"p",href:"/docs/pos/authentication#obtaining-an-access-token"},"Authentication"),"). Then the integrator will loop through the list and for each ",(0,o.kt)("inlineCode",{parentName:"p"},"storeId")," call ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /v10/stores/{storeid}")," that will return the store information for that specific store. In the end the integrator have a list of all the stores the merchant has and then the integrator knows which ",(0,o.kt)("inlineCode",{parentName:"p"},"storeId")," for each store to use when creating a PoS. Below diagram illustrates a flow to get all merchant stores."),(0,o.kt)("img",{src:n(92184).Z,alt:"Get Stores by VAT",width:"550"}),(0,o.kt)("h3",{id:"existing-solution"},"Existing solution"),(0,o.kt)("p",null,"A brand is identified by a ",(0,o.kt)("inlineCode",{parentName:"p"},"merchantBrandId"),". A ",(0,o.kt)("inlineCode",{parentName:"p"},"merchantLocationId")," together with a ",(0,o.kt)("inlineCode",{parentName:"p"},"merchantBrandId")," identifies a store within a brand.\nIf the merchant already has a MobilePay PoS solution with integration to either API V06, V07 or V08 then an integrator can use the already known ",(0,o.kt)("inlineCode",{parentName:"p"},"merchantBrandId")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"merchantLocationId")," to get the ",(0,o.kt)("inlineCode",{parentName:"p"},"StoreId"),", If the ",(0,o.kt)("inlineCode",{parentName:"p"},"merchantBrandId")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"merchantLocationId")," is not known the process from the above paragraph will be the most efficient. To get the ",(0,o.kt)("inlineCode",{parentName:"p"},"StoreId")," the integrator will have to call ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /v10/stores")," with the two ids, and in return they will receive the ",(0,o.kt)("inlineCode",{parentName:"p"},"storeId"),". Below diagram illustrates a flow for getting the ",(0,o.kt)("inlineCode",{parentName:"p"},"storeId")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /v10/stores"),"."),(0,o.kt)("img",{src:n(37503).Z,alt:"Get Store",width:"550"}),(0,o.kt)("h2",{id:"pos-creation"},"PoS Creation"),(0,o.kt)("p",null,"A PoS is created using the ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /v10/pointofsales")," endpoint. A PoS is identified in the PoS V10 API by a ",(0,o.kt)("inlineCode",{parentName:"p"},"posId")," that is assigned by MobilePay upon creation of the PoS. Clients can provide their own internal identifier as a ",(0,o.kt)("inlineCode",{parentName:"p"},"merchantPosId")," upon creation and use the ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /v10/pointofsales")," endpoint to lookup a ",(0,o.kt)("inlineCode",{parentName:"p"},"posId")," based on a ",(0,o.kt)("inlineCode",{parentName:"p"},"merchantPosId"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"merchantPosId")," field is required, so if no internal identifier is applicable, the client should generate and supply a random string (eg. a fresh GUID) instead."),(0,o.kt)("h3",{id:"beacons"},"Beacons"),(0,o.kt)("p",null,"The first thing to consider when creating a PoS is what beacon(s) will be used to connect MobilePay users to the given PoS.\nThis can range from an unmanned vending machine that has no payment hardware at all and hence only shows a QR code on a screen, to a full fledged super market ECR with a 2-way bluetooth capable terminal that also can show a QR code. To create a PoS, the client needs to provide a list of possible ways to detect the PoS. The more accurate the list is, the better MobilePay will be able to detect errors (if bluetooth is provided as a beacon type but we detect that no user ever checks in via bluetooth something is likely wrong). It is recommended to keep the list of supported beacon types in an application configuration and then edit the list in case the setup changes."),(0,o.kt)("p",null,"Each beacon, whether through a MobilePay QR code or a bluetooth/NFC signal, encodes a ",(0,o.kt)("inlineCode",{parentName:"p"},"beaconId")," that can be read by the MobilePay app. It is the ",(0,o.kt)("inlineCode",{parentName:"p"},"beaconId")," that is used to connect a MobilePay user to a specific PoS. ",(0,o.kt)("inlineCode",{parentName:"p"},"beaconId"),"s are globally unique across all merchants in MobilePay PoS and each ",(0,o.kt)("inlineCode",{parentName:"p"},"beaconId")," can refer to at most one active PoS at any given time."),(0,o.kt)("p",null,"Depending on the client setup, there are different use cases for handling ",(0,o.kt)("inlineCode",{parentName:"p"},"beaconId"),"s in API V10"),(0,o.kt)("h4",{id:"client-that-only-supports-dynamic-qr-codes"},"Client that only supports dynamic QR codes"),(0,o.kt)("p",null,"In case the client only allows QR beacons (no physical device) and can create a QR code dynamically (i.e generate a QR code and show it on a screen in opposition to printing a physical QR code), then the client can choose to let MobilePay create a GUID to use as ",(0,o.kt)("inlineCode",{parentName:"p"},"beaconId"),". The client then omits to provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"beaconId")," on PoS creation and afterwards queries the PoS to get the ",(0,o.kt)("inlineCode",{parentName:"p"},"beaconId"),". The client can then store the ",(0,o.kt)("inlineCode",{parentName:"p"},"beaconId")," in memory for QR code generation. Everytime the client reboots the client then has to query the PoS and grab the ",(0,o.kt)("inlineCode",{parentName:"p"},"beaconId"),". This way the client is not required to store a ",(0,o.kt)("inlineCode",{parentName:"p"},"beaconId")," in a configuration file since they can rely on querying it dynamically."),(0,o.kt)("h4",{id:"client-that-only-supports-static-qr-codes"},"Client that only supports static QR codes"),(0,o.kt)("p",null,"In case the client only allows QR beacons but is not able to generate a QR code dynamically, the client needs the ",(0,o.kt)("inlineCode",{parentName:"p"},"beaconId")," for the PoS creation. The following options are available:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The client can generate the ",(0,o.kt)("inlineCode",{parentName:"li"},"beaconId")," and provide it on PoS creation"),(0,o.kt)("li",{parentName:"ol"},"An arbitrary ",(0,o.kt)("inlineCode",{parentName:"li"},"beaconId")," can be produced outside the client and be inputted to the client for instance using readers, scanners or inputted using a keyboard. MobilePay can generate the ",(0,o.kt)("inlineCode",{parentName:"li"},"beaconId")," automatically as part of the production of stickers, if stickers are needed as the \u201cacceptance device\u201d.")),(0,o.kt)("p",null,"If stickers are needed as the acceptance device, we suggest that you use MobilePay to help deliver QR-code stickers to your merchants using option 2."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The easiest way of handling stickers is if the client is set up to support activation and deactivation of QR codes directly from the merchant location.\nYou can order the stickers directly from MobilePay\u2019s print supplier\u2019s sticker webshop, and the Beacon IDs and QR codes will automatically be generated. The BeaconId will be printed on the sticker, so that it can be added by the merchant, or the merchant can report to you, which Beacon IDs the merchant uses.\n",(0,o.kt)("a",{parentName:"p",href:"https://mp.bordingcentral.dk"},"Sticker Webshop"))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"beaconId")," should then be stored locally in a configuration file so that it can be used if the PoS needs to be updated (i.e. deleted and re-created. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/pos/pos-management#pos-updating-and-deletion"},"PoS Update and Deletion"),"). To avoid clashes, the client must use a GUID as the ",(0,o.kt)("inlineCode",{parentName:"p"},"beaconId"),"."),(0,o.kt)("h4",{id:"client-that-supports-physical-devices-terminals-mobilepay-white-boxes"},"Client that supports physical devices (terminals, MobilePay white boxes)"),(0,o.kt)("p",null,"In cases where the client uses a physical device then that device will have a MobilePay ",(0,o.kt)("inlineCode",{parentName:"p"},"beaconId")," associated with it. On PoS creation this ",(0,o.kt)("inlineCode",{parentName:"p"},"beaconId")," has to be provided. Some devices allows a client to read the ",(0,o.kt)("inlineCode",{parentName:"p"},"beaconId")," from it. If that is the case we recommend to read the ",(0,o.kt)("inlineCode",{parentName:"p"},"beaconId")," when the client reboots and query the PoS to see if the ",(0,o.kt)("inlineCode",{parentName:"p"},"beaconId"),"s match. If not delete the PoS and re-create it with the new ",(0,o.kt)("inlineCode",{parentName:"p"},"beaconId"),". This will make it possible to replace the device if its broken, and only have to reboot the system to propagate the changes.\nIf reading the ",(0,o.kt)("inlineCode",{parentName:"p"},"beaconId")," from the device is not possible, we recommend to store the ",(0,o.kt)("inlineCode",{parentName:"p"},"beaconId")," locally in a configuration file so that it persists through reboots."),(0,o.kt)("h3",{id:"preventing-checkin-before-payment"},"Preventing checkin before payment"),(0,o.kt)("p",null,"Normally, a user is allowed to check in on a point of sale before a payment is created. Then, once the payment is created, the payment will pop up on the user's phone for them to pay. However, in some cases, this is not what you want."),(0,o.kt)("p",null,"For example, in a self-service solution, a user could check in on a point of sale, walk away, and then they'll get paired to the next user's payment if the next user does not take over the check-in in time."),(0,o.kt)("p",null,"When creating a PoS, the client can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"requirePaymentBeforeCheckin")," property to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," (by default it is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"), and then users are not allowed to check in to a point of sale before a payment is created on the point of sale. This ensures that no users are checked in when the payment is created, so you can ensure the correct user gets paired."),(0,o.kt)("h3",{id:"callback"},"Callback"),(0,o.kt)("p",null,"If the client system cannot detect when a MobilePay user wants to pay and therefore needs to use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/pos/detecting-mobilepay#notification-service"},"Notification service"),", the client should set the callback parameter accordingly when calling ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /v10/pointofsales"),".\nIt is recommended to store the callback alias in the config file of the application."),(0,o.kt)("h3",{id:"naming"},"Naming"),(0,o.kt)("p",null,'The last thing to keep in mind when creating a PoS is to consider the name. When a MobilePay user checks in on the PoS they will in the app see, in sequence: The name of the brand, the name of the store and the name of the PoS. We recommend naming the PoS so that the MobilePay user can verify that they in fact have checked in the right place. So in a supermarket scenario a good name for the PoS would be "Check-out 1" for the first check-out counter in that supermarket.'),(0,o.kt)("h2",{id:"pos-updating-and-deletion"},"PoS Updating and Deletion"),(0,o.kt)("p",null,"A PoS can be deleted using the ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE /v10/pointofsales/{posId}")," endpoint."),(0,o.kt)("p",null,"We recommend only deleting a PoS if it is either not going to be used anymore, or you need to update it to reflect changes like a new callback alias, new name, new ",(0,o.kt)("inlineCode",{parentName:"p"},"beaconId")," etc."),(0,o.kt)("p",null,"When a PoS is deleted it is no longer possible to issue payments. However it will still be possible to capture or cancel payments that are in the reserved state. It is best practice to delay the deletion of a PoS until all payments have either been cancelled or captured."),(0,o.kt)("h2",{id:"keeping-in-sync-with-mobilepay"},"Keeping in sync with MobilePay"),(0,o.kt)("h3",{id:"when-pos-reboots"},"When PoS reboots"),(0,o.kt)("p",null,"When the client reboots it is good practice to query the PoS with ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /v10/pointofsales")," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"merchantPosId")," and persist the ",(0,o.kt)("inlineCode",{parentName:"p"},"posId")," in memory to use for initiating payments. If no PoS is returned, the client will have to re-create it. Here is the flow described:"),(0,o.kt)("img",{src:n(2151).Z,alt:"PoS onboarding",width:"550"}),(0,o.kt)("p",null,"We recommend the client to store the following in a configuration file to be able to create the PoS when needed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"StoreId")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MerchantPosId")),(0,o.kt)("li",{parentName:"ul"},"Name of PoS"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BeaconId")," (unless it can be read from the device itself. See ",(0,o.kt)("a",{parentName:"li",href:"/docs/pos/pos-management#beacons"},"Beacons")," )"),(0,o.kt)("li",{parentName:"ul"},"Callback (If the client is dependent on the notification service. See ",(0,o.kt)("a",{parentName:"li",href:"/docs/pos/pos-management#callback"},"Callback"),")"),(0,o.kt)("li",{parentName:"ul"},"Supported beacon types")),(0,o.kt)("h2",{id:"master-data"},"Master Data"),(0,o.kt)("p",null,"A PoS belongs to a store which in turn belongs to a merchant and associated with a brand. A PoS is identified by a ",(0,o.kt)("inlineCode",{parentName:"p"},"posId"),", but it is also possible to refer to a PoS by its ",(0,o.kt)("inlineCode",{parentName:"p"},"beaconId")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"merchantPosId"),". There can be at most one active PoS with a given ",(0,o.kt)("inlineCode",{parentName:"p"},"beaconId")," at any given time. There can be at most one active PoS with a given ",(0,o.kt)("inlineCode",{parentName:"p"},"merchantPosId")," at any given time, for a given integrator and merchant."),(0,o.kt)("p",null,"A store is identified by a ",(0,o.kt)("inlineCode",{parentName:"p"},"storeId"),", but it is also possible to refer to a store by the combination of ",(0,o.kt)("inlineCode",{parentName:"p"},"merchantBrandId")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"merchantLocationId"),". Two stores with the same ",(0,o.kt)("inlineCode",{parentName:"p"},"merchantLocationId")," but different ",(0,o.kt)("inlineCode",{parentName:"p"},"merchantBrandId"),"s are not related in any way. The ",(0,o.kt)("inlineCode",{parentName:"p"},"merchantBrandId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"merchantLocationId")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"storeId")," are supplied by MobilePay when the Merchant/Store is onboarded."))}p.isMDXComponent=!0},92184:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pos-GetStoresByVat-efcd23c810d6dc812116f768e1922c6e.png"},2151:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pos-PoS_Onboarding-70916e32e4cde9535409d2f2c16ce816.png"},37503:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pos-get_store-aca37409927adc46ef1f952c1f8119e2.png"}}]);