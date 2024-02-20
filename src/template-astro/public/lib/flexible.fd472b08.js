"use strict";(()=>{function m(n,t,e){var d=e||{},o=d.noTrailing,s=o===void 0?!1:o,c=d.noLeading,i=c===void 0?!1:c,f=d.debounceMode,r=f===void 0?void 0:f,a,b=!1,w=0;function O(){a&&clearTimeout(a)}function j(v){var p=v||{},u=p.upcomingOnly,h=u===void 0?!1:u;O(),b=!h}function D(){for(var v=arguments.length,p=new Array(v),u=0;u<v;u++)p[u]=arguments[u];var h=this,y=Date.now()-w;if(b)return;function g(){w=Date.now(),t.apply(h,p)}function E(){a=void 0}!i&&r&&!a&&g(),O(),r===void 0&&y>n?i?(w=Date.now(),s||(a=setTimeout(r?E:g,n))):g():s!==!0&&(a=setTimeout(r?E:g,r===void 0?n-y:n))}return D.cancel=j,D}function z(n,t,e){var d=e||{},o=d.atBegin,s=o===void 0?!1:o;return m(n,t,{debounceMode:s!==!1})}var N=Object.defineProperty,S=Object.defineProperties,U=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,L=(n,t,e)=>t in n?N(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,_=(n,t)=>{for(var e in t||(t={}))V.call(t,e)&&L(n,e,t[e]);if(x)for(var e of x(t))M.call(t,e)&&L(n,e,t[e]);return n},B=(n,t)=>S(n,U(t));function l(n){return`[modern-flexible]: ${n}`}var A="px",F={rootValue:16,resizeOption:{type:"debounce",delay:60},distinctDevice:[{deviceWidthRange:[0,Number.POSITIVE_INFINITY],isDevice:!0,UIWidth:375}]};function $(n={}){if(typeof window>"u"||typeof document>"u")throw new TypeError(l("current environment is not browser"));n=_(_({},F),n);let{rootValue:t,resizeOption:e,distinctDevice:d}=n;if(!t||t<=0)throw new Error(l("rootValue must be greater than 0"));if(!d||!d.length)throw new Error(l("distinctDevice needed"));function o(){let i=window.document.documentElement.clientWidth,f=d[d.length-1],r=d.find(a=>typeof a.isDevice=="boolean"?a.isDevice:a.isDevice(i))||f;if(r?.isDevice){if(r.deviceWidthRange.length!==2)throw new Error(l("deviceWidthRange length must be 2"));i>=r.deviceWidthRange[1]?i=r.deviceWidthRange[1]:i<=r.deviceWidthRange[0]&&(i=r.deviceWidthRange[0]),document.documentElement&&(document.documentElement.style.fontSize=`${i/r.UIWidth*t}${A}`)}else throw new Error(l("no device matched"))}o();function s(){var i,f;if(e===!1||!e)return o;if(typeof e!="object")throw new TypeError(l("resizeOption must be object"));return e?.type==="debounce"?z(e.delay,o,e.options):e?.type==="throttle"?m(e.delay,o,B(_({},e.options),{noLeading:(f=(i=e.options)==null?void 0:i.noLeading)!=null?f:!0})):o}let c=s();return window.addEventListener("resize",c),window.addEventListener("pageshow",i=>{i.persisted&&c()}),window.addEventListener("pushState",c),{resize:o,enhancedResize:c}}var{resize:X}=$({rootValue:16,distinctDevice:[{deviceWidthRange:[375,650],UIWidth:375,isDevice:n=>n<=767},{deviceWidthRange:[1535,1920],UIWidth:1920,isDevice:n=>n>767}]});window.resize=X;})();
