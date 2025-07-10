var Qm=Object.defineProperty;var Xm=(e,t,n)=>t in e?Qm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var C=(e,t,n)=>Xm(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Rd={exports:{}},na={},Nd={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ei=Symbol.for("react.element"),Jm=Symbol.for("react.portal"),Ym=Symbol.for("react.fragment"),Zm=Symbol.for("react.strict_mode"),Gm=Symbol.for("react.profiler"),eh=Symbol.for("react.provider"),th=Symbol.for("react.context"),nh=Symbol.for("react.forward_ref"),rh=Symbol.for("react.suspense"),ih=Symbol.for("react.memo"),oh=Symbol.for("react.lazy"),Rc=Symbol.iterator;function ah(e){return e===null||typeof e!="object"?null:(e=Rc&&e[Rc]||e["@@iterator"],typeof e=="function"?e:null)}var Dd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Od=Object.assign,Ld={};function Ir(e,t,n){this.props=e,this.context=t,this.refs=Ld,this.updater=n||Dd}Ir.prototype.isReactComponent={};Ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ud(){}Ud.prototype=Ir.prototype;function hl(e,t,n){this.props=e,this.context=t,this.refs=Ld,this.updater=n||Dd}var gl=hl.prototype=new Ud;gl.constructor=hl;Od(gl,Ir.prototype);gl.isPureReactComponent=!0;var Nc=Array.isArray,Md=Object.prototype.hasOwnProperty,yl={current:null},jd={key:!0,ref:!0,__self:!0,__source:!0};function $d(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Md.call(t,r)&&!jd.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Ei,type:e,key:o,ref:a,props:i,_owner:yl.current}}function sh(e,t){return{$$typeof:Ei,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ei}function lh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Dc=/\/+/g;function Ea(e,t){return typeof e=="object"&&e!==null&&e.key!=null?lh(""+e.key):t.toString(36)}function ao(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ei:case Jm:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Ea(a,0):r,Nc(i)?(n="",e!=null&&(n=e.replace(Dc,"$&/")+"/"),ao(i,t,n,"",function(c){return c})):i!=null&&(vl(i)&&(i=sh(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Dc,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Nc(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+Ea(o,s);a+=ao(o,t,n,l,i)}else if(l=ah(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+Ea(o,s++),a+=ao(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Hi(e,t,n){if(e==null)return e;var r=[],i=0;return ao(e,r,"","",function(o){return t.call(n,o,i++)}),r}function ch(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},so={transition:null},uh={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:so,ReactCurrentOwner:yl};function Fd(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:Hi,forEach:function(e,t,n){Hi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Hi(e,function(){t++}),t},toArray:function(e){return Hi(e,function(t){return t})||[]},only:function(e){if(!vl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=Ir;F.Fragment=Ym;F.Profiler=Gm;F.PureComponent=hl;F.StrictMode=Zm;F.Suspense=rh;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uh;F.act=Fd;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Od({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=yl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Md.call(t,l)&&!jd.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Ei,type:e.type,key:i,ref:o,props:r,_owner:a}};F.createContext=function(e){return e={$$typeof:th,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:eh,_context:e},e.Consumer=e};F.createElement=$d;F.createFactory=function(e){var t=$d.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:nh,render:e}};F.isValidElement=vl;F.lazy=function(e){return{$$typeof:oh,_payload:{_status:-1,_result:e},_init:ch}};F.memo=function(e,t){return{$$typeof:ih,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=so.transition;so.transition={};try{e()}finally{so.transition=t}};F.unstable_act=Fd;F.useCallback=function(e,t){return De.current.useCallback(e,t)};F.useContext=function(e){return De.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return De.current.useDeferredValue(e)};F.useEffect=function(e,t){return De.current.useEffect(e,t)};F.useId=function(){return De.current.useId()};F.useImperativeHandle=function(e,t,n){return De.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return De.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return De.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return De.current.useMemo(e,t)};F.useReducer=function(e,t,n){return De.current.useReducer(e,t,n)};F.useRef=function(e){return De.current.useRef(e)};F.useState=function(e){return De.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return De.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return De.current.useTransition()};F.version="18.3.1";Nd.exports=F;var Dt=Nd.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dh=Dt,ph=Symbol.for("react.element"),fh=Symbol.for("react.fragment"),mh=Object.prototype.hasOwnProperty,hh=dh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gh={key:!0,ref:!0,__self:!0,__source:!0};function Bd(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)mh.call(t,r)&&!gh.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ph,type:e,key:o,ref:a,props:i,_owner:hh.current}}na.Fragment=fh;na.jsx=Bd;na.jsxs=Bd;Rd.exports=na;var W=Rd.exports,ps={},Hd={exports:{}},We={},Vd={exports:{}},zd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(g,y){var b=g.length;g.push(y);e:for(;0<b;){var M=b-1>>>1,de=g[M];if(0<i(de,y))g[M]=y,g[b]=de,b=M;else break e}}function n(g){return g.length===0?null:g[0]}function r(g){if(g.length===0)return null;var y=g[0],b=g.pop();if(b!==y){g[0]=b;e:for(var M=0,de=g.length,kn=de>>>1;M<kn;){var It=2*(M+1)-1,Ta=g[It],xn=It+1,Bi=g[xn];if(0>i(Ta,b))xn<de&&0>i(Bi,Ta)?(g[M]=Bi,g[xn]=b,M=xn):(g[M]=Ta,g[It]=b,M=It);else if(xn<de&&0>i(Bi,b))g[M]=Bi,g[xn]=b,M=xn;else break e}}return y}function i(g,y){var b=g.sortIndex-y.sortIndex;return b!==0?b:g.id-y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],c=[],f=1,u=null,d=3,v=!1,_=!1,x=!1,U=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(g){for(var y=n(c);y!==null;){if(y.callback===null)r(c);else if(y.startTime<=g)r(c),y.sortIndex=y.expirationTime,t(l,y);else break;y=n(c)}}function k(g){if(x=!1,h(g),!_)if(n(l)!==null)_=!0,Or(I);else{var y=n(c);y!==null&&Ye(k,y.startTime-g)}}function I(g,y){_=!1,x&&(x=!1,m(P),P=-1),v=!0;var b=d;try{for(h(y),u=n(l);u!==null&&(!(u.expirationTime>y)||g&&!Be());){var M=u.callback;if(typeof M=="function"){u.callback=null,d=u.priorityLevel;var de=M(u.expirationTime<=y);y=e.unstable_now(),typeof de=="function"?u.callback=de:u===n(l)&&r(l),h(y)}else r(l);u=n(l)}if(u!==null)var kn=!0;else{var It=n(c);It!==null&&Ye(k,It.startTime-y),kn=!1}return kn}finally{u=null,d=b,v=!1}}var A=!1,E=null,P=-1,X=5,j=-1;function Be(){return!(e.unstable_now()-j<X)}function bn(){if(E!==null){var g=e.unstable_now();j=g;var y=!0;try{y=E(!0,g)}finally{y?Ht():(A=!1,E=null)}}else A=!1}var Ht;if(typeof p=="function")Ht=function(){p(bn)};else if(typeof MessageChannel<"u"){var Dr=new MessageChannel,Fi=Dr.port2;Dr.port1.onmessage=bn,Ht=function(){Fi.postMessage(null)}}else Ht=function(){U(bn,0)};function Or(g){E=g,A||(A=!0,Ht())}function Ye(g,y){P=U(function(){g(e.unstable_now())},y)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(g){g.callback=null},e.unstable_continueExecution=function(){_||v||(_=!0,Or(I))},e.unstable_forceFrameRate=function(g){0>g||125<g?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<g?Math.floor(1e3/g):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(g){switch(d){case 1:case 2:case 3:var y=3;break;default:y=d}var b=d;d=y;try{return g()}finally{d=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(g,y){switch(g){case 1:case 2:case 3:case 4:case 5:break;default:g=3}var b=d;d=g;try{return y()}finally{d=b}},e.unstable_scheduleCallback=function(g,y,b){var M=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?M+b:M):b=M,g){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=b+de,g={id:f++,callback:y,priorityLevel:g,startTime:b,expirationTime:de,sortIndex:-1},b>M?(g.sortIndex=b,t(c,g),n(l)===null&&g===n(c)&&(x?(m(P),P=-1):x=!0,Ye(k,b-M))):(g.sortIndex=de,t(l,g),_||v||(_=!0,Or(I))),g},e.unstable_shouldYield=Be,e.unstable_wrapCallback=function(g){var y=d;return function(){var b=d;d=y;try{return g.apply(this,arguments)}finally{d=b}}}})(zd);Vd.exports=zd;var yh=Vd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vh=Dt,qe=yh;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qd=new Set,li={};function Bn(e,t){hr(e,t),hr(e+"Capture",t)}function hr(e,t){for(li[e]=t,e=0;e<t.length;e++)qd.add(t[e])}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fs=Object.prototype.hasOwnProperty,wh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oc={},Lc={};function _h(e){return fs.call(Lc,e)?!0:fs.call(Oc,e)?!1:wh.test(e)?Lc[e]=!0:(Oc[e]=!0,!1)}function bh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function kh(e,t,n,r){if(t===null||typeof t>"u"||bh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Oe(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xe[e]=new Oe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xe[t]=new Oe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xe[e]=new Oe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xe[e]=new Oe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xe[e]=new Oe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xe[e]=new Oe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xe[e]=new Oe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xe[e]=new Oe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xe[e]=new Oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var wl=/[\-:]([a-z])/g;function _l(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wl,_l);xe[t]=new Oe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wl,_l);xe[t]=new Oe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wl,_l);xe[t]=new Oe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xe[e]=new Oe(e,1,!1,e.toLowerCase(),null,!1,!1)});xe.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xe[e]=new Oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function bl(e,t,n,r){var i=xe.hasOwnProperty(t)?xe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(kh(t,n,i,r)&&(n=null),r||i===null?_h(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Bt=vh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vi=Symbol.for("react.element"),Kn=Symbol.for("react.portal"),Qn=Symbol.for("react.fragment"),kl=Symbol.for("react.strict_mode"),ms=Symbol.for("react.profiler"),Wd=Symbol.for("react.provider"),Kd=Symbol.for("react.context"),xl=Symbol.for("react.forward_ref"),hs=Symbol.for("react.suspense"),gs=Symbol.for("react.suspense_list"),Sl=Symbol.for("react.memo"),Wt=Symbol.for("react.lazy"),Qd=Symbol.for("react.offscreen"),Uc=Symbol.iterator;function Lr(e){return e===null||typeof e!="object"?null:(e=Uc&&e[Uc]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Object.assign,Ca;function qr(e){if(Ca===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ca=t&&t[1]||""}return`
`+Ca+e}var Pa=!1;function Ra(e,t){if(!e||Pa)return"";Pa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Pa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?qr(e):""}function xh(e){switch(e.tag){case 5:return qr(e.type);case 16:return qr("Lazy");case 13:return qr("Suspense");case 19:return qr("SuspenseList");case 0:case 2:case 15:return e=Ra(e.type,!1),e;case 11:return e=Ra(e.type.render,!1),e;case 1:return e=Ra(e.type,!0),e;default:return""}}function ys(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qn:return"Fragment";case Kn:return"Portal";case ms:return"Profiler";case kl:return"StrictMode";case hs:return"Suspense";case gs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kd:return(e.displayName||"Context")+".Consumer";case Wd:return(e._context.displayName||"Context")+".Provider";case xl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Sl:return t=e.displayName||null,t!==null?t:ys(e.type)||"Memo";case Wt:t=e._payload,e=e._init;try{return ys(e(t))}catch{}}return null}function Sh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ys(t);case 8:return t===kl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ih(e){var t=Xd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zi(e){e._valueTracker||(e._valueTracker=Ih(e))}function Jd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Xd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function So(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vs(e,t){var n=t.checked;return ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Mc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=fn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Yd(e,t){t=t.checked,t!=null&&bl(e,"checked",t,!1)}function ws(e,t){Yd(e,t);var n=fn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_s(e,t.type,n):t.hasOwnProperty("defaultValue")&&_s(e,t.type,fn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function jc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _s(e,t,n){(t!=="number"||So(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Wr=Array.isArray;function or(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+fn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function bs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $c(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Wr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:fn(n)}}function Zd(e,t){var n=fn(t.value),r=fn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Fc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ks(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qi,ep=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qi=qi||document.createElement("div"),qi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ci(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ah=["Webkit","ms","Moz","O"];Object.keys(Jr).forEach(function(e){Ah.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Jr[t]=Jr[e]})});function tp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Jr.hasOwnProperty(e)&&Jr[e]?(""+t).trim():t+"px"}function np(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=tp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Th=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xs(e,t){if(t){if(Th[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Ss(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Is=null;function Il(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var As=null,ar=null,sr=null;function Bc(e){if(e=Ri(e)){if(typeof As!="function")throw Error(S(280));var t=e.stateNode;t&&(t=sa(t),As(e.stateNode,e.type,t))}}function rp(e){ar?sr?sr.push(e):sr=[e]:ar=e}function ip(){if(ar){var e=ar,t=sr;if(sr=ar=null,Bc(e),t)for(e=0;e<t.length;e++)Bc(t[e])}}function op(e,t){return e(t)}function ap(){}var Na=!1;function sp(e,t,n){if(Na)return e(t,n);Na=!0;try{return op(e,t,n)}finally{Na=!1,(ar!==null||sr!==null)&&(ap(),ip())}}function ui(e,t){var n=e.stateNode;if(n===null)return null;var r=sa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Ts=!1;if(Lt)try{var Ur={};Object.defineProperty(Ur,"passive",{get:function(){Ts=!0}}),window.addEventListener("test",Ur,Ur),window.removeEventListener("test",Ur,Ur)}catch{Ts=!1}function Eh(e,t,n,r,i,o,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var Yr=!1,Io=null,Ao=!1,Es=null,Ch={onError:function(e){Yr=!0,Io=e}};function Ph(e,t,n,r,i,o,a,s,l){Yr=!1,Io=null,Eh.apply(Ch,arguments)}function Rh(e,t,n,r,i,o,a,s,l){if(Ph.apply(this,arguments),Yr){if(Yr){var c=Io;Yr=!1,Io=null}else throw Error(S(198));Ao||(Ao=!0,Es=c)}}function Hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function lp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Hc(e){if(Hn(e)!==e)throw Error(S(188))}function Nh(e){var t=e.alternate;if(!t){if(t=Hn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Hc(i),e;if(o===r)return Hc(i),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function cp(e){return e=Nh(e),e!==null?up(e):null}function up(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=up(e);if(t!==null)return t;e=e.sibling}return null}var dp=qe.unstable_scheduleCallback,Vc=qe.unstable_cancelCallback,Dh=qe.unstable_shouldYield,Oh=qe.unstable_requestPaint,ue=qe.unstable_now,Lh=qe.unstable_getCurrentPriorityLevel,Al=qe.unstable_ImmediatePriority,pp=qe.unstable_UserBlockingPriority,To=qe.unstable_NormalPriority,Uh=qe.unstable_LowPriority,fp=qe.unstable_IdlePriority,ra=null,_t=null;function Mh(e){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(ra,e,void 0,(e.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:Fh,jh=Math.log,$h=Math.LN2;function Fh(e){return e>>>=0,e===0?32:31-(jh(e)/$h|0)|0}var Wi=64,Ki=4194304;function Kr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Eo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=Kr(s):(o&=a,o!==0&&(r=Kr(o)))}else a=n&~i,a!==0?r=Kr(a):o!==0&&(r=Kr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ut(t),i=1<<n,r|=e[n],t&=~i;return r}function Bh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-ut(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=Bh(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function Cs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mp(){var e=Wi;return Wi<<=1,!(Wi&4194240)&&(Wi=64),e}function Da(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ci(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ut(t),e[t]=n}function Vh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ut(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Tl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ut(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var J=0;function hp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var gp,El,yp,vp,wp,Ps=!1,Qi=[],nn=null,rn=null,on=null,di=new Map,pi=new Map,Qt=[],zh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zc(e,t){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":di.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pi.delete(t.pointerId)}}function Mr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ri(t),t!==null&&El(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function qh(e,t,n,r,i){switch(t){case"focusin":return nn=Mr(nn,e,t,n,r,i),!0;case"dragenter":return rn=Mr(rn,e,t,n,r,i),!0;case"mouseover":return on=Mr(on,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return di.set(o,Mr(di.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,pi.set(o,Mr(pi.get(o)||null,e,t,n,r,i)),!0}return!1}function _p(e){var t=En(e.target);if(t!==null){var n=Hn(t);if(n!==null){if(t=n.tag,t===13){if(t=lp(n),t!==null){e.blockedOn=t,wp(e.priority,function(){yp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Rs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Is=r,n.target.dispatchEvent(r),Is=null}else return t=Ri(n),t!==null&&El(t),e.blockedOn=n,!1;t.shift()}return!0}function qc(e,t,n){lo(e)&&n.delete(t)}function Wh(){Ps=!1,nn!==null&&lo(nn)&&(nn=null),rn!==null&&lo(rn)&&(rn=null),on!==null&&lo(on)&&(on=null),di.forEach(qc),pi.forEach(qc)}function jr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ps||(Ps=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,Wh)))}function fi(e){function t(i){return jr(i,e)}if(0<Qi.length){jr(Qi[0],e);for(var n=1;n<Qi.length;n++){var r=Qi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(nn!==null&&jr(nn,e),rn!==null&&jr(rn,e),on!==null&&jr(on,e),di.forEach(t),pi.forEach(t),n=0;n<Qt.length;n++)r=Qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Qt.length&&(n=Qt[0],n.blockedOn===null);)_p(n),n.blockedOn===null&&Qt.shift()}var lr=Bt.ReactCurrentBatchConfig,Co=!0;function Kh(e,t,n,r){var i=J,o=lr.transition;lr.transition=null;try{J=1,Cl(e,t,n,r)}finally{J=i,lr.transition=o}}function Qh(e,t,n,r){var i=J,o=lr.transition;lr.transition=null;try{J=4,Cl(e,t,n,r)}finally{J=i,lr.transition=o}}function Cl(e,t,n,r){if(Co){var i=Rs(e,t,n,r);if(i===null)Va(e,t,r,Po,n),zc(e,r);else if(qh(i,e,t,n,r))r.stopPropagation();else if(zc(e,r),t&4&&-1<zh.indexOf(e)){for(;i!==null;){var o=Ri(i);if(o!==null&&gp(o),o=Rs(e,t,n,r),o===null&&Va(e,t,r,Po,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Va(e,t,r,null,n)}}var Po=null;function Rs(e,t,n,r){if(Po=null,e=Il(r),e=En(e),e!==null)if(t=Hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=lp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Po=e,null}function bp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lh()){case Al:return 1;case pp:return 4;case To:case Uh:return 16;case fp:return 536870912;default:return 16}default:return 16}}var Gt=null,Pl=null,co=null;function kp(){if(co)return co;var e,t=Pl,n=t.length,r,i="value"in Gt?Gt.value:Gt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return co=i.slice(e,1<r?1-r:void 0)}function uo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xi(){return!0}function Wc(){return!1}function Ke(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Xi:Wc,this.isPropagationStopped=Wc,this}return ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xi)},persist:function(){},isPersistent:Xi}),t}var Ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rl=Ke(Ar),Pi=ae({},Ar,{view:0,detail:0}),Xh=Ke(Pi),Oa,La,$r,ia=ae({},Pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$r&&($r&&e.type==="mousemove"?(Oa=e.screenX-$r.screenX,La=e.screenY-$r.screenY):La=Oa=0,$r=e),Oa)},movementY:function(e){return"movementY"in e?e.movementY:La}}),Kc=Ke(ia),Jh=ae({},ia,{dataTransfer:0}),Yh=Ke(Jh),Zh=ae({},Pi,{relatedTarget:0}),Ua=Ke(Zh),Gh=ae({},Ar,{animationName:0,elapsedTime:0,pseudoElement:0}),eg=Ke(Gh),tg=ae({},Ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ng=Ke(tg),rg=ae({},Ar,{data:0}),Qc=Ke(rg),ig={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},og={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ag={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ag[e])?!!t[e]:!1}function Nl(){return sg}var lg=ae({},Pi,{key:function(e){if(e.key){var t=ig[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=uo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?og[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nl,charCode:function(e){return e.type==="keypress"?uo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?uo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cg=Ke(lg),ug=ae({},ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xc=Ke(ug),dg=ae({},Pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nl}),pg=Ke(dg),fg=ae({},Ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),mg=Ke(fg),hg=ae({},ia,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gg=Ke(hg),yg=[9,13,27,32],Dl=Lt&&"CompositionEvent"in window,Zr=null;Lt&&"documentMode"in document&&(Zr=document.documentMode);var vg=Lt&&"TextEvent"in window&&!Zr,xp=Lt&&(!Dl||Zr&&8<Zr&&11>=Zr),Jc=" ",Yc=!1;function Sp(e,t){switch(e){case"keyup":return yg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ip(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xn=!1;function wg(e,t){switch(e){case"compositionend":return Ip(t);case"keypress":return t.which!==32?null:(Yc=!0,Jc);case"textInput":return e=t.data,e===Jc&&Yc?null:e;default:return null}}function _g(e,t){if(Xn)return e==="compositionend"||!Dl&&Sp(e,t)?(e=kp(),co=Pl=Gt=null,Xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xp&&t.locale!=="ko"?null:t.data;default:return null}}var bg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bg[e.type]:t==="textarea"}function Ap(e,t,n,r){rp(r),t=Ro(t,"onChange"),0<t.length&&(n=new Rl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gr=null,mi=null;function kg(e){Mp(e,0)}function oa(e){var t=Zn(e);if(Jd(t))return e}function xg(e,t){if(e==="change")return t}var Tp=!1;if(Lt){var Ma;if(Lt){var ja="oninput"in document;if(!ja){var Gc=document.createElement("div");Gc.setAttribute("oninput","return;"),ja=typeof Gc.oninput=="function"}Ma=ja}else Ma=!1;Tp=Ma&&(!document.documentMode||9<document.documentMode)}function eu(){Gr&&(Gr.detachEvent("onpropertychange",Ep),mi=Gr=null)}function Ep(e){if(e.propertyName==="value"&&oa(mi)){var t=[];Ap(t,mi,e,Il(e)),sp(kg,t)}}function Sg(e,t,n){e==="focusin"?(eu(),Gr=t,mi=n,Gr.attachEvent("onpropertychange",Ep)):e==="focusout"&&eu()}function Ig(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oa(mi)}function Ag(e,t){if(e==="click")return oa(t)}function Tg(e,t){if(e==="input"||e==="change")return oa(t)}function Eg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:Eg;function hi(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fs.call(t,i)||!mt(e[i],t[i]))return!1}return!0}function tu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nu(e,t){var n=tu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tu(n)}}function Cp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pp(){for(var e=window,t=So();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=So(e.document)}return t}function Ol(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Cg(e){var t=Pp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Cp(n.ownerDocument.documentElement,n)){if(r!==null&&Ol(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=nu(n,o);var a=nu(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Pg=Lt&&"documentMode"in document&&11>=document.documentMode,Jn=null,Ns=null,ei=null,Ds=!1;function ru(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ds||Jn==null||Jn!==So(r)||(r=Jn,"selectionStart"in r&&Ol(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ei&&hi(ei,r)||(ei=r,r=Ro(Ns,"onSelect"),0<r.length&&(t=new Rl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Jn)))}function Ji(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yn={animationend:Ji("Animation","AnimationEnd"),animationiteration:Ji("Animation","AnimationIteration"),animationstart:Ji("Animation","AnimationStart"),transitionend:Ji("Transition","TransitionEnd")},$a={},Rp={};Lt&&(Rp=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function aa(e){if($a[e])return $a[e];if(!Yn[e])return e;var t=Yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rp)return $a[e]=t[n];return e}var Np=aa("animationend"),Dp=aa("animationiteration"),Op=aa("animationstart"),Lp=aa("transitionend"),Up=new Map,iu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gn(e,t){Up.set(e,t),Bn(t,[e])}for(var Fa=0;Fa<iu.length;Fa++){var Ba=iu[Fa],Rg=Ba.toLowerCase(),Ng=Ba[0].toUpperCase()+Ba.slice(1);gn(Rg,"on"+Ng)}gn(Np,"onAnimationEnd");gn(Dp,"onAnimationIteration");gn(Op,"onAnimationStart");gn("dblclick","onDoubleClick");gn("focusin","onFocus");gn("focusout","onBlur");gn(Lp,"onTransitionEnd");hr("onMouseEnter",["mouseout","mouseover"]);hr("onMouseLeave",["mouseout","mouseover"]);hr("onPointerEnter",["pointerout","pointerover"]);hr("onPointerLeave",["pointerout","pointerover"]);Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qr));function ou(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Rh(r,t,void 0,e),e.currentTarget=null}function Mp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;ou(i,s,c),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,c=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;ou(i,s,c),o=l}}}if(Ao)throw e=Es,Ao=!1,Es=null,e}function ee(e,t){var n=t[js];n===void 0&&(n=t[js]=new Set);var r=e+"__bubble";n.has(r)||(jp(t,e,2,!1),n.add(r))}function Ha(e,t,n){var r=0;t&&(r|=4),jp(n,e,r,t)}var Yi="_reactListening"+Math.random().toString(36).slice(2);function gi(e){if(!e[Yi]){e[Yi]=!0,qd.forEach(function(n){n!=="selectionchange"&&(Dg.has(n)||Ha(n,!1,e),Ha(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yi]||(t[Yi]=!0,Ha("selectionchange",!1,t))}}function jp(e,t,n,r){switch(bp(t)){case 1:var i=Kh;break;case 4:i=Qh;break;default:i=Cl}n=i.bind(null,t,n,e),i=void 0,!Ts||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Va(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=En(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}sp(function(){var c=o,f=Il(n),u=[];e:{var d=Up.get(e);if(d!==void 0){var v=Rl,_=e;switch(e){case"keypress":if(uo(n)===0)break e;case"keydown":case"keyup":v=cg;break;case"focusin":_="focus",v=Ua;break;case"focusout":_="blur",v=Ua;break;case"beforeblur":case"afterblur":v=Ua;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Kc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Yh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=pg;break;case Np:case Dp:case Op:v=eg;break;case Lp:v=mg;break;case"scroll":v=Xh;break;case"wheel":v=gg;break;case"copy":case"cut":case"paste":v=ng;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Xc}var x=(t&4)!==0,U=!x&&e==="scroll",m=x?d!==null?d+"Capture":null:d;x=[];for(var p=c,h;p!==null;){h=p;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,m!==null&&(k=ui(p,m),k!=null&&x.push(yi(p,k,h)))),U)break;p=p.return}0<x.length&&(d=new v(d,_,null,n,f),u.push({event:d,listeners:x}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",d&&n!==Is&&(_=n.relatedTarget||n.fromElement)&&(En(_)||_[Ut]))break e;if((v||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,v?(_=n.relatedTarget||n.toElement,v=c,_=_?En(_):null,_!==null&&(U=Hn(_),_!==U||_.tag!==5&&_.tag!==6)&&(_=null)):(v=null,_=c),v!==_)){if(x=Kc,k="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=Xc,k="onPointerLeave",m="onPointerEnter",p="pointer"),U=v==null?d:Zn(v),h=_==null?d:Zn(_),d=new x(k,p+"leave",v,n,f),d.target=U,d.relatedTarget=h,k=null,En(f)===c&&(x=new x(m,p+"enter",_,n,f),x.target=h,x.relatedTarget=U,k=x),U=k,v&&_)t:{for(x=v,m=_,p=0,h=x;h;h=qn(h))p++;for(h=0,k=m;k;k=qn(k))h++;for(;0<p-h;)x=qn(x),p--;for(;0<h-p;)m=qn(m),h--;for(;p--;){if(x===m||m!==null&&x===m.alternate)break t;x=qn(x),m=qn(m)}x=null}else x=null;v!==null&&au(u,d,v,x,!1),_!==null&&U!==null&&au(u,U,_,x,!0)}}e:{if(d=c?Zn(c):window,v=d.nodeName&&d.nodeName.toLowerCase(),v==="select"||v==="input"&&d.type==="file")var I=xg;else if(Zc(d))if(Tp)I=Tg;else{I=Ig;var A=Sg}else(v=d.nodeName)&&v.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=Ag);if(I&&(I=I(e,c))){Ap(u,I,n,f);break e}A&&A(e,d,c),e==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&_s(d,"number",d.value)}switch(A=c?Zn(c):window,e){case"focusin":(Zc(A)||A.contentEditable==="true")&&(Jn=A,Ns=c,ei=null);break;case"focusout":ei=Ns=Jn=null;break;case"mousedown":Ds=!0;break;case"contextmenu":case"mouseup":case"dragend":Ds=!1,ru(u,n,f);break;case"selectionchange":if(Pg)break;case"keydown":case"keyup":ru(u,n,f)}var E;if(Dl)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Xn?Sp(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(xp&&n.locale!=="ko"&&(Xn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Xn&&(E=kp()):(Gt=f,Pl="value"in Gt?Gt.value:Gt.textContent,Xn=!0)),A=Ro(c,P),0<A.length&&(P=new Qc(P,e,null,n,f),u.push({event:P,listeners:A}),E?P.data=E:(E=Ip(n),E!==null&&(P.data=E)))),(E=vg?wg(e,n):_g(e,n))&&(c=Ro(c,"onBeforeInput"),0<c.length&&(f=new Qc("onBeforeInput","beforeinput",null,n,f),u.push({event:f,listeners:c}),f.data=E))}Mp(u,t)})}function yi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ro(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ui(e,n),o!=null&&r.unshift(yi(e,o,i)),o=ui(e,t),o!=null&&r.push(yi(e,o,i))),e=e.return}return r}function qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function au(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&c!==null&&(s=c,i?(l=ui(n,o),l!=null&&a.unshift(yi(n,l,s))):i||(l=ui(n,o),l!=null&&a.push(yi(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Og=/\r\n?/g,Lg=/\u0000|\uFFFD/g;function su(e){return(typeof e=="string"?e:""+e).replace(Og,`
`).replace(Lg,"")}function Zi(e,t,n){if(t=su(t),su(e)!==t&&n)throw Error(S(425))}function No(){}var Os=null,Ls=null;function Us(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ms=typeof setTimeout=="function"?setTimeout:void 0,Ug=typeof clearTimeout=="function"?clearTimeout:void 0,lu=typeof Promise=="function"?Promise:void 0,Mg=typeof queueMicrotask=="function"?queueMicrotask:typeof lu<"u"?function(e){return lu.resolve(null).then(e).catch(jg)}:Ms;function jg(e){setTimeout(function(){throw e})}function za(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),fi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);fi(t)}function an(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function cu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Tr=Math.random().toString(36).slice(2),vt="__reactFiber$"+Tr,vi="__reactProps$"+Tr,Ut="__reactContainer$"+Tr,js="__reactEvents$"+Tr,$g="__reactListeners$"+Tr,Fg="__reactHandles$"+Tr;function En(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ut]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cu(e);e!==null;){if(n=e[vt])return n;e=cu(e)}return t}e=n,n=e.parentNode}return null}function Ri(e){return e=e[vt]||e[Ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function sa(e){return e[vi]||null}var $s=[],Gn=-1;function yn(e){return{current:e}}function te(e){0>Gn||(e.current=$s[Gn],$s[Gn]=null,Gn--)}function G(e,t){Gn++,$s[Gn]=e.current,e.current=t}var mn={},Ee=yn(mn),je=yn(!1),Ln=mn;function gr(e,t){var n=e.type.contextTypes;if(!n)return mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function $e(e){return e=e.childContextTypes,e!=null}function Do(){te(je),te(Ee)}function uu(e,t,n){if(Ee.current!==mn)throw Error(S(168));G(Ee,t),G(je,n)}function $p(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,Sh(e)||"Unknown",i));return ae({},n,r)}function Oo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mn,Ln=Ee.current,G(Ee,e),G(je,je.current),!0}function du(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=$p(e,t,Ln),r.__reactInternalMemoizedMergedChildContext=e,te(je),te(Ee),G(Ee,e)):te(je),G(je,n)}var Tt=null,la=!1,qa=!1;function Fp(e){Tt===null?Tt=[e]:Tt.push(e)}function Bg(e){la=!0,Fp(e)}function vn(){if(!qa&&Tt!==null){qa=!0;var e=0,t=J;try{var n=Tt;for(J=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Tt=null,la=!1}catch(i){throw Tt!==null&&(Tt=Tt.slice(e+1)),dp(Al,vn),i}finally{J=t,qa=!1}}return null}var er=[],tr=0,Lo=null,Uo=0,Ze=[],Ge=0,Un=null,Ct=1,Pt="";function Sn(e,t){er[tr++]=Uo,er[tr++]=Lo,Lo=e,Uo=t}function Bp(e,t,n){Ze[Ge++]=Ct,Ze[Ge++]=Pt,Ze[Ge++]=Un,Un=e;var r=Ct;e=Pt;var i=32-ut(r)-1;r&=~(1<<i),n+=1;var o=32-ut(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ct=1<<32-ut(t)+i|n<<i|r,Pt=o+e}else Ct=1<<o|n<<i|r,Pt=e}function Ll(e){e.return!==null&&(Sn(e,1),Bp(e,1,0))}function Ul(e){for(;e===Lo;)Lo=er[--tr],er[tr]=null,Uo=er[--tr],er[tr]=null;for(;e===Un;)Un=Ze[--Ge],Ze[Ge]=null,Pt=Ze[--Ge],Ze[Ge]=null,Ct=Ze[--Ge],Ze[Ge]=null}var ze=null,Ve=null,re=!1,lt=null;function Hp(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function pu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Ve=an(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Un!==null?{id:Ct,overflow:Pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Ve=null,!0):!1;default:return!1}}function Fs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bs(e){if(re){var t=Ve;if(t){var n=t;if(!pu(e,t)){if(Fs(e))throw Error(S(418));t=an(n.nextSibling);var r=ze;t&&pu(e,t)?Hp(r,n):(e.flags=e.flags&-4097|2,re=!1,ze=e)}}else{if(Fs(e))throw Error(S(418));e.flags=e.flags&-4097|2,re=!1,ze=e}}}function fu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Gi(e){if(e!==ze)return!1;if(!re)return fu(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Us(e.type,e.memoizedProps)),t&&(t=Ve)){if(Fs(e))throw Vp(),Error(S(418));for(;t;)Hp(e,t),t=an(t.nextSibling)}if(fu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ve=an(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ve=null}}else Ve=ze?an(e.stateNode.nextSibling):null;return!0}function Vp(){for(var e=Ve;e;)e=an(e.nextSibling)}function yr(){Ve=ze=null,re=!1}function Ml(e){lt===null?lt=[e]:lt.push(e)}var Hg=Bt.ReactCurrentBatchConfig;function Fr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function eo(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mu(e){var t=e._init;return t(e._payload)}function zp(e){function t(m,p){if(e){var h=m.deletions;h===null?(m.deletions=[p],m.flags|=16):h.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=un(m,p),m.index=0,m.sibling=null,m}function o(m,p,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<p?(m.flags|=2,p):h):(m.flags|=2,p)):(m.flags|=1048576,p)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,p,h,k){return p===null||p.tag!==6?(p=Za(h,m.mode,k),p.return=m,p):(p=i(p,h),p.return=m,p)}function l(m,p,h,k){var I=h.type;return I===Qn?f(m,p,h.props.children,k,h.key):p!==null&&(p.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Wt&&mu(I)===p.type)?(k=i(p,h.props),k.ref=Fr(m,p,h),k.return=m,k):(k=vo(h.type,h.key,h.props,null,m.mode,k),k.ref=Fr(m,p,h),k.return=m,k)}function c(m,p,h,k){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=Ga(h,m.mode,k),p.return=m,p):(p=i(p,h.children||[]),p.return=m,p)}function f(m,p,h,k,I){return p===null||p.tag!==7?(p=Dn(h,m.mode,k,I),p.return=m,p):(p=i(p,h),p.return=m,p)}function u(m,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Za(""+p,m.mode,h),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Vi:return h=vo(p.type,p.key,p.props,null,m.mode,h),h.ref=Fr(m,null,p),h.return=m,h;case Kn:return p=Ga(p,m.mode,h),p.return=m,p;case Wt:var k=p._init;return u(m,k(p._payload),h)}if(Wr(p)||Lr(p))return p=Dn(p,m.mode,h,null),p.return=m,p;eo(m,p)}return null}function d(m,p,h,k){var I=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return I!==null?null:s(m,p,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Vi:return h.key===I?l(m,p,h,k):null;case Kn:return h.key===I?c(m,p,h,k):null;case Wt:return I=h._init,d(m,p,I(h._payload),k)}if(Wr(h)||Lr(h))return I!==null?null:f(m,p,h,k,null);eo(m,h)}return null}function v(m,p,h,k,I){if(typeof k=="string"&&k!==""||typeof k=="number")return m=m.get(h)||null,s(p,m,""+k,I);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Vi:return m=m.get(k.key===null?h:k.key)||null,l(p,m,k,I);case Kn:return m=m.get(k.key===null?h:k.key)||null,c(p,m,k,I);case Wt:var A=k._init;return v(m,p,h,A(k._payload),I)}if(Wr(k)||Lr(k))return m=m.get(h)||null,f(p,m,k,I,null);eo(p,k)}return null}function _(m,p,h,k){for(var I=null,A=null,E=p,P=p=0,X=null;E!==null&&P<h.length;P++){E.index>P?(X=E,E=null):X=E.sibling;var j=d(m,E,h[P],k);if(j===null){E===null&&(E=X);break}e&&E&&j.alternate===null&&t(m,E),p=o(j,p,P),A===null?I=j:A.sibling=j,A=j,E=X}if(P===h.length)return n(m,E),re&&Sn(m,P),I;if(E===null){for(;P<h.length;P++)E=u(m,h[P],k),E!==null&&(p=o(E,p,P),A===null?I=E:A.sibling=E,A=E);return re&&Sn(m,P),I}for(E=r(m,E);P<h.length;P++)X=v(E,m,P,h[P],k),X!==null&&(e&&X.alternate!==null&&E.delete(X.key===null?P:X.key),p=o(X,p,P),A===null?I=X:A.sibling=X,A=X);return e&&E.forEach(function(Be){return t(m,Be)}),re&&Sn(m,P),I}function x(m,p,h,k){var I=Lr(h);if(typeof I!="function")throw Error(S(150));if(h=I.call(h),h==null)throw Error(S(151));for(var A=I=null,E=p,P=p=0,X=null,j=h.next();E!==null&&!j.done;P++,j=h.next()){E.index>P?(X=E,E=null):X=E.sibling;var Be=d(m,E,j.value,k);if(Be===null){E===null&&(E=X);break}e&&E&&Be.alternate===null&&t(m,E),p=o(Be,p,P),A===null?I=Be:A.sibling=Be,A=Be,E=X}if(j.done)return n(m,E),re&&Sn(m,P),I;if(E===null){for(;!j.done;P++,j=h.next())j=u(m,j.value,k),j!==null&&(p=o(j,p,P),A===null?I=j:A.sibling=j,A=j);return re&&Sn(m,P),I}for(E=r(m,E);!j.done;P++,j=h.next())j=v(E,m,P,j.value,k),j!==null&&(e&&j.alternate!==null&&E.delete(j.key===null?P:j.key),p=o(j,p,P),A===null?I=j:A.sibling=j,A=j);return e&&E.forEach(function(bn){return t(m,bn)}),re&&Sn(m,P),I}function U(m,p,h,k){if(typeof h=="object"&&h!==null&&h.type===Qn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Vi:e:{for(var I=h.key,A=p;A!==null;){if(A.key===I){if(I=h.type,I===Qn){if(A.tag===7){n(m,A.sibling),p=i(A,h.props.children),p.return=m,m=p;break e}}else if(A.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Wt&&mu(I)===A.type){n(m,A.sibling),p=i(A,h.props),p.ref=Fr(m,A,h),p.return=m,m=p;break e}n(m,A);break}else t(m,A);A=A.sibling}h.type===Qn?(p=Dn(h.props.children,m.mode,k,h.key),p.return=m,m=p):(k=vo(h.type,h.key,h.props,null,m.mode,k),k.ref=Fr(m,p,h),k.return=m,m=k)}return a(m);case Kn:e:{for(A=h.key;p!==null;){if(p.key===A)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){n(m,p.sibling),p=i(p,h.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=Ga(h,m.mode,k),p.return=m,m=p}return a(m);case Wt:return A=h._init,U(m,p,A(h._payload),k)}if(Wr(h))return _(m,p,h,k);if(Lr(h))return x(m,p,h,k);eo(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,h),p.return=m,m=p):(n(m,p),p=Za(h,m.mode,k),p.return=m,m=p),a(m)):n(m,p)}return U}var vr=zp(!0),qp=zp(!1),Mo=yn(null),jo=null,nr=null,jl=null;function $l(){jl=nr=jo=null}function Fl(e){var t=Mo.current;te(Mo),e._currentValue=t}function Hs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function cr(e,t){jo=e,jl=nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Me=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(jl!==e)if(e={context:e,memoizedValue:t,next:null},nr===null){if(jo===null)throw Error(S(308));nr=e,jo.dependencies={lanes:0,firstContext:e}}else nr=nr.next=e;return t}var Cn=null;function Bl(e){Cn===null?Cn=[e]:Cn.push(e)}function Wp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Bl(t)):(n.next=i.next,i.next=n),t.interleaved=n,Mt(e,r)}function Mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Kt=!1;function Hl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function sn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Mt(e,n)}return i=r.interleaved,i===null?(t.next=t,Bl(r)):(t.next=i.next,i.next=t),r.interleaved=t,Mt(e,n)}function po(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Tl(e,n)}}function hu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $o(e,t,n,r){var i=e.updateQueue;Kt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,c=l.next;l.next=null,a===null?o=c:a.next=c,a=l;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==a&&(s===null?f.firstBaseUpdate=c:s.next=c,f.lastBaseUpdate=l))}if(o!==null){var u=i.baseState;a=0,f=c=l=null,s=o;do{var d=s.lane,v=s.eventTime;if((r&d)===d){f!==null&&(f=f.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var _=e,x=s;switch(d=t,v=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){u=_.call(v,u,d);break e}u=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,d=typeof _=="function"?_.call(v,u,d):_,d==null)break e;u=ae({},u,d);break e;case 2:Kt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[s]:d.push(s))}else v={eventTime:v,lane:d,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(c=f=v,l=u):f=f.next=v,a|=d;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;d=s,s=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(f===null&&(l=u),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);jn|=a,e.lanes=a,e.memoizedState=u}}function gu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Ni={},bt=yn(Ni),wi=yn(Ni),_i=yn(Ni);function Pn(e){if(e===Ni)throw Error(S(174));return e}function Vl(e,t){switch(G(_i,t),G(wi,e),G(bt,Ni),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ks(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ks(t,e)}te(bt),G(bt,t)}function wr(){te(bt),te(wi),te(_i)}function Qp(e){Pn(_i.current);var t=Pn(bt.current),n=ks(t,e.type);t!==n&&(G(wi,e),G(bt,n))}function zl(e){wi.current===e&&(te(bt),te(wi))}var ie=yn(0);function Fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wa=[];function ql(){for(var e=0;e<Wa.length;e++)Wa[e]._workInProgressVersionPrimary=null;Wa.length=0}var fo=Bt.ReactCurrentDispatcher,Ka=Bt.ReactCurrentBatchConfig,Mn=0,oe=null,me=null,ye=null,Bo=!1,ti=!1,bi=0,Vg=0;function Se(){throw Error(S(321))}function Wl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mt(e[n],t[n]))return!1;return!0}function Kl(e,t,n,r,i,o){if(Mn=o,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fo.current=e===null||e.memoizedState===null?Kg:Qg,e=n(r,i),ti){o=0;do{if(ti=!1,bi=0,25<=o)throw Error(S(301));o+=1,ye=me=null,t.updateQueue=null,fo.current=Xg,e=n(r,i)}while(ti)}if(fo.current=Ho,t=me!==null&&me.next!==null,Mn=0,ye=me=oe=null,Bo=!1,t)throw Error(S(300));return e}function Ql(){var e=bi!==0;return bi=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?oe.memoizedState=ye=e:ye=ye.next=e,ye}function rt(){if(me===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=ye===null?oe.memoizedState:ye.next;if(t!==null)ye=t,me=e;else{if(e===null)throw Error(S(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ye===null?oe.memoizedState=ye=e:ye=ye.next=e}return ye}function ki(e,t){return typeof t=="function"?t(e):t}function Qa(e){var t=rt(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=me,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,c=o;do{var f=c.lane;if((Mn&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var u={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=u,a=r):l=l.next=u,oe.lanes|=f,jn|=f}c=c.next}while(c!==null&&c!==o);l===null?a=r:l.next=s,mt(r,t.memoizedState)||(Me=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,oe.lanes|=o,jn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xa(e){var t=rt(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);mt(o,t.memoizedState)||(Me=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Xp(){}function Jp(e,t){var n=oe,r=rt(),i=t(),o=!mt(r.memoizedState,i);if(o&&(r.memoizedState=i,Me=!0),r=r.queue,Xl(Gp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,xi(9,Zp.bind(null,n,r,i,t),void 0,null),ve===null)throw Error(S(349));Mn&30||Yp(n,t,i)}return i}function Yp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zp(e,t,n,r){t.value=n,t.getSnapshot=r,ef(t)&&tf(e)}function Gp(e,t,n){return n(function(){ef(t)&&tf(e)})}function ef(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mt(e,n)}catch{return!0}}function tf(e){var t=Mt(e,1);t!==null&&dt(t,e,1,-1)}function yu(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:e},t.queue=e,e=e.dispatch=Wg.bind(null,oe,e),[t.memoizedState,e]}function xi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function nf(){return rt().memoizedState}function mo(e,t,n,r){var i=yt();oe.flags|=e,i.memoizedState=xi(1|t,n,void 0,r===void 0?null:r)}function ca(e,t,n,r){var i=rt();r=r===void 0?null:r;var o=void 0;if(me!==null){var a=me.memoizedState;if(o=a.destroy,r!==null&&Wl(r,a.deps)){i.memoizedState=xi(t,n,o,r);return}}oe.flags|=e,i.memoizedState=xi(1|t,n,o,r)}function vu(e,t){return mo(8390656,8,e,t)}function Xl(e,t){return ca(2048,8,e,t)}function rf(e,t){return ca(4,2,e,t)}function of(e,t){return ca(4,4,e,t)}function af(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sf(e,t,n){return n=n!=null?n.concat([e]):null,ca(4,4,af.bind(null,t,e),n)}function Jl(){}function lf(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function cf(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function uf(e,t,n){return Mn&21?(mt(n,t)||(n=mp(),oe.lanes|=n,jn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Me=!0),e.memoizedState=n)}function zg(e,t){var n=J;J=n!==0&&4>n?n:4,e(!0);var r=Ka.transition;Ka.transition={};try{e(!1),t()}finally{J=n,Ka.transition=r}}function df(){return rt().memoizedState}function qg(e,t,n){var r=cn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},pf(e))ff(t,n);else if(n=Wp(e,t,n,r),n!==null){var i=Re();dt(n,e,r,i),mf(n,t,r)}}function Wg(e,t,n){var r=cn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(pf(e))ff(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,mt(s,a)){var l=t.interleaved;l===null?(i.next=i,Bl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Wp(e,t,i,r),n!==null&&(i=Re(),dt(n,e,r,i),mf(n,t,r))}}function pf(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function ff(e,t){ti=Bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function mf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Tl(e,n)}}var Ho={readContext:nt,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},Kg={readContext:nt,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:vu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,mo(4194308,4,af.bind(null,t,e),n)},useLayoutEffect:function(e,t){return mo(4194308,4,e,t)},useInsertionEffect:function(e,t){return mo(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qg.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:yu,useDebugValue:Jl,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=yu(!1),t=e[0];return e=zg.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,i=yt();if(re){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ve===null)throw Error(S(349));Mn&30||Yp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,vu(Gp.bind(null,r,o,e),[e]),r.flags|=2048,xi(9,Zp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=yt(),t=ve.identifierPrefix;if(re){var n=Pt,r=Ct;n=(r&~(1<<32-ut(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=bi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Vg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qg={readContext:nt,useCallback:lf,useContext:nt,useEffect:Xl,useImperativeHandle:sf,useInsertionEffect:rf,useLayoutEffect:of,useMemo:cf,useReducer:Qa,useRef:nf,useState:function(){return Qa(ki)},useDebugValue:Jl,useDeferredValue:function(e){var t=rt();return uf(t,me.memoizedState,e)},useTransition:function(){var e=Qa(ki)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Xp,useSyncExternalStore:Jp,useId:df,unstable_isNewReconciler:!1},Xg={readContext:nt,useCallback:lf,useContext:nt,useEffect:Xl,useImperativeHandle:sf,useInsertionEffect:rf,useLayoutEffect:of,useMemo:cf,useReducer:Xa,useRef:nf,useState:function(){return Xa(ki)},useDebugValue:Jl,useDeferredValue:function(e){var t=rt();return me===null?t.memoizedState=e:uf(t,me.memoizedState,e)},useTransition:function(){var e=Xa(ki)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Xp,useSyncExternalStore:Jp,useId:df,unstable_isNewReconciler:!1};function ot(e,t){if(e&&e.defaultProps){t=ae({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Vs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ua={isMounted:function(e){return(e=e._reactInternals)?Hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Re(),i=cn(e),o=Ot(r,i);o.payload=t,n!=null&&(o.callback=n),t=sn(e,o,i),t!==null&&(dt(t,e,i,r),po(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Re(),i=cn(e),o=Ot(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=sn(e,o,i),t!==null&&(dt(t,e,i,r),po(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Re(),r=cn(e),i=Ot(n,r);i.tag=2,t!=null&&(i.callback=t),t=sn(e,i,r),t!==null&&(dt(t,e,r,n),po(t,e,r))}};function wu(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!hi(n,r)||!hi(i,o):!0}function hf(e,t,n){var r=!1,i=mn,o=t.contextType;return typeof o=="object"&&o!==null?o=nt(o):(i=$e(t)?Ln:Ee.current,r=t.contextTypes,o=(r=r!=null)?gr(e,i):mn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ua,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function _u(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ua.enqueueReplaceState(t,t.state,null)}function zs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Hl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=nt(o):(o=$e(t)?Ln:Ee.current,i.context=gr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Vs(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ua.enqueueReplaceState(i,i.state,null),$o(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function _r(e,t){try{var n="",r=t;do n+=xh(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ja(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function qs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Jg=typeof WeakMap=="function"?WeakMap:Map;function gf(e,t,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zo||(zo=!0,tl=r),qs(e,t)},n}function yf(e,t,n){n=Ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){qs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){qs(e,t),typeof r!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function bu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Jg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=uy.bind(null,e,t,n),t.then(e,e))}function ku(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ot(-1,1),t.tag=2,sn(n,t,1))),n.lanes|=1),e)}var Yg=Bt.ReactCurrentOwner,Me=!1;function Ce(e,t,n,r){t.child=e===null?qp(t,null,n,r):vr(t,e.child,n,r)}function Su(e,t,n,r,i){n=n.render;var o=t.ref;return cr(t,i),r=Kl(e,t,n,r,o,i),n=Ql(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,jt(e,t,i)):(re&&n&&Ll(t),t.flags|=1,Ce(e,t,r,i),t.child)}function Iu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ic(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,vf(e,t,o,r,i)):(e=vo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:hi,n(a,r)&&e.ref===t.ref)return jt(e,t,i)}return t.flags|=1,e=un(o,r),e.ref=t.ref,e.return=t,t.child=e}function vf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(hi(o,r)&&e.ref===t.ref)if(Me=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Me=!0);else return t.lanes=e.lanes,jt(e,t,i)}return Ws(e,t,n,r,i)}function wf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ir,He),He|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(ir,He),He|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,G(ir,He),He|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,G(ir,He),He|=r;return Ce(e,t,i,n),t.child}function _f(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ws(e,t,n,r,i){var o=$e(n)?Ln:Ee.current;return o=gr(t,o),cr(t,i),n=Kl(e,t,n,r,o,i),r=Ql(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,jt(e,t,i)):(re&&r&&Ll(t),t.flags|=1,Ce(e,t,n,i),t.child)}function Au(e,t,n,r,i){if($e(n)){var o=!0;Oo(t)}else o=!1;if(cr(t,i),t.stateNode===null)ho(e,t),hf(t,n,r),zs(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=nt(c):(c=$e(n)?Ln:Ee.current,c=gr(t,c));var f=n.getDerivedStateFromProps,u=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";u||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==c)&&_u(t,a,r,c),Kt=!1;var d=t.memoizedState;a.state=d,$o(t,r,a,i),l=t.memoizedState,s!==r||d!==l||je.current||Kt?(typeof f=="function"&&(Vs(t,n,f,r),l=t.memoizedState),(s=Kt||wu(t,n,s,r,d,l,c))?(u||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=c,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Kp(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ot(t.type,s),a.props=c,u=t.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=nt(l):(l=$e(n)?Ln:Ee.current,l=gr(t,l));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==u||d!==l)&&_u(t,a,r,l),Kt=!1,d=t.memoizedState,a.state=d,$o(t,r,a,i);var _=t.memoizedState;s!==u||d!==_||je.current||Kt?(typeof v=="function"&&(Vs(t,n,v,r),_=t.memoizedState),(c=Kt||wu(t,n,c,r,d,_,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,_,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=_),a.props=r,a.state=_,a.context=l,r=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Ks(e,t,n,r,o,i)}function Ks(e,t,n,r,i,o){_f(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&du(t,n,!1),jt(e,t,o);r=t.stateNode,Yg.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=vr(t,e.child,null,o),t.child=vr(t,null,s,o)):Ce(e,t,s,o),t.memoizedState=r.state,i&&du(t,n,!0),t.child}function bf(e){var t=e.stateNode;t.pendingContext?uu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&uu(e,t.context,!1),Vl(e,t.containerInfo)}function Tu(e,t,n,r,i){return yr(),Ml(i),t.flags|=256,Ce(e,t,n,r),t.child}var Qs={dehydrated:null,treeContext:null,retryLane:0};function Xs(e){return{baseLanes:e,cachePool:null,transitions:null}}function kf(e,t,n){var r=t.pendingProps,i=ie.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),G(ie,i&1),e===null)return Bs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=fa(a,r,0,null),e=Dn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Xs(n),t.memoizedState=Qs,e):Yl(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Zg(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=un(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=un(s,o):(o=Dn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Xs(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Qs,r}return o=e.child,e=o.sibling,r=un(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Yl(e,t){return t=fa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function to(e,t,n,r){return r!==null&&Ml(r),vr(t,e.child,null,n),e=Yl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zg(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Ja(Error(S(422))),to(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=fa({mode:"visible",children:r.children},i,0,null),o=Dn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&vr(t,e.child,null,a),t.child.memoizedState=Xs(a),t.memoizedState=Qs,o);if(!(t.mode&1))return to(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(S(419)),r=Ja(o,r,void 0),to(e,t,a,r)}if(s=(a&e.childLanes)!==0,Me||s){if(r=ve,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Mt(e,i),dt(r,e,i,-1))}return rc(),r=Ja(Error(S(421))),to(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=dy.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ve=an(i.nextSibling),ze=t,re=!0,lt=null,e!==null&&(Ze[Ge++]=Ct,Ze[Ge++]=Pt,Ze[Ge++]=Un,Ct=e.id,Pt=e.overflow,Un=t),t=Yl(t,r.children),t.flags|=4096,t)}function Eu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Hs(e.return,t,n)}function Ya(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function xf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ce(e,t,r.children,n),r=ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Eu(e,n,t);else if(e.tag===19)Eu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(ie,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Fo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ya(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Fo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ya(t,!0,n,null,o);break;case"together":Ya(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ho(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),jn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=un(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=un(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gg(e,t,n){switch(t.tag){case 3:bf(t),yr();break;case 5:Qp(t);break;case 1:$e(t.type)&&Oo(t);break;case 4:Vl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;G(Mo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(ie,ie.current&1),t.flags|=128,null):n&t.child.childLanes?kf(e,t,n):(G(ie,ie.current&1),e=jt(e,t,n),e!==null?e.sibling:null);G(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return xf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,wf(e,t,n)}return jt(e,t,n)}var Sf,Js,If,Af;Sf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Js=function(){};If=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Pn(bt.current);var o=null;switch(n){case"input":i=vs(e,i),r=vs(e,r),o=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),o=[];break;case"textarea":i=bs(e,i),r=bs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=No)}xs(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(li.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(li.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ee("scroll",e),o||s===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Af=function(e,t,n,r){n!==r&&(t.flags|=4)};function Br(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ey(e,t,n){var r=t.pendingProps;switch(Ul(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return $e(t.type)&&Do(),Ie(t),null;case 3:return r=t.stateNode,wr(),te(je),te(Ee),ql(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Gi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,lt!==null&&(il(lt),lt=null))),Js(e,t),Ie(t),null;case 5:zl(t);var i=Pn(_i.current);if(n=t.type,e!==null&&t.stateNode!=null)If(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return Ie(t),null}if(e=Pn(bt.current),Gi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[vt]=t,r[vi]=o,e=(t.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<Qr.length;i++)ee(Qr[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":Mc(r,o),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ee("invalid",r);break;case"textarea":$c(r,o),ee("invalid",r)}xs(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Zi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Zi(r.textContent,s,e),i=["children",""+s]):li.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ee("scroll",r)}switch(n){case"input":zi(r),jc(r,o,!0);break;case"textarea":zi(r),Fc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=No)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[vt]=t,e[vi]=r,Sf(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ss(n,r),n){case"dialog":ee("cancel",e),ee("close",e),i=r;break;case"iframe":case"object":case"embed":ee("load",e),i=r;break;case"video":case"audio":for(i=0;i<Qr.length;i++)ee(Qr[i],e);i=r;break;case"source":ee("error",e),i=r;break;case"img":case"image":case"link":ee("error",e),ee("load",e),i=r;break;case"details":ee("toggle",e),i=r;break;case"input":Mc(e,r),i=vs(e,r),ee("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),ee("invalid",e);break;case"textarea":$c(e,r),i=bs(e,r),ee("invalid",e);break;default:i=r}xs(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?np(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ep(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ci(e,l):typeof l=="number"&&ci(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(li.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ee("scroll",e):l!=null&&bl(e,o,l,a))}switch(n){case"input":zi(e),jc(e,r,!1);break;case"textarea":zi(e),Fc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+fn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?or(e,!!r.multiple,o,!1):r.defaultValue!=null&&or(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=No)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ie(t),null;case 6:if(e&&t.stateNode!=null)Af(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Pn(_i.current),Pn(bt.current),Gi(t)){if(r=t.stateNode,n=t.memoizedProps,r[vt]=t,(o=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:Zi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vt]=t,t.stateNode=r}return Ie(t),null;case 13:if(te(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Ve!==null&&t.mode&1&&!(t.flags&128))Vp(),yr(),t.flags|=98560,o=!1;else if(o=Gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[vt]=t}else yr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ie(t),o=!1}else lt!==null&&(il(lt),lt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ie.current&1?ge===0&&(ge=3):rc())),t.updateQueue!==null&&(t.flags|=4),Ie(t),null);case 4:return wr(),Js(e,t),e===null&&gi(t.stateNode.containerInfo),Ie(t),null;case 10:return Fl(t.type._context),Ie(t),null;case 17:return $e(t.type)&&Do(),Ie(t),null;case 19:if(te(ie),o=t.memoizedState,o===null)return Ie(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Br(o,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Fo(e),a!==null){for(t.flags|=128,Br(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(ie,ie.current&1|2),t.child}e=e.sibling}o.tail!==null&&ue()>br&&(t.flags|=128,r=!0,Br(o,!1),t.lanes=4194304)}else{if(!r)if(e=Fo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Br(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!re)return Ie(t),null}else 2*ue()-o.renderingStartTime>br&&n!==1073741824&&(t.flags|=128,r=!0,Br(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ue(),t.sibling=null,n=ie.current,G(ie,r?n&1|2:n&1),t):(Ie(t),null);case 22:case 23:return nc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?He&1073741824&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function ty(e,t){switch(Ul(t),t.tag){case 1:return $e(t.type)&&Do(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wr(),te(je),te(Ee),ql(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zl(t),null;case 13:if(te(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));yr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(ie),null;case 4:return wr(),null;case 10:return Fl(t.type._context),null;case 22:case 23:return nc(),null;case 24:return null;default:return null}}var no=!1,Te=!1,ny=typeof WeakSet=="function"?WeakSet:Set,T=null;function rr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(e,t,r)}else n.current=null}function Ys(e,t,n){try{n()}catch(r){le(e,t,r)}}var Cu=!1;function ry(e,t){if(Os=Co,e=Pp(),Ol(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,c=0,f=0,u=e,d=null;t:for(;;){for(var v;u!==n||i!==0&&u.nodeType!==3||(s=a+i),u!==o||r!==0&&u.nodeType!==3||(l=a+r),u.nodeType===3&&(a+=u.nodeValue.length),(v=u.firstChild)!==null;)d=u,u=v;for(;;){if(u===e)break t;if(d===n&&++c===i&&(s=a),d===o&&++f===r&&(l=a),(v=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ls={focusedElem:e,selectionRange:n},Co=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,U=_.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:ot(t.type,x),U);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(k){le(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return _=Cu,Cu=!1,_}function ni(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ys(t,n,o)}i=i.next}while(i!==r)}}function da(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Zs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Tf(e){var t=e.alternate;t!==null&&(e.alternate=null,Tf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vt],delete t[vi],delete t[js],delete t[$g],delete t[Fg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ef(e){return e.tag===5||e.tag===3||e.tag===4}function Pu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ef(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=No));else if(r!==4&&(e=e.child,e!==null))for(Gs(e,t,n),e=e.sibling;e!==null;)Gs(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}var _e=null,at=!1;function Vt(e,t,n){for(n=n.child;n!==null;)Cf(e,t,n),n=n.sibling}function Cf(e,t,n){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(ra,n)}catch{}switch(n.tag){case 5:Te||rr(n,t);case 6:var r=_e,i=at;_e=null,Vt(e,t,n),_e=r,at=i,_e!==null&&(at?(e=_e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(at?(e=_e,n=n.stateNode,e.nodeType===8?za(e.parentNode,n):e.nodeType===1&&za(e,n),fi(e)):za(_e,n.stateNode));break;case 4:r=_e,i=at,_e=n.stateNode.containerInfo,at=!0,Vt(e,t,n),_e=r,at=i;break;case 0:case 11:case 14:case 15:if(!Te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Ys(n,t,a),i=i.next}while(i!==r)}Vt(e,t,n);break;case 1:if(!Te&&(rr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){le(n,t,s)}Vt(e,t,n);break;case 21:Vt(e,t,n);break;case 22:n.mode&1?(Te=(r=Te)||n.memoizedState!==null,Vt(e,t,n),Te=r):Vt(e,t,n);break;default:Vt(e,t,n)}}function Ru(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ny),t.forEach(function(r){var i=py.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function it(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:_e=s.stateNode,at=!1;break e;case 3:_e=s.stateNode.containerInfo,at=!0;break e;case 4:_e=s.stateNode.containerInfo,at=!0;break e}s=s.return}if(_e===null)throw Error(S(160));Cf(o,a,i),_e=null,at=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){le(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pf(t,e),t=t.sibling}function Pf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(it(t,e),gt(e),r&4){try{ni(3,e,e.return),da(3,e)}catch(x){le(e,e.return,x)}try{ni(5,e,e.return)}catch(x){le(e,e.return,x)}}break;case 1:it(t,e),gt(e),r&512&&n!==null&&rr(n,n.return);break;case 5:if(it(t,e),gt(e),r&512&&n!==null&&rr(n,n.return),e.flags&32){var i=e.stateNode;try{ci(i,"")}catch(x){le(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Yd(i,o),Ss(s,a);var c=Ss(s,o);for(a=0;a<l.length;a+=2){var f=l[a],u=l[a+1];f==="style"?np(i,u):f==="dangerouslySetInnerHTML"?ep(i,u):f==="children"?ci(i,u):bl(i,f,u,c)}switch(s){case"input":ws(i,o);break;case"textarea":Zd(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?or(i,!!o.multiple,v,!1):d!==!!o.multiple&&(o.defaultValue!=null?or(i,!!o.multiple,o.defaultValue,!0):or(i,!!o.multiple,o.multiple?[]:"",!1))}i[vi]=o}catch(x){le(e,e.return,x)}}break;case 6:if(it(t,e),gt(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){le(e,e.return,x)}}break;case 3:if(it(t,e),gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fi(t.containerInfo)}catch(x){le(e,e.return,x)}break;case 4:it(t,e),gt(e);break;case 13:it(t,e),gt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ec=ue())),r&4&&Ru(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Te=(c=Te)||f,it(t,e),Te=c):it(t,e),gt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(T=e,f=e.child;f!==null;){for(u=T=f;T!==null;){switch(d=T,v=d.child,d.tag){case 0:case 11:case 14:case 15:ni(4,d,d.return);break;case 1:rr(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(x){le(r,n,x)}}break;case 5:rr(d,d.return);break;case 22:if(d.memoizedState!==null){Du(u);continue}}v!==null?(v.return=d,T=v):Du(u)}f=f.sibling}e:for(f=null,u=e;;){if(u.tag===5){if(f===null){f=u;try{i=u.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=u.stateNode,l=u.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=tp("display",a))}catch(x){le(e,e.return,x)}}}else if(u.tag===6){if(f===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(x){le(e,e.return,x)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===e)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;u.sibling===null;){if(u.return===null||u.return===e)break e;f===u&&(f=null),u=u.return}f===u&&(f=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:it(t,e),gt(e),r&4&&Ru(e);break;case 21:break;default:it(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ef(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ci(i,""),r.flags&=-33);var o=Pu(e);el(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Pu(e);Gs(e,s,a);break;default:throw Error(S(161))}}catch(l){le(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function iy(e,t,n){T=e,Rf(e)}function Rf(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||no;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Te;s=no;var c=Te;if(no=a,(Te=l)&&!c)for(T=i;T!==null;)a=T,l=a.child,a.tag===22&&a.memoizedState!==null?Ou(i):l!==null?(l.return=a,T=l):Ou(i);for(;o!==null;)T=o,Rf(o),o=o.sibling;T=i,no=s,Te=c}Nu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,T=o):Nu(e)}}function Nu(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Te||da(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Te)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ot(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&gu(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gu(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var u=f.dehydrated;u!==null&&fi(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Te||t.flags&512&&Zs(t)}catch(d){le(t,t.return,d)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Du(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Ou(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{da(4,t)}catch(l){le(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){le(t,i,l)}}var o=t.return;try{Zs(t)}catch(l){le(t,o,l)}break;case 5:var a=t.return;try{Zs(t)}catch(l){le(t,a,l)}}}catch(l){le(t,t.return,l)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var oy=Math.ceil,Vo=Bt.ReactCurrentDispatcher,Zl=Bt.ReactCurrentOwner,tt=Bt.ReactCurrentBatchConfig,V=0,ve=null,pe=null,ke=0,He=0,ir=yn(0),ge=0,Si=null,jn=0,pa=0,Gl=0,ri=null,Ue=null,ec=0,br=1/0,At=null,zo=!1,tl=null,ln=null,ro=!1,en=null,qo=0,ii=0,nl=null,go=-1,yo=0;function Re(){return V&6?ue():go!==-1?go:go=ue()}function cn(e){return e.mode&1?V&2&&ke!==0?ke&-ke:Hg.transition!==null?(yo===0&&(yo=mp()),yo):(e=J,e!==0||(e=window.event,e=e===void 0?16:bp(e.type)),e):1}function dt(e,t,n,r){if(50<ii)throw ii=0,nl=null,Error(S(185));Ci(e,n,r),(!(V&2)||e!==ve)&&(e===ve&&(!(V&2)&&(pa|=n),ge===4&&Xt(e,ke)),Fe(e,r),n===1&&V===0&&!(t.mode&1)&&(br=ue()+500,la&&vn()))}function Fe(e,t){var n=e.callbackNode;Hh(e,t);var r=Eo(e,e===ve?ke:0);if(r===0)n!==null&&Vc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Vc(n),t===1)e.tag===0?Bg(Lu.bind(null,e)):Fp(Lu.bind(null,e)),Mg(function(){!(V&6)&&vn()}),n=null;else{switch(hp(r)){case 1:n=Al;break;case 4:n=pp;break;case 16:n=To;break;case 536870912:n=fp;break;default:n=To}n=$f(n,Nf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Nf(e,t){if(go=-1,yo=0,V&6)throw Error(S(327));var n=e.callbackNode;if(ur()&&e.callbackNode!==n)return null;var r=Eo(e,e===ve?ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Wo(e,r);else{t=r;var i=V;V|=2;var o=Of();(ve!==e||ke!==t)&&(At=null,br=ue()+500,Nn(e,t));do try{ly();break}catch(s){Df(e,s)}while(!0);$l(),Vo.current=o,V=i,pe!==null?t=0:(ve=null,ke=0,t=ge)}if(t!==0){if(t===2&&(i=Cs(e),i!==0&&(r=i,t=rl(e,i))),t===1)throw n=Si,Nn(e,0),Xt(e,r),Fe(e,ue()),n;if(t===6)Xt(e,r);else{if(i=e.current.alternate,!(r&30)&&!ay(i)&&(t=Wo(e,r),t===2&&(o=Cs(e),o!==0&&(r=o,t=rl(e,o))),t===1))throw n=Si,Nn(e,0),Xt(e,r),Fe(e,ue()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:In(e,Ue,At);break;case 3:if(Xt(e,r),(r&130023424)===r&&(t=ec+500-ue(),10<t)){if(Eo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Re(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ms(In.bind(null,e,Ue,At),t);break}In(e,Ue,At);break;case 4:if(Xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-ut(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*oy(r/1960))-r,10<r){e.timeoutHandle=Ms(In.bind(null,e,Ue,At),r);break}In(e,Ue,At);break;case 5:In(e,Ue,At);break;default:throw Error(S(329))}}}return Fe(e,ue()),e.callbackNode===n?Nf.bind(null,e):null}function rl(e,t){var n=ri;return e.current.memoizedState.isDehydrated&&(Nn(e,t).flags|=256),e=Wo(e,t),e!==2&&(t=Ue,Ue=n,t!==null&&il(t)),e}function il(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function ay(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!mt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xt(e,t){for(t&=~Gl,t&=~pa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ut(t),r=1<<n;e[n]=-1,t&=~r}}function Lu(e){if(V&6)throw Error(S(327));ur();var t=Eo(e,0);if(!(t&1))return Fe(e,ue()),null;var n=Wo(e,t);if(e.tag!==0&&n===2){var r=Cs(e);r!==0&&(t=r,n=rl(e,r))}if(n===1)throw n=Si,Nn(e,0),Xt(e,t),Fe(e,ue()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,In(e,Ue,At),Fe(e,ue()),null}function tc(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(br=ue()+500,la&&vn())}}function $n(e){en!==null&&en.tag===0&&!(V&6)&&ur();var t=V;V|=1;var n=tt.transition,r=J;try{if(tt.transition=null,J=1,e)return e()}finally{J=r,tt.transition=n,V=t,!(V&6)&&vn()}}function nc(){He=ir.current,te(ir)}function Nn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ug(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(Ul(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Do();break;case 3:wr(),te(je),te(Ee),ql();break;case 5:zl(r);break;case 4:wr();break;case 13:te(ie);break;case 19:te(ie);break;case 10:Fl(r.type._context);break;case 22:case 23:nc()}n=n.return}if(ve=e,pe=e=un(e.current,null),ke=He=t,ge=0,Si=null,Gl=pa=jn=0,Ue=ri=null,Cn!==null){for(t=0;t<Cn.length;t++)if(n=Cn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Cn=null}return e}function Df(e,t){do{var n=pe;try{if($l(),fo.current=Ho,Bo){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Bo=!1}if(Mn=0,ye=me=oe=null,ti=!1,bi=0,Zl.current=null,n===null||n.return===null){ge=1,Si=t,pe=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=ke,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=s,u=f.tag;if(!(f.mode&1)&&(u===0||u===11||u===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=ku(a);if(v!==null){v.flags&=-257,xu(v,a,s,o,t),v.mode&1&&bu(o,c,t),t=v,l=c;var _=t.updateQueue;if(_===null){var x=new Set;x.add(l),t.updateQueue=x}else _.add(l);break e}else{if(!(t&1)){bu(o,c,t),rc();break e}l=Error(S(426))}}else if(re&&s.mode&1){var U=ku(a);if(U!==null){!(U.flags&65536)&&(U.flags|=256),xu(U,a,s,o,t),Ml(_r(l,s));break e}}o=l=_r(l,s),ge!==4&&(ge=2),ri===null?ri=[o]:ri.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=gf(o,l,t);hu(o,m);break e;case 1:s=l;var p=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ln===null||!ln.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=yf(o,s,t);hu(o,k);break e}}o=o.return}while(o!==null)}Uf(n)}catch(I){t=I,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(!0)}function Of(){var e=Vo.current;return Vo.current=Ho,e===null?Ho:e}function rc(){(ge===0||ge===3||ge===2)&&(ge=4),ve===null||!(jn&268435455)&&!(pa&268435455)||Xt(ve,ke)}function Wo(e,t){var n=V;V|=2;var r=Of();(ve!==e||ke!==t)&&(At=null,Nn(e,t));do try{sy();break}catch(i){Df(e,i)}while(!0);if($l(),V=n,Vo.current=r,pe!==null)throw Error(S(261));return ve=null,ke=0,ge}function sy(){for(;pe!==null;)Lf(pe)}function ly(){for(;pe!==null&&!Dh();)Lf(pe)}function Lf(e){var t=jf(e.alternate,e,He);e.memoizedProps=e.pendingProps,t===null?Uf(e):pe=t,Zl.current=null}function Uf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ty(n,t),n!==null){n.flags&=32767,pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,pe=null;return}}else if(n=ey(n,t,He),n!==null){pe=n;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);ge===0&&(ge=5)}function In(e,t,n){var r=J,i=tt.transition;try{tt.transition=null,J=1,cy(e,t,n,r)}finally{tt.transition=i,J=r}return null}function cy(e,t,n,r){do ur();while(en!==null);if(V&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Vh(e,o),e===ve&&(pe=ve=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ro||(ro=!0,$f(To,function(){return ur(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=tt.transition,tt.transition=null;var a=J;J=1;var s=V;V|=4,Zl.current=null,ry(e,n),Pf(n,e),Cg(Ls),Co=!!Os,Ls=Os=null,e.current=n,iy(n),Oh(),V=s,J=a,tt.transition=o}else e.current=n;if(ro&&(ro=!1,en=e,qo=i),o=e.pendingLanes,o===0&&(ln=null),Mh(n.stateNode),Fe(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zo)throw zo=!1,e=tl,tl=null,e;return qo&1&&e.tag!==0&&ur(),o=e.pendingLanes,o&1?e===nl?ii++:(ii=0,nl=e):ii=0,vn(),null}function ur(){if(en!==null){var e=hp(qo),t=tt.transition,n=J;try{if(tt.transition=null,J=16>e?16:e,en===null)var r=!1;else{if(e=en,en=null,qo=0,V&6)throw Error(S(331));var i=V;for(V|=4,T=e.current;T!==null;){var o=T,a=o.child;if(T.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(T=c;T!==null;){var f=T;switch(f.tag){case 0:case 11:case 15:ni(8,f,o)}var u=f.child;if(u!==null)u.return=f,T=u;else for(;T!==null;){f=T;var d=f.sibling,v=f.return;if(Tf(f),f===c){T=null;break}if(d!==null){d.return=v,T=d;break}T=v}}}var _=o.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var U=x.sibling;x.sibling=null,x=U}while(x!==null)}}T=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,T=a;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ni(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,T=m;break e}T=o.return}}var p=e.current;for(T=p;T!==null;){a=T;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,T=h;else e:for(a=p;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:da(9,s)}}catch(I){le(s,s.return,I)}if(s===a){T=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,T=k;break e}T=s.return}}if(V=i,vn(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(ra,e)}catch{}r=!0}return r}finally{J=n,tt.transition=t}}return!1}function Uu(e,t,n){t=_r(n,t),t=gf(e,t,1),e=sn(e,t,1),t=Re(),e!==null&&(Ci(e,1,t),Fe(e,t))}function le(e,t,n){if(e.tag===3)Uu(e,e,n);else for(;t!==null;){if(t.tag===3){Uu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ln===null||!ln.has(r))){e=_r(n,e),e=yf(t,e,1),t=sn(t,e,1),e=Re(),t!==null&&(Ci(t,1,e),Fe(t,e));break}}t=t.return}}function uy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Re(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(ke&n)===n&&(ge===4||ge===3&&(ke&130023424)===ke&&500>ue()-ec?Nn(e,0):Gl|=n),Fe(e,t)}function Mf(e,t){t===0&&(e.mode&1?(t=Ki,Ki<<=1,!(Ki&130023424)&&(Ki=4194304)):t=1);var n=Re();e=Mt(e,t),e!==null&&(Ci(e,t,n),Fe(e,n))}function dy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Mf(e,n)}function py(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Mf(e,n)}var jf;jf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)Me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Me=!1,Gg(e,t,n);Me=!!(e.flags&131072)}else Me=!1,re&&t.flags&1048576&&Bp(t,Uo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ho(e,t),e=t.pendingProps;var i=gr(t,Ee.current);cr(t,n),i=Kl(null,t,r,e,i,n);var o=Ql();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(r)?(o=!0,Oo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Hl(t),i.updater=ua,t.stateNode=i,i._reactInternals=t,zs(t,r,e,n),t=Ks(null,t,r,!0,o,n)):(t.tag=0,re&&o&&Ll(t),Ce(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ho(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=my(r),e=ot(r,e),i){case 0:t=Ws(null,t,r,e,n);break e;case 1:t=Au(null,t,r,e,n);break e;case 11:t=Su(null,t,r,e,n);break e;case 14:t=Iu(null,t,r,ot(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),Ws(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),Au(e,t,r,i,n);case 3:e:{if(bf(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Kp(e,t),$o(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=_r(Error(S(423)),t),t=Tu(e,t,r,n,i);break e}else if(r!==i){i=_r(Error(S(424)),t),t=Tu(e,t,r,n,i);break e}else for(Ve=an(t.stateNode.containerInfo.firstChild),ze=t,re=!0,lt=null,n=qp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yr(),r===i){t=jt(e,t,n);break e}Ce(e,t,r,n)}t=t.child}return t;case 5:return Qp(t),e===null&&Bs(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Us(r,i)?a=null:o!==null&&Us(r,o)&&(t.flags|=32),_f(e,t),Ce(e,t,a,n),t.child;case 6:return e===null&&Bs(t),null;case 13:return kf(e,t,n);case 4:return Vl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vr(t,null,r,n):Ce(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),Su(e,t,r,i,n);case 7:return Ce(e,t,t.pendingProps,n),t.child;case 8:return Ce(e,t,t.pendingProps.children,n),t.child;case 12:return Ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,G(Mo,r._currentValue),r._currentValue=a,o!==null)if(mt(o.value,a)){if(o.children===i.children&&!je.current){t=jt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Ot(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Hs(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(S(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Hs(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ce(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,cr(t,n),i=nt(i),r=r(i),t.flags|=1,Ce(e,t,r,n),t.child;case 14:return r=t.type,i=ot(r,t.pendingProps),i=ot(r.type,i),Iu(e,t,r,i,n);case 15:return vf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),ho(e,t),t.tag=1,$e(r)?(e=!0,Oo(t)):e=!1,cr(t,n),hf(t,r,i),zs(t,r,i,n),Ks(null,t,r,!0,e,n);case 19:return xf(e,t,n);case 22:return wf(e,t,n)}throw Error(S(156,t.tag))};function $f(e,t){return dp(e,t)}function fy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,r){return new fy(e,t,n,r)}function ic(e){return e=e.prototype,!(!e||!e.isReactComponent)}function my(e){if(typeof e=="function")return ic(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xl)return 11;if(e===Sl)return 14}return 2}function un(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function vo(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")ic(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Qn:return Dn(n.children,i,o,t);case kl:a=8,i|=8;break;case ms:return e=et(12,n,t,i|2),e.elementType=ms,e.lanes=o,e;case hs:return e=et(13,n,t,i),e.elementType=hs,e.lanes=o,e;case gs:return e=et(19,n,t,i),e.elementType=gs,e.lanes=o,e;case Qd:return fa(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wd:a=10;break e;case Kd:a=9;break e;case xl:a=11;break e;case Sl:a=14;break e;case Wt:a=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=et(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Dn(e,t,n,r){return e=et(7,e,r,t),e.lanes=n,e}function fa(e,t,n,r){return e=et(22,e,r,t),e.elementType=Qd,e.lanes=n,e.stateNode={isHidden:!1},e}function Za(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function Ga(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function hy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Da(0),this.expirationTimes=Da(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Da(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function oc(e,t,n,r,i,o,a,s,l){return e=new hy(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=et(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hl(o),e}function gy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ff(e){if(!e)return mn;e=e._reactInternals;e:{if(Hn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if($e(n))return $p(e,n,t)}return t}function Bf(e,t,n,r,i,o,a,s,l){return e=oc(n,r,!0,e,i,o,a,s,l),e.context=Ff(null),n=e.current,r=Re(),i=cn(n),o=Ot(r,i),o.callback=t??null,sn(n,o,i),e.current.lanes=i,Ci(e,i,r),Fe(e,r),e}function ma(e,t,n,r){var i=t.current,o=Re(),a=cn(i);return n=Ff(n),t.context===null?t.context=n:t.pendingContext=n,t=Ot(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=sn(i,t,a),e!==null&&(dt(e,i,a,o),po(e,i,a)),a}function Ko(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ac(e,t){Mu(e,t),(e=e.alternate)&&Mu(e,t)}function yy(){return null}var Hf=typeof reportError=="function"?reportError:function(e){console.error(e)};function sc(e){this._internalRoot=e}ha.prototype.render=sc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));ma(e,t,null,null)};ha.prototype.unmount=sc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$n(function(){ma(null,e,null,null)}),t[Ut]=null}};function ha(e){this._internalRoot=e}ha.prototype.unstable_scheduleHydration=function(e){if(e){var t=vp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Qt.length&&t!==0&&t<Qt[n].priority;n++);Qt.splice(n,0,e),n===0&&_p(e)}};function lc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ga(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ju(){}function vy(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Ko(a);o.call(c)}}var a=Bf(t,r,e,0,null,!1,!1,"",ju);return e._reactRootContainer=a,e[Ut]=a.current,gi(e.nodeType===8?e.parentNode:e),$n(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=Ko(l);s.call(c)}}var l=oc(e,0,!1,null,null,!1,!1,"",ju);return e._reactRootContainer=l,e[Ut]=l.current,gi(e.nodeType===8?e.parentNode:e),$n(function(){ma(t,l,n,r)}),l}function ya(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=Ko(a);s.call(l)}}ma(t,a,e,i)}else a=vy(n,t,e,i,r);return Ko(a)}gp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Kr(t.pendingLanes);n!==0&&(Tl(t,n|1),Fe(t,ue()),!(V&6)&&(br=ue()+500,vn()))}break;case 13:$n(function(){var r=Mt(e,1);if(r!==null){var i=Re();dt(r,e,1,i)}}),ac(e,1)}};El=function(e){if(e.tag===13){var t=Mt(e,134217728);if(t!==null){var n=Re();dt(t,e,134217728,n)}ac(e,134217728)}};yp=function(e){if(e.tag===13){var t=cn(e),n=Mt(e,t);if(n!==null){var r=Re();dt(n,e,t,r)}ac(e,t)}};vp=function(){return J};wp=function(e,t){var n=J;try{return J=e,t()}finally{J=n}};As=function(e,t,n){switch(t){case"input":if(ws(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=sa(r);if(!i)throw Error(S(90));Jd(r),ws(r,i)}}}break;case"textarea":Zd(e,n);break;case"select":t=n.value,t!=null&&or(e,!!n.multiple,t,!1)}};op=tc;ap=$n;var wy={usingClientEntryPoint:!1,Events:[Ri,Zn,sa,rp,ip,tc]},Hr={findFiberByHostInstance:En,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_y={bundleType:Hr.bundleType,version:Hr.version,rendererPackageName:Hr.rendererPackageName,rendererConfig:Hr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cp(e),e===null?null:e.stateNode},findFiberByHostInstance:Hr.findFiberByHostInstance||yy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!io.isDisabled&&io.supportsFiber)try{ra=io.inject(_y),_t=io}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wy;We.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lc(t))throw Error(S(200));return gy(e,t,null,n)};We.createRoot=function(e,t){if(!lc(e))throw Error(S(299));var n=!1,r="",i=Hf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=oc(e,1,!1,null,null,n,!1,r,i),e[Ut]=t.current,gi(e.nodeType===8?e.parentNode:e),new sc(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=cp(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return $n(e)};We.hydrate=function(e,t,n){if(!ga(t))throw Error(S(200));return ya(null,e,t,!0,n)};We.hydrateRoot=function(e,t,n){if(!lc(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Hf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Bf(t,null,e,1,n??null,i,!1,o,a),e[Ut]=t.current,gi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ha(t)};We.render=function(e,t,n){if(!ga(t))throw Error(S(200));return ya(null,e,t,!1,n)};We.unmountComponentAtNode=function(e){if(!ga(e))throw Error(S(40));return e._reactRootContainer?($n(function(){ya(null,null,e,!1,function(){e._reactRootContainer=null,e[Ut]=null})}),!0):!1};We.unstable_batchedUpdates=tc;We.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ga(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return ya(e,t,n,!1,r)};We.version="18.3.1-next-f1338f8080-20240426";function Vf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vf)}catch(e){console.error(e)}}Vf(),Hd.exports=We;var by=Hd.exports,$u=by;ps.createRoot=$u.createRoot,ps.hydrateRoot=$u.hydrateRoot;function ky({code:e,setCode:t,language:n}){return W.jsx("textarea",{value:e,onChange:r=>t(r.target.value),className:"w-full h-64 p-2 font-mono border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-sm",placeholder:`Enter your ${n} code here...`})}function xy({explanation:e}){const t=e.split(`
`).filter(n=>n.trim()!=="");return W.jsxs("div",{className:"mt-4 p-4 border border-green-600 bg-green-100 dark:bg-green-900 dark:border-green-400 rounded",children:[W.jsx("h2",{className:"font-semibold mb-2",children:"Explanation:"}),W.jsx("ul",{className:"list-disc list-inside space-y-1",children:t.map((n,r)=>{const i=n.match(/\*\*(.+?)\*\*(.*)/);return i?W.jsxs("li",{children:[W.jsx("strong",{children:i[1]}),i[2]]},r):W.jsx("li",{children:n},r)})})]})}function Sy(){const[e,t]=Dt.useState(()=>localStorage.getItem("theme")==="dark");return Dt.useEffect(()=>{e?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))},[e]),W.jsx("button",{onClick:()=>t(!e),className:"px-3 py-1 border rounded text-sm",children:e?"Light Mode":"Dark Mode"})}const Iy=()=>{};var Fu={};/**
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
 */const zf=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Ay=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],a=e[n++],s=e[n++],l=((i&7)<<18|(o&63)<<12|(a&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},qf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],a=i+1<e.length,s=a?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,f=o>>2,u=(o&3)<<4|s>>4;let d=(s&15)<<2|c>>6,v=c&63;l||(v=64,a||(d=64)),r.push(n[f],n[u],n[d],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(zf(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ay(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const u=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||s==null||c==null||u==null)throw new Ty;const d=o<<2|s>>4;if(r.push(d),c!==64){const v=s<<4&240|c>>2;if(r.push(v),u!==64){const _=c<<6&192|u;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Ty extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ey=function(e){const t=zf(e);return qf.encodeByteArray(t,!0)},Wf=function(e){return Ey(e).replace(/\./g,"")},Kf=function(e){try{return qf.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Cy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Py=()=>Cy().__FIREBASE_DEFAULTS__,Ry=()=>{if(typeof process>"u"||typeof Fu>"u")return;const e=Fu.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Ny=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Kf(e[1]);return t&&JSON.parse(t)},cc=()=>{try{return Iy()||Py()||Ry()||Ny()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Dy=e=>{var t,n;return(n=(t=cc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Qf=()=>{var e;return(e=cc())===null||e===void 0?void 0:e.config},Xf=e=>{var t;return(t=cc())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Oy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ly(e){return(await fetch(e,{credentials:"include"})).ok}const oi={};function Uy(){const e={prod:[],emulator:[]};for(const t of Object.keys(oi))oi[t]?e.emulator.push(t):e.prod.push(t);return e}function My(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let Bu=!1;function jy(e,t){if(typeof window>"u"||typeof document>"u"||!va(window.location.host)||oi[e]===t||oi[e]||Bu)return;oi[e]=t;function n(d){return`__firebase__banner__${d}`}const r="__firebase__banner",o=Uy().prod.length>0;function a(){const d=document.getElementById(r);d&&d.remove()}function s(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function l(d,v){d.setAttribute("width","24"),d.setAttribute("id",v),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function c(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{Bu=!0,a()},d}function f(d,v){d.setAttribute("id",v),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function u(){const d=My(r),v=n("text"),_=document.getElementById(v)||document.createElement("span"),x=n("learnmore"),U=document.getElementById(x)||document.createElement("a"),m=n("preprendIcon"),p=document.getElementById(m)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const h=d.element;s(h),f(U,x);const k=c();l(p,m),h.append(p,_,U,k),document.body.appendChild(h)}o?(_.innerText="Preview backend disconnected.",p.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(p.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",u):u()}/**
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
 */function Ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $y(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function Fy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function By(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Hy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vy(){const e=Ne();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function zy(){try{return typeof indexedDB=="object"}catch{return!1}}function qy(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
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
 */const Wy="FirebaseError";class wn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Wy,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Di.prototype.create)}}class Di{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?Ky(o,r):"Error",s=`${this.serviceName}: ${a} (${i}).`;return new wn(i,s,r)}}function Ky(e,t){return e.replace(Qy,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Qy=/\{\$([^}]+)}/g;function Xy(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function kr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],a=t[i];if(Hu(o)&&Hu(a)){if(!kr(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Hu(e){return e!==null&&typeof e=="object"}/**
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
 */function Oi(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Jy(e,t){const n=new Yy(e,t);return n.subscribe.bind(n)}class Yy{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Zy(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=es),i.error===void 0&&(i.error=es),i.complete===void 0&&(i.complete=es);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zy(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function es(){}/**
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
 */function _n(e){return e&&e._delegate?e._delegate:e}class xr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const An="[DEFAULT]";/**
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
 */class Gy{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Oy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(tv(t))try{this.getOrInitializeService({instanceIdentifier:An})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=An){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=An){return this.instances.has(t)}getOptions(t=An){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(o);r===s&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ev(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=An){return this.component?this.component.multipleInstances?t:An:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ev(e){return e===An?void 0:e}function tv(e){return e.instantiationMode==="EAGER"}/**
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
 */class nv{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Gy(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Z||(Z={}));const rv={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},iv=Z.INFO,ov={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},av=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=ov[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Jf{constructor(t){this.name=t,this._logLevel=iv,this._logHandler=av,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?rv[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...t),this._logHandler(this,Z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...t),this._logHandler(this,Z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...t),this._logHandler(this,Z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...t),this._logHandler(this,Z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...t),this._logHandler(this,Z.ERROR,...t)}}const sv=(e,t)=>t.some(n=>e instanceof n);let Vu,zu;function lv(){return Vu||(Vu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cv(){return zu||(zu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yf=new WeakMap,ol=new WeakMap,Zf=new WeakMap,ts=new WeakMap,uc=new WeakMap;function uv(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{n(dn(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&Yf.set(n,e)}).catch(()=>{}),uc.set(t,e),t}function dv(e){if(ol.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});ol.set(e,t)}let al={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ol.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Zf.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function pv(e){al=e(al)}function fv(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ns(this),t,...n);return Zf.set(r,t.sort?t.sort():[t]),dn(r)}:cv().includes(e)?function(...t){return e.apply(ns(this),t),dn(Yf.get(this))}:function(...t){return dn(e.apply(ns(this),t))}}function mv(e){return typeof e=="function"?fv(e):(e instanceof IDBTransaction&&dv(e),sv(e,lv())?new Proxy(e,al):e)}function dn(e){if(e instanceof IDBRequest)return uv(e);if(ts.has(e))return ts.get(e);const t=mv(e);return t!==e&&(ts.set(e,t),uc.set(t,e)),t}const ns=e=>uc.get(e);function hv(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),s=dn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(dn(a.result),l.oldVersion,l.newVersion,dn(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),s.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),s}const gv=["get","getKey","getAll","getAllKeys","count"],yv=["put","add","delete","clear"],rs=new Map;function qu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(rs.get(t))return rs.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=yv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||gv.includes(n)))return;const o=async function(a,...s){const l=this.transaction(a,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(s.shift())),(await Promise.all([c[n](...s),i&&l.done]))[0]};return rs.set(t,o),o}pv(e=>({...e,get:(t,n,r)=>qu(t,n)||e.get(t,n,r),has:(t,n)=>!!qu(t,n)||e.has(t,n)}));/**
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
 */class vv{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wv(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const sl="@firebase/app",Wu="0.13.2";/**
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
 */const $t=new Jf("@firebase/app"),_v="@firebase/app-compat",bv="@firebase/analytics-compat",kv="@firebase/analytics",xv="@firebase/app-check-compat",Sv="@firebase/app-check",Iv="@firebase/auth",Av="@firebase/auth-compat",Tv="@firebase/database",Ev="@firebase/data-connect",Cv="@firebase/database-compat",Pv="@firebase/functions",Rv="@firebase/functions-compat",Nv="@firebase/installations",Dv="@firebase/installations-compat",Ov="@firebase/messaging",Lv="@firebase/messaging-compat",Uv="@firebase/performance",Mv="@firebase/performance-compat",jv="@firebase/remote-config",$v="@firebase/remote-config-compat",Fv="@firebase/storage",Bv="@firebase/storage-compat",Hv="@firebase/firestore",Vv="@firebase/ai",zv="@firebase/firestore-compat",qv="firebase",Wv="11.10.0";/**
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
 */const ll="[DEFAULT]",Kv={[sl]:"fire-core",[_v]:"fire-core-compat",[kv]:"fire-analytics",[bv]:"fire-analytics-compat",[Sv]:"fire-app-check",[xv]:"fire-app-check-compat",[Iv]:"fire-auth",[Av]:"fire-auth-compat",[Tv]:"fire-rtdb",[Ev]:"fire-data-connect",[Cv]:"fire-rtdb-compat",[Pv]:"fire-fn",[Rv]:"fire-fn-compat",[Nv]:"fire-iid",[Dv]:"fire-iid-compat",[Ov]:"fire-fcm",[Lv]:"fire-fcm-compat",[Uv]:"fire-perf",[Mv]:"fire-perf-compat",[jv]:"fire-rc",[$v]:"fire-rc-compat",[Fv]:"fire-gcs",[Bv]:"fire-gcs-compat",[Hv]:"fire-fst",[zv]:"fire-fst-compat",[Vv]:"fire-vertex","fire-js":"fire-js",[qv]:"fire-js-all"};/**
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
 */const Qo=new Map,Qv=new Map,cl=new Map;function Ku(e,t){try{e.container.addComponent(t)}catch(n){$t.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ii(e){const t=e.name;if(cl.has(t))return $t.debug(`There were multiple attempts to register component ${t}.`),!1;cl.set(t,e);for(const n of Qo.values())Ku(n,e);for(const n of Qv.values())Ku(n,e);return!0}function Gf(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function wt(e){return e==null?!1:e.settings!==void 0}/**
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
 */const Xv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pn=new Di("app","Firebase",Xv);/**
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
 */class Jv{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw pn.create("app-deleted",{appName:this._name})}}/**
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
 */const Li=Wv;function em(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ll,automaticDataCollectionEnabled:!0},t),i=r.name;if(typeof i!="string"||!i)throw pn.create("bad-app-name",{appName:String(i)});if(n||(n=Qf()),!n)throw pn.create("no-options");const o=Qo.get(i);if(o){if(kr(n,o.options)&&kr(r,o.config))return o;throw pn.create("duplicate-app",{appName:i})}const a=new nv(i);for(const l of cl.values())a.addComponent(l);const s=new Jv(n,r,a);return Qo.set(i,s),s}function Yv(e=ll){const t=Qo.get(e);if(!t&&e===ll&&Qf())return em();if(!t)throw pn.create("no-app",{appName:e});return t}function dr(e,t,n){var r;let i=(r=Kv[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const s=[`Unable to register library "${i}" with version "${t}":`];o&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&s.push("and"),a&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$t.warn(s.join(" "));return}Ii(new xr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Zv="firebase-heartbeat-database",Gv=1,Ai="firebase-heartbeat-store";let is=null;function tm(){return is||(is=hv(Zv,Gv,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ai)}catch(n){console.warn(n)}}}}).catch(e=>{throw pn.create("idb-open",{originalErrorMessage:e.message})})),is}async function ew(e){try{const n=(await tm()).transaction(Ai),r=await n.objectStore(Ai).get(nm(e));return await n.done,r}catch(t){if(t instanceof wn)$t.warn(t.message);else{const n=pn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$t.warn(n.message)}}}async function Qu(e,t){try{const r=(await tm()).transaction(Ai,"readwrite");await r.objectStore(Ai).put(t,nm(e)),await r.done}catch(n){if(n instanceof wn)$t.warn(n.message);else{const r=pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$t.warn(r.message)}}}function nm(e){return`${e.name}!${e.options.appId}`}/**
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
 */const tw=1024,nw=30;class rw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ow(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Xu();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>nw){const a=aw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){$t.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xu(),{heartbeatsToSend:r,unsentEntries:i}=iw(this._heartbeatsCache.heartbeats),o=Wf(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return $t.warn(n),""}}}function Xu(){return new Date().toISOString().substring(0,10)}function iw(e,t=tw){const n=[];let r=e.slice();for(const i of e){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Ju(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ju(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ow{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zy()?qy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ew(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Ju(e){return Wf(JSON.stringify({version:2,heartbeats:e})).length}function aw(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function sw(e){Ii(new xr("platform-logger",t=>new vv(t),"PRIVATE")),Ii(new xr("heartbeat",t=>new rw(t),"PRIVATE")),dr(sl,Wu,e),dr(sl,Wu,"esm2017"),dr("fire-js","")}sw("");var lw="firebase",cw="11.10.0";/**
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
 */dr(lw,cw,"app");function dc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function rm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uw=rm,im=new Di("auth","Firebase",rm());/**
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
 */const Xo=new Jf("@firebase/auth");function dw(e,...t){Xo.logLevel<=Z.WARN&&Xo.warn(`Auth (${Li}): ${e}`,...t)}function wo(e,...t){Xo.logLevel<=Z.ERROR&&Xo.error(`Auth (${Li}): ${e}`,...t)}/**
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
 */function xt(e,...t){throw fc(e,...t)}function pt(e,...t){return fc(e,...t)}function pc(e,t,n){const r=Object.assign(Object.assign({},uw()),{[t]:n});return new Di("auth","Firebase",r).create(t,{appName:e.name})}function On(e){return pc(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pw(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&xt(e,"argument-error"),pc(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function fc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return im.create(e,...t)}function O(e,t,...n){if(!e)throw fc(t,...n)}function Rt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw wo(t),new Error(t)}function Ft(e,t){e||Rt(t)}/**
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
 */function ul(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function fw(){return Yu()==="http:"||Yu()==="https:"}function Yu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function mw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fw()||By()||"connection"in navigator)?navigator.onLine:!0}function hw(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Ui{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ft(n>t,"Short delay should be less than long delay!"),this.isMobile=$y()||Hy()}get(){return mw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function mc(e,t){Ft(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class om{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const gw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const yw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],vw=new Ui(3e4,6e4);function hc(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Er(e,t,n,r,i={}){return am(e,i,async()=>{let o={},a={};r&&(t==="GET"?a=r:o={body:JSON.stringify(r)});const s=Oi(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const c=Object.assign({method:t,headers:l},o);return Fy()||(c.referrerPolicy="no-referrer"),e.emulatorConfig&&va(e.emulatorConfig.host)&&(c.credentials="include"),om.fetch()(await sm(e,e.config.apiHost,n,s),c)})}async function am(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},gw),t);try{const i=new _w(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw oo(e,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const s=o.ok?a.errorMessage:a.error.message,[l,c]=s.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw oo(e,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw oo(e,"email-already-in-use",a);if(l==="USER_DISABLED")throw oo(e,"user-disabled",a);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw pc(e,f,c);xt(e,f)}}catch(i){if(i instanceof wn)throw i;xt(e,"network-request-failed",{message:String(i)})}}async function ww(e,t,n,r,i={}){const o=await Er(e,t,n,r,i);return"mfaPendingCredential"in o&&xt(e,"multi-factor-auth-required",{_serverResponse:o}),o}async function sm(e,t,n,r){const i=`${t}${n}?${r}`,o=e,a=o.config.emulator?mc(e.config,i):`${e.config.apiScheme}://${i}`;return yw.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class _w{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pt(this.auth,"network-request-failed")),vw.get())})}}function oo(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=pt(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function bw(e,t){return Er(e,"POST","/v1/accounts:delete",t)}async function Jo(e,t){return Er(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function ai(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function kw(e,t=!1){const n=_n(e),r=await n.getIdToken(t),i=gc(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:ai(os(i.auth_time)),issuedAtTime:ai(os(i.iat)),expirationTime:ai(os(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function os(e){return Number(e)*1e3}function gc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return wo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Kf(n);return i?JSON.parse(i):(wo("Failed to decode base64 JWT payload"),null)}catch(i){return wo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Zu(e){const t=gc(e);return O(t,"internal-error"),O(typeof t.exp<"u","internal-error"),O(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ti(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof wn&&xw(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function xw({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class Sw{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class dl{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ai(this.lastLoginAt),this.creationTime=ai(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yo(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ti(e,Jo(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?lm(o.providerUserInfo):[],s=Aw(e.providerData,a),l=e.isAnonymous,c=!(e.email&&o.passwordHash)&&!(s!=null&&s.length),f=l?c:!1,u={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:s,metadata:new dl(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(e,u)}async function Iw(e){const t=_n(e);await Yo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Aw(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function lm(e){return e.map(t=>{var{providerId:n}=t,r=dc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Tw(e,t){const n=await am(e,{},async()=>{const r=Oi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,a=await sm(e,i,"/v1/token",`key=${o}`),s=await e._getAdditionalHeaders();s["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:s,body:r};return e.emulatorConfig&&va(e.emulatorConfig.host)&&(l.credentials="include"),om.fetch()(a,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ew(e,t){return Er(e,"POST","/v2/accounts:revokeToken",hc(e,t))}/**
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
 */class pr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){O(t.idToken,"internal-error"),O(typeof t.idToken<"u","internal-error"),O(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Zu(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){O(t.length!==0,"internal-error");const n=Zu(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await Tw(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,a=new pr;return r&&(O(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),o&&(O(typeof o=="number","internal-error",{appName:t}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new pr,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
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
 */function zt(e,t){O(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class ct{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=dc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Sw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new dl(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Ti(this,this.stsTokenManager.getToken(this.auth,t));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return kw(this,t)}reload(){return Iw(this)}_assign(t){this!==t&&(O(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new ct(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Yo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject(On(this.auth));const t=await this.getIdToken();return await Ti(this,bw(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,a,s,l,c,f;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,v=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,_=(a=n.photoURL)!==null&&a!==void 0?a:void 0,x=(s=n.tenantId)!==null&&s!==void 0?s:void 0,U=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(c=n.createdAt)!==null&&c!==void 0?c:void 0,p=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:h,emailVerified:k,isAnonymous:I,providerData:A,stsTokenManager:E}=n;O(h&&E,t,"internal-error");const P=pr.fromJSON(this.name,E);O(typeof h=="string",t,"internal-error"),zt(u,t.name),zt(d,t.name),O(typeof k=="boolean",t,"internal-error"),O(typeof I=="boolean",t,"internal-error"),zt(v,t.name),zt(_,t.name),zt(x,t.name),zt(U,t.name),zt(m,t.name),zt(p,t.name);const X=new ct({uid:h,auth:t,email:d,emailVerified:k,displayName:u,isAnonymous:I,photoURL:_,phoneNumber:v,tenantId:x,stsTokenManager:P,createdAt:m,lastLoginAt:p});return A&&Array.isArray(A)&&(X.providerData=A.map(j=>Object.assign({},j))),U&&(X._redirectEventId=U),X}static async _fromIdTokenResponse(t,n,r=!1){const i=new pr;i.updateFromServerResponse(n);const o=new ct({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Yo(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];O(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?lm(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),s=new pr;s.updateFromIdToken(r);const l=new ct({uid:i.localId,auth:t,stsTokenManager:s,isAnonymous:a}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new dl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,c),l}}/**
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
 */const Gu=new Map;function Nt(e){Ft(e instanceof Function,"Expected a class definition");let t=Gu.get(e);return t?(Ft(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Gu.set(e,t),t)}/**
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
 */class cm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}cm.type="NONE";const ed=cm;/**
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
 */function _o(e,t,n){return`firebase:${e}:${t}:${n}`}class fr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=_o(this.userKey,i.apiKey,o),this.fullPersistenceKey=_o("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Jo(this.auth,{idToken:t}).catch(()=>{});return n?ct._fromGetAccountInfoResponse(this.auth,n,t):null}return ct._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new fr(Nt(ed),t,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let o=i[0]||Nt(ed);const a=_o(r,t.config.apiKey,t.name);let s=null;for(const c of n)try{const f=await c._get(a);if(f){let u;if(typeof f=="string"){const d=await Jo(t,{idToken:f}).catch(()=>{});if(!d)break;u=await ct._fromGetAccountInfoResponse(t,d,f)}else u=ct._fromJSON(t,f);c!==o&&(s=u),o=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new fr(o,t,r):(o=l[0],s&&await o._set(a,s.toJSON()),await Promise.all(n.map(async c=>{if(c!==o)try{await c._remove(a)}catch{}})),new fr(o,t,r))}}/**
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
 */function td(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(fm(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(um(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(hm(t))return"Blackberry";if(gm(t))return"Webos";if(dm(t))return"Safari";if((t.includes("chrome/")||pm(t))&&!t.includes("edge/"))return"Chrome";if(mm(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function um(e=Ne()){return/firefox\//i.test(e)}function dm(e=Ne()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function pm(e=Ne()){return/crios\//i.test(e)}function fm(e=Ne()){return/iemobile/i.test(e)}function mm(e=Ne()){return/android/i.test(e)}function hm(e=Ne()){return/blackberry/i.test(e)}function gm(e=Ne()){return/webos/i.test(e)}function yc(e=Ne()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Cw(e=Ne()){var t;return yc(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Pw(){return Vy()&&document.documentMode===10}function ym(e=Ne()){return yc(e)||mm(e)||gm(e)||hm(e)||/windows phone/i.test(e)||fm(e)}/**
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
 */function vm(e,t=[]){let n;switch(e){case"Browser":n=td(Ne());break;case"Worker":n=`${td(Ne())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Li}/${r}`}/**
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
 */class Rw{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((a,s)=>{try{const l=t(o);a(l)}catch(l){s(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Nw(e,t={}){return Er(e,"GET","/v2/passwordPolicy",hc(e,t))}/**
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
 */const Dw=6;class Ow{constructor(t){var n,r,i,o;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:Dw,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,a,s;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(s=l.containsNonAlphanumericCharacter)!==null&&s!==void 0?s:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
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
 */class Lw{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nd(this),this.idTokenSubscription=new nd(this),this.beforeStateQueue=new Rw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=im,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Nt(n)),this._initializationPromise=this.queue(async()=>{var r,i,o;if(!this._deleted&&(this.persistenceManager=await fr.create(this,t),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Jo(this,{idToken:t}),r=await ct._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(wt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(s=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(s,s))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!a||a===s)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Yo(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=hw()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(wt(this.app))return Promise.reject(On(this));const n=t?_n(t):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&O(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return wt(this.app)?Promise.reject(On(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return wt(this.app)?Promise.reject(On(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Nw(this),n=new Ow(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Di("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ew(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Nt(t)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await fr.create(this,[Nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(s,this,"internal-error"),s.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{a=!0,l()}}else{const l=t.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=vm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;if(wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&dw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function wa(e){return _n(e)}class nd{constructor(t){this.auth=t,this.observer=null,this.addObserver=Jy(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let vc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Uw(e){vc=e}function Mw(e){return vc.loadJS(e)}function jw(){return vc.gapiScript}function $w(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Fw(e,t){const n=Gf(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(kr(o,t??{}))return i;xt(i,"already-initialized")}return n.initialize({options:t})}function Bw(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Hw(e,t,n){const r=wa(e);O(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,o=wm(t),{host:a,port:s}=Vw(t),l=s===null?"":`:${s}`,c={url:`${o}//${a}${l}/`},f=Object.freeze({host:a,port:s,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){O(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),O(kr(c,r.config.emulator)&&kr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,va(a)?(Ly(`${o}//${a}${l}`),jy("Auth",!0)):zw()}function wm(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Vw(e){const t=wm(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:rd(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:rd(a)}}}function rd(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function zw(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class _m{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Rt("not implemented")}_getIdTokenResponse(t){return Rt("not implemented")}_linkToIdToken(t,n){return Rt("not implemented")}_getReauthenticationResolver(t){return Rt("not implemented")}}/**
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
 */async function mr(e,t){return ww(e,"POST","/v1/accounts:signInWithIdp",hc(e,t))}/**
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
 */const qw="http://localhost";class Fn extends _m{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Fn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=dc(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Fn(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return mr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,mr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,mr(t,n)}buildRequest(){const t={requestUri:qw,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Oi(n)}return t}}/**
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
 */class wc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mi extends wc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Jt extends Mi{constructor(){super("facebook.com")}static credential(t){return Fn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Jt.credential(t.oauthAccessToken)}catch{return null}}}Jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jt.PROVIDER_ID="facebook.com";/**
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
 */class Et extends Mi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Fn._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Et.credentialFromTaggedObject(t)}static credentialFromError(t){return Et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Et.credential(n,r)}catch{return null}}}Et.GOOGLE_SIGN_IN_METHOD="google.com";Et.PROVIDER_ID="google.com";/**
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
 */class Yt extends Mi{constructor(){super("github.com")}static credential(t){return Fn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Yt.credentialFromTaggedObject(t)}static credentialFromError(t){return Yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Yt.credential(t.oauthAccessToken)}catch{return null}}}Yt.GITHUB_SIGN_IN_METHOD="github.com";Yt.PROVIDER_ID="github.com";/**
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
 */class Zt extends Mi{constructor(){super("twitter.com")}static credential(t,n){return Fn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Zt.credentialFromTaggedObject(t)}static credentialFromError(t){return Zt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Zt.credential(n,r)}catch{return null}}}Zt.TWITTER_SIGN_IN_METHOD="twitter.com";Zt.PROVIDER_ID="twitter.com";/**
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
 */class Sr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await ct._fromIdTokenResponse(t,r,i),a=id(r);return new Sr({user:o,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=id(r);return new Sr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function id(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Zo extends wn{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Zo.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Zo(t,n,r,i)}}function bm(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Zo._fromErrorAndOperation(e,o,t,r):o})}async function Ww(e,t,n=!1){const r=await Ti(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Sr._forOperation(e,"link",r)}/**
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
 */async function Kw(e,t,n=!1){const{auth:r}=e;if(wt(r.app))return Promise.reject(On(r));const i="reauthenticate";try{const o=await Ti(e,bm(r,i,t,e),n);O(o.idToken,r,"internal-error");const a=gc(o.idToken);O(a,r,"internal-error");const{sub:s}=a;return O(e.uid===s,r,"user-mismatch"),Sr._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&xt(r,"user-mismatch"),o}}/**
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
 */async function Qw(e,t,n=!1){if(wt(e.app))return Promise.reject(On(e));const r="signIn",i=await bm(e,r,t),o=await Sr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function Xw(e,t,n,r){return _n(e).onIdTokenChanged(t,n,r)}function Jw(e,t,n){return _n(e).beforeAuthStateChanged(t,n)}function Yw(e,t,n,r){return _n(e).onAuthStateChanged(t,n,r)}function Zw(e){return _n(e).signOut()}const Go="__sak";/**
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
 */class km{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Go,"1"),this.storage.removeItem(Go),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Gw=1e3,e_=10;class xm extends km{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ym(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,s,l)=>{this.notifyListeners(a,l)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);Pw()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,e_):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Gw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}xm.type="LOCAL";const t_=xm;/**
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
 */class Sm extends km{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Sm.type="SESSION";const Im=Sm;/**
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
 */function n_(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class _a{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new _a(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const s=Array.from(a).map(async c=>c(n.origin,o)),l=await n_(s);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_a.receivers=[];/**
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
 */function _c(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class r_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((s,l)=>{const c=_c("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(u){const d=u;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),s(d.data.response);break;default:clearTimeout(f),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function kt(){return window}function i_(e){kt().location.href=e}/**
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
 */function Am(){return typeof kt().WorkerGlobalScope<"u"&&typeof kt().importScripts=="function"}async function o_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function a_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function s_(){return Am()?self:null}/**
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
 */const Tm="firebaseLocalStorageDb",l_=1,ea="firebaseLocalStorage",Em="fbase_key";class ji{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ba(e,t){return e.transaction([ea],t?"readwrite":"readonly").objectStore(ea)}function c_(){const e=indexedDB.deleteDatabase(Tm);return new ji(e).toPromise()}function pl(){const e=indexedDB.open(Tm,l_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ea,{keyPath:Em})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ea)?t(r):(r.close(),await c_(),t(await pl()))})})}async function od(e,t,n){const r=ba(e,!0).put({[Em]:t,value:n});return new ji(r).toPromise()}async function u_(e,t){const n=ba(e,!1).get(t),r=await new ji(n).toPromise();return r===void 0?null:r.value}function ad(e,t){const n=ba(e,!0).delete(t);return new ji(n).toPromise()}const d_=800,p_=3;class Cm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pl(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>p_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Am()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_a._getInstance(s_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await o_(),!this.activeServiceWorker)return;this.sender=new r_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||a_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await pl();return await od(t,Go,"1"),await ad(t,Go),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>od(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>u_(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ad(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=ba(i,!1).getAll();return new ji(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),d_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cm.type="LOCAL";const f_=Cm;new Ui(3e4,6e4);/**
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
 */function Pm(e,t){return t?Nt(t):(O(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class bc extends _m{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return mr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return mr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return mr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function m_(e){return Qw(e.auth,new bc(e),e.bypassAuthState)}function h_(e){const{auth:t,user:n}=e;return O(n,t,"internal-error"),Kw(n,new bc(e),e.bypassAuthState)}async function g_(e){const{auth:t,user:n}=e;return O(n,t,"internal-error"),Ww(n,new bc(e),e.bypassAuthState)}/**
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
 */class Rm{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:a,type:s}=t;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(l))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return m_;case"linkViaPopup":case"linkViaRedirect":return g_;case"reauthViaPopup":case"reauthViaRedirect":return h_;default:xt(this.auth,"internal-error")}}resolve(t){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const y_=new Ui(2e3,1e4);async function v_(e,t,n){if(wt(e.app))return Promise.reject(pt(e,"operation-not-supported-in-this-environment"));const r=wa(e);pw(e,t,wc);const i=Pm(r,n);return new Rn(r,"signInViaPopup",t,i).executeNotNull()}class Rn extends Rm{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Rn.currentPopupAction&&Rn.currentPopupAction.cancel(),Rn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return O(t,this.auth,"internal-error"),t}async onExecution(){Ft(this.filter.length===1,"Popup operations only handle one event");const t=_c();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,y_.get())};t()}}Rn.currentPopupAction=null;/**
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
 */const w_="pendingRedirect",bo=new Map;class __ extends Rm{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=bo.get(this.auth._key());if(!t){try{const r=await b_(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}bo.set(this.auth._key(),t)}return this.bypassAuthState||bo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function b_(e,t){const n=S_(t),r=x_(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function k_(e,t){bo.set(e._key(),t)}function x_(e){return Nt(e._redirectPersistence)}function S_(e){return _o(w_,e.config.apiKey,e.name)}async function I_(e,t,n=!1){if(wt(e.app))return Promise.reject(On(e));const r=wa(e),i=Pm(r,t),a=await new __(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
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
 */const A_=10*60*1e3;class T_{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!E_(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Nm(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(pt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=A_&&this.cachedEventUids.clear(),this.cachedEventUids.has(sd(t))}saveEventToCache(t){this.cachedEventUids.add(sd(t)),this.lastProcessedEventTime=Date.now()}}function sd(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Nm({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function E_(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nm(e);default:return!1}}/**
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
 */async function C_(e,t={}){return Er(e,"GET","/v1/projects",t)}/**
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
 */const P_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,R_=/^https?/;async function N_(e){if(e.config.emulator)return;const{authorizedDomains:t}=await C_(e);for(const n of t)try{if(D_(n))return}catch{}xt(e,"unauthorized-domain")}function D_(e){const t=ul(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!R_.test(n))return!1;if(P_.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const O_=new Ui(3e4,6e4);function ld(){const e=kt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function L_(e){return new Promise((t,n)=>{var r,i,o;function a(){ld(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ld(),n(pt(e,"network-request-failed"))},timeout:O_.get()})}if(!((i=(r=kt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=kt().gapi)===null||o===void 0)&&o.load)a();else{const s=$w("iframefcb");return kt()[s]=()=>{gapi.load?a():n(pt(e,"network-request-failed"))},Mw(`${jw()}?onload=${s}`).catch(l=>n(l))}}).catch(t=>{throw ko=null,t})}let ko=null;function U_(e){return ko=ko||L_(e),ko}/**
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
 */const M_=new Ui(5e3,15e3),j_="__/auth/iframe",$_="emulator/auth/iframe",F_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},B_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function H_(e){const t=e.config;O(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?mc(t,$_):`https://${e.config.authDomain}/${j_}`,r={apiKey:t.apiKey,appName:e.name,v:Li},i=B_.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Oi(r).slice(1)}`}async function V_(e){const t=await U_(e),n=kt().gapi;return O(n,e,"internal-error"),t.open({where:document.body,url:H_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:F_,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=pt(e,"network-request-failed"),s=kt().setTimeout(()=>{o(a)},M_.get());function l(){kt().clearTimeout(s),i(r)}r.ping(l).then(l,()=>{o(a)})}))}/**
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
 */const z_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},q_=500,W_=600,K_="_blank",Q_="http://localhost";class cd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function X_(e,t,n,r=q_,i=W_){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},z_),{width:r.toString(),height:i.toString(),top:o,left:a}),c=Ne().toLowerCase();n&&(s=pm(c)?K_:n),um(c)&&(t=t||Q_,l.scrollbars="yes");const f=Object.entries(l).reduce((d,[v,_])=>`${d}${v}=${_},`,"");if(Cw(c)&&s!=="_self")return J_(t||"",s),new cd(null);const u=window.open(t||"",s,f);O(u,e,"popup-blocked");try{u.focus()}catch{}return new cd(u)}function J_(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Y_="__/auth/handler",Z_="emulator/auth/handler",G_=encodeURIComponent("fac");async function ud(e,t,n,r,i,o){O(e.config.authDomain,e,"auth-domain-config-required"),O(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Li,eventId:i};if(t instanceof wc){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",Xy(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,u]of Object.entries({}))a[f]=u}if(t instanceof Mi){const f=t.getScopes().filter(u=>u!=="");f.length>0&&(a.scopes=f.join(","))}e.tenantId&&(a.tid=e.tenantId);const s=a;for(const f of Object.keys(s))s[f]===void 0&&delete s[f];const l=await e._getAppCheckToken(),c=l?`#${G_}=${encodeURIComponent(l)}`:"";return`${eb(e)}?${Oi(s).slice(1)}${c}`}function eb({config:e}){return e.emulator?mc(e,Z_):`https://${e.authDomain}/${Y_}`}/**
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
 */const as="webStorageSupport";class tb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Im,this._completeRedirectFn=I_,this._overrideRedirectResult=k_}async _openPopup(t,n,r,i){var o;Ft((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await ud(t,n,r,ul(),i);return X_(t,a,_c())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await ud(t,n,r,ul(),i);return i_(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Ft(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await V_(t),r=new T_(t);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(as,{type:as},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[as];a!==void 0&&n(!!a),xt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=N_(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return ym()||dm()||yc()}}const nb=tb;var dd="@firebase/auth",pd="1.10.8";/**
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
 */class rb{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ib(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ob(e){Ii(new xr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:a,authDomain:s}=r.options;O(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vm(e)},c=new Lw(r,i,o,l);return Bw(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ii(new xr("auth-internal",t=>{const n=wa(t.getProvider("auth").getImmediate());return(r=>new rb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dr(dd,pd,ib(e)),dr(dd,pd,"esm2017")}/**
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
 */const ab=5*60,sb=Xf("authIdTokenMaxAge")||ab;let fd=null;const lb=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>sb)return;const i=n==null?void 0:n.token;fd!==i&&(fd=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function cb(e=Yv()){const t=Gf(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Fw(e,{popupRedirectResolver:nb,persistence:[f_,t_,Im]}),r=Xf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=lb(o.toString());Jw(n,a,()=>a(n.currentUser)),Xw(n,s=>a(s))}}const i=Dy("auth");return i&&Hw(n,`http://${i}`),n}function ub(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}Uw({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=pt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",ub().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ob("Browser");const db={apiKey:"AIzaSyDvuw4QWb5uj4S8CwtF4fPTAHssETFTy7g",authDomain:"ai-code-explainer-ffeae.firebaseapp.com",projectId:"ai-code-explainer-ffeae",storageBucket:"ai-code-explainer-ffeae.firebasestorage.app",messagingSenderId:"412621953572",appId:"1:412621953572:web:009bf5d8c231205e5f56b1",measurementId:"G-YRLGZJTXNC"},pb=em(db),ss=cb(pb),fb={displayName:"Diya",email:"diya@demo.com"};function mb(){const[e,t]=Dt.useState(null);Dt.useEffect(()=>{const o=Yw(ss,t);return()=>o()},[]);const n=async()=>{const o=new Et;try{await v_(ss,o)}catch(a){alert("Sign in failed: "+a.message)}},r=()=>{t(fb)},i=async()=>{t(null),await Zw(ss).catch(()=>{})};return W.jsx("div",{children:e?W.jsxs("div",{className:"flex items-center gap-2",children:[W.jsxs("span",{children:["Welcome, ",e.displayName||e.email]}),W.jsx("button",{onClick:i,className:"text-sm px-2 py-1 border rounded",children:"Sign Out"})]}):W.jsxs("div",{className:"flex gap-2",children:[W.jsx("button",{onClick:n,className:"text-sm px-2 py-1 border rounded",children:"Sign In with Google"}),W.jsx("button",{onClick:r,className:"text-sm px-2 py-1 border rounded bg-gray-200 dark:text-yellow-900",children:"Sign In"})]})})}function hb({language:e,setLanguage:t}){return W.jsxs("select",{value:e,onChange:n=>t(n.target.value),className:"px-3 py-1 border rounded text-sm dark:text-yellow-900",children:[W.jsx("option",{value:"python",children:"Python"}),W.jsx("option",{value:"java",children:"Java"}),W.jsx("option",{value:"cpp",children:"C++"})]})}const kc="https://huggingface.co",Dm="https://router.huggingface.co",gb="X-HF-Bill-To",md={"black-forest-labs":{},cerebras:{},cohere:{},"fal-ai":{},"featherless-ai":{},"fireworks-ai":{},groq:{},"hf-inference":{},hyperbolic:{},nebius:{},novita:{},nscale:{},openai:{},ovhcloud:{},replicate:{},sambanova:{},together:{}};class xc extends Error{constructor(t){super(t),this.name="InferenceClientError"}}class fe extends xc{constructor(t){super(t),this.name="InputError"}}class Om extends xc{constructor(n,r,i){super(n);C(this,"httpRequest");C(this,"httpResponse");this.httpRequest={...r,...r.headers?{headers:{...r.headers,..."Authorization"in r.headers?{Authorization:"Bearer [redacted]"}:void 0}}:void 0},this.httpResponse=i}}class Ae extends Om{constructor(t,n,r){super(t,n,r),this.name="ProviderApiError"}}class Xr extends Om{constructor(t,n,r){super(t,n,r),this.name="HubApiError"}}class N extends xc{constructor(t){super(t),this.name="ProviderOutputError"}}function Lm(e){return Array.isArray(e)?e:[e]}class Qe{constructor(t,n,r=!1){C(this,"provider");C(this,"baseUrl");C(this,"clientSideRoutingOnly");this.provider=t,this.baseUrl=n,this.clientSideRoutingOnly=r}makeBaseUrl(t){return t.authMethod!=="provider-key"?`${Dm}/${this.provider}`:this.baseUrl}makeBody(t){return"data"in t.args&&t.args.data?t.args.data:JSON.stringify(this.preparePayload(t))}makeUrl(t){const n=this.makeBaseUrl(t),r=this.makeRoute(t).replace(/^\/+/,"");return`${n}/${r}`}prepareHeaders(t,n){const r={};return t.authMethod!=="none"&&(r.Authorization=`Bearer ${t.accessToken}`),n||(r["Content-Type"]="application/json"),r}}class Xe extends Qe{constructor(t,n,r=!1){super(t,n,r)}makeRoute(){return"v1/chat/completions"}preparePayload(t){return{...t.args,model:t.model}}async getResponse(t){if(typeof t=="object"&&Array.isArray(t==null?void 0:t.choices)&&typeof(t==null?void 0:t.created)=="number"&&typeof(t==null?void 0:t.id)=="string"&&typeof(t==null?void 0:t.model)=="string"&&(t.system_fingerprint===void 0||t.system_fingerprint===null||typeof t.system_fingerprint=="string")&&typeof(t==null?void 0:t.usage)=="object")return t;throw new N("Expected ChatCompletionOutput")}}class Vn extends Qe{constructor(t,n,r=!1){super(t,n,r)}preparePayload(t){return{...t.args,model:t.model}}makeRoute(){return"v1/completions"}async getResponse(t){const n=Lm(t);if(Array.isArray(n)&&n.length>0&&n.every(r=>typeof r=="object"&&!!r&&"generated_text"in r&&typeof r.generated_text=="string"))return n[0];throw new N("Expected Array<{generated_text: string}>")}}function hn(e){if(globalThis.Buffer)return globalThis.Buffer.from(e).toString("base64");{const t=[];return e.forEach(n=>{t.push(String.fromCharCode(n))}),globalThis.btoa(t.join(""))}}function yb(e,t){return Object.assign({},...t.map(n=>{if(e[n]!==void 0)return{[n]:e[n]}}))}function fl(e,t){return e.includes(t)}function ne(e,t){const n=Array.isArray(t)?t:[t],r=Object.keys(e).filter(i=>!fl(n,i));return yb(e,r)}const hd=["feature-extraction","sentence-similarity"];class Y extends Qe{constructor(){super("hf-inference",`${Dm}/hf-inference`)}preparePayload(t){return t.args}makeUrl(t){return t.model.startsWith("http://")||t.model.startsWith("https://")?t.model:super.makeUrl(t)}makeRoute(t){return t.task&&["feature-extraction","sentence-similarity"].includes(t.task)?`models/${t.model}/pipeline/${t.task}`:`models/${t.model}`}async getResponse(t){return t}}class vb extends Y{async getResponse(t,n,r,i){if(!t)throw new N("Received malformed response from HF-Inference text-to-image API: response is undefined");if(typeof t=="object"){if("data"in t&&Array.isArray(t.data)&&t.data[0].b64_json){const o=t.data[0].b64_json;return i==="url"?`data:image/jpeg;base64,${o}`:await(await fetch(`data:image/jpeg;base64,${o}`)).blob()}if("output"in t&&Array.isArray(t.output))return i==="url"?t.output[0]:await(await fetch(t.output[0])).blob()}if(t instanceof Blob)return i==="url"?`data:image/jpeg;base64,${await t.arrayBuffer().then(a=>Buffer.from(a).toString("base64"))}`:t;throw new N("Received malformed response from HF-Inference text-to-image API: expected a Blob")}}class wb extends Y{makeUrl(t){let n;return t.model.startsWith("http://")||t.model.startsWith("https://")?n=t.model.trim():n=`${this.makeBaseUrl(t)}/models/${t.model}`,n=n.replace(/\/+$/,""),n.endsWith("/v1")?n+="/chat/completions":n.endsWith("/chat/completions")||(n+="/v1/chat/completions"),n}preparePayload(t){return{...t.args,model:t.model}}async getResponse(t){return t}}class _b extends Y{async getResponse(t){const n=Lm(t);if(Array.isArray(n)&&n.every(r=>"generated_text"in r&&typeof(r==null?void 0:r.generated_text)=="string"))return n==null?void 0:n[0];throw new N("Received malformed response from HF-Inference text generation API: expected Array<{generated_text: string}>")}}class bb extends Y{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n=="object"&&n!==null&&typeof n.label=="string"&&typeof n.score=="number"))return t;throw new N("Received malformed response from HF-Inference audio-classification API: expected Array<{label: string, score: number}> but received different format")}}class kb extends Y{async getResponse(t){return t}async preparePayloadAsync(t){return"data"in t?t:{...ne(t,"inputs"),data:t.inputs}}}class xb extends Y{async getResponse(t){if(!Array.isArray(t))throw new N("Received malformed response from HF-Inference audio-to-audio API: expected Array");if(!t.every(n=>typeof n=="object"&&n&&"label"in n&&typeof n.label=="string"&&"content-type"in n&&typeof n["content-type"]=="string"&&"blob"in n&&typeof n.blob=="string"))throw new N("Received malformed response from HF-Inference audio-to-audio API: expected Array<{label: string, audio: Blob}>");return t}}class Sb extends Y{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n=="object"&&!!n&&typeof(n==null?void 0:n.answer)=="string"&&(typeof n.end=="number"||typeof n.end>"u")&&(typeof n.score=="number"||typeof n.score>"u")&&(typeof n.start=="number"||typeof n.start>"u")))return t[0];throw new N("Received malformed response from HF-Inference document-question-answering API: expected Array<{answer: string, end: number, score: number, start: number}>")}}class Ib extends Y{async getResponse(t){const n=(r,i,o=0)=>o>i?!1:r.every(a=>Array.isArray(a))?r.every(a=>n(a,i,o+1)):r.every(a=>typeof a=="number");if(Array.isArray(t)&&n(t,3,0))return t;throw new N("Received malformed response from HF-Inference feature-extraction API: expected Array<number[][][] | number[][] | number[] | number>")}}class Ab extends Y{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n.label=="string"&&typeof n.score=="number"))return t;throw new N("Received malformed response from HF-Inference image-classification API: expected Array<{label: string, score: number}>")}}class Tb extends Y{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n.label=="string"&&typeof n.mask=="string"&&(n.score===void 0||typeof n.score=="number")))return t;throw new N("Received malformed response from HF-Inference image-segmentation API: expected Array<{label: string, mask: string, score: number}>")}}class Eb extends Y{async getResponse(t){if(typeof(t==null?void 0:t.generated_text)!="string")throw new N("Received malformed response from HF-Inference image-to-text API: expected {generated_text: string}");return t}}class Cb extends Y{async preparePayloadAsync(t){return t.parameters?{...t,inputs:hn(new Uint8Array(t.inputs instanceof ArrayBuffer?t.inputs:await t.inputs.arrayBuffer()))}:{...t,model:t.model,data:t.inputs}}async getResponse(t){if(t instanceof Blob)return t;throw new N("Received malformed response from HF-Inference image-to-image API: expected Blob")}}class Pb extends Y{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n.label=="string"&&typeof n.score=="number"&&typeof n.box.xmin=="number"&&typeof n.box.ymin=="number"&&typeof n.box.xmax=="number"&&typeof n.box.ymax=="number"))return t;throw new N("Received malformed response from HF-Inference object-detection API: expected Array<{label: string, score: number, box: {xmin: number, ymin: number, xmax: number, ymax: number}}>")}}class Rb extends Y{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n.label=="string"&&typeof n.score=="number"))return t;throw new N("Received malformed response from HF-Inference zero-shot-image-classification API: expected Array<{label: string, score: number}>")}}class Nb extends Y{async getResponse(t){const n=t==null?void 0:t[0];if(Array.isArray(n)&&n.every(r=>typeof(r==null?void 0:r.label)=="string"&&typeof r.score=="number"))return n;throw new N("Received malformed response from HF-Inference text-classification API: expected Array<{label: string, score: number}>")}}class Db extends Y{async getResponse(t){if(Array.isArray(t)?t.every(n=>typeof n=="object"&&!!n&&typeof n.answer=="string"&&typeof n.end=="number"&&typeof n.score=="number"&&typeof n.start=="number"):typeof t=="object"&&t&&typeof t.answer=="string"&&typeof t.end=="number"&&typeof t.score=="number"&&typeof t.start=="number")return Array.isArray(t)?t[0]:t;throw new N("Received malformed response from HF-Inference question-answering API: expected Array<{answer: string, end: number, score: number, start: number}>")}}class Ob extends Y{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n.score=="number"&&typeof n.sequence=="string"&&typeof n.token=="number"&&typeof n.token_str=="string"))return t;throw new N("Received malformed response from HF-Inference fill-mask API: expected Array<{score: number, sequence: string, token: number, token_str: string}>")}}class Lb extends Y{async getResponse(t){if(Array.isArray(t)&&t.every(n=>Array.isArray(n.labels)&&n.labels.every(r=>typeof r=="string")&&Array.isArray(n.scores)&&n.scores.every(r=>typeof r=="number")&&typeof n.sequence=="string"))return t;throw new N("Received malformed response from HF-Inference zero-shot-classification API: expected Array<{labels: string[], scores: number[], sequence: string}>")}}class Ub extends Y{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n=="number"))return t;throw new N("Received malformed response from HF-Inference sentence-similarity API: expected Array<number>")}}class ta extends Y{static validate(t){return typeof t=="object"&&!!t&&"aggregator"in t&&typeof t.aggregator=="string"&&"answer"in t&&typeof t.answer=="string"&&"cells"in t&&Array.isArray(t.cells)&&t.cells.every(n=>typeof n=="string")&&"coordinates"in t&&Array.isArray(t.coordinates)&&t.coordinates.every(n=>Array.isArray(n)&&n.every(r=>typeof r=="number"))}async getResponse(t){if(Array.isArray(t)&&Array.isArray(t)?t.every(n=>ta.validate(n)):ta.validate(t))return Array.isArray(t)?t[0]:t;throw new N("Received malformed response from HF-Inference table-question-answering API: expected {aggregator: string, answer: string, cells: string[], coordinates: number[][]}")}}class Mb extends Y{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n.end=="number"&&typeof n.entity_group=="string"&&typeof n.score=="number"&&typeof n.start=="number"&&typeof n.word=="string"))return t;throw new N("Received malformed response from HF-Inference token-classification API: expected Array<{end: number, entity_group: string, score: number, start: number, word: string}>")}}class jb extends Y{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof(n==null?void 0:n.translation_text)=="string"))return(t==null?void 0:t.length)===1?t==null?void 0:t[0]:t;throw new N("Received malformed response from HF-Inference translation API: expected Array<{translation_text: string}>")}}class $b extends Y{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof(n==null?void 0:n.summary_text)=="string"))return t==null?void 0:t[0];throw new N("Received malformed response from HF-Inference summarization API: expected Array<{summary_text: string}>")}}class Fb extends Y{async getResponse(t){return t}}class Bb extends Y{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n=="number"))return t;throw new N("Received malformed response from HF-Inference tabular-classification API: expected Array<number>")}}class Hb extends Y{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n=="object"&&!!n&&typeof(n==null?void 0:n.answer)=="string"&&typeof n.score=="number"))return t[0];throw new N("Received malformed response from HF-Inference visual-question-answering API: expected Array<{answer: string, score: number}>")}}class Vb extends Y{async getResponse(t){if(Array.isArray(t)&&t.every(n=>typeof n=="number"))return t;throw new N("Received malformed response from HF-Inference tabular-regression API: expected Array<number>")}}class zb extends Y{async getResponse(t){return t}}let qb=console;function $i(){return qb}const ls=new Map;function Wb(e,t){return t?Array.isArray(t)?t:Object.entries(t).map(([n,r])=>({provider:n,hfModelId:e,providerId:r.providerId,status:r.status,task:r.task,adapter:r.adapter,adapterWeightsPath:r.adapterWeightsPath})):[]}async function Um(e,t,n){var i;let r;if(ls.has(e))r=ls.get(e);else{const o=`${kc}/api/models/${e}?expand[]=inferenceProviderMapping`,a=await((n==null?void 0:n.fetch)??fetch)(o,{headers:t!=null&&t.startsWith("hf_")?{Authorization:`Bearer ${t}`}:{}});if(!a.ok)if((i=a.headers.get("Content-Type"))!=null&&i.startsWith("application/json")){const l=await a.json();if("error"in l&&typeof l.error=="string")throw new Xr(`Failed to fetch inference provider mapping for model ${e}: ${l.error}`,{url:o,method:"GET"},{requestId:a.headers.get("x-request-id")??"",status:a.status,body:l})}else throw new Xr(`Failed to fetch inference provider mapping for model ${e}`,{url:o,method:"GET"},{requestId:a.headers.get("x-request-id")??"",status:a.status,body:await a.text()});let s=null;try{s=await a.json()}catch{throw new Xr(`Failed to fetch inference provider mapping for model ${e}: malformed API response, invalid JSON`,{url:o,method:"GET"},{requestId:a.headers.get("x-request-id")??"",status:a.status,body:await a.text()})}if(!(s!=null&&s.inferenceProviderMapping))throw new Xr(`We have not been able to find inference provider information for model ${e}.`,{url:o,method:"GET"},{requestId:a.headers.get("x-request-id")??"",status:a.status,body:await a.text()});r=Wb(e,s.inferenceProviderMapping),ls.set(e,r)}return r}async function Kb(e,t){const n=$i();if(md[e.provider][e.modelId])return md[e.provider][e.modelId];const i=(await Um(e.modelId,e.accessToken,t)).find(o=>o.provider===e.provider);if(i){const o=e.provider==="hf-inference"&&fl(hd,e.task)?hd:[e.task];if(!fl(o,i.task))throw new fe(`Model ${e.modelId} is not supported for task ${e.task} and provider ${e.provider}. Supported task: ${i.task}.`);return i.status==="staging"&&n.warn(`Model ${e.modelId} is in staging mode for provider ${e.provider}. Meant for test purposes only.`),i}return null}async function z(e,t,n){var i;const r=$i();if(n){if(e)throw new fe("Specifying both endpointUrl and provider is not supported.");return"hf-inference"}if(e||(r.log("Defaulting to 'auto' which will select the first provider available for the model, sorted by the user's order in https://hf.co/settings/inference-providers."),e="auto"),e==="auto"){if(!t)throw new fe("Specifying a model is required when provider is 'auto'");e=(i=(await Um(t))[0])==null?void 0:i.provider,r.log("Auto selected provider:",e)}if(!e)throw new fe(`No Inference Provider available for model ${t}.`);return e}function Sc(e){return new Promise(t=>{setTimeout(()=>t(),e)})}const Qb="https://api.us1.bfl.ai";class Xb extends Qe{constructor(){super("black-forest-labs",Qb)}preparePayload(t){return{...ne(t.args,["inputs","parameters"]),...t.args.parameters,prompt:t.args.inputs}}prepareHeaders(t,n){const r={Authorization:t.authMethod!=="provider-key"?`Bearer ${t.accessToken}`:`X-Key ${t.accessToken}`};return n||(r["Content-Type"]="application/json"),r}makeRoute(t){if(!t)throw new fe("Params are required");return`/v1/${t.model}`}async getResponse(t,n,r,i){const o=$i(),a=new URL(t.polling_url);for(let s=0;s<5;s++){await Sc(1e3),o.debug(`Polling Black Forest Labs API for the result... ${s+1}/5`),a.searchParams.set("attempt",s.toString(10));const l=await fetch(a,{headers:{"Content-Type":"application/json"}});if(!l.ok)throw new Ae("Failed to fetch result from black forest labs API",{url:a.toString(),method:"GET",headers:{"Content-Type":"application/json"}},{requestId:l.headers.get("x-request-id")??"",status:l.status,body:await l.text()});const c=await l.json();if(typeof c=="object"&&c&&"status"in c&&typeof c.status=="string"&&c.status==="Ready"&&"result"in c&&typeof c.result=="object"&&c.result&&"sample"in c.result&&typeof c.result.sample=="string")return i==="url"?c.result.sample:await(await fetch(c.result.sample)).blob()}throw new N("Timed out while waiting for the result from black forest labs API - aborting after 5 attempts")}}class Jb extends Xe{constructor(){super("cerebras","https://api.cerebras.ai")}}class Yb extends Xe{constructor(){super("cohere","https://api.cohere.com")}makeRoute(){return"/compatibility/v1/chat/completions"}}function Cr(e){return/^http(s?):/.test(e)||e.startsWith("/")}const gd=["audio/mpeg","audio/mp4","audio/wav","audio/x-wav"];class ka extends Qe{constructor(t){super("fal-ai",t||"https://fal.run")}preparePayload(t){return t.args}makeRoute(t){return`/${t.model}`}prepareHeaders(t,n){const r={Authorization:t.authMethod!=="provider-key"?`Bearer ${t.accessToken}`:`Key ${t.accessToken}`};return n||(r["Content-Type"]="application/json"),r}}class Mm extends ka{async getResponseFromQueueApi(t,n,r){if(!n||!r)throw new fe(`URL and headers are required for ${this.task} task`);if(!t.request_id)throw new N(`Received malformed response from Fal.ai ${this.task} API: no request ID found in the response`);let o=t.status;const a=new URL(n),s=`${a.protocol}//${a.host}${a.host==="router.huggingface.co"?"/fal-ai":""}`,l=new URL(t.response_url).pathname,c=a.search,f=`${s}${l}/status${c}`,u=`${s}${l}${c}`;for(;o!=="COMPLETED";){await Sc(500);const _=await fetch(f,{headers:r});if(!_.ok)throw new Ae("Failed to fetch response status from fal-ai API",{url:f,method:"GET"},{requestId:_.headers.get("x-request-id")??"",status:_.status,body:await _.text()});try{o=(await _.json()).status}catch{throw new N("Failed to parse status response from fal-ai API: received malformed response")}}const d=await fetch(u,{headers:r});let v;try{v=await d.json()}catch{throw new N("Failed to parse result response from fal-ai API: received malformed response")}return v}}function jm(e,t){return`${kc}/${e}/resolve/main/${t}`}class Zb extends ka{preparePayload(t){var r;const n={...ne(t.args,["inputs","parameters"]),...t.args.parameters,sync_mode:!0,prompt:t.args.inputs};return((r=t.mapping)==null?void 0:r.adapter)==="lora"&&t.mapping.adapterWeightsPath&&(n.loras=[{path:jm(t.mapping.hfModelId,t.mapping.adapterWeightsPath),scale:1}],t.mapping.providerId==="fal-ai/lora"&&(n.model_name="stabilityai/stable-diffusion-xl-base-1.0")),n}async getResponse(t,n){if(typeof t=="object"&&"images"in t&&Array.isArray(t.images)&&t.images.length>0&&"url"in t.images[0]&&typeof t.images[0].url=="string")return n==="url"?t.images[0].url:await(await fetch(t.images[0].url)).blob();throw new N("Received malformed response from Fal.ai text-to-image API")}}class Gb extends Mm{constructor(){super("https://queue.fal.run");C(this,"task");this.task="image-to-image"}makeRoute(n){return n.authMethod!=="provider-key"?`/${n.model}?_subdomain=queue`:`/${n.model}`}preparePayload(n){var i;const r=n.args;return((i=n.mapping)==null?void 0:i.adapter)==="lora"&&n.mapping.adapterWeightsPath&&(r.loras=[{path:jm(n.mapping.hfModelId,n.mapping.adapterWeightsPath),scale:1}]),r}async preparePayloadAsync(n){const r=n.inputs instanceof Blob?n.inputs.type:"image/png";return{...ne(n,["inputs","parameters"]),image_url:`data:${r};base64,${hn(new Uint8Array(n.inputs instanceof ArrayBuffer?n.inputs:await n.inputs.arrayBuffer()))}`,...n.parameters,...n}}async getResponse(n,r,i){const o=await this.getResponseFromQueueApi(n,r,i);if(typeof o=="object"&&o&&"images"in o&&Array.isArray(o.images)&&o.images.length>0&&typeof o.images[0]=="object"&&o.images[0]&&"url"in o.images[0]&&typeof o.images[0].url=="string"&&Cr(o.images[0].url))return await(await fetch(o.images[0].url)).blob();throw new N(`Received malformed response from Fal.ai image-to-image API: expected { images: Array<{ url: string }> } result format, got instead: ${JSON.stringify(o)}`)}}class ek extends Mm{constructor(){super("https://queue.fal.run");C(this,"task");this.task="text-to-video"}makeRoute(n){return n.authMethod!=="provider-key"?`/${n.model}?_subdomain=queue`:`/${n.model}`}preparePayload(n){return{...ne(n.args,["inputs","parameters"]),...n.args.parameters,prompt:n.args.inputs}}async getResponse(n,r,i){const o=await this.getResponseFromQueueApi(n,r,i);if(typeof o=="object"&&o&&"video"in o&&typeof o.video=="object"&&o.video&&"url"in o.video&&typeof o.video.url=="string"&&Cr(o.video.url))return await(await fetch(o.video.url)).blob();throw new N(`Received malformed response from Fal.ai text-to-video API: expected { video: { url: string } } result format, got instead: ${JSON.stringify(o)}`)}}class tk extends ka{prepareHeaders(t,n){const r=super.prepareHeaders(t,n);return r["Content-Type"]="application/json",r}async getResponse(t){const n=t;if(typeof(n==null?void 0:n.text)!="string")throw new N(`Received malformed response from Fal.ai Automatic Speech Recognition API: expected { text: string } format, got instead: ${JSON.stringify(t)}`);return{text:n.text}}async preparePayloadAsync(t){const n="data"in t&&t.data instanceof Blob?t.data:"inputs"in t?t.inputs:void 0,r=n==null?void 0:n.type;if(!r)throw new fe("Unable to determine the input's content-type. Make sure your are passing a Blob when using provider fal-ai.");if(!gd.includes(r))throw new fe(`Provider fal-ai does not support blob type ${r} - supported content types are: ${gd.join(", ")}`);const i=hn(new Uint8Array(await n.arrayBuffer()));return{..."data"in t?ne(t,"data"):ne(t,"inputs"),audio_url:`data:${r};base64,${i}`}}}class nk extends ka{preparePayload(t){return{...ne(t.args,["inputs","parameters"]),...t.args.parameters,text:t.args.inputs}}async getResponse(t){var i;const n=t;if(typeof((i=n==null?void 0:n.audio)==null?void 0:i.url)!="string")throw new N(`Received malformed response from Fal.ai Text-to-Speech API: expected { audio: { url: string } } format, got instead: ${JSON.stringify(t)}`);const r=await fetch(n.audio.url);if(!r.ok)throw new Ae(`Failed to fetch audio from ${n.audio.url}: ${r.statusText}`,{url:n.audio.url,method:"GET",headers:{"Content-Type":"application/json"}},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:await r.text()});try{return await r.blob()}catch(o){throw new Ae(`Failed to fetch audio from ${n.audio.url}: ${o instanceof Error?o.message:String(o)}`,{url:n.audio.url,method:"GET",headers:{"Content-Type":"application/json"}},{requestId:r.headers.get("x-request-id")??"",status:r.status,body:await r.text()})}}}const $m="https://api.featherless.ai";class rk extends Xe{constructor(){super("featherless-ai",$m)}}class ik extends Vn{constructor(){super("featherless-ai",$m)}preparePayload(t){return{model:t.model,...ne(t.args,["inputs","parameters"]),...t.args.parameters?{max_tokens:t.args.parameters.max_new_tokens,...ne(t.args.parameters,"max_new_tokens")}:void 0,prompt:t.args.inputs}}async getResponse(t){if(typeof t=="object"&&"choices"in t&&Array.isArray(t==null?void 0:t.choices)&&typeof(t==null?void 0:t.model)=="string")return{generated_text:t.choices[0].text};throw new N("Received malformed response from Featherless AI text generation API")}}class ok extends Xe{constructor(){super("fireworks-ai","https://api.fireworks.ai")}makeRoute(){return"/inference/v1/chat/completions"}}const Fm="https://api.groq.com";class ak extends Vn{constructor(){super("groq",Fm)}makeRoute(){return"/openai/v1/chat/completions"}}class sk extends Xe{constructor(){super("groq",Fm)}makeRoute(){return"/openai/v1/chat/completions"}}const Ic="https://api.hyperbolic.xyz";class lk extends Xe{constructor(){super("hyperbolic",Ic)}}class ck extends Vn{constructor(){super("hyperbolic",Ic)}makeRoute(){return"v1/chat/completions"}preparePayload(t){return{messages:[{content:t.args.inputs,role:"user"}],...t.args.parameters?{max_tokens:t.args.parameters.max_new_tokens,...ne(t.args.parameters,"max_new_tokens")}:void 0,...ne(t.args,["inputs","parameters"]),model:t.model}}async getResponse(t){if(typeof t=="object"&&"choices"in t&&Array.isArray(t==null?void 0:t.choices)&&typeof(t==null?void 0:t.model)=="string")return{generated_text:t.choices[0].message.content};throw new N("Received malformed response from Hyperbolic text generation API")}}class uk extends Qe{constructor(){super("hyperbolic",Ic)}makeRoute(t){return"/v1/images/generations"}preparePayload(t){return{...ne(t.args,["inputs","parameters"]),...t.args.parameters,prompt:t.args.inputs,model_name:t.model}}async getResponse(t,n,r,i){if(typeof t=="object"&&"images"in t&&Array.isArray(t.images)&&t.images[0]&&typeof t.images[0].image=="string")return i==="url"?`data:image/jpeg;base64,${t.images[0].image}`:fetch(`data:image/jpeg;base64,${t.images[0].image}`).then(o=>o.blob());throw new N("Received malformed response from Hyperbolic text-to-image API")}}const xa="https://api.studio.nebius.ai";class dk extends Xe{constructor(){super("nebius",xa)}preparePayload(t){var i;const n=super.preparePayload(t),r=t.args.response_format;return(r==null?void 0:r.type)==="json_schema"&&((i=r.json_schema)!=null&&i.schema)&&(n.guided_json=r.json_schema.schema),n}}class pk extends Vn{constructor(){super("nebius",xa)}preparePayload(t){return{...t.args,model:t.model,prompt:t.args.inputs}}async getResponse(t){var n;if(typeof t=="object"&&"choices"in t&&Array.isArray(t==null?void 0:t.choices)&&t.choices.length>0&&typeof((n=t.choices[0])==null?void 0:n.text)=="string")return{generated_text:t.choices[0].text};throw new N("Received malformed response from Nebius text generation API")}}class fk extends Qe{constructor(){super("nebius",xa)}preparePayload(t){return{...ne(t.args,["inputs","parameters"]),...t.args.parameters,response_format:"b64_json",prompt:t.args.inputs,model:t.model}}makeRoute(){return"v1/images/generations"}async getResponse(t,n,r,i){if(typeof t=="object"&&"data"in t&&Array.isArray(t.data)&&t.data.length>0&&"b64_json"in t.data[0]&&typeof t.data[0].b64_json=="string"){const o=t.data[0].b64_json;return i==="url"?`data:image/jpeg;base64,${o}`:fetch(`data:image/jpeg;base64,${o}`).then(a=>a.blob())}throw new N("Received malformed response from Nebius text-to-image API")}}class mk extends Qe{constructor(){super("nebius",xa)}preparePayload(t){return{input:t.args.inputs,model:t.model}}makeRoute(){return"v1/embeddings"}async getResponse(t){return t.data.map(n=>n.embedding)}}const Ac="https://api.novita.ai";class hk extends Vn{constructor(){super("novita",Ac)}makeRoute(){return"/v3/openai/chat/completions"}}class gk extends Xe{constructor(){super("novita",Ac)}makeRoute(){return"/v3/openai/chat/completions"}}class yk extends Qe{constructor(){super("novita",Ac)}makeRoute(t){return`/v3/async/${t.model}`}preparePayload(t){const{num_inference_steps:n,...r}=t.args.parameters??{};return{...ne(t.args,["inputs","parameters"]),...r,steps:n,prompt:t.args.inputs}}async getResponse(t,n,r){if(!n||!r)throw new fe("URL and headers are required for text-to-video task");const i=t.task_id;if(!i)throw new N("Received malformed response from Novita text-to-video API: no task ID found in the response");const o=new URL(n),s=`${`${o.protocol}//${o.host}${o.host==="router.huggingface.co"?"/novita":""}`}/v3/async/task-result?task_id=${i}`;let l="",c;for(;l!=="TASK_STATUS_SUCCEED"&&l!=="TASK_STATUS_FAILED";){await Sc(500);const f=await fetch(s,{headers:r});if(!f.ok)throw new Ae("Failed to fetch task result",{url:s,method:"GET",headers:r},{requestId:f.headers.get("x-request-id")??"",status:f.status,body:await f.text()});try{if(c=await f.json(),c&&typeof c=="object"&&"task"in c&&c.task&&typeof c.task=="object"&&"status"in c.task&&typeof c.task.status=="string")l=c.task.status;else throw new N("Received malformed response from Novita text-to-video API: failed to get task status")}catch{throw new N("Received malformed response from Novita text-to-video API: failed to parse task result")}}if(l==="TASK_STATUS_FAILED")throw new N("Novita text-to-video task failed");if(typeof c=="object"&&c&&"videos"in c&&typeof c.videos=="object"&&c.videos&&Array.isArray(c.videos)&&c.videos.length>0&&"video_url"in c.videos[0]&&typeof c.videos[0].video_url=="string"&&Cr(c.videos[0].video_url))return await(await fetch(c.videos[0].video_url)).blob();throw new N(`Received malformed response from Novita text-to-video API: expected { videos: [{ video_url: string }] } format, got instead: ${JSON.stringify(c)}`)}}const Bm="https://inference.api.nscale.com";class vk extends Xe{constructor(){super("nscale",Bm)}}class wk extends Qe{constructor(){super("nscale",Bm)}preparePayload(t){return{...ne(t.args,["inputs","parameters"]),...t.args.parameters,response_format:"b64_json",prompt:t.args.inputs,model:t.model}}makeRoute(){return"v1/images/generations"}async getResponse(t,n,r,i){if(typeof t=="object"&&"data"in t&&Array.isArray(t.data)&&t.data.length>0&&"b64_json"in t.data[0]&&typeof t.data[0].b64_json=="string"){const o=t.data[0].b64_json;return i==="url"?`data:image/jpeg;base64,${o}`:fetch(`data:image/jpeg;base64,${o}`).then(a=>a.blob())}throw new N("Received malformed response from Nscale text-to-image API")}}const _k="https://api.openai.com";class bk extends Xe{constructor(){super("openai",_k,!0)}}const Hm="https://oai.endpoints.kepler.ai.cloud.ovh.net";class kk extends Xe{constructor(){super("ovhcloud",Hm)}}class xk extends Vn{constructor(){super("ovhcloud",Hm)}preparePayload(t){return{model:t.model,...ne(t.args,["inputs","parameters"]),...t.args.parameters?{max_tokens:t.args.parameters.max_new_tokens,...ne(t.args.parameters,"max_new_tokens")}:void 0,prompt:t.args.inputs}}async getResponse(t){if(typeof t=="object"&&"choices"in t&&Array.isArray(t==null?void 0:t.choices)&&typeof(t==null?void 0:t.model)=="string")return{generated_text:t.choices[0].text};throw new N("Received malformed response from OVHcloud text generation API")}}class Sa extends Qe{constructor(t){super("replicate",t||"https://api.replicate.com")}makeRoute(t){return t.model.includes(":")?"v1/predictions":`v1/models/${t.model}/predictions`}preparePayload(t){return{input:{...ne(t.args,["inputs","parameters"]),...t.args.parameters,prompt:t.args.inputs},version:t.model.includes(":")?t.model.split(":")[1]:void 0}}prepareHeaders(t,n){const r={Authorization:`Bearer ${t.accessToken}`,Prefer:"wait"};return n||(r["Content-Type"]="application/json"),r}makeUrl(t){const n=this.makeBaseUrl(t);return t.model.includes(":")?`${n}/v1/predictions`:`${n}/v1/models/${t.model}/predictions`}}class Sk extends Sa{preparePayload(t){var n;return{input:{...ne(t.args,["inputs","parameters"]),...t.args.parameters,prompt:t.args.inputs,lora_weights:((n=t.mapping)==null?void 0:n.adapter)==="lora"&&t.mapping.adapterWeightsPath?`https://huggingface.co/${t.mapping.hfModelId}`:void 0},version:t.model.includes(":")?t.model.split(":")[1]:void 0}}async getResponse(t,n,r,i){if(typeof t=="object"&&"output"in t&&Array.isArray(t.output)&&t.output.length>0&&typeof t.output[0]=="string")return i==="url"?t.output[0]:await(await fetch(t.output[0])).blob();throw new N("Received malformed response from Replicate text-to-image API")}}class Ik extends Sa{preparePayload(t){const n=super.preparePayload(t),r=n.input;if(typeof r=="object"&&r!==null&&"prompt"in r){const i=r;i.text=i.prompt,delete i.prompt}return n}async getResponse(t){if(t instanceof Blob)return t;if(t&&typeof t=="object"&&"output"in t){if(typeof t.output=="string")return await(await fetch(t.output)).blob();if(Array.isArray(t.output))return await(await fetch(t.output[0])).blob()}throw new N("Received malformed response from Replicate text-to-speech API")}}class Ak extends Sa{async getResponse(t){if(typeof t=="object"&&t&&"output"in t&&typeof t.output=="string"&&Cr(t.output))return await(await fetch(t.output)).blob();throw new N("Received malformed response from Replicate text-to-video API")}}class Tk extends Sa{preparePayload(t){return{input:{...ne(t.args,["inputs","parameters"]),...t.args.parameters,input_image:t.args.inputs},version:t.model.includes(":")?t.model.split(":")[1]:void 0}}async preparePayloadAsync(t){const{inputs:n,...r}=t,i=new Uint8Array(await n.arrayBuffer()),o=hn(i),a=`data:${n.type||"image/jpeg"};base64,${o}`;return{...r,inputs:a}}async getResponse(t){if(typeof t=="object"&&t&&"output"in t&&Array.isArray(t.output)&&t.output.length>0&&typeof t.output[0]=="string")return await(await fetch(t.output[0])).blob();if(typeof t=="object"&&t&&"output"in t&&typeof t.output=="string"&&Cr(t.output))return await(await fetch(t.output)).blob();throw new N("Received malformed response from Replicate image-to-image API")}}class Ek extends Xe{constructor(){super("sambanova","https://api.sambanova.ai")}preparePayload(t){const n=t.args.response_format;return(n==null?void 0:n.type)==="json_schema"&&n.json_schema&&(n.json_schema.strict??!0)&&(n.json_schema.strict=!1),super.preparePayload(t)}}class Ck extends Qe{constructor(){super("sambanova","https://api.sambanova.ai")}makeRoute(){return"/v1/embeddings"}async getResponse(t){if(typeof t=="object"&&"data"in t&&Array.isArray(t.data))return t.data.map(n=>n.embedding);throw new N("Received malformed response from Sambanova feature-extraction (embeddings) API")}preparePayload(t){return{model:t.model,input:t.args.inputs,...t.args}}}const Tc="https://api.together.xyz";class Pk extends Xe{constructor(){super("together",Tc)}preparePayload(t){var i;const n=super.preparePayload(t),r=n.response_format;return(r==null?void 0:r.type)==="json_schema"&&((i=r==null?void 0:r.json_schema)!=null&&i.schema)&&(n.response_format={type:"json_schema",schema:r.json_schema.schema}),n}}class Rk extends Vn{constructor(){super("together",Tc)}preparePayload(t){return{model:t.model,...t.args,prompt:t.args.inputs}}async getResponse(t){if(typeof t=="object"&&"choices"in t&&Array.isArray(t==null?void 0:t.choices)&&typeof(t==null?void 0:t.model)=="string")return{generated_text:t.choices[0].text};throw new N("Received malformed response from Together text generation API")}}class Nk extends Qe{constructor(){super("together",Tc)}makeRoute(){return"v1/images/generations"}preparePayload(t){return{...ne(t.args,["inputs","parameters"]),...t.args.parameters,prompt:t.args.inputs,response_format:"base64",model:t.model}}async getResponse(t,n){if(typeof t=="object"&&"data"in t&&Array.isArray(t.data)&&t.data.length>0&&"b64_json"in t.data[0]&&typeof t.data[0].b64_json=="string"){const r=t.data[0].b64_json;return n==="url"?`data:image/jpeg;base64,${r}`:fetch(`data:image/jpeg;base64,${r}`).then(i=>i.blob())}throw new N("Received malformed response from Together text-to-image API")}}const cs={"black-forest-labs":{"text-to-image":new Xb},cerebras:{conversational:new Jb},cohere:{conversational:new Yb},"fal-ai":{"text-to-image":new Zb,"text-to-speech":new nk,"text-to-video":new ek,"image-to-image":new Gb,"automatic-speech-recognition":new tk},"featherless-ai":{conversational:new rk,"text-generation":new ik},"hf-inference":{"text-to-image":new vb,conversational:new wb,"text-generation":new _b,"text-classification":new Nb,"question-answering":new Db,"audio-classification":new bb,"automatic-speech-recognition":new kb,"fill-mask":new Ob,"feature-extraction":new Ib,"image-classification":new Ab,"image-segmentation":new Tb,"document-question-answering":new Sb,"image-to-text":new Eb,"object-detection":new Pb,"audio-to-audio":new xb,"zero-shot-image-classification":new Rb,"zero-shot-classification":new Lb,"image-to-image":new Cb,"sentence-similarity":new Ub,"table-question-answering":new ta,"tabular-classification":new Bb,"text-to-speech":new Fb,"token-classification":new Mb,translation:new jb,summarization:new $b,"visual-question-answering":new Hb,"tabular-regression":new Vb,"text-to-audio":new zb},"fireworks-ai":{conversational:new ok},groq:{conversational:new sk,"text-generation":new ak},hyperbolic:{"text-to-image":new uk,conversational:new lk,"text-generation":new ck},nebius:{"text-to-image":new fk,conversational:new dk,"text-generation":new pk,"feature-extraction":new mk},novita:{conversational:new gk,"text-generation":new hk,"text-to-video":new yk},nscale:{"text-to-image":new wk,conversational:new vk},openai:{conversational:new bk},ovhcloud:{conversational:new kk,"text-generation":new xk},replicate:{"text-to-image":new Sk,"text-to-speech":new Ik,"text-to-video":new Ak,"image-to-image":new Tk},sambanova:{conversational:new Ek,"feature-extraction":new Ck},together:{"text-to-image":new Nk,conversational:new Pk,"text-generation":new Rk}};function q(e,t){if(e==="hf-inference"&&!t||e==="auto")return new Y;if(!t)throw new fe("you need to provide a task name when using an external provider, e.g. 'text-to-image'");if(!(e in cs))throw new fe(`Provider '${e}' not supported. Available providers: ${Object.keys(cs)}`);const n=cs[e];if(!n||!(t in n))throw new fe(`Task '${t}' not supported for provider '${e}'. Available tasks: ${Object.keys(n??{})}`);return n[t]}const Dk="4.4.0",Ok="@huggingface/inference";let us=null;async function Pr(e,t,n){const{model:r}=e,i=t.provider,{task:o}=n??{};if(e.endpointUrl&&i!=="hf-inference")throw new fe("Cannot use endpointUrl with a third-party provider.");if(r&&Cr(r))throw new fe("Model URLs are no longer supported. Use endpointUrl instead.");if(e.endpointUrl)return yd(r??e.endpointUrl,t,e,void 0,n);if(!r&&!o)throw new fe("No model provided, and no task has been specified.");const a=r??await Lk(o);if(t.clientSideRoutingOnly&&!r)throw new fe(`Provider ${i} requires a model ID to be passed directly.`);const s=t.clientSideRoutingOnly?{provider:i,providerId:Mk(r,i),hfModelId:r,status:"live",task:o}:await Kb({modelId:a,task:o,provider:i,accessToken:e.accessToken},{fetch:n==null?void 0:n.fetch});if(!s)throw new fe(`We have not been able to find inference provider information for model ${a}.`);return yd(s.providerId,t,e,s,n)}function yd(e,t,n,r,i){const{accessToken:o,endpointUrl:a,provider:s,model:l,...c}=n,f=t.provider,{includeCredentials:u,task:d,signal:v,billTo:_}=i??{},x=(()=>{if(t.clientSideRoutingOnly&&o&&o.startsWith("hf_"))throw new fe(`Provider ${f} is closed-source and does not support HF tokens.`);return o?o.startsWith("hf_")?"hf-token":"provider-key":u==="include"?"credentials-include":"none"})(),U=a??e,m=t.makeUrl({authMethod:x,model:U,task:d}),p=t.prepareHeaders({accessToken:o,authMethod:x},"data"in n&&!!n.data);_&&(p[gb]=_);const k=[`${Ok}/${Dk}`,typeof navigator<"u"?navigator.userAgent:void 0].filter(P=>P!==void 0).join(" ");p["User-Agent"]=k;const I=t.makeBody({args:c,model:e,task:d,mapping:r});let A;typeof u=="string"?A=u:u===!0&&(A="include");const E={headers:p,method:"POST",body:I,...A?{credentials:A}:void 0,signal:v};return{url:m,info:E}}async function Lk(e){us||(us=await Uk());const t=us[e];if(((t==null?void 0:t.models.length)??0)<=0)throw new fe(`No default model defined for task ${e}, please define the model explicitly.`);return t.models[0].id}async function Uk(){const e=`${kc}/api/tasks`,t=await fetch(e);if(!t.ok)throw new Xr("Failed to load tasks definitions from Hugging Face Hub.",{url:e,method:"GET"},{requestId:t.headers.get("x-request-id")??"",status:t.status,body:await t.text()});return await t.json()}function Mk(e,t){if(!e.startsWith(`${t}/`))throw new fe(`Models from ${t} must be prefixed by "${t}/". Got "${e}".`);return e.slice(t.length+1)}function jk(e){let t,n,r,i=!1;return function(a){t===void 0?(t=a,n=0,r=-1):t=Fk(t,a);const s=t.length;let l=0;for(;n<s;){i&&(t[n]===10&&(l=++n),i=!1);let c=-1;for(;n<s&&c===-1;++n)switch(t[n]){case 58:r===-1&&(r=n-l);break;case 13:i=!0;case 10:c=n;break}if(c===-1)break;e(t.subarray(l,c),r),l=n,r=-1}l===s?t=void 0:l!==0&&(t=t.subarray(l),n-=l)}}function $k(e,t,n){let r=vd();const i=new TextDecoder;return function(a,s){if(a.length===0)n==null||n(r),r=vd();else if(s>0){const l=i.decode(a.subarray(0,s)),c=s+(a[s+1]===32?2:1),f=i.decode(a.subarray(c));switch(l){case"data":r.data=r.data?r.data+`
`+f:f;break;case"event":r.event=f;break;case"id":e(r.id=f);break;case"retry":{const u=parseInt(f,10);isNaN(u)||t(r.retry=u);break}}}}}function Fk(e,t){const n=new Uint8Array(e.length+t.length);return n.set(e),n.set(t,e.length),n}function vd(){return{data:"",event:"",id:"",retry:void 0}}function st(e){let t=null;if(e instanceof Blob||e instanceof ArrayBuffer)t="[Blob or ArrayBuffer]";else if(typeof e=="string")try{t=JSON.parse(e)}catch{t=e}return t.accessToken&&(t.accessToken="[REDACTED]"),t}async function Q(e,t,n){var l;const{url:r,info:i}=await Pr(e,t,n),o=await((n==null?void 0:n.fetch)??fetch)(r,i),a={url:r,info:i};if((n==null?void 0:n.retry_on_error)!==!1&&o.status===503)return Q(e,t,n);if(!o.ok){const c=o.headers.get("Content-Type");if(["application/json","application/problem+json"].some(u=>c==null?void 0:c.startsWith(u))){const u=await o.json();throw[400,422,404,500].includes(o.status)&&(n!=null&&n.chatCompletion)?new Ae(`Provider ${e.provider} does not seem to support chat completion for model ${e.model} . Error: ${JSON.stringify(u.error)}`,{url:r,method:i.method??"GET",headers:i.headers,body:st(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:u}):typeof u.error=="string"||typeof u.detail=="string"||typeof u.message=="string"?new Ae(`Failed to perform inference: ${u.error??u.detail??u.message}`,{url:r,method:i.method??"GET",headers:i.headers,body:st(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:u}):new Ae("Failed to perform inference: an HTTP error occurred when requesting the provider.",{url:r,method:i.method??"GET",headers:i.headers,body:st(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:u})}const f=c!=null&&c.startsWith("text/plain;")?await o.text():void 0;throw new Ae(`Failed to perform inference: ${f??"an HTTP error occurred when requesting the provider"}`,{url:r,method:i.method??"GET",headers:i.headers,body:st(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:f??""})}return(l=o.headers.get("Content-Type"))!=null&&l.startsWith("application/json")?{data:await o.json(),requestContext:a}:{data:await o.blob(),requestContext:a}}async function*Ia(e,t,n){var f,u;const{url:r,info:i}=await Pr({...e,stream:!0},t,n),o=await((n==null?void 0:n.fetch)??fetch)(r,i);if((n==null?void 0:n.retry_on_error)!==!1&&o.status===503)return yield*Ia(e,t,n);if(!o.ok){if((f=o.headers.get("Content-Type"))!=null&&f.startsWith("application/json")){const d=await o.json();if([400,422,404,500].includes(o.status)&&(n!=null&&n.chatCompletion))throw new Ae(`Provider ${e.provider} does not seem to support chat completion for model ${e.model} . Error: ${JSON.stringify(d.error)}`,{url:r,method:i.method??"GET",headers:i.headers,body:st(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:d});if(typeof d.error=="string")throw new Ae(`Failed to perform inference: ${d.error}`,{url:r,method:i.method??"GET",headers:i.headers,body:st(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:d});if(d.error&&"message"in d.error&&typeof d.error.message=="string")throw new Ae(`Failed to perform inference: ${d.error.message}`,{url:r,method:i.method??"GET",headers:i.headers,body:st(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:d});if(typeof d.message=="string")throw new Ae(`Failed to perform inference: ${d.message}`,{url:r,method:i.method??"GET",headers:i.headers,body:st(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:d})}throw new Ae("Failed to perform inference: an HTTP error occurred when requesting the provider.",{url:r,method:i.method??"GET",headers:i.headers,body:st(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:""})}if(!((u=o.headers.get("content-type"))!=null&&u.startsWith("text/event-stream")))throw new Ae("Failed to perform inference: server does not support event stream content type, it returned "+o.headers.get("content-type"),{url:r,method:i.method??"GET",headers:i.headers,body:st(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:""});if(!o.body)return;const a=o.body.getReader();let s=[];const c=jk($k(()=>{},()=>{},d=>{s.push(d)}));try{for(;;){const{done:d,value:v}=await a.read();if(d)return;c(v);for(const _ of s)if(_.data.length>0){if(_.data==="[DONE]")return;const x=JSON.parse(_.data);if(typeof x=="object"&&x!==null&&"error"in x){const U=typeof x.error=="string"?x.error:typeof x.error=="object"&&x.error&&"message"in x.error&&typeof x.error.message=="string"?x.error.message:JSON.stringify(x.error);throw new Ae(`Failed to perform inference: an occurred while streaming the response: ${U}`,{url:r,method:i.method??"GET",headers:i.headers,body:st(i.body)},{requestId:o.headers.get("x-request-id")??"",status:o.status,body:x})}yield x}s=[]}}finally{a.releaseLock()}}async function Bk(e,t){$i().warn("The request method is deprecated and will be removed in a future version of huggingface.js. Use specific task functions instead.");const r=await z(e.provider,e.model,e.endpointUrl),i=q(r,t==null?void 0:t.task);return(await Q(e,i,t)).data}async function*Hk(e,t){$i().warn("The streamingRequest method is deprecated and will be removed in a future version of huggingface.js. Use specific task functions instead.");const r=await z(e.provider,e.model,e.endpointUrl),i=q(r,t==null?void 0:t.task);yield*Ia(e,i,t)}function Vm(e){return"data"in e?e:{...ne(e,"inputs"),data:e.inputs}}async function Vk(e,t){const n=await z(e.provider,e.model,e.endpointUrl),r=q(n,"audio-classification"),i=Vm(e),{data:o}=await Q(i,r,{...t,task:"audio-classification"});return r.getResponse(o)}async function zk(e,t){const n="inputs"in e?e.model:void 0,r=await z(e.provider,n),i=q(r,"audio-to-audio"),o=Vm(e),{data:a}=await Q(o,i,{...t,task:"audio-to-audio"});return i.getResponse(a)}async function qk(e,t){const n=await z(e.provider,e.model,e.endpointUrl),r=q(n,"automatic-speech-recognition"),i=await r.preparePayloadAsync(e),{data:o}=await Q(i,r,{...t,task:"automatic-speech-recognition"});if(!(typeof(o==null?void 0:o.text)=="string"))throw new N("Received malformed response from automatic-speech-recognition API");return r.getResponse(o)}async function Wk(e,t){const n=await z(e.provider,e.model,e.endpointUrl),r=q(n,"text-to-speech"),{data:i}=await Q(e,r,{...t,task:"text-to-speech"});return r.getResponse(i)}function Aa(e){return"data"in e?e:{...ne(e,"inputs"),data:e.inputs}}async function Kk(e,t){const n=await z(e.provider,e.model,e.endpointUrl),r=q(n,"image-classification"),i=Aa(e),{data:o}=await Q(i,r,{...t,task:"image-classification"});return r.getResponse(o)}async function Qk(e,t){const n=await z(e.provider,e.model,e.endpointUrl),r=q(n,"image-segmentation"),i=Aa(e),{data:o}=await Q(i,r,{...t,task:"image-segmentation"});return r.getResponse(o)}async function Xk(e,t){const n=await z(e.provider,e.model,e.endpointUrl),r=q(n,"image-to-image"),i=await r.preparePayloadAsync(e),{data:o}=await Q(i,r,{...t,task:"image-to-image"}),{url:a,info:s}=await Pr(e,r,{...t,task:"image-to-image"});return r.getResponse(o,a,s.headers)}async function Jk(e,t){const n=await z(e.provider,e.model,e.endpointUrl),r=q(n,"image-to-text"),i=Aa(e),{data:o}=await Q(i,r,{...t,task:"image-to-text"});return r.getResponse(o[0])}async function Yk(e,t){const n=await z(e.provider,e.model,e.endpointUrl),r=q(n,"image-to-video"),i=await r.preparePayloadAsync(e),{data:o}=await Q(i,r,{...t,task:"image-to-video"}),{url:a,info:s}=await Pr(e,r,{...t,task:"image-to-video"});return r.getResponse(o,a,s.headers)}async function Zk(e,t){const n=await z(e.provider,e.model,e.endpointUrl),r=q(n,"object-detection"),i=Aa(e),{data:o}=await Q(i,r,{...t,task:"object-detection"});return r.getResponse(o)}async function Gk(e,t){const n=await z(e.provider,e.model,e.endpointUrl),r=q(n,"text-to-image"),{data:i}=await Q(e,r,{...t,task:"text-to-image"}),{url:o,info:a}=await Pr(e,r,{...t,task:"text-to-image"});return r.getResponse(i,o,a.headers,t==null?void 0:t.outputType)}async function e0(e,t){const n=await z(e.provider,e.model,e.endpointUrl),r=q(n,"text-to-video"),{data:i}=await Q(e,r,{...t,task:"text-to-video"}),{url:o,info:a}=await Pr(e,r,{...t,task:"text-to-video"});return r.getResponse(i,o,a.headers)}async function t0(e){return e.inputs instanceof Blob?{...e,inputs:{image:hn(new Uint8Array(await e.inputs.arrayBuffer()))}}:{...e,inputs:{image:hn(new Uint8Array(e.inputs.image instanceof ArrayBuffer?e.inputs.image:await e.inputs.image.arrayBuffer()))}}}async function n0(e,t){const n=await z(e.provider,e.model,e.endpointUrl),r=q(n,"zero-shot-image-classification"),i=await t0(e),{data:o}=await Q(i,r,{...t,task:"zero-shot-image-classification"});return r.getResponse(o)}async function r0(e,t){const n=await z(e.provider,e.model,e.endpointUrl),r=q(n,"conversational"),{data:i}=await Q(e,r,{...t,task:"conversational"});return r.getResponse(i)}async function*i0(e,t){const n=await z(e.provider,e.model,e.endpointUrl),r=q(n,"conversational");yield*Ia(e,r,{...t,task:"conversational"})}async function o0(e,t){const n=await z(e.provider,e.model,e.endpointUrl),r=q(n,"feature-extraction"),{data:i}=await Q(e,r,{...t,task:"feature-extraction"});return r.getResponse(i)}async function a0(e,t){const n=await z(e.provider,e.model,e.endpointUrl),r=q(n,"fill-mask"),{data:i}=await Q(e,r,{...t,task:"fill-mask"});return r.getResponse(i)}async function s0(e,t){const n=await z(e.provider,e.model,e.endpointUrl),r=q(n,"question-answering"),{data:i}=await Q(e,r,{...t,task:"question-answering"});return r.getResponse(i)}async function l0(e,t){const n=await z(e.provider,e.model,e.endpointUrl),r=q(n,"sentence-similarity"),{data:i}=await Q(e,r,{...t,task:"sentence-similarity"});return r.getResponse(i)}async function c0(e,t){const n=await z(e.provider,e.model,e.endpointUrl),r=q(n,"summarization"),{data:i}=await Q(e,r,{...t,task:"summarization"});return r.getResponse(i)}async function u0(e,t){const n=await z(e.provider,e.model,e.endpointUrl),r=q(n,"table-question-answering"),{data:i}=await Q(e,r,{...t,task:"table-question-answering"});return r.getResponse(i)}async function d0(e,t){const n=await z(e.provider,e.model,e.endpointUrl),r=q(n,"text-classification"),{data:i}=await Q(e,r,{...t,task:"text-classification"});return r.getResponse(i)}async function p0(e,t){const n=await z(e.provider,e.model,e.endpointUrl),r=q(n,"text-generation"),{data:i}=await Q(e,r,{...t,task:"text-generation"});return r.getResponse(i)}async function*f0(e,t){const n=await z(e.provider,e.model,e.endpointUrl),r=q(n,"text-generation");yield*Ia(e,r,{...t,task:"text-generation"})}async function m0(e,t){const n=await z(e.provider,e.model,e.endpointUrl),r=q(n,"token-classification"),{data:i}=await Q(e,r,{...t,task:"token-classification"});return r.getResponse(i)}async function h0(e,t){const n=await z(e.provider,e.model,e.endpointUrl),r=q(n,"translation"),{data:i}=await Q(e,r,{...t,task:"translation"});return r.getResponse(i)}async function g0(e,t){const n=await z(e.provider,e.model,e.endpointUrl),r=q(n,"zero-shot-classification"),{data:i}=await Q(e,r,{...t,task:"zero-shot-classification"});return r.getResponse(i)}async function y0(e,t){const n=await z(e.provider,e.model,e.endpointUrl),r=q(n,"document-question-answering"),i={...e,inputs:{question:e.inputs.question,image:hn(new Uint8Array(await e.inputs.image.arrayBuffer()))}},{data:o}=await Q(i,r,{...t,task:"document-question-answering"});return r.getResponse(o)}async function v0(e,t){const n=await z(e.provider,e.model,e.endpointUrl),r=q(n,"visual-question-answering"),i={...e,inputs:{question:e.inputs.question,image:hn(new Uint8Array(await e.inputs.image.arrayBuffer()))}},{data:o}=await Q(i,r,{...t,task:"visual-question-answering"});return r.getResponse(o)}async function w0(e,t){const n=await z(e.provider,e.model,e.endpointUrl),r=q(n,"tabular-classification"),{data:i}=await Q(e,r,{...t,task:"tabular-classification"});return r.getResponse(i)}async function _0(e,t){const n=await z(e.provider,e.model,e.endpointUrl),r=q(n,"tabular-regression"),{data:i}=await Q(e,r,{...t,task:"tabular-regression"});return r.getResponse(i)}const b0=Object.freeze(Object.defineProperty({__proto__:null,audioClassification:Vk,audioToAudio:zk,automaticSpeechRecognition:qk,chatCompletion:r0,chatCompletionStream:i0,documentQuestionAnswering:y0,featureExtraction:o0,fillMask:a0,imageClassification:Kk,imageSegmentation:Qk,imageToImage:Xk,imageToText:Jk,imageToVideo:Yk,objectDetection:Zk,questionAnswering:s0,request:Bk,sentenceSimilarity:l0,streamingRequest:Hk,summarization:c0,tableQuestionAnswering:u0,tabularClassification:w0,tabularRegression:_0,textClassification:d0,textGeneration:p0,textGenerationStream:f0,textToImage:Gk,textToSpeech:Wk,textToVideo:e0,tokenClassification:m0,translation:h0,visualQuestionAnswering:v0,zeroShotClassification:g0,zeroShotImageClassification:n0},Symbol.toStringTag,{value:"Module"}));function k0(e){return Object.entries(e)}class Ec{constructor(t="",n={}){C(this,"accessToken");C(this,"defaultOptions");this.accessToken=t,this.defaultOptions=n;for(const[r,i]of k0(b0))Object.defineProperty(this,r,{enumerable:!1,value:(o,a)=>i({endpointUrl:n.endpointUrl,accessToken:t,...o},{...ne(n,["endpointUrl"]),...a})})}endpoint(t){return new Ec(this.accessToken,{...this.defaultOptions,endpointUrl:t})}}var w=Object.freeze({Text:"Text",NumericLiteral:"NumericLiteral",StringLiteral:"StringLiteral",Identifier:"Identifier",Equals:"Equals",OpenParen:"OpenParen",CloseParen:"CloseParen",OpenStatement:"OpenStatement",CloseStatement:"CloseStatement",OpenExpression:"OpenExpression",CloseExpression:"CloseExpression",OpenSquareBracket:"OpenSquareBracket",CloseSquareBracket:"CloseSquareBracket",OpenCurlyBracket:"OpenCurlyBracket",CloseCurlyBracket:"CloseCurlyBracket",Comma:"Comma",Dot:"Dot",Colon:"Colon",Pipe:"Pipe",CallOperator:"CallOperator",AdditiveBinaryOperator:"AdditiveBinaryOperator",MultiplicativeBinaryOperator:"MultiplicativeBinaryOperator",ComparisonBinaryOperator:"ComparisonBinaryOperator",UnaryOperator:"UnaryOperator",Comment:"Comment"}),qt=class{constructor(e,t){this.value=e,this.type=t}};function wd(e){return/\w/.test(e)}function Vr(e){return/[0-9]/.test(e)}var x0=[["{%",w.OpenStatement],["%}",w.CloseStatement],["{{",w.OpenExpression],["}}",w.CloseExpression],["(",w.OpenParen],[")",w.CloseParen],["{",w.OpenCurlyBracket],["}",w.CloseCurlyBracket],["[",w.OpenSquareBracket],["]",w.CloseSquareBracket],[",",w.Comma],[".",w.Dot],[":",w.Colon],["|",w.Pipe],["<=",w.ComparisonBinaryOperator],[">=",w.ComparisonBinaryOperator],["==",w.ComparisonBinaryOperator],["!=",w.ComparisonBinaryOperator],["<",w.ComparisonBinaryOperator],[">",w.ComparisonBinaryOperator],["+",w.AdditiveBinaryOperator],["-",w.AdditiveBinaryOperator],["~",w.AdditiveBinaryOperator],["*",w.MultiplicativeBinaryOperator],["/",w.MultiplicativeBinaryOperator],["%",w.MultiplicativeBinaryOperator],["=",w.Equals]],S0=new Map([["n",`
`],["t","	"],["r","\r"],["b","\b"],["f","\f"],["v","\v"],["'","'"],['"','"'],["\\","\\"]]);function I0(e,t={}){return e.endsWith(`
`)&&(e=e.slice(0,-1)),t.lstrip_blocks&&(e=e.replace(/^[ \t]*({[#%-])/gm,"$1")),t.trim_blocks&&(e=e.replace(/([#%-]})\n/g,"$1")),e.replace(/-%}\s*/g,"%}").replace(/\s*{%-/g,"{%").replace(/-}}\s*/g,"}}").replace(/\s*{{-/g,"{{").replace(/-#}\s*/g,"#}").replace(/\s*{#-/g,"{#").replace(/{%\s*generation\s*%}.+?{%\s*endgeneration\s*%}/gs,"")}function A0(e,t={}){var s,l;const n=[],r=I0(e,t);let i=0,o=0;const a=c=>{let f="";for(;c(r[i]);){if(r[i]==="\\"){if(++i,i>=r.length)throw new SyntaxError("Unexpected end of input");const u=r[i++],d=S0.get(u);if(d===void 0)throw new SyntaxError(`Unexpected escaped character: ${u}`);f+=d;continue}if(f+=r[i++],i>=r.length)throw new SyntaxError("Unexpected end of input")}return f};e:for(;i<r.length;){const c=(s=n.at(-1))==null?void 0:s.type;if(c===void 0||c===w.CloseStatement||c===w.CloseExpression||c===w.Comment){let u="";for(;i<r.length&&!(r[i]==="{"&&(r[i+1]==="%"||r[i+1]==="{"||r[i+1]==="#"));)u+=r[i++];if(u.length>0){n.push(new qt(u,w.Text));continue}}if(r[i]==="{"&&r[i+1]==="#"){i+=2;let u="";for(;r[i]!=="#"||r[i+1]!=="}";){if(i+2>=r.length)throw new SyntaxError("Missing end of comment tag");u+=r[i++]}n.push(new qt(u,w.Comment)),i+=2;continue}a(u=>/\s/.test(u));const f=r[i];if(f==="-"||f==="+"){const u=(l=n.at(-1))==null?void 0:l.type;if(u===w.Text||u===void 0)throw new SyntaxError(`Unexpected character: ${f}`);switch(u){case w.Identifier:case w.NumericLiteral:case w.StringLiteral:case w.CloseParen:case w.CloseSquareBracket:break;default:{++i;const d=a(Vr);n.push(new qt(`${f}${d}`,d.length>0?w.NumericLiteral:w.UnaryOperator));continue}}}for(const[u,d]of x0){if(u==="}}"&&o>0)continue;if(r.slice(i,i+u.length)===u){n.push(new qt(u,d)),d===w.OpenExpression?o=0:d===w.OpenCurlyBracket?++o:d===w.CloseCurlyBracket&&--o,i+=u.length;continue e}}if(f==="'"||f==='"'){++i;const u=a(d=>d!==f);n.push(new qt(u,w.StringLiteral)),++i;continue}if(Vr(f)){let u=a(Vr);if(r[i]==="."&&Vr(r[i+1])){++i;const d=a(Vr);u=`${u}.${d}`}n.push(new qt(u,w.NumericLiteral));continue}if(wd(f)){const u=a(wd);n.push(new qt(u,w.Identifier));continue}throw new SyntaxError(`Unexpected character: ${f}`)}return n}var ht=class{constructor(){C(this,"type","Statement")}},T0=class extends ht{constructor(t){super();C(this,"type","Program");this.body=t}},E0=class extends ht{constructor(t,n,r){super();C(this,"type","If");this.test=t,this.body=n,this.alternate=r}},C0=class extends ht{constructor(t,n,r,i){super();C(this,"type","For");this.loopvar=t,this.iterable=n,this.body=r,this.defaultBlock=i}},P0=class extends ht{constructor(){super(...arguments);C(this,"type","Break")}},R0=class extends ht{constructor(){super(...arguments);C(this,"type","Continue")}},N0=class extends ht{constructor(t,n,r){super();C(this,"type","Set");this.assignee=t,this.value=n,this.body=r}},D0=class extends ht{constructor(t,n,r){super();C(this,"type","Macro");this.name=t,this.args=n,this.body=r}},O0=class extends ht{constructor(t){super();C(this,"type","Comment");this.value=t}},Je=class extends ht{constructor(){super(...arguments);C(this,"type","Expression")}},L0=class extends Je{constructor(t,n,r){super();C(this,"type","MemberExpression");this.object=t,this.property=n,this.computed=r}},_d=class extends Je{constructor(t,n){super();C(this,"type","CallExpression");this.callee=t,this.args=n}},Wn=class extends Je{constructor(t){super();C(this,"type","Identifier");this.value=t}},Rr=class extends Je{constructor(t){super();C(this,"type","Literal");this.value=t}},U0=class extends Rr{constructor(){super(...arguments);C(this,"type","IntegerLiteral")}},M0=class extends Rr{constructor(){super(...arguments);C(this,"type","FloatLiteral")}},bd=class extends Rr{constructor(){super(...arguments);C(this,"type","StringLiteral")}},j0=class extends Rr{constructor(){super(...arguments);C(this,"type","ArrayLiteral")}},kd=class extends Rr{constructor(){super(...arguments);C(this,"type","TupleLiteral")}},$0=class extends Rr{constructor(){super(...arguments);C(this,"type","ObjectLiteral")}},zr=class extends Je{constructor(t,n,r){super();C(this,"type","BinaryExpression");this.operator=t,this.left=n,this.right=r}},F0=class extends Je{constructor(t,n){super();C(this,"type","FilterExpression");this.operand=t,this.filter=n}},B0=class extends ht{constructor(t,n){super();C(this,"type","FilterStatement");this.filter=t,this.body=n}},H0=class extends Je{constructor(t,n){super();C(this,"type","SelectExpression");this.lhs=t,this.test=n}},V0=class extends Je{constructor(t,n,r){super();C(this,"type","TestExpression");this.operand=t,this.negate=n,this.test=r}},z0=class extends Je{constructor(t,n){super();C(this,"type","UnaryExpression");this.operator=t,this.argument=n}},q0=class extends Je{constructor(t=void 0,n=void 0,r=void 0){super();C(this,"type","SliceExpression");this.start=t,this.stop=n,this.step=r}},W0=class extends Je{constructor(t,n){super();C(this,"type","KeywordArgumentExpression");this.key=t,this.value=n}},K0=class extends Je{constructor(t){super();C(this,"type","SpreadExpression");this.argument=t}},Q0=class extends ht{constructor(t,n,r){super();C(this,"type","CallStatement");this.call=t,this.callerArgs=n,this.body=r}},X0=class extends Je{constructor(t,n,r){super();C(this,"type","Ternary");this.condition=t,this.trueExpr=n,this.falseExpr=r}};function J0(e){const t=new T0([]);let n=0;function r(g,y){const b=e[n++];if(!b||b.type!==g)throw new Error(`Parser Error: ${y}. ${b.type} !== ${g}.`);return b}function i(g){if(!l(g))throw new SyntaxError(`Expected ${g}`);++n}function o(){switch(e[n].type){case w.Comment:return new O0(e[n++].value);case w.Text:return c();case w.OpenStatement:return f();case w.OpenExpression:return u();default:throw new SyntaxError(`Unexpected token type: ${e[n].type}`)}}function a(...g){return n+g.length<=e.length&&g.every((y,b)=>y===e[n+b].type)}function s(...g){var y,b,M;return((y=e[n])==null?void 0:y.type)===w.OpenStatement&&((b=e[n+1])==null?void 0:b.type)===w.Identifier&&g.includes((M=e[n+1])==null?void 0:M.value)}function l(...g){return n+g.length<=e.length&&g.every((y,b)=>e[n+b].type==="Identifier"&&y===e[n+b].value)}function c(){return new bd(r(w.Text,"Expected text token").value)}function f(){if(r(w.OpenStatement,"Expected opening statement token"),e[n].type!==w.Identifier)throw new SyntaxError(`Unknown statement, got ${e[n].type}`);const g=e[n].value;let y;switch(g){case"set":++n,y=d();break;case"if":++n,y=v(),r(w.OpenStatement,"Expected {% token"),i("endif"),r(w.CloseStatement,"Expected %} token");break;case"macro":++n,y=_(),r(w.OpenStatement,"Expected {% token"),i("endmacro"),r(w.CloseStatement,"Expected %} token");break;case"for":++n,y=U(),r(w.OpenStatement,"Expected {% token"),i("endfor"),r(w.CloseStatement,"Expected %} token");break;case"call":{++n;let b=null;a(w.OpenParen)&&(b=j());const M=Ye();if(M.type!=="Identifier")throw new SyntaxError("Expected identifier following call statement");const de=j();r(w.CloseStatement,"Expected closing statement token");const kn=[];for(;!s("endcall");)kn.push(o());r(w.OpenStatement,"Expected '{%'"),i("endcall"),r(w.CloseStatement,"Expected closing statement token");const It=new _d(M,de);y=new Q0(It,b,kn);break}case"break":++n,r(w.CloseStatement,"Expected closing statement token"),y=new P0;break;case"continue":++n,r(w.CloseStatement,"Expected closing statement token"),y=new R0;break;case"filter":{++n;let b=Ye();b instanceof Wn&&a(w.OpenParen)&&(b=X(b)),r(w.CloseStatement,"Expected closing statement token");const M=[];for(;!s("endfilter");)M.push(o());r(w.OpenStatement,"Expected '{%'"),i("endfilter"),r(w.CloseStatement,"Expected '%}'"),y=new B0(b,M);break}default:throw new SyntaxError(`Unknown statement type: ${g}`)}return y}function u(){r(w.OpenExpression,"Expected opening expression token");const g=m();return r(w.CloseExpression,"Expected closing expression token"),g}function d(){const g=x();let y=null;const b=[];if(a(w.Equals))++n,y=x();else{for(r(w.CloseStatement,"Expected %} token");!s("endset");)b.push(o());r(w.OpenStatement,"Expected {% token"),i("endset")}return r(w.CloseStatement,"Expected closing statement token"),new N0(g,y,b)}function v(){const g=m();r(w.CloseStatement,"Expected closing statement token");const y=[],b=[];for(;!s("elif","else","endif");)y.push(o());if(s("elif")){++n,++n;const M=v();b.push(M)}else if(s("else"))for(++n,++n,r(w.CloseStatement,"Expected closing statement token");!s("endif");)b.push(o());return new E0(g,y,b)}function _(){const g=Ye();if(g.type!=="Identifier")throw new SyntaxError("Expected identifier following macro statement");const y=j();r(w.CloseStatement,"Expected closing statement token");const b=[];for(;!s("endmacro");)b.push(o());return new D0(g,y,b)}function x(g=!1){const y=g?Ye:m,b=[y()],M=a(w.Comma);for(;M&&(++n,b.push(y()),!!a(w.Comma)););return M?new kd(b):b[0]}function U(){const g=x(!0);if(!(g instanceof Wn||g instanceof kd))throw new SyntaxError(`Expected identifier/tuple for the loop variable, got ${g.type} instead`);if(!l("in"))throw new SyntaxError("Expected `in` keyword following loop variable");++n;const y=m();r(w.CloseStatement,"Expected closing statement token");const b=[];for(;!s("endfor","else");)b.push(o());const M=[];if(s("else"))for(++n,++n,r(w.CloseStatement,"Expected closing statement token");!s("endfor");)M.push(o());return new C0(g,y,b,M)}function m(){return p()}function p(){const g=h();if(l("if")){++n;const y=h();if(l("else")){++n;const b=p();return new X0(y,g,b)}else return new H0(g,y)}return g}function h(){let g=k();for(;l("or");){const y=e[n];++n;const b=k();g=new zr(y,g,b)}return g}function k(){let g=I();for(;l("and");){const y=e[n];++n;const b=I();g=new zr(y,g,b)}return g}function I(){let g;for(;l("not");){const y=e[n];++n;const b=I();g=new z0(y,b)}return g??A()}function A(){let g=E();for(;;){let y;if(l("not","in"))y=new qt("not in",w.Identifier),n+=2;else if(l("in"))y=e[n++];else if(a(w.ComparisonBinaryOperator))y=e[n++];else break;const b=E();g=new zr(y,g,b)}return g}function E(){let g=Dr();for(;a(w.AdditiveBinaryOperator);){const y=e[n];++n;const b=Dr();g=new zr(y,g,b)}return g}function P(){const g=Ht(Ye());return a(w.OpenParen)?X(g):g}function X(g){let y=new _d(g,j());return y=Ht(y),a(w.OpenParen)&&(y=X(y)),y}function j(){r(w.OpenParen,"Expected opening parenthesis for arguments list");const g=Be();return r(w.CloseParen,"Expected closing parenthesis for arguments list"),g}function Be(){const g=[];for(;!a(w.CloseParen);){let y;if(e[n].type===w.MultiplicativeBinaryOperator&&e[n].value==="*"){++n;const b=m();y=new K0(b)}else if(y=m(),a(w.Equals)){if(++n,!(y instanceof Wn))throw new SyntaxError("Expected identifier for keyword argument");const b=m();y=new W0(y,b)}g.push(y),a(w.Comma)&&++n}return g}function bn(){const g=[];let y=!1;for(;!a(w.CloseSquareBracket);)a(w.Colon)?(g.push(void 0),++n,y=!0):(g.push(m()),a(w.Colon)&&(++n,y=!0));if(g.length===0)throw new SyntaxError("Expected at least one argument for member/slice expression");if(y){if(g.length>3)throw new SyntaxError("Expected 0-3 arguments for slice expression");return new q0(...g)}return g[0]}function Ht(g){for(;a(w.Dot)||a(w.OpenSquareBracket);){const y=e[n];++n;let b;const M=y.type===w.OpenSquareBracket;if(M)b=bn(),r(w.CloseSquareBracket,"Expected closing square bracket");else if(b=Ye(),b.type!=="Identifier")throw new SyntaxError("Expected identifier following dot operator");g=new L0(g,b,M)}return g}function Dr(){let g=Fi();for(;a(w.MultiplicativeBinaryOperator);){const y=e[n++],b=Fi();g=new zr(y,g,b)}return g}function Fi(){let g=Or();for(;l("is");){++n;const y=l("not");y&&++n;const b=Ye();if(!(b instanceof Wn))throw new SyntaxError("Expected identifier for the test");g=new V0(g,y,b)}return g}function Or(){let g=P();for(;a(w.Pipe);){++n;let y=Ye();if(!(y instanceof Wn))throw new SyntaxError("Expected identifier for the filter");a(w.OpenParen)&&(y=X(y)),g=new F0(g,y)}return g}function Ye(){const g=e[n++];switch(g.type){case w.NumericLiteral:{const y=g.value;return y.includes(".")?new M0(Number(y)):new U0(Number(y))}case w.StringLiteral:{let y=g.value;for(;a(w.StringLiteral);)y+=e[n++].value;return new bd(y)}case w.Identifier:return new Wn(g.value);case w.OpenParen:{const y=x();return r(w.CloseParen,"Expected closing parenthesis, got ${tokens[current].type} instead."),y}case w.OpenSquareBracket:{const y=[];for(;!a(w.CloseSquareBracket);)y.push(m()),a(w.Comma)&&++n;return++n,new j0(y)}case w.OpenCurlyBracket:{const y=new Map;for(;!a(w.CloseCurlyBracket);){const b=m();r(w.Colon,"Expected colon between key and value in object literal");const M=m();y.set(b,M),a(w.Comma)&&++n}return++n,new $0(y)}default:throw new SyntaxError(`Unexpected token: ${g.type}`)}}for(;n<e.length;)t.body.push(o());return t}function Y0(e,t,n=1){t===void 0&&(t=e,e=0);const r=[];for(let i=e;i<t;i+=n)r.push(i);return r}function xd(e,t,n,r=1){const i=Math.sign(r);i>=0?(t=(t??(t=0))<0?Math.max(e.length+t,0):Math.min(t,e.length),n=(n??(n=e.length))<0?Math.max(e.length+n,0):Math.min(n,e.length)):(t=(t??(t=e.length-1))<0?Math.max(e.length+t,-1):Math.min(t,e.length-1),n=(n??(n=-1))<-1?Math.max(e.length+n,-1):Math.min(n,e.length-1));const o=[];for(let a=t;i*a<i*n;a+=r)o.push(e[a]);return o}function Z0(e){return e.replace(/\b\w/g,t=>t.toUpperCase())}function G0(e){return ex(new Date,e)}function ex(e,t){const n=new Intl.DateTimeFormat(void 0,{month:"long"}),r=new Intl.DateTimeFormat(void 0,{month:"short"}),i=o=>o<10?"0"+o:o.toString();return t.replace(/%[YmdbBHM%]/g,o=>{switch(o){case"%Y":return e.getFullYear().toString();case"%m":return i(e.getMonth()+1);case"%d":return i(e.getDate());case"%b":return r.format(e);case"%B":return n.format(e);case"%H":return i(e.getHours());case"%M":return i(e.getMinutes());case"%%":return"%";default:return o}})}function tx(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function nx(e,t,n,r){if(r===0)return e;let i=r==null||r<0?1/0:r;const o=t.length===0?new RegExp("(?=)","gu"):new RegExp(tx(t),"gu");return e.replaceAll(o,a=>i>0?(--i,n):a)}var Sd=class extends Error{},Id=class extends Error{},St=class{constructor(e=void 0){C(this,"type","RuntimeValue");C(this,"value");C(this,"builtins",new Map);this.value=e}__bool__(){return new H(!!this.value)}toString(){return String(this.value)}},$=class extends St{constructor(){super(...arguments);C(this,"type","IntegerValue")}},ce=class extends St{constructor(){super(...arguments);C(this,"type","FloatValue")}toString(){return this.value%1===0?this.value.toFixed(1):this.value.toString()}},R=class extends St{constructor(){super(...arguments);C(this,"type","StringValue");C(this,"builtins",new Map([["upper",new se(()=>new R(this.value.toUpperCase()))],["lower",new se(()=>new R(this.value.toLowerCase()))],["strip",new se(()=>new R(this.value.trim()))],["title",new se(()=>new R(Z0(this.value)))],["capitalize",new se(()=>new R(this.value.charAt(0).toUpperCase()+this.value.slice(1)))],["length",new $(this.value.length)],["rstrip",new se(()=>new R(this.value.trimEnd()))],["lstrip",new se(()=>new R(this.value.trimStart()))],["startswith",new se(t=>{if(t.length===0)throw new Error("startswith() requires at least one argument");const n=t[0];if(n instanceof R)return new H(this.value.startsWith(n.value));if(n instanceof K){for(const r of n.value){if(!(r instanceof R))throw new Error("startswith() tuple elements must be strings");if(this.value.startsWith(r.value))return new H(!0)}return new H(!1)}throw new Error("startswith() argument must be a string or tuple of strings")})],["endswith",new se(t=>{if(t.length===0)throw new Error("endswith() requires at least one argument");const n=t[0];if(n instanceof R)return new H(this.value.endsWith(n.value));if(n instanceof K){for(const r of n.value){if(!(r instanceof R))throw new Error("endswith() tuple elements must be strings");if(this.value.endsWith(r.value))return new H(!0)}return new H(!1)}throw new Error("endswith() argument must be a string or tuple of strings")})],["split",new se(t=>{const n=t[0]??new Pe;if(!(n instanceof R||n instanceof Pe))throw new Error("sep argument must be a string or null");const r=t[1]??new $(-1);if(!(r instanceof $))throw new Error("maxsplit argument must be a number");let i=[];if(n instanceof Pe){const o=this.value.trimStart();for(const{0:a,index:s}of o.matchAll(/\S+/g)){if(r.value!==-1&&i.length>=r.value&&s!==void 0){i.push(a+o.slice(s+a.length));break}i.push(a)}}else{if(n.value==="")throw new Error("empty separator");i=this.value.split(n.value),r.value!==-1&&i.length>r.value&&i.push(i.splice(r.value).join(n.value))}return new K(i.map(o=>new R(o)))})],["replace",new se(t=>{if(t.length<2)throw new Error("replace() requires at least two arguments");const n=t[0],r=t[1];if(!(n instanceof R&&r instanceof R))throw new Error("replace() arguments must be strings");let i;if(t.length>2?t[2].type==="KeywordArgumentsValue"?i=t[2].value.get("count")??new Pe:i=t[2]:i=new Pe,!(i instanceof $||i instanceof Pe))throw new Error("replace() count argument must be a number or null");return new R(nx(this.value,n.value,r.value,i.value))})]]))}},H=class extends St{constructor(){super(...arguments);C(this,"type","BooleanValue")}},Le=class extends St{constructor(){super(...arguments);C(this,"type","ObjectValue");C(this,"builtins",new Map([["get",new se(([t,n])=>{if(!(t instanceof R))throw new Error(`Object key must be a string: got ${t.type}`);return this.value.get(t.value)??n??new Pe})],["items",new se(()=>this.items())],["keys",new se(()=>this.keys())],["values",new se(()=>this.values())]]))}__bool__(){return new H(this.value.size>0)}items(){return new K(Array.from(this.value.entries()).map(([t,n])=>new K([new R(t),n])))}keys(){return new K(Array.from(this.value.keys()).map(t=>new R(t)))}values(){return new K(Array.from(this.value.values()))}},ds=class extends Le{constructor(){super(...arguments);C(this,"type","KeywordArgumentsValue")}},K=class extends St{constructor(){super(...arguments);C(this,"type","ArrayValue");C(this,"builtins",new Map([["length",new $(this.value.length)]]))}__bool__(){return new H(this.value.length>0)}},rx=class extends K{constructor(){super(...arguments);C(this,"type","TupleValue")}},se=class extends St{constructor(){super(...arguments);C(this,"type","FunctionValue")}},Pe=class extends St{constructor(){super(...arguments);C(this,"type","NullValue")}},we=class extends St{constructor(){super(...arguments);C(this,"type","UndefinedValue")}},Tn=class{constructor(e){C(this,"variables",new Map([["namespace",new se(e=>{if(e.length===0)return new Le(new Map);if(e.length!==1||!(e[0]instanceof Le))throw new Error("`namespace` expects either zero arguments or a single object argument");return e[0]})]]));C(this,"tests",new Map([["boolean",e=>e.type==="BooleanValue"],["callable",e=>e instanceof se],["odd",e=>{if(!(e instanceof $))throw new Error(`cannot odd on ${e.type}`);return e.value%2!==0}],["even",e=>{if(!(e instanceof $))throw new Error(`cannot even on ${e.type}`);return e.value%2===0}],["false",e=>e.type==="BooleanValue"&&!e.value],["true",e=>e.type==="BooleanValue"&&e.value],["none",e=>e.type==="NullValue"],["string",e=>e.type==="StringValue"],["number",e=>e instanceof $||e instanceof ce],["integer",e=>e instanceof $],["iterable",e=>e.type==="ArrayValue"||e.type==="StringValue"],["mapping",e=>e.type==="ObjectValue"],["lower",e=>{const t=e.value;return e.type==="StringValue"&&t===t.toLowerCase()}],["upper",e=>{const t=e.value;return e.type==="StringValue"&&t===t.toUpperCase()}],["none",e=>e.type==="NullValue"],["defined",e=>e.type!=="UndefinedValue"],["undefined",e=>e.type==="UndefinedValue"],["equalto",(e,t)=>e.value===t.value],["eq",(e,t)=>e.value===t.value]]));this.parent=e}set(e,t){return this.declareVariable(e,xo(t))}declareVariable(e,t){if(this.variables.has(e))throw new SyntaxError(`Variable already declared: ${e}`);return this.variables.set(e,t),t}setVariable(e,t){return this.variables.set(e,t),t}resolve(e){if(this.variables.has(e))return this;if(this.parent)return this.parent.resolve(e);throw new Error(`Unknown variable: ${e}`)}lookupVariable(e){try{return this.resolve(e).variables.get(e)??new we}catch{return new we}}};function ix(e){e.set("false",!1),e.set("true",!0),e.set("none",null),e.set("raise_exception",t=>{throw new Error(t)}),e.set("range",Y0),e.set("strftime_now",G0),e.set("True",!0),e.set("False",!1),e.set("None",null)}var ox=class{constructor(e){C(this,"global");this.global=e??new Tn}run(e){return this.evaluate(e,this.global)}evaluateBinaryExpression(e,t){const n=this.evaluate(e.left,t);switch(e.operator.value){case"and":return n.__bool__().value?this.evaluate(e.right,t):n;case"or":return n.__bool__().value?n:this.evaluate(e.right,t)}const r=this.evaluate(e.right,t);switch(e.operator.value){case"==":return new H(n.value==r.value);case"!=":return new H(n.value!=r.value)}if(n instanceof we||r instanceof we){if(r instanceof we&&["in","not in"].includes(e.operator.value))return new H(e.operator.value==="not in");throw new Error(`Cannot perform operation ${e.operator.value} on undefined values`)}else{if(n instanceof Pe||r instanceof Pe)throw new Error("Cannot perform operation on null values");if(e.operator.value==="~")return new R(n.value.toString()+r.value.toString());if((n instanceof $||n instanceof ce)&&(r instanceof $||r instanceof ce)){const i=n.value,o=r.value;switch(e.operator.value){case"+":case"-":case"*":{const a=e.operator.value==="+"?i+o:e.operator.value==="-"?i-o:i*o;return n instanceof ce||r instanceof ce?new ce(a):new $(a)}case"/":return new ce(i/o);case"%":{const a=i%o;return n instanceof ce||r instanceof ce?new ce(a):new $(a)}case"<":return new H(i<o);case">":return new H(i>o);case">=":return new H(i>=o);case"<=":return new H(i<=o)}}else if(n instanceof K&&r instanceof K)switch(e.operator.value){case"+":return new K(n.value.concat(r.value))}else if(r instanceof K){const i=r.value.find(o=>o.value===n.value)!==void 0;switch(e.operator.value){case"in":return new H(i);case"not in":return new H(!i)}}}if(n instanceof R||r instanceof R)switch(e.operator.value){case"+":return new R(n.value.toString()+r.value.toString())}if(n instanceof R&&r instanceof R)switch(e.operator.value){case"in":return new H(r.value.includes(n.value));case"not in":return new H(!r.value.includes(n.value))}if(n instanceof R&&r instanceof Le)switch(e.operator.value){case"in":return new H(r.value.has(n.value));case"not in":return new H(!r.value.has(n.value))}throw new SyntaxError(`Unknown operator "${e.operator.value}" between ${n.type} and ${r.type}`)}evaluateArguments(e,t){const n=[],r=new Map;for(const i of e)if(i.type==="SpreadExpression"){const o=i,a=this.evaluate(o.argument,t);if(!(a instanceof K))throw new Error(`Cannot unpack non-iterable type: ${a.type}`);for(const s of a.value)n.push(s)}else if(i.type==="KeywordArgumentExpression"){const o=i;r.set(o.key.value,this.evaluate(o.value,t))}else{if(r.size>0)throw new Error("Positional arguments must come before keyword arguments");n.push(this.evaluate(i,t))}return[n,r]}applyFilter(e,t,n){if(t.type==="Identifier"){const r=t;if(r.value==="tojson")return new R(si(e));if(e instanceof K)switch(r.value){case"list":return e;case"first":return e.value[0];case"last":return e.value[e.value.length-1];case"length":return new $(e.value.length);case"reverse":return new K(e.value.reverse());case"sort":return new K(e.value.sort((i,o)=>{if(i.type!==o.type)throw new Error(`Cannot compare different types: ${i.type} and ${o.type}`);switch(i.type){case"IntegerValue":case"FloatValue":return i.value-o.value;case"StringValue":return i.value.localeCompare(o.value);default:throw new Error(`Cannot compare type: ${i.type}`)}}));case"join":return new R(e.value.map(i=>i.value).join(""));case"string":return new R(si(e));case"unique":{const i=new Set,o=[];for(const a of e.value)i.has(a.value)||(i.add(a.value),o.push(a));return new K(o)}default:throw new Error(`Unknown ArrayValue filter: ${r.value}`)}else if(e instanceof R)switch(r.value){case"length":case"upper":case"lower":case"title":case"capitalize":{const i=e.builtins.get(r.value);if(i instanceof se)return i.value([],n);if(i instanceof $)return i;throw new Error(`Unknown StringValue filter: ${r.value}`)}case"trim":return new R(e.value.trim());case"indent":return new R(e.value.split(`
`).map((i,o)=>o===0||i.length===0?i:"    "+i).join(`
`));case"join":case"string":return e;case"int":{const i=parseInt(e.value,10);return new $(isNaN(i)?0:i)}case"float":{const i=parseFloat(e.value);return new ce(isNaN(i)?0:i)}default:throw new Error(`Unknown StringValue filter: ${r.value}`)}else if(e instanceof $||e instanceof ce)switch(r.value){case"abs":return e instanceof $?new $(Math.abs(e.value)):new ce(Math.abs(e.value));case"int":return new $(Math.floor(e.value));case"float":return new ce(e.value);default:throw new Error(`Unknown NumericValue filter: ${r.value}`)}else if(e instanceof Le)switch(r.value){case"items":return new K(Array.from(e.value.entries()).map(([i,o])=>new K([new R(i),o])));case"length":return new $(e.value.size);default:throw new Error(`Unknown ObjectValue filter: ${r.value}`)}else if(e instanceof H)switch(r.value){case"bool":return new H(e.value);case"int":return new $(e.value?1:0);case"float":return new ce(e.value?1:0);case"string":return new R(e.value?"true":"false");default:throw new Error(`Unknown BooleanValue filter: ${r.value}`)}throw new Error(`Cannot apply filter "${r.value}" to type: ${e.type}`)}else if(t.type==="CallExpression"){const r=t;if(r.callee.type!=="Identifier")throw new Error(`Unknown filter: ${r.callee.type}`);const i=r.callee.value;if(i==="tojson"){const[,o]=this.evaluateArguments(r.args,n),a=o.get("indent")??new Pe;if(!(a instanceof $||a instanceof Pe))throw new Error("If set, indent must be a number");return new R(si(e,a.value))}else if(i==="join"){let o;if(e instanceof R)o=Array.from(e.value);else if(e instanceof K)o=e.value.map(c=>c.value);else throw new Error(`Cannot apply filter "${i}" to type: ${e.type}`);const[a,s]=this.evaluateArguments(r.args,n),l=a.at(0)??s.get("separator")??new R("");if(!(l instanceof R))throw new Error("separator must be a string");return new R(o.join(l.value))}else if(i==="int"||i==="float"){const[o,a]=this.evaluateArguments(r.args,n),s=o.at(0)??a.get("default")??(i==="int"?new $(0):new ce(0));if(e instanceof R){const l=i==="int"?parseInt(e.value,10):parseFloat(e.value);return isNaN(l)?s:i==="int"?new $(l):new ce(l)}else{if(e instanceof $||e instanceof ce)return e;if(e instanceof H)return i==="int"?new $(e.value?1:0):new ce(e.value?1:0);throw new Error(`Cannot apply filter "${i}" to type: ${e.type}`)}}else if(i==="default"){const[o,a]=this.evaluateArguments(r.args,n),s=o[0]??new R(""),l=o[1]??a.get("boolean")??new H(!1);if(!(l instanceof H))throw new Error("`default` filter flag must be a boolean");return e instanceof we||l.value&&!e.__bool__().value?s:e}if(e instanceof K){switch(i){case"selectattr":case"rejectattr":{const o=i==="selectattr";if(e.value.some(u=>!(u instanceof Le)))throw new Error(`\`${i}\` can only be applied to array of objects`);if(r.args.some(u=>u.type!=="StringLiteral"))throw new Error(`arguments of \`${i}\` must be strings`);const[a,s,l]=r.args.map(u=>this.evaluate(u,n));let c;if(s){const u=n.tests.get(s.value);if(!u)throw new Error(`Unknown test: ${s.value}`);c=u}else c=(...u)=>u[0].__bool__().value;const f=e.value.filter(u=>{const d=u.value.get(a.value),v=d?c(d,l):!1;return o?v:!v});return new K(f)}case"map":{const[,o]=this.evaluateArguments(r.args,n);if(o.has("attribute")){const a=o.get("attribute");if(!(a instanceof R))throw new Error("attribute must be a string");const s=o.get("default"),l=e.value.map(c=>{if(!(c instanceof Le))throw new Error("items in map must be an object");return c.value.get(a.value)??s??new we});return new K(l)}else throw new Error("`map` expressions without `attribute` set are not currently supported.")}}throw new Error(`Unknown ArrayValue filter: ${i}`)}else if(e instanceof R){switch(i){case"indent":{const[o,a]=this.evaluateArguments(r.args,n),s=o.at(0)??a.get("width")??new $(4);if(!(s instanceof $))throw new Error("width must be a number");const l=o.at(1)??a.get("first")??new H(!1),c=o.at(2)??a.get("blank")??new H(!1),f=e.value.split(`
`),u=" ".repeat(s.value),d=f.map((v,_)=>!l.value&&_===0||!c.value&&v.length===0?v:u+v);return new R(d.join(`
`))}case"replace":{const o=e.builtins.get("replace");if(!(o instanceof se))throw new Error("replace filter not available");const[a,s]=this.evaluateArguments(r.args,n);return o.value([...a,new ds(s)],n)}}throw new Error(`Unknown StringValue filter: ${i}`)}else throw new Error(`Cannot apply filter "${i}" to type: ${e.type}`)}throw new Error(`Unknown filter: ${t.type}`)}evaluateFilterExpression(e,t){const n=this.evaluate(e.operand,t);return this.applyFilter(n,e.filter,t)}evaluateTestExpression(e,t){const n=this.evaluate(e.operand,t),r=t.tests.get(e.test.value);if(!r)throw new Error(`Unknown test: ${e.test.value}`);const i=r(n);return new H(e.negate?!i:i)}evaluateSelectExpression(e,t){return this.evaluate(e.test,t).__bool__().value?this.evaluate(e.lhs,t):new we}evaluateUnaryExpression(e,t){const n=this.evaluate(e.argument,t);switch(e.operator.value){case"not":return new H(!n.value);default:throw new SyntaxError(`Unknown operator: ${e.operator.value}`)}}evaluateTernaryExpression(e,t){return this.evaluate(e.condition,t).__bool__().value?this.evaluate(e.trueExpr,t):this.evaluate(e.falseExpr,t)}evalProgram(e,t){return this.evaluateBlock(e.body,t)}evaluateBlock(e,t){let n="";for(const r of e){const i=this.evaluate(r,t);i.type!=="NullValue"&&i.type!=="UndefinedValue"&&(n+=i.toString())}return new R(n)}evaluateIdentifier(e,t){return t.lookupVariable(e.value)}evaluateCallExpression(e,t){const[n,r]=this.evaluateArguments(e.args,t);r.size>0&&n.push(new ds(r));const i=this.evaluate(e.callee,t);if(i.type!=="FunctionValue")throw new Error(`Cannot call something that is not a function: got ${i.type}`);return i.value(n,t)}evaluateSliceExpression(e,t,n){if(!(e instanceof K||e instanceof R))throw new Error("Slice object must be an array or string");const r=this.evaluate(t.start,n),i=this.evaluate(t.stop,n),o=this.evaluate(t.step,n);if(!(r instanceof $||r instanceof we))throw new Error("Slice start must be numeric or undefined");if(!(i instanceof $||i instanceof we))throw new Error("Slice stop must be numeric or undefined");if(!(o instanceof $||o instanceof we))throw new Error("Slice step must be numeric or undefined");return e instanceof K?new K(xd(e.value,r.value,i.value,o.value)):new R(xd(Array.from(e.value),r.value,i.value,o.value).join(""))}evaluateMemberExpression(e,t){const n=this.evaluate(e.object,t);let r;if(e.computed){if(e.property.type==="SliceExpression")return this.evaluateSliceExpression(n,e.property,t);r=this.evaluate(e.property,t)}else r=new R(e.property.value);let i;if(n instanceof Le){if(!(r instanceof R))throw new Error(`Cannot access property with non-string: got ${r.type}`);i=n.value.get(r.value)??n.builtins.get(r.value)}else if(n instanceof K||n instanceof R)if(r instanceof $)i=n.value.at(r.value),n instanceof R&&(i=new R(n.value.at(r.value)));else if(r instanceof R)i=n.builtins.get(r.value);else throw new Error(`Cannot access property with non-string/non-number: got ${r.type}`);else{if(!(r instanceof R))throw new Error(`Cannot access property with non-string: got ${r.type}`);i=n.builtins.get(r.value)}return i instanceof St?i:new we}evaluateSet(e,t){const n=e.value?this.evaluate(e.value,t):this.evaluateBlock(e.body,t);if(e.assignee.type==="Identifier"){const r=e.assignee.value;t.setVariable(r,n)}else if(e.assignee.type==="TupleLiteral"){const r=e.assignee;if(!(n instanceof K))throw new Error(`Cannot unpack non-iterable type in set: ${n.type}`);const i=n.value;if(i.length!==r.value.length)throw new Error(`Too ${r.value.length>i.length?"few":"many"} items to unpack in set`);for(let o=0;o<r.value.length;++o){const a=r.value[o];if(a.type!=="Identifier")throw new Error(`Cannot unpack to non-identifier in set: ${a.type}`);t.setVariable(a.value,i[o])}}else if(e.assignee.type==="MemberExpression"){const r=e.assignee,i=this.evaluate(r.object,t);if(!(i instanceof Le))throw new Error("Cannot assign to member of non-object");if(r.property.type!=="Identifier")throw new Error("Cannot assign to member with non-identifier property");i.value.set(r.property.value,n)}else throw new Error(`Invalid LHS inside assignment expression: ${JSON.stringify(e.assignee)}`);return new Pe}evaluateIf(e,t){const n=this.evaluate(e.test,t);return this.evaluateBlock(n.__bool__().value?e.body:e.alternate,t)}evaluateFor(e,t){const n=new Tn(t);let r,i;if(e.iterable.type==="SelectExpression"){const c=e.iterable;i=this.evaluate(c.lhs,n),r=c.test}else i=this.evaluate(e.iterable,n);if(!(i instanceof K||i instanceof Le))throw new Error(`Expected iterable or object type in for loop: got ${i.type}`);i instanceof Le&&(i=i.keys());const o=[],a=[];for(let c=0;c<i.value.length;++c){const f=new Tn(n),u=i.value[c];let d;if(e.loopvar.type==="Identifier")d=v=>v.setVariable(e.loopvar.value,u);else if(e.loopvar.type==="TupleLiteral"){const v=e.loopvar;if(u.type!=="ArrayValue")throw new Error(`Cannot unpack non-iterable type: ${u.type}`);const _=u;if(v.value.length!==_.value.length)throw new Error(`Too ${v.value.length>_.value.length?"few":"many"} items to unpack`);d=x=>{for(let U=0;U<v.value.length;++U){if(v.value[U].type!=="Identifier")throw new Error(`Cannot unpack non-identifier type: ${v.value[U].type}`);x.setVariable(v.value[U].value,_.value[U])}}}else throw new Error(`Invalid loop variable(s): ${e.loopvar.type}`);r&&(d(f),!this.evaluate(r,f).__bool__().value)||(o.push(u),a.push(d))}let s="",l=!0;for(let c=0;c<o.length;++c){const f=new Map([["index",new $(c+1)],["index0",new $(c)],["revindex",new $(o.length-c)],["revindex0",new $(o.length-c-1)],["first",new H(c===0)],["last",new H(c===o.length-1)],["length",new $(o.length)],["previtem",c>0?o[c-1]:new we],["nextitem",c<o.length-1?o[c+1]:new we]]);n.setVariable("loop",new Le(f)),a[c](n);try{const u=this.evaluateBlock(e.body,n);s+=u.value}catch(u){if(u instanceof Id)continue;if(u instanceof Sd)break;throw u}l=!1}if(l){const c=this.evaluateBlock(e.defaultBlock,n);s+=c.value}return new R(s)}evaluateMacro(e,t){return t.setVariable(e.name.value,new se((n,r)=>{var a;const i=new Tn(r);n=n.slice();let o;((a=n.at(-1))==null?void 0:a.type)==="KeywordArgumentsValue"&&(o=n.pop());for(let s=0;s<e.args.length;++s){const l=e.args[s],c=n[s];if(l.type==="Identifier"){const f=l;if(!c)throw new Error(`Missing positional argument: ${f.value}`);i.setVariable(f.value,c)}else if(l.type==="KeywordArgumentExpression"){const f=l,u=c??(o==null?void 0:o.value.get(f.key.value))??this.evaluate(f.value,i);i.setVariable(f.key.value,u)}else throw new Error(`Unknown argument type: ${l.type}`)}return this.evaluateBlock(e.body,i)})),new Pe}evaluateCallStatement(e,t){const n=new se((s,l)=>{const c=new Tn(l);if(e.callerArgs)for(let f=0;f<e.callerArgs.length;++f){const u=e.callerArgs[f];if(u.type!=="Identifier")throw new Error(`Caller parameter must be an identifier, got ${u.type}`);c.setVariable(u.value,s[f]??new we)}return this.evaluateBlock(e.body,c)}),[r,i]=this.evaluateArguments(e.call.args,t);r.push(new ds(i));const o=this.evaluate(e.call.callee,t);if(o.type!=="FunctionValue")throw new Error(`Cannot call something that is not a function: got ${o.type}`);const a=new Tn(t);return a.setVariable("caller",n),o.value(r,a)}evaluateFilterStatement(e,t){const n=this.evaluateBlock(e.body,t);return this.applyFilter(n,e.filter,t)}evaluate(e,t){if(!e)return new we;switch(e.type){case"Program":return this.evalProgram(e,t);case"Set":return this.evaluateSet(e,t);case"If":return this.evaluateIf(e,t);case"For":return this.evaluateFor(e,t);case"Macro":return this.evaluateMacro(e,t);case"CallStatement":return this.evaluateCallStatement(e,t);case"Break":throw new Sd;case"Continue":throw new Id;case"IntegerLiteral":return new $(e.value);case"FloatLiteral":return new ce(e.value);case"StringLiteral":return new R(e.value);case"ArrayLiteral":return new K(e.value.map(n=>this.evaluate(n,t)));case"TupleLiteral":return new rx(e.value.map(n=>this.evaluate(n,t)));case"ObjectLiteral":{const n=new Map;for(const[r,i]of e.value){const o=this.evaluate(r,t);if(!(o instanceof R))throw new Error(`Object keys must be strings: got ${o.type}`);n.set(o.value,this.evaluate(i,t))}return new Le(n)}case"Identifier":return this.evaluateIdentifier(e,t);case"CallExpression":return this.evaluateCallExpression(e,t);case"MemberExpression":return this.evaluateMemberExpression(e,t);case"UnaryExpression":return this.evaluateUnaryExpression(e,t);case"BinaryExpression":return this.evaluateBinaryExpression(e,t);case"FilterExpression":return this.evaluateFilterExpression(e,t);case"FilterStatement":return this.evaluateFilterStatement(e,t);case"TestExpression":return this.evaluateTestExpression(e,t);case"SelectExpression":return this.evaluateSelectExpression(e,t);case"Ternary":return this.evaluateTernaryExpression(e,t);case"Comment":return new Pe;default:throw new SyntaxError(`Unknown node type: ${e.type}`)}}};function xo(e){switch(typeof e){case"number":return Number.isInteger(e)?new $(e):new ce(e);case"string":return new R(e);case"boolean":return new H(e);case"undefined":return new we;case"object":return e===null?new Pe:Array.isArray(e)?new K(e.map(xo)):new Le(new Map(Object.entries(e).map(([t,n])=>[t,xo(n)])));case"function":return new se((t,n)=>{const r=e(...t.map(i=>i.value))??null;return xo(r)});default:throw new Error(`Cannot convert to runtime value: ${e}`)}}function si(e,t,n){const r=n??0;switch(e.type){case"NullValue":case"UndefinedValue":return"null";case"IntegerValue":case"FloatValue":case"StringValue":case"BooleanValue":return JSON.stringify(e.value);case"ArrayValue":case"ObjectValue":{const i=t?" ".repeat(t):"",o=`
`+i.repeat(r),a=o+i;if(e.type==="ArrayValue"){const s=e.value.map(l=>si(l,t,r+1));return t?`[${a}${s.join(`,${a}`)}${o}]`:`[${s.join(", ")}]`}else{const s=Array.from(e.value.entries()).map(([l,c])=>{const f=`"${l}": ${si(c,t,r+1)}`;return t?`${a}${f}`:f});return t?`{${s.join(",")}${o}}`:`{${s.join(", ")}}`}}default:throw new Error(`Cannot convert to JSON: ${e.type}`)}}var he=`
`,ax="{%- ",sx=" -%}";function lx(e){switch(e.operator.type){case"MultiplicativeBinaryOperator":return 4;case"AdditiveBinaryOperator":return 3;case"ComparisonBinaryOperator":return 2;case"Identifier":return e.operator.value==="and"?1:e.operator.value==="in"||e.operator.value==="not in"?2:0}return 0}function cx(e,t="	"){const n=typeof t=="number"?" ".repeat(t):t;return ft(e.body,0,n).replace(/\n$/,"")}function be(...e){return ax+e.join(" ")+sx}function ft(e,t,n){return e.map(r=>ux(r,t,n)).join(he)}function ux(e,t,n){const r=n.repeat(t);switch(e.type){case"Program":return ft(e.body,t,n);case"If":return dx(e,t,n);case"For":return px(e,t,n);case"Set":return fx(e,t,n);case"Macro":return mx(e,t,n);case"Break":return r+be("break");case"Continue":return r+be("continue");case"CallStatement":return hx(e,t,n);case"FilterStatement":return gx(e,t,n);case"Comment":return r+"{# "+e.value+" #}";default:return r+"{{- "+B(e)+" -}}"}}function dx(e,t,n){const r=n.repeat(t),i=[];let o=e;for(;o&&(i.push({test:o.test,body:o.body}),o.alternate.length===1&&o.alternate[0].type==="If");)o=o.alternate[0];let a=r+be("if",B(i[0].test))+he+ft(i[0].body,t+1,n);for(let s=1;s<i.length;++s)a+=he+r+be("elif",B(i[s].test))+he+ft(i[s].body,t+1,n);return o&&o.alternate.length>0&&(a+=he+r+be("else")+he+ft(o.alternate,t+1,n)),a+=he+r+be("endif"),a}function px(e,t,n){const r=n.repeat(t);let i="";if(e.iterable.type==="SelectExpression"){const a=e.iterable;i=`${B(a.lhs)} if ${B(a.test)}`}else i=B(e.iterable);let o=r+be("for",B(e.loopvar),"in",i)+he+ft(e.body,t+1,n);return e.defaultBlock.length>0&&(o+=he+r+be("else")+he+ft(e.defaultBlock,t+1,n)),o+=he+r+be("endfor"),o}function fx(e,t,n){const r=n.repeat(t),i=B(e.assignee),o=e.value?B(e.value):"",a=r+be("set",`${i}${e.value?" = "+o:""}`);return e.body.length===0?a:a+he+ft(e.body,t+1,n)+he+r+be("endset")}function mx(e,t,n){const r=n.repeat(t),i=e.args.map(B).join(", ");return r+be("macro",`${e.name.value}(${i})`)+he+ft(e.body,t+1,n)+he+r+be("endmacro")}function hx(e,t,n){const r=n.repeat(t),i=e.callerArgs&&e.callerArgs.length>0?`(${e.callerArgs.map(B).join(", ")})`:"",o=B(e.call);let a=r+be(`call${i}`,o)+he;return a+=ft(e.body,t+1,n)+he,a+=r+be("endcall"),a}function gx(e,t,n){const r=n.repeat(t),i=e.filter.type==="Identifier"?e.filter.value:B(e.filter);let o=r+be("filter",i)+he;return o+=ft(e.body,t+1,n)+he,o+=r+be("endfilter"),o}function B(e,t=-1){switch(e.type){case"SpreadExpression":return`*${B(e.argument)}`;case"Identifier":return e.value;case"IntegerLiteral":return`${e.value}`;case"FloatLiteral":return`${e.value}`;case"StringLiteral":return JSON.stringify(e.value);case"BinaryExpression":{const n=e,r=lx(n),i=B(n.left,r),o=B(n.right,r+1),a=`${i} ${n.operator.value} ${o}`;return r<t?`(${a})`:a}case"UnaryExpression":{const n=e;return n.operator.value+(n.operator.value==="not"?" ":"")+B(n.argument,1/0)}case"CallExpression":{const n=e,r=n.args.map(B).join(", ");return`${B(n.callee)}(${r})`}case"MemberExpression":{const n=e;let r=B(n.object);["Identifier","MemberExpression","CallExpression","StringLiteral","IntegerLiteral","FloatLiteral","ArrayLiteral","TupleLiteral","ObjectLiteral"].includes(n.object.type)||(r=`(${r})`);let i=B(n.property);return!n.computed&&n.property.type!=="Identifier"&&(i=`(${i})`),n.computed?`${r}[${i}]`:`${r}.${i}`}case"FilterExpression":{const n=e,r=B(n.operand,1/0);return n.filter.type==="CallExpression"?`${r} | ${B(n.filter)}`:`${r} | ${n.filter.value}`}case"SelectExpression":{const n=e;return`${B(n.lhs)} if ${B(n.test)}`}case"TestExpression":{const n=e;return`${B(n.operand)} is${n.negate?" not":""} ${n.test.value}`}case"ArrayLiteral":case"TupleLiteral":{const n=e.value.map(B),r=e.type==="ArrayLiteral"?"[]":"()";return`${r[0]}${n.join(", ")}${r[1]}`}case"ObjectLiteral":return`{${Array.from(e.value.entries()).map(([r,i])=>`${B(r)}: ${B(i)}`).join(", ")}}`;case"SliceExpression":{const n=e,r=n.start?B(n.start):"",i=n.stop?B(n.stop):"",o=n.step?`:${B(n.step)}`:"";return`${r}:${i}${o}`}case"KeywordArgumentExpression":{const n=e;return`${n.key.value}=${B(n.value)}`}case"Ternary":{const n=e,r=`${B(n.trueExpr)} if ${B(n.condition,0)} else ${B(n.falseExpr)}`;return t>-1?`(${r})`:r}default:throw new Error(`Unknown expression type: ${e.type}`)}}var yx=class{constructor(e){C(this,"parsed");const t=A0(e,{lstrip_blocks:!0,trim_blocks:!0});this.parsed=J0(t)}render(e){const t=new Tn;if(ix(t),e)for(const[i,o]of Object.entries(e))t.set(i,o);return new ox(t).run(this.parsed).value}format(e){return cx(this.parsed,(e==null?void 0:e.indent)||"	")}};const vx={transformers:["audio-classification","automatic-speech-recognition","depth-estimation","document-question-answering","feature-extraction","fill-mask","image-classification","image-feature-extraction","image-segmentation","image-to-image","image-to-text","image-text-to-text","mask-generation","object-detection","question-answering","summarization","table-question-answering","text2text-generation","text-classification","text-generation","text-to-audio","text-to-speech","token-classification","translation","video-classification","visual-question-answering","zero-shot-classification","zero-shot-image-classification","zero-shot-object-detection"]},Cc={"text-classification":{name:"Text Classification",subtasks:[{type:"acceptability-classification",name:"Acceptability Classification"},{type:"entity-linking-classification",name:"Entity Linking Classification"},{type:"fact-checking",name:"Fact Checking"},{type:"intent-classification",name:"Intent Classification"},{type:"language-identification",name:"Language Identification"},{type:"multi-class-classification",name:"Multi Class Classification"},{type:"multi-label-classification",name:"Multi Label Classification"},{type:"multi-input-text-classification",name:"Multi-input Text Classification"},{type:"natural-language-inference",name:"Natural Language Inference"},{type:"semantic-similarity-classification",name:"Semantic Similarity Classification"},{type:"sentiment-classification",name:"Sentiment Classification"},{type:"topic-classification",name:"Topic Classification"},{type:"semantic-similarity-scoring",name:"Semantic Similarity Scoring"},{type:"sentiment-scoring",name:"Sentiment Scoring"},{type:"sentiment-analysis",name:"Sentiment Analysis"},{type:"hate-speech-detection",name:"Hate Speech Detection"},{type:"text-scoring",name:"Text Scoring"}],modality:"nlp"},"token-classification":{name:"Token Classification",subtasks:[{type:"named-entity-recognition",name:"Named Entity Recognition"},{type:"part-of-speech",name:"Part of Speech"},{type:"parsing",name:"Parsing"},{type:"lemmatization",name:"Lemmatization"},{type:"word-sense-disambiguation",name:"Word Sense Disambiguation"},{type:"coreference-resolution",name:"Coreference-resolution"}],modality:"nlp"},"table-question-answering":{name:"Table Question Answering",modality:"nlp"},"question-answering":{name:"Question Answering",subtasks:[{type:"extractive-qa",name:"Extractive QA"},{type:"open-domain-qa",name:"Open Domain QA"},{type:"closed-domain-qa",name:"Closed Domain QA"}],modality:"nlp"},"zero-shot-classification":{name:"Zero-Shot Classification",modality:"nlp"},translation:{name:"Translation",modality:"nlp"},summarization:{name:"Summarization",subtasks:[{type:"news-articles-summarization",name:"News Articles Summarization"},{type:"news-articles-headline-generation",name:"News Articles Headline Generation"}],modality:"nlp"},"feature-extraction":{name:"Feature Extraction",modality:"nlp"},"text-generation":{name:"Text Generation",subtasks:[{type:"dialogue-modeling",name:"Dialogue Modeling"},{type:"dialogue-generation",name:"Dialogue Generation"},{type:"conversational",name:"Conversational"},{type:"language-modeling",name:"Language Modeling"}],modality:"nlp"},"text2text-generation":{name:"Text2Text Generation",subtasks:[{type:"text-simplification",name:"Text simplification"},{type:"explanation-generation",name:"Explanation Generation"},{type:"abstractive-qa",name:"Abstractive QA"},{type:"open-domain-abstractive-qa",name:"Open Domain Abstractive QA"},{type:"closed-domain-qa",name:"Closed Domain QA"},{type:"open-book-qa",name:"Open Book QA"},{type:"closed-book-qa",name:"Closed Book QA"}],modality:"nlp"},"fill-mask":{name:"Fill-Mask",subtasks:[{type:"slot-filling",name:"Slot Filling"},{type:"masked-language-modeling",name:"Masked Language Modeling"}],modality:"nlp"},"sentence-similarity":{name:"Sentence Similarity",modality:"nlp"},"text-to-speech":{name:"Text-to-Speech",modality:"audio"},"text-to-audio":{name:"Text-to-Audio",modality:"audio"},"automatic-speech-recognition":{name:"Automatic Speech Recognition",modality:"audio"},"audio-to-audio":{name:"Audio-to-Audio",modality:"audio"},"audio-classification":{name:"Audio Classification",subtasks:[{type:"keyword-spotting",name:"Keyword Spotting"},{type:"speaker-identification",name:"Speaker Identification"},{type:"audio-intent-classification",name:"Audio Intent Classification"},{type:"audio-emotion-recognition",name:"Audio Emotion Recognition"},{type:"audio-language-identification",name:"Audio Language Identification"}],modality:"audio"},"audio-text-to-text":{name:"Audio-Text-to-Text",modality:"multimodal",hideInDatasets:!0},"voice-activity-detection":{name:"Voice Activity Detection",modality:"audio"},"depth-estimation":{name:"Depth Estimation",modality:"cv"},"image-classification":{name:"Image Classification",subtasks:[{type:"multi-label-image-classification",name:"Multi Label Image Classification"},{type:"multi-class-image-classification",name:"Multi Class Image Classification"}],modality:"cv"},"object-detection":{name:"Object Detection",subtasks:[{type:"face-detection",name:"Face Detection"},{type:"vehicle-detection",name:"Vehicle Detection"}],modality:"cv"},"image-segmentation":{name:"Image Segmentation",subtasks:[{type:"instance-segmentation",name:"Instance Segmentation"},{type:"semantic-segmentation",name:"Semantic Segmentation"},{type:"panoptic-segmentation",name:"Panoptic Segmentation"}],modality:"cv"},"text-to-image":{name:"Text-to-Image",modality:"cv"},"image-to-text":{name:"Image-to-Text",subtasks:[{type:"image-captioning",name:"Image Captioning"}],modality:"cv"},"image-to-image":{name:"Image-to-Image",subtasks:[{type:"image-inpainting",name:"Image Inpainting"},{type:"image-colorization",name:"Image Colorization"},{type:"super-resolution",name:"Super Resolution"}],modality:"cv"},"image-to-video":{name:"Image-to-Video",modality:"cv"},"unconditional-image-generation":{name:"Unconditional Image Generation",modality:"cv"},"video-classification":{name:"Video Classification",modality:"cv"},"reinforcement-learning":{name:"Reinforcement Learning",modality:"rl"},robotics:{name:"Robotics",modality:"rl",subtasks:[{type:"grasping",name:"Grasping"},{type:"task-planning",name:"Task Planning"}]},"tabular-classification":{name:"Tabular Classification",modality:"tabular",subtasks:[{type:"tabular-multi-class-classification",name:"Tabular Multi Class Classification"},{type:"tabular-multi-label-classification",name:"Tabular Multi Label Classification"}]},"tabular-regression":{name:"Tabular Regression",modality:"tabular",subtasks:[{type:"tabular-single-column-regression",name:"Tabular Single Column Regression"}]},"tabular-to-text":{name:"Tabular to Text",modality:"tabular",subtasks:[{type:"rdf-to-text",name:"RDF to text"}],hideInModels:!0},"table-to-text":{name:"Table to Text",modality:"nlp",hideInModels:!0},"multiple-choice":{name:"Multiple Choice",subtasks:[{type:"multiple-choice-qa",name:"Multiple Choice QA"},{type:"multiple-choice-coreference-resolution",name:"Multiple Choice Coreference Resolution"}],modality:"nlp",hideInModels:!0},"text-ranking":{name:"Text Ranking",modality:"nlp"},"text-retrieval":{name:"Text Retrieval",subtasks:[{type:"document-retrieval",name:"Document Retrieval"},{type:"utterance-retrieval",name:"Utterance Retrieval"},{type:"entity-linking-retrieval",name:"Entity Linking Retrieval"},{type:"fact-checking-retrieval",name:"Fact Checking Retrieval"}],modality:"nlp",hideInModels:!0},"time-series-forecasting":{name:"Time Series Forecasting",modality:"tabular",subtasks:[{type:"univariate-time-series-forecasting",name:"Univariate Time Series Forecasting"},{type:"multivariate-time-series-forecasting",name:"Multivariate Time Series Forecasting"}]},"text-to-video":{name:"Text-to-Video",modality:"cv"},"image-text-to-text":{name:"Image-Text-to-Text",modality:"multimodal"},"visual-question-answering":{name:"Visual Question Answering",subtasks:[{type:"visual-question-answering",name:"Visual Question Answering"}],modality:"multimodal"},"document-question-answering":{name:"Document Question Answering",subtasks:[{type:"document-question-answering",name:"Document Question Answering"}],modality:"multimodal",hideInDatasets:!0},"zero-shot-image-classification":{name:"Zero-Shot Image Classification",modality:"cv"},"graph-ml":{name:"Graph Machine Learning",modality:"other"},"mask-generation":{name:"Mask Generation",modality:"cv"},"zero-shot-object-detection":{name:"Zero-Shot Object Detection",modality:"cv"},"text-to-3d":{name:"Text-to-3D",modality:"cv"},"image-to-3d":{name:"Image-to-3D",modality:"cv"},"image-feature-extraction":{name:"Image Feature Extraction",modality:"cv"},"video-text-to-text":{name:"Video-Text-to-Text",modality:"multimodal",hideInDatasets:!1},"keypoint-detection":{name:"Keypoint Detection",subtasks:[{type:"pose-estimation",name:"Pose Estimation"}],modality:"cv",hideInDatasets:!0},"visual-document-retrieval":{name:"Visual Document Retrieval",modality:"multimodal"},"any-to-any":{name:"Any-to-Any",modality:"multimodal"},"video-to-video":{name:"Video-to-Video",modality:"cv",hideInDatasets:!0},other:{name:"Other",modality:"other",hideInModels:!0,hideInDatasets:!0}},wx=Object.keys(Cc);Object.values(Cc).flatMap(e=>"subtasks"in e?e.subtasks:[]).map(e=>e.type);new Set(wx);const _x={datasets:[{description:"A dataset with multiple modality input and output pairs.",id:"PKU-Alignment/align-anything"}],demo:{inputs:[{filename:"any-to-any-input.jpg",type:"img"},{label:"Text Prompt",content:"What is the significance of this place?",type:"text"}],outputs:[{label:"Generated Text",content:"The place in the picture is Osaka Castle, located in Osaka, Japan. Osaka Castle is a historic castle that was originally built in the 16th century by Toyotomi Hideyoshi, a powerful warlord of the time. It is one of the most famous landmarks in Osaka and is known for its distinctive white walls and black roof tiles. The castle has been rebuilt several times over the centuries and is now a popular tourist attraction, offering visitors a glimpse into Japan's rich history and culture.",type:"text"},{filename:"any-to-any-output.wav",type:"audio"}]},metrics:[],models:[{description:"Strong model that can take in video, audio, image, text and output text and natural speech.",id:"Qwen/Qwen2.5-Omni-7B"},{description:"Robust model that can take in image and text and generate image and text.",id:"deepseek-ai/Janus-Pro-7B"},{description:"Any-to-any model with speech, video, audio, image and text understanding capabilities.",id:"openbmb/MiniCPM-o-2_6"},{description:"A model that can understand image and text and generate image and text.",id:"EPFL-VILAB/4M-21_XL"}],spaces:[{description:"An application to chat with an any-to-any (image & text) model.",id:"deepseek-ai/Janus-Pro-7B"}],summary:"Any-to-any models can understand two or more modalities and output two or more modalities.",widgetModels:[],youtubeId:""},bx={datasets:[{description:"A benchmark of 10 different audio tasks.",id:"s3prl/superb"},{description:"A dataset of YouTube clips and their sound categories.",id:"agkphysics/AudioSet"}],demo:{inputs:[{filename:"audio.wav",type:"audio"}],outputs:[{data:[{label:"Up",score:.2},{label:"Down",score:.8}],type:"chart"}]},metrics:[{description:"",id:"accuracy"},{description:"",id:"recall"},{description:"",id:"precision"},{description:"",id:"f1"}],models:[{description:"An easy-to-use model for command recognition.",id:"speechbrain/google_speech_command_xvector"},{description:"An emotion recognition model.",id:"ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition"},{description:"A language identification model.",id:"facebook/mms-lid-126"}],spaces:[{description:"An application that can classify music into different genre.",id:"kurianbenoy/audioclassification"}],summary:"Audio classification is the task of assigning a label or class to a given audio. It can be used for recognizing which command a user is giving or the emotion of a statement, as well as identifying a speaker.",widgetModels:["MIT/ast-finetuned-audioset-10-10-0.4593"],youtubeId:"KWwzcmG98Ds"},kx={datasets:[{description:"512-element X-vector embeddings of speakers from CMU ARCTIC dataset.",id:"Matthijs/cmu-arctic-xvectors"}],demo:{inputs:[{filename:"input.wav",type:"audio"}],outputs:[{filename:"label-0.wav",type:"audio"},{filename:"label-1.wav",type:"audio"}]},metrics:[{description:"The Signal-to-Noise ratio is the relationship between the target signal level and the background noise level. It is calculated as the logarithm of the target signal divided by the background noise, in decibels.",id:"snri"},{description:"The Signal-to-Distortion ratio is the relationship between the target signal and the sum of noise, interference, and artifact errors",id:"sdri"}],models:[{description:"A speech enhancement model.",id:"ResembleAI/resemble-enhance"},{description:"A model that can change the voice in a speech recording.",id:"microsoft/speecht5_vc"}],spaces:[{description:"An application for speech separation.",id:"younver/speechbrain-speech-separation"},{description:"An application for audio style transfer.",id:"nakas/audio-diffusion_style_transfer"}],summary:"Audio-to-Audio is a family of tasks in which the input is an audio and the output is one or multiple generated audios. Some example tasks are speech enhancement and source separation.",widgetModels:["speechbrain/sepformer-wham"],youtubeId:"iohj7nCCYoM"},xx={datasets:[{description:"31,175 hours of multilingual audio-text dataset in 108 languages.",id:"mozilla-foundation/common_voice_17_0"},{description:"Multilingual and diverse audio dataset with 101k hours of audio.",id:"amphion/Emilia-Dataset"},{description:"A dataset with 44.6k hours of English speaker data and 6k hours of other language speakers.",id:"parler-tts/mls_eng"},{description:"A multilingual audio dataset with 370K hours of audio.",id:"espnet/yodas"}],demo:{inputs:[{filename:"input.flac",type:"audio"}],outputs:[{label:"Transcript",content:"Going along slushy country roads and speaking to damp audiences in...",type:"text"}]},metrics:[{description:"",id:"wer"},{description:"",id:"cer"}],models:[{description:"A powerful ASR model by OpenAI.",id:"openai/whisper-large-v3"},{description:"A good generic speech model by MetaAI for fine-tuning.",id:"facebook/w2v-bert-2.0"},{description:"An end-to-end model that performs ASR and Speech Translation by MetaAI.",id:"facebook/seamless-m4t-v2-large"},{description:"A powerful multilingual ASR and Speech Translation model by Nvidia.",id:"nvidia/canary-1b"},{description:"Powerful speaker diarization model.",id:"pyannote/speaker-diarization-3.1"}],spaces:[{description:"A powerful general-purpose speech recognition application.",id:"hf-audio/whisper-large-v3"},{description:"Latest ASR model from Useful Sensors.",id:"mrfakename/Moonshinex"},{description:"A high quality speech and text translation model by Meta.",id:"facebook/seamless_m4t"},{description:"A powerful multilingual ASR and Speech Translation model by Nvidia",id:"nvidia/canary-1b"}],summary:"Automatic Speech Recognition (ASR), also known as Speech to Text (STT), is the task of transcribing a given audio to text. It has many applications, such as voice user interfaces.",widgetModels:["openai/whisper-large-v3"],youtubeId:"TksaY_FDgnk"},Sx={datasets:[{description:"Largest document understanding dataset.",id:"HuggingFaceM4/Docmatix"},{description:"Dataset from the 2020 DocVQA challenge. The documents are taken from the UCSF Industry Documents Library.",id:"eliolio/docvqa"}],demo:{inputs:[{label:"Question",content:"What is the idea behind the consumer relations efficiency team?",type:"text"},{filename:"document-question-answering-input.png",type:"img"}],outputs:[{label:"Answer",content:"Balance cost efficiency with quality customer service",type:"text"}]},metrics:[{description:"The evaluation metric for the DocVQA challenge is the Average Normalized Levenshtein Similarity (ANLS). This metric is flexible to character regognition errors and compares the predicted answer with the ground truth answer.",id:"anls"},{description:"Exact Match is a metric based on the strict character match of the predicted answer and the right answer. For answers predicted correctly, the Exact Match will be 1. Even if only one character is different, Exact Match will be 0",id:"exact-match"}],models:[{description:"A robust document question answering model.",id:"impira/layoutlm-document-qa"},{description:"A document question answering model specialized in invoices.",id:"impira/layoutlm-invoices"},{description:"A special model for OCR-free document question answering.",id:"microsoft/udop-large"},{description:"A powerful model for document question answering.",id:"google/pix2struct-docvqa-large"}],spaces:[{description:"A robust document question answering application.",id:"impira/docquery"},{description:"An application that can answer questions from invoices.",id:"impira/invoices"},{description:"An application to compare different document question answering models.",id:"merve/compare_docvqa_models"}],summary:"Document Question Answering (also known as Document Visual Question Answering) is the task of answering questions on document images. Document question answering models take a (document, question) pair as input and return an answer in natural language. Models usually rely on multi-modal features, combining text, position of words (bounding-boxes) and image.",widgetModels:["impira/layoutlm-invoices"],youtubeId:""},Ix={datasets:[{description:"Wikipedia dataset containing cleaned articles of all languages. Can be used to train `feature-extraction` models.",id:"wikipedia"}],demo:{inputs:[{label:"Input",content:"India, officially the Republic of India, is a country in South Asia.",type:"text"}],outputs:[{table:[["Dimension 1","Dimension 2","Dimension 3"],["2.583383083343506","2.757075071334839","0.9023529887199402"],["8.29393482208252","1.1071064472198486","2.03399395942688"],["-0.7754912972450256","-1.647324562072754","-0.6113331913948059"],["0.07087723910808563","1.5942802429199219","1.4610432386398315"]],type:"tabular"}]},metrics:[],models:[{description:"A powerful feature extraction model for natural language processing tasks.",id:"thenlper/gte-large"},{description:"A strong feature extraction model for retrieval.",id:"Alibaba-NLP/gte-Qwen1.5-7B-instruct"}],spaces:[{description:"A leaderboard to rank text feature extraction models based on a benchmark.",id:"mteb/leaderboard"},{description:"A leaderboard to rank best feature extraction models based on human feedback.",id:"mteb/arena"}],summary:"Feature extraction is the task of extracting features learnt in a model.",widgetModels:["facebook/bart-base"]},Ax={datasets:[{description:"A common dataset that is used to train models for many languages.",id:"wikipedia"},{description:"A large English dataset with text crawled from the web.",id:"c4"}],demo:{inputs:[{label:"Input",content:"The <mask> barked at me",type:"text"}],outputs:[{type:"chart",data:[{label:"wolf",score:.487},{label:"dog",score:.061},{label:"cat",score:.058},{label:"fox",score:.047},{label:"squirrel",score:.025}]}]},metrics:[{description:"Cross Entropy is a metric that calculates the difference between two probability distributions. Each probability distribution is the distribution of predicted words",id:"cross_entropy"},{description:"Perplexity is the exponential of the cross-entropy loss. It evaluates the probabilities assigned to the next word by the model. Lower perplexity indicates better performance",id:"perplexity"}],models:[{description:"State-of-the-art masked language model.",id:"answerdotai/ModernBERT-large"},{description:"A multilingual model trained on 100 languages.",id:"FacebookAI/xlm-roberta-base"}],spaces:[],summary:"Masked language modeling is the task of masking some of the words in a sentence and predicting which words should replace those masks. These models are useful when we want to get a statistical understanding of the language in which the model is trained in.",widgetModels:["distilroberta-base"],youtubeId:"mqElG5QJWUg"},Tx={datasets:[{description:"Benchmark dataset used for image classification with images that belong to 100 classes.",id:"cifar100"},{description:"Dataset consisting of images of garments.",id:"fashion_mnist"}],demo:{inputs:[{filename:"image-classification-input.jpeg",type:"img"}],outputs:[{type:"chart",data:[{label:"Egyptian cat",score:.514},{label:"Tabby cat",score:.193},{label:"Tiger cat",score:.068}]}]},metrics:[{description:"",id:"accuracy"},{description:"",id:"recall"},{description:"",id:"precision"},{description:"",id:"f1"}],models:[{description:"A strong image classification model.",id:"google/vit-base-patch16-224"},{description:"A robust image classification model.",id:"facebook/deit-base-distilled-patch16-224"},{description:"A strong image classification model.",id:"facebook/convnext-large-224"}],spaces:[{description:"A leaderboard to evaluate different image classification models.",id:"timm/leaderboard"}],summary:"Image classification is the task of assigning a label or class to an entire image. Images are expected to have only one class for each image. Image classification models take an image as input and return a prediction about which class the image belongs to.",widgetModels:["google/vit-base-patch16-224"],youtubeId:"tjAIM7BOYhw"},Ex={datasets:[{description:"ImageNet-1K is a image classification dataset in which images are used to train image-feature-extraction models.",id:"imagenet-1k"}],demo:{inputs:[{filename:"mask-generation-input.png",type:"img"}],outputs:[{table:[["Dimension 1","Dimension 2","Dimension 3"],["0.21236686408519745","1.0919708013534546","0.8512550592422485"],["0.809657871723175","-0.18544459342956543","-0.7851548194885254"],["1.3103108406066895","-0.2479034662246704","-0.9107287526130676"],["1.8536205291748047","-0.36419737339019775","0.09717650711536407"]],type:"tabular"}]},metrics:[],models:[{description:"A powerful image feature extraction model.",id:"timm/vit_large_patch14_dinov2.lvd142m"},{description:"A strong image feature extraction model.",id:"nvidia/MambaVision-T-1K"},{description:"A robust image feature extraction model.",id:"facebook/dino-vitb16"},{description:"Cutting-edge image feature extraction model.",id:"apple/aimv2-large-patch14-336-distilled"},{description:"Strong image feature extraction model that can be used on images and documents.",id:"OpenGVLab/InternViT-6B-448px-V1-2"}],spaces:[{description:"A leaderboard to evaluate different image-feature-extraction models on classification performances",id:"timm/leaderboard"}],summary:"Image feature extraction is the task of extracting features learnt in a computer vision model.",widgetModels:[]},Cx={datasets:[{description:"Synthetic dataset, for image relighting",id:"VIDIT"},{description:"Multiple images of celebrities, used for facial expression translation",id:"huggan/CelebA-faces"},{description:"12M image-caption pairs.",id:"Spawning/PD12M"}],demo:{inputs:[{filename:"image-to-image-input.jpeg",type:"img"}],outputs:[{filename:"image-to-image-output.png",type:"img"}]},isPlaceholder:!1,metrics:[{description:"Peak Signal to Noise Ratio (PSNR) is an approximation of the human perception, considering the ratio of the absolute intensity with respect to the variations. Measured in dB, a high value indicates a high fidelity.",id:"PSNR"},{description:"Structural Similarity Index (SSIM) is a perceptual metric which compares the luminance, contrast and structure of two images. The values of SSIM range between -1 and 1, and higher values indicate closer resemblance to the original image.",id:"SSIM"},{description:"Inception Score (IS) is an analysis of the labels predicted by an image classification model when presented with a sample of the generated images.",id:"IS"}],models:[{description:"An image-to-image model to improve image resolution.",id:"fal/AuraSR-v2"},{description:"A model that increases the resolution of an image.",id:"keras-io/super-resolution"},{description:"A model for applying edits to images through image controls.",id:"Yuanshi/OminiControl"},{description:"A model that generates images based on segments in the input image and the text prompt.",id:"mfidabel/controlnet-segment-anything"},{description:"Strong model for inpainting and outpainting.",id:"black-forest-labs/FLUX.1-Fill-dev"},{description:"Strong model for image editing using depth maps.",id:"black-forest-labs/FLUX.1-Depth-dev-lora"}],spaces:[{description:"Image enhancer application for low light.",id:"keras-io/low-light-image-enhancement"},{description:"Style transfer application.",id:"keras-io/neural-style-transfer"},{description:"An application that generates images based on segment control.",id:"mfidabel/controlnet-segment-anything"},{description:"Image generation application that takes image control and text prompt.",id:"hysts/ControlNet"},{description:"Colorize any image using this app.",id:"ioclab/brightness-controlnet"},{description:"Edit images with instructions.",id:"timbrooks/instruct-pix2pix"}],summary:"Image-to-image is the task of transforming an input image through a variety of possible manipulations and enhancements, such as super-resolution, image inpainting, colorization, and more.",widgetModels:["stabilityai/stable-diffusion-2-inpainting"],youtubeId:""},Px={datasets:[{description:"Dataset from 12M image-text of Reddit",id:"red_caps"},{description:"Dataset from 3.3M images of Google",id:"datasets/conceptual_captions"}],demo:{inputs:[{filename:"savanna.jpg",type:"img"}],outputs:[{label:"Detailed description",content:"a herd of giraffes and zebras grazing in a field",type:"text"}]},metrics:[],models:[{description:"A robust image captioning model.",id:"Salesforce/blip2-opt-2.7b"},{description:"A powerful and accurate image-to-text model that can also localize concepts in images.",id:"microsoft/kosmos-2-patch14-224"},{description:"A strong optical character recognition model.",id:"facebook/nougat-base"},{description:"A powerful model that lets you have a conversation with the image.",id:"llava-hf/llava-1.5-7b-hf"}],spaces:[{description:"An application that compares various image captioning models.",id:"nielsr/comparing-captioning-models"},{description:"A robust image captioning application.",id:"flax-community/image-captioning"},{description:"An application that transcribes handwritings into text.",id:"nielsr/TrOCR-handwritten"},{description:"An application that can caption images and answer questions about a given image.",id:"Salesforce/BLIP"},{description:"An application that can caption images and answer questions with a conversational agent.",id:"Salesforce/BLIP2"},{description:"An image captioning application that demonstrates the effect of noise on captions.",id:"johko/capdec-image-captioning"}],summary:"Image to text models output a text from a given image. Image captioning or optical character recognition can be considered as the most common applications of image to text.",widgetModels:["Salesforce/blip-image-captioning-large"],youtubeId:""},Rx={datasets:[{description:"Instructions composed of image and text.",id:"liuhaotian/LLaVA-Instruct-150K"},{description:"Collection of image-text pairs on scientific topics.",id:"DAMO-NLP-SG/multimodal_textbook"},{description:"A collection of datasets made for model fine-tuning.",id:"HuggingFaceM4/the_cauldron"},{description:"Screenshots of websites with their HTML/CSS codes.",id:"HuggingFaceM4/WebSight"}],demo:{inputs:[{filename:"image-text-to-text-input.png",type:"img"},{label:"Text Prompt",content:"Describe the position of the bee in detail.",type:"text"}],outputs:[{label:"Answer",content:"The bee is sitting on a pink flower, surrounded by other flowers. The bee is positioned in the center of the flower, with its head and front legs sticking out.",type:"text"}]},metrics:[],models:[{description:"Small and efficient yet powerful vision language model.",id:"HuggingFaceTB/SmolVLM-Instruct"},{description:"A screenshot understanding model used to control computers.",id:"microsoft/OmniParser-v2.0"},{description:"Cutting-edge vision language model.",id:"allenai/Molmo-7B-D-0924"},{description:"Small yet powerful model.",id:"vikhyatk/moondream2"},{description:"Strong image-text-to-text model.",id:"Qwen/Qwen2.5-VL-7B-Instruct"},{description:"Image-text-to-text model with agentic capabilities.",id:"microsoft/Magma-8B"},{description:"Strong image-text-to-text model focused on documents.",id:"allenai/olmOCR-7B-0225-preview"},{description:"Small yet strong image-text-to-text model.",id:"ibm-granite/granite-vision-3.2-2b"}],spaces:[{description:"Leaderboard to evaluate vision language models.",id:"opencompass/open_vlm_leaderboard"},{description:"Vision language models arena, where models are ranked by votes of users.",id:"WildVision/vision-arena"},{description:"Powerful vision-language model assistant.",id:"akhaliq/Molmo-7B-D-0924"},{description:"Powerful vision language assistant that can understand multiple images.",id:"HuggingFaceTB/SmolVLM2"},{description:"An application for chatting with an image-text-to-text model.",id:"GanymedeNil/Qwen2-VL-7B"},{description:"An application that parses screenshots into actions.",id:"showlab/ShowUI"},{description:"An application that detects gaze.",id:"moondream/gaze-demo"}],summary:"Image-text-to-text models take in an image and text prompt and output text. These models are also called vision-language models, or VLMs. The difference from image-to-text models is that these models take an additional text input, not restricting the model to certain use cases like image captioning, and may also be trained to accept a conversation as input.",widgetModels:["Qwen/Qwen2-VL-7B-Instruct"],youtubeId:"IoGaGfU1CIg"},Nx={datasets:[{description:"Scene segmentation dataset.",id:"scene_parse_150"}],demo:{inputs:[{filename:"image-segmentation-input.jpeg",type:"img"}],outputs:[{filename:"image-segmentation-output.png",type:"img"}]},metrics:[{description:"Average Precision (AP) is the Area Under the PR Curve (AUC-PR). It is calculated for each semantic class separately",id:"Average Precision"},{description:"Mean Average Precision (mAP) is the overall average of the AP values",id:"Mean Average Precision"},{description:"Intersection over Union (IoU) is the overlap of segmentation masks. Mean IoU is the average of the IoU of all semantic classes",id:"Mean Intersection over Union"},{description:"APα is the Average Precision at the IoU threshold of a α value, for example, AP50 and AP75",id:"APα"}],models:[{description:"Solid semantic segmentation model trained on ADE20k.",id:"openmmlab/upernet-convnext-small"},{description:"Background removal model.",id:"briaai/RMBG-1.4"},{description:"A multipurpose image segmentation model for high resolution images.",id:"ZhengPeng7/BiRefNet"},{description:"Powerful human-centric image segmentation model.",id:"facebook/sapiens-seg-1b"},{description:"Panoptic segmentation model trained on the COCO (common objects) dataset.",id:"facebook/mask2former-swin-large-coco-panoptic"}],spaces:[{description:"A semantic segmentation application that can predict unseen instances out of the box.",id:"facebook/ov-seg"},{description:"One of the strongest segmentation applications.",id:"jbrinkma/segment-anything"},{description:"A human-centric segmentation model.",id:"facebook/sapiens-pose"},{description:"An instance segmentation application to predict neuronal cell types from microscopy images.",id:"rashmi/sartorius-cell-instance-segmentation"},{description:"An application that segments videos.",id:"ArtGAN/Segment-Anything-Video"},{description:"An panoptic segmentation application built for outdoor environments.",id:"segments/panoptic-segment-anything"}],summary:"Image Segmentation divides an image into segments where each pixel in the image is mapped to an object. This task has multiple variants such as instance segmentation, panoptic segmentation and semantic segmentation.",widgetModels:["nvidia/segformer-b0-finetuned-ade-512-512"],youtubeId:"dKE8SIt9C-w"},Dx={datasets:[{description:"A benchmark dataset for reference image controlled video generation.",id:"ali-vilab/VACE-Benchmark"},{description:"A dataset of video generation style preferences.",id:"Rapidata/sora-video-generation-style-likert-scoring"},{description:"A dataset with videos and captions throughout the videos.",id:"BestWishYsh/ChronoMagic"}],demo:{inputs:[{filename:"image-to-video-input.jpg",type:"img"},{label:"Optional Text Prompt",content:"This penguin is dancing",type:"text"}],outputs:[{filename:"image-to-video-output.gif",type:"img"}]},metrics:[{description:"Fréchet Video Distance (FVD) measures the perceptual similarity between the distributions of generated videos and a set of real videos, assessing overall visual quality and temporal coherence of the video generated from an input image.",id:"fvd"},{description:"CLIP Score measures the semantic similarity between a textual prompt (if provided alongside the input image) and the generated video frames. It evaluates how well the video's generated content and motion align with the textual description, conditioned on the initial image.",id:"clip_score"},{description:"First Frame Fidelity, often measured using LPIPS (Learned Perceptual Image Patch Similarity), PSNR, or SSIM, quantifies how closely the first frame of the generated video matches the input conditioning image.",id:"lpips"},{description:"Identity Preservation Score measures the consistency of identity (e.g., a person's face or a specific object's characteristics) between the input image and throughout the generated video frames, often calculated using features from specialized models like face recognition (e.g., ArcFace) or re-identification models.",id:"identity_preservation"},{description:"Motion Score evaluates the quality, realism, and temporal consistency of motion in the video generated from a static image. This can be based on optical flow analysis (e.g., smoothness, magnitude), consistency of object trajectories, or specific motion plausibility assessments.",id:"motion_score"}],models:[{description:"LTX-Video, a 13B parameter model for high quality video generation",id:"Lightricks/LTX-Video-0.9.7-dev"},{description:"A 14B parameter model for reference image controlled video generation",id:"Wan-AI/Wan2.1-VACE-14B"},{description:"An image-to-video generation model using FramePack F1 methodology with Hunyuan-DiT architecture",id:"lllyasviel/FramePack_F1_I2V_HY_20250503"},{description:"A distilled version of the LTX-Video-0.9.7-dev model for faster inference",id:"Lightricks/LTX-Video-0.9.7-distilled"},{description:"An image-to-video generation model by Skywork AI, 14B parameters, producing 720p videos.",id:"Skywork/SkyReels-V2-I2V-14B-720P"},{description:"Image-to-video variant of Tencent's HunyuanVideo.",id:"tencent/HunyuanVideo-I2V"},{description:"A 14B parameter model for 720p image-to-video generation by Wan-AI.",id:"Wan-AI/Wan2.1-I2V-14B-720P"},{description:"A Diffusers version of the Wan2.1-I2V-14B-720P model for 720p image-to-video generation.",id:"Wan-AI/Wan2.1-I2V-14B-720P-Diffusers"}],spaces:[{description:"An application to generate videos fast.",id:"Lightricks/ltx-video-distilled"},{description:"Generate videos with the FramePack-F1",id:"linoyts/FramePack-F1"},{description:"Generate videos with the FramePack",id:"lisonallen/framepack-i2v"},{description:"Wan2.1 with CausVid LoRA",id:"multimodalart/wan2-1-fast"},{description:"A demo for Stable Video Diffusion",id:"multimodalart/stable-video-diffusion"}],summary:"Image-to-video models take a still image as input and generate a video. These models can be guided by text prompts to influence the content and style of the output video.",widgetModels:[],youtubeId:void 0},Ox={datasets:[{description:"Widely used benchmark dataset for multiple Vision tasks.",id:"merve/coco2017"},{description:"Medical Imaging dataset of the Human Brain for segmentation and mask generating tasks",id:"rocky93/BraTS_segmentation"}],demo:{inputs:[{filename:"mask-generation-input.png",type:"img"}],outputs:[{filename:"mask-generation-output.png",type:"img"}]},metrics:[{description:"IoU is used to measure the overlap between predicted mask and the ground truth mask.",id:"Intersection over Union (IoU)"}],models:[{description:"Small yet powerful mask generation model.",id:"Zigeng/SlimSAM-uniform-50"},{description:"Very strong mask generation model.",id:"facebook/sam2-hiera-large"}],spaces:[{description:"An application that combines a mask generation model with a zero-shot object detection model for text-guided image segmentation.",id:"merve/OWLSAM2"},{description:"An application that compares the performance of a large and a small mask generation model.",id:"merve/slimsam"},{description:"An application based on an improved mask generation model.",id:"SkalskiP/segment-anything-model-2"},{description:"An application to remove objects from videos using mask generation models.",id:"SkalskiP/SAM_and_ProPainter"}],summary:"Mask generation is the task of generating masks that identify a specific object or region of interest in a given image. Masks are often used in segmentation tasks, where they provide a precise way to isolate the object of interest for further processing or analysis.",widgetModels:[],youtubeId:""},Lx={datasets:[{description:"Widely used benchmark dataset for multiple vision tasks.",id:"merve/coco2017"},{description:"Multi-task computer vision benchmark.",id:"merve/pascal-voc"}],demo:{inputs:[{filename:"object-detection-input.jpg",type:"img"}],outputs:[{filename:"object-detection-output.jpg",type:"img"}]},metrics:[{description:"The Average Precision (AP) metric is the Area Under the PR Curve (AUC-PR). It is calculated for each class separately",id:"Average Precision"},{description:"The Mean Average Precision (mAP) metric is the overall average of the AP values",id:"Mean Average Precision"},{description:"The APα metric is the Average Precision at the IoU threshold of a α value, for example, AP50 and AP75",id:"APα"}],models:[{description:"Solid object detection model pre-trained on the COCO 2017 dataset.",id:"facebook/detr-resnet-50"},{description:"Accurate object detection model.",id:"IDEA-Research/dab-detr-resnet-50"},{description:"Fast and accurate object detection model.",id:"PekingU/rtdetr_v2_r50vd"},{description:"Object detection model for low-lying objects.",id:"StephanST/WALDO30"}],spaces:[{description:"Leaderboard to compare various object detection models across several metrics.",id:"hf-vision/object_detection_leaderboard"},{description:"An application that contains various object detection models to try from.",id:"Gradio-Blocks/Object-Detection-With-DETR-and-YOLOS"},{description:"A cutting-edge object detection application.",id:"sunsmarterjieleaf/yolov12"},{description:"An object tracking, segmentation and inpainting application.",id:"VIPLab/Track-Anything"},{description:"Very fast object tracking application based on object detection.",id:"merve/RT-DETR-tracking-coco"}],summary:"Object Detection models allow users to identify objects of certain defined classes. Object detection models receive an image as input and output the images with bounding boxes and labels on detected objects.",widgetModels:["facebook/detr-resnet-50"],youtubeId:"WdAeKSOpxhw"},Ux={datasets:[{description:"NYU Depth V2 Dataset: Video dataset containing both RGB and depth sensor data.",id:"sayakpaul/nyu_depth_v2"},{description:"Monocular depth estimation benchmark based without noise and errors.",id:"depth-anything/DA-2K"}],demo:{inputs:[{filename:"depth-estimation-input.jpg",type:"img"}],outputs:[{filename:"depth-estimation-output.png",type:"img"}]},metrics:[],models:[{description:"Cutting-edge depth estimation model.",id:"depth-anything/Depth-Anything-V2-Large"},{description:"A strong monocular depth estimation model.",id:"jingheya/lotus-depth-g-v1-0"},{description:"A depth estimation model that predicts depth in videos.",id:"tencent/DepthCrafter"},{description:"A robust depth estimation model.",id:"apple/DepthPro-hf"}],spaces:[{description:"An application that predicts the depth of an image and then reconstruct the 3D model as voxels.",id:"radames/dpt-depth-estimation-3d-voxels"},{description:"An application for bleeding-edge depth estimation.",id:"akhaliq/depth-pro"},{description:"An application on cutting-edge depth estimation in videos.",id:"tencent/DepthCrafter"},{description:"A human-centric depth estimation application.",id:"facebook/sapiens-depth"}],summary:"Depth estimation is the task of predicting depth of the objects present in an image.",widgetModels:[""],youtubeId:""},ml={datasets:[],demo:{inputs:[],outputs:[]},isPlaceholder:!0,metrics:[],models:[],spaces:[],summary:"",widgetModels:[],youtubeId:void 0,canonicalId:void 0},Mx={datasets:[{description:"A curation of widely used datasets for Data Driven Deep Reinforcement Learning (D4RL)",id:"edbeeching/decision_transformer_gym_replay"}],demo:{inputs:[{label:"State",content:"Red traffic light, pedestrians are about to pass.",type:"text"}],outputs:[{label:"Action",content:"Stop the car.",type:"text"},{label:"Next State",content:"Yellow light, pedestrians have crossed.",type:"text"}]},metrics:[{description:"Accumulated reward across all time steps discounted by a factor that ranges between 0 and 1 and determines how much the agent optimizes for future relative to immediate rewards. Measures how good is the policy ultimately found by a given algorithm considering uncertainty over the future.",id:"Discounted Total Reward"},{description:"Average return obtained after running the policy for a certain number of evaluation episodes. As opposed to total reward, mean reward considers how much reward a given algorithm receives while learning.",id:"Mean Reward"},{description:"Measures how good a given algorithm is after a predefined time. Some algorithms may be guaranteed to converge to optimal behavior across many time steps. However, an agent that reaches an acceptable level of optimality after a given time horizon may be preferable to one that ultimately reaches optimality but takes a long time.",id:"Level of Performance After Some Time"}],models:[{description:"A Reinforcement Learning model trained on expert data from the Gym Hopper environment",id:"edbeeching/decision-transformer-gym-hopper-expert"},{description:"A PPO agent playing seals/CartPole-v0 using the stable-baselines3 library and the RL Zoo.",id:"HumanCompatibleAI/ppo-seals-CartPole-v0"}],spaces:[{description:"An application for a cute puppy agent learning to catch a stick.",id:"ThomasSimonini/Huggy"},{description:"An application to play Snowball Fight with a reinforcement learning agent.",id:"ThomasSimonini/SnowballFight"}],summary:"Reinforcement learning is the computational approach of learning from action by interacting with an environment through trial and error and receiving rewards (negative or positive) as feedback",widgetModels:[],youtubeId:"q0BiUn5LiBc"},jx={datasets:[{description:"A famous question answering dataset based on English articles from Wikipedia.",id:"squad_v2"},{description:"A dataset of aggregated anonymized actual queries issued to the Google search engine.",id:"natural_questions"}],demo:{inputs:[{label:"Question",content:"Which name is also used to describe the Amazon rainforest in English?",type:"text"},{label:"Context",content:"The Amazon rainforest, also known in English as Amazonia or the Amazon Jungle",type:"text"}],outputs:[{label:"Answer",content:"Amazonia",type:"text"}]},metrics:[{description:"Exact Match is a metric based on the strict character match of the predicted answer and the right answer. For answers predicted correctly, the Exact Match will be 1. Even if only one character is different, Exact Match will be 0",id:"exact-match"},{description:" The F1-Score metric is useful if we value both false positives and false negatives equally. The F1-Score is calculated on each word in the predicted sequence against the correct answer",id:"f1"}],models:[{description:"A robust baseline model for most question answering domains.",id:"deepset/roberta-base-squad2"},{description:"Small yet robust model that can answer questions.",id:"distilbert/distilbert-base-cased-distilled-squad"},{description:"A special model that can answer questions from tables.",id:"google/tapas-base-finetuned-wtq"}],spaces:[{description:"An application that can answer a long question from Wikipedia.",id:"deepset/wikipedia-assistant"}],summary:"Question Answering models can retrieve the answer to a question from a given text, which is useful for searching for an answer in a document. Some question answering models can generate answers without context!",widgetModels:["deepset/roberta-base-squad2"],youtubeId:"ajPx5LwJD-I"},$x={datasets:[{description:"Bing queries with relevant passages from various web sources.",id:"microsoft/ms_marco"}],demo:{inputs:[{label:"Source sentence",content:"Machine learning is so easy.",type:"text"},{label:"Sentences to compare to",content:"Deep learning is so straightforward.",type:"text"},{label:"",content:"This is so difficult, like rocket science.",type:"text"},{label:"",content:"I can't believe how much I struggled with this.",type:"text"}],outputs:[{type:"chart",data:[{label:"Deep learning is so straightforward.",score:.623},{label:"This is so difficult, like rocket science.",score:.413},{label:"I can't believe how much I struggled with this.",score:.256}]}]},metrics:[{description:"Reciprocal Rank is a measure used to rank the relevancy of documents given a set of documents. Reciprocal Rank is the reciprocal of the rank of the document retrieved, meaning, if the rank is 3, the Reciprocal Rank is 0.33. If the rank is 1, the Reciprocal Rank is 1",id:"Mean Reciprocal Rank"},{description:"The similarity of the embeddings is evaluated mainly on cosine similarity. It is calculated as the cosine of the angle between two vectors. It is particularly useful when your texts are not the same length",id:"Cosine Similarity"}],models:[{description:"This model works well for sentences and paragraphs and can be used for clustering/grouping and semantic searches.",id:"sentence-transformers/all-mpnet-base-v2"},{description:"A multilingual robust sentence similarity model.",id:"BAAI/bge-m3"},{description:"A robust sentence similarity model.",id:"HIT-TMG/KaLM-embedding-multilingual-mini-instruct-v1.5"}],spaces:[{description:"An application that leverages sentence similarity to answer questions from YouTube videos.",id:"Gradio-Blocks/Ask_Questions_To_YouTube_Videos"},{description:"An application that retrieves relevant PubMed abstracts for a given online article which can be used as further references.",id:"Gradio-Blocks/pubmed-abstract-retriever"},{description:"An application that leverages sentence similarity to summarize text.",id:"nickmuchi/article-text-summarizer"},{description:"A guide that explains how Sentence Transformers can be used for semantic search.",id:"sentence-transformers/Sentence_Transformers_for_semantic_search"}],summary:"Sentence Similarity is the task of determining how similar two texts are. Sentence similarity models convert input texts into vectors (embeddings) that capture semantic information and calculate how close (similar) they are between them. This task is particularly useful for information retrieval and clustering/grouping.",widgetModels:["BAAI/bge-small-en-v1.5"],youtubeId:"VCZq5AkbNEU"},Fx={canonicalId:"text2text-generation",datasets:[{description:"News articles in five different languages along with their summaries. Widely used for benchmarking multilingual summarization models.",id:"mlsum"},{description:"English conversations and their summaries. Useful for benchmarking conversational agents.",id:"samsum"}],demo:{inputs:[{label:"Input",content:"The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. It was the first structure to reach a height of 300 metres. Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct.",type:"text"}],outputs:[{label:"Output",content:"The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building. It was the first structure to reach a height of 300 metres.",type:"text"}]},metrics:[{description:"The generated sequence is compared against its summary, and the overlap of tokens are counted. ROUGE-N refers to overlap of N subsequent tokens, ROUGE-1 refers to overlap of single tokens and ROUGE-2 is the overlap of two subsequent tokens.",id:"rouge"}],models:[{description:"A strong summarization model trained on English news articles. Excels at generating factual summaries.",id:"facebook/bart-large-cnn"},{description:"A summarization model trained on medical articles.",id:"Falconsai/medical_summarization"}],spaces:[{description:"An application that can summarize long paragraphs.",id:"pszemraj/summarize-long-text"},{description:"A much needed summarization application for terms and conditions.",id:"ml6team/distilbart-tos-summarizer-tosdr"},{description:"An application that summarizes long documents.",id:"pszemraj/document-summarization"},{description:"An application that can detect errors in abstractive summarization.",id:"ml6team/post-processing-summarization"}],summary:"Summarization is the task of producing a shorter version of a document while preserving its important information. Some models can extract text from the original input, while other models can generate entirely new text.",widgetModels:["facebook/bart-large-cnn"],youtubeId:"yHnr5Dk2zCI"},Bx={datasets:[{description:"The WikiTableQuestions dataset is a large-scale dataset for the task of question answering on semi-structured tables.",id:"wikitablequestions"},{description:"WikiSQL is a dataset of 80654 hand-annotated examples of questions and SQL queries distributed across 24241 tables from Wikipedia.",id:"wikisql"}],demo:{inputs:[{table:[["Rank","Name","No.of reigns","Combined days"],["1","lou Thesz","3","3749"],["2","Ric Flair","8","3103"],["3","Harley Race","7","1799"]],type:"tabular"},{label:"Question",content:"What is the number of reigns for Harley Race?",type:"text"}],outputs:[{label:"Result",content:"7",type:"text"}]},metrics:[{description:"Checks whether the predicted answer(s) is the same as the ground-truth answer(s).",id:"Denotation Accuracy"}],models:[{description:"A table question answering model that is capable of neural SQL execution, i.e., employ TAPEX to execute a SQL query on a given table.",id:"microsoft/tapex-base"},{description:"A robust table question answering model.",id:"google/tapas-base-finetuned-wtq"}],spaces:[{description:"An application that answers questions based on table CSV files.",id:"katanaml/table-query"}],summary:"Table Question Answering (Table QA) is the answering a question about an information on a given table.",widgetModels:["google/tapas-base-finetuned-wtq"]},Hx={datasets:[{description:"A comprehensive curation of datasets covering all benchmarks.",id:"inria-soda/tabular-benchmark"}],demo:{inputs:[{table:[["Glucose","Blood Pressure ","Skin Thickness","Insulin","BMI"],["148","72","35","0","33.6"],["150","50","30","0","35.1"],["141","60","29","1","39.2"]],type:"tabular"}],outputs:[{table:[["Diabetes"],["1"],["1"],["0"]],type:"tabular"}]},metrics:[{description:"",id:"accuracy"},{description:"",id:"recall"},{description:"",id:"precision"},{description:"",id:"f1"}],models:[{description:"Breast cancer prediction model based on decision trees.",id:"scikit-learn/cancer-prediction-trees"}],spaces:[{description:"An application that can predict defective products on a production line.",id:"scikit-learn/tabular-playground"},{description:"An application that compares various tabular classification techniques on different datasets.",id:"scikit-learn/classification"}],summary:"Tabular classification is the task of classifying a target category (a group) based on set of attributes.",widgetModels:["scikit-learn/tabular-playground"],youtubeId:""},Vx={datasets:[{description:"A comprehensive curation of datasets covering all benchmarks.",id:"inria-soda/tabular-benchmark"}],demo:{inputs:[{table:[["Car Name","Horsepower","Weight"],["ford torino","140","3,449"],["amc hornet","97","2,774"],["toyota corolla","65","1,773"]],type:"tabular"}],outputs:[{table:[["MPG (miles per gallon)"],["17"],["18"],["31"]],type:"tabular"}]},metrics:[{description:"",id:"mse"},{description:"Coefficient of determination (or R-squared) is a measure of how well the model fits the data. Higher R-squared is considered a better fit.",id:"r-squared"}],models:[{description:"Fish weight prediction based on length measurements and species.",id:"scikit-learn/Fish-Weight"}],spaces:[{description:"An application that can predict weight of a fish based on set of attributes.",id:"scikit-learn/fish-weight-prediction"}],summary:"Tabular regression is the task of predicting a numerical value given a set of attributes.",widgetModels:["scikit-learn/Fish-Weight"],youtubeId:""},zx={datasets:[{description:"RedCaps is a large-scale dataset of 12M image-text pairs collected from Reddit.",id:"red_caps"},{description:"Conceptual Captions is a dataset consisting of ~3.3M images annotated with captions.",id:"conceptual_captions"},{description:"12M image-caption pairs.",id:"Spawning/PD12M"}],demo:{inputs:[{label:"Input",content:"A city above clouds, pastel colors, Victorian style",type:"text"}],outputs:[{filename:"image.jpeg",type:"img"}]},metrics:[{description:"The Inception Score (IS) measure assesses diversity and meaningfulness. It uses a generated image sample to predict its label. A higher score signifies more diverse and meaningful images.",id:"IS"},{description:"The Fréchet Inception Distance (FID) calculates the distance between distributions between synthetic and real samples. A lower FID score indicates better similarity between the distributions of real and generated images.",id:"FID"},{description:"R-precision assesses how the generated image aligns with the provided text description. It uses the generated images as queries to retrieve relevant text descriptions. The top 'r' relevant descriptions are selected and used to calculate R-precision as r/R, where 'R' is the number of ground truth descriptions associated with the generated images. A higher R-precision value indicates a better model.",id:"R-Precision"}],models:[{description:"One of the most powerful image generation models that can generate realistic outputs.",id:"black-forest-labs/FLUX.1-dev"},{description:"A powerful yet fast image generation model.",id:"latent-consistency/lcm-lora-sdxl"},{description:"Text-to-image model for photorealistic generation.",id:"Kwai-Kolors/Kolors"},{description:"A powerful text-to-image model.",id:"stabilityai/stable-diffusion-3-medium-diffusers"}],spaces:[{description:"A powerful text-to-image application.",id:"stabilityai/stable-diffusion-3-medium"},{description:"A text-to-image application to generate comics.",id:"jbilcke-hf/ai-comic-factory"},{description:"An application to match multiple custom image generation models.",id:"multimodalart/flux-lora-lab"},{description:"A powerful yet very fast image generation application.",id:"latent-consistency/lcm-lora-for-sdxl"},{description:"A gallery to explore various text-to-image models.",id:"multimodalart/LoraTheExplorer"},{description:"An application for `text-to-image`, `image-to-image` and image inpainting.",id:"ArtGAN/Stable-Diffusion-ControlNet-WebUI"},{description:"An application to generate realistic images given photos of a person and a prompt.",id:"InstantX/InstantID"}],summary:"Text-to-image is the task of generating images from input text. These pipelines can also be used to modify and edit images based on text prompts.",widgetModels:["black-forest-labs/FLUX.1-dev"],youtubeId:""},qx={canonicalId:"text-to-audio",datasets:[{description:"10K hours of multi-speaker English dataset.",id:"parler-tts/mls_eng_10k"},{description:"Multi-speaker English dataset.",id:"mythicinfinity/libritts_r"},{description:"Multi-lingual dataset.",id:"facebook/multilingual_librispeech"}],demo:{inputs:[{label:"Input",content:"I love audio models on the Hub!",type:"text"}],outputs:[{filename:"audio.wav",type:"audio"}]},metrics:[{description:"The Mel Cepstral Distortion (MCD) metric is used to calculate the quality of generated speech.",id:"mel cepstral distortion"}],models:[{description:"A prompt based, powerful TTS model.",id:"parler-tts/parler-tts-large-v1"},{description:"A powerful TTS model that supports English and Chinese.",id:"SWivid/F5-TTS"},{description:"A massively multi-lingual TTS model.",id:"fishaudio/fish-speech-1.5"},{description:"A powerful TTS model.",id:"OuteAI/OuteTTS-0.1-350M"},{description:"Small yet powerful TTS model.",id:"hexgrad/Kokoro-82M"}],spaces:[{description:"An application for generate high quality speech in different languages.",id:"hexgrad/Kokoro-TTS"},{description:"A multilingual text-to-speech application.",id:"fishaudio/fish-speech-1"},{description:"An application that generates speech in different styles in English and Chinese.",id:"mrfakename/E2-F5-TTS"},{description:"An application that synthesizes emotional speech for diverse speaker prompts.",id:"parler-tts/parler-tts-expresso"},{description:"An application that generates podcast episodes.",id:"ngxson/kokoro-podcast-generator"}],summary:"Text-to-Speech (TTS) is the task of generating natural sounding speech given text input. TTS models can be extended to have a single model that generates speech for multiple speakers and multiple languages.",widgetModels:["suno/bark"],youtubeId:"NW62DpzJ274"},Wx={datasets:[{description:"A widely used dataset useful to benchmark named entity recognition models.",id:"eriktks/conll2003"},{description:"A multilingual dataset of Wikipedia articles annotated for named entity recognition in over 150 different languages.",id:"unimelb-nlp/wikiann"}],demo:{inputs:[{label:"Input",content:"My name is Omar and I live in Zürich.",type:"text"}],outputs:[{text:"My name is Omar and I live in Zürich.",tokens:[{type:"PERSON",start:11,end:15},{type:"GPE",start:30,end:36}],type:"text-with-tokens"}]},metrics:[{description:"",id:"accuracy"},{description:"",id:"recall"},{description:"",id:"precision"},{description:"",id:"f1"}],models:[{description:"A robust performance model to identify people, locations, organizations and names of miscellaneous entities.",id:"dslim/bert-base-NER"},{description:"A strong model to identify people, locations, organizations and names in multiple languages.",id:"FacebookAI/xlm-roberta-large-finetuned-conll03-english"},{description:"A token classification model specialized on medical entity recognition.",id:"blaze999/Medical-NER"},{description:"Flair models are typically the state of the art in named entity recognition tasks.",id:"flair/ner-english"}],spaces:[{description:"An application that can recognizes entities, extracts noun chunks and recognizes various linguistic features of each token.",id:"spacy/gradio_pipeline_visualizer"}],summary:"Token classification is a natural language understanding task in which a label is assigned to some tokens in a text. Some popular token classification subtasks are Named Entity Recognition (NER) and Part-of-Speech (PoS) tagging. NER models could be trained to identify specific entities in a text, such as dates, individuals and places; and PoS tagging would identify, for example, which words in a text are verbs, nouns, and punctuation marks.",widgetModels:["FacebookAI/xlm-roberta-large-finetuned-conll03-english"],youtubeId:"wVHdVlPScxA"},Kx={canonicalId:"text2text-generation",datasets:[{description:"A dataset of copyright-free books translated into 16 different languages.",id:"Helsinki-NLP/opus_books"},{description:"An example of translation between programming languages. This dataset consists of functions in Java and C#.",id:"google/code_x_glue_cc_code_to_code_trans"}],demo:{inputs:[{label:"Input",content:"My name is Omar and I live in Zürich.",type:"text"}],outputs:[{label:"Output",content:"Mein Name ist Omar und ich wohne in Zürich.",type:"text"}]},metrics:[{description:"BLEU score is calculated by counting the number of shared single or subsequent tokens between the generated sequence and the reference. Subsequent n tokens are called “n-grams”. Unigram refers to a single token while bi-gram refers to token pairs and n-grams refer to n subsequent tokens. The score ranges from 0 to 1, where 1 means the translation perfectly matched and 0 did not match at all",id:"bleu"},{description:"",id:"sacrebleu"}],models:[{description:"Very powerful model that can translate many languages between each other, especially low-resource languages.",id:"facebook/nllb-200-1.3B"},{description:"A general-purpose Transformer that can be used to translate from English to German, French, or Romanian.",id:"google-t5/t5-base"}],spaces:[{description:"An application that can translate between 100 languages.",id:"Iker/Translate-100-languages"},{description:"An application that can translate between many languages.",id:"Geonmo/nllb-translation-demo"}],summary:"Translation is the task of converting text from one language to another.",widgetModels:["facebook/mbart-large-50-many-to-many-mmt"],youtubeId:"1JvfrvZgi6c"},Qx={datasets:[{description:"A widely used dataset used to benchmark multiple variants of text classification.",id:"nyu-mll/glue"},{description:"A text classification dataset used to benchmark natural language inference models",id:"stanfordnlp/snli"}],demo:{inputs:[{label:"Input",content:"I love Hugging Face!",type:"text"}],outputs:[{type:"chart",data:[{label:"POSITIVE",score:.9},{label:"NEUTRAL",score:.1},{label:"NEGATIVE",score:0}]}]},metrics:[{description:"",id:"accuracy"},{description:"",id:"recall"},{description:"",id:"precision"},{description:"The F1 metric is the harmonic mean of the precision and recall. It can be calculated as: F1 = 2 * (precision * recall) / (precision + recall)",id:"f1"}],models:[{description:"A robust model trained for sentiment analysis.",id:"distilbert/distilbert-base-uncased-finetuned-sst-2-english"},{description:"A sentiment analysis model specialized in financial sentiment.",id:"ProsusAI/finbert"},{description:"A sentiment analysis model specialized in analyzing tweets.",id:"cardiffnlp/twitter-roberta-base-sentiment-latest"},{description:"A model that can classify languages.",id:"papluca/xlm-roberta-base-language-detection"},{description:"A model that can classify text generation attacks.",id:"meta-llama/Prompt-Guard-86M"}],spaces:[{description:"An application that can classify financial sentiment.",id:"IoannisTr/Tech_Stocks_Trading_Assistant"},{description:"A dashboard that contains various text classification tasks.",id:"miesnerjacob/Multi-task-NLP"},{description:"An application that analyzes user reviews in healthcare.",id:"spacy/healthsea-demo"}],summary:"Text Classification is the task of assigning a label or class to a given text. Some use cases are sentiment analysis, natural language inference, and assessing grammatical correctness.",widgetModels:["distilbert/distilbert-base-uncased-finetuned-sst-2-english"],youtubeId:"leNG9fN9FQU"},Xx={datasets:[{description:"Multilingual dataset used to evaluate text generation models.",id:"CohereForAI/Global-MMLU"},{description:"High quality multilingual data used to train text-generation models.",id:"HuggingFaceFW/fineweb-2"},{description:"Truly open-source, curated and cleaned dialogue dataset.",id:"HuggingFaceH4/ultrachat_200k"},{description:"A reasoning dataset.",id:"open-r1/OpenThoughts-114k-math"},{description:"A multilingual instruction dataset with preference ratings on responses.",id:"allenai/tulu-3-sft-mixture"},{description:"A large synthetic dataset for alignment of text generation models.",id:"HuggingFaceTB/smoltalk"},{description:"A dataset made for training text generation models solving math questions.",id:"HuggingFaceTB/finemath"}],demo:{inputs:[{label:"Input",content:"Once upon a time,",type:"text"}],outputs:[{label:"Output",content:"Once upon a time, we knew that our ancestors were on the verge of extinction. The great explorers and poets of the Old World, from Alexander the Great to Chaucer, are dead and gone. A good many of our ancient explorers and poets have",type:"text"}]},metrics:[{description:"Cross Entropy is a metric that calculates the difference between two probability distributions. Each probability distribution is the distribution of predicted words",id:"Cross Entropy"},{description:"The Perplexity metric is the exponential of the cross-entropy loss. It evaluates the probabilities assigned to the next word by the model. Lower perplexity indicates better performance",id:"Perplexity"}],models:[{description:"A text-generation model trained to follow instructions.",id:"google/gemma-2-2b-it"},{description:"Smaller variant of one of the most powerful models.",id:"deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B"},{description:"Very powerful text generation model trained to follow instructions.",id:"meta-llama/Meta-Llama-3.1-8B-Instruct"},{description:"Powerful text generation model by Microsoft.",id:"microsoft/phi-4"},{description:"A very powerful model with reasoning capabilities.",id:"simplescaling/s1.1-32B"},{description:"Strong conversational model that supports very long instructions.",id:"Qwen/Qwen2.5-7B-Instruct-1M"},{description:"Text generation model used to write code.",id:"Qwen/Qwen2.5-Coder-32B-Instruct"},{description:"Powerful reasoning based open large language model.",id:"deepseek-ai/DeepSeek-R1"}],spaces:[{description:"A leaderboard to compare different open-source text generation models based on various benchmarks.",id:"open-llm-leaderboard/open_llm_leaderboard"},{description:"A leaderboard for comparing chain-of-thought performance of models.",id:"logikon/open_cot_leaderboard"},{description:"An text generation based application based on a very powerful LLaMA2 model.",id:"ysharma/Explore_llamav2_with_TGI"},{description:"An text generation based application to converse with Zephyr model.",id:"HuggingFaceH4/zephyr-chat"},{description:"A leaderboard that ranks text generation models based on blind votes from people.",id:"lmsys/chatbot-arena-leaderboard"},{description:"An chatbot to converse with a very powerful text generation model.",id:"mlabonne/phixtral-chat"}],summary:"Generating text is the task of generating new text given another text. These models can, for example, fill in incomplete text or paraphrase.",widgetModels:["mistralai/Mistral-Nemo-Instruct-2407"],youtubeId:"e9gNEAlsOvU"},Jx={datasets:[{description:"Bing queries with relevant passages from various web sources.",id:"microsoft/ms_marco"}],demo:{inputs:[{label:"Source sentence",content:"Machine learning is so easy.",type:"text"},{label:"Sentences to compare to",content:"Deep learning is so straightforward.",type:"text"},{label:"",content:"This is so difficult, like rocket science.",type:"text"},{label:"",content:"I can't believe how much I struggled with this.",type:"text"}],outputs:[{type:"chart",data:[{label:"Deep learning is so straightforward.",score:2.2006407},{label:"This is so difficult, like rocket science.",score:-6.2634873},{label:"I can't believe how much I struggled with this.",score:-10.251488}]}]},metrics:[{description:"Discounted Cumulative Gain (DCG) measures the gain, or usefulness, of search results discounted by their position. The normalization is done by dividing the DCG by the ideal DCG, which is the DCG of the perfect ranking.",id:"Normalized Discounted Cumulative Gain"},{description:"Reciprocal Rank is a measure used to rank the relevancy of documents given a set of documents. Reciprocal Rank is the reciprocal of the rank of the document retrieved, meaning, if the rank is 3, the Reciprocal Rank is 0.33. If the rank is 1, the Reciprocal Rank is 1",id:"Mean Reciprocal Rank"},{description:"Mean Average Precision (mAP) is the overall average of the Average Precision (AP) values, where AP is the Area Under the PR Curve (AUC-PR)",id:"Mean Average Precision"}],models:[{description:"An extremely efficient text ranking model trained on a web search dataset.",id:"cross-encoder/ms-marco-MiniLM-L6-v2"},{description:"A strong multilingual text reranker model.",id:"Alibaba-NLP/gte-multilingual-reranker-base"},{description:"An efficient text ranking model that punches above its weight.",id:"Alibaba-NLP/gte-reranker-modernbert-base"}],spaces:[],summary:"Text Ranking is the task of ranking a set of texts based on their relevance to a query. Text ranking models are trained on large datasets of queries and relevant documents to learn how to rank documents based on their relevance to the query. This task is particularly useful for search engines and information retrieval systems.",widgetModels:["cross-encoder/ms-marco-MiniLM-L6-v2"],youtubeId:""},Yx={datasets:[{description:"Microsoft Research Video to Text is a large-scale dataset for open domain video captioning",id:"iejMac/CLIP-MSR-VTT"},{description:"UCF101 Human Actions dataset consists of 13,320 video clips from YouTube, with 101 classes.",id:"quchenyuan/UCF101-ZIP"},{description:"A high-quality dataset for human action recognition in YouTube videos.",id:"nateraw/kinetics"},{description:"A dataset of video clips of humans performing pre-defined basic actions with everyday objects.",id:"HuggingFaceM4/something_something_v2"},{description:"This dataset consists of text-video pairs and contains noisy samples with irrelevant video descriptions",id:"HuggingFaceM4/webvid"},{description:"A dataset of short Flickr videos for the temporal localization of events with descriptions.",id:"iejMac/CLIP-DiDeMo"}],demo:{inputs:[{label:"Input",content:"Darth Vader is surfing on the waves.",type:"text"}],outputs:[{filename:"text-to-video-output.gif",type:"img"}]},metrics:[{description:"Inception Score uses an image classification model that predicts class labels and evaluates how distinct and diverse the images are. A higher score indicates better video generation.",id:"is"},{description:"Frechet Inception Distance uses an image classification model to obtain image embeddings. The metric compares mean and standard deviation of the embeddings of real and generated images. A smaller score indicates better video generation.",id:"fid"},{description:"Frechet Video Distance uses a model that captures coherence for changes in frames and the quality of each frame. A smaller score indicates better video generation.",id:"fvd"},{description:"CLIPSIM measures similarity between video frames and text using an image-text similarity model. A higher score indicates better video generation.",id:"clipsim"}],models:[{description:"A strong model for consistent video generation.",id:"tencent/HunyuanVideo"},{description:"A text-to-video model with high fidelity motion and strong prompt adherence.",id:"Lightricks/LTX-Video"},{description:"A text-to-video model focusing on physics-aware applications like robotics.",id:"nvidia/Cosmos-1.0-Diffusion-7B-Text2World"},{description:"A robust model for video generation.",id:"Wan-AI/Wan2.1-T2V-1.3B"}],spaces:[{description:"An application that generates video from text.",id:"VideoCrafter/VideoCrafter"},{description:"Consistent video generation application.",id:"Wan-AI/Wan2.1"},{description:"A cutting edge video generation application.",id:"Pyramid-Flow/pyramid-flow"}],summary:"Text-to-video models can be used in any application that requires generating consistent sequence of images from text. ",widgetModels:["Wan-AI/Wan2.1-T2V-14B"],youtubeId:void 0},Zx={datasets:[{description:"The CIFAR-100 dataset consists of 60000 32x32 colour images in 100 classes, with 600 images per class.",id:"cifar100"},{description:"Multiple images of celebrities, used for facial expression translation.",id:"CelebA"}],demo:{inputs:[{label:"Seed",content:"42",type:"text"},{label:"Number of images to generate:",content:"4",type:"text"}],outputs:[{filename:"unconditional-image-generation-output.jpeg",type:"img"}]},metrics:[{description:"The inception score (IS) evaluates the quality of generated images. It measures the diversity of the generated images (the model predictions are evenly distributed across all possible labels) and their 'distinction' or 'sharpness' (the model confidently predicts a single label for each image).",id:"Inception score (IS)"},{description:"The Fréchet Inception Distance (FID) evaluates the quality of images created by a generative model by calculating the distance between feature vectors for real and generated images.",id:"Frećhet Inception Distance (FID)"}],models:[{description:"High-quality image generation model trained on the CIFAR-10 dataset. It synthesizes images of the ten classes presented in the dataset using diffusion probabilistic models, a class of latent variable models inspired by considerations from nonequilibrium thermodynamics.",id:"google/ddpm-cifar10-32"},{description:"High-quality image generation model trained on the 256x256 CelebA-HQ dataset. It synthesizes images of faces using diffusion probabilistic models, a class of latent variable models inspired by considerations from nonequilibrium thermodynamics.",id:"google/ddpm-celebahq-256"}],spaces:[{description:"An application that can generate realistic faces.",id:"CompVis/celeba-latent-diffusion"}],summary:"Unconditional image generation is the task of generating images with no condition in any context (like a prompt text or another image). Once trained, the model will create images that resemble its training data distribution.",widgetModels:[""],youtubeId:""},Gx={datasets:[{description:"Benchmark dataset used for video classification with videos that belong to 400 classes.",id:"kinetics400"}],demo:{inputs:[{filename:"video-classification-input.gif",type:"img"}],outputs:[{type:"chart",data:[{label:"Playing Guitar",score:.514},{label:"Playing Tennis",score:.193},{label:"Cooking",score:.068}]}]},metrics:[{description:"",id:"accuracy"},{description:"",id:"recall"},{description:"",id:"precision"},{description:"",id:"f1"}],models:[{description:"Strong Video Classification model trained on the Kinetics 400 dataset.",id:"google/vivit-b-16x2-kinetics400"},{description:"Strong Video Classification model trained on the Kinetics 400 dataset.",id:"microsoft/xclip-base-patch32"}],spaces:[{description:"An application that classifies video at different timestamps.",id:"nateraw/lavila"},{description:"An application that classifies video.",id:"fcakyon/video-classification"}],summary:"Video classification is the task of assigning a label or class to an entire video. Videos are expected to have only one class for each video. Video classification models take a video as input and return a prediction about which class the video belongs to.",widgetModels:[],youtubeId:""},eS={datasets:[{description:"A large dataset used to train visual document retrieval models.",id:"vidore/colpali_train_set"}],demo:{inputs:[{filename:"input.png",type:"img"},{label:"Question",content:"Is the model in this paper the fastest for inference?",type:"text"}],outputs:[{type:"chart",data:[{label:"Page 10",score:.7},{label:"Page 11",score:.06},{label:"Page 9",score:.003}]}]},isPlaceholder:!1,metrics:[{description:"NDCG@k scores ranked recommendation lists for top-k results. 0 is the worst, 1 is the best.",id:"Normalized Discounted Cumulative Gain at K"}],models:[{description:"Very accurate visual document retrieval model for multilingual queries and documents.",id:"vidore/colqwen2-v1.0"},{description:"Very fast and efficient visual document retrieval model that works on five languages.",id:"marco/mcdse-2b-v1"}],spaces:[{description:"A leaderboard of visual document retrieval models.",id:"vidore/vidore-leaderboard"}],summary:"Visual document retrieval is the task of searching for relevant image-based documents, such as PDFs. These models take a text query and multiple documents as input and return the top-most relevant documents and relevancy scores as output.",widgetModels:[""],youtubeId:""},tS={datasets:[{description:"A widely used dataset containing questions (with answers) about images.",id:"Graphcore/vqa"},{description:"A dataset to benchmark visual reasoning based on text in images.",id:"facebook/textvqa"}],demo:{inputs:[{filename:"elephant.jpeg",type:"img"},{label:"Question",content:"What is in this image?",type:"text"}],outputs:[{type:"chart",data:[{label:"elephant",score:.97},{label:"elephants",score:.06},{label:"animal",score:.003}]}]},isPlaceholder:!1,metrics:[{description:"",id:"accuracy"},{description:"Measures how much a predicted answer differs from the ground truth based on the difference in their semantic meaning.",id:"wu-palmer similarity"}],models:[{description:"A visual question answering model trained to convert charts and plots to text.",id:"google/deplot"},{description:"A visual question answering model trained for mathematical reasoning and chart derendering from images.",id:"google/matcha-base"},{description:"A strong visual question answering that answers questions from book covers.",id:"google/pix2struct-ocrvqa-large"}],spaces:[{description:"An application that compares visual question answering models across different tasks.",id:"merve/pix2struct"},{description:"An application that can answer questions based on images.",id:"nielsr/vilt-vqa"},{description:"An application that can caption images and answer questions about a given image. ",id:"Salesforce/BLIP"},{description:"An application that can caption images and answer questions about a given image. ",id:"vumichien/Img2Prompt"}],summary:"Visual Question Answering is the task of answering open-ended questions based on an image. They output natural language responses to natural language questions.",widgetModels:["dandelin/vilt-b32-finetuned-vqa"],youtubeId:""},nS={datasets:[{description:"A widely used dataset used to benchmark multiple variants of text classification.",id:"nyu-mll/glue"},{description:"The Multi-Genre Natural Language Inference (MultiNLI) corpus is a crowd-sourced collection of 433k sentence pairs annotated with textual entailment information.",id:"nyu-mll/multi_nli"},{description:"FEVER is a publicly available dataset for fact extraction and verification against textual sources.",id:"fever/fever"}],demo:{inputs:[{label:"Text Input",content:"Dune is the best movie ever.",type:"text"},{label:"Candidate Labels",content:"CINEMA, ART, MUSIC",type:"text"}],outputs:[{type:"chart",data:[{label:"CINEMA",score:.9},{label:"ART",score:.1},{label:"MUSIC",score:0}]}]},metrics:[],models:[{description:"Powerful zero-shot text classification model.",id:"facebook/bart-large-mnli"},{description:"Cutting-edge zero-shot multilingual text classification model.",id:"MoritzLaurer/ModernBERT-large-zeroshot-v2.0"},{description:"Zero-shot text classification model that can be used for topic and sentiment classification.",id:"knowledgator/gliclass-modern-base-v2.0-init"}],spaces:[],summary:"Zero-shot text classification is a task in natural language processing where a model is trained on a set of labeled examples but is then able to classify new examples from previously unseen classes.",widgetModels:["facebook/bart-large-mnli"]},rS={datasets:[{description:"",id:""}],demo:{inputs:[{filename:"image-classification-input.jpeg",type:"img"},{label:"Classes",content:"cat, dog, bird",type:"text"}],outputs:[{type:"chart",data:[{label:"Cat",score:.664},{label:"Dog",score:.329},{label:"Bird",score:.008}]}]},metrics:[{description:"Computes the number of times the correct label appears in top K labels predicted",id:"top-K accuracy"}],models:[{description:"Multilingual image classification model for 80 languages.",id:"visheratin/mexma-siglip"},{description:"Strong zero-shot image classification model.",id:"google/siglip2-base-patch16-224"},{description:"Robust zero-shot image classification model.",id:"intfloat/mmE5-mllama-11b-instruct"},{description:"Powerful zero-shot image classification model supporting 94 languages.",id:"jinaai/jina-clip-v2"},{description:"Strong image classification model for biomedical domain.",id:"microsoft/BiomedCLIP-PubMedBERT_256-vit_base_patch16_224"}],spaces:[{description:"An application that leverages zero-shot image classification to find best captions to generate an image. ",id:"pharma/CLIP-Interrogator"},{description:"An application to compare different zero-shot image classification models. ",id:"merve/compare_clip_siglip"}],summary:"Zero-shot image classification is the task of classifying previously unseen classes during training of a model.",widgetModels:["google/siglip-so400m-patch14-224"],youtubeId:""},iS={datasets:[],demo:{inputs:[{filename:"zero-shot-object-detection-input.jpg",type:"img"},{label:"Classes",content:"cat, dog, bird",type:"text"}],outputs:[{filename:"zero-shot-object-detection-output.jpg",type:"img"}]},metrics:[{description:"The Average Precision (AP) metric is the Area Under the PR Curve (AUC-PR). It is calculated for each class separately",id:"Average Precision"},{description:"The Mean Average Precision (mAP) metric is the overall average of the AP values",id:"Mean Average Precision"},{description:"The APα metric is the Average Precision at the IoU threshold of a α value, for example, AP50 and AP75",id:"APα"}],models:[{description:"Solid zero-shot object detection model.",id:"IDEA-Research/grounding-dino-base"},{description:"Cutting-edge zero-shot object detection model.",id:"google/owlv2-base-patch16-ensemble"}],spaces:[{description:"A demo to try the state-of-the-art zero-shot object detection model, OWLv2.",id:"merve/owlv2"},{description:"A demo that combines a zero-shot object detection and mask generation model for zero-shot segmentation.",id:"merve/OWLSAM"}],summary:"Zero-shot object detection is a computer vision task to detect objects and their classes in images, without any prior training or knowledge of the classes. Zero-shot object detection models receive an image as input, as well as a list of candidate classes, and output the bounding boxes and labels where the objects have been detected.",widgetModels:[],youtubeId:""},oS={datasets:[{description:"A large dataset of over 10 million 3D objects.",id:"allenai/objaverse-xl"},{description:"A dataset of isolated object images for evaluating image-to-3D models.",id:"dylanebert/iso3d"}],demo:{inputs:[{filename:"image-to-3d-image-input.png",type:"img"}],outputs:[{label:"Result",content:"image-to-3d-3d-output-filename.glb",type:"text"}]},metrics:[],models:[{description:"Fast image-to-3D mesh model by Tencent.",id:"TencentARC/InstantMesh"},{description:"Fast image-to-3D mesh model by StabilityAI",id:"stabilityai/TripoSR"},{description:"A scaled up image-to-3D mesh model derived from TripoSR.",id:"hwjiang/Real3D"},{description:"Consistent image-to-3d generation model.",id:"stabilityai/stable-point-aware-3d"}],spaces:[{description:"Leaderboard to evaluate image-to-3D models.",id:"dylanebert/3d-arena"},{description:"Image-to-3D demo with mesh outputs.",id:"TencentARC/InstantMesh"},{description:"Image-to-3D demo.",id:"stabilityai/stable-point-aware-3d"},{description:"Image-to-3D demo with mesh outputs.",id:"hwjiang/Real3D"},{description:"Image-to-3D demo with splat outputs.",id:"dylanebert/LGM-mini"}],summary:"Image-to-3D models take in image input and produce 3D output.",widgetModels:[],youtubeId:""},aS={datasets:[{description:"A large dataset of over 10 million 3D objects.",id:"allenai/objaverse-xl"},{description:"Descriptive captions for 3D objects in Objaverse.",id:"tiange/Cap3D"}],demo:{inputs:[{label:"Prompt",content:"a cat statue",type:"text"}],outputs:[{label:"Result",content:"text-to-3d-3d-output-filename.glb",type:"text"}]},metrics:[],models:[{description:"Text-to-3D mesh model by OpenAI",id:"openai/shap-e"},{description:"Generative 3D gaussian splatting model.",id:"ashawkey/LGM"}],spaces:[{description:"Text-to-3D demo with mesh outputs.",id:"hysts/Shap-E"},{description:"Text/image-to-3D demo with splat outputs.",id:"ashawkey/LGM"}],summary:"Text-to-3D models take in text input and produce 3D output.",widgetModels:[],youtubeId:""},sS={datasets:[{description:"A dataset of hand keypoints of over 500k examples.",id:"Vincent-luo/hagrid-mediapipe-hands"}],demo:{inputs:[{filename:"keypoint-detection-input.png",type:"img"}],outputs:[{filename:"keypoint-detection-output.png",type:"img"}]},metrics:[],models:[{description:"A robust keypoint detection model.",id:"magic-leap-community/superpoint"},{description:"A robust keypoint matching model.",id:"magic-leap-community/superglue_outdoor"},{description:"Strong keypoint detection model used to detect human pose.",id:"facebook/sapiens-pose-1b"},{description:"Powerful keypoint detection model used to detect human pose.",id:"usyd-community/vitpose-plus-base"}],spaces:[{description:"An application that detects hand keypoints in real-time.",id:"datasciencedojo/Hand-Keypoint-Detection-Realtime"},{description:"An application to try a universal keypoint detection model.",id:"merve/SuperPoint"}],summary:"Keypoint detection is the task of identifying meaningful distinctive points or features in an image.",widgetModels:[],youtubeId:""},lS={datasets:[{description:"Multiple-choice questions and answers about videos.",id:"lmms-lab/Video-MME"},{description:"A dataset of instructions and question-answer pairs about videos.",id:"lmms-lab/VideoChatGPT"},{description:"Large video understanding dataset.",id:"HuggingFaceFV/finevideo"}],demo:{inputs:[{filename:"video-text-to-text-input.gif",type:"img"},{label:"Text Prompt",content:"What is happening in this video?",type:"text"}],outputs:[{label:"Answer",content:"The video shows a series of images showing a fountain with water jets and a variety of colorful flowers and butterflies in the background.",type:"text"}]},metrics:[],models:[{description:"A robust video-text-to-text model.",id:"Vision-CAIR/LongVU_Qwen2_7B"},{description:"Strong video-text-to-text model with reasoning capabilities.",id:"GoodiesHere/Apollo-LMMs-Apollo-7B-t32"},{description:"Strong video-text-to-text model.",id:"HuggingFaceTB/SmolVLM2-2.2B-Instruct"}],spaces:[{description:"An application to chat with a video-text-to-text model.",id:"llava-hf/video-llava"},{description:"A leaderboard for various video-text-to-text models.",id:"opencompass/openvlm_video_leaderboard"},{description:"An application to generate highlights from a video.",id:"HuggingFaceTB/SmolVLM2-HighlightGenerator"}],summary:"Video-text-to-text models take in a video and a text prompt and output text. These models are also called video-language models.",widgetModels:[""],youtubeId:""},cS={"audio-classification":["speechbrain","transformers","transformers.js"],"audio-to-audio":["asteroid","fairseq","speechbrain"],"automatic-speech-recognition":["espnet","nemo","speechbrain","transformers","transformers.js"],"audio-text-to-text":[],"depth-estimation":["transformers","transformers.js"],"document-question-answering":["transformers","transformers.js"],"feature-extraction":["sentence-transformers","transformers","transformers.js"],"fill-mask":["transformers","transformers.js"],"graph-ml":["transformers"],"image-classification":["keras","timm","transformers","transformers.js"],"image-feature-extraction":["timm","transformers"],"image-segmentation":["transformers","transformers.js"],"image-text-to-text":["transformers"],"image-to-image":["diffusers","transformers","transformers.js"],"image-to-text":["transformers","transformers.js"],"image-to-video":["diffusers"],"keypoint-detection":["transformers"],"video-classification":["transformers"],"mask-generation":["transformers"],"multiple-choice":["transformers"],"object-detection":["transformers","transformers.js","ultralytics"],other:[],"question-answering":["adapter-transformers","allennlp","transformers","transformers.js"],robotics:[],"reinforcement-learning":["transformers","stable-baselines3","ml-agents","sample-factory"],"sentence-similarity":["sentence-transformers","spacy","transformers.js"],summarization:["transformers","transformers.js"],"table-question-answering":["transformers"],"table-to-text":["transformers"],"tabular-classification":["sklearn"],"tabular-regression":["sklearn"],"tabular-to-text":["transformers"],"text-classification":["adapter-transformers","setfit","spacy","transformers","transformers.js"],"text-generation":["transformers","transformers.js"],"text-ranking":["sentence-transformers","transformers"],"text-retrieval":[],"text-to-image":["diffusers"],"text-to-speech":["espnet","tensorflowtts","transformers","transformers.js"],"text-to-audio":["transformers","transformers.js"],"text-to-video":["diffusers"],"text2text-generation":["transformers","transformers.js"],"time-series-forecasting":[],"token-classification":["adapter-transformers","flair","spacy","span-marker","stanza","transformers","transformers.js"],translation:["transformers","transformers.js"],"unconditional-image-generation":["diffusers"],"video-text-to-text":["transformers"],"visual-question-answering":["transformers","transformers.js"],"voice-activity-detection":[],"zero-shot-classification":["transformers","transformers.js"],"zero-shot-image-classification":["transformers","transformers.js"],"zero-shot-object-detection":["transformers","transformers.js"],"text-to-3d":["diffusers"],"image-to-3d":["diffusers"],"any-to-any":["transformers"],"visual-document-retrieval":["transformers"],"video-to-video":["diffusers"]};function L(e,t=ml){return{...t,id:e,label:Cc[e].name,libraries:cS[e]}}L("any-to-any",_x),L("audio-classification",bx),L("audio-to-audio",kx),L("audio-text-to-text",ml),L("automatic-speech-recognition",xx),L("depth-estimation",Ux),L("document-question-answering",Sx),L("visual-document-retrieval",eS),L("feature-extraction",Ix),L("fill-mask",Ax),L("image-classification",Tx),L("image-feature-extraction",Ex),L("image-segmentation",Nx),L("image-to-image",Cx),L("image-text-to-text",Rx),L("image-to-text",Px),L("image-to-video",Dx),L("keypoint-detection",sS),L("mask-generation",Ox),L("object-detection",Lx),L("video-classification",Gx),L("question-answering",jx),L("reinforcement-learning",Mx),L("sentence-similarity",$x),L("summarization",Fx),L("table-question-answering",Bx),L("tabular-classification",Hx),L("tabular-regression",Vx),L("text-classification",Qx),L("text-generation",Xx),L("text-ranking",Jx),L("text-to-image",zx),L("text-to-speech",qx),L("text-to-video",Yx),L("token-classification",Wx),L("translation",Kx),L("unconditional-image-generation",Zx),L("video-text-to-text",lS),L("video-to-video",ml),L("visual-question-answering",tS),L("zero-shot-classification",nS),L("zero-shot-image-classification",rS),L("zero-shot-object-detection",iS),L("text-to-3d",aS),L("image-to-3d",oS);const uS=()=>'"Hi, I recently bought a device from your company but it is not working as advertised and I would like to get reimbursed!"',dS=()=>'"Меня зовут Вольфганг и я живу в Берлине"',pS=()=>'"The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was finished in 1930. It was the first structure to reach a height of 300 metres. Due to the addition of a broadcasting aerial at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft). Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct."',fS=()=>`{
    "query": "How many stars does the transformers repository have?",
    "table": {
        "Repository": ["Transformers", "Datasets", "Tokenizers"],
        "Stars": ["36542", "4512", "3934"],
        "Contributors": ["651", "77", "34"],
        "Programming language": [
            "Python",
            "Python",
            "Rust, Python and NodeJS"
        ]
    }
}`,mS=()=>`{
        "image": "cat.png",
        "question": "What is in this image?"
    }`,hS=()=>`{
    "question": "What is my name?",
    "context": "My name is Clara and I live in Berkeley."
}`,gS=()=>'"I like you. I love you"',yS=()=>'"My name is Sarah Jessica Parker but you can call me Jessica"',Ad=e=>e.tags.includes("conversational")?e.pipeline_tag==="text-generation"?[{role:"user",content:"What is the capital of France?"}]:[{role:"user",content:[{type:"text",text:"Describe this image in one sentence."},{type:"image_url",image_url:{url:"https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg"}}]}]:'"Can you please let us know more details about your "',vS=()=>'"The answer to the universe is"',wS=e=>`"The answer to the universe is ${e.mask_token}."`,_S=()=>`{
    "source_sentence": "That is a happy person",
    "sentences": [
        "That is a happy dog",
        "That is a very happy person",
        "Today is a sunny day"
    ]
}`,bS=()=>'"Today is a sunny day and I will get some ice cream."',kS=()=>'"cats.jpg"',xS=()=>'"cats.jpg"',SS=()=>`{
    "image": "cat.png",
    "prompt": "Turn the cat into a tiger."
}`,IS=()=>`{
    "image": "cat.png",
    "prompt": "The cat starts to dance"
}`,AS=()=>'"cats.jpg"',TS=()=>'"cats.jpg"',ES=()=>'"sample1.flac"',CS=()=>'"sample1.flac"',PS=()=>'"Astronaut riding a horse"',RS=()=>'"A young man walking on the street"',NS=()=>'"The answer to the universe is 42"',DS=()=>'"liquid drum and bass, atmospheric synths, airy sounds"',OS=()=>'"sample1.flac"',Td=()=>`'{"Height":[11.52,12.48],"Length1":[23.2,24.0],"Length2":[25.4,26.3],"Species": ["Bream","Bream"]}'`,LS=()=>'"cats.jpg"',US={"audio-to-audio":ES,"audio-classification":CS,"automatic-speech-recognition":OS,"document-question-answering":mS,"feature-extraction":bS,"fill-mask":wS,"image-classification":kS,"image-to-text":xS,"image-to-image":SS,"image-to-video":IS,"image-segmentation":AS,"object-detection":TS,"question-answering":hS,"sentence-similarity":_S,summarization:pS,"table-question-answering":fS,"tabular-regression":Td,"tabular-classification":Td,"text-classification":gS,"text-generation":Ad,"image-text-to-text":Ad,"text-to-image":PS,"text-to-video":RS,"text-to-speech":NS,"text-to-audio":DS,"text2text-generation":vS,"token-classification":yS,translation:dS,"zero-shot-classification":uS,"zero-shot-image-classification":LS};function MS(e,t=!1,n=!1){if(e.pipeline_tag){const r=US[e.pipeline_tag];if(r){let i=r(e);if(typeof i=="string"&&(t&&(i=i.replace(/(?:(?:\r?\n|\r)\t*)|\t+/g," ")),n)){const o=/^"(.+)"$/s,a=i.match(o);i=a?a[1]:i}return i}}return"No input example has been defined for this model task."}function jS(e,t){let n=JSON.stringify(e,null,"	");return t!=null&&t.indent&&(n=n.replaceAll(`
`,`
${t.indent}`)),t!=null&&t.attributeKeyQuotes||(n=n.replace(/"([^"]+)":/g,"$1:")),t!=null&&t.customContentEscaper&&(n=t.customContentEscaper(n)),n}const zm="custom_code";function tn(e){const t=e.split("/");return t.length===1?t[0]:t[1]}const $S=e=>JSON.stringify(e).slice(1,-1),FS=e=>{var t,n;return[`from adapters import AutoAdapterModel

model = AutoAdapterModel.from_pretrained("${(n=(t=e.config)==null?void 0:t.adapter_transformers)==null?void 0:n.model_name}")
model.load_adapter("${e.id}", set_active=True)`]},BS=e=>[`import allennlp_models
from allennlp.predictors.predictor import Predictor

predictor = Predictor.from_path("hf://${e.id}")`],HS=e=>[`import allennlp_models
from allennlp.predictors.predictor import Predictor

predictor = Predictor.from_path("hf://${e.id}")
predictor_input = {"passage": "My name is Wolfgang and I live in Berlin", "question": "Where do I live?"}
predictions = predictor.predict_json(predictor_input)`],VS=e=>e.tags.includes("question-answering")?HS(e):BS(e),zS=e=>[`from araclip import AraClip

model = AraClip.from_pretrained("${e.id}")`],qS=e=>[`from asteroid.models import BaseModel

model = BaseModel.from_pretrained("${e.id}")`],WS=e=>{const t=`# Watermark Generator
from audioseal import AudioSeal

model = AudioSeal.load_generator("${e.id}")
# pass a tensor (tensor_wav) of shape (batch, channels, samples) and a sample rate
wav, sr = tensor_wav, 16000
	
watermark = model.get_watermark(wav, sr)
watermarked_audio = wav + watermark`,n=`# Watermark Detector
from audioseal import AudioSeal

detector = AudioSeal.load_detector("${e.id}")
	
result, message = detector.detect_watermark(watermarked_audio, sr)`;return[t,n]};function Nr(e){var t,n;return((n=(t=e.cardData)==null?void 0:t.base_model)==null?void 0:n.toString())??"fill-in-base-model"}function zn(e){var n,r,i;const t=((r=(n=e.widgetData)==null?void 0:n[0])==null?void 0:r.text)??((i=e.cardData)==null?void 0:i.instance_prompt);if(t)return $S(t)}const KS=e=>[`import requests
from PIL import Image
from ben2 import AutoModel

url = "https://huggingface.co/datasets/mishig/sample_images/resolve/main/teapot.jpg"
image = Image.open(requests.get(url, stream=True).raw)

model = AutoModel.from_pretrained("${e.id}")
model.to("cuda").eval()
foreground = model.inference(image)
`],QS=e=>[`from bertopic import BERTopic

model = BERTopic.load("${e.id}")`],XS=e=>[`from bm25s.hf import BM25HF

retriever = BM25HF.load_from_hub("${e.id}")`],JS=()=>[`# pip install chatterbox-tts
import torchaudio as ta
from chatterbox.tts import ChatterboxTTS

model = ChatterboxTTS.from_pretrained(device="cuda")

text = "Ezreal and Jinx teamed up with Ahri, Yasuo, and Teemo to take down the enemy's Nexus in an epic late-game pentakill."
wav = model.generate(text)
ta.save("test-1.wav", wav, model.sr)

# If you want to synthesize with a different voice, specify the audio prompt
AUDIO_PROMPT_PATH="YOUR_FILE.wav"
wav = model.generate(text, audio_prompt_path=AUDIO_PROMPT_PATH)
ta.save("test-2.wav", wav, model.sr)`],YS=()=>["pip install git+https://github.com/SAP-samples/contexttab",`# Run a classification task
from sklearn.datasets import load_breast_cancer
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split

from contexttab import ConTextTabClassifier

# Load sample data
X, y = load_breast_cancer(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.5, random_state=42)

# Initialize a classifier
# You can omit checkpoint and checkpoint_revision to use the default model
clf = ConTextTabClassifier(checkpoint="l2/base.pt", checkpoint_revision="v1.0.0", bagging=1, max_context_size=2048)

clf.fit(X_train, y_train)

# Predict probabilities
prediction_probabilities = clf.predict_proba(X_test)
# Predict labels
predictions = clf.predict(X_test)
print("Accuracy", accuracy_score(y_test, predictions))`,`# Run a regression task
from sklearn.datasets import fetch_openml
from sklearn.metrics import r2_score
from sklearn.model_selection import train_test_split

from contexttab import ConTextTabRegressor


# Load sample data
df = fetch_openml(data_id=531, as_frame=True)
X = df.data
y = df.target.astype(float)

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.5, random_state=42)

# Initialize the regressor
# You can omit checkpoint and checkpoint_revision to use the default model
regressor = ConTextTabRegressor(checkpoint="l2/base.pt", checkpoint_revision="v1.0.0", bagging=1, max_context_size=2048)

regressor.fit(X_train, y_train)

# Predict on the test set
predictions = regressor.predict(X_test)

r2 = r2_score(y_test, predictions)
print("R² Score:", r2)`],ZS=()=>[`# pip install git+https://github.com/Google-Health/cxr-foundation.git#subdirectory=python

# Load image as grayscale (Stillwaterising, CC0, via Wikimedia Commons)
import requests
from PIL import Image
from io import BytesIO
image_url = "https://upload.wikimedia.org/wikipedia/commons/c/c8/Chest_Xray_PA_3-8-2010.png"
img = Image.open(requests.get(image_url, headers={'User-Agent': 'Demo'}, stream=True).raw).convert('L')

# Run inference
from clientside.clients import make_hugging_face_client
cxr_client = make_hugging_face_client('cxr_model')
print(cxr_client.get_image_embeddings_from_images([img]))`],GS=e=>{let t,n,r;return t="<ENCODER>",n="<NUMBER_OF_FEATURES>",r="<OUT_CHANNELS>",e.id==="depth-anything/Depth-Anything-V2-Small"?(t="vits",n="64",r="[48, 96, 192, 384]"):e.id==="depth-anything/Depth-Anything-V2-Base"?(t="vitb",n="128",r="[96, 192, 384, 768]"):e.id==="depth-anything/Depth-Anything-V2-Large"&&(t="vitl",n="256",r="[256, 512, 1024, 1024"),[`
# Install from https://github.com/DepthAnything/Depth-Anything-V2

# Load the model and infer depth from an image
import cv2
import torch

from depth_anything_v2.dpt import DepthAnythingV2

# instantiate the model
model = DepthAnythingV2(encoder="${t}", features=${n}, out_channels=${r})

# load the weights
filepath = hf_hub_download(repo_id="${e.id}", filename="depth_anything_v2_${t}.pth", repo_type="model")
state_dict = torch.load(filepath, map_location="cpu")
model.load_state_dict(state_dict).eval()

raw_img = cv2.imread("your/image/path")
depth = model.infer_image(raw_img) # HxW raw depth map in numpy
    `]},e1=e=>[`# Download checkpoint
pip install huggingface-hub
huggingface-cli download --local-dir checkpoints ${e.id}`,`import depth_pro

# Load model and preprocessing transform
model, transform = depth_pro.create_model_and_transforms()
model.eval()

# Load and preprocess an image.
image, _, f_px = depth_pro.load_rgb("example.png")
image = transform(image)

# Run inference.
prediction = model.infer(image, f_px=f_px)

# Results: 1. Depth in meters
depth = prediction["depth"]
# Results: 2. Focal length in pixels
focallength_px = prediction["focallength_px"]`],t1=()=>[`from huggingface_hub import from_pretrained_keras
import tensorflow as tf, requests

# Load and format input
IMAGE_URL = "https://storage.googleapis.com/dx-scin-public-data/dataset/images/3445096909671059178.png"
input_tensor = tf.train.Example(
    features=tf.train.Features(
        feature={
            "image/encoded": tf.train.Feature(
                bytes_list=tf.train.BytesList(value=[requests.get(IMAGE_URL, stream=True).content])
            )
        }
    )
).SerializeToString()

# Load model and run inference
loaded_model = from_pretrained_keras("google/derm-foundation")
infer = loaded_model.signatures["serving_default"]
print(infer(inputs=tf.constant([input_tensor])))`],n1=e=>[`import soundfile as sf
from dia.model import Dia

model = Dia.from_pretrained("${e.id}")
text = "[S1] Dia is an open weights text to dialogue model. [S2] You get full control over scripts and voices. [S1] Wow. Amazing. (laughs) [S2] Try it now on Git hub or Hugging Face."
output = model.generate(text)

sf.write("simple.mp3", output, 44100)`],r1=e=>[`# pip install git+https://github.com/NVlabs/describe-anything
from huggingface_hub import snapshot_download
from dam import DescribeAnythingModel

snapshot_download(${e.id}, local_dir="checkpoints")

dam = DescribeAnythingModel(
	model_path="checkpoints",
	conv_mode="v1",
	prompt_mode="focal_prompt",
)`],qm="Astronaut in a jungle, cold color palette, muted colors, detailed, 8k",Wm="Turn this cat into a dog",Pc="A man with short gray hair plays a red electric guitar.",i1=e=>[`from diffusers import DiffusionPipeline

pipe = DiffusionPipeline.from_pretrained("${e.id}")

prompt = "${zn(e)??qm}"
image = pipe(prompt).images[0]`],o1=e=>[`from diffusers import DiffusionPipeline
from diffusers.utils import load_image

pipe = DiffusionPipeline.from_pretrained("${e.id}")

prompt = "${zn(e)??Wm}"
input_image = load_image("https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/cat.png")

image = pipe(image=input_image, prompt=prompt).images[0]`],a1=e=>[`import torch
from diffusers import DiffusionPipeline
from diffusers.utils import load_image, export_to_video

pipe = DiffusionPipeline.from_pretrained("${e.id}", torch_dtype=torch.float16)
pipe.to("cuda")

prompt = "${zn(e)??Pc}"
image = load_image(
    "https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/guitar-man.png"
)

output = pipe(image=image, prompt=prompt).frames[0]
export_to_video(output, "output.mp4")`],s1=e=>[`from diffusers import ControlNetModel, StableDiffusionControlNetPipeline

controlnet = ControlNetModel.from_pretrained("${e.id}")
pipe = StableDiffusionControlNetPipeline.from_pretrained(
	"${Nr(e)}", controlnet=controlnet
)`],l1=e=>[`from diffusers import DiffusionPipeline

pipe = DiffusionPipeline.from_pretrained("${Nr(e)}")
pipe.load_lora_weights("${e.id}")

prompt = "${zn(e)??qm}"
image = pipe(prompt).images[0]`],c1=e=>[`from diffusers import DiffusionPipeline
from diffusers.utils import load_image

pipe = DiffusionPipeline.from_pretrained("${Nr(e)}")
pipe.load_lora_weights("${e.id}")

prompt = "${zn(e)??Wm}"
input_image = load_image("https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/cat.png")

image = pipe(image=input_image, prompt=prompt).images[0]`],u1=e=>[`from diffusers import DiffusionPipeline
from diffusers.utils import export_to_video

pipe = DiffusionPipeline.from_pretrained("${Nr(e)}")
pipe.load_lora_weights("${e.id}")

prompt = "${zn(e)??Pc}"

output = pipe(prompt=prompt).frames[0]
export_to_video(output, "output.mp4")`],d1=e=>[`from diffusers import DiffusionPipeline
from diffusers.utils import load_image, export_to_video

pipe = DiffusionPipeline.from_pretrained("${Nr(e)}")
pipe.load_lora_weights("${e.id}")

prompt = "${zn(e)??Pc}"
input_image = load_image("https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/guitar-man.png")

image = pipe(image=input_image, prompt=prompt).frames[0]
export_to_video(output, "output.mp4")`],p1=e=>[`from diffusers import DiffusionPipeline

pipe = DiffusionPipeline.from_pretrained("${Nr(e)}")
pipe.load_textual_inversion("${e.id}")`],f1=e=>e.tags.includes("controlnet")?s1(e):e.tags.includes("lora")?e.pipeline_tag==="image-to-image"?c1(e):e.pipeline_tag==="image-to-video"?d1(e):e.pipeline_tag==="text-to-video"?u1(e):l1(e):e.tags.includes("textual_inversion")?p1(e):e.pipeline_tag==="image-to-video"?a1(e):e.pipeline_tag==="image-to-image"?o1(e):i1(e),m1=e=>{const t=`# Pipeline for Stable Diffusion 3
from diffusionkit.mlx import DiffusionPipeline

pipeline = DiffusionPipeline(
	shift=3.0,
	use_t5=False,
	model_version=${e.id},
	low_memory_mode=True,
	a16=True,
	w16=True,
)`,n=`# Pipeline for Flux
from diffusionkit.mlx import FluxPipeline

pipeline = FluxPipeline(
  shift=1.0,
  model_version=${e.id},
  low_memory_mode=True,
  a16=True,
  w16=True,
)`,r=`# Image Generation
HEIGHT = 512
WIDTH = 512
NUM_STEPS = ${e.tags.includes("flux")?4:50}
CFG_WEIGHT = ${e.tags.includes("flux")?0:5}

image, _ = pipeline.generate_image(
  "a photo of a cat",
  cfg_weight=CFG_WEIGHT,
  num_steps=NUM_STEPS,
  latent_size=(HEIGHT // 8, WIDTH // 8),
)`;return[e.tags.includes("flux")?n:t,r]},h1=e=>[`# pip install --no-binary :all: cartesia-pytorch
from cartesia_pytorch import ReneLMHeadModel
from transformers import AutoTokenizer

model = ReneLMHeadModel.from_pretrained("${e.id}")
tokenizer = AutoTokenizer.from_pretrained("allenai/OLMo-1B-hf")

in_message = ["Rene Descartes was"]
inputs = tokenizer(in_message, return_tensors="pt")

outputs = model.generate(inputs.input_ids, max_length=50, top_k=100, top_p=0.99)
out_message = tokenizer.batch_decode(outputs, skip_special_tokens=True)[0]

print(out_message)
)`],g1=e=>[`import mlx.core as mx
import cartesia_mlx as cmx

model = cmx.from_pretrained("${e.id}")
model.set_dtype(mx.float32)   

prompt = "Rene Descartes was"

for text in model.generate(
    prompt,
    max_tokens=500,
    eval_every_n=5,
    verbose=True,
    top_p=0.99,
    temperature=0.85,
):
    print(text, end="", flush=True)
`],y1=e=>{const t=tn(e.id).replaceAll("-","_");return[`# Load it from the Hub directly
import edsnlp
nlp = edsnlp.load("${e.id}")
`,`# Or install it as a package
!pip install git+https://huggingface.co/${e.id}

# and import it as a module
import ${t}

nlp = ${t}.load()  # or edsnlp.load("${t}")
`]},v1=e=>[`from espnet2.bin.tts_inference import Text2Speech

model = Text2Speech.from_pretrained("${e.id}")

speech, *_ = model("text to generate speech from")`],w1=e=>[`from espnet2.bin.asr_inference import Speech2Text

model = Speech2Text.from_pretrained(
  "${e.id}"
)

speech, rate = soundfile.read("speech.wav")
text, *_ = model(speech)[0]`],_1=()=>["unknown model type (must be text-to-speech or automatic-speech-recognition)"],b1=e=>e.tags.includes("text-to-speech")?v1(e):e.tags.includes("automatic-speech-recognition")?w1(e):_1(),k1=e=>[`from fairseq.checkpoint_utils import load_model_ensemble_and_task_from_hf_hub

models, cfg, task = load_model_ensemble_and_task_from_hf_hub(
    "${e.id}"
)`],x1=e=>[`from flair.models import SequenceTagger

tagger = SequenceTagger.load("${e.id}")`],S1=e=>[`from gliner import GLiNER

model = GLiNER.from_pretrained("${e.id}")`],I1=e=>[`# Download model
from huggingface_hub import snapshot_download

snapshot_download(${e.id}, local_dir="checkpoints")

from indextts.infer import IndexTTS

# Ensure config.yaml is present in the checkpoints directory
tts = IndexTTS(model_dir="checkpoints", cfg_path="checkpoints/config.yaml")

voice = "path/to/your/reference_voice.wav"  # Path to the voice reference audio file
text = "Hello, how are you?"
output_path = "output_index.wav"

tts.infer(voice, text, output_path)`],A1=e=>[`# CLI usage
# see docs: https://ai-riksarkivet.github.io/htrflow/latest/getting_started/quick_start.html
htrflow pipeline <path/to/pipeline.yaml> <path/to/image>`,`# Python usage
from htrflow.pipeline.pipeline import Pipeline
from htrflow.pipeline.steps import Task
from htrflow.models.framework.model import ModelClass

pipeline = Pipeline(
    [
        Task(
            ModelClass, {"model": "${e.id}"}, {}
        ),
    ])`],T1=e=>[`# Available backend options are: "jax", "torch", "tensorflow".
import os
os.environ["KERAS_BACKEND"] = "jax"
	
import keras

model = keras.saving.load_model("hf://${e.id}")
`],E1=e=>`
import keras_hub

# Load CausalLM model (optional: use half precision for inference)
causal_lm = keras_hub.models.CausalLM.from_preset("hf://${e}", dtype="bfloat16")
causal_lm.compile(sampler="greedy")  # (optional) specify a sampler

# Generate text
causal_lm.generate("Keras: deep learning for", max_length=64)
`,C1=e=>`
import keras_hub

# Load TextToImage model (optional: use half precision for inference)
text_to_image = keras_hub.models.TextToImage.from_preset("hf://${e}", dtype="bfloat16")

# Generate images with a TextToImage model.
text_to_image.generate("Astronaut in a jungle")
`,P1=e=>`
import keras_hub

# Load TextClassifier model
text_classifier = keras_hub.models.TextClassifier.from_preset(
    "hf://${e}",
    num_classes=2,
)
# Fine-tune
text_classifier.fit(x=["Thilling adventure!", "Total snoozefest."], y=[1, 0])
# Classify text
text_classifier.predict(["Not my cup of tea."])
`,R1=e=>`
import keras_hub
import keras

# Load ImageClassifier model
image_classifier = keras_hub.models.ImageClassifier.from_preset(
    "hf://${e}",
    num_classes=2,
)
# Fine-tune
image_classifier.fit(
    x=keras.random.randint((32, 64, 64, 3), 0, 256),
    y=keras.random.randint((32, 1), 0, 2),
)
# Classify image
image_classifier.predict(keras.random.randint((1, 64, 64, 3), 0, 256))
`,Ed={CausalLM:E1,TextToImage:C1,TextClassifier:P1,ImageClassifier:R1},N1=(e,t)=>`
import keras_hub

# Create a ${e} model
task = keras_hub.models.${e}.from_preset("hf://${t}")
`,D1=e=>`
import keras_hub

# Create a Backbone model unspecialized for any task
backbone = keras_hub.models.Backbone.from_preset("hf://${e}")
`,O1=e=>{var i,o;const t=e.id,n=((o=(i=e.config)==null?void 0:i.keras_hub)==null?void 0:o.tasks)??[],r=[];for(const[a,s]of Object.entries(Ed))n.includes(a)&&r.push(s(t));for(const a of n)Object.keys(Ed).includes(a)||r.push(N1(a,t));return r.push(D1(t)),r},L1=e=>[`# Example usage for KimiAudio
# pip install git+https://github.com/MoonshotAI/Kimi-Audio.git

from kimia_infer.api.kimia import KimiAudio

model = KimiAudio(model_path="${e.id}", load_detokenizer=True)

sampling_params = {
    "audio_temperature": 0.8,
    "audio_top_k": 10,
    "text_temperature": 0.0,
    "text_top_k": 5,
}

# For ASR
asr_audio = "asr_example.wav"
messages_asr = [
    {"role": "user", "message_type": "text", "content": "Please transcribe the following audio:"},
    {"role": "user", "message_type": "audio", "content": asr_audio}
]
_, text = model.generate(messages_asr, **sampling_params, output_type="text")
print(text)

# For Q&A
qa_audio = "qa_example.wav"
messages_conv = [{"role": "user", "message_type": "audio", "content": qa_audio}]
wav, text = model.generate(messages_conv, **sampling_params, output_type="both")
sf.write("output_audio.wav", wav.cpu().view(-1).numpy(), 24000)
print(text)
`],U1=e=>e.tags.includes("bi-encoder")?[`#install from https://github.com/webis-de/lightning-ir

from lightning_ir import BiEncoderModule
model = BiEncoderModule("${e.id}")

model.score("query", ["doc1", "doc2", "doc3"])`]:e.tags.includes("cross-encoder")?[`#install from https://github.com/webis-de/lightning-ir

from lightning_ir import CrossEncoderModule
model = CrossEncoderModule("${e.id}")

model.score("query", ["doc1", "doc2", "doc3"])`]:[`#install from https://github.com/webis-de/lightning-ir

from lightning_ir import BiEncoderModule, CrossEncoderModule

# depending on the model type, use either BiEncoderModule or CrossEncoderModule
model = BiEncoderModule("${e.id}") 
# model = CrossEncoderModule("${e.id}")

model.score("query", ["doc1", "doc2", "doc3"])`],M1=e=>{const t=[`# !pip install llama-cpp-python

from llama_cpp import Llama

llm = Llama.from_pretrained(
	repo_id="${e.id}",
	filename="{{GGUF_FILE}}",
)
`];if(e.tags.includes("conversational")){const n=MS(e);t.push(`llm.create_chat_completion(
	messages = ${jS(n,{attributeKeyQuotes:!0,indent:"	"})}
)`)}else t.push(`output = llm(
	"Once upon a time,",
	max_tokens=512,
	echo=True
)
print(output)`);return t},j1=e=>{if(e.tags.includes("smolvla")){const t=[`# See https://github.com/huggingface/lerobot?tab=readme-ov-file#installation for more details
git clone https://github.com/huggingface/lerobot.git
cd lerobot
pip install -e .[smolvla]`,`# Launch finetuning on your dataset
python lerobot/scripts/train.py \\
--policy.path=${e.id} \\
--dataset.repo_id=lerobot/svla_so101_pickplace \\ 
--batch_size=64 \\
--steps=20000 \\
--output_dir=outputs/train/my_smolvla \\
--job_name=my_smolvla_training \\
--policy.device=cuda \\
--wandb.enable=true`];return e.id!=="lerobot/smolvla_base"&&t.push(`# Run the policy using the record function	
python -m lerobot.record \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\ # <- Use your port
  --robot.id=my_blue_follower_arm \\ # <- Use your robot id
  --robot.cameras="{ front: {type: opencv, index_or_path: 8, width: 640, height: 480, fps: 30}}" \\ # <- Use your cameras
  --dataset.single_task="Grasp a lego block and put it in the bin." \\ # <- Use the same task description you used in your dataset recording
  --dataset.repo_id=HF_USER/dataset_name \\  # <- This will be the dataset name on HF Hub
  --dataset.episode_time_s=50 \\
  --dataset.num_episodes=10 \\
  --policy.path=${e.id}`),t}return[]},$1=e=>[`# Note: 'keras<3.x' or 'tf_keras' must be installed (legacy)
# See https://github.com/keras-team/tf-keras for more details.
from huggingface_hub import from_pretrained_keras

model = from_pretrained_keras("${e.id}")
`],F1=e=>[`from mamba_ssm import MambaLMHeadModel

model = MambaLMHeadModel.from_pretrained("${e.id}")`],B1=e=>[`# Install from https://github.com/Camb-ai/MARS5-TTS

from inference import Mars5TTS
mars5 = Mars5TTS.from_pretrained("${e.id}")`],H1=e=>[`# Install from https://github.com/pq-yang/MatAnyone.git

from matanyone.model.matanyone import MatAnyone
model = MatAnyone.from_pretrained("${e.id}")`,`
from matanyone import InferenceCore
processor = InferenceCore("${e.id}")`],V1=()=>[`# Install from https://github.com/buaacyw/MeshAnything.git

from MeshAnything.models.meshanything import MeshAnything

# refer to https://github.com/buaacyw/MeshAnything/blob/main/main.py#L91 on how to define args
# and https://github.com/buaacyw/MeshAnything/blob/main/app.py regarding usage
model = MeshAnything(args)`],z1=e=>[`import open_clip

model, preprocess_train, preprocess_val = open_clip.create_model_and_transforms('hf-hub:${e.id}')
tokenizer = open_clip.get_tokenizer('hf-hub:${e.id}')`],q1=e=>{var t,n;if((n=(t=e.config)==null?void 0:t.architectures)!=null&&n[0]){const r=e.config.architectures[0];return[[`from paddlenlp.transformers import AutoTokenizer, ${r}`,"",`tokenizer = AutoTokenizer.from_pretrained("${e.id}", from_hf_hub=True)`,`model = ${r}.from_pretrained("${e.id}", from_hf_hub=True)`].join(`
`)]}else return[["# ⚠️ Type of model unknown","from paddlenlp.transformers import AutoTokenizer, AutoModel","",`tokenizer = AutoTokenizer.from_pretrained("${e.id}", from_hf_hub=True)`,`model = AutoModel.from_pretrained("${e.id}", from_hf_hub=True)`].join(`
`)]},W1=e=>{const t=`# Use PE-Core models as CLIP models
import core.vision_encoder.pe as pe

model = pe.CLIP.from_config("${e.id}", pretrained=True)`,n=`# Use any PE model as a vision encoder
import core.vision_encoder.pe as pe

model = pe.VisionTransformer.from_config("${e.id}", pretrained=True)`;return e.id.includes("Core")?[t,n]:[n]},K1=e=>[`from huggingface_hub import snapshot_download
from phantom_wan import WANI2V, configs

checkpoint_dir = snapshot_download("${e.id}")
wan_i2v = WanI2V(
            config=configs.WAN_CONFIGS['i2v-14B'],
            checkpoint_dir=checkpoint_dir,
        )
 video = wan_i2v.generate(text_prompt, image_prompt)`],Q1=e=>[`from pyannote.audio import Pipeline
  
pipeline = Pipeline.from_pretrained("${e.id}")

# inference on the whole file
pipeline("file.wav")

# inference on an excerpt
from pyannote.core import Segment
excerpt = Segment(start=2.0, end=5.0)

from pyannote.audio import Audio
waveform, sample_rate = Audio().crop("file.wav", excerpt)
pipeline({"waveform": waveform, "sample_rate": sample_rate})`],X1=e=>[`from pyannote.audio import Model, Inference

model = Model.from_pretrained("${e.id}")
inference = Inference(model)

# inference on the whole file
inference("file.wav")

# inference on an excerpt
from pyannote.core import Segment
excerpt = Segment(start=2.0, end=5.0)
inference.crop("file.wav", excerpt)`],J1=e=>e.tags.includes("pyannote-audio-pipeline")?Q1(e):X1(e),Y1=e=>[`from relik import Relik
 
relik = Relik.from_pretrained("${e.id}")`],Z1=e=>[`from tensorflow_tts.inference import AutoProcessor, TFAutoModel

processor = AutoProcessor.from_pretrained("${e.id}")
model = TFAutoModel.from_pretrained("${e.id}")
`],G1=e=>[`from tensorflow_tts.inference import TFAutoModel

model = TFAutoModel.from_pretrained("${e.id}")
audios = model.inference(mels)
`],eI=e=>[`from tensorflow_tts.inference import TFAutoModel

model = TFAutoModel.from_pretrained("${e.id}")
`],tI=e=>e.tags.includes("text-to-mel")?Z1(e):e.tags.includes("mel-to-wav")?G1(e):eI(e),nI=e=>[`import timm

model = timm.create_model("hf_hub:${e.id}", pretrained=True)`],rI=()=>[`# pip install sae-lens
from sae_lens import SAE

sae, cfg_dict, sparsity = SAE.from_pretrained(
    release = "RELEASE_ID", # e.g., "gpt2-small-res-jb". See other options in https://github.com/jbloomAus/SAELens/blob/main/sae_lens/pretrained_saes.yaml
    sae_id = "SAE_ID", # e.g., "blocks.8.hook_resid_pre". Won't always be a hook point
)`],iI=()=>[`# seed_story_cfg_path refers to 'https://github.com/TencentARC/SEED-Story/blob/master/configs/clm_models/agent_7b_sft.yaml'
# llm_cfg_path refers to 'https://github.com/TencentARC/SEED-Story/blob/master/configs/clm_models/llama2chat7b_lora.yaml'
from omegaconf import OmegaConf
import hydra

# load Llama2
llm_cfg = OmegaConf.load(llm_cfg_path)
llm = hydra.utils.instantiate(llm_cfg, torch_dtype="fp16")

# initialize seed_story
seed_story_cfg = OmegaConf.load(seed_story_cfg_path)
seed_story = hydra.utils.instantiate(seed_story_cfg, llm=llm) `],oI=(e,t)=>[`import joblib
from skops.hub_utils import download
download("${e.id}", "path_to_folder")
model = joblib.load(
	"${t}"
)
# only load pickle files from sources you trust
# read more about it here https://skops.readthedocs.io/en/stable/persistence.html`],aI=(e,t)=>[`from skops.hub_utils import download
from skops.io import load
download("${e.id}", "path_to_folder")
# make sure model file is in skops format
# if model is a pickle file, make sure it's from a source you trust
model = load("path_to_folder/${t}")`],sI=e=>[`from huggingface_hub import hf_hub_download
import joblib
model = joblib.load(
	hf_hub_download("${e.id}", "sklearn_model.joblib")
)
# only load pickle files from sources you trust
# read more about it here https://skops.readthedocs.io/en/stable/persistence.html`],lI=e=>{var t,n,r,i,o;if(e.tags.includes("skops")){const a=(r=(n=(t=e.config)==null?void 0:t.sklearn)==null?void 0:n.model)==null?void 0:r.file,s=(o=(i=e.config)==null?void 0:i.sklearn)==null?void 0:o.model_format;return a?s==="pickle"?oI(e,a):aI(e,a):["# ⚠️ Model filename not specified in config.json"]}else return sI(e)},cI=e=>[`import torch
import torchaudio
from einops import rearrange
from stable_audio_tools import get_pretrained_model
from stable_audio_tools.inference.generation import generate_diffusion_cond

device = "cuda" if torch.cuda.is_available() else "cpu"

# Download model
model, model_config = get_pretrained_model("${e.id}")
sample_rate = model_config["sample_rate"]
sample_size = model_config["sample_size"]

model = model.to(device)

# Set up text and timing conditioning
conditioning = [{
	"prompt": "128 BPM tech house drum loop",
}]

# Generate stereo audio
output = generate_diffusion_cond(
	model,
	conditioning=conditioning,
	sample_size=sample_size,
	device=device
)

# Rearrange audio batch to a single sequence
output = rearrange(output, "b d n -> d (b n)")

# Peak normalize, clip, convert to int16, and save to file
output = output.to(torch.float32).div(torch.max(torch.abs(output))).clamp(-1, 1).mul(32767).to(torch.int16).cpu()
torchaudio.save("output.wav", output, sample_rate)`],uI=e=>[`from huggingface_hub import from_pretrained_fastai

learn = from_pretrained_fastai("${e.id}")`],dI=e=>{const t=`# Use SAM2 with images
import torch
from sam2.sam2_image_predictor import SAM2ImagePredictor

predictor = SAM2ImagePredictor.from_pretrained(${e.id})

with torch.inference_mode(), torch.autocast("cuda", dtype=torch.bfloat16):
    predictor.set_image(<your_image>)
    masks, _, _ = predictor.predict(<input_prompts>)`,n=`# Use SAM2 with videos
import torch
from sam2.sam2_video_predictor import SAM2VideoPredictor
	
predictor = SAM2VideoPredictor.from_pretrained(${e.id})

with torch.inference_mode(), torch.autocast("cuda", dtype=torch.bfloat16):
    state = predictor.init_state(<your_video>)

    # add new prompts and instantly get the output on the same frame
    frame_idx, object_ids, masks = predictor.add_new_points(state, <your_prompts>):

    # propagate the prompts to get masklets throughout the video
    for frame_idx, object_ids, masks in predictor.propagate_in_video(state):
        ...`;return[t,n]},pI=e=>[`python -m sample_factory.huggingface.load_from_hub -r ${e.id} -d ./train_dir`];function fI(e){var n,r;const t=(n=e.widgetData)==null?void 0:n[0];if(t!=null&&t.source_sentence&&((r=t==null?void 0:t.sentences)!=null&&r.length))return[t.source_sentence,...t.sentences]}const mI=e=>{const t=e.tags.includes(zm)?", trust_remote_code=True":"";if(e.tags.includes("cross-encoder")||e.pipeline_tag=="text-ranking")return[`from sentence_transformers import CrossEncoder

model = CrossEncoder("${e.id}"${t})

query = "Which planet is known as the Red Planet?"
passages = [
	"Venus is often called Earth's twin because of its similar size and proximity.",
	"Mars, known for its reddish appearance, is often referred to as the Red Planet.",
	"Jupiter, the largest planet in our solar system, has a prominent red spot.",
	"Saturn, famous for its rings, is sometimes mistaken for the Red Planet."
]

scores = model.predict([(query, passage) for passage in passages])
print(scores)`];const n=fI(e)??["The weather is lovely today.","It's so sunny outside!","He drove to the stadium."];return[`from sentence_transformers import SentenceTransformer

model = SentenceTransformer("${e.id}"${t})

sentences = ${JSON.stringify(n,null,4)}
embeddings = model.encode(sentences)

similarities = model.similarity(embeddings, embeddings)
print(similarities.shape)
# [${n.length}, ${n.length}]`]},hI=e=>[`from setfit import SetFitModel

model = SetFitModel.from_pretrained("${e.id}")`],gI=e=>[`!pip install https://huggingface.co/${e.id}/resolve/main/${tn(e.id)}-any-py3-none-any.whl

# Using spacy.load().
import spacy
nlp = spacy.load("${tn(e.id)}")

# Importing as module.
import ${tn(e.id)}
nlp = ${tn(e.id)}.load()`],yI=e=>[`from span_marker import SpanMarkerModel

model = SpanMarkerModel.from_pretrained("${e.id}")`],vI=e=>[`import stanza

stanza.download("${tn(e.id).replace("stanza-","")}")
nlp = stanza.Pipeline("${tn(e.id).replace("stanza-","")}")`],wI=e=>{switch(e){case"EncoderClassifier":return"classify_file";case"EncoderDecoderASR":case"EncoderASR":return"transcribe_file";case"SpectralMaskEnhancement":return"enhance_file";case"SepformerSeparation":return"separate_file";default:return}},_I=e=>{var r,i;const t=(i=(r=e.config)==null?void 0:r.speechbrain)==null?void 0:i.speechbrain_interface;if(t===void 0)return["# interface not specified in config.json"];const n=wI(t);return n===void 0?["# interface in config.json invalid"]:[`from speechbrain.pretrained import ${t}
model = ${t}.from_hparams(
  "${e.id}"
)
model.${n}("file.wav")`]},bI=e=>[`from terratorch.registry import BACKBONE_REGISTRY

model = BACKBONE_REGISTRY.build("${e.id}")`],kI=e=>{var i;const t=e.transformersInfo;if(!t)return["# ⚠️ Type of model unknown"];const n=e.tags.includes(zm)?", trust_remote_code=True":"";let r;if(t.processor){const o=t.processor==="AutoTokenizer"?"tokenizer":t.processor==="AutoFeatureExtractor"?"extractor":"processor";r=["# Load model directly",`from transformers import ${t.processor}, ${t.auto_model}`,"",`${o} = ${t.processor}.from_pretrained("${e.id}"`+n+")",`model = ${t.auto_model}.from_pretrained("${e.id}"`+n+")"].join(`
`)}else r=["# Load model directly",`from transformers import ${t.auto_model}`,`model = ${t.auto_model}.from_pretrained("${e.id}"`+n+")"].join(`
`);if(e.pipeline_tag&&((i=vx.transformers)!=null&&i.includes(e.pipeline_tag))){const o=["# Use a pipeline as a high-level helper","from transformers import pipeline","",`pipe = pipeline("${e.pipeline_tag}", model="${e.id}"`+n+")"];return e.tags.includes("conversational")?e.tags.includes("image-text-to-text")?(o.push("messages = [",["    {",'        "role": "user",','        "content": [','            {"type": "image", "url": "https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/p-blog/candy.JPG"},','            {"type": "text", "text": "What animal is on the candy?"}',"        ]","    },"].join(`
`),"]"),o.push("pipe(text=messages)")):(o.push("messages = [",'    {"role": "user", "content": "Who are you?"},',"]"),o.push("pipe(messages)")):e.pipeline_tag==="zero-shot-image-classification"?o.push("pipe(",'    "https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/parrots.png",','    candidate_labels=["animals", "humans", "landscape"],',")"):e.pipeline_tag==="image-classification"&&o.push('pipe("https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/hub/parrots.png")'),[o.join(`
`),r]}return[r]},xI=e=>{if(!e.pipeline_tag)return["// ⚠️ Unknown pipeline tag"];const t="@huggingface/transformers";return[`// npm i ${t}
import { pipeline } from '${t}';

// Allocate pipeline
const pipe = await pipeline('${e.pipeline_tag}', '${e.id}');`]},SI=e=>{switch(e){case"CAUSAL_LM":return"CausalLM";case"SEQ_2_SEQ_LM":return"Seq2SeqLM";case"TOKEN_CLS":return"TokenClassification";case"SEQ_CLS":return"SequenceClassification";default:return}},II=e=>{var i;const{base_model_name_or_path:t,task_type:n}=((i=e.config)==null?void 0:i.peft)??{},r=SI(n);return r?t?[`from peft import PeftModel
from transformers import AutoModelFor${r}

base_model = AutoModelFor${r}.from_pretrained("${t}")
model = PeftModel.from_pretrained(base_model, "${e.id}")`]:["Base model is not found."]:["Task type is invalid."]},AI=e=>[`from huggingface_hub import hf_hub_download
import fasttext

model = fasttext.load_model(hf_hub_download("${e.id}", "model.bin"))`],TI=e=>[`from huggingface_sb3 import load_from_hub
checkpoint = load_from_hub(
	repo_id="${e.id}",
	filename="{MODEL FILENAME}.zip",
)`],EI=(e,t)=>{switch(e){case"ASR":return[`import nemo.collections.asr as nemo_asr
asr_model = nemo_asr.models.ASRModel.from_pretrained("${t.id}")

transcriptions = asr_model.transcribe(["file.wav"])`];default:return}},CI=e=>[`mlagents-load-from-hf --repo-id="${e.id}" --local-dir="./download: string[]s"`],PI=()=>[`string modelName = "[Your model name here].sentis";
Model model = ModelLoader.Load(Application.streamingAssetsPath + "/" + modelName);
IWorker engine = WorkerFactory.CreateWorker(BackendType.GPUCompute, model);
// Please see provided C# file for more details
`],RI=e=>[`
# Load the model and infer image from text
import torch
from app.sana_pipeline import SanaPipeline
from torchvision.utils import save_image

sana = SanaPipeline("configs/sana_config/1024ms/Sana_1600M_img1024.yaml")
sana.from_pretrained("hf://${e.id}")

image = sana(
    prompt='a cyberpunk cat with a neon sign that says "Sana"',
    height=1024,
    width=1024,
    guidance_scale=5.0,
    pag_guidance_scale=2.0,
    num_inference_steps=18,
) `],NI=e=>[`from Trainer_finetune import Model

model = Model.from_pretrained("${e.id}")`],DI=e=>[`from voicecraft import VoiceCraft

model = VoiceCraft.from_pretrained("${e.id}")`],OI=()=>[`# !pip install git+https://github.com/fluxions-ai/vui

import torchaudio

from vui.inference import render
from vui.model import Vui,

model = Vui.from_pretrained().cuda()
waveform = render(
    model,
    "Hey, here is some random stuff, usually something quite long as the shorter the text the less likely the model can cope!",
)
print(waveform.shape)
torchaudio.save("out.opus", waveform[0], 22050)
`],LI=()=>[`import ChatTTS
import torchaudio

chat = ChatTTS.Chat()
chat.load_models(compile=False) # Set to True for better performance

texts = ["PUT YOUR TEXT HERE",]

wavs = chat.infer(texts, )

torchaudio.save("output1.wav", torch.from_numpy(wavs[0]), 24000)`],Cd=e=>{const t=e.tags.find(i=>i.match(/^yolov\d+$/)),n=t?`YOLOv${t.slice(4)}`:"YOLOvXX";return[(t?"":`# Couldn't find a valid YOLO version tag.
# Replace XX with the correct version.
`)+`from ultralytics import ${n}

model = ${n}.from_pretrained("${e.id}")
source = 'http://images.cocodataset.org/val2017/000000039769.jpg'
model.predict(source=source, save=True)`]},UI=e=>[`# Option 1: use with transformers

from transformers import AutoModelForImageSegmentation
birefnet = AutoModelForImageSegmentation.from_pretrained("${e.id}", trust_remote_code=True)
`,`# Option 2: use with BiRefNet

# Install from https://github.com/ZhengPeng7/BiRefNet

from models.birefnet import BiRefNet
model = BiRefNet.from_pretrained("${e.id}")`],MI=e=>[`from swarmformer import SwarmFormerModel

model = SwarmFormerModel.from_pretrained("${e.id}")
`],jI=e=>[`# Follow installation instructions at https://github.com/PKU-YuanGroup/UniWorld-V1

from univa.models.qwen2p5vl.modeling_univa_qwen2p5vl import UnivaQwen2p5VLForConditionalGeneration
	model = UnivaQwen2p5VLForConditionalGeneration.from_pretrained(
        "${e.id}",
        torch_dtype=torch.bfloat16,
        attn_implementation="flash_attention_2",
    ).to("cuda")
	processor = AutoProcessor.from_pretrained("${e.id}")
`],$I=e=>[`# Download the model from the Hub
pip install huggingface_hub[hf_xet]

huggingface-cli download --local-dir ${tn(e.id)} ${e.id}`],FI=e=>[`# Make sure mlx-lm is installed
# pip install --upgrade mlx-lm

# Generate text with mlx-lm
from mlx_lm import load, generate

model, tokenizer = load("${e.id}")

prompt = "Once upon a time in"
text = generate(model, tokenizer, prompt=prompt, verbose=True)`],BI=e=>[`# Make sure mlx-lm is installed
# pip install --upgrade mlx-lm

# Generate text with mlx-lm
from mlx_lm import load, generate

model, tokenizer = load("${e.id}")

prompt = "Write a story about Einstein"
messages = [{"role": "user", "content": prompt}]
prompt = tokenizer.apply_chat_template(
    messages, add_generation_prompt=True
)

text = generate(model, tokenizer, prompt=prompt, verbose=True)`],HI=e=>[`# Make sure mlx-vlm is installed
# pip install --upgrade mlx-vlm

from mlx_vlm import load, generate
from mlx_vlm.prompt_utils import apply_chat_template
from mlx_vlm.utils import load_config

# Load the model
model, processor = load("${e.id}")
config = load_config("${e.id}")

# Prepare input
image = ["http://images.cocodataset.org/val2017/000000039769.jpg"]
prompt = "Describe this image."

# Apply chat template
formatted_prompt = apply_chat_template(
    processor, config, prompt, num_images=1
)

# Generate output
output = generate(model, processor, formatted_prompt, image)
print(output)`],VI=e=>[`from mlxim.model import create_model

model = create_model(${e.id})`],zI=e=>e.pipeline_tag==="image-text-to-text"?HI(e):e.pipeline_tag==="text-generation"?e.tags.includes("conversational")?BI(e):FI(e):$I(e),qI=e=>[`from model2vec import StaticModel

model = StaticModel.from_pretrained("${e.id}")`],WI=e=>{let t;return e.tags.includes("automatic-speech-recognition")&&(t=EI("ASR",e)),t??["# tag did not correspond to a valid NeMo domain."]},KI=e=>{const t=e.tags??[];return t.includes("gguf")||t.includes("onnx")?[]:[`
  import outetts
  
  enum = outetts.Models("${e.id}".split("/", 1)[1])       # VERSION_1_0_SIZE_1B
  cfg  = outetts.ModelConfig.auto_config(enum, outetts.Backend.HF)
  tts  = outetts.Interface(cfg)
  
  speaker = tts.load_default_speaker("EN-FEMALE-1-NEUTRAL")
  tts.generate(
	  outetts.GenerationConfig(
		  text="Hello there, how are you doing?",
		  speaker=speaker,
	  )
  ).save("output.wav")
  `]},QI=e=>[`from pxia import AutoModel

model = AutoModel.from_pretrained("${e.id}")`],XI=e=>[`from pythae.models import AutoModel

model = AutoModel.load_from_hf_hub("${e.id}")`],JI=e=>[`from audiocraft.models import MusicGen

model = MusicGen.get_pretrained("${e.id}")

descriptions = ['happy rock', 'energetic EDM', 'sad jazz']
wav = model.generate(descriptions)  # generates 3 samples.`],YI=e=>[`from audiocraft.models import MAGNeT
	
model = MAGNeT.get_pretrained("${e.id}")

descriptions = ['disco beat', 'energetic EDM', 'funky groove']
wav = model.generate(descriptions)  # generates 3 samples.`],ZI=e=>[`from audiocraft.models import AudioGen
	
model = AudioGen.get_pretrained("${e.id}")
model.set_generation_params(duration=5)  # generate 5 seconds.
descriptions = ['dog barking', 'sirene of an emergency vehicle', 'footsteps in a corridor']
wav = model.generate(descriptions)  # generates 3 samples.`],GI=e=>[`from anemoi.inference.runners.default import DefaultRunner
from anemoi.inference.config.run import RunConfiguration
# Create Configuration
config = RunConfiguration(checkpoint = {"huggingface":"${e.id}"})
# Load Runner
runner = DefaultRunner(config)`],eA=e=>e.tags.includes("musicgen")?JI(e):e.tags.includes("audiogen")?ZI(e):e.tags.includes("magnet")?YI(e):["# Type of model unknown."],tA=()=>[`# Install CLI with Homebrew on macOS device
brew install whisperkit-cli

# View all available inference options
whisperkit-cli transcribe --help
	
# Download and run inference using whisper base model
whisperkit-cli transcribe --audio-path /path/to/audio.mp3

# Or use your preferred model variant
whisperkit-cli transcribe --model "large-v3" --model-prefix "distil" --audio-path /path/to/audio.mp3 --verbose`],nA=e=>[`from threedtopia_xl.models import threedtopia_xl

model = threedtopia_xl.from_pretrained("${e.id}")
model.generate(cond="path/to/image.png")`],rA=e=>[`# pip install git+https://github.com/Zyphra/Zonos.git
import torchaudio
from zonos.model import Zonos
from zonos.conditioning import make_cond_dict

model = Zonos.from_pretrained("${e.id}", device="cuda")

wav, sr = torchaudio.load("speaker.wav")           # 5-10s reference clip
speaker = model.make_speaker_embedding(wav, sr)

cond  = make_cond_dict(text="Hello, world!", speaker=speaker, language="en-us")
codes = model.generate(model.prepare_conditioning(cond))

audio = model.autoencoder.decode(codes)[0].cpu()
torchaudio.save("sample.wav", audio, model.autoencoder.sampling_rate)
`],iA={acestep:{prettyLabel:"ACE-Step",repoName:"ACE-Step",repoUrl:"https://github.com/ace-step/ACE-Step",filter:!1,countDownloads:'path:"ace_step_transformer/config.json"'},"adapter-transformers":{prettyLabel:"Adapters",repoName:"adapters",repoUrl:"https://github.com/Adapter-Hub/adapters",docsUrl:"https://huggingface.co/docs/hub/adapters",snippets:FS,filter:!0,countDownloads:'path:"adapter_config.json"'},allennlp:{prettyLabel:"AllenNLP",repoName:"AllenNLP",repoUrl:"https://github.com/allenai/allennlp",docsUrl:"https://huggingface.co/docs/hub/allennlp",snippets:VS,filter:!0},anemoi:{prettyLabel:"AnemoI",repoName:"AnemoI",repoUrl:"https://github.com/ecmwf/anemoi-inference",docsUrl:"https://anemoi.readthedocs.io/en/latest/",filter:!1,countDownloads:'path_extension:"ckpt"',snippets:GI},araclip:{prettyLabel:"AraClip",repoName:"AraClip",repoUrl:"https://huggingface.co/Arabic-Clip/araclip",filter:!1,snippets:zS},asteroid:{prettyLabel:"Asteroid",repoName:"Asteroid",repoUrl:"https://github.com/asteroid-team/asteroid",docsUrl:"https://huggingface.co/docs/hub/asteroid",snippets:qS,filter:!0,countDownloads:'path:"pytorch_model.bin"'},audiocraft:{prettyLabel:"Audiocraft",repoName:"audiocraft",repoUrl:"https://github.com/facebookresearch/audiocraft",snippets:eA,filter:!1,countDownloads:'path:"state_dict.bin"'},audioseal:{prettyLabel:"AudioSeal",repoName:"audioseal",repoUrl:"https://github.com/facebookresearch/audioseal",filter:!1,countDownloads:'path_extension:"pth"',snippets:WS},"bagel-mot":{prettyLabel:"Bagel",repoName:"Bagel",repoUrl:"https://github.com/ByteDance-Seed/Bagel/",filter:!1,countDownloads:'path:"llm_config.json"'},ben2:{prettyLabel:"BEN2",repoName:"BEN2",repoUrl:"https://github.com/PramaLLC/BEN2",snippets:KS,filter:!1},bertopic:{prettyLabel:"BERTopic",repoName:"BERTopic",repoUrl:"https://github.com/MaartenGr/BERTopic",snippets:QS,filter:!0},big_vision:{prettyLabel:"Big Vision",repoName:"big_vision",repoUrl:"https://github.com/google-research/big_vision",filter:!1,countDownloads:'path_extension:"npz"'},birder:{prettyLabel:"Birder",repoName:"Birder",repoUrl:"https://gitlab.com/birder/birder",filter:!1,countDownloads:'path_extension:"pt"'},birefnet:{prettyLabel:"BiRefNet",repoName:"BiRefNet",repoUrl:"https://github.com/ZhengPeng7/BiRefNet",snippets:UI,filter:!1},bm25s:{prettyLabel:"BM25S",repoName:"bm25s",repoUrl:"https://github.com/xhluca/bm25s",snippets:XS,filter:!1,countDownloads:'path:"params.index.json"'},champ:{prettyLabel:"Champ",repoName:"Champ",repoUrl:"https://github.com/fudan-generative-vision/champ",countDownloads:'path:"champ/motion_module.pth"'},chatterbox:{prettyLabel:"Chatterbox",repoName:"Chatterbox",repoUrl:"https://github.com/resemble-ai/chatterbox",snippets:JS,countDownloads:'path:"tokenizer.json"',filter:!1},chat_tts:{prettyLabel:"ChatTTS",repoName:"ChatTTS",repoUrl:"https://github.com/2noise/ChatTTS.git",snippets:LI,filter:!1,countDownloads:'path:"asset/GPT.pt"'},colpali:{prettyLabel:"ColPali",repoName:"ColPali",repoUrl:"https://github.com/ManuelFay/colpali",filter:!1,countDownloads:'path:"adapter_config.json"'},comet:{prettyLabel:"COMET",repoName:"COMET",repoUrl:"https://github.com/Unbabel/COMET/",countDownloads:'path:"hparams.yaml"'},contexttab:{prettyLabel:"ConTextTab",repoName:"ConTextTab",repoUrl:"https://github.com/SAP-samples/contexttab",countDownloads:'path_extension:"pt"',snippets:YS},cosmos:{prettyLabel:"Cosmos",repoName:"Cosmos",repoUrl:"https://github.com/NVIDIA/Cosmos",countDownloads:'path:"config.json" OR path_extension:"pt"'},"cxr-foundation":{prettyLabel:"CXR Foundation",repoName:"cxr-foundation",repoUrl:"https://github.com/google-health/cxr-foundation",snippets:ZS,filter:!1,countDownloads:'path:"precomputed_embeddings/embeddings.npz" OR path:"pax-elixr-b-text/saved_model.pb"'},deepforest:{prettyLabel:"DeepForest",repoName:"deepforest",docsUrl:"https://deepforest.readthedocs.io/en/latest/",repoUrl:"https://github.com/weecology/DeepForest"},"depth-anything-v2":{prettyLabel:"DepthAnythingV2",repoName:"Depth Anything V2",repoUrl:"https://github.com/DepthAnything/Depth-Anything-V2",snippets:GS,filter:!1,countDownloads:'path_extension:"pth"'},"depth-pro":{prettyLabel:"Depth Pro",repoName:"Depth Pro",repoUrl:"https://github.com/apple/ml-depth-pro",countDownloads:'path_extension:"pt"',snippets:e1,filter:!1},"derm-foundation":{prettyLabel:"Derm Foundation",repoName:"derm-foundation",repoUrl:"https://github.com/google-health/derm-foundation",snippets:t1,filter:!1,countDownloads:'path:"scin_dataset_precomputed_embeddings.npz" OR path:"saved_model.pb"'},"describe-anything":{prettyLabel:"Describe Anything",repoName:"Describe Anything",repoUrl:"https://github.com/NVlabs/describe-anything",snippets:r1,filter:!1},"dia-tts":{prettyLabel:"Dia",repoName:"Dia",repoUrl:"https://github.com/nari-labs/dia",snippets:n1,filter:!1},diffree:{prettyLabel:"Diffree",repoName:"Diffree",repoUrl:"https://github.com/OpenGVLab/Diffree",filter:!1,countDownloads:'path:"diffree-step=000010999.ckpt"'},diffusers:{prettyLabel:"Diffusers",repoName:"🤗/diffusers",repoUrl:"https://github.com/huggingface/diffusers",docsUrl:"https://huggingface.co/docs/hub/diffusers",snippets:f1,filter:!0},diffusionkit:{prettyLabel:"DiffusionKit",repoName:"DiffusionKit",repoUrl:"https://github.com/argmaxinc/DiffusionKit",snippets:m1},doctr:{prettyLabel:"docTR",repoName:"doctr",repoUrl:"https://github.com/mindee/doctr"},cartesia_pytorch:{prettyLabel:"Cartesia Pytorch",repoName:"Cartesia Pytorch",repoUrl:"https://github.com/cartesia-ai/cartesia_pytorch",snippets:h1},cartesia_mlx:{prettyLabel:"Cartesia MLX",repoName:"Cartesia MLX",repoUrl:"https://github.com/cartesia-ai/cartesia_mlx",snippets:g1},clipscope:{prettyLabel:"clipscope",repoName:"clipscope",repoUrl:"https://github.com/Lewington-pitsos/clipscope",filter:!1,countDownloads:'path_extension:"pt"'},cosyvoice:{prettyLabel:"CosyVoice",repoName:"CosyVoice",repoUrl:"https://github.com/FunAudioLLM/CosyVoice",filter:!1,countDownloads:'path_extension:"onnx" OR path_extension:"pt"'},cotracker:{prettyLabel:"CoTracker",repoName:"CoTracker",repoUrl:"https://github.com/facebookresearch/co-tracker",filter:!1,countDownloads:'path_extension:"pth"'},edsnlp:{prettyLabel:"EDS-NLP",repoName:"edsnlp",repoUrl:"https://github.com/aphp/edsnlp",docsUrl:"https://aphp.github.io/edsnlp/latest/",filter:!1,snippets:y1,countDownloads:'path_filename:"config" AND path_extension:"cfg"'},elm:{prettyLabel:"ELM",repoName:"elm",repoUrl:"https://github.com/slicex-ai/elm",filter:!1,countDownloads:'path_filename:"slicex_elm_config" AND path_extension:"json"'},espnet:{prettyLabel:"ESPnet",repoName:"ESPnet",repoUrl:"https://github.com/espnet/espnet",docsUrl:"https://huggingface.co/docs/hub/espnet",snippets:b1,filter:!0},fairseq:{prettyLabel:"Fairseq",repoName:"fairseq",repoUrl:"https://github.com/pytorch/fairseq",snippets:k1,filter:!0},fastai:{prettyLabel:"fastai",repoName:"fastai",repoUrl:"https://github.com/fastai/fastai",docsUrl:"https://huggingface.co/docs/hub/fastai",snippets:uI,filter:!0},fasttext:{prettyLabel:"fastText",repoName:"fastText",repoUrl:"https://fasttext.cc/",snippets:AI,filter:!0,countDownloads:'path_extension:"bin"'},flair:{prettyLabel:"Flair",repoName:"Flair",repoUrl:"https://github.com/flairNLP/flair",docsUrl:"https://huggingface.co/docs/hub/flair",snippets:x1,filter:!0,countDownloads:'path:"pytorch_model.bin"'},"gemma.cpp":{prettyLabel:"gemma.cpp",repoName:"gemma.cpp",repoUrl:"https://github.com/google/gemma.cpp",filter:!1,countDownloads:'path_extension:"sbs"'},"geometry-crafter":{prettyLabel:"GeometryCrafter",repoName:"GeometryCrafter",repoUrl:"https://github.com/TencentARC/GeometryCrafter",countDownloads:'path:"point_map_vae/diffusion_pytorch_model.safetensors"'},gliner:{prettyLabel:"GLiNER",repoName:"GLiNER",repoUrl:"https://github.com/urchade/GLiNER",snippets:S1,filter:!1,countDownloads:'path:"gliner_config.json"'},"glyph-byt5":{prettyLabel:"Glyph-ByT5",repoName:"Glyph-ByT5",repoUrl:"https://github.com/AIGText/Glyph-ByT5",filter:!1,countDownloads:'path:"checkpoints/byt5_model.pt"'},grok:{prettyLabel:"Grok",repoName:"Grok",repoUrl:"https://github.com/xai-org/grok-1",filter:!1,countDownloads:'path:"ckpt/tensor00000_000" OR path:"ckpt-0/tensor00000_000"'},hallo:{prettyLabel:"Hallo",repoName:"Hallo",repoUrl:"https://github.com/fudan-generative-vision/hallo",countDownloads:'path:"hallo/net.pth"'},hezar:{prettyLabel:"Hezar",repoName:"Hezar",repoUrl:"https://github.com/hezarai/hezar",docsUrl:"https://hezarai.github.io/hezar",countDownloads:'path:"model_config.yaml" OR path:"embedding/embedding_config.yaml"'},htrflow:{prettyLabel:"HTRflow",repoName:"HTRflow",repoUrl:"https://github.com/AI-Riksarkivet/htrflow",docsUrl:"https://ai-riksarkivet.github.io/htrflow",snippets:A1},"hunyuan-dit":{prettyLabel:"HunyuanDiT",repoName:"HunyuanDiT",repoUrl:"https://github.com/Tencent/HunyuanDiT",countDownloads:'path:"pytorch_model_ema.pt" OR path:"pytorch_model_distill.pt"'},"hunyuan3d-2":{prettyLabel:"Hunyuan3D-2",repoName:"Hunyuan3D-2",repoUrl:"https://github.com/Tencent/Hunyuan3D-2",countDownloads:'path_filename:"model_index" OR path_filename:"config"'},imstoucan:{prettyLabel:"IMS Toucan",repoName:"IMS-Toucan",repoUrl:"https://github.com/DigitalPhonetics/IMS-Toucan",countDownloads:'path:"embedding_gan.pt" OR path:"Vocoder.pt" OR path:"ToucanTTS.pt"'},"index-tts":{prettyLabel:"IndexTTS",repoName:"IndexTTS",repoUrl:"https://github.com/index-tts/index-tts",snippets:I1,filter:!1},"infinite-you":{prettyLabel:"InfiniteYou",repoName:"InfiniteYou",repoUrl:"https://github.com/bytedance/InfiniteYou",filter:!1,countDownloads:'path:"infu_flux_v1.0/sim_stage1/image_proj_model.bin" OR path:"infu_flux_v1.0/aes_stage2/image_proj_model.bin"'},keras:{prettyLabel:"Keras",repoName:"Keras",repoUrl:"https://github.com/keras-team/keras",docsUrl:"https://huggingface.co/docs/hub/keras",snippets:T1,filter:!0,countDownloads:'path:"config.json" OR path_extension:"keras"'},"tf-keras":{prettyLabel:"TF-Keras",repoName:"TF-Keras",repoUrl:"https://github.com/keras-team/tf-keras",docsUrl:"https://huggingface.co/docs/hub/tf-keras",snippets:$1,countDownloads:'path:"saved_model.pb"'},"keras-hub":{prettyLabel:"KerasHub",repoName:"KerasHub",repoUrl:"https://github.com/keras-team/keras-hub",docsUrl:"https://keras.io/keras_hub/",snippets:O1,filter:!0},"kimi-audio":{prettyLabel:"KimiAudio",repoName:"KimiAudio",repoUrl:"https://github.com/MoonshotAI/Kimi-Audio",snippets:L1,filter:!1},k2:{prettyLabel:"K2",repoName:"k2",repoUrl:"https://github.com/k2-fsa/k2"},"lightning-ir":{prettyLabel:"Lightning IR",repoName:"Lightning IR",repoUrl:"https://github.com/webis-de/lightning-ir",snippets:U1},"litert-lm":{prettyLabel:"LiteRT-LM",repoName:"LiteRT-LM",repoUrl:"https://github.com/google-ai-edge/LiteRT-LM",filter:!1,countDownloads:'path_extension:"litertlm"'},lerobot:{prettyLabel:"LeRobot",repoName:"LeRobot",repoUrl:"https://github.com/huggingface/lerobot",docsUrl:"https://huggingface.co/docs/lerobot",filter:!1,snippets:j1},liveportrait:{prettyLabel:"LivePortrait",repoName:"LivePortrait",repoUrl:"https://github.com/KwaiVGI/LivePortrait",filter:!1,countDownloads:'path:"liveportrait/landmark.onnx"'},"llama-cpp-python":{prettyLabel:"llama-cpp-python",repoName:"llama-cpp-python",repoUrl:"https://github.com/abetlen/llama-cpp-python",snippets:M1},"mini-omni2":{prettyLabel:"Mini-Omni2",repoName:"Mini-Omni2",repoUrl:"https://github.com/gpt-omni/mini-omni2",countDownloads:'path:"model_config.yaml"'},mindspore:{prettyLabel:"MindSpore",repoName:"mindspore",repoUrl:"https://github.com/mindspore-ai/mindspore"},"magi-1":{prettyLabel:"MAGI-1",repoName:"MAGI-1",repoUrl:"https://github.com/SandAI-org/MAGI-1",countDownloads:'path:"ckpt/vae/config.json"'},"mamba-ssm":{prettyLabel:"MambaSSM",repoName:"MambaSSM",repoUrl:"https://github.com/state-spaces/mamba",filter:!1,snippets:F1},"mars5-tts":{prettyLabel:"MARS5-TTS",repoName:"MARS5-TTS",repoUrl:"https://github.com/Camb-ai/MARS5-TTS",filter:!1,countDownloads:'path:"mars5_ar.safetensors"',snippets:B1},matanyone:{prettyLabel:"MatAnyone",repoName:"MatAnyone",repoUrl:"https://github.com/pq-yang/MatAnyone",snippets:H1,filter:!1},"mesh-anything":{prettyLabel:"MeshAnything",repoName:"MeshAnything",repoUrl:"https://github.com/buaacyw/MeshAnything",filter:!1,countDownloads:'path:"MeshAnything_350m.pth"',snippets:V1},merlin:{prettyLabel:"Merlin",repoName:"Merlin",repoUrl:"https://github.com/StanfordMIMI/Merlin",filter:!1,countDownloads:'path_extension:"pt"'},medvae:{prettyLabel:"MedVAE",repoName:"MedVAE",repoUrl:"https://github.com/StanfordMIMI/MedVAE",filter:!1,countDownloads:'path_extension:"ckpt"'},mitie:{prettyLabel:"MITIE",repoName:"MITIE",repoUrl:"https://github.com/mit-nlp/MITIE",countDownloads:'path_filename:"total_word_feature_extractor"'},"ml-agents":{prettyLabel:"ml-agents",repoName:"ml-agents",repoUrl:"https://github.com/Unity-Technologies/ml-agents",docsUrl:"https://huggingface.co/docs/hub/ml-agents",snippets:CI,filter:!0,countDownloads:'path_extension:"onnx"'},mlx:{prettyLabel:"MLX",repoName:"MLX",repoUrl:"https://github.com/ml-explore/mlx-examples/tree/main",snippets:zI,filter:!0},"mlx-image":{prettyLabel:"mlx-image",repoName:"mlx-image",repoUrl:"https://github.com/riccardomusmeci/mlx-image",docsUrl:"https://huggingface.co/docs/hub/mlx-image",snippets:VI,filter:!1,countDownloads:'path:"model.safetensors"'},"mlc-llm":{prettyLabel:"MLC-LLM",repoName:"MLC-LLM",repoUrl:"https://github.com/mlc-ai/mlc-llm",docsUrl:"https://llm.mlc.ai/docs/",filter:!1,countDownloads:'path:"mlc-chat-config.json"'},model2vec:{prettyLabel:"Model2Vec",repoName:"model2vec",repoUrl:"https://github.com/MinishLab/model2vec",snippets:qI,filter:!1},moshi:{prettyLabel:"Moshi",repoName:"Moshi",repoUrl:"https://github.com/kyutai-labs/moshi",filter:!1,countDownloads:'path:"tokenizer-e351c8d8-checkpoint125.safetensors"'},nemo:{prettyLabel:"NeMo",repoName:"NeMo",repoUrl:"https://github.com/NVIDIA/NeMo",snippets:WI,filter:!0,countDownloads:'path_extension:"nemo" OR path:"model_config.yaml"'},"open-oasis":{prettyLabel:"open-oasis",repoName:"open-oasis",repoUrl:"https://github.com/etched-ai/open-oasis",countDownloads:'path:"oasis500m.safetensors"'},open_clip:{prettyLabel:"OpenCLIP",repoName:"OpenCLIP",repoUrl:"https://github.com/mlfoundations/open_clip",snippets:z1,filter:!0,countDownloads:`path:"open_clip_model.safetensors"
			OR path:"model.safetensors"
			OR path:"open_clip_pytorch_model.bin"
			OR path:"pytorch_model.bin"`},"open-sora":{prettyLabel:"Open-Sora",repoName:"Open-Sora",repoUrl:"https://github.com/hpcaitech/Open-Sora",filter:!1,countDownloads:'path:"Open_Sora_v2.safetensors"'},outetts:{prettyLabel:"OuteTTS",repoName:"OuteTTS",repoUrl:"https://github.com/edwko/OuteTTS",snippets:KI,filter:!1},paddlenlp:{prettyLabel:"paddlenlp",repoName:"PaddleNLP",repoUrl:"https://github.com/PaddlePaddle/PaddleNLP",docsUrl:"https://huggingface.co/docs/hub/paddlenlp",snippets:q1,filter:!0,countDownloads:'path:"model_config.json"'},peft:{prettyLabel:"PEFT",repoName:"PEFT",repoUrl:"https://github.com/huggingface/peft",snippets:II,filter:!0,countDownloads:'path:"adapter_config.json"'},"perception-encoder":{prettyLabel:"PerceptionEncoder",repoName:"PerceptionModels",repoUrl:"https://github.com/facebookresearch/perception_models",filter:!1,snippets:W1,countDownloads:'path_extension:"pt"'},"phantom-wan":{prettyLabel:"Phantom",repoName:"Phantom",repoUrl:"https://github.com/Phantom-video/Phantom",snippets:K1,filter:!1,countDownloads:'path_extension:"pth"'},pxia:{prettyLabel:"pxia",repoName:"pxia",repoUrl:"https://github.com/not-lain/pxia",snippets:QI,filter:!1},"pyannote-audio":{prettyLabel:"pyannote.audio",repoName:"pyannote-audio",repoUrl:"https://github.com/pyannote/pyannote-audio",snippets:J1,filter:!0},"py-feat":{prettyLabel:"Py-Feat",repoName:"Py-Feat",repoUrl:"https://github.com/cosanlab/py-feat",docsUrl:"https://py-feat.org/",filter:!1},pythae:{prettyLabel:"pythae",repoName:"pythae",repoUrl:"https://github.com/clementchadebec/benchmark_VAE",snippets:XI,filter:!1},recurrentgemma:{prettyLabel:"RecurrentGemma",repoName:"recurrentgemma",repoUrl:"https://github.com/google-deepmind/recurrentgemma",filter:!1,countDownloads:'path:"tokenizer.model"'},relik:{prettyLabel:"Relik",repoName:"Relik",repoUrl:"https://github.com/SapienzaNLP/relik",snippets:Y1,filter:!1},refiners:{prettyLabel:"Refiners",repoName:"Refiners",repoUrl:"https://github.com/finegrain-ai/refiners",docsUrl:"https://refine.rs/",filter:!1,countDownloads:'path:"model.safetensors"'},reverb:{prettyLabel:"Reverb",repoName:"Reverb",repoUrl:"https://github.com/revdotcom/reverb",filter:!1},saelens:{prettyLabel:"SAELens",repoName:"SAELens",repoUrl:"https://github.com/jbloomAus/SAELens",snippets:rI,filter:!1},sam2:{prettyLabel:"sam2",repoName:"sam2",repoUrl:"https://github.com/facebookresearch/segment-anything-2",filter:!1,snippets:dI,countDownloads:'path_extension:"pt"'},"sample-factory":{prettyLabel:"sample-factory",repoName:"sample-factory",repoUrl:"https://github.com/alex-petrenko/sample-factory",docsUrl:"https://huggingface.co/docs/hub/sample-factory",snippets:pI,filter:!0,countDownloads:'path:"cfg.json"'},sapiens:{prettyLabel:"sapiens",repoName:"sapiens",repoUrl:"https://github.com/facebookresearch/sapiens",filter:!1,countDownloads:'path_extension:"pt2" OR path_extension:"pth" OR path_extension:"onnx"'},seedvr:{prettyLabel:"SeedVR",repoName:"SeedVR",repoUrl:"https://github.com/ByteDance-Seed/SeedVR",filter:!1,countDownloads:'path_extension:"pth"'},"sentence-transformers":{prettyLabel:"sentence-transformers",repoName:"sentence-transformers",repoUrl:"https://github.com/UKPLab/sentence-transformers",docsUrl:"https://huggingface.co/docs/hub/sentence-transformers",snippets:mI,filter:!0},setfit:{prettyLabel:"setfit",repoName:"setfit",repoUrl:"https://github.com/huggingface/setfit",docsUrl:"https://huggingface.co/docs/hub/setfit",snippets:hI,filter:!0},sklearn:{prettyLabel:"Scikit-learn",repoName:"Scikit-learn",repoUrl:"https://github.com/scikit-learn/scikit-learn",snippets:lI,filter:!0,countDownloads:'path:"sklearn_model.joblib"'},spacy:{prettyLabel:"spaCy",repoName:"spaCy",repoUrl:"https://github.com/explosion/spaCy",docsUrl:"https://huggingface.co/docs/hub/spacy",snippets:gI,filter:!0,countDownloads:'path_extension:"whl"'},"span-marker":{prettyLabel:"SpanMarker",repoName:"SpanMarkerNER",repoUrl:"https://github.com/tomaarsen/SpanMarkerNER",docsUrl:"https://huggingface.co/docs/hub/span_marker",snippets:yI,filter:!0},speechbrain:{prettyLabel:"speechbrain",repoName:"speechbrain",repoUrl:"https://github.com/speechbrain/speechbrain",docsUrl:"https://huggingface.co/docs/hub/speechbrain",snippets:_I,filter:!0,countDownloads:'path:"hyperparams.yaml"'},"ssr-speech":{prettyLabel:"SSR-Speech",repoName:"SSR-Speech",repoUrl:"https://github.com/WangHelin1997/SSR-Speech",filter:!1,countDownloads:'path_extension:".pth"'},"stable-audio-tools":{prettyLabel:"Stable Audio Tools",repoName:"stable-audio-tools",repoUrl:"https://github.com/Stability-AI/stable-audio-tools.git",filter:!1,countDownloads:'path:"model.safetensors"',snippets:cI},monkeyocr:{prettyLabel:"MonkeyOCR",repoName:"monkeyocr",repoUrl:"https://github.com/Yuliang-Liu/MonkeyOCR",filter:!1,countDownloads:'path:"Recognition/config.json"'},"diffusion-single-file":{prettyLabel:"Diffusion Single File",repoName:"diffusion-single-file",repoUrl:"https://github.com/comfyanonymous/ComfyUI",filter:!1,countDownloads:'path_extension:"safetensors"'},"seed-story":{prettyLabel:"SEED-Story",repoName:"SEED-Story",repoUrl:"https://github.com/TencentARC/SEED-Story",filter:!1,countDownloads:'path:"cvlm_llama2_tokenizer/tokenizer.model"',snippets:iI},soloaudio:{prettyLabel:"SoloAudio",repoName:"SoloAudio",repoUrl:"https://github.com/WangHelin1997/SoloAudio",filter:!1,countDownloads:'path:"soloaudio_v2.pt"'},"stable-baselines3":{prettyLabel:"stable-baselines3",repoName:"stable-baselines3",repoUrl:"https://github.com/huggingface/huggingface_sb3",docsUrl:"https://huggingface.co/docs/hub/stable-baselines3",snippets:TI,filter:!0,countDownloads:'path_extension:"zip"'},stanza:{prettyLabel:"Stanza",repoName:"stanza",repoUrl:"https://github.com/stanfordnlp/stanza",docsUrl:"https://huggingface.co/docs/hub/stanza",snippets:vI,filter:!0,countDownloads:'path:"models/default.zip"'},swarmformer:{prettyLabel:"SwarmFormer",repoName:"SwarmFormer",repoUrl:"https://github.com/takara-ai/SwarmFormer",snippets:MI,filter:!1},"f5-tts":{prettyLabel:"F5-TTS",repoName:"F5-TTS",repoUrl:"https://github.com/SWivid/F5-TTS",filter:!1,countDownloads:'path_extension:"safetensors" OR path_extension:"pt"'},genmo:{prettyLabel:"Genmo",repoName:"Genmo",repoUrl:"https://github.com/genmoai/models",filter:!1,countDownloads:'path:"vae_stats.json"'},"tencent-song-generation":{prettyLabel:"SongGeneration",repoName:"SongGeneration",repoUrl:"https://github.com/tencent-ailab/songgeneration",filter:!1,countDownloads:'path:"ckpt/songgeneration_base/model.pt"'},tensorflowtts:{prettyLabel:"TensorFlowTTS",repoName:"TensorFlowTTS",repoUrl:"https://github.com/TensorSpeech/TensorFlowTTS",snippets:tI},tabpfn:{prettyLabel:"TabPFN",repoName:"TabPFN",repoUrl:"https://github.com/PriorLabs/TabPFN"},terratorch:{prettyLabel:"TerraTorch",repoName:"TerraTorch",repoUrl:"https://github.com/IBM/terratorch",docsUrl:"https://ibm.github.io/terratorch/",filter:!1,countDownloads:'path_extension:"pt"',snippets:bI},"tic-clip":{prettyLabel:"TiC-CLIP",repoName:"TiC-CLIP",repoUrl:"https://github.com/apple/ml-tic-clip",filter:!1,countDownloads:'path_extension:"pt" AND path_prefix:"checkpoints/"'},timesfm:{prettyLabel:"TimesFM",repoName:"timesfm",repoUrl:"https://github.com/google-research/timesfm",filter:!1,countDownloads:'path:"checkpoints/checkpoint_1100000/state/checkpoint" OR path:"checkpoints/checkpoint_2150000/state/checkpoint" OR path_extension:"ckpt"'},timm:{prettyLabel:"timm",repoName:"pytorch-image-models",repoUrl:"https://github.com/rwightman/pytorch-image-models",docsUrl:"https://huggingface.co/docs/hub/timm",snippets:nI,filter:!0,countDownloads:'path:"pytorch_model.bin" OR path:"model.safetensors"'},tirex:{prettyLabel:"TiRex",repoName:"TiRex",repoUrl:"https://github.com/NX-AI/tirex",countDownloads:'path_extension:"ckpt"'},torchgeo:{prettyLabel:"TorchGeo",repoName:"TorchGeo",repoUrl:"https://github.com/microsoft/torchgeo",docsUrl:"https://torchgeo.readthedocs.io/",filter:!1,countDownloads:'path_extension:"pt" OR path_extension:"pth"'},transformers:{prettyLabel:"Transformers",repoName:"🤗/transformers",repoUrl:"https://github.com/huggingface/transformers",docsUrl:"https://huggingface.co/docs/hub/transformers",snippets:kI,filter:!0},"transformers.js":{prettyLabel:"Transformers.js",repoName:"transformers.js",repoUrl:"https://github.com/huggingface/transformers.js",docsUrl:"https://huggingface.co/docs/hub/transformers-js",snippets:xI,filter:!0},trellis:{prettyLabel:"Trellis",repoName:"Trellis",repoUrl:"https://github.com/microsoft/TRELLIS",countDownloads:'path_extension:"safetensors"'},ultralytics:{prettyLabel:"ultralytics",repoName:"ultralytics",repoUrl:"https://github.com/ultralytics/ultralytics",docsUrl:"https://github.com/ultralytics/ultralytics",filter:!1,countDownloads:'path_extension:"pt"',snippets:Cd},univa:{prettyLabel:"univa",repoName:"univa",repoUrl:"https://github.com/PKU-YuanGroup/UniWorld-V1",snippets:jI,filter:!0,countDownloads:'path:"config.json"'},"uni-3dar":{prettyLabel:"Uni-3DAR",repoName:"Uni-3DAR",repoUrl:"https://github.com/dptech-corp/Uni-3DAR",docsUrl:"https://github.com/dptech-corp/Uni-3DAR",countDownloads:'path_extension:"pt"'},"unity-sentis":{prettyLabel:"unity-sentis",repoName:"unity-sentis",repoUrl:"https://github.com/Unity-Technologies/sentis-samples",snippets:PI,filter:!0,countDownloads:'path_extension:"sentis"'},sana:{prettyLabel:"Sana",repoName:"Sana",repoUrl:"https://github.com/NVlabs/Sana",countDownloads:'path_extension:"pth"',snippets:RI},"vfi-mamba":{prettyLabel:"VFIMamba",repoName:"VFIMamba",repoUrl:"https://github.com/MCG-NJU/VFIMamba",countDownloads:'path_extension:"pkl"',snippets:NI},voicecraft:{prettyLabel:"VoiceCraft",repoName:"VoiceCraft",repoUrl:"https://github.com/jasonppy/VoiceCraft",docsUrl:"https://github.com/jasonppy/VoiceCraft",snippets:DI},vui:{prettyLabel:"Vui",repoName:"Vui",repoUrl:"https://github.com/vui-ai/vui",countDownloads:'path_extension:"pt"',snippets:OI},wham:{prettyLabel:"WHAM",repoName:"wham",repoUrl:"https://huggingface.co/microsoft/wham",docsUrl:"https://huggingface.co/microsoft/wham/blob/main/README.md",countDownloads:'path_extension:"ckpt"'},whisperkit:{prettyLabel:"WhisperKit",repoName:"WhisperKit",repoUrl:"https://github.com/argmaxinc/WhisperKit",docsUrl:"https://github.com/argmaxinc/WhisperKit?tab=readme-ov-file#homebrew",snippets:tA,countDownloads:'path_filename:"model" AND path_extension:"mil" AND _exists_:"path_prefix"'},yolov10:{prettyLabel:"YOLOv10",repoName:"YOLOv10",repoUrl:"https://github.com/THU-MIG/yolov10",docsUrl:"https://github.com/THU-MIG/yolov10",countDownloads:'path_extension:"pt" OR path_extension:"safetensors"',snippets:Cd},zonos:{prettyLabel:"Zonos",repoName:"Zonos",repoUrl:"https://github.com/Zyphra/Zonos",docsUrl:"https://github.com/Zyphra/Zonos",snippets:rA,filter:!1},"3dtopia-xl":{prettyLabel:"3DTopia-XL",repoName:"3DTopia-XL",repoUrl:"https://github.com/3DTopia/3DTopia-XL",filter:!1,countDownloads:'path:"model_vae_fp16.pt"',snippets:nA}};Object.entries(iA).filter(([e,t])=>t.filter).map(([e])=>e);var D;(function(e){e[e.F32=0]="F32",e[e.F16=1]="F16",e[e.Q4_0=2]="Q4_0",e[e.Q4_1=3]="Q4_1",e[e.Q4_1_SOME_F16=4]="Q4_1_SOME_F16",e[e.Q4_2=5]="Q4_2",e[e.Q4_3=6]="Q4_3",e[e.Q8_0=7]="Q8_0",e[e.Q5_0=8]="Q5_0",e[e.Q5_1=9]="Q5_1",e[e.Q2_K=10]="Q2_K",e[e.Q3_K_S=11]="Q3_K_S",e[e.Q3_K_M=12]="Q3_K_M",e[e.Q3_K_L=13]="Q3_K_L",e[e.Q4_K_S=14]="Q4_K_S",e[e.Q4_K_M=15]="Q4_K_M",e[e.Q5_K_S=16]="Q5_K_S",e[e.Q5_K_M=17]="Q5_K_M",e[e.Q6_K=18]="Q6_K",e[e.IQ2_XXS=19]="IQ2_XXS",e[e.IQ2_XS=20]="IQ2_XS",e[e.Q2_K_S=21]="Q2_K_S",e[e.IQ3_XS=22]="IQ3_XS",e[e.IQ3_XXS=23]="IQ3_XXS",e[e.IQ1_S=24]="IQ1_S",e[e.IQ4_NL=25]="IQ4_NL",e[e.IQ3_S=26]="IQ3_S",e[e.IQ3_M=27]="IQ3_M",e[e.IQ2_S=28]="IQ2_S",e[e.IQ2_M=29]="IQ2_M",e[e.IQ4_XS=30]="IQ4_XS",e[e.IQ1_M=31]="IQ1_M",e[e.BF16=32]="BF16",e[e.Q4_0_4_4=33]="Q4_0_4_4",e[e.Q4_0_4_8=34]="Q4_0_4_8",e[e.Q4_0_8_8=35]="Q4_0_8_8",e[e.TQ1_0=36]="TQ1_0",e[e.TQ2_0=37]="TQ2_0",e[e.Q2_K_XL=1e3]="Q2_K_XL",e[e.Q3_K_XL=1001]="Q3_K_XL",e[e.Q4_K_XL=1002]="Q4_K_XL",e[e.Q5_K_XL=1003]="Q5_K_XL",e[e.Q6_K_XL=1004]="Q6_K_XL",e[e.Q8_K_XL=1005]="Q8_K_XL"})(D||(D={}));const oA=Object.values(D).filter(e=>typeof e=="string");new RegExp(`(?<quant>${oA.join("|")})(_(?<sizeVariation>[A-Z]+))?`);D.F32,D.BF16,D.F16,D.Q8_K_XL,D.Q8_0,D.Q6_K_XL,D.Q6_K,D.Q5_K_XL,D.Q5_K_M,D.Q5_K_S,D.Q5_0,D.Q5_1,D.Q4_K_XL,D.Q4_K_M,D.Q4_K_S,D.IQ4_NL,D.IQ4_XS,D.Q4_0_4_4,D.Q4_0_4_8,D.Q4_0_8_8,D.Q4_1_SOME_F16,D.Q4_0,D.Q4_1,D.Q4_2,D.Q4_3,D.Q3_K_XL,D.Q3_K_L,D.Q3_K_M,D.Q3_K_S,D.IQ3_M,D.IQ3_S,D.IQ3_XS,D.IQ3_XXS,D.Q2_K_XL,D.Q2_K,D.Q2_K_S,D.IQ2_M,D.IQ2_S,D.IQ2_XS,D.IQ2_XXS,D.IQ1_S,D.IQ1_M,D.TQ1_0,D.TQ2_0;var Pd;(function(e){e[e.F32=0]="F32",e[e.F16=1]="F16",e[e.Q4_0=2]="Q4_0",e[e.Q4_1=3]="Q4_1",e[e.Q5_0=6]="Q5_0",e[e.Q5_1=7]="Q5_1",e[e.Q8_0=8]="Q8_0",e[e.Q8_1=9]="Q8_1",e[e.Q2_K=10]="Q2_K",e[e.Q3_K=11]="Q3_K",e[e.Q4_K=12]="Q4_K",e[e.Q5_K=13]="Q5_K",e[e.Q6_K=14]="Q6_K",e[e.Q8_K=15]="Q8_K",e[e.IQ2_XXS=16]="IQ2_XXS",e[e.IQ2_XS=17]="IQ2_XS",e[e.IQ3_XXS=18]="IQ3_XXS",e[e.IQ1_S=19]="IQ1_S",e[e.IQ4_NL=20]="IQ4_NL",e[e.IQ3_S=21]="IQ3_S",e[e.IQ2_S=22]="IQ2_S",e[e.IQ4_XS=23]="IQ4_XS",e[e.I8=24]="I8",e[e.I16=25]="I16",e[e.I32=26]="I32",e[e.I64=27]="I64",e[e.F64=28]="F64",e[e.IQ1_M=29]="IQ1_M",e[e.BF16=30]="BF16",e[e.TQ1_0=34]="TQ1_0",e[e.TQ2_0=35]="TQ2_0"})(Pd||(Pd={}));const aA={js:{fetch:{basic:`async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({ inputs: {{ providerInputs.asObj.inputs }} }).then((response) => {
    console.log(JSON.stringify(response));
});`,basicAudio:`async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "audio/flac",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({ inputs: {{ providerInputs.asObj.inputs }} }).then((response) => {
    console.log(JSON.stringify(response));
});`,basicImage:`async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "image/jpeg",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({ inputs: {{ providerInputs.asObj.inputs }} }).then((response) => {
    console.log(JSON.stringify(response));
});`,imageToImage:`const image = fs.readFileSync("{{inputs.asObj.inputs}}");

async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "image/jpeg",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: {
				"inputs": \`data:image/png;base64,\${data.inputs.encode("base64")}\`,
				"parameters": data.parameters,
			}
		}
	);
	const result = await response.json();
	return result;
}

query({ 
	inputs: image,
	parameters: {
		prompt: "{{ inputs.asObj.parameters.prompt }}",
	}
}).then((response) => {
    console.log(JSON.stringify(response));
});`,textToAudio:`{% if model.library_name == "transformers" %}
async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
    return result;
}

query({ inputs: {{ providerInputs.asObj.inputs }} }).then((response) => {
    // Returns a byte object of the Audio wavform. Use it directly!
});
{% else %}
async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
    const result = await response.json();
    return result;
}

query({ inputs: {{ providerInputs.asObj.inputs }} }).then((response) => {
    console.log(JSON.stringify(response));
});
{% endif %} `,textToImage:`async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
	return result;
}


query({ {{ providerInputs.asTsString }} }).then((response) => {
    // Use image
});`,textToSpeech:`{% if model.library_name == "transformers" %}
async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
{% if billTo %}
				"X-HF-Bill-To": "{{ billTo }}",
{% endif %}			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
    return result;
}

query({ text: {{ inputs.asObj.inputs }} }).then((response) => {
    // Returns a byte object of the Audio wavform. Use it directly!
});
{% else %}
async function query(data) {
	const response = await fetch(
		"{{ fullUrl }}",
		{
			headers: {
				Authorization: "{{ authorizationHeader }}",
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
    const result = await response.json();
    return result;
}

query({ text: {{ inputs.asObj.inputs }} }).then((response) => {
    console.log(JSON.stringify(response));
});
{% endif %} `,zeroShotClassification:`async function query(data) {
    const response = await fetch(
		"{{ fullUrl }}",
        {
            headers: {
				Authorization: "{{ authorizationHeader }}",
                "Content-Type": "application/json",
{% if billTo %}
                "X-HF-Bill-To": "{{ billTo }}",
{% endif %}         },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}

query({
    inputs: {{ providerInputs.asObj.inputs }},
    parameters: { candidate_labels: ["refund", "legal", "faq"] }
}).then((response) => {
    console.log(JSON.stringify(response));
});`},"huggingface.js":{basic:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const output = await client.{{ methodName }}({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
	model: "{{ model.id }}",
	inputs: {{ inputs.asObj.inputs }},
	provider: "{{ provider }}",
}{% if billTo %}, {
	billTo: "{{ billTo }}",
}{% endif %});

console.log(output);`,basicAudio:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const data = fs.readFileSync({{inputs.asObj.inputs}});

const output = await client.{{ methodName }}({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
	data,
	model: "{{ model.id }}",
	provider: "{{ provider }}",
}{% if billTo %}, {
	billTo: "{{ billTo }}",
}{% endif %});

console.log(output);`,basicImage:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const data = fs.readFileSync({{inputs.asObj.inputs}});

const output = await client.{{ methodName }}({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
	data,
	model: "{{ model.id }}",
	provider: "{{ provider }}",
}{% if billTo %}, {
	billTo: "{{ billTo }}",
}{% endif %});

console.log(output);`,conversational:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const chatCompletion = await client.chatCompletion({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
    provider: "{{ provider }}",
    model: "{{ model.id }}",
{{ inputs.asTsString }}
}{% if billTo %}, {
    billTo: "{{ billTo }}",
}{% endif %});

console.log(chatCompletion.choices[0].message);`,conversationalStream:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

let out = "";

const stream = client.chatCompletionStream({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
    provider: "{{ provider }}",
    model: "{{ model.id }}",
{{ inputs.asTsString }}
}{% if billTo %}, {
    billTo: "{{ billTo }}",
}{% endif %});

for await (const chunk of stream) {
	if (chunk.choices && chunk.choices.length > 0) {
		const newContent = chunk.choices[0].delta.content;
		out += newContent;
		console.log(newContent);
	}
}`,imageToImage:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const data = fs.readFileSync("{{inputs.asObj.inputs}}");

const image = await client.imageToImage({
{% if endpointUrl %}
	endpointUrl: "{{ endpointUrl }}",
{% endif %}
	provider: "{{provider}}",
	model: "{{model.id}}",
	inputs: data,
	parameters: { prompt: "{{inputs.asObj.parameters.prompt}}", },
}{% if billTo %}, {
	billTo: "{{ billTo }}",
}{% endif %});
/// Use the generated image (it's a Blob)
// For example, you can save it to a file or display it in an image element
`,textToImage:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const image = await client.textToImage({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
    provider: "{{ provider }}",
    model: "{{ model.id }}",
	inputs: {{ inputs.asObj.inputs }},
	parameters: { num_inference_steps: 5 },
}{% if billTo %}, {
    billTo: "{{ billTo }}",
}{% endif %});
/// Use the generated image (it's a Blob)`,textToSpeech:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const audio = await client.textToSpeech({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
    provider: "{{ provider }}",
    model: "{{ model.id }}",
	inputs: {{ inputs.asObj.inputs }},
}{% if billTo %}, {
    billTo: "{{ billTo }}",
}{% endif %});
// Use the generated audio (it's a Blob)`,textToVideo:`import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("{{ accessToken }}");

const video = await client.textToVideo({
{% if endpointUrl %}
    endpointUrl: "{{ endpointUrl }}",
{% endif %}
    provider: "{{ provider }}",
    model: "{{ model.id }}",
	inputs: {{ inputs.asObj.inputs }},
}{% if billTo %}, {
    billTo: "{{ billTo }}",
}{% endif %});
// Use the generated video (it's a Blob)`},openai:{conversational:`import { OpenAI } from "openai";

const client = new OpenAI({
	baseURL: "{{ baseUrl }}",
	apiKey: "{{ accessToken }}",
{% if billTo %}
	defaultHeaders: {
		"X-HF-Bill-To": "{{ billTo }}" 
	}
{% endif %}
});

const chatCompletion = await client.chat.completions.create({
	model: "{{ providerModelId }}",
{{ inputs.asTsString }}
});

console.log(chatCompletion.choices[0].message);`,conversationalStream:`import { OpenAI } from "openai";

const client = new OpenAI({
	baseURL: "{{ baseUrl }}",
	apiKey: "{{ accessToken }}",
{% if billTo %}
    defaultHeaders: {
		"X-HF-Bill-To": "{{ billTo }}" 
	}
{% endif %}
});

const stream = await client.chat.completions.create({
    model: "{{ providerModelId }}",
{{ inputs.asTsString }}
    stream: true,
});

for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || "");
}`}},python:{fal_client:{imageToImage:`{%if provider == "fal-ai" %}
import fal_client
import base64

def on_queue_update(update):
    if isinstance(update, fal_client.InProgress):
        for log in update.logs:
           print(log["message"])

with open("{{inputs.asObj.inputs}}", "rb") as image_file:
    image_base_64 = base64.b64encode(image_file.read()).decode('utf-8')

result = fal_client.subscribe(
    "fal-ai/flux-kontext/dev",
    arguments={
        "prompt": f"data:image/png;base64,{image_base_64}",
        "image_url": "{{ providerInputs.asObj.inputs }}",
    },
    with_logs=True,
    on_queue_update=on_queue_update,
)
print(result)
{%endif%}
`,textToImage:`{% if provider == "fal-ai" %}
import fal_client

{% if providerInputs.asObj.loras is defined and providerInputs.asObj.loras != none %}
result = fal_client.subscribe(
    "{{ providerModelId }}",
    arguments={
        "prompt": {{ inputs.asObj.inputs }},
        "loras":{{ providerInputs.asObj.loras | tojson }},
    },
)
{% else %}
result = fal_client.subscribe(
    "{{ providerModelId }}",
    arguments={
        "prompt": {{ inputs.asObj.inputs }},
    },
)
{% endif %} 
print(result)
{% endif %} `},huggingface_hub:{basic:`result = client.{{ methodName }}(
    {{ inputs.asObj.inputs }},
    model="{{ model.id }}",
)`,basicAudio:'output = client.{{ methodName }}({{ inputs.asObj.inputs }}, model="{{ model.id }}")',basicImage:'output = client.{{ methodName }}({{ inputs.asObj.inputs }}, model="{{ model.id }}")',conversational:`completion = client.chat.completions.create(
    model="{{ model.id }}",
{{ inputs.asPythonString }}
)

print(completion.choices[0].message) `,conversationalStream:`stream = client.chat.completions.create(
    model="{{ model.id }}",
{{ inputs.asPythonString }}
    stream=True,
)

for chunk in stream:
    print(chunk.choices[0].delta.content, end="") `,documentQuestionAnswering:`output = client.document_question_answering(
    "{{ inputs.asObj.image }}",
    question="{{ inputs.asObj.question }}",
    model="{{ model.id }}",
) `,imageToImage:`with open("{{ inputs.asObj.inputs }}", "rb") as image_file:
   input_image = image_file.read()

# output is a PIL.Image object
image = client.image_to_image(
    input_image,
    prompt="{{ inputs.asObj.parameters.prompt }}",
    model="{{ model.id }}",
) `,importInferenceClient:`from huggingface_hub import InferenceClient

client = InferenceClient(
{% if endpointUrl %}
    base_url="{{ baseUrl }}",
{% endif %}
    provider="{{ provider }}",
    api_key="{{ accessToken }}",
{% if billTo %}
    bill_to="{{ billTo }}",
{% endif %}
)`,questionAnswering:`answer = client.question_answering(
    question="{{ inputs.asObj.question }}",
    context="{{ inputs.asObj.context }}",
    model="{{ model.id }}",
) `,tableQuestionAnswering:`answer = client.table_question_answering(
    query="{{ inputs.asObj.query }}",
    table={{ inputs.asObj.table }},
    model="{{ model.id }}",
) `,textToImage:`# output is a PIL.Image object
image = client.text_to_image(
    {{ inputs.asObj.inputs }},
    model="{{ model.id }}",
) `,textToSpeech:`# audio is returned as bytes
audio = client.text_to_speech(
    {{ inputs.asObj.inputs }},
    model="{{ model.id }}",
) 
`,textToVideo:`video = client.text_to_video(
    {{ inputs.asObj.inputs }},
    model="{{ model.id }}",
) `},openai:{conversational:`from openai import OpenAI

client = OpenAI(
    base_url="{{ baseUrl }}",
    api_key="{{ accessToken }}",
{% if billTo %}
    default_headers={
        "X-HF-Bill-To": "{{ billTo }}"
    }
{% endif %}
)

completion = client.chat.completions.create(
    model="{{ providerModelId }}",
{{ inputs.asPythonString }}
)

print(completion.choices[0].message) `,conversationalStream:`from openai import OpenAI

client = OpenAI(
    base_url="{{ baseUrl }}",
    api_key="{{ accessToken }}",
{% if billTo %}
    default_headers={
        "X-HF-Bill-To": "{{ billTo }}"
    }
{% endif %}
)

stream = client.chat.completions.create(
    model="{{ providerModelId }}",
{{ inputs.asPythonString }}
    stream=True,
)

for chunk in stream:
    print(chunk.choices[0].delta.content, end="")`},requests:{basic:`def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

output = query({
    "inputs": {{ providerInputs.asObj.inputs }},
}) `,basicAudio:`def query(filename):
    with open(filename, "rb") as f:
        data = f.read()
    response = requests.post(API_URL, headers={"Content-Type": "audio/flac", **headers}, data=data)
    return response.json()

output = query({{ providerInputs.asObj.inputs }})`,basicImage:`def query(filename):
    with open(filename, "rb") as f:
        data = f.read()
    response = requests.post(API_URL, headers={"Content-Type": "image/jpeg", **headers}, data=data)
    return response.json()

output = query({{ providerInputs.asObj.inputs }})`,conversational:`def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

response = query({
{{ providerInputs.asJsonString }}
})

print(response["choices"][0]["message"])`,conversationalStream:`def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload, stream=True)
    for line in response.iter_lines():
        if not line.startswith(b"data:"):
            continue
        if line.strip() == b"data: [DONE]":
            return
        yield json.loads(line.decode("utf-8").lstrip("data:").rstrip("/n"))

chunks = query({
{{ providerInputs.asJsonString }},
    "stream": True,
})

for chunk in chunks:
    print(chunk["choices"][0]["delta"]["content"], end="")`,documentQuestionAnswering:`def query(payload):
    with open(payload["image"], "rb") as f:
        img = f.read()
        payload["image"] = base64.b64encode(img).decode("utf-8")
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

output = query({
    "inputs": {
        "image": "{{ inputs.asObj.image }}",
        "question": "{{ inputs.asObj.question }}",
    },
}) `,imageToImage:`with open("{{inputs.asObj.inputs}}", "rb") as image_file:
    image_base_64 = base64.b64encode(image_file.read()).decode('utf-8')

def query(payload):
    with open(payload["inputs"], "rb") as f:
        img = f.read()
        payload["inputs"] = base64.b64encode(img).decode("utf-8")
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

image_bytes = query({
{{ providerInputs.asJsonString }}
})

# You can access the image with PIL.Image for example
import io
from PIL import Image
image = Image.open(io.BytesIO(image_bytes)) `,importRequests:`{% if importBase64 %}
import base64
{% endif %}
{% if importJson %}
import json
{% endif %}
import requests

API_URL = "{{ fullUrl }}"
headers = {
    "Authorization": "{{ authorizationHeader }}",
{% if billTo %}
    "X-HF-Bill-To": "{{ billTo }}"
{% endif %}
}`,tabular:`def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

response = query({
    "inputs": {
        "data": {{ providerInputs.asObj.inputs }}
    },
}) `,textToAudio:`{% if model.library_name == "transformers" %}
def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

audio_bytes = query({
    "inputs": {{ inputs.asObj.inputs }},
})
# You can access the audio with IPython.display for example
from IPython.display import Audio
Audio(audio_bytes)
{% else %}
def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

audio, sampling_rate = query({
    "inputs": {{ inputs.asObj.inputs }},
})
# You can access the audio with IPython.display for example
from IPython.display import Audio
Audio(audio, rate=sampling_rate)
{% endif %} `,textToImage:`{% if provider == "hf-inference" %}
def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

image_bytes = query({
    "inputs": {{ providerInputs.asObj.inputs }},
})

# You can access the image with PIL.Image for example
import io
from PIL import Image
image = Image.open(io.BytesIO(image_bytes))
{% endif %}`,textToSpeech:`{% if model.library_name == "transformers" %}
def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

audio_bytes = query({
    "text": {{ inputs.asObj.inputs }},
})
# You can access the audio with IPython.display for example
from IPython.display import Audio
Audio(audio_bytes)
{% else %}
def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

audio, sampling_rate = query({
    "text": {{ inputs.asObj.inputs }},
})
# You can access the audio with IPython.display for example
from IPython.display import Audio
Audio(audio, rate=sampling_rate)
{% endif %} `,zeroShotClassification:`def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

output = query({
    "inputs": {{ providerInputs.asObj.inputs }},
    "parameters": {"candidate_labels": ["refund", "legal", "faq"]},
}) `,zeroShotImageClassification:`def query(data):
    with open(data["image_path"], "rb") as f:
        img = f.read()
    payload={
        "parameters": data["parameters"],
        "inputs": base64.b64encode(img).decode("utf-8")
    }
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

output = query({
    "image_path": {{ providerInputs.asObj.inputs }},
    "parameters": {"candidate_labels": ["cat", "dog", "llama"]},
}) `}},sh:{curl:{basic:`curl {{ fullUrl }} \\
    -X POST \\
    -H 'Authorization: {{ authorizationHeader }}' \\
    -H 'Content-Type: application/json' \\
{% if billTo %}
    -H 'X-HF-Bill-To: {{ billTo }}' \\
{% endif %}
    -d '{
{{ providerInputs.asCurlString }}
    }'`,basicAudio:`curl {{ fullUrl }} \\
    -X POST \\
    -H 'Authorization: {{ authorizationHeader }}' \\
    -H 'Content-Type: audio/flac' \\
{% if billTo %}
    -H 'X-HF-Bill-To: {{ billTo }}' \\
{% endif %}
    --data-binary @{{ providerInputs.asObj.inputs }}`,basicImage:`curl {{ fullUrl }} \\
    -X POST \\
    -H 'Authorization: {{ authorizationHeader }}' \\
    -H 'Content-Type: image/jpeg' \\
{% if billTo %}
    -H 'X-HF-Bill-To: {{ billTo }}' \\
{% endif %}
    --data-binary @{{ providerInputs.asObj.inputs }}`,conversational:`curl {{ fullUrl }} \\
    -H 'Authorization: {{ authorizationHeader }}' \\
    -H 'Content-Type: application/json' \\
{% if billTo %}
    -H 'X-HF-Bill-To: {{ billTo }}' \\
{% endif %}
    -d '{
{{ providerInputs.asCurlString }},
        "stream": false
    }'`,conversationalStream:`curl {{ fullUrl }} \\
    -H 'Authorization: {{ authorizationHeader }}' \\
    -H 'Content-Type: application/json' \\
{% if billTo %}
    -H 'X-HF-Bill-To: {{ billTo }}' \\
{% endif %}
    -d '{
{{ providerInputs.asCurlString }},
        "stream": true
    }'`,zeroShotClassification:`curl {{ fullUrl }} \\
    -X POST \\
    -d '{"inputs": {{ providerInputs.asObj.inputs }}, "parameters": {"candidate_labels": ["refund", "legal", "faq"]}}' \\
    -H 'Content-Type: application/json' \\
    -H 'Authorization: {{ authorizationHeader }}'
{% if billTo %} \\
    -H 'X-HF-Bill-To: {{ billTo }}'
{% endif %}`}}},Km=(e,t,n)=>{var i,o;const r=(o=(i=aA[e])==null?void 0:i[t])==null?void 0:o[n];if(!r)throw new Error(`Template not found: ${e}/${t}/${n}`);return a=>new yx(r).render({...a})};Km("python","huggingface_hub","importInferenceClient");Km("python","requests","importRequests");const sA="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",lA=new Ec(sA);function cA(e){return e.replace(/<think>[\s\S]*?<\/think>/gi,"").split(`
`).filter(t=>/^(\s*[-*]|\s*\d+\.)\s+/.test(t)).join(`
`).trim()}async function uA(e,t){var o,a,s;const n=`
Explain the following ${t} code in bullet points. 
- Only include the essential explanations and in natural language.
- Format the answer in markdown.
- Do not include unnecessary details, meta-thoughts, or <think> tags.

Code:
${e}
`;let r="";const i=lA.chatCompletionStream({provider:"hf-inference",model:"HuggingFaceTB/SmolLM3-3B",messages:[{role:"user",content:n}]});for await(const l of i)r+=((s=(a=(o=l.choices)==null?void 0:o[0])==null?void 0:a.delta)==null?void 0:s.content)||"";return cA(r)}function dA(){const[e,t]=Dt.useState(""),[n,r]=Dt.useState(""),[i,o]=Dt.useState("python"),a=async()=>{r("Generating explanation...");try{const s=await uA(e,i);r(s)}catch(s){r("Error generating explanation. Check console."),console.error(s)}};return W.jsxs("div",{className:"min-h-screen p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white",children:[W.jsxs("div",{className:"flex justify-between items-center mb-4",children:[W.jsxs("div",{className:"flex items-center gap-2",children:[W.jsx("img",{src:"assets/icon.svg",alt:"AI Code Explainer Logo",className:"w-10 h-10"}),W.jsx("h1",{className:"text-2xl font-bold",children:"AI Code Explainer"})]}),W.jsxs("div",{className:"flex gap-4 items-center",children:[W.jsx(mb,{}),W.jsx(hb,{language:i,setLanguage:o}),W.jsx(Sy,{})]})]}),W.jsx(ky,{code:e,setCode:t,language:i}),W.jsx("button",{onClick:a,className:"mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"Explain Code"}),W.jsx(xy,{explanation:n})]})}ps.createRoot(document.getElementById("root")).render(W.jsx(dA,{}));
