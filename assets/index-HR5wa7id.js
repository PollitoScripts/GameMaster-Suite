(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function nE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var rv={exports:{}},Wa={},iv={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oo=Symbol.for("react.element"),rE=Symbol.for("react.portal"),iE=Symbol.for("react.fragment"),sE=Symbol.for("react.strict_mode"),oE=Symbol.for("react.profiler"),lE=Symbol.for("react.provider"),aE=Symbol.for("react.context"),uE=Symbol.for("react.forward_ref"),cE=Symbol.for("react.suspense"),hE=Symbol.for("react.memo"),dE=Symbol.for("react.lazy"),Ap=Symbol.iterator;function fE(t){return t===null||typeof t!="object"?null:(t=Ap&&t[Ap]||t["@@iterator"],typeof t=="function"?t:null)}var sv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ov=Object.assign,lv={};function Xi(t,e,n){this.props=t,this.context=e,this.refs=lv,this.updater=n||sv}Xi.prototype.isReactComponent={};Xi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function av(){}av.prototype=Xi.prototype;function Jh(t,e,n){this.props=t,this.context=e,this.refs=lv,this.updater=n||sv}var Zh=Jh.prototype=new av;Zh.constructor=Jh;ov(Zh,Xi.prototype);Zh.isPureReactComponent=!0;var Op=Array.isArray,uv=Object.prototype.hasOwnProperty,ed={current:null},cv={key:!0,ref:!0,__self:!0,__source:!0};function hv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)uv.call(e,r)&&!cv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),h=0;h<a;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Oo,type:t,key:s,ref:o,props:i,_owner:ed.current}}function pE(t,e){return{$$typeof:Oo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function td(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oo}function gE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dp=/\/+/g;function Gu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?gE(""+t.key):e.toString(36)}function Al(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Oo:case rE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Gu(o,0):r,Op(i)?(n="",t!=null&&(n=t.replace(Dp,"$&/")+"/"),Al(i,e,n,"",function(h){return h})):i!=null&&(td(i)&&(i=pE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Dp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Op(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Gu(s,a);o+=Al(s,e,n,u,i)}else if(u=fE(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Gu(s,a++),o+=Al(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ul(t,e,n){if(t==null)return t;var r=[],i=0;return Al(t,r,"","",function(s){return e.call(n,s,i++)}),r}function mE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ht={current:null},Ol={transition:null},vE={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:Ol,ReactCurrentOwner:ed};function dv(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:ul,forEach:function(t,e,n){ul(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ul(t,function(){e++}),e},toArray:function(t){return ul(t,function(e){return e})||[]},only:function(t){if(!td(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=Xi;ie.Fragment=iE;ie.Profiler=oE;ie.PureComponent=Jh;ie.StrictMode=sE;ie.Suspense=cE;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vE;ie.act=dv;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ov({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ed.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)uv.call(e,u)&&!cv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var h=0;h<u;h++)a[h]=arguments[h+2];r.children=a}return{$$typeof:Oo,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:aE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:lE,_context:t},t.Consumer=t};ie.createElement=hv;ie.createFactory=function(t){var e=hv.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:uE,render:t}};ie.isValidElement=td;ie.lazy=function(t){return{$$typeof:dE,_payload:{_status:-1,_result:t},_init:mE}};ie.memo=function(t,e){return{$$typeof:hE,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=Ol.transition;Ol.transition={};try{t()}finally{Ol.transition=e}};ie.unstable_act=dv;ie.useCallback=function(t,e){return ht.current.useCallback(t,e)};ie.useContext=function(t){return ht.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return ht.current.useDeferredValue(t)};ie.useEffect=function(t,e){return ht.current.useEffect(t,e)};ie.useId=function(){return ht.current.useId()};ie.useImperativeHandle=function(t,e,n){return ht.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return ht.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return ht.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return ht.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return ht.current.useReducer(t,e,n)};ie.useRef=function(t){return ht.current.useRef(t)};ie.useState=function(t){return ht.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return ht.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return ht.current.useTransition()};ie.version="18.3.1";iv.exports=ie;var ce=iv.exports;const _E=nE(ce);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yE=ce,wE=Symbol.for("react.element"),EE=Symbol.for("react.fragment"),SE=Object.prototype.hasOwnProperty,CE=yE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,IE={key:!0,ref:!0,__self:!0,__source:!0};function fv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)SE.call(e,r)&&!IE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:wE,type:t,key:s,ref:o,props:i,_owner:CE.current}}Wa.Fragment=EE;Wa.jsx=fv;Wa.jsxs=fv;rv.exports=Wa;var F=rv.exports,bc={},pv={exports:{}},Ot={},gv={exports:{}},mv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,Y){var N=W.length;W.push(Y);e:for(;0<N;){var T=N-1>>>1,B=W[T];if(0<i(B,Y))W[T]=Y,W[N]=B,N=T;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var Y=W[0],N=W.pop();if(N!==Y){W[0]=N;e:for(var T=0,B=W.length,H=B>>>1;T<H;){var K=2*(T+1)-1,q=W[K],Q=K+1,G=W[Q];if(0>i(q,N))Q<B&&0>i(G,q)?(W[T]=G,W[Q]=N,T=Q):(W[T]=q,W[K]=N,T=K);else if(Q<B&&0>i(G,N))W[T]=G,W[Q]=N,T=Q;else break e}}return Y}function i(W,Y){var N=W.sortIndex-Y.sortIndex;return N!==0?N:W.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],h=[],g=1,f=null,m=3,R=!1,x=!1,O=!1,L=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(W){for(var Y=n(h);Y!==null;){if(Y.callback===null)r(h);else if(Y.startTime<=W)r(h),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(h)}}function D(W){if(O=!1,I(W),!x)if(n(u)!==null)x=!0,Gt(b);else{var Y=n(h);Y!==null&&pt(D,Y.startTime-W)}}function b(W,Y){x=!1,O&&(O=!1,k(v),v=-1),R=!0;var N=m;try{for(I(Y),f=n(u);f!==null&&(!(f.expirationTime>Y)||W&&!C());){var T=f.callback;if(typeof T=="function"){f.callback=null,m=f.priorityLevel;var B=T(f.expirationTime<=Y);Y=t.unstable_now(),typeof B=="function"?f.callback=B:f===n(u)&&r(u),I(Y)}else r(u);f=n(u)}if(f!==null)var H=!0;else{var K=n(h);K!==null&&pt(D,K.startTime-Y),H=!1}return H}finally{f=null,m=N,R=!1}}var U=!1,_=null,v=-1,y=5,E=-1;function C(){return!(t.unstable_now()-E<y)}function P(){if(_!==null){var W=t.unstable_now();E=W;var Y=!0;try{Y=_(!0,W)}finally{Y?S():(U=!1,_=null)}}else U=!1}var S;if(typeof w=="function")S=function(){w(P)};else if(typeof MessageChannel<"u"){var Ie=new MessageChannel,ft=Ie.port2;Ie.port1.onmessage=P,S=function(){ft.postMessage(null)}}else S=function(){L(P,0)};function Gt(W){_=W,U||(U=!0,S())}function pt(W,Y){v=L(function(){W(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){x||R||(x=!0,Gt(b))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(m){case 1:case 2:case 3:var Y=3;break;default:Y=m}var N=m;m=Y;try{return W()}finally{m=N}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,Y){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var N=m;m=W;try{return Y()}finally{m=N}},t.unstable_scheduleCallback=function(W,Y,N){var T=t.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?T+N:T):N=T,W){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=N+B,W={id:g++,callback:Y,priorityLevel:W,startTime:N,expirationTime:B,sortIndex:-1},N>T?(W.sortIndex=N,e(h,W),n(u)===null&&W===n(h)&&(O?(k(v),v=-1):O=!0,pt(D,N-T))):(W.sortIndex=B,e(u,W),x||R||(x=!0,Gt(b))),W},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(W){var Y=m;return function(){var N=m;m=Y;try{return W.apply(this,arguments)}finally{m=N}}}})(mv);gv.exports=mv;var TE=gv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kE=ce,At=TE;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vv=new Set,to={};function Jr(t,e){Ui(t,e),Ui(t+"Capture",e)}function Ui(t,e){for(to[t]=e,t=0;t<e.length;t++)vv.add(e[t])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fc=Object.prototype.hasOwnProperty,xE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mp={},Lp={};function NE(t){return Fc.call(Lp,t)?!0:Fc.call(Mp,t)?!1:xE.test(t)?Lp[t]=!0:(Mp[t]=!0,!1)}function RE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function PE(t,e,n,r){if(e===null||typeof e>"u"||RE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xe[t]=new dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xe[e]=new dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xe[t]=new dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xe[t]=new dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xe[t]=new dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xe[t]=new dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xe[t]=new dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xe[t]=new dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xe[t]=new dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var nd=/[\-:]([a-z])/g;function rd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nd,rd);Xe[e]=new dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nd,rd);Xe[e]=new dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nd,rd);Xe[e]=new dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xe[t]=new dt(t,1,!1,t.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xe[t]=new dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function id(t,e,n,r){var i=Xe.hasOwnProperty(e)?Xe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(PE(e,n,i,r)&&(n=null),r||i===null?NE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var zn=kE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cl=Symbol.for("react.element"),fi=Symbol.for("react.portal"),pi=Symbol.for("react.fragment"),sd=Symbol.for("react.strict_mode"),Uc=Symbol.for("react.profiler"),_v=Symbol.for("react.provider"),yv=Symbol.for("react.context"),od=Symbol.for("react.forward_ref"),jc=Symbol.for("react.suspense"),zc=Symbol.for("react.suspense_list"),ld=Symbol.for("react.memo"),qn=Symbol.for("react.lazy"),wv=Symbol.for("react.offscreen"),bp=Symbol.iterator;function Ss(t){return t===null||typeof t!="object"?null:(t=bp&&t[bp]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Object.assign,Ku;function Ms(t){if(Ku===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ku=e&&e[1]||""}return`
`+Ku+t}var qu=!1;function Qu(t,e){if(!t||qu)return"";qu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{qu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ms(t):""}function AE(t){switch(t.tag){case 5:return Ms(t.type);case 16:return Ms("Lazy");case 13:return Ms("Suspense");case 19:return Ms("SuspenseList");case 0:case 2:case 15:return t=Qu(t.type,!1),t;case 11:return t=Qu(t.type.render,!1),t;case 1:return t=Qu(t.type,!0),t;default:return""}}function Bc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case pi:return"Fragment";case fi:return"Portal";case Uc:return"Profiler";case sd:return"StrictMode";case jc:return"Suspense";case zc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case yv:return(t.displayName||"Context")+".Consumer";case _v:return(t._context.displayName||"Context")+".Provider";case od:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ld:return e=t.displayName||null,e!==null?e:Bc(t.type)||"Memo";case qn:e=t._payload,t=t._init;try{return Bc(t(e))}catch{}}return null}function OE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bc(e);case 8:return e===sd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ev(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function DE(t){var e=Ev(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function hl(t){t._valueTracker||(t._valueTracker=DE(t))}function Sv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ev(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ql(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vc(t,e){var n=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Fp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=_r(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Cv(t,e){e=e.checked,e!=null&&id(t,"checked",e,!1)}function Wc(t,e){Cv(t,e);var n=_r(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Hc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Hc(t,e.type,_r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Up(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Hc(t,e,n){(e!=="number"||ql(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ls=Array.isArray;function xi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+_r(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function $c(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(Ls(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_r(n)}}function Iv(t,e){var n=_r(e.value),r=_r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function zp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Tv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Tv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var dl,kv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(dl=dl||document.createElement("div"),dl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=dl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function no(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Us={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ME=["Webkit","ms","Moz","O"];Object.keys(Us).forEach(function(t){ME.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Us[e]=Us[t]})});function xv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Us.hasOwnProperty(t)&&Us[t]?(""+e).trim():e+"px"}function Nv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var LE=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kc(t,e){if(e){if(LE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function qc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qc=null;function ad(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yc=null,Ni=null,Ri=null;function Bp(t){if(t=Lo(t)){if(typeof Yc!="function")throw Error(j(280));var e=t.stateNode;e&&(e=qa(e),Yc(t.stateNode,t.type,e))}}function Rv(t){Ni?Ri?Ri.push(t):Ri=[t]:Ni=t}function Pv(){if(Ni){var t=Ni,e=Ri;if(Ri=Ni=null,Bp(t),e)for(t=0;t<e.length;t++)Bp(e[t])}}function Av(t,e){return t(e)}function Ov(){}var Yu=!1;function Dv(t,e,n){if(Yu)return t(e,n);Yu=!0;try{return Av(t,e,n)}finally{Yu=!1,(Ni!==null||Ri!==null)&&(Ov(),Pv())}}function ro(t,e){var n=t.stateNode;if(n===null)return null;var r=qa(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var Xc=!1;if(On)try{var Cs={};Object.defineProperty(Cs,"passive",{get:function(){Xc=!0}}),window.addEventListener("test",Cs,Cs),window.removeEventListener("test",Cs,Cs)}catch{Xc=!1}function bE(t,e,n,r,i,s,o,a,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(g){this.onError(g)}}var js=!1,Ql=null,Yl=!1,Jc=null,FE={onError:function(t){js=!0,Ql=t}};function UE(t,e,n,r,i,s,o,a,u){js=!1,Ql=null,bE.apply(FE,arguments)}function jE(t,e,n,r,i,s,o,a,u){if(UE.apply(this,arguments),js){if(js){var h=Ql;js=!1,Ql=null}else throw Error(j(198));Yl||(Yl=!0,Jc=h)}}function Zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Mv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vp(t){if(Zr(t)!==t)throw Error(j(188))}function zE(t){var e=t.alternate;if(!e){if(e=Zr(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Vp(i),t;if(s===r)return Vp(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function Lv(t){return t=zE(t),t!==null?bv(t):null}function bv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=bv(t);if(e!==null)return e;t=t.sibling}return null}var Fv=At.unstable_scheduleCallback,Wp=At.unstable_cancelCallback,BE=At.unstable_shouldYield,VE=At.unstable_requestPaint,Me=At.unstable_now,WE=At.unstable_getCurrentPriorityLevel,ud=At.unstable_ImmediatePriority,Uv=At.unstable_UserBlockingPriority,Xl=At.unstable_NormalPriority,HE=At.unstable_LowPriority,jv=At.unstable_IdlePriority,Ha=null,dn=null;function $E(t){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(Ha,t,void 0,(t.current.flags&128)===128)}catch{}}var nn=Math.clz32?Math.clz32:qE,GE=Math.log,KE=Math.LN2;function qE(t){return t>>>=0,t===0?32:31-(GE(t)/KE|0)|0}var fl=64,pl=4194304;function bs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=bs(a):(s&=o,s!==0&&(r=bs(s)))}else o=n&~i,o!==0?r=bs(o):s!==0&&(r=bs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-nn(e),i=1<<n,r|=t[n],e&=~i;return r}function QE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function YE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-nn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=QE(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Zc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function zv(){var t=fl;return fl<<=1,!(fl&4194240)&&(fl=64),t}function Xu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Do(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-nn(e),t[e]=n}function XE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-nn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function cd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-nn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ge=0;function Bv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Vv,hd,Wv,Hv,$v,eh=!1,gl=[],sr=null,or=null,lr=null,io=new Map,so=new Map,Yn=[],JE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hp(t,e){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":io.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":so.delete(e.pointerId)}}function Is(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Lo(e),e!==null&&hd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ZE(t,e,n,r,i){switch(e){case"focusin":return sr=Is(sr,t,e,n,r,i),!0;case"dragenter":return or=Is(or,t,e,n,r,i),!0;case"mouseover":return lr=Is(lr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return io.set(s,Is(io.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,so.set(s,Is(so.get(s)||null,t,e,n,r,i)),!0}return!1}function Gv(t){var e=br(t.target);if(e!==null){var n=Zr(e);if(n!==null){if(e=n.tag,e===13){if(e=Mv(n),e!==null){t.blockedOn=e,$v(t.priority,function(){Wv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Dl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=th(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Qc=r,n.target.dispatchEvent(r),Qc=null}else return e=Lo(n),e!==null&&hd(e),t.blockedOn=n,!1;e.shift()}return!0}function $p(t,e,n){Dl(t)&&n.delete(e)}function eS(){eh=!1,sr!==null&&Dl(sr)&&(sr=null),or!==null&&Dl(or)&&(or=null),lr!==null&&Dl(lr)&&(lr=null),io.forEach($p),so.forEach($p)}function Ts(t,e){t.blockedOn===e&&(t.blockedOn=null,eh||(eh=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,eS)))}function oo(t){function e(i){return Ts(i,t)}if(0<gl.length){Ts(gl[0],t);for(var n=1;n<gl.length;n++){var r=gl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(sr!==null&&Ts(sr,t),or!==null&&Ts(or,t),lr!==null&&Ts(lr,t),io.forEach(e),so.forEach(e),n=0;n<Yn.length;n++)r=Yn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Yn.length&&(n=Yn[0],n.blockedOn===null);)Gv(n),n.blockedOn===null&&Yn.shift()}var Pi=zn.ReactCurrentBatchConfig,Zl=!0;function tS(t,e,n,r){var i=ge,s=Pi.transition;Pi.transition=null;try{ge=1,dd(t,e,n,r)}finally{ge=i,Pi.transition=s}}function nS(t,e,n,r){var i=ge,s=Pi.transition;Pi.transition=null;try{ge=4,dd(t,e,n,r)}finally{ge=i,Pi.transition=s}}function dd(t,e,n,r){if(Zl){var i=th(t,e,n,r);if(i===null)lc(t,e,r,ea,n),Hp(t,r);else if(ZE(i,t,e,n,r))r.stopPropagation();else if(Hp(t,r),e&4&&-1<JE.indexOf(t)){for(;i!==null;){var s=Lo(i);if(s!==null&&Vv(s),s=th(t,e,n,r),s===null&&lc(t,e,r,ea,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else lc(t,e,r,null,n)}}var ea=null;function th(t,e,n,r){if(ea=null,t=ad(r),t=br(t),t!==null)if(e=Zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Mv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ea=t,null}function Kv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(WE()){case ud:return 1;case Uv:return 4;case Xl:case HE:return 16;case jv:return 536870912;default:return 16}default:return 16}}var nr=null,fd=null,Ml=null;function qv(){if(Ml)return Ml;var t,e=fd,n=e.length,r,i="value"in nr?nr.value:nr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ml=i.slice(t,1<r?1-r:void 0)}function Ll(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ml(){return!0}function Gp(){return!1}function Dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ml:Gp,this.isPropagationStopped=Gp,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),e}var Ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pd=Dt(Ji),Mo=Ne({},Ji,{view:0,detail:0}),rS=Dt(Mo),Ju,Zu,ks,$a=Ne({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ks&&(ks&&t.type==="mousemove"?(Ju=t.screenX-ks.screenX,Zu=t.screenY-ks.screenY):Zu=Ju=0,ks=t),Ju)},movementY:function(t){return"movementY"in t?t.movementY:Zu}}),Kp=Dt($a),iS=Ne({},$a,{dataTransfer:0}),sS=Dt(iS),oS=Ne({},Mo,{relatedTarget:0}),ec=Dt(oS),lS=Ne({},Ji,{animationName:0,elapsedTime:0,pseudoElement:0}),aS=Dt(lS),uS=Ne({},Ji,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cS=Dt(uS),hS=Ne({},Ji,{data:0}),qp=Dt(hS),dS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=pS[t])?!!e[t]:!1}function gd(){return gS}var mS=Ne({},Mo,{key:function(t){if(t.key){var e=dS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gd,charCode:function(t){return t.type==="keypress"?Ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vS=Dt(mS),_S=Ne({},$a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qp=Dt(_S),yS=Ne({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gd}),wS=Dt(yS),ES=Ne({},Ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),SS=Dt(ES),CS=Ne({},$a,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),IS=Dt(CS),TS=[9,13,27,32],md=On&&"CompositionEvent"in window,zs=null;On&&"documentMode"in document&&(zs=document.documentMode);var kS=On&&"TextEvent"in window&&!zs,Qv=On&&(!md||zs&&8<zs&&11>=zs),Yp=" ",Xp=!1;function Yv(t,e){switch(t){case"keyup":return TS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gi=!1;function xS(t,e){switch(t){case"compositionend":return Xv(e);case"keypress":return e.which!==32?null:(Xp=!0,Yp);case"textInput":return t=e.data,t===Yp&&Xp?null:t;default:return null}}function NS(t,e){if(gi)return t==="compositionend"||!md&&Yv(t,e)?(t=qv(),Ml=fd=nr=null,gi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Qv&&e.locale!=="ko"?null:e.data;default:return null}}var RS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!RS[t.type]:e==="textarea"}function Jv(t,e,n,r){Rv(r),e=ta(e,"onChange"),0<e.length&&(n=new pd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Bs=null,lo=null;function PS(t){u_(t,0)}function Ga(t){var e=_i(t);if(Sv(e))return t}function AS(t,e){if(t==="change")return e}var Zv=!1;if(On){var tc;if(On){var nc="oninput"in document;if(!nc){var Zp=document.createElement("div");Zp.setAttribute("oninput","return;"),nc=typeof Zp.oninput=="function"}tc=nc}else tc=!1;Zv=tc&&(!document.documentMode||9<document.documentMode)}function eg(){Bs&&(Bs.detachEvent("onpropertychange",e_),lo=Bs=null)}function e_(t){if(t.propertyName==="value"&&Ga(lo)){var e=[];Jv(e,lo,t,ad(t)),Dv(PS,e)}}function OS(t,e,n){t==="focusin"?(eg(),Bs=e,lo=n,Bs.attachEvent("onpropertychange",e_)):t==="focusout"&&eg()}function DS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ga(lo)}function MS(t,e){if(t==="click")return Ga(e)}function LS(t,e){if(t==="input"||t==="change")return Ga(e)}function bS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var on=typeof Object.is=="function"?Object.is:bS;function ao(t,e){if(on(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Fc.call(e,i)||!on(t[i],e[i]))return!1}return!0}function tg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ng(t,e){var n=tg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tg(n)}}function t_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?t_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function n_(){for(var t=window,e=ql();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ql(t.document)}return e}function vd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function FS(t){var e=n_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&t_(n.ownerDocument.documentElement,n)){if(r!==null&&vd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ng(n,s);var o=ng(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var US=On&&"documentMode"in document&&11>=document.documentMode,mi=null,nh=null,Vs=null,rh=!1;function rg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rh||mi==null||mi!==ql(r)||(r=mi,"selectionStart"in r&&vd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vs&&ao(Vs,r)||(Vs=r,r=ta(nh,"onSelect"),0<r.length&&(e=new pd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=mi)))}function vl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vi={animationend:vl("Animation","AnimationEnd"),animationiteration:vl("Animation","AnimationIteration"),animationstart:vl("Animation","AnimationStart"),transitionend:vl("Transition","TransitionEnd")},rc={},r_={};On&&(r_=document.createElement("div").style,"AnimationEvent"in window||(delete vi.animationend.animation,delete vi.animationiteration.animation,delete vi.animationstart.animation),"TransitionEvent"in window||delete vi.transitionend.transition);function Ka(t){if(rc[t])return rc[t];if(!vi[t])return t;var e=vi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in r_)return rc[t]=e[n];return t}var i_=Ka("animationend"),s_=Ka("animationiteration"),o_=Ka("animationstart"),l_=Ka("transitionend"),a_=new Map,ig="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(t,e){a_.set(t,e),Jr(e,[t])}for(var ic=0;ic<ig.length;ic++){var sc=ig[ic],jS=sc.toLowerCase(),zS=sc[0].toUpperCase()+sc.slice(1);Tr(jS,"on"+zS)}Tr(i_,"onAnimationEnd");Tr(s_,"onAnimationIteration");Tr(o_,"onAnimationStart");Tr("dblclick","onDoubleClick");Tr("focusin","onFocus");Tr("focusout","onBlur");Tr(l_,"onTransitionEnd");Ui("onMouseEnter",["mouseout","mouseover"]);Ui("onMouseLeave",["mouseout","mouseover"]);Ui("onPointerEnter",["pointerout","pointerover"]);Ui("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fs));function sg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,jE(r,e,void 0,t),t.currentTarget=null}function u_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,h=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;sg(i,a,h),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,h=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;sg(i,a,h),s=u}}}if(Yl)throw t=Jc,Yl=!1,Jc=null,t}function Se(t,e){var n=e[ah];n===void 0&&(n=e[ah]=new Set);var r=t+"__bubble";n.has(r)||(c_(e,t,2,!1),n.add(r))}function oc(t,e,n){var r=0;e&&(r|=4),c_(n,t,r,e)}var _l="_reactListening"+Math.random().toString(36).slice(2);function uo(t){if(!t[_l]){t[_l]=!0,vv.forEach(function(n){n!=="selectionchange"&&(BS.has(n)||oc(n,!1,t),oc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_l]||(e[_l]=!0,oc("selectionchange",!1,e))}}function c_(t,e,n,r){switch(Kv(e)){case 1:var i=tS;break;case 4:i=nS;break;default:i=dd}n=i.bind(null,e,n,t),i=void 0,!Xc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function lc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=br(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Dv(function(){var h=s,g=ad(n),f=[];e:{var m=a_.get(t);if(m!==void 0){var R=pd,x=t;switch(t){case"keypress":if(Ll(n)===0)break e;case"keydown":case"keyup":R=vS;break;case"focusin":x="focus",R=ec;break;case"focusout":x="blur",R=ec;break;case"beforeblur":case"afterblur":R=ec;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=sS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=wS;break;case i_:case s_:case o_:R=aS;break;case l_:R=SS;break;case"scroll":R=rS;break;case"wheel":R=IS;break;case"copy":case"cut":case"paste":R=cS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Qp}var O=(e&4)!==0,L=!O&&t==="scroll",k=O?m!==null?m+"Capture":null:m;O=[];for(var w=h,I;w!==null;){I=w;var D=I.stateNode;if(I.tag===5&&D!==null&&(I=D,k!==null&&(D=ro(w,k),D!=null&&O.push(co(w,D,I)))),L)break;w=w.return}0<O.length&&(m=new R(m,x,null,n,g),f.push({event:m,listeners:O}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",m&&n!==Qc&&(x=n.relatedTarget||n.fromElement)&&(br(x)||x[Dn]))break e;if((R||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,R?(x=n.relatedTarget||n.toElement,R=h,x=x?br(x):null,x!==null&&(L=Zr(x),x!==L||x.tag!==5&&x.tag!==6)&&(x=null)):(R=null,x=h),R!==x)){if(O=Kp,D="onMouseLeave",k="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(O=Qp,D="onPointerLeave",k="onPointerEnter",w="pointer"),L=R==null?m:_i(R),I=x==null?m:_i(x),m=new O(D,w+"leave",R,n,g),m.target=L,m.relatedTarget=I,D=null,br(g)===h&&(O=new O(k,w+"enter",x,n,g),O.target=I,O.relatedTarget=L,D=O),L=D,R&&x)t:{for(O=R,k=x,w=0,I=O;I;I=ci(I))w++;for(I=0,D=k;D;D=ci(D))I++;for(;0<w-I;)O=ci(O),w--;for(;0<I-w;)k=ci(k),I--;for(;w--;){if(O===k||k!==null&&O===k.alternate)break t;O=ci(O),k=ci(k)}O=null}else O=null;R!==null&&og(f,m,R,O,!1),x!==null&&L!==null&&og(f,L,x,O,!0)}}e:{if(m=h?_i(h):window,R=m.nodeName&&m.nodeName.toLowerCase(),R==="select"||R==="input"&&m.type==="file")var b=AS;else if(Jp(m))if(Zv)b=LS;else{b=DS;var U=OS}else(R=m.nodeName)&&R.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(b=MS);if(b&&(b=b(t,h))){Jv(f,b,n,g);break e}U&&U(t,m,h),t==="focusout"&&(U=m._wrapperState)&&U.controlled&&m.type==="number"&&Hc(m,"number",m.value)}switch(U=h?_i(h):window,t){case"focusin":(Jp(U)||U.contentEditable==="true")&&(mi=U,nh=h,Vs=null);break;case"focusout":Vs=nh=mi=null;break;case"mousedown":rh=!0;break;case"contextmenu":case"mouseup":case"dragend":rh=!1,rg(f,n,g);break;case"selectionchange":if(US)break;case"keydown":case"keyup":rg(f,n,g)}var _;if(md)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else gi?Yv(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(Qv&&n.locale!=="ko"&&(gi||v!=="onCompositionStart"?v==="onCompositionEnd"&&gi&&(_=qv()):(nr=g,fd="value"in nr?nr.value:nr.textContent,gi=!0)),U=ta(h,v),0<U.length&&(v=new qp(v,t,null,n,g),f.push({event:v,listeners:U}),_?v.data=_:(_=Xv(n),_!==null&&(v.data=_)))),(_=kS?xS(t,n):NS(t,n))&&(h=ta(h,"onBeforeInput"),0<h.length&&(g=new qp("onBeforeInput","beforeinput",null,n,g),f.push({event:g,listeners:h}),g.data=_))}u_(f,e)})}function co(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ta(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ro(t,n),s!=null&&r.unshift(co(t,s,i)),s=ro(t,e),s!=null&&r.push(co(t,s,i))),t=t.return}return r}function ci(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function og(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,h=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&h!==null&&(a=h,i?(u=ro(n,s),u!=null&&o.unshift(co(n,u,a))):i||(u=ro(n,s),u!=null&&o.push(co(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var VS=/\r\n?/g,WS=/\u0000|\uFFFD/g;function lg(t){return(typeof t=="string"?t:""+t).replace(VS,`
`).replace(WS,"")}function yl(t,e,n){if(e=lg(e),lg(t)!==e&&n)throw Error(j(425))}function na(){}var ih=null,sh=null;function oh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var lh=typeof setTimeout=="function"?setTimeout:void 0,HS=typeof clearTimeout=="function"?clearTimeout:void 0,ag=typeof Promise=="function"?Promise:void 0,$S=typeof queueMicrotask=="function"?queueMicrotask:typeof ag<"u"?function(t){return ag.resolve(null).then(t).catch(GS)}:lh;function GS(t){setTimeout(function(){throw t})}function ac(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),oo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);oo(e)}function ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ug(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zi=Math.random().toString(36).slice(2),hn="__reactFiber$"+Zi,ho="__reactProps$"+Zi,Dn="__reactContainer$"+Zi,ah="__reactEvents$"+Zi,KS="__reactListeners$"+Zi,qS="__reactHandles$"+Zi;function br(t){var e=t[hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Dn]||n[hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ug(t);t!==null;){if(n=t[hn])return n;t=ug(t)}return e}t=n,n=t.parentNode}return null}function Lo(t){return t=t[hn]||t[Dn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _i(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function qa(t){return t[ho]||null}var uh=[],yi=-1;function kr(t){return{current:t}}function Ce(t){0>yi||(t.current=uh[yi],uh[yi]=null,yi--)}function we(t,e){yi++,uh[yi]=t.current,t.current=e}var yr={},it=kr(yr),Ct=kr(!1),Vr=yr;function ji(t,e){var n=t.type.contextTypes;if(!n)return yr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function It(t){return t=t.childContextTypes,t!=null}function ra(){Ce(Ct),Ce(it)}function cg(t,e,n){if(it.current!==yr)throw Error(j(168));we(it,e),we(Ct,n)}function h_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,OE(t)||"Unknown",i));return Ne({},n,r)}function ia(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yr,Vr=it.current,we(it,t),we(Ct,Ct.current),!0}function hg(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=h_(t,e,Vr),r.__reactInternalMemoizedMergedChildContext=t,Ce(Ct),Ce(it),we(it,t)):Ce(Ct),we(Ct,n)}var Sn=null,Qa=!1,uc=!1;function d_(t){Sn===null?Sn=[t]:Sn.push(t)}function QS(t){Qa=!0,d_(t)}function xr(){if(!uc&&Sn!==null){uc=!0;var t=0,e=ge;try{var n=Sn;for(ge=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Sn=null,Qa=!1}catch(i){throw Sn!==null&&(Sn=Sn.slice(t+1)),Fv(ud,xr),i}finally{ge=e,uc=!1}}return null}var wi=[],Ei=0,sa=null,oa=0,Ut=[],jt=0,Wr=null,Cn=1,In="";function Or(t,e){wi[Ei++]=oa,wi[Ei++]=sa,sa=t,oa=e}function f_(t,e,n){Ut[jt++]=Cn,Ut[jt++]=In,Ut[jt++]=Wr,Wr=t;var r=Cn;t=In;var i=32-nn(r)-1;r&=~(1<<i),n+=1;var s=32-nn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Cn=1<<32-nn(e)+i|n<<i|r,In=s+t}else Cn=1<<s|n<<i|r,In=t}function _d(t){t.return!==null&&(Or(t,1),f_(t,1,0))}function yd(t){for(;t===sa;)sa=wi[--Ei],wi[Ei]=null,oa=wi[--Ei],wi[Ei]=null;for(;t===Wr;)Wr=Ut[--jt],Ut[jt]=null,In=Ut[--jt],Ut[jt]=null,Cn=Ut[--jt],Ut[jt]=null}var Pt=null,Rt=null,Te=!1,Jt=null;function p_(t,e){var n=zt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function dg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pt=t,Rt=ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pt=t,Rt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wr!==null?{id:Cn,overflow:In}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=zt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pt=t,Rt=null,!0):!1;default:return!1}}function ch(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hh(t){if(Te){var e=Rt;if(e){var n=e;if(!dg(t,e)){if(ch(t))throw Error(j(418));e=ar(n.nextSibling);var r=Pt;e&&dg(t,e)?p_(r,n):(t.flags=t.flags&-4097|2,Te=!1,Pt=t)}}else{if(ch(t))throw Error(j(418));t.flags=t.flags&-4097|2,Te=!1,Pt=t}}}function fg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pt=t}function wl(t){if(t!==Pt)return!1;if(!Te)return fg(t),Te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!oh(t.type,t.memoizedProps)),e&&(e=Rt)){if(ch(t))throw g_(),Error(j(418));for(;e;)p_(t,e),e=ar(e.nextSibling)}if(fg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rt=ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rt=null}}else Rt=Pt?ar(t.stateNode.nextSibling):null;return!0}function g_(){for(var t=Rt;t;)t=ar(t.nextSibling)}function zi(){Rt=Pt=null,Te=!1}function wd(t){Jt===null?Jt=[t]:Jt.push(t)}var YS=zn.ReactCurrentBatchConfig;function xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function El(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function pg(t){var e=t._init;return e(t._payload)}function m_(t){function e(k,w){if(t){var I=k.deletions;I===null?(k.deletions=[w],k.flags|=16):I.push(w)}}function n(k,w){if(!t)return null;for(;w!==null;)e(k,w),w=w.sibling;return null}function r(k,w){for(k=new Map;w!==null;)w.key!==null?k.set(w.key,w):k.set(w.index,w),w=w.sibling;return k}function i(k,w){return k=dr(k,w),k.index=0,k.sibling=null,k}function s(k,w,I){return k.index=I,t?(I=k.alternate,I!==null?(I=I.index,I<w?(k.flags|=2,w):I):(k.flags|=2,w)):(k.flags|=1048576,w)}function o(k){return t&&k.alternate===null&&(k.flags|=2),k}function a(k,w,I,D){return w===null||w.tag!==6?(w=mc(I,k.mode,D),w.return=k,w):(w=i(w,I),w.return=k,w)}function u(k,w,I,D){var b=I.type;return b===pi?g(k,w,I.props.children,D,I.key):w!==null&&(w.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===qn&&pg(b)===w.type)?(D=i(w,I.props),D.ref=xs(k,w,I),D.return=k,D):(D=Vl(I.type,I.key,I.props,null,k.mode,D),D.ref=xs(k,w,I),D.return=k,D)}function h(k,w,I,D){return w===null||w.tag!==4||w.stateNode.containerInfo!==I.containerInfo||w.stateNode.implementation!==I.implementation?(w=vc(I,k.mode,D),w.return=k,w):(w=i(w,I.children||[]),w.return=k,w)}function g(k,w,I,D,b){return w===null||w.tag!==7?(w=Br(I,k.mode,D,b),w.return=k,w):(w=i(w,I),w.return=k,w)}function f(k,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return w=mc(""+w,k.mode,I),w.return=k,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case cl:return I=Vl(w.type,w.key,w.props,null,k.mode,I),I.ref=xs(k,null,w),I.return=k,I;case fi:return w=vc(w,k.mode,I),w.return=k,w;case qn:var D=w._init;return f(k,D(w._payload),I)}if(Ls(w)||Ss(w))return w=Br(w,k.mode,I,null),w.return=k,w;El(k,w)}return null}function m(k,w,I,D){var b=w!==null?w.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return b!==null?null:a(k,w,""+I,D);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case cl:return I.key===b?u(k,w,I,D):null;case fi:return I.key===b?h(k,w,I,D):null;case qn:return b=I._init,m(k,w,b(I._payload),D)}if(Ls(I)||Ss(I))return b!==null?null:g(k,w,I,D,null);El(k,I)}return null}function R(k,w,I,D,b){if(typeof D=="string"&&D!==""||typeof D=="number")return k=k.get(I)||null,a(w,k,""+D,b);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case cl:return k=k.get(D.key===null?I:D.key)||null,u(w,k,D,b);case fi:return k=k.get(D.key===null?I:D.key)||null,h(w,k,D,b);case qn:var U=D._init;return R(k,w,I,U(D._payload),b)}if(Ls(D)||Ss(D))return k=k.get(I)||null,g(w,k,D,b,null);El(w,D)}return null}function x(k,w,I,D){for(var b=null,U=null,_=w,v=w=0,y=null;_!==null&&v<I.length;v++){_.index>v?(y=_,_=null):y=_.sibling;var E=m(k,_,I[v],D);if(E===null){_===null&&(_=y);break}t&&_&&E.alternate===null&&e(k,_),w=s(E,w,v),U===null?b=E:U.sibling=E,U=E,_=y}if(v===I.length)return n(k,_),Te&&Or(k,v),b;if(_===null){for(;v<I.length;v++)_=f(k,I[v],D),_!==null&&(w=s(_,w,v),U===null?b=_:U.sibling=_,U=_);return Te&&Or(k,v),b}for(_=r(k,_);v<I.length;v++)y=R(_,k,v,I[v],D),y!==null&&(t&&y.alternate!==null&&_.delete(y.key===null?v:y.key),w=s(y,w,v),U===null?b=y:U.sibling=y,U=y);return t&&_.forEach(function(C){return e(k,C)}),Te&&Or(k,v),b}function O(k,w,I,D){var b=Ss(I);if(typeof b!="function")throw Error(j(150));if(I=b.call(I),I==null)throw Error(j(151));for(var U=b=null,_=w,v=w=0,y=null,E=I.next();_!==null&&!E.done;v++,E=I.next()){_.index>v?(y=_,_=null):y=_.sibling;var C=m(k,_,E.value,D);if(C===null){_===null&&(_=y);break}t&&_&&C.alternate===null&&e(k,_),w=s(C,w,v),U===null?b=C:U.sibling=C,U=C,_=y}if(E.done)return n(k,_),Te&&Or(k,v),b;if(_===null){for(;!E.done;v++,E=I.next())E=f(k,E.value,D),E!==null&&(w=s(E,w,v),U===null?b=E:U.sibling=E,U=E);return Te&&Or(k,v),b}for(_=r(k,_);!E.done;v++,E=I.next())E=R(_,k,v,E.value,D),E!==null&&(t&&E.alternate!==null&&_.delete(E.key===null?v:E.key),w=s(E,w,v),U===null?b=E:U.sibling=E,U=E);return t&&_.forEach(function(P){return e(k,P)}),Te&&Or(k,v),b}function L(k,w,I,D){if(typeof I=="object"&&I!==null&&I.type===pi&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case cl:e:{for(var b=I.key,U=w;U!==null;){if(U.key===b){if(b=I.type,b===pi){if(U.tag===7){n(k,U.sibling),w=i(U,I.props.children),w.return=k,k=w;break e}}else if(U.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===qn&&pg(b)===U.type){n(k,U.sibling),w=i(U,I.props),w.ref=xs(k,U,I),w.return=k,k=w;break e}n(k,U);break}else e(k,U);U=U.sibling}I.type===pi?(w=Br(I.props.children,k.mode,D,I.key),w.return=k,k=w):(D=Vl(I.type,I.key,I.props,null,k.mode,D),D.ref=xs(k,w,I),D.return=k,k=D)}return o(k);case fi:e:{for(U=I.key;w!==null;){if(w.key===U)if(w.tag===4&&w.stateNode.containerInfo===I.containerInfo&&w.stateNode.implementation===I.implementation){n(k,w.sibling),w=i(w,I.children||[]),w.return=k,k=w;break e}else{n(k,w);break}else e(k,w);w=w.sibling}w=vc(I,k.mode,D),w.return=k,k=w}return o(k);case qn:return U=I._init,L(k,w,U(I._payload),D)}if(Ls(I))return x(k,w,I,D);if(Ss(I))return O(k,w,I,D);El(k,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,w!==null&&w.tag===6?(n(k,w.sibling),w=i(w,I),w.return=k,k=w):(n(k,w),w=mc(I,k.mode,D),w.return=k,k=w),o(k)):n(k,w)}return L}var Bi=m_(!0),v_=m_(!1),la=kr(null),aa=null,Si=null,Ed=null;function Sd(){Ed=Si=aa=null}function Cd(t){var e=la.current;Ce(la),t._currentValue=e}function dh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ai(t,e){aa=t,Ed=Si=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Et=!0),t.firstContext=null)}function Wt(t){var e=t._currentValue;if(Ed!==t)if(t={context:t,memoizedValue:e,next:null},Si===null){if(aa===null)throw Error(j(308));Si=t,aa.dependencies={lanes:0,firstContext:t}}else Si=Si.next=t;return e}var Fr=null;function Id(t){Fr===null?Fr=[t]:Fr.push(t)}function __(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Id(e)):(n.next=i.next,i.next=n),e.interleaved=n,Mn(t,r)}function Mn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qn=!1;function Td(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function y_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ur(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Mn(t,n)}return i=r.interleaved,i===null?(e.next=e,Id(r)):(e.next=i.next,i.next=e),r.interleaved=e,Mn(t,n)}function bl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cd(t,n)}}function gg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ua(t,e,n,r){var i=t.updateQueue;Qn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var g=t.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==o&&(a===null?g.firstBaseUpdate=h:a.next=h,g.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,g=h=u=null,a=s;do{var m=a.lane,R=a.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:R,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,O=a;switch(m=e,R=n,O.tag){case 1:if(x=O.payload,typeof x=="function"){f=x.call(R,f,m);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=O.payload,m=typeof x=="function"?x.call(R,f,m):x,m==null)break e;f=Ne({},f,m);break e;case 2:Qn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else R={eventTime:R,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(h=g=R,u=f):g=g.next=R,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(g===null&&(u=f),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=g,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);$r|=o,t.lanes=o,t.memoizedState=f}}function mg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var bo={},fn=kr(bo),fo=kr(bo),po=kr(bo);function Ur(t){if(t===bo)throw Error(j(174));return t}function kd(t,e){switch(we(po,e),we(fo,t),we(fn,bo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Gc(e,t)}Ce(fn),we(fn,e)}function Vi(){Ce(fn),Ce(fo),Ce(po)}function w_(t){Ur(po.current);var e=Ur(fn.current),n=Gc(e,t.type);e!==n&&(we(fo,t),we(fn,n))}function xd(t){fo.current===t&&(Ce(fn),Ce(fo))}var ke=kr(0);function ca(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cc=[];function Nd(){for(var t=0;t<cc.length;t++)cc[t]._workInProgressVersionPrimary=null;cc.length=0}var Fl=zn.ReactCurrentDispatcher,hc=zn.ReactCurrentBatchConfig,Hr=0,xe=null,Fe=null,We=null,ha=!1,Ws=!1,go=0,XS=0;function tt(){throw Error(j(321))}function Rd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!on(t[n],e[n]))return!1;return!0}function Pd(t,e,n,r,i,s){if(Hr=s,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fl.current=t===null||t.memoizedState===null?tC:nC,t=n(r,i),Ws){s=0;do{if(Ws=!1,go=0,25<=s)throw Error(j(301));s+=1,We=Fe=null,e.updateQueue=null,Fl.current=rC,t=n(r,i)}while(Ws)}if(Fl.current=da,e=Fe!==null&&Fe.next!==null,Hr=0,We=Fe=xe=null,ha=!1,e)throw Error(j(300));return t}function Ad(){var t=go!==0;return go=0,t}function cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?xe.memoizedState=We=t:We=We.next=t,We}function Ht(){if(Fe===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=We===null?xe.memoizedState:We.next;if(e!==null)We=e,Fe=t;else{if(t===null)throw Error(j(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},We===null?xe.memoizedState=We=t:We=We.next=t}return We}function mo(t,e){return typeof e=="function"?e(t):e}function dc(t){var e=Ht(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=Fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,h=s;do{var g=h.lane;if((Hr&g)===g)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var f={lane:g,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,xe.lanes|=g,$r|=g}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=a,on(r,e.memoizedState)||(Et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,xe.lanes|=s,$r|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function fc(t){var e=Ht(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);on(s,e.memoizedState)||(Et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function E_(){}function S_(t,e){var n=xe,r=Ht(),i=e(),s=!on(r.memoizedState,i);if(s&&(r.memoizedState=i,Et=!0),r=r.queue,Od(T_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,vo(9,I_.bind(null,n,r,i,e),void 0,null),$e===null)throw Error(j(349));Hr&30||C_(n,e,i)}return i}function C_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function I_(t,e,n,r){e.value=n,e.getSnapshot=r,k_(e)&&x_(t)}function T_(t,e,n){return n(function(){k_(e)&&x_(t)})}function k_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!on(t,n)}catch{return!0}}function x_(t){var e=Mn(t,1);e!==null&&rn(e,t,1,-1)}function vg(t){var e=cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:t},e.queue=t,t=t.dispatch=eC.bind(null,xe,t),[e.memoizedState,t]}function vo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function N_(){return Ht().memoizedState}function Ul(t,e,n,r){var i=cn();xe.flags|=t,i.memoizedState=vo(1|e,n,void 0,r===void 0?null:r)}function Ya(t,e,n,r){var i=Ht();r=r===void 0?null:r;var s=void 0;if(Fe!==null){var o=Fe.memoizedState;if(s=o.destroy,r!==null&&Rd(r,o.deps)){i.memoizedState=vo(e,n,s,r);return}}xe.flags|=t,i.memoizedState=vo(1|e,n,s,r)}function _g(t,e){return Ul(8390656,8,t,e)}function Od(t,e){return Ya(2048,8,t,e)}function R_(t,e){return Ya(4,2,t,e)}function P_(t,e){return Ya(4,4,t,e)}function A_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function O_(t,e,n){return n=n!=null?n.concat([t]):null,Ya(4,4,A_.bind(null,e,t),n)}function Dd(){}function D_(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function M_(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function L_(t,e,n){return Hr&21?(on(n,e)||(n=zv(),xe.lanes|=n,$r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Et=!0),t.memoizedState=n)}function JS(t,e){var n=ge;ge=n!==0&&4>n?n:4,t(!0);var r=hc.transition;hc.transition={};try{t(!1),e()}finally{ge=n,hc.transition=r}}function b_(){return Ht().memoizedState}function ZS(t,e,n){var r=hr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},F_(t))U_(e,n);else if(n=__(t,e,n,r),n!==null){var i=at();rn(n,t,r,i),j_(n,e,r)}}function eC(t,e,n){var r=hr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(F_(t))U_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,on(a,o)){var u=e.interleaved;u===null?(i.next=i,Id(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=__(t,e,i,r),n!==null&&(i=at(),rn(n,t,r,i),j_(n,e,r))}}function F_(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function U_(t,e){Ws=ha=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function j_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cd(t,n)}}var da={readContext:Wt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},tC={readContext:Wt,useCallback:function(t,e){return cn().memoizedState=[t,e===void 0?null:e],t},useContext:Wt,useEffect:_g,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ul(4194308,4,A_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ul(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ul(4,2,t,e)},useMemo:function(t,e){var n=cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ZS.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=cn();return t={current:t},e.memoizedState=t},useState:vg,useDebugValue:Dd,useDeferredValue:function(t){return cn().memoizedState=t},useTransition:function(){var t=vg(!1),e=t[0];return t=JS.bind(null,t[1]),cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,i=cn();if(Te){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),$e===null)throw Error(j(349));Hr&30||C_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,_g(T_.bind(null,r,s,t),[t]),r.flags|=2048,vo(9,I_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=cn(),e=$e.identifierPrefix;if(Te){var n=In,r=Cn;n=(r&~(1<<32-nn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=go++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=XS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},nC={readContext:Wt,useCallback:D_,useContext:Wt,useEffect:Od,useImperativeHandle:O_,useInsertionEffect:R_,useLayoutEffect:P_,useMemo:M_,useReducer:dc,useRef:N_,useState:function(){return dc(mo)},useDebugValue:Dd,useDeferredValue:function(t){var e=Ht();return L_(e,Fe.memoizedState,t)},useTransition:function(){var t=dc(mo)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:E_,useSyncExternalStore:S_,useId:b_,unstable_isNewReconciler:!1},rC={readContext:Wt,useCallback:D_,useContext:Wt,useEffect:Od,useImperativeHandle:O_,useInsertionEffect:R_,useLayoutEffect:P_,useMemo:M_,useReducer:fc,useRef:N_,useState:function(){return fc(mo)},useDebugValue:Dd,useDeferredValue:function(t){var e=Ht();return Fe===null?e.memoizedState=t:L_(e,Fe.memoizedState,t)},useTransition:function(){var t=fc(mo)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:E_,useSyncExternalStore:S_,useId:b_,unstable_isNewReconciler:!1};function Yt(t,e){if(t&&t.defaultProps){e=Ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function fh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xa={isMounted:function(t){return(t=t._reactInternals)?Zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=at(),i=hr(t),s=Pn(r,i);s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,i),e!==null&&(rn(e,t,i,r),bl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=at(),i=hr(t),s=Pn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,i),e!==null&&(rn(e,t,i,r),bl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=at(),r=hr(t),i=Pn(n,r);i.tag=2,e!=null&&(i.callback=e),e=ur(t,i,r),e!==null&&(rn(e,t,r,n),bl(e,t,r))}};function yg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ao(n,r)||!ao(i,s):!0}function z_(t,e,n){var r=!1,i=yr,s=e.contextType;return typeof s=="object"&&s!==null?s=Wt(s):(i=It(e)?Vr:it.current,r=e.contextTypes,s=(r=r!=null)?ji(t,i):yr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xa,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function wg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Xa.enqueueReplaceState(e,e.state,null)}function ph(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Td(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Wt(s):(s=It(e)?Vr:it.current,i.context=ji(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(fh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Xa.enqueueReplaceState(i,i.state,null),ua(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Wi(t,e){try{var n="",r=e;do n+=AE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function pc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function gh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iC=typeof WeakMap=="function"?WeakMap:Map;function B_(t,e,n){n=Pn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){pa||(pa=!0,Th=r),gh(t,e)},n}function V_(t,e,n){n=Pn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){gh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){gh(t,e),typeof r!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Eg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new iC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=_C.bind(null,t,e,n),e.then(t,t))}function Sg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Cg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pn(-1,1),e.tag=2,ur(n,e,1))),n.lanes|=1),t)}var sC=zn.ReactCurrentOwner,Et=!1;function ot(t,e,n,r){e.child=t===null?v_(e,null,n,r):Bi(e,t.child,n,r)}function Ig(t,e,n,r,i){n=n.render;var s=e.ref;return Ai(e,i),r=Pd(t,e,n,r,s,i),n=Ad(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ln(t,e,i)):(Te&&n&&_d(e),e.flags|=1,ot(t,e,r,i),e.child)}function Tg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Bd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,W_(t,e,s,r,i)):(t=Vl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ao,n(o,r)&&t.ref===e.ref)return Ln(t,e,i)}return e.flags|=1,t=dr(s,r),t.ref=e.ref,t.return=e,e.child=t}function W_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ao(s,r)&&t.ref===e.ref)if(Et=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Et=!0);else return e.lanes=t.lanes,Ln(t,e,i)}return mh(t,e,n,r,i)}function H_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(Ii,xt),xt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(Ii,xt),xt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(Ii,xt),xt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,we(Ii,xt),xt|=r;return ot(t,e,i,n),e.child}function $_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function mh(t,e,n,r,i){var s=It(n)?Vr:it.current;return s=ji(e,s),Ai(e,i),n=Pd(t,e,n,r,s,i),r=Ad(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ln(t,e,i)):(Te&&r&&_d(e),e.flags|=1,ot(t,e,n,i),e.child)}function kg(t,e,n,r,i){if(It(n)){var s=!0;ia(e)}else s=!1;if(Ai(e,i),e.stateNode===null)jl(t,e),z_(e,n,r),ph(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Wt(h):(h=It(n)?Vr:it.current,h=ji(e,h));var g=n.getDerivedStateFromProps,f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==h)&&wg(e,o,r,h),Qn=!1;var m=e.memoizedState;o.state=m,ua(e,r,o,i),u=e.memoizedState,a!==r||m!==u||Ct.current||Qn?(typeof g=="function"&&(fh(e,n,g,r),u=e.memoizedState),(a=Qn||yg(e,n,a,r,m,u,h))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,y_(t,e),a=e.memoizedProps,h=e.type===e.elementType?a:Yt(e.type,a),o.props=h,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Wt(u):(u=It(n)?Vr:it.current,u=ji(e,u));var R=n.getDerivedStateFromProps;(g=typeof R=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&wg(e,o,r,u),Qn=!1,m=e.memoizedState,o.state=m,ua(e,r,o,i);var x=e.memoizedState;a!==f||m!==x||Ct.current||Qn?(typeof R=="function"&&(fh(e,n,R,r),x=e.memoizedState),(h=Qn||yg(e,n,h,r,m,x,u)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return vh(t,e,n,r,s,i)}function vh(t,e,n,r,i,s){$_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&hg(e,n,!1),Ln(t,e,s);r=e.stateNode,sC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Bi(e,t.child,null,s),e.child=Bi(e,null,a,s)):ot(t,e,a,s),e.memoizedState=r.state,i&&hg(e,n,!0),e.child}function G_(t){var e=t.stateNode;e.pendingContext?cg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cg(t,e.context,!1),kd(t,e.containerInfo)}function xg(t,e,n,r,i){return zi(),wd(i),e.flags|=256,ot(t,e,n,r),e.child}var _h={dehydrated:null,treeContext:null,retryLane:0};function yh(t){return{baseLanes:t,cachePool:null,transitions:null}}function K_(t,e,n){var r=e.pendingProps,i=ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),we(ke,i&1),t===null)return hh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=eu(o,r,0,null),t=Br(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=yh(n),e.memoizedState=_h,t):Md(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return oC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=dr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=dr(a,s):(s=Br(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?yh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=_h,r}return s=t.child,t=s.sibling,r=dr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Md(t,e){return e=eu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Sl(t,e,n,r){return r!==null&&wd(r),Bi(e,t.child,null,n),t=Md(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function oC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=pc(Error(j(422))),Sl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=eu({mode:"visible",children:r.children},i,0,null),s=Br(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Bi(e,t.child,null,o),e.child.memoizedState=yh(o),e.memoizedState=_h,s);if(!(e.mode&1))return Sl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(j(419)),r=pc(s,r,void 0),Sl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Et||a){if(r=$e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Mn(t,i),rn(r,t,i,-1))}return zd(),r=pc(Error(j(421))),Sl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=yC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Rt=ar(i.nextSibling),Pt=e,Te=!0,Jt=null,t!==null&&(Ut[jt++]=Cn,Ut[jt++]=In,Ut[jt++]=Wr,Cn=t.id,In=t.overflow,Wr=e),e=Md(e,r.children),e.flags|=4096,e)}function Ng(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),dh(t.return,e,n)}function gc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function q_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ot(t,e,r.children,n),r=ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ng(t,n,e);else if(t.tag===19)Ng(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ca(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),gc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ca(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}gc(e,!0,n,null,s);break;case"together":gc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function jl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ln(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function lC(t,e,n){switch(e.tag){case 3:G_(e),zi();break;case 5:w_(e);break;case 1:It(e.type)&&ia(e);break;case 4:kd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;we(la,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(ke,ke.current&1),e.flags|=128,null):n&e.child.childLanes?K_(t,e,n):(we(ke,ke.current&1),t=Ln(t,e,n),t!==null?t.sibling:null);we(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return q_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,H_(t,e,n)}return Ln(t,e,n)}var Q_,wh,Y_,X_;Q_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wh=function(){};Y_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ur(fn.current);var s=null;switch(n){case"input":i=Vc(t,i),r=Vc(t,r),s=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),s=[];break;case"textarea":i=$c(t,i),r=$c(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=na)}Kc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var a=i[h];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(to.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(a=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==a&&(u!=null||a!=null))if(h==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(to.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&Se("scroll",t),s||a===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};X_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ns(t,e){if(!Te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function aC(t,e,n){var r=e.pendingProps;switch(yd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(e),null;case 1:return It(e.type)&&ra(),nt(e),null;case 3:return r=e.stateNode,Vi(),Ce(Ct),Ce(it),Nd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(wl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jt!==null&&(Nh(Jt),Jt=null))),wh(t,e),nt(e),null;case 5:xd(e);var i=Ur(po.current);if(n=e.type,t!==null&&e.stateNode!=null)Y_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return nt(e),null}if(t=Ur(fn.current),wl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[hn]=e,r[ho]=s,t=(e.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(i=0;i<Fs.length;i++)Se(Fs[i],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":Fp(r,s),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Se("invalid",r);break;case"textarea":jp(r,s),Se("invalid",r)}Kc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&yl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&yl(r.textContent,a,t),i=["children",""+a]):to.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Se("scroll",r)}switch(n){case"input":hl(r),Up(r,s,!0);break;case"textarea":hl(r),zp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=na)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Tv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[hn]=e,t[ho]=r,Q_(t,e,!1,!1),e.stateNode=t;e:{switch(o=qc(n,r),n){case"dialog":Se("cancel",t),Se("close",t),i=r;break;case"iframe":case"object":case"embed":Se("load",t),i=r;break;case"video":case"audio":for(i=0;i<Fs.length;i++)Se(Fs[i],t);i=r;break;case"source":Se("error",t),i=r;break;case"img":case"image":case"link":Se("error",t),Se("load",t),i=r;break;case"details":Se("toggle",t),i=r;break;case"input":Fp(t,r),i=Vc(t,r),Se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),Se("invalid",t);break;case"textarea":jp(t,r),i=$c(t,r),Se("invalid",t);break;default:i=r}Kc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?Nv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&kv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&no(t,u):typeof u=="number"&&no(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(to.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Se("scroll",t):u!=null&&id(t,s,u,o))}switch(n){case"input":hl(t),Up(t,r,!1);break;case"textarea":hl(t),zp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+_r(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?xi(t,!!r.multiple,s,!1):r.defaultValue!=null&&xi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=na)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nt(e),null;case 6:if(t&&e.stateNode!=null)X_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=Ur(po.current),Ur(fn.current),wl(e)){if(r=e.stateNode,n=e.memoizedProps,r[hn]=e,(s=r.nodeValue!==n)&&(t=Pt,t!==null))switch(t.tag){case 3:yl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&yl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[hn]=e,e.stateNode=r}return nt(e),null;case 13:if(Ce(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Te&&Rt!==null&&e.mode&1&&!(e.flags&128))g_(),zi(),e.flags|=98560,s=!1;else if(s=wl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[hn]=e}else zi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nt(e),s=!1}else Jt!==null&&(Nh(Jt),Jt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ke.current&1?ze===0&&(ze=3):zd())),e.updateQueue!==null&&(e.flags|=4),nt(e),null);case 4:return Vi(),wh(t,e),t===null&&uo(e.stateNode.containerInfo),nt(e),null;case 10:return Cd(e.type._context),nt(e),null;case 17:return It(e.type)&&ra(),nt(e),null;case 19:if(Ce(ke),s=e.memoizedState,s===null)return nt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ns(s,!1);else{if(ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ca(t),o!==null){for(e.flags|=128,Ns(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(ke,ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&Me()>Hi&&(e.flags|=128,r=!0,Ns(s,!1),e.lanes=4194304)}else{if(!r)if(t=ca(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ns(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Te)return nt(e),null}else 2*Me()-s.renderingStartTime>Hi&&n!==1073741824&&(e.flags|=128,r=!0,Ns(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Me(),e.sibling=null,n=ke.current,we(ke,r?n&1|2:n&1),e):(nt(e),null);case 22:case 23:return jd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?xt&1073741824&&(nt(e),e.subtreeFlags&6&&(e.flags|=8192)):nt(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function uC(t,e){switch(yd(e),e.tag){case 1:return It(e.type)&&ra(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vi(),Ce(Ct),Ce(it),Nd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xd(e),null;case 13:if(Ce(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));zi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ce(ke),null;case 4:return Vi(),null;case 10:return Cd(e.type._context),null;case 22:case 23:return jd(),null;case 24:return null;default:return null}}var Cl=!1,rt=!1,cC=typeof WeakSet=="function"?WeakSet:Set,$=null;function Ci(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function Eh(t,e,n){try{n()}catch(r){Re(t,e,r)}}var Rg=!1;function hC(t,e){if(ih=Zl,t=n_(),vd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,h=0,g=0,f=t,m=null;t:for(;;){for(var R;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(R=f.firstChild)!==null;)m=f,f=R;for(;;){if(f===t)break t;if(m===n&&++h===i&&(a=o),m===s&&++g===r&&(u=o),(R=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=R}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(sh={focusedElem:t,selectionRange:n},Zl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var O=x.memoizedProps,L=x.memoizedState,k=e.stateNode,w=k.getSnapshotBeforeUpdate(e.elementType===e.type?O:Yt(e.type,O),L);k.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(D){Re(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return x=Rg,Rg=!1,x}function Hs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Eh(e,n,s)}i=i.next}while(i!==r)}}function Ja(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Sh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function J_(t){var e=t.alternate;e!==null&&(t.alternate=null,J_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[hn],delete e[ho],delete e[ah],delete e[KS],delete e[qS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Z_(t){return t.tag===5||t.tag===3||t.tag===4}function Pg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Z_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ch(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=na));else if(r!==4&&(t=t.child,t!==null))for(Ch(t,e,n),t=t.sibling;t!==null;)Ch(t,e,n),t=t.sibling}function Ih(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ih(t,e,n),t=t.sibling;t!==null;)Ih(t,e,n),t=t.sibling}var qe=null,Xt=!1;function Gn(t,e,n){for(n=n.child;n!==null;)ey(t,e,n),n=n.sibling}function ey(t,e,n){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(Ha,n)}catch{}switch(n.tag){case 5:rt||Ci(n,e);case 6:var r=qe,i=Xt;qe=null,Gn(t,e,n),qe=r,Xt=i,qe!==null&&(Xt?(t=qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(Xt?(t=qe,n=n.stateNode,t.nodeType===8?ac(t.parentNode,n):t.nodeType===1&&ac(t,n),oo(t)):ac(qe,n.stateNode));break;case 4:r=qe,i=Xt,qe=n.stateNode.containerInfo,Xt=!0,Gn(t,e,n),qe=r,Xt=i;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Eh(n,e,o),i=i.next}while(i!==r)}Gn(t,e,n);break;case 1:if(!rt&&(Ci(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Re(n,e,a)}Gn(t,e,n);break;case 21:Gn(t,e,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,Gn(t,e,n),rt=r):Gn(t,e,n);break;default:Gn(t,e,n)}}function Ag(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cC),e.forEach(function(r){var i=wC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:qe=a.stateNode,Xt=!1;break e;case 3:qe=a.stateNode.containerInfo,Xt=!0;break e;case 4:qe=a.stateNode.containerInfo,Xt=!0;break e}a=a.return}if(qe===null)throw Error(j(160));ey(s,o,i),qe=null,Xt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Re(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ty(e,t),e=e.sibling}function ty(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qt(e,t),an(t),r&4){try{Hs(3,t,t.return),Ja(3,t)}catch(O){Re(t,t.return,O)}try{Hs(5,t,t.return)}catch(O){Re(t,t.return,O)}}break;case 1:Qt(e,t),an(t),r&512&&n!==null&&Ci(n,n.return);break;case 5:if(Qt(e,t),an(t),r&512&&n!==null&&Ci(n,n.return),t.flags&32){var i=t.stateNode;try{no(i,"")}catch(O){Re(t,t.return,O)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Cv(i,s),qc(a,o);var h=qc(a,s);for(o=0;o<u.length;o+=2){var g=u[o],f=u[o+1];g==="style"?Nv(i,f):g==="dangerouslySetInnerHTML"?kv(i,f):g==="children"?no(i,f):id(i,g,f,h)}switch(a){case"input":Wc(i,s);break;case"textarea":Iv(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var R=s.value;R!=null?xi(i,!!s.multiple,R,!1):m!==!!s.multiple&&(s.defaultValue!=null?xi(i,!!s.multiple,s.defaultValue,!0):xi(i,!!s.multiple,s.multiple?[]:"",!1))}i[ho]=s}catch(O){Re(t,t.return,O)}}break;case 6:if(Qt(e,t),an(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(O){Re(t,t.return,O)}}break;case 3:if(Qt(e,t),an(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{oo(e.containerInfo)}catch(O){Re(t,t.return,O)}break;case 4:Qt(e,t),an(t);break;case 13:Qt(e,t),an(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Fd=Me())),r&4&&Ag(t);break;case 22:if(g=n!==null&&n.memoizedState!==null,t.mode&1?(rt=(h=rt)||g,Qt(e,t),rt=h):Qt(e,t),an(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!g&&t.mode&1)for($=t,g=t.child;g!==null;){for(f=$=g;$!==null;){switch(m=$,R=m.child,m.tag){case 0:case 11:case 14:case 15:Hs(4,m,m.return);break;case 1:Ci(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(O){Re(r,n,O)}}break;case 5:Ci(m,m.return);break;case 22:if(m.memoizedState!==null){Dg(f);continue}}R!==null?(R.return=m,$=R):Dg(f)}g=g.sibling}e:for(g=null,f=t;;){if(f.tag===5){if(g===null){g=f;try{i=f.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=xv("display",o))}catch(O){Re(t,t.return,O)}}}else if(f.tag===6){if(g===null)try{f.stateNode.nodeValue=h?"":f.memoizedProps}catch(O){Re(t,t.return,O)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;g===f&&(g=null),f=f.return}g===f&&(g=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Qt(e,t),an(t),r&4&&Ag(t);break;case 21:break;default:Qt(e,t),an(t)}}function an(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Z_(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(no(i,""),r.flags&=-33);var s=Pg(t);Ih(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Pg(t);Ch(t,a,o);break;default:throw Error(j(161))}}catch(u){Re(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function dC(t,e,n){$=t,ny(t)}function ny(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Cl;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||rt;a=Cl;var h=rt;if(Cl=o,(rt=u)&&!h)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?Mg(i):u!==null?(u.return=o,$=u):Mg(i);for(;s!==null;)$=s,ny(s),s=s.sibling;$=i,Cl=a,rt=h}Og(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Og(t)}}function Og(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rt||Ja(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!rt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Yt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&mg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}mg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var g=h.memoizedState;if(g!==null){var f=g.dehydrated;f!==null&&oo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}rt||e.flags&512&&Sh(e)}catch(m){Re(e,e.return,m)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Dg(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Mg(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ja(4,e)}catch(u){Re(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Re(e,i,u)}}var s=e.return;try{Sh(e)}catch(u){Re(e,s,u)}break;case 5:var o=e.return;try{Sh(e)}catch(u){Re(e,o,u)}}}catch(u){Re(e,e.return,u)}if(e===t){$=null;break}var a=e.sibling;if(a!==null){a.return=e.return,$=a;break}$=e.return}}var fC=Math.ceil,fa=zn.ReactCurrentDispatcher,Ld=zn.ReactCurrentOwner,Vt=zn.ReactCurrentBatchConfig,oe=0,$e=null,Le=null,Ye=0,xt=0,Ii=kr(0),ze=0,_o=null,$r=0,Za=0,bd=0,$s=null,_t=null,Fd=0,Hi=1/0,En=null,pa=!1,Th=null,cr=null,Il=!1,rr=null,ga=0,Gs=0,kh=null,zl=-1,Bl=0;function at(){return oe&6?Me():zl!==-1?zl:zl=Me()}function hr(t){return t.mode&1?oe&2&&Ye!==0?Ye&-Ye:YS.transition!==null?(Bl===0&&(Bl=zv()),Bl):(t=ge,t!==0||(t=window.event,t=t===void 0?16:Kv(t.type)),t):1}function rn(t,e,n,r){if(50<Gs)throw Gs=0,kh=null,Error(j(185));Do(t,n,r),(!(oe&2)||t!==$e)&&(t===$e&&(!(oe&2)&&(Za|=n),ze===4&&Xn(t,Ye)),Tt(t,r),n===1&&oe===0&&!(e.mode&1)&&(Hi=Me()+500,Qa&&xr()))}function Tt(t,e){var n=t.callbackNode;YE(t,e);var r=Jl(t,t===$e?Ye:0);if(r===0)n!==null&&Wp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Wp(n),e===1)t.tag===0?QS(Lg.bind(null,t)):d_(Lg.bind(null,t)),$S(function(){!(oe&6)&&xr()}),n=null;else{switch(Bv(r)){case 1:n=ud;break;case 4:n=Uv;break;case 16:n=Xl;break;case 536870912:n=jv;break;default:n=Xl}n=cy(n,ry.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ry(t,e){if(zl=-1,Bl=0,oe&6)throw Error(j(327));var n=t.callbackNode;if(Oi()&&t.callbackNode!==n)return null;var r=Jl(t,t===$e?Ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ma(t,r);else{e=r;var i=oe;oe|=2;var s=sy();($e!==t||Ye!==e)&&(En=null,Hi=Me()+500,zr(t,e));do try{mC();break}catch(a){iy(t,a)}while(!0);Sd(),fa.current=s,oe=i,Le!==null?e=0:($e=null,Ye=0,e=ze)}if(e!==0){if(e===2&&(i=Zc(t),i!==0&&(r=i,e=xh(t,i))),e===1)throw n=_o,zr(t,0),Xn(t,r),Tt(t,Me()),n;if(e===6)Xn(t,r);else{if(i=t.current.alternate,!(r&30)&&!pC(i)&&(e=ma(t,r),e===2&&(s=Zc(t),s!==0&&(r=s,e=xh(t,s))),e===1))throw n=_o,zr(t,0),Xn(t,r),Tt(t,Me()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Dr(t,_t,En);break;case 3:if(Xn(t,r),(r&130023424)===r&&(e=Fd+500-Me(),10<e)){if(Jl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){at(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=lh(Dr.bind(null,t,_t,En),e);break}Dr(t,_t,En);break;case 4:if(Xn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-nn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fC(r/1960))-r,10<r){t.timeoutHandle=lh(Dr.bind(null,t,_t,En),r);break}Dr(t,_t,En);break;case 5:Dr(t,_t,En);break;default:throw Error(j(329))}}}return Tt(t,Me()),t.callbackNode===n?ry.bind(null,t):null}function xh(t,e){var n=$s;return t.current.memoizedState.isDehydrated&&(zr(t,e).flags|=256),t=ma(t,e),t!==2&&(e=_t,_t=n,e!==null&&Nh(e)),t}function Nh(t){_t===null?_t=t:_t.push.apply(_t,t)}function pC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!on(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xn(t,e){for(e&=~bd,e&=~Za,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-nn(e),r=1<<n;t[n]=-1,e&=~r}}function Lg(t){if(oe&6)throw Error(j(327));Oi();var e=Jl(t,0);if(!(e&1))return Tt(t,Me()),null;var n=ma(t,e);if(t.tag!==0&&n===2){var r=Zc(t);r!==0&&(e=r,n=xh(t,r))}if(n===1)throw n=_o,zr(t,0),Xn(t,e),Tt(t,Me()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dr(t,_t,En),Tt(t,Me()),null}function Ud(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(Hi=Me()+500,Qa&&xr())}}function Gr(t){rr!==null&&rr.tag===0&&!(oe&6)&&Oi();var e=oe;oe|=1;var n=Vt.transition,r=ge;try{if(Vt.transition=null,ge=1,t)return t()}finally{ge=r,Vt.transition=n,oe=e,!(oe&6)&&xr()}}function jd(){xt=Ii.current,Ce(Ii)}function zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,HS(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(yd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ra();break;case 3:Vi(),Ce(Ct),Ce(it),Nd();break;case 5:xd(r);break;case 4:Vi();break;case 13:Ce(ke);break;case 19:Ce(ke);break;case 10:Cd(r.type._context);break;case 22:case 23:jd()}n=n.return}if($e=t,Le=t=dr(t.current,null),Ye=xt=e,ze=0,_o=null,bd=Za=$r=0,_t=$s=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Fr=null}return t}function iy(t,e){do{var n=Le;try{if(Sd(),Fl.current=da,ha){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ha=!1}if(Hr=0,We=Fe=xe=null,Ws=!1,go=0,Ld.current=null,n===null||n.return===null){ze=1,_o=e,Le=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Ye,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,g=a,f=g.tag;if(!(g.mode&1)&&(f===0||f===11||f===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var R=Sg(o);if(R!==null){R.flags&=-257,Cg(R,o,a,s,e),R.mode&1&&Eg(s,h,e),e=R,u=h;var x=e.updateQueue;if(x===null){var O=new Set;O.add(u),e.updateQueue=O}else x.add(u);break e}else{if(!(e&1)){Eg(s,h,e),zd();break e}u=Error(j(426))}}else if(Te&&a.mode&1){var L=Sg(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Cg(L,o,a,s,e),wd(Wi(u,a));break e}}s=u=Wi(u,a),ze!==4&&(ze=2),$s===null?$s=[s]:$s.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var k=B_(s,u,e);gg(s,k);break e;case 1:a=u;var w=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(cr===null||!cr.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=V_(s,a,e);gg(s,D);break e}}s=s.return}while(s!==null)}ly(n)}catch(b){e=b,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function sy(){var t=fa.current;return fa.current=da,t===null?da:t}function zd(){(ze===0||ze===3||ze===2)&&(ze=4),$e===null||!($r&268435455)&&!(Za&268435455)||Xn($e,Ye)}function ma(t,e){var n=oe;oe|=2;var r=sy();($e!==t||Ye!==e)&&(En=null,zr(t,e));do try{gC();break}catch(i){iy(t,i)}while(!0);if(Sd(),oe=n,fa.current=r,Le!==null)throw Error(j(261));return $e=null,Ye=0,ze}function gC(){for(;Le!==null;)oy(Le)}function mC(){for(;Le!==null&&!BE();)oy(Le)}function oy(t){var e=uy(t.alternate,t,xt);t.memoizedProps=t.pendingProps,e===null?ly(t):Le=e,Ld.current=null}function ly(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=uC(n,e),n!==null){n.flags&=32767,Le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ze=6,Le=null;return}}else if(n=aC(n,e,xt),n!==null){Le=n;return}if(e=e.sibling,e!==null){Le=e;return}Le=e=t}while(e!==null);ze===0&&(ze=5)}function Dr(t,e,n){var r=ge,i=Vt.transition;try{Vt.transition=null,ge=1,vC(t,e,n,r)}finally{Vt.transition=i,ge=r}return null}function vC(t,e,n,r){do Oi();while(rr!==null);if(oe&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(XE(t,s),t===$e&&(Le=$e=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Il||(Il=!0,cy(Xl,function(){return Oi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Vt.transition,Vt.transition=null;var o=ge;ge=1;var a=oe;oe|=4,Ld.current=null,hC(t,n),ty(n,t),FS(sh),Zl=!!ih,sh=ih=null,t.current=n,dC(n),VE(),oe=a,ge=o,Vt.transition=s}else t.current=n;if(Il&&(Il=!1,rr=t,ga=i),s=t.pendingLanes,s===0&&(cr=null),$E(n.stateNode),Tt(t,Me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(pa)throw pa=!1,t=Th,Th=null,t;return ga&1&&t.tag!==0&&Oi(),s=t.pendingLanes,s&1?t===kh?Gs++:(Gs=0,kh=t):Gs=0,xr(),null}function Oi(){if(rr!==null){var t=Bv(ga),e=Vt.transition,n=ge;try{if(Vt.transition=null,ge=16>t?16:t,rr===null)var r=!1;else{if(t=rr,rr=null,ga=0,oe&6)throw Error(j(331));var i=oe;for(oe|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var h=a[u];for($=h;$!==null;){var g=$;switch(g.tag){case 0:case 11:case 15:Hs(8,g,s)}var f=g.child;if(f!==null)f.return=g,$=f;else for(;$!==null;){g=$;var m=g.sibling,R=g.return;if(J_(g),g===h){$=null;break}if(m!==null){m.return=R,$=m;break}$=R}}}var x=s.alternate;if(x!==null){var O=x.child;if(O!==null){x.child=null;do{var L=O.sibling;O.sibling=null,O=L}while(O!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Hs(9,s,s.return)}var k=s.sibling;if(k!==null){k.return=s.return,$=k;break e}$=s.return}}var w=t.current;for($=w;$!==null;){o=$;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,$=I;else e:for(o=w;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ja(9,a)}}catch(b){Re(a,a.return,b)}if(a===o){$=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,$=D;break e}$=a.return}}if(oe=i,xr(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(Ha,t)}catch{}r=!0}return r}finally{ge=n,Vt.transition=e}}return!1}function bg(t,e,n){e=Wi(n,e),e=B_(t,e,1),t=ur(t,e,1),e=at(),t!==null&&(Do(t,1,e),Tt(t,e))}function Re(t,e,n){if(t.tag===3)bg(t,t,n);else for(;e!==null;){if(e.tag===3){bg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cr===null||!cr.has(r))){t=Wi(n,t),t=V_(e,t,1),e=ur(e,t,1),t=at(),e!==null&&(Do(e,1,t),Tt(e,t));break}}e=e.return}}function _C(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=at(),t.pingedLanes|=t.suspendedLanes&n,$e===t&&(Ye&n)===n&&(ze===4||ze===3&&(Ye&130023424)===Ye&&500>Me()-Fd?zr(t,0):bd|=n),Tt(t,e)}function ay(t,e){e===0&&(t.mode&1?(e=pl,pl<<=1,!(pl&130023424)&&(pl=4194304)):e=1);var n=at();t=Mn(t,e),t!==null&&(Do(t,e,n),Tt(t,n))}function yC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ay(t,n)}function wC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),ay(t,n)}var uy;uy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ct.current)Et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Et=!1,lC(t,e,n);Et=!!(t.flags&131072)}else Et=!1,Te&&e.flags&1048576&&f_(e,oa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;jl(t,e),t=e.pendingProps;var i=ji(e,it.current);Ai(e,n),i=Pd(null,e,r,t,i,n);var s=Ad();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,It(r)?(s=!0,ia(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Td(e),i.updater=Xa,e.stateNode=i,i._reactInternals=e,ph(e,r,t,n),e=vh(null,e,r,!0,s,n)):(e.tag=0,Te&&s&&_d(e),ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(jl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=SC(r),t=Yt(r,t),i){case 0:e=mh(null,e,r,t,n);break e;case 1:e=kg(null,e,r,t,n);break e;case 11:e=Ig(null,e,r,t,n);break e;case 14:e=Tg(null,e,r,Yt(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),mh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),kg(t,e,r,i,n);case 3:e:{if(G_(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,y_(t,e),ua(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Wi(Error(j(423)),e),e=xg(t,e,r,n,i);break e}else if(r!==i){i=Wi(Error(j(424)),e),e=xg(t,e,r,n,i);break e}else for(Rt=ar(e.stateNode.containerInfo.firstChild),Pt=e,Te=!0,Jt=null,n=v_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zi(),r===i){e=Ln(t,e,n);break e}ot(t,e,r,n)}e=e.child}return e;case 5:return w_(e),t===null&&hh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,oh(r,i)?o=null:s!==null&&oh(r,s)&&(e.flags|=32),$_(t,e),ot(t,e,o,n),e.child;case 6:return t===null&&hh(e),null;case 13:return K_(t,e,n);case 4:return kd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Bi(e,null,r,n):ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Ig(t,e,r,i,n);case 7:return ot(t,e,e.pendingProps,n),e.child;case 8:return ot(t,e,e.pendingProps.children,n),e.child;case 12:return ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,we(la,r._currentValue),r._currentValue=o,s!==null)if(on(s.value,o)){if(s.children===i.children&&!Ct.current){e=Ln(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Pn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var g=h.pending;g===null?u.next=u:(u.next=g.next,g.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),dh(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),dh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ai(e,n),i=Wt(i),r=r(i),e.flags|=1,ot(t,e,r,n),e.child;case 14:return r=e.type,i=Yt(r,e.pendingProps),i=Yt(r.type,i),Tg(t,e,r,i,n);case 15:return W_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),jl(t,e),e.tag=1,It(r)?(t=!0,ia(e)):t=!1,Ai(e,n),z_(e,r,i),ph(e,r,i,n),vh(null,e,r,!0,t,n);case 19:return q_(t,e,n);case 22:return H_(t,e,n)}throw Error(j(156,e.tag))};function cy(t,e){return Fv(t,e)}function EC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(t,e,n,r){return new EC(t,e,n,r)}function Bd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function SC(t){if(typeof t=="function")return Bd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===od)return 11;if(t===ld)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=zt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Vl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Bd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case pi:return Br(n.children,i,s,e);case sd:o=8,i|=8;break;case Uc:return t=zt(12,n,e,i|2),t.elementType=Uc,t.lanes=s,t;case jc:return t=zt(13,n,e,i),t.elementType=jc,t.lanes=s,t;case zc:return t=zt(19,n,e,i),t.elementType=zc,t.lanes=s,t;case wv:return eu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _v:o=10;break e;case yv:o=9;break e;case od:o=11;break e;case ld:o=14;break e;case qn:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=zt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Br(t,e,n,r){return t=zt(7,t,r,e),t.lanes=n,t}function eu(t,e,n,r){return t=zt(22,t,r,e),t.elementType=wv,t.lanes=n,t.stateNode={isHidden:!1},t}function mc(t,e,n){return t=zt(6,t,null,e),t.lanes=n,t}function vc(t,e,n){return e=zt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function CC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xu(0),this.expirationTimes=Xu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vd(t,e,n,r,i,s,o,a,u){return t=new CC(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=zt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Td(s),t}function IC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function hy(t){if(!t)return yr;t=t._reactInternals;e:{if(Zr(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(It(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(It(n))return h_(t,n,e)}return e}function dy(t,e,n,r,i,s,o,a,u){return t=Vd(n,r,!0,t,i,s,o,a,u),t.context=hy(null),n=t.current,r=at(),i=hr(n),s=Pn(r,i),s.callback=e??null,ur(n,s,i),t.current.lanes=i,Do(t,i,r),Tt(t,r),t}function tu(t,e,n,r){var i=e.current,s=at(),o=hr(i);return n=hy(n),e.context===null?e.context=n:e.pendingContext=n,e=Pn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ur(i,e,o),t!==null&&(rn(t,i,o,s),bl(t,i,o)),o}function va(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Wd(t,e){Fg(t,e),(t=t.alternate)&&Fg(t,e)}function TC(){return null}var fy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hd(t){this._internalRoot=t}nu.prototype.render=Hd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));tu(t,e,null,null)};nu.prototype.unmount=Hd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gr(function(){tu(null,t,null,null)}),e[Dn]=null}};function nu(t){this._internalRoot=t}nu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Hv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yn.length&&e!==0&&e<Yn[n].priority;n++);Yn.splice(n,0,t),n===0&&Gv(t)}};function $d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ru(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ug(){}function kC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=va(o);s.call(h)}}var o=dy(e,r,t,0,null,!1,!1,"",Ug);return t._reactRootContainer=o,t[Dn]=o.current,uo(t.nodeType===8?t.parentNode:t),Gr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var h=va(u);a.call(h)}}var u=Vd(t,0,!1,null,null,!1,!1,"",Ug);return t._reactRootContainer=u,t[Dn]=u.current,uo(t.nodeType===8?t.parentNode:t),Gr(function(){tu(e,u,n,r)}),u}function iu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=va(o);a.call(u)}}tu(e,o,t,i)}else o=kC(n,e,t,i,r);return va(o)}Vv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=bs(e.pendingLanes);n!==0&&(cd(e,n|1),Tt(e,Me()),!(oe&6)&&(Hi=Me()+500,xr()))}break;case 13:Gr(function(){var r=Mn(t,1);if(r!==null){var i=at();rn(r,t,1,i)}}),Wd(t,1)}};hd=function(t){if(t.tag===13){var e=Mn(t,134217728);if(e!==null){var n=at();rn(e,t,134217728,n)}Wd(t,134217728)}};Wv=function(t){if(t.tag===13){var e=hr(t),n=Mn(t,e);if(n!==null){var r=at();rn(n,t,e,r)}Wd(t,e)}};Hv=function(){return ge};$v=function(t,e){var n=ge;try{return ge=t,e()}finally{ge=n}};Yc=function(t,e,n){switch(e){case"input":if(Wc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=qa(r);if(!i)throw Error(j(90));Sv(r),Wc(r,i)}}}break;case"textarea":Iv(t,n);break;case"select":e=n.value,e!=null&&xi(t,!!n.multiple,e,!1)}};Av=Ud;Ov=Gr;var xC={usingClientEntryPoint:!1,Events:[Lo,_i,qa,Rv,Pv,Ud]},Rs={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},NC={bundleType:Rs.bundleType,version:Rs.version,rendererPackageName:Rs.rendererPackageName,rendererConfig:Rs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Lv(t),t===null?null:t.stateNode},findFiberByHostInstance:Rs.findFiberByHostInstance||TC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tl.isDisabled&&Tl.supportsFiber)try{Ha=Tl.inject(NC),dn=Tl}catch{}}Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xC;Ot.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$d(e))throw Error(j(200));return IC(t,e,null,n)};Ot.createRoot=function(t,e){if(!$d(t))throw Error(j(299));var n=!1,r="",i=fy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Vd(t,1,!1,null,null,n,!1,r,i),t[Dn]=e.current,uo(t.nodeType===8?t.parentNode:t),new Hd(e)};Ot.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=Lv(e),t=t===null?null:t.stateNode,t};Ot.flushSync=function(t){return Gr(t)};Ot.hydrate=function(t,e,n){if(!ru(e))throw Error(j(200));return iu(null,t,e,!0,n)};Ot.hydrateRoot=function(t,e,n){if(!$d(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=fy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=dy(e,null,t,1,n??null,i,!1,s,o),t[Dn]=e.current,uo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new nu(e)};Ot.render=function(t,e,n){if(!ru(e))throw Error(j(200));return iu(null,t,e,!1,n)};Ot.unmountComponentAtNode=function(t){if(!ru(t))throw Error(j(40));return t._reactRootContainer?(Gr(function(){iu(null,null,t,!1,function(){t._reactRootContainer=null,t[Dn]=null})}),!0):!1};Ot.unstable_batchedUpdates=Ud;Ot.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ru(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return iu(t,e,n,!1,r)};Ot.version="18.3.1-next-f1338f8080-20240426";function py(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(py)}catch(t){console.error(t)}}py(),pv.exports=Ot;var RC=pv.exports,jg=RC;bc.createRoot=jg.createRoot,bc.hydrateRoot=jg.hydrateRoot;var zg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z=function(t,e){if(!t)throw es(e)},es=function(t){return new Error("Firebase Database ("+gy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},PC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Gd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,g=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|h>>6,R=h&63;u||(R=64,o||(m=64)),r.push(n[g],n[f],n[m],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(my(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):PC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||h==null||f==null)throw new AC;const m=s<<2|a>>4;if(r.push(m),h!==64){const R=a<<4&240|h>>2;if(r.push(R),f!==64){const x=h<<6&192|f;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class AC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vy=function(t){const e=my(t);return Gd.encodeByteArray(e,!0)},_a=function(t){return vy(t).replace(/\./g,"")},ya=function(t){try{return Gd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(t){return _y(void 0,t)}function _y(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!DC(n)||(t[n]=_y(t[n],e[n]));return t}function DC(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC=()=>MC().__FIREBASE_DEFAULTS__,bC=()=>{if(typeof process>"u"||typeof zg>"u")return;const t=zg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},FC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ya(t[1]);return e&&JSON.parse(e)},Kd=()=>{try{return LC()||bC()||FC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},yy=t=>{var e,n;return(n=(e=Kd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},UC=t=>{const e=yy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},wy=()=>{var t;return(t=Kd())===null||t===void 0?void 0:t.config},Ey=t=>{var e;return(e=Kd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[_a(JSON.stringify(n)),_a(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function zC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function BC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Sy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VC(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function WC(){return gy.NODE_ADMIN===!0}function HC(){try{return typeof indexedDB=="object"}catch{return!1}}function $C(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC="FirebaseError";class Bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=GC,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Uo.prototype.create)}}class Uo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?KC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Bn(i,a,r)}}function KC(t,e){return t.replace(qC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const qC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(t){return JSON.parse(t)}function je(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=yo(ya(s[0])||""),n=yo(ya(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},QC=function(t){const e=Cy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},YC=function(t){const e=Cy(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function $i(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Rh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wa(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function wo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Bg(s)&&Bg(o)){if(!wo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Bg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],h,g;for(let f=0;f<80;f++){f<40?f<20?(h=a^s&(o^a),g=1518500249):(h=s^o^a,g=1859775393):f<60?(h=s&o|a&(s|o),g=2400959708):(h=s^o^a,g=3395469782);const m=(i<<5|i>>>27)+h+u+g+r[f]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function JC(t,e){const n=new ZC(t,e);return n.subscribe.bind(n)}class ZC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");e1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=_c),i.error===void 0&&(i.error=_c),i.complete===void 0&&(i.complete=_c);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function e1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _c(){}function su(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,z(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ou=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t){return t&&t._delegate?t._delegate:t}class wr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Fo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(i1(e))try{this.getOrInitializeService({instanceIdentifier:Mr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mr){return this.instances.has(e)}getOptions(e=Mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:r1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mr){return this.component?this.component.multipleInstances?e:Mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function r1(t){return t===Mr?void 0:t}function i1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new n1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const o1={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},l1=de.INFO,a1={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},u1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=a1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lu{constructor(e){this.name=e,this._logLevel=l1,this._logHandler=u1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?o1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const c1=(t,e)=>e.some(n=>t instanceof n);let Vg,Wg;function h1(){return Vg||(Vg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function d1(){return Wg||(Wg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Iy=new WeakMap,Ph=new WeakMap,Ty=new WeakMap,yc=new WeakMap,Qd=new WeakMap;function f1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(fr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Iy.set(n,t)}).catch(()=>{}),Qd.set(e,t),e}function p1(t){if(Ph.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ph.set(t,e)}let Ah={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ph.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ty.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function g1(t){Ah=t(Ah)}function m1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wc(this),e,...n);return Ty.set(r,e.sort?e.sort():[e]),fr(r)}:d1().includes(t)?function(...e){return t.apply(wc(this),e),fr(Iy.get(this))}:function(...e){return fr(t.apply(wc(this),e))}}function v1(t){return typeof t=="function"?m1(t):(t instanceof IDBTransaction&&p1(t),c1(t,h1())?new Proxy(t,Ah):t)}function fr(t){if(t instanceof IDBRequest)return f1(t);if(yc.has(t))return yc.get(t);const e=v1(t);return e!==t&&(yc.set(t,e),Qd.set(e,t)),e}const wc=t=>Qd.get(t);function _1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=fr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(fr(o.result),u.oldVersion,u.newVersion,fr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const y1=["get","getKey","getAll","getAllKeys","count"],w1=["put","add","delete","clear"],Ec=new Map;function Hg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ec.get(e))return Ec.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=w1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||y1.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),i&&u.done]))[0]};return Ec.set(e,s),s}g1(t=>({...t,get:(e,n,r)=>Hg(e,n)||t.get(e,n,r),has:(e,n)=>!!Hg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(S1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function S1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Oh="@firebase/app",$g="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=new lu("@firebase/app"),C1="@firebase/app-compat",I1="@firebase/analytics-compat",T1="@firebase/analytics",k1="@firebase/app-check-compat",x1="@firebase/app-check",N1="@firebase/auth",R1="@firebase/auth-compat",P1="@firebase/database",A1="@firebase/data-connect",O1="@firebase/database-compat",D1="@firebase/functions",M1="@firebase/functions-compat",L1="@firebase/installations",b1="@firebase/installations-compat",F1="@firebase/messaging",U1="@firebase/messaging-compat",j1="@firebase/performance",z1="@firebase/performance-compat",B1="@firebase/remote-config",V1="@firebase/remote-config-compat",W1="@firebase/storage",H1="@firebase/storage-compat",$1="@firebase/firestore",G1="@firebase/vertexai-preview",K1="@firebase/firestore-compat",q1="firebase",Q1="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="[DEFAULT]",Y1={[Oh]:"fire-core",[C1]:"fire-core-compat",[T1]:"fire-analytics",[I1]:"fire-analytics-compat",[x1]:"fire-app-check",[k1]:"fire-app-check-compat",[N1]:"fire-auth",[R1]:"fire-auth-compat",[P1]:"fire-rtdb",[A1]:"fire-data-connect",[O1]:"fire-rtdb-compat",[D1]:"fire-fn",[M1]:"fire-fn-compat",[L1]:"fire-iid",[b1]:"fire-iid-compat",[F1]:"fire-fcm",[U1]:"fire-fcm-compat",[j1]:"fire-perf",[z1]:"fire-perf-compat",[B1]:"fire-rc",[V1]:"fire-rc-compat",[W1]:"fire-gcs",[H1]:"fire-gcs-compat",[$1]:"fire-fst",[K1]:"fire-fst-compat",[G1]:"fire-vertex","fire-js":"fire-js",[q1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea=new Map,X1=new Map,Mh=new Map;function Gg(t,e){try{t.container.addComponent(e)}catch(n){bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kr(t){const e=t.name;if(Mh.has(e))return bn.debug(`There were multiple attempts to register component ${e}.`),!1;Mh.set(e,t);for(const n of Ea.values())Gg(n,t);for(const n of X1.values())Gg(n,t);return!0}function au(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Tn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pr=new Uo("app","Firebase",J1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=Q1;function ky(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Dh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw pr.create("bad-app-name",{appName:String(i)});if(n||(n=wy()),!n)throw pr.create("no-options");const s=Ea.get(i);if(s){if(wo(n,s.options)&&wo(r,s.config))return s;throw pr.create("duplicate-app",{appName:i})}const o=new s1(i);for(const u of Mh.values())o.addComponent(u);const a=new Z1(n,r,o);return Ea.set(i,a),a}function xy(t=Dh){const e=Ea.get(t);if(!e&&t===Dh&&wy())return ky();if(!e)throw pr.create("no-app",{appName:t});return e}function pn(t,e,n){var r;let i=(r=Y1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bn.warn(a.join(" "));return}Kr(new wr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI="firebase-heartbeat-database",tI=1,Eo="firebase-heartbeat-store";let Sc=null;function Ny(){return Sc||(Sc=_1(eI,tI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Eo)}catch(n){console.warn(n)}}}}).catch(t=>{throw pr.create("idb-open",{originalErrorMessage:t.message})})),Sc}async function nI(t){try{const n=(await Ny()).transaction(Eo),r=await n.objectStore(Eo).get(Ry(t));return await n.done,r}catch(e){if(e instanceof Bn)bn.warn(e.message);else{const n=pr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bn.warn(n.message)}}}async function Kg(t,e){try{const r=(await Ny()).transaction(Eo,"readwrite");await r.objectStore(Eo).put(e,Ry(t)),await r.done}catch(n){if(n instanceof Bn)bn.warn(n.message);else{const r=pr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bn.warn(r.message)}}}function Ry(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=1024,iI=30*24*60*60*1e3;class sI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=qg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=iI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=qg(),{heartbeatsToSend:r,unsentEntries:i}=oI(this._heartbeatsCache.heartbeats),s=_a(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return bn.warn(n),""}}}function qg(){return new Date().toISOString().substring(0,10)}function oI(t,e=rI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Qg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return HC()?$C().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Qg(t){return _a(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(t){Kr(new wr("platform-logger",e=>new E1(e),"PRIVATE")),Kr(new wr("heartbeat",e=>new sI(e),"PRIVATE")),pn(Oh,$g,t),pn(Oh,$g,"esm2017"),pn("fire-js","")}aI("");var uI="firebase",cI="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pn(uI,cI,"app");function Yd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Py(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hI=Py,Ay=new Uo("auth","Firebase",Py());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=new lu("@firebase/auth");function dI(t,...e){Sa.logLevel<=de.WARN&&Sa.warn(`Auth (${ei}): ${t}`,...e)}function Wl(t,...e){Sa.logLevel<=de.ERROR&&Sa.error(`Auth (${ei}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t,...e){throw Xd(t,...e)}function gn(t,...e){return Xd(t,...e)}function Oy(t,e,n){const r=Object.assign(Object.assign({},hI()),{[e]:n});return new Uo("auth","Firebase",r).create(e,{appName:t.name})}function gr(t){return Oy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ay.create(t,...e)}function J(t,e,...n){if(!t)throw Xd(e,...n)}function kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wl(e),new Error(e)}function Un(t,e){t||kn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fI(){return Yg()==="http:"||Yg()==="https:"}function Yg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fI()||BC()||"connection"in navigator)?navigator.onLine:!0}function gI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Un(n>e,"Short delay should be less than long delay!"),this.isMobile=qd()||Sy()}get(){return pI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(t,e){Un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=new jo(3e4,6e4);function uu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ns(t,e,n,r,i={}){return My(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ts(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return zC()||(h.referrerPolicy="no-referrer"),Dy.fetch()(by(t,t.config.apiHost,n,a),h)})}async function My(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},mI),e);try{const i=new _I(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw kl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,h]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw kl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw kl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw kl(t,"user-disabled",o);const g=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Oy(t,g,h);Fn(t,g)}}catch(i){if(i instanceof Bn)throw i;Fn(t,"network-request-failed",{message:String(i)})}}async function Ly(t,e,n,r,i={}){const s=await ns(t,e,n,r,i);return"mfaPendingCredential"in s&&Fn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function by(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Jd(t.config,i):`${t.config.apiScheme}://${i}`}class _I{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gn(this.auth,"network-request-failed")),vI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function kl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=gn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yI(t,e){return ns(t,"POST","/v1/accounts:delete",e)}async function Fy(t,e){return ns(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wI(t,e=!1){const n=Mt(t),r=await n.getIdToken(e),i=Zd(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ks(Cc(i.auth_time)),issuedAtTime:Ks(Cc(i.iat)),expirationTime:Ks(Cc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Cc(t){return Number(t)*1e3}function Zd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wl("JWT malformed, contained fewer than 3 sections"),null;try{const i=ya(n);return i?JSON.parse(i):(Wl("Failed to decode base64 JWT payload"),null)}catch(i){return Wl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Xg(t){const e=Zd(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bn&&EI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function EI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ks(this.lastLoginAt),this.creationTime=Ks(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ca(t){var e;const n=t.auth,r=await t.getIdToken(),i=await So(t,Fy(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Uy(s.providerUserInfo):[],a=II(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),g=u?h:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new bh(s.createdAt,s.lastLoginAt),isAnonymous:g};Object.assign(t,f)}async function CI(t){const e=Mt(t);await Ca(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function II(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Uy(t){return t.map(e=>{var{providerId:n}=e,r=Yd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TI(t,e){const n=await My(t,{},async()=>{const r=ts({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=by(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Dy.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function kI(t,e){return ns(t,"POST","/v2/accounts:revokeToken",uu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=Xg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await TI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Di;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Di,this.toJSON())}_performRefresh(){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Yd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new SI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new bh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await So(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wI(this,e)}reload(){return CI(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ca(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tn(this.auth.app))return Promise.reject(gr(this.auth));const e=await this.getIdToken();return await So(this,yI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,h,g;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,R=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(a=n.tenantId)!==null&&a!==void 0?a:void 0,L=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,k=(h=n.createdAt)!==null&&h!==void 0?h:void 0,w=(g=n.lastLoginAt)!==null&&g!==void 0?g:void 0,{uid:I,emailVerified:D,isAnonymous:b,providerData:U,stsTokenManager:_}=n;J(I&&_,e,"internal-error");const v=Di.fromJSON(this.name,_);J(typeof I=="string",e,"internal-error"),Kn(f,e.name),Kn(m,e.name),J(typeof D=="boolean",e,"internal-error"),J(typeof b=="boolean",e,"internal-error"),Kn(R,e.name),Kn(x,e.name),Kn(O,e.name),Kn(L,e.name),Kn(k,e.name),Kn(w,e.name);const y=new xn({uid:I,auth:e,email:m,emailVerified:D,displayName:f,isAnonymous:b,photoURL:x,phoneNumber:R,tenantId:O,stsTokenManager:v,createdAt:k,lastLoginAt:w});return U&&Array.isArray(U)&&(y.providerData=U.map(E=>Object.assign({},E))),L&&(y._redirectEventId=L),y}static async _fromIdTokenResponse(e,n,r=!1){const i=new Di;i.updateFromServerResponse(n);const s=new xn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ca(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Uy(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Di;a.updateFromIdToken(r);const u=new xn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new bh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=new Map;function Nn(t){Un(t instanceof Function,"Expected a class definition");let e=Jg.get(t);return e?(Un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jy.type="NONE";const Zg=jy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t,e,n){return`firebase:${t}:${e}:${n}`}class Mi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Hl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Hl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Mi(Nn(Zg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Nn(Zg);const o=Hl(r,e.config.apiKey,e.name);let a=null;for(const h of n)try{const g=await h._get(o);if(g){const f=xn._fromJSON(e,g);h!==s&&(a=f),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Mi(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Mi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($y(e))return"Blackberry";if(Gy(e))return"Webos";if(By(e))return"Safari";if((e.includes("chrome/")||Vy(e))&&!e.includes("edge/"))return"Chrome";if(Hy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zy(t=ct()){return/firefox\//i.test(t)}function By(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vy(t=ct()){return/crios\//i.test(t)}function Wy(t=ct()){return/iemobile/i.test(t)}function Hy(t=ct()){return/android/i.test(t)}function $y(t=ct()){return/blackberry/i.test(t)}function Gy(t=ct()){return/webos/i.test(t)}function ef(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xI(t=ct()){var e;return ef(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NI(){return VC()&&document.documentMode===10}function Ky(t=ct()){return ef(t)||Hy(t)||Gy(t)||$y(t)||/windows phone/i.test(t)||Wy(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(t,e=[]){let n;switch(t){case"Browser":n=em(ct());break;case"Worker":n=`${em(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ei}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PI(t,e={}){return ns(t,"GET","/v2/passwordPolicy",uu(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=6;class OI{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:AI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tm(this),this.idTokenSubscription=new tm(this),this.beforeStateQueue=new RI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ay,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Mi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Fy(this,{idToken:e}),r=await xn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Tn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ca(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tn(this.app))return Promise.reject(gr(this));const n=e?Mt(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tn(this.app)?Promise.reject(gr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tn(this.app)?Promise.reject(gr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await PI(this),n=new OI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Uo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await kI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Mi.create(this,[Nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&dI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function cu(t){return Mt(t)}class tm{constructor(e){this.auth=e,this.observer=null,this.addObserver=JC(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function MI(t){tf=t}function LI(t){return tf.loadJS(t)}function bI(){return tf.gapiScript}function FI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(t,e){const n=au(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(wo(s,e??{}))return i;Fn(i,"already-initialized")}return n.initialize({options:e})}function jI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zI(t,e,n){const r=cu(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Qy(e),{host:o,port:a}=BI(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),VI()}function Qy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function BI(t){const e=Qy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:nm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:nm(o)}}}function nm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function VI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kn("not implemented")}_getIdTokenResponse(e){return kn("not implemented")}_linkToIdToken(e,n){return kn("not implemented")}_getReauthenticationResolver(e){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(t,e){return Ly(t,"POST","/v1/accounts:signInWithIdp",uu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI="http://localhost";class qr extends Yy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Yd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new qr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Li(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Li(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Li(e,n)}buildRequest(){const e={requestUri:WI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ts(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo extends Xy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends zo{constructor(){super("facebook.com")}static credential(e){return qr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends zo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.GOOGLE_SIGN_IN_METHOD="google.com";Zn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends zo{constructor(){super("github.com")}static credential(e){return qr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.GITHUB_SIGN_IN_METHOD="github.com";er.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends zo{constructor(){super("twitter.com")}static credential(e,n){return qr._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.TWITTER_SIGN_IN_METHOD="twitter.com";tr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HI(t,e){return Ly(t,"POST","/v1/accounts:signUp",uu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await xn._fromIdTokenResponse(e,r,i),o=rm(r);return new Er({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=rm(r);return new Er({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function rm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $I(t){var e;if(Tn(t.app))return Promise.reject(gr(t));const n=cu(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Er({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await HI(n,{returnSecureToken:!0}),i=await Er._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia extends Bn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ia.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ia(e,n,r,i)}}function Jy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ia._fromErrorAndOperation(t,s,e,r):s})}async function GI(t,e,n=!1){const r=await So(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Er._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KI(t,e,n=!1){const{auth:r}=t;if(Tn(r.app))return Promise.reject(gr(r));const i="reauthenticate";try{const s=await So(t,Jy(r,i,e,t),n);J(s.idToken,r,"internal-error");const o=Zd(s.idToken);J(o,r,"internal-error");const{sub:a}=o;return J(t.uid===a,r,"user-mismatch"),Er._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Fn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qI(t,e,n=!1){if(Tn(t.app))return Promise.reject(gr(t));const r="signIn",i=await Jy(t,r,e),s=await Er._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function QI(t,e,n,r){return Mt(t).onIdTokenChanged(e,n,r)}function YI(t,e,n){return Mt(t).beforeAuthStateChanged(e,n)}const Ta="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ta,"1"),this.storage.removeItem(Ta),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=1e3,JI=10;class e0 extends Zy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ky(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);NI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,JI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},XI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}e0.type="LOCAL";const ZI=e0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0 extends Zy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}t0.type="SESSION";const n0=t0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new hu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async h=>h(n.origin,s)),u=await eT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const h=nf("",20);i.port1.start();const g=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(g),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(g),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return window}function nT(t){mn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function rT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function sT(){return r0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="firebaseLocalStorageDb",oT=1,ka="firebaseLocalStorage",s0="fbase_key";class Bo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function du(t,e){return t.transaction([ka],e?"readwrite":"readonly").objectStore(ka)}function lT(){const t=indexedDB.deleteDatabase(i0);return new Bo(t).toPromise()}function Fh(){const t=indexedDB.open(i0,oT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ka,{keyPath:s0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ka)?e(r):(r.close(),await lT(),e(await Fh()))})})}async function im(t,e,n){const r=du(t,!0).put({[s0]:e,value:n});return new Bo(r).toPromise()}async function aT(t,e){const n=du(t,!1).get(e),r=await new Bo(n).toPromise();return r===void 0?null:r.value}function sm(t,e){const n=du(t,!0).delete(e);return new Bo(n).toPromise()}const uT=800,cT=3;class o0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return r0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hu._getInstance(sT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rT(),!this.activeServiceWorker)return;this.sender=new tT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fh();return await im(e,Ta,"1"),await sm(e,Ta),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>im(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>aT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=du(i,!1).getAll();return new Bo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}o0.type="LOCAL";const hT=o0;new jo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(t,e){return e?Nn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf extends Yy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Li(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Li(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Li(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fT(t){return qI(t.auth,new rf(t),t.bypassAuthState)}function pT(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),KI(n,new rf(t),t.bypassAuthState)}async function gT(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),GI(n,new rf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fT;case"linkViaPopup":case"linkViaRedirect":return gT;case"reauthViaPopup":case"reauthViaRedirect":return pT;default:Fn(this.auth,"internal-error")}}resolve(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=new jo(2e3,1e4);class Ti extends l0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ti.currentPopupAction&&Ti.currentPopupAction.cancel(),Ti.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Un(this.filter.length===1,"Popup operations only handle one event");const e=nf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ti.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mT.get())};e()}}Ti.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT="pendingRedirect",$l=new Map;class _T extends l0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=$l.get(this.auth._key());if(!e){try{const r=await yT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}$l.set(this.auth._key(),e)}return this.bypassAuthState||$l.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yT(t,e){const n=ST(e),r=ET(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function wT(t,e){$l.set(t._key(),e)}function ET(t){return Nn(t._redirectPersistence)}function ST(t){return Hl(vT,t.config.apiKey,t.name)}async function CT(t,e,n=!1){if(Tn(t.app))return Promise.reject(gr(t));const r=cu(t),i=dT(r,e),o=await new _T(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT=10*60*1e3;class TT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!a0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IT&&this.cachedEventUids.clear(),this.cachedEventUids.has(om(e))}saveEventToCache(e){this.cachedEventUids.add(om(e)),this.lastProcessedEventTime=Date.now()}}function om(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function a0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return a0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xT(t,e={}){return ns(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RT=/^https?/;async function PT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xT(t);for(const n of e)try{if(AT(n))return}catch{}Fn(t,"unauthorized-domain")}function AT(t){const e=Lh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!RT.test(n))return!1;if(NT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=new jo(3e4,6e4);function lm(){const t=mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function DT(t){return new Promise((e,n)=>{var r,i,s;function o(){lm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lm(),n(gn(t,"network-request-failed"))},timeout:OT.get()})}if(!((i=(r=mn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=mn().gapi)===null||s===void 0)&&s.load)o();else{const a=FI("iframefcb");return mn()[a]=()=>{gapi.load?o():n(gn(t,"network-request-failed"))},LI(`${bI()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Gl=null,e})}let Gl=null;function MT(t){return Gl=Gl||DT(t),Gl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=new jo(5e3,15e3),bT="__/auth/iframe",FT="emulator/auth/iframe",UT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zT(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Jd(e,FT):`https://${t.config.authDomain}/${bT}`,r={apiKey:e.apiKey,appName:t.name,v:ei},i=jT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ts(r).slice(1)}`}async function BT(t){const e=await MT(t),n=mn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:zT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=gn(t,"network-request-failed"),a=mn().setTimeout(()=>{s(o)},LT.get());function u(){mn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WT=500,HT=600,$T="_blank",GT="http://localhost";class am{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KT(t,e,n,r=WT,i=HT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},VT),{width:r.toString(),height:i.toString(),top:s,left:o}),h=ct().toLowerCase();n&&(a=Vy(h)?$T:n),zy(h)&&(e=e||GT,u.scrollbars="yes");const g=Object.entries(u).reduce((m,[R,x])=>`${m}${R}=${x},`,"");if(xI(h)&&a!=="_self")return qT(e||"",a),new am(null);const f=window.open(e||"",a,g);J(f,t,"popup-blocked");try{f.focus()}catch{}return new am(f)}function qT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT="__/auth/handler",YT="emulator/auth/handler",XT=encodeURIComponent("fac");async function um(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ei,eventId:i};if(e instanceof Xy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Rh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,f]of Object.entries({}))o[g]=f}if(e instanceof zo){const g=e.getScopes().filter(f=>f!=="");g.length>0&&(o.scopes=g.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const g of Object.keys(a))a[g]===void 0&&delete a[g];const u=await t._getAppCheckToken(),h=u?`#${XT}=${encodeURIComponent(u)}`:"";return`${JT(t)}?${ts(a).slice(1)}${h}`}function JT({config:t}){return t.emulator?Jd(t,YT):`https://${t.authDomain}/${QT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="webStorageSupport";class ZT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=n0,this._completeRedirectFn=CT,this._overrideRedirectResult=wT}async _openPopup(e,n,r,i){var s;Un((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await um(e,n,r,Lh(),i);return KT(e,o,nf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await um(e,n,r,Lh(),i);return nT(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Un(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await BT(e),r=new TT(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ic,{type:Ic},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ic];o!==void 0&&n(!!o),Fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=PT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ky()||By()||ef()}}const ek=ZT;var cm="@firebase/auth",hm="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rk(t){Kr(new wr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qy(t)},h=new DI(r,i,s,u);return jI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Kr(new wr("auth-internal",e=>{const n=cu(e.getProvider("auth").getImmediate());return(r=>new tk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pn(cm,hm,nk(t)),pn(cm,hm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik=5*60,sk=Ey("authIdTokenMaxAge")||ik;let dm=null;const ok=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>sk)return;const i=n==null?void 0:n.token;dm!==i&&(dm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function lk(t=xy()){const e=au(t,"auth");if(e.isInitialized())return e.getImmediate();const n=UI(t,{popupRedirectResolver:ek,persistence:[hT,ZI,n0]}),r=Ey("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=ok(s.toString());YI(n,o,()=>o(n.currentUser)),QI(n,a=>o(a))}}const i=yy("auth");return i&&zI(n,`http://${i}`),n}function ak(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}MI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=gn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",ak().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rk("Browser");var fm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var u0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,v){function y(){}y.prototype=v.prototype,_.D=v.prototype,_.prototype=new y,_.prototype.constructor=_,_.C=function(E,C,P){for(var S=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)S[Ie-2]=arguments[Ie];return v.prototype[C].apply(E,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,v,y){y||(y=0);var E=Array(16);if(typeof v=="string")for(var C=0;16>C;++C)E[C]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(C=0;16>C;++C)E[C]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=_.g[0],y=_.g[1],C=_.g[2];var P=_.g[3],S=v+(P^y&(C^P))+E[0]+3614090360&4294967295;v=y+(S<<7&4294967295|S>>>25),S=P+(C^v&(y^C))+E[1]+3905402710&4294967295,P=v+(S<<12&4294967295|S>>>20),S=C+(y^P&(v^y))+E[2]+606105819&4294967295,C=P+(S<<17&4294967295|S>>>15),S=y+(v^C&(P^v))+E[3]+3250441966&4294967295,y=C+(S<<22&4294967295|S>>>10),S=v+(P^y&(C^P))+E[4]+4118548399&4294967295,v=y+(S<<7&4294967295|S>>>25),S=P+(C^v&(y^C))+E[5]+1200080426&4294967295,P=v+(S<<12&4294967295|S>>>20),S=C+(y^P&(v^y))+E[6]+2821735955&4294967295,C=P+(S<<17&4294967295|S>>>15),S=y+(v^C&(P^v))+E[7]+4249261313&4294967295,y=C+(S<<22&4294967295|S>>>10),S=v+(P^y&(C^P))+E[8]+1770035416&4294967295,v=y+(S<<7&4294967295|S>>>25),S=P+(C^v&(y^C))+E[9]+2336552879&4294967295,P=v+(S<<12&4294967295|S>>>20),S=C+(y^P&(v^y))+E[10]+4294925233&4294967295,C=P+(S<<17&4294967295|S>>>15),S=y+(v^C&(P^v))+E[11]+2304563134&4294967295,y=C+(S<<22&4294967295|S>>>10),S=v+(P^y&(C^P))+E[12]+1804603682&4294967295,v=y+(S<<7&4294967295|S>>>25),S=P+(C^v&(y^C))+E[13]+4254626195&4294967295,P=v+(S<<12&4294967295|S>>>20),S=C+(y^P&(v^y))+E[14]+2792965006&4294967295,C=P+(S<<17&4294967295|S>>>15),S=y+(v^C&(P^v))+E[15]+1236535329&4294967295,y=C+(S<<22&4294967295|S>>>10),S=v+(C^P&(y^C))+E[1]+4129170786&4294967295,v=y+(S<<5&4294967295|S>>>27),S=P+(y^C&(v^y))+E[6]+3225465664&4294967295,P=v+(S<<9&4294967295|S>>>23),S=C+(v^y&(P^v))+E[11]+643717713&4294967295,C=P+(S<<14&4294967295|S>>>18),S=y+(P^v&(C^P))+E[0]+3921069994&4294967295,y=C+(S<<20&4294967295|S>>>12),S=v+(C^P&(y^C))+E[5]+3593408605&4294967295,v=y+(S<<5&4294967295|S>>>27),S=P+(y^C&(v^y))+E[10]+38016083&4294967295,P=v+(S<<9&4294967295|S>>>23),S=C+(v^y&(P^v))+E[15]+3634488961&4294967295,C=P+(S<<14&4294967295|S>>>18),S=y+(P^v&(C^P))+E[4]+3889429448&4294967295,y=C+(S<<20&4294967295|S>>>12),S=v+(C^P&(y^C))+E[9]+568446438&4294967295,v=y+(S<<5&4294967295|S>>>27),S=P+(y^C&(v^y))+E[14]+3275163606&4294967295,P=v+(S<<9&4294967295|S>>>23),S=C+(v^y&(P^v))+E[3]+4107603335&4294967295,C=P+(S<<14&4294967295|S>>>18),S=y+(P^v&(C^P))+E[8]+1163531501&4294967295,y=C+(S<<20&4294967295|S>>>12),S=v+(C^P&(y^C))+E[13]+2850285829&4294967295,v=y+(S<<5&4294967295|S>>>27),S=P+(y^C&(v^y))+E[2]+4243563512&4294967295,P=v+(S<<9&4294967295|S>>>23),S=C+(v^y&(P^v))+E[7]+1735328473&4294967295,C=P+(S<<14&4294967295|S>>>18),S=y+(P^v&(C^P))+E[12]+2368359562&4294967295,y=C+(S<<20&4294967295|S>>>12),S=v+(y^C^P)+E[5]+4294588738&4294967295,v=y+(S<<4&4294967295|S>>>28),S=P+(v^y^C)+E[8]+2272392833&4294967295,P=v+(S<<11&4294967295|S>>>21),S=C+(P^v^y)+E[11]+1839030562&4294967295,C=P+(S<<16&4294967295|S>>>16),S=y+(C^P^v)+E[14]+4259657740&4294967295,y=C+(S<<23&4294967295|S>>>9),S=v+(y^C^P)+E[1]+2763975236&4294967295,v=y+(S<<4&4294967295|S>>>28),S=P+(v^y^C)+E[4]+1272893353&4294967295,P=v+(S<<11&4294967295|S>>>21),S=C+(P^v^y)+E[7]+4139469664&4294967295,C=P+(S<<16&4294967295|S>>>16),S=y+(C^P^v)+E[10]+3200236656&4294967295,y=C+(S<<23&4294967295|S>>>9),S=v+(y^C^P)+E[13]+681279174&4294967295,v=y+(S<<4&4294967295|S>>>28),S=P+(v^y^C)+E[0]+3936430074&4294967295,P=v+(S<<11&4294967295|S>>>21),S=C+(P^v^y)+E[3]+3572445317&4294967295,C=P+(S<<16&4294967295|S>>>16),S=y+(C^P^v)+E[6]+76029189&4294967295,y=C+(S<<23&4294967295|S>>>9),S=v+(y^C^P)+E[9]+3654602809&4294967295,v=y+(S<<4&4294967295|S>>>28),S=P+(v^y^C)+E[12]+3873151461&4294967295,P=v+(S<<11&4294967295|S>>>21),S=C+(P^v^y)+E[15]+530742520&4294967295,C=P+(S<<16&4294967295|S>>>16),S=y+(C^P^v)+E[2]+3299628645&4294967295,y=C+(S<<23&4294967295|S>>>9),S=v+(C^(y|~P))+E[0]+4096336452&4294967295,v=y+(S<<6&4294967295|S>>>26),S=P+(y^(v|~C))+E[7]+1126891415&4294967295,P=v+(S<<10&4294967295|S>>>22),S=C+(v^(P|~y))+E[14]+2878612391&4294967295,C=P+(S<<15&4294967295|S>>>17),S=y+(P^(C|~v))+E[5]+4237533241&4294967295,y=C+(S<<21&4294967295|S>>>11),S=v+(C^(y|~P))+E[12]+1700485571&4294967295,v=y+(S<<6&4294967295|S>>>26),S=P+(y^(v|~C))+E[3]+2399980690&4294967295,P=v+(S<<10&4294967295|S>>>22),S=C+(v^(P|~y))+E[10]+4293915773&4294967295,C=P+(S<<15&4294967295|S>>>17),S=y+(P^(C|~v))+E[1]+2240044497&4294967295,y=C+(S<<21&4294967295|S>>>11),S=v+(C^(y|~P))+E[8]+1873313359&4294967295,v=y+(S<<6&4294967295|S>>>26),S=P+(y^(v|~C))+E[15]+4264355552&4294967295,P=v+(S<<10&4294967295|S>>>22),S=C+(v^(P|~y))+E[6]+2734768916&4294967295,C=P+(S<<15&4294967295|S>>>17),S=y+(P^(C|~v))+E[13]+1309151649&4294967295,y=C+(S<<21&4294967295|S>>>11),S=v+(C^(y|~P))+E[4]+4149444226&4294967295,v=y+(S<<6&4294967295|S>>>26),S=P+(y^(v|~C))+E[11]+3174756917&4294967295,P=v+(S<<10&4294967295|S>>>22),S=C+(v^(P|~y))+E[2]+718787259&4294967295,C=P+(S<<15&4294967295|S>>>17),S=y+(P^(C|~v))+E[9]+3951481745&4294967295,_.g[0]=_.g[0]+v&4294967295,_.g[1]=_.g[1]+(C+(S<<21&4294967295|S>>>11))&4294967295,_.g[2]=_.g[2]+C&4294967295,_.g[3]=_.g[3]+P&4294967295}r.prototype.u=function(_,v){v===void 0&&(v=_.length);for(var y=v-this.blockSize,E=this.B,C=this.h,P=0;P<v;){if(C==0)for(;P<=y;)i(this,_,P),P+=this.blockSize;if(typeof _=="string"){for(;P<v;)if(E[C++]=_.charCodeAt(P++),C==this.blockSize){i(this,E),C=0;break}}else for(;P<v;)if(E[C++]=_[P++],C==this.blockSize){i(this,E),C=0;break}}this.h=C,this.o+=v},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var v=1;v<_.length-8;++v)_[v]=0;var y=8*this.o;for(v=_.length-8;v<_.length;++v)_[v]=y&255,y/=256;for(this.u(_),_=Array(16),v=y=0;4>v;++v)for(var E=0;32>E;E+=8)_[y++]=this.g[v]>>>E&255;return _};function s(_,v){var y=a;return Object.prototype.hasOwnProperty.call(y,_)?y[_]:y[_]=v(_)}function o(_,v){this.h=v;for(var y=[],E=!0,C=_.length-1;0<=C;C--){var P=_[C]|0;E&&P==v||(y[C]=P,E=!1)}this.g=y}var a={};function u(_){return-128<=_&&128>_?s(_,function(v){return new o([v|0],0>v?-1:0)}):new o([_|0],0>_?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return f;if(0>_)return L(h(-_));for(var v=[],y=1,E=0;_>=y;E++)v[E]=_/y|0,y*=4294967296;return new o(v,0)}function g(_,v){if(_.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(_.charAt(0)=="-")return L(g(_.substring(1),v));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(v,8)),E=f,C=0;C<_.length;C+=8){var P=Math.min(8,_.length-C),S=parseInt(_.substring(C,C+P),v);8>P?(P=h(Math.pow(v,P)),E=E.j(P).add(h(S))):(E=E.j(y),E=E.add(h(S)))}return E}var f=u(0),m=u(1),R=u(16777216);t=o.prototype,t.m=function(){if(O(this))return-L(this).m();for(var _=0,v=1,y=0;y<this.g.length;y++){var E=this.i(y);_+=(0<=E?E:4294967296+E)*v,v*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(x(this))return"0";if(O(this))return"-"+L(this).toString(_);for(var v=h(Math.pow(_,6)),y=this,E="";;){var C=D(y,v).g;y=k(y,C.j(v));var P=((0<y.g.length?y.g[0]:y.h)>>>0).toString(_);if(y=C,x(y))return P+E;for(;6>P.length;)P="0"+P;E=P+E}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function x(_){if(_.h!=0)return!1;for(var v=0;v<_.g.length;v++)if(_.g[v]!=0)return!1;return!0}function O(_){return _.h==-1}t.l=function(_){return _=k(this,_),O(_)?-1:x(_)?0:1};function L(_){for(var v=_.g.length,y=[],E=0;E<v;E++)y[E]=~_.g[E];return new o(y,~_.h).add(m)}t.abs=function(){return O(this)?L(this):this},t.add=function(_){for(var v=Math.max(this.g.length,_.g.length),y=[],E=0,C=0;C<=v;C++){var P=E+(this.i(C)&65535)+(_.i(C)&65535),S=(P>>>16)+(this.i(C)>>>16)+(_.i(C)>>>16);E=S>>>16,P&=65535,S&=65535,y[C]=S<<16|P}return new o(y,y[y.length-1]&-2147483648?-1:0)};function k(_,v){return _.add(L(v))}t.j=function(_){if(x(this)||x(_))return f;if(O(this))return O(_)?L(this).j(L(_)):L(L(this).j(_));if(O(_))return L(this.j(L(_)));if(0>this.l(R)&&0>_.l(R))return h(this.m()*_.m());for(var v=this.g.length+_.g.length,y=[],E=0;E<2*v;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(var C=0;C<_.g.length;C++){var P=this.i(E)>>>16,S=this.i(E)&65535,Ie=_.i(C)>>>16,ft=_.i(C)&65535;y[2*E+2*C]+=S*ft,w(y,2*E+2*C),y[2*E+2*C+1]+=P*ft,w(y,2*E+2*C+1),y[2*E+2*C+1]+=S*Ie,w(y,2*E+2*C+1),y[2*E+2*C+2]+=P*Ie,w(y,2*E+2*C+2)}for(E=0;E<v;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=v;E<2*v;E++)y[E]=0;return new o(y,0)};function w(_,v){for(;(_[v]&65535)!=_[v];)_[v+1]+=_[v]>>>16,_[v]&=65535,v++}function I(_,v){this.g=_,this.h=v}function D(_,v){if(x(v))throw Error("division by zero");if(x(_))return new I(f,f);if(O(_))return v=D(L(_),v),new I(L(v.g),L(v.h));if(O(v))return v=D(_,L(v)),new I(L(v.g),v.h);if(30<_.g.length){if(O(_)||O(v))throw Error("slowDivide_ only works with positive integers.");for(var y=m,E=v;0>=E.l(_);)y=b(y),E=b(E);var C=U(y,1),P=U(E,1);for(E=U(E,2),y=U(y,2);!x(E);){var S=P.add(E);0>=S.l(_)&&(C=C.add(y),P=S),E=U(E,1),y=U(y,1)}return v=k(_,C.j(v)),new I(C,v)}for(C=f;0<=_.l(v);){for(y=Math.max(1,Math.floor(_.m()/v.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),P=h(y),S=P.j(v);O(S)||0<S.l(_);)y-=E,P=h(y),S=P.j(v);x(P)&&(P=m),C=C.add(P),_=k(_,S)}return new I(C,_)}t.A=function(_){return D(this,_).h},t.and=function(_){for(var v=Math.max(this.g.length,_.g.length),y=[],E=0;E<v;E++)y[E]=this.i(E)&_.i(E);return new o(y,this.h&_.h)},t.or=function(_){for(var v=Math.max(this.g.length,_.g.length),y=[],E=0;E<v;E++)y[E]=this.i(E)|_.i(E);return new o(y,this.h|_.h)},t.xor=function(_){for(var v=Math.max(this.g.length,_.g.length),y=[],E=0;E<v;E++)y[E]=this.i(E)^_.i(E);return new o(y,this.h^_.h)};function b(_){for(var v=_.g.length+1,y=[],E=0;E<v;E++)y[E]=_.i(E)<<1|_.i(E-1)>>>31;return new o(y,_.h)}function U(_,v){var y=v>>5;v%=32;for(var E=_.g.length-y,C=[],P=0;P<E;P++)C[P]=0<v?_.i(P+y)>>>v|_.i(P+y+1)<<32-v:_.i(P+y);return new o(C,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=g,u0=o}).apply(typeof fm<"u"?fm:typeof self<"u"?self:typeof window<"u"?window:{});var xl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,c,d){return l==Array.prototype||l==Object.prototype||(l[c]=d.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof xl=="object"&&xl];for(var c=0;c<l.length;++c){var d=l[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(l,c){if(c)e:{var d=r;l=l.split(".");for(var p=0;p<l.length-1;p++){var A=l[p];if(!(A in d))break e;d=d[A]}l=l[l.length-1],p=d[l],c=c(p),c!=p&&c!=null&&e(d,l,{configurable:!0,writable:!0,value:c})}}function s(l,c){l instanceof String&&(l+="");var d=0,p=!1,A={next:function(){if(!p&&d<l.length){var M=d++;return{value:c(M,l[M]),done:!1}}return p=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(l){return l||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var c=typeof l;return c=c!="object"?c:l?Array.isArray(l)?"array":c:"null",c=="array"||c=="object"&&typeof l.length=="number"}function h(l){var c=typeof l;return c=="object"&&l!=null||c=="function"}function g(l,c,d){return l.call.apply(l.bind,arguments)}function f(l,c,d){if(!l)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,p),l.apply(c,A)}}return function(){return l.apply(c,arguments)}}function m(l,c,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:f,m.apply(null,arguments)}function R(l,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),l.apply(this,p)}}function x(l,c){function d(){}d.prototype=c.prototype,l.aa=c.prototype,l.prototype=new d,l.prototype.constructor=l,l.Qb=function(p,A,M){for(var V=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)V[ve-2]=arguments[ve];return c.prototype[A].apply(p,V)}}function O(l){const c=l.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=l[p];return d}return[]}function L(l,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const A=l.length||0,M=p.length||0;l.length=A+M;for(let V=0;V<M;V++)l[A+V]=p[V]}else l.push(p)}}class k{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function w(l){return/^[\s\xa0]*$/.test(l)}function I(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function D(l){return D[" "](l),l}D[" "]=function(){};var b=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function U(l,c,d){for(const p in l)c.call(d,l[p],p,l)}function _(l,c){for(const d in l)c.call(void 0,l[d],d,l)}function v(l){const c={};for(const d in l)c[d]=l[d];return c}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(l,c){let d,p;for(let A=1;A<arguments.length;A++){p=arguments[A];for(d in p)l[d]=p[d];for(let M=0;M<y.length;M++)d=y[M],Object.prototype.hasOwnProperty.call(p,d)&&(l[d]=p[d])}}function C(l){var c=1;l=l.split(":");const d=[];for(;0<c&&l.length;)d.push(l.shift()),c--;return l.length&&d.push(l.join(":")),d}function P(l){a.setTimeout(()=>{throw l},0)}function S(){var l=Y;let c=null;return l.g&&(c=l.g,l.g=l.g.next,l.g||(l.h=null),c.next=null),c}class Ie{constructor(){this.h=this.g=null}add(c,d){const p=ft.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var ft=new k(()=>new Gt,l=>l.reset());class Gt{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let pt,W=!1,Y=new Ie,N=()=>{const l=a.Promise.resolve(void 0);pt=()=>{l.then(T)}};var T=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(d){P(d)}var c=ft;c.j(l),100>c.h&&(c.h++,l.next=c.g,c.g=l)}W=!1};function B(){this.s=this.s,this.C=this.C}B.prototype.s=!1,B.prototype.ma=function(){this.s||(this.s=!0,this.N())},B.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function H(l,c){this.type=l,this.g=this.target=c,this.defaultPrevented=!1}H.prototype.h=function(){this.defaultPrevented=!0};var K=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,c=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const d=()=>{};a.addEventListener("test",d,c),a.removeEventListener("test",d,c)}catch{}return l}();function q(l,c){if(H.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var d=this.type=l.type,p=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=c,c=l.relatedTarget){if(b){e:{try{D(c.nodeName);var A=!0;break e}catch{}A=!1}A||(c=null)}}else d=="mouseover"?c=l.fromElement:d=="mouseout"&&(c=l.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Q[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&q.aa.h.call(this)}}x(q,H);var Q={2:"touch",3:"pen",4:"mouse"};q.prototype.h=function(){q.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var G="closure_listenable_"+(1e6*Math.random()|0),Z=0;function he(l,c,d,p,A){this.listener=l,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=A,this.key=++Z,this.da=this.fa=!1}function fe(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function le(l){this.src=l,this.g={},this.h=0}le.prototype.add=function(l,c,d,p,A){var M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);var V=Oe(l,c,p,A);return-1<V?(c=l[V],d||(c.fa=!1)):(c=new he(c,this.src,M,!!p,A),c.fa=d,l.push(c)),c};function pe(l,c){var d=c.type;if(d in l.g){var p=l.g[d],A=Array.prototype.indexOf.call(p,c,void 0),M;(M=0<=A)&&Array.prototype.splice.call(p,A,1),M&&(fe(c),l.g[d].length==0&&(delete l.g[d],l.h--))}}function Oe(l,c,d,p){for(var A=0;A<l.length;++A){var M=l[A];if(!M.da&&M.listener==c&&M.capture==!!d&&M.ha==p)return A}return-1}var ne="closure_lm_"+(1e6*Math.random()|0),Be={};function gt(l,c,d,p,A){if(Array.isArray(c)){for(var M=0;M<c.length;M++)gt(l,c[M],d,p,A);return null}return d=Qo(d),l&&l[G]?l.K(c,d,h(p)?!!p.capture:!1,A):kt(l,c,d,!1,p,A)}function kt(l,c,d,p,A,M){if(!c)throw Error("Invalid event type");var V=h(A)?!!A.capture:!!A,ve=os(l);if(ve||(l[ne]=ve=new le(l)),d=ve.add(c,d,p,V,M),d.proxy)return d;if(p=Kt(),d.proxy=p,p.src=l,p.listener=d,l.addEventListener)K||(A=V),A===void 0&&(A=!1),l.addEventListener(c.toString(),p,A);else if(l.attachEvent)l.attachEvent(qo(c.toString()),p);else if(l.addListener&&l.removeListener)l.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Kt(){function l(d){return c.call(l.src,l.listener,d)}const c=xu;return l}function ln(l,c,d,p,A){if(Array.isArray(c))for(var M=0;M<c.length;M++)ln(l,c[M],d,p,A);else p=h(p)?!!p.capture:!!p,d=Qo(d),l&&l[G]?(l=l.i,c=String(c).toString(),c in l.g&&(M=l.g[c],d=Oe(M,d,p,A),-1<d&&(fe(M[d]),Array.prototype.splice.call(M,d,1),M.length==0&&(delete l.g[c],l.h--)))):l&&(l=os(l))&&(c=l.g[c.toString()],l=-1,c&&(l=Oe(c,d,p,A)),(d=-1<l?c[l]:null)&&mt(d))}function mt(l){if(typeof l!="number"&&l&&!l.da){var c=l.src;if(c&&c[G])pe(c.i,l);else{var d=l.type,p=l.proxy;c.removeEventListener?c.removeEventListener(d,p,l.capture):c.detachEvent?c.detachEvent(qo(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=os(c))?(pe(d,l),d.h==0&&(d.src=null,c[ne]=null)):fe(l)}}}function qo(l){return l in Be?Be[l]:Be[l]="on"+l}function xu(l,c){if(l.da)l=!0;else{c=new q(c,this);var d=l.listener,p=l.ha||l.src;l.fa&&mt(l),l=d.call(p,c)}return l}function os(l){return l=l[ne],l instanceof le?l:null}var ri="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qo(l){return typeof l=="function"?l:(l[ri]||(l[ri]=function(c){return l.handleEvent(c)}),l[ri])}function be(){B.call(this),this.i=new le(this),this.M=this,this.F=null}x(be,B),be.prototype[G]=!0,be.prototype.removeEventListener=function(l,c,d,p){ln(this,l,c,d,p)};function Ge(l,c){var d,p=l.F;if(p)for(d=[];p;p=p.F)d.push(p);if(l=l.M,p=c.type||c,typeof c=="string")c=new H(c,l);else if(c instanceof H)c.target=c.target||l;else{var A=c;c=new H(p,l),E(c,A)}if(A=!0,d)for(var M=d.length-1;0<=M;M--){var V=c.g=d[M];A=ii(V,p,!0,c)&&A}if(V=c.g=l,A=ii(V,p,!0,c)&&A,A=ii(V,p,!1,c)&&A,d)for(M=0;M<d.length;M++)V=c.g=d[M],A=ii(V,p,!1,c)&&A}be.prototype.N=function(){if(be.aa.N.call(this),this.i){var l=this.i,c;for(c in l.g){for(var d=l.g[c],p=0;p<d.length;p++)fe(d[p]);delete l.g[c],l.h--}}this.F=null},be.prototype.K=function(l,c,d,p){return this.i.add(String(l),c,!1,d,p)},be.prototype.L=function(l,c,d,p){return this.i.add(String(l),c,!0,d,p)};function ii(l,c,d,p){if(c=l.i.g[String(c)],!c)return!0;c=c.concat();for(var A=!0,M=0;M<c.length;++M){var V=c[M];if(V&&!V.da&&V.capture==d){var ve=V.listener,Ke=V.ha||V.src;V.fa&&pe(l.i,V),A=ve.call(Ke,p)!==!1&&A}}return A&&!p.defaultPrevented}function ls(l,c,d){if(typeof l=="function")d&&(l=m(l,d));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:a.setTimeout(l,c||0)}function as(l){l.g=ls(()=>{l.g=null,l.i&&(l.i=!1,as(l))},l.l);const c=l.h;l.h=null,l.m.apply(null,c)}class us extends B{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:as(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Nr(l){B.call(this),this.h=l,this.g={}}x(Nr,B);var Yo=[];function Bf(l){U(l.g,function(c,d){this.g.hasOwnProperty(d)&&mt(c)},l),l.g={}}Nr.prototype.N=function(){Nr.aa.N.call(this),Bf(this)},Nr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Nu=a.JSON.stringify,Rw=a.JSON.parse,Pw=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Ru(){}Ru.prototype.h=null;function Vf(l){return l.h||(l.h=l.i())}function Aw(){}var cs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Pu(){H.call(this,"d")}x(Pu,H);function Au(){H.call(this,"c")}x(Au,H);var si={},Wf=null;function Ou(){return Wf=Wf||new be}si.La="serverreachability";function Hf(l){H.call(this,si.La,l)}x(Hf,H);function hs(l){const c=Ou();Ge(c,new Hf(c))}si.STAT_EVENT="statevent";function $f(l,c){H.call(this,si.STAT_EVENT,l),this.stat=c}x($f,H);function st(l){const c=Ou();Ge(c,new $f(c,l))}si.Ma="timingevent";function Gf(l,c){H.call(this,si.Ma,l),this.size=c}x(Gf,H);function ds(l,c){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},c)}function fs(){this.g=!0}fs.prototype.xa=function(){this.g=!1};function Ow(l,c,d,p,A,M){l.info(function(){if(l.g)if(M)for(var V="",ve=M.split("&"),Ke=0;Ke<ve.length;Ke++){var ae=ve[Ke].split("=");if(1<ae.length){var Ze=ae[0];ae=ae[1];var et=Ze.split("_");V=2<=et.length&&et[1]=="type"?V+(Ze+"="+ae+"&"):V+(Ze+"=redacted&")}}else V=null;else V=M;return"XMLHTTP REQ ("+p+") [attempt "+A+"]: "+c+`
`+d+`
`+V})}function Dw(l,c,d,p,A,M,V){l.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+A+"]: "+c+`
`+d+`
`+M+" "+V})}function oi(l,c,d,p){l.info(function(){return"XMLHTTP TEXT ("+c+"): "+Lw(l,d)+(p?" "+p:"")})}function Mw(l,c){l.info(function(){return"TIMEOUT: "+c})}fs.prototype.info=function(){};function Lw(l,c){if(!l.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(l=0;l<d.length;l++)if(Array.isArray(d[l])){var p=d[l];if(!(2>p.length)){var A=p[1];if(Array.isArray(A)&&!(1>A.length)){var M=A[0];if(M!="noop"&&M!="stop"&&M!="close")for(var V=1;V<A.length;V++)A[V]=""}}}}return Nu(d)}catch{return c}}var Du={NO_ERROR:0,TIMEOUT:8},bw={},Mu;function Xo(){}x(Xo,Ru),Xo.prototype.g=function(){return new XMLHttpRequest},Xo.prototype.i=function(){return{}},Mu=new Xo;function Wn(l,c,d,p){this.j=l,this.i=c,this.l=d,this.R=p||1,this.U=new Nr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Kf}function Kf(){this.i=null,this.g="",this.h=!1}var qf={},Lu={};function bu(l,c,d){l.L=1,l.v=tl(_n(c)),l.m=d,l.P=!0,Qf(l,null)}function Qf(l,c){l.F=Date.now(),Jo(l),l.A=_n(l.v);var d=l.A,p=l.R;Array.isArray(p)||(p=[String(p)]),up(d.i,"t",p),l.C=0,d=l.j.J,l.h=new Kf,l.g=xp(l.j,d?c:null,!l.m),0<l.O&&(l.M=new us(m(l.Y,l,l.g),l.O)),c=l.U,d=l.g,p=l.ca;var A="readystatechange";Array.isArray(A)||(A&&(Yo[0]=A.toString()),A=Yo);for(var M=0;M<A.length;M++){var V=gt(d,A[M],p||c.handleEvent,!1,c.h||c);if(!V)break;c.g[V.key]=V}c=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,c)):(l.u="GET",l.g.ea(l.A,l.u,null,c)),hs(),Ow(l.i,l.u,l.A,l.l,l.R,l.m)}Wn.prototype.ca=function(l){l=l.target;const c=this.M;c&&yn(l)==3?c.j():this.Y(l)},Wn.prototype.Y=function(l){try{if(l==this.g)e:{const et=yn(this.g);var c=this.g.Ba();const ui=this.g.Z();if(!(3>et)&&(et!=3||this.g&&(this.h.h||this.g.oa()||mp(this.g)))){this.J||et!=4||c==7||(c==8||0>=ui?hs(3):hs(2)),Fu(this);var d=this.g.Z();this.X=d;t:if(Yf(this)){var p=mp(this.g);l="";var A=p.length,M=yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Rr(this),ps(this);var V="";break t}this.h.i=new a.TextDecoder}for(c=0;c<A;c++)this.h.h=!0,l+=this.h.i.decode(p[c],{stream:!(M&&c==A-1)});p.length=0,this.h.g+=l,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=d==200,Dw(this.i,this.u,this.A,this.l,this.R,et,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,Ke=this.g;if((ve=Ke.g?Ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(ve)){var ae=ve;break t}}ae=null}if(d=ae)oi(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Uu(this,d);else{this.o=!1,this.s=3,st(12),Rr(this),ps(this);break e}}if(this.P){d=!0;let qt;for(;!this.J&&this.C<V.length;)if(qt=Fw(this,V),qt==Lu){et==4&&(this.s=4,st(14),d=!1),oi(this.i,this.l,null,"[Incomplete Response]");break}else if(qt==qf){this.s=4,st(15),oi(this.i,this.l,V,"[Invalid Chunk]"),d=!1;break}else oi(this.i,this.l,qt,null),Uu(this,qt);if(Yf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),et!=4||V.length!=0||this.h.h||(this.s=1,st(16),d=!1),this.o=this.o&&d,!d)oi(this.i,this.l,V,"[Invalid Chunked Response]"),Rr(this),ps(this);else if(0<V.length&&!this.W){this.W=!0;var Ze=this.j;Ze.g==this&&Ze.ba&&!Ze.M&&(Ze.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),Hu(Ze),Ze.M=!0,st(11))}}else oi(this.i,this.l,V,null),Uu(this,V);et==4&&Rr(this),this.o&&!this.J&&(et==4?Cp(this.j,this):(this.o=!1,Jo(this)))}else eE(this.g),d==400&&0<V.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),Rr(this),ps(this)}}}catch{}finally{}};function Yf(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Fw(l,c){var d=l.C,p=c.indexOf(`
`,d);return p==-1?Lu:(d=Number(c.substring(d,p)),isNaN(d)?qf:(p+=1,p+d>c.length?Lu:(c=c.slice(p,p+d),l.C=p+d,c)))}Wn.prototype.cancel=function(){this.J=!0,Rr(this)};function Jo(l){l.S=Date.now()+l.I,Xf(l,l.I)}function Xf(l,c){if(l.B!=null)throw Error("WatchDog timer not null");l.B=ds(m(l.ba,l),c)}function Fu(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Wn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Mw(this.i,this.A),this.L!=2&&(hs(),st(17)),Rr(this),this.s=2,ps(this)):Xf(this,this.S-l)};function ps(l){l.j.G==0||l.J||Cp(l.j,l)}function Rr(l){Fu(l);var c=l.M;c&&typeof c.ma=="function"&&c.ma(),l.M=null,Bf(l.U),l.g&&(c=l.g,l.g=null,c.abort(),c.ma())}function Uu(l,c){try{var d=l.j;if(d.G!=0&&(d.g==l||ju(d.h,l))){if(!l.K&&ju(d.h,l)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var A=p;if(A[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<l.F)ll(d),sl(d);else break e;Wu(d),st(18)}}else d.za=A[1],0<d.za-d.T&&37500>A[2]&&d.F&&d.v==0&&!d.C&&(d.C=ds(m(d.Za,d),6e3));if(1>=ep(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Ar(d,11)}else if((l.K||d.g==l)&&ll(d),!w(c))for(A=d.Da.g.parse(c),c=0;c<A.length;c++){let ae=A[c];if(d.T=ae[0],ae=ae[1],d.G==2)if(ae[0]=="c"){d.K=ae[1],d.ia=ae[2];const Ze=ae[3];Ze!=null&&(d.la=Ze,d.j.info("VER="+d.la));const et=ae[4];et!=null&&(d.Aa=et,d.j.info("SVER="+d.Aa));const ui=ae[5];ui!=null&&typeof ui=="number"&&0<ui&&(p=1.5*ui,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const qt=l.g;if(qt){const al=qt.g?qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(al){var M=p.h;M.g||al.indexOf("spdy")==-1&&al.indexOf("quic")==-1&&al.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(zu(M,M.h),M.h=null))}if(p.D){const $u=qt.g?qt.g.getResponseHeader("X-HTTP-Session-Id"):null;$u&&(p.ya=$u,Ee(p.I,p.D,$u))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-l.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var V=l;if(p.qa=kp(p,p.J?p.ia:null,p.W),V.K){tp(p.h,V);var ve=V,Ke=p.L;Ke&&(ve.I=Ke),ve.B&&(Fu(ve),Jo(ve)),p.g=V}else Ep(p);0<d.i.length&&ol(d)}else ae[0]!="stop"&&ae[0]!="close"||Ar(d,7);else d.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?Ar(d,7):Vu(d):ae[0]!="noop"&&d.l&&d.l.ta(ae),d.v=0)}}hs(4)}catch{}}var Uw=class{constructor(l,c){this.g=l,this.map=c}};function Jf(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zf(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ep(l){return l.h?1:l.g?l.g.size:0}function ju(l,c){return l.h?l.h==c:l.g?l.g.has(c):!1}function zu(l,c){l.g?l.g.add(c):l.h=c}function tp(l,c){l.h&&l.h==c?l.h=null:l.g&&l.g.has(c)&&l.g.delete(c)}Jf.prototype.cancel=function(){if(this.i=np(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function np(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let c=l.i;for(const d of l.g.values())c=c.concat(d.D);return c}return O(l.i)}function jw(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var c=[],d=l.length,p=0;p<d;p++)c.push(l[p]);return c}c=[],d=0;for(p in l)c[d++]=l[p];return c}function zw(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var c=[];l=l.length;for(var d=0;d<l;d++)c.push(d);return c}c=[],d=0;for(const p in l)c[d++]=p;return c}}}function rp(l,c){if(l.forEach&&typeof l.forEach=="function")l.forEach(c,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,c,void 0);else for(var d=zw(l),p=jw(l),A=p.length,M=0;M<A;M++)c.call(void 0,p[M],d&&d[M],l)}var ip=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bw(l,c){if(l){l=l.split("&");for(var d=0;d<l.length;d++){var p=l[d].indexOf("="),A=null;if(0<=p){var M=l[d].substring(0,p);A=l[d].substring(p+1)}else M=l[d];c(M,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Pr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Pr){this.h=l.h,Zo(this,l.j),this.o=l.o,this.g=l.g,el(this,l.s),this.l=l.l;var c=l.i,d=new vs;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),sp(this,d),this.m=l.m}else l&&(c=String(l).match(ip))?(this.h=!1,Zo(this,c[1]||"",!0),this.o=gs(c[2]||""),this.g=gs(c[3]||"",!0),el(this,c[4]),this.l=gs(c[5]||"",!0),sp(this,c[6]||"",!0),this.m=gs(c[7]||"")):(this.h=!1,this.i=new vs(null,this.h))}Pr.prototype.toString=function(){var l=[],c=this.j;c&&l.push(ms(c,op,!0),":");var d=this.g;return(d||c=="file")&&(l.push("//"),(c=this.o)&&l.push(ms(c,op,!0),"@"),l.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&l.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&l.push("/"),l.push(ms(d,d.charAt(0)=="/"?Hw:Ww,!0))),(d=this.i.toString())&&l.push("?",d),(d=this.m)&&l.push("#",ms(d,Gw)),l.join("")};function _n(l){return new Pr(l)}function Zo(l,c,d){l.j=d?gs(c,!0):c,l.j&&(l.j=l.j.replace(/:$/,""))}function el(l,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);l.s=c}else l.s=null}function sp(l,c,d){c instanceof vs?(l.i=c,Kw(l.i,l.h)):(d||(c=ms(c,$w)),l.i=new vs(c,l.h))}function Ee(l,c,d){l.i.set(c,d)}function tl(l){return Ee(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function gs(l,c){return l?c?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function ms(l,c,d){return typeof l=="string"?(l=encodeURI(l).replace(c,Vw),d&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Vw(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var op=/[#\/\?@]/g,Ww=/[#\?:]/g,Hw=/[#\?]/g,$w=/[#\?@]/g,Gw=/#/g;function vs(l,c){this.h=this.g=null,this.i=l||null,this.j=!!c}function Hn(l){l.g||(l.g=new Map,l.h=0,l.i&&Bw(l.i,function(c,d){l.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=vs.prototype,t.add=function(l,c){Hn(this),this.i=null,l=li(this,l);var d=this.g.get(l);return d||this.g.set(l,d=[]),d.push(c),this.h+=1,this};function lp(l,c){Hn(l),c=li(l,c),l.g.has(c)&&(l.i=null,l.h-=l.g.get(c).length,l.g.delete(c))}function ap(l,c){return Hn(l),c=li(l,c),l.g.has(c)}t.forEach=function(l,c){Hn(this),this.g.forEach(function(d,p){d.forEach(function(A){l.call(c,A,p,this)},this)},this)},t.na=function(){Hn(this);const l=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const A=l[p];for(let M=0;M<A.length;M++)d.push(c[p])}return d},t.V=function(l){Hn(this);let c=[];if(typeof l=="string")ap(this,l)&&(c=c.concat(this.g.get(li(this,l))));else{l=Array.from(this.g.values());for(let d=0;d<l.length;d++)c=c.concat(l[d])}return c},t.set=function(l,c){return Hn(this),this.i=null,l=li(this,l),ap(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[c]),this.h+=1,this},t.get=function(l,c){return l?(l=this.V(l),0<l.length?String(l[0]):c):c};function up(l,c,d){lp(l,c),0<d.length&&(l.i=null,l.g.set(li(l,c),O(d)),l.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const M=encodeURIComponent(String(p)),V=this.V(p);for(p=0;p<V.length;p++){var A=M;V[p]!==""&&(A+="="+encodeURIComponent(String(V[p]))),l.push(A)}}return this.i=l.join("&")};function li(l,c){return c=String(c),l.j&&(c=c.toLowerCase()),c}function Kw(l,c){c&&!l.j&&(Hn(l),l.i=null,l.g.forEach(function(d,p){var A=p.toLowerCase();p!=A&&(lp(this,p),up(this,A,d))},l)),l.j=c}function qw(l,c){const d=new fs;if(a.Image){const p=new Image;p.onload=R($n,d,"TestLoadImage: loaded",!0,c,p),p.onerror=R($n,d,"TestLoadImage: error",!1,c,p),p.onabort=R($n,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=R($n,d,"TestLoadImage: timeout",!1,c,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=l}else c(!1)}function Qw(l,c){const d=new fs,p=new AbortController,A=setTimeout(()=>{p.abort(),$n(d,"TestPingServer: timeout",!1,c)},1e4);fetch(l,{signal:p.signal}).then(M=>{clearTimeout(A),M.ok?$n(d,"TestPingServer: ok",!0,c):$n(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),$n(d,"TestPingServer: error",!1,c)})}function $n(l,c,d,p,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),p(d)}catch{}}function Yw(){this.g=new Pw}function Xw(l,c,d){const p=d||"";try{rp(l,function(A,M){let V=A;h(A)&&(V=Nu(A)),c.push(p+M+"="+encodeURIComponent(V))})}catch(A){throw c.push(p+"type="+encodeURIComponent("_badmap")),A}}function nl(l){this.l=l.Ub||null,this.j=l.eb||!1}x(nl,Ru),nl.prototype.g=function(){return new rl(this.l,this.j)},nl.prototype.i=function(l){return function(){return l}}({});function rl(l,c){be.call(this),this.D=l,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(rl,be),t=rl.prototype,t.open=function(l,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=c,this.readyState=1,ys(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(c.body=l),(this.D||a).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_s(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,ys(this)),this.g&&(this.readyState=3,ys(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;cp(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function cp(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var c=l.value?l.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!l.done}))&&(this.response=this.responseText+=c)}l.done?_s(this):ys(this),this.readyState==3&&cp(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,_s(this))},t.Qa=function(l){this.g&&(this.response=l,_s(this))},t.ga=function(){this.g&&_s(this)};function _s(l){l.readyState=4,l.l=null,l.j=null,l.v=null,ys(l)}t.setRequestHeader=function(l,c){this.u.append(l,c)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,l.push(d[0]+": "+d[1]),d=c.next();return l.join(`\r
`)};function ys(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(rl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function hp(l){let c="";return U(l,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function Bu(l,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=hp(d),typeof l=="string"?d!=null&&encodeURIComponent(String(d)):Ee(l,c,d))}function De(l){be.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(De,be);var Jw=/^https?$/i,Zw=["POST","PUT"];t=De.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);c=c?c.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Mu.g(),this.v=this.o?Vf(this.o):Vf(Mu),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(c,String(l),!0),this.B=!1}catch(M){dp(this,M);return}if(l=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var A in p)d.set(A,p[A]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const M of p.keys())d.set(M,p.get(M));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(M=>M.toLowerCase()=="content-type"),A=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Zw,c,void 0))||p||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,V]of d)this.g.setRequestHeader(M,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gp(this),this.u=!0,this.g.send(l),this.u=!1}catch(M){dp(this,M)}};function dp(l,c){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=c,l.m=5,fp(l),il(l)}function fp(l){l.A||(l.A=!0,Ge(l,"complete"),Ge(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Ge(this,"complete"),Ge(this,"abort"),il(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),il(this,!0)),De.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?pp(this):this.bb())},t.bb=function(){pp(this)};function pp(l){if(l.h&&typeof o<"u"&&(!l.v[1]||yn(l)!=4||l.Z()!=2)){if(l.u&&yn(l)==4)ls(l.Ea,0,l);else if(Ge(l,"readystatechange"),yn(l)==4){l.h=!1;try{const V=l.Z();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=V===0){var A=String(l.D).match(ip)[1]||null;!A&&a.self&&a.self.location&&(A=a.self.location.protocol.slice(0,-1)),p=!Jw.test(A?A.toLowerCase():"")}d=p}if(d)Ge(l,"complete"),Ge(l,"success");else{l.m=6;try{var M=2<yn(l)?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.Z()+"]",fp(l)}}finally{il(l)}}}}function il(l,c){if(l.g){gp(l);const d=l.g,p=l.v[0]?()=>{}:null;l.g=null,l.v=null,c||Ge(l,"ready");try{d.onreadystatechange=p}catch{}}}function gp(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function yn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<yn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var c=this.g.responseText;return l&&c.indexOf(l)==0&&(c=c.substring(l.length)),Rw(c)}};function mp(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function eE(l){const c={};l=(l.g&&2<=yn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<l.length;p++){if(w(l[p]))continue;var d=C(l[p]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const M=c[A]||[];c[A]=M,M.push(d)}_(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ws(l,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[l]||c}function vp(l){this.Aa=0,this.i=[],this.j=new fs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ws("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ws("baseRetryDelayMs",5e3,l),this.cb=ws("retryDelaySeedMs",1e4,l),this.Wa=ws("forwardChannelMaxRetries",2,l),this.wa=ws("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Jf(l&&l.concurrentRequestLimit),this.Da=new Yw,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=vp.prototype,t.la=8,t.G=1,t.connect=function(l,c,d,p){st(0),this.W=l,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=kp(this,null,this.W),ol(this)};function Vu(l){if(_p(l),l.G==3){var c=l.U++,d=_n(l.I);if(Ee(d,"SID",l.K),Ee(d,"RID",c),Ee(d,"TYPE","terminate"),Es(l,d),c=new Wn(l,l.j,c),c.L=2,c.v=tl(_n(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&a.Image&&(new Image().src=c.v,d=!0),d||(c.g=xp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Jo(c)}Tp(l)}function sl(l){l.g&&(Hu(l),l.g.cancel(),l.g=null)}function _p(l){sl(l),l.u&&(a.clearTimeout(l.u),l.u=null),ll(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function ol(l){if(!Zf(l.h)&&!l.s){l.s=!0;var c=l.Ga;pt||N(),W||(pt(),W=!0),Y.add(c,l),l.B=0}}function tE(l,c){return ep(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=c.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=ds(m(l.Ga,l,c),Ip(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const A=new Wn(this,this.j,l);let M=this.o;if(this.S&&(M?(M=v(M),E(M,this.S)):M=this.S),this.m!==null||this.O||(A.H=M,M=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=wp(this,A,c),d=_n(this.I),Ee(d,"RID",l),Ee(d,"CVER",22),this.D&&Ee(d,"X-HTTP-Session-Id",this.D),Es(this,d),M&&(this.O?c="headers="+encodeURIComponent(String(hp(M)))+"&"+c:this.m&&Bu(d,this.m,M)),zu(this.h,A),this.Ua&&Ee(d,"TYPE","init"),this.P?(Ee(d,"$req",c),Ee(d,"SID","null"),A.T=!0,bu(A,d,null)):bu(A,d,c),this.G=2}}else this.G==3&&(l?yp(this,l):this.i.length==0||Zf(this.h)||yp(this))};function yp(l,c){var d;c?d=c.l:d=l.U++;const p=_n(l.I);Ee(p,"SID",l.K),Ee(p,"RID",d),Ee(p,"AID",l.T),Es(l,p),l.m&&l.o&&Bu(p,l.m,l.o),d=new Wn(l,l.j,d,l.B+1),l.m===null&&(d.H=l.o),c&&(l.i=c.D.concat(l.i)),c=wp(l,d,1e3),d.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),zu(l.h,d),bu(d,p,c)}function Es(l,c){l.H&&U(l.H,function(d,p){Ee(c,p,d)}),l.l&&rp({},function(d,p){Ee(c,p,d)})}function wp(l,c,d){d=Math.min(l.i.length,d);var p=l.l?m(l.l.Na,l.l,l):null;e:{var A=l.i;let M=-1;for(;;){const V=["count="+d];M==-1?0<d?(M=A[0].g,V.push("ofs="+M)):M=0:V.push("ofs="+M);let ve=!0;for(let Ke=0;Ke<d;Ke++){let ae=A[Ke].g;const Ze=A[Ke].map;if(ae-=M,0>ae)M=Math.max(0,A[Ke].g-100),ve=!1;else try{Xw(Ze,V,"req"+ae+"_")}catch{p&&p(Ze)}}if(ve){p=V.join("&");break e}}}return l=l.i.splice(0,d),c.D=l,p}function Ep(l){if(!l.g&&!l.u){l.Y=1;var c=l.Fa;pt||N(),W||(pt(),W=!0),Y.add(c,l),l.v=0}}function Wu(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=ds(m(l.Fa,l),Ip(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Sp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=ds(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),sl(this),Sp(this))};function Hu(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Sp(l){l.g=new Wn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var c=_n(l.qa);Ee(c,"RID","rpc"),Ee(c,"SID",l.K),Ee(c,"AID",l.T),Ee(c,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ee(c,"TO",l.ja),Ee(c,"TYPE","xmlhttp"),Es(l,c),l.m&&l.o&&Bu(c,l.m,l.o),l.L&&(l.g.I=l.L);var d=l.g;l=l.ia,d.L=1,d.v=tl(_n(c)),d.m=null,d.P=!0,Qf(d,l)}t.Za=function(){this.C!=null&&(this.C=null,sl(this),Wu(this),st(19))};function ll(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Cp(l,c){var d=null;if(l.g==c){ll(l),Hu(l),l.g=null;var p=2}else if(ju(l.h,c))d=c.D,tp(l.h,c),p=1;else return;if(l.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var A=l.B;p=Ou(),Ge(p,new Gf(p,d)),ol(l)}else Ep(l);else if(A=c.s,A==3||A==0&&0<c.X||!(p==1&&tE(l,c)||p==2&&Wu(l)))switch(d&&0<d.length&&(c=l.h,c.i=c.i.concat(d)),A){case 1:Ar(l,5);break;case 4:Ar(l,10);break;case 3:Ar(l,6);break;default:Ar(l,2)}}}function Ip(l,c){let d=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(d*=2),d*c}function Ar(l,c){if(l.j.info("Error code "+c),c==2){var d=m(l.fb,l),p=l.Xa;const A=!p;p=new Pr(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Zo(p,"https"),tl(p),A?qw(p.toString(),d):Qw(p.toString(),d)}else st(2);l.G=0,l.l&&l.l.sa(c),Tp(l),_p(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function Tp(l){if(l.G=0,l.ka=[],l.l){const c=np(l.h);(c.length!=0||l.i.length!=0)&&(L(l.ka,c),L(l.ka,l.i),l.h.i.length=0,O(l.i),l.i.length=0),l.l.ra()}}function kp(l,c,d){var p=d instanceof Pr?_n(d):new Pr(d);if(p.g!="")c&&(p.g=c+"."+p.g),el(p,p.s);else{var A=a.location;p=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;var M=new Pr(null);p&&Zo(M,p),c&&(M.g=c),A&&el(M,A),d&&(M.l=d),p=M}return d=l.D,c=l.ya,d&&c&&Ee(p,d,c),Ee(p,"VER",l.la),Es(l,p),p}function xp(l,c,d){if(c&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=l.Ca&&!l.pa?new De(new nl({eb:d})):new De(l.pa),c.Ha(l.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Np(){}t=Np.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Lt(l,c){be.call(this),this.g=new vp(c),this.l=l,this.h=c&&c.messageUrlParams||null,l=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(l?l["X-WebChannel-Content-Type"]=c.messageContentType:l={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(l?l["X-WebChannel-Client-Profile"]=c.va:l={"X-WebChannel-Client-Profile":c.va}),this.g.S=l,(l=c&&c.Sb)&&!w(l)&&(this.g.m=l),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!w(c)&&(this.g.D=c,l=this.h,l!==null&&c in l&&(l=this.h,c in l&&delete l[c])),this.j=new ai(this)}x(Lt,be),Lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){Vu(this.g)},Lt.prototype.o=function(l){var c=this.g;if(typeof l=="string"){var d={};d.__data__=l,l=d}else this.u&&(d={},d.__data__=Nu(l),l=d);c.i.push(new Uw(c.Ya++,l)),c.G==3&&ol(c)},Lt.prototype.N=function(){this.g.l=null,delete this.j,Vu(this.g),delete this.g,Lt.aa.N.call(this)};function Rp(l){Pu.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var c=l.__sm__;if(c){e:{for(const d in c){l=d;break e}l=void 0}(this.i=l)&&(l=this.i,c=c!==null&&l in c?c[l]:void 0),this.data=c}else this.data=l}x(Rp,Pu);function Pp(){Au.call(this),this.status=1}x(Pp,Au);function ai(l){this.g=l}x(ai,Np),ai.prototype.ua=function(){Ge(this.g,"a")},ai.prototype.ta=function(l){Ge(this.g,new Rp(l))},ai.prototype.sa=function(l){Ge(this.g,new Pp)},ai.prototype.ra=function(){Ge(this.g,"b")},Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,Du.NO_ERROR=0,Du.TIMEOUT=8,Du.HTTP_ERROR=6,bw.COMPLETE="complete",Aw.EventType=cs,cs.OPEN="a",cs.CLOSE="b",cs.ERROR="c",cs.MESSAGE="d",be.prototype.listen=be.prototype.K,De.prototype.listenOnce=De.prototype.L,De.prototype.getLastError=De.prototype.Ka,De.prototype.getLastErrorCode=De.prototype.Ba,De.prototype.getStatus=De.prototype.Z,De.prototype.getResponseJson=De.prototype.Oa,De.prototype.getResponseText=De.prototype.oa,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Ha}).apply(typeof xl<"u"?xl:typeof self<"u"?self:typeof window<"u"?window:{});const pm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Nt.UNAUTHENTICATED=new Nt(null),Nt.GOOGLE_CREDENTIALS=new Nt("google-credentials-uid"),Nt.FIRST_PARTY=new Nt("first-party-uid"),Nt.MOCK_USER=new Nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fu="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa=new lu("@firebase/firestore");function en(t,...e){if(xa.logLevel<=de.DEBUG){const n=e.map(h0);xa.debug(`Firestore (${fu}): ${t}`,...n)}}function c0(t,...e){if(xa.logLevel<=de.ERROR){const n=e.map(h0);xa.error(`Firestore (${fu}): ${t}`,...n)}}function h0(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(t="Unexpected state"){const e=`FIRESTORE (${fu}) INTERNAL ASSERTION FAILED: `+t;throw c0(e),new Error(e)}function qs(t,e){t||d0()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class wt extends Bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ck{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Nt.UNAUTHENTICATED))}shutdown(){}}class hk{constructor(e){this.t=e,this.currentUser=Nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){qs(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Qs;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Qs,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{en("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(en("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Qs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(en("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(qs(typeof r.accessToken=="string"),new uk(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return qs(e===null||typeof e=="string"),new Nt(e)}}class dk{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Nt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class fk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new dk(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){qs(this.o===void 0);const r=s=>{s.error!=null&&en("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,en("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{en("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):en("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(qs(typeof n.token=="string"),this.R=n.token,new pk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function mk(t){return t.name==="IndexedDbTransactionError"}class Na{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Na("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Na&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gm,se;(se=gm||(gm={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new u0([4294967295,4294967295],0);function Tc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&en("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Qs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new sf(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new wt(yt.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var mm,vm;(vm=mm||(mm={})).ea="default",vm.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m=new Map;function yk(t,e,n,r){if(e===!0&&r===!0)throw new wt(yt.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new wt(yt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new wt(yt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_k((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new wt(yt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new wt(yt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new wt(yt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wk{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ym({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new wt(yt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new wt(yt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ym(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ck;switch(r.type){case"firstParty":return new fk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new wt(yt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=_m.get(n);r&&(en("ComponentProvider","Removing Datastore"),_m.delete(n),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new vk(this,"async_queue_retry"),this.Vu=()=>{const r=Tc();r&&en("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Tc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Tc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Qs;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!mk(e))throw e;en("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw c0("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=sf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&d0()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=-1;class Sk extends wk{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new wm,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wm(e),this._firestoreClient=void 0,await e}}}function Ck(t,e,n){n||(n="(default)");const r=au(t,"firestore");if(r.isInitialized(n)){const i=r.getImmediate({identifier:n}),s=r.getOptions(n);if(wo(s,e))return i;throw new wt(yt.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new wt(yt.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new wt(yt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:n})}(function(e,n=!0){(function(i){fu=i})(ei),Kr(new wr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Sk(new hk(r.getProvider("auth-internal")),new gk(r.getProvider("app-check-internal")),function(h,g){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new wt(yt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Na(h.options.projectId,g)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),pn(pm,"4.7.3",e),pn(pm,"4.7.3","esm2017")})();var Em={};const Sm="@firebase/database",Cm="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let f0="";function Ik(t){f0=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),je(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:yo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return vn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Tk(e)}}catch{}return new kk},jr=p0("localStorage"),xk=p0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=new lu("@firebase/database"),Nk=function(){let t=1;return function(){return t++}}(),g0=function(t){const e=t1(t),n=new XC;n.update(e);const r=n.digest();return Gd.encodeByteArray(r)},Vo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Vo.apply(null,r):typeof r=="object"?e+=je(r):e+=r,e+=" "}return e};let Ys=null,Im=!0;const Rk=function(t,e){z(!0,"Can't turn on custom loggers persistently."),bi.logLevel=de.VERBOSE,Ys=bi.log.bind(bi)},Qe=function(...t){if(Im===!0&&(Im=!1,Ys===null&&xk.get("logging_enabled")===!0&&Rk()),Ys){const e=Vo.apply(null,t);Ys(e)}},Wo=function(t){return function(...e){Qe(t,...e)}},Uh=function(...t){const e="FIREBASE INTERNAL ERROR: "+Vo(...t);bi.error(e)},jn=function(...t){const e=`FIREBASE FATAL ERROR: ${Vo(...t)}`;throw bi.error(e),new Error(e)},ut=function(...t){const e="FIREBASE WARNING: "+Vo(...t);bi.warn(e)},Pk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ut("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},of=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Ak=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Gi="[MIN_NAME]",Qr="[MAX_NAME]",ti=function(t,e){if(t===e)return 0;if(t===Gi||e===Qr)return-1;if(e===Gi||t===Qr)return 1;{const n=Tm(t),r=Tm(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Ok=function(t,e){return t===e?0:t<e?-1:1},Ps=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+je(e))},lf=function(t){if(typeof t!="object"||t===null)return je(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=je(e[r]),n+=":",n+=lf(t[e[r]]);return n+="}",n},m0=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Je(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const v0=function(t){z(!of(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const h=[];for(u=n;u;u-=1)h.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)h.push(s%2?1:0),s=Math.floor(s/2);h.push(i?1:0),h.reverse();const g=h.join("");let f="";for(u=0;u<64;u+=8){let m=parseInt(g.substr(u,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},Dk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Mk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Lk(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const bk=new RegExp("^-?(0*)\\d{1,10}$"),Fk=-2147483648,Uk=2147483647,Tm=function(t){if(bk.test(t)){const e=Number(t);if(e>=Fk&&e<=Uk)return e}return null},rs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ut("Exception was thrown by user callback.",n),e},Math.floor(0))}},jk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Xs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ut(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Qe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ut(e)}}class Kl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Kl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af="5",_0="v",y0="s",w0="r",E0="f",S0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,C0="ls",I0="p",jh="ac",T0="websocket",k0="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=jr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&jr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Vk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function N0(t,e,n){z(typeof e=="string","typeof type must == string"),z(typeof n=="object","typeof params must == object");let r;if(e===T0)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===k0)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Vk(t)&&(n.ns=t.namespace);const i=[];return Je(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(){this.counters_={}}incrementCounter(e,n=1){vn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return OC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc={},xc={};function uf(t){const e=t.toString();return kc[e]||(kc[e]=new Wk),kc[e]}function Hk(t,e){const n=t.toString();return xc[n]||(xc[n]=e()),xc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&rs(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km="start",Gk="close",Kk="pLPCommand",qk="pRTLPCB",R0="id",P0="pw",A0="ser",Qk="cb",Yk="seg",Xk="ts",Jk="d",Zk="dframe",O0=1870,D0=30,ex=O0-D0,tx=25e3,nx=3e4;class ki{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Wo(e),this.stats_=uf(n),this.urlFn=u=>(this.appCheckToken&&(u[jh]=this.appCheckToken),N0(n,k0,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new $k(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(nx)),Ak(()=>{if(this.isClosed_)return;this.scriptTagHolder=new cf((...s)=>{const[o,a,u,h,g]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===km)this.id=a,this.password=u;else if(o===Gk)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[km]="t",r[A0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Qk]=this.scriptTagHolder.uniqueCallbackIdentifier),r[_0]=af,this.transportSessionId&&(r[y0]=this.transportSessionId),this.lastSessionId&&(r[C0]=this.lastSessionId),this.applicationId&&(r[I0]=this.applicationId),this.appCheckToken&&(r[jh]=this.appCheckToken),typeof location<"u"&&location.hostname&&S0.test(location.hostname)&&(r[w0]=E0);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ki.forceAllow_=!0}static forceDisallow(){ki.forceDisallow_=!0}static isAvailable(){return ki.forceAllow_?!0:!ki.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Dk()&&!Mk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=vy(n),i=m0(r,ex);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Zk]="t",r[R0]=e,r[P0]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=je(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class cf{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Nk(),window[Kk+this.uniqueCallbackIdentifier]=e,window[qk+this.uniqueCallbackIdentifier]=n,this.myIFrame=cf.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Qe("frame writing exception"),a.stack&&Qe(a.stack),Qe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Qe("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[R0]=this.myID,e[P0]=this.myPW,e[A0]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+D0+r.length<=O0;){const o=this.pendingSegs.shift();r=r+"&"+Yk+i+"="+o.seg+"&"+Xk+i+"="+o.ts+"&"+Jk+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(tx)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Qe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx=16384,ix=45e3;let Ra=null;typeof MozWebSocket<"u"?Ra=MozWebSocket:typeof WebSocket<"u"&&(Ra=WebSocket);class Zt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Wo(this.connId),this.stats_=uf(n),this.connURL=Zt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[_0]=af,typeof location<"u"&&location.hostname&&S0.test(location.hostname)&&(o[w0]=E0),n&&(o[y0]=n),r&&(o[C0]=r),i&&(o[jh]=i),s&&(o[I0]=s),N0(e,T0,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,jr.set("previous_websocket_failure",!0);try{let r;WC(),this.mySock=new Ra(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Zt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ra!==null&&!Zt.forceDisallow_}static previouslyFailed(){return jr.isInMemoryStorage||jr.get("previous_websocket_failure")===!0}markConnectionHealthy(){jr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=yo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(z(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=m0(n,rx);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ix))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Zt.responsesRequiredToBeHealthy=2;Zt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ki,Zt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Zt&&Zt.isAvailable();let r=n&&!Zt.previouslyFailed();if(e.webSocketOnly&&(n||ut("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Zt];else{const i=this.transports_=[];for(const s of Co.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Co.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Co.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx=6e4,ox=5e3,lx=10*1024,ax=100*1024,Nc="t",xm="d",ux="s",Nm="r",cx="e",Rm="o",Pm="a",Am="n",Om="p",hx="h";class dx{constructor(e,n,r,i,s,o,a,u,h,g){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=h,this.lastSessionId=g,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Wo("c:"+this.id+":"),this.transportManager_=new Co(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Xs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ax?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>lx?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Nc in e){const n=e[Nc];n===Pm?this.upgradeIfSecondaryHealthy_():n===Nm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Rm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ps("t",e),r=Ps("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Om,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Pm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Am,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ps("t",e),r=Ps("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ps(Nc,e);if(xm in e){const r=e[xm];if(n===hx){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Am){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ux?this.onConnectionShutdown_(r):n===Nm?this.onReset_(r):n===cx?Uh("Server Error: "+r):n===Rm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Uh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),af!==r&&ut("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Xs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(sx))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ox))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Om,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(jr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e){this.allowedEvents_=e,this.listeners_={},z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){z(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa extends L0{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!qd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Pa}getInitialEvent(e){return z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=32,Mm=768;class me{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ue(){return new me("")}function ee(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Sr(t){return t.pieces_.length-t.pieceNum_}function ye(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new me(t.pieces_,e)}function hf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function fx(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Io(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function b0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new me(e,0)}function Pe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof me)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new me(n,0)}function re(t){return t.pieceNum_>=t.pieces_.length}function lt(t,e){const n=ee(t),r=ee(e);if(n===null)return e;if(n===r)return lt(ye(t),ye(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function px(t,e){const n=Io(t,0),r=Io(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=ti(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function df(t,e){if(Sr(t)!==Sr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Bt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Sr(t)>Sr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class gx{constructor(e,n){this.errorPrefix_=n,this.parts_=Io(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ou(this.parts_[r]);F0(this)}}function mx(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ou(e),F0(t)}function vx(t){const e=t.parts_.pop();t.byteLength_-=ou(e),t.parts_.length>0&&(t.byteLength_-=1)}function F0(t){if(t.byteLength_>Mm)throw new Error(t.errorPrefix_+"has a key path longer than "+Mm+" bytes ("+t.byteLength_+").");if(t.parts_.length>Dm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Dm+") or object contains a cycle "+Lr(t))}function Lr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff extends L0{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new ff}getInitialEvent(e){return z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=1e3,_x=60*5*1e3,Lm=30*1e3,yx=1.3,wx=3e4,Ex="server_kill",bm=3;class An extends M0{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=An.nextPersistentConnectionId_++,this.log_=Wo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=As,this.maxReconnectDelay_=_x,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ff.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Pa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(je(s)),z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Fo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),z(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,h=a.s;An.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),h!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(h,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&vn(e,"w")){const r=$i(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ut(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||YC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Lm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=QC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+je(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Uh("Unrecognized action received from server: "+je(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=As,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=As,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>wx&&(this.reconnectDelay_=As),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*yx)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+An.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},h=function(f){z(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:h};const g=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(g),this.appCheckTokenProvider_.getToken(g)]);o?Qe("getToken() completed but was canceled"):(Qe("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new dx(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,R=>{ut(R+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ex)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&ut(f),u())}}}interrupt(e){Qe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Qe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Rh(this.interruptReasons_)&&(this.reconnectDelay_=As,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>lf(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new me(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Qe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=bm&&(this.reconnectDelay_=Lm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Qe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=bm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+f0.replace(/\./g,"-")]=1,qd()?e["framework.cordova"]=1:Sy()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Pa.getInstance().currentlyOnline();return Rh(this.interruptReasons_)&&e}}An.nextPersistentConnectionId_=0;An.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new te(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new te(Gi,e),i=new te(Gi,n);return this.compare(r,i)!==0}minPost(){return te.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nl;class U0 extends pu{static get __EMPTY_NODE(){return Nl}static set __EMPTY_NODE(e){Nl=e}compare(e,n){return ti(e.name,n.name)}isDefinedOn(e){throw es("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return te.MIN}maxPost(){return new te(Qr,Nl)}makePost(e,n){return z(typeof e=="string","KeyIndex indexValue must always be a string."),new te(e,Nl)}toString(){return".key"}}const Fi=new U0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class He{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??He.RED,this.left=i??St.EMPTY_NODE,this.right=s??St.EMPTY_NODE}copy(e,n,r,i,s){return new He(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return St.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return St.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}He.RED=!0;He.BLACK=!1;class Sx{copy(e,n,r,i,s){return this}insert(e,n,r){return new He(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class St{constructor(e,n=St.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new St(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,He.BLACK,null,null))}remove(e){return new St(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,He.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Rl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Rl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Rl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Rl(this.root_,null,this.comparator_,!0,e)}}St.EMPTY_NODE=new Sx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cx(t,e){return ti(t.name,e.name)}function pf(t,e){return ti(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zh;function Ix(t){zh=t}const j0=function(t){return typeof t=="number"?"number:"+v0(t):"string:"+t},z0=function(t){if(t.isLeafNode()){const e=t.val();z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vn(e,".sv"),"Priority must be a string or number.")}else z(t===zh||t.isEmpty(),"priority of unexpected type.");z(t===zh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fm;class Ve{constructor(e,n=Ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),z0(this.priorityNode_)}static set __childrenNodeConstructor(e){Fm=e}static get __childrenNodeConstructor(){return Fm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return re(e)?this:ee(e)===".priority"?this.priorityNode_:Ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ee(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(z(r!==".priority"||Sr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(ye(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+j0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=v0(this.value_):e+=this.value_,this.lazyHash_=g0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ve.__childrenNodeConstructor?-1:(z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ve.VALUE_TYPE_ORDER.indexOf(n),s=Ve.VALUE_TYPE_ORDER.indexOf(r);return z(i>=0,"Unknown leaf type: "+n),z(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let B0,V0;function Tx(t){B0=t}function kx(t){V0=t}class xx extends pu{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ti(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return te.MIN}maxPost(){return new te(Qr,new Ve("[PRIORITY-POST]",V0))}makePost(e,n){const r=B0(e);return new te(n,new Ve("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ae=new xx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx=Math.log(2);class Rx{constructor(e){const n=s=>parseInt(Math.log(s)/Nx,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Aa=function(t,e,n,r){t.sort(e);const i=function(u,h){const g=h-u;let f,m;if(g===0)return null;if(g===1)return f=t[u],m=n?n(f):f,new He(m,f.node,He.BLACK,null,null);{const R=parseInt(g/2,10)+u,x=i(u,R),O=i(R+1,h);return f=t[R],m=n?n(f):f,new He(m,f.node,He.BLACK,x,O)}},s=function(u){let h=null,g=null,f=t.length;const m=function(x,O){const L=f-x,k=f;f-=x;const w=i(L+1,k),I=t[L],D=n?n(I):I;R(new He(D,I.node,O,null,w))},R=function(x){h?(h.left=x,h=x):(g=x,h=x)};for(let x=0;x<u.count;++x){const O=u.nextBitIsOne(),L=Math.pow(2,u.count-(x+1));O?m(L,He.BLACK):(m(L,He.BLACK),m(L,He.RED))}return g},o=new Rx(t.length),a=s(o);return new St(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rc;const hi={};class Rn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return z(hi&&Ae,"ChildrenNode.ts has not been loaded"),Rc=Rc||new Rn({".priority":hi},{".priority":Ae}),Rc}get(e){const n=$i(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof St?n:null}hasIndex(e){return vn(this.indexSet_,e.toString())}addIndex(e,n){z(e!==Fi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(te.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Aa(r,e.getCompare()):a=hi;const u=e.toString(),h=Object.assign({},this.indexSet_);h[u]=e;const g=Object.assign({},this.indexes_);return g[u]=a,new Rn(g,h)}addToIndexes(e,n){const r=wa(this.indexes_,(i,s)=>{const o=$i(this.indexSet_,s);if(z(o,"Missing index implementation for "+s),i===hi)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(te.Wrap);let h=u.getNext();for(;h;)h.name!==e.name&&a.push(h),h=u.getNext();return a.push(e),Aa(a,o.getCompare())}else return hi;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new te(e.name,a))),u.insert(e,e.node)}});return new Rn(r,this.indexSet_)}removeFromIndexes(e,n){const r=wa(this.indexes_,i=>{if(i===hi)return i;{const s=n.get(e.name);return s?i.remove(new te(e.name,s)):i}});return new Rn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Os;class X{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&z0(this.priorityNode_),this.children_.isEmpty()&&z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Os||(Os=new X(new St(pf),null,Rn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Os}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Os:n}}getChild(e){const n=ee(e);return n===null?this:this.getImmediateChild(n).getChild(ye(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(z(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new te(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Os:this.priorityNode_;return new X(i,o,s)}}updateChild(e,n){const r=ee(e);if(r===null)return n;{z(ee(e)!==".priority"||Sr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ye(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ae,(o,a)=>{n[o]=a.val(e),r++,s&&X.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+j0(this.getPriority().val())+":"),this.forEachChild(Ae,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":g0(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new te(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new te(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new te(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,te.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,te.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ho?-1:0}withIndex(e){if(e===Fi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Fi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ae),i=n.getIterator(Ae);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Fi?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Px extends X{constructor(){super(new St(pf),X.EMPTY_NODE,Rn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const Ho=new Px;Object.defineProperties(te,{MIN:{value:new te(Gi,X.EMPTY_NODE)},MAX:{value:new te(Qr,Ho)}});U0.__EMPTY_NODE=X.EMPTY_NODE;Ve.__childrenNodeConstructor=X;Ix(Ho);kx(Ho);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax=!0;function Ue(t,e=null){if(t===null)return X.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ve(n,Ue(e))}if(!(t instanceof Array)&&Ax){const n=[];let r=!1;if(Je(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=Ue(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new te(o,u)))}}),n.length===0)return X.EMPTY_NODE;const s=Aa(n,Cx,o=>o.name,pf);if(r){const o=Aa(n,Ae.getCompare());return new X(s,Ue(e),new Rn({".priority":o},{".priority":Ae}))}else return new X(s,Ue(e),Rn.Default)}else{let n=X.EMPTY_NODE;return Je(t,(r,i)=>{if(vn(t,r)&&r.substring(0,1)!=="."){const s=Ue(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ue(e))}}Tx(Ue);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox extends pu{constructor(e){super(),this.indexPath_=e,z(!re(e)&&ee(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ti(e.name,n.name):s}makePost(e,n){const r=Ue(e),i=X.EMPTY_NODE.updateChild(this.indexPath_,r);return new te(n,i)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,Ho);return new te(Qr,e)}toString(){return Io(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx extends pu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ti(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return te.MIN}maxPost(){return te.MAX}makePost(e,n){const r=Ue(e);return new te(n,r)}toString(){return".value"}}const Mx=new Dx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(t){return{type:"value",snapshotNode:t}}function Ki(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function To(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ko(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Lx(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){z(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(To(n,a)):z(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ki(n,r)):o.trackChildChange(ko(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ae,(i,s)=>{n.hasChild(i)||r.trackChildChange(To(i,s))}),n.isLeafNode()||n.forEachChild(Ae,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ko(i,s,o))}else r.trackChildChange(Ki(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?X.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.indexedFilter_=new gf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=xo.getStartPost_(e),this.endPost_=xo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new te(n,r))||(r=X.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=X.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(X.EMPTY_NODE);const s=this;return n.forEachChild(Ae,(o,a)=>{s.matches(new te(o,a))||(i=i.updateImmediateChild(o,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new xo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new te(n,r))||(r=X.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=X.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(X.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(m,R)=>f(R,m)}else o=this.index_.getCompare();const a=e;z(a.numChildren()===this.limit_,"");const u=new te(n,r),h=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),g=this.rangedFilter_.matches(u);if(a.hasChild(n)){const f=a.getImmediateChild(n);let m=i.getChildAfterChild(this.index_,h,this.reverse_);for(;m!=null&&(m.name===n||a.hasChild(m.name));)m=i.getChildAfterChild(this.index_,m,this.reverse_);const R=m==null?1:o(m,u);if(g&&!r.isEmpty()&&R>=0)return s!=null&&s.trackChildChange(ko(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(To(n,f));const O=a.updateImmediateChild(n,X.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(s!=null&&s.trackChildChange(Ki(m.name,m.node)),O.updateImmediateChild(m.name,m.node)):O}}else return r.isEmpty()?e:g&&o(h,u)>=0?(s!=null&&(s.trackChildChange(To(h.name,h.node)),s.trackChildChange(Ki(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(h.name,X.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ae}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Gi}hasEnd(){return this.endSet_}getIndexEndValue(){return z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Qr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ae}copy(){const e=new mf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Fx(t){return t.loadsAllData()?new gf(t.getIndex()):t.hasLimit()?new bx(t):new xo(t)}function Um(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ae?n="$priority":t.index_===Mx?n="$value":t.index_===Fi?n="$key":(z(t.index_ instanceof Ox,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=je(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=je(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+je(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=je(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+je(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function jm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ae&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa extends M0{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Wo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Oa.getListenId_(e,r),a={};this.listens_[o]=a;const u=Um(e._queryParams);this.restRequest_(s+".json",u,(h,g)=>{let f=g;if(h===404&&(f=null,h=null),h===null&&this.onDataUpdate_(s,f,!1,r),$i(this.listens_,o)===a){let m;h?h===401?m="permission_denied":m="rest_error:"+h:m="ok",i(m,null)}})}unlisten(e,n){const r=Oa.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Um(e._queryParams),r=e._path.toString(),i=new Fo;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ts(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=yo(a.responseText)}catch{ut("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&ut("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(){return{value:null,children:new Map}}function H0(t,e,n){if(re(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ee(e);t.children.has(r)||t.children.set(r,Da());const i=t.children.get(r);e=ye(e),H0(i,e,n)}}function Bh(t,e,n){t.value!==null?n(e,t.value):jx(t,(r,i)=>{const s=new me(e.toString()+"/"+r);Bh(i,s,n)})}function jx(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Je(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=10*1e3,Bx=30*1e3,Vx=5*60*1e3;class Wx{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new zx(e);const r=zm+(Bx-zm)*Math.random();Xs(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Je(e,(i,s)=>{s>0&&vn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Xs(this.reportStats_.bind(this),Math.floor(Math.random()*2*Vx))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(tn||(tn={}));function vf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function _f(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function yf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=tn.ACK_USER_WRITE,this.source=vf()}operationForChild(e){if(re(this.path)){if(this.affectedTree.value!=null)return z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new me(e));return new Ma(ue(),n,this.revert)}}else return z(ee(this.path)===e,"operationForChild called for unrelated child."),new Ma(ye(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,n){this.source=e,this.path=n,this.type=tn.LISTEN_COMPLETE}operationForChild(e){return re(this.path)?new No(this.source,ue()):new No(this.source,ye(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=tn.OVERWRITE}operationForChild(e){return re(this.path)?new Yr(this.source,ue(),this.snap.getImmediateChild(e)):new Yr(this.source,ye(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=tn.MERGE}operationForChild(e){if(re(this.path)){const n=this.children.subtree(new me(e));return n.isEmpty()?null:n.value?new Yr(this.source,ue(),n.value):new qi(this.source,ue(),n)}else return z(ee(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new qi(this.source,ye(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(re(e))return this.isFullyInitialized()&&!this.filtered_;const n=ee(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function $x(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Lx(o.childName,o.snapshotNode))}),Ds(t,i,"child_removed",e,r,n),Ds(t,i,"child_added",e,r,n),Ds(t,i,"child_moved",s,r,n),Ds(t,i,"child_changed",e,r,n),Ds(t,i,"value",e,r,n),i}function Ds(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>Kx(t,a,u)),o.forEach(a=>{const u=Gx(t,a,s);i.forEach(h=>{h.respondsTo(a.type)&&e.push(h.createEvent(u,t.query_))})})}function Gx(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Kx(t,e,n){if(e.childName==null||n.childName==null)throw es("Should only compare child_ events.");const r=new te(e.childName,e.snapshotNode),i=new te(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(t,e){return{eventCache:t,serverCache:e}}function Js(t,e,n,r){return gu(new Cr(e,n,r),t.serverCache)}function $0(t,e,n,r){return gu(t.eventCache,new Cr(e,n,r))}function La(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Xr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pc;const qx=()=>(Pc||(Pc=new St(Ok)),Pc);class _e{constructor(e,n=qx()){this.value=e,this.children=n}static fromObject(e){let n=new _e(null);return Je(e,(r,i)=>{n=n.set(new me(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ue(),value:this.value};if(re(e))return null;{const r=ee(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ye(e),n);return s!=null?{path:Pe(new me(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(re(e))return this;{const n=ee(e),r=this.children.get(n);return r!==null?r.subtree(ye(e)):new _e(null)}}set(e,n){if(re(e))return new _e(n,this.children);{const r=ee(e),s=(this.children.get(r)||new _e(null)).set(ye(e),n),o=this.children.insert(r,s);return new _e(this.value,o)}}remove(e){if(re(e))return this.children.isEmpty()?new _e(null):new _e(null,this.children);{const n=ee(e),r=this.children.get(n);if(r){const i=r.remove(ye(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new _e(null):new _e(this.value,s)}else return this}}get(e){if(re(e))return this.value;{const n=ee(e),r=this.children.get(n);return r?r.get(ye(e)):null}}setTree(e,n){if(re(e))return n;{const r=ee(e),s=(this.children.get(r)||new _e(null)).setTree(ye(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new _e(this.value,o)}}fold(e){return this.fold_(ue(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Pe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ue(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(re(e))return null;{const s=ee(e),o=this.children.get(s);return o?o.findOnPath_(ye(e),Pe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ue(),n)}foreachOnPath_(e,n,r){if(re(e))return this;{this.value&&r(n,this.value);const i=ee(e),s=this.children.get(i);return s?s.foreachOnPath_(ye(e),Pe(n,i),r):new _e(null)}}foreach(e){this.foreach_(ue(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Pe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.writeTree_=e}static empty(){return new sn(new _e(null))}}function Zs(t,e,n){if(re(e))return new sn(new _e(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=lt(i,e);return s=s.updateChild(o,n),new sn(t.writeTree_.set(i,s))}else{const i=new _e(n),s=t.writeTree_.setTree(e,i);return new sn(s)}}}function Vh(t,e,n){let r=t;return Je(n,(i,s)=>{r=Zs(r,Pe(e,i),s)}),r}function Bm(t,e){if(re(e))return sn.empty();{const n=t.writeTree_.setTree(e,new _e(null));return new sn(n)}}function Wh(t,e){return ni(t,e)!=null}function ni(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(lt(n.path,e)):null}function Vm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ae,(r,i)=>{e.push(new te(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new te(r,i.value))}),e}function mr(t,e){if(re(e))return t;{const n=ni(t,e);return n!=null?new sn(new _e(n)):new sn(t.writeTree_.subtree(e))}}function Hh(t){return t.writeTree_.isEmpty()}function Qi(t,e){return G0(ue(),t.writeTree_,e)}function G0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(z(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=G0(Pe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Pe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(t,e){return Y0(e,t)}function Qx(t,e,n,r,i){z(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Zs(t.visibleWrites,e,n)),t.lastWriteId=r}function Yx(t,e,n,r){z(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Vh(t.visibleWrites,e,n),t.lastWriteId=r}function Xx(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Jx(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);z(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Zx(a,r.path)?i=!1:Bt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return eN(t),!0;if(r.snap)t.visibleWrites=Bm(t.visibleWrites,r.path);else{const a=r.children;Je(a,u=>{t.visibleWrites=Bm(t.visibleWrites,Pe(r.path,u))})}return!0}else return!1}function Zx(t,e){if(t.snap)return Bt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Bt(Pe(t.path,n),e))return!0;return!1}function eN(t){t.visibleWrites=K0(t.allWrites,tN,ue()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function tN(t){return t.visible}function K0(t,e,n){let r=sn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Bt(n,o)?(a=lt(n,o),r=Zs(r,a,s.snap)):Bt(o,n)&&(a=lt(o,n),r=Zs(r,ue(),s.snap.getChild(a)));else if(s.children){if(Bt(n,o))a=lt(n,o),r=Vh(r,a,s.children);else if(Bt(o,n))if(a=lt(o,n),re(a))r=Vh(r,ue(),s.children);else{const u=$i(s.children,ee(a));if(u){const h=u.getChild(ye(a));r=Zs(r,ue(),h)}}}else throw es("WriteRecord should have .snap or .children")}}return r}function q0(t,e,n,r,i){if(!r&&!i){const s=ni(t.visibleWrites,e);if(s!=null)return s;{const o=mr(t.visibleWrites,e);if(Hh(o))return n;if(n==null&&!Wh(o,ue()))return null;{const a=n||X.EMPTY_NODE;return Qi(o,a)}}}else{const s=mr(t.visibleWrites,e);if(!i&&Hh(s))return n;if(!i&&n==null&&!Wh(s,ue()))return null;{const o=function(h){return(h.visible||i)&&(!r||!~r.indexOf(h.writeId))&&(Bt(h.path,e)||Bt(e,h.path))},a=K0(t.allWrites,o,e),u=n||X.EMPTY_NODE;return Qi(a,u)}}}function nN(t,e,n){let r=X.EMPTY_NODE;const i=ni(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ae,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=mr(t.visibleWrites,e);return n.forEachChild(Ae,(o,a)=>{const u=Qi(mr(s,new me(o)),a);r=r.updateImmediateChild(o,u)}),Vm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=mr(t.visibleWrites,e);return Vm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function rN(t,e,n,r,i){z(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Pe(e,n);if(Wh(t.visibleWrites,s))return null;{const o=mr(t.visibleWrites,s);return Hh(o)?i.getChild(n):Qi(o,i.getChild(n))}}function iN(t,e,n,r){const i=Pe(e,n),s=ni(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=mr(t.visibleWrites,i);return Qi(o,r.getNode().getImmediateChild(n))}else return null}function sN(t,e){return ni(t.visibleWrites,e)}function oN(t,e,n,r,i,s,o){let a;const u=mr(t.visibleWrites,e),h=ni(u,ue());if(h!=null)a=h;else if(n!=null)a=Qi(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const g=[],f=o.getCompare(),m=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let R=m.getNext();for(;R&&g.length<i;)f(R,r)!==0&&g.push(R),R=m.getNext();return g}else return[]}function lN(){return{visibleWrites:sn.empty(),allWrites:[],lastWriteId:-1}}function ba(t,e,n,r){return q0(t.writeTree,t.treePath,e,n,r)}function wf(t,e){return nN(t.writeTree,t.treePath,e)}function Wm(t,e,n,r){return rN(t.writeTree,t.treePath,e,n,r)}function Fa(t,e){return sN(t.writeTree,Pe(t.treePath,e))}function aN(t,e,n,r,i,s){return oN(t.writeTree,t.treePath,e,n,r,i,s)}function Ef(t,e,n){return iN(t.writeTree,t.treePath,e,n)}function Q0(t,e){return Y0(Pe(t.treePath,e),t.writeTree)}function Y0(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;z(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),z(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ko(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,To(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ki(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ko(r,e.snapshotNode,i.oldSnap));else throw es("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const X0=new cN;class Sf{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Cr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ef(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Xr(this.viewCache_),s=aN(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hN(t){return{filter:t}}function dN(t,e){z(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),z(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function fN(t,e,n,r,i){const s=new uN;let o,a;if(n.type===tn.OVERWRITE){const h=n;h.source.fromUser?o=$h(t,e,h.path,h.snap,r,i,s):(z(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered()&&!re(h.path),o=Ua(t,e,h.path,h.snap,r,i,a,s))}else if(n.type===tn.MERGE){const h=n;h.source.fromUser?o=gN(t,e,h.path,h.children,r,i,s):(z(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered(),o=Gh(t,e,h.path,h.children,r,i,a,s))}else if(n.type===tn.ACK_USER_WRITE){const h=n;h.revert?o=_N(t,e,h.path,r,i,s):o=mN(t,e,h.path,h.affectedTree,r,i,s)}else if(n.type===tn.LISTEN_COMPLETE)o=vN(t,e,n.path,r,s);else throw es("Unknown operation type: "+n.type);const u=s.getChanges();return pN(e,o,u),{viewCache:o,changes:u}}function pN(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=La(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(W0(La(e)))}}function J0(t,e,n,r,i,s){const o=e.eventCache;if(Fa(r,n)!=null)return e;{let a,u;if(re(n))if(z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=Xr(e),g=h instanceof X?h:X.EMPTY_NODE,f=wf(r,g);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const h=ba(r,Xr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const h=ee(n);if(h===".priority"){z(Sr(n)===1,"Can't have a priority with additional path components");const g=o.getNode();u=e.serverCache.getNode();const f=Wm(r,n,g,u);f!=null?a=t.filter.updatePriority(g,f):a=o.getNode()}else{const g=ye(n);let f;if(o.isCompleteForChild(h)){u=e.serverCache.getNode();const m=Wm(r,n,o.getNode(),u);m!=null?f=o.getNode().getImmediateChild(h).updateChild(g,m):f=o.getNode().getImmediateChild(h)}else f=Ef(r,h,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),h,f,g,i,s):a=o.getNode()}}return Js(e,a,o.isFullyInitialized()||re(n),t.filter.filtersNodes())}}function Ua(t,e,n,r,i,s,o,a){const u=e.serverCache;let h;const g=o?t.filter:t.filter.getIndexedFilter();if(re(n))h=g.updateFullNode(u.getNode(),r,null);else if(g.filtersNodes()&&!u.isFiltered()){const R=u.getNode().updateChild(n,r);h=g.updateFullNode(u.getNode(),R,null)}else{const R=ee(n);if(!u.isCompleteForPath(n)&&Sr(n)>1)return e;const x=ye(n),L=u.getNode().getImmediateChild(R).updateChild(x,r);R===".priority"?h=g.updatePriority(u.getNode(),L):h=g.updateChild(u.getNode(),R,L,x,X0,null)}const f=$0(e,h,u.isFullyInitialized()||re(n),g.filtersNodes()),m=new Sf(i,f,s);return J0(t,f,n,i,m,a)}function $h(t,e,n,r,i,s,o){const a=e.eventCache;let u,h;const g=new Sf(i,e,s);if(re(n))h=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=Js(e,h,!0,t.filter.filtersNodes());else{const f=ee(n);if(f===".priority")h=t.filter.updatePriority(e.eventCache.getNode(),r),u=Js(e,h,a.isFullyInitialized(),a.isFiltered());else{const m=ye(n),R=a.getNode().getImmediateChild(f);let x;if(re(m))x=r;else{const O=g.getCompleteChild(f);O!=null?hf(m)===".priority"&&O.getChild(b0(m)).isEmpty()?x=O:x=O.updateChild(m,r):x=X.EMPTY_NODE}if(R.equals(x))u=e;else{const O=t.filter.updateChild(a.getNode(),f,x,m,g,o);u=Js(e,O,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function Hm(t,e){return t.eventCache.isCompleteForChild(e)}function gN(t,e,n,r,i,s,o){let a=e;return r.foreach((u,h)=>{const g=Pe(n,u);Hm(e,ee(g))&&(a=$h(t,a,g,h,i,s,o))}),r.foreach((u,h)=>{const g=Pe(n,u);Hm(e,ee(g))||(a=$h(t,a,g,h,i,s,o))}),a}function $m(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Gh(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,h;re(n)?h=r:h=new _e(null).setTree(n,r);const g=e.serverCache.getNode();return h.children.inorderTraversal((f,m)=>{if(g.hasChild(f)){const R=e.serverCache.getNode().getImmediateChild(f),x=$m(t,R,m);u=Ua(t,u,new me(f),x,i,s,o,a)}}),h.children.inorderTraversal((f,m)=>{const R=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!g.hasChild(f)&&!R){const x=e.serverCache.getNode().getImmediateChild(f),O=$m(t,x,m);u=Ua(t,u,new me(f),O,i,s,o,a)}}),u}function mN(t,e,n,r,i,s,o){if(Fa(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(re(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Ua(t,e,n,u.getNode().getChild(n),i,s,a,o);if(re(n)){let h=new _e(null);return u.getNode().forEachChild(Fi,(g,f)=>{h=h.set(new me(g),f)}),Gh(t,e,n,h,i,s,a,o)}else return e}else{let h=new _e(null);return r.foreach((g,f)=>{const m=Pe(n,g);u.isCompleteForPath(m)&&(h=h.set(g,u.getNode().getChild(m)))}),Gh(t,e,n,h,i,s,a,o)}}function vN(t,e,n,r,i){const s=e.serverCache,o=$0(e,s.getNode(),s.isFullyInitialized()||re(n),s.isFiltered());return J0(t,o,n,r,X0,i)}function _N(t,e,n,r,i,s){let o;if(Fa(r,n)!=null)return e;{const a=new Sf(r,e,i),u=e.eventCache.getNode();let h;if(re(n)||ee(n)===".priority"){let g;if(e.serverCache.isFullyInitialized())g=ba(r,Xr(e));else{const f=e.serverCache.getNode();z(f instanceof X,"serverChildren would be complete if leaf node"),g=wf(r,f)}g=g,h=t.filter.updateFullNode(u,g,s)}else{const g=ee(n);let f=Ef(r,g,e.serverCache);f==null&&e.serverCache.isCompleteForChild(g)&&(f=u.getImmediateChild(g)),f!=null?h=t.filter.updateChild(u,g,f,ye(n),a,s):e.eventCache.getNode().hasChild(g)?h=t.filter.updateChild(u,g,X.EMPTY_NODE,ye(n),a,s):h=u,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ba(r,Xr(e)),o.isLeafNode()&&(h=t.filter.updateFullNode(h,o,s)))}return o=e.serverCache.isFullyInitialized()||Fa(r,ue())!=null,Js(e,h,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new gf(r.getIndex()),s=Fx(r);this.processor_=hN(s);const o=n.serverCache,a=n.eventCache,u=i.updateFullNode(X.EMPTY_NODE,o.getNode(),null),h=s.updateFullNode(X.EMPTY_NODE,a.getNode(),null),g=new Cr(u,o.isFullyInitialized(),i.filtersNodes()),f=new Cr(h,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=gu(f,g),this.eventGenerator_=new Hx(this.query_)}get query(){return this.query_}}function wN(t){return t.viewCache_.serverCache.getNode()}function EN(t){return La(t.viewCache_)}function SN(t,e){const n=Xr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!re(e)&&!n.getImmediateChild(ee(e)).isEmpty())?n.getChild(e):null}function Gm(t){return t.eventRegistrations_.length===0}function CN(t,e){t.eventRegistrations_.push(e)}function Km(t,e,n){const r=[];if(n){z(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function qm(t,e,n,r){e.type===tn.MERGE&&e.source.queryId!==null&&(z(Xr(t.viewCache_),"We should always have a full cache before handling merges"),z(La(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=fN(t.processor_,i,e,n,r);return dN(t.processor_,s.viewCache),z(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Z0(t,s.changes,s.viewCache.eventCache.getNode(),null)}function IN(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ae,(s,o)=>{r.push(Ki(s,o))}),n.isFullyInitialized()&&r.push(W0(n.getNode())),Z0(t,r,n.getNode(),e)}function Z0(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return $x(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ja;class ew{constructor(){this.views=new Map}}function TN(t){z(!ja,"__referenceConstructor has already been defined"),ja=t}function kN(){return z(ja,"Reference.ts has not been loaded"),ja}function xN(t){return t.views.size===0}function Cf(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return z(s!=null,"SyncTree gave us an op for an invalid query."),qm(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(qm(o,e,n,r));return s}}function tw(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=ba(n,i?r:null),u=!1;a?u=!0:r instanceof X?(a=wf(n,r),u=!1):(a=X.EMPTY_NODE,u=!1);const h=gu(new Cr(a,u,!1),new Cr(r,i,!1));return new yN(e,h)}return o}function NN(t,e,n,r,i,s){const o=tw(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),CN(o,n),IN(o,n)}function RN(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Ir(t);if(i==="default")for(const[u,h]of t.views.entries())o=o.concat(Km(h,n,r)),Gm(h)&&(t.views.delete(u),h.query._queryParams.loadsAllData()||s.push(h.query));else{const u=t.views.get(i);u&&(o=o.concat(Km(u,n,r)),Gm(u)&&(t.views.delete(i),u.query._queryParams.loadsAllData()||s.push(u.query)))}return a&&!Ir(t)&&s.push(new(kN())(e._repo,e._path)),{removed:s,events:o}}function nw(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function vr(t,e){let n=null;for(const r of t.views.values())n=n||SN(r,e);return n}function rw(t,e){if(e._queryParams.loadsAllData())return vu(t);{const r=e._queryIdentifier;return t.views.get(r)}}function iw(t,e){return rw(t,e)!=null}function Ir(t){return vu(t)!=null}function vu(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let za;function PN(t){z(!za,"__referenceConstructor has already been defined"),za=t}function AN(){return z(za,"Reference.ts has not been loaded"),za}let ON=1;class Qm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _e(null),this.pendingWriteTree_=lN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function sw(t,e,n,r,i){return Qx(t.pendingWriteTree_,e,n,r,i),i?is(t,new Yr(vf(),e,n)):[]}function DN(t,e,n,r){Yx(t.pendingWriteTree_,e,n,r);const i=_e.fromObject(n);return is(t,new qi(vf(),e,i))}function ir(t,e,n=!1){const r=Xx(t.pendingWriteTree_,e);if(Jx(t.pendingWriteTree_,e)){let s=new _e(null);return r.snap!=null?s=s.set(ue(),!0):Je(r.children,o=>{s=s.set(new me(o),!0)}),is(t,new Ma(r.path,s,n))}else return[]}function $o(t,e,n){return is(t,new Yr(_f(),e,n))}function MN(t,e,n){const r=_e.fromObject(n);return is(t,new qi(_f(),e,r))}function LN(t,e){return is(t,new No(_f(),e))}function bN(t,e,n){const r=Tf(t,n);if(r){const i=kf(r),s=i.path,o=i.queryId,a=lt(s,e),u=new No(yf(o),a);return xf(t,s,u)}else return[]}function Ba(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||iw(o,e))){const u=RN(o,e,n,r);xN(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const h=u.removed;if(a=u.events,!i){const g=h.findIndex(m=>m._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(m,R)=>Ir(R));if(g&&!f){const m=t.syncPointTree_.subtree(s);if(!m.isEmpty()){const R=jN(m);for(let x=0;x<R.length;++x){const O=R[x],L=O.query,k=uw(t,O);t.listenProvider_.startListening(eo(L),Ro(t,L),k.hashFn,k.onComplete)}}}!f&&h.length>0&&!r&&(g?t.listenProvider_.stopListening(eo(e),null):h.forEach(m=>{const R=t.queryToTagMap.get(_u(m));t.listenProvider_.stopListening(eo(m),R)}))}zN(t,h)}return a}function ow(t,e,n,r){const i=Tf(t,r);if(i!=null){const s=kf(i),o=s.path,a=s.queryId,u=lt(o,e),h=new Yr(yf(a),u,n);return xf(t,o,h)}else return[]}function FN(t,e,n,r){const i=Tf(t,r);if(i){const s=kf(i),o=s.path,a=s.queryId,u=lt(o,e),h=_e.fromObject(n),g=new qi(yf(a),u,h);return xf(t,o,g)}else return[]}function Kh(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(m,R)=>{const x=lt(m,i);s=s||vr(R,x),o=o||Ir(R)});let a=t.syncPointTree_.get(i);a?(o=o||Ir(a),s=s||vr(a,ue())):(a=new ew,t.syncPointTree_=t.syncPointTree_.set(i,a));let u;s!=null?u=!0:(u=!1,s=X.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((R,x)=>{const O=vr(x,ue());O&&(s=s.updateImmediateChild(R,O))}));const h=iw(a,e);if(!h&&!e._queryParams.loadsAllData()){const m=_u(e);z(!t.queryToTagMap.has(m),"View does not exist, but we have a tag");const R=BN();t.queryToTagMap.set(m,R),t.tagToQueryMap.set(R,m)}const g=mu(t.pendingWriteTree_,i);let f=NN(a,e,n,g,s,u);if(!h&&!o&&!r){const m=rw(a,e);f=f.concat(VN(t,e,m))}return f}function If(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=lt(o,e),h=vr(a,u);if(h)return h});return q0(i,e,s,n,!0)}function UN(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(h,g)=>{const f=lt(h,n);r=r||vr(g,f)});let i=t.syncPointTree_.get(n);i?r=r||vr(i,ue()):(i=new ew,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Cr(r,!0,!1):null,a=mu(t.pendingWriteTree_,e._path),u=tw(i,e,a,s?o.getNode():X.EMPTY_NODE,s);return EN(u)}function is(t,e){return lw(e,t.syncPointTree_,null,mu(t.pendingWriteTree_,ue()))}function lw(t,e,n,r){if(re(t.path))return aw(t,e,n,r);{const i=e.get(ue());n==null&&i!=null&&(n=vr(i,ue()));let s=[];const o=ee(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const h=n?n.getImmediateChild(o):null,g=Q0(r,o);s=s.concat(lw(a,u,h,g))}return i&&(s=s.concat(Cf(i,t,r,n))),s}}function aw(t,e,n,r){const i=e.get(ue());n==null&&i!=null&&(n=vr(i,ue()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,h=Q0(r,o),g=t.operationForChild(o);g&&(s=s.concat(aw(g,a,u,h)))}),i&&(s=s.concat(Cf(i,t,r,n))),s}function uw(t,e){const n=e.query,r=Ro(t,n);return{hashFn:()=>(wN(e)||X.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?bN(t,n._path,r):LN(t,n._path);{const s=Lk(i,n);return Ba(t,n,null,s)}}}}function Ro(t,e){const n=_u(e);return t.queryToTagMap.get(n)}function _u(t){return t._path.toString()+"$"+t._queryIdentifier}function Tf(t,e){return t.tagToQueryMap.get(e)}function kf(t){const e=t.indexOf("$");return z(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new me(t.substr(0,e))}}function xf(t,e,n){const r=t.syncPointTree_.get(e);z(r,"Missing sync point for query tag that we're tracking");const i=mu(t.pendingWriteTree_,e);return Cf(r,n,i,null)}function jN(t){return t.fold((e,n,r)=>{if(n&&Ir(n))return[vu(n)];{let i=[];return n&&(i=nw(n)),Je(r,(s,o)=>{i=i.concat(o)}),i}})}function eo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(AN())(t._repo,t._path):t}function zN(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=_u(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function BN(){return ON++}function VN(t,e,n){const r=e._path,i=Ro(t,e),s=uw(t,n),o=t.listenProvider_.startListening(eo(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)z(!Ir(a.value),"If we're adding a query, it shouldn't be shadowed");else{const u=a.fold((h,g,f)=>{if(!re(h)&&g&&Ir(g))return[vu(g).query];{let m=[];return g&&(m=m.concat(nw(g).map(R=>R.query))),Je(f,(R,x)=>{m=m.concat(x)}),m}});for(let h=0;h<u.length;++h){const g=u[h];t.listenProvider_.stopListening(eo(g),Ro(t,g))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Nf(n)}node(){return this.node_}}class Rf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Pe(this.path_,e);return new Rf(this.syncTree_,n)}node(){return If(this.syncTree_,this.path_)}}const WN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ym=function(t,e,n){if(!t||typeof t!="object")return t;if(z(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return HN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return $N(t[".sv"],e);z(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},HN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:z(!1,"Unexpected server value: "+t)}},$N=function(t,e,n){t.hasOwnProperty("increment")||z(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&z(!1,"Unexpected increment value: "+r);const i=e.node();if(z(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},cw=function(t,e,n,r){return Pf(e,new Rf(n,t),r)},hw=function(t,e,n){return Pf(t,new Nf(e),n)};function Pf(t,e,n){const r=t.getPriority().val(),i=Ym(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Ym(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ve(a,Ue(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ve(i))),o.forEachChild(Ae,(a,u)=>{const h=Pf(u,e.getImmediateChild(a),n);h!==u&&(s=s.updateImmediateChild(a,h))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Of(t,e){let n=e instanceof me?e:new me(e),r=t,i=ee(n);for(;i!==null;){const s=$i(r.node.children,i)||{children:{},childCount:0};r=new Af(i,r,s),n=ye(n),i=ee(n)}return r}function ss(t){return t.node.value}function dw(t,e){t.node.value=e,qh(t)}function fw(t){return t.node.childCount>0}function GN(t){return ss(t)===void 0&&!fw(t)}function yu(t,e){Je(t.node.children,(n,r)=>{e(new Af(n,t,r))})}function pw(t,e,n,r){n&&e(t),yu(t,i=>{pw(i,e,!0)})}function KN(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Go(t){return new me(t.parent===null?t.name:Go(t.parent)+"/"+t.name)}function qh(t){t.parent!==null&&qN(t.parent,t.name,t)}function qN(t,e,n){const r=GN(n),i=vn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,qh(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,qh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN=/[\[\].#$\/\u0000-\u001F\u007F]/,YN=/[\[\].#$\u0000-\u001F\u007F]/,Ac=10*1024*1024,Df=function(t){return typeof t=="string"&&t.length!==0&&!QN.test(t)},gw=function(t){return typeof t=="string"&&t.length!==0&&!YN.test(t)},XN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),gw(t)},JN=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!of(t)||t&&typeof t=="object"&&vn(t,".sv")},mw=function(t,e,n,r){r&&e===void 0||wu(su(t,"value"),e,n)},wu=function(t,e,n){const r=n instanceof me?new gx(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Lr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Lr(r)+" with contents = "+e.toString());if(of(e))throw new Error(t+"contains "+e.toString()+" "+Lr(r));if(typeof e=="string"&&e.length>Ac/3&&ou(e)>Ac)throw new Error(t+"contains a string greater than "+Ac+" utf8 bytes "+Lr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Je(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Df(o)))throw new Error(t+" contains an invalid key ("+o+") "+Lr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);mx(r,o),wu(t,a,r),vx(r)}),i&&s)throw new Error(t+' contains ".value" child '+Lr(r)+" in addition to actual children.")}},ZN=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Io(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Df(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(px);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Bt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},eR=function(t,e,n,r){const i=su(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Je(e,(o,a)=>{const u=new me(o);if(wu(i,a,Pe(n,u)),hf(u)===".priority"&&!JN(a))throw new Error(i+"contains an invalid value for '"+u.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(u)}),ZN(i,s)},vw=function(t,e,n,r){if(!gw(n))throw new Error(su(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},tR=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),vw(t,e,n)},_w=function(t,e){if(ee(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},nR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Df(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!XN(n))throw new Error(su(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Eu(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!df(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function yw(t,e,n){Eu(t,n),ww(t,r=>df(r,e))}function $t(t,e,n){Eu(t,n),ww(t,r=>Bt(r,e)||Bt(e,r))}function ww(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(iR(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function iR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ys&&Qe("event: "+n.toString()),rs(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR="repo_interrupt",oR=25;class lR{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new rR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Da(),this.transactionQueueTree_=new Af,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function aR(t,e,n){if(t.stats_=uf(t.repoInfo_),t.forceRestClient_||jk())t.server_=new Oa(t.repoInfo_,(r,i,s,o)=>{Xm(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Jm(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{je(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new An(t.repoInfo_,e,(r,i,s,o)=>{Xm(t,r,i,s,o)},r=>{Jm(t,r)},r=>{uR(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Hk(t.repoInfo_,()=>new Wx(t.stats_,t.server_)),t.infoData_=new Ux,t.infoSyncTree_=new Qm({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=$o(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Mf(t,"connected",!1),t.serverSyncTree_=new Qm({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const h=o(a,u);$t(t.eventQueue_,r._path,h)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Ew(t){const n=t.infoData_.getNode(new me(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Su(t){return WN({timestamp:Ew(t)})}function Xm(t,e,n,r,i){t.dataUpdateCount++;const s=new me(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=wa(n,h=>Ue(h));o=FN(t.serverSyncTree_,s,u,i)}else{const u=Ue(n);o=ow(t.serverSyncTree_,s,u,i)}else if(r){const u=wa(n,h=>Ue(h));o=MN(t.serverSyncTree_,s,u)}else{const u=Ue(n);o=$o(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=Yi(t,s)),$t(t.eventQueue_,a,o)}function Jm(t,e){Mf(t,"connected",e),e===!1&&fR(t)}function uR(t,e){Je(e,(n,r)=>{Mf(t,n,r)})}function Mf(t,e,n){const r=new me("/.info/"+e),i=Ue(n);t.infoData_.updateSnapshot(r,i);const s=$o(t.infoSyncTree_,r,i);$t(t.eventQueue_,r,s)}function Lf(t){return t.nextWriteId_++}function cR(t,e,n){const r=UN(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Ue(i).withIndex(e._queryParams.getIndex());Kh(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=$o(t.serverSyncTree_,e._path,s);else{const a=Ro(t.serverSyncTree_,e);o=ow(t.serverSyncTree_,e._path,s,a)}return $t(t.eventQueue_,e._path,o),Ba(t.serverSyncTree_,e,n,null,!0),s},i=>(Ko(t,"get for query "+je(e)+" failed: "+i),Promise.reject(new Error(i))))}function hR(t,e,n,r,i){Ko(t,"set",{path:e.toString(),value:n,priority:r});const s=Su(t),o=Ue(n,r),a=If(t.serverSyncTree_,e),u=hw(o,a,s),h=Lf(t),g=sw(t.serverSyncTree_,e,u,h,!0);Eu(t.eventQueue_,g),t.server_.put(e.toString(),o.val(!0),(m,R)=>{const x=m==="ok";x||ut("set at "+e+" failed: "+m);const O=ir(t.serverSyncTree_,h,!x);$t(t.eventQueue_,e,O),Qh(t,i,m,R)});const f=Ff(t,e);Yi(t,f),$t(t.eventQueue_,f,[])}function dR(t,e,n,r){Ko(t,"update",{path:e.toString(),value:n});let i=!0;const s=Su(t),o={};if(Je(n,(a,u)=>{i=!1,o[a]=cw(Pe(e,a),Ue(u),t.serverSyncTree_,s)}),i)Qe("update() called with empty data.  Don't do anything."),Qh(t,r,"ok",void 0);else{const a=Lf(t),u=DN(t.serverSyncTree_,e,o,a);Eu(t.eventQueue_,u),t.server_.merge(e.toString(),n,(h,g)=>{const f=h==="ok";f||ut("update at "+e+" failed: "+h);const m=ir(t.serverSyncTree_,a,!f),R=m.length>0?Yi(t,e):e;$t(t.eventQueue_,R,m),Qh(t,r,h,g)}),Je(n,h=>{const g=Ff(t,Pe(e,h));Yi(t,g)}),$t(t.eventQueue_,e,[])}}function fR(t){Ko(t,"onDisconnectEvents");const e=Su(t),n=Da();Bh(t.onDisconnect_,ue(),(i,s)=>{const o=cw(i,s,t.serverSyncTree_,e);H0(n,i,o)});let r=[];Bh(n,ue(),(i,s)=>{r=r.concat($o(t.serverSyncTree_,i,s));const o=Ff(t,i);Yi(t,o)}),t.onDisconnect_=Da(),$t(t.eventQueue_,ue(),r)}function pR(t,e,n){let r;ee(e._path)===".info"?r=Kh(t.infoSyncTree_,e,n):r=Kh(t.serverSyncTree_,e,n),yw(t.eventQueue_,e._path,r)}function gR(t,e,n){let r;ee(e._path)===".info"?r=Ba(t.infoSyncTree_,e,n):r=Ba(t.serverSyncTree_,e,n),yw(t.eventQueue_,e._path,r)}function mR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(sR)}function Ko(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Qe(n,...e)}function Qh(t,e,n,r){e&&rs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Sw(t,e,n){return If(t.serverSyncTree_,e,n)||X.EMPTY_NODE}function bf(t,e=t.transactionQueueTree_){if(e||Cu(t,e),ss(e)){const n=Iw(t,e);z(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&vR(t,Go(e),n)}else fw(e)&&yu(e,n=>{bf(t,n)})}function vR(t,e,n){const r=n.map(h=>h.currentWriteId),i=Sw(t,e,r);let s=i;const o=i.hash();for(let h=0;h<n.length;h++){const g=n[h];z(g.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),g.status=1,g.retryCount++;const f=lt(e,g.path);s=s.updateChild(f,g.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,h=>{Ko(t,"transaction put response",{path:u.toString(),status:h});let g=[];if(h==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,g=g.concat(ir(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();Cu(t,Of(t.transactionQueueTree_,e)),bf(t,t.transactionQueueTree_),$t(t.eventQueue_,e,g);for(let m=0;m<f.length;m++)rs(f[m])}else{if(h==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{ut("transaction at "+u.toString()+" failed: "+h);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=h}Yi(t,e)}},o)}function Yi(t,e){const n=Cw(t,e),r=Go(n),i=Iw(t,n);return _R(t,i,r),r}function _R(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],h=lt(n,u.path);let g=!1,f;if(z(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)g=!0,f=u.abortReason,i=i.concat(ir(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=oR)g=!0,f="maxretry",i=i.concat(ir(t.serverSyncTree_,u.currentWriteId,!0));else{const m=Sw(t,u.path,o);u.currentInputSnapshot=m;const R=e[a].update(m.val());if(R!==void 0){wu("transaction failed: Data returned ",R,u.path);let x=Ue(R);typeof R=="object"&&R!=null&&vn(R,".priority")||(x=x.updatePriority(m.getPriority()));const L=u.currentWriteId,k=Su(t),w=hw(x,m,k);u.currentOutputSnapshotRaw=x,u.currentOutputSnapshotResolved=w,u.currentWriteId=Lf(t),o.splice(o.indexOf(L),1),i=i.concat(sw(t.serverSyncTree_,u.path,w,u.currentWriteId,u.applyLocally)),i=i.concat(ir(t.serverSyncTree_,L,!0))}else g=!0,f="nodata",i=i.concat(ir(t.serverSyncTree_,u.currentWriteId,!0))}$t(t.eventQueue_,n,i),i=[],g&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Cu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)rs(r[a]);bf(t,t.transactionQueueTree_)}function Cw(t,e){let n,r=t.transactionQueueTree_;for(n=ee(e);n!==null&&ss(r)===void 0;)r=Of(r,n),e=ye(e),n=ee(e);return r}function Iw(t,e){const n=[];return Tw(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Tw(t,e,n){const r=ss(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);yu(e,i=>{Tw(t,i,n)})}function Cu(t,e){const n=ss(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,dw(e,n.length>0?n:void 0)}yu(e,r=>{Cu(t,r)})}function Ff(t,e){const n=Go(Cw(t,e)),r=Of(t.transactionQueueTree_,e);return KN(r,i=>{Oc(t,i)}),Oc(t,r),pw(r,i=>{Oc(t,i)}),n}function Oc(t,e){const n=ss(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(z(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(z(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ir(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?dw(e,void 0):n.length=s+1,$t(t.eventQueue_,Go(e),i);for(let o=0;o<r.length;o++)rs(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function wR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ut(`Invalid query segment '${n}' in query '${t}'`)}return e}const Zm=function(t,e){const n=ER(t),r=n.namespace;n.domain==="firebase.com"&&jn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&jn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Pk();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new x0(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new me(n.pathString)}},ER=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let h=t.indexOf("//");h>=0&&(a=t.substring(0,h-1),t=t.substring(h+2));let g=t.indexOf("/");g===-1&&(g=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(g,f)),g<f&&(i=yR(t.substring(g,f)));const m=wR(t.substring(Math.min(t.length,f)));h=e.indexOf(":"),h>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(h+1),10)):h=e.length;const R=e.slice(0,h);if(R.toLowerCase()==="localhost")n="localhost";else if(R.split(".").length<=2)n=R;else{const x=e.indexOf(".");r=e.substring(0,x).toLowerCase(),n=e.substring(x+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",SR=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=ev.charAt(n%64),n=Math.floor(n/64);z(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=ev.charAt(e[i]);return z(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+je(this.snapshot.exportVal())}}class IR{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return z(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return re(this._path)?null:hf(this._path)}get ref(){return new Vn(this._repo,this._path)}get _queryIdentifier(){const e=jm(this._queryParams),n=lf(e);return n==="{}"?"default":n}get _queryObject(){return jm(this._queryParams)}isEqual(e){if(e=Mt(e),!(e instanceof Uf))return!1;const n=this._repo===e._repo,r=df(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+fx(this._path)}}class Vn extends Uf{constructor(e,n){super(e,n,new mf,!1)}get parent(){const e=b0(this._path);return e===null?null:new Vn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Po{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new me(e),r=Ao(this.ref,e);return new Po(this._node.getChild(n),r,Ae)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Po(i,Ao(this.ref,r),Ae)))}hasChild(e){const n=new me(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function bt(t,e){return t=Mt(t),t._checkNotDeleted("ref"),e!==void 0?Ao(t._root,e):t._root}function Ao(t,e){return t=Mt(t),ee(t._path)===null?tR("child","path",e):vw("child","path",e),new Vn(t._repo,Pe(t._path,e))}function TR(t,e){t=Mt(t),_w("push",t._path),mw("push",e,t._path,!0);const n=Ew(t._repo),r=SR(n),i=Ao(t,r),s=Ao(t,r);let o;return o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Dc(t,e){t=Mt(t),_w("set",t._path),mw("set",e,t._path,!1);const n=new Fo;return hR(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function di(t,e){eR("update",e,t._path);const n=new Fo;return dR(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function tv(t){t=Mt(t);const e=new kw(()=>{}),n=new Iu(e);return cR(t._repo,t,n).then(r=>new Po(r,new Vn(t._repo,t._path),t._queryParams.getIndex()))}class Iu{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new CR("value",this,new Po(e.snapshotNode,new Vn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new IR(this,e,n):null}matches(e){return e instanceof Iu?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function kR(t,e,n,r,i){const s=new kw(n,void 0),o=new Iu(s);return pR(t._repo,t,o),()=>gR(t._repo,t,o)}function xR(t,e,n,r){return kR(t,"value",e)}TN(Vn);PN(Vn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR="FIREBASE_DATABASE_EMULATOR_HOST",Yh={};let RR=!1;function PR(t,e,n,r){t.repoInfo_=new x0(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function AR(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||jn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Qe("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Zm(s,i),a=o.repoInfo,u;typeof process<"u"&&Em&&(u=Em[NR]),u?(s=`http://${u}?ns=${a.namespace}`,o=Zm(s,i),a=o.repoInfo):o.repoInfo.secure;const h=new Bk(t.name,t.options,e);nR("Invalid Firebase Database URL",o),re(o.path)||jn("Database URL must point to the root of a Firebase Database (not including a child path).");const g=DR(a,t,h,new zk(t.name,n));return new MR(g,t)}function OR(t,e){const n=Yh[e];(!n||n[t.key]!==t)&&jn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),mR(t),delete n[t.key]}function DR(t,e,n,r){let i=Yh[e.name];i||(i={},Yh[e.name]=i);let s=i[t.toURLString()];return s&&jn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new lR(t,RR,n,r),i[t.toURLString()]=s,s}class MR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(aR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Vn(this._repo,ue())),this._rootInternal}_delete(){return this._rootInternal!==null&&(OR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&jn("Cannot call "+e+" on a deleted database.")}}function LR(t=xy(),e){const n=au(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=UC("database");r&&bR(n,...r)}return n}function bR(t,e,n,r={}){t=Mt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&jn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&jn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Kl(Kl.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:jC(r.mockUserToken,t.app.options.projectId);s=new Kl(o)}PR(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FR(t){Ik(ei),Kr(new wr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return AR(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),pn(Sm,Cm,t),pn(Sm,Cm,"esm2017")}An.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};An.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};FR();const UR={apiKey:"AIzaSyCcH6B3SqafCvX_8b4EQvfxhRyZAQFbDSg",authDomain:"ruleta-multiplayer.firebaseapp.com",databaseURL:"https://ruleta-multiplayer-default-rtdb.europe-west1.firebasedatabase.app",projectId:"ruleta-multiplayer",storageBucket:"ruleta-multiplayer.firebasestorage.app",messagingSenderId:"463162815348",appId:"1:463162815348:web:da85d70e198bd72b93f221",measurementId:"G-WQZZ97K6BY"},jf=ky(UR),jR=lk(jf);Ck(jf,{localCache:{kind:"persistent",cacheSizeBytes:Ek}});const Ft=LR(jf),Pl=()=>{const t=new Uint32Array(1);return window.crypto.getRandomValues(t),t[0]/4294967296},zR=(t,e)=>{const n=t.length,r=360/n,i=Math.floor(Pl()*n),s=t[i],o=7+Math.floor(Pl()*4),a=Pl()*(r*.8)+r*.1,u=360-i*r-r/2,g=Math.floor(e/360)*360+o*360+u+a,f=5500+Math.floor(Pl()*1500);return{targetRotation:g,winnerWedge:s,duration:f}},xw=ce.createContext(void 0),BR=[{id:"init-1",name:"Sí 👍",color:"#6366f1"},{id:"init-2",name:"No 👎",color:"#f43f5e"}],VR=({children:t})=>{const[e,n]=ce.useState(null),[r,i]=ce.useState(null),[s,o]=ce.useState([]),a=ce.useRef(null),u=ce.useRef(null),h=ce.useRef(null);ce.useEffect(()=>{const w=sessionStorage.getItem("ruleta_user");w&&n(JSON.parse(w))},[]);const g=async w=>{if(w.trim())try{const D={id:(await $I(jR)).user.uid,name:w.trim()};sessionStorage.setItem("ruleta_user",JSON.stringify(D)),n(D)}catch(I){console.error("Error en login:",I)}},f=w=>{console.log(`[RTDB Sync] Conectando a la sala: ${w}`);const I=bt(Ft,`rooms/${w}`);h.current=xR(I,D=>{const b=D.val();if(!b){i(null),o([]);return}if(i(b),b.players){const U=Object.entries(b.players).map(([_,v])=>({id:_,...v}));o(U)}else o([]);e&&b.hostId===e.id&&b.status==="spinning"&&b.activeGame==="dice"&&(u.current&&clearTimeout(u.current),u.current=setTimeout(async()=>{try{await di(bt(Ft,`rooms/${b.id}`),{status:"idle"})}catch(U){console.error("Error al detener la animación de los dados:",U)}},1300))})},m=async()=>{if(e)try{const w=Math.random().toString(36).substring(2,6).toUpperCase(),I=bt(Ft,"rooms"),D=TR(I),b=D.key;if(!b)return;const U={id:b,code:w,hostId:e.id,status:"idle",activeGame:"roulette",currentRotation:0,targetRotation:0,duration:5e3,wedges:BR,players:{[e.id]:{name:e.name,isHost:!0,online:!0}}};await Dc(D,U),await Dc(bt(Ft,`codes/${w}`),b),f(b)}catch(w){console.error("Error al crear la sala en RTDB:",w)}},R=async w=>{if(!e)return{ok:!1,error:"Usuario no autenticado"};const I=w.trim().toUpperCase();try{const b=(await tv(bt(Ft,`codes/${I}`))).val();if(!b)return{ok:!1,error:"La sala de juego no existe."};const U=bt(Ft,`rooms/${b}/players/${e.id}`);return await Dc(U,{name:e.name,isHost:!1,online:!0}),f(b),{ok:!0}}catch{return{ok:!1,error:"Error de conexión al intentar unirse."}}},x=async w=>{if(r)try{const I=bt(Ft,`rooms/${r.id}`);await di(I,{wedges:w})}catch(I){console.error("Error actualizando cuñas en RTDB:",I)}},O=async w=>{if(!(!r||!e||r.hostId!==e.id))try{const I=bt(Ft,`rooms/${r.id}`);await di(I,{activeGame:w,status:"idle"})}catch(I){console.error("Error al cambiar de juego:",I)}},L=async(w,I)=>{if(!(!r||!e||r.hostId!==e.id))try{const D=Math.random(),b=[];for(let _=0;_<w;_++)b.push(Math.floor(Math.random()*20)+1);const U=bt(Ft,`rooms/${r.id}`);await di(U,{status:"spinning",spinStartAt:Date.now(),duration:1200,diceSeed:D,diceResults:b,diceThresh:I})}catch(D){console.error("Error al lanzar los dados en la RTDB:",D)}},k=async()=>{if(!r||r.status==="spinning"||!e||r.hostId!==e.id)return;const{targetRotation:w,duration:I}=zR(r.wedges,r.currentRotation),D=Date.now();try{const b=bt(Ft,`rooms/${r.id}`);await di(b,{status:"spinning",targetRotation:w,duration:I,spinStartAt:D}),a.current&&clearTimeout(a.current),a.current=setTimeout(async()=>{const U=await tv(bt(Ft,`rooms/${r.id}`));if(!U.exists())return;if(U.val().spinStartAt===D){const v=w%360,y=r.wedges,E=y.length,C=360/E;let P=(270-v)%360;P<0&&(P+=360);const S=Math.floor(P/C)%E,Ie=y[S]||y[0];await di(bt(Ft,`rooms/${r.id}`),{status:"idle",currentRotation:v,lastResult:{id:Ie.id,name:Ie.name,color:Ie.color,firedAt:Date.now()}})}},I)}catch(b){console.error("Error al ejecutar el spin en la RTDB:",b)}};return ce.useEffect(()=>()=>{a.current&&clearTimeout(a.current),u.current&&clearTimeout(u.current)},[]),F.jsx(xw.Provider,{value:{user:e,room:r,players:s,login:g,createRoom:m,joinRoom:R,updateWedgesInDb:x,spinWheel:k,changeActiveGame:O,rollDice:L},children:t})},Tu=()=>{const t=ce.useContext(xw);if(!t)throw new Error("useGame debe usarse dentro de GameProvider");return t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var WR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HR=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ku=(t,e)=>{const n=ce.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:u,...h},g)=>ce.createElement("svg",{ref:g,...WR,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${HR(t)}`,a].join(" "),...h},[...e.map(([f,m])=>ce.createElement(f,m)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $R=ku("Dices",[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GR=ku("Disc",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KR=ku("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qR=ku("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),QR=()=>{const[t,e]=ce.useState(!1),{room:n,user:r,changeActiveGame:i}=Tu();if(!n||!r)return null;const s=n.hostId===r.id,o=async a=>{s&&(await i(a),e(!1))};return F.jsxs(F.Fragment,{children:[F.jsx("button",{onClick:()=>e(!0),className:"fixed top-4 left-4 z-50 p-2.5 bg-slate-900/80 border border-white/10 rounded-xl text-white backdrop-blur-md hover:bg-slate-800 transition-all",children:F.jsx(KR,{size:20})}),t&&F.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-50",onClick:()=>e(!1)}),F.jsxs("div",{className:`fixed top-0 left-0 h-full w-64 bg-slate-950 border-r border-white/10 p-6 z-50 transition-transform duration-300 flex flex-col gap-6 text-white ${t?"translate-x-0":"-translate-x-full"}`,children:[F.jsxs("div",{className:"flex justify-between items-center border-b border-white/5 pb-4",children:[F.jsx("h2",{className:"font-black text-sm tracking-wider uppercase bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent",children:"Centro de Juegos"}),F.jsx("button",{onClick:()=>e(!1),className:"text-slate-400 hover:text-white",children:F.jsx(qR,{size:20})})]}),F.jsxs("div",{className:"flex flex-col gap-2 flex-1",children:[F.jsxs("button",{onClick:()=>o("roulette"),disabled:!s&&n.activeGame!=="roulette",className:`flex items-center gap-3 w-full p-3 rounded-xl font-bold text-xs transition-all text-left ${n.activeGame==="roulette"?"bg-indigo-600 text-white shadow-lg":"bg-white/5 hover:bg-white/10 text-slate-300 disabled:opacity-40"}`,children:[F.jsx(GR,{className:n.status==="spinning"&&n.activeGame==="roulette"?"animate-spin":"",size:18}),F.jsxs("div",{children:[F.jsx("p",{children:"La Ruleta de la Suerte"}),!s&&F.jsx("span",{className:"text-[9px] text-slate-400 font-normal",children:"Solo lectura"})]})]}),F.jsxs("button",{onClick:()=>o("dice"),disabled:!s&&n.activeGame!=="dice",className:`flex items-center gap-3 w-full p-3 rounded-xl font-bold text-xs transition-all text-left ${n.activeGame==="dice"?"bg-indigo-600 text-white shadow-lg":"bg-white/5 hover:bg-white/10 text-slate-300 disabled:opacity-40"}`,children:[F.jsx($R,{size:18}),F.jsxs("div",{children:[F.jsx("p",{children:"Dado D20 Ultra 3D"}),!s&&F.jsx("span",{className:"text-[9px] text-slate-400 font-normal",children:"Solo lectura"})]})]})]}),F.jsxs("div",{className:"text-center text-[10px] text-slate-500 font-medium",children:["Sala: ",F.jsx("span",{className:"text-cyan-400 font-bold uppercase",children:n.id})]})]})]})},YR=t=>{if(!t)return"#ffffff";const e=t.replace("#",""),n=parseInt(e.substring(0,2),16),r=parseInt(e.substring(2,4),16),i=parseInt(e.substring(4,6),16);return(n*299+r*587+i*114)/1e3>=128?"#0f172a":"#ffffff"},XR=()=>{const{room:t}=Tu(),e=ce.useRef(null),n=(t==null?void 0:t.wedges)||[];return ce.useEffect(()=>{const r=e.current;if(!r||n.length===0)return;const i=r.getContext("2d");if(!i)return;const s=r.width,o=s/2,a=o-10,u=2*Math.PI/n.length;let h;const g=f=>{i.clearRect(0,0,s,s),i.save(),i.translate(o,o);const m=f*Math.PI/180;i.rotate(m),i.translate(-o,-o),n.forEach((R,x)=>{const O=x*u,L=O+u;i.beginPath(),i.moveTo(o,o),i.arc(o,o,a,O,L),i.closePath(),i.fillStyle=R.color||"#334155",i.fill(),i.strokeStyle="#0f172a",i.lineWidth=2,i.stroke(),i.save(),i.translate(o,o),i.rotate(O+u/2),i.textAlign="right",i.textBaseline="middle",i.fillStyle=YR(R.color),i.font="bold 14px sans-serif",i.fillText(R.name,a-20,0),i.restore()}),i.restore(),i.beginPath(),i.arc(o,o,18,0,2*Math.PI),i.fillStyle="#0f172a",i.fill(),i.strokeStyle="#38bdf8",i.lineWidth=4,i.stroke()};if((t==null?void 0:t.status)==="spinning"&&t.spinStartAt){const f=t.currentRotation%360,m=t.targetRotation,R=t.duration,x=t.spinStartAt,O=()=>{const k=Date.now()-x;if(k>=R){g(m);return}const w=k/R,I=b=>b*(2-b),D=f+(m-f)*I(w);g(D),h=requestAnimationFrame(O)};O()}else g((t==null?void 0:t.currentRotation)||0);return()=>{h&&cancelAnimationFrame(h)}},[n,t==null?void 0:t.id,t==null?void 0:t.status,t==null?void 0:t.currentRotation,t==null?void 0:t.targetRotation,t==null?void 0:t.spinStartAt,t==null?void 0:t.duration]),F.jsxs("div",{className:"relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center select-none",children:[F.jsx("div",{className:`absolute -top-4 left-1/2 -translate-x-1/2 z-30 w-0 h-0 
          border-l-[16px] border-l-transparent 
          border-r-[16px] border-r-transparent 
          border-t-[32px] border-t-rose-500 
          drop-shadow-[0_6px_8px_rgba(0,0,0,0.7)]
          transition-transform duration-200
          ${(t==null?void 0:t.status)==="spinning"?"animate-pulse scale-110":""}`}),F.jsx("canvas",{ref:e,width:400,height:400,className:"w-full h-full rounded-full shadow-[0_0_50px_rgba(0,0,0,0.5)] border-4 border-slate-800 z-10"})]})},vt=(1+Math.sqrt(5))/2,Mc=Math.sqrt(1+vt*vt),Xh=[[-1,vt,0],[1,vt,0],[-1,-vt,0],[1,-vt,0],[0,-1,vt],[0,1,vt],[0,-1,-vt],[0,1,-vt],[vt,0,-1],[vt,0,1],[-vt,0,-1],[-vt,0,1]].map(([t,e,n])=>[t/Mc,e/Mc,n/Mc]),Va=[[0,11,5],[0,5,1],[0,1,7],[0,7,10],[0,10,11],[1,5,9],[5,11,4],[11,10,2],[10,7,6],[7,1,8],[3,9,4],[3,4,2],[3,2,6],[3,6,8],[3,8,9],[4,9,5],[2,4,11],[6,2,10],[8,6,7],[9,8,1]],JR=(t,e)=>{const n=Math.cos(e),r=Math.sin(e);return t.map(([i,s,o])=>[i,s*n-o*r,s*r+o*n])},Nw=(t,e)=>{const n=Math.cos(e),r=Math.sin(e);return t.map(([i,s,o])=>[i*n+o*r,s,-i*r+o*n])},ZR=(t,e)=>{const n=Math.cos(e),r=Math.sin(e);return t.map(([i,s,o])=>[i*n-s*r,i*r+s*n,o])},e2=(t,e,n,r)=>ZR(Nw(JR(t,e),n),r);function nv(t,e){const[n,r,i]=t[e[0]],[s,o,a]=t[e[1]],[u,h,g]=t[e[2]],f=(o-r)*(g-i)-(a-i)*(h-r),m=(a-i)*(u-n)-(s-n)*(g-i),R=(s-n)*(h-r)-(o-r)*(u-n),x=Math.sqrt(f*f+m*m+R*R)||1;return[f/x,m/x,R/x]}const t2=()=>{const t=nv(Xh,Va[0]),e=-Math.atan2(t[0],t[2]),n=Nw(Xh,e),r=nv(n,Va[0]);return{rx:-Math.atan2(-r[1],r[2]),ry:e,rz:0}},wn=t2(),Lc=([t,e,n],r,i,s,o=3)=>{const a=o/(o-n);return[r+t*s*a,i-e*s*a]};function un(t){const e=Math.sin(t)*1e4;return e-Math.floor(e)}function n2(t,e){const n=Array.from({length:20},(o,a)=>a+1);let r=e;for(let o=n.length-1;o>0;o--){r+=.123;const a=un(r),u=Math.floor(a*(o+1)),h=n[o];n[o]=n[u],n[u]=h}const i=n.indexOf(t),s=n[0];return n[0]=n[i],n[i]=s,n}const r2=({seed:t,results:e,status:n,duration:r,spinStartAt:i})=>{const s=ce.useRef(null),o=ce.useRef(null);return ce.useEffect(()=>{var m;if(!e||e.length===0)return;const a=(m=s.current)==null?void 0:m.querySelectorAll("canvas");if(!a||a.length===0)return;const u=130,h=Array.from(a).map((R,x)=>{const O=R.getContext("2d"),L=t+x*7.43;return{canvas:R,ctx:O,result:e[x]||20,faceNums:n2(e[x]||20,L),rx0:un(L*1)*Math.PI*2,ry0:un(L*2)*Math.PI*2,rz0:un(L*3)*Math.PI*2,drx:(un(L*4)<.5?1:-1)*(12+un(L*5)*8),dry:(un(L*6)<.5?1:-1)*(10+un(L*7)*8),drz:(un(L*8)<.5?1:-1)*(8+un(L*9)*6),delay:x*120}}),g=i||Date.now(),f=()=>{let R=!1;const x=Date.now();h.forEach(O=>{const L=O.ctx;L.clearRect(0,0,u,u);const k=u/2,w=u/2,I=u*.4;let D=O.rx0,b=O.ry0,U=O.rz0;if(n==="spinning"){const y=x-g-O.delay;if(y>0){const E=Math.min(y/r,1);if(E<1){R=!0;const C=1-Math.pow(1-E,3),P=y/1e3;D=O.rx0+O.drx*P*(1-C*.7)+wn.rx*C*.5,b=O.ry0+O.dry*P*(1-C*.7)+wn.ry*C*.5,U=O.rz0+O.drz*P*(1-C*.7)+wn.rz*C*.5}else D=wn.rx,b=wn.ry,U=wn.rz}}else D=wn.rx,b=wn.ry,U=wn.rz;const _=e2(Xh,D,b,U),v=Va.map((y,E)=>({fi:E,zAvg:(_[y[0]][2]+_[y[1]][2]+_[y[2]][2])/3})).sort((y,E)=>y.zAvg-E.zAvg);for(const{fi:y}of v){const E=Va[y],C=[Lc(_[E[0]],k,w,I),Lc(_[E[1]],k,w,I),Lc(_[E[2]],k,w,I)],[P,S,Ie]=_[E[0]],[ft,Gt,pt]=_[E[1]],[W,Y,N]=_[E[2]],T=(Gt-S)*(N-Ie)-(pt-Ie)*(Y-S),B=(pt-Ie)*(W-P)-(ft-P)*(N-Ie),H=(ft-P)*(Y-S)-(Gt-S)*(W-P),K=Math.sqrt(T*T+B*B+H*H)||1,q=Math.max(.15,(T*.3+B*.5+H*.8)/K),Q=O.faceNums[y];let G=[99,102,241];Q===20?G=[46,204,113]:Q===1&&(G=[255,77,77]),L.beginPath(),L.moveTo(C[0][0],C[0][1]),L.lineTo(C[1][0],C[1][1]),L.lineTo(C[2][0],C[2][1]),L.closePath(),L.fillStyle=`rgb(${Math.round(G[0]*q)},${Math.round(G[1]*q)},${Math.round(G[2]*q)})`,L.fill(),L.strokeStyle="rgba(15, 23, 42, 0.7)",L.lineWidth=1.2,L.stroke();const Z=H/K;if(Z>.15){const he=(C[0][0]+C[1][0]+C[2][0])/3,fe=(C[0][1]+C[1][1]+C[2][1])/3,le=Math.abs((C[1][0]-C[0][0])*(C[2][1]-C[0][1])-(C[2][0]-C[0][0])*(C[1][1]-C[0][1]))/2,pe=Math.max(7,Math.sqrt(le)*.58*Z);L.save(),L.translate(he,fe),L.font=`900 ${pe}px Inter, system-ui, sans-serif`,L.textAlign="center",L.textBaseline="middle",L.strokeStyle="rgba(15, 23, 42, 0.95)",L.lineWidth=pe*.2,L.strokeText(String(Q),0,0),L.fillStyle="#ffffff",L.fillText(String(Q),0,0),L.restore()}}}),(n==="spinning"||R)&&(o.current=requestAnimationFrame(f))};return f(),()=>{o.current&&cancelAnimationFrame(o.current)}},[t,e,n,r,i]),F.jsx("div",{ref:s,className:"flex flex-wrap items-center justify-center gap-6 p-2 w-full transition-all duration-300",children:e.map((a,u)=>F.jsx("canvas",{width:130,height:130,className:"w-[130px] h-[130px] drop-shadow-[0_10px_25px_rgba(99,102,241,0.25)] animate-fade-in"},u))})};var zf={};(function t(e,n,r,i){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=function(){if(!e.OffscreenCanvas)return!1;try{var N=new OffscreenCanvas(1,1),T=N.getContext("2d");T.fillRect(0,0,1,1);var B=N.transferToImageBitmap();T.createPattern(B,"no-repeat")}catch{return!1}return!0}();function u(){}function h(N){var T=n.exports.Promise,B=T!==void 0?T:e.Promise;return typeof B=="function"?new B(N):(N(u,u),null)}var g=function(N,T){return{transform:function(B){if(N)return B;if(T.has(B))return T.get(B);var H=new OffscreenCanvas(B.width,B.height),K=H.getContext("2d");return K.drawImage(B,0,0),T.set(B,H),H},clear:function(){T.clear()}}}(a,new Map),f=function(){var N=Math.floor(16.666666666666668),T,B,H={},K=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(T=function(q){var Q=Math.random();return H[Q]=requestAnimationFrame(function G(Z){K===Z||K+N-1<Z?(K=Z,delete H[Q],q()):H[Q]=requestAnimationFrame(G)}),Q},B=function(q){H[q]&&cancelAnimationFrame(H[q])}):(T=function(q){return setTimeout(q,N)},B=function(q){return clearTimeout(q)}),{frame:T,cancel:B}}(),m=function(){var N,T,B={};function H(K){function q(Q,G){K.postMessage({options:Q||{},callback:G})}K.init=function(G){var Z=G.transferControlToOffscreen();K.postMessage({canvas:Z},[Z])},K.fire=function(G,Z,he){if(T)return q(G,null),T;var fe=Math.random().toString(36).slice(2);return T=h(function(le){function pe(Oe){Oe.data.callback===fe&&(delete B[fe],K.removeEventListener("message",pe),T=null,g.clear(),he(),le())}K.addEventListener("message",pe),q(G,fe),B[fe]=pe.bind(null,{data:{callback:fe}})}),T},K.reset=function(){K.postMessage({reset:!0});for(var G in B)B[G](),delete B[G]}}return function(){if(N)return N;if(!r&&s){var K=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{N=new Worker(URL.createObjectURL(new Blob([K])))}catch(q){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",q),null}H(N)}return N}}(),R={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function x(N,T){return T?T(N):N}function O(N){return N!=null}function L(N,T,B){return x(N&&O(N[T])?N[T]:R[T],B)}function k(N){return N<0?0:Math.floor(N)}function w(N,T){return Math.floor(Math.random()*(T-N))+N}function I(N){return parseInt(N,16)}function D(N){return N.map(b)}function b(N){var T=String(N).replace(/[^0-9a-f]/gi,"");return T.length<6&&(T=T[0]+T[0]+T[1]+T[1]+T[2]+T[2]),{r:I(T.substring(0,2)),g:I(T.substring(2,4)),b:I(T.substring(4,6))}}function U(N){var T=L(N,"origin",Object);return T.x=L(T,"x",Number),T.y=L(T,"y",Number),T}function _(N){N.width=document.documentElement.clientWidth,N.height=document.documentElement.clientHeight}function v(N){var T=N.getBoundingClientRect();N.width=T.width,N.height=T.height}function y(N){var T=document.createElement("canvas");return T.style.position="fixed",T.style.top="0px",T.style.left="0px",T.style.pointerEvents="none",T.style.zIndex=N,T}function E(N,T,B,H,K,q,Q,G,Z){N.save(),N.translate(T,B),N.rotate(q),N.scale(H,K),N.arc(0,0,1,Q,G,Z),N.restore()}function C(N){var T=N.angle*(Math.PI/180),B=N.spread*(Math.PI/180);return{x:N.x,y:N.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:N.startVelocity*.5+Math.random()*N.startVelocity,angle2D:-T+(.5*B-Math.random()*B),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:N.color,shape:N.shape,tick:0,totalTicks:N.ticks,decay:N.decay,drift:N.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:N.gravity*3,ovalScalar:.6,scalar:N.scalar,flat:N.flat}}function P(N,T){T.x+=Math.cos(T.angle2D)*T.velocity+T.drift,T.y+=Math.sin(T.angle2D)*T.velocity+T.gravity,T.velocity*=T.decay,T.flat?(T.wobble=0,T.wobbleX=T.x+10*T.scalar,T.wobbleY=T.y+10*T.scalar,T.tiltSin=0,T.tiltCos=0,T.random=1):(T.wobble+=T.wobbleSpeed,T.wobbleX=T.x+10*T.scalar*Math.cos(T.wobble),T.wobbleY=T.y+10*T.scalar*Math.sin(T.wobble),T.tiltAngle+=.1,T.tiltSin=Math.sin(T.tiltAngle),T.tiltCos=Math.cos(T.tiltAngle),T.random=Math.random()+2);var B=T.tick++/T.totalTicks,H=T.x+T.random*T.tiltCos,K=T.y+T.random*T.tiltSin,q=T.wobbleX+T.random*T.tiltCos,Q=T.wobbleY+T.random*T.tiltSin;if(N.fillStyle="rgba("+T.color.r+", "+T.color.g+", "+T.color.b+", "+(1-B)+")",N.beginPath(),o&&T.shape.type==="path"&&typeof T.shape.path=="string"&&Array.isArray(T.shape.matrix))N.fill(pt(T.shape.path,T.shape.matrix,T.x,T.y,Math.abs(q-H)*.1,Math.abs(Q-K)*.1,Math.PI/10*T.wobble));else if(T.shape.type==="bitmap"){var G=Math.PI/10*T.wobble,Z=Math.abs(q-H)*.1,he=Math.abs(Q-K)*.1,fe=T.shape.bitmap.width*T.scalar,le=T.shape.bitmap.height*T.scalar,pe=new DOMMatrix([Math.cos(G)*Z,Math.sin(G)*Z,-Math.sin(G)*he,Math.cos(G)*he,T.x,T.y]);pe.multiplySelf(new DOMMatrix(T.shape.matrix));var Oe=N.createPattern(g.transform(T.shape.bitmap),"no-repeat");Oe.setTransform(pe),N.globalAlpha=1-B,N.fillStyle=Oe,N.fillRect(T.x-fe/2,T.y-le/2,fe,le),N.globalAlpha=1}else if(T.shape==="circle")N.ellipse?N.ellipse(T.x,T.y,Math.abs(q-H)*T.ovalScalar,Math.abs(Q-K)*T.ovalScalar,Math.PI/10*T.wobble,0,2*Math.PI):E(N,T.x,T.y,Math.abs(q-H)*T.ovalScalar,Math.abs(Q-K)*T.ovalScalar,Math.PI/10*T.wobble,0,2*Math.PI);else if(T.shape==="star")for(var ne=Math.PI/2*3,Be=4*T.scalar,gt=8*T.scalar,kt=T.x,Kt=T.y,ln=5,mt=Math.PI/ln;ln--;)kt=T.x+Math.cos(ne)*gt,Kt=T.y+Math.sin(ne)*gt,N.lineTo(kt,Kt),ne+=mt,kt=T.x+Math.cos(ne)*Be,Kt=T.y+Math.sin(ne)*Be,N.lineTo(kt,Kt),ne+=mt;else N.moveTo(Math.floor(T.x),Math.floor(T.y)),N.lineTo(Math.floor(T.wobbleX),Math.floor(K)),N.lineTo(Math.floor(q),Math.floor(Q)),N.lineTo(Math.floor(H),Math.floor(T.wobbleY));return N.closePath(),N.fill(),T.tick<T.totalTicks}function S(N,T,B,H,K){var q=T.slice(),Q=N.getContext("2d"),G,Z,he=h(function(fe){function le(){G=Z=null,Q.clearRect(0,0,H.width,H.height),g.clear(),K(),fe()}function pe(){r&&!(H.width===i.width&&H.height===i.height)&&(H.width=N.width=i.width,H.height=N.height=i.height),!H.width&&!H.height&&(B(N),H.width=N.width,H.height=N.height),Q.clearRect(0,0,H.width,H.height),q=q.filter(function(Oe){return P(Q,Oe)}),q.length?G=f.frame(pe):le()}G=f.frame(pe),Z=le});return{addFettis:function(fe){return q=q.concat(fe),he},canvas:N,promise:he,reset:function(){G&&f.cancel(G),Z&&Z()}}}function Ie(N,T){var B=!N,H=!!L(T||{},"resize"),K=!1,q=L(T,"disableForReducedMotion",Boolean),Q=s&&!!L(T||{},"useWorker"),G=Q?m():null,Z=B?_:v,he=N&&G?!!N.__confetti_initialized:!1,fe=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,le;function pe(ne,Be,gt){for(var kt=L(ne,"particleCount",k),Kt=L(ne,"angle",Number),ln=L(ne,"spread",Number),mt=L(ne,"startVelocity",Number),qo=L(ne,"decay",Number),xu=L(ne,"gravity",Number),os=L(ne,"drift",Number),ri=L(ne,"colors",D),Qo=L(ne,"ticks",Number),be=L(ne,"shapes"),Ge=L(ne,"scalar"),ii=!!L(ne,"flat"),ls=U(ne),as=kt,us=[],Nr=N.width*ls.x,Yo=N.height*ls.y;as--;)us.push(C({x:Nr,y:Yo,angle:Kt,spread:ln,startVelocity:mt,color:ri[as%ri.length],shape:be[w(0,be.length)],ticks:Qo,decay:qo,gravity:xu,drift:os,scalar:Ge,flat:ii}));return le?le.addFettis(us):(le=S(N,us,Z,Be,gt),le.promise)}function Oe(ne){var Be=q||L(ne,"disableForReducedMotion",Boolean),gt=L(ne,"zIndex",Number);if(Be&&fe)return h(function(mt){mt()});B&&le?N=le.canvas:B&&!N&&(N=y(gt),document.body.appendChild(N)),H&&!he&&Z(N);var kt={width:N.width,height:N.height};G&&!he&&G.init(N),he=!0,G&&(N.__confetti_initialized=!0);function Kt(){if(G){var mt={getBoundingClientRect:function(){if(!B)return N.getBoundingClientRect()}};Z(mt),G.postMessage({resize:{width:mt.width,height:mt.height}});return}kt.width=kt.height=null}function ln(){le=null,H&&(K=!1,e.removeEventListener("resize",Kt)),B&&N&&(document.body.contains(N)&&document.body.removeChild(N),N=null,he=!1)}return H&&!K&&(K=!0,e.addEventListener("resize",Kt,!1)),G?G.fire(ne,kt,ln):pe(ne,kt,ln)}return Oe.reset=function(){G&&G.reset(),le&&le.reset()},Oe}var ft;function Gt(){return ft||(ft=Ie(null,{useWorker:!0,resize:!0})),ft}function pt(N,T,B,H,K,q,Q){var G=new Path2D(N),Z=new Path2D;Z.addPath(G,new DOMMatrix(T));var he=new Path2D;return he.addPath(Z,new DOMMatrix([Math.cos(Q)*K,Math.sin(Q)*K,-Math.sin(Q)*q,Math.cos(Q)*q,B,H])),he}function W(N){if(!o)throw new Error("path confetti are not supported in this browser");var T,B;typeof N=="string"?T=N:(T=N.path,B=N.matrix);var H=new Path2D(T),K=document.createElement("canvas"),q=K.getContext("2d");if(!B){for(var Q=1e3,G=Q,Z=Q,he=0,fe=0,le,pe,Oe=0;Oe<Q;Oe+=2)for(var ne=0;ne<Q;ne+=2)q.isPointInPath(H,Oe,ne,"nonzero")&&(G=Math.min(G,Oe),Z=Math.min(Z,ne),he=Math.max(he,Oe),fe=Math.max(fe,ne));le=he-G,pe=fe-Z;var Be=10,gt=Math.min(Be/le,Be/pe);B=[gt,0,0,gt,-Math.round(le/2+G)*gt,-Math.round(pe/2+Z)*gt]}return{type:"path",path:T,matrix:B}}function Y(N){var T,B=1,H="#000000",K='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof N=="string"?T=N:(T=N.text,B="scalar"in N?N.scalar:B,K="fontFamily"in N?N.fontFamily:K,H="color"in N?N.color:H);var q=10*B,Q=""+q+"px "+K,G=new OffscreenCanvas(q,q),Z=G.getContext("2d");Z.font=Q;var he=Z.measureText(T),fe=Math.ceil(he.actualBoundingBoxRight+he.actualBoundingBoxLeft),le=Math.ceil(he.actualBoundingBoxAscent+he.actualBoundingBoxDescent),pe=2,Oe=he.actualBoundingBoxLeft+pe,ne=he.actualBoundingBoxAscent+pe;fe+=pe+pe,le+=pe+pe,G=new OffscreenCanvas(fe,le),Z=G.getContext("2d"),Z.font=Q,Z.fillStyle=H,Z.fillText(T,Oe,ne);var Be=1/B;return{type:"bitmap",bitmap:G.transferToImageBitmap(),matrix:[Be,0,0,Be,-fe*Be/2,-le*Be/2]}}n.exports=function(){return Gt().apply(this,arguments)},n.exports.reset=function(){Gt().reset()},n.exports.create=Ie,n.exports.shapeFromPath=W,n.exports.shapeFromText=Y})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),zf,!1);const i2=zf.exports;zf.exports.create;const s2=()=>{var U;const{room:t,user:e,players:n,updateWedgesInDb:r,spinWheel:i,rollDice:s}=Tu(),[o,a]=ce.useState(""),[u,h]=ce.useState("#6366f1"),[g,f]=ce.useState(1),[m,R]=ce.useState(10);if(ce.useEffect(()=>{t&&t.status==="idle"&&t.lastResult&&i2({particleCount:120,spread:70,origin:{y:.6}})},[t==null?void 0:t.status,(U=t==null?void 0:t.lastResult)==null?void 0:U.firedAt]),!t||!e)return null;const x=t.hostId===e.id,O=t.diceResults??[],L=t.diceThresh??10,k=O.filter(_=>_>L),w=k.length,I=k.reduce((_,v)=>_+(v-L),0),D=async()=>{if(!o.trim())return;const _={id:Math.random().toString(36).substring(2,9),name:o.trim(),color:u};await r([...t.wedges,_]),a("")},b=async _=>{if(t.wedges.length<=2)return;const v=t.wedges.filter(y=>y.id!==_);await r(v)};return F.jsxs("div",{className:"w-full flex flex-col gap-5",children:[t.activeGame==="dice"&&O.length>0&&F.jsxs("div",{className:"grid grid-cols-2 gap-3 w-full",children:[F.jsxs("div",{className:"bg-gradient-to-br from-emerald-500/20 to-teal-500/5 border border-emerald-500/20 p-4 rounded-2xl text-center shadow-lg backdrop-blur-md",children:[F.jsxs("p",{className:"text-[10px] text-emerald-400 font-black tracking-widest uppercase mb-1",children:["Éxitos (> ",L,")"]}),F.jsx("span",{className:"text-3xl font-mono font-black text-white",children:t.status==="spinning"?"...":w})]}),F.jsxs("div",{className:"bg-gradient-to-br from-indigo-500/20 to-purple-500/5 border border-indigo-500/20 p-4 rounded-2xl text-center shadow-lg backdrop-blur-md",children:[F.jsx("p",{className:"text-[10px] text-indigo-400 font-black tracking-widest uppercase mb-1",children:"Suma Total"}),F.jsx("span",{className:"text-3xl font-mono font-black text-white",children:t.status==="spinning"?"...":I})]})]}),t.activeGame==="wheel"&&t.status==="idle"&&t.lastResult&&F.jsxs("div",{style:{backgroundColor:t.lastResult.color},className:"w-full p-4 rounded-2xl text-center font-black shadow-xl border border-white/20 text-slate-950",children:[F.jsx("p",{className:"text-[10px] tracking-widest opacity-70 font-bold uppercase mb-0.5",children:"Resultado Anterior"}),F.jsxs("span",{className:"text-lg",children:["🎉 ¡",t.lastResult.name,"! 🏆"]})]}),F.jsxs("div",{className:"w-full bg-slate-900/60 border border-white/10 rounded-3xl p-6 flex flex-col gap-5 backdrop-blur-md",children:[F.jsxs("div",{className:"flex justify-between items-center",children:[F.jsx("h3",{className:"text-sm font-black tracking-wider uppercase bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent",children:t.activeGame==="dice"?"Ajustes del Sistema D20":"Opciones de Ruleta"}),F.jsx("span",{className:"text-[10px] tracking-wide px-2.5 py-1 bg-white/5 border border-white/10 rounded-full font-bold text-slate-400",children:x?"👑 HOST":"👁️ ESPECTADOR"})]}),x?F.jsxs(F.Fragment,{children:[t.activeGame==="dice"?F.jsxs("div",{className:"flex flex-col gap-4 bg-slate-950/40 p-4 border border-white/5 rounded-2xl",children:[F.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[F.jsxs("div",{children:[F.jsx("label",{className:"text-[10px] text-slate-400 font-black tracking-wide uppercase block mb-1.5",children:"Nº de Dados (D20)"}),F.jsx("input",{type:"number",min:1,max:12,value:g,onChange:_=>f(Math.max(1,parseInt(_.target.value)||1)),className:"w-full px-3 py-2 bg-slate-900 border border-white/10 rounded-xl text-white font-mono text-sm focus:outline-none focus:border-pink-500"})]}),F.jsxs("div",{children:[F.jsx("label",{className:"text-[10px] text-slate-400 font-black tracking-wide uppercase block mb-1.5",children:"Dificultad (DT)"}),F.jsx("input",{type:"number",min:0,max:20,value:m,onChange:_=>R(parseInt(_.target.value)||0),className:"w-full px-3 py-2 bg-slate-900 border border-white/10 rounded-xl text-white font-mono text-sm focus:outline-none focus:border-pink-500"})]})]}),F.jsxs("p",{className:"text-[10px] text-slate-500 font-medium text-center",children:["Al pulsar el botón inferior se lanzarán ",g," dados simultáneos. Se considerará éxito toda tirada estrictamente mayor que ",m,"."]})]}):F.jsxs(F.Fragment,{children:[F.jsxs("div",{className:"flex gap-2",children:[F.jsx("input",{type:"text",value:o,onChange:_=>a(_.target.value),placeholder:"Añadir opción...",className:"flex-1 px-4 py-2.5 bg-slate-950 border border-white/10 rounded-xl text-white text-xs focus:outline-none"}),F.jsx("input",{type:"color",value:u,onChange:_=>h(_.target.value),className:"w-10 h-10 bg-transparent border-0 cursor-pointer rounded-xl"}),F.jsx("button",{onClick:D,className:"px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold",children:"✓"})]}),F.jsx("div",{className:"max-h-[160px] overflow-y-auto space-y-1.5 pr-1",children:t.wedges.map(_=>F.jsxs("div",{className:"flex justify-between items-center p-2.5 bg-slate-950/50 border border-white/5 rounded-xl text-xs",children:[F.jsxs("div",{className:"flex items-center gap-2",children:[F.jsx("div",{className:"w-3 h-3 rounded-full",style:{backgroundColor:_.color}}),F.jsx("span",{className:"text-slate-300 font-medium",children:_.name})]}),F.jsx("button",{onClick:()=>b(_.id),className:"text-slate-500 hover:text-rose-400 font-bold px-1",children:"✕"})]},_.id))})]}),t.activeGame==="dice"?F.jsx("button",{onClick:()=>s(g,m),disabled:t.status==="spinning",className:"w-full py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-black tracking-wider uppercase rounded-xl shadow-xl transition-all active:scale-[0.98] disabled:opacity-20 text-xs",children:t.status==="spinning"?"🎰 Lanzando en Sala...":`Lanzar ${g} Dados 🎲`}):F.jsx("button",{onClick:i,disabled:t.status==="spinning",className:"w-full py-4 bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-black tracking-wider uppercase rounded-xl shadow-xl transition-all active:scale-[0.98] disabled:opacity-20 text-xs",children:t.status==="spinning"?"🎰 Girando...":"Girar Ruleta 🎲"})]}):F.jsx("div",{className:"text-xs text-slate-400 text-center py-6 border border-dashed border-white/10 rounded-xl bg-slate-950/20 px-4",children:t.activeGame==="dice"?`Esperando que el Host lance los dados. Ajustes: DT fijado en [${L}].`:"Solo el creador de la sala puede alterar el tablero y girar la rueda."})]}),F.jsxs("div",{className:"w-full bg-slate-900/40 border border-white/10 rounded-3xl p-5 flex flex-col gap-3.5",children:[F.jsxs("div",{className:"flex items-center gap-2",children:[F.jsx("div",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),F.jsxs("h4",{className:"text-xs font-black tracking-wider text-slate-400 uppercase",children:["Jugadores (",n.length,")"]})]}),F.jsx("div",{className:"space-y-2 max-h-[140px] overflow-y-auto pr-1",children:n.map(_=>F.jsxs("div",{className:"flex justify-between items-center p-2 bg-slate-950/40 border border-white/5 rounded-xl text-xs",children:[F.jsxs("span",{className:"text-slate-200 font-semibold",children:[_.name," ",_.id===e.id&&"(Tú)"]}),F.jsx("span",{className:"text-[9px] font-black text-cyan-400",children:t.hostId===_.id?"👑 HOST":"👤 JUGADOR"})]},_.id))})]})]})};function o2(){const{user:t,room:e,login:n,createRoom:r,joinRoom:i}=Tu(),[s,o]=ce.useState(""),[a,u]=ce.useState(""),[h,g]=ce.useState(""),[f,m]=ce.useState(!1),R=async()=>{if(a.trim()){g(""),m(!0),console.log("[App.tsx] Ejecutando handleJoin de forma segura para:",a);try{const x=await i(a);x&&x.ok?console.log("[App.tsx] Unión exitosa confirmada. Esperando renderizado de sala."):(g((x==null?void 0:x.error)??"Error al unirse a la sala"),m(!1))}catch(x){console.error("[App.tsx] Error en handleJoin:",x),g("No se pudo conectar con el servidor."),m(!1)}}};return t?!e||!e.id||!e.hostId?F.jsx("div",{className:"min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4",children:F.jsxs("div",{className:"w-full max-w-sm space-y-4",children:[F.jsx("button",{onClick:()=>{console.log("Click detectado físicamente en el botón de App.tsx"),r()},className:"w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm rounded-2xl shadow-lg shadow-cyan-500/20 active:scale-[0.98] transition-all uppercase tracking-wider",children:"Crear sala Privada"}),F.jsxs("div",{className:"relative flex items-center p-2 bg-slate-900 border border-white/10 rounded-2xl",children:[F.jsx("input",{type:"text",placeholder:"CÓDIGO DE SALA",value:a,onChange:x=>{u(x.target.value),g("")},onKeyDown:x=>x.key==="Enter"&&R(),maxLength:4,className:"w-full bg-transparent pl-4 pr-20 py-2 text-white font-mono font-bold uppercase tracking-widest outline-none placeholder:text-slate-600 text-sm"}),F.jsx("button",{onClick:R,disabled:f,className:"absolute right-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-bold text-xs rounded-xl border border-white/5 transition-all disabled:opacity-50",children:f?"...":"Entrar"})]}),h&&F.jsxs("p",{className:"text-center text-xs text-rose-400 font-semibold bg-rose-500/10 border border-rose-500/20 rounded-xl py-2 px-4",children:["⚠️ ",h]})]})}):F.jsxs("div",{className:"min-h-screen bg-slate-950 text-white flex flex-col lg:flex-row items-center justify-center gap-10 p-6 relative",children:[F.jsx(QR,{}),F.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center w-full",children:[F.jsxs("div",{className:"mb-6 bg-slate-900/60 backdrop-blur-md px-5 py-2 border border-white/10 rounded-xl text-center shadow-lg",children:[F.jsx("p",{className:"text-[10px] text-slate-400 font-black tracking-widest uppercase",children:"Código de Sala"}),F.jsx("p",{className:"text-xl font-mono font-black text-cyan-400 tracking-widest",children:e.code})]}),F.jsx("div",{className:"flex-1 flex items-center justify-center p-4",children:e.activeGame==="dice"?F.jsx(r2,{seed:e.diceSeed??0,results:e.diceResults??[20,20],status:e.status,duration:e.duration??1200,spinStartAt:e.spinStartAt}):F.jsx(XR,{})})]}),F.jsx("div",{className:"w-full lg:w-[400px] shrink-0",children:F.jsx(s2,{})})]}):F.jsx("div",{className:"min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4",children:F.jsxs("div",{className:"w-full max-w-sm bg-slate-900 border border-white/10 rounded-3xl p-6 space-y-4 shadow-2xl",children:[F.jsx("h2",{className:"text-xl font-black text-white text-center tracking-wide uppercase",children:"Lobby Multijuegos"}),F.jsx("input",{type:"text",placeholder:"Introduce tu Nickname...",value:s,onChange:x=>o(x.target.value),onKeyDown:x=>x.key==="Enter"&&s.trim()&&n(s),className:"w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"}),F.jsx("button",{onClick:()=>s.trim()&&n(s),className:"w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all",children:"Acceder al Lobby"})]})})}bc.createRoot(document.getElementById("root")).render(F.jsx(_E.StrictMode,{children:F.jsx(VR,{children:F.jsx(o2,{})})}));
