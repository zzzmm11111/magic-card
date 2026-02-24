import{w as me,c as S,d as pe,r as Ln,g as jn,o as st,a as at,b as Wn,F as tt,C as Un,i as Fn,e as Xn,f as Zn,S as pt,h as Yn,t as Kn,j as qn,p as Gn,k as $,u as Ve,l as Jn,m as F,n as Ut,q as Qn,v as er,T as tr,s as nr,x as rr,y as gt,z as or,A as Ft,B as ir,D as Pe,E as Ke,G as _e,H as sr,I as $e,J as bt,K as ee,L as qe,M as xt,N as ar}from"./index-B8BPln--.js";import{u as ur}from"./index-C9j4f2wU.js";import{d as lr,c as cr,a as m,b as U,e as w,r as mt,u as Xt,f as dr}from"./light-BRMEBvMj.js";function fr(e){return e.composedPath()[0]||null}function vr(e,t){const n=[];if(!t){for(let r=0;r<e;++r)n.push(r);return n}for(let r=0;r<e;++r)n.push(t(r));return n}function Be(e){return e.composedPath()[0]}const hr={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function pr(e,t,n){if(e==="mousemoveoutside"){const r=i=>{t.contains(Be(i))||n(i)};return{mousemove:r,touchstart:r}}else if(e==="clickoutside"){let r=!1;const i=f=>{r=!t.contains(Be(f))},u=f=>{r&&(t.contains(Be(f))||n(f))};return{mousedown:i,mouseup:u,touchstart:i,touchend:u}}return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`),{}}function Zt(e,t,n){const r=hr[e];let i=r.get(t);i===void 0&&r.set(t,i=new WeakMap);let u=i.get(n);return u===void 0&&i.set(n,u=pr(e,t,n)),u}function gr(e,t,n,r){if(e==="mousemoveoutside"||e==="clickoutside"){const i=Zt(e,t,n);return Object.keys(i).forEach(u=>{de(u,document,i[u],r)}),!0}return!1}function br(e,t,n,r){if(e==="mousemoveoutside"||e==="clickoutside"){const i=Zt(e,t,n);return Object.keys(i).forEach(u=>{fe(u,document,i[u],r)}),!0}return!1}function xr(){if(typeof window>"u")return{on:()=>{},off:()=>{}};const e=new WeakMap,t=new WeakMap;function n(){e.set(this,!0)}function r(){e.set(this,!0),t.set(this,!0)}function i(l,s,p){const C=l[s];return l[s]=function(){return p.apply(l,arguments),C.apply(l,arguments)},l}function u(l,s){l[s]=Event.prototype[s]}const f=new WeakMap,y=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function R(){var l;return(l=f.get(this))!==null&&l!==void 0?l:null}function b(l,s){y!==void 0&&Object.defineProperty(l,"currentTarget",{configurable:!0,enumerable:!0,get:s??y.get})}const d={bubble:{},capture:{}},h={};function O(){const l=function(s){const{type:p,eventPhase:C,bubbles:T}=s,E=Be(s);if(C===2)return;const D=C===1?"capture":"bubble";let A=E;const M=[];for(;A===null&&(A=window),M.push(A),A!==window;)A=A.parentNode||null;const L=d.capture[p],Y=d.bubble[p];if(i(s,"stopPropagation",n),i(s,"stopImmediatePropagation",r),b(s,R),D==="capture"){if(L===void 0)return;for(let X=M.length-1;X>=0&&!e.has(s);--X){const K=M[X],ne=L.get(K);if(ne!==void 0){f.set(s,K);for(const q of ne){if(t.has(s))break;q(s)}}if(X===0&&!T&&Y!==void 0){const q=Y.get(K);if(q!==void 0)for(const Se of q){if(t.has(s))break;Se(s)}}}}else if(D==="bubble"){if(Y===void 0)return;for(let X=0;X<M.length&&!e.has(s);++X){const K=M[X],ne=Y.get(K);if(ne!==void 0){f.set(s,K);for(const q of ne){if(t.has(s))break;q(s)}}}}u(s,"stopPropagation"),u(s,"stopImmediatePropagation"),b(s)};return l.displayName="evtdUnifiedHandler",l}function I(){const l=function(s){const{type:p,eventPhase:C}=s;if(C!==2)return;const T=h[p];T!==void 0&&T.forEach(E=>E(s))};return l.displayName="evtdUnifiedWindowEventHandler",l}const V=O(),P=I();function _(l,s){const p=d[l];return p[s]===void 0&&(p[s]=new Map,window.addEventListener(s,V,l==="capture")),p[s]}function H(l){return h[l]===void 0&&(h[l]=new Set,window.addEventListener(l,P)),h[l]}function N(l,s){let p=l.get(s);return p===void 0&&l.set(s,p=new Set),p}function B(l,s,p,C){const T=d[s][p];if(T!==void 0){const E=T.get(l);if(E!==void 0&&E.has(C))return!0}return!1}function te(l,s){const p=h[l];return!!(p!==void 0&&p.has(s))}function J(l,s,p,C){let T;if(typeof C=="object"&&C.once===!0?T=L=>{Q(l,s,T,C),p(L)}:T=p,gr(l,s,T,C))return;const D=C===!0||typeof C=="object"&&C.capture===!0?"capture":"bubble",A=_(D,l),M=N(A,s);if(M.has(T)||M.add(T),s===window){const L=H(l);L.has(T)||L.add(T)}}function Q(l,s,p,C){if(br(l,s,p,C))return;const E=C===!0||typeof C=="object"&&C.capture===!0,D=E?"capture":"bubble",A=_(D,l),M=N(A,s);if(s===window&&!B(s,E?"bubble":"capture",l,p)&&te(l,p)){const Y=h[l];Y.delete(p),Y.size===0&&(window.removeEventListener(l,P),h[l]=void 0)}M.has(p)&&M.delete(p),M.size===0&&A.delete(s),A.size===0&&(window.removeEventListener(l,V,D==="capture"),d[D][l]=void 0)}return{on:J,off:Q}}const{on:de,off:fe}=xr();function mr(e,t){return me(e,n=>{n!==void 0&&(t.value=n)}),S(()=>e.value===void 0?t.value:e.value)}function wt(e,t){console.error(`[vueuc/${e}]: ${t}`)}var oe=[],wr=function(){return oe.some(function(e){return e.activeTargets.length>0})},yr=function(){return oe.some(function(e){return e.skippedTargets.length>0})},yt="ResizeObserver loop completed with undelivered notifications.",Sr=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:yt}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=yt),window.dispatchEvent(e)},ye;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(ye||(ye={}));var ie=function(e){return Object.freeze(e)},Rr=(function(){function e(t,n){this.inlineSize=t,this.blockSize=n,ie(this)}return e})(),Yt=(function(){function e(t,n,r,i){return this.x=t,this.y=n,this.width=r,this.height=i,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,ie(this)}return e.prototype.toJSON=function(){var t=this,n=t.x,r=t.y,i=t.top,u=t.right,f=t.bottom,y=t.left,R=t.width,b=t.height;return{x:n,y:r,top:i,right:u,bottom:f,left:y,width:R,height:b}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e})(),ut=function(e){return e instanceof SVGElement&&"getBBox"in e},Kt=function(e){if(ut(e)){var t=e.getBBox(),n=t.width,r=t.height;return!n&&!r}var i=e,u=i.offsetWidth,f=i.offsetHeight;return!(u||f||e.getClientRects().length)},St=function(e){var t;if(e instanceof Element)return!0;var n=(t=e==null?void 0:e.ownerDocument)===null||t===void 0?void 0:t.defaultView;return!!(n&&e instanceof n.Element)},Cr=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},we=typeof window<"u"?window:{},De=new WeakMap,Rt=/auto|scroll/,zr=/^tb|vertical/,Er=/msie|trident/i.test(we.navigator&&we.navigator.userAgent),Z=function(e){return parseFloat(e||"0")},he=function(e,t,n){return e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=!1),new Rr((n?t:e)||0,(n?e:t)||0)},Ct=ie({devicePixelContentBoxSize:he(),borderBoxSize:he(),contentBoxSize:he(),contentRect:new Yt(0,0,0,0)}),qt=function(e,t){if(t===void 0&&(t=!1),De.has(e)&&!t)return De.get(e);if(Kt(e))return De.set(e,Ct),Ct;var n=getComputedStyle(e),r=ut(e)&&e.ownerSVGElement&&e.getBBox(),i=!Er&&n.boxSizing==="border-box",u=zr.test(n.writingMode||""),f=!r&&Rt.test(n.overflowY||""),y=!r&&Rt.test(n.overflowX||""),R=r?0:Z(n.paddingTop),b=r?0:Z(n.paddingRight),d=r?0:Z(n.paddingBottom),h=r?0:Z(n.paddingLeft),O=r?0:Z(n.borderTopWidth),I=r?0:Z(n.borderRightWidth),V=r?0:Z(n.borderBottomWidth),P=r?0:Z(n.borderLeftWidth),_=h+b,H=R+d,N=P+I,B=O+V,te=y?e.offsetHeight-B-e.clientHeight:0,J=f?e.offsetWidth-N-e.clientWidth:0,Q=i?_+N:0,l=i?H+B:0,s=r?r.width:Z(n.width)-Q-J,p=r?r.height:Z(n.height)-l-te,C=s+_+J+N,T=p+H+te+B,E=ie({devicePixelContentBoxSize:he(Math.round(s*devicePixelRatio),Math.round(p*devicePixelRatio),u),borderBoxSize:he(C,T,u),contentBoxSize:he(s,p,u),contentRect:new Yt(h,R,s,p)});return De.set(e,E),E},Gt=function(e,t,n){var r=qt(e,n),i=r.borderBoxSize,u=r.contentBoxSize,f=r.devicePixelContentBoxSize;switch(t){case ye.DEVICE_PIXEL_CONTENT_BOX:return f;case ye.BORDER_BOX:return i;default:return u}},Tr=(function(){function e(t){var n=qt(t);this.target=t,this.contentRect=n.contentRect,this.borderBoxSize=ie([n.borderBoxSize]),this.contentBoxSize=ie([n.contentBoxSize]),this.devicePixelContentBoxSize=ie([n.devicePixelContentBoxSize])}return e})(),Jt=function(e){if(Kt(e))return 1/0;for(var t=0,n=e.parentNode;n;)t+=1,n=n.parentNode;return t},kr=function(){var e=1/0,t=[];oe.forEach(function(f){if(f.activeTargets.length!==0){var y=[];f.activeTargets.forEach(function(b){var d=new Tr(b.target),h=Jt(b.target);y.push(d),b.lastReportedSize=Gt(b.target,b.observedBox),h<e&&(e=h)}),t.push(function(){f.callback.call(f.observer,y,f.observer)}),f.activeTargets.splice(0,f.activeTargets.length)}});for(var n=0,r=t;n<r.length;n++){var i=r[n];i()}return e},zt=function(e){oe.forEach(function(n){n.activeTargets.splice(0,n.activeTargets.length),n.skippedTargets.splice(0,n.skippedTargets.length),n.observationTargets.forEach(function(i){i.isActive()&&(Jt(i.target)>e?n.activeTargets.push(i):n.skippedTargets.push(i))})})},Or=function(){var e=0;for(zt(e);wr();)e=kr(),zt(e);return yr()&&Sr(),e>0},Ge,Qt=[],Pr=function(){return Qt.splice(0).forEach(function(e){return e()})},_r=function(e){if(!Ge){var t=0,n=document.createTextNode(""),r={characterData:!0};new MutationObserver(function(){return Pr()}).observe(n,r),Ge=function(){n.textContent="".concat(t?t--:t++)}}Qt.push(e),Ge()},$r=function(e){_r(function(){requestAnimationFrame(e)})},He=0,Dr=function(){return!!He},Ar=250,Ir={attributes:!0,characterData:!0,childList:!0,subtree:!0},Et=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],Tt=function(e){return e===void 0&&(e=0),Date.now()+e},Je=!1,Mr=(function(){function e(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return e.prototype.run=function(t){var n=this;if(t===void 0&&(t=Ar),!Je){Je=!0;var r=Tt(t);$r(function(){var i=!1;try{i=Or()}finally{if(Je=!1,t=r-Tt(),!Dr())return;i?n.run(1e3):t>0?n.run(t):n.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var t=this,n=function(){return t.observer&&t.observer.observe(document.body,Ir)};document.body?n():we.addEventListener("DOMContentLoaded",n)},e.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),Et.forEach(function(n){return we.addEventListener(n,t.listener,!0)}))},e.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),Et.forEach(function(n){return we.removeEventListener(n,t.listener,!0)}),this.stopped=!0)},e})(),nt=new Mr,kt=function(e){!He&&e>0&&nt.start(),He+=e,!He&&nt.stop()},Br=function(e){return!ut(e)&&!Cr(e)&&getComputedStyle(e).display==="inline"},Hr=(function(){function e(t,n){this.target=t,this.observedBox=n||ye.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var t=Gt(this.target,this.observedBox,!0);return Br(this.target)&&(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e})(),Nr=(function(){function e(t,n){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=n}return e})(),Ae=new WeakMap,Ot=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1},Ie=(function(){function e(){}return e.connect=function(t,n){var r=new Nr(t,n);Ae.set(t,r)},e.observe=function(t,n,r){var i=Ae.get(t),u=i.observationTargets.length===0;Ot(i.observationTargets,n)<0&&(u&&oe.push(i),i.observationTargets.push(new Hr(n,r&&r.box)),kt(1),nt.schedule())},e.unobserve=function(t,n){var r=Ae.get(t),i=Ot(r.observationTargets,n),u=r.observationTargets.length===1;i>=0&&(u&&oe.splice(oe.indexOf(r),1),r.observationTargets.splice(i,1),kt(-1))},e.disconnect=function(t){var n=this,r=Ae.get(t);r.observationTargets.slice().forEach(function(i){return n.unobserve(t,i.target)}),r.activeTargets.splice(0,r.activeTargets.length)},e})(),Vr=(function(){function e(t){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof t!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Ie.connect(this,t)}return e.prototype.observe=function(t,n){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!St(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Ie.observe(this,t,n)},e.prototype.unobserve=function(t){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!St(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Ie.unobserve(this,t)},e.prototype.disconnect=function(){Ie.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e})();class Lr{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<"u"&&window.ResizeObserver||Vr)(this.handleResize),this.elHandlersMap=new Map}handleResize(t){for(const n of t){const r=this.elHandlersMap.get(n.target);r!==void 0&&r(n)}}registerHandler(t,n){this.elHandlersMap.set(t,n),this.observer.observe(t)}unregisterHandler(t){this.elHandlersMap.has(t)&&(this.elHandlersMap.delete(t),this.observer.unobserve(t))}}const Pt=new Lr,_t=pe({name:"ResizeObserver",props:{onResize:Function},setup(e){let t=!1;const n=jn().proxy;function r(i){const{onResize:u}=e;u!==void 0&&u(i)}st(()=>{const i=n.$el;if(i===void 0){wt("resize-observer","$el does not exist.");return}if(i.nextElementSibling!==i.nextSibling&&i.nodeType===3&&i.nodeValue!==""){wt("resize-observer","$el can not be observed (it may be a text node).");return}i.nextElementSibling!==null&&(Pt.registerHandler(i.nextElementSibling,r),t=!0)}),at(()=>{t&&Pt.unregisterHandler(n.$el.nextElementSibling)})},render(){return Ln(this.$slots,"default")}});function rt(e,t=!0,n=[]){return e.forEach(r=>{if(r!==null){if(typeof r!="object"){(typeof r=="string"||typeof r=="number")&&n.push(Wn(String(r)));return}if(Array.isArray(r)){rt(r,t,n);return}if(r.type===tt){if(r.children===null)return;Array.isArray(r.children)&&rt(r.children,t,n)}else{if(r.type===Un&&t)return;n.push(r)}}}),n}function $t(e,t=[],n){const r={};return t.forEach(i=>{r[i]=e[i]}),Object.assign(r,n)}var jr="[object Symbol]";function Wr(e){return typeof e=="symbol"||Fn(e)&&Xn(e)==jr}function Ur(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var Dt=pt?pt.prototype:void 0,At=Dt?Dt.toString:void 0;function en(e){if(typeof e=="string")return e;if(Zn(e))return Ur(e,en)+"";if(Wr(e))return At?At.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function Le(e){return e==null?"":en(e)}function Fr(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var u=Array(i);++r<i;)u[r]=e[r+t];return u}function Xr(e,t,n){var r=e.length;return n=n===void 0?r:n,!t&&n>=r?e:Fr(e,t,n)}var Zr="\\ud800-\\udfff",Yr="\\u0300-\\u036f",Kr="\\ufe20-\\ufe2f",qr="\\u20d0-\\u20ff",Gr=Yr+Kr+qr,Jr="\\ufe0e\\ufe0f",Qr="\\u200d",eo=RegExp("["+Qr+Zr+Gr+Jr+"]");function tn(e){return eo.test(e)}function to(e){return e.split("")}var nn="\\ud800-\\udfff",no="\\u0300-\\u036f",ro="\\ufe20-\\ufe2f",oo="\\u20d0-\\u20ff",io=no+ro+oo,so="\\ufe0e\\ufe0f",ao="["+nn+"]",ot="["+io+"]",it="\\ud83c[\\udffb-\\udfff]",uo="(?:"+ot+"|"+it+")",rn="[^"+nn+"]",on="(?:\\ud83c[\\udde6-\\uddff]){2}",sn="[\\ud800-\\udbff][\\udc00-\\udfff]",lo="\\u200d",an=uo+"?",un="["+so+"]?",co="(?:"+lo+"(?:"+[rn,on,sn].join("|")+")"+un+an+")*",fo=un+an+co,vo="(?:"+[rn+ot+"?",ot,on,sn,ao].join("|")+")",ho=RegExp(it+"(?="+it+")|"+vo+fo,"g");function po(e){return e.match(ho)||[]}function go(e){return tn(e)?po(e):to(e)}function bo(e){return function(t){t=Le(t);var n=tn(t)?go(t):void 0,r=n?n[0]:t.charAt(0),i=n?Xr(n,1).join(""):t.slice(1);return r[e]()+i}}var xo=bo("toUpperCase");function mo(e){return xo(Le(e).toLowerCase())}function wo(e,t,n,r){for(var i=-1,u=e==null?0:e.length;++i<u;)n=t(n,e[i],i,e);return n}function yo(e){return function(t){return e==null?void 0:e[t]}}var So={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Ro=yo(So),Co=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,zo="\\u0300-\\u036f",Eo="\\ufe20-\\ufe2f",To="\\u20d0-\\u20ff",ko=zo+Eo+To,Oo="["+ko+"]",Po=RegExp(Oo,"g");function _o(e){return e=Le(e),e&&e.replace(Co,Ro).replace(Po,"")}var $o=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Do(e){return e.match($o)||[]}var Ao=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Io(e){return Ao.test(e)}var ln="\\ud800-\\udfff",Mo="\\u0300-\\u036f",Bo="\\ufe20-\\ufe2f",Ho="\\u20d0-\\u20ff",No=Mo+Bo+Ho,cn="\\u2700-\\u27bf",dn="a-z\\xdf-\\xf6\\xf8-\\xff",Vo="\\xac\\xb1\\xd7\\xf7",Lo="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",jo="\\u2000-\\u206f",Wo=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",fn="A-Z\\xc0-\\xd6\\xd8-\\xde",Uo="\\ufe0e\\ufe0f",vn=Vo+Lo+jo+Wo,hn="['’]",It="["+vn+"]",Fo="["+No+"]",pn="\\d+",Xo="["+cn+"]",gn="["+dn+"]",bn="[^"+ln+vn+pn+cn+dn+fn+"]",Zo="\\ud83c[\\udffb-\\udfff]",Yo="(?:"+Fo+"|"+Zo+")",Ko="[^"+ln+"]",xn="(?:\\ud83c[\\udde6-\\uddff]){2}",mn="[\\ud800-\\udbff][\\udc00-\\udfff]",ve="["+fn+"]",qo="\\u200d",Mt="(?:"+gn+"|"+bn+")",Go="(?:"+ve+"|"+bn+")",Bt="(?:"+hn+"(?:d|ll|m|re|s|t|ve))?",Ht="(?:"+hn+"(?:D|LL|M|RE|S|T|VE))?",wn=Yo+"?",yn="["+Uo+"]?",Jo="(?:"+qo+"(?:"+[Ko,xn,mn].join("|")+")"+yn+wn+")*",Qo="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ei="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ti=yn+wn+Jo,ni="(?:"+[Xo,xn,mn].join("|")+")"+ti,ri=RegExp([ve+"?"+gn+"+"+Bt+"(?="+[It,ve,"$"].join("|")+")",Go+"+"+Ht+"(?="+[It,ve+Mt,"$"].join("|")+")",ve+"?"+Mt+"+"+Bt,ve+"+"+Ht,ei,Qo,pn,ni].join("|"),"g");function oi(e){return e.match(ri)||[]}function ii(e,t,n){return e=Le(e),t=t,t===void 0?Io(e)?oi(e):Do(e):e.match(t)||[]}var si="['’]",ai=RegExp(si,"g");function ui(e){return function(t){return wo(ii(_o(t).replace(ai,"")),e,"")}}var Nt=ui(function(e,t,n){return t=t.toLowerCase(),e+(n?mo(t):t)});function li(){return{dotSize:"8px",dotColor:"rgba(255, 255, 255, .3)",dotColorActive:"rgba(255, 255, 255, 1)",dotColorFocus:"rgba(255, 255, 255, .5)",dotLineWidth:"16px",dotLineWidthActive:"24px",arrowColor:"#eee"}}const ci={common:lr,self:li},Sn=qn("n-carousel-methods");function di(e){Gn(Sn,e)}function lt(e="unknown",t="component"){const n=Yn(Sn);return n||Kn(e,`\`${t}\` must be placed inside \`n-carousel\`.`),n}function fi(){return $("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},$("g",{fill:"none"},$("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"})))}function vi(){return $("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},$("g",{fill:"none"},$("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"})))}const hi=pe({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:t}=Ve(e),{isVertical:n,isPrevDisabled:r,isNextDisabled:i,prev:u,next:f}=lt();return{mergedClsPrefix:t,isVertical:n,isPrevDisabled:r,isNextDisabled:i,prev:u,next:f}},render(){const{mergedClsPrefix:e}=this;return $("div",{class:`${e}-carousel__arrow-group`},$("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},fi()),$("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},vi()))}}),pi={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},gi=pe({name:"CarouselDots",props:pi,setup(e){const{mergedClsPrefixRef:t}=Ve(e),n=F([]),r=lt();function i(b,d){switch(b.key){case"Enter":case" ":b.preventDefault(),r.to(d);return}e.keyboard&&y(b)}function u(b){e.trigger==="hover"&&r.to(b)}function f(b){e.trigger==="click"&&r.to(b)}function y(b){var d;if(b.shiftKey||b.altKey||b.ctrlKey||b.metaKey)return;const h=(d=document.activeElement)===null||d===void 0?void 0:d.nodeName.toLowerCase();if(h==="input"||h==="textarea")return;const{code:O}=b,I=O==="PageUp"||O==="ArrowUp",V=O==="PageDown"||O==="ArrowDown",P=O==="PageUp"||O==="ArrowRight",_=O==="PageDown"||O==="ArrowLeft",H=r.isVertical(),N=H?I:P,B=H?V:_;!N&&!B||(b.preventDefault(),N&&!r.isNextDisabled()?(r.next(),R(r.currentIndexRef.value)):B&&!r.isPrevDisabled()&&(r.prev(),R(r.currentIndexRef.value)))}function R(b){var d;(d=n.value[b])===null||d===void 0||d.focus()}return Jn(()=>n.value.length=0),{mergedClsPrefix:t,dotEls:n,handleKeydown:i,handleMouseenter:u,handleClick:f}},render(){const{mergedClsPrefix:e,dotEls:t}=this;return $("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},vr(this.total,n=>{const r=n===this.currentIndex;return $("div",{"aria-selected":r,ref:i=>t.push(i),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,r&&`${e}-carousel__dot--active`],key:n,onClick:()=>{this.handleClick(n)},onMouseenter:()=>{this.handleMouseenter(n)},onKeydown:i=>{this.handleKeydown(i,n)}})}))}}),Ne="CarouselItem";function bi(e){var t;return((t=e.type)===null||t===void 0?void 0:t.name)===Ne}const Rn=pe({name:Ne,setup(e){const{mergedClsPrefixRef:t}=Ve(e),n=lt(Nt(Ne),`n-${Nt(Ne)}`),r=F(),i=S(()=>{const{value:d}=r;return d?n.getSlideIndex(d):-1}),u=S(()=>n.isPrev(i.value)),f=S(()=>n.isNext(i.value)),y=S(()=>n.isActive(i.value)),R=S(()=>n.getSlideStyle(i.value));st(()=>{n.addSlide(r.value)}),at(()=>{n.removeSlide(r.value)});function b(d){const{value:h}=i;h!==void 0&&(n==null||n.onCarouselItemClick(h,d))}return{mergedClsPrefix:t,selfElRef:r,isPrev:u,isNext:f,isActive:y,index:i,style:R,handleClick:b}},render(){var e;const{$slots:t,mergedClsPrefix:n,isPrev:r,isNext:i,isActive:u,index:f,style:y}=this,R=[`${n}-carousel__slide`,{[`${n}-carousel__slide--current`]:u,[`${n}-carousel__slide--prev`]:r,[`${n}-carousel__slide--next`]:i}];return $("div",{ref:"selfElRef",class:R,role:"option",tabindex:"-1","data-index":f,"aria-hidden":!u,style:y,onClickCapture:this.handleClick},(e=t.default)===null||e===void 0?void 0:e.call(t,{isPrev:r,isNext:i,isActive:u,index:f}))}}),xi=cr("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[m("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[m("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[U("> img",`
 display: block;
 `)])]),m("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[w("dot",[m("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[U("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),w("active",`
 background-color: var(--n-dot-color-active);
 `)])]),w("line",[m("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[U("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),w("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),m("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `,[U("svg",`
 height: 1em;
 width: 1em;
 `),U("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),w("vertical",`
 touch-action: pan-x;
 `,[m("slides",`
 flex-direction: column;
 `),w("fade",[m("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),w("card",[m("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[w("current",`
 transform: translateY(-50%) translateZ(0);
 `),w("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),w("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),w("usercontrol",[m("slides",[U(">",[U("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),w("left",[m("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[w("line",[m("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[w("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),m("dot",`
 margin: 4px 0;
 `)]),m("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),w("vertical",[m("arrow",`
 transform: rotate(90deg);
 `)]),w("show-arrow",[w("bottom",[m("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),w("top",[m("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),w("left",[m("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),w("right",[m("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),w("left",[m("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[U("> *:first-child",`
 margin-bottom: 12px;
 `)])]),w("right",[m("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[w("line",[m("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[w("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),m("dot",`
 margin: 4px 0;
 `),m("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[U("> *:first-child",`
 margin-bottom: 12px;
 `)])]),w("top",[m("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[w("line",[m("dot",`
 margin: 0 4px;
 `)])]),m("dot",`
 margin: 0 4px;
 `),m("arrow-group",`
 top: 12px;
 right: 12px;
 `,[U("> *:first-child",`
 margin-right: 12px;
 `)])]),w("bottom",[m("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[w("line",[m("dot",`
 margin: 0 4px;
 `)])]),m("dot",`
 margin: 0 4px;
 `),m("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[U("> *:first-child",`
 margin-right: 12px;
 `)])]),w("fade",[m("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[w("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),w("card",[m("slides",`
 perspective: 1000px;
 `),m("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[w("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),w("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),w("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]);function mi(e){const{length:t}=e;return t>1&&(e.push(Vt(e[0],0,"append")),e.unshift(Vt(e[t-1],t-1,"prepend"))),e}function Vt(e,t,n){return Ut(e,{key:`carousel-item-duplicate-${t}-${n}`})}function Lt(e,t,n){return t===1?0:n?e===0?t-3:e===t-1?0:e-1:e}function Qe(e,t){return t?e+1:e}function wi(e,t,n){return e<0?null:e===0?n?t-1:null:e-1}function yi(e,t,n){return e>t-1?null:e===t-1?n?0:null:e+1}function Si(e,t){return t&&e>3?e-2:e}function jt(e){return window.TouchEvent&&e instanceof window.TouchEvent}function Wt(e,t){let{offsetWidth:n,offsetHeight:r}=e;if(t){const i=getComputedStyle(e);n=n-Number.parseFloat(i.getPropertyValue("padding-left"))-Number.parseFloat(i.getPropertyValue("padding-right")),r=r-Number.parseFloat(i.getPropertyValue("padding-top"))-Number.parseFloat(i.getPropertyValue("padding-bottom"))}return{width:n,height:r}}function Me(e,t,n){return e<t?t:e>n?n:e}function Ri(e){if(e===void 0)return 0;if(typeof e=="number")return e;const t=/^((\d+)?\.?\d+?)(ms|s)?$/,n=e.match(t);if(n){const[,r,,i="ms"]=n;return Number(r)*(i==="ms"?1:1e3)}return 0}const Ci=["transitionDuration","transitionTimingFunction"],zi=Object.assign(Object.assign({},Xt.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let et=!1;const Ei=pe({name:"Carousel",props:zi,slots:Object,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=Ve(e),r=F(null),i=F(null),u=F([]),f={value:[]},y=S(()=>e.direction==="vertical"),R=S(()=>y.value?"height":"width"),b=S(()=>y.value?"bottom":"right"),d=S(()=>e.effect==="slide"),h=S(()=>e.loop&&e.slidesPerView===1&&d.value),O=S(()=>e.effect==="custom"),I=S(()=>!d.value||e.centeredSlides?1:e.slidesPerView),V=S(()=>O.value?1:e.slidesPerView),P=S(()=>I.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),_=F({width:0,height:0}),H=F(0),N=S(()=>{const{value:o}=u;if(!o.length)return[];H.value;const{value:a}=P;if(a)return o.map(k=>Wt(k));const{value:c}=V,{value:g}=_,{value:x}=R;let v=g[x];if(c!=="auto"){const{spaceBetween:k}=e,j=v-(c-1)*k,Oe=1/Math.max(1,c);v=j*Oe}const z=Object.assign(Object.assign({},g),{[x]:v});return o.map(()=>z)}),B=S(()=>{const{value:o}=N;if(!o.length)return[];const{centeredSlides:a,spaceBetween:c}=e,{value:g}=R,{[g]:x}=_.value;let v=0;return o.map(({[g]:z})=>{let k=v;return a&&(k+=(z-x)/2),v+=z+c,k})}),te=F(!1),J=S(()=>{const{transitionStyle:o}=e;return o?$t(o,Ci):{}}),Q=S(()=>O.value?0:Ri(J.value.transitionDuration)),l=S(()=>{const{value:o}=u;if(!o.length)return[];const a=!(P.value||V.value===1),c=z=>{if(a){const{value:k}=R;return{[k]:`${N.value[z][k]}px`}}};if(O.value)return o.map((z,k)=>c(k));const{effect:g,spaceBetween:x}=e,{value:v}=b;return o.reduce((z,k,j)=>{const Oe=Object.assign(Object.assign({},c(j)),{[`margin-${v}`]:`${x}px`});return z.push(Oe),te.value&&(g==="fade"||g==="card")&&Object.assign(Oe,J.value),z},[])}),s=S(()=>{const{value:o}=I,{length:a}=u.value;if(o!=="auto")return Math.max(a-o,0)+1;{const{value:c}=N,{length:g}=c;if(!g)return a;const{value:x}=B,{value:v}=R,z=_.value[v];let k=c[c.length-1][v],j=g;for(;j>1&&k<z;)j--,k+=x[j]-x[j-1];return Me(j+1,1,g)}}),p=S(()=>Si(s.value,h.value)),C=Qe(e.defaultIndex,h.value),T=F(Lt(C,s.value,h.value)),E=mr(or(e,"currentIndex"),T),D=S(()=>Qe(E.value,h.value));function A(o){var a,c;o=Me(o,0,s.value-1);const g=Lt(o,s.value,h.value),{value:x}=E;g!==E.value&&(T.value=g,(a=e["onUpdate:currentIndex"])===null||a===void 0||a.call(e,g,x),(c=e.onUpdateCurrentIndex)===null||c===void 0||c.call(e,g,x))}function M(o=D.value){return wi(o,s.value,e.loop)}function L(o=D.value){return yi(o,s.value,e.loop)}function Y(o){const a=ae(o);return a!==null&&M()===a&&s.value>1}function X(o){const a=ae(o);return a!==null&&L()===a&&s.value>1}function K(o){return D.value===ae(o)}function ne(o){return E.value===o}function q(){return M()===null}function Se(){return L()===null}let se=0;function je(o){const a=Me(Qe(o,h.value),0,s.value);(o!==E.value||a!==D.value)&&A(a)}function Re(){const o=M();o!==null&&(se=-1,A(o))}function ge(){const o=L();o!==null&&(se=1,A(o))}let W=!1;function Cn(){(!W||!h.value)&&Re()}function zn(){(!W||!h.value)&&ge()}let re=0;const We=F({});function Ce(o,a=0){We.value=Object.assign({},J.value,{transform:y.value?`translateY(${-o}px)`:`translateX(${-o}px)`,transitionDuration:`${a}ms`})}function be(o=0){d.value?Ue(D.value,o):re!==0&&(!W&&o>0&&(W=!0),Ce(re=0,o))}function Ue(o,a){const c=ct(o);c!==re&&a>0&&(W=!0),re=ct(D.value),Ce(c,a)}function ct(o){let a;return o>=s.value-1?a=dt():a=B.value[o]||0,a}function dt(){if(I.value==="auto"){const{value:o}=R,{[o]:a}=_.value,{value:c}=B,g=c[c.length-1];let x;if(g===void 0)x=a;else{const{value:v}=N;x=g+v[v.length-1][o]}return x-a}else{const{value:o}=B;return o[s.value-1]||0}}const xe={currentIndexRef:E,to:je,prev:Cn,next:zn,isVertical:()=>y.value,isHorizontal:()=>!y.value,isPrev:Y,isNext:X,isActive:K,isPrevDisabled:q,isNextDisabled:Se,getSlideIndex:ae,getSlideStyle:kn,addSlide:En,removeSlide:Tn,onCarouselItemClick:On};di(xe);function En(o){o&&u.value.push(o)}function Tn(o){if(!o)return;const a=ae(o);a!==-1&&u.value.splice(a,1)}function ae(o){return typeof o=="number"?o:o?u.value.indexOf(o):-1}function kn(o){const a=ae(o);if(a!==-1){const c=[l.value[a]],g=xe.isPrev(a),x=xe.isNext(a);return g&&c.push(e.prevSlideStyle||""),x&&c.push(e.nextSlideStyle||""),Ft(c)}}let Fe=0,Xe=0,G=0,Ze=0,ze=!1,Ye=!1;function On(o,a){let c=!W&&!ze&&!Ye;e.effect==="card"&&c&&!K(o)&&(je(o),c=!1),c||(a.preventDefault(),a.stopPropagation())}let Ee=null;function Te(){Ee&&(clearInterval(Ee),Ee=null)}function ue(){Te(),!e.autoplay||p.value<2||(Ee=window.setInterval(ge,e.interval))}function ft(o){var a;if(et||!(!((a=i.value)===null||a===void 0)&&a.contains(fr(o))))return;et=!0,ze=!0,Ye=!1,Ze=Date.now(),Te(),o.type!=="touchstart"&&!o.target.isContentEditable&&o.preventDefault();const c=jt(o)?o.touches[0]:o;y.value?Xe=c.clientY:Fe=c.clientX,e.touchable&&(de("touchmove",document,ke),de("touchend",document,le),de("touchcancel",document,le)),e.draggable&&(de("mousemove",document,ke),de("mouseup",document,le))}function ke(o){const{value:a}=y,{value:c}=R,g=jt(o)?o.touches[0]:o,x=a?g.clientY-Xe:g.clientX-Fe,v=_.value[c];G=Me(x,-v,v),o.cancelable&&o.preventDefault(),d.value&&Ce(re-G,0)}function le(){const{value:o}=D;let a=o;if(!W&&G!==0&&d.value){const c=re-G,g=[...B.value.slice(0,s.value-1),dt()];let x=null;for(let v=0;v<g.length;v++){const z=Math.abs(g[v]-c);if(x!==null&&x<z)break;x=z,a=v}}if(a===o){const c=Date.now()-Ze,{value:g}=R,x=_.value[g];G>x/2||G/c>.4?Re():(G<-x/2||G/c<-.4)&&ge()}a!==null&&a!==o?(Ye=!0,A(a),gt(()=>{(!h.value||T.value!==E.value)&&be(Q.value)})):be(Q.value),vt(),ue()}function vt(){ze&&(et=!1),ze=!1,Fe=0,Xe=0,G=0,Ze=0,fe("touchmove",document,ke),fe("touchend",document,le),fe("touchcancel",document,le),fe("mousemove",document,ke),fe("mouseup",document,le)}function Pn(){if(d.value&&W){const{value:o}=D;Ue(o,0)}else ue();d.value&&(We.value.transitionDuration="0ms"),W=!1}function _n(o){if(o.preventDefault(),W)return;let{deltaX:a,deltaY:c}=o;o.shiftKey&&!a&&(a=c);const g=-1,x=1,v=(a||c)>0?x:g;let z=0,k=0;y.value?k=v:z=v;const j=10;(k*c>=j||z*a>=j)&&(v===x&&!Se()?ge():v===g&&!q()&&Re())}function $n(){_.value=Wt(r.value,!0),ue()}function Dn(){P.value&&H.value++}function An(){e.autoplay&&Te()}function In(){e.autoplay&&ue()}st(()=>{nr(ue),requestAnimationFrame(()=>te.value=!0)}),at(()=>{vt(),Te()}),rr(()=>{const{value:o}=u,{value:a}=f,c=new Map,g=v=>c.has(v)?c.get(v):-1;let x=!1;for(let v=0;v<o.length;v++){const z=a.findIndex(k=>k.el===o[v]);z!==v&&(x=!0),c.set(o[v],z)}x&&o.sort((v,z)=>g(v)-g(z))}),me(D,(o,a)=>{if(o===a){se=0;return}if(ue(),d.value){if(h.value){const{value:c}=s;se===-1&&a===1&&o===c-2?o=0:se===1&&a===c-2&&o===1&&(o=c-1)}Ue(o,Q.value)}else be();se=0},{immediate:!0}),me([h,I],()=>void gt(()=>{A(D.value)})),me(B,()=>{d.value&&be()},{deep:!0}),me(d,o=>{o?be():(W=!1,Ce(re=0))});const Mn=S(()=>({onTouchstartPassive:e.touchable?ft:void 0,onMousedown:e.draggable?ft:void 0,onWheel:e.mousewheel?_n:void 0})),Bn=S(()=>Object.assign(Object.assign({},$t(xe,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:p.value,currentIndex:E.value})),Hn=S(()=>({total:p.value,currentIndex:E.value,to:xe.to})),Nn={getCurrentIndex:()=>E.value,to:je,prev:Re,next:ge},Vn=Xt("Carousel","-carousel",xi,ci,e,t),ht=S(()=>{const{common:{cubicBezierEaseInOut:o},self:{dotSize:a,dotColor:c,dotColorActive:g,dotColorFocus:x,dotLineWidth:v,dotLineWidthActive:z,arrowColor:k}}=Vn.value;return{"--n-bezier":o,"--n-dot-color":c,"--n-dot-color-focus":x,"--n-dot-color-active":g,"--n-dot-size":a,"--n-dot-line-width":v,"--n-dot-line-width-active":z,"--n-arrow-color":k}}),ce=n?dr("carousel",void 0,ht,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:t,selfElRef:r,slidesElRef:i,slideVNodes:f,duplicatedable:h,userWantsControl:O,autoSlideSize:P,realIndex:D,slideStyles:l,translateStyle:We,slidesControlListeners:Mn,handleTransitionEnd:Pn,handleResize:$n,handleSlideResize:Dn,handleMouseenter:An,handleMouseleave:In,isActive:ne,arrowSlotProps:Bn,dotSlotProps:Hn},Nn),{cssVars:n?void 0:ht,themeClass:ce==null?void 0:ce.themeClass,onRender:ce==null?void 0:ce.onRender})},render(){var e;const{mergedClsPrefix:t,showArrow:n,userWantsControl:r,slideStyles:i,dotType:u,dotPlacement:f,slidesControlListeners:y,transitionProps:R={},arrowSlotProps:b,dotSlotProps:d,$slots:{default:h,dots:O,arrow:I}}=this,V=h&&rt(h())||[];let P=Ti(V);return P.length||(P=V.map(_=>$(Rn,null,{default:()=>Ut(_)}))),this.duplicatedable&&(P=mi(P)),this.slideVNodes.value=P,this.autoSlideSize&&(P=P.map(_=>$(_t,{onResize:this.handleSlideResize},{default:()=>_}))),(e=this.onRender)===null||e===void 0||e.call(this),$("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${t}-carousel`,this.direction==="vertical"&&`${t}-carousel--vertical`,this.showArrow&&`${t}-carousel--show-arrow`,`${t}-carousel--${f}`,`${t}-carousel--${this.direction}`,`${t}-carousel--${this.effect}`,r&&`${t}-carousel--usercontrol`],style:this.cssVars},y,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),$(_t,{onResize:this.handleResize},{default:()=>$("div",{ref:"slidesElRef",class:`${t}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},r?P.map((_,H)=>$("div",{style:i[H],key:H},Qn($(tr,Object.assign({},R),{default:()=>_}),[[er,this.isActive(H)]]))):P)}),this.showDots&&d.total>1&&mt(O,d,()=>[$(gi,{key:u+f,total:d.total,currentIndex:d.currentIndex,dotType:u,trigger:this.trigger,keyboard:this.keyboard})]),n&&mt(I,b,()=>[$(hi,null)]))}});function Ti(e){return e.reduce((t,n)=>(bi(n)&&t.push(n),t),[])}const ki={class:"absolute bottom-4 left-0 right-0 flex justify-center gap-2"},Oi=["aria-label","onClick"],Pi=["onClick"],_i={class:"h-1/3 min-h-[36vh] flex items-center justify-center shrink-0 pt-8"},$i={class:"inline-block select-none",style:{"font-size":"11rem","line-height":"1"},"aria-hidden":"true"},Di={class:"shrink-0 pb-16 pt-2 text-center"},Bi=pe({__name:"HomeView",setup(e){const t=F(null),n=ir(ur(t)),r=S(()=>({transform:`translateX(${n.tilt*20}px) translateY(${n.roll*20}px) rotateX(${n.roll*14}deg) rotateY(${n.tilt*14}deg)`,transition:"transform 0.15s ease-out"})),i=[{key:"card",title:"卡片",path:"/card",bg:"bg-sky-100",textColor:"text-sky-800",icon:"🎴"},{key:"gem",title:"宝石",path:"/gem",bg:"bg-violet-100",textColor:"text-violet-800",icon:"💎"},{key:"paper-cutting",title:"剪纸画",path:"/paper-cutting",bg:"bg-rose-100",textColor:"text-rose-800",icon:"✂️"},{key:"story",title:"故事",path:"/story",bg:"bg-amber-50",textColor:"text-amber-900",icon:"📖"},{key:"newspaper",title:"哈利波特报纸",path:"/newspaper",bg:"bg-stone-100",textColor:"text-stone-700",icon:"📰"}];return(u,f)=>{const y=sr("RouterLink"),R=Rn,b=Ei;return $e(),Pe("div",{ref_key:"container",ref:t,class:"home-carousel h-screen w-full overflow-hidden touch-none"},[Ke(b,{"show-dots":"",draggable:"",style:{height:"100%"}},{dots:_e(({total:d,currentIndex:h,to:O})=>[ee("div",ki,[($e(!0),Pe(tt,null,bt(d,I=>($e(),Pe("button",{key:I,type:"button",class:qe(["h-2 rounded-full border-2 border-slate-500/80 bg-slate-400/50 transition-all duration-300 ease-out",I-1===h?"w-8 bg-slate-600":"w-4"]),"aria-label":`第 ${I} 页`,onClick:ar(V=>O(I-1),["stop"])},null,10,Oi))),128))])]),default:_e(()=>[($e(),Pe(tt,null,bt(i,d=>Ke(R,{key:d.key},{default:_e(()=>[Ke(y,{to:d.path,custom:""},{default:_e(({navigate:h})=>[ee("div",{class:qe(["h-full w-full flex flex-col cursor-grab active:cursor-grabbing select-none transition-colors",d.bg]),style:{"min-height":"100vh",perspective:"400px"},onClick:h},[ee("div",_i,[ee("div",{class:"inline-flex items-center justify-center rounded-3xl border-2 border-white/40 bg-white/30 shadow-lg backdrop-blur-sm",style:Ft([{padding:"1.5rem","min-width":"12rem","min-height":"12rem"},r.value])},[ee("span",$i,xt(d.icon),1)],4)]),f[0]||(f[0]=ee("div",{class:"flex-1"},null,-1)),ee("div",Di,[ee("span",{class:qe(["text-3xl font-medium",d.textColor])},xt(d.title),3)])],10,Pi)]),_:2},1032,["to"])]),_:2},1024)),64))]),_:1})],512)}}});export{Bi as default};
