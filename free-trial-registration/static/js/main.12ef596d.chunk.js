(this["webpackJsonpfree-trial-registration"]=this["webpackJsonpfree-trial-registration"]||[]).push([[0],{158:function(e,a,n){"use strict";n.r(a);n(60);var t=n(0),r=n.n(t),i=n(83),l=n.n(i),o=(n(149),n(39)),u=n(11),s=n(8),m=n(1),c=n(91),d=n(86),v=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/,h=function(e){return"string"===typeof e&&e.indexOf("\n")>0?e.split("\n").map((function(e,a){return r.a.createElement("div",{key:a},e)})):e},f=function(e){var a=document.cookie.match(new RegExp("(^| )".concat(e,"=([^;]+)")));return a&&"null"!==a[2].toLowerCase()?a[2]:void 0},g=function(e){var a=e.item,n=e.carouselWidth;return r.a.createElement(m.a,{px:5,sx:{height:"100%",width:n,backgroundImage:"url(".concat("/free-trial-registration","/img/").concat(a.bgImage,")"),backgroundSize:"cover",paddingTop:104,paddingBottom:84,display:"conversational-ai"===a.id?"flex":"block",alignItems:"center",overflow:"auto"}},a.beforeImage&&r.a.createElement(m.d,{src:"".concat("/free-trial-registration","/img/").concat(a.beforeImage),alt:"LivePerson logo",px:3,py:5,sx:{margin:"0 auto",display:"block",width:"channels"===a.id?["100%","100%","90%","80%","70%"]:["100%","100%","50%","40%"],height:"auto"}}),a.title&&r.a.createElement(m.f,{variant:"carouselTitle",mt:1},h(a.title)),a.text&&r.a.createElement(m.f,{variant:"carouselText",mt:1},h(a.text)),a.subtitle&&r.a.createElement(m.f,{variant:"carouselSubtitle",mt:1},h(a.subtitle)),a.author&&r.a.createElement(r.a.Fragment,null,r.a.createElement(m.f,{variant:"carouselAuthorName",mt:3},h(a.author.name)),r.a.createElement(m.f,{variant:"carouselAuthorRole",mt:1},h(a.author.role))))},p=function(e){var a=e.index,n=e.activeIndex,t=e.setActiveIndex;return r.a.createElement(m.a,{onClick:function(e){e.stopPropagation(),t(a)},"data-testid":"carousel-dot"},r.a.createElement(m.a,{variant:n===a?"activeDot":"inactiveDot",m:1,sx:{width:12,height:12,borderRadius:12,cursor:"pointer"}}))},z=function(e){var a=e.slides,n=Object(t.useState)(0),i=Object(s.a)(n,2),l=i[0],o=i[1],u=Object(t.useState)(!0),c=Object(s.a)(u,2),d=c[0],v=c[1],h=Object(t.useState)(null),f=Object(s.a)(h,2),z=f[0],b=f[1],y=Object(t.useRef)(),C=Object(t.useCallback)((function(){o((function(e){return e+1>=a.length?0:e+1}))}),[a.length]);return Object(t.useEffect)((function(){var e=null;return d?e=setInterval(C,6e3):clearInterval(e),function(){return clearInterval(e)}}),[d,C]),Object(t.useLayoutEffect)((function(){var e=function(){b(y.current.offsetWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),r.a.createElement(m.a,{"data-testid":"carousel",variant:"carousel",onMouseEnter:function(){return v(!1)},onMouseLeave:function(){return v(!0)},onClick:C,ref:y,sx:{height:"100vh",gridArea:"carousel",msGridColumn:"1",width:"100%",position:"relative",overflow:"hidden",display:["none","none","block"],cursor:"pointer"}},r.a.createElement(m.c,{sx:{transition:"transform 0.5s",transform:"translate3d(-".concat(z*l,"px, 0, 0)"),position:"absolute",top:0,bottom:0,left:0,width:z*a.length}},a.map((function(e){return r.a.createElement(g,{key:e.id,item:e,carouselWidth:z})}))),r.a.createElement(m.c,{sx:{position:"absolute",left:32,bottom:32,zIndex:1}},a.map((function(e,a){return r.a.createElement(p,{key:a,index:a,activeIndex:l,setActiveIndex:o})}))))},b=n(87),y=n.n(b),C=function(e){var a=e.smallSize,n=e.isStatic;return r.a.createElement(m.d,{src:y.a,alt:"LivePerson logo",px:a?[0,0,2]:4,pt:a?3:6,pb:3,sx:{display:n?"static":a?["block","block","none"]:["none","none","block"],position:n?"static":["static","static","absolute"],top:0,left:0,zIndex:2,width:a?170:215,height:a?66:83}})},E=n(88),S=n(9),w=function(){window.location.href="https://authentication.liveperson.net/login.html"},x=function(){return r.a.createElement(m.c,{p:[0,0,4,6],justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"},r.a.createElement(C,{smallSize:!0}),r.a.createElement(m.c,{justifyContent:"flex-end",flex:1},r.a.createElement(S.a,{handleClick:w,"data-testid":"signInButton",variant:"secondary",label:"Sign In"})))},O=n(29),j=n(92),k=function(e){var a=e.handleChange,n=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{"data-testid":"recaptcha",size:"normal",sitekey:"6Ld569AUAAAAAJ8bKdSR4QCf5Z09zOBYLXprOlWa",onChange:function(e){return a("recaptchaResponseToken",e)}}),r.a.createElement(m.a,{mt:2},n.isError&&r.a.createElement(S.b,{error:n,mb:3})))},B={marketingData:{leadSource:f("lp-leadSource")||"",referringUrl:f("lp-lsRef")||"",utmCampaignId:f("lp-lsCampaign")||"",utmCampaignMedium:f("lp-lsMedium")||"",utmCampaignSearchKeywords:f("lp-lsTerms")||"",utmCampaignSource:f("lp-lsSource")||"",utmContent:f("lp-lsContent")||""}},R=Math.ceil(12),I=function(e){var a=e.setIsVideoActive,n=e.setMessageState,i=e.setAccountDetails,l=e.userDetails,o=e.setUserDetails,h=Object(t.useState)({firstName:{message:"Required field"},lastName:{message:"Required Field"},company:{message:"Required Field"},email:{message:"The business email address entered is not valid."},password:{message:"Your password does not meet all the requirements",requirements:{name:"Your password must consist of:",data:[{name:"- minimum of 8 characters"},{name:"- one or more uppercase letters (A-Z)"},{name:"- one or more lowercase letters (a-z)"},{name:"- one or more numbers (0-9)"},{name:"- one or more of these special characters:"},{name:"& @ ! * $ < > / ( ) % # =",shouldIndent:!0},{name:"- cannot use any other special characters"}]}},region:{message:"Required Field"},recaptchaResponseToken:{message:"Required Field"}}),f=Object(s.a)(h,2),g=f[0],p=f[1],z=function(e,a){p((function(n){return Object(u.a)(Object(u.a)({},n),{},Object(O.a)({},e,Object(u.a)(Object(u.a)({},n[e]),a)))}))},b=function(e,a){p((function(n){var t=Object(u.a)({},n);return t.password.requirements.data[e].isError=a,t}))},y=function(e,a){var n;switch(e){case"email":n=!v.test(a);break;case"password":n=function(e){var a=e.length>=8;b(0,!a);var n=null!==e.match(/[A-Z]+/);b(1,!n);var t=null!==e.match(/[a-z]+/);b(2,!t);var r=null!==e.match(/[0-9]+/);b(3,!r);var i=null!==e.match(/[&@!*$<>/()%#=]+/);b(4,!i),b(5,!i);var l=null!==e.match(/^[(0-9)(a-z)(A-Z)&@!*$<>/()%#=]+$/);return b(6,!l),!a||!n||!t||!r||!i||!l}(a);break;case"firstName":case"lastName":case"company":n=a.length<1;break;case"region":n=!("z1"===a||"z2"===a||"z3"===a);break;default:n=""===a}return z(e,{hasInteracted:!0,isError:n}),n},C=function(e,a){o(Object(u.a)(Object(u.a)({},l),{},Object(O.a)({},e,a))),y(e,a)},E=function(){fetch("".concat("https://free-trial.liveperson.com/api/free-trial","/signup"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(Object(u.a)(Object(u.a)({},l),B))}).then((function(e){return e.json()})).then((function(e){var a=e.accountCreationId;void 0!==a?function e(a,t){fetch("".concat("https://free-trial.liveperson.com/api/free-trial","/status/").concat(a),{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(r){var o=r.status,u=r.account_id;"SUCCESS"===o?(i({accountId:u,username:l.email}),n("success")):t<R?setTimeout((function(){return e(a,t+1)}),5e3):n("timeout")})).catch((function(){return n("error")}))}(a,1):n("error")})).catch((function(){return n("error")}))};return r.a.createElement(m.a,{sx:{position:"relative"}},r.a.createElement("form",{"data-testid":"registerForm",autoComplete:"off"},r.a.createElement(m.a,{sx:{display:"grid",gridTemplateColumns:["1fr 1fr","2.5fr 2.5fr 4fr"],gridTemplateAreas:"'firstname lastname'",gridGap:"16px","@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)":{display:"-ms-grid",msGridColumns:"2.5fr 2.5fr 4fr"}}},r.a.createElement(m.a,{sx:{gridArea:"firstname",msGridColumn:"1","@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)":{marginRight:2}}},r.a.createElement(S.c,{name:"firstName",type:"text",value:l.firstName,handleChange:C,handleBlur:z,placeholder:"First name",error:g.firstName,shouldFocusOnLoad:!0,isFullWidth:!0})),r.a.createElement(m.a,{sx:{gridArea:"lastname",msGridColumn:"2","@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)":{marginLeft:2}}},r.a.createElement(S.c,{name:"lastName",type:"text",value:l.lastName,handleChange:C,handleBlur:z,placeholder:"Last name",error:g.lastName,isFullWidth:!0}))),r.a.createElement(S.c,{name:"company",type:"text",value:l.company,handleChange:C,handleBlur:z,placeholder:"Enter business name",error:g.company}),r.a.createElement(S.c,{name:"email",type:"email",value:l.email,handleChange:C,handleBlur:z,placeholder:"Enter business email address",error:g.email}),r.a.createElement(S.c,{name:"password",type:"password",value:l.password,handleChange:C,handleBlur:z,placeholder:"Create password",error:g.password}),r.a.createElement(S.e,{name:"region",value:l.region,defaultValue:"choose-country",handleChange:C,handleBlur:z,error:g.region,options:[{name:"Select country",value:"choose-country",disabled:!0}].concat(Object(c.a)(d.sort((function(e,a){return e.name<a.name?-1:1})))).filter((function(e){return!e.isBanned}))}),r.a.createElement(k,{handleChange:C,error:g.recaptchaResponseToken}),r.a.createElement(m.a,{pt:4,sx:{display:"grid",gridTemplateColumns:["auto","5fr 4fr"],"@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)":{display:"-ms-grid",msGridColumns:"5fr 4fr"}}},r.a.createElement(S.a,{"data-testid":"registerButton",handleClick:function(e){e.preventDefault();var n="function"===typeof hj;Object.keys(l).map((function(e){return y(e,l[e])})).reduce((function(e,a){return a||e}),!1)?n&&hj("formSubmitFailed"):(E(),a(!0),n&&hj("formSubmitSuccessful"))},label:"Create Account",isFullWidth:!0,variant:"primary"}))))},A=n(90);function F(){return(F=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function M(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var T=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36ZM38.8284 44.8284C40.3905 46.3905 40.3905 48.9232 38.8284 50.4853C37.2663 52.0474 34.7337 52.0474 33.1716 50.4853C31.6095 48.9232 31.6095 46.3905 33.1716 44.8284C34.7337 43.2663 37.2663 43.2663 38.8284 44.8284ZM36 18C34.3431 18 33 19.3431 33 21V36C33 37.6569 34.3431 39 36 39C37.6569 39 39 37.6569 39 36V21C39 19.3431 37.6569 18 36 18Z",fill:"#EC5252"}),L=function(e){var a=e.svgRef,n=e.title,t=M(e,["svgRef","title"]);return r.a.createElement("svg",F({width:72,height:72,viewBox:"0 0 72 72",fill:"none",ref:a},t),n?r.a.createElement("title",null,n):null,T)},G=r.a.forwardRef((function(e,a){return r.a.createElement(L,F({svgRef:a},e))}));n.p;function D(){return(D=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function N(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var P=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22ZM20 11C20 9.89543 20.8954 9 22 9C23.1046 9 24 9.89543 24 11V20.1716L31.9075 28.079C32.6885 28.8601 32.6885 30.1264 31.9075 30.9075C31.1264 31.6885 29.8601 31.6885 29.079 30.9075L20.5937 22.4222C20.5923 22.4208 20.5909 22.4193 20.5895 22.4179C20.2254 22.0557 20 21.5542 20 21V11Z",fill:"#DEAD89"}),W=function(e){var a=e.svgRef,n=e.title,t=N(e,["svgRef","title"]);return r.a.createElement("svg",D({width:44,height:44,viewBox:"0 0 44 44",fill:"none",ref:a},t),n?r.a.createElement("title",null,n):null,P)},H=r.a.forwardRef((function(e,a){return r.a.createElement(W,D({svgRef:a},e))}));n.p;function q(){return(q=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function U(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Z=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M36 72C55.8823 72 72 55.8823 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72ZM23.4853 32.8284C21.9232 31.2663 19.3905 31.2663 17.8284 32.8284C16.2663 34.3905 16.2663 36.9232 17.8284 38.4853C19.3905 40.0474 21.9232 40.0474 23.4853 38.4853C25.0474 36.9232 25.0474 34.3905 23.4853 32.8284ZM32.8284 32.8284C34.3905 31.2663 36.9232 31.2663 38.4853 32.8284C40.0474 34.3905 40.0474 36.9232 38.4853 38.4853C36.9232 40.0474 34.3905 40.0474 32.8284 38.4853C31.2663 36.9232 31.2663 34.3905 32.8284 32.8284ZM53.4853 32.8284C51.9232 31.2663 49.3905 31.2663 47.8284 32.8284C46.2663 34.3905 46.2663 36.9232 47.8284 38.4853C49.3905 40.0474 51.9232 40.0474 53.4853 38.4853C55.0474 36.9232 55.0474 34.3905 53.4853 32.8284Z",fill:"#DEAD89"}),V=function(e){var a=e.svgRef,n=e.title,t=U(e,["svgRef","title"]);return r.a.createElement("svg",q({width:72,height:72,viewBox:"0 0 72 72",fill:"none",ref:a},t),n?r.a.createElement("title",null,n):null,Z)},K=r.a.forwardRef((function(e,a){return r.a.createElement(V,q({svgRef:a},e))}));n.p;function J(){return(J=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function Y(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _=r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36ZM45.7488 26.1213C46.9204 24.9497 48.8199 24.9497 49.9914 26.1213C51.163 27.2929 51.163 29.1924 49.9914 30.364L34.26 46.0954C34.1445 46.2767 34.0075 46.4483 33.8492 46.6066C33.3323 47.1236 32.6735 47.4124 31.9982 47.4732C31.1084 47.587 30.1773 47.3023 29.4939 46.6189C29.3169 46.4419 29.1667 46.2483 29.0432 46.0432L21.1213 38.1213C19.9497 36.9497 19.9497 35.0503 21.1213 33.8787C22.2929 32.7071 24.1924 32.7071 25.364 33.8787L31.6777 40.1924L45.7488 26.1213Z",fill:"#13CF5E"}),$=function(e){var a=e.svgRef,n=e.title,t=Y(e,["svgRef","title"]);return r.a.createElement("svg",J({width:72,height:72,viewBox:"0 0 72 72",fill:"none",ref:a},t),n?r.a.createElement("title",null,n):null,_)},Q=r.a.forwardRef((function(e,a){return r.a.createElement($,J({svgRef:a},e))})),X=(n.p,{creating:{icon:r.a.createElement(K,{"data-testid":"creatingIcon",style:{width:44,height:44}}),title:"Setting up your account",description:"Please wait while we configure and set your account. In the meanwhile, please watch our product overview video."},success:{icon:r.a.createElement(Q,{"data-testid":"successIcon",style:{width:44,height:44}}),title:"Congratulations! Your 45 day trial account has been created"},error:{icon:r.a.createElement(G,{"data-testid":"errorIcon",style:{width:44,height:44}}),title:"Oops! Something went wrong",description:"Get ready to explore and build amazing conversational experiences for your business.",retryMessage:"Retry to sign up again"},timeout:{icon:r.a.createElement(H,{"data-testid":"timeoutIcon",style:{width:44,height:44}}),title:"Oops! It\u2019s taking longer than expected...",description:"We're still working on creating your account.\n When it's ready, we'll send you an email with login information. While you wait:",gettingStarted:"Get familiar with your free trial account"}}),ee=function(e){var a=e.isVideoActive,n=e.messageState,i=e.accountDetails,l=e.resetRegistration,o=Object(t.useState)(!1),u=Object(s.a)(o,2),c=u[0],d=u[1],v=Object(t.useState)({}),f=Object(s.a)(v,2),g=f[0],p=f[1],z=Object(t.useRef)(),b=Object(t.useRef)(),y=Object(t.useRef)(),E=Object(t.useRef)(),w="success"===n,x="creating"===n,O=X[n],j=O.icon,k=O.title,B=O.description,R=O.retryMessage,I=O.gettingStarted;return Object(t.useLayoutEffect)((function(){var e=function(){var e=b.current.offsetHeight,a=b.current.offsetWidth,n=y.current.offsetHeight;p(function(e,a,n){var t=window.innerHeight-e-n-40;return t/.5625>a?{width:a,height:.5625*a}:{width:t/.5625,height:t}}(e,a,n))};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[n]),Object(t.useEffect)((function(){z.current=new A.a("video"),d(!0)}),[]),Object(t.useEffect)((function(){c&&a&&z.current.play()}),[c,a]),r.a.createElement(m.a,{backgroundColor:"navy",sx:{height:"100%",flex:1,overflow:"auto",display:"grid",gridTemplateRows:"auto 1fr",gridTemplateAreas:"'logo'\n          'content'","@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)":{display:"-ms-grid",msGridRows:"auto 1fr"}}},r.a.createElement(m.a,{ref:y,sx:{gridArea:"logo",msGridRow:"1"}},r.a.createElement(C,{isStatic:!0})),r.a.createElement(m.a,{alignItems:"center",mx:[4,6,7],pb:6,px:[4,6,7],sx:{textAlign:"center",height:"100%",gridArea:"content",msGridRow:"2"}},r.a.createElement(m.a,{ref:b,width:"100%",mb:6},j,k&&r.a.createElement(m.f,{variant:"videoTitle",my:3},k,x?r.a.createElement(S.d,null):null),B&&r.a.createElement(m.f,{variant:"videoDescription",mb:4,mx:[2,4,6]},h(B),R&&r.a.createElement(m.f,{"data-testid":"retryButton",onClick:l,mt:4,mb:4,ml:1,fontSize:1,variant:"retryText"},R)),I&&r.a.createElement(m.e,{"data-testid":"timeoutIcon",href:"https://developers.liveperson.com/getting-started-with-your-free-trial-account.html",target:"_blank",mt:4,mb:6,ml:1,fontSize:1,variant:"textLink"},I),w&&r.a.createElement(m.c,{alignItems:"center",mt:4,justifyContent:"center",flexWrap:"wrap"},r.a.createElement(m.f,{variant:"accountLabel",mr:3},"Account #"),r.a.createElement(m.f,{variant:"accountDetail",mr:6},i.accountId),r.a.createElement(m.f,{variant:"accountLabel",mr:3},"Username"),r.a.createElement(m.f,{variant:"accountDetail",mr:7},i.username),r.a.createElement(m.e,{href:"https://authentication.liveperson.net/login.html",target:"_blank",variant:"primaryLink"},"Login to your account"))),r.a.createElement(m.a,{flex:1,sx:{width:"100%"},ref:E},r.a.createElement(m.a,{sx:{margin:"0 auto",position:"relative",height:g.height,width:g.width,outlineColor:"shadow",outlineWidth:"6px",outlineStyle:"solid"}},r.a.createElement("iframe",{title:"FTUE",ref:z,id:"video","data-testid":"video",src:"https://player.vimeo.com/video/398468660?autoplay=0&app_id=122963",frameBorder:"0",allow:"autoplay; fullscreen",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})))))},ae=function(){return r.a.createElement(m.a,{mb:6},r.a.createElement(m.a,{sx:{backgroundColor:"liveNavy",width:[40,60,80],height:8},mb:3}),r.a.createElement(m.f,{variant:"header",mb:2},"Sign up for a free trial"),r.a.createElement(m.f,{variant:"subheader"},"No credit card required"))},ne=function(){var e=Object(t.useState)("creating"),a=Object(s.a)(e,2),n=a[0],i=a[1],l=Object(t.useState)(!1),o=Object(s.a)(l,2),c=o[0],d=o[1],v=Object(t.useState)({}),h=Object(s.a)(v,2),f=h[0],g=h[1],p=Object(t.useState)({firstName:"",lastName:"",company:"",email:"",password:"",region:"",recaptchaResponseToken:""}),b=Object(s.a)(p,2),y=b[0],S=b[1];return c?r.a.createElement(ee,{isVideoActive:c,messageState:n,accountDetails:f,resetRegistration:function(){i("creating"),d(!1),g(null),S(Object(u.a)(Object(u.a)({},y),{},{password:""}))}}):r.a.createElement(m.a,{sx:{height:"100%",position:"relative",display:["block","block","grid"],gridTemplateColumns:"5fr 2fr 9fr",gridTemplateAreas:"'carousel spacer form'","@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)":{display:"-ms-grid",msGridColumns:"5fr 2fr 9fr"}},mx:[5,6,0]},r.a.createElement(C,null),r.a.createElement(z,{slides:E}),r.a.createElement(m.a,{sx:{gridArea:"spacer",msGridColumn:"2",height:"100vh",display:["none","none","block"]}}),r.a.createElement(m.a,{sx:{flex:1,overflow:"auto",gridArea:"form",msGridColumn:"3"},"data-testid":"registerContent"},r.a.createElement(x,null),r.a.createElement(ae,null),r.a.createElement(I,{setIsVideoActive:d,setMessageState:i,setAccountDetails:g,userDetails:y,setUserDetails:S}),r.a.createElement(m.f,{variant:"privacyPolicy",mt:6,mb:7},"By creating an account, I agree to LivePerson's\xa0",r.a.createElement(m.e,{sx:{textDecoration:"none",color:"electricBlue","&hover":{color:"electricBlueHover"}},href:"https://www.liveperson.com/policies/license-agreement/"},"End User License Agreement"))))};l.a.render(r.a.createElement(t.StrictMode,null,r.a.createElement(o.a,{theme:{breakpoints:["40em","52em","75em","100em"],fontSizes:[".75rem",".875rem","1rem","1.25rem","1.5rem","2rem","2.5rem"],space:[0,".25rem",".5rem","1rem","1.5rem","2rem","2.5rem","4rem","8rem","11.875rem"],colors:{orange:"#ff6900",electricBlue:"#005EF4",electricBlueHover:"#003FA3",darkBlue:"#1B1E4D",navy:"#090C43",darkNavy:"#04051F",navyGray:"#2D2F52",darkGray:"#675D55",darkerGray:"#463E36",gray:"#847970",lightGray:"#D9D4D0",lighterGray:"#F8F5F3",lightGrey:"#A2A3B8",red:"#DF2A31",lightRed:"#FEECEC",lightBlue:"#5879DA",shadow:"#141358",aqua:"#5ED7FB",aquaHover:"#00a4d6"},variants:{primaryLink:{fontSize:0,fontFamily:"Roboto",fontWeight:700,lineHeight:"20px",borderRadius:32,paddingLeft:4,paddingRight:4,paddingTop:"6px",paddingBottom:"6px",backgroundColor:"electricBlue",color:"white",WebkitFontSmoothing:"antialiased",textDecoration:"none","&:hover":{backgroundColor:"electricBlueHover"}},textLink:{display:"inline",textDecoration:"none",color:"aqua",cursor:"pointer",fontWeight:700,"&:hover":{color:"aquaHover"}},activeDot:{backgroundColor:"orange",borderColor:"orange",borderWidth:1,borderStyle:"solid"},inactiveDot:{backgroundColor:"transparent",borderColor:"white",borderWidth:1,borderStyle:"solid"},carousel:{backgroundColor:"darkBlue"}},text:{dropdownSelected:{fontSize:0,fontFamily:'"Roboto", sans-serif',lineHeight:"20px",color:"navy"},carouselTitle:{color:"white",fontFamily:'"Roboto Slab", sans-serif',fontSize:[2,3,4,6],lineHeight:["24px","32px","40px","56px"]},carouselText:{color:"white",fontSize:[1,1,2,4],fontFamily:'"Roboto", sans-serif',lineHeight:["20px","20px","24px","40px"],textAlign:"center",letterSpacing:"0.008em",WebkitFontSmoothing:"antialiased"},carouselSubtitle:{color:"white",fontSize:[1,1,2,3],fontFamily:'"Roboto", sans-serif',lineHeight:["20px","20px","24px","32px"],letterSpacing:"0.008em",WebkitFontSmoothing:"antialiased"},carouselAuthorName:{color:"white",fontSize:[1,1,2,3],fontWeight:700,fontFamily:'"Roboto", sans-serif',textAlign:"center",lineHeight:["20px","20px","24px","32px"],letterSpacing:"0.008em",WebkitFontSmoothing:"antialiased"},retryText:{display:"inline",color:"aqua",cursor:"pointer",fontWeight:700,"&:hover":{color:"aquaHover"}},carouselAuthorRole:{color:"white",fontSize:[0,1],fontFamily:'"Roboto", sans-serif',textAlign:"center",lineHeight:["20px","24px"],letterSpacing:"0.01em",WebkitFontSmoothing:"antialiased"},header:{fontSize:[3,4,5],fontWeight:700,fontFamily:'"Roboto", sans-serif',lineHeight:["28px","36px","44px"],color:"navy",letterSpacing:"0.008em",WebkitFontSmoothing:"antialiased"},subheader:{fontSize:2,fontFamily:'"Roboto", sans-serif',fontWeight:300,lineHeight:"24px",color:"navy",letterSpacing:"0.01em",WebkitFontSmoothing:"antialiased"},privacyPolicy:{fontSize:0,fontFamily:'"Roboto", sans-serif',lineHeight:"20px",letterSpacing:"0.01em",color:"gray"},videoTitle:{color:"white",fontSize:3,fontFamily:'"Roboto", sans-serif',fontWeight:700,lineHeight:"32px",letterSpacing:"0.008em",WebkitFontSmoothing:"antialiased"},videoDescription:{color:"white",fontSize:1,fontFamily:'"Roboto", sans-serif',fontWeight:400,lineHeight:"24px",letterSpacing:"0.01em",WebkitFontSmoothing:"antialiased"},accountLabel:{fontFamily:'"Roboto", sans-serif',display:"inline",color:"lightGrey",whiteSpace:"nowrap"},accountDetail:{fontFamily:'"Roboto", sans-serif',display:"inline",color:"white",whiteSpace:"nowrap"}}}},r.a.createElement(ne,null))),document.getElementById("root")||document.createElement("div"))},86:function(e){e.exports=JSON.parse('[{"name":"Andorra","value":"z2"},{"name":"United Arab Emirates","value":"z2"},{"name":"Afghanistan","value":"z2"},{"name":"Antigua and Barbuda","value":"z1"},{"name":"Anguilla","value":"z1"},{"name":"Albania","value":"z2"},{"name":"Armenia","value":"z2"},{"name":"Angola","value":"z2"},{"name":"Antarctica","value":"z1"},{"name":"Argentina","value":"z1"},{"name":"American Samoa","value":"z1"},{"name":"Austria","value":"z2"},{"name":"Australia","value":"z3"},{"name":"Aruba","value":"z1"},{"name":"Aland Islands","value":"z2"},{"name":"Azerbaijan","value":"z2"},{"name":"Bosnia and Herzegovina","value":"z2"},{"name":"Barbados","value":"z1"},{"name":"Bangladesh","value":"z3"},{"name":"Belgium","value":"z2"},{"name":"Burkina Faso","value":"z2"},{"name":"Bulgaria","value":"z2"},{"name":"Bahrain","value":"z2"},{"name":"Burundi","value":"z2","isBanned":true},{"name":"Benin","value":"z2"},{"name":"Saint Barth\xe9lemy","value":"z1"},{"name":"Bermuda","value":"z1"},{"name":"Brunei Darussalam","value":"z3"},{"name":"Bolivia","value":"z1"},{"name":"Bonaire","value":"z1"},{"name":"Brazil","value":"z1"},{"name":"Bahamas","value":"z1"},{"name":"Bhutan","value":"z3"},{"name":"Bouvet Island","value":"z2"},{"name":"Botswana","value":"z2"},{"name":"Belarus","value":"z2","isBanned":true},{"name":"Belize","value":"z1"},{"name":"Canada","value":"z1"},{"name":"Cocos (Keeling) Islands","value":"z3"},{"name":"Congo (Kinshasa)","value":"z2","isBanned":true},{"name":"Central African Republic","value":"z2","isBanned":true},{"name":"Congo (Brazzaville)","value":"z2","isBanned":true},{"name":"Switzerland","value":"z2"},{"name":"Cote d\'Ivoire","value":"z2"},{"name":"Cook Islands","value":"z3"},{"name":"Chile","value":"z1"},{"name":"Cameroon","value":"z2"},{"name":"China","value":"z3"},{"name":"Colombia","value":"z1"},{"name":"Costa Rica","value":"z1"},{"name":"Cuba","value":"z1","isBanned":true},{"name":"Cape Verde","value":"z2"},{"name":"Cura\xe7ao","value":"z1"},{"name":"Christmas Island","value":"z3"},{"name":"Cyprus","value":"z2"},{"name":"Czech Republic","value":"z2"},{"name":"Germany","value":"z2"},{"name":"Djibouti","value":"z2"},{"name":"Denmark","value":"z2"},{"name":"Dominica","value":"z1"},{"name":"Dominican Republic","value":"z1"},{"name":"Algeria","value":"z2"},{"name":"Ecuador","value":"z1"},{"name":"Estonia","value":"z2"},{"name":"Egypt","value":"z2"},{"name":"Western Sahara","value":"z2"},{"name":"Eritrea","value":"z2"},{"name":"Spain","value":"z2"},{"name":"Ethiopia","value":"z2"},{"name":"Finland","value":"z2"},{"name":"Fiji","value":"z3"},{"name":"Falkland Islands (Malvinas)","value":"z1"},{"name":"Micronesia","value":"z1"},{"name":"Faroe Islands","value":"z2"},{"name":"France","value":"z2"},{"name":"Gabon","value":"z2"},{"name":"United Kingdom","value":"z2"},{"name":"Grenada","value":"z2"},{"name":"Georgia","value":"z2"},{"name":"French Guiana","value":"z2"},{"name":"Guernsey","value":"z2"},{"name":"Ghana","value":"z2"},{"name":"Gibraltar","value":"z2"},{"name":"Greenland","value":"z2"},{"name":"Gambia","value":"z2"},{"name":"Guinea","value":"z1"},{"name":"Guadeloupe","value":"z1"},{"name":"Equatorial Guinea","value":"z2"},{"name":"Greece","value":"z2"},{"name":"South Georgia and the South Sandwich Islands","value":"z1"},{"name":"Guatemala","value":"z1"},{"name":"Guam","value":"z1"},{"name":"Guinea-Bissau","value":"z2"},{"name":"Guyana","value":"z1"},{"name":"Hong Kong","value":"z3"},{"name":"Heard Island and McDonald Islands","value":"z2"},{"name":"Honduras","value":"z1"},{"name":"Croatia","value":"z2"},{"name":"Haiti","value":"z1"},{"name":"Hungary","value":"z2"},{"name":"Indonesia","value":"z3"},{"name":"Ireland","value":"z2"},{"name":"Israel","value":"z2"},{"name":"Isle of Man","value":"z2"},{"name":"India","value":"z3"},{"name":"British Indian Ocean Territory","value":"z3"},{"name":"Iraq","value":"z2","isBanned":true},{"name":"Iran","value":"z2","isBanned":true},{"name":"Iceland","value":"z2"},{"name":"Italy","value":"z2"},{"name":"Jersey","value":"z2"},{"name":"Jamaica","value":"z1"},{"name":"Jordan","value":"z2"},{"name":"Japan","value":"z3"},{"name":"Kenya","value":"z2"},{"name":"Kyrgyzstan","value":"z2"},{"name":"Cambodia","value":"z3"},{"name":"Kiribati","value":"z3"},{"name":"Comoros","value":"z2"},{"name":"Saint Kitts and Nevis","value":"z1"},{"name":"North Korea","value":"z3","isBanned":true},{"name":"South Korea","value":"z3"},{"name":"Kuwait","value":"z2"},{"name":"Cayman Islands","value":"z1"},{"name":"Kazakhstan","value":"z2"},{"name":"Laos","value":"z3"},{"name":"Lebanon","value":"z2","isBanned":true},{"name":"Saint Lucia","value":"z1"},{"name":"Liechtenstein","value":"z2"},{"name":"Sri Lanka","value":"z3"},{"name":"Liberia","value":"z2"},{"name":"Lesotho","value":"z2"},{"name":"Lithuania","value":"z2"},{"name":"Luxembourg","value":"z2"},{"name":"Latvia","value":"z2"},{"name":"Libya","value":"z2","isBanned":true},{"name":"Morocco","value":"z2"},{"name":"Monaco","value":"z2"},{"name":"Moldova","value":"z2"},{"name":"Montenegro","value":"z2"},{"name":"Saint Martin (French part)","value":"z2"},{"name":"Madagascar","value":"z2"},{"name":"Marshall Islands","value":"z3"},{"name":"Macedonia","value":"z2"},{"name":"Mali","value":"z2"},{"name":"Myanmar","value":"z3","isBanned":true},{"name":"Mongolia","value":"z3"},{"name":"Macao","value":"z3"},{"name":"Northern Mariana Islands","value":"z3"},{"name":"Martinique","value":"z1"},{"name":"Mauritania","value":"z2"},{"name":"Montserrat","value":"z1"},{"name":"Malta","value":"z2"},{"name":"Mauritius","value":"z2"},{"name":"Maldives","value":"z3"},{"name":"Malawi","value":"z2"},{"name":"Mexico","value":"z1"},{"name":"Malaysia","value":"z3"},{"name":"Mozambique","value":"z2"},{"name":"Namibia","value":"z2"},{"name":"New Caledonia","value":"z3"},{"name":"Niger","value":"z2"},{"name":"Norfolk Island","value":"z3"},{"name":"Nigeria","value":"z2"},{"name":"Nicaragua","value":"z1","isBanned":true},{"name":"Netherlands","value":"z2"},{"name":"Norway","value":"z2"},{"name":"Nepal","value":"z3"},{"name":"Nauru","value":"z3"},{"name":"Niue","value":"z3"},{"name":"New Zealand","value":"z3"},{"name":"Oman","value":"z2"},{"name":"Panama","value":"z1"},{"name":"Peru","value":"z1"},{"name":"French Polynesia","value":"z3"},{"name":"Papua New Guinea","value":"z3"},{"name":"Philippines","value":"z3"},{"name":"Pakistan","value":"z2"},{"name":"Poland","value":"z2"},{"name":"Saint Pierre and Miquelon","value":"z3"},{"name":"Pitcairn","value":"z3"},{"name":"Puerto Rico","value":"z1"},{"name":"Palestinian Territory, Occupied","value":"z2"},{"name":"Portugal","value":"z2"},{"name":"Palau","value":"z3"},{"name":"Paraguay","value":"z1"},{"name":"Qatar","value":"z2"},{"name":"Reunion","value":"z2"},{"name":"Romania","value":"z2"},{"name":"Serbia","value":"z2"},{"name":"Russia","value":"z2","isBanned":true},{"name":"Rwanda","value":"z2"},{"name":"Saudi Arabia","value":"z2"},{"name":"Solomon Islands","value":"z3"},{"name":"Seychelles","value":"z2"},{"name":"Sudan","value":"z2","isBanned":true},{"name":"Sweden","value":"z2"},{"name":"Singapore","value":"z3"},{"name":"Saint Helena, Ascension and Tristan da Cunha","value":"z2"},{"name":"Slovenia","value":"z2"},{"name":"Svalbard and Jan Mayen","value":"z2"},{"name":"Slovakia","value":"z2"},{"name":"Sierra Leone","value":"z2"},{"name":"San Marino","value":"z2"},{"name":"Senegal","value":"z2"},{"name":"Somalia","value":"z2","isBanned":true},{"name":"Suriname","value":"z1"},{"name":"South Sudan","value":"z2","isBanned":true},{"name":"Sao Tome and Principe","value":"z2"},{"name":"El Salvador","value":"z1"},{"name":"Sint Maarten (Dutch part)","value":"z1"},{"name":"Syria","value":"z2","isBanned":true},{"name":"Swaziland","value":"z2"},{"name":"Turks and Caicos Islands","value":"z1"},{"name":"Chad","value":"z2"},{"name":"French Southern Territories","value":"z2"},{"name":"Togo","value":"z2"},{"name":"Thailand","value":"z3"},{"name":"Tajikistan","value":"z2"},{"name":"Tokelau","value":"z3"},{"name":"Timor-Leste","value":"z3"},{"name":"Turkmenistan","value":"z2"},{"name":"Tunisia","value":"z2"},{"name":"Tonga","value":"z3"},{"name":"Turkey","value":"z2"},{"name":"Trinidad and Tobago","value":"z1"},{"name":"Tuvalu","value":"z3"},{"name":"Taiwan","value":"z3"},{"name":"Tanzania","value":"z3"},{"name":"Ukraine","value":"z2","isBanned":true},{"name":"Uganda","value":"z2"},{"name":"United States Minor Outlying Islands","value":"z1"},{"name":"United States","value":"z1"},{"name":"Uruguay","value":"z1"},{"name":"Uzbekistan","value":"z2"},{"name":"Holy See (Vatican City State)","value":"z2"},{"name":"Saint Vincent and the Grenadines","value":"z1"},{"name":"Venezuela","value":"z1","isBanned":true},{"name":"Virgin Islands (British)","value":"z1"},{"name":"Virgin Islands (United States)","value":"z1"},{"name":"Vietnam","value":"z3"},{"name":"Vanuatu","value":"z3"},{"name":"Wallis and Futuna","value":"z3"},{"name":"Samoa","value":"z3"},{"name":"Yemen","value":"z2","isBanned":true},{"name":"Mayotte","value":"z2"},{"name":"Yugoslavia","value":"z2"},{"name":"South Africa","value":"z2"},{"name":"Zambia","value":"z2"},{"name":"Zimbabwe","value":"z2","isBanned":true}]')},87:function(e,a,n){e.exports=n.p+"static/media/logo.df9acfdb.svg"},88:function(e){e.exports=JSON.parse('[{"id":"conversational-ai","bgImage":"carousel-1.jpg","title":"Unleash the\\ntrue power of\\nConversational AI"},{"id":"channels","beforeImage":"banner-image.png","bgImage":"carousel-2.jpg","minHeight":270,"maxHeight":495,"title":"Connect\\nand converse","subtitle":"Engage with customers directly in their preferred communication channels"},{"id":"tools","bgImage":"carousel-3.jpg","beforeImage":"gett.png","minHeight":200,"maxHeight":270,"text":"We\u2019re researchers at heart, and LivePerson\u2019s tools helped us learn and automate more than we thought was possible.","author":{"name":"Yonina Ben Shimon","role":"Global Head of Customer Experience, Gett"}}]')},93:function(e,a,n){e.exports=n(158)}},[[93,1,2]]]);
//# sourceMappingURL=main.12ef596d.chunk.js.map