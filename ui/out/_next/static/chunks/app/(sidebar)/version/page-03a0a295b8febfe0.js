(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[793],{3828:function(e,t,n){Promise.resolve().then(n.bind(n,3379))},3379:function(e,t,n){"use strict";n.r(t);var r=n(1844),o=n(5784);let s=()=>{let[e,t]=(0,o.useState)([]),n=async()=>{let e=await fetch("/backend/actuator/info",{method:"GET",headers:{Accept:"*/*","Content-Type":"application/json"}}),n=await e.json();t(n.flowable.version)};return(0,o.useEffect)(()=>{n()},[]),(0,r.jsx)("div",{className:"container content has-text-centered",children:(0,r.jsxs)("h1",{className:"title is-5",children:["Flowable version - ",e]})})};t.default=s},9803:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(5784),o=Symbol.for("react.element"),s=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var r,i={},f=null,l=null;for(r in void 0!==n&&(f=""+n),void 0!==t.key&&(f=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:f,ref:l,props:i,_owner:a.current}}t.jsx=i,t.jsxs=i},1844:function(e,t,n){"use strict";e.exports=n(9803)}},function(e){e.O(0,[17,744],function(){return e(e.s=3828)}),_N_E=e.O()}]);