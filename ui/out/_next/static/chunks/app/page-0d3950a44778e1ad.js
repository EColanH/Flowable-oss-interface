(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6304:function(e,t,n){Promise.resolve().then(n.bind(n,542))},4926:function(){},9036:function(e){e.exports={main:"page_main__WunS6",description:"page_description__ihOGI",code:"page_code__6jdGX",grid:"page_grid__8s97H",card:"page_card__iAZT9",center:"page_center__diPtZ",logo:"page_logo__DgL_7",thirteen:"page_thirteen__DZ7AJ",rotate:"page_rotate__hFOw7",content:"page_content__9kT_h",vercelLogo:"page_vercelLogo__GI_o9"}},542:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n(1844),r=n(9237),i=n.n(r),o=n(5675),l=n.n(o),s=n(9036),c=n.n(s);function d(){let e=async()=>{try{let e=await fetch("/api/actuator/info",{method:"GET",headers:{Accept:"*/*","Content-Type":"application/json"}}),t=await e.json();console.log(t)}catch(n){console.log(n)}};return(0,a.jsxs)("main",{className:c().main,children:[(0,a.jsxs)("div",{className:c().description,children:[(0,a.jsxs)("p",{children:["Get started by editing\xa0",(0,a.jsx)("code",{className:c().code,children:"app/page.tsx"})]}),(0,a.jsx)("div",{children:(0,a.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["By"," ",(0,a.jsx)(l(),{src:"/vercel.svg",alt:"Vercel Logo",className:c().vercelLogo,width:100,height:24,priority:!0})]})})]}),(0,a.jsxs)("div",{className:c().center,children:[(0,a.jsx)(l(),{className:c().logo,src:"/next.svg",alt:"Next.js Logo",width:180,height:37,priority:!0}),(0,a.jsx)("div",{className:c().thirteen,children:(0,a.jsx)(l(),{src:"/thirteen.svg",alt:"13",width:40,height:31,priority:!0})}),(0,a.jsx)("div",{className:c().container,children:(0,a.jsx)("main",{className:c().main,children:(0,a.jsx)("button",{onClick:e,children:"Make API call"})})})]}),(0,a.jsxs)("div",{className:c().grid,children:[(0,a.jsxs)("a",{href:"https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",className:c().card,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:i().className,children:["Docs ",(0,a.jsx)("span",{children:"->"})]}),(0,a.jsx)("p",{className:i().className,children:"Find in-depth information about Next.js features and API."})]}),(0,a.jsxs)("a",{href:"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",className:c().card,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:i().className,children:["Templates ",(0,a.jsx)("span",{children:"->"})]}),(0,a.jsx)("p",{className:i().className,children:"Explore the Next.js 13 playground."})]}),(0,a.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",className:c().card,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:i().className,children:["Deploy ",(0,a.jsx)("span",{children:"->"})]}),(0,a.jsx)("p",{className:i().className,children:"Instantly deploy your Next.js site to a shareable URL with Vercel."})]})]})]})}n(4926)},30:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(6495).Z,r=n(2648).Z,i=n(1598).Z,o=n(7273).Z,l=i(n(5784)),s=r(n(5322)),c=n(9642),d=n(931),u=n(601);n(2437);var f=r(n(7112));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,n,r,i,o,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===n&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let l=!1,s=!1;r.current(a({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>l,isPropagationStopped:()=>s,persist:()=>{},preventDefault:()=>{l=!0,t.preventDefault()},stopPropagation:()=>{s=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}let _=l.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:r,widthInt:i,qualityInt:s,className:c,imgStyle:d,blurStyle:u,isLazy:f,fill:p,placeholder:m,loading:g,srcString:_,config:v,unoptimized:y,loader:x,onLoadRef:b,onLoadingCompleteRef:w,setBlurComplete:j,setShowAltText:S,onLoad:C,onError:E}=e,N=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=f?"lazy":g,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},N,n,{width:i,height:r,decoding:"async","data-nimg":p?"fill":"1",className:c,loading:g,style:a({},d,u),ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&h(e,_,m,b,w,j,y))},[_,m,b,w,j,E,y,t]),onLoad:e=>{let t=e.currentTarget;h(t,_,m,b,w,j,y)},onError:e=>{S(!0),"blur"===m&&j(!0),E&&E(e)}})))}),v=l.forwardRef((e,t)=>{let n,r;var i,{src:h,sizes:v,unoptimized:y=!1,priority:x=!1,loading:b,className:w,quality:j,width:S,height:C,fill:E,style:N,onLoad:O,onLoadingComplete:k,placeholder:I="empty",blurDataURL:P,layout:A,objectFit:z,objectPosition:L,lazyBoundary:M,lazyRoot:R}=e,D=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let T=l.useContext(u.ImageConfigContext),U=l.useMemo(()=>{let e=p||T||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return a({},e,{allSizes:t,deviceSizes:n})},[T]),Z=D,F=Z.loader||f.default;delete Z.loader;let B="__next_img_default"in F;if(B){if("custom"===U.loader)throw Error('Image with src "'.concat(h,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let G=F;F=e=>{let{config:t}=e,n=o(e,["config"]);return G(n)}}if(A){"fill"===A&&(E=!0);let W={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[A];W&&(N=a({},N,W));let V={responsive:"100vw",fill:"100vw"}[A];V&&!v&&(v=V)}let q="",H=g(S),$=g(C);if("object"==typeof(i=h)&&(m(i)||void 0!==i.src)){let J=m(h)?h.default:h;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(!J.height||!J.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)));if(n=J.blurWidth,r=J.blurHeight,P=P||J.blurDataURL,q=J.src,!E){if(H||$){if(H&&!$){let X=H/J.width;$=Math.round(J.height*X)}else if(!H&&$){let Y=$/J.height;H=Math.round(J.width*Y)}}else H=J.width,$=J.height}}let K=!x&&("lazy"===b||void 0===b);((h="string"==typeof h?h:q).startsWith("data:")||h.startsWith("blob:"))&&(y=!0,K=!1),U.unoptimized&&(y=!0),B&&h.endsWith(".svg")&&!U.dangerouslyAllowSVG&&(y=!0);let[Q,ee]=l.useState(!1),[et,en]=l.useState(!1),ea=g(j),er=Object.assign(E?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:L}:{},et?{}:{color:"transparent"},N),ei="blur"===I&&P&&!Q?{backgroundSize:er.objectFit||"cover",backgroundPosition:er.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:H,heightInt:$,blurWidth:n,blurHeight:r,blurDataURL:P}),'")')}:{},eo=function(e){let{config:t,src:n,unoptimized:a,width:r,quality:i,sizes:o,loader:l}=e;if(a)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,n){let{deviceSizes:a,allSizes:r}=e;if(n){let i=/(^|\s)(1?\d?\d)vw/g,o=[];for(let l;l=i.exec(n);l)o.push(parseInt(l[2]));if(o.length){let s=.01*Math.min(...o);return{widths:r.filter(e=>e>=a[0]*s),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:a,kind:"w"};let c=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:c,kind:"x"}}(t,r,o),d=s.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:s.map((e,a)=>"".concat(l({config:t,src:n,quality:i,width:e})," ").concat("w"===c?e:a+1).concat(c)).join(", "),src:l({config:t,src:n,quality:i,width:s[d]})}}({config:U,src:h,unoptimized:y,width:H,quality:ea,sizes:v,loader:F}),el=h,es={imageSrcSet:eo.srcSet,imageSizes:eo.sizes,crossOrigin:Z.crossOrigin},ec=l.useRef(O);l.useEffect(()=>{ec.current=O},[O]);let ed=l.useRef(k);l.useEffect(()=>{ed.current=k},[k]);let eu=a({isLazy:K,imgAttributes:eo,heightInt:$,widthInt:H,qualityInt:ea,className:w,imgStyle:er,blurStyle:ei,loading:b,config:U,fill:E,unoptimized:y,placeholder:I,loader:F,srcString:el,onLoadRef:ec,onLoadingCompleteRef:ed,setBlurComplete:ee,setShowAltText:en},Z);return l.default.createElement(l.default.Fragment,null,l.default.createElement(_,Object.assign({},eu,{ref:t})),x?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+eo.src+eo.srcSet+eo.sizes,rel:"preload",as:"image",href:eo.srcSet?void 0:eo.src},es))):null)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1697:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var a=(0,n(2648).Z)(n(5784));let r=a.default.createContext({});t.AmpStateContext=r},3996:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){let{ampFirst:e=!1,hybrid:t=!1,hasQuery:n=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e||t&&n}},5322:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=d,t.default=void 0;var a=n(6495).Z,r=n(2648).Z,i=(0,n(1598).Z)(n(5784)),o=r(n(9914)),l=n(1697),s=n(8385),c=n(3996);function d(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(2437);let f=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:n}=t;return e.reduce(u,[]).reverse().concat(d(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,a={};return r=>{let i=!0,o=!1;if(r.key&&"number"!=typeof r.key&&r.key.indexOf("$")>0){o=!0;let l=r.key.slice(r.key.indexOf("$")+1);e.has(l)?i=!1:e.add(l)}switch(r.type){case"title":case"base":t.has(r.type)?i=!1:t.add(r.type);break;case"meta":for(let s=0,c=f.length;s<c;s++){let d=f[s];if(r.props.hasOwnProperty(d)){if("charSet"===d)n.has(d)?i=!1:n.add(d);else{let u=r.props[d],p=a[d]||new Set;("name"!==d||!o)&&p.has(u)?i=!1:(p.add(u),a[d]=p)}}}}return i}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let o=a({},e.props||{});return o["data-href"]=o.href,o.href=void 0,o["data-optimized-fonts"]=!0,i.default.cloneElement(e,o)}return i.default.cloneElement(e,{key:r})})}t.default=function(e){let{children:t}=e,n=i.useContext(l.AmpStateContext),a=i.useContext(s.HeadManagerContext);return i.default.createElement(o.default,{reduceComponentsToState:p,headManager:a,inAmpMode:c.isInAmpMode(n)},t)},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9642:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:a,blurHeight:r,blurDataURL:i}=e,o=a||t,l=r||n,s=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return o&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(o," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(a&&r?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(i,"'/%3E%3C/svg%3E")}},601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ImageConfigContext=void 0;var a=(0,n(2648).Z)(n(5784)),r=n(931);let i=a.default.createContext(r.imageConfigDefault);t.ImageConfigContext=i},931:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0,t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"],t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",remotePatterns:[],unoptimized:!1}},7112:function(e,t){"use strict";function n(e){let{config:t,src:n,width:a,quality:r}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(a,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},9914:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{headManager:t,reduceComponentsToState:n}=e;function l(){if(t&&t.mountedInstances){let r=a.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(r,e))}}if(r){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),l()}return i(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),i(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null};var a=(0,n(1598).Z)(n(5784));let r=!1,i=r?()=>{}:a.useLayoutEffect,o=r?()=>{}:a.useEffect},2437:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.warnOnce=void 0;let n=e=>{};t.warnOnce=n},9237:function(e){e.exports={style:{fontFamily:"'__Inter_9c9965', '__Inter_Fallback_9c9965'",fontStyle:"normal"},className:"__className_9c9965"}},9803:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=n(5784),r=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var a,s={},c=null,d=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,a)&&!l.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:r,type:e,key:c,ref:d,props:s,_owner:o.current}}t.jsx=s,t.jsxs=s},1844:function(e,t,n){"use strict";e.exports=n(9803)},5675:function(e,t,n){e.exports=n(30)}},function(e){e.O(0,[728,17,744],function(){return e(e.s=6304)}),_N_E=e.O()}]);