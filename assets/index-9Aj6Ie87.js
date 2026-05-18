(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Gw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qm={exports:{}},Ua={},Qm={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var No=Symbol.for("react.element"),Kw=Symbol.for("react.portal"),qw=Symbol.for("react.fragment"),Qw=Symbol.for("react.strict_mode"),Yw=Symbol.for("react.profiler"),Xw=Symbol.for("react.provider"),Jw=Symbol.for("react.context"),Zw=Symbol.for("react.forward_ref"),eE=Symbol.for("react.suspense"),tE=Symbol.for("react.memo"),nE=Symbol.for("react.lazy"),Cp=Symbol.iterator;function rE(t){return t===null||typeof t!="object"?null:(t=Cp&&t[Cp]||t["@@iterator"],typeof t=="function"?t:null)}var Ym={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xm=Object.assign,Jm={};function Ki(t,e,n){this.props=t,this.context=e,this.refs=Jm,this.updater=n||Ym}Ki.prototype.isReactComponent={};Ki.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ki.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Zm(){}Zm.prototype=Ki.prototype;function Wh(t,e,n){this.props=t,this.context=e,this.refs=Jm,this.updater=n||Ym}var Hh=Wh.prototype=new Zm;Hh.constructor=Wh;Xm(Hh,Ki.prototype);Hh.isPureReactComponent=!0;var Ip=Array.isArray,e_=Object.prototype.hasOwnProperty,$h={current:null},t_={key:!0,ref:!0,__self:!0,__source:!0};function n_(t,e,n){var r,i={},s=null,l=null;if(e!=null)for(r in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(s=""+e.key),e)e_.call(e,r)&&!t_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),h=0;h<a;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:No,type:t,key:s,ref:l,props:i,_owner:$h.current}}function iE(t,e){return{$$typeof:No,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gh(t){return typeof t=="object"&&t!==null&&t.$$typeof===No}function sE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Tp=/\/+/g;function ju(t,e){return typeof t=="object"&&t!==null&&t.key!=null?sE(""+t.key):e.toString(36)}function Rl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case No:case Kw:l=!0}}if(l)return l=t,i=i(l),t=r===""?"."+ju(l,0):r,Ip(i)?(n="",t!=null&&(n=t.replace(Tp,"$&/")+"/"),Rl(i,e,n,"",function(h){return h})):i!=null&&(Gh(i)&&(i=iE(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Tp,"$&/")+"/")+t)),e.push(i)),1;if(l=0,r=r===""?".":r+":",Ip(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+ju(s,a);l+=Rl(s,e,n,u,i)}else if(u=rE(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+ju(s,a++),l+=Rl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function sl(t,e,n){if(t==null)return t;var r=[],i=0;return Rl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function oE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ht={current:null},Nl={transition:null},lE={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:Nl,ReactCurrentOwner:$h};function r_(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:sl,forEach:function(t,e,n){sl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return sl(t,function(){e++}),e},toArray:function(t){return sl(t,function(e){return e})||[]},only:function(t){if(!Gh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=Ki;ie.Fragment=qw;ie.Profiler=Yw;ie.PureComponent=Wh;ie.StrictMode=Qw;ie.Suspense=eE;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lE;ie.act=r_;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Xm({},t.props),i=t.key,s=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,l=$h.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)e_.call(e,u)&&!t_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var h=0;h<u;h++)a[h]=arguments[h+2];r.children=a}return{$$typeof:No,type:t.type,key:i,ref:s,props:r,_owner:l}};ie.createContext=function(t){return t={$$typeof:Jw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Xw,_context:t},t.Consumer=t};ie.createElement=n_;ie.createFactory=function(t){var e=n_.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:Zw,render:t}};ie.isValidElement=Gh;ie.lazy=function(t){return{$$typeof:nE,_payload:{_status:-1,_result:t},_init:oE}};ie.memo=function(t,e){return{$$typeof:tE,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=Nl.transition;Nl.transition={};try{t()}finally{Nl.transition=e}};ie.unstable_act=r_;ie.useCallback=function(t,e){return ht.current.useCallback(t,e)};ie.useContext=function(t){return ht.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return ht.current.useDeferredValue(t)};ie.useEffect=function(t,e){return ht.current.useEffect(t,e)};ie.useId=function(){return ht.current.useId()};ie.useImperativeHandle=function(t,e,n){return ht.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return ht.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return ht.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return ht.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return ht.current.useReducer(t,e,n)};ie.useRef=function(t){return ht.current.useRef(t)};ie.useState=function(t){return ht.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return ht.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return ht.current.useTransition()};ie.version="18.3.1";Qm.exports=ie;var Oe=Qm.exports;const aE=Gw(Oe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uE=Oe,cE=Symbol.for("react.element"),hE=Symbol.for("react.fragment"),dE=Object.prototype.hasOwnProperty,fE=uE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pE={key:!0,ref:!0,__self:!0,__source:!0};function i_(t,e,n){var r,i={},s=null,l=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(l=e.ref);for(r in e)dE.call(e,r)&&!pE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:cE,type:t,key:s,ref:l,props:i,_owner:fE.current}}Ua.Fragment=hE;Ua.jsx=i_;Ua.jsxs=i_;qm.exports=Ua;var $=qm.exports,Nc={},s_={exports:{}},Pt={},o_={exports:{}},l_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,Y){var N=V.length;V.push(Y);e:for(;0<N;){var I=N-1>>>1,z=V[I];if(0<i(z,Y))V[I]=Y,V[N]=z,N=I;else break e}}function n(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var Y=V[0],N=V.pop();if(N!==Y){V[0]=N;e:for(var I=0,z=V.length,W=z>>>1;I<W;){var K=2*(I+1)-1,Q=V[K],X=K+1,G=V[X];if(0>i(Q,N))X<z&&0>i(G,Q)?(V[I]=G,V[X]=N,I=X):(V[I]=Q,V[K]=N,I=K);else if(X<z&&0>i(G,N))V[I]=G,V[X]=N,I=X;else break e}}return Y}function i(V,Y){var N=V.sortIndex-Y.sortIndex;return N!==0?N:V.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var l=Date,a=l.now();t.unstable_now=function(){return l.now()-a}}var u=[],h=[],g=1,p=null,m=3,P=!1,T=!1,O=!1,L=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(V){for(var Y=n(h);Y!==null;){if(Y.callback===null)r(h);else if(Y.startTime<=V)r(h),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(h)}}function M(V){if(O=!1,k(V),!T)if(n(u)!==null)T=!0,jn(U);else{var Y=n(h);Y!==null&&Vt(M,Y.startTime-V)}}function U(V,Y){T=!1,O&&(O=!1,C(_),_=-1),P=!0;var N=m;try{for(k(Y),p=n(u);p!==null&&(!(p.expirationTime>Y)||V&&!R());){var I=p.callback;if(typeof I=="function"){p.callback=null,m=p.priorityLevel;var z=I(p.expirationTime<=Y);Y=t.unstable_now(),typeof z=="function"?p.callback=z:p===n(u)&&r(u),k(Y)}else r(u);p=n(u)}if(p!==null)var W=!0;else{var K=n(h);K!==null&&Vt(M,K.startTime-Y),W=!1}return W}finally{p=null,m=N,P=!1}}var B=!1,w=null,_=-1,v=5,S=-1;function R(){return!(t.unstable_now()-S<v)}function A(){if(w!==null){var V=t.unstable_now();S=V;var Y=!0;try{Y=w(!0,V)}finally{Y?E():(B=!1,w=null)}}else B=!1}var E;if(typeof y=="function")E=function(){y(A)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,Bt=it.port2;it.port1.onmessage=A,E=function(){Bt.postMessage(null)}}else E=function(){L(A,0)};function jn(V){w=V,B||(B=!0,E())}function Vt(V,Y){_=L(function(){V(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){T||P||(T=!0,jn(U))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(V){switch(m){case 1:case 2:case 3:var Y=3;break;default:Y=m}var N=m;m=Y;try{return V()}finally{m=N}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,Y){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var N=m;m=V;try{return Y()}finally{m=N}},t.unstable_scheduleCallback=function(V,Y,N){var I=t.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?I+N:I):N=I,V){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=N+z,V={id:g++,callback:Y,priorityLevel:V,startTime:N,expirationTime:z,sortIndex:-1},N>I?(V.sortIndex=N,e(h,V),n(u)===null&&V===n(h)&&(O?(C(_),_=-1):O=!0,Vt(M,N-I))):(V.sortIndex=z,e(u,V),T||P||(T=!0,jn(U))),V},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(V){var Y=m;return function(){var N=m;m=Y;try{return V.apply(this,arguments)}finally{m=N}}}})(l_);o_.exports=l_;var gE=o_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mE=Oe,Nt=gE;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a_=new Set,Xs={};function Qr(t,e){Mi(t,e),Mi(t+"Capture",e)}function Mi(t,e){for(Xs[t]=e,t=0;t<e.length;t++)a_.add(e[t])}var Nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pc=Object.prototype.hasOwnProperty,_E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kp={},Rp={};function vE(t){return Pc.call(Rp,t)?!0:Pc.call(kp,t)?!1:_E.test(t)?Rp[t]=!0:(kp[t]=!0,!1)}function yE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function wE(t,e,n,r){if(e===null||typeof e>"u"||yE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dt(t,e,n,r,i,s,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=l}var Ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ye[t]=new dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ye[e]=new dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ye[t]=new dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ye[t]=new dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ye[t]=new dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ye[t]=new dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ye[t]=new dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ye[t]=new dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ye[t]=new dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Kh=/[\-:]([a-z])/g;function qh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Kh,qh);Ye[e]=new dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Kh,qh);Ye[e]=new dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Kh,qh);Ye[e]=new dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ye[t]=new dt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ye.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ye[t]=new dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qh(t,e,n,r){var i=Ye.hasOwnProperty(e)?Ye[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(wE(e,n,i,r)&&(n=null),r||i===null?vE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var bn=mE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ol=Symbol.for("react.element"),ui=Symbol.for("react.portal"),ci=Symbol.for("react.fragment"),Yh=Symbol.for("react.strict_mode"),Ac=Symbol.for("react.profiler"),u_=Symbol.for("react.provider"),c_=Symbol.for("react.context"),Xh=Symbol.for("react.forward_ref"),xc=Symbol.for("react.suspense"),Oc=Symbol.for("react.suspense_list"),Jh=Symbol.for("react.memo"),$n=Symbol.for("react.lazy"),h_=Symbol.for("react.offscreen"),Np=Symbol.iterator;function vs(t){return t===null||typeof t!="object"?null:(t=Np&&t[Np]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Object.assign,zu;function As(t){if(zu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zu=e&&e[1]||""}return`
`+zu+t}var Bu=!1;function Vu(t,e){if(!t||Bu)return"";Bu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),l=i.length-1,a=s.length-1;1<=l&&0<=a&&i[l]!==s[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==s[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==s[a]){var u=`
`+i[l].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=l&&0<=a);break}}}finally{Bu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?As(t):""}function EE(t){switch(t.tag){case 5:return As(t.type);case 16:return As("Lazy");case 13:return As("Suspense");case 19:return As("SuspenseList");case 0:case 2:case 15:return t=Vu(t.type,!1),t;case 11:return t=Vu(t.type.render,!1),t;case 1:return t=Vu(t.type,!0),t;default:return""}}function Dc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ci:return"Fragment";case ui:return"Portal";case Ac:return"Profiler";case Yh:return"StrictMode";case xc:return"Suspense";case Oc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case c_:return(t.displayName||"Context")+".Consumer";case u_:return(t._context.displayName||"Context")+".Provider";case Xh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jh:return e=t.displayName||null,e!==null?e:Dc(t.type)||"Memo";case $n:e=t._payload,t=t._init;try{return Dc(t(e))}catch{}}return null}function SE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dc(e);case 8:return e===Yh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function d_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function CE(t){var e=d_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,s.call(this,l)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ll(t){t._valueTracker||(t._valueTracker=CE(t))}function f_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=d_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Hl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Mc(t,e){var n=e.checked;return ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Pp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function p_(t,e){e=e.checked,e!=null&&Qh(t,"checked",e,!1)}function Lc(t,e){p_(t,e);var n=gr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bc(t,e.type,n):e.hasOwnProperty("defaultValue")&&bc(t,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ap(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bc(t,e,n){(e!=="number"||Hl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var xs=Array.isArray;function Ci(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+gr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Fc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(xs(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gr(n)}}function g_(t,e){var n=gr(e.value),r=gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Op(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function m_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?m_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var al,__=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(al=al||document.createElement("div"),al.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=al.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Js(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ms={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},IE=["Webkit","ms","Moz","O"];Object.keys(Ms).forEach(function(t){IE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ms[e]=Ms[t]})});function v_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ms.hasOwnProperty(t)&&Ms[t]?(""+e).trim():e+"px"}function y_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=v_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var TE=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jc(t,e){if(e){if(TE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function zc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bc=null;function Zh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vc=null,Ii=null,Ti=null;function Dp(t){if(t=xo(t)){if(typeof Vc!="function")throw Error(b(280));var e=t.stateNode;e&&(e=Wa(e),Vc(t.stateNode,t.type,e))}}function w_(t){Ii?Ti?Ti.push(t):Ti=[t]:Ii=t}function E_(){if(Ii){var t=Ii,e=Ti;if(Ti=Ii=null,Dp(t),e)for(t=0;t<e.length;t++)Dp(e[t])}}function S_(t,e){return t(e)}function C_(){}var Wu=!1;function I_(t,e,n){if(Wu)return t(e,n);Wu=!0;try{return S_(t,e,n)}finally{Wu=!1,(Ii!==null||Ti!==null)&&(C_(),E_())}}function Zs(t,e){var n=t.stateNode;if(n===null)return null;var r=Wa(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var Wc=!1;if(Nn)try{var ys={};Object.defineProperty(ys,"passive",{get:function(){Wc=!0}}),window.addEventListener("test",ys,ys),window.removeEventListener("test",ys,ys)}catch{Wc=!1}function kE(t,e,n,r,i,s,l,a,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(g){this.onError(g)}}var Ls=!1,$l=null,Gl=!1,Hc=null,RE={onError:function(t){Ls=!0,$l=t}};function NE(t,e,n,r,i,s,l,a,u){Ls=!1,$l=null,kE.apply(RE,arguments)}function PE(t,e,n,r,i,s,l,a,u){if(NE.apply(this,arguments),Ls){if(Ls){var h=$l;Ls=!1,$l=null}else throw Error(b(198));Gl||(Gl=!0,Hc=h)}}function Yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function T_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Mp(t){if(Yr(t)!==t)throw Error(b(188))}function AE(t){var e=t.alternate;if(!e){if(e=Yr(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Mp(i),t;if(s===r)return Mp(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=s;break}if(a===r){l=!0,r=i,n=s;break}a=a.sibling}if(!l){for(a=s.child;a;){if(a===n){l=!0,n=s,r=i;break}if(a===r){l=!0,r=s,n=i;break}a=a.sibling}if(!l)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function k_(t){return t=AE(t),t!==null?R_(t):null}function R_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=R_(t);if(e!==null)return e;t=t.sibling}return null}var N_=Nt.unstable_scheduleCallback,Lp=Nt.unstable_cancelCallback,xE=Nt.unstable_shouldYield,OE=Nt.unstable_requestPaint,De=Nt.unstable_now,DE=Nt.unstable_getCurrentPriorityLevel,ed=Nt.unstable_ImmediatePriority,P_=Nt.unstable_UserBlockingPriority,Kl=Nt.unstable_NormalPriority,ME=Nt.unstable_LowPriority,A_=Nt.unstable_IdlePriority,ja=null,ln=null;function LE(t){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(ja,t,void 0,(t.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:UE,bE=Math.log,FE=Math.LN2;function UE(t){return t>>>=0,t===0?32:31-(bE(t)/FE|0)|0}var ul=64,cl=4194304;function Os(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ql(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Os(a):(s&=l,s!==0&&(r=Os(s)))}else l=n&~i,l!==0?r=Os(l):s!==0&&(r=Os(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jt(e),i=1<<n,r|=t[n],e&=~i;return r}function jE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var l=31-Jt(s),a=1<<l,u=i[l];u===-1?(!(a&n)||a&r)&&(i[l]=jE(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function $c(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function x_(){var t=ul;return ul<<=1,!(ul&4194240)&&(ul=64),t}function Hu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Po(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jt(e),t[e]=n}function BE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Jt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function td(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function O_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var D_,nd,M_,L_,b_,Gc=!1,hl=[],nr=null,rr=null,ir=null,eo=new Map,to=new Map,Kn=[],VE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bp(t,e){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":eo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(e.pointerId)}}function ws(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=xo(e),e!==null&&nd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function WE(t,e,n,r,i){switch(e){case"focusin":return nr=ws(nr,t,e,n,r,i),!0;case"dragenter":return rr=ws(rr,t,e,n,r,i),!0;case"mouseover":return ir=ws(ir,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return eo.set(s,ws(eo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,to.set(s,ws(to.get(s)||null,t,e,n,r,i)),!0}return!1}function F_(t){var e=Dr(t.target);if(e!==null){var n=Yr(e);if(n!==null){if(e=n.tag,e===13){if(e=T_(n),e!==null){t.blockedOn=e,b_(t.priority,function(){M_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Kc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Bc=r,n.target.dispatchEvent(r),Bc=null}else return e=xo(n),e!==null&&nd(e),t.blockedOn=n,!1;e.shift()}return!0}function Fp(t,e,n){Pl(t)&&n.delete(e)}function HE(){Gc=!1,nr!==null&&Pl(nr)&&(nr=null),rr!==null&&Pl(rr)&&(rr=null),ir!==null&&Pl(ir)&&(ir=null),eo.forEach(Fp),to.forEach(Fp)}function Es(t,e){t.blockedOn===e&&(t.blockedOn=null,Gc||(Gc=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,HE)))}function no(t){function e(i){return Es(i,t)}if(0<hl.length){Es(hl[0],t);for(var n=1;n<hl.length;n++){var r=hl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(nr!==null&&Es(nr,t),rr!==null&&Es(rr,t),ir!==null&&Es(ir,t),eo.forEach(e),to.forEach(e),n=0;n<Kn.length;n++)r=Kn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)F_(n),n.blockedOn===null&&Kn.shift()}var ki=bn.ReactCurrentBatchConfig,Ql=!0;function $E(t,e,n,r){var i=he,s=ki.transition;ki.transition=null;try{he=1,rd(t,e,n,r)}finally{he=i,ki.transition=s}}function GE(t,e,n,r){var i=he,s=ki.transition;ki.transition=null;try{he=4,rd(t,e,n,r)}finally{he=i,ki.transition=s}}function rd(t,e,n,r){if(Ql){var i=Kc(t,e,n,r);if(i===null)ec(t,e,r,Yl,n),bp(t,r);else if(WE(i,t,e,n,r))r.stopPropagation();else if(bp(t,r),e&4&&-1<VE.indexOf(t)){for(;i!==null;){var s=xo(i);if(s!==null&&D_(s),s=Kc(t,e,n,r),s===null&&ec(t,e,r,Yl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ec(t,e,r,null,n)}}var Yl=null;function Kc(t,e,n,r){if(Yl=null,t=Zh(r),t=Dr(t),t!==null)if(e=Yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=T_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yl=t,null}function U_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(DE()){case ed:return 1;case P_:return 4;case Kl:case ME:return 16;case A_:return 536870912;default:return 16}default:return 16}}var Zn=null,id=null,Al=null;function j_(){if(Al)return Al;var t,e=id,n=e.length,r,i="value"in Zn?Zn.value:Zn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var l=n-t;for(r=1;r<=l&&e[n-r]===i[s-r];r++);return Al=i.slice(t,1<r?1-r:void 0)}function xl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function dl(){return!0}function Up(){return!1}function At(t){function e(n,r,i,s,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?dl:Up,this.isPropagationStopped=Up,this}return ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),e}var qi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sd=At(qi),Ao=ke({},qi,{view:0,detail:0}),KE=At(Ao),$u,Gu,Ss,za=ke({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:od,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ss&&(Ss&&t.type==="mousemove"?($u=t.screenX-Ss.screenX,Gu=t.screenY-Ss.screenY):Gu=$u=0,Ss=t),$u)},movementY:function(t){return"movementY"in t?t.movementY:Gu}}),jp=At(za),qE=ke({},za,{dataTransfer:0}),QE=At(qE),YE=ke({},Ao,{relatedTarget:0}),Ku=At(YE),XE=ke({},qi,{animationName:0,elapsedTime:0,pseudoElement:0}),JE=At(XE),ZE=ke({},qi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),eS=At(ZE),tS=ke({},qi,{data:0}),zp=At(tS),nS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=iS[t])?!!e[t]:!1}function od(){return sS}var oS=ke({},Ao,{key:function(t){if(t.key){var e=nS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:od,charCode:function(t){return t.type==="keypress"?xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lS=At(oS),aS=ke({},za,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bp=At(aS),uS=ke({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:od}),cS=At(uS),hS=ke({},qi,{propertyName:0,elapsedTime:0,pseudoElement:0}),dS=At(hS),fS=ke({},za,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pS=At(fS),gS=[9,13,27,32],ld=Nn&&"CompositionEvent"in window,bs=null;Nn&&"documentMode"in document&&(bs=document.documentMode);var mS=Nn&&"TextEvent"in window&&!bs,z_=Nn&&(!ld||bs&&8<bs&&11>=bs),Vp=" ",Wp=!1;function B_(t,e){switch(t){case"keyup":return gS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function V_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hi=!1;function _S(t,e){switch(t){case"compositionend":return V_(e);case"keypress":return e.which!==32?null:(Wp=!0,Vp);case"textInput":return t=e.data,t===Vp&&Wp?null:t;default:return null}}function vS(t,e){if(hi)return t==="compositionend"||!ld&&B_(t,e)?(t=j_(),Al=id=Zn=null,hi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return z_&&e.locale!=="ko"?null:e.data;default:return null}}var yS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yS[t.type]:e==="textarea"}function W_(t,e,n,r){w_(r),e=Xl(e,"onChange"),0<e.length&&(n=new sd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Fs=null,ro=null;function wS(t){ev(t,0)}function Ba(t){var e=pi(t);if(f_(e))return t}function ES(t,e){if(t==="change")return e}var H_=!1;if(Nn){var qu;if(Nn){var Qu="oninput"in document;if(!Qu){var $p=document.createElement("div");$p.setAttribute("oninput","return;"),Qu=typeof $p.oninput=="function"}qu=Qu}else qu=!1;H_=qu&&(!document.documentMode||9<document.documentMode)}function Gp(){Fs&&(Fs.detachEvent("onpropertychange",$_),ro=Fs=null)}function $_(t){if(t.propertyName==="value"&&Ba(ro)){var e=[];W_(e,ro,t,Zh(t)),I_(wS,e)}}function SS(t,e,n){t==="focusin"?(Gp(),Fs=e,ro=n,Fs.attachEvent("onpropertychange",$_)):t==="focusout"&&Gp()}function CS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ba(ro)}function IS(t,e){if(t==="click")return Ba(e)}function TS(t,e){if(t==="input"||t==="change")return Ba(e)}function kS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tn=typeof Object.is=="function"?Object.is:kS;function io(t,e){if(tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Pc.call(e,i)||!tn(t[i],e[i]))return!1}return!0}function Kp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qp(t,e){var n=Kp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kp(n)}}function G_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?G_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function K_(){for(var t=window,e=Hl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Hl(t.document)}return e}function ad(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function RS(t){var e=K_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&G_(n.ownerDocument.documentElement,n)){if(r!==null&&ad(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=qp(n,s);var l=qp(n,r);i&&l&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var NS=Nn&&"documentMode"in document&&11>=document.documentMode,di=null,qc=null,Us=null,Qc=!1;function Qp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qc||di==null||di!==Hl(r)||(r=di,"selectionStart"in r&&ad(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Us&&io(Us,r)||(Us=r,r=Xl(qc,"onSelect"),0<r.length&&(e=new sd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=di)))}function fl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var fi={animationend:fl("Animation","AnimationEnd"),animationiteration:fl("Animation","AnimationIteration"),animationstart:fl("Animation","AnimationStart"),transitionend:fl("Transition","TransitionEnd")},Yu={},q_={};Nn&&(q_=document.createElement("div").style,"AnimationEvent"in window||(delete fi.animationend.animation,delete fi.animationiteration.animation,delete fi.animationstart.animation),"TransitionEvent"in window||delete fi.transitionend.transition);function Va(t){if(Yu[t])return Yu[t];if(!fi[t])return t;var e=fi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in q_)return Yu[t]=e[n];return t}var Q_=Va("animationend"),Y_=Va("animationiteration"),X_=Va("animationstart"),J_=Va("transitionend"),Z_=new Map,Yp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(t,e){Z_.set(t,e),Qr(e,[t])}for(var Xu=0;Xu<Yp.length;Xu++){var Ju=Yp[Xu],PS=Ju.toLowerCase(),AS=Ju[0].toUpperCase()+Ju.slice(1);Sr(PS,"on"+AS)}Sr(Q_,"onAnimationEnd");Sr(Y_,"onAnimationIteration");Sr(X_,"onAnimationStart");Sr("dblclick","onDoubleClick");Sr("focusin","onFocus");Sr("focusout","onBlur");Sr(J_,"onTransitionEnd");Mi("onMouseEnter",["mouseout","mouseover"]);Mi("onMouseLeave",["mouseout","mouseover"]);Mi("onPointerEnter",["pointerout","pointerover"]);Mi("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ds));function Xp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,PE(r,e,void 0,t),t.currentTarget=null}function ev(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,h=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Xp(i,a,h),s=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,h=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Xp(i,a,h),s=u}}}if(Gl)throw t=Hc,Gl=!1,Hc=null,t}function Ee(t,e){var n=e[eh];n===void 0&&(n=e[eh]=new Set);var r=t+"__bubble";n.has(r)||(tv(e,t,2,!1),n.add(r))}function Zu(t,e,n){var r=0;e&&(r|=4),tv(n,t,r,e)}var pl="_reactListening"+Math.random().toString(36).slice(2);function so(t){if(!t[pl]){t[pl]=!0,a_.forEach(function(n){n!=="selectionchange"&&(xS.has(n)||Zu(n,!1,t),Zu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pl]||(e[pl]=!0,Zu("selectionchange",!1,e))}}function tv(t,e,n,r){switch(U_(e)){case 1:var i=$E;break;case 4:i=GE;break;default:i=rd}n=i.bind(null,e,n,t),i=void 0,!Wc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ec(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Dr(a),l===null)return;if(u=l.tag,u===5||u===6){r=s=l;continue e}a=a.parentNode}}r=r.return}I_(function(){var h=s,g=Zh(n),p=[];e:{var m=Z_.get(t);if(m!==void 0){var P=sd,T=t;switch(t){case"keypress":if(xl(n)===0)break e;case"keydown":case"keyup":P=lS;break;case"focusin":T="focus",P=Ku;break;case"focusout":T="blur",P=Ku;break;case"beforeblur":case"afterblur":P=Ku;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=QE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=cS;break;case Q_:case Y_:case X_:P=JE;break;case J_:P=dS;break;case"scroll":P=KE;break;case"wheel":P=pS;break;case"copy":case"cut":case"paste":P=eS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=Bp}var O=(e&4)!==0,L=!O&&t==="scroll",C=O?m!==null?m+"Capture":null:m;O=[];for(var y=h,k;y!==null;){k=y;var M=k.stateNode;if(k.tag===5&&M!==null&&(k=M,C!==null&&(M=Zs(y,C),M!=null&&O.push(oo(y,M,k)))),L)break;y=y.return}0<O.length&&(m=new P(m,T,null,n,g),p.push({event:m,listeners:O}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",P=t==="mouseout"||t==="pointerout",m&&n!==Bc&&(T=n.relatedTarget||n.fromElement)&&(Dr(T)||T[Pn]))break e;if((P||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,P?(T=n.relatedTarget||n.toElement,P=h,T=T?Dr(T):null,T!==null&&(L=Yr(T),T!==L||T.tag!==5&&T.tag!==6)&&(T=null)):(P=null,T=h),P!==T)){if(O=jp,M="onMouseLeave",C="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(O=Bp,M="onPointerLeave",C="onPointerEnter",y="pointer"),L=P==null?m:pi(P),k=T==null?m:pi(T),m=new O(M,y+"leave",P,n,g),m.target=L,m.relatedTarget=k,M=null,Dr(g)===h&&(O=new O(C,y+"enter",T,n,g),O.target=k,O.relatedTarget=L,M=O),L=M,P&&T)t:{for(O=P,C=T,y=0,k=O;k;k=li(k))y++;for(k=0,M=C;M;M=li(M))k++;for(;0<y-k;)O=li(O),y--;for(;0<k-y;)C=li(C),k--;for(;y--;){if(O===C||C!==null&&O===C.alternate)break t;O=li(O),C=li(C)}O=null}else O=null;P!==null&&Jp(p,m,P,O,!1),T!==null&&L!==null&&Jp(p,L,T,O,!0)}}e:{if(m=h?pi(h):window,P=m.nodeName&&m.nodeName.toLowerCase(),P==="select"||P==="input"&&m.type==="file")var U=ES;else if(Hp(m))if(H_)U=TS;else{U=CS;var B=SS}else(P=m.nodeName)&&P.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(U=IS);if(U&&(U=U(t,h))){W_(p,U,n,g);break e}B&&B(t,m,h),t==="focusout"&&(B=m._wrapperState)&&B.controlled&&m.type==="number"&&bc(m,"number",m.value)}switch(B=h?pi(h):window,t){case"focusin":(Hp(B)||B.contentEditable==="true")&&(di=B,qc=h,Us=null);break;case"focusout":Us=qc=di=null;break;case"mousedown":Qc=!0;break;case"contextmenu":case"mouseup":case"dragend":Qc=!1,Qp(p,n,g);break;case"selectionchange":if(NS)break;case"keydown":case"keyup":Qp(p,n,g)}var w;if(ld)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else hi?B_(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(z_&&n.locale!=="ko"&&(hi||_!=="onCompositionStart"?_==="onCompositionEnd"&&hi&&(w=j_()):(Zn=g,id="value"in Zn?Zn.value:Zn.textContent,hi=!0)),B=Xl(h,_),0<B.length&&(_=new zp(_,t,null,n,g),p.push({event:_,listeners:B}),w?_.data=w:(w=V_(n),w!==null&&(_.data=w)))),(w=mS?_S(t,n):vS(t,n))&&(h=Xl(h,"onBeforeInput"),0<h.length&&(g=new zp("onBeforeInput","beforeinput",null,n,g),p.push({event:g,listeners:h}),g.data=w))}ev(p,e)})}function oo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Zs(t,n),s!=null&&r.unshift(oo(t,s,i)),s=Zs(t,e),s!=null&&r.push(oo(t,s,i))),t=t.return}return r}function li(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jp(t,e,n,r,i){for(var s=e._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,h=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&h!==null&&(a=h,i?(u=Zs(n,s),u!=null&&l.unshift(oo(n,u,a))):i||(u=Zs(n,s),u!=null&&l.push(oo(n,u,a)))),n=n.return}l.length!==0&&t.push({event:e,listeners:l})}var OS=/\r\n?/g,DS=/\u0000|\uFFFD/g;function Zp(t){return(typeof t=="string"?t:""+t).replace(OS,`
`).replace(DS,"")}function gl(t,e,n){if(e=Zp(e),Zp(t)!==e&&n)throw Error(b(425))}function Jl(){}var Yc=null,Xc=null;function Jc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zc=typeof setTimeout=="function"?setTimeout:void 0,MS=typeof clearTimeout=="function"?clearTimeout:void 0,eg=typeof Promise=="function"?Promise:void 0,LS=typeof queueMicrotask=="function"?queueMicrotask:typeof eg<"u"?function(t){return eg.resolve(null).then(t).catch(bS)}:Zc;function bS(t){setTimeout(function(){throw t})}function tc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),no(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);no(e)}function sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function tg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qi=Math.random().toString(36).slice(2),on="__reactFiber$"+Qi,lo="__reactProps$"+Qi,Pn="__reactContainer$"+Qi,eh="__reactEvents$"+Qi,FS="__reactListeners$"+Qi,US="__reactHandles$"+Qi;function Dr(t){var e=t[on];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pn]||n[on]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=tg(t);t!==null;){if(n=t[on])return n;t=tg(t)}return e}t=n,n=t.parentNode}return null}function xo(t){return t=t[on]||t[Pn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function pi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function Wa(t){return t[lo]||null}var th=[],gi=-1;function Cr(t){return{current:t}}function Se(t){0>gi||(t.current=th[gi],th[gi]=null,gi--)}function ye(t,e){gi++,th[gi]=t.current,t.current=e}var mr={},rt=Cr(mr),wt=Cr(!1),jr=mr;function Li(t,e){var n=t.type.contextTypes;if(!n)return mr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Et(t){return t=t.childContextTypes,t!=null}function Zl(){Se(wt),Se(rt)}function ng(t,e,n){if(rt.current!==mr)throw Error(b(168));ye(rt,e),ye(wt,n)}function nv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,SE(t)||"Unknown",i));return ke({},n,r)}function ea(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,jr=rt.current,ye(rt,t),ye(wt,wt.current),!0}function rg(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=nv(t,e,jr),r.__reactInternalMemoizedMergedChildContext=t,Se(wt),Se(rt),ye(rt,t)):Se(wt),ye(wt,n)}var vn=null,Ha=!1,nc=!1;function rv(t){vn===null?vn=[t]:vn.push(t)}function jS(t){Ha=!0,rv(t)}function Ir(){if(!nc&&vn!==null){nc=!0;var t=0,e=he;try{var n=vn;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}vn=null,Ha=!1}catch(i){throw vn!==null&&(vn=vn.slice(t+1)),N_(ed,Ir),i}finally{he=e,nc=!1}}return null}var mi=[],_i=0,ta=null,na=0,Dt=[],Mt=0,zr=null,yn=1,wn="";function Pr(t,e){mi[_i++]=na,mi[_i++]=ta,ta=t,na=e}function iv(t,e,n){Dt[Mt++]=yn,Dt[Mt++]=wn,Dt[Mt++]=zr,zr=t;var r=yn;t=wn;var i=32-Jt(r)-1;r&=~(1<<i),n+=1;var s=32-Jt(e)+i;if(30<s){var l=i-i%5;s=(r&(1<<l)-1).toString(32),r>>=l,i-=l,yn=1<<32-Jt(e)+i|n<<i|r,wn=s+t}else yn=1<<s|n<<i|r,wn=t}function ud(t){t.return!==null&&(Pr(t,1),iv(t,1,0))}function cd(t){for(;t===ta;)ta=mi[--_i],mi[_i]=null,na=mi[--_i],mi[_i]=null;for(;t===zr;)zr=Dt[--Mt],Dt[Mt]=null,wn=Dt[--Mt],Dt[Mt]=null,yn=Dt[--Mt],Dt[Mt]=null}var Rt=null,kt=null,Ce=!1,qt=null;function sv(t,e){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ig(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rt=t,kt=sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rt=t,kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zr!==null?{id:yn,overflow:wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rt=t,kt=null,!0):!1;default:return!1}}function nh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function rh(t){if(Ce){var e=kt;if(e){var n=e;if(!ig(t,e)){if(nh(t))throw Error(b(418));e=sr(n.nextSibling);var r=Rt;e&&ig(t,e)?sv(r,n):(t.flags=t.flags&-4097|2,Ce=!1,Rt=t)}}else{if(nh(t))throw Error(b(418));t.flags=t.flags&-4097|2,Ce=!1,Rt=t}}}function sg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rt=t}function ml(t){if(t!==Rt)return!1;if(!Ce)return sg(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Jc(t.type,t.memoizedProps)),e&&(e=kt)){if(nh(t))throw ov(),Error(b(418));for(;e;)sv(t,e),e=sr(e.nextSibling)}if(sg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){kt=sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}kt=null}}else kt=Rt?sr(t.stateNode.nextSibling):null;return!0}function ov(){for(var t=kt;t;)t=sr(t.nextSibling)}function bi(){kt=Rt=null,Ce=!1}function hd(t){qt===null?qt=[t]:qt.push(t)}var zS=bn.ReactCurrentBatchConfig;function Cs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(l){var a=i.refs;l===null?delete a[s]:a[s]=l},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function _l(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function og(t){var e=t._init;return e(t._payload)}function lv(t){function e(C,y){if(t){var k=C.deletions;k===null?(C.deletions=[y],C.flags|=16):k.push(y)}}function n(C,y){if(!t)return null;for(;y!==null;)e(C,y),y=y.sibling;return null}function r(C,y){for(C=new Map;y!==null;)y.key!==null?C.set(y.key,y):C.set(y.index,y),y=y.sibling;return C}function i(C,y){return C=ur(C,y),C.index=0,C.sibling=null,C}function s(C,y,k){return C.index=k,t?(k=C.alternate,k!==null?(k=k.index,k<y?(C.flags|=2,y):k):(C.flags|=2,y)):(C.flags|=1048576,y)}function l(C){return t&&C.alternate===null&&(C.flags|=2),C}function a(C,y,k,M){return y===null||y.tag!==6?(y=uc(k,C.mode,M),y.return=C,y):(y=i(y,k),y.return=C,y)}function u(C,y,k,M){var U=k.type;return U===ci?g(C,y,k.props.children,M,k.key):y!==null&&(y.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===$n&&og(U)===y.type)?(M=i(y,k.props),M.ref=Cs(C,y,k),M.return=C,M):(M=Ul(k.type,k.key,k.props,null,C.mode,M),M.ref=Cs(C,y,k),M.return=C,M)}function h(C,y,k,M){return y===null||y.tag!==4||y.stateNode.containerInfo!==k.containerInfo||y.stateNode.implementation!==k.implementation?(y=cc(k,C.mode,M),y.return=C,y):(y=i(y,k.children||[]),y.return=C,y)}function g(C,y,k,M,U){return y===null||y.tag!==7?(y=Ur(k,C.mode,M,U),y.return=C,y):(y=i(y,k),y.return=C,y)}function p(C,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return y=uc(""+y,C.mode,k),y.return=C,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ol:return k=Ul(y.type,y.key,y.props,null,C.mode,k),k.ref=Cs(C,null,y),k.return=C,k;case ui:return y=cc(y,C.mode,k),y.return=C,y;case $n:var M=y._init;return p(C,M(y._payload),k)}if(xs(y)||vs(y))return y=Ur(y,C.mode,k,null),y.return=C,y;_l(C,y)}return null}function m(C,y,k,M){var U=y!==null?y.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return U!==null?null:a(C,y,""+k,M);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ol:return k.key===U?u(C,y,k,M):null;case ui:return k.key===U?h(C,y,k,M):null;case $n:return U=k._init,m(C,y,U(k._payload),M)}if(xs(k)||vs(k))return U!==null?null:g(C,y,k,M,null);_l(C,k)}return null}function P(C,y,k,M,U){if(typeof M=="string"&&M!==""||typeof M=="number")return C=C.get(k)||null,a(y,C,""+M,U);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ol:return C=C.get(M.key===null?k:M.key)||null,u(y,C,M,U);case ui:return C=C.get(M.key===null?k:M.key)||null,h(y,C,M,U);case $n:var B=M._init;return P(C,y,k,B(M._payload),U)}if(xs(M)||vs(M))return C=C.get(k)||null,g(y,C,M,U,null);_l(y,M)}return null}function T(C,y,k,M){for(var U=null,B=null,w=y,_=y=0,v=null;w!==null&&_<k.length;_++){w.index>_?(v=w,w=null):v=w.sibling;var S=m(C,w,k[_],M);if(S===null){w===null&&(w=v);break}t&&w&&S.alternate===null&&e(C,w),y=s(S,y,_),B===null?U=S:B.sibling=S,B=S,w=v}if(_===k.length)return n(C,w),Ce&&Pr(C,_),U;if(w===null){for(;_<k.length;_++)w=p(C,k[_],M),w!==null&&(y=s(w,y,_),B===null?U=w:B.sibling=w,B=w);return Ce&&Pr(C,_),U}for(w=r(C,w);_<k.length;_++)v=P(w,C,_,k[_],M),v!==null&&(t&&v.alternate!==null&&w.delete(v.key===null?_:v.key),y=s(v,y,_),B===null?U=v:B.sibling=v,B=v);return t&&w.forEach(function(R){return e(C,R)}),Ce&&Pr(C,_),U}function O(C,y,k,M){var U=vs(k);if(typeof U!="function")throw Error(b(150));if(k=U.call(k),k==null)throw Error(b(151));for(var B=U=null,w=y,_=y=0,v=null,S=k.next();w!==null&&!S.done;_++,S=k.next()){w.index>_?(v=w,w=null):v=w.sibling;var R=m(C,w,S.value,M);if(R===null){w===null&&(w=v);break}t&&w&&R.alternate===null&&e(C,w),y=s(R,y,_),B===null?U=R:B.sibling=R,B=R,w=v}if(S.done)return n(C,w),Ce&&Pr(C,_),U;if(w===null){for(;!S.done;_++,S=k.next())S=p(C,S.value,M),S!==null&&(y=s(S,y,_),B===null?U=S:B.sibling=S,B=S);return Ce&&Pr(C,_),U}for(w=r(C,w);!S.done;_++,S=k.next())S=P(w,C,_,S.value,M),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?_:S.key),y=s(S,y,_),B===null?U=S:B.sibling=S,B=S);return t&&w.forEach(function(A){return e(C,A)}),Ce&&Pr(C,_),U}function L(C,y,k,M){if(typeof k=="object"&&k!==null&&k.type===ci&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case ol:e:{for(var U=k.key,B=y;B!==null;){if(B.key===U){if(U=k.type,U===ci){if(B.tag===7){n(C,B.sibling),y=i(B,k.props.children),y.return=C,C=y;break e}}else if(B.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===$n&&og(U)===B.type){n(C,B.sibling),y=i(B,k.props),y.ref=Cs(C,B,k),y.return=C,C=y;break e}n(C,B);break}else e(C,B);B=B.sibling}k.type===ci?(y=Ur(k.props.children,C.mode,M,k.key),y.return=C,C=y):(M=Ul(k.type,k.key,k.props,null,C.mode,M),M.ref=Cs(C,y,k),M.return=C,C=M)}return l(C);case ui:e:{for(B=k.key;y!==null;){if(y.key===B)if(y.tag===4&&y.stateNode.containerInfo===k.containerInfo&&y.stateNode.implementation===k.implementation){n(C,y.sibling),y=i(y,k.children||[]),y.return=C,C=y;break e}else{n(C,y);break}else e(C,y);y=y.sibling}y=cc(k,C.mode,M),y.return=C,C=y}return l(C);case $n:return B=k._init,L(C,y,B(k._payload),M)}if(xs(k))return T(C,y,k,M);if(vs(k))return O(C,y,k,M);_l(C,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,y!==null&&y.tag===6?(n(C,y.sibling),y=i(y,k),y.return=C,C=y):(n(C,y),y=uc(k,C.mode,M),y.return=C,C=y),l(C)):n(C,y)}return L}var Fi=lv(!0),av=lv(!1),ra=Cr(null),ia=null,vi=null,dd=null;function fd(){dd=vi=ia=null}function pd(t){var e=ra.current;Se(ra),t._currentValue=e}function ih(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ri(t,e){ia=t,dd=vi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vt=!0),t.firstContext=null)}function Ut(t){var e=t._currentValue;if(dd!==t)if(t={context:t,memoizedValue:e,next:null},vi===null){if(ia===null)throw Error(b(308));vi=t,ia.dependencies={lanes:0,firstContext:t}}else vi=vi.next=t;return e}var Mr=null;function gd(t){Mr===null?Mr=[t]:Mr.push(t)}function uv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,gd(e)):(n.next=i.next,i.next=n),e.interleaved=n,An(t,r)}function An(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gn=!1;function md(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function kn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function or(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,An(t,n)}return i=r.interleaved,i===null?(e.next=e,gd(r)):(e.next=i.next,i.next=e),r.interleaved=e,An(t,n)}function Ol(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,td(t,n)}}function lg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function sa(t,e,n,r){var i=t.updateQueue;Gn=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,h=u.next;u.next=null,l===null?s=h:l.next=h,l=u;var g=t.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==l&&(a===null?g.firstBaseUpdate=h:a.next=h,g.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;l=0,g=h=u=null,a=s;do{var m=a.lane,P=a.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:P,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,O=a;switch(m=e,P=n,O.tag){case 1:if(T=O.payload,typeof T=="function"){p=T.call(P,p,m);break e}p=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=O.payload,m=typeof T=="function"?T.call(P,p,m):T,m==null)break e;p=ke({},p,m);break e;case 2:Gn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else P={eventTime:P,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(h=g=P,u=p):g=g.next=P,l|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(g===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=g,e=i.shared.interleaved,e!==null){i=e;do l|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Vr|=l,t.lanes=l,t.memoizedState=p}}function ag(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var Oo={},an=Cr(Oo),ao=Cr(Oo),uo=Cr(Oo);function Lr(t){if(t===Oo)throw Error(b(174));return t}function _d(t,e){switch(ye(uo,e),ye(ao,t),ye(an,Oo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Uc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Uc(e,t)}Se(an),ye(an,e)}function Ui(){Se(an),Se(ao),Se(uo)}function hv(t){Lr(uo.current);var e=Lr(an.current),n=Uc(e,t.type);e!==n&&(ye(ao,t),ye(an,n))}function vd(t){ao.current===t&&(Se(an),Se(ao))}var Ie=Cr(0);function oa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var rc=[];function yd(){for(var t=0;t<rc.length;t++)rc[t]._workInProgressVersionPrimary=null;rc.length=0}var Dl=bn.ReactCurrentDispatcher,ic=bn.ReactCurrentBatchConfig,Br=0,Te=null,be=null,Ve=null,la=!1,js=!1,co=0,BS=0;function et(){throw Error(b(321))}function wd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!tn(t[n],e[n]))return!1;return!0}function Ed(t,e,n,r,i,s){if(Br=s,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Dl.current=t===null||t.memoizedState===null?$S:GS,t=n(r,i),js){s=0;do{if(js=!1,co=0,25<=s)throw Error(b(301));s+=1,Ve=be=null,e.updateQueue=null,Dl.current=KS,t=n(r,i)}while(js)}if(Dl.current=aa,e=be!==null&&be.next!==null,Br=0,Ve=be=Te=null,la=!1,e)throw Error(b(300));return t}function Sd(){var t=co!==0;return co=0,t}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Te.memoizedState=Ve=t:Ve=Ve.next=t,Ve}function jt(){if(be===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=be.next;var e=Ve===null?Te.memoizedState:Ve.next;if(e!==null)Ve=e,be=t;else{if(t===null)throw Error(b(310));be=t,t={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Ve===null?Te.memoizedState=Ve=t:Ve=Ve.next=t}return Ve}function ho(t,e){return typeof e=="function"?e(t):e}function sc(t){var e=jt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=l=null,u=null,h=s;do{var g=h.lane;if((Br&g)===g)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:g,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(a=u=p,l=r):u=u.next=p,Te.lanes|=g,Vr|=g}h=h.next}while(h!==null&&h!==s);u===null?l=r:u.next=a,tn(r,e.memoizedState)||(vt=!0),e.memoizedState=r,e.baseState=l,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Te.lanes|=s,Vr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function oc(t){var e=jt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do s=t(s,l.action),l=l.next;while(l!==i);tn(s,e.memoizedState)||(vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function dv(){}function fv(t,e){var n=Te,r=jt(),i=e(),s=!tn(r.memoizedState,i);if(s&&(r.memoizedState=i,vt=!0),r=r.queue,Cd(mv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,fo(9,gv.bind(null,n,r,i,e),void 0,null),He===null)throw Error(b(349));Br&30||pv(n,e,i)}return i}function pv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function gv(t,e,n,r){e.value=n,e.getSnapshot=r,_v(e)&&vv(t)}function mv(t,e,n){return n(function(){_v(e)&&vv(t)})}function _v(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!tn(t,n)}catch{return!0}}function vv(t){var e=An(t,1);e!==null&&Zt(e,t,1,-1)}function ug(t){var e=sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:t},e.queue=t,t=t.dispatch=HS.bind(null,Te,t),[e.memoizedState,t]}function fo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function yv(){return jt().memoizedState}function Ml(t,e,n,r){var i=sn();Te.flags|=t,i.memoizedState=fo(1|e,n,void 0,r===void 0?null:r)}function $a(t,e,n,r){var i=jt();r=r===void 0?null:r;var s=void 0;if(be!==null){var l=be.memoizedState;if(s=l.destroy,r!==null&&wd(r,l.deps)){i.memoizedState=fo(e,n,s,r);return}}Te.flags|=t,i.memoizedState=fo(1|e,n,s,r)}function cg(t,e){return Ml(8390656,8,t,e)}function Cd(t,e){return $a(2048,8,t,e)}function wv(t,e){return $a(4,2,t,e)}function Ev(t,e){return $a(4,4,t,e)}function Sv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Cv(t,e,n){return n=n!=null?n.concat([t]):null,$a(4,4,Sv.bind(null,e,t),n)}function Id(){}function Iv(t,e){var n=jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Tv(t,e){var n=jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function kv(t,e,n){return Br&21?(tn(n,e)||(n=x_(),Te.lanes|=n,Vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vt=!0),t.memoizedState=n)}function VS(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=ic.transition;ic.transition={};try{t(!1),e()}finally{he=n,ic.transition=r}}function Rv(){return jt().memoizedState}function WS(t,e,n){var r=ar(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Nv(t))Pv(e,n);else if(n=uv(t,e,n,r),n!==null){var i=at();Zt(n,t,r,i),Av(n,e,r)}}function HS(t,e,n){var r=ar(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nv(t))Pv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var l=e.lastRenderedState,a=s(l,n);if(i.hasEagerState=!0,i.eagerState=a,tn(a,l)){var u=e.interleaved;u===null?(i.next=i,gd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=uv(t,e,i,r),n!==null&&(i=at(),Zt(n,t,r,i),Av(n,e,r))}}function Nv(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function Pv(t,e){js=la=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Av(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,td(t,n)}}var aa={readContext:Ut,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},$S={readContext:Ut,useCallback:function(t,e){return sn().memoizedState=[t,e===void 0?null:e],t},useContext:Ut,useEffect:cg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ml(4194308,4,Sv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ml(4,2,t,e)},useMemo:function(t,e){var n=sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=WS.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=sn();return t={current:t},e.memoizedState=t},useState:ug,useDebugValue:Id,useDeferredValue:function(t){return sn().memoizedState=t},useTransition:function(){var t=ug(!1),e=t[0];return t=VS.bind(null,t[1]),sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,i=sn();if(Ce){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),He===null)throw Error(b(349));Br&30||pv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,cg(mv.bind(null,r,s,t),[t]),r.flags|=2048,fo(9,gv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=sn(),e=He.identifierPrefix;if(Ce){var n=wn,r=yn;n=(r&~(1<<32-Jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=co++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=BS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},GS={readContext:Ut,useCallback:Iv,useContext:Ut,useEffect:Cd,useImperativeHandle:Cv,useInsertionEffect:wv,useLayoutEffect:Ev,useMemo:Tv,useReducer:sc,useRef:yv,useState:function(){return sc(ho)},useDebugValue:Id,useDeferredValue:function(t){var e=jt();return kv(e,be.memoizedState,t)},useTransition:function(){var t=sc(ho)[0],e=jt().memoizedState;return[t,e]},useMutableSource:dv,useSyncExternalStore:fv,useId:Rv,unstable_isNewReconciler:!1},KS={readContext:Ut,useCallback:Iv,useContext:Ut,useEffect:Cd,useImperativeHandle:Cv,useInsertionEffect:wv,useLayoutEffect:Ev,useMemo:Tv,useReducer:oc,useRef:yv,useState:function(){return oc(ho)},useDebugValue:Id,useDeferredValue:function(t){var e=jt();return be===null?e.memoizedState=t:kv(e,be.memoizedState,t)},useTransition:function(){var t=oc(ho)[0],e=jt().memoizedState;return[t,e]},useMutableSource:dv,useSyncExternalStore:fv,useId:Rv,unstable_isNewReconciler:!1};function Gt(t,e){if(t&&t.defaultProps){e=ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function sh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ga={isMounted:function(t){return(t=t._reactInternals)?Yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=at(),i=ar(t),s=kn(r,i);s.payload=e,n!=null&&(s.callback=n),e=or(t,s,i),e!==null&&(Zt(e,t,i,r),Ol(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=at(),i=ar(t),s=kn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=or(t,s,i),e!==null&&(Zt(e,t,i,r),Ol(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=at(),r=ar(t),i=kn(n,r);i.tag=2,e!=null&&(i.callback=e),e=or(t,i,r),e!==null&&(Zt(e,t,r,n),Ol(e,t,r))}};function hg(t,e,n,r,i,s,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,l):e.prototype&&e.prototype.isPureReactComponent?!io(n,r)||!io(i,s):!0}function xv(t,e,n){var r=!1,i=mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ut(s):(i=Et(e)?jr:rt.current,r=e.contextTypes,s=(r=r!=null)?Li(t,i):mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ga,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function dg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ga.enqueueReplaceState(e,e.state,null)}function oh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},md(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ut(s):(s=Et(e)?jr:rt.current,i.context=Li(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(sh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ga.enqueueReplaceState(i,i.state,null),sa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ji(t,e){try{var n="",r=e;do n+=EE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function lc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function lh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var qS=typeof WeakMap=="function"?WeakMap:Map;function Ov(t,e,n){n=kn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ca||(ca=!0,_h=r),lh(t,e)},n}function Dv(t,e,n){n=kn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){lh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){lh(t,e),typeof r!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),n}function fg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new qS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=aC.bind(null,t,e,n),e.then(t,t))}function pg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function gg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=kn(-1,1),e.tag=2,or(n,e,1))),n.lanes|=1),t)}var QS=bn.ReactCurrentOwner,vt=!1;function ot(t,e,n,r){e.child=t===null?av(e,null,n,r):Fi(e,t.child,n,r)}function mg(t,e,n,r,i){n=n.render;var s=e.ref;return Ri(e,i),r=Ed(t,e,n,r,s,i),n=Sd(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xn(t,e,i)):(Ce&&n&&ud(e),e.flags|=1,ot(t,e,r,i),e.child)}function _g(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Od(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Mv(t,e,s,r,i)):(t=Ul(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:io,n(l,r)&&t.ref===e.ref)return xn(t,e,i)}return e.flags|=1,t=ur(s,r),t.ref=e.ref,t.return=e,e.child=t}function Mv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(io(s,r)&&t.ref===e.ref)if(vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(vt=!0);else return e.lanes=t.lanes,xn(t,e,i)}return ah(t,e,n,r,i)}function Lv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(wi,It),It|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(wi,It),It|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ye(wi,It),It|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ye(wi,It),It|=r;return ot(t,e,i,n),e.child}function bv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ah(t,e,n,r,i){var s=Et(n)?jr:rt.current;return s=Li(e,s),Ri(e,i),n=Ed(t,e,n,r,s,i),r=Sd(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xn(t,e,i)):(Ce&&r&&ud(e),e.flags|=1,ot(t,e,n,i),e.child)}function vg(t,e,n,r,i){if(Et(n)){var s=!0;ea(e)}else s=!1;if(Ri(e,i),e.stateNode===null)Ll(t,e),xv(e,n,r),oh(e,n,r,i),r=!0;else if(t===null){var l=e.stateNode,a=e.memoizedProps;l.props=a;var u=l.context,h=n.contextType;typeof h=="object"&&h!==null?h=Ut(h):(h=Et(n)?jr:rt.current,h=Li(e,h));var g=n.getDerivedStateFromProps,p=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==h)&&dg(e,l,r,h),Gn=!1;var m=e.memoizedState;l.state=m,sa(e,r,l,i),u=e.memoizedState,a!==r||m!==u||wt.current||Gn?(typeof g=="function"&&(sh(e,n,g,r),u=e.memoizedState),(a=Gn||hg(e,n,a,r,m,u,h))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),l.props=r,l.state=u,l.context=h,r=a):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{l=e.stateNode,cv(t,e),a=e.memoizedProps,h=e.type===e.elementType?a:Gt(e.type,a),l.props=h,p=e.pendingProps,m=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ut(u):(u=Et(n)?jr:rt.current,u=Li(e,u));var P=n.getDerivedStateFromProps;(g=typeof P=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==p||m!==u)&&dg(e,l,r,u),Gn=!1,m=e.memoizedState,l.state=m,sa(e,r,l,i);var T=e.memoizedState;a!==p||m!==T||wt.current||Gn?(typeof P=="function"&&(sh(e,n,P,r),T=e.memoizedState),(h=Gn||hg(e,n,h,r,m,T,u)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,T,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,T,u)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),l.props=r,l.state=T,l.context=u,r=h):(typeof l.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return uh(t,e,n,r,s,i)}function uh(t,e,n,r,i,s){bv(t,e);var l=(e.flags&128)!==0;if(!r&&!l)return i&&rg(e,n,!1),xn(t,e,s);r=e.stateNode,QS.current=e;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&l?(e.child=Fi(e,t.child,null,s),e.child=Fi(e,null,a,s)):ot(t,e,a,s),e.memoizedState=r.state,i&&rg(e,n,!0),e.child}function Fv(t){var e=t.stateNode;e.pendingContext?ng(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ng(t,e.context,!1),_d(t,e.containerInfo)}function yg(t,e,n,r,i){return bi(),hd(i),e.flags|=256,ot(t,e,n,r),e.child}var ch={dehydrated:null,treeContext:null,retryLane:0};function hh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Uv(t,e,n){var r=e.pendingProps,i=Ie.current,s=!1,l=(e.flags&128)!==0,a;if((a=l)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(Ie,i&1),t===null)return rh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=r.children,t=r.fallback,s?(r=e.mode,s=e.child,l={mode:"hidden",children:l},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=Qa(l,r,0,null),t=Ur(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=hh(n),e.memoizedState=ch,t):Td(e,l));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return YS(t,e,l,r,a,i,n);if(s){s=r.fallback,l=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ur(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ur(a,s):(s=Ur(s,l,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,l=t.child.memoizedState,l=l===null?hh(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=t.childLanes&~n,e.memoizedState=ch,r}return s=t.child,t=s.sibling,r=ur(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Td(t,e){return e=Qa({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vl(t,e,n,r){return r!==null&&hd(r),Fi(e,t.child,null,n),t=Td(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function YS(t,e,n,r,i,s,l){if(n)return e.flags&256?(e.flags&=-257,r=lc(Error(b(422))),vl(t,e,l,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Qa({mode:"visible",children:r.children},i,0,null),s=Ur(s,i,l,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Fi(e,t.child,null,l),e.child.memoizedState=hh(l),e.memoizedState=ch,s);if(!(e.mode&1))return vl(t,e,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(b(419)),r=lc(s,r,void 0),vl(t,e,l,r)}if(a=(l&t.childLanes)!==0,vt||a){if(r=He,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,An(t,i),Zt(r,t,i,-1))}return xd(),r=lc(Error(b(421))),vl(t,e,l,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=uC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,kt=sr(i.nextSibling),Rt=e,Ce=!0,qt=null,t!==null&&(Dt[Mt++]=yn,Dt[Mt++]=wn,Dt[Mt++]=zr,yn=t.id,wn=t.overflow,zr=e),e=Td(e,r.children),e.flags|=4096,e)}function wg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ih(t.return,e,n)}function ac(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function jv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ot(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wg(t,n,e);else if(t.tag===19)wg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&oa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ac(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&oa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ac(e,!0,n,null,s);break;case"together":ac(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function XS(t,e,n){switch(e.tag){case 3:Fv(e),bi();break;case 5:hv(e);break;case 1:Et(e.type)&&ea(e);break;case 4:_d(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(ra,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?Uv(t,e,n):(ye(Ie,Ie.current&1),t=xn(t,e,n),t!==null?t.sibling:null);ye(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return jv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,Lv(t,e,n)}return xn(t,e,n)}var zv,dh,Bv,Vv;zv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dh=function(){};Bv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Lr(an.current);var s=null;switch(n){case"input":i=Mc(t,i),r=Mc(t,r),s=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),s=[];break;case"textarea":i=Fc(t,i),r=Fc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Jl)}jc(n,r);var l;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var a=i[h];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Xs.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(a=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==a&&(u!=null||a!=null))if(h==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Xs.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&Ee("scroll",t),s||a===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};Vv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Is(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function JS(t,e,n){var r=e.pendingProps;switch(cd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(e),null;case 1:return Et(e.type)&&Zl(),tt(e),null;case 3:return r=e.stateNode,Ui(),Se(wt),Se(rt),yd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ml(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qt!==null&&(wh(qt),qt=null))),dh(t,e),tt(e),null;case 5:vd(e);var i=Lr(uo.current);if(n=e.type,t!==null&&e.stateNode!=null)Bv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return tt(e),null}if(t=Lr(an.current),ml(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[on]=e,r[lo]=s,t=(e.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(i=0;i<Ds.length;i++)Ee(Ds[i],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":Pp(r,s),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ee("invalid",r);break;case"textarea":xp(r,s),Ee("invalid",r)}jc(n,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&gl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&gl(r.textContent,a,t),i=["children",""+a]):Xs.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Ee("scroll",r)}switch(n){case"input":ll(r),Ap(r,s,!0);break;case"textarea":ll(r),Op(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Jl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=m_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=l.createElement(n,{is:r.is}):(t=l.createElement(n),n==="select"&&(l=t,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):t=l.createElementNS(t,n),t[on]=e,t[lo]=r,zv(t,e,!1,!1),e.stateNode=t;e:{switch(l=zc(n,r),n){case"dialog":Ee("cancel",t),Ee("close",t),i=r;break;case"iframe":case"object":case"embed":Ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ds.length;i++)Ee(Ds[i],t);i=r;break;case"source":Ee("error",t),i=r;break;case"img":case"image":case"link":Ee("error",t),Ee("load",t),i=r;break;case"details":Ee("toggle",t),i=r;break;case"input":Pp(t,r),i=Mc(t,r),Ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),Ee("invalid",t);break;case"textarea":xp(t,r),i=Fc(t,r),Ee("invalid",t);break;default:i=r}jc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?y_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&__(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Js(t,u):typeof u=="number"&&Js(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xs.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ee("scroll",t):u!=null&&Qh(t,s,u,l))}switch(n){case"input":ll(t),Ap(t,r,!1);break;case"textarea":ll(t),Op(t);break;case"option":r.value!=null&&t.setAttribute("value",""+gr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ci(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ci(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Jl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tt(e),null;case 6:if(t&&e.stateNode!=null)Vv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=Lr(uo.current),Lr(an.current),ml(e)){if(r=e.stateNode,n=e.memoizedProps,r[on]=e,(s=r.nodeValue!==n)&&(t=Rt,t!==null))switch(t.tag){case 3:gl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&gl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[on]=e,e.stateNode=r}return tt(e),null;case 13:if(Se(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&kt!==null&&e.mode&1&&!(e.flags&128))ov(),bi(),e.flags|=98560,s=!1;else if(s=ml(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[on]=e}else bi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tt(e),s=!1}else qt!==null&&(wh(qt),qt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?je===0&&(je=3):xd())),e.updateQueue!==null&&(e.flags|=4),tt(e),null);case 4:return Ui(),dh(t,e),t===null&&so(e.stateNode.containerInfo),tt(e),null;case 10:return pd(e.type._context),tt(e),null;case 17:return Et(e.type)&&Zl(),tt(e),null;case 19:if(Se(Ie),s=e.memoizedState,s===null)return tt(e),null;if(r=(e.flags&128)!==0,l=s.rendering,l===null)if(r)Is(s,!1);else{if(je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=oa(t),l!==null){for(e.flags|=128,Is(s,!1),r=l.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,t=l.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(Ie,Ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&De()>zi&&(e.flags|=128,r=!0,Is(s,!1),e.lanes=4194304)}else{if(!r)if(t=oa(l),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Is(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!Ce)return tt(e),null}else 2*De()-s.renderingStartTime>zi&&n!==1073741824&&(e.flags|=128,r=!0,Is(s,!1),e.lanes=4194304);s.isBackwards?(l.sibling=e.child,e.child=l):(n=s.last,n!==null?n.sibling=l:e.child=l,s.last=l)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=De(),e.sibling=null,n=Ie.current,ye(Ie,r?n&1|2:n&1),e):(tt(e),null);case 22:case 23:return Ad(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?It&1073741824&&(tt(e),e.subtreeFlags&6&&(e.flags|=8192)):tt(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function ZS(t,e){switch(cd(e),e.tag){case 1:return Et(e.type)&&Zl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ui(),Se(wt),Se(rt),yd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vd(e),null;case 13:if(Se(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));bi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Se(Ie),null;case 4:return Ui(),null;case 10:return pd(e.type._context),null;case 22:case 23:return Ad(),null;case 24:return null;default:return null}}var yl=!1,nt=!1,eC=typeof WeakSet=="function"?WeakSet:Set,H=null;function yi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function fh(t,e,n){try{n()}catch(r){Re(t,e,r)}}var Eg=!1;function tC(t,e){if(Yc=Ql,t=K_(),ad(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,h=0,g=0,p=t,m=null;t:for(;;){for(var P;p!==n||i!==0&&p.nodeType!==3||(a=l+i),p!==s||r!==0&&p.nodeType!==3||(u=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(P=p.firstChild)!==null;)m=p,p=P;for(;;){if(p===t)break t;if(m===n&&++h===i&&(a=l),m===s&&++g===r&&(u=l),(P=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=P}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xc={focusedElem:t,selectionRange:n},Ql=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var O=T.memoizedProps,L=T.memoizedState,C=e.stateNode,y=C.getSnapshotBeforeUpdate(e.elementType===e.type?O:Gt(e.type,O),L);C.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(M){Re(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return T=Eg,Eg=!1,T}function zs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&fh(e,n,s)}i=i.next}while(i!==r)}}function Ka(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ph(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Wv(t){var e=t.alternate;e!==null&&(t.alternate=null,Wv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[on],delete e[lo],delete e[eh],delete e[FS],delete e[US])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Hv(t){return t.tag===5||t.tag===3||t.tag===4}function Sg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Jl));else if(r!==4&&(t=t.child,t!==null))for(gh(t,e,n),t=t.sibling;t!==null;)gh(t,e,n),t=t.sibling}function mh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(mh(t,e,n),t=t.sibling;t!==null;)mh(t,e,n),t=t.sibling}var Ke=null,Kt=!1;function Wn(t,e,n){for(n=n.child;n!==null;)$v(t,e,n),n=n.sibling}function $v(t,e,n){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(ja,n)}catch{}switch(n.tag){case 5:nt||yi(n,e);case 6:var r=Ke,i=Kt;Ke=null,Wn(t,e,n),Ke=r,Kt=i,Ke!==null&&(Kt?(t=Ke,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(Kt?(t=Ke,n=n.stateNode,t.nodeType===8?tc(t.parentNode,n):t.nodeType===1&&tc(t,n),no(t)):tc(Ke,n.stateNode));break;case 4:r=Ke,i=Kt,Ke=n.stateNode.containerInfo,Kt=!0,Wn(t,e,n),Ke=r,Kt=i;break;case 0:case 11:case 14:case 15:if(!nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&fh(n,e,l),i=i.next}while(i!==r)}Wn(t,e,n);break;case 1:if(!nt&&(yi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Re(n,e,a)}Wn(t,e,n);break;case 21:Wn(t,e,n);break;case 22:n.mode&1?(nt=(r=nt)||n.memoizedState!==null,Wn(t,e,n),nt=r):Wn(t,e,n);break;default:Wn(t,e,n)}}function Cg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new eC),e.forEach(function(r){var i=cC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function $t(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,l=e,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ke=a.stateNode,Kt=!1;break e;case 3:Ke=a.stateNode.containerInfo,Kt=!0;break e;case 4:Ke=a.stateNode.containerInfo,Kt=!0;break e}a=a.return}if(Ke===null)throw Error(b(160));$v(s,l,i),Ke=null,Kt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Re(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Gv(e,t),e=e.sibling}function Gv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($t(e,t),rn(t),r&4){try{zs(3,t,t.return),Ka(3,t)}catch(O){Re(t,t.return,O)}try{zs(5,t,t.return)}catch(O){Re(t,t.return,O)}}break;case 1:$t(e,t),rn(t),r&512&&n!==null&&yi(n,n.return);break;case 5:if($t(e,t),rn(t),r&512&&n!==null&&yi(n,n.return),t.flags&32){var i=t.stateNode;try{Js(i,"")}catch(O){Re(t,t.return,O)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,l=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&p_(i,s),zc(a,l);var h=zc(a,s);for(l=0;l<u.length;l+=2){var g=u[l],p=u[l+1];g==="style"?y_(i,p):g==="dangerouslySetInnerHTML"?__(i,p):g==="children"?Js(i,p):Qh(i,g,p,h)}switch(a){case"input":Lc(i,s);break;case"textarea":g_(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var P=s.value;P!=null?Ci(i,!!s.multiple,P,!1):m!==!!s.multiple&&(s.defaultValue!=null?Ci(i,!!s.multiple,s.defaultValue,!0):Ci(i,!!s.multiple,s.multiple?[]:"",!1))}i[lo]=s}catch(O){Re(t,t.return,O)}}break;case 6:if($t(e,t),rn(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(O){Re(t,t.return,O)}}break;case 3:if($t(e,t),rn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{no(e.containerInfo)}catch(O){Re(t,t.return,O)}break;case 4:$t(e,t),rn(t);break;case 13:$t(e,t),rn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Nd=De())),r&4&&Cg(t);break;case 22:if(g=n!==null&&n.memoizedState!==null,t.mode&1?(nt=(h=nt)||g,$t(e,t),nt=h):$t(e,t),rn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!g&&t.mode&1)for(H=t,g=t.child;g!==null;){for(p=H=g;H!==null;){switch(m=H,P=m.child,m.tag){case 0:case 11:case 14:case 15:zs(4,m,m.return);break;case 1:yi(m,m.return);var T=m.stateNode;if(typeof T.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(O){Re(r,n,O)}}break;case 5:yi(m,m.return);break;case 22:if(m.memoizedState!==null){Tg(p);continue}}P!==null?(P.return=m,H=P):Tg(p)}g=g.sibling}e:for(g=null,p=t;;){if(p.tag===5){if(g===null){g=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,u=p.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=v_("display",l))}catch(O){Re(t,t.return,O)}}}else if(p.tag===6){if(g===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(O){Re(t,t.return,O)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;g===p&&(g=null),p=p.return}g===p&&(g=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:$t(e,t),rn(t),r&4&&Cg(t);break;case 21:break;default:$t(e,t),rn(t)}}function rn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Hv(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Js(i,""),r.flags&=-33);var s=Sg(t);mh(t,s,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Sg(t);gh(t,a,l);break;default:throw Error(b(161))}}catch(u){Re(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function nC(t,e,n){H=t,Kv(t)}function Kv(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||yl;if(!l){var a=i.alternate,u=a!==null&&a.memoizedState!==null||nt;a=yl;var h=nt;if(yl=l,(nt=u)&&!h)for(H=i;H!==null;)l=H,u=l.child,l.tag===22&&l.memoizedState!==null?kg(i):u!==null?(u.return=l,H=u):kg(i);for(;s!==null;)H=s,Kv(s),s=s.sibling;H=i,yl=a,nt=h}Ig(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Ig(t)}}function Ig(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nt||Ka(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!nt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Gt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ag(e,s,r);break;case 3:var l=e.updateQueue;if(l!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ag(e,l,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var g=h.memoizedState;if(g!==null){var p=g.dehydrated;p!==null&&no(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}nt||e.flags&512&&ph(e)}catch(m){Re(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Tg(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function kg(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ka(4,e)}catch(u){Re(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Re(e,i,u)}}var s=e.return;try{ph(e)}catch(u){Re(e,s,u)}break;case 5:var l=e.return;try{ph(e)}catch(u){Re(e,l,u)}}}catch(u){Re(e,e.return,u)}if(e===t){H=null;break}var a=e.sibling;if(a!==null){a.return=e.return,H=a;break}H=e.return}}var rC=Math.ceil,ua=bn.ReactCurrentDispatcher,kd=bn.ReactCurrentOwner,Ft=bn.ReactCurrentBatchConfig,oe=0,He=null,Me=null,Qe=0,It=0,wi=Cr(0),je=0,po=null,Vr=0,qa=0,Rd=0,Bs=null,gt=null,Nd=0,zi=1/0,_n=null,ca=!1,_h=null,lr=null,wl=!1,er=null,ha=0,Vs=0,vh=null,bl=-1,Fl=0;function at(){return oe&6?De():bl!==-1?bl:bl=De()}function ar(t){return t.mode&1?oe&2&&Qe!==0?Qe&-Qe:zS.transition!==null?(Fl===0&&(Fl=x_()),Fl):(t=he,t!==0||(t=window.event,t=t===void 0?16:U_(t.type)),t):1}function Zt(t,e,n,r){if(50<Vs)throw Vs=0,vh=null,Error(b(185));Po(t,n,r),(!(oe&2)||t!==He)&&(t===He&&(!(oe&2)&&(qa|=n),je===4&&qn(t,Qe)),St(t,r),n===1&&oe===0&&!(e.mode&1)&&(zi=De()+500,Ha&&Ir()))}function St(t,e){var n=t.callbackNode;zE(t,e);var r=ql(t,t===He?Qe:0);if(r===0)n!==null&&Lp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Lp(n),e===1)t.tag===0?jS(Rg.bind(null,t)):rv(Rg.bind(null,t)),LS(function(){!(oe&6)&&Ir()}),n=null;else{switch(O_(r)){case 1:n=ed;break;case 4:n=P_;break;case 16:n=Kl;break;case 536870912:n=A_;break;default:n=Kl}n=ty(n,qv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function qv(t,e){if(bl=-1,Fl=0,oe&6)throw Error(b(327));var n=t.callbackNode;if(Ni()&&t.callbackNode!==n)return null;var r=ql(t,t===He?Qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=da(t,r);else{e=r;var i=oe;oe|=2;var s=Yv();(He!==t||Qe!==e)&&(_n=null,zi=De()+500,Fr(t,e));do try{oC();break}catch(a){Qv(t,a)}while(!0);fd(),ua.current=s,oe=i,Me!==null?e=0:(He=null,Qe=0,e=je)}if(e!==0){if(e===2&&(i=$c(t),i!==0&&(r=i,e=yh(t,i))),e===1)throw n=po,Fr(t,0),qn(t,r),St(t,De()),n;if(e===6)qn(t,r);else{if(i=t.current.alternate,!(r&30)&&!iC(i)&&(e=da(t,r),e===2&&(s=$c(t),s!==0&&(r=s,e=yh(t,s))),e===1))throw n=po,Fr(t,0),qn(t,r),St(t,De()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:Ar(t,gt,_n);break;case 3:if(qn(t,r),(r&130023424)===r&&(e=Nd+500-De(),10<e)){if(ql(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){at(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Zc(Ar.bind(null,t,gt,_n),e);break}Ar(t,gt,_n);break;case 4:if(qn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var l=31-Jt(r);s=1<<l,l=e[l],l>i&&(i=l),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rC(r/1960))-r,10<r){t.timeoutHandle=Zc(Ar.bind(null,t,gt,_n),r);break}Ar(t,gt,_n);break;case 5:Ar(t,gt,_n);break;default:throw Error(b(329))}}}return St(t,De()),t.callbackNode===n?qv.bind(null,t):null}function yh(t,e){var n=Bs;return t.current.memoizedState.isDehydrated&&(Fr(t,e).flags|=256),t=da(t,e),t!==2&&(e=gt,gt=n,e!==null&&wh(e)),t}function wh(t){gt===null?gt=t:gt.push.apply(gt,t)}function iC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!tn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qn(t,e){for(e&=~Rd,e&=~qa,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jt(e),r=1<<n;t[n]=-1,e&=~r}}function Rg(t){if(oe&6)throw Error(b(327));Ni();var e=ql(t,0);if(!(e&1))return St(t,De()),null;var n=da(t,e);if(t.tag!==0&&n===2){var r=$c(t);r!==0&&(e=r,n=yh(t,r))}if(n===1)throw n=po,Fr(t,0),qn(t,e),St(t,De()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ar(t,gt,_n),St(t,De()),null}function Pd(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(zi=De()+500,Ha&&Ir())}}function Wr(t){er!==null&&er.tag===0&&!(oe&6)&&Ni();var e=oe;oe|=1;var n=Ft.transition,r=he;try{if(Ft.transition=null,he=1,t)return t()}finally{he=r,Ft.transition=n,oe=e,!(oe&6)&&Ir()}}function Ad(){It=wi.current,Se(wi)}function Fr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,MS(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(cd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zl();break;case 3:Ui(),Se(wt),Se(rt),yd();break;case 5:vd(r);break;case 4:Ui();break;case 13:Se(Ie);break;case 19:Se(Ie);break;case 10:pd(r.type._context);break;case 22:case 23:Ad()}n=n.return}if(He=t,Me=t=ur(t.current,null),Qe=It=e,je=0,po=null,Rd=qa=Vr=0,gt=Bs=null,Mr!==null){for(e=0;e<Mr.length;e++)if(n=Mr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var l=s.next;s.next=i,r.next=l}n.pending=r}Mr=null}return t}function Qv(t,e){do{var n=Me;try{if(fd(),Dl.current=aa,la){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}la=!1}if(Br=0,Ve=be=Te=null,js=!1,co=0,kd.current=null,n===null||n.return===null){je=1,po=e,Me=null;break}e:{var s=t,l=n.return,a=n,u=e;if(e=Qe,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,g=a,p=g.tag;if(!(g.mode&1)&&(p===0||p===11||p===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var P=pg(l);if(P!==null){P.flags&=-257,gg(P,l,a,s,e),P.mode&1&&fg(s,h,e),e=P,u=h;var T=e.updateQueue;if(T===null){var O=new Set;O.add(u),e.updateQueue=O}else T.add(u);break e}else{if(!(e&1)){fg(s,h,e),xd();break e}u=Error(b(426))}}else if(Ce&&a.mode&1){var L=pg(l);if(L!==null){!(L.flags&65536)&&(L.flags|=256),gg(L,l,a,s,e),hd(ji(u,a));break e}}s=u=ji(u,a),je!==4&&(je=2),Bs===null?Bs=[s]:Bs.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var C=Ov(s,u,e);lg(s,C);break e;case 1:a=u;var y=s.type,k=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(lr===null||!lr.has(k)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Dv(s,a,e);lg(s,M);break e}}s=s.return}while(s!==null)}Jv(n)}catch(U){e=U,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function Yv(){var t=ua.current;return ua.current=aa,t===null?aa:t}function xd(){(je===0||je===3||je===2)&&(je=4),He===null||!(Vr&268435455)&&!(qa&268435455)||qn(He,Qe)}function da(t,e){var n=oe;oe|=2;var r=Yv();(He!==t||Qe!==e)&&(_n=null,Fr(t,e));do try{sC();break}catch(i){Qv(t,i)}while(!0);if(fd(),oe=n,ua.current=r,Me!==null)throw Error(b(261));return He=null,Qe=0,je}function sC(){for(;Me!==null;)Xv(Me)}function oC(){for(;Me!==null&&!xE();)Xv(Me)}function Xv(t){var e=ey(t.alternate,t,It);t.memoizedProps=t.pendingProps,e===null?Jv(t):Me=e,kd.current=null}function Jv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ZS(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,Me=null;return}}else if(n=JS(n,e,It),n!==null){Me=n;return}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);je===0&&(je=5)}function Ar(t,e,n){var r=he,i=Ft.transition;try{Ft.transition=null,he=1,lC(t,e,n,r)}finally{Ft.transition=i,he=r}return null}function lC(t,e,n,r){do Ni();while(er!==null);if(oe&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(BE(t,s),t===He&&(Me=He=null,Qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wl||(wl=!0,ty(Kl,function(){return Ni(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ft.transition,Ft.transition=null;var l=he;he=1;var a=oe;oe|=4,kd.current=null,tC(t,n),Gv(n,t),RS(Xc),Ql=!!Yc,Xc=Yc=null,t.current=n,nC(n),OE(),oe=a,he=l,Ft.transition=s}else t.current=n;if(wl&&(wl=!1,er=t,ha=i),s=t.pendingLanes,s===0&&(lr=null),LE(n.stateNode),St(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ca)throw ca=!1,t=_h,_h=null,t;return ha&1&&t.tag!==0&&Ni(),s=t.pendingLanes,s&1?t===vh?Vs++:(Vs=0,vh=t):Vs=0,Ir(),null}function Ni(){if(er!==null){var t=O_(ha),e=Ft.transition,n=he;try{if(Ft.transition=null,he=16>t?16:t,er===null)var r=!1;else{if(t=er,er=null,ha=0,oe&6)throw Error(b(331));var i=oe;for(oe|=4,H=t.current;H!==null;){var s=H,l=s.child;if(H.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var h=a[u];for(H=h;H!==null;){var g=H;switch(g.tag){case 0:case 11:case 15:zs(8,g,s)}var p=g.child;if(p!==null)p.return=g,H=p;else for(;H!==null;){g=H;var m=g.sibling,P=g.return;if(Wv(g),g===h){H=null;break}if(m!==null){m.return=P,H=m;break}H=P}}}var T=s.alternate;if(T!==null){var O=T.child;if(O!==null){T.child=null;do{var L=O.sibling;O.sibling=null,O=L}while(O!==null)}}H=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,H=l;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:zs(9,s,s.return)}var C=s.sibling;if(C!==null){C.return=s.return,H=C;break e}H=s.return}}var y=t.current;for(H=y;H!==null;){l=H;var k=l.child;if(l.subtreeFlags&2064&&k!==null)k.return=l,H=k;else e:for(l=y;H!==null;){if(a=H,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ka(9,a)}}catch(U){Re(a,a.return,U)}if(a===l){H=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,H=M;break e}H=a.return}}if(oe=i,Ir(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(ja,t)}catch{}r=!0}return r}finally{he=n,Ft.transition=e}}return!1}function Ng(t,e,n){e=ji(n,e),e=Ov(t,e,1),t=or(t,e,1),e=at(),t!==null&&(Po(t,1,e),St(t,e))}function Re(t,e,n){if(t.tag===3)Ng(t,t,n);else for(;e!==null;){if(e.tag===3){Ng(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(lr===null||!lr.has(r))){t=ji(n,t),t=Dv(e,t,1),e=or(e,t,1),t=at(),e!==null&&(Po(e,1,t),St(e,t));break}}e=e.return}}function aC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=at(),t.pingedLanes|=t.suspendedLanes&n,He===t&&(Qe&n)===n&&(je===4||je===3&&(Qe&130023424)===Qe&&500>De()-Nd?Fr(t,0):Rd|=n),St(t,e)}function Zv(t,e){e===0&&(t.mode&1?(e=cl,cl<<=1,!(cl&130023424)&&(cl=4194304)):e=1);var n=at();t=An(t,e),t!==null&&(Po(t,e,n),St(t,n))}function uC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Zv(t,n)}function cC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),Zv(t,n)}var ey;ey=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wt.current)vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vt=!1,XS(t,e,n);vt=!!(t.flags&131072)}else vt=!1,Ce&&e.flags&1048576&&iv(e,na,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ll(t,e),t=e.pendingProps;var i=Li(e,rt.current);Ri(e,n),i=Ed(null,e,r,t,i,n);var s=Sd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Et(r)?(s=!0,ea(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,md(e),i.updater=Ga,e.stateNode=i,i._reactInternals=e,oh(e,r,t,n),e=uh(null,e,r,!0,s,n)):(e.tag=0,Ce&&s&&ud(e),ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ll(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=dC(r),t=Gt(r,t),i){case 0:e=ah(null,e,r,t,n);break e;case 1:e=vg(null,e,r,t,n);break e;case 11:e=mg(null,e,r,t,n);break e;case 14:e=_g(null,e,r,Gt(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),ah(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),vg(t,e,r,i,n);case 3:e:{if(Fv(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,cv(t,e),sa(e,r,null,n);var l=e.memoizedState;if(r=l.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ji(Error(b(423)),e),e=yg(t,e,r,n,i);break e}else if(r!==i){i=ji(Error(b(424)),e),e=yg(t,e,r,n,i);break e}else for(kt=sr(e.stateNode.containerInfo.firstChild),Rt=e,Ce=!0,qt=null,n=av(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bi(),r===i){e=xn(t,e,n);break e}ot(t,e,r,n)}e=e.child}return e;case 5:return hv(e),t===null&&rh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,l=i.children,Jc(r,i)?l=null:s!==null&&Jc(r,s)&&(e.flags|=32),bv(t,e),ot(t,e,l,n),e.child;case 6:return t===null&&rh(e),null;case 13:return Uv(t,e,n);case 4:return _d(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Fi(e,null,r,n):ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),mg(t,e,r,i,n);case 7:return ot(t,e,e.pendingProps,n),e.child;case 8:return ot(t,e,e.pendingProps.children,n),e.child;case 12:return ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,l=i.value,ye(ra,r._currentValue),r._currentValue=l,s!==null)if(tn(s.value,l)){if(s.children===i.children&&!wt.current){e=xn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){l=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=kn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var g=h.pending;g===null?u.next=u:(u.next=g.next,g.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),ih(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)l=s.type===e.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(b(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ih(l,n,e),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===e){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ri(e,n),i=Ut(i),r=r(i),e.flags|=1,ot(t,e,r,n),e.child;case 14:return r=e.type,i=Gt(r,e.pendingProps),i=Gt(r.type,i),_g(t,e,r,i,n);case 15:return Mv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),Ll(t,e),e.tag=1,Et(r)?(t=!0,ea(e)):t=!1,Ri(e,n),xv(e,r,i),oh(e,r,i,n),uh(null,e,r,!0,t,n);case 19:return jv(t,e,n);case 22:return Lv(t,e,n)}throw Error(b(156,e.tag))};function ty(t,e){return N_(t,e)}function hC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,e,n,r){return new hC(t,e,n,r)}function Od(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dC(t){if(typeof t=="function")return Od(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xh)return 11;if(t===Jh)return 14}return 2}function ur(t,e){var n=t.alternate;return n===null?(n=Lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ul(t,e,n,r,i,s){var l=2;if(r=t,typeof t=="function")Od(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case ci:return Ur(n.children,i,s,e);case Yh:l=8,i|=8;break;case Ac:return t=Lt(12,n,e,i|2),t.elementType=Ac,t.lanes=s,t;case xc:return t=Lt(13,n,e,i),t.elementType=xc,t.lanes=s,t;case Oc:return t=Lt(19,n,e,i),t.elementType=Oc,t.lanes=s,t;case h_:return Qa(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case u_:l=10;break e;case c_:l=9;break e;case Xh:l=11;break e;case Jh:l=14;break e;case $n:l=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=Lt(l,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ur(t,e,n,r){return t=Lt(7,t,r,e),t.lanes=n,t}function Qa(t,e,n,r){return t=Lt(22,t,r,e),t.elementType=h_,t.lanes=n,t.stateNode={isHidden:!1},t}function uc(t,e,n){return t=Lt(6,t,null,e),t.lanes=n,t}function cc(t,e,n){return e=Lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hu(0),this.expirationTimes=Hu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dd(t,e,n,r,i,s,l,a,u){return t=new fC(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Lt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},md(s),t}function pC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ui,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ny(t){if(!t)return mr;t=t._reactInternals;e:{if(Yr(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Et(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(Et(n))return nv(t,n,e)}return e}function ry(t,e,n,r,i,s,l,a,u){return t=Dd(n,r,!0,t,i,s,l,a,u),t.context=ny(null),n=t.current,r=at(),i=ar(n),s=kn(r,i),s.callback=e??null,or(n,s,i),t.current.lanes=i,Po(t,i,r),St(t,r),t}function Ya(t,e,n,r){var i=e.current,s=at(),l=ar(i);return n=ny(n),e.context===null?e.context=n:e.pendingContext=n,e=kn(s,l),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=or(i,e,l),t!==null&&(Zt(t,i,l,s),Ol(t,i,l)),l}function fa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Pg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Md(t,e){Pg(t,e),(t=t.alternate)&&Pg(t,e)}function gC(){return null}var iy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ld(t){this._internalRoot=t}Xa.prototype.render=Ld.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));Ya(t,e,null,null)};Xa.prototype.unmount=Ld.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wr(function(){Ya(null,t,null,null)}),e[Pn]=null}};function Xa(t){this._internalRoot=t}Xa.prototype.unstable_scheduleHydration=function(t){if(t){var e=L_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kn.length&&e!==0&&e<Kn[n].priority;n++);Kn.splice(n,0,t),n===0&&F_(t)}};function bd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ja(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ag(){}function mC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=fa(l);s.call(h)}}var l=ry(e,r,t,0,null,!1,!1,"",Ag);return t._reactRootContainer=l,t[Pn]=l.current,so(t.nodeType===8?t.parentNode:t),Wr(),l}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var h=fa(u);a.call(h)}}var u=Dd(t,0,!1,null,null,!1,!1,"",Ag);return t._reactRootContainer=u,t[Pn]=u.current,so(t.nodeType===8?t.parentNode:t),Wr(function(){Ya(e,u,n,r)}),u}function Za(t,e,n,r,i){var s=n._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var a=i;i=function(){var u=fa(l);a.call(u)}}Ya(e,l,t,i)}else l=mC(n,e,t,i,r);return fa(l)}D_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Os(e.pendingLanes);n!==0&&(td(e,n|1),St(e,De()),!(oe&6)&&(zi=De()+500,Ir()))}break;case 13:Wr(function(){var r=An(t,1);if(r!==null){var i=at();Zt(r,t,1,i)}}),Md(t,1)}};nd=function(t){if(t.tag===13){var e=An(t,134217728);if(e!==null){var n=at();Zt(e,t,134217728,n)}Md(t,134217728)}};M_=function(t){if(t.tag===13){var e=ar(t),n=An(t,e);if(n!==null){var r=at();Zt(n,t,e,r)}Md(t,e)}};L_=function(){return he};b_=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};Vc=function(t,e,n){switch(e){case"input":if(Lc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Wa(r);if(!i)throw Error(b(90));f_(r),Lc(r,i)}}}break;case"textarea":g_(t,n);break;case"select":e=n.value,e!=null&&Ci(t,!!n.multiple,e,!1)}};S_=Pd;C_=Wr;var _C={usingClientEntryPoint:!1,Events:[xo,pi,Wa,w_,E_,Pd]},Ts={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vC={bundleType:Ts.bundleType,version:Ts.version,rendererPackageName:Ts.rendererPackageName,rendererConfig:Ts.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=k_(t),t===null?null:t.stateNode},findFiberByHostInstance:Ts.findFiberByHostInstance||gC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var El=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!El.isDisabled&&El.supportsFiber)try{ja=El.inject(vC),ln=El}catch{}}Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_C;Pt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bd(e))throw Error(b(200));return pC(t,e,null,n)};Pt.createRoot=function(t,e){if(!bd(t))throw Error(b(299));var n=!1,r="",i=iy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Dd(t,1,!1,null,null,n,!1,r,i),t[Pn]=e.current,so(t.nodeType===8?t.parentNode:t),new Ld(e)};Pt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=k_(e),t=t===null?null:t.stateNode,t};Pt.flushSync=function(t){return Wr(t)};Pt.hydrate=function(t,e,n){if(!Ja(e))throw Error(b(200));return Za(null,t,e,!0,n)};Pt.hydrateRoot=function(t,e,n){if(!bd(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",l=iy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),e=ry(e,null,t,1,n??null,i,!1,s,l),t[Pn]=e.current,so(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Xa(e)};Pt.render=function(t,e,n){if(!Ja(e))throw Error(b(200));return Za(null,t,e,!1,n)};Pt.unmountComponentAtNode=function(t){if(!Ja(t))throw Error(b(40));return t._reactRootContainer?(Wr(function(){Za(null,null,t,!1,function(){t._reactRootContainer=null,t[Pn]=null})}),!0):!1};Pt.unstable_batchedUpdates=Pd;Pt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ja(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return Za(t,e,n,!1,r)};Pt.version="18.3.1-next-f1338f8080-20240426";function sy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sy)}catch(t){console.error(t)}}sy(),s_.exports=Pt;var yC=s_.exports,xg=yC;Nc.createRoot=xg.createRoot,Nc.hydrateRoot=xg.hydrateRoot;var Og={};/**
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
 */const oy={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const F=function(t,e){if(!t)throw Yi(e)},Yi=function(t){return new Error("Firebase Database ("+oy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const ly=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],l=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(l&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],l=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|l&63)}}return e.join("")},Fd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],l=i+1<t.length,a=l?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,g=s>>2,p=(s&3)<<4|a>>4;let m=(a&15)<<2|h>>6,P=h&63;u||(P=64,l||(m=64)),r.push(n[g],n[p],n[m],n[P])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ly(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||h==null||p==null)throw new EC;const m=s<<2|a>>4;if(r.push(m),h!==64){const P=a<<4&240|h>>2;if(r.push(P),p!==64){const T=h<<6&192|p;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class EC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ay=function(t){const e=ly(t);return Fd.encodeByteArray(e,!0)},pa=function(t){return ay(t).replace(/\./g,"")},ga=function(t){try{return Fd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function SC(t){return uy(void 0,t)}function uy(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!CC(n)||(t[n]=uy(t[n],e[n]));return t}function CC(t){return t!=="__proto__"}/**
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
 */function IC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const TC=()=>IC().__FIREBASE_DEFAULTS__,kC=()=>{if(typeof process>"u"||typeof Og>"u")return;const t=Og.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},RC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ga(t[1]);return e&&JSON.parse(e)},Ud=()=>{try{return TC()||kC()||RC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cy=t=>{var e,n;return(n=(e=Ud())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},NC=t=>{const e=cy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},hy=()=>{var t;return(t=Ud())===null||t===void 0?void 0:t.config},dy=t=>{var e;return(e=Ud())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Do{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function PC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[pa(JSON.stringify(n)),pa(JSON.stringify(l)),""].join(".")}/**
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
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function AC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function OC(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function DC(){return oy.NODE_ADMIN===!0}function MC(){try{return typeof indexedDB=="object"}catch{return!1}}function LC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const bC="FirebaseError";class Fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=bC,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mo.prototype.create)}}class Mo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],l=s?FC(s,r):"Error",a=`${this.serviceName}: ${l} (${i}).`;return new Fn(i,a,r)}}function FC(t,e){return t.replace(UC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const UC=/\{\$([^}]+)}/g;/**
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
 */function go(t){return JSON.parse(t)}function Ue(t){return JSON.stringify(t)}/**
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
 */const py=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=go(ga(s[0])||""),n=go(ga(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},jC=function(t){const e=py(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},zC=function(t){const e=py(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function dn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Bi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Eh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ma(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function mo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],l=e[i];if(Dg(s)&&Dg(l)){if(!mo(s,l))return!1}else if(s!==l)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Dg(t){return t!==null&&typeof t=="object"}/**
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
 */function Xi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class BC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)r[p]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let p=0;p<16;p++)r[p]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let p=16;p<80;p++){const m=r[p-3]^r[p-8]^r[p-14]^r[p-16];r[p]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],l=this.chain_[2],a=this.chain_[3],u=this.chain_[4],h,g;for(let p=0;p<80;p++){p<40?p<20?(h=a^s&(l^a),g=1518500249):(h=s^l^a,g=1859775393):p<60?(h=s&l|a&(s|l),g=2400959708):(h=s^l^a,g=3395469782);const m=(i<<5|i>>>27)+h+u+g+r[p]&4294967295;u=a,a=l,l=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+l&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let l=this.inbuf_;for(;i<n;){if(l===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[l]=e.charCodeAt(i),++l,++i,l===this.blockSize){this.compress_(s),l=0;break}}else for(;i<n;)if(s[l]=e[i],++l,++i,l===this.blockSize){this.compress_(s),l=0;break}}this.inbuf_=l,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function VC(t,e){const n=new WC(t,e);return n.subscribe.bind(n)}class WC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");HC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=hc),i.error===void 0&&(i.error=hc),i.complete===void 0&&(i.complete=hc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function HC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hc(){}function eu(t,e){return`${t} failed: ${e} argument `}/**
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
 */const $C=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,F(r<t.length,"Surrogate pair missing trail surrogate.");const l=t.charCodeAt(r)-56320;i=65536+(s<<10)+l}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function xt(t){return t&&t._delegate?t._delegate:t}class _r{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xr="[DEFAULT]";/**
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
 */class GC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Do;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qC(e))try{this.getOrInitializeService({instanceIdentifier:xr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=xr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xr){return this.instances.has(e)}getOptions(e=xr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,l]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&l.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const l=this.instances.get(i);return l&&e(l,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xr){return this.component?this.component.multipleInstances?e:xr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KC(t){return t===xr?void 0:t}function qC(t){return t.instantiationMode==="EAGER"}/**
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
 */class QC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new GC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const YC={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},XC=ce.INFO,JC={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},ZC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=JC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nu{constructor(e){this.name=e,this._logLevel=XC,this._logHandler=ZC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const eI=(t,e)=>e.some(n=>t instanceof n);let Mg,Lg;function tI(){return Mg||(Mg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nI(){return Lg||(Lg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gy=new WeakMap,Sh=new WeakMap,my=new WeakMap,dc=new WeakMap,zd=new WeakMap;function rI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",l)},s=()=>{n(cr(t.result)),i()},l=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",l)});return e.then(n=>{n instanceof IDBCursor&&gy.set(n,t)}).catch(()=>{}),zd.set(e,t),e}function iI(t){if(Sh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",l),t.removeEventListener("abort",l)},s=()=>{n(),i()},l=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",l),t.addEventListener("abort",l)});Sh.set(t,e)}let Ch={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||my.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sI(t){Ch=t(Ch)}function oI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(fc(this),e,...n);return my.set(r,e.sort?e.sort():[e]),cr(r)}:nI().includes(t)?function(...e){return t.apply(fc(this),e),cr(gy.get(this))}:function(...e){return cr(t.apply(fc(this),e))}}function lI(t){return typeof t=="function"?oI(t):(t instanceof IDBTransaction&&iI(t),eI(t,tI())?new Proxy(t,Ch):t)}function cr(t){if(t instanceof IDBRequest)return rI(t);if(dc.has(t))return dc.get(t);const e=lI(t);return e!==t&&(dc.set(t,e),zd.set(e,t)),e}const fc=t=>zd.get(t);function aI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const l=indexedDB.open(t,e),a=cr(l);return r&&l.addEventListener("upgradeneeded",u=>{r(cr(l.result),u.oldVersion,u.newVersion,cr(l.transaction),u)}),n&&l.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const uI=["get","getKey","getAll","getAllKeys","count"],cI=["put","add","delete","clear"],pc=new Map;function bg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pc.get(e))return pc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=cI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uI.includes(n)))return;const s=async function(l,...a){const u=this.transaction(l,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),i&&u.done]))[0]};return pc.set(e,s),s}sI(t=>({...t,get:(e,n,r)=>bg(e,n)||t.get(e,n,r),has:(e,n)=>!!bg(e,n)||t.has(e,n)}));/**
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
 */class hI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ih="@firebase/app",Fg="0.10.13";/**
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
 */const On=new nu("@firebase/app"),fI="@firebase/app-compat",pI="@firebase/analytics-compat",gI="@firebase/analytics",mI="@firebase/app-check-compat",_I="@firebase/app-check",vI="@firebase/auth",yI="@firebase/auth-compat",wI="@firebase/database",EI="@firebase/data-connect",SI="@firebase/database-compat",CI="@firebase/functions",II="@firebase/functions-compat",TI="@firebase/installations",kI="@firebase/installations-compat",RI="@firebase/messaging",NI="@firebase/messaging-compat",PI="@firebase/performance",AI="@firebase/performance-compat",xI="@firebase/remote-config",OI="@firebase/remote-config-compat",DI="@firebase/storage",MI="@firebase/storage-compat",LI="@firebase/firestore",bI="@firebase/vertexai-preview",FI="@firebase/firestore-compat",UI="firebase",jI="10.14.1";/**
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
 */const Th="[DEFAULT]",zI={[Ih]:"fire-core",[fI]:"fire-core-compat",[gI]:"fire-analytics",[pI]:"fire-analytics-compat",[_I]:"fire-app-check",[mI]:"fire-app-check-compat",[vI]:"fire-auth",[yI]:"fire-auth-compat",[wI]:"fire-rtdb",[EI]:"fire-data-connect",[SI]:"fire-rtdb-compat",[CI]:"fire-fn",[II]:"fire-fn-compat",[TI]:"fire-iid",[kI]:"fire-iid-compat",[RI]:"fire-fcm",[NI]:"fire-fcm-compat",[PI]:"fire-perf",[AI]:"fire-perf-compat",[xI]:"fire-rc",[OI]:"fire-rc-compat",[DI]:"fire-gcs",[MI]:"fire-gcs-compat",[LI]:"fire-fst",[FI]:"fire-fst-compat",[bI]:"fire-vertex","fire-js":"fire-js",[UI]:"fire-js-all"};/**
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
 */const _a=new Map,BI=new Map,kh=new Map;function Ug(t,e){try{t.container.addComponent(e)}catch(n){On.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hr(t){const e=t.name;if(kh.has(e))return On.debug(`There were multiple attempts to register component ${e}.`),!1;kh.set(e,t);for(const n of _a.values())Ug(n,t);for(const n of BI.values())Ug(n,t);return!0}function ru(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function En(t){return t.settings!==void 0}/**
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
 */const VI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hr=new Mo("app","Firebase",VI);/**
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
 */class WI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hr.create("app-deleted",{appName:this._name})}}/**
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
 */const Xr=jI;function _y(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Th,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw hr.create("bad-app-name",{appName:String(i)});if(n||(n=hy()),!n)throw hr.create("no-options");const s=_a.get(i);if(s){if(mo(n,s.options)&&mo(r,s.config))return s;throw hr.create("duplicate-app",{appName:i})}const l=new QC(i);for(const u of kh.values())l.addComponent(u);const a=new WI(n,r,l);return _a.set(i,a),a}function vy(t=Th){const e=_a.get(t);if(!e&&t===Th&&hy())return _y();if(!e)throw hr.create("no-app",{appName:t});return e}function un(t,e,n){var r;let i=(r=zI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),l=e.match(/\s|\//);if(s||l){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&l&&a.push("and"),l&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),On.warn(a.join(" "));return}Hr(new _r(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const HI="firebase-heartbeat-database",$I=1,_o="firebase-heartbeat-store";let gc=null;function yy(){return gc||(gc=aI(HI,$I,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_o)}catch(n){console.warn(n)}}}}).catch(t=>{throw hr.create("idb-open",{originalErrorMessage:t.message})})),gc}async function GI(t){try{const n=(await yy()).transaction(_o),r=await n.objectStore(_o).get(wy(t));return await n.done,r}catch(e){if(e instanceof Fn)On.warn(e.message);else{const n=hr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});On.warn(n.message)}}}async function jg(t,e){try{const r=(await yy()).transaction(_o,"readwrite");await r.objectStore(_o).put(e,wy(t)),await r.done}catch(n){if(n instanceof Fn)On.warn(n.message);else{const r=hr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});On.warn(r.message)}}}function wy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const KI=1024,qI=30*24*60*60*1e3;class QI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new XI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=zg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(l=>l.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const a=new Date(l.date).valueOf();return Date.now()-a<=qI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){On.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=zg(),{heartbeatsToSend:r,unsentEntries:i}=YI(this._heartbeatsCache.heartbeats),s=pa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return On.warn(n),""}}}function zg(){return new Date().toISOString().substring(0,10)}function YI(t,e=KI){const n=[];let r=t.slice();for(const i of t){const s=n.find(l=>l.agent===i.agent);if(s){if(s.dates.push(i.date),Bg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Bg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class XI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return MC()?LC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await GI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Bg(t){return pa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function JI(t){Hr(new _r("platform-logger",e=>new hI(e),"PRIVATE")),Hr(new _r("heartbeat",e=>new QI(e),"PRIVATE")),un(Ih,Fg,t),un(Ih,Fg,"esm2017"),un("fire-js","")}JI("");var ZI="firebase",eT="10.14.1";/**
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
 */un(ZI,eT,"app");function Bd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Ey(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tT=Ey,Sy=new Mo("auth","Firebase",Ey());/**
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
 */const va=new nu("@firebase/auth");function nT(t,...e){va.logLevel<=ce.WARN&&va.warn(`Auth (${Xr}): ${t}`,...e)}function jl(t,...e){va.logLevel<=ce.ERROR&&va.error(`Auth (${Xr}): ${t}`,...e)}/**
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
 */function Dn(t,...e){throw Vd(t,...e)}function cn(t,...e){return Vd(t,...e)}function Cy(t,e,n){const r=Object.assign(Object.assign({},tT()),{[e]:n});return new Mo("auth","Firebase",r).create(e,{appName:t.name})}function dr(t){return Cy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Sy.create(t,...e)}function J(t,e,...n){if(!t)throw Vd(e,...n)}function Sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw jl(e),new Error(e)}function Mn(t,e){t||Sn(e)}/**
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
 */function Rh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function rT(){return Vg()==="http:"||Vg()==="https:"}function Vg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function iT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rT()||xC()||"connection"in navigator)?navigator.onLine:!0}function sT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Lo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mn(n>e,"Short delay should be less than long delay!"),this.isMobile=jd()||fy()}get(){return iT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Wd(t,e){Mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Iy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const oT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lT=new Lo(3e4,6e4);function iu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ji(t,e,n,r,i={}){return Ty(t,i,async()=>{let s={},l={};r&&(e==="GET"?l=r:s={body:JSON.stringify(r)});const a=Xi(Object.assign({key:t.config.apiKey},l)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return AC()||(h.referrerPolicy="no-referrer"),Iy.fetch()(Ry(t,t.config.apiHost,n,a),h)})}async function Ty(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},oT),e);try{const i=new aT(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const l=await s.json();if("needConfirmation"in l)throw Sl(t,"account-exists-with-different-credential",l);if(s.ok&&!("errorMessage"in l))return l;{const a=s.ok?l.errorMessage:l.error.message,[u,h]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sl(t,"credential-already-in-use",l);if(u==="EMAIL_EXISTS")throw Sl(t,"email-already-in-use",l);if(u==="USER_DISABLED")throw Sl(t,"user-disabled",l);const g=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Cy(t,g,h);Dn(t,g)}}catch(i){if(i instanceof Fn)throw i;Dn(t,"network-request-failed",{message:String(i)})}}async function ky(t,e,n,r,i={}){const s=await Ji(t,e,n,r,i);return"mfaPendingCredential"in s&&Dn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ry(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Wd(t.config,i):`${t.config.apiScheme}://${i}`}class aT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(cn(this.auth,"network-request-failed")),lT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Sl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=cn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function uT(t,e){return Ji(t,"POST","/v1/accounts:delete",e)}async function Ny(t,e){return Ji(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ws(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cT(t,e=!1){const n=xt(t),r=await n.getIdToken(e),i=Hd(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,l=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ws(mc(i.auth_time)),issuedAtTime:Ws(mc(i.iat)),expirationTime:Ws(mc(i.exp)),signInProvider:l||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function mc(t){return Number(t)*1e3}function Hd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return jl("JWT malformed, contained fewer than 3 sections"),null;try{const i=ga(n);return i?JSON.parse(i):(jl("Failed to decode base64 JWT payload"),null)}catch(i){return jl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Wg(t){const e=Hd(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function vo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Fn&&hT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function hT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class dT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Nh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ws(this.lastLoginAt),this.creationTime=Ws(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ya(t){var e;const n=t.auth,r=await t.getIdToken(),i=await vo(t,Ny(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const l=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Py(s.providerUserInfo):[],a=pT(t.providerData,l),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),g=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Nh(s.createdAt,s.lastLoginAt),isAnonymous:g};Object.assign(t,p)}async function fT(t){const e=xt(t);await ya(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Py(t){return t.map(e=>{var{providerId:n}=e,r=Bd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function gT(t,e){const n=await Ty(t,{},async()=>{const r=Xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,l=Ry(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Iy.fetch()(l,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mT(t,e){return Ji(t,"POST","/v2/accounts:revokeToken",iu(t,e))}/**
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
 */class Pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=Wg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await gT(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,l=new Pi;return r&&(J(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),l.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),l.expirationTime=s),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pi,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
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
 */function Hn(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Bd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Nh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await vo(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cT(this,e)}reload(){return fT(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ya(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(En(this.auth.app))return Promise.reject(dr(this.auth));const e=await this.getIdToken();return await vo(this,uT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,l,a,u,h,g;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,P=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,T=(l=n.photoURL)!==null&&l!==void 0?l:void 0,O=(a=n.tenantId)!==null&&a!==void 0?a:void 0,L=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,C=(h=n.createdAt)!==null&&h!==void 0?h:void 0,y=(g=n.lastLoginAt)!==null&&g!==void 0?g:void 0,{uid:k,emailVerified:M,isAnonymous:U,providerData:B,stsTokenManager:w}=n;J(k&&w,e,"internal-error");const _=Pi.fromJSON(this.name,w);J(typeof k=="string",e,"internal-error"),Hn(p,e.name),Hn(m,e.name),J(typeof M=="boolean",e,"internal-error"),J(typeof U=="boolean",e,"internal-error"),Hn(P,e.name),Hn(T,e.name),Hn(O,e.name),Hn(L,e.name),Hn(C,e.name),Hn(y,e.name);const v=new Cn({uid:k,auth:e,email:m,emailVerified:M,displayName:p,isAnonymous:U,photoURL:T,phoneNumber:P,tenantId:O,stsTokenManager:_,createdAt:C,lastLoginAt:y});return B&&Array.isArray(B)&&(v.providerData=B.map(S=>Object.assign({},S))),L&&(v._redirectEventId=L),v}static async _fromIdTokenResponse(e,n,r=!1){const i=new Pi;i.updateFromServerResponse(n);const s=new Cn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ya(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Py(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Pi;a.updateFromIdToken(r);const u=new Cn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:l}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Nh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const Hg=new Map;function In(t){Mn(t instanceof Function,"Expected a class definition");let e=Hg.get(t);return e?(Mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hg.set(t,e),e)}/**
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
 */class Ay{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ay.type="NONE";const $g=Ay;/**
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
 */function zl(t,e,n){return`firebase:${t}:${e}:${n}`}class Ai{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=zl(this.userKey,i.apiKey,s),this.fullPersistenceKey=zl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ai(In($g),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||In($g);const l=zl(r,e.config.apiKey,e.name);let a=null;for(const h of n)try{const g=await h._get(l);if(g){const p=Cn._fromJSON(e,g);h!==s&&(a=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ai(s,e,r):(s=u[0],a&&await s._set(l,a.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(l)}catch{}})),new Ai(s,e,r))}}/**
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
 */function Gg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(My(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(by(e))return"Blackberry";if(Fy(e))return"Webos";if(Oy(e))return"Safari";if((e.includes("chrome/")||Dy(e))&&!e.includes("edge/"))return"Chrome";if(Ly(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xy(t=ct()){return/firefox\//i.test(t)}function Oy(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dy(t=ct()){return/crios\//i.test(t)}function My(t=ct()){return/iemobile/i.test(t)}function Ly(t=ct()){return/android/i.test(t)}function by(t=ct()){return/blackberry/i.test(t)}function Fy(t=ct()){return/webos/i.test(t)}function $d(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _T(t=ct()){var e;return $d(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vT(){return OC()&&document.documentMode===10}function Uy(t=ct()){return $d(t)||Ly(t)||Fy(t)||by(t)||/windows phone/i.test(t)||My(t)}/**
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
 */function jy(t,e=[]){let n;switch(t){case"Browser":n=Gg(ct());break;case"Worker":n=`${Gg(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xr}/${r}`}/**
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
 */class yT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((l,a)=>{try{const u=e(s);l(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function wT(t,e={}){return Ji(t,"GET","/v2/passwordPolicy",iu(t,e))}/**
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
 */const ET=6;class ST{constructor(e){var n,r,i,s;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:ET,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,l,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(l=u.containsNumericCharacter)!==null&&l!==void 0?l:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class CT{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kg(this),this.idTokenSubscription=new Kg(this),this.beforeStateQueue=new yT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=In(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ai.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ny(this,{idToken:e}),r=await Cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(En(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!l||l===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ya(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(En(this.app))return Promise.reject(dr(this));const n=e?xt(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return En(this.app)?Promise.reject(dr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return En(this.app)?Promise.reject(dr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(In(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wT(this),n=new ST(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await mT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&In(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Ai.create(this,[In(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let l=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{l||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{l=!0,u()}}else{const u=e.addObserver(n);return()=>{l=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&nT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function su(t){return xt(t)}class Kg{constructor(e){this.auth=e,this.observer=null,this.addObserver=VC(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Gd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function IT(t){Gd=t}function TT(t){return Gd.loadJS(t)}function kT(){return Gd.gapiScript}function RT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function NT(t,e){const n=ru(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(mo(s,e??{}))return i;Dn(i,"already-initialized")}return n.initialize({options:e})}function PT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(In);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function AT(t,e,n){const r=su(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=zy(e),{host:l,port:a}=xT(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${l}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),OT()}function zy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xT(t){const e=zy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:qg(r.substr(s.length+1))}}else{const[s,l]=r.split(":");return{host:s,port:qg(l)}}}function qg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function OT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class By{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,n){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}/**
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
 */async function xi(t,e){return ky(t,"POST","/v1/accounts:signInWithIdp",iu(t,e))}/**
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
 */const DT="http://localhost";class $r extends By{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Bd(n,["providerId","signInMethod"]);if(!r||!i)return null;const l=new $r(r,i);return l.idToken=s.idToken||void 0,l.accessToken=s.accessToken||void 0,l.secret=s.secret,l.nonce=s.nonce,l.pendingToken=s.pendingToken||null,l}_getIdTokenResponse(e){const n=this.buildRequest();return xi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,xi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xi(e,n)}buildRequest(){const e={requestUri:DT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xi(n)}return e}}/**
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
 */class Vy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class bo extends Vy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Qn extends bo{constructor(){super("facebook.com")}static credential(e){return $r._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
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
 */class Yn extends bo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $r._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
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
 */class Xn extends bo{constructor(){super("github.com")}static credential(e){return $r._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
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
 */class Jn extends bo{constructor(){super("twitter.com")}static credential(e,n){return $r._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
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
 */async function MT(t,e){return ky(t,"POST","/v1/accounts:signUp",iu(t,e))}/**
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
 */class vr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Cn._fromIdTokenResponse(e,r,i),l=Qg(r);return new vr({user:s,providerId:l,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Qg(r);return new vr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Qg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function LT(t){var e;if(En(t.app))return Promise.reject(dr(t));const n=su(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new vr({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await MT(n,{returnSecureToken:!0}),i=await vr._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class wa extends Fn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new wa(e,n,r,i)}}function Wy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?wa._fromErrorAndOperation(t,s,e,r):s})}async function bT(t,e,n=!1){const r=await vo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vr._forOperation(t,"link",r)}/**
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
 */async function FT(t,e,n=!1){const{auth:r}=t;if(En(r.app))return Promise.reject(dr(r));const i="reauthenticate";try{const s=await vo(t,Wy(r,i,e,t),n);J(s.idToken,r,"internal-error");const l=Hd(s.idToken);J(l,r,"internal-error");const{sub:a}=l;return J(t.uid===a,r,"user-mismatch"),vr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Dn(r,"user-mismatch"),s}}/**
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
 */async function UT(t,e,n=!1){if(En(t.app))return Promise.reject(dr(t));const r="signIn",i=await Wy(t,r,e),s=await vr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function jT(t,e,n,r){return xt(t).onIdTokenChanged(e,n,r)}function zT(t,e,n){return xt(t).beforeAuthStateChanged(e,n)}const Ea="__sak";/**
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
 */class Hy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ea,"1"),this.storage.removeItem(Ea),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const BT=1e3,VT=10;class $y extends Hy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Uy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((l,a,u)=>{this.notifyListeners(l,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const l=this.storage.getItem(r);!n&&this.localCache[r]===l||this.notifyListeners(r,l)},s=this.storage.getItem(r);vT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,VT):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},BT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$y.type="LOCAL";const WT=$y;/**
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
 */class Gy extends Hy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Gy.type="SESSION";const Ky=Gy;/**
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
 */function HT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ou{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ou(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,l=this.handlersMap[i];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(l).map(async h=>h(n.origin,s)),u=await HT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ou.receivers=[];/**
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
 */function Kd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class $T{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,l;return new Promise((a,u)=>{const h=Kd("",20);i.port1.start();const g=setTimeout(()=>{u(new Error("unsupported_event"))},r);l={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(g),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(g),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
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
 */function hn(){return window}function GT(t){hn().location.href=t}/**
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
 */function qy(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function KT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function QT(){return qy()?self:null}/**
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
 */const Qy="firebaseLocalStorageDb",YT=1,Sa="firebaseLocalStorage",Yy="fbase_key";class Fo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function lu(t,e){return t.transaction([Sa],e?"readwrite":"readonly").objectStore(Sa)}function XT(){const t=indexedDB.deleteDatabase(Qy);return new Fo(t).toPromise()}function Ph(){const t=indexedDB.open(Qy,YT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Sa,{keyPath:Yy})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Sa)?e(r):(r.close(),await XT(),e(await Ph()))})})}async function Yg(t,e,n){const r=lu(t,!0).put({[Yy]:e,value:n});return new Fo(r).toPromise()}async function JT(t,e){const n=lu(t,!1).get(e),r=await new Fo(n).toPromise();return r===void 0?null:r.value}function Xg(t,e){const n=lu(t,!0).delete(e);return new Fo(n).toPromise()}const ZT=800,e1=3;class Xy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ph(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>e1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ou._getInstance(QT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await KT(),!this.activeServiceWorker)return;this.sender=new $T(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ph();return await Yg(e,Ea,"1"),await Xg(e,Ea),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>JT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=lu(i,!1).getAll();return new Fo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ZT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xy.type="LOCAL";const t1=Xy;new Lo(3e4,6e4);/**
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
 */function n1(t,e){return e?In(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class qd extends By{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function r1(t){return UT(t.auth,new qd(t),t.bypassAuthState)}function i1(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),FT(n,new qd(t),t.bypassAuthState)}async function s1(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),bT(n,new qd(t),t.bypassAuthState)}/**
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
 */class Jy{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:l,type:a}=e;if(l){this.reject(l);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return r1;case"linkViaPopup":case"linkViaRedirect":return s1;case"reauthViaPopup":case"reauthViaRedirect":return i1;default:Dn(this.auth,"internal-error")}}resolve(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const o1=new Lo(2e3,1e4);class Ei extends Jy{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ei.currentPopupAction&&Ei.currentPopupAction.cancel(),Ei.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const e=Kd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ei.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,o1.get())};e()}}Ei.currentPopupAction=null;/**
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
 */const l1="pendingRedirect",Bl=new Map;class a1 extends Jy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Bl.get(this.auth._key());if(!e){try{const r=await u1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Bl.set(this.auth._key(),e)}return this.bypassAuthState||Bl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function u1(t,e){const n=d1(e),r=h1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function c1(t,e){Bl.set(t._key(),e)}function h1(t){return In(t._redirectPersistence)}function d1(t){return zl(l1,t.config.apiKey,t.name)}async function f1(t,e,n=!1){if(En(t.app))return Promise.reject(dr(t));const r=su(t),i=n1(r,e),l=await new a1(r,i,n).execute();return l&&!n&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
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
 */const p1=10*60*1e3;class g1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!m1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Zy(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(cn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=p1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jg(e))}saveEventToCache(e){this.cachedEventUids.add(Jg(e)),this.lastProcessedEventTime=Date.now()}}function Jg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function m1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zy(t);default:return!1}}/**
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
 */async function _1(t,e={}){return Ji(t,"GET","/v1/projects",e)}/**
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
 */const v1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,y1=/^https?/;async function w1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _1(t);for(const n of e)try{if(E1(n))return}catch{}Dn(t,"unauthorized-domain")}function E1(t){const e=Rh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const l=new URL(t);return l.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===r}if(!y1.test(n))return!1;if(v1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const S1=new Lo(3e4,6e4);function Zg(){const t=hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function C1(t){return new Promise((e,n)=>{var r,i,s;function l(){Zg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zg(),n(cn(t,"network-request-failed"))},timeout:S1.get()})}if(!((i=(r=hn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=hn().gapi)===null||s===void 0)&&s.load)l();else{const a=RT("iframefcb");return hn()[a]=()=>{gapi.load?l():n(cn(t,"network-request-failed"))},TT(`${kT()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Vl=null,e})}let Vl=null;function I1(t){return Vl=Vl||C1(t),Vl}/**
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
 */const T1=new Lo(5e3,15e3),k1="__/auth/iframe",R1="emulator/auth/iframe",N1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},P1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function A1(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wd(e,R1):`https://${t.config.authDomain}/${k1}`,r={apiKey:e.apiKey,appName:t.name,v:Xr},i=P1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Xi(r).slice(1)}`}async function x1(t){const e=await I1(t),n=hn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:A1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:N1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const l=cn(t,"network-request-failed"),a=hn().setTimeout(()=>{s(l)},T1.get());function u(){hn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(l)})}))}/**
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
 */const O1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},D1=500,M1=600,L1="_blank",b1="http://localhost";class em{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function F1(t,e,n,r=D1,i=M1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},O1),{width:r.toString(),height:i.toString(),top:s,left:l}),h=ct().toLowerCase();n&&(a=Dy(h)?L1:n),xy(h)&&(e=e||b1,u.scrollbars="yes");const g=Object.entries(u).reduce((m,[P,T])=>`${m}${P}=${T},`,"");if(_T(h)&&a!=="_self")return U1(e||"",a),new em(null);const p=window.open(e||"",a,g);J(p,t,"popup-blocked");try{p.focus()}catch{}return new em(p)}function U1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const j1="__/auth/handler",z1="emulator/auth/handler",B1=encodeURIComponent("fac");async function tm(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Xr,eventId:i};if(e instanceof Vy){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",Eh(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,p]of Object.entries({}))l[g]=p}if(e instanceof bo){const g=e.getScopes().filter(p=>p!=="");g.length>0&&(l.scopes=g.join(","))}t.tenantId&&(l.tid=t.tenantId);const a=l;for(const g of Object.keys(a))a[g]===void 0&&delete a[g];const u=await t._getAppCheckToken(),h=u?`#${B1}=${encodeURIComponent(u)}`:"";return`${V1(t)}?${Xi(a).slice(1)}${h}`}function V1({config:t}){return t.emulator?Wd(t,z1):`https://${t.authDomain}/${j1}`}/**
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
 */const _c="webStorageSupport";class W1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ky,this._completeRedirectFn=f1,this._overrideRedirectResult=c1}async _openPopup(e,n,r,i){var s;Mn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const l=await tm(e,n,r,Rh(),i);return F1(e,l,Kd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await tm(e,n,r,Rh(),i);return GT(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Mn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await x1(e),r=new g1(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_c,{type:_c},i=>{var s;const l=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[_c];l!==void 0&&n(!!l),Dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=w1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Uy()||Oy()||$d()}}const H1=W1;var nm="@firebase/auth",rm="1.7.9";/**
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
 */class $1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function G1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function K1(t){Hr(new _r("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:l,authDomain:a}=r.options;J(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:l,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jy(t)},h=new CT(r,i,s,u);return PT(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Hr(new _r("auth-internal",e=>{const n=su(e.getProvider("auth").getImmediate());return(r=>new $1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),un(nm,rm,G1(t)),un(nm,rm,"esm2017")}/**
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
 */const q1=5*60,Q1=dy("authIdTokenMaxAge")||q1;let im=null;const Y1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Q1)return;const i=n==null?void 0:n.token;im!==i&&(im=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function X1(t=vy()){const e=ru(t,"auth");if(e.isInitialized())return e.getImmediate();const n=NT(t,{popupRedirectResolver:H1,persistence:[t1,WT,Ky]}),r=dy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const l=Y1(s.toString());zT(n,l,()=>l(n.currentUser)),jT(n,a=>l(a))}}const i=cy("auth");return i&&AT(n,`http://${i}`),n}function J1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}IT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=cn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",J1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});K1("Browser");var sm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var e0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function v(){}v.prototype=_.prototype,w.D=_.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(S,R,A){for(var E=Array(arguments.length-2),it=2;it<arguments.length;it++)E[it-2]=arguments[it];return _.prototype[R].apply(S,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,_,v){v||(v=0);var S=Array(16);if(typeof _=="string")for(var R=0;16>R;++R)S[R]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(R=0;16>R;++R)S[R]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=w.g[0],v=w.g[1],R=w.g[2];var A=w.g[3],E=_+(A^v&(R^A))+S[0]+3614090360&4294967295;_=v+(E<<7&4294967295|E>>>25),E=A+(R^_&(v^R))+S[1]+3905402710&4294967295,A=_+(E<<12&4294967295|E>>>20),E=R+(v^A&(_^v))+S[2]+606105819&4294967295,R=A+(E<<17&4294967295|E>>>15),E=v+(_^R&(A^_))+S[3]+3250441966&4294967295,v=R+(E<<22&4294967295|E>>>10),E=_+(A^v&(R^A))+S[4]+4118548399&4294967295,_=v+(E<<7&4294967295|E>>>25),E=A+(R^_&(v^R))+S[5]+1200080426&4294967295,A=_+(E<<12&4294967295|E>>>20),E=R+(v^A&(_^v))+S[6]+2821735955&4294967295,R=A+(E<<17&4294967295|E>>>15),E=v+(_^R&(A^_))+S[7]+4249261313&4294967295,v=R+(E<<22&4294967295|E>>>10),E=_+(A^v&(R^A))+S[8]+1770035416&4294967295,_=v+(E<<7&4294967295|E>>>25),E=A+(R^_&(v^R))+S[9]+2336552879&4294967295,A=_+(E<<12&4294967295|E>>>20),E=R+(v^A&(_^v))+S[10]+4294925233&4294967295,R=A+(E<<17&4294967295|E>>>15),E=v+(_^R&(A^_))+S[11]+2304563134&4294967295,v=R+(E<<22&4294967295|E>>>10),E=_+(A^v&(R^A))+S[12]+1804603682&4294967295,_=v+(E<<7&4294967295|E>>>25),E=A+(R^_&(v^R))+S[13]+4254626195&4294967295,A=_+(E<<12&4294967295|E>>>20),E=R+(v^A&(_^v))+S[14]+2792965006&4294967295,R=A+(E<<17&4294967295|E>>>15),E=v+(_^R&(A^_))+S[15]+1236535329&4294967295,v=R+(E<<22&4294967295|E>>>10),E=_+(R^A&(v^R))+S[1]+4129170786&4294967295,_=v+(E<<5&4294967295|E>>>27),E=A+(v^R&(_^v))+S[6]+3225465664&4294967295,A=_+(E<<9&4294967295|E>>>23),E=R+(_^v&(A^_))+S[11]+643717713&4294967295,R=A+(E<<14&4294967295|E>>>18),E=v+(A^_&(R^A))+S[0]+3921069994&4294967295,v=R+(E<<20&4294967295|E>>>12),E=_+(R^A&(v^R))+S[5]+3593408605&4294967295,_=v+(E<<5&4294967295|E>>>27),E=A+(v^R&(_^v))+S[10]+38016083&4294967295,A=_+(E<<9&4294967295|E>>>23),E=R+(_^v&(A^_))+S[15]+3634488961&4294967295,R=A+(E<<14&4294967295|E>>>18),E=v+(A^_&(R^A))+S[4]+3889429448&4294967295,v=R+(E<<20&4294967295|E>>>12),E=_+(R^A&(v^R))+S[9]+568446438&4294967295,_=v+(E<<5&4294967295|E>>>27),E=A+(v^R&(_^v))+S[14]+3275163606&4294967295,A=_+(E<<9&4294967295|E>>>23),E=R+(_^v&(A^_))+S[3]+4107603335&4294967295,R=A+(E<<14&4294967295|E>>>18),E=v+(A^_&(R^A))+S[8]+1163531501&4294967295,v=R+(E<<20&4294967295|E>>>12),E=_+(R^A&(v^R))+S[13]+2850285829&4294967295,_=v+(E<<5&4294967295|E>>>27),E=A+(v^R&(_^v))+S[2]+4243563512&4294967295,A=_+(E<<9&4294967295|E>>>23),E=R+(_^v&(A^_))+S[7]+1735328473&4294967295,R=A+(E<<14&4294967295|E>>>18),E=v+(A^_&(R^A))+S[12]+2368359562&4294967295,v=R+(E<<20&4294967295|E>>>12),E=_+(v^R^A)+S[5]+4294588738&4294967295,_=v+(E<<4&4294967295|E>>>28),E=A+(_^v^R)+S[8]+2272392833&4294967295,A=_+(E<<11&4294967295|E>>>21),E=R+(A^_^v)+S[11]+1839030562&4294967295,R=A+(E<<16&4294967295|E>>>16),E=v+(R^A^_)+S[14]+4259657740&4294967295,v=R+(E<<23&4294967295|E>>>9),E=_+(v^R^A)+S[1]+2763975236&4294967295,_=v+(E<<4&4294967295|E>>>28),E=A+(_^v^R)+S[4]+1272893353&4294967295,A=_+(E<<11&4294967295|E>>>21),E=R+(A^_^v)+S[7]+4139469664&4294967295,R=A+(E<<16&4294967295|E>>>16),E=v+(R^A^_)+S[10]+3200236656&4294967295,v=R+(E<<23&4294967295|E>>>9),E=_+(v^R^A)+S[13]+681279174&4294967295,_=v+(E<<4&4294967295|E>>>28),E=A+(_^v^R)+S[0]+3936430074&4294967295,A=_+(E<<11&4294967295|E>>>21),E=R+(A^_^v)+S[3]+3572445317&4294967295,R=A+(E<<16&4294967295|E>>>16),E=v+(R^A^_)+S[6]+76029189&4294967295,v=R+(E<<23&4294967295|E>>>9),E=_+(v^R^A)+S[9]+3654602809&4294967295,_=v+(E<<4&4294967295|E>>>28),E=A+(_^v^R)+S[12]+3873151461&4294967295,A=_+(E<<11&4294967295|E>>>21),E=R+(A^_^v)+S[15]+530742520&4294967295,R=A+(E<<16&4294967295|E>>>16),E=v+(R^A^_)+S[2]+3299628645&4294967295,v=R+(E<<23&4294967295|E>>>9),E=_+(R^(v|~A))+S[0]+4096336452&4294967295,_=v+(E<<6&4294967295|E>>>26),E=A+(v^(_|~R))+S[7]+1126891415&4294967295,A=_+(E<<10&4294967295|E>>>22),E=R+(_^(A|~v))+S[14]+2878612391&4294967295,R=A+(E<<15&4294967295|E>>>17),E=v+(A^(R|~_))+S[5]+4237533241&4294967295,v=R+(E<<21&4294967295|E>>>11),E=_+(R^(v|~A))+S[12]+1700485571&4294967295,_=v+(E<<6&4294967295|E>>>26),E=A+(v^(_|~R))+S[3]+2399980690&4294967295,A=_+(E<<10&4294967295|E>>>22),E=R+(_^(A|~v))+S[10]+4293915773&4294967295,R=A+(E<<15&4294967295|E>>>17),E=v+(A^(R|~_))+S[1]+2240044497&4294967295,v=R+(E<<21&4294967295|E>>>11),E=_+(R^(v|~A))+S[8]+1873313359&4294967295,_=v+(E<<6&4294967295|E>>>26),E=A+(v^(_|~R))+S[15]+4264355552&4294967295,A=_+(E<<10&4294967295|E>>>22),E=R+(_^(A|~v))+S[6]+2734768916&4294967295,R=A+(E<<15&4294967295|E>>>17),E=v+(A^(R|~_))+S[13]+1309151649&4294967295,v=R+(E<<21&4294967295|E>>>11),E=_+(R^(v|~A))+S[4]+4149444226&4294967295,_=v+(E<<6&4294967295|E>>>26),E=A+(v^(_|~R))+S[11]+3174756917&4294967295,A=_+(E<<10&4294967295|E>>>22),E=R+(_^(A|~v))+S[2]+718787259&4294967295,R=A+(E<<15&4294967295|E>>>17),E=v+(A^(R|~_))+S[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,w.g[2]=w.g[2]+R&4294967295,w.g[3]=w.g[3]+A&4294967295}r.prototype.u=function(w,_){_===void 0&&(_=w.length);for(var v=_-this.blockSize,S=this.B,R=this.h,A=0;A<_;){if(R==0)for(;A<=v;)i(this,w,A),A+=this.blockSize;if(typeof w=="string"){for(;A<_;)if(S[R++]=w.charCodeAt(A++),R==this.blockSize){i(this,S),R=0;break}}else for(;A<_;)if(S[R++]=w[A++],R==this.blockSize){i(this,S),R=0;break}}this.h=R,this.o+=_},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;var v=8*this.o;for(_=w.length-8;_<w.length;++_)w[_]=v&255,v/=256;for(this.u(w),w=Array(16),_=v=0;4>_;++_)for(var S=0;32>S;S+=8)w[v++]=this.g[_]>>>S&255;return w};function s(w,_){var v=a;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=_(w)}function l(w,_){this.h=_;for(var v=[],S=!0,R=w.length-1;0<=R;R--){var A=w[R]|0;S&&A==_||(v[R]=A,S=!1)}this.g=v}var a={};function u(w){return-128<=w&&128>w?s(w,function(_){return new l([_|0],0>_?-1:0)}):new l([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return L(h(-w));for(var _=[],v=1,S=0;w>=v;S++)_[S]=w/v|0,v*=4294967296;return new l(_,0)}function g(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return L(g(w.substring(1),_));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(_,8)),S=p,R=0;R<w.length;R+=8){var A=Math.min(8,w.length-R),E=parseInt(w.substring(R,R+A),_);8>A?(A=h(Math.pow(_,A)),S=S.j(A).add(h(E))):(S=S.j(v),S=S.add(h(E)))}return S}var p=u(0),m=u(1),P=u(16777216);t=l.prototype,t.m=function(){if(O(this))return-L(this).m();for(var w=0,_=1,v=0;v<this.g.length;v++){var S=this.i(v);w+=(0<=S?S:4294967296+S)*_,_*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(T(this))return"0";if(O(this))return"-"+L(this).toString(w);for(var _=h(Math.pow(w,6)),v=this,S="";;){var R=M(v,_).g;v=C(v,R.j(_));var A=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=R,T(v))return A+S;for(;6>A.length;)A="0"+A;S=A+S}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function T(w){if(w.h!=0)return!1;for(var _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function O(w){return w.h==-1}t.l=function(w){return w=C(this,w),O(w)?-1:T(w)?0:1};function L(w){for(var _=w.g.length,v=[],S=0;S<_;S++)v[S]=~w.g[S];return new l(v,~w.h).add(m)}t.abs=function(){return O(this)?L(this):this},t.add=function(w){for(var _=Math.max(this.g.length,w.g.length),v=[],S=0,R=0;R<=_;R++){var A=S+(this.i(R)&65535)+(w.i(R)&65535),E=(A>>>16)+(this.i(R)>>>16)+(w.i(R)>>>16);S=E>>>16,A&=65535,E&=65535,v[R]=E<<16|A}return new l(v,v[v.length-1]&-2147483648?-1:0)};function C(w,_){return w.add(L(_))}t.j=function(w){if(T(this)||T(w))return p;if(O(this))return O(w)?L(this).j(L(w)):L(L(this).j(w));if(O(w))return L(this.j(L(w)));if(0>this.l(P)&&0>w.l(P))return h(this.m()*w.m());for(var _=this.g.length+w.g.length,v=[],S=0;S<2*_;S++)v[S]=0;for(S=0;S<this.g.length;S++)for(var R=0;R<w.g.length;R++){var A=this.i(S)>>>16,E=this.i(S)&65535,it=w.i(R)>>>16,Bt=w.i(R)&65535;v[2*S+2*R]+=E*Bt,y(v,2*S+2*R),v[2*S+2*R+1]+=A*Bt,y(v,2*S+2*R+1),v[2*S+2*R+1]+=E*it,y(v,2*S+2*R+1),v[2*S+2*R+2]+=A*it,y(v,2*S+2*R+2)}for(S=0;S<_;S++)v[S]=v[2*S+1]<<16|v[2*S];for(S=_;S<2*_;S++)v[S]=0;return new l(v,0)};function y(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function k(w,_){this.g=w,this.h=_}function M(w,_){if(T(_))throw Error("division by zero");if(T(w))return new k(p,p);if(O(w))return _=M(L(w),_),new k(L(_.g),L(_.h));if(O(_))return _=M(w,L(_)),new k(L(_.g),_.h);if(30<w.g.length){if(O(w)||O(_))throw Error("slowDivide_ only works with positive integers.");for(var v=m,S=_;0>=S.l(w);)v=U(v),S=U(S);var R=B(v,1),A=B(S,1);for(S=B(S,2),v=B(v,2);!T(S);){var E=A.add(S);0>=E.l(w)&&(R=R.add(v),A=E),S=B(S,1),v=B(v,1)}return _=C(w,R.j(_)),new k(R,_)}for(R=p;0<=w.l(_);){for(v=Math.max(1,Math.floor(w.m()/_.m())),S=Math.ceil(Math.log(v)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),A=h(v),E=A.j(_);O(E)||0<E.l(w);)v-=S,A=h(v),E=A.j(_);T(A)&&(A=m),R=R.add(A),w=C(w,E)}return new k(R,w)}t.A=function(w){return M(this,w).h},t.and=function(w){for(var _=Math.max(this.g.length,w.g.length),v=[],S=0;S<_;S++)v[S]=this.i(S)&w.i(S);return new l(v,this.h&w.h)},t.or=function(w){for(var _=Math.max(this.g.length,w.g.length),v=[],S=0;S<_;S++)v[S]=this.i(S)|w.i(S);return new l(v,this.h|w.h)},t.xor=function(w){for(var _=Math.max(this.g.length,w.g.length),v=[],S=0;S<_;S++)v[S]=this.i(S)^w.i(S);return new l(v,this.h^w.h)};function U(w){for(var _=w.g.length+1,v=[],S=0;S<_;S++)v[S]=w.i(S)<<1|w.i(S-1)>>>31;return new l(v,w.h)}function B(w,_){var v=_>>5;_%=32;for(var S=w.g.length-v,R=[],A=0;A<S;A++)R[A]=0<_?w.i(A+v)>>>_|w.i(A+v+1)<<32-_:w.i(A+v);return new l(R,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=h,l.fromString=g,e0=l}).apply(typeof sm<"u"?sm:typeof self<"u"?self:typeof window<"u"?window:{});var Cl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,d){return o==Array.prototype||o==Object.prototype||(o[c]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cl=="object"&&Cl];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(o,c){if(c)e:{var d=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var x=o[f];if(!(x in d))break e;d=d[x]}o=o[o.length-1],f=d[o],c=c(f),c!=f&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var d=0,f=!1,x={next:function(){if(!f&&d<o.length){var D=d++;return{value:c(D,o[D]),done:!1}}return f=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},a=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function h(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function g(o,c,d){return o.call.apply(o.bind,arguments)}function p(o,c,d){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,f),o.apply(c,x)}}return function(){return o.apply(c,arguments)}}function m(o,c,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:p,m.apply(null,arguments)}function P(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var f=d.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function T(o,c){function d(){}d.prototype=c.prototype,o.aa=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(f,x,D){for(var j=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)j[ge-2]=arguments[ge];return c.prototype[x].apply(f,j)}}function O(o){const c=o.length;if(0<c){const d=Array(c);for(let f=0;f<c;f++)d[f]=o[f];return d}return[]}function L(o,c){for(let d=1;d<arguments.length;d++){const f=arguments[d];if(u(f)){const x=o.length||0,D=f.length||0;o.length=x+D;for(let j=0;j<D;j++)o[x+j]=f[j]}else o.push(f)}}class C{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function y(o){return/^[\s\xa0]*$/.test(o)}function k(){var o=a.navigator;return o&&(o=o.userAgent)?o:""}function M(o){return M[" "](o),o}M[" "]=function(){};var U=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function B(o,c,d){for(const f in o)c.call(d,o[f],f,o)}function w(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function _(o){const c={};for(const d in o)c[d]=o[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(o,c){let d,f;for(let x=1;x<arguments.length;x++){f=arguments[x];for(d in f)o[d]=f[d];for(let D=0;D<v.length;D++)d=v[D],Object.prototype.hasOwnProperty.call(f,d)&&(o[d]=f[d])}}function R(o){var c=1;o=o.split(":");const d=[];for(;0<c&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function A(o){a.setTimeout(()=>{throw o},0)}function E(){var o=Y;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class it{constructor(){this.h=this.g=null}add(c,d){const f=Bt.get();f.set(c,d),this.h?this.h.next=f:this.g=f,this.h=f}}var Bt=new C(()=>new jn,o=>o.reset());class jn{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Vt,V=!1,Y=new it,N=()=>{const o=a.Promise.resolve(void 0);Vt=()=>{o.then(I)}};var I=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(d){A(d)}var c=Bt;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}V=!1};function z(){this.s=this.s,this.C=this.C}z.prototype.s=!1,z.prototype.ma=function(){this.s||(this.s=!0,this.N())},z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function W(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}W.prototype.h=function(){this.defaultPrevented=!0};var K=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,c),a.removeEventListener("test",d,c)}catch{}return o}();function Q(o,c){if(W.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(U){e:{try{M(c.nodeName);var x=!0;break e}catch{}x=!1}x||(c=null)}}else d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:X[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Q.aa.h.call(this)}}T(Q,W);var X={2:"touch",3:"pen",4:"mouse"};Q.prototype.h=function(){Q.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var G="closure_listenable_"+(1e6*Math.random()|0),Z=0;function de(o,c,d,f,x){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!f,this.ha=x,this.key=++Z,this.da=this.fa=!1}function pe(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ue(o){this.src=o,this.g={},this.h=0}ue.prototype.add=function(o,c,d,f,x){var D=o.toString();o=this.g[D],o||(o=this.g[D]=[],this.h++);var j=Ae(o,c,f,x);return-1<j?(c=o[j],d||(c.fa=!1)):(c=new de(c,this.src,D,!!f,x),c.fa=d,o.push(c)),c};function me(o,c){var d=c.type;if(d in o.g){var f=o.g[d],x=Array.prototype.indexOf.call(f,c,void 0),D;(D=0<=x)&&Array.prototype.splice.call(f,x,1),D&&(pe(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Ae(o,c,d,f){for(var x=0;x<o.length;++x){var D=o[x];if(!D.da&&D.listener==c&&D.capture==!!d&&D.ha==f)return x}return-1}var ne="closure_lm_"+(1e6*Math.random()|0),ze={};function ft(o,c,d,f,x){if(Array.isArray(c)){for(var D=0;D<c.length;D++)ft(o,c[D],d,f,x);return null}return d=$o(d),o&&o[G]?o.K(c,d,h(f)?!!f.capture:!1,x):Ct(o,c,d,!1,f,x)}function Ct(o,c,d,f,x,D){if(!c)throw Error("Invalid event type");var j=h(x)?!!x.capture:!!x,ge=ns(o);if(ge||(o[ne]=ge=new ue(o)),d=ge.add(c,d,f,j,D),d.proxy)return d;if(f=Wt(),d.proxy=f,f.src=o,f.listener=d,o.addEventListener)K||(x=j),x===void 0&&(x=!1),o.addEventListener(c.toString(),f,x);else if(o.attachEvent)o.attachEvent(Ho(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Wt(){function o(d){return c.call(o.src,o.listener,d)}const c=wu;return o}function nn(o,c,d,f,x){if(Array.isArray(c))for(var D=0;D<c.length;D++)nn(o,c[D],d,f,x);else f=h(f)?!!f.capture:!!f,d=$o(d),o&&o[G]?(o=o.i,c=String(c).toString(),c in o.g&&(D=o.g[c],d=Ae(D,d,f,x),-1<d&&(pe(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete o.g[c],o.h--)))):o&&(o=ns(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Ae(c,d,f,x)),(d=-1<o?c[o]:null)&&pt(d))}function pt(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[G])me(c.i,o);else{var d=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(d,f,o.capture):c.detachEvent?c.detachEvent(Ho(d),f):c.addListener&&c.removeListener&&c.removeListener(f),(d=ns(c))?(me(d,o),d.h==0&&(d.src=null,c[ne]=null)):pe(o)}}}function Ho(o){return o in ze?ze[o]:ze[o]="on"+o}function wu(o,c){if(o.da)o=!0;else{c=new Q(c,this);var d=o.listener,f=o.ha||o.src;o.fa&&pt(o),o=d.call(f,c)}return o}function ns(o){return o=o[ne],o instanceof ue?o:null}var ei="__closure_events_fn_"+(1e9*Math.random()>>>0);function $o(o){return typeof o=="function"?o:(o[ei]||(o[ei]=function(c){return o.handleEvent(c)}),o[ei])}function Le(){z.call(this),this.i=new ue(this),this.M=this,this.F=null}T(Le,z),Le.prototype[G]=!0,Le.prototype.removeEventListener=function(o,c,d,f){nn(this,o,c,d,f)};function $e(o,c){var d,f=o.F;if(f)for(d=[];f;f=f.F)d.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new W(c,o);else if(c instanceof W)c.target=c.target||o;else{var x=c;c=new W(f,o),S(c,x)}if(x=!0,d)for(var D=d.length-1;0<=D;D--){var j=c.g=d[D];x=ti(j,f,!0,c)&&x}if(j=c.g=o,x=ti(j,f,!0,c)&&x,x=ti(j,f,!1,c)&&x,d)for(D=0;D<d.length;D++)j=c.g=d[D],x=ti(j,f,!1,c)&&x}Le.prototype.N=function(){if(Le.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var d=o.g[c],f=0;f<d.length;f++)pe(d[f]);delete o.g[c],o.h--}}this.F=null},Le.prototype.K=function(o,c,d,f){return this.i.add(String(o),c,!1,d,f)},Le.prototype.L=function(o,c,d,f){return this.i.add(String(o),c,!0,d,f)};function ti(o,c,d,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var x=!0,D=0;D<c.length;++D){var j=c[D];if(j&&!j.da&&j.capture==d){var ge=j.listener,Ge=j.ha||j.src;j.fa&&me(o.i,j),x=ge.call(Ge,f)!==!1&&x}}return x&&!f.defaultPrevented}function rs(o,c,d){if(typeof o=="function")d&&(o=m(o,d));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:a.setTimeout(o,c||0)}function is(o){o.g=rs(()=>{o.g=null,o.i&&(o.i=!1,is(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class ss extends z{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:is(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Tr(o){z.call(this),this.h=o,this.g={}}T(Tr,z);var Go=[];function Df(o){B(o.g,function(c,d){this.g.hasOwnProperty(d)&&pt(c)},o),o.g={}}Tr.prototype.N=function(){Tr.aa.N.call(this),Df(this)},Tr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Eu=a.JSON.stringify,yw=a.JSON.parse,ww=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Su(){}Su.prototype.h=null;function Mf(o){return o.h||(o.h=o.i())}function Ew(){}var os={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Cu(){W.call(this,"d")}T(Cu,W);function Iu(){W.call(this,"c")}T(Iu,W);var ni={},Lf=null;function Tu(){return Lf=Lf||new Le}ni.La="serverreachability";function bf(o){W.call(this,ni.La,o)}T(bf,W);function ls(o){const c=Tu();$e(c,new bf(c))}ni.STAT_EVENT="statevent";function Ff(o,c){W.call(this,ni.STAT_EVENT,o),this.stat=c}T(Ff,W);function st(o){const c=Tu();$e(c,new Ff(c,o))}ni.Ma="timingevent";function Uf(o,c){W.call(this,ni.Ma,o),this.size=c}T(Uf,W);function as(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function us(){this.g=!0}us.prototype.xa=function(){this.g=!1};function Sw(o,c,d,f,x,D){o.info(function(){if(o.g)if(D)for(var j="",ge=D.split("&"),Ge=0;Ge<ge.length;Ge++){var le=ge[Ge].split("=");if(1<le.length){var Je=le[0];le=le[1];var Ze=Je.split("_");j=2<=Ze.length&&Ze[1]=="type"?j+(Je+"="+le+"&"):j+(Je+"=redacted&")}}else j=null;else j=D;return"XMLHTTP REQ ("+f+") [attempt "+x+"]: "+c+`
`+d+`
`+j})}function Cw(o,c,d,f,x,D,j){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+x+"]: "+c+`
`+d+`
`+D+" "+j})}function ri(o,c,d,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Tw(o,d)+(f?" "+f:"")})}function Iw(o,c){o.info(function(){return"TIMEOUT: "+c})}us.prototype.info=function(){};function Tw(o,c){if(!o.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var f=d[o];if(!(2>f.length)){var x=f[1];if(Array.isArray(x)&&!(1>x.length)){var D=x[0];if(D!="noop"&&D!="stop"&&D!="close")for(var j=1;j<x.length;j++)x[j]=""}}}}return Eu(d)}catch{return c}}var ku={NO_ERROR:0,TIMEOUT:8},kw={},Ru;function Ko(){}T(Ko,Su),Ko.prototype.g=function(){return new XMLHttpRequest},Ko.prototype.i=function(){return{}},Ru=new Ko;function zn(o,c,d,f){this.j=o,this.i=c,this.l=d,this.R=f||1,this.U=new Tr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new jf}function jf(){this.i=null,this.g="",this.h=!1}var zf={},Nu={};function Pu(o,c,d){o.L=1,o.v=Xo(fn(c)),o.m=d,o.P=!0,Bf(o,null)}function Bf(o,c){o.F=Date.now(),qo(o),o.A=fn(o.v);var d=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),tp(d.i,"t",f),o.C=0,d=o.j.J,o.h=new jf,o.g=yp(o.j,d?c:null,!o.m),0<o.O&&(o.M=new ss(m(o.Y,o,o.g),o.O)),c=o.U,d=o.g,f=o.ca;var x="readystatechange";Array.isArray(x)||(x&&(Go[0]=x.toString()),x=Go);for(var D=0;D<x.length;D++){var j=ft(d,x[D],f||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),ls(),Sw(o.i,o.u,o.A,o.l,o.R,o.m)}zn.prototype.ca=function(o){o=o.target;const c=this.M;c&&pn(o)==3?c.j():this.Y(o)},zn.prototype.Y=function(o){try{if(o==this.g)e:{const Ze=pn(this.g);var c=this.g.Ba();const oi=this.g.Z();if(!(3>Ze)&&(Ze!=3||this.g&&(this.h.h||this.g.oa()||ap(this.g)))){this.J||Ze!=4||c==7||(c==8||0>=oi?ls(3):ls(2)),Au(this);var d=this.g.Z();this.X=d;t:if(Vf(this)){var f=ap(this.g);o="";var x=f.length,D=pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kr(this),cs(this);var j="";break t}this.h.i=new a.TextDecoder}for(c=0;c<x;c++)this.h.h=!0,o+=this.h.i.decode(f[c],{stream:!(D&&c==x-1)});f.length=0,this.h.g+=o,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=d==200,Cw(this.i,this.u,this.A,this.l,this.R,Ze,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ge,Ge=this.g;if((ge=Ge.g?Ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(ge)){var le=ge;break t}}le=null}if(d=le)ri(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xu(this,d);else{this.o=!1,this.s=3,st(12),kr(this),cs(this);break e}}if(this.P){d=!0;let Ht;for(;!this.J&&this.C<j.length;)if(Ht=Rw(this,j),Ht==Nu){Ze==4&&(this.s=4,st(14),d=!1),ri(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==zf){this.s=4,st(15),ri(this.i,this.l,j,"[Invalid Chunk]"),d=!1;break}else ri(this.i,this.l,Ht,null),xu(this,Ht);if(Vf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ze!=4||j.length!=0||this.h.h||(this.s=1,st(16),d=!1),this.o=this.o&&d,!d)ri(this.i,this.l,j,"[Invalid Chunked Response]"),kr(this),cs(this);else if(0<j.length&&!this.W){this.W=!0;var Je=this.j;Je.g==this&&Je.ba&&!Je.M&&(Je.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Fu(Je),Je.M=!0,st(11))}}else ri(this.i,this.l,j,null),xu(this,j);Ze==4&&kr(this),this.o&&!this.J&&(Ze==4?gp(this.j,this):(this.o=!1,qo(this)))}else Hw(this.g),d==400&&0<j.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),kr(this),cs(this)}}}catch{}finally{}};function Vf(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Rw(o,c){var d=o.C,f=c.indexOf(`
`,d);return f==-1?Nu:(d=Number(c.substring(d,f)),isNaN(d)?zf:(f+=1,f+d>c.length?Nu:(c=c.slice(f,f+d),o.C=f+d,c)))}zn.prototype.cancel=function(){this.J=!0,kr(this)};function qo(o){o.S=Date.now()+o.I,Wf(o,o.I)}function Wf(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=as(m(o.ba,o),c)}function Au(o){o.B&&(a.clearTimeout(o.B),o.B=null)}zn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Iw(this.i,this.A),this.L!=2&&(ls(),st(17)),kr(this),this.s=2,cs(this)):Wf(this,this.S-o)};function cs(o){o.j.G==0||o.J||gp(o.j,o)}function kr(o){Au(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Df(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function xu(o,c){try{var d=o.j;if(d.G!=0&&(d.g==o||Ou(d.h,o))){if(!o.K&&Ou(d.h,o)&&d.G==3){try{var f=d.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var x=f;if(x[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)rl(d),tl(d);else break e;bu(d),st(18)}}else d.za=x[1],0<d.za-d.T&&37500>x[2]&&d.F&&d.v==0&&!d.C&&(d.C=as(m(d.Za,d),6e3));if(1>=Gf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Nr(d,11)}else if((o.K||d.g==o)&&rl(d),!y(c))for(x=d.Da.g.parse(c),c=0;c<x.length;c++){let le=x[c];if(d.T=le[0],le=le[1],d.G==2)if(le[0]=="c"){d.K=le[1],d.ia=le[2];const Je=le[3];Je!=null&&(d.la=Je,d.j.info("VER="+d.la));const Ze=le[4];Ze!=null&&(d.Aa=Ze,d.j.info("SVER="+d.Aa));const oi=le[5];oi!=null&&typeof oi=="number"&&0<oi&&(f=1.5*oi,d.L=f,d.j.info("backChannelRequestTimeoutMs_="+f)),f=d;const Ht=o.g;if(Ht){const il=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(il){var D=f.h;D.g||il.indexOf("spdy")==-1&&il.indexOf("quic")==-1&&il.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Du(D,D.h),D.h=null))}if(f.D){const Uu=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;Uu&&(f.ya=Uu,we(f.I,f.D,Uu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),f=d;var j=o;if(f.qa=vp(f,f.J?f.ia:null,f.W),j.K){Kf(f.h,j);var ge=j,Ge=f.L;Ge&&(ge.I=Ge),ge.B&&(Au(ge),qo(ge)),f.g=j}else fp(f);0<d.i.length&&nl(d)}else le[0]!="stop"&&le[0]!="close"||Nr(d,7);else d.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?Nr(d,7):Lu(d):le[0]!="noop"&&d.l&&d.l.ta(le),d.v=0)}}ls(4)}catch{}}var Nw=class{constructor(o,c){this.g=o,this.map=c}};function Hf(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $f(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Gf(o){return o.h?1:o.g?o.g.size:0}function Ou(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Du(o,c){o.g?o.g.add(c):o.h=c}function Kf(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Hf.prototype.cancel=function(){if(this.i=qf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function qf(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.D);return c}return O(o.i)}function Pw(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],d=o.length,f=0;f<d;f++)c.push(o[f]);return c}c=[],d=0;for(f in o)c[d++]=o[f];return c}function Aw(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var d=0;d<o;d++)c.push(d);return c}c=[],d=0;for(const f in o)c[d++]=f;return c}}}function Qf(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var d=Aw(o),f=Pw(o),x=f.length,D=0;D<x;D++)c.call(void 0,f[D],d&&d[D],o)}var Yf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xw(o,c){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var f=o[d].indexOf("="),x=null;if(0<=f){var D=o[d].substring(0,f);x=o[d].substring(f+1)}else D=o[d];c(D,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Rr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Rr){this.h=o.h,Qo(this,o.j),this.o=o.o,this.g=o.g,Yo(this,o.s),this.l=o.l;var c=o.i,d=new fs;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Xf(this,d),this.m=o.m}else o&&(c=String(o).match(Yf))?(this.h=!1,Qo(this,c[1]||"",!0),this.o=hs(c[2]||""),this.g=hs(c[3]||"",!0),Yo(this,c[4]),this.l=hs(c[5]||"",!0),Xf(this,c[6]||"",!0),this.m=hs(c[7]||"")):(this.h=!1,this.i=new fs(null,this.h))}Rr.prototype.toString=function(){var o=[],c=this.j;c&&o.push(ds(c,Jf,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(ds(c,Jf,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(ds(d,d.charAt(0)=="/"?Mw:Dw,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",ds(d,bw)),o.join("")};function fn(o){return new Rr(o)}function Qo(o,c,d){o.j=d?hs(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Yo(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Xf(o,c,d){c instanceof fs?(o.i=c,Fw(o.i,o.h)):(d||(c=ds(c,Lw)),o.i=new fs(c,o.h))}function we(o,c,d){o.i.set(c,d)}function Xo(o){return we(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function hs(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ds(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,Ow),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Ow(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Jf=/[#\/\?@]/g,Dw=/[#\?:]/g,Mw=/[#\?]/g,Lw=/[#\?@]/g,bw=/#/g;function fs(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Bn(o){o.g||(o.g=new Map,o.h=0,o.i&&xw(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=fs.prototype,t.add=function(o,c){Bn(this),this.i=null,o=ii(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function Zf(o,c){Bn(o),c=ii(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function ep(o,c){return Bn(o),c=ii(o,c),o.g.has(c)}t.forEach=function(o,c){Bn(this),this.g.forEach(function(d,f){d.forEach(function(x){o.call(c,x,f,this)},this)},this)},t.na=function(){Bn(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let f=0;f<c.length;f++){const x=o[f];for(let D=0;D<x.length;D++)d.push(c[f])}return d},t.V=function(o){Bn(this);let c=[];if(typeof o=="string")ep(this,o)&&(c=c.concat(this.g.get(ii(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)c=c.concat(o[d])}return c},t.set=function(o,c){return Bn(this),this.i=null,o=ii(this,o),ep(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},t.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function tp(o,c,d){Zf(o,c),0<d.length&&(o.i=null,o.g.set(ii(o,c),O(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var f=c[d];const D=encodeURIComponent(String(f)),j=this.V(f);for(f=0;f<j.length;f++){var x=D;j[f]!==""&&(x+="="+encodeURIComponent(String(j[f]))),o.push(x)}}return this.i=o.join("&")};function ii(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Fw(o,c){c&&!o.j&&(Bn(o),o.i=null,o.g.forEach(function(d,f){var x=f.toLowerCase();f!=x&&(Zf(this,f),tp(this,x,d))},o)),o.j=c}function Uw(o,c){const d=new us;if(a.Image){const f=new Image;f.onload=P(Vn,d,"TestLoadImage: loaded",!0,c,f),f.onerror=P(Vn,d,"TestLoadImage: error",!1,c,f),f.onabort=P(Vn,d,"TestLoadImage: abort",!1,c,f),f.ontimeout=P(Vn,d,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function jw(o,c){const d=new us,f=new AbortController,x=setTimeout(()=>{f.abort(),Vn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(D=>{clearTimeout(x),D.ok?Vn(d,"TestPingServer: ok",!0,c):Vn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(x),Vn(d,"TestPingServer: error",!1,c)})}function Vn(o,c,d,f,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),f(d)}catch{}}function zw(){this.g=new ww}function Bw(o,c,d){const f=d||"";try{Qf(o,function(x,D){let j=x;h(x)&&(j=Eu(x)),c.push(f+D+"="+encodeURIComponent(j))})}catch(x){throw c.push(f+"type="+encodeURIComponent("_badmap")),x}}function Jo(o){this.l=o.Ub||null,this.j=o.eb||!1}T(Jo,Su),Jo.prototype.g=function(){return new Zo(this.l,this.j)},Jo.prototype.i=function(o){return function(){return o}}({});function Zo(o,c){Le.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(Zo,Le),t=Zo.prototype,t.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,gs(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||a).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ps(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,gs(this)),this.g&&(this.readyState=3,gs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;np(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function np(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?ps(this):gs(this),this.readyState==3&&np(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,ps(this))},t.Qa=function(o){this.g&&(this.response=o,ps(this))},t.ga=function(){this.g&&ps(this)};function ps(o){o.readyState=4,o.l=null,o.j=null,o.v=null,gs(o)}t.setRequestHeader=function(o,c){this.u.append(o,c)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function gs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Zo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function rp(o){let c="";return B(o,function(d,f){c+=f,c+=":",c+=d,c+=`\r
`}),c}function Mu(o,c,d){e:{for(f in d){var f=!1;break e}f=!0}f||(d=rp(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):we(o,c,d))}function xe(o){Le.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(xe,Le);var Vw=/^https?$/i,Ww=["POST","PUT"];t=xe.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,c,d,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ru.g(),this.v=this.o?Mf(this.o):Mf(Ru),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(D){ip(this,D);return}if(o=d||"",d=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var x in f)d.set(x,f[x]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const D of f.keys())d.set(D,f.get(D));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),x=a.FormData&&o instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Ww,c,void 0))||f||x||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,j]of d)this.g.setRequestHeader(D,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{lp(this),this.u=!0,this.g.send(o),this.u=!1}catch(D){ip(this,D)}};function ip(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,sp(o),el(o)}function sp(o){o.A||(o.A=!0,$e(o,"complete"),$e(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,$e(this,"complete"),$e(this,"abort"),el(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),el(this,!0)),xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?op(this):this.bb())},t.bb=function(){op(this)};function op(o){if(o.h&&typeof l<"u"&&(!o.v[1]||pn(o)!=4||o.Z()!=2)){if(o.u&&pn(o)==4)rs(o.Ea,0,o);else if($e(o,"readystatechange"),pn(o)==4){o.h=!1;try{const j=o.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var f;if(f=j===0){var x=String(o.D).match(Yf)[1]||null;!x&&a.self&&a.self.location&&(x=a.self.location.protocol.slice(0,-1)),f=!Vw.test(x?x.toLowerCase():"")}d=f}if(d)$e(o,"complete"),$e(o,"success");else{o.m=6;try{var D=2<pn(o)?o.g.statusText:""}catch{D=""}o.l=D+" ["+o.Z()+"]",sp(o)}}finally{el(o)}}}}function el(o,c){if(o.g){lp(o);const d=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||$e(o,"ready");try{d.onreadystatechange=f}catch{}}}function lp(o){o.I&&(a.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function pn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<pn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),yw(c)}};function ap(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Hw(o){const c={};o=(o.g&&2<=pn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(y(o[f]))continue;var d=R(o[f]);const x=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=c[x]||[];c[x]=D,D.push(d)}w(c,function(f){return f.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ms(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function up(o){this.Aa=0,this.i=[],this.j=new us,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ms("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ms("baseRetryDelayMs",5e3,o),this.cb=ms("retryDelaySeedMs",1e4,o),this.Wa=ms("forwardChannelMaxRetries",2,o),this.wa=ms("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Hf(o&&o.concurrentRequestLimit),this.Da=new zw,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=up.prototype,t.la=8,t.G=1,t.connect=function(o,c,d,f){st(0),this.W=o,this.H=c||{},d&&f!==void 0&&(this.H.OSID=d,this.H.OAID=f),this.F=this.X,this.I=vp(this,null,this.W),nl(this)};function Lu(o){if(cp(o),o.G==3){var c=o.U++,d=fn(o.I);if(we(d,"SID",o.K),we(d,"RID",c),we(d,"TYPE","terminate"),_s(o,d),c=new zn(o,o.j,c),c.L=2,c.v=Xo(fn(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&a.Image&&(new Image().src=c.v,d=!0),d||(c.g=yp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),qo(c)}_p(o)}function tl(o){o.g&&(Fu(o),o.g.cancel(),o.g=null)}function cp(o){tl(o),o.u&&(a.clearTimeout(o.u),o.u=null),rl(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&a.clearTimeout(o.s),o.s=null)}function nl(o){if(!$f(o.h)&&!o.s){o.s=!0;var c=o.Ga;Vt||N(),V||(Vt(),V=!0),Y.add(c,o),o.B=0}}function $w(o,c){return Gf(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=as(m(o.Ga,o,c),mp(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const x=new zn(this,this.j,o);let D=this.o;if(this.S&&(D?(D=_(D),S(D,this.S)):D=this.S),this.m!==null||this.O||(x.H=D,D=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var f=this.i[d];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=dp(this,x,c),d=fn(this.I),we(d,"RID",o),we(d,"CVER",22),this.D&&we(d,"X-HTTP-Session-Id",this.D),_s(this,d),D&&(this.O?c="headers="+encodeURIComponent(String(rp(D)))+"&"+c:this.m&&Mu(d,this.m,D)),Du(this.h,x),this.Ua&&we(d,"TYPE","init"),this.P?(we(d,"$req",c),we(d,"SID","null"),x.T=!0,Pu(x,d,null)):Pu(x,d,c),this.G=2}}else this.G==3&&(o?hp(this,o):this.i.length==0||$f(this.h)||hp(this))};function hp(o,c){var d;c?d=c.l:d=o.U++;const f=fn(o.I);we(f,"SID",o.K),we(f,"RID",d),we(f,"AID",o.T),_s(o,f),o.m&&o.o&&Mu(f,o.m,o.o),d=new zn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),c&&(o.i=c.D.concat(o.i)),c=dp(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Du(o.h,d),Pu(d,f,c)}function _s(o,c){o.H&&B(o.H,function(d,f){we(c,f,d)}),o.l&&Qf({},function(d,f){we(c,f,d)})}function dp(o,c,d){d=Math.min(o.i.length,d);var f=o.l?m(o.l.Na,o.l,o):null;e:{var x=o.i;let D=-1;for(;;){const j=["count="+d];D==-1?0<d?(D=x[0].g,j.push("ofs="+D)):D=0:j.push("ofs="+D);let ge=!0;for(let Ge=0;Ge<d;Ge++){let le=x[Ge].g;const Je=x[Ge].map;if(le-=D,0>le)D=Math.max(0,x[Ge].g-100),ge=!1;else try{Bw(Je,j,"req"+le+"_")}catch{f&&f(Je)}}if(ge){f=j.join("&");break e}}}return o=o.i.splice(0,d),c.D=o,f}function fp(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Vt||N(),V||(Vt(),V=!0),Y.add(c,o),o.v=0}}function bu(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=as(m(o.Fa,o),mp(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,pp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=as(m(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),tl(this),pp(this))};function Fu(o){o.A!=null&&(a.clearTimeout(o.A),o.A=null)}function pp(o){o.g=new zn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=fn(o.qa);we(c,"RID","rpc"),we(c,"SID",o.K),we(c,"AID",o.T),we(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&we(c,"TO",o.ja),we(c,"TYPE","xmlhttp"),_s(o,c),o.m&&o.o&&Mu(c,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Xo(fn(c)),d.m=null,d.P=!0,Bf(d,o)}t.Za=function(){this.C!=null&&(this.C=null,tl(this),bu(this),st(19))};function rl(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function gp(o,c){var d=null;if(o.g==c){rl(o),Fu(o),o.g=null;var f=2}else if(Ou(o.h,c))d=c.D,Kf(o.h,c),f=1;else return;if(o.G!=0){if(c.o)if(f==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var x=o.B;f=Tu(),$e(f,new Uf(f,d)),nl(o)}else fp(o);else if(x=c.s,x==3||x==0&&0<c.X||!(f==1&&$w(o,c)||f==2&&bu(o)))switch(d&&0<d.length&&(c=o.h,c.i=c.i.concat(d)),x){case 1:Nr(o,5);break;case 4:Nr(o,10);break;case 3:Nr(o,6);break;default:Nr(o,2)}}}function mp(o,c){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*c}function Nr(o,c){if(o.j.info("Error code "+c),c==2){var d=m(o.fb,o),f=o.Xa;const x=!f;f=new Rr(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Qo(f,"https"),Xo(f),x?Uw(f.toString(),d):jw(f.toString(),d)}else st(2);o.G=0,o.l&&o.l.sa(c),_p(o),cp(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function _p(o){if(o.G=0,o.ka=[],o.l){const c=qf(o.h);(c.length!=0||o.i.length!=0)&&(L(o.ka,c),L(o.ka,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.ra()}}function vp(o,c,d){var f=d instanceof Rr?fn(d):new Rr(d);if(f.g!="")c&&(f.g=c+"."+f.g),Yo(f,f.s);else{var x=a.location;f=x.protocol,c=c?c+"."+x.hostname:x.hostname,x=+x.port;var D=new Rr(null);f&&Qo(D,f),c&&(D.g=c),x&&Yo(D,x),d&&(D.l=d),f=D}return d=o.D,c=o.ya,d&&c&&we(f,d,c),we(f,"VER",o.la),_s(o,f),f}function yp(o,c,d){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new xe(new Jo({eb:d})):new xe(o.pa),c.Ha(o.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function wp(){}t=wp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ot(o,c){Le.call(this),this.g=new up(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!y(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!y(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new si(this)}T(Ot,Le),Ot.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ot.prototype.close=function(){Lu(this.g)},Ot.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Eu(o),o=d);c.i.push(new Nw(c.Ya++,o)),c.G==3&&nl(c)},Ot.prototype.N=function(){this.g.l=null,delete this.j,Lu(this.g),delete this.g,Ot.aa.N.call(this)};function Ep(o){Cu.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}T(Ep,Cu);function Sp(){Iu.call(this),this.status=1}T(Sp,Iu);function si(o){this.g=o}T(si,wp),si.prototype.ua=function(){$e(this.g,"a")},si.prototype.ta=function(o){$e(this.g,new Ep(o))},si.prototype.sa=function(o){$e(this.g,new Sp)},si.prototype.ra=function(){$e(this.g,"b")},Ot.prototype.send=Ot.prototype.o,Ot.prototype.open=Ot.prototype.m,Ot.prototype.close=Ot.prototype.close,ku.NO_ERROR=0,ku.TIMEOUT=8,ku.HTTP_ERROR=6,kw.COMPLETE="complete",Ew.EventType=os,os.OPEN="a",os.CLOSE="b",os.ERROR="c",os.MESSAGE="d",Le.prototype.listen=Le.prototype.K,xe.prototype.listenOnce=xe.prototype.L,xe.prototype.getLastError=xe.prototype.Ka,xe.prototype.getLastErrorCode=xe.prototype.Ba,xe.prototype.getStatus=xe.prototype.Z,xe.prototype.getResponseJson=xe.prototype.Oa,xe.prototype.getResponseText=xe.prototype.oa,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Ha}).apply(typeof Cl<"u"?Cl:typeof self<"u"?self:typeof window<"u"?window:{});const om="@firebase/firestore";/**
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
 */class Tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
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
 */let au="10.14.0";/**
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
 */const Ca=new nu("@firebase/firestore");function Yt(t,...e){if(Ca.logLevel<=ce.DEBUG){const n=e.map(n0);Ca.debug(`Firestore (${au}): ${t}`,...n)}}function t0(t,...e){if(Ca.logLevel<=ce.ERROR){const n=e.map(n0);Ca.error(`Firestore (${au}): ${t}`,...n)}}function n0(t){if(typeof t=="string")return t;try{/**
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
 */function r0(t="Unexpected state"){const e=`FIRESTORE (${au}) INTERNAL ASSERTION FAILED: `+t;throw t0(e),new Error(e)}function Hs(t,e){t||r0()}/**
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
 */const mt={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class _t extends Fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $s{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Z1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ek{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Tt.UNAUTHENTICATED))}shutdown(){}}class tk{constructor(e){this.t=e,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Hs(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new $s;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new $s,e.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{Yt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(Yt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new $s)}},0),l()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Yt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Hs(typeof r.accessToken=="string"),new Z1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Hs(e===null||typeof e=="string"),new Tt(e)}}class nk{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class rk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new nk(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ik{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Hs(this.o===void 0);const r=s=>{s.error!=null&&Yt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const l=s.token!==this.R;return this.R=s.token,Yt("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Yt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Yt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Hs(typeof n.token=="string"),this.R=n.token,new ik(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function ok(t){return t.name==="IndexedDbTransactionError"}class Ia{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ia("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ia&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var lm,se;(se=lm||(lm={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new e0([4294967295,4294967295],0);function vc(){return typeof document<"u"?document:null}/**
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
 */class lk{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&Yt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Qd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new $s,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const l=Date.now()+r,a=new Qd(e,n,l,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _t(mt.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var am,um;(um=am||(am={})).ea="default",um.Cache="cache";/**
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
 */function ak(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const cm=new Map;function uk(t,e,n,r){if(e===!0&&r===!0)throw new _t(mt.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
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
 */class hm{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new _t(mt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new _t(mt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ak((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new _t(mt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new _t(mt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new _t(mt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ck{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hm({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new _t(mt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new _t(mt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hm(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ek;switch(r.type){case"firstParty":return new rk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new _t(mt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=cm.get(n);r&&(Yt("ComponentProvider","Removing Datastore"),cm.delete(n),r.terminate())}(this),Promise.resolve()}}/**
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
 */class dm{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new lk(this,"async_queue_retry"),this.Vu=()=>{const r=vc();r&&Yt("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=vc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=vc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new $s;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ok(e))throw e;Yt("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(l){let a=l.message||"";return l.stack&&(a=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),a}(r);throw t0("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Qd.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&r0()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}/**
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
 */const hk=-1;class dk extends ck{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new dm,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new dm(e),this._firestoreClient=void 0,await e}}}function fk(t,e,n){n||(n="(default)");const r=ru(t,"firestore");if(r.isInitialized(n)){const i=r.getImmediate({identifier:n}),s=r.getOptions(n);if(mo(s,e))return i;throw new _t(mt.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new _t(mt.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new _t(mt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:n})}(function(e,n=!0){(function(i){au=i})(Xr),Hr(new _r("firestore",(r,{instanceIdentifier:i,options:s})=>{const l=r.getProvider("app").getImmediate(),a=new dk(new tk(r.getProvider("auth-internal")),new sk(r.getProvider("app-check-internal")),function(h,g){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new _t(mt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ia(h.options.projectId,g)}(l,i),l);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),un(om,"4.7.3",e),un(om,"4.7.3","esm2017")})();var fm={};const pm="@firebase/database",gm="1.0.8";/**
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
 */let i0="";function pk(t){i0=t}/**
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
 */class gk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ue(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:go(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class mk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return dn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const s0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new gk(e)}}catch{}return new mk},br=s0("localStorage"),_k=s0("sessionStorage");/**
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
 */const Oi=new nu("@firebase/database"),vk=function(){let t=1;return function(){return t++}}(),o0=function(t){const e=$C(t),n=new BC;n.update(e);const r=n.digest();return Fd.encodeByteArray(r)},Uo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Uo.apply(null,r):typeof r=="object"?e+=Ue(r):e+=r,e+=" "}return e};let Gs=null,mm=!0;const yk=function(t,e){F(!0,"Can't turn on custom loggers persistently."),Oi.logLevel=ce.VERBOSE,Gs=Oi.log.bind(Oi)},qe=function(...t){if(mm===!0&&(mm=!1,Gs===null&&_k.get("logging_enabled")===!0&&yk()),Gs){const e=Uo.apply(null,t);Gs(e)}},jo=function(t){return function(...e){qe(t,...e)}},Ah=function(...t){const e="FIREBASE INTERNAL ERROR: "+Uo(...t);Oi.error(e)},Ln=function(...t){const e=`FIREBASE FATAL ERROR: ${Uo(...t)}`;throw Oi.error(e),new Error(e)},ut=function(...t){const e="FIREBASE WARNING: "+Uo(...t);Oi.warn(e)},wk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ut("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Yd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Ek=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Vi="[MIN_NAME]",Gr="[MAX_NAME]",Jr=function(t,e){if(t===e)return 0;if(t===Vi||e===Gr)return-1;if(e===Vi||t===Gr)return 1;{const n=_m(t),r=_m(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Sk=function(t,e){return t===e?0:t<e?-1:1},ks=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ue(e))},Xd=function(t){if(typeof t!="object"||t===null)return Ue(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ue(e[r]),n+=":",n+=Xd(t[e[r]]);return n+="}",n},l0=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Xe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const a0=function(t){F(!Yd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,l,a,u;t===0?(s=0,l=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,l=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,l=Math.round(t/Math.pow(2,1-r-n))));const h=[];for(u=n;u;u-=1)h.push(l%2?1:0),l=Math.floor(l/2);for(u=e;u;u-=1)h.push(s%2?1:0),s=Math.floor(s/2);h.push(i?1:0),h.reverse();const g=h.join("");let p="";for(u=0;u<64;u+=8){let m=parseInt(g.substr(u,8),2).toString(16);m.length===1&&(m="0"+m),p=p+m}return p.toLowerCase()},Ck=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ik=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Tk(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const kk=new RegExp("^-?(0*)\\d{1,10}$"),Rk=-2147483648,Nk=2147483647,_m=function(t){if(kk.test(t)){const e=Number(t);if(e>=Rk&&e<=Nk)return e}return null},Zi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ut("Exception was thrown by user callback.",n),e},Math.floor(0))}},Pk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ks=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Ak{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ut(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class xk{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(qe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ut(e)}}class Wl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Wl.OWNER="owner";/**
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
 */const Jd="5",u0="v",c0="s",h0="r",d0="f",f0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,p0="ls",g0="p",xh="ac",m0="websocket",_0="long_polling";/**
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
 */class v0{constructor(e,n,r,i,s=!1,l="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=l,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=br.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&br.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Ok(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function y0(t,e,n){F(typeof e=="string","typeof type must == string"),F(typeof n=="object","typeof params must == object");let r;if(e===m0)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===_0)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ok(t)&&(n.ns=t.namespace);const i=[];return Xe(n,(s,l)=>{i.push(s+"="+l)}),r+i.join("&")}/**
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
 */class Dk{constructor(){this.counters_={}}incrementCounter(e,n=1){dn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return SC(this.counters_)}}/**
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
 */const yc={},wc={};function Zd(t){const e=t.toString();return yc[e]||(yc[e]=new Dk),yc[e]}function Mk(t,e){const n=t.toString();return wc[n]||(wc[n]=e()),wc[n]}/**
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
 */class Lk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Zi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const vm="start",bk="close",Fk="pLPCommand",Uk="pRTLPCB",w0="id",E0="pw",S0="ser",jk="cb",zk="seg",Bk="ts",Vk="d",Wk="dframe",C0=1870,I0=30,Hk=C0-I0,$k=25e3,Gk=3e4;class Si{constructor(e,n,r,i,s,l,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=l,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=jo(e),this.stats_=Zd(n),this.urlFn=u=>(this.appCheckToken&&(u[xh]=this.appCheckToken),y0(n,_0,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Lk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Gk)),Ek(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ef((...s)=>{const[l,a,u,h,g]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,l===vm)this.id=a,this.password=u;else if(l===bk)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+l)},(...s)=>{const[l,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(l,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[vm]="t",r[S0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[jk]=this.scriptTagHolder.uniqueCallbackIdentifier),r[u0]=Jd,this.transportSessionId&&(r[c0]=this.transportSessionId),this.lastSessionId&&(r[p0]=this.lastSessionId),this.applicationId&&(r[g0]=this.applicationId),this.appCheckToken&&(r[xh]=this.appCheckToken),typeof location<"u"&&location.hostname&&f0.test(location.hostname)&&(r[h0]=d0);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Si.forceAllow_=!0}static forceDisallow(){Si.forceDisallow_=!0}static isAvailable(){return Si.forceAllow_?!0:!Si.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ck()&&!Ik()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ay(n),i=l0(r,Hk);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Wk]="t",r[w0]=e,r[E0]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ue(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ef{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=vk(),window[Fk+this.uniqueCallbackIdentifier]=e,window[Uk+this.uniqueCallbackIdentifier]=n,this.myIFrame=ef.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const l="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(l),this.myIFrame.doc.close()}catch(a){qe("frame writing exception"),a.stack&&qe(a.stack),qe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||qe("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[w0]=this.myID,e[E0]=this.myPW,e[S0]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+I0+r.length<=C0;){const l=this.pendingSegs.shift();r=r+"&"+zk+i+"="+l.seg+"&"+Bk+i+"="+l.ts+"&"+Vk+i+"="+l.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor($k)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{qe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const Kk=16384,qk=45e3;let Ta=null;typeof MozWebSocket<"u"?Ta=MozWebSocket:typeof WebSocket<"u"&&(Ta=WebSocket);class Qt{constructor(e,n,r,i,s,l,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=jo(this.connId),this.stats_=Zd(n),this.connURL=Qt.connectionURL_(n,l,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const l={};return l[u0]=Jd,typeof location<"u"&&location.hostname&&f0.test(location.hostname)&&(l[h0]=d0),n&&(l[c0]=n),r&&(l[p0]=r),i&&(l[xh]=i),s&&(l[g0]=s),y0(e,m0,l)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,br.set("previous_websocket_failure",!0);try{let r;DC(),this.mySock=new Ta(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Qt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ta!==null&&!Qt.forceDisallow_}static previouslyFailed(){return br.isInMemoryStorage||br.get("previous_websocket_failure")===!0}markConnectionHealthy(){br.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=go(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(F(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=l0(n,Kk);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(qk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Qt.responsesRequiredToBeHealthy=2;Qt.healthyTimeout=3e4;/**
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
 */class yo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Si,Qt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Qt&&Qt.isAvailable();let r=n&&!Qt.previouslyFailed();if(e.webSocketOnly&&(n||ut("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Qt];else{const i=this.transports_=[];for(const s of yo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);yo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}yo.globalTransportInitialized_=!1;/**
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
 */const Qk=6e4,Yk=5e3,Xk=10*1024,Jk=100*1024,Ec="t",ym="d",Zk="s",wm="r",eR="e",Em="o",Sm="a",Cm="n",Im="p",tR="h";class nR{constructor(e,n,r,i,s,l,a,u,h,g){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=l,this.onReady_=a,this.onDisconnect_=u,this.onKill_=h,this.lastSessionId=g,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=jo("c:"+this.id+":"),this.transportManager_=new yo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ks(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Jk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Xk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ec in e){const n=e[Ec];n===Sm?this.upgradeIfSecondaryHealthy_():n===wm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Em&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ks("t",e),r=ks("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Im,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Sm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Cm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ks("t",e),r=ks("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ks(Ec,e);if(ym in e){const r=e[ym];if(n===tR){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Cm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Zk?this.onConnectionShutdown_(r):n===wm?this.onReset_(r):n===eR?Ah("Server Error: "+r):n===Em?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ah("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Jd!==r&&ut("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ks(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Qk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ks(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Yk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Im,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(br.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class T0{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class k0{constructor(e){this.allowedEvents_=e,this.listeners_={},F(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){F(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class ka extends k0{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!jd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ka}getInitialEvent(e){return F(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Tm=32,km=768;class fe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ae(){return new fe("")}function ee(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function yr(t){return t.pieces_.length-t.pieceNum_}function ve(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new fe(t.pieces_,e)}function tf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function rR(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function wo(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function R0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new fe(e,0)}function Ne(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof fe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new fe(n,0)}function re(t){return t.pieceNum_>=t.pieces_.length}function lt(t,e){const n=ee(t),r=ee(e);if(n===null)return e;if(n===r)return lt(ve(t),ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function iR(t,e){const n=wo(t,0),r=wo(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Jr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function nf(t,e){if(yr(t)!==yr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function bt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(yr(t)>yr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class sR{constructor(e,n){this.errorPrefix_=n,this.parts_=wo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=tu(this.parts_[r]);N0(this)}}function oR(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=tu(e),N0(t)}function lR(t){const e=t.parts_.pop();t.byteLength_-=tu(e),t.parts_.length>0&&(t.byteLength_-=1)}function N0(t){if(t.byteLength_>km)throw new Error(t.errorPrefix_+"has a key path longer than "+km+" bytes ("+t.byteLength_+").");if(t.parts_.length>Tm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Tm+") or object contains a cycle "+Or(t))}function Or(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class rf extends k0{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new rf}getInitialEvent(e){return F(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Rs=1e3,aR=60*5*1e3,Rm=30*1e3,uR=1.3,cR=3e4,hR="server_kill",Nm=3;class Rn extends T0{constructor(e,n,r,i,s,l,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=l,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=Rn.nextPersistentConnectionId_++,this.log_=jo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Rs,this.maxReconnectDelay_=aR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");rf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ka.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ue(s)),F(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Do,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:l=>{const a=l.d;l.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,l=e._path.toString();this.log_("Listen called for "+l+" "+s),this.listens.has(l)||this.listens.set(l,new Map),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),F(!this.listens.get(l).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(l).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},l="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(l,s,a=>{const u=a.d,h=a.s;Rn.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),h!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(h,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&dn(e,"w")){const r=Bi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ut(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||zC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=jC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,l=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,l))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},l="n";i&&(s.q=r,s.t=i),this.sendRequest(l,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,l=>{i&&setTimeout(()=>{i(l.s,l.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const l={p:n,d:r};s!==void 0&&(l.h=s),this.outstandingPuts_.push({action:e,request:l,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ue(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ah("Unrecognized action received from server: "+Ue(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){F(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Rs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Rs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>cR&&(this.reconnectDelay_=Rs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*uR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Rn.nextConnectionId_++,s=this.lastSessionId;let l=!1,a=null;const u=function(){a?a.close():(l=!0,r())},h=function(p){F(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(p)};this.realtime_={close:u,sendRequest:h};const g=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,m]=await Promise.all([this.authTokenProvider_.getToken(g),this.appCheckTokenProvider_.getToken(g)]);l?qe("getToken() completed but was canceled"):(qe("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=m&&m.token,a=new nR(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,P=>{ut(P+" ("+this.repoInfo_.toString()+")"),this.interrupt(hR)},s))}catch(p){this.log_("Failed to get token: "+p),l||(this.repoInfo_.nodeAdmin&&ut(p),u())}}}interrupt(e){qe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){qe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Eh(this.interruptReasons_)&&(this.reconnectDelay_=Rs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Xd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new fe(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){qe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Nm&&(this.reconnectDelay_=Rm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){qe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Nm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+i0.replace(/\./g,"-")]=1,jd()?e["framework.cordova"]=1:fy()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ka.getInstance().currentlyOnline();return Eh(this.interruptReasons_)&&e}}Rn.nextPersistentConnectionId_=0;Rn.nextConnectionId_=0;/**
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
 */class uu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new te(Vi,e),i=new te(Vi,n);return this.compare(r,i)!==0}minPost(){return te.MIN}}/**
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
 */let Il;class P0 extends uu{static get __EMPTY_NODE(){return Il}static set __EMPTY_NODE(e){Il=e}compare(e,n){return Jr(e.name,n.name)}isDefinedOn(e){throw Yi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return te.MIN}maxPost(){return new te(Gr,Il)}makePost(e,n){return F(typeof e=="string","KeyIndex indexValue must always be a string."),new te(e,Il)}toString(){return".key"}}const Di=new P0;/**
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
 */class Tl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let l=1;for(;!e.isEmpty();)if(e=e,l=n?r(e.key,n):1,i&&(l*=-1),l<0)this.isReverse_?e=e.left:e=e.right;else if(l===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class We{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??We.RED,this.left=i??yt.EMPTY_NODE,this.right=s??yt.EMPTY_NODE}copy(e,n,r,i,s){return new We(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return yt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return yt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}We.RED=!0;We.BLACK=!1;class dR{copy(e,n,r,i,s){return this}insert(e,n,r){return new We(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class yt{constructor(e,n=yt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new yt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,We.BLACK,null,null))}remove(e){return new yt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,We.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Tl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Tl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Tl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Tl(this.root_,null,this.comparator_,!0,e)}}yt.EMPTY_NODE=new dR;/**
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
 */function fR(t,e){return Jr(t.name,e.name)}function sf(t,e){return Jr(t,e)}/**
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
 */let Oh;function pR(t){Oh=t}const A0=function(t){return typeof t=="number"?"number:"+a0(t):"string:"+t},x0=function(t){if(t.isLeafNode()){const e=t.val();F(typeof e=="string"||typeof e=="number"||typeof e=="object"&&dn(e,".sv"),"Priority must be a string or number.")}else F(t===Oh||t.isEmpty(),"priority of unexpected type.");F(t===Oh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Pm;class Be{constructor(e,n=Be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,F(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),x0(this.priorityNode_)}static set __childrenNodeConstructor(e){Pm=e}static get __childrenNodeConstructor(){return Pm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return re(e)?this:ee(e)===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ee(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(F(r!==".priority"||yr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Be.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+A0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=a0(this.value_):e+=this.value_,this.lazyHash_=o0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Be.__childrenNodeConstructor?-1:(F(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Be.VALUE_TYPE_ORDER.indexOf(n),s=Be.VALUE_TYPE_ORDER.indexOf(r);return F(i>=0,"Unknown leaf type: "+n),F(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let O0,D0;function gR(t){O0=t}function mR(t){D0=t}class _R extends uu{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Jr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return te.MIN}maxPost(){return new te(Gr,new Be("[PRIORITY-POST]",D0))}makePost(e,n){const r=O0(e);return new te(n,new Be("[PRIORITY-POST]",r))}toString(){return".priority"}}const Pe=new _R;/**
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
 */const vR=Math.log(2);class yR{constructor(e){const n=s=>parseInt(Math.log(s)/vR,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ra=function(t,e,n,r){t.sort(e);const i=function(u,h){const g=h-u;let p,m;if(g===0)return null;if(g===1)return p=t[u],m=n?n(p):p,new We(m,p.node,We.BLACK,null,null);{const P=parseInt(g/2,10)+u,T=i(u,P),O=i(P+1,h);return p=t[P],m=n?n(p):p,new We(m,p.node,We.BLACK,T,O)}},s=function(u){let h=null,g=null,p=t.length;const m=function(T,O){const L=p-T,C=p;p-=T;const y=i(L+1,C),k=t[L],M=n?n(k):k;P(new We(M,k.node,O,null,y))},P=function(T){h?(h.left=T,h=T):(g=T,h=T)};for(let T=0;T<u.count;++T){const O=u.nextBitIsOne(),L=Math.pow(2,u.count-(T+1));O?m(L,We.BLACK):(m(L,We.BLACK),m(L,We.RED))}return g},l=new yR(t.length),a=s(l);return new yt(r||e,a)};/**
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
 */let Sc;const ai={};class Tn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return F(ai&&Pe,"ChildrenNode.ts has not been loaded"),Sc=Sc||new Tn({".priority":ai},{".priority":Pe}),Sc}get(e){const n=Bi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof yt?n:null}hasIndex(e){return dn(this.indexSet_,e.toString())}addIndex(e,n){F(e!==Di,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(te.Wrap);let l=s.getNext();for(;l;)i=i||e.isDefinedOn(l.node),r.push(l),l=s.getNext();let a;i?a=Ra(r,e.getCompare()):a=ai;const u=e.toString(),h=Object.assign({},this.indexSet_);h[u]=e;const g=Object.assign({},this.indexes_);return g[u]=a,new Tn(g,h)}addToIndexes(e,n){const r=ma(this.indexes_,(i,s)=>{const l=Bi(this.indexSet_,s);if(F(l,"Missing index implementation for "+s),i===ai)if(l.isDefinedOn(e.node)){const a=[],u=n.getIterator(te.Wrap);let h=u.getNext();for(;h;)h.name!==e.name&&a.push(h),h=u.getNext();return a.push(e),Ra(a,l.getCompare())}else return ai;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new te(e.name,a))),u.insert(e,e.node)}});return new Tn(r,this.indexSet_)}removeFromIndexes(e,n){const r=ma(this.indexes_,i=>{if(i===ai)return i;{const s=n.get(e.name);return s?i.remove(new te(e.name,s)):i}});return new Tn(r,this.indexSet_)}}/**
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
 */let Ns;class q{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&x0(this.priorityNode_),this.children_.isEmpty()&&F(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ns||(Ns=new q(new yt(sf),null,Tn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ns}updatePriority(e){return this.children_.isEmpty()?this:new q(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ns:n}}getChild(e){const n=ee(e);return n===null?this:this.getImmediateChild(n).getChild(ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(F(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new te(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const l=i.isEmpty()?Ns:this.priorityNode_;return new q(i,l,s)}}updateChild(e,n){const r=ee(e);if(r===null)return n;{F(ee(e)!==".priority"||yr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ve(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Pe,(l,a)=>{n[l]=a.val(e),r++,s&&q.INTEGER_REGEXP_.test(l)?i=Math.max(i,Number(l)):s=!1}),!e&&s&&i<2*r){const l=[];for(const a in n)l[a]=n[a];return l}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+A0(this.getPriority().val())+":"),this.forEachChild(Pe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":o0(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new te(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new te(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new te(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,te.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,te.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zo?-1:0}withIndex(e){if(e===Di||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new q(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Di||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Pe),i=n.getIterator(Pe);let s=r.getNext(),l=i.getNext();for(;s&&l;){if(s.name!==l.name||!s.node.equals(l.node))return!1;s=r.getNext(),l=i.getNext()}return s===null&&l===null}else return!1;else return!1}}resolveIndex_(e){return e===Di?null:this.indexMap_.get(e.toString())}}q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class wR extends q{constructor(){super(new yt(sf),q.EMPTY_NODE,Tn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return q.EMPTY_NODE}isEmpty(){return!1}}const zo=new wR;Object.defineProperties(te,{MIN:{value:new te(Vi,q.EMPTY_NODE)},MAX:{value:new te(Gr,zo)}});P0.__EMPTY_NODE=q.EMPTY_NODE;Be.__childrenNodeConstructor=q;pR(zo);mR(zo);/**
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
 */const ER=!0;function Fe(t,e=null){if(t===null)return q.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),F(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Be(n,Fe(e))}if(!(t instanceof Array)&&ER){const n=[];let r=!1;if(Xe(t,(l,a)=>{if(l.substring(0,1)!=="."){const u=Fe(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new te(l,u)))}}),n.length===0)return q.EMPTY_NODE;const s=Ra(n,fR,l=>l.name,sf);if(r){const l=Ra(n,Pe.getCompare());return new q(s,Fe(e),new Tn({".priority":l},{".priority":Pe}))}else return new q(s,Fe(e),Tn.Default)}else{let n=q.EMPTY_NODE;return Xe(t,(r,i)=>{if(dn(t,r)&&r.substring(0,1)!=="."){const s=Fe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Fe(e))}}gR(Fe);/**
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
 */class SR extends uu{constructor(e){super(),this.indexPath_=e,F(!re(e)&&ee(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Jr(e.name,n.name):s}makePost(e,n){const r=Fe(e),i=q.EMPTY_NODE.updateChild(this.indexPath_,r);return new te(n,i)}maxPost(){const e=q.EMPTY_NODE.updateChild(this.indexPath_,zo);return new te(Gr,e)}toString(){return wo(this.indexPath_,0).join("/")}}/**
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
 */class CR extends uu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Jr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return te.MIN}maxPost(){return te.MAX}makePost(e,n){const r=Fe(e);return new te(n,r)}toString(){return".value"}}const IR=new CR;/**
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
 */function M0(t){return{type:"value",snapshotNode:t}}function Wi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Eo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function So(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function TR(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class of{constructor(e){this.index_=e}updateChild(e,n,r,i,s,l){F(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(l!=null&&(r.isEmpty()?e.hasChild(n)?l.trackChildChange(Eo(n,a)):F(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?l.trackChildChange(Wi(n,r)):l.trackChildChange(So(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Pe,(i,s)=>{n.hasChild(i)||r.trackChildChange(Eo(i,s))}),n.isLeafNode()||n.forEachChild(Pe,(i,s)=>{if(e.hasChild(i)){const l=e.getImmediateChild(i);l.equals(s)||r.trackChildChange(So(i,s,l))}else r.trackChildChange(Wi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?q.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Co{constructor(e){this.indexedFilter_=new of(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Co.getStartPost_(e),this.endPost_=Co.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,l){return this.matches(new te(n,r))||(r=q.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,l)}updateFullNode(e,n,r){n.isLeafNode()&&(n=q.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(q.EMPTY_NODE);const s=this;return n.forEachChild(Pe,(l,a)=>{s.matches(new te(l,a))||(i=i.updateImmediateChild(l,q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class kR{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Co(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,l){return this.rangedFilter_.matches(new te(n,r))||(r=q.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,l):this.fullLimitUpdateChild_(e,n,r,s,l)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=q.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let l=0;for(;s.hasNext()&&l<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),l++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(q.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let l=0;for(;s.hasNext();){const a=s.getNext();l<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?l++:i=i.updateImmediateChild(a.name,q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let l;if(this.reverse_){const p=this.index_.getCompare();l=(m,P)=>p(P,m)}else l=this.index_.getCompare();const a=e;F(a.numChildren()===this.limit_,"");const u=new te(n,r),h=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),g=this.rangedFilter_.matches(u);if(a.hasChild(n)){const p=a.getImmediateChild(n);let m=i.getChildAfterChild(this.index_,h,this.reverse_);for(;m!=null&&(m.name===n||a.hasChild(m.name));)m=i.getChildAfterChild(this.index_,m,this.reverse_);const P=m==null?1:l(m,u);if(g&&!r.isEmpty()&&P>=0)return s!=null&&s.trackChildChange(So(n,r,p)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Eo(n,p));const O=a.updateImmediateChild(n,q.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(s!=null&&s.trackChildChange(Wi(m.name,m.node)),O.updateImmediateChild(m.name,m.node)):O}}else return r.isEmpty()?e:g&&l(h,u)>=0?(s!=null&&(s.trackChildChange(Eo(h.name,h.node)),s.trackChildChange(Wi(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(h.name,q.EMPTY_NODE)):e}}/**
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
 */class lf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Pe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return F(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return F(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Vi}hasEnd(){return this.endSet_}getIndexEndValue(){return F(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return F(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Gr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return F(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Pe}copy(){const e=new lf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function RR(t){return t.loadsAllData()?new of(t.getIndex()):t.hasLimit()?new kR(t):new Co(t)}function Am(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Pe?n="$priority":t.index_===IR?n="$value":t.index_===Di?n="$key":(F(t.index_ instanceof SR,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ue(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ue(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ue(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ue(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ue(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function xm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Pe&&(e.i=t.index_.toString()),e}/**
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
 */class Na extends T0{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=jo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(F(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const l=Na.getListenId_(e,r),a={};this.listens_[l]=a;const u=Am(e._queryParams);this.restRequest_(s+".json",u,(h,g)=>{let p=g;if(h===404&&(p=null,h=null),h===null&&this.onDataUpdate_(s,p,!1,r),Bi(this.listens_,l)===a){let m;h?h===401?m="permission_denied":m="rest_error:"+h:m="ok",i(m,null)}})}unlisten(e,n){const r=Na.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Am(e._queryParams),r=e._path.toString(),i=new Do;return this.restRequest_(r+".json",n,(s,l)=>{let a=l;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const l=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Xi(n);this.log_("Sending REST request for "+l);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+l+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=go(a.responseText)}catch{ut("Failed to parse JSON response for "+l+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&ut("Got unsuccessful REST response for "+l+" Status: "+a.status),r(a.status);r=null}},a.open("GET",l,!0),a.send()})}}/**
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
 */class NR{constructor(){this.rootNode_=q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Pa(){return{value:null,children:new Map}}function L0(t,e,n){if(re(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ee(e);t.children.has(r)||t.children.set(r,Pa());const i=t.children.get(r);e=ve(e),L0(i,e,n)}}function Dh(t,e,n){t.value!==null?n(e,t.value):PR(t,(r,i)=>{const s=new fe(e.toString()+"/"+r);Dh(i,s,n)})}function PR(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class AR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Xe(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Om=10*1e3,xR=30*1e3,OR=5*60*1e3;class DR{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new AR(e);const r=Om+(xR-Om)*Math.random();Ks(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Xe(e,(i,s)=>{s>0&&dn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ks(this.reportStats_.bind(this),Math.floor(Math.random()*2*OR))}}/**
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
 */var Xt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xt||(Xt={}));function af(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function uf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function cf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Aa{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Xt.ACK_USER_WRITE,this.source=af()}operationForChild(e){if(re(this.path)){if(this.affectedTree.value!=null)return F(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new fe(e));return new Aa(ae(),n,this.revert)}}else return F(ee(this.path)===e,"operationForChild called for unrelated child."),new Aa(ve(this.path),this.affectedTree,this.revert)}}/**
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
 */class Io{constructor(e,n){this.source=e,this.path=n,this.type=Xt.LISTEN_COMPLETE}operationForChild(e){return re(this.path)?new Io(this.source,ae()):new Io(this.source,ve(this.path))}}/**
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
 */class Kr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Xt.OVERWRITE}operationForChild(e){return re(this.path)?new Kr(this.source,ae(),this.snap.getImmediateChild(e)):new Kr(this.source,ve(this.path),this.snap)}}/**
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
 */class Hi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Xt.MERGE}operationForChild(e){if(re(this.path)){const n=this.children.subtree(new fe(e));return n.isEmpty()?null:n.value?new Kr(this.source,ae(),n.value):new Hi(this.source,ae(),n)}else return F(ee(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Hi(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class wr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(re(e))return this.isFullyInitialized()&&!this.filtered_;const n=ee(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class MR{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function LR(t,e,n,r){const i=[],s=[];return e.forEach(l=>{l.type==="child_changed"&&t.index_.indexedValueChanged(l.oldSnap,l.snapshotNode)&&s.push(TR(l.childName,l.snapshotNode))}),Ps(t,i,"child_removed",e,r,n),Ps(t,i,"child_added",e,r,n),Ps(t,i,"child_moved",s,r,n),Ps(t,i,"child_changed",e,r,n),Ps(t,i,"value",e,r,n),i}function Ps(t,e,n,r,i,s){const l=r.filter(a=>a.type===n);l.sort((a,u)=>FR(t,a,u)),l.forEach(a=>{const u=bR(t,a,s);i.forEach(h=>{h.respondsTo(a.type)&&e.push(h.createEvent(u,t.query_))})})}function bR(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function FR(t,e,n){if(e.childName==null||n.childName==null)throw Yi("Should only compare child_ events.");const r=new te(e.childName,e.snapshotNode),i=new te(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function cu(t,e){return{eventCache:t,serverCache:e}}function qs(t,e,n,r){return cu(new wr(e,n,r),t.serverCache)}function b0(t,e,n,r){return cu(t.eventCache,new wr(e,n,r))}function xa(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function qr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Cc;const UR=()=>(Cc||(Cc=new yt(Sk)),Cc);class _e{constructor(e,n=UR()){this.value=e,this.children=n}static fromObject(e){let n=new _e(null);return Xe(e,(r,i)=>{n=n.set(new fe(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ae(),value:this.value};if(re(e))return null;{const r=ee(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ve(e),n);return s!=null?{path:Ne(new fe(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(re(e))return this;{const n=ee(e),r=this.children.get(n);return r!==null?r.subtree(ve(e)):new _e(null)}}set(e,n){if(re(e))return new _e(n,this.children);{const r=ee(e),s=(this.children.get(r)||new _e(null)).set(ve(e),n),l=this.children.insert(r,s);return new _e(this.value,l)}}remove(e){if(re(e))return this.children.isEmpty()?new _e(null):new _e(null,this.children);{const n=ee(e),r=this.children.get(n);if(r){const i=r.remove(ve(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new _e(null):new _e(this.value,s)}else return this}}get(e){if(re(e))return this.value;{const n=ee(e),r=this.children.get(n);return r?r.get(ve(e)):null}}setTree(e,n){if(re(e))return n;{const r=ee(e),s=(this.children.get(r)||new _e(null)).setTree(ve(e),n);let l;return s.isEmpty()?l=this.children.remove(r):l=this.children.insert(r,s),new _e(this.value,l)}}fold(e){return this.fold_(ae(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ne(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ae(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(re(e))return null;{const s=ee(e),l=this.children.get(s);return l?l.findOnPath_(ve(e),Ne(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ae(),n)}foreachOnPath_(e,n,r){if(re(e))return this;{this.value&&r(n,this.value);const i=ee(e),s=this.children.get(i);return s?s.foreachOnPath_(ve(e),Ne(n,i),r):new _e(null)}}foreach(e){this.foreach_(ae(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ne(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class en{constructor(e){this.writeTree_=e}static empty(){return new en(new _e(null))}}function Qs(t,e,n){if(re(e))return new en(new _e(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const l=lt(i,e);return s=s.updateChild(l,n),new en(t.writeTree_.set(i,s))}else{const i=new _e(n),s=t.writeTree_.setTree(e,i);return new en(s)}}}function Mh(t,e,n){let r=t;return Xe(n,(i,s)=>{r=Qs(r,Ne(e,i),s)}),r}function Dm(t,e){if(re(e))return en.empty();{const n=t.writeTree_.setTree(e,new _e(null));return new en(n)}}function Lh(t,e){return Zr(t,e)!=null}function Zr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(lt(n.path,e)):null}function Mm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Pe,(r,i)=>{e.push(new te(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new te(r,i.value))}),e}function fr(t,e){if(re(e))return t;{const n=Zr(t,e);return n!=null?new en(new _e(n)):new en(t.writeTree_.subtree(e))}}function bh(t){return t.writeTree_.isEmpty()}function $i(t,e){return F0(ae(),t.writeTree_,e)}function F0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(F(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=F0(Ne(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ne(t,".priority"),r)),n}}/**
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
 */function hu(t,e){return B0(e,t)}function jR(t,e,n,r,i){F(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Qs(t.visibleWrites,e,n)),t.lastWriteId=r}function zR(t,e,n,r){F(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Mh(t.visibleWrites,e,n),t.lastWriteId=r}function BR(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function VR(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);F(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,l=t.allWrites.length-1;for(;i&&l>=0;){const a=t.allWrites[l];a.visible&&(l>=n&&WR(a,r.path)?i=!1:bt(r.path,a.path)&&(s=!0)),l--}if(i){if(s)return HR(t),!0;if(r.snap)t.visibleWrites=Dm(t.visibleWrites,r.path);else{const a=r.children;Xe(a,u=>{t.visibleWrites=Dm(t.visibleWrites,Ne(r.path,u))})}return!0}else return!1}function WR(t,e){if(t.snap)return bt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&bt(Ne(t.path,n),e))return!0;return!1}function HR(t){t.visibleWrites=U0(t.allWrites,$R,ae()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function $R(t){return t.visible}function U0(t,e,n){let r=en.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const l=s.path;let a;if(s.snap)bt(n,l)?(a=lt(n,l),r=Qs(r,a,s.snap)):bt(l,n)&&(a=lt(l,n),r=Qs(r,ae(),s.snap.getChild(a)));else if(s.children){if(bt(n,l))a=lt(n,l),r=Mh(r,a,s.children);else if(bt(l,n))if(a=lt(l,n),re(a))r=Mh(r,ae(),s.children);else{const u=Bi(s.children,ee(a));if(u){const h=u.getChild(ve(a));r=Qs(r,ae(),h)}}}else throw Yi("WriteRecord should have .snap or .children")}}return r}function j0(t,e,n,r,i){if(!r&&!i){const s=Zr(t.visibleWrites,e);if(s!=null)return s;{const l=fr(t.visibleWrites,e);if(bh(l))return n;if(n==null&&!Lh(l,ae()))return null;{const a=n||q.EMPTY_NODE;return $i(l,a)}}}else{const s=fr(t.visibleWrites,e);if(!i&&bh(s))return n;if(!i&&n==null&&!Lh(s,ae()))return null;{const l=function(h){return(h.visible||i)&&(!r||!~r.indexOf(h.writeId))&&(bt(h.path,e)||bt(e,h.path))},a=U0(t.allWrites,l,e),u=n||q.EMPTY_NODE;return $i(a,u)}}}function GR(t,e,n){let r=q.EMPTY_NODE;const i=Zr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Pe,(s,l)=>{r=r.updateImmediateChild(s,l)}),r;if(n){const s=fr(t.visibleWrites,e);return n.forEachChild(Pe,(l,a)=>{const u=$i(fr(s,new fe(l)),a);r=r.updateImmediateChild(l,u)}),Mm(s).forEach(l=>{r=r.updateImmediateChild(l.name,l.node)}),r}else{const s=fr(t.visibleWrites,e);return Mm(s).forEach(l=>{r=r.updateImmediateChild(l.name,l.node)}),r}}function KR(t,e,n,r,i){F(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ne(e,n);if(Lh(t.visibleWrites,s))return null;{const l=fr(t.visibleWrites,s);return bh(l)?i.getChild(n):$i(l,i.getChild(n))}}function qR(t,e,n,r){const i=Ne(e,n),s=Zr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const l=fr(t.visibleWrites,i);return $i(l,r.getNode().getImmediateChild(n))}else return null}function QR(t,e){return Zr(t.visibleWrites,e)}function YR(t,e,n,r,i,s,l){let a;const u=fr(t.visibleWrites,e),h=Zr(u,ae());if(h!=null)a=h;else if(n!=null)a=$i(u,n);else return[];if(a=a.withIndex(l),!a.isEmpty()&&!a.isLeafNode()){const g=[],p=l.getCompare(),m=s?a.getReverseIteratorFrom(r,l):a.getIteratorFrom(r,l);let P=m.getNext();for(;P&&g.length<i;)p(P,r)!==0&&g.push(P),P=m.getNext();return g}else return[]}function XR(){return{visibleWrites:en.empty(),allWrites:[],lastWriteId:-1}}function Oa(t,e,n,r){return j0(t.writeTree,t.treePath,e,n,r)}function hf(t,e){return GR(t.writeTree,t.treePath,e)}function Lm(t,e,n,r){return KR(t.writeTree,t.treePath,e,n,r)}function Da(t,e){return QR(t.writeTree,Ne(t.treePath,e))}function JR(t,e,n,r,i,s){return YR(t.writeTree,t.treePath,e,n,r,i,s)}function df(t,e,n){return qR(t.writeTree,t.treePath,e,n)}function z0(t,e){return B0(Ne(t.treePath,e),t.writeTree)}function B0(t,e){return{treePath:t,writeTree:e}}/**
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
 */class ZR{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;F(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),F(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,So(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Eo(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Wi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,So(r,e.snapshotNode,i.oldSnap));else throw Yi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class eN{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const V0=new eN;class ff{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new wr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return df(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qr(this.viewCache_),s=JR(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function tN(t){return{filter:t}}function nN(t,e){F(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),F(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function rN(t,e,n,r,i){const s=new ZR;let l,a;if(n.type===Xt.OVERWRITE){const h=n;h.source.fromUser?l=Fh(t,e,h.path,h.snap,r,i,s):(F(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered()&&!re(h.path),l=Ma(t,e,h.path,h.snap,r,i,a,s))}else if(n.type===Xt.MERGE){const h=n;h.source.fromUser?l=sN(t,e,h.path,h.children,r,i,s):(F(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered(),l=Uh(t,e,h.path,h.children,r,i,a,s))}else if(n.type===Xt.ACK_USER_WRITE){const h=n;h.revert?l=aN(t,e,h.path,r,i,s):l=oN(t,e,h.path,h.affectedTree,r,i,s)}else if(n.type===Xt.LISTEN_COMPLETE)l=lN(t,e,n.path,r,s);else throw Yi("Unknown operation type: "+n.type);const u=s.getChanges();return iN(e,l,u),{viewCache:l,changes:u}}function iN(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=xa(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(M0(xa(e)))}}function W0(t,e,n,r,i,s){const l=e.eventCache;if(Da(r,n)!=null)return e;{let a,u;if(re(n))if(F(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=qr(e),g=h instanceof q?h:q.EMPTY_NODE,p=hf(r,g);a=t.filter.updateFullNode(e.eventCache.getNode(),p,s)}else{const h=Oa(r,qr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const h=ee(n);if(h===".priority"){F(yr(n)===1,"Can't have a priority with additional path components");const g=l.getNode();u=e.serverCache.getNode();const p=Lm(r,n,g,u);p!=null?a=t.filter.updatePriority(g,p):a=l.getNode()}else{const g=ve(n);let p;if(l.isCompleteForChild(h)){u=e.serverCache.getNode();const m=Lm(r,n,l.getNode(),u);m!=null?p=l.getNode().getImmediateChild(h).updateChild(g,m):p=l.getNode().getImmediateChild(h)}else p=df(r,h,e.serverCache);p!=null?a=t.filter.updateChild(l.getNode(),h,p,g,i,s):a=l.getNode()}}return qs(e,a,l.isFullyInitialized()||re(n),t.filter.filtersNodes())}}function Ma(t,e,n,r,i,s,l,a){const u=e.serverCache;let h;const g=l?t.filter:t.filter.getIndexedFilter();if(re(n))h=g.updateFullNode(u.getNode(),r,null);else if(g.filtersNodes()&&!u.isFiltered()){const P=u.getNode().updateChild(n,r);h=g.updateFullNode(u.getNode(),P,null)}else{const P=ee(n);if(!u.isCompleteForPath(n)&&yr(n)>1)return e;const T=ve(n),L=u.getNode().getImmediateChild(P).updateChild(T,r);P===".priority"?h=g.updatePriority(u.getNode(),L):h=g.updateChild(u.getNode(),P,L,T,V0,null)}const p=b0(e,h,u.isFullyInitialized()||re(n),g.filtersNodes()),m=new ff(i,p,s);return W0(t,p,n,i,m,a)}function Fh(t,e,n,r,i,s,l){const a=e.eventCache;let u,h;const g=new ff(i,e,s);if(re(n))h=t.filter.updateFullNode(e.eventCache.getNode(),r,l),u=qs(e,h,!0,t.filter.filtersNodes());else{const p=ee(n);if(p===".priority")h=t.filter.updatePriority(e.eventCache.getNode(),r),u=qs(e,h,a.isFullyInitialized(),a.isFiltered());else{const m=ve(n),P=a.getNode().getImmediateChild(p);let T;if(re(m))T=r;else{const O=g.getCompleteChild(p);O!=null?tf(m)===".priority"&&O.getChild(R0(m)).isEmpty()?T=O:T=O.updateChild(m,r):T=q.EMPTY_NODE}if(P.equals(T))u=e;else{const O=t.filter.updateChild(a.getNode(),p,T,m,g,l);u=qs(e,O,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function bm(t,e){return t.eventCache.isCompleteForChild(e)}function sN(t,e,n,r,i,s,l){let a=e;return r.foreach((u,h)=>{const g=Ne(n,u);bm(e,ee(g))&&(a=Fh(t,a,g,h,i,s,l))}),r.foreach((u,h)=>{const g=Ne(n,u);bm(e,ee(g))||(a=Fh(t,a,g,h,i,s,l))}),a}function Fm(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Uh(t,e,n,r,i,s,l,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,h;re(n)?h=r:h=new _e(null).setTree(n,r);const g=e.serverCache.getNode();return h.children.inorderTraversal((p,m)=>{if(g.hasChild(p)){const P=e.serverCache.getNode().getImmediateChild(p),T=Fm(t,P,m);u=Ma(t,u,new fe(p),T,i,s,l,a)}}),h.children.inorderTraversal((p,m)=>{const P=!e.serverCache.isCompleteForChild(p)&&m.value===null;if(!g.hasChild(p)&&!P){const T=e.serverCache.getNode().getImmediateChild(p),O=Fm(t,T,m);u=Ma(t,u,new fe(p),O,i,s,l,a)}}),u}function oN(t,e,n,r,i,s,l){if(Da(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(re(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Ma(t,e,n,u.getNode().getChild(n),i,s,a,l);if(re(n)){let h=new _e(null);return u.getNode().forEachChild(Di,(g,p)=>{h=h.set(new fe(g),p)}),Uh(t,e,n,h,i,s,a,l)}else return e}else{let h=new _e(null);return r.foreach((g,p)=>{const m=Ne(n,g);u.isCompleteForPath(m)&&(h=h.set(g,u.getNode().getChild(m)))}),Uh(t,e,n,h,i,s,a,l)}}function lN(t,e,n,r,i){const s=e.serverCache,l=b0(e,s.getNode(),s.isFullyInitialized()||re(n),s.isFiltered());return W0(t,l,n,r,V0,i)}function aN(t,e,n,r,i,s){let l;if(Da(r,n)!=null)return e;{const a=new ff(r,e,i),u=e.eventCache.getNode();let h;if(re(n)||ee(n)===".priority"){let g;if(e.serverCache.isFullyInitialized())g=Oa(r,qr(e));else{const p=e.serverCache.getNode();F(p instanceof q,"serverChildren would be complete if leaf node"),g=hf(r,p)}g=g,h=t.filter.updateFullNode(u,g,s)}else{const g=ee(n);let p=df(r,g,e.serverCache);p==null&&e.serverCache.isCompleteForChild(g)&&(p=u.getImmediateChild(g)),p!=null?h=t.filter.updateChild(u,g,p,ve(n),a,s):e.eventCache.getNode().hasChild(g)?h=t.filter.updateChild(u,g,q.EMPTY_NODE,ve(n),a,s):h=u,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(l=Oa(r,qr(e)),l.isLeafNode()&&(h=t.filter.updateFullNode(h,l,s)))}return l=e.serverCache.isFullyInitialized()||Da(r,ae())!=null,qs(e,h,l,t.filter.filtersNodes())}}/**
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
 */class uN{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new of(r.getIndex()),s=RR(r);this.processor_=tN(s);const l=n.serverCache,a=n.eventCache,u=i.updateFullNode(q.EMPTY_NODE,l.getNode(),null),h=s.updateFullNode(q.EMPTY_NODE,a.getNode(),null),g=new wr(u,l.isFullyInitialized(),i.filtersNodes()),p=new wr(h,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=cu(p,g),this.eventGenerator_=new MR(this.query_)}get query(){return this.query_}}function cN(t){return t.viewCache_.serverCache.getNode()}function hN(t){return xa(t.viewCache_)}function dN(t,e){const n=qr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!re(e)&&!n.getImmediateChild(ee(e)).isEmpty())?n.getChild(e):null}function Um(t){return t.eventRegistrations_.length===0}function fN(t,e){t.eventRegistrations_.push(e)}function jm(t,e,n){const r=[];if(n){F(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const l=s.createCancelEvent(n,i);l&&r.push(l)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const l=t.eventRegistrations_[s];if(!l.matches(e))i.push(l);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function zm(t,e,n,r){e.type===Xt.MERGE&&e.source.queryId!==null&&(F(qr(t.viewCache_),"We should always have a full cache before handling merges"),F(xa(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=rN(t.processor_,i,e,n,r);return nN(t.processor_,s.viewCache),F(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,H0(t,s.changes,s.viewCache.eventCache.getNode(),null)}function pN(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Pe,(s,l)=>{r.push(Wi(s,l))}),n.isFullyInitialized()&&r.push(M0(n.getNode())),H0(t,r,n.getNode(),e)}function H0(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return LR(t.eventGenerator_,e,n,i)}/**
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
 */let La;class $0{constructor(){this.views=new Map}}function gN(t){F(!La,"__referenceConstructor has already been defined"),La=t}function mN(){return F(La,"Reference.ts has not been loaded"),La}function _N(t){return t.views.size===0}function pf(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return F(s!=null,"SyncTree gave us an op for an invalid query."),zm(s,e,n,r)}else{let s=[];for(const l of t.views.values())s=s.concat(zm(l,e,n,r));return s}}function G0(t,e,n,r,i){const s=e._queryIdentifier,l=t.views.get(s);if(!l){let a=Oa(n,i?r:null),u=!1;a?u=!0:r instanceof q?(a=hf(n,r),u=!1):(a=q.EMPTY_NODE,u=!1);const h=cu(new wr(a,u,!1),new wr(r,i,!1));return new uN(e,h)}return l}function vN(t,e,n,r,i,s){const l=G0(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,l),fN(l,n),pN(l,n)}function yN(t,e,n,r){const i=e._queryIdentifier,s=[];let l=[];const a=Er(t);if(i==="default")for(const[u,h]of t.views.entries())l=l.concat(jm(h,n,r)),Um(h)&&(t.views.delete(u),h.query._queryParams.loadsAllData()||s.push(h.query));else{const u=t.views.get(i);u&&(l=l.concat(jm(u,n,r)),Um(u)&&(t.views.delete(i),u.query._queryParams.loadsAllData()||s.push(u.query)))}return a&&!Er(t)&&s.push(new(mN())(e._repo,e._path)),{removed:s,events:l}}function K0(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function pr(t,e){let n=null;for(const r of t.views.values())n=n||dN(r,e);return n}function q0(t,e){if(e._queryParams.loadsAllData())return du(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Q0(t,e){return q0(t,e)!=null}function Er(t){return du(t)!=null}function du(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ba;function wN(t){F(!ba,"__referenceConstructor has already been defined"),ba=t}function EN(){return F(ba,"Reference.ts has not been loaded"),ba}let SN=1;class Bm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _e(null),this.pendingWriteTree_=XR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Y0(t,e,n,r,i){return jR(t.pendingWriteTree_,e,n,r,i),i?es(t,new Kr(af(),e,n)):[]}function CN(t,e,n,r){zR(t.pendingWriteTree_,e,n,r);const i=_e.fromObject(n);return es(t,new Hi(af(),e,i))}function tr(t,e,n=!1){const r=BR(t.pendingWriteTree_,e);if(VR(t.pendingWriteTree_,e)){let s=new _e(null);return r.snap!=null?s=s.set(ae(),!0):Xe(r.children,l=>{s=s.set(new fe(l),!0)}),es(t,new Aa(r.path,s,n))}else return[]}function Bo(t,e,n){return es(t,new Kr(uf(),e,n))}function IN(t,e,n){const r=_e.fromObject(n);return es(t,new Hi(uf(),e,r))}function TN(t,e){return es(t,new Io(uf(),e))}function kN(t,e,n){const r=mf(t,n);if(r){const i=_f(r),s=i.path,l=i.queryId,a=lt(s,e),u=new Io(cf(l),a);return vf(t,s,u)}else return[]}function Fa(t,e,n,r,i=!1){const s=e._path,l=t.syncPointTree_.get(s);let a=[];if(l&&(e._queryIdentifier==="default"||Q0(l,e))){const u=yN(l,e,n,r);_N(l)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const h=u.removed;if(a=u.events,!i){const g=h.findIndex(m=>m._queryParams.loadsAllData())!==-1,p=t.syncPointTree_.findOnPath(s,(m,P)=>Er(P));if(g&&!p){const m=t.syncPointTree_.subtree(s);if(!m.isEmpty()){const P=PN(m);for(let T=0;T<P.length;++T){const O=P[T],L=O.query,C=ew(t,O);t.listenProvider_.startListening(Ys(L),To(t,L),C.hashFn,C.onComplete)}}}!p&&h.length>0&&!r&&(g?t.listenProvider_.stopListening(Ys(e),null):h.forEach(m=>{const P=t.queryToTagMap.get(fu(m));t.listenProvider_.stopListening(Ys(m),P)}))}AN(t,h)}return a}function X0(t,e,n,r){const i=mf(t,r);if(i!=null){const s=_f(i),l=s.path,a=s.queryId,u=lt(l,e),h=new Kr(cf(a),u,n);return vf(t,l,h)}else return[]}function RN(t,e,n,r){const i=mf(t,r);if(i){const s=_f(i),l=s.path,a=s.queryId,u=lt(l,e),h=_e.fromObject(n),g=new Hi(cf(a),u,h);return vf(t,l,g)}else return[]}function jh(t,e,n,r=!1){const i=e._path;let s=null,l=!1;t.syncPointTree_.foreachOnPath(i,(m,P)=>{const T=lt(m,i);s=s||pr(P,T),l=l||Er(P)});let a=t.syncPointTree_.get(i);a?(l=l||Er(a),s=s||pr(a,ae())):(a=new $0,t.syncPointTree_=t.syncPointTree_.set(i,a));let u;s!=null?u=!0:(u=!1,s=q.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((P,T)=>{const O=pr(T,ae());O&&(s=s.updateImmediateChild(P,O))}));const h=Q0(a,e);if(!h&&!e._queryParams.loadsAllData()){const m=fu(e);F(!t.queryToTagMap.has(m),"View does not exist, but we have a tag");const P=xN();t.queryToTagMap.set(m,P),t.tagToQueryMap.set(P,m)}const g=hu(t.pendingWriteTree_,i);let p=vN(a,e,n,g,s,u);if(!h&&!l&&!r){const m=q0(a,e);p=p.concat(ON(t,e,m))}return p}function gf(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(l,a)=>{const u=lt(l,e),h=pr(a,u);if(h)return h});return j0(i,e,s,n,!0)}function NN(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(h,g)=>{const p=lt(h,n);r=r||pr(g,p)});let i=t.syncPointTree_.get(n);i?r=r||pr(i,ae()):(i=new $0,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,l=s?new wr(r,!0,!1):null,a=hu(t.pendingWriteTree_,e._path),u=G0(i,e,a,s?l.getNode():q.EMPTY_NODE,s);return hN(u)}function es(t,e){return J0(e,t.syncPointTree_,null,hu(t.pendingWriteTree_,ae()))}function J0(t,e,n,r){if(re(t.path))return Z0(t,e,n,r);{const i=e.get(ae());n==null&&i!=null&&(n=pr(i,ae()));let s=[];const l=ee(t.path),a=t.operationForChild(l),u=e.children.get(l);if(u&&a){const h=n?n.getImmediateChild(l):null,g=z0(r,l);s=s.concat(J0(a,u,h,g))}return i&&(s=s.concat(pf(i,t,r,n))),s}}function Z0(t,e,n,r){const i=e.get(ae());n==null&&i!=null&&(n=pr(i,ae()));let s=[];return e.children.inorderTraversal((l,a)=>{const u=n?n.getImmediateChild(l):null,h=z0(r,l),g=t.operationForChild(l);g&&(s=s.concat(Z0(g,a,u,h)))}),i&&(s=s.concat(pf(i,t,r,n))),s}function ew(t,e){const n=e.query,r=To(t,n);return{hashFn:()=>(cN(e)||q.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?kN(t,n._path,r):TN(t,n._path);{const s=Tk(i,n);return Fa(t,n,null,s)}}}}function To(t,e){const n=fu(e);return t.queryToTagMap.get(n)}function fu(t){return t._path.toString()+"$"+t._queryIdentifier}function mf(t,e){return t.tagToQueryMap.get(e)}function _f(t){const e=t.indexOf("$");return F(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new fe(t.substr(0,e))}}function vf(t,e,n){const r=t.syncPointTree_.get(e);F(r,"Missing sync point for query tag that we're tracking");const i=hu(t.pendingWriteTree_,e);return pf(r,n,i,null)}function PN(t){return t.fold((e,n,r)=>{if(n&&Er(n))return[du(n)];{let i=[];return n&&(i=K0(n)),Xe(r,(s,l)=>{i=i.concat(l)}),i}})}function Ys(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(EN())(t._repo,t._path):t}function AN(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=fu(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function xN(){return SN++}function ON(t,e,n){const r=e._path,i=To(t,e),s=ew(t,n),l=t.listenProvider_.startListening(Ys(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)F(!Er(a.value),"If we're adding a query, it shouldn't be shadowed");else{const u=a.fold((h,g,p)=>{if(!re(h)&&g&&Er(g))return[du(g).query];{let m=[];return g&&(m=m.concat(K0(g).map(P=>P.query))),Xe(p,(P,T)=>{m=m.concat(T)}),m}});for(let h=0;h<u.length;++h){const g=u[h];t.listenProvider_.stopListening(Ys(g),To(t,g))}}return l}/**
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
 */class yf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new yf(n)}node(){return this.node_}}class wf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ne(this.path_,e);return new wf(this.syncTree_,n)}node(){return gf(this.syncTree_,this.path_)}}const DN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Vm=function(t,e,n){if(!t||typeof t!="object")return t;if(F(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return MN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return LN(t[".sv"],e);F(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},MN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:F(!1,"Unexpected server value: "+t)}},LN=function(t,e,n){t.hasOwnProperty("increment")||F(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&F(!1,"Unexpected increment value: "+r);const i=e.node();if(F(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const l=i.getValue();return typeof l!="number"?r:l+r},tw=function(t,e,n,r){return Ef(e,new wf(n,t),r)},nw=function(t,e,n){return Ef(t,new yf(e),n)};function Ef(t,e,n){const r=t.getPriority().val(),i=Vm(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const l=t,a=Vm(l.getValue(),e,n);return a!==l.getValue()||i!==l.getPriority().val()?new Be(a,Fe(i)):t}else{const l=t;return s=l,i!==l.getPriority().val()&&(s=s.updatePriority(new Be(i))),l.forEachChild(Pe,(a,u)=>{const h=Ef(u,e.getImmediateChild(a),n);h!==u&&(s=s.updateImmediateChild(a,h))}),s}}/**
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
 */class Sf{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Cf(t,e){let n=e instanceof fe?e:new fe(e),r=t,i=ee(n);for(;i!==null;){const s=Bi(r.node.children,i)||{children:{},childCount:0};r=new Sf(i,r,s),n=ve(n),i=ee(n)}return r}function ts(t){return t.node.value}function rw(t,e){t.node.value=e,zh(t)}function iw(t){return t.node.childCount>0}function bN(t){return ts(t)===void 0&&!iw(t)}function pu(t,e){Xe(t.node.children,(n,r)=>{e(new Sf(n,t,r))})}function sw(t,e,n,r){n&&e(t),pu(t,i=>{sw(i,e,!0)})}function FN(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Vo(t){return new fe(t.parent===null?t.name:Vo(t.parent)+"/"+t.name)}function zh(t){t.parent!==null&&UN(t.parent,t.name,t)}function UN(t,e,n){const r=bN(n),i=dn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,zh(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,zh(t))}/**
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
 */const jN=/[\[\].#$\/\u0000-\u001F\u007F]/,zN=/[\[\].#$\u0000-\u001F\u007F]/,Ic=10*1024*1024,If=function(t){return typeof t=="string"&&t.length!==0&&!jN.test(t)},ow=function(t){return typeof t=="string"&&t.length!==0&&!zN.test(t)},BN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ow(t)},VN=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Yd(t)||t&&typeof t=="object"&&dn(t,".sv")},lw=function(t,e,n,r){r&&e===void 0||gu(eu(t,"value"),e,n)},gu=function(t,e,n){const r=n instanceof fe?new sR(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Or(r));if(typeof e=="function")throw new Error(t+"contains a function "+Or(r)+" with contents = "+e.toString());if(Yd(e))throw new Error(t+"contains "+e.toString()+" "+Or(r));if(typeof e=="string"&&e.length>Ic/3&&tu(e)>Ic)throw new Error(t+"contains a string greater than "+Ic+" utf8 bytes "+Or(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Xe(e,(l,a)=>{if(l===".value")i=!0;else if(l!==".priority"&&l!==".sv"&&(s=!0,!If(l)))throw new Error(t+" contains an invalid key ("+l+") "+Or(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);oR(r,l),gu(t,a,r),lR(r)}),i&&s)throw new Error(t+' contains ".value" child '+Or(r)+" in addition to actual children.")}},WN=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=wo(r);for(let l=0;l<s.length;l++)if(!(s[l]===".priority"&&l===s.length-1)){if(!If(s[l]))throw new Error(t+"contains an invalid key ("+s[l]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(iR);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&bt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},HN=function(t,e,n,r){const i=eu(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Xe(e,(l,a)=>{const u=new fe(l);if(gu(i,a,Ne(n,u)),tf(u)===".priority"&&!VN(a))throw new Error(i+"contains an invalid value for '"+u.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(u)}),WN(i,s)},aw=function(t,e,n,r){if(!ow(n))throw new Error(eu(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},$N=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),aw(t,e,n)},uw=function(t,e){if(ee(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},GN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!If(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!BN(n))throw new Error(eu(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class KN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function mu(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!nf(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function cw(t,e,n){mu(t,n),hw(t,r=>nf(r,e))}function zt(t,e,n){mu(t,n),hw(t,r=>bt(r,e)||bt(e,r))}function hw(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(qN(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function qN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Gs&&qe("event: "+n.toString()),Zi(r)}}}/**
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
 */const QN="repo_interrupt",YN=25;class XN{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new KN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Pa(),this.transactionQueueTree_=new Sf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function JN(t,e,n){if(t.stats_=Zd(t.repoInfo_),t.forceRestClient_||Pk())t.server_=new Na(t.repoInfo_,(r,i,s,l)=>{Wm(t,r,i,s,l)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Hm(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ue(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Rn(t.repoInfo_,e,(r,i,s,l)=>{Wm(t,r,i,s,l)},r=>{Hm(t,r)},r=>{ZN(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Mk(t.repoInfo_,()=>new DR(t.stats_,t.server_)),t.infoData_=new NR,t.infoSyncTree_=new Bm({startListening:(r,i,s,l)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=Bo(t.infoSyncTree_,r._path,u),setTimeout(()=>{l("ok")},0)),a},stopListening:()=>{}}),Tf(t,"connected",!1),t.serverSyncTree_=new Bm({startListening:(r,i,s,l)=>(t.server_.listen(r,s,i,(a,u)=>{const h=l(a,u);zt(t.eventQueue_,r._path,h)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function dw(t){const n=t.infoData_.getNode(new fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function _u(t){return DN({timestamp:dw(t)})}function Wm(t,e,n,r,i){t.dataUpdateCount++;const s=new fe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let l=[];if(i)if(r){const u=ma(n,h=>Fe(h));l=RN(t.serverSyncTree_,s,u,i)}else{const u=Fe(n);l=X0(t.serverSyncTree_,s,u,i)}else if(r){const u=ma(n,h=>Fe(h));l=IN(t.serverSyncTree_,s,u)}else{const u=Fe(n);l=Bo(t.serverSyncTree_,s,u)}let a=s;l.length>0&&(a=Gi(t,s)),zt(t.eventQueue_,a,l)}function Hm(t,e){Tf(t,"connected",e),e===!1&&rP(t)}function ZN(t,e){Xe(e,(n,r)=>{Tf(t,n,r)})}function Tf(t,e,n){const r=new fe("/.info/"+e),i=Fe(n);t.infoData_.updateSnapshot(r,i);const s=Bo(t.infoSyncTree_,r,i);zt(t.eventQueue_,r,s)}function kf(t){return t.nextWriteId_++}function eP(t,e,n){const r=NN(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Fe(i).withIndex(e._queryParams.getIndex());jh(t.serverSyncTree_,e,n,!0);let l;if(e._queryParams.loadsAllData())l=Bo(t.serverSyncTree_,e._path,s);else{const a=To(t.serverSyncTree_,e);l=X0(t.serverSyncTree_,e._path,s,a)}return zt(t.eventQueue_,e._path,l),Fa(t.serverSyncTree_,e,n,null,!0),s},i=>(Wo(t,"get for query "+Ue(e)+" failed: "+i),Promise.reject(new Error(i))))}function tP(t,e,n,r,i){Wo(t,"set",{path:e.toString(),value:n,priority:r});const s=_u(t),l=Fe(n,r),a=gf(t.serverSyncTree_,e),u=nw(l,a,s),h=kf(t),g=Y0(t.serverSyncTree_,e,u,h,!0);mu(t.eventQueue_,g),t.server_.put(e.toString(),l.val(!0),(m,P)=>{const T=m==="ok";T||ut("set at "+e+" failed: "+m);const O=tr(t.serverSyncTree_,h,!T);zt(t.eventQueue_,e,O),Bh(t,i,m,P)});const p=Nf(t,e);Gi(t,p),zt(t.eventQueue_,p,[])}function nP(t,e,n,r){Wo(t,"update",{path:e.toString(),value:n});let i=!0;const s=_u(t),l={};if(Xe(n,(a,u)=>{i=!1,l[a]=tw(Ne(e,a),Fe(u),t.serverSyncTree_,s)}),i)qe("update() called with empty data.  Don't do anything."),Bh(t,r,"ok",void 0);else{const a=kf(t),u=CN(t.serverSyncTree_,e,l,a);mu(t.eventQueue_,u),t.server_.merge(e.toString(),n,(h,g)=>{const p=h==="ok";p||ut("update at "+e+" failed: "+h);const m=tr(t.serverSyncTree_,a,!p),P=m.length>0?Gi(t,e):e;zt(t.eventQueue_,P,m),Bh(t,r,h,g)}),Xe(n,h=>{const g=Nf(t,Ne(e,h));Gi(t,g)}),zt(t.eventQueue_,e,[])}}function rP(t){Wo(t,"onDisconnectEvents");const e=_u(t),n=Pa();Dh(t.onDisconnect_,ae(),(i,s)=>{const l=tw(i,s,t.serverSyncTree_,e);L0(n,i,l)});let r=[];Dh(n,ae(),(i,s)=>{r=r.concat(Bo(t.serverSyncTree_,i,s));const l=Nf(t,i);Gi(t,l)}),t.onDisconnect_=Pa(),zt(t.eventQueue_,ae(),r)}function iP(t,e,n){let r;ee(e._path)===".info"?r=jh(t.infoSyncTree_,e,n):r=jh(t.serverSyncTree_,e,n),cw(t.eventQueue_,e._path,r)}function sP(t,e,n){let r;ee(e._path)===".info"?r=Fa(t.infoSyncTree_,e,n):r=Fa(t.serverSyncTree_,e,n),cw(t.eventQueue_,e._path,r)}function oP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(QN)}function Wo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),qe(n,...e)}function Bh(t,e,n,r){e&&Zi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const l=new Error(s);l.code=i,e(l)}})}function fw(t,e,n){return gf(t.serverSyncTree_,e,n)||q.EMPTY_NODE}function Rf(t,e=t.transactionQueueTree_){if(e||vu(t,e),ts(e)){const n=gw(t,e);F(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&lP(t,Vo(e),n)}else iw(e)&&pu(e,n=>{Rf(t,n)})}function lP(t,e,n){const r=n.map(h=>h.currentWriteId),i=fw(t,e,r);let s=i;const l=i.hash();for(let h=0;h<n.length;h++){const g=n[h];F(g.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),g.status=1,g.retryCount++;const p=lt(e,g.path);s=s.updateChild(p,g.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,h=>{Wo(t,"transaction put response",{path:u.toString(),status:h});let g=[];if(h==="ok"){const p=[];for(let m=0;m<n.length;m++)n[m].status=2,g=g.concat(tr(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&p.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();vu(t,Cf(t.transactionQueueTree_,e)),Rf(t,t.transactionQueueTree_),zt(t.eventQueue_,e,g);for(let m=0;m<p.length;m++)Zi(p[m])}else{if(h==="datastale")for(let p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{ut("transaction at "+u.toString()+" failed: "+h);for(let p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=h}Gi(t,e)}},l)}function Gi(t,e){const n=pw(t,e),r=Vo(n),i=gw(t,n);return aP(t,i,r),r}function aP(t,e,n){if(e.length===0)return;const r=[];let i=[];const l=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],h=lt(n,u.path);let g=!1,p;if(F(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)g=!0,p=u.abortReason,i=i.concat(tr(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=YN)g=!0,p="maxretry",i=i.concat(tr(t.serverSyncTree_,u.currentWriteId,!0));else{const m=fw(t,u.path,l);u.currentInputSnapshot=m;const P=e[a].update(m.val());if(P!==void 0){gu("transaction failed: Data returned ",P,u.path);let T=Fe(P);typeof P=="object"&&P!=null&&dn(P,".priority")||(T=T.updatePriority(m.getPriority()));const L=u.currentWriteId,C=_u(t),y=nw(T,m,C);u.currentOutputSnapshotRaw=T,u.currentOutputSnapshotResolved=y,u.currentWriteId=kf(t),l.splice(l.indexOf(L),1),i=i.concat(Y0(t.serverSyncTree_,u.path,y,u.currentWriteId,u.applyLocally)),i=i.concat(tr(t.serverSyncTree_,L,!0))}else g=!0,p="nodata",i=i.concat(tr(t.serverSyncTree_,u.currentWriteId,!0))}zt(t.eventQueue_,n,i),i=[],g&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(p==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(p),!1,null))))}vu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Zi(r[a]);Rf(t,t.transactionQueueTree_)}function pw(t,e){let n,r=t.transactionQueueTree_;for(n=ee(e);n!==null&&ts(r)===void 0;)r=Cf(r,n),e=ve(e),n=ee(e);return r}function gw(t,e){const n=[];return mw(t,e,n),n.sort((r,i)=>r.order-i.order),n}function mw(t,e,n){const r=ts(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);pu(e,i=>{mw(t,i,n)})}function vu(t,e){const n=ts(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,rw(e,n.length>0?n:void 0)}pu(e,r=>{vu(t,r)})}function Nf(t,e){const n=Vo(pw(t,e)),r=Cf(t.transactionQueueTree_,e);return FN(r,i=>{Tc(t,i)}),Tc(t,r),sw(r,i=>{Tc(t,i)}),n}function Tc(t,e){const n=ts(e);if(n){const r=[];let i=[],s=-1;for(let l=0;l<n.length;l++)n[l].status===3||(n[l].status===1?(F(s===l-1,"All SENT items should be at beginning of queue."),s=l,n[l].status=3,n[l].abortReason="set"):(F(n[l].status===0,"Unexpected transaction status in abort"),n[l].unwatcher(),i=i.concat(tr(t.serverSyncTree_,n[l].currentWriteId,!0)),n[l].onComplete&&r.push(n[l].onComplete.bind(null,new Error("set"),!1,null))));s===-1?rw(e,void 0):n.length=s+1,zt(t.eventQueue_,Vo(e),i);for(let l=0;l<r.length;l++)Zi(r[l])}}/**
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
 */function uP(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function cP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ut(`Invalid query segment '${n}' in query '${t}'`)}return e}const $m=function(t,e){const n=hP(t),r=n.namespace;n.domain==="firebase.com"&&Ln(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Ln("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||wk();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new v0(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new fe(n.pathString)}},hP=function(t){let e="",n="",r="",i="",s="",l=!0,a="https",u=443;if(typeof t=="string"){let h=t.indexOf("//");h>=0&&(a=t.substring(0,h-1),t=t.substring(h+2));let g=t.indexOf("/");g===-1&&(g=t.length);let p=t.indexOf("?");p===-1&&(p=t.length),e=t.substring(0,Math.min(g,p)),g<p&&(i=uP(t.substring(g,p)));const m=cP(t.substring(Math.min(t.length,p)));h=e.indexOf(":"),h>=0?(l=a==="https"||a==="wss",u=parseInt(e.substring(h+1),10)):h=e.length;const P=e.slice(0,h);if(P.toLowerCase()==="localhost")n="localhost";else if(P.split(".").length<=2)n=P;else{const T=e.indexOf(".");r=e.substring(0,T).toLowerCase(),n=e.substring(T+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:l,scheme:a,pathString:i,namespace:s}};/**
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
 */const Gm="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",dP=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Gm.charAt(n%64),n=Math.floor(n/64);F(n===0,"Cannot push at time == 0");let l=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)l+=Gm.charAt(e[i]);return F(l.length===20,"nextPushId: Length should be 20."),l}}();/**
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
 */class fP{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ue(this.snapshot.exportVal())}}class pP{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class _w{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return F(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Pf{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return re(this._path)?null:tf(this._path)}get ref(){return new Un(this._repo,this._path)}get _queryIdentifier(){const e=xm(this._queryParams),n=Xd(e);return n==="{}"?"default":n}get _queryObject(){return xm(this._queryParams)}isEqual(e){if(e=xt(e),!(e instanceof Pf))return!1;const n=this._repo===e._repo,r=nf(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+rR(this._path)}}class Un extends Pf{constructor(e,n){super(e,n,new lf,!1)}get parent(){const e=R0(this._path);return e===null?null:new Un(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ko{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new fe(e),r=Ro(this.ref,e);return new ko(this._node.getChild(n),r,Pe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ko(i,Ro(this.ref,r),Pe)))}hasChild(e){const n=new fe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function gn(t,e){return t=xt(t),t._checkNotDeleted("ref"),e!==void 0?Ro(t._root,e):t._root}function Ro(t,e){return t=xt(t),ee(t._path)===null?$N("child","path",e):aw("child","path",e),new Un(t._repo,Ne(t._path,e))}function gP(t,e){t=xt(t),uw("push",t._path),lw("push",e,t._path,!0);const n=dw(t._repo),r=dP(n),i=Ro(t,r),s=Ro(t,r);let l;return l=Promise.resolve(s),i.then=l.then.bind(l),i.catch=l.then.bind(l,void 0),i}function kc(t,e){t=xt(t),uw("set",t._path),lw("set",e,t._path,!1);const n=new Do;return tP(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Rc(t,e){HN("update",e,t._path);const n=new Do;return nP(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Km(t){t=xt(t);const e=new _w(()=>{}),n=new yu(e);return eP(t._repo,t,n).then(r=>new ko(r,new Un(t._repo,t._path),t._queryParams.getIndex()))}class yu{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new fP("value",this,new ko(e.snapshotNode,new Un(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new pP(this,e,n):null}matches(e){return e instanceof yu?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function mP(t,e,n,r,i){const s=new _w(n,void 0),l=new yu(s);return iP(t._repo,t,l),()=>sP(t._repo,t,l)}function _P(t,e,n,r){return mP(t,"value",e)}gN(Un);wN(Un);/**
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
 */const vP="FIREBASE_DATABASE_EMULATOR_HOST",Vh={};let yP=!1;function wP(t,e,n,r){t.repoInfo_=new v0(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function EP(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Ln("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),qe("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let l=$m(s,i),a=l.repoInfo,u;typeof process<"u"&&fm&&(u=fm[vP]),u?(s=`http://${u}?ns=${a.namespace}`,l=$m(s,i),a=l.repoInfo):l.repoInfo.secure;const h=new xk(t.name,t.options,e);GN("Invalid Firebase Database URL",l),re(l.path)||Ln("Database URL must point to the root of a Firebase Database (not including a child path).");const g=CP(a,t,h,new Ak(t.name,n));return new IP(g,t)}function SP(t,e){const n=Vh[e];(!n||n[t.key]!==t)&&Ln(`Database ${e}(${t.repoInfo_}) has already been deleted.`),oP(t),delete n[t.key]}function CP(t,e,n,r){let i=Vh[e.name];i||(i={},Vh[e.name]=i);let s=i[t.toURLString()];return s&&Ln("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new XN(t,yP,n,r),i[t.toURLString()]=s,s}class IP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(JN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Un(this._repo,ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(SP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ln("Cannot call "+e+" on a deleted database.")}}function TP(t=vy(),e){const n=ru(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=NC("database");r&&kP(n,...r)}return n}function kP(t,e,n,r={}){t=xt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ln("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Ln('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Wl(Wl.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:PC(r.mockUserToken,t.app.options.projectId);s=new Wl(l)}wP(i,e,n,s)}/**
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
 */function RP(t){pk(Xr),Hr(new _r("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return EP(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),un(pm,gm,t),un(pm,gm,"esm2017")}Rn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Rn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};RP();const NP={apiKey:"AIzaSyCcH6B3SqafCvX_8b4EQvfxhRyZAQFbDSg",authDomain:"ruleta-multiplayer.firebaseapp.com",databaseURL:"https://ruleta-multiplayer-default-rtdb.europe-west1.firebasedatabase.app",projectId:"ruleta-multiplayer",storageBucket:"ruleta-multiplayer.firebasestorage.app",messagingSenderId:"463162815348",appId:"1:463162815348:web:da85d70e198bd72b93f221",measurementId:"G-WQZZ97K6BY"},Af=_y(NP),PP=X1(Af);fk(Af,{localCache:{kind:"persistent",cacheSizeBytes:hk}});const mn=TP(Af),kl=()=>{const t=new Uint32Array(1);return window.crypto.getRandomValues(t),t[0]/4294967296},AP=(t,e)=>{const n=t.length,r=360/n,i=Math.floor(kl()*n),s=t[i],l=7+Math.floor(kl()*4),a=kl()*(r*.8)+r*.1,u=360-i*r-r/2,g=Math.floor(e/360)*360+l*360+u+a,p=5500+Math.floor(kl()*1500);return{targetRotation:g,winnerWedge:s,duration:p}},vw=Oe.createContext(void 0),xP=[{id:"init-1",name:"Sí 👍",color:"#6366f1"},{id:"init-2",name:"No 👎",color:"#f43f5e"}],OP=({children:t})=>{const[e,n]=Oe.useState(null),[r,i]=Oe.useState(null),[s,l]=Oe.useState([]),a=Oe.useRef(null),u=Oe.useRef(null);Oe.useEffect(()=>{const O=sessionStorage.getItem("ruleta_user");O&&n(JSON.parse(O))},[]);const h=async O=>{if(O.trim()){console.log("Iniciando login para:",O);try{const C={id:(await LT(PP)).user.uid,name:O.trim()};console.log("Login exitoso:",C),sessionStorage.setItem("ruleta_user",JSON.stringify(C)),n(C)}catch(L){console.error("Error en login:",L)}}},g=O=>{console.log(`[RTDB Sync] Conectando a la sala: ${O}`);const L=gn(mn,`rooms/${O}`);u.current=_P(L,C=>{const y=C.val();if(!y){console.warn("La sala no existe en la base de datos."),i(null),l([]);return}if(i(y),y.players){const k=Object.entries(y.players).map(([M,U])=>({id:M,...U}));l(k)}else l([])})},p=async()=>{if(e)try{const O=Math.random().toString(36).substring(2,6).toUpperCase(),L=gn(mn,"rooms"),C=gP(L),y=C.key;if(!y)return;const k={id:y,code:O,hostId:e.id,status:"idle",currentRotation:0,targetRotation:0,duration:5e3,wedges:xP,players:{[e.id]:{name:e.name,isHost:!0,online:!0}}};await kc(C,k),await kc(gn(mn,`codes/${O}`),y),console.log(`Sala creada con éxito en RTDB. Código: ${O}`),g(y)}catch(O){console.error("Error al crear la sala en RTDB:",O)}},m=async O=>{if(!e)return{ok:!1,error:"Usuario no autenticado"};const L=O.trim().toUpperCase();try{const y=(await Km(gn(mn,`codes/${L}`))).val();if(!y)return{ok:!1,error:"La sala de juego no existe."};const k=gn(mn,`rooms/${y}/players/${e.id}`);return await kc(k,{name:e.name,isHost:!1,online:!0}),console.log(`Unido con éxito a la sala interna: ${y}`),g(y),{ok:!0}}catch(C){return console.error("Error al unirse por RTDB:",C),{ok:!1,error:"Error de conexión al intentar unirse."}}},P=async O=>{if(r)try{const L=gn(mn,`rooms/${r.id}`);await Rc(L,{wedges:O})}catch(L){console.error("Error actualizando cuñas en RTDB:",L)}},T=async()=>{if(!r||r.status==="spinning"||!e||r.hostId!==e.id)return;const{targetRotation:O,duration:L}=AP(r.wedges,r.currentRotation),C=Date.now();try{const y=gn(mn,`rooms/${r.id}`);await Rc(y,{status:"spinning",targetRotation:O,duration:L,spinStartAt:C}),a.current&&clearTimeout(a.current),a.current=setTimeout(async()=>{const k=await Km(gn(mn,`rooms/${r.id}`));if(!k.exists())return;if(k.val().spinStartAt===C){const U=O%360,B=r.wedges,w=B.length,_=360/w;let v=(270-U)%360;v<0&&(v+=360);const S=Math.floor(v/_)%w,R=B[S]||B[0];console.log(`¡Giro completado! Sincronizado bajo la flecha: ${R.name}`),await Rc(gn(mn,`rooms/${r.id}`),{status:"idle",currentRotation:U,lastResult:{id:R.id,name:R.name,color:R.color,firedAt:Date.now()}})}},L)}catch(y){console.error("Error al ejecutar el spin en la RTDB:",y)}};return Oe.useEffect(()=>()=>{a.current&&clearTimeout(a.current)},[]),$.jsx(vw.Provider,{value:{user:e,room:r,players:s,login:h,createRoom:p,joinRoom:m,updateWedgesInDb:P,spinWheel:T},children:t})},xf=()=>{const t=Oe.useContext(vw);if(!t)throw new Error("useGame debe usarse dentro de GameProvider");return t},DP=t=>{if(!t)return"#ffffff";const e=t.replace("#",""),n=parseInt(e.substring(0,2),16),r=parseInt(e.substring(2,4),16),i=parseInt(e.substring(4,6),16);return(n*299+r*587+i*114)/1e3>=128?"#0f172a":"#ffffff"},MP=()=>{const{room:t}=xf(),e=Oe.useRef(null),n=(t==null?void 0:t.wedges)||[];return Oe.useEffect(()=>{const r=e.current;if(!r||n.length===0)return;const i=r.getContext("2d");if(!i)return;const s=r.width,l=s/2,a=l-10,u=2*Math.PI/n.length;let h;const g=p=>{i.clearRect(0,0,s,s),i.save(),i.translate(l,l);const m=p*Math.PI/180;i.rotate(m),i.translate(-l,-l),n.forEach((P,T)=>{const O=T*u,L=O+u;i.beginPath(),i.moveTo(l,l),i.arc(l,l,a,O,L),i.closePath(),i.fillStyle=P.color||"#334155",i.fill(),i.strokeStyle="#0f172a",i.lineWidth=2,i.stroke(),i.save(),i.translate(l,l),i.rotate(O+u/2),i.textAlign="right",i.textBaseline="middle",i.fillStyle=DP(P.color),i.font="bold 14px sans-serif",i.fillText(P.name,a-20,0),i.restore()}),i.restore(),i.beginPath(),i.arc(l,l,18,0,2*Math.PI),i.fillStyle="#0f172a",i.fill(),i.strokeStyle="#38bdf8",i.lineWidth=4,i.stroke()};if((t==null?void 0:t.status)==="spinning"&&t.spinStartAt){const p=t.currentRotation%360,m=t.targetRotation,P=t.duration,T=t.spinStartAt,O=()=>{const C=Date.now()-T;if(C>=P){g(m);return}const y=C/P,k=U=>U*(2-U),M=p+(m-p)*k(y);g(M),h=requestAnimationFrame(O)};O()}else g((t==null?void 0:t.currentRotation)||0);return()=>{h&&cancelAnimationFrame(h)}},[n,t==null?void 0:t.id,t==null?void 0:t.status,t==null?void 0:t.currentRotation,t==null?void 0:t.targetRotation,t==null?void 0:t.spinStartAt,t==null?void 0:t.duration]),$.jsxs("div",{className:"relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center select-none",children:[$.jsx("div",{className:`absolute -top-4 left-1/2 -translate-x-1/2 z-30 w-0 h-0 
          border-l-[16px] border-l-transparent 
          border-r-[16px] border-r-transparent 
          border-t-[32px] border-t-rose-500 
          drop-shadow-[0_6px_8px_rgba(0,0,0,0.7)]
          transition-transform duration-200
          ${(t==null?void 0:t.status)==="spinning"?"animate-pulse scale-110":""}`}),$.jsx("canvas",{ref:e,width:400,height:400,className:"w-full h-full rounded-full shadow-[0_0_50px_rgba(0,0,0,0.5)] border-4 border-slate-800 z-10"})]})};var Of={};(function t(e,n,r,i){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),l=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=function(){if(!e.OffscreenCanvas)return!1;try{var N=new OffscreenCanvas(1,1),I=N.getContext("2d");I.fillRect(0,0,1,1);var z=N.transferToImageBitmap();I.createPattern(z,"no-repeat")}catch{return!1}return!0}();function u(){}function h(N){var I=n.exports.Promise,z=I!==void 0?I:e.Promise;return typeof z=="function"?new z(N):(N(u,u),null)}var g=function(N,I){return{transform:function(z){if(N)return z;if(I.has(z))return I.get(z);var W=new OffscreenCanvas(z.width,z.height),K=W.getContext("2d");return K.drawImage(z,0,0),I.set(z,W),W},clear:function(){I.clear()}}}(a,new Map),p=function(){var N=Math.floor(16.666666666666668),I,z,W={},K=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(I=function(Q){var X=Math.random();return W[X]=requestAnimationFrame(function G(Z){K===Z||K+N-1<Z?(K=Z,delete W[X],Q()):W[X]=requestAnimationFrame(G)}),X},z=function(Q){W[Q]&&cancelAnimationFrame(W[Q])}):(I=function(Q){return setTimeout(Q,N)},z=function(Q){return clearTimeout(Q)}),{frame:I,cancel:z}}(),m=function(){var N,I,z={};function W(K){function Q(X,G){K.postMessage({options:X||{},callback:G})}K.init=function(G){var Z=G.transferControlToOffscreen();K.postMessage({canvas:Z},[Z])},K.fire=function(G,Z,de){if(I)return Q(G,null),I;var pe=Math.random().toString(36).slice(2);return I=h(function(ue){function me(Ae){Ae.data.callback===pe&&(delete z[pe],K.removeEventListener("message",me),I=null,g.clear(),de(),ue())}K.addEventListener("message",me),Q(G,pe),z[pe]=me.bind(null,{data:{callback:pe}})}),I},K.reset=function(){K.postMessage({reset:!0});for(var G in z)z[G](),delete z[G]}}return function(){if(N)return N;if(!r&&s){var K=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{N=new Worker(URL.createObjectURL(new Blob([K])))}catch(Q){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",Q),null}W(N)}return N}}(),P={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function T(N,I){return I?I(N):N}function O(N){return N!=null}function L(N,I,z){return T(N&&O(N[I])?N[I]:P[I],z)}function C(N){return N<0?0:Math.floor(N)}function y(N,I){return Math.floor(Math.random()*(I-N))+N}function k(N){return parseInt(N,16)}function M(N){return N.map(U)}function U(N){var I=String(N).replace(/[^0-9a-f]/gi,"");return I.length<6&&(I=I[0]+I[0]+I[1]+I[1]+I[2]+I[2]),{r:k(I.substring(0,2)),g:k(I.substring(2,4)),b:k(I.substring(4,6))}}function B(N){var I=L(N,"origin",Object);return I.x=L(I,"x",Number),I.y=L(I,"y",Number),I}function w(N){N.width=document.documentElement.clientWidth,N.height=document.documentElement.clientHeight}function _(N){var I=N.getBoundingClientRect();N.width=I.width,N.height=I.height}function v(N){var I=document.createElement("canvas");return I.style.position="fixed",I.style.top="0px",I.style.left="0px",I.style.pointerEvents="none",I.style.zIndex=N,I}function S(N,I,z,W,K,Q,X,G,Z){N.save(),N.translate(I,z),N.rotate(Q),N.scale(W,K),N.arc(0,0,1,X,G,Z),N.restore()}function R(N){var I=N.angle*(Math.PI/180),z=N.spread*(Math.PI/180);return{x:N.x,y:N.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:N.startVelocity*.5+Math.random()*N.startVelocity,angle2D:-I+(.5*z-Math.random()*z),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:N.color,shape:N.shape,tick:0,totalTicks:N.ticks,decay:N.decay,drift:N.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:N.gravity*3,ovalScalar:.6,scalar:N.scalar,flat:N.flat}}function A(N,I){I.x+=Math.cos(I.angle2D)*I.velocity+I.drift,I.y+=Math.sin(I.angle2D)*I.velocity+I.gravity,I.velocity*=I.decay,I.flat?(I.wobble=0,I.wobbleX=I.x+10*I.scalar,I.wobbleY=I.y+10*I.scalar,I.tiltSin=0,I.tiltCos=0,I.random=1):(I.wobble+=I.wobbleSpeed,I.wobbleX=I.x+10*I.scalar*Math.cos(I.wobble),I.wobbleY=I.y+10*I.scalar*Math.sin(I.wobble),I.tiltAngle+=.1,I.tiltSin=Math.sin(I.tiltAngle),I.tiltCos=Math.cos(I.tiltAngle),I.random=Math.random()+2);var z=I.tick++/I.totalTicks,W=I.x+I.random*I.tiltCos,K=I.y+I.random*I.tiltSin,Q=I.wobbleX+I.random*I.tiltCos,X=I.wobbleY+I.random*I.tiltSin;if(N.fillStyle="rgba("+I.color.r+", "+I.color.g+", "+I.color.b+", "+(1-z)+")",N.beginPath(),l&&I.shape.type==="path"&&typeof I.shape.path=="string"&&Array.isArray(I.shape.matrix))N.fill(Vt(I.shape.path,I.shape.matrix,I.x,I.y,Math.abs(Q-W)*.1,Math.abs(X-K)*.1,Math.PI/10*I.wobble));else if(I.shape.type==="bitmap"){var G=Math.PI/10*I.wobble,Z=Math.abs(Q-W)*.1,de=Math.abs(X-K)*.1,pe=I.shape.bitmap.width*I.scalar,ue=I.shape.bitmap.height*I.scalar,me=new DOMMatrix([Math.cos(G)*Z,Math.sin(G)*Z,-Math.sin(G)*de,Math.cos(G)*de,I.x,I.y]);me.multiplySelf(new DOMMatrix(I.shape.matrix));var Ae=N.createPattern(g.transform(I.shape.bitmap),"no-repeat");Ae.setTransform(me),N.globalAlpha=1-z,N.fillStyle=Ae,N.fillRect(I.x-pe/2,I.y-ue/2,pe,ue),N.globalAlpha=1}else if(I.shape==="circle")N.ellipse?N.ellipse(I.x,I.y,Math.abs(Q-W)*I.ovalScalar,Math.abs(X-K)*I.ovalScalar,Math.PI/10*I.wobble,0,2*Math.PI):S(N,I.x,I.y,Math.abs(Q-W)*I.ovalScalar,Math.abs(X-K)*I.ovalScalar,Math.PI/10*I.wobble,0,2*Math.PI);else if(I.shape==="star")for(var ne=Math.PI/2*3,ze=4*I.scalar,ft=8*I.scalar,Ct=I.x,Wt=I.y,nn=5,pt=Math.PI/nn;nn--;)Ct=I.x+Math.cos(ne)*ft,Wt=I.y+Math.sin(ne)*ft,N.lineTo(Ct,Wt),ne+=pt,Ct=I.x+Math.cos(ne)*ze,Wt=I.y+Math.sin(ne)*ze,N.lineTo(Ct,Wt),ne+=pt;else N.moveTo(Math.floor(I.x),Math.floor(I.y)),N.lineTo(Math.floor(I.wobbleX),Math.floor(K)),N.lineTo(Math.floor(Q),Math.floor(X)),N.lineTo(Math.floor(W),Math.floor(I.wobbleY));return N.closePath(),N.fill(),I.tick<I.totalTicks}function E(N,I,z,W,K){var Q=I.slice(),X=N.getContext("2d"),G,Z,de=h(function(pe){function ue(){G=Z=null,X.clearRect(0,0,W.width,W.height),g.clear(),K(),pe()}function me(){r&&!(W.width===i.width&&W.height===i.height)&&(W.width=N.width=i.width,W.height=N.height=i.height),!W.width&&!W.height&&(z(N),W.width=N.width,W.height=N.height),X.clearRect(0,0,W.width,W.height),Q=Q.filter(function(Ae){return A(X,Ae)}),Q.length?G=p.frame(me):ue()}G=p.frame(me),Z=ue});return{addFettis:function(pe){return Q=Q.concat(pe),de},canvas:N,promise:de,reset:function(){G&&p.cancel(G),Z&&Z()}}}function it(N,I){var z=!N,W=!!L(I||{},"resize"),K=!1,Q=L(I,"disableForReducedMotion",Boolean),X=s&&!!L(I||{},"useWorker"),G=X?m():null,Z=z?w:_,de=N&&G?!!N.__confetti_initialized:!1,pe=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,ue;function me(ne,ze,ft){for(var Ct=L(ne,"particleCount",C),Wt=L(ne,"angle",Number),nn=L(ne,"spread",Number),pt=L(ne,"startVelocity",Number),Ho=L(ne,"decay",Number),wu=L(ne,"gravity",Number),ns=L(ne,"drift",Number),ei=L(ne,"colors",M),$o=L(ne,"ticks",Number),Le=L(ne,"shapes"),$e=L(ne,"scalar"),ti=!!L(ne,"flat"),rs=B(ne),is=Ct,ss=[],Tr=N.width*rs.x,Go=N.height*rs.y;is--;)ss.push(R({x:Tr,y:Go,angle:Wt,spread:nn,startVelocity:pt,color:ei[is%ei.length],shape:Le[y(0,Le.length)],ticks:$o,decay:Ho,gravity:wu,drift:ns,scalar:$e,flat:ti}));return ue?ue.addFettis(ss):(ue=E(N,ss,Z,ze,ft),ue.promise)}function Ae(ne){var ze=Q||L(ne,"disableForReducedMotion",Boolean),ft=L(ne,"zIndex",Number);if(ze&&pe)return h(function(pt){pt()});z&&ue?N=ue.canvas:z&&!N&&(N=v(ft),document.body.appendChild(N)),W&&!de&&Z(N);var Ct={width:N.width,height:N.height};G&&!de&&G.init(N),de=!0,G&&(N.__confetti_initialized=!0);function Wt(){if(G){var pt={getBoundingClientRect:function(){if(!z)return N.getBoundingClientRect()}};Z(pt),G.postMessage({resize:{width:pt.width,height:pt.height}});return}Ct.width=Ct.height=null}function nn(){ue=null,W&&(K=!1,e.removeEventListener("resize",Wt)),z&&N&&(document.body.contains(N)&&document.body.removeChild(N),N=null,de=!1)}return W&&!K&&(K=!0,e.addEventListener("resize",Wt,!1)),G?G.fire(ne,Ct,nn):me(ne,Ct,nn)}return Ae.reset=function(){G&&G.reset(),ue&&ue.reset()},Ae}var Bt;function jn(){return Bt||(Bt=it(null,{useWorker:!0,resize:!0})),Bt}function Vt(N,I,z,W,K,Q,X){var G=new Path2D(N),Z=new Path2D;Z.addPath(G,new DOMMatrix(I));var de=new Path2D;return de.addPath(Z,new DOMMatrix([Math.cos(X)*K,Math.sin(X)*K,-Math.sin(X)*Q,Math.cos(X)*Q,z,W])),de}function V(N){if(!l)throw new Error("path confetti are not supported in this browser");var I,z;typeof N=="string"?I=N:(I=N.path,z=N.matrix);var W=new Path2D(I),K=document.createElement("canvas"),Q=K.getContext("2d");if(!z){for(var X=1e3,G=X,Z=X,de=0,pe=0,ue,me,Ae=0;Ae<X;Ae+=2)for(var ne=0;ne<X;ne+=2)Q.isPointInPath(W,Ae,ne,"nonzero")&&(G=Math.min(G,Ae),Z=Math.min(Z,ne),de=Math.max(de,Ae),pe=Math.max(pe,ne));ue=de-G,me=pe-Z;var ze=10,ft=Math.min(ze/ue,ze/me);z=[ft,0,0,ft,-Math.round(ue/2+G)*ft,-Math.round(me/2+Z)*ft]}return{type:"path",path:I,matrix:z}}function Y(N){var I,z=1,W="#000000",K='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof N=="string"?I=N:(I=N.text,z="scalar"in N?N.scalar:z,K="fontFamily"in N?N.fontFamily:K,W="color"in N?N.color:W);var Q=10*z,X=""+Q+"px "+K,G=new OffscreenCanvas(Q,Q),Z=G.getContext("2d");Z.font=X;var de=Z.measureText(I),pe=Math.ceil(de.actualBoundingBoxRight+de.actualBoundingBoxLeft),ue=Math.ceil(de.actualBoundingBoxAscent+de.actualBoundingBoxDescent),me=2,Ae=de.actualBoundingBoxLeft+me,ne=de.actualBoundingBoxAscent+me;pe+=me+me,ue+=me+me,G=new OffscreenCanvas(pe,ue),Z=G.getContext("2d"),Z.font=X,Z.fillStyle=W,Z.fillText(I,Ae,ne);var ze=1/z;return{type:"bitmap",bitmap:G.transferToImageBitmap(),matrix:[ze,0,0,ze,-pe*ze/2,-ue*ze/2]}}n.exports=function(){return jn().apply(this,arguments)},n.exports.reset=function(){jn().reset()},n.exports.create=it,n.exports.shapeFromPath=V,n.exports.shapeFromText=Y})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Of,!1);const LP=Of.exports;Of.exports.create;const bP=t=>{if(!t)return"#ffffff";const e=t.replace("#",""),n=parseInt(e.substring(0,2),16),r=parseInt(e.substring(2,4),16),i=parseInt(e.substring(4,6),16);return(n*299+r*587+i*114)/1e3>=128?"#0f172a":"#ffffff"},FP=()=>{var P;const{room:t,user:e,players:n,updateWedgesInDb:r,spinWheel:i}=xf(),[s,l]=Oe.useState(""),[a,u]=Oe.useState("#6366f1");if(Oe.useEffect(()=>{t&&t.status==="idle"&&t.lastResult&&(console.log("¡Lanzando confetis globales para:",t.lastResult.name),LP({particleCount:120,spread:70,origin:{y:.6}}))},[t==null?void 0:t.status,(P=t==null?void 0:t.lastResult)==null?void 0:P.firedAt]),!t||!e)return null;const h=t.hostId===e.id,g=async()=>{if(!s.trim())return;const T={id:Math.random().toString(36).substring(2,9),name:s.trim(),color:a};await r([...t.wedges,T]),l("")},p=async T=>{if(t.wedges.length<=2)return;const O=t.wedges.filter(L=>L.id!==T);await r(O)},m=t.lastResult?bP(t.lastResult.color):"#ffffff";return $.jsxs("div",{className:"w-full flex flex-col gap-5",children:[t.status==="idle"&&t.lastResult&&$.jsxs("div",{style:{backgroundColor:t.lastResult.color,color:m},className:"w-full p-4 rounded-2xl text-center font-black shadow-xl border border-white/20 animate-bounce transition-all duration-300",children:[$.jsx("p",{style:{color:m},className:"text-[10px] tracking-widest opacity-70 font-bold uppercase mb-0.5",children:"Resultado Anterior"}),$.jsxs("span",{className:"text-lg",children:["🎉 ¡Ha tocado: ",t.lastResult.name,"! 🏆"]})]}),$.jsxs("div",{className:"w-full bg-slate-900/60 border border-white/10 rounded-3xl p-6 flex flex-col gap-5 backdrop-blur-md",children:[$.jsxs("div",{className:"flex justify-between items-center",children:[$.jsx("h3",{className:"text-sm font-black tracking-wider uppercase bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent",children:"Opciones de Ruleta"}),$.jsx("span",{className:"text-[10px] tracking-wide px-2.5 py-1 bg-white/5 border border-white/10 rounded-full font-bold text-slate-400",children:h?"👑 ERES EL HOST":"👁️ MODO ESPECTADOR"})]}),h?$.jsxs($.Fragment,{children:[$.jsxs("div",{className:"flex gap-2",children:[$.jsx("input",{type:"text",value:s,onChange:T=>l(T.target.value),placeholder:"Añadir opción...",className:"flex-1 px-4 py-2.5 bg-slate-950 border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-indigo-500"}),$.jsx("input",{type:"color",value:a,onChange:T=>u(T.target.value),className:"w-10 h-10 bg-transparent border-0 cursor-pointer rounded-xl"}),$.jsx("button",{onClick:g,className:"px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold",children:"✓"})]}),$.jsx("div",{className:"max-h-[160px] overflow-y-auto space-y-1.5 pr-1",children:t.wedges.map(T=>$.jsxs("div",{className:"flex justify-between items-center p-2.5 bg-slate-950/50 border border-white/5 rounded-xl text-xs",children:[$.jsxs("div",{className:"flex items-center gap-2",children:[$.jsx("div",{className:"w-3 h-3 rounded-full",style:{backgroundColor:T.color}}),$.jsx("span",{className:"text-slate-300 font-medium",children:T.name})]}),$.jsx("button",{onClick:()=>p(T.id),className:"text-slate-500 hover:text-rose-400 font-bold px-1 transition-colors",children:"✕"})]},T.id))}),$.jsx("button",{onClick:i,disabled:t.status==="spinning",className:"w-full py-4 bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-black tracking-wider uppercase rounded-xl shadow-xl transition-all active:scale-[0.98] disabled:opacity-20 disabled:pointer-events-none text-xs",children:t.status==="spinning"?"🎰 Girando...":"Girar Ruleta 🎲"})]}):$.jsx("p",{className:"text-xs text-slate-400 text-center py-6 border border-dashed border-white/10 rounded-xl bg-slate-950/20",children:"Solo el creador de la sala puede alterar el tablero y girar la rueda."})]}),$.jsxs("div",{className:"w-full bg-slate-900/40 border border-white/10 rounded-3xl p-5 flex flex-col gap-3.5",children:[$.jsxs("div",{className:"flex items-center gap-2",children:[$.jsx("div",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),$.jsxs("h4",{className:"text-xs font-black tracking-wider text-slate-400 uppercase",children:["Jugadores en la Sala (",n.length,")"]})]}),$.jsx("div",{className:"space-y-2 max-h-[180px] overflow-y-auto pr-1",children:n.map(T=>{const O=t.hostId===T.id;return $.jsxs("div",{className:"flex justify-between items-center p-2.5 bg-slate-950/40 border border-white/5 rounded-xl",children:[$.jsxs("div",{className:"flex items-center gap-2.5",children:[$.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black ${O?"bg-amber-500/10 text-amber-400 border border-amber-500/30":"bg-slate-800 text-slate-300"}`,children:T.name?T.name.substring(0,2).toUpperCase():"??"}),$.jsxs("span",{className:"text-xs text-slate-200 font-semibold flex items-center gap-1.5",children:[T.name,T.id===e.id&&$.jsx("span",{className:"text-[10px] text-indigo-400 font-medium bg-indigo-500/10 px-1.5 py-0.2 rounded",children:"(Tú)"})]})]}),$.jsx("span",{className:`text-[9px] font-black px-2 py-0.5 rounded-md tracking-wider uppercase border ${O?"bg-amber-500/20 text-amber-400 border-amber-500/20":"bg-cyan-500/10 text-cyan-400 border-cyan-500/10"}`,children:O?"👑 HOST":"👤 ANÓNIMO"})]},T.id)})})]})]})};function UP(){const{user:t,room:e,login:n,createRoom:r,joinRoom:i}=xf(),[s,l]=Oe.useState(""),[a,u]=Oe.useState(""),[h,g]=Oe.useState(""),[p,m]=Oe.useState(!1),P=async()=>{if(a.trim()){g(""),m(!0),console.log("[App.tsx] Ejecutando handleJoin de forma segura para:",a);try{const T=await i(a);T&&T.ok?console.log("[App.tsx] Unión exitosa confirmada. Esperando renderizado de sala."):(g((T==null?void 0:T.error)??"Error al unirse a la sala"),m(!1))}catch(T){console.error("[App.tsx] Error en handleJoin:",T),g("No se pudo conectar con el servidor."),m(!1)}}};return t?!e||!e.id||!e.hostId?$.jsx("div",{className:"min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4",children:$.jsxs("div",{className:"w-full max-w-sm space-y-4",children:[$.jsx("button",{onClick:()=>{console.log("Click detectado físicamente en el botón de App.tsx"),r()},className:"w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm rounded-2xl shadow-lg shadow-cyan-500/20 active:scale-[0.98] transition-all uppercase tracking-wider",children:"Crear sala Privada"}),$.jsxs("div",{className:"relative flex items-center p-2 bg-slate-900 border border-white/10 rounded-2xl",children:[$.jsx("input",{type:"text",placeholder:"CÓDIGO DE SALA",value:a,onChange:T=>{u(T.target.value),g("")},onKeyDown:T=>T.key==="Enter"&&P(),maxLength:4,className:"w-full bg-transparent pl-4 pr-20 py-2 text-white font-mono font-bold uppercase tracking-widest outline-none placeholder:text-slate-600 text-sm"}),$.jsx("button",{onClick:P,disabled:p,className:"absolute right-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-bold text-xs rounded-xl border border-white/5 transition-all disabled:opacity-50",children:p?"...":"Entrar"})]}),h&&$.jsxs("p",{className:"text-center text-xs text-rose-400 font-semibold bg-rose-500/10 border border-rose-500/20 rounded-xl py-2 px-4",children:["⚠️ ",h]})]})}):$.jsxs("div",{className:"min-h-screen bg-slate-950 text-white flex flex-col lg:flex-row items-center justify-center gap-10 p-6",children:[$.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center",children:[$.jsxs("div",{className:"mb-4 bg-slate-900 px-4 py-2 border border-white/10 rounded-xl text-center",children:[$.jsx("p",{className:"text-xs text-slate-400 font-bold",children:"CÓDIGO DE SALA"}),$.jsx("p",{className:"text-xl font-mono font-black text-cyan-400 tracking-widest",children:e.code})]}),$.jsx(MP,{})]}),$.jsx("div",{className:"w-full lg:w-[400px]",children:$.jsx(FP,{})})]}):$.jsx("div",{className:"min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4",children:$.jsxs("div",{className:"w-full max-w-sm bg-slate-900 border border-white/10 rounded-3xl p-6 space-y-4 shadow-2xl",children:[$.jsx("h2",{className:"text-xl font-black text-white text-center tracking-wide uppercase",children:"Ruleta Multiplayer"}),$.jsx("input",{type:"text",placeholder:"Introduce tu Nickname...",value:s,onChange:T=>l(T.target.value),onKeyDown:T=>T.key==="Enter"&&s.trim()&&n(s),className:"w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"}),$.jsx("button",{onClick:()=>s.trim()&&n(s),className:"w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all",children:"Acceder al Lobby"})]})})}Nc.createRoot(document.getElementById("root")).render($.jsx(aE.StrictMode,{children:$.jsx(OP,{children:$.jsx(UP,{})})}));
