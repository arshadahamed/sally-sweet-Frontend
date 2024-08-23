(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Go(e,t){const n=new Set(e.split(","));return t?r=>n.has(r.toLowerCase()):r=>n.has(r)}const le={},Nn=[],ze=()=>{},ch=()=>!1,ri=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Yo=e=>e.startsWith("onUpdate:"),ke=Object.assign,Jo=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},uh=Object.prototype.hasOwnProperty,J=(e,t)=>uh.call(e,t),V=Array.isArray,Ln=e=>$r(e)==="[object Map]",si=e=>$r(e)==="[object Set]",Qa=e=>$r(e)==="[object Date]",q=e=>typeof e=="function",be=e=>typeof e=="string",qt=e=>typeof e=="symbol",ae=e=>e!==null&&typeof e=="object",ou=e=>(ae(e)||q(e))&&q(e.then)&&q(e.catch),au=Object.prototype.toString,$r=e=>au.call(e),fh=e=>$r(e).slice(8,-1),lu=e=>$r(e)==="[object Object]",Xo=e=>be(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,_s=Go(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ii=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},dh=/-(\w)/g,ft=ii(e=>e.replace(dh,(t,n)=>n?n.toUpperCase():"")),hh=/\B([A-Z])/g,Xn=ii(e=>e.replace(hh,"-$1").toLowerCase()),oi=ii(e=>e.charAt(0).toUpperCase()+e.slice(1)),Pi=ii(e=>e?`on${oi(e)}`:""),Gt=(e,t)=>!Object.is(e,t),ws=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Ms=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ds=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Za;const cu=()=>Za||(Za=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qo(e){if(V(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=be(r)?vh(r):Qo(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(be(e)||ae(e))return e}const ph=/;(?![^(]*\))/g,mh=/:([^]+)/,gh=/\/\*[^]*?\*\//g;function vh(e){const t={};return e.replace(gh,"").split(ph).forEach(n=>{if(n){const r=n.split(mh);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Be(e){let t="";if(be(e))t=e;else if(V(e))for(let n=0;n<e.length;n++){const r=Be(e[n]);r&&(t+=r+" ")}else if(ae(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const bh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yh=Go(bh);function uu(e){return!!e||e===""}function _h(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ai(e[r],t[r]);return n}function ai(e,t){if(e===t)return!0;let n=Qa(e),r=Qa(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=qt(e),r=qt(t),n||r)return e===t;if(n=V(e),r=V(t),n||r)return n&&r?_h(e,t):!1;if(n=ae(e),r=ae(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const o in e){const a=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!ai(e[o],t[o]))return!1}}return String(e)===String(t)}function wh(e,t){return e.findIndex(n=>ai(n,t))}const Ie=e=>be(e)?e:e==null?"":V(e)||ae(e)&&(e.toString===au||!q(e.toString))?JSON.stringify(e,fu,2):String(e),fu=(e,t)=>t&&t.__v_isRef?fu(e,t.value):Ln(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[Ni(r,i)+" =>"]=s,n),{})}:si(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ni(n))}:qt(t)?Ni(t):ae(t)&&!V(t)&&!lu(t)?String(t):t,Ni=(e,t="")=>{var n;return qt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ye;class xh{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ye,!t&&Ye&&(this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ye;try{return Ye=this,t()}finally{Ye=n}}}on(){Ye=this}off(){Ye=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Eh(e,t=Ye){t&&t.active&&t.effects.push(e)}function Sh(){return Ye}let hn;class Zo{constructor(t,n,r,s){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=3,this._trackId=0,this._runnings=0,this._queryings=0,this._depsLength=0,Eh(this,s)}get dirty(){if(this._dirtyLevel===1){this._dirtyLevel=0,this._queryings++,Sn();for(const t of this.deps)if(t.computed&&(Ih(t.computed),this._dirtyLevel>=2))break;In(),this._queryings--}return this._dirtyLevel>=2}set dirty(t){this._dirtyLevel=t?3:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Vt,n=hn;try{return Vt=!0,hn=this,this._runnings++,el(this),this.fn()}finally{tl(this),this._runnings--,hn=n,Vt=t}}stop(){var t;this.active&&(el(this),tl(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function Ih(e){return e.value}function el(e){e._trackId++,e._depsLength=0}function tl(e){if(e.deps&&e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)du(e.deps[t],e);e.deps.length=e._depsLength}}function du(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let Vt=!0,so=0;const hu=[];function Sn(){hu.push(Vt),Vt=!1}function In(){const e=hu.pop();Vt=e===void 0?!0:e}function ea(){so++}function ta(){for(so--;!so&&io.length;)io.shift()()}function pu(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&du(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const io=[];function mu(e,t,n){ea();for(const r of e.keys())if(!(!r.allowRecurse&&r._runnings)&&r._dirtyLevel<t&&(!r._runnings||t!==2)){const s=r._dirtyLevel;r._dirtyLevel=t,s===0&&(!r._queryings||t!==2)&&(r.trigger(),r.scheduler&&io.push(r.scheduler))}ta()}const gu=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},oo=new WeakMap,pn=Symbol(""),ao=Symbol("");function Ue(e,t,n){if(Vt&&hn){let r=oo.get(e);r||oo.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=gu(()=>r.delete(n))),pu(hn,s)}}function yt(e,t,n,r,s,i){const o=oo.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&V(e)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!qt(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":V(e)?Xo(n)&&a.push(o.get("length")):(a.push(o.get(pn)),Ln(e)&&a.push(o.get(ao)));break;case"delete":V(e)||(a.push(o.get(pn)),Ln(e)&&a.push(o.get(ao)));break;case"set":Ln(e)&&a.push(o.get(pn));break}ea();for(const l of a)l&&mu(l,3);ta()}const kh=Go("__proto__,__v_isRef,__isVue"),vu=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(qt)),nl=Th();function Th(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=X(this);for(let i=0,o=this.length;i<o;i++)Ue(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(X)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Sn(),ea();const r=X(this)[t].apply(this,n);return ta(),In(),r}}),e}function Ah(e){const t=X(this);return Ue(t,"has",e),t.hasOwnProperty(e)}class bu{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Bh:xu:i?wu:_u).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=V(t);if(!s){if(o&&J(nl,n))return Reflect.get(nl,n,r);if(n==="hasOwnProperty")return Ah}const a=Reflect.get(t,n,r);return(qt(n)?vu.has(n):kh(n))||(s||Ue(t,"get",n),i)?a:$e(a)?o&&Xo(n)?a:a.value:ae(a)?s?Su(a):ci(a):a}}class yu extends bu{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._shallow){const l=Vn(i);if(!Us(r)&&!Vn(r)&&(i=X(i),r=X(r)),!V(t)&&$e(i)&&!$e(r))return l?!1:(i.value=r,!0)}const o=V(t)&&Xo(n)?Number(n)<t.length:J(t,n),a=Reflect.set(t,n,r,s);return t===X(s)&&(o?Gt(r,i)&&yt(t,"set",n,r):yt(t,"add",n,r)),a}deleteProperty(t,n){const r=J(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&yt(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!qt(n)||!vu.has(n))&&Ue(t,"has",n),r}ownKeys(t){return Ue(t,"iterate",V(t)?"length":pn),Reflect.ownKeys(t)}}class Ch extends bu{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Oh=new yu,Rh=new Ch,Ph=new yu(!0),na=e=>e,li=e=>Reflect.getPrototypeOf(e);function ss(e,t,n=!1,r=!1){e=e.__v_raw;const s=X(e),i=X(t);n||(Gt(t,i)&&Ue(s,"get",t),Ue(s,"get",i));const{has:o}=li(s),a=r?na:n?ia:_r;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function is(e,t=!1){const n=this.__v_raw,r=X(n),s=X(e);return t||(Gt(e,s)&&Ue(r,"has",e),Ue(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function os(e,t=!1){return e=e.__v_raw,!t&&Ue(X(e),"iterate",pn),Reflect.get(e,"size",e)}function rl(e){e=X(e);const t=X(this);return li(t).has.call(t,e)||(t.add(e),yt(t,"add",e,e)),this}function sl(e,t){t=X(t);const n=X(this),{has:r,get:s}=li(n);let i=r.call(n,e);i||(e=X(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?Gt(t,o)&&yt(n,"set",e,t):yt(n,"add",e,t),this}function il(e){const t=X(this),{has:n,get:r}=li(t);let s=n.call(t,e);s||(e=X(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&yt(t,"delete",e,void 0),i}function ol(){const e=X(this),t=e.size!==0,n=e.clear();return t&&yt(e,"clear",void 0,void 0),n}function as(e,t){return function(r,s){const i=this,o=i.__v_raw,a=X(o),l=t?na:e?ia:_r;return!e&&Ue(a,"iterate",pn),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function ls(e,t,n){return function(...r){const s=this.__v_raw,i=X(s),o=Ln(i),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=s[e](...r),u=n?na:t?ia:_r;return!t&&Ue(i,"iterate",l?ao:pn),{next(){const{value:f,done:p}=c.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function Rt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Nh(){const e={get(i){return ss(this,i)},get size(){return os(this)},has:is,add:rl,set:sl,delete:il,clear:ol,forEach:as(!1,!1)},t={get(i){return ss(this,i,!1,!0)},get size(){return os(this)},has:is,add:rl,set:sl,delete:il,clear:ol,forEach:as(!1,!0)},n={get(i){return ss(this,i,!0)},get size(){return os(this,!0)},has(i){return is.call(this,i,!0)},add:Rt("add"),set:Rt("set"),delete:Rt("delete"),clear:Rt("clear"),forEach:as(!0,!1)},r={get(i){return ss(this,i,!0,!0)},get size(){return os(this,!0)},has(i){return is.call(this,i,!0)},add:Rt("add"),set:Rt("set"),delete:Rt("delete"),clear:Rt("clear"),forEach:as(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=ls(i,!1,!1),n[i]=ls(i,!0,!1),t[i]=ls(i,!1,!0),r[i]=ls(i,!0,!0)}),[e,n,t,r]}const[Lh,Mh,Dh,Uh]=Nh();function ra(e,t){const n=t?e?Uh:Dh:e?Mh:Lh;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(J(n,s)&&s in r?n:r,s,i)}const $h={get:ra(!1,!1)},Fh={get:ra(!1,!0)},jh={get:ra(!0,!1)},_u=new WeakMap,wu=new WeakMap,xu=new WeakMap,Bh=new WeakMap;function Hh(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vh(e){return e.__v_skip||!Object.isExtensible(e)?0:Hh(fh(e))}function ci(e){return Vn(e)?e:sa(e,!1,Oh,$h,_u)}function Eu(e){return sa(e,!1,Ph,Fh,wu)}function Su(e){return sa(e,!0,Rh,jh,xu)}function sa(e,t,n,r,s){if(!ae(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=Vh(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function Mn(e){return Vn(e)?Mn(e.__v_raw):!!(e&&e.__v_isReactive)}function Vn(e){return!!(e&&e.__v_isReadonly)}function Us(e){return!!(e&&e.__v_isShallow)}function Iu(e){return Mn(e)||Vn(e)}function X(e){const t=e&&e.__v_raw;return t?X(t):e}function ku(e){return Ms(e,"__v_skip",!0),e}const _r=e=>ae(e)?ci(e):e,ia=e=>ae(e)?Su(e):e;class Tu{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Zo(()=>t(this._value),()=>lo(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=X(this);return Au(t),(!t._cacheable||t.effect.dirty)&&Gt(t._value,t._value=t.effect.run())&&lo(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function zh(e,t,n=!1){let r,s;const i=q(e);return i?(r=e,s=ze):(r=e.get,s=e.set),new Tu(r,s,i||!s,n)}function Au(e){Vt&&hn&&(e=X(e),pu(hn,e.dep||(e.dep=gu(()=>e.dep=void 0,e instanceof Tu?e:void 0))))}function lo(e,t=3,n){e=X(e);const r=e.dep;r&&mu(r,t)}function $e(e){return!!(e&&e.__v_isRef===!0)}function Cu(e){return Ou(e,!1)}function Wh(e){return Ou(e,!0)}function Ou(e,t){return $e(e)?e:new Kh(e,t)}class Kh{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:X(t),this._value=n?t:_r(t)}get value(){return Au(this),this._value}set value(t){const n=this.__v_isShallow||Us(t)||Vn(t);t=n?t:X(t),Gt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:_r(t),lo(this,3))}}function Dn(e){return $e(e)?e.value:e}const qh={get:(e,t,n)=>Dn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return $e(s)&&!$e(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Ru(e){return Mn(e)?e:new Proxy(e,qh)}/**
* @vue/runtime-core v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zt(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){ui(i,t,n)}return s}function Qe(e,t,n,r){if(q(e)){const i=zt(e,t,n,r);return i&&ou(i)&&i.catch(o=>{ui(o,t,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(Qe(e[i],t,n,r));return s}function ui(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=`https://vuejs.org/errors/#runtime-${n}`;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,a)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){zt(l,null,10,[e,o,a]);return}}Gh(e,n,s,r)}function Gh(e,t,n,r=!0){console.error(e)}let wr=!1,co=!1;const Ae=[];let ot=0;const Un=[];let Dt=null,an=0;const Pu=Promise.resolve();let oa=null;function Nu(e){const t=oa||Pu;return e?t.then(this?e.bind(this):e):t}function Yh(e){let t=ot+1,n=Ae.length;for(;t<n;){const r=t+n>>>1,s=Ae[r],i=xr(s);i<e||i===e&&s.pre?t=r+1:n=r}return t}function aa(e){(!Ae.length||!Ae.includes(e,wr&&e.allowRecurse?ot+1:ot))&&(e.id==null?Ae.push(e):Ae.splice(Yh(e.id),0,e),Lu())}function Lu(){!wr&&!co&&(co=!0,oa=Pu.then(Du))}function Jh(e){const t=Ae.indexOf(e);t>ot&&Ae.splice(t,1)}function Xh(e){V(e)?Un.push(...e):(!Dt||!Dt.includes(e,e.allowRecurse?an+1:an))&&Un.push(e),Lu()}function al(e,t,n=wr?ot+1:0){for(;n<Ae.length;n++){const r=Ae[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;Ae.splice(n,1),n--,r()}}}function Mu(e){if(Un.length){const t=[...new Set(Un)].sort((n,r)=>xr(n)-xr(r));if(Un.length=0,Dt){Dt.push(...t);return}for(Dt=t,an=0;an<Dt.length;an++)Dt[an]();Dt=null,an=0}}const xr=e=>e.id==null?1/0:e.id,Qh=(e,t)=>{const n=xr(e)-xr(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Du(e){co=!1,wr=!0,Ae.sort(Qh);try{for(ot=0;ot<Ae.length;ot++){const t=Ae[ot];t&&t.active!==!1&&zt(t,null,14)}}finally{ot=0,Ae.length=0,Mu(),wr=!1,oa=null,(Ae.length||Un.length)&&Du()}}function Zh(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||le;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=r[u]||le;p&&(s=n.map(g=>be(g)?g.trim():g)),f&&(s=n.map(Ds))}let a,l=r[a=Pi(t)]||r[a=Pi(ft(t))];!l&&i&&(l=r[a=Pi(Xn(t))]),l&&Qe(l,e,6,s);const c=r[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Qe(c,e,6,s)}}function Uu(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!q(e)){const l=c=>{const u=Uu(c,t,!0);u&&(a=!0,ke(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!a?(ae(e)&&r.set(e,null),null):(V(i)?i.forEach(l=>o[l]=null):ke(o,i),ae(e)&&r.set(e,o),o)}function fi(e,t){return!e||!ri(t)?!1:(t=t.slice(2).replace(/Once$/,""),J(e,t[0].toLowerCase()+t.slice(1))||J(e,Xn(t))||J(e,t))}let De=null,di=null;function $s(e){const t=De;return De=e,di=e&&e.type.__scopeId||null,t}function Fr(e){di=e}function jr(){di=null}function Ve(e,t=De,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&bl(-1);const i=$s(t);let o;try{o=e(...s)}finally{$s(i),r._d&&bl(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Li(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:p,setupState:g,ctx:b,inheritAttrs:_}=e;let O,y;const S=$s(e);try{if(n.shapeFlag&4){const F=s||r,K=F;O=it(u.call(K,F,f,i,g,p,b)),y=l}else{const F=t;O=it(F.length>1?F(i,{attrs:l,slots:a,emit:c}):F(i,null)),y=t.props?l:ep(l)}}catch(F){pr.length=0,ui(F,e,1),O=te(bn)}let C=O;if(y&&_!==!1){const F=Object.keys(y),{shapeFlag:K}=C;F.length&&K&7&&(o&&F.some(Yo)&&(y=tp(y,o)),C=zn(C,y))}return n.dirs&&(C=zn(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),O=C,$s(S),O}const ep=e=>{let t;for(const n in e)(n==="class"||n==="style"||ri(n))&&((t||(t={}))[n]=e[n]);return t},tp=(e,t)=>{const n={};for(const r in e)(!Yo(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function np(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ll(r,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==r[p]&&!fi(c,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ll(r,o,c):!0:!!o;return!1}function ll(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!fi(n,i))return!0}return!1}function rp({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const $u="components";function We(e,t){return ip($u,e,!0,t)||e}const sp=Symbol.for("v-ndc");function ip(e,t,n=!0,r=!1){const s=De||Ce;if(s){const i=s.type;if(e===$u){const a=Xp(i,!1);if(a&&(a===t||a===ft(t)||a===oi(ft(t))))return i}const o=cl(s[e]||i[e],t)||cl(s.appContext[e],t);return!o&&r?i:o}}function cl(e,t){return e&&(e[t]||e[ft(t)]||e[oi(ft(t))])}const op=e=>e.__isSuspense;function ap(e,t){t&&t.pendingBranch?V(e)?t.effects.push(...e):t.effects.push(e):Xh(e)}const lp=Symbol.for("v-scx"),cp=()=>_t(lp),cs={};function dr(e,t,n){return Fu(e,t,n)}function Fu(e,t,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=le){if(t&&i){const j=t;t=(...Q)=>{j(...Q),K()}}const l=Ce,c=j=>r===!0?j:cn(j,r===!1?1:void 0);let u,f=!1,p=!1;if($e(e)?(u=()=>e.value,f=Us(e)):Mn(e)?(u=()=>c(e),f=!0):V(e)?(p=!0,f=e.some(j=>Mn(j)||Us(j)),u=()=>e.map(j=>{if($e(j))return j.value;if(Mn(j))return c(j);if(q(j))return zt(j,l,2)})):q(e)?t?u=()=>zt(e,l,2):u=()=>(g&&g(),Qe(e,l,3,[b])):u=ze,t&&r){const j=u;u=()=>cn(j())}let g,b=j=>{g=C.onStop=()=>{zt(j,l,4),g=C.onStop=void 0}},_;if(gi)if(b=ze,t?n&&Qe(t,l,3,[u(),p?[]:void 0,b]):u(),s==="sync"){const j=cp();_=j.__watcherHandles||(j.__watcherHandles=[])}else return ze;let O=p?new Array(e.length).fill(cs):cs;const y=()=>{if(!(!C.active||!C.dirty))if(t){const j=C.run();(r||f||(p?j.some((Q,_e)=>Gt(Q,O[_e])):Gt(j,O)))&&(g&&g(),Qe(t,l,3,[j,O===cs?void 0:p&&O[0]===cs?[]:O,b]),O=j)}else C.run()};y.allowRecurse=!!t;let S;s==="sync"?S=y:s==="post"?S=()=>Me(y,l&&l.suspense):(y.pre=!0,l&&(y.id=l.uid),S=()=>aa(y));const C=new Zo(u,ze,S),F=Sh(),K=()=>{C.stop(),F&&Jo(F.effects,C)};return t?n?y():O=C.run():s==="post"?Me(C.run.bind(C),l&&l.suspense):C.run(),_&&_.push(K),K}function up(e,t,n){const r=this.proxy,s=be(e)?e.includes(".")?ju(r,e):()=>r[e]:e.bind(r,r);let i;q(t)?i=t:(i=t.handler,n=t);const o=Br(this),a=Fu(s,i.bind(r),n);return o(),a}function ju(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function cn(e,t,n=0,r){if(!ae(e)||e.__v_skip)return e;if(t&&t>0){if(n>=t)return e;n++}if(r=r||new Set,r.has(e))return e;if(r.add(e),$e(e))cn(e.value,t,n,r);else if(V(e))for(let s=0;s<e.length;s++)cn(e[s],t,n,r);else if(si(e)||Ln(e))e.forEach(s=>{cn(s,t,n,r)});else if(lu(e))for(const s in e)cn(e[s],t,n,r);return e}function vn(e,t){if(De===null)return e;const n=vi(De)||De.proxy,r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,o,a,l=le]=t[s];i&&(q(i)&&(i={mounted:i,updated:i}),i.deep&&cn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function rn(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Sn(),Qe(l,n,8,[e.el,a,e,t]),In())}}/*! #__NO_SIDE_EFFECTS__ */function la(e,t){return q(e)?ke({name:e.name},t,{setup:e}):e}const xs=e=>!!e.type.__asyncLoader,Bu=e=>e.type.__isKeepAlive;function fp(e,t){Hu(e,"a",t)}function dp(e,t){Hu(e,"da",t)}function Hu(e,t,n=Ce){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(hi(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Bu(s.parent.vnode)&&hp(r,t,n,s),s=s.parent}}function hp(e,t,n,r){const s=hi(t,e,r,!0);zu(()=>{Jo(r[t],s)},n)}function hi(e,t,n=Ce,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Sn();const a=Br(n),l=Qe(t,n,e,o);return a(),In(),l});return r?s.unshift(i):s.push(i),i}}const kt=e=>(t,n=Ce)=>(!gi||e==="sp")&&hi(e,(...r)=>t(...r),n),pp=kt("bm"),Vu=kt("m"),mp=kt("bu"),gp=kt("u"),vp=kt("bum"),zu=kt("um"),bp=kt("sp"),yp=kt("rtg"),_p=kt("rtc");function wp(e,t=Ce){hi("ec",e,t)}function uo(e,t,n,r){let s;const i=n&&n[r];if(V(e)||be(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i&&i[o])}else if(ae(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=t(e[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const fo=e=>e?nf(e)?vi(e)||e.proxy:fo(e.parent):null,hr=ke(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>fo(e.parent),$root:e=>fo(e.root),$emit:e=>e.emit,$options:e=>ca(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,aa(e.update)}),$nextTick:e=>e.n||(e.n=Nu.bind(e.proxy)),$watch:e=>up.bind(e)}),Mi=(e,t)=>e!==le&&!e.__isScriptSetup&&J(e,t),xp={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Mi(r,t))return o[t]=1,r[t];if(s!==le&&J(s,t))return o[t]=2,s[t];if((c=e.propsOptions[0])&&J(c,t))return o[t]=3,i[t];if(n!==le&&J(n,t))return o[t]=4,n[t];ho&&(o[t]=0)}}const u=hr[t];let f,p;if(u)return t==="$attrs"&&Ue(e,"get",t),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==le&&J(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,J(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Mi(s,t)?(s[t]=n,!0):r!==le&&J(r,t)?(r[t]=n,!0):J(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==le&&J(e,o)||Mi(t,o)||(a=i[0])&&J(a,o)||J(r,o)||J(hr,o)||J(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:J(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ul(e){return V(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ho=!0;function Ep(e){const t=ca(e),n=e.proxy,r=e.ctx;ho=!1,t.beforeCreate&&fl(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:p,beforeUpdate:g,updated:b,activated:_,deactivated:O,beforeDestroy:y,beforeUnmount:S,destroyed:C,unmounted:F,render:K,renderTracked:j,renderTriggered:Q,errorCaptured:_e,serverPrefetch:ve,expose:Pe,inheritAttrs:Ct,components:nn,directives:tt,filters:nr}=t;if(c&&Sp(c,r,null),o)for(const re in o){const Z=o[re];q(Z)&&(r[re]=Z.bind(n))}if(s){const re=s.call(n,n);ae(re)&&(e.data=ci(re))}if(ho=!0,i)for(const re in i){const Z=i[re],ht=q(Z)?Z.bind(n,n):q(Z.get)?Z.get.bind(n,n):ze,Ot=!q(Z)&&q(Z.set)?Z.set.bind(n):ze,nt=Se({get:ht,set:Ot});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Ne=>nt.value=Ne})}if(a)for(const re in a)Wu(a[re],r,n,re);if(l){const re=q(l)?l.call(n):l;Reflect.ownKeys(re).forEach(Z=>{Es(Z,re[Z])})}u&&fl(u,e,"c");function we(re,Z){V(Z)?Z.forEach(ht=>re(ht.bind(n))):Z&&re(Z.bind(n))}if(we(pp,f),we(Vu,p),we(mp,g),we(gp,b),we(fp,_),we(dp,O),we(wp,_e),we(_p,j),we(yp,Q),we(vp,S),we(zu,F),we(bp,ve),V(Pe))if(Pe.length){const re=e.exposed||(e.exposed={});Pe.forEach(Z=>{Object.defineProperty(re,Z,{get:()=>n[Z],set:ht=>n[Z]=ht})})}else e.exposed||(e.exposed={});K&&e.render===ze&&(e.render=K),Ct!=null&&(e.inheritAttrs=Ct),nn&&(e.components=nn),tt&&(e.directives=tt)}function Sp(e,t,n=ze){V(e)&&(e=po(e));for(const r in e){const s=e[r];let i;ae(s)?"default"in s?i=_t(s.from||r,s.default,!0):i=_t(s.from||r):i=_t(s),$e(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function fl(e,t,n){Qe(V(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Wu(e,t,n,r){const s=r.includes(".")?ju(n,r):()=>n[r];if(be(e)){const i=t[e];q(i)&&dr(s,i)}else if(q(e))dr(s,e.bind(n));else if(ae(e))if(V(e))e.forEach(i=>Wu(i,t,n,r));else{const i=q(e.handler)?e.handler.bind(n):t[e.handler];q(i)&&dr(s,i,e)}}function ca(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let l;return a?l=a:!s.length&&!n&&!r?l=t:(l={},s.length&&s.forEach(c=>Fs(l,c,o,!0)),Fs(l,t,o)),ae(t)&&i.set(t,l),l}function Fs(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Fs(e,i,n,!0),s&&s.forEach(o=>Fs(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=Ip[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Ip={data:dl,props:hl,emits:hl,methods:lr,computed:lr,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:lr,directives:lr,watch:Tp,provide:dl,inject:kp};function dl(e,t){return t?e?function(){return ke(q(e)?e.call(this,this):e,q(t)?t.call(this,this):t)}:t:e}function kp(e,t){return lr(po(e),po(t))}function po(e){if(V(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Re(e,t){return e?[...new Set([].concat(e,t))]:t}function lr(e,t){return e?ke(Object.create(null),e,t):t}function hl(e,t){return e?V(e)&&V(t)?[...new Set([...e,...t])]:ke(Object.create(null),ul(e),ul(t??{})):t}function Tp(e,t){if(!e)return t;if(!t)return e;const n=ke(Object.create(null),e);for(const r in t)n[r]=Re(e[r],t[r]);return n}function Ku(){return{app:null,config:{isNativeTag:ch,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ap=0;function Cp(e,t){return function(r,s=null){q(r)||(r=ke({},r)),s!=null&&!ae(s)&&(s=null);const i=Ku(),o=new WeakSet;let a=!1;const l=i.app={_uid:Ap++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Zp,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&q(c.install)?(o.add(c),c.install(l,...u)):q(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,f){if(!a){const p=te(r,s);return p.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),u&&t?t(p,c):e(p,c,f),a=!0,l._container=c,c.__vue_app__=l,vi(p.component)||p.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){js=l;try{return c()}finally{js=null}}};return l}}let js=null;function Es(e,t){if(Ce){let n=Ce.provides;const r=Ce.parent&&Ce.parent.provides;r===n&&(n=Ce.provides=Object.create(r)),n[e]=t}}function _t(e,t,n=!1){const r=Ce||De;if(r||js){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:js._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&q(t)?t.call(r&&r.proxy):t}}function Op(e,t,n,r=!1){const s={},i={};Ms(i,mi,1),e.propsDefaults=Object.create(null),qu(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:Eu(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function Rp(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=X(s),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(fi(e.emitsOptions,p))continue;const g=t[p];if(l)if(J(i,p))g!==i[p]&&(i[p]=g,c=!0);else{const b=ft(p);s[b]=mo(l,a,b,g,e,!1)}else g!==i[p]&&(i[p]=g,c=!0)}}}else{qu(e,t,s,i)&&(c=!0);let u;for(const f in a)(!t||!J(t,f)&&((u=Xn(f))===f||!J(t,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=mo(l,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(const f in i)(!t||!J(t,f))&&(delete i[f],c=!0)}c&&yt(e,"set","$attrs")}function qu(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(_s(l))continue;const c=t[l];let u;s&&J(s,u=ft(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:fi(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=X(n),c=a||le;for(let u=0;u<i.length;u++){const f=i[u];n[f]=mo(s,l,f,c[f],e,!J(c,f))}}return o}function mo(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=J(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&q(l)){const{propsDefaults:c}=s;if(n in c)r=c[n];else{const u=Br(s);r=c[n]=l.call(null,t),u()}}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Xn(n))&&(r=!0))}return r}function Gu(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let l=!1;if(!q(e)){const u=f=>{l=!0;const[p,g]=Gu(f,t,!0);ke(o,p),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return ae(e)&&r.set(e,Nn),Nn;if(V(i))for(let u=0;u<i.length;u++){const f=ft(i[u]);pl(f)&&(o[f]=le)}else if(i)for(const u in i){const f=ft(u);if(pl(f)){const p=i[u],g=o[f]=V(p)||q(p)?{type:p}:ke({},p);if(g){const b=vl(Boolean,g.type),_=vl(String,g.type);g[0]=b>-1,g[1]=_<0||b<_,(b>-1||J(g,"default"))&&a.push(f)}}}const c=[o,a];return ae(e)&&r.set(e,c),c}function pl(e){return e[0]!=="$"}function ml(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function gl(e,t){return ml(e)===ml(t)}function vl(e,t){return V(t)?t.findIndex(n=>gl(n,e)):q(t)&&gl(t,e)?0:-1}const Yu=e=>e[0]==="_"||e==="$stable",ua=e=>V(e)?e.map(it):[it(e)],Pp=(e,t,n)=>{if(t._n)return t;const r=Ve((...s)=>ua(t(...s)),n);return r._c=!1,r},Ju=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Yu(s))continue;const i=e[s];if(q(i))t[s]=Pp(s,i,r);else if(i!=null){const o=ua(i);t[s]=()=>o}}},Xu=(e,t)=>{const n=ua(t);e.slots.default=()=>n},Np=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=X(t),Ms(t,"_",n)):Ju(t,e.slots={})}else e.slots={},t&&Xu(e,t);Ms(e.slots,mi,1)},Lp=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=le;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(ke(s,t),!n&&a===1&&delete s._):(i=!t.$stable,Ju(t,s)),o=t}else t&&(Xu(e,t),o={default:1});if(i)for(const a in s)!Yu(a)&&o[a]==null&&delete s[a]};function go(e,t,n,r,s=!1){if(V(e)){e.forEach((p,g)=>go(p,t&&(V(t)?t[g]:t),n,r,s));return}if(xs(r)&&!s)return;const i=r.shapeFlag&4?vi(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=e,c=t&&t.r,u=a.refs===le?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(be(c)?(u[c]=null,J(f,c)&&(f[c]=null)):$e(c)&&(c.value=null)),q(l))zt(l,a,12,[o,u]);else{const p=be(l),g=$e(l);if(p||g){const b=()=>{if(e.f){const _=p?J(f,l)?f[l]:u[l]:l.value;s?V(_)&&Jo(_,i):V(_)?_.includes(i)||_.push(i):p?(u[l]=[i],J(f,l)&&(f[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else p?(u[l]=o,J(f,l)&&(f[l]=o)):g&&(l.value=o,e.k&&(u[e.k]=o))};o?(b.id=-1,Me(b,n)):b()}}}const Me=ap;function Mp(e){return Dp(e)}function Dp(e,t){const n=cu();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:p,setScopeId:g=ze,insertStaticContent:b}=e,_=(d,h,v,I=null,w=null,A=null,N=void 0,T=null,R=!!h.dynamicChildren)=>{if(d===h)return;d&&!sr(d,h)&&(I=E(d),Ne(d,w,A,!0),d=null),h.patchFlag===-2&&(R=!1,h.dynamicChildren=null);const{type:k,ref:D,shapeFlag:H}=h;switch(k){case pi:O(d,h,v,I);break;case bn:y(d,h,v,I);break;case Ss:d==null&&S(h,v,I,N);break;case Ee:nn(d,h,v,I,w,A,N,T,R);break;default:H&1?K(d,h,v,I,w,A,N,T,R):H&6?tt(d,h,v,I,w,A,N,T,R):(H&64||H&128)&&k.process(d,h,v,I,w,A,N,T,R,$)}D!=null&&w&&go(D,d&&d.ref,A,h||d,!h)},O=(d,h,v,I)=>{if(d==null)r(h.el=a(h.children),v,I);else{const w=h.el=d.el;h.children!==d.children&&c(w,h.children)}},y=(d,h,v,I)=>{d==null?r(h.el=l(h.children||""),v,I):h.el=d.el},S=(d,h,v,I)=>{[d.el,d.anchor]=b(d.children,h,v,I,d.el,d.anchor)},C=({el:d,anchor:h},v,I)=>{let w;for(;d&&d!==h;)w=p(d),r(d,v,I),d=w;r(h,v,I)},F=({el:d,anchor:h})=>{let v;for(;d&&d!==h;)v=p(d),s(d),d=v;s(h)},K=(d,h,v,I,w,A,N,T,R)=>{h.type==="svg"?N="svg":h.type==="math"&&(N="mathml"),d==null?j(h,v,I,w,A,N,T,R):ve(d,h,w,A,N,T,R)},j=(d,h,v,I,w,A,N,T)=>{let R,k;const{props:D,shapeFlag:H,transition:B,dirs:W}=d;if(R=d.el=o(d.type,A,D&&D.is,D),H&8?u(R,d.children):H&16&&_e(d.children,R,null,I,w,Di(d,A),N,T),W&&rn(d,null,I,"created"),Q(R,d,d.scopeId,N,I),D){for(const se in D)se!=="value"&&!_s(se)&&i(R,se,null,D[se],A,d.children,I,w,Te);"value"in D&&i(R,"value",null,D.value,A),(k=D.onVnodeBeforeMount)&&st(k,I,d)}W&&rn(d,null,I,"beforeMount");const G=Up(w,B);G&&B.beforeEnter(R),r(R,h,v),((k=D&&D.onVnodeMounted)||G||W)&&Me(()=>{k&&st(k,I,d),G&&B.enter(R),W&&rn(d,null,I,"mounted")},w)},Q=(d,h,v,I,w)=>{if(v&&g(d,v),I)for(let A=0;A<I.length;A++)g(d,I[A]);if(w){let A=w.subTree;if(h===A){const N=w.vnode;Q(d,N,N.scopeId,N.slotScopeIds,w.parent)}}},_e=(d,h,v,I,w,A,N,T,R=0)=>{for(let k=R;k<d.length;k++){const D=d[k]=T?Ut(d[k]):it(d[k]);_(null,D,h,v,I,w,A,N,T)}},ve=(d,h,v,I,w,A,N)=>{const T=h.el=d.el;let{patchFlag:R,dynamicChildren:k,dirs:D}=h;R|=d.patchFlag&16;const H=d.props||le,B=h.props||le;let W;if(v&&sn(v,!1),(W=B.onVnodeBeforeUpdate)&&st(W,v,h,d),D&&rn(h,d,v,"beforeUpdate"),v&&sn(v,!0),k?Pe(d.dynamicChildren,k,T,v,I,Di(h,w),A):N||Z(d,h,T,null,v,I,Di(h,w),A,!1),R>0){if(R&16)Ct(T,h,H,B,v,I,w);else if(R&2&&H.class!==B.class&&i(T,"class",null,B.class,w),R&4&&i(T,"style",H.style,B.style,w),R&8){const G=h.dynamicProps;for(let se=0;se<G.length;se++){const de=G[se],xe=H[de],Ge=B[de];(Ge!==xe||de==="value")&&i(T,de,xe,Ge,w,d.children,v,I,Te)}}R&1&&d.children!==h.children&&u(T,h.children)}else!N&&k==null&&Ct(T,h,H,B,v,I,w);((W=B.onVnodeUpdated)||D)&&Me(()=>{W&&st(W,v,h,d),D&&rn(h,d,v,"updated")},I)},Pe=(d,h,v,I,w,A,N)=>{for(let T=0;T<h.length;T++){const R=d[T],k=h[T],D=R.el&&(R.type===Ee||!sr(R,k)||R.shapeFlag&70)?f(R.el):v;_(R,k,D,null,I,w,A,N,!0)}},Ct=(d,h,v,I,w,A,N)=>{if(v!==I){if(v!==le)for(const T in v)!_s(T)&&!(T in I)&&i(d,T,v[T],null,N,h.children,w,A,Te);for(const T in I){if(_s(T))continue;const R=I[T],k=v[T];R!==k&&T!=="value"&&i(d,T,k,R,N,h.children,w,A,Te)}"value"in I&&i(d,"value",v.value,I.value,N)}},nn=(d,h,v,I,w,A,N,T,R)=>{const k=h.el=d?d.el:a(""),D=h.anchor=d?d.anchor:a("");let{patchFlag:H,dynamicChildren:B,slotScopeIds:W}=h;W&&(T=T?T.concat(W):W),d==null?(r(k,v,I),r(D,v,I),_e(h.children||[],v,D,w,A,N,T,R)):H>0&&H&64&&B&&d.dynamicChildren?(Pe(d.dynamicChildren,B,v,w,A,N,T),(h.key!=null||w&&h===w.subTree)&&Qu(d,h,!0)):Z(d,h,v,D,w,A,N,T,R)},tt=(d,h,v,I,w,A,N,T,R)=>{h.slotScopeIds=T,d==null?h.shapeFlag&512?w.ctx.activate(h,v,I,N,R):nr(h,v,I,w,A,N,R):kn(d,h,R)},nr=(d,h,v,I,w,A,N)=>{const T=d.component=Kp(d,I,w);if(Bu(d)&&(T.ctx.renderer=$),qp(T),T.asyncDep){if(w&&w.registerDep(T,we),!d.el){const R=T.subTree=te(bn);y(null,R,h,v)}}else we(T,d,h,v,w,A,N)},kn=(d,h,v)=>{const I=h.component=d.component;if(np(d,h,v))if(I.asyncDep&&!I.asyncResolved){re(I,h,v);return}else I.next=h,Jh(I.update),I.effect.dirty=!0,I.update();else h.el=d.el,I.vnode=h},we=(d,h,v,I,w,A,N)=>{const T=()=>{if(d.isMounted){let{next:D,bu:H,u:B,parent:W,vnode:G}=d;{const Cn=Zu(d);if(Cn){D&&(D.el=G.el,re(d,D,N)),Cn.asyncDep.then(()=>{d.isUnmounted||T()});return}}let se=D,de;sn(d,!1),D?(D.el=G.el,re(d,D,N)):D=G,H&&ws(H),(de=D.props&&D.props.onVnodeBeforeUpdate)&&st(de,W,D,G),sn(d,!0);const xe=Li(d),Ge=d.subTree;d.subTree=xe,_(Ge,xe,f(Ge.el),E(Ge),d,w,A),D.el=xe.el,se===null&&rp(d,xe.el),B&&Me(B,w),(de=D.props&&D.props.onVnodeUpdated)&&Me(()=>st(de,W,D,G),w)}else{let D;const{el:H,props:B}=h,{bm:W,m:G,parent:se}=d,de=xs(h);if(sn(d,!1),W&&ws(W),!de&&(D=B&&B.onVnodeBeforeMount)&&st(D,se,h),sn(d,!0),H&&fe){const xe=()=>{d.subTree=Li(d),fe(H,d.subTree,d,w,null)};de?h.type.__asyncLoader().then(()=>!d.isUnmounted&&xe()):xe()}else{const xe=d.subTree=Li(d);_(null,xe,v,I,d,w,A),h.el=xe.el}if(G&&Me(G,w),!de&&(D=B&&B.onVnodeMounted)){const xe=h;Me(()=>st(D,se,xe),w)}(h.shapeFlag&256||se&&xs(se.vnode)&&se.vnode.shapeFlag&256)&&d.a&&Me(d.a,w),d.isMounted=!0,h=v=I=null}},R=d.effect=new Zo(T,ze,()=>aa(k),d.scope),k=d.update=()=>{R.dirty&&R.run()};k.id=d.uid,sn(d,!0),k()},re=(d,h,v)=>{h.component=d;const I=d.vnode.props;d.vnode=h,d.next=null,Rp(d,h.props,I,v),Lp(d,h.children,v),Sn(),al(d),In()},Z=(d,h,v,I,w,A,N,T,R=!1)=>{const k=d&&d.children,D=d?d.shapeFlag:0,H=h.children,{patchFlag:B,shapeFlag:W}=h;if(B>0){if(B&128){Ot(k,H,v,I,w,A,N,T,R);return}else if(B&256){ht(k,H,v,I,w,A,N,T,R);return}}W&8?(D&16&&Te(k,w,A),H!==k&&u(v,H)):D&16?W&16?Ot(k,H,v,I,w,A,N,T,R):Te(k,w,A,!0):(D&8&&u(v,""),W&16&&_e(H,v,I,w,A,N,T,R))},ht=(d,h,v,I,w,A,N,T,R)=>{d=d||Nn,h=h||Nn;const k=d.length,D=h.length,H=Math.min(k,D);let B;for(B=0;B<H;B++){const W=h[B]=R?Ut(h[B]):it(h[B]);_(d[B],W,v,null,w,A,N,T,R)}k>D?Te(d,w,A,!0,!1,H):_e(h,v,I,w,A,N,T,R,H)},Ot=(d,h,v,I,w,A,N,T,R)=>{let k=0;const D=h.length;let H=d.length-1,B=D-1;for(;k<=H&&k<=B;){const W=d[k],G=h[k]=R?Ut(h[k]):it(h[k]);if(sr(W,G))_(W,G,v,null,w,A,N,T,R);else break;k++}for(;k<=H&&k<=B;){const W=d[H],G=h[B]=R?Ut(h[B]):it(h[B]);if(sr(W,G))_(W,G,v,null,w,A,N,T,R);else break;H--,B--}if(k>H){if(k<=B){const W=B+1,G=W<D?h[W].el:I;for(;k<=B;)_(null,h[k]=R?Ut(h[k]):it(h[k]),v,G,w,A,N,T,R),k++}}else if(k>B)for(;k<=H;)Ne(d[k],w,A,!0),k++;else{const W=k,G=k,se=new Map;for(k=G;k<=B;k++){const je=h[k]=R?Ut(h[k]):it(h[k]);je.key!=null&&se.set(je.key,k)}let de,xe=0;const Ge=B-G+1;let Cn=!1,Ya=0;const rr=new Array(Ge);for(k=0;k<Ge;k++)rr[k]=0;for(k=W;k<=H;k++){const je=d[k];if(xe>=Ge){Ne(je,w,A,!0);continue}let rt;if(je.key!=null)rt=se.get(je.key);else for(de=G;de<=B;de++)if(rr[de-G]===0&&sr(je,h[de])){rt=de;break}rt===void 0?Ne(je,w,A,!0):(rr[rt-G]=k+1,rt>=Ya?Ya=rt:Cn=!0,_(je,h[rt],v,null,w,A,N,T,R),xe++)}const Ja=Cn?$p(rr):Nn;for(de=Ja.length-1,k=Ge-1;k>=0;k--){const je=G+k,rt=h[je],Xa=je+1<D?h[je+1].el:I;rr[k]===0?_(null,rt,v,Xa,w,A,N,T,R):Cn&&(de<0||k!==Ja[de]?nt(rt,v,Xa,2):de--)}}},nt=(d,h,v,I,w=null)=>{const{el:A,type:N,transition:T,children:R,shapeFlag:k}=d;if(k&6){nt(d.component.subTree,h,v,I);return}if(k&128){d.suspense.move(h,v,I);return}if(k&64){N.move(d,h,v,$);return}if(N===Ee){r(A,h,v);for(let H=0;H<R.length;H++)nt(R[H],h,v,I);r(d.anchor,h,v);return}if(N===Ss){C(d,h,v);return}if(I!==2&&k&1&&T)if(I===0)T.beforeEnter(A),r(A,h,v),Me(()=>T.enter(A),w);else{const{leave:H,delayLeave:B,afterLeave:W}=T,G=()=>r(A,h,v),se=()=>{H(A,()=>{G(),W&&W()})};B?B(A,G,se):se()}else r(A,h,v)},Ne=(d,h,v,I=!1,w=!1)=>{const{type:A,props:N,ref:T,children:R,dynamicChildren:k,shapeFlag:D,patchFlag:H,dirs:B}=d;if(T!=null&&go(T,null,v,d,!0),D&256){h.ctx.deactivate(d);return}const W=D&1&&B,G=!xs(d);let se;if(G&&(se=N&&N.onVnodeBeforeUnmount)&&st(se,h,d),D&6)rs(d.component,v,I);else{if(D&128){d.suspense.unmount(v,I);return}W&&rn(d,null,h,"beforeUnmount"),D&64?d.type.remove(d,h,v,w,$,I):k&&(A!==Ee||H>0&&H&64)?Te(k,h,v,!1,!0):(A===Ee&&H&384||!w&&D&16)&&Te(R,h,v),I&&Tn(d)}(G&&(se=N&&N.onVnodeUnmounted)||W)&&Me(()=>{se&&st(se,h,d),W&&rn(d,null,h,"unmounted")},v)},Tn=d=>{const{type:h,el:v,anchor:I,transition:w}=d;if(h===Ee){An(v,I);return}if(h===Ss){F(d);return}const A=()=>{s(v),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:N,delayLeave:T}=w,R=()=>N(v,A);T?T(d.el,A,R):R()}else A()},An=(d,h)=>{let v;for(;d!==h;)v=p(d),s(d),d=v;s(h)},rs=(d,h,v)=>{const{bum:I,scope:w,update:A,subTree:N,um:T}=d;I&&ws(I),w.stop(),A&&(A.active=!1,Ne(N,d,h,v)),T&&Me(T,h),Me(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Te=(d,h,v,I=!1,w=!1,A=0)=>{for(let N=A;N<d.length;N++)Ne(d[N],h,v,I,w)},E=d=>d.shapeFlag&6?E(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el);let M=!1;const P=(d,h,v)=>{d==null?h._vnode&&Ne(h._vnode,null,null,!0):_(h._vnode||null,d,h,null,null,null,v),M||(M=!0,al(),Mu(),M=!1),h._vnode=d},$={p:_,um:Ne,m:nt,r:Tn,mt:nr,mc:_e,pc:Z,pbc:Pe,n:E,o:e};let ee,fe;return t&&([ee,fe]=t($)),{render:P,hydrate:ee,createApp:Cp(P,ee)}}function Di({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function sn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Up(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Qu(e,t,n=!1){const r=e.children,s=t.children;if(V(r)&&V(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Ut(s[i]),a.el=o.el),n||Qu(o,a)),a.type===pi&&(a.el=o.el)}}function $p(e){const t=e.slice(),n=[0];let r,s,i,o,a;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(s=n[n.length-1],e[s]<c){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<c?i=a+1:o=a;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Zu(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Zu(t)}const Fp=e=>e.__isTeleport,Ee=Symbol.for("v-fgt"),pi=Symbol.for("v-txt"),bn=Symbol.for("v-cmt"),Ss=Symbol.for("v-stc"),pr=[];let Je=null;function ie(e=!1){pr.push(Je=e?null:[])}function jp(){pr.pop(),Je=pr[pr.length-1]||null}let Er=1;function bl(e){Er+=e}function ef(e){return e.dynamicChildren=Er>0?Je||Nn:null,jp(),Er>0&&Je&&Je.push(e),e}function pe(e,t,n,r,s,i){return ef(m(e,t,n,r,s,i,!0))}function Sr(e,t,n,r,s){return ef(te(e,t,n,r,s,!0))}function vo(e){return e?e.__v_isVNode===!0:!1}function sr(e,t){return e.type===t.type&&e.key===t.key}const mi="__vInternal",tf=({key:e})=>e??null,Is=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?be(e)||$e(e)||q(e)?{i:De,r:e,k:t,f:!!n}:e:null);function m(e,t=null,n=null,r=0,s=null,i=e===Ee?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&tf(t),ref:t&&Is(t),scopeId:di,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:De};return a?(fa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=be(n)?8:16),Er>0&&!o&&Je&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Je.push(l),l}const te=Bp;function Bp(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===sp)&&(e=bn),vo(e)){const a=zn(e,t,!0);return n&&fa(a,n),Er>0&&!i&&Je&&(a.shapeFlag&6?Je[Je.indexOf(e)]=a:Je.push(a)),a.patchFlag|=-2,a}if(Qp(e)&&(e=e.__vccOpts),t){t=Hp(t);let{class:a,style:l}=t;a&&!be(a)&&(t.class=Be(a)),ae(l)&&(Iu(l)&&!V(l)&&(l=ke({},l)),t.style=Qo(l))}const o=be(e)?1:op(e)?128:Fp(e)?64:ae(e)?4:q(e)?2:0;return m(e,t,n,r,s,o,i,!0)}function Hp(e){return e?Iu(e)||mi in e?ke({},e):e:null}function zn(e,t,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=e,a=t?Vp(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&tf(a),ref:t&&t.ref?n&&s?V(s)?s.concat(Is(t)):[s,Is(t)]:Is(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ee?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&zn(e.ssContent),ssFallback:e.ssFallback&&zn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function he(e=" ",t=0){return te(pi,null,e,t)}function Qn(e,t){const n=te(Ss,null,e);return n.staticCount=t,n}function Wn(e="",t=!1){return t?(ie(),Sr(bn,null,e)):te(bn,null,e)}function it(e){return e==null||typeof e=="boolean"?te(bn):V(e)?te(Ee,null,e.slice()):typeof e=="object"?Ut(e):te(pi,null,String(e))}function Ut(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:zn(e)}function fa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(V(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),fa(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(mi in t)?t._ctx=De:s===3&&De&&(De.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else q(t)?(t={default:t,_ctx:De},n=32):(t=String(t),r&64?(n=16,t=[he(t)]):n=8);e.children=t,e.shapeFlag|=n}function Vp(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Be([t.class,r.class]));else if(s==="style")t.style=Qo([t.style,r.style]);else if(ri(s)){const i=t[s],o=r[s];o&&i!==o&&!(V(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function st(e,t,n,r=null){Qe(e,t,7,[n,r])}const zp=Ku();let Wp=0;function Kp(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||zp,i={uid:Wp++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new xh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gu(r,s),emitsOptions:Uu(r,s),emit:null,emitted:null,propsDefaults:le,inheritAttrs:r.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Zh.bind(null,i),e.ce&&e.ce(i),i}let Ce=null,Bs,bo;{const e=cu(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Bs=t("__VUE_INSTANCE_SETTERS__",n=>Ce=n),bo=t("__VUE_SSR_SETTERS__",n=>gi=n)}const Br=e=>{const t=Ce;return Bs(e),e.scope.on(),()=>{e.scope.off(),Bs(t)}},yl=()=>{Ce&&Ce.scope.off(),Bs(null)};function nf(e){return e.vnode.shapeFlag&4}let gi=!1;function qp(e,t=!1){t&&bo(t);const{props:n,children:r}=e.vnode,s=nf(e);Op(e,n,s,t),Np(e,r);const i=s?Gp(e,t):void 0;return t&&bo(!1),i}function Gp(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ku(new Proxy(e.ctx,xp));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?Jp(e):null,i=Br(e);Sn();const o=zt(r,e,0,[e.props,s]);if(In(),i(),ou(o)){if(o.then(yl,yl),t)return o.then(a=>{_l(e,a,t)}).catch(a=>{ui(a,e,0)});e.asyncDep=o}else _l(e,o,t)}else rf(e,t)}function _l(e,t,n){q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ae(t)&&(e.setupState=Ru(t)),rf(e,n)}let wl;function rf(e,t,n){const r=e.type;if(!e.render){if(!t&&wl&&!r.render){const s=r.template||ca(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=r,c=ke(ke({isCustomElement:i,delimiters:a},o),l);r.render=wl(s,c)}}e.render=r.render||ze}{const s=Br(e);Sn();try{Ep(e)}finally{In(),s()}}}function Yp(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Ue(e,"get","$attrs"),t[n]}}))}function Jp(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Yp(e)},slots:e.slots,emit:e.emit,expose:t}}function vi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ru(ku(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in hr)return hr[n](e)},has(t,n){return n in t||n in hr}}))}function Xp(e,t=!0){return q(e)?e.displayName||e.name:e.name||t&&e.__name}function Qp(e){return q(e)&&"__vccOpts"in e}const Se=(e,t)=>zh(e,t,gi);function da(e,t,n){const r=arguments.length;return r===2?ae(t)&&!V(t)?vo(t)?te(e,null,[t]):te(e,t):te(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&vo(n)&&(n=[n]),te(e,t,n))}const Zp="3.4.10";/**
* @vue/runtime-dom v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const em="http://www.w3.org/2000/svg",tm="http://www.w3.org/1998/Math/MathML",$t=typeof document<"u"?document:null,xl=$t&&$t.createElement("template"),nm={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?$t.createElementNS(em,e):t==="mathml"?$t.createElementNS(tm,e):$t.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>$t.createTextNode(e),createComment:e=>$t.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>$t.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{xl.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const a=xl.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},rm=Symbol("_vtc");function sm(e,t,n){const r=e[rm];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ha=Symbol("_vod"),im={beforeMount(e,{value:t},{transition:n}){e[ha]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):ir(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),ir(e,!0),r.enter(e)):r.leave(e,()=>{ir(e,!1)}):ir(e,t))},beforeUnmount(e,{value:t}){ir(e,t)}};function ir(e,t){e.style.display=t?e[ha]:"none"}const om=Symbol("");function am(e,t,n){const r=e.style,s=r.display,i=be(n);if(n&&!i){if(t&&!be(t))for(const o in t)n[o]==null&&yo(r,o,"");for(const o in n)yo(r,o,n[o])}else if(i){if(t!==n){const o=r[om];o&&(n+=";"+o),r.cssText=n}}else t&&e.removeAttribute("style");ha in e&&(r.display=s)}const El=/\s*!important$/;function yo(e,t,n){if(V(n))n.forEach(r=>yo(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=lm(e,t);El.test(n)?e.setProperty(Xn(r),n.replace(El,""),"important"):e[r]=n}}const Sl=["Webkit","Moz","ms"],Ui={};function lm(e,t){const n=Ui[t];if(n)return n;let r=ft(t);if(r!=="filter"&&r in e)return Ui[t]=r;r=oi(r);for(let s=0;s<Sl.length;s++){const i=Sl[s]+r;if(i in e)return Ui[t]=i}return t}const Il="http://www.w3.org/1999/xlink";function cm(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Il,t.slice(6,t.length)):e.setAttributeNS(Il,t,n);else{const i=yh(t);n==null||i&&!uu(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function um(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const c=a==="OPTION"?e.getAttribute("value"):e.value,u=n??"";c!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=uu(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function ln(e,t,n,r){e.addEventListener(t,n,r)}function fm(e,t,n,r){e.removeEventListener(t,n,r)}const kl=Symbol("_vei");function dm(e,t,n,r,s=null){const i=e[kl]||(e[kl]={}),o=i[t];if(r&&o)o.value=r;else{const[a,l]=hm(t);if(r){const c=i[t]=gm(r,s);ln(e,a,c,l)}else o&&(fm(e,a,o,l),i[t]=void 0)}}const Tl=/(?:Once|Passive|Capture)$/;function hm(e){let t;if(Tl.test(e)){t={};let r;for(;r=e.match(Tl);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Xn(e.slice(2)),t]}let $i=0;const pm=Promise.resolve(),mm=()=>$i||(pm.then(()=>$i=0),$i=Date.now());function gm(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Qe(vm(r,n.value),t,5,[r])};return n.value=e,n.attached=mm(),n}function vm(e,t){if(V(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Al=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,bm=(e,t,n,r,s,i,o,a,l)=>{const c=s==="svg";t==="class"?sm(e,r,c):t==="style"?am(e,n,r):ri(t)?Yo(t)||dm(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ym(e,t,r,c))?um(e,t,r,i,o,a,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),cm(e,t,r,c))};function ym(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Al(t)&&q(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Al(t)&&be(n)?!1:t in e}const Hs=e=>{const t=e.props["onUpdate:modelValue"]||!1;return V(t)?n=>ws(t,n):t};function _m(e){e.target.composing=!0}function Cl(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const $n=Symbol("_assign"),Ir={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[$n]=Hs(s);const i=r||s.props&&s.props.type==="number";ln(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=Ds(a)),e[$n](a)}),n&&ln(e,"change",()=>{e.value=e.value.trim()}),t||(ln(e,"compositionstart",_m),ln(e,"compositionend",Cl),ln(e,"change",Cl))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},i){if(e[$n]=Hs(i),e.composing)return;const o=s||e.type==="number"?Ds(e.value):e.value,a=t??"";o!==a&&(document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===a)||(e.value=a))}},wm={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const s=si(t);ln(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?Ds(Vs(o)):Vs(o));e[$n](e.multiple?s?new Set(i):i:i[0])}),e[$n]=Hs(r)},mounted(e,{value:t}){Ol(e,t)},beforeUpdate(e,t,n){e[$n]=Hs(n)},updated(e,{value:t}){Ol(e,t)}};function Ol(e,t){const n=e.multiple;if(!(n&&!V(t)&&!si(t))){for(let r=0,s=e.options.length;r<s;r++){const i=e.options[r],o=Vs(i);if(n)V(t)?i.selected=wh(t,o)>-1:i.selected=t.has(o);else if(ai(Vs(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Vs(e){return"_value"in e?e._value:e.value}const xm=["ctrl","shift","alt","meta"],Em={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>xm.some(n=>e[`${n}Key`]&&!t.includes(n))},sf=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<t.length;o++){const a=Em[t[o]];if(a&&a(s,t))return}return e(s,...i)})},Sm=ke({patchProp:bm},nm);let Rl;function Im(){return Rl||(Rl=Mp(Sm))}const km=(...e)=>{const t=Im().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Am(r);if(!s)return;const i=t._component;!q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Tm(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Tm(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Am(e){return be(e)?document.querySelector(e):e}var Pl={};/**
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
 */const of=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Cm=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},af={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,l=s+2<e.length,c=l?e[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(p=64)),r.push(n[u],n[f],n[p],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(of(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Cm(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const c=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||c==null||f==null)throw new Om;const p=i<<2|a>>4;if(r.push(p),c!==64){const g=a<<4&240|c>>2;if(r.push(g),f!==64){const b=c<<6&192|f;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Om extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rm=function(e){const t=of(e);return af.encodeByteArray(t,!0)},lf=function(e){return Rm(e).replace(/\./g,"")},cf=function(e){try{return af.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Pm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Nm=()=>Pm().__FIREBASE_DEFAULTS__,Lm=()=>{if(typeof process>"u"||typeof Pl>"u")return;const e=Pl.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Mm=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&cf(e[1]);return t&&JSON.parse(t)},pa=()=>{try{return Nm()||Lm()||Mm()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Dm=e=>{var t,n;return(n=(t=pa())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},uf=()=>{var e;return(e=pa())===null||e===void 0?void 0:e.config},ff=e=>{var t;return(t=pa())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Um{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $m(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe())}function Fm(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function jm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bm(){const e=Oe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Hm(){try{return typeof indexedDB=="object"}catch{return!1}}function Vm(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
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
 */const zm="FirebaseError";class Qt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=zm,Object.setPrototypeOf(this,Qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hr.prototype.create)}}class Hr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Wm(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Qt(s,a,r)}}function Wm(e,t){return e.replace(Km,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Km=/\{\$([^}]+)}/g;function qm(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function zs(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(Nl(i)&&Nl(o)){if(!zs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Nl(e){return e!==null&&typeof e=="object"}/**
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
 */function Vr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function cr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(i)}}),t}function ur(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Gm(e,t){const n=new Ym(e,t);return n.subscribe.bind(n)}class Ym{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Jm(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=Fi),s.error===void 0&&(s.error=Fi),s.complete===void 0&&(s.complete=Fi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jm(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Fi(){}/**
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
 */function Tt(e){return e&&e._delegate?e._delegate:e}class Kn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const on="[DEFAULT]";/**
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
 */class Xm{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Um;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Zm(t))try{this.getOrInitializeService({instanceIdentifier:on})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=on){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=on){return this.instances.has(t)}getOptions(t=on){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Qm(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=on){return this.component?this.component.multipleInstances?t:on:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qm(e){return e===on?void 0:e}function Zm(e){return e.instantiationMode==="EAGER"}/**
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
 */class eg{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Xm(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(oe||(oe={}));const tg={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},ng=oe.INFO,rg={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},sg=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=rg[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class df{constructor(t){this.name=t,this._logLevel=ng,this._logHandler=sg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in oe))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?tg[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...t),this._logHandler(this,oe.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...t),this._logHandler(this,oe.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...t),this._logHandler(this,oe.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...t),this._logHandler(this,oe.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...t),this._logHandler(this,oe.ERROR,...t)}}const ig=(e,t)=>t.some(n=>e instanceof n);let Ll,Ml;function og(){return Ll||(Ll=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ag(){return Ml||(Ml=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hf=new WeakMap,_o=new WeakMap,pf=new WeakMap,ji=new WeakMap,ma=new WeakMap;function lg(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Wt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&hf.set(n,e)}).catch(()=>{}),ma.set(t,e),t}function cg(e){if(_o.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});_o.set(e,t)}let wo={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return _o.get(e);if(t==="objectStoreNames")return e.objectStoreNames||pf.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ug(e){wo=e(wo)}function fg(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Bi(this),t,...n);return pf.set(r,t.sort?t.sort():[t]),Wt(r)}:ag().includes(e)?function(...t){return e.apply(Bi(this),t),Wt(hf.get(this))}:function(...t){return Wt(e.apply(Bi(this),t))}}function dg(e){return typeof e=="function"?fg(e):(e instanceof IDBTransaction&&cg(e),ig(e,og())?new Proxy(e,wo):e)}function Wt(e){if(e instanceof IDBRequest)return lg(e);if(ji.has(e))return ji.get(e);const t=dg(e);return t!==e&&(ji.set(e,t),ma.set(t,e)),t}const Bi=e=>ma.get(e);function hg(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Wt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Wt(o.result),l.oldVersion,l.newVersion,Wt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const pg=["get","getKey","getAll","getAllKeys","count"],mg=["put","add","delete","clear"],Hi=new Map;function Dl(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Hi.get(t))return Hi.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=mg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||pg.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Hi.set(t,i),i}ug(e=>({...e,get:(t,n,r)=>Dl(t,n)||e.get(t,n,r),has:(t,n)=>!!Dl(t,n)||e.has(t,n)}));/**
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
 */class gg{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vg(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const xo="@firebase/app",Ul="0.9.26";/**
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
 */const yn=new df("@firebase/app"),bg="@firebase/app-compat",yg="@firebase/analytics-compat",_g="@firebase/analytics",wg="@firebase/app-check-compat",xg="@firebase/app-check",Eg="@firebase/auth",Sg="@firebase/auth-compat",Ig="@firebase/database",kg="@firebase/database-compat",Tg="@firebase/functions",Ag="@firebase/functions-compat",Cg="@firebase/installations",Og="@firebase/installations-compat",Rg="@firebase/messaging",Pg="@firebase/messaging-compat",Ng="@firebase/performance",Lg="@firebase/performance-compat",Mg="@firebase/remote-config",Dg="@firebase/remote-config-compat",Ug="@firebase/storage",$g="@firebase/storage-compat",Fg="@firebase/firestore",jg="@firebase/firestore-compat",Bg="firebase",Hg="10.7.2";/**
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
 */const Eo="[DEFAULT]",Vg={[xo]:"fire-core",[bg]:"fire-core-compat",[_g]:"fire-analytics",[yg]:"fire-analytics-compat",[xg]:"fire-app-check",[wg]:"fire-app-check-compat",[Eg]:"fire-auth",[Sg]:"fire-auth-compat",[Ig]:"fire-rtdb",[kg]:"fire-rtdb-compat",[Tg]:"fire-fn",[Ag]:"fire-fn-compat",[Cg]:"fire-iid",[Og]:"fire-iid-compat",[Rg]:"fire-fcm",[Pg]:"fire-fcm-compat",[Ng]:"fire-perf",[Lg]:"fire-perf-compat",[Mg]:"fire-rc",[Dg]:"fire-rc-compat",[Ug]:"fire-gcs",[$g]:"fire-gcs-compat",[Fg]:"fire-fst",[jg]:"fire-fst-compat","fire-js":"fire-js",[Bg]:"fire-js-all"};/**
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
 */const Ws=new Map,So=new Map;function zg(e,t){try{e.container.addComponent(t)}catch(n){yn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function kr(e){const t=e.name;if(So.has(t))return yn.debug(`There were multiple attempts to register component ${t}.`),!1;So.set(t,e);for(const n of Ws.values())zg(n,e);return!0}function mf(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Wg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Kt=new Hr("app","Firebase",Wg);/**
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
 */class Kg{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}/**
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
 */const zr=Hg;function gf(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Eo,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Kt.create("bad-app-name",{appName:String(s)});if(n||(n=uf()),!n)throw Kt.create("no-options");const i=Ws.get(s);if(i){if(zs(n,i.options)&&zs(r,i.config))return i;throw Kt.create("duplicate-app",{appName:s})}const o=new eg(s);for(const l of So.values())o.addComponent(l);const a=new Kg(n,r,o);return Ws.set(s,a),a}function qg(e=Eo){const t=Ws.get(e);if(!t&&e===Eo&&uf())return gf();if(!t)throw Kt.create("no-app",{appName:e});return t}function Fn(e,t,n){var r;let s=(r=Vg[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),yn.warn(a.join(" "));return}kr(new Kn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Gg="firebase-heartbeat-database",Yg=1,Tr="firebase-heartbeat-store";let Vi=null;function vf(){return Vi||(Vi=hg(Gg,Yg,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Tr)}catch(n){console.warn(n)}}}}).catch(e=>{throw Kt.create("idb-open",{originalErrorMessage:e.message})})),Vi}async function Jg(e){try{return await(await vf()).transaction(Tr).objectStore(Tr).get(bf(e))}catch(t){if(t instanceof Qt)yn.warn(t.message);else{const n=Kt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});yn.warn(n.message)}}}async function $l(e,t){try{const r=(await vf()).transaction(Tr,"readwrite");await r.objectStore(Tr).put(t,bf(e)),await r.done}catch(n){if(n instanceof Qt)yn.warn(n.message);else{const r=Kt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yn.warn(r.message)}}}function bf(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Xg=1024,Qg=30*24*60*60*1e3;class Zg{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Fl();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Qg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fl(),{heartbeatsToSend:r,unsentEntries:s}=ev(this._heartbeatsCache.heartbeats),i=lf(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Fl(){return new Date().toISOString().substring(0,10)}function ev(e,t=Xg){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),jl(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),jl(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tv{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hm()?Vm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Jg(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return $l(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return $l(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function jl(e){return lf(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function nv(e){kr(new Kn("platform-logger",t=>new gg(t),"PRIVATE")),kr(new Kn("heartbeat",t=>new Zg(t),"PRIVATE")),Fn(xo,Ul,e),Fn(xo,Ul,"esm2017"),Fn("fire-js","")}nv("");function ga(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function yf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rv=yf,_f=new Hr("auth","Firebase",yf());/**
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
 */const Ks=new df("@firebase/auth");function sv(e,...t){Ks.logLevel<=oe.WARN&&Ks.warn(`Auth (${zr}): ${e}`,...t)}function ks(e,...t){Ks.logLevel<=oe.ERROR&&Ks.error(`Auth (${zr}): ${e}`,...t)}/**
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
 */function qe(e,...t){throw va(e,...t)}function ct(e,...t){return va(e,...t)}function wf(e,t,n){const r=Object.assign(Object.assign({},rv()),{[t]:n});return new Hr("auth","Firebase",r).create(t,{appName:e.name})}function iv(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&qe(e,"argument-error"),wf(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function va(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return _f.create(e,...t)}function z(e,t,...n){if(!e)throw va(t,...n)}function vt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ks(t),new Error(t)}function xt(e,t){e||vt(t)}/**
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
 */function Io(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function ov(){return Bl()==="http:"||Bl()==="https:"}function Bl(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function av(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ov()||Fm()||"connection"in navigator)?navigator.onLine:!0}function lv(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Wr{constructor(t,n){this.shortDelay=t,this.longDelay=n,xt(n>t,"Short delay should be less than long delay!"),this.isMobile=$m()||jm()}get(){return av()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ba(e,t){xt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class xf{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const cv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const uv=new Wr(3e4,6e4);function Zt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function en(e,t,n,r,s={}){return Ef(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=Vr(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),xf.fetch()(Sf(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},i))})}async function Ef(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},cv),t);try{const s=new dv(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw us(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw us(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw us(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw us(e,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw wf(e,u,c);qe(e,u)}}catch(s){if(s instanceof Qt)throw s;qe(e,"network-request-failed",{message:String(s)})}}async function Kr(e,t,n,r,s={}){const i=await en(e,t,n,r,s);return"mfaPendingCredential"in i&&qe(e,"multi-factor-auth-required",{_serverResponse:i}),i}function Sf(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?ba(e.config,s):`${e.config.apiScheme}://${s}`}function fv(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class dv{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ct(this.auth,"network-request-failed")),uv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function us(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ct(e,t,r);return s.customData._tokenResponse=n,s}function Hl(e){return e!==void 0&&e.enterprise!==void 0}class hv{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return fv(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function pv(e,t){return en(e,"GET","/v2/recaptchaConfig",Zt(e,t))}/**
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
 */async function mv(e,t){return en(e,"POST","/v1/accounts:delete",t)}async function gv(e,t){return en(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function mr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function If(e,t=!1){const n=Tt(e),r=await n.getIdToken(t),s=ya(r);z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:mr(zi(s.auth_time)),issuedAtTime:mr(zi(s.iat)),expirationTime:mr(zi(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function zi(e){return Number(e)*1e3}function ya(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return ks("JWT malformed, contained fewer than 3 sections"),null;try{const s=cf(n);return s?JSON.parse(s):(ks("Failed to decode base64 JWT payload"),null)}catch(s){return ks("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function vv(e){const t=ya(e);return z(t,"internal-error"),z(typeof t.exp<"u","internal-error"),z(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ar(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Qt&&bv(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function bv({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class yv{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class kf{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mr(this.lastLoginAt),this.creationTime=mr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qs(e){var t;const n=e.auth,r=await e.getIdToken(),s=await Ar(e,gv(n,{idToken:r}));z(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?xv(i.providerUserInfo):[],a=wv(e.providerData,o),l=e.isAnonymous,c=!(e.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new kf(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function _v(e){const t=Tt(e);await qs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function wv(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function xv(e){return e.map(t=>{var{providerId:n}=t,r=ga(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Ev(e,t){const n=await Ef(e,{},async()=>{const r=Vr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=Sf(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",xf.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Sv(e,t){return en(e,"POST","/v2/accounts:revokeToken",Zt(e,t))}/**
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
 */class Cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){z(t.idToken,"internal-error"),z(typeof t.idToken<"u","internal-error"),z(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):vv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return z(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Ev(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Cr;return r&&(z(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(z(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(z(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Cr,this.toJSON())}_performRefresh(){return vt("not implemented")}}/**
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
 */function Pt(e,t){z(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class mn{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=ga(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new kf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await Ar(this,this.stsTokenManager.getToken(this.auth,t));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return If(this,t)}reload(){return _v(this)}_assign(t){this!==t&&(z(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new mn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await qs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Ar(this,mv(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,a,l,c,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(c=n.createdAt)!==null&&c!==void 0?c:void 0,S=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:C,emailVerified:F,isAnonymous:K,providerData:j,stsTokenManager:Q}=n;z(C&&Q,t,"internal-error");const _e=Cr.fromJSON(this.name,Q);z(typeof C=="string",t,"internal-error"),Pt(f,t.name),Pt(p,t.name),z(typeof F=="boolean",t,"internal-error"),z(typeof K=="boolean",t,"internal-error"),Pt(g,t.name),Pt(b,t.name),Pt(_,t.name),Pt(O,t.name),Pt(y,t.name),Pt(S,t.name);const ve=new mn({uid:C,auth:t,email:p,emailVerified:F,displayName:f,isAnonymous:K,photoURL:b,phoneNumber:g,tenantId:_,stsTokenManager:_e,createdAt:y,lastLoginAt:S});return j&&Array.isArray(j)&&(ve.providerData=j.map(Pe=>Object.assign({},Pe))),O&&(ve._redirectEventId=O),ve}static async _fromIdTokenResponse(t,n,r=!1){const s=new Cr;s.updateFromServerResponse(n);const i=new mn({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await qs(i),i}}/**
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
 */const Vl=new Map;function bt(e){xt(e instanceof Function,"Expected a class definition");let t=Vl.get(e);return t?(xt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Vl.set(e,t),t)}/**
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
 */class Tf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Tf.type="NONE";const zl=Tf;/**
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
 */function Ts(e,t,n){return`firebase:${e}:${t}:${n}`}class jn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ts(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ts("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?mn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new jn(bt(zl),t,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||bt(zl);const o=Ts(r,t.config.apiKey,t.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const f=mn._fromJSON(t,u);c!==i&&(a=f),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new jn(i,t,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new jn(i,t,r))}}/**
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
 */function Wl(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Of(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Af(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Pf(t))return"Blackberry";if(Nf(t))return"Webos";if(_a(t))return"Safari";if((t.includes("chrome/")||Cf(t))&&!t.includes("edge/"))return"Chrome";if(Rf(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Af(e=Oe()){return/firefox\//i.test(e)}function _a(e=Oe()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Cf(e=Oe()){return/crios\//i.test(e)}function Of(e=Oe()){return/iemobile/i.test(e)}function Rf(e=Oe()){return/android/i.test(e)}function Pf(e=Oe()){return/blackberry/i.test(e)}function Nf(e=Oe()){return/webos/i.test(e)}function bi(e=Oe()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Iv(e=Oe()){var t;return bi(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function kv(){return Bm()&&document.documentMode===10}function Lf(e=Oe()){return bi(e)||Rf(e)||Nf(e)||Pf(e)||/windows phone/i.test(e)||Of(e)}function Tv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Mf(e,t=[]){let n;switch(e){case"Browser":n=Wl(Oe());break;case"Worker":n=`${Wl(Oe())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${zr}/${r}`}/**
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
 */class Av{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,a)=>{try{const l=t(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Cv(e,t={}){return en(e,"GET","/v2/passwordPolicy",Zt(e,t))}/**
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
 */const Ov=6;class Rv{constructor(t){var n,r,s,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Ov,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
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
 */class Pv{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kl(this),this.idTokenSubscription=new Kl(this),this.beforeStateQueue=new Av(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_f,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=bt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await jn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await qs(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=lv()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Tt(t):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&z(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(bt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Cv(this),n=new Rv(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Hr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Sv(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&bt(t)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await jn.create(this,[bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Mf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&sv(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function tn(e){return Tt(e)}class Kl{constructor(t){this.auth=t,this.observer=null,this.addObserver=Gm(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Nv(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Df(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=ct("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Nv().appendChild(r)})}function Lv(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const Mv="https://www.google.com/recaptcha/enterprise.js?render=",Dv="recaptcha-enterprise",Uv="NO_RECAPTCHA";class $v{constructor(t){this.type=Dv,this.auth=tn(t)}async verify(t="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{pv(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new hv(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Hl(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:t}).then(c=>{o(c)}).catch(()=>{o(Uv)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Hl(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Df(Mv+a).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function ql(e,t,n,r=!1){const s=new $v(e);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ko(e,t,n,r){var s;if(!((s=e._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await ql(e,t,n,n==="getOobCode");return r(e,i)}else return r(e,t).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ql(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(i)})}/**
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
 */function Fv(e,t){const n=mf(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(zs(i,t??{}))return s;qe(s,"already-initialized")}return n.initialize({options:t})}function jv(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Bv(e,t,n){const r=tn(e);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Uf(t),{host:o,port:a}=Hv(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Vv()}function Uf(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Hv(e){const t=Uf(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Gl(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Gl(o)}}}function Gl(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Vv(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class wa{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return vt("not implemented")}_getIdTokenResponse(t){return vt("not implemented")}_linkToIdToken(t,n){return vt("not implemented")}_getReauthenticationResolver(t){return vt("not implemented")}}async function zv(e,t){return en(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function Wv(e,t){return Kr(e,"POST","/v1/accounts:signInWithPassword",Zt(e,t))}/**
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
 */async function Kv(e,t){return Kr(e,"POST","/v1/accounts:signInWithEmailLink",Zt(e,t))}async function qv(e,t){return Kr(e,"POST","/v1/accounts:signInWithEmailLink",Zt(e,t))}/**
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
 */class Or extends wa{constructor(t,n,r,s=null){super("password",r),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new Or(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Or(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ko(t,n,"signInWithPassword",Wv);case"emailLink":return Kv(t,{email:this._email,oobCode:this._password});default:qe(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ko(t,r,"signUpPassword",zv);case"emailLink":return qv(t,{idToken:n,email:this._email,oobCode:this._password});default:qe(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Bn(e,t){return Kr(e,"POST","/v1/accounts:signInWithIdp",Zt(e,t))}/**
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
 */const Gv="http://localhost";class _n extends wa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new _n(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=ga(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new _n(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Bn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Bn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Bn(t,n)}buildRequest(){const t={requestUri:Gv,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Vr(n)}return t}}/**
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
 */function Yv(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Jv(e){const t=cr(ur(e)).link,n=t?cr(ur(t)).deep_link_id:null,r=cr(ur(e)).deep_link_id;return(r?cr(ur(r)).link:null)||r||n||t||e}class xa{constructor(t){var n,r,s,i,o,a;const l=cr(ur(t)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,f=Yv((s=l.mode)!==null&&s!==void 0?s:null);z(c&&u&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=Jv(t);try{return new xa(n)}catch{return null}}}/**
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
 */class Zn{constructor(){this.providerId=Zn.PROVIDER_ID}static credential(t,n){return Or._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=xa.parseLink(n);return z(r,"argument-error"),Or._fromEmailAndCode(t,r.code,r.tenantId)}}Zn.PROVIDER_ID="password";Zn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ea{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class qr extends Ea{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class jt extends qr{constructor(){super("facebook.com")}static credential(t){return _n._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return jt.credentialFromTaggedObject(t)}static credentialFromError(t){return jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return jt.credential(t.oauthAccessToken)}catch{return null}}}jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";jt.PROVIDER_ID="facebook.com";/**
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
 */class mt extends qr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return _n._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return mt.credentialFromTaggedObject(t)}static credentialFromError(t){return mt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return mt.credential(n,r)}catch{return null}}}mt.GOOGLE_SIGN_IN_METHOD="google.com";mt.PROVIDER_ID="google.com";/**
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
 */class Bt extends qr{constructor(){super("github.com")}static credential(t){return _n._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Bt.credentialFromTaggedObject(t)}static credentialFromError(t){return Bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Bt.credential(t.oauthAccessToken)}catch{return null}}}Bt.GITHUB_SIGN_IN_METHOD="github.com";Bt.PROVIDER_ID="github.com";/**
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
 */class Ht extends qr{constructor(){super("twitter.com")}static credential(t,n){return _n._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ht.credentialFromTaggedObject(t)}static credentialFromError(t){return Ht.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Ht.credential(n,r)}catch{return null}}}Ht.TWITTER_SIGN_IN_METHOD="twitter.com";Ht.PROVIDER_ID="twitter.com";/**
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
 */async function Xv(e,t){return Kr(e,"POST","/v1/accounts:signUp",Zt(e,t))}/**
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
 */class wn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await mn._fromIdTokenResponse(t,r,s),o=Yl(r);return new wn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=Yl(r);return new wn({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function Yl(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Gs extends Qt{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Gs.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new Gs(t,n,r,s)}}function $f(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Gs._fromErrorAndOperation(e,i,t,r):i})}async function Qv(e,t,n=!1){const r=await Ar(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return wn._forOperation(e,"link",r)}/**
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
 */async function Zv(e,t,n=!1){const{auth:r}=e,s="reauthenticate";try{const i=await Ar(e,$f(r,s,t,e),n);z(i.idToken,r,"internal-error");const o=ya(i.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(e.uid===a,r,"user-mismatch"),wn._forOperation(e,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&qe(r,"user-mismatch"),i}}/**
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
 */async function Ff(e,t,n=!1){const r="signIn",s=await $f(e,r,t),i=await wn._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function eb(e,t){return Ff(tn(e),t)}/**
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
 */async function jf(e){const t=tn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function tb(e,t,n){const r=tn(e),o=await ko(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Xv).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&jf(e),l}),a=await wn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function nb(e,t,n){return eb(Tt(e),Zn.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&jf(e),r})}function rb(e,t,n,r){return Tt(e).onIdTokenChanged(t,n,r)}function sb(e,t,n){return Tt(e).beforeAuthStateChanged(t,n)}function Bf(e,t,n,r){return Tt(e).onAuthStateChanged(t,n,r)}function ib(e){return Tt(e).signOut()}const Ys="__sak";/**
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
 */class Hf{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ys,"1"),this.storage.removeItem(Ys),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function ob(){const e=Oe();return _a(e)||bi(e)}const ab=1e3,lb=10;class Vf extends Hf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ob()&&Tv(),this.fallbackToPolling=Lf(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);kv()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,lb):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},ab)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Vf.type="LOCAL";const cb=Vf;/**
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
 */class zf extends Hf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}zf.type="SESSION";const Wf=zf;/**
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
 */function ub(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class yi{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new yi(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await ub(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yi.receivers=[];/**
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
 */function Sa(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class fb{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Sa("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ut(){return window}function db(e){ut().location.href=e}/**
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
 */function Kf(){return typeof ut().WorkerGlobalScope<"u"&&typeof ut().importScripts=="function"}async function hb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pb(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function mb(){return Kf()?self:null}/**
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
 */const qf="firebaseLocalStorageDb",gb=1,Js="firebaseLocalStorage",Gf="fbase_key";class Gr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _i(e,t){return e.transaction([Js],t?"readwrite":"readonly").objectStore(Js)}function vb(){const e=indexedDB.deleteDatabase(qf);return new Gr(e).toPromise()}function To(){const e=indexedDB.open(qf,gb);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Js,{keyPath:Gf})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Js)?t(r):(r.close(),await vb(),t(await To()))})})}async function Jl(e,t,n){const r=_i(e,!0).put({[Gf]:t,value:n});return new Gr(r).toPromise()}async function bb(e,t){const n=_i(e,!1).get(t),r=await new Gr(n).toPromise();return r===void 0?null:r.value}function Xl(e,t){const n=_i(e,!0).delete(t);return new Gr(n).toPromise()}const yb=800,_b=3;class Yf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await To(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>_b)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yi._getInstance(mb()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await hb(),!this.activeServiceWorker)return;this.sender=new fb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||pb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await To();return await Jl(t,Ys,"1"),await Xl(t,Ys),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jl(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>bb(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xl(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=_i(s,!1).getAll();return new Gr(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yf.type="LOCAL";const wb=Yf;new Wr(3e4,6e4);/**
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
 */function Jf(e,t){return t?bt(t):(z(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Ia extends wa{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Bn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Bn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Bn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function xb(e){return Ff(e.auth,new Ia(e),e.bypassAuthState)}function Eb(e){const{auth:t,user:n}=e;return z(n,t,"internal-error"),Zv(n,new Ia(e),e.bypassAuthState)}async function Sb(e){const{auth:t,user:n}=e;return z(n,t,"internal-error"),Qv(n,new Ia(e),e.bypassAuthState)}/**
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
 */class Xf{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return xb;case"linkViaPopup":case"linkViaRedirect":return Sb;case"reauthViaPopup":case"reauthViaRedirect":return Eb;default:qe(this.auth,"internal-error")}}resolve(t){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ib=new Wr(2e3,1e4);async function kb(e,t,n){const r=tn(e);iv(e,t,Ea);const s=Jf(r,n);return new un(r,"signInViaPopup",t,s).executeNotNull()}class un extends Xf{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,un.currentPopupAction&&un.currentPopupAction.cancel(),un.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return z(t,this.auth,"internal-error"),t}async onExecution(){xt(this.filter.length===1,"Popup operations only handle one event");const t=Sa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,un.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Ib.get())};t()}}un.currentPopupAction=null;/**
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
 */const Tb="pendingRedirect",As=new Map;class Ab extends Xf{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=As.get(this.auth._key());if(!t){try{const r=await Cb(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}As.set(this.auth._key(),t)}return this.bypassAuthState||As.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Cb(e,t){const n=Pb(t),r=Rb(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Ob(e,t){As.set(e._key(),t)}function Rb(e){return bt(e._redirectPersistence)}function Pb(e){return Ts(Tb,e.config.apiKey,e.name)}async function Nb(e,t,n=!1){const r=tn(e),s=Jf(r,t),o=await new Ab(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const Lb=10*60*1e3;class Mb{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Db(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Qf(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ct(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Lb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ql(t))}saveEventToCache(t){this.cachedEventUids.add(Ql(t)),this.lastProcessedEventTime=Date.now()}}function Ql(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Qf({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Db(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qf(e);default:return!1}}/**
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
 */async function Ub(e,t={}){return en(e,"GET","/v1/projects",t)}/**
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
 */const $b=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fb=/^https?/;async function jb(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Ub(e);for(const n of t)try{if(Bb(n))return}catch{}qe(e,"unauthorized-domain")}function Bb(e){const t=Io(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Fb.test(n))return!1;if($b.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Hb=new Wr(3e4,6e4);function Zl(){const e=ut().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Vb(e){return new Promise((t,n)=>{var r,s,i;function o(){Zl(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Zl(),n(ct(e,"network-request-failed"))},timeout:Hb.get()})}if(!((s=(r=ut().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=ut().gapi)===null||i===void 0)&&i.load)o();else{const a=Lv("iframefcb");return ut()[a]=()=>{gapi.load?o():n(ct(e,"network-request-failed"))},Df(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Cs=null,t})}let Cs=null;function zb(e){return Cs=Cs||Vb(e),Cs}/**
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
 */const Wb=new Wr(5e3,15e3),Kb="__/auth/iframe",qb="emulator/auth/iframe",Gb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Yb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jb(e){const t=e.config;z(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ba(t,qb):`https://${e.config.authDomain}/${Kb}`,r={apiKey:t.apiKey,appName:e.name,v:zr},s=Yb.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Vr(r).slice(1)}`}async function Xb(e){const t=await zb(e),n=ut().gapi;return z(n,e,"internal-error"),t.open({where:document.body,url:Jb(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Gb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ct(e,"network-request-failed"),a=ut().setTimeout(()=>{i(o)},Wb.get());function l(){ut().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Qb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zb=500,ey=600,ty="_blank",ny="http://localhost";class ec{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ry(e,t,n,r=Zb,s=ey){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Qb),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Oe().toLowerCase();n&&(a=Cf(c)?ty:n),Af(c)&&(t=t||ny,l.scrollbars="yes");const u=Object.entries(l).reduce((p,[g,b])=>`${p}${g}=${b},`,"");if(Iv(c)&&a!=="_self")return sy(t||"",a),new ec(null);const f=window.open(t||"",a,u);z(f,e,"popup-blocked");try{f.focus()}catch{}return new ec(f)}function sy(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const iy="__/auth/handler",oy="emulator/auth/handler",ay=encodeURIComponent("fac");async function tc(e,t,n,r,s,i){z(e.config.authDomain,e,"auth-domain-config-required"),z(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:zr,eventId:s};if(t instanceof Ea){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",qm(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries(i||{}))o[u]=f}if(t instanceof qr){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await e._getAppCheckToken(),c=l?`#${ay}=${encodeURIComponent(l)}`:"";return`${ly(e)}?${Vr(a).slice(1)}${c}`}function ly({config:e}){return e.emulator?ba(e,oy):`https://${e.authDomain}/${iy}`}/**
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
 */const Wi="webStorageSupport";class cy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wf,this._completeRedirectFn=Nb,this._overrideRedirectResult=Ob}async _openPopup(t,n,r,s){var i;xt((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await tc(t,n,r,Io(),s);return ry(t,o,Sa())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await tc(t,n,r,Io(),s);return db(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(xt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Xb(t),r=new Mb(t);return n.register("authEvent",s=>(z(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Wi,{type:Wi},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Wi];o!==void 0&&n(!!o),qe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jb(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Lf()||_a()||bi()}}const uy=cy;var nc="@firebase/auth",rc="1.5.1";/**
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
 */class fy{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function dy(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function hy(e){kr(new Kn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mf(e)},c=new Pv(r,s,i,l);return jv(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),kr(new Kn("auth-internal",t=>{const n=tn(t.getProvider("auth").getImmediate());return(r=>new fy(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fn(nc,rc,dy(e)),Fn(nc,rc,"esm2017")}/**
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
 */const py=5*60,my=ff("authIdTokenMaxAge")||py;let sc=null;const gy=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>my)return;const s=n==null?void 0:n.token;sc!==s&&(sc=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function gn(e=qg()){const t=mf(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Fv(e,{popupRedirectResolver:uy,persistence:[wb,cb,Wf]}),r=ff("authTokenSyncURL");if(r){const i=gy(r);sb(n,i,()=>i(n.currentUser)),rb(n,o=>i(o))}const s=Dm("auth");return s&&Bv(n,`http://${s}`),n}hy("Browser");const ka="/assets/Sally Sweet Logo-uJB1fK0e.png",vy="/assets/melt-bg-LfejUdWw.png",Fe=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},by={name:"Header",data(){return{isLoggedIn:!1,isNavMenuVisible:!1,isBannerVisible:!0,sessionTimeout:null,shouldShowButton:!1}},created(){this.initializeAuthState(),this.setupSessionTimeoutReset()},beforeDestroy(){this.removeSessionTimeoutReset()},methods:{initializeAuthState(){const e=gn();Bf(e,t=>{t?(this.isLoggedIn=!0,sessionStorage.setItem("loggedIn","true"),this.resetSessionTimeout(),this.checkTokenExpiration(),console.log(t)):(this.isLoggedIn=!1,sessionStorage.removeItem("loggedIn"))})},resetSessionTimeout(){clearTimeout(this.sessionTimeout),this.sessionTimeout=setTimeout(()=>{this.logOut()},.3*60*1e3)},checkTokenExpiration(){const t=gn().currentUser;t&&If(t).then(n=>{const r=new Date().getTime(),s=new Date(n.expirationTime).getTime();r>s&&this.logOut()})},logOut(){const e=gn();ib(e).then(()=>{this.isLoggedIn=!1,sessionStorage.removeItem("loggedIn"),this.$router.push({path:"/"}),clearTimeout(this.sessionTimeout)}).catch(t=>{console.error("Error signing out:",t)})},setupSessionTimeoutReset(){window.addEventListener("mousemove",this.resetSessionTimeout),window.addEventListener("keypress",this.resetSessionTimeout)},removeSessionTimeoutReset(){window.removeEventListener("mousemove",this.resetSessionTimeout),window.removeEventListener("keypress",this.resetSessionTimeout)},toggleMenu(){this.isNavMenuVisible=!this.isNavMenuVisible},toggleBanner(){this.isBannerVisible=!1},scrollToTop(){window.scrollTo(0,0)}}},Yr=e=>(Fr("data-v-846ea729"),e=e(),jr(),e),yy={key:0,class:"bg-gradient-sw text-white text-center p-2 text-xl"},_y=Yr(()=>m("span",null,"Login and Print our special voucher to enhance your shopping experience!",-1)),wy={class:"head"},xy={class:"container mx-auto flex flex-wrap items-center justify-between px-2"},Ey=Yr(()=>m("div",{class:"flex items-center"},[m("a",{href:"/"},[m("img",{src:ka,alt:"Logo",class:"w-20 h-12 md:w-24 md:h-24 lg:w-30 lg:h-20 mr-2 ml-2 my-2"})]),m("h1",{class:"text-2xl md:text-3xl lg:text-4xl font-bold px-3 text-blue-950"},"Sally Sweet")],-1)),Sy={class:"button-section"},Iy=Yr(()=>m("i",{class:"fas fa-phone-alt mr-2"},null,-1)),ky=Yr(()=>m("svg",{class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[m("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16m-7 6h7"})],-1)),Ty=[ky],Ay=Yr(()=>m("img",{class:"pt-1 w-full",src:vy,alt:"Melting Paint"},null,-1));function Cy(e,t,n,r,s,i){const o=We("router-link");return ie(),pe(Ee,null,[s.isBannerVisible?(ie(),pe("div",yy,[_y,m("button",{onClick:t[1]||(t[1]=(...a)=>i.toggleBanner&&i.toggleBanner(...a)),class:"float-right mr-2 text-lg"},[m("i",{class:"fas fa-times",onClick:t[0]||(t[0]=(...a)=>i.toggleBanner&&i.toggleBanner(...a))})])])):Wn("",!0),m("header",wy,[m("div",xy,[Ey,m("nav",{class:Be([{hidden:!s.isNavMenuVisible,flex:s.isNavMenuVisible,"flex-row":!0,"self-center":s.isNavMenuVisible,"md:flex":!0,"md:flex-row":!0,"space-y-0":s.isNavMenuVisible,"md:space-y-0":!0,"space-x-5":s.isNavMenuVisible,"md:space-x-4":!0},"nav-menu"])},[te(o,{class:Be({"hover:text-blue-500 text-2xl font-bold":e.$route.path!=="/","text-sw-navy text-2xl font-bold":e.$route.path==="/"}),to:"/",onClick:i.scrollToTop},{default:Ve(()=>[he("Home")]),_:1},8,["class","onClick"]),te(o,{class:Be({"hover:text-blue-500 text-2xl font-bold":e.$route.path!=="/about","text-sw-navy text-2xl font-bold":e.$route.path==="/about"}),to:"/about",onClick:i.scrollToTop},{default:Ve(()=>[he("About")]),_:1},8,["class","onClick"]),te(o,{class:Be({"hover:text-blue-500 text-2xl font-bold":e.$route.path!=="/product","text-sw-navy text-2xl font-bold":e.$route.path==="/product"}),to:"/product",onClick:i.scrollToTop},{default:Ve(()=>[he("Product")]),_:1},8,["class","onClick"]),te(o,{class:Be({"hover:text-blue-500 text-2xl font-bold":e.$route.path!=="/room-booking","text-sw-navy text-2xl font-bold":e.$route.path==="/room-booking"}),to:"/room-booking",onClick:i.scrollToTop},{default:Ve(()=>[he("Book a Room")]),_:1},8,["class","onClick"]),s.isLoggedIn?(ie(),Sr(o,{key:0,class:Be({"hover:text-blue-500 text-2xl font-bold":e.$route.path!=="/profile","text-sw-navy text-2xl font-bold":e.$route.path==="/profile"}),to:"/profile",onClick:i.scrollToTop},{default:Ve(()=>[he("Profile")]),_:1},8,["class","onClick"])):Wn("",!0)],2),m("div",Sy,[m("button",{class:Be({hidden:!s.shouldShowButton,"md:inline-block":!0,"bg-green-600":!0,"hover:bg-sw-blue":!0,"text-white":!0,transition:!0,"duration-300":!0,"md:w-15":!0,"rounded-2xl":!0,"font-bold":!0,"py-2":!0,"px-4":!0,"focus:outline-none":!0,"focus:shadow-outline":!0}),onClick:t[2]||(t[2]=(...a)=>e.makePhoneCall&&e.makePhoneCall(...a))},[Iy,he(" Order on Call ")],2),te(o,{class:Be({hidden:!s.isNavMenuVisible,"md:inline-block px-6 py-3 text-sm font-bold leading-none text-white transition duration-300 rounded-2xl hover:bg-sw-blue focus:ring-4 focus:ring-sw-purple-blue-100 bg-sw-navy":!0}),to:"/signup",onClick:i.scrollToTop},{default:Ve(()=>[he("Signup")]),_:1},8,["class","onClick"]),te(o,{class:Be({hidden:!s.isLoggedIn,"md:inline-block px-6 py-3 text-sm font-bold leading-none text-white transition duration-300 rounded-2xl hover:bg-sw-blue focus:ring-4 focus:ring-sw-purple-blue-100 bg-sw-navy":s.isLoggedIn}),onClick:i.logOut,to:"/logout"},{default:Ve(()=>[he("Logout")]),_:1},8,["class","onClick"]),te(o,{class:Be({hidden:s.isLoggedIn,"md:inline-block px-6 py-3 text-sm font-bold leading-none text-white transition duration-300 rounded-2xl hover:bg-sw-blue focus:ring-4 focus:ring-sw-purple-blue-100 bg-sw-navy":!s.isLoggedIn}),to:"/login"},{default:Ve(()=>[he("Login")]),_:1},8,["class"]),m("button",{onClick:t[3]||(t[3]=(...a)=>i.toggleMenu&&i.toggleMenu(...a)),class:"md:hidden text-pink-600"},Ty)])]),Ay])],64)}const Oy=Fe(by,[["render",Cy],["__scopeId","data-v-846ea729"]]),Ry="/assets/Sally Sweet Word mark-1OvwvA8L.png",Py={name:"Footer",props:{sharedData:Object},methods:{subscribe(){this.$router.push({name:"Signup",query:{email:this.email}}).then(()=>{this.email=""})}},data(){return{shopDetaile:{name:"Sally Sweet",address:"Abbey Green Road, Leek, UK.",contact:"+44 133245 11",email:"info@sallysweet.uk"},isLoggedIn:!1,email:""}}},et=e=>(Fr("data-v-0512b6e1"),e=e(),jr(),e),Ny={class:"bg-sw-blue"},Ly={class:"container px-6 py-12 mx-auto"},My={class:"grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4"},Dy={class:"sm:col-span-2"},Uy=et(()=>m("a",{href:"/"},[m("img",{class:"w-25 h-20 m-2",src:Ry,alt:""})],-1)),$y=et(()=>m("h1",{class:"max-w-lg text-xl font-semibold tracking-tight text-white xl:text-2xl m-2"},"Subscribe Get Voucher Card.",-1)),Fy=et(()=>m("h3",{class:"max-w-lg text-sm font-regular tracking-tight text-white m-2"},"Don't miss Events and Promotions",-1)),jy={class:"flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row m-2"},By={class:"sm:col-span-1"},Hy={class:"text-2xl font-bold text-white"},Vy={class:"flex flex-col items-start mt-5 space-y-2"},zy={class:"flex items-center"},Wy=et(()=>m("i",{class:"fas fa-map-marker-alt fa-lg text-white mr-2"},null,-1)),Ky={class:"text-lg font-normal tracking-tight text-white"},qy=et(()=>m("span",{class:"font-bold"},"Address:",-1)),Gy={class:"flex items-center"},Yy=et(()=>m("i",{class:"fas fa-phone fa-lg text-white mr-2"},null,-1)),Jy={class:"text-lg font-normal tracking-tight text-white"},Xy=et(()=>m("span",{class:"font-bold"},"Contact:",-1)),Qy={class:"flex items-center"},Zy=et(()=>m("i",{class:"fas fa-envelope fa-lg text-white mr-2"},null,-1)),e_={class:"text-lg font-normal tracking-tight text-white"},t_=et(()=>m("span",{class:"font-bold"},"Email:",-1)),n_={class:"mx-12"},r_=et(()=>m("h1",{class:"font-bold text-white text-2xl underline"},"Social Media",-1)),s_=et(()=>m("h2",{class:"font-regular text-sm-navy text-sm mt-2"},"Follow us on social media",-1)),i_={class:"flex flex-row items-center mt-5 space-x-4"},o_={href:"https://www.facebook.com/sallysweet/",target:"_blank",class:"text-white hover:text-sw-pink"},a_={href:"https://www.instagram.com",target:"_blank",class:"text-white hover:text-sw-pink"},l_=Qn('<div data-v-0512b6e1><h2 class="text-lg font-semibold text-white pt-5 underline" data-v-0512b6e1>Our Shop Hours</h2><div class="flex flex-col md:flex-row justify-center items-start mt-4 space-y-4 md:space-y-0 md:space-x-8" data-v-0512b6e1><div class="flex flex-col items-center" data-v-0512b6e1><i class="fas fa-calendar-week fa-sm text-white mr-2" data-v-0512b6e1></i><h3 class="text-lg text-white font-medium" data-v-0512b6e1>Weekdays</h3><p class="text-xs text-white" data-v-0512b6e1>9:00 AM - 8:00 PM</p></div><div class="flex flex-col items-center" data-v-0512b6e1><i class="fas fa-calendar-alt fa-sm text-white mr-1" data-v-0512b6e1></i><h3 class="text-lg text-white font-medium" data-v-0512b6e1>Weekends</h3><p class="text-xs text-white" data-v-0512b6e1>10:00 AM - 6:00 PM</p></div></div></div>',1),c_={class:"pt-7 pb-7 px-0"},u_={class:"w-full pr-3 pl-3 mx-auto"},f_={class:"color-white text-center text-white font-medium justify-center"},d_={href:"#"};function h_(e,t,n,r,s,i){const o=We("font-awesome-icon");return ie(),pe("footer",Ny,[m("div",Ly,[m("div",My,[m("div",Dy,[Uy,$y,Fy,m("div",jy,[vn(m("input",{class:"flex items-center w-60 px-5 text-sm font-medium outline-none focus:bg-white placeholder:text-sw-grey-700 bg-white text-dark-sw-grey-900 rounded-2xl","onUpdate:modelValue":t[0]||(t[0]=a=>s.email=a),type:"email",placeholder:"Enter your Email"},null,512),[[Ir,s.email]]),m("button",{class:"w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-sw-pink rounded-lg hover:bg-sw-navy focus:ring focus:ring-gray-300 focus:ring-opacity-80 media-btn",onClick:t[1]||(t[1]=(...a)=>i.subscribe&&i.subscribe(...a))}," Subscribe ")])]),m("div",By,[m("h1",Hy,Ie(s.shopDetaile.name),1),m("div",Vy,[m("div",zy,[Wy,m("h2",Ky,[qy,he(" "+Ie(s.shopDetaile.address),1)])]),m("div",Gy,[Yy,m("h2",Jy,[Xy,he(" "+Ie(s.shopDetaile.contact),1)])]),m("div",Qy,[Zy,m("h2",e_,[t_,he(" "+Ie(s.shopDetaile.email),1)])])])]),m("div",n_,[r_,s_,m("div",i_,[m("a",o_,[te(o,{icon:["fab","facebook"],class:"text-3xl hover:scale-110 transition-transform duration-200"})]),m("a",a_,[te(o,{icon:["fab","instagram"],class:"text-3xl hover:scale-110 transition-transform duration-200"})])]),l_])])]),m("div",c_,[m("div",u_,[m("div",f_,[m("p",null,[he("© 2024 Sally Sweet. All Rights Reserved by "),m("a",d_,Ie(n.sharedData.Developer),1)])])])])])}const p_=Fe(Py,[["render",h_],["__scopeId","data-v-0512b6e1"]]),m_={data(){return{visible:!1}},methods:{scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})},handleScroll(){this.visible=window.scrollY>150}},mounted(){window.addEventListener("scroll",this.handleScroll)},destroyed(){window.removeEventListener("scroll",this.handleScroll)}};function g_(e,t,n,r,s,i){return vn((ie(),pe("button",{onClick:t[0]||(t[0]=(...o)=>i.scrollToTop&&i.scrollToTop(...o)),class:"fixed bottom-5 right-5 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full"}," ↑ Top ",512)),[[im,s.visible]])}const v_=Fe(m_,[["render",g_]]);/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const On=typeof window<"u";function b_(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ne=Object.assign;function Ki(e,t){const n={};for(const r in t){const s=t[r];n[r]=Ze(s)?s.map(e):e(s)}return n}const gr=()=>{},Ze=Array.isArray,y_=/\/$/,__=e=>e.replace(y_,"");function qi(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=S_(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function w_(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ic(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function x_(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&qn(t.matched[r],n.matched[s])&&Zf(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function qn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Zf(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!E_(e[n],t[n]))return!1;return!0}function E_(e,t){return Ze(e)?oc(e,t):Ze(t)?oc(t,e):e===t}function oc(e,t){return Ze(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function S_(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Rr;(function(e){e.pop="pop",e.push="push"})(Rr||(Rr={}));var vr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(vr||(vr={}));function I_(e){if(!e)if(On){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),__(e)}const k_=/^[^#]+#/;function T_(e,t){return e.replace(k_,"#")+t}function A_(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const wi=()=>({left:window.pageXOffset,top:window.pageYOffset});function C_(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=A_(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function ac(e,t){return(history.state?history.state.position-t:-1)+e}const Ao=new Map;function O_(e,t){Ao.set(e,t)}function R_(e){const t=Ao.get(e);return Ao.delete(e),t}let P_=()=>location.protocol+"//"+location.host;function ed(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),ic(l,"")}return ic(n,e)+r+s}function N_(e,t,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=ed(e,location),b=n.value,_=t.value;let O=0;if(p){if(n.value=g,t.value=p,o&&o===b){o=null;return}O=_?p.position-_.position:0}else r(g);s.forEach(y=>{y(n.value,b,{delta:O,type:Rr.pop,direction:O?O>0?vr.forward:vr.back:vr.unknown})})};function l(){o=n.value}function c(p){s.push(p);const g=()=>{const b=s.indexOf(p);b>-1&&s.splice(b,1)};return i.push(g),g}function u(){const{history:p}=window;p.state&&p.replaceState(ne({},p.state,{scroll:wi()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function lc(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?wi():null}}function L_(e){const{history:t,location:n}=window,r={value:ed(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const f=e.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+l:P_()+e+l;try{t[u?"replaceState":"pushState"](c,"",p),s.value=c}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function o(l,c){const u=ne({},t.state,lc(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=ne({},s.value,t.state,{forward:l,scroll:wi()});i(u.current,u,!0);const f=ne({},lc(r.value,l,null),{position:u.position+1},c);i(l,f,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function M_(e){e=I_(e);const t=L_(e),n=N_(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ne({location:"",base:e,go:r,createHref:T_.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function D_(e){return typeof e=="string"||e&&typeof e=="object"}function td(e){return typeof e=="string"||typeof e=="symbol"}const Nt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},nd=Symbol("");var cc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(cc||(cc={}));function Gn(e,t){return ne(new Error,{type:e,[nd]:!0},t)}function pt(e,t){return e instanceof Error&&nd in e&&(t==null||!!(e.type&t))}const uc="[^/]+?",U_={sensitive:!1,strict:!1,start:!0,end:!0},$_=/[.+*?^${}()[\]/\\]/g;function F_(e,t){const n=ne({},U_,t),r=[];let s=n.start?"^":"";const i=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const p=c[f];let g=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace($_,"\\$&"),g+=40;else if(p.type===1){const{value:b,repeatable:_,optional:O,regexp:y}=p;i.push({name:b,repeatable:_,optional:O});const S=y||uc;if(S!==uc){g+=10;try{new RegExp(`(${S})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${b}" (${S}): `+F.message)}}let C=_?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;f||(C=O&&c.length<2?`(?:/${C})`:"/"+C),O&&(C+="?"),s+=C,g+=20,O&&(g+=-8),_&&(g+=-20),S===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",b=i[p-1];f[b.name]=g&&b.repeatable?g.split("/"):g}return f}function l(c){let u="",f=!1;for(const p of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:b,repeatable:_,optional:O}=g,y=b in c?c[b]:"";if(Ze(y)&&!_)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const S=Ze(y)?y.join("/"):y;if(!S)if(O)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${b}"`);u+=S}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function j_(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function B_(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=j_(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(fc(r))return 1;if(fc(s))return-1}return s.length-r.length}function fc(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const H_={type:0,value:""},V_=/[a-zA-Z0-9_]/;function z_(e){if(!e)return[[]];if(e==="/")return[[H_]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function f(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:V_.test(l)?p():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function W_(e,t,n){const r=F_(z_(e.path),n),s=ne(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function K_(e,t){const n=[],r=new Map;t=pc({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function i(u,f,p){const g=!p,b=q_(u);b.aliasOf=p&&p.record;const _=pc(t,u),O=[b];if("alias"in u){const C=typeof u.alias=="string"?[u.alias]:u.alias;for(const F of C)O.push(ne({},b,{components:p?p.record.components:b.components,path:F,aliasOf:p?p.record:b}))}let y,S;for(const C of O){const{path:F}=C;if(f&&F[0]!=="/"){const K=f.record.path,j=K[K.length-1]==="/"?"":"/";C.path=f.record.path+(F&&j+F)}if(y=W_(C,f,_),p?p.alias.push(y):(S=S||y,S!==y&&S.alias.push(y),g&&u.name&&!hc(y)&&o(u.name)),b.children){const K=b.children;for(let j=0;j<K.length;j++)i(K[j],y,p&&p.children[j])}p=p||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&l(y)}return S?()=>{o(S)}:gr}function o(u){if(td(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&B_(u,n[f])>=0&&(u.record.path!==n[f].record.path||!rd(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!hc(u)&&r.set(u.record.name,u)}function c(u,f){let p,g={},b,_;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw Gn(1,{location:u});_=p.record.name,g=ne(dc(f.params,p.keys.filter(S=>!S.optional).map(S=>S.name)),u.params&&dc(u.params,p.keys.map(S=>S.name))),b=p.stringify(g)}else if("path"in u)b=u.path,p=n.find(S=>S.re.test(b)),p&&(g=p.parse(b),_=p.record.name);else{if(p=f.name?r.get(f.name):n.find(S=>S.re.test(f.path)),!p)throw Gn(1,{location:u,currentLocation:f});_=p.record.name,g=ne({},f.params,u.params),b=p.stringify(g)}const O=[];let y=p;for(;y;)O.unshift(y.record),y=y.parent;return{name:_,path:b,params:g,matched:O,meta:Y_(O)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function dc(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function q_(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:G_(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function G_(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function hc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Y_(e){return e.reduce((t,n)=>ne(t,n.meta),{})}function pc(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function rd(e,t){return t.children.some(n=>n===e||rd(e,n))}const sd=/#/g,J_=/&/g,X_=/\//g,Q_=/=/g,Z_=/\?/g,id=/\+/g,e0=/%5B/g,t0=/%5D/g,od=/%5E/g,n0=/%60/g,ad=/%7B/g,r0=/%7C/g,ld=/%7D/g,s0=/%20/g;function Ta(e){return encodeURI(""+e).replace(r0,"|").replace(e0,"[").replace(t0,"]")}function i0(e){return Ta(e).replace(ad,"{").replace(ld,"}").replace(od,"^")}function Co(e){return Ta(e).replace(id,"%2B").replace(s0,"+").replace(sd,"%23").replace(J_,"%26").replace(n0,"`").replace(ad,"{").replace(ld,"}").replace(od,"^")}function o0(e){return Co(e).replace(Q_,"%3D")}function a0(e){return Ta(e).replace(sd,"%23").replace(Z_,"%3F")}function l0(e){return e==null?"":a0(e).replace(X_,"%2F")}function Xs(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function c0(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(id," "),o=i.indexOf("="),a=Xs(o<0?i:i.slice(0,o)),l=o<0?null:Xs(i.slice(o+1));if(a in t){let c=t[a];Ze(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function mc(e){let t="";for(let n in e){const r=e[n];if(n=o0(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ze(r)?r.map(i=>i&&Co(i)):[r&&Co(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function u0(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Ze(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const f0=Symbol(""),gc=Symbol(""),Aa=Symbol(""),cd=Symbol(""),Oo=Symbol("");function or(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Ft(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(Gn(4,{from:n,to:t})):f instanceof Error?a(f):D_(f)?a(Gn(2,{from:t,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},c=e.call(r&&r.instances[s],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function Gi(e,t,n,r){const s=[];for(const i of e)for(const o in i.components){let a=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(d0(a)){const c=(a.__vccOpts||a)[t];c&&s.push(Ft(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=b_(c)?c.default:c;i.components[o]=u;const p=(u.__vccOpts||u)[t];return p&&Ft(p,n,r,i,o)()}))}}return s}function d0(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function vc(e){const t=_t(Aa),n=_t(cd),r=Se(()=>t.resolve(Dn(e.to))),s=Se(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(qn.bind(null,u));if(p>-1)return p;const g=bc(l[c-2]);return c>1&&bc(u)===g&&f[f.length-1].path!==g?f.findIndex(qn.bind(null,l[c-2])):p}),i=Se(()=>s.value>-1&&g0(n.params,r.value.params)),o=Se(()=>s.value>-1&&s.value===n.matched.length-1&&Zf(n.params,r.value.params));function a(l={}){return m0(l)?t[Dn(e.replace)?"replace":"push"](Dn(e.to)).catch(gr):Promise.resolve()}return{route:r,href:Se(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const h0=la({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vc,setup(e,{slots:t}){const n=ci(vc(e)),{options:r}=_t(Aa),s=Se(()=>({[yc(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[yc(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:da("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),p0=h0;function m0(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function g0(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ze(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function bc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const yc=(e,t,n)=>e??t??n,v0=la({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=_t(Oo),s=Se(()=>e.route||r.value),i=_t(gc,0),o=Se(()=>{let c=Dn(i);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Se(()=>s.value.matched[o.value]);Es(gc,Se(()=>o.value+1)),Es(f0,a),Es(Oo,s);const l=Cu();return dr(()=>[l.value,a.value,e.name],([c,u,f],[p,g,b])=>{u&&(u.instances[f]=c,g&&g!==u&&c&&c===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!qn(u,g)||!p)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,u=e.name,f=a.value,p=f&&f.components[u];if(!p)return _c(n.default,{Component:p,route:c});const g=f.props[u],b=g?g===!0?c.params:typeof g=="function"?g(c):g:null,O=da(p,ne({},b,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return _c(n.default,{Component:O,route:c})||O}}});function _c(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ud=v0;function b0(e){const t=K_(e.routes,e),n=e.parseQuery||c0,r=e.stringifyQuery||mc,s=e.history,i=or(),o=or(),a=or(),l=Wh(Nt);let c=Nt;On&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ki.bind(null,E=>""+E),f=Ki.bind(null,l0),p=Ki.bind(null,Xs);function g(E,M){let P,$;return td(E)?(P=t.getRecordMatcher(E),$=M):$=E,t.addRoute($,P)}function b(E){const M=t.getRecordMatcher(E);M&&t.removeRoute(M)}function _(){return t.getRoutes().map(E=>E.record)}function O(E){return!!t.getRecordMatcher(E)}function y(E,M){if(M=ne({},M||l.value),typeof E=="string"){const h=qi(n,E,M.path),v=t.resolve({path:h.path},M),I=s.createHref(h.fullPath);return ne(h,v,{params:p(v.params),hash:Xs(h.hash),redirectedFrom:void 0,href:I})}let P;if("path"in E)P=ne({},E,{path:qi(n,E.path,M.path).path});else{const h=ne({},E.params);for(const v in h)h[v]==null&&delete h[v];P=ne({},E,{params:f(h)}),M.params=f(M.params)}const $=t.resolve(P,M),ee=E.hash||"";$.params=u(p($.params));const fe=w_(r,ne({},E,{hash:i0(ee),path:$.path})),d=s.createHref(fe);return ne({fullPath:fe,hash:ee,query:r===mc?u0(E.query):E.query||{}},$,{redirectedFrom:void 0,href:d})}function S(E){return typeof E=="string"?qi(n,E,l.value.path):ne({},E)}function C(E,M){if(c!==E)return Gn(8,{from:M,to:E})}function F(E){return Q(E)}function K(E){return F(ne(S(E),{replace:!0}))}function j(E){const M=E.matched[E.matched.length-1];if(M&&M.redirect){const{redirect:P}=M;let $=typeof P=="function"?P(E):P;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=S($):{path:$},$.params={}),ne({query:E.query,hash:E.hash,params:"path"in $?{}:E.params},$)}}function Q(E,M){const P=c=y(E),$=l.value,ee=E.state,fe=E.force,d=E.replace===!0,h=j(P);if(h)return Q(ne(S(h),{state:typeof h=="object"?ne({},ee,h.state):ee,force:fe,replace:d}),M||P);const v=P;v.redirectedFrom=M;let I;return!fe&&x_(r,$,P)&&(I=Gn(16,{to:v,from:$}),nt($,$,!0,!1)),(I?Promise.resolve(I):Pe(v,$)).catch(w=>pt(w)?pt(w,2)?w:Ot(w):Z(w,v,$)).then(w=>{if(w){if(pt(w,2))return Q(ne({replace:d},S(w.to),{state:typeof w.to=="object"?ne({},ee,w.to.state):ee,force:fe}),M||v)}else w=nn(v,$,!0,d,ee);return Ct(v,$,w),w})}function _e(E,M){const P=C(E,M);return P?Promise.reject(P):Promise.resolve()}function ve(E){const M=An.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(E):E()}function Pe(E,M){let P;const[$,ee,fe]=y0(E,M);P=Gi($.reverse(),"beforeRouteLeave",E,M);for(const h of $)h.leaveGuards.forEach(v=>{P.push(Ft(v,E,M))});const d=_e.bind(null,E,M);return P.push(d),Te(P).then(()=>{P=[];for(const h of i.list())P.push(Ft(h,E,M));return P.push(d),Te(P)}).then(()=>{P=Gi(ee,"beforeRouteUpdate",E,M);for(const h of ee)h.updateGuards.forEach(v=>{P.push(Ft(v,E,M))});return P.push(d),Te(P)}).then(()=>{P=[];for(const h of fe)if(h.beforeEnter)if(Ze(h.beforeEnter))for(const v of h.beforeEnter)P.push(Ft(v,E,M));else P.push(Ft(h.beforeEnter,E,M));return P.push(d),Te(P)}).then(()=>(E.matched.forEach(h=>h.enterCallbacks={}),P=Gi(fe,"beforeRouteEnter",E,M),P.push(d),Te(P))).then(()=>{P=[];for(const h of o.list())P.push(Ft(h,E,M));return P.push(d),Te(P)}).catch(h=>pt(h,8)?h:Promise.reject(h))}function Ct(E,M,P){a.list().forEach($=>ve(()=>$(E,M,P)))}function nn(E,M,P,$,ee){const fe=C(E,M);if(fe)return fe;const d=M===Nt,h=On?history.state:{};P&&($||d?s.replace(E.fullPath,ne({scroll:d&&h&&h.scroll},ee)):s.push(E.fullPath,ee)),l.value=E,nt(E,M,P,d),Ot()}let tt;function nr(){tt||(tt=s.listen((E,M,P)=>{if(!rs.listening)return;const $=y(E),ee=j($);if(ee){Q(ne(ee,{replace:!0}),$).catch(gr);return}c=$;const fe=l.value;On&&O_(ac(fe.fullPath,P.delta),wi()),Pe($,fe).catch(d=>pt(d,12)?d:pt(d,2)?(Q(d.to,$).then(h=>{pt(h,20)&&!P.delta&&P.type===Rr.pop&&s.go(-1,!1)}).catch(gr),Promise.reject()):(P.delta&&s.go(-P.delta,!1),Z(d,$,fe))).then(d=>{d=d||nn($,fe,!1),d&&(P.delta&&!pt(d,8)?s.go(-P.delta,!1):P.type===Rr.pop&&pt(d,20)&&s.go(-1,!1)),Ct($,fe,d)}).catch(gr)}))}let kn=or(),we=or(),re;function Z(E,M,P){Ot(E);const $=we.list();return $.length?$.forEach(ee=>ee(E,M,P)):console.error(E),Promise.reject(E)}function ht(){return re&&l.value!==Nt?Promise.resolve():new Promise((E,M)=>{kn.add([E,M])})}function Ot(E){return re||(re=!E,nr(),kn.list().forEach(([M,P])=>E?P(E):M()),kn.reset()),E}function nt(E,M,P,$){const{scrollBehavior:ee}=e;if(!On||!ee)return Promise.resolve();const fe=!P&&R_(ac(E.fullPath,0))||($||!P)&&history.state&&history.state.scroll||null;return Nu().then(()=>ee(E,M,fe)).then(d=>d&&C_(d)).catch(d=>Z(d,E,M))}const Ne=E=>s.go(E);let Tn;const An=new Set,rs={currentRoute:l,listening:!0,addRoute:g,removeRoute:b,hasRoute:O,getRoutes:_,resolve:y,options:e,push:F,replace:K,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:we.add,isReady:ht,install(E){const M=this;E.component("RouterLink",p0),E.component("RouterView",ud),E.config.globalProperties.$router=M,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>Dn(l)}),On&&!Tn&&l.value===Nt&&(Tn=!0,F(s.location).catch(ee=>{}));const P={};for(const ee in Nt)Object.defineProperty(P,ee,{get:()=>l.value[ee],enumerable:!0});E.provide(Aa,M),E.provide(cd,Eu(P)),E.provide(Oo,l);const $=E.unmount;An.add(E),E.unmount=function(){An.delete(E),An.size<1&&(c=Nt,tt&&tt(),tt=null,l.value=Nt,Tn=!1,re=!1),$()}}};function Te(E){return E.reduce((M,P)=>M.then(()=>ve(P)),Promise.resolve())}return rs}function y0(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(c=>qn(c,a))?r.push(a):n.push(a));const l=e.matched[o];l&&(t.matched.find(c=>qn(c,l))||s.push(l))}return[n,r,s]}const _0={components:{Header:Oy,Footer:p_,UpButton:v_,RouterView:ud},methods:{checkShopHours(){const e=new Date,t=e.getDay(),n=e.getHours();t>=1&&t<=5&&n>=9&&n<20||(t===0||t===6)&&n>=10&&n<18?this.isShopOpen=!0:this.isShopOpen=!1}},data(){return{isShopOpen:!1,sharedData:{Developer:"Arshad"}}},created(){this.checkShopHours()}},w0={key:0,class:"fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full",style:{"z-index":"9999"}},x0={class:"relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"},E0={class:"mt-3 text-center"},S0=m("i",{class:"fas fa-store fa-3x text-green-500"},null,-1),I0=m("h3",{class:"text-lg leading-6 font-medium text-gray-900"},"Good News!",-1),k0=m("div",{class:"mt-2 px-7 py-3"},[m("p",{class:"text-lg text-sw-navy"},"Our physical store is now open with all your favorite Sweets.Come and visit us!.")],-1),T0={class:"items-center px-4 py-3"},A0={class:"flex flex-col min-h-screen"},C0={class:"flex-grow"};function O0(e,t,n,r,s,i){const o=We("Header"),a=We("router-view"),l=We("UpButton"),c=We("Footer");return ie(),pe(Ee,null,[s.isShopOpen?(ie(),pe("div",w0,[m("div",x0,[m("div",E0,[S0,I0,k0,m("div",T0,[m("button",{onClick:t[0]||(t[0]=u=>s.isShopOpen=!1),class:"px-4 py-2 bg-sw-pink text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-sw-navy focus:outline-none focus:ring-2 focus:ring-green-300"}," Okay ")])])])])):Wn("",!0),m("div",A0,[te(o),m("main",C0,[te(a),te(l)]),te(c,{sharedData:s.sharedData},null,8,["sharedData"])])],64)}const R0=Fe(_0,[["render",O0]]),P0={props:{title:{type:String,required:!0},imageUrl:{type:String,required:!0},description:{type:String,required:!0},date:{type:String,required:!1}}},N0={class:"relative flex w-96 flex-col rounded-x bg-white bg-clip-border text-gray-700 shadow-md"},L0={class:"relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40"},M0=["src"],D0={class:"flex-col justify-center w-full p-4 pt-4"},U0={class:"mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"},$0={class:"block font-sans text-base font-light leading-relaxed text-inherit antialiased"},F0={class:"flex p-6 pt-0 justify-center"};function j0(e,t,n,r,s,i){const o=We("router-link");return ie(),pe("div",N0,[m("div",L0,[m("img",{src:n.imageUrl,alt:"Event Image",class:"w-full h-auto"},null,8,M0)]),m("div",D0,[m("h5",U0,Ie(n.title),1),m("p",$0,Ie(n.description),1)]),m("div",F0,[te(o,{class:"inline-block px-6 py-3 text-sm font-bold leading-none text-white transition duration-300 rounded-2xl hover:bg-sw-blue focus:ring-4 focus:ring-sw-purple-blue-100 bg-sw-navy",to:"/room-booking",role:"button"},{default:Ve(()=>[he(" Book Event ")]),_:1})])])}const B0=Fe(P0,[["render",j0]]),H0={props:["name","description","price","imageUrl"],methods:{makePhoneCall(){window.location.href=`tel:${this.phoneNumber}`}}},V0={class:"max-w-sm border-sw-blue rounded overflow-hidden shadow-lg m-4"},z0=["src"],W0={class:"px-6 py-4"},K0={class:"font-bold text-xl mb-2 text-sw-choco"},q0={class:"text-amber-700 text-base"},G0={class:"px-6 pt-4 pb-2 flex justify-between items-center"},Y0={class:"inline-block bg-white-300 rounded-full px-3 py-1 text-3xl font-bold text-sw-navy mr-2 mb-2"};function J0(e,t,n,r,s,i){return ie(),pe("div",V0,[m("img",{class:"w-full h-48 object-cover p-10",src:n.imageUrl,alt:"Product image"},null,8,z0),m("div",W0,[m("div",K0,Ie(n.name),1),m("p",q0,Ie(n.description),1)]),m("div",G0,[m("span",Y0,Ie(n.price),1),m("button",{onClick:t[0]||(t[0]=(...o)=>i.makePhoneCall&&i.makePhoneCall(...o)),class:"bg-pink-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"},"Call for Order")])])}const fd=Fe(H0,[["render",J0]]);function dd(e,t){return function(){return e.apply(t,arguments)}}const{toString:X0}=Object.prototype,{getPrototypeOf:Ca}=Object,xi=(e=>t=>{const n=X0.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),dt=e=>(e=e.toLowerCase(),t=>xi(t)===e),Ei=e=>t=>typeof t===e,{isArray:er}=Array,Pr=Ei("undefined");function Q0(e){return e!==null&&!Pr(e)&&e.constructor!==null&&!Pr(e.constructor)&&Ke(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const hd=dt("ArrayBuffer");function Z0(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&hd(e.buffer),t}const ew=Ei("string"),Ke=Ei("function"),pd=Ei("number"),Si=e=>e!==null&&typeof e=="object",tw=e=>e===!0||e===!1,Os=e=>{if(xi(e)!=="object")return!1;const t=Ca(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},nw=dt("Date"),rw=dt("File"),sw=dt("Blob"),iw=dt("FileList"),ow=e=>Si(e)&&Ke(e.pipe),aw=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Ke(e.append)&&((t=xi(e))==="formdata"||t==="object"&&Ke(e.toString)&&e.toString()==="[object FormData]"))},lw=dt("URLSearchParams"),cw=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Jr(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),er(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let a;for(r=0;r<o;r++)a=i[r],t.call(null,e[a],a,e)}}function md(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const gd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,vd=e=>!Pr(e)&&e!==gd;function Ro(){const{caseless:e}=vd(this)&&this||{},t={},n=(r,s)=>{const i=e&&md(t,s)||s;Os(t[i])&&Os(r)?t[i]=Ro(t[i],r):Os(r)?t[i]=Ro({},r):er(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Jr(arguments[r],n);return t}const uw=(e,t,n,{allOwnKeys:r}={})=>(Jr(t,(s,i)=>{n&&Ke(s)?e[i]=dd(s,n):e[i]=s},{allOwnKeys:r}),e),fw=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),dw=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},hw=(e,t,n,r)=>{let s,i,o;const a={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=n!==!1&&Ca(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},pw=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},mw=e=>{if(!e)return null;if(er(e))return e;let t=e.length;if(!pd(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},gw=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Ca(Uint8Array)),vw=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},bw=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},yw=dt("HTMLFormElement"),_w=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),wc=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),ww=dt("RegExp"),bd=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Jr(n,(s,i)=>{let o;(o=t(s,i,e))!==!1&&(r[i]=o||s)}),Object.defineProperties(e,r)},xw=e=>{bd(e,(t,n)=>{if(Ke(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Ke(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ew=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return er(e)?r(e):r(String(e).split(t)),n},Sw=()=>{},Iw=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Yi="abcdefghijklmnopqrstuvwxyz",xc="0123456789",yd={DIGIT:xc,ALPHA:Yi,ALPHA_DIGIT:Yi+Yi.toUpperCase()+xc},kw=(e=16,t=yd.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Tw(e){return!!(e&&Ke(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Aw=e=>{const t=new Array(10),n=(r,s)=>{if(Si(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=er(r)?[]:{};return Jr(r,(o,a)=>{const l=n(o,s+1);!Pr(l)&&(i[a]=l)}),t[s]=void 0,i}}return r};return n(e,0)},Cw=dt("AsyncFunction"),Ow=e=>e&&(Si(e)||Ke(e))&&Ke(e.then)&&Ke(e.catch),x={isArray:er,isArrayBuffer:hd,isBuffer:Q0,isFormData:aw,isArrayBufferView:Z0,isString:ew,isNumber:pd,isBoolean:tw,isObject:Si,isPlainObject:Os,isUndefined:Pr,isDate:nw,isFile:rw,isBlob:sw,isRegExp:ww,isFunction:Ke,isStream:ow,isURLSearchParams:lw,isTypedArray:gw,isFileList:iw,forEach:Jr,merge:Ro,extend:uw,trim:cw,stripBOM:fw,inherits:dw,toFlatObject:hw,kindOf:xi,kindOfTest:dt,endsWith:pw,toArray:mw,forEachEntry:vw,matchAll:bw,isHTMLForm:yw,hasOwnProperty:wc,hasOwnProp:wc,reduceDescriptors:bd,freezeMethods:xw,toObjectSet:Ew,toCamelCase:_w,noop:Sw,toFiniteNumber:Iw,findKey:md,global:gd,isContextDefined:vd,ALPHABET:yd,generateString:kw,isSpecCompliantForm:Tw,toJSONObject:Aw,isAsyncFn:Cw,isThenable:Ow};function Y(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}x.inherits(Y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:x.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const _d=Y.prototype,wd={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{wd[e]={value:e}});Object.defineProperties(Y,wd);Object.defineProperty(_d,"isAxiosError",{value:!0});Y.from=(e,t,n,r,s,i)=>{const o=Object.create(_d);return x.toFlatObject(e,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),Y.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const Rw=null;function Po(e){return x.isPlainObject(e)||x.isArray(e)}function xd(e){return x.endsWith(e,"[]")?e.slice(0,-2):e}function Ec(e,t,n){return e?e.concat(t).map(function(s,i){return s=xd(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function Pw(e){return x.isArray(e)&&!e.some(Po)}const Nw=x.toFlatObject(x,{},null,function(t){return/^is[A-Z]/.test(t)});function Ii(e,t,n){if(!x.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=x.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,O){return!x.isUndefined(O[_])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&x.isSpecCompliantForm(t);if(!x.isFunction(s))throw new TypeError("visitor must be a function");function c(b){if(b===null)return"";if(x.isDate(b))return b.toISOString();if(!l&&x.isBlob(b))throw new Y("Blob is not supported. Use a Buffer instead.");return x.isArrayBuffer(b)||x.isTypedArray(b)?l&&typeof Blob=="function"?new Blob([b]):Buffer.from(b):b}function u(b,_,O){let y=b;if(b&&!O&&typeof b=="object"){if(x.endsWith(_,"{}"))_=r?_:_.slice(0,-2),b=JSON.stringify(b);else if(x.isArray(b)&&Pw(b)||(x.isFileList(b)||x.endsWith(_,"[]"))&&(y=x.toArray(b)))return _=xd(_),y.forEach(function(C,F){!(x.isUndefined(C)||C===null)&&t.append(o===!0?Ec([_],F,i):o===null?_:_+"[]",c(C))}),!1}return Po(b)?!0:(t.append(Ec(O,_,i),c(b)),!1)}const f=[],p=Object.assign(Nw,{defaultVisitor:u,convertValue:c,isVisitable:Po});function g(b,_){if(!x.isUndefined(b)){if(f.indexOf(b)!==-1)throw Error("Circular reference detected in "+_.join("."));f.push(b),x.forEach(b,function(y,S){(!(x.isUndefined(y)||y===null)&&s.call(t,y,x.isString(S)?S.trim():S,_,p))===!0&&g(y,_?_.concat(S):[S])}),f.pop()}}if(!x.isObject(e))throw new TypeError("data must be an object");return g(e),t}function Sc(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Oa(e,t){this._pairs=[],e&&Ii(e,this,t)}const Ed=Oa.prototype;Ed.append=function(t,n){this._pairs.push([t,n])};Ed.toString=function(t){const n=t?function(r){return t.call(this,r,Sc)}:Sc;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Lw(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Sd(e,t,n){if(!t)return e;const r=n&&n.encode||Lw,s=n&&n.serialize;let i;if(s?i=s(t,n):i=x.isURLSearchParams(t)?t.toString():new Oa(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Ic{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){x.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Id={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Mw=typeof URLSearchParams<"u"?URLSearchParams:Oa,Dw=typeof FormData<"u"?FormData:null,Uw=typeof Blob<"u"?Blob:null,$w={isBrowser:!0,classes:{URLSearchParams:Mw,FormData:Dw,Blob:Uw},protocols:["http","https","file","blob","url","data"]},kd=typeof window<"u"&&typeof document<"u",Fw=(e=>kd&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),jw=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Bw=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:kd,hasStandardBrowserEnv:Fw,hasStandardBrowserWebWorkerEnv:jw},Symbol.toStringTag,{value:"Module"})),at={...Bw,...$w};function Hw(e,t){return Ii(e,new at.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return at.isNode&&x.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Vw(e){return x.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function zw(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function Td(e){function t(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=i>=n.length;return o=!o&&x.isArray(s)?s.length:o,l?(x.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!x.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&x.isArray(s[o])&&(s[o]=zw(s[o])),!a)}if(x.isFormData(e)&&x.isFunction(e.entries)){const n={};return x.forEachEntry(e,(r,s)=>{t(Vw(r),s,n,0)}),n}return null}function Ww(e,t,n){if(x.isString(e))try{return(t||JSON.parse)(e),x.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Ra={transitional:Id,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=x.isObject(t);if(i&&x.isHTMLForm(t)&&(t=new FormData(t)),x.isFormData(t))return s&&s?JSON.stringify(Td(t)):t;if(x.isArrayBuffer(t)||x.isBuffer(t)||x.isStream(t)||x.isFile(t)||x.isBlob(t))return t;if(x.isArrayBufferView(t))return t.buffer;if(x.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Hw(t,this.formSerializer).toString();if((a=x.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Ii(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Ww(t)):t}],transformResponse:[function(t){const n=this.transitional||Ra.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&x.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(a){if(o)throw a.name==="SyntaxError"?Y.from(a,Y.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:at.classes.FormData,Blob:at.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};x.forEach(["delete","get","head","post","put","patch"],e=>{Ra.headers[e]={}});const Pa=Ra,Kw=x.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),qw=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&Kw[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},kc=Symbol("internals");function ar(e){return e&&String(e).trim().toLowerCase()}function Rs(e){return e===!1||e==null?e:x.isArray(e)?e.map(Rs):String(e)}function Gw(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Yw=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ji(e,t,n,r,s){if(x.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!x.isString(t)){if(x.isString(r))return t.indexOf(r)!==-1;if(x.isRegExp(r))return r.test(t)}}function Jw(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Xw(e,t){const n=x.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class ki{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(a,l,c){const u=ar(l);if(!u)throw new Error("header name must be a non-empty string");const f=x.findKey(s,u);(!f||s[f]===void 0||c===!0||c===void 0&&s[f]!==!1)&&(s[f||l]=Rs(a))}const o=(a,l)=>x.forEach(a,(c,u)=>i(c,u,l));return x.isPlainObject(t)||t instanceof this.constructor?o(t,n):x.isString(t)&&(t=t.trim())&&!Yw(t)?o(qw(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=ar(t),t){const r=x.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Gw(s);if(x.isFunction(n))return n.call(this,s,r);if(x.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=ar(t),t){const r=x.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ji(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=ar(o),o){const a=x.findKey(r,o);a&&(!n||Ji(r,r[a],a,n))&&(delete r[a],s=!0)}}return x.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||Ji(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return x.forEach(this,(s,i)=>{const o=x.findKey(r,i);if(o){n[o]=Rs(s),delete n[i];return}const a=t?Jw(i):String(i).trim();a!==i&&delete n[i],n[a]=Rs(s),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return x.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&x.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[kc]=this[kc]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=ar(o);r[a]||(Xw(s,o),r[a]=!0)}return x.isArray(t)?t.forEach(i):i(t),this}}ki.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);x.reduceDescriptors(ki.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});x.freezeMethods(ki);const wt=ki;function Xi(e,t){const n=this||Pa,r=t||n,s=wt.from(r.headers);let i=r.data;return x.forEach(e,function(a){i=a.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function Ad(e){return!!(e&&e.__CANCEL__)}function Xr(e,t,n){Y.call(this,e??"canceled",Y.ERR_CANCELED,t,n),this.name="CanceledError"}x.inherits(Xr,Y,{__CANCEL__:!0});function Qw(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new Y("Request failed with status code "+n.status,[Y.ERR_BAD_REQUEST,Y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Zw=at.hasStandardBrowserEnv?{write(e,t,n,r,s,i){const o=[e+"="+encodeURIComponent(t)];x.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),x.isString(r)&&o.push("path="+r),x.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function e1(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function t1(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Cd(e,t){return e&&!e1(t)?t1(e,t):t}const n1=at.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=x.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function r1(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function s1(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(l){const c=Date.now(),u=r[i];o||(o=c),n[s]=l,r[s]=c;let f=i,p=0;for(;f!==s;)p+=n[f++],f=f%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const g=u&&c-u;return g?Math.round(p*1e3/g):void 0}}function Tc(e,t){let n=0;const r=s1(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,l=r(a),c=i<=o;n=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&c?(o-i)/l:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const i1=typeof XMLHttpRequest<"u",o1=i1&&function(e){return new Promise(function(n,r){let s=e.data;const i=wt.from(e.headers).normalize();let{responseType:o,withXSRFToken:a}=e,l;function c(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let u;if(x.isFormData(s)){if(at.hasStandardBrowserEnv||at.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((u=i.getContentType())!==!1){const[_,...O]=u?u.split(";").map(y=>y.trim()).filter(Boolean):[];i.setContentType([_||"multipart/form-data",...O].join("; "))}}let f=new XMLHttpRequest;if(e.auth){const _=e.auth.username||"",O=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(_+":"+O))}const p=Cd(e.baseURL,e.url);f.open(e.method.toUpperCase(),Sd(p,e.params,e.paramsSerializer),!0),f.timeout=e.timeout;function g(){if(!f)return;const _=wt.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),y={data:!o||o==="text"||o==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:_,config:e,request:f};Qw(function(C){n(C),c()},function(C){r(C),c()},y),f=null}if("onloadend"in f?f.onloadend=g:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(g)},f.onabort=function(){f&&(r(new Y("Request aborted",Y.ECONNABORTED,e,f)),f=null)},f.onerror=function(){r(new Y("Network Error",Y.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let O=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const y=e.transitional||Id;e.timeoutErrorMessage&&(O=e.timeoutErrorMessage),r(new Y(O,y.clarifyTimeoutError?Y.ETIMEDOUT:Y.ECONNABORTED,e,f)),f=null},at.hasStandardBrowserEnv&&(a&&x.isFunction(a)&&(a=a(e)),a||a!==!1&&n1(p))){const _=e.xsrfHeaderName&&e.xsrfCookieName&&Zw.read(e.xsrfCookieName);_&&i.set(e.xsrfHeaderName,_)}s===void 0&&i.setContentType(null),"setRequestHeader"in f&&x.forEach(i.toJSON(),function(O,y){f.setRequestHeader(y,O)}),x.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),o&&o!=="json"&&(f.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&f.addEventListener("progress",Tc(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",Tc(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=_=>{f&&(r(!_||_.type?new Xr(null,e,f):_),f.abort(),f=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const b=r1(p);if(b&&at.protocols.indexOf(b)===-1){r(new Y("Unsupported protocol "+b+":",Y.ERR_BAD_REQUEST,e));return}f.send(s||null)})},No={http:Rw,xhr:o1};x.forEach(No,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ac=e=>`- ${e}`,a1=e=>x.isFunction(e)||e===null||e===!1,Od={getAdapter:e=>{e=x.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let i=0;i<t;i++){n=e[i];let o;if(r=n,!a1(n)&&(r=No[(o=String(n)).toLowerCase()],r===void 0))throw new Y(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=t?i.length>1?`since :
`+i.map(Ac).join(`
`):" "+Ac(i[0]):"as no adapter specified";throw new Y("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:No};function Qi(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Xr(null,e)}function Cc(e){return Qi(e),e.headers=wt.from(e.headers),e.data=Xi.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Od.getAdapter(e.adapter||Pa.adapter)(e).then(function(r){return Qi(e),r.data=Xi.call(e,e.transformResponse,r),r.headers=wt.from(r.headers),r},function(r){return Ad(r)||(Qi(e),r&&r.response&&(r.response.data=Xi.call(e,e.transformResponse,r.response),r.response.headers=wt.from(r.response.headers))),Promise.reject(r)})}const Oc=e=>e instanceof wt?e.toJSON():e;function Yn(e,t){t=t||{};const n={};function r(c,u,f){return x.isPlainObject(c)&&x.isPlainObject(u)?x.merge.call({caseless:f},c,u):x.isPlainObject(u)?x.merge({},u):x.isArray(u)?u.slice():u}function s(c,u,f){if(x.isUndefined(u)){if(!x.isUndefined(c))return r(void 0,c,f)}else return r(c,u,f)}function i(c,u){if(!x.isUndefined(u))return r(void 0,u)}function o(c,u){if(x.isUndefined(u)){if(!x.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function a(c,u,f){if(f in t)return r(c,u);if(f in e)return r(void 0,c)}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u)=>s(Oc(c),Oc(u),!0)};return x.forEach(Object.keys(Object.assign({},e,t)),function(u){const f=l[u]||s,p=f(e[u],t[u],u);x.isUndefined(p)&&f!==a||(n[u]=p)}),n}const Rd="1.6.5",Na={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Na[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Rc={};Na.transitional=function(t,n,r){function s(i,o){return"[Axios v"+Rd+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(t===!1)throw new Y(s(o," has been removed"+(n?" in "+n:"")),Y.ERR_DEPRECATED);return n&&!Rc[o]&&(Rc[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,a):!0}};function l1(e,t,n){if(typeof e!="object")throw new Y("options must be an object",Y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const a=e[i],l=a===void 0||o(a,i,e);if(l!==!0)throw new Y("option "+i+" must be "+l,Y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Y("Unknown option "+i,Y.ERR_BAD_OPTION)}}const Lo={assertOptions:l1,validators:Na},Lt=Lo.validators;class Qs{constructor(t){this.defaults=t,this.interceptors={request:new Ic,response:new Ic}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Yn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Lo.assertOptions(r,{silentJSONParsing:Lt.transitional(Lt.boolean),forcedJSONParsing:Lt.transitional(Lt.boolean),clarifyTimeoutError:Lt.transitional(Lt.boolean)},!1),s!=null&&(x.isFunction(s)?n.paramsSerializer={serialize:s}:Lo.assertOptions(s,{encode:Lt.function,serialize:Lt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&x.merge(i.common,i[n.method]);i&&x.forEach(["delete","get","head","post","put","patch","common"],b=>{delete i[b]}),n.headers=wt.concat(o,i);const a=[];let l=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(n)===!1||(l=l&&_.synchronous,a.unshift(_.fulfilled,_.rejected))});const c=[];this.interceptors.response.forEach(function(_){c.push(_.fulfilled,_.rejected)});let u,f=0,p;if(!l){const b=[Cc.bind(this),void 0];for(b.unshift.apply(b,a),b.push.apply(b,c),p=b.length,u=Promise.resolve(n);f<p;)u=u.then(b[f++],b[f++]);return u}p=a.length;let g=n;for(f=0;f<p;){const b=a[f++],_=a[f++];try{g=b(g)}catch(O){_.call(this,O);break}}try{u=Cc.call(this,g)}catch(b){return Promise.reject(b)}for(f=0,p=c.length;f<p;)u=u.then(c[f++],c[f++]);return u}getUri(t){t=Yn(this.defaults,t);const n=Cd(t.baseURL,t.url);return Sd(n,t.params,t.paramsSerializer)}}x.forEach(["delete","get","head","options"],function(t){Qs.prototype[t]=function(n,r){return this.request(Yn(r||{},{method:t,url:n,data:(r||{}).data}))}});x.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,a){return this.request(Yn(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Qs.prototype[t]=n(),Qs.prototype[t+"Form"]=n(!0)});const Ps=Qs;class La{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,a){r.reason||(r.reason=new Xr(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new La(function(s){t=s}),cancel:t}}}const c1=La;function u1(e){return function(n){return e.apply(null,n)}}function f1(e){return x.isObject(e)&&e.isAxiosError===!0}const Mo={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Mo).forEach(([e,t])=>{Mo[t]=e});const d1=Mo;function Pd(e){const t=new Ps(e),n=dd(Ps.prototype.request,t);return x.extend(n,Ps.prototype,t,{allOwnKeys:!0}),x.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Pd(Yn(e,s))},n}const me=Pd(Pa);me.Axios=Ps;me.CanceledError=Xr;me.CancelToken=c1;me.isCancel=Ad;me.VERSION=Rd;me.toFormData=Ii;me.AxiosError=Y;me.Cancel=me.CanceledError;me.all=function(t){return Promise.all(t)};me.spread=u1;me.isAxiosError=f1;me.mergeConfig=Yn;me.AxiosHeaders=wt;me.formToJSON=e=>Td(x.isHTMLForm(e)?new FormData(e):e);me.getAdapter=Od.getAdapter;me.HttpStatusCode=d1;me.default=me;const h1="/assets/banner2-SfEHbfrd.jpg",p1={name:"HomePage",components:{EventCard:B0,ProductCard:fd},data(){return{events:[],products:[],isMapReady:!1}},created(){me.get("http://localhost:3000/events").then(e=>{this.events=e.data}).catch(e=>{console.error("Error:",e)}),me.get("http://localhost:3000/products").then(e=>{this.products=e.data.filter(t=>["5","2","3"].includes(t.id))}).catch(e=>{console.error("Error:",e)})},mounted(){window.initMap=this.initMap,this.isMapReady||this.loadMapScript()},methods:{initMap(){new google.maps.Map(document.getElementById("map"),{center:{lat:53.10997992556149,lng:-2.0339148473958137},zoom:17}),this.isMapReady=!0},loadMapScript(){const e=document.createElement("script");e.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBY_ON2OpB5CixjqBM8EgISncsRA3Lbmtg&callback=initMap",e.async=!0,e.defer=!0,document.head.appendChild(e)}}},Qr=e=>(Fr("data-v-83c91c04"),e=e(),jr(),e),m1={class:"relative"},g1=Qr(()=>m("img",{class:"w-full h-full object-cover",src:h1,alt:"hero-image"},null,-1)),v1={class:"absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center"},b1=Qr(()=>m("h1",{class:"media-sm text-3xl font-bold text-sw-navy p-2 mb-4"},"Delight in Every Bite",-1)),y1=Qr(()=>m("p",{class:"text-xl text-sw-navy pb-5"},"With The Premior Product",-1)),_1={class:"flex flex-col items-center justify-center mt-8 mb-8"},w1=Qr(()=>m("h1",{class:"mb-10 text-3xl font-bold text-sw-navy justify-center"},"Upcoming Special Events",-1)),x1={class:"flex flex-wrap mt-5 mb-1 items-center justify-center space-x-4"},E1={class:"flex flex-col items-center justify-center mt-8 mb-8"},S1=Qr(()=>m("h1",{class:"mb-10 text-3xl font-bold text-sw-navy justify-center"},"Our Bestselling Signature Offerings",-1)),I1={class:"flex flex-wrap mt-5 mb-1 items-center justify-center space-x-4"},k1=Qn('<div data-v-83c91c04><section class="py-2" data-v-83c91c04><div class="relative" style="background-image:url(&#39;../assets/Images/banner3.jpg&#39;);" data-v-83c91c04><div class="flex flex-col items-center justify-center mt-8 mb-8 py-3" data-v-83c91c04><div class="flex flex-col items-center justify-center pd-2" data-v-83c91c04><img src="'+ka+'" alt="Sally Sweet Logo" class="w-1/6 h-1/2 object-cover" data-v-83c91c04></div><h1 class="text-4xl font-bold text-sw-navy" data-v-83c91c04>Discover the Delights at Sally Sweet</h1><p class="text-2xl text-gray-600" data-v-83c91c04>The best place to find the best sweets</p><div class="flex mt-6 justify-center items-center" data-v-83c91c04><i class="fas fa-clock fa-2x text-gray-700 mr-2" data-v-83c91c04></i><h2 class="text-3xl font-semibold text-gray-700" data-v-83c91c04>Our Shop Hours</h2></div><div class="flex flex-col md:flex-row justify-center items-center mt-4" data-v-83c91c04><div class="flex flex-col items-center mr-8" data-v-83c91c04><i class="fas fa-calendar-week fa-lg text-gray-700 mr-2" data-v-83c91c04></i><h3 class="text-xl text-gray-700 font-medium" data-v-83c91c04>Weekdays</h3><p class="text-lg text-gray-600" data-v-83c91c04>9:00 AM - 8:00 PM</p></div><div class="flex flex-col items-center" data-v-83c91c04><i class="fas fa-calendar-alt fa-lg text-gray-700 mr-2" data-v-83c91c04></i><h3 class="text-xl text-gray-700 font-medium" data-v-83c91c04>Weekends</h3><p class="text-lg text-gray-600" data-v-83c91c04>10:00 AM - 6:00 PM</p></div></div></div></div></section></div><div id="map" class="mb-4" data-v-83c91c04></div>',2);function T1(e,t,n,r,s,i){const o=We("router-link"),a=We("EventCard"),l=We("ProductCard");return ie(),pe(Ee,null,[m("div",m1,[g1,m("div",v1,[b1,y1,te(o,{to:"/product",class:"bg-sw-pink hover:bg-sw-blue text-white font-bold py-2 px-6 rounded-3xl focus:outline-none focus:shadow-outline"},{default:Ve(()=>[he("Explore our Sweets")]),_:1})])]),m("div",_1,[w1,m("div",x1,[(ie(!0),pe(Ee,null,uo(s.events,c=>(ie(),Sr(a,{key:c.id,title:c.title,imageUrl:c.image,description:c.description,date:c.date,class:"w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8"},null,8,["title","imageUrl","description","date"]))),128))])]),m("div",E1,[S1,m("div",I1,[(ie(!0),pe(Ee,null,uo(s.products,c=>(ie(),Sr(l,{key:c.id,name:c.name,description:c.description,price:"£"+c.price,imageUrl:c.imageUrl,class:"px-1"},null,8,["name","description","price","imageUrl"]))),128))])]),k1],64)}const A1=Fe(p1,[["render",T1],["__scopeId","data-v-83c91c04"]]),C1={components:{ProductCard:fd},data(){return{products:[],conversionRate:1,targetCurrency:"GBP",currencySymbols:{EUR:"€",USD:"$",LKR:"₨",GBP:"£"}}},methods:{fetchConversionRate(){me.get("https://v6.exchangerate-api.com/v6/9a9eba155834bbe079700f24/latest/GBP").then(t=>{this.conversionRate=t.data.conversion_rates[this.targetCurrency]}).catch(t=>{console.error("Currency API error:",t)})},convertCurrency(e){return(e*this.conversionRate).toFixed(2)},getCurrencySymbol(){return this.currencySymbols[this.targetCurrency]}},created(){this.fetchConversionRate(),me.get("http://localhost:3000/products").then(e=>{this.products=e.data}).catch(e=>{console.error("Error:",e)})}},O1={class:"flex flex-col items-center justify-center"},R1=m("h1",{class:"mb-10 my-5 text-3xl font-bold text-sw-navy justify-center"},"Explore Our Delightful Collection at Sally Sweet",-1),P1=m("p",{class:"text-xl text-gray-600 mb-5"},"Discover your favorite sweets and treats in our curated selection",-1),N1=m("option",{value:"GBP"},"British Pound (GBP)",-1),L1=m("option",{value:"EUR"},"Euro (EUR)",-1),M1=m("option",{value:"USD"},"US Dollar (USD)",-1),D1=m("option",{value:"LKR"},"Sri Lankan Rupee (LKR)",-1),U1=[N1,L1,M1,D1],$1={class:"productcard py-10"};function F1(e,t,n,r,s,i){const o=We("ProductCard");return ie(),pe(Ee,null,[m("div",O1,[R1,P1,vn(m("select",{"onUpdate:modelValue":t[0]||(t[0]=a=>s.targetCurrency=a),onChange:t[1]||(t[1]=(...a)=>i.fetchConversionRate&&i.fetchConversionRate(...a)),class:"block appearance-none w-55 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"},U1,544),[[wm,s.targetCurrency]])]),m("div",$1,[(ie(!0),pe(Ee,null,uo(s.products,a=>(ie(),Sr(o,{key:a.id,name:a.name,description:a.description,price:`${i.getCurrencySymbol()} ${i.convertCurrency(a.price)}`,imageUrl:a.imageUrl,class:"productcard-item"},null,8,["name","description","price","imageUrl"]))),128))])],64)}const j1=Fe(C1,[["render",F1]]),B1={name:"AboutView",data(){return{shopDetaile:{name:"Sally Sweet",address:"Abbey Green Road, Leek, UK.",contact:"+44 133245 11",email:"info@sallysweet.uk"},isMapReady:!1}},mounted(){window.initMap=this.initMap,this.isMapReady||this.loadMapScript()},methods:{initMap(){new google.maps.Map(document.getElementById("map"),{center:{lat:53.10997992556149,lng:-2.0339148473958137},zoom:17}),this.isMapReady=!0},loadMapScript(){const e=document.createElement("script");e.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBY_ON2OpB5CixjqBM8EgISncsRA3Lbmtg&callback=initMap",e.async=!0,e.defer=!0,document.head.appendChild(e)}}},Zr=e=>(Fr("data-v-16ae9eff"),e=e(),jr(),e),H1=Qn('<div data-v-16ae9eff><div class="flex flex-col md:flex-col justify-center items-center" data-v-16ae9eff><div class="flex flex-col items-center mt-5 space-y-2" data-v-16ae9eff><img src="'+ka+'" alt="Sweets" class="w-1/6 h-1/6 object-cover p-5" data-v-16ae9eff></div><div class="flex flex-col items-center mt-5 space-y-2 px-16" data-v-16ae9eff><h1 class="text-4xl font-bold text-sw-navy py-1" data-v-16ae9eff>Welcome to Sally Sweet - Your Ultimate Online Sweet</h1><p class="text-2xl text-gray-600 py-3" data-v-16ae9eff>The best place to find the best sweets</p><p class="text-2xl text-gray-600 py-3" data-v-16ae9eff>The U.K.&#39;s favourite Sweet Shop and a beacon of delight for sweet lovers everywhere. We&#39;re a family-owned enterprise, brought to life by the tireless dedication and entrepreneurial spirit of the Robinson family. Rooted in over three decades of rich retail experience, Sally Sweet is a testament to our unwavering commitment to our customers, quality confections, and shared love for all things sweet.</p></div><br data-v-16ae9eff><div class="flex flex-col items-center mt-5 space-y-2 px-16" data-v-16ae9eff><h1 class="text-4xl font-bold text-sw-navy py-1" data-v-16ae9eff>Our Story</h1><p class="text-2xl text-gray-600 py-3" data-v-16ae9eff>Sally, the founder of Sally Sweet, has been a stalwart in the food industry for over 20 years. His depth of knowledge, paired with the retail and wholesale expertise of her husband, Sam, shaped the foundation of Sally Sweet. From our humble beginnings as a fruit and veg business, an unexpected opportunity in 2009 allowed us to tap into the vibrant world of sweets. We took the leap, setting up pop-up shops in various locations and slowly but surely, forged our unique path in the confectionery industry. Her keen eye for innovation identified multiple industry gaps, leading to the creation of an array of solutions that redefined our customer&#39;s experience. This transformative digital evolution was characterized by a wave of safe, user-friendly, and appealing ways to indulge in the best sweets on the market.</p></div><div class="flex flex-col items-center mt-5 space-y-2 px-16" data-v-16ae9eff><h1 class="text-4xl font-bold text-sw-navy py-1" data-v-16ae9eff>Our Growth</h1><p class="text-2xl text-gray-600 py-3" data-v-16ae9eff>Our growth has been exponential, and we&#39;ve come a long way since our first pop-up shop. We now have a thriving online store, a flagship store in Leek, and a growing network of franchises across the U.K. We&#39;re proud to be the U.K.&#39;s largest online sweet shop, with over 4,000 products and counting. We&#39;re also the proud owners of the world&#39;s largest sweet shop, located in the heart of Leek, Staffordshire. Our flagship store is a must-visit for sweet lovers everywhere, with over 4000 products and a host of exciting attractions.</p></div></div></div>',1),V1={class:"flex flex-col md:flex-col justify-center mt-4 mb-10"},z1={class:"flex flex-col items-center mt-5 space-y-2"},W1=Zr(()=>m("h1",{class:"text-4xl font-bold text-sw-navy py-1"},"Contact Us",-1)),K1={class:"text-lg font-normal tracking-tight text-sw-navy"},q1=Zr(()=>m("span",{class:"font-bold"},"Address:",-1)),G1={class:"text-lg font-normal tracking-tight text-sw-navy"},Y1=Zr(()=>m("span",{class:"font-bold"},"Contact:",-1)),J1={class:"text-lg font-normal tracking-tight text-sw-navy"},X1=Zr(()=>m("span",{class:"font-bold"},"Email:",-1)),Q1=Zr(()=>m("div",{id:"map"},null,-1));function Z1(e,t,n,r,s,i){return ie(),pe(Ee,null,[H1,m("div",V1,[m("div",z1,[W1,m("h2",K1,[q1,he(" "+Ie(s.shopDetaile.address),1)]),m("h2",G1,[Y1,he(" "+Ie(s.shopDetaile.contact),1)]),m("h2",J1,[X1,he(" "+Ie(s.shopDetaile.email),1)])])]),Q1],64)}const ex=Fe(B1,[["render",Z1],["__scopeId","data-v-16ae9eff"]]),tx={name:"RoomBookingPage"},nx={class:"flex items-center justify-center p-12"},rx=Qn('<div class="mx-auto w-full max-w-[550px] bg-white"><h1 class="text-sw-navy font-extrabold mb-5 pt-3">Book A Private Room</h1><form><div class="mb-5"><label for="name" class="mb-3 block text-base font-medium text-[#07074D]"> Full Name </label><input type="text" name="name" id="name" placeholder="Full Name" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></div><div class="mb-5"><label for="phone" class="mb-3 block text-base font-medium text-[#07074D]"> Phone Number </label><input type="text" name="phone" id="phone" placeholder="Enter your phone number" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></div><div class="mb-5"><label for="email" class="mb-3 block text-base font-medium text-[#07074D]"> Email Address </label><input type="email" name="email" id="email" placeholder="Enter your email" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></div><div class="-mx-3 flex flex-wrap"><div class="w-full px-3 sm:w-1/2"><div class="mb-5"><label for="date" class="mb-3 block text-base font-medium text-[#07074D]"> Date </label><input type="date" name="date" id="date" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></div></div><div class="w-full px-3 sm:w-1/2"><div class="mb-5"><label for="time" class="mb-3 block text-base font-medium text-[#07074D]"> Time </label><input type="time" name="time" id="time" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></div></div></div><div class="mb-5 pt-3"><label class="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl"> Select Room </label><div class="flex flex-row items-center mt-5 space-x-4"><button class="rounded-md bg-sw-blue hover:bg-[#5acc4b] py-3 px-6 text-base font-medium text-white outline-none"> Room 1 </button><button class="rounded-md bg-sw-blue hover:bg-[#5acc4b] py-3 px-6 text-base font-medium text-white outline-none"> Room 2 </button><button class="rounded-md bg-sw-blue hover:bg-[#5acc4b] py-3 px-6 text-base font-medium text-white outline-none"> Room 3 </button></div></div><div><button class="hover:shadow-form w-full rounded-md bg-sw-pink hover:bg-sw-navy py-3 px-8 text-center text-base font-semibold text-white outline-none"> Book Appointment </button></div></form></div>',1),sx=[rx];function ix(e,t,n,r,s,i){return ie(),pe("div",nx,sx)}const ox=Fe(tx,[["render",ix]]),ax={name:"SignInPage",data(){return{email:"",password:"",message:""}},methods:{async signInWithEmail(){const e=gn();try{await nb(e,this.email,this.password),this.showMessage("Sign in with email successful!"),this.$router.push("/profile")}catch(t){console.error(t),this.showMessage("Sign in with email failed.")}},async signInWithGoogle(){const e=gn();try{const t=new mt;await kb(e,t),this.showMessage("Sign in with Google successful!"),this.$router.push("/profile")}catch(t){console.error(t),this.showMessage("Sign in with Google failed.")}},showMessage(e){this.message=e,setTimeout(()=>{this.message=""},3e3)}}},lx={key:0,class:"fixed top-0 left-1/2 transform -translate-x-1/2 mt-5 z-50 bg-red-500 text-white px-6 py-3 rounded shadow-lg"},cx={class:"bg-white rounded-lg"},ux={class:"container flex flex-col mx-auto bg-white rounded-lg pd-12"},fx={class:"flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable"},dx={class:"flex items-center justify-center w-full lg:p-12"},hx={class:"flex items-center xl:p-10"},px=m("h3",{class:"mb-3 text-4xl font-extrabold text-dark-grey-900"},"login",-1),mx=m("p",{class:"mb-4 text-grey-700"},"Enter your email and password",-1),gx=m("img",{class:"h-5 mr-2",src:"https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png",alt:"Google logo"},null,-1),vx=Qn('<div class="flex items-center mb-3"><hr class="h-0 border-b border-solid border-grey-500 grow"><p class="mx-4 text-grey-600">or</p><hr class="h-0 border-b border-solid border-grey-500 grow"></div><label for="email" class="mb-2 text-sm text-start text-grey-900">Email*</label>',2),bx=m("label",{for:"password",class:"mb-2 text-sm text-start text-grey-900"},"Password*",-1),yx=m("button",{type:"submit",class:"w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-sw-blue focus:ring-4 focus:ring-sw-purple-blue-100 bg-sw-navy"},"Sign In",-1),_x=m("p",{class:"text-sm leading-relaxed text-sw-grey-900"},[he("Not registered yet? "),m("a",{href:"/signup",class:"font-bold text-grey-700"},"Create an Account")],-1);function wx(e,t,n,r,s,i){return ie(),pe(Ee,null,[s.message?(ie(),pe("div",lx,Ie(s.message),1)):Wn("",!0),m("body",cx,[m("div",ux,[m("div",fx,[m("div",dx,[m("div",hx,[m("form",{onSubmit:t[3]||(t[3]=sf((...o)=>i.signInWithEmail&&i.signInWithEmail(...o),["prevent"])),class:"flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl"},[px,mx,m("button",{onClick:t[0]||(t[0]=(...o)=>i.signInWithGoogle&&i.signInWithGoogle(...o)),type:"button",class:"flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-sw-grey-900 bg-sw-grey-300 hover:bg-sw-grey-400 focus:ring-4 focus:ring-sw-grey-300"},[gx,he(" Sign in with Google ")]),vx,vn(m("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>s.email=o),id:"email",type:"email",placeholder:"Enter your email",class:"flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-slate-300 mb-7 placeholder:text-sw-grey-700 bg-sw-grey-200 text-dark-sw-grey-900 rounded-2xl"},null,512),[[Ir,s.email]]),bx,vn(m("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>s.password=o),id:"password",type:"password",placeholder:"Enter a password",class:"flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-slate-300 placeholder:text-sw-grey-700 bg-sw-grey-200 text-sw-grey-900 rounded-2xl"},null,512),[[Ir,s.password]]),yx,_x],32)])])])])])],64)}const Pc=Fe(ax,[["render",wx]]),xx={name:"SignUpPage",data(){return{email:"",password:"",message:""}},methods:{async registerWithEmail(){const e=gn();try{await tb(e,this.email,this.password),this.message="Register with email successful!",this.$router.push("/login")}catch(t){console.error(t),this.message="Register with email failed.",this.email="",this.password="",this.$nextTick(()=>{this.$refs.emailInput&&this.$refs.emailInput.focus()})}}},created(){this.$route.query.email&&(this.email=this.$route.query.email)}},Ex={class:"bg-white rounded-lg"},Sx={class:"container flex flex-col mx-auto bg-white rounded-lg pt-2 pd-6"},Ix={class:"flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable"},kx={class:"flex items-center justify-center w-full lg:p-12"},Tx={class:"flex items-center xl:p-10"},Ax=m("h3",{class:"mb-3 text-3xl font-extrabold text-sw-navy py-5"},"Register Your Account",-1),Cx=m("label",{for:"email",class:"mb-2 text-sm text-start text-grey-900"},"Email*",-1),Ox=m("label",{for:"password",class:"mb-2 text-sm text-start text-grey-900"},"Password*",-1),Rx=m("button",{type:"submit",class:"w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-sw-blue focus:ring-4 focus:ring-sw-purple-blue-100 bg-sw-navy"},"Sign Up",-1),Px=m("p",{class:"text-sm leading-relaxed text-sw-grey-900"},[he("Already Register? "),m("a",{href:"/login",class:"font-bold text-grey-700"},"Login Here")],-1),Nx={key:0,class:"text-red-500"};function Lx(e,t,n,r,s,i){return ie(),pe("body",Ex,[m("div",Sx,[m("div",Ix,[m("div",kx,[m("div",Tx,[m("form",{onSubmit:t[2]||(t[2]=sf((...o)=>i.registerWithEmail&&i.registerWithEmail(...o),["prevent"])),class:"flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl"},[Ax,Cx,vn(m("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>s.email=o),id:"email",type:"email",ref:"emailInput",placeholder:"Enter your email",class:"flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-slate-300 mb-7 placeholder:text-sw-grey-700 bg-sw-grey-200 text-dark-sw-grey-900 rounded-2xl"},null,512),[[Ir,s.email]]),Ox,vn(m("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>s.password=o),id:"password",type:"password",placeholder:"Enter a password",class:"flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-slate-300 placeholder:text-sw-grey-700 bg-sw-grey-200 text-sw-grey-900 rounded-2xl"},null,512),[[Ir,s.password]]),Rx,Px,s.message?(ie(),pe("p",Nx,Ie(s.message),1)):Wn("",!0)],32)])])])])])}const Mx=Fe(xx,[["render",Lx]]),Dx="/assets/Voucher-kYZn96Z6.png",Ux="/assets/banner-profile-ImeCCLaP.png",$x={name:"ProfileView",data(){return{imageUrl:Dx}},methods:{printImage(){const e=window.open(this.imageUrl);e.onload=function(){setTimeout(()=>{e.print(),e.close()},0)}},downloadImage(){const e=document.createElement("a");e.href=this.imageUrl,e.download="Voucher.jpg",document.body.appendChild(e),e.click(),document.body.removeChild(e)}},setup(){const e=gn(),t=Cu(!1);return Vu(async()=>{await new Promise((n,r)=>{Bf(e,s=>{s?(t.value=!0,console.log(s.photoURL),n()):r("No user logged in")})})}),{auth:e,isLoggedIn:t}}},Ti=e=>(Fr("data-v-c2694e04"),e=e(),jr(),e),Fx={key:0,class:"profile-view"},jx={class:"flex flex-col justify-center items-center"},Bx={class:"relative flex flex-col items-center rounded-[20px] w-[400px] mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none"},Hx=Ti(()=>m("h1",{class:"text-3xl font-bold text-sw-navy py-3"},"Profile Details",-1)),Vx={class:"relative flex h-32 w-full justify-center rounded-xl bg-cover"},zx=Ti(()=>m("img",{src:Ux,class:"absolute flex h-32 w-full justify-center rounded-xl bg-cover"},null,-1)),Wx={class:"absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700"},Kx=["src"],qx={class:"mt-16 flex flex-col items-center"},Gx={class:"text-base font-normal text-sw-navy"},Yx={key:0,class:"text-xl font-bold text-navy-700 dark:text-white"},Jx=Ti(()=>m("div",{class:"mt-6 mb-3 flex gap-14 md:!gap-14"},[m("p",{class:"text-base font-normal text-gray-600"}," This is my profile description. I am a passionate developer who loves coding and building amazing applications. ")],-1)),Xx={class:"flex flex-col py-5 w-40 hover:w-48"},Qx=["src"],Zx={class:"flex flex-row"},eE={key:1,class:"flex flex-col justify-center items-center"},tE=Ti(()=>m("p",{class:"text-lg text-sw-navy"},"Log in to get your voucher",-1));function nE(e,t,n,r,s,i){const o=We("router-link");return r.isLoggedIn?(ie(),pe("div",Fx,[m("div",jx,[m("div",Bx,[Hx,m("div",Vx,[zx,m("div",Wx,[m("img",{class:"h-full w-full rounded-full",src:r.auth.currentUser.photoURL||"default-image-url.jpg",alt:""},null,8,Kx)])]),m("div",qx,[m("p",Gx,Ie(r.auth.currentUser.displayName),1),r.auth.currentUser.email?(ie(),pe("h4",Yx,Ie(r.auth.currentUser.email),1)):Wn("",!0)]),Jx,m("div",Xx,[m("img",{src:s.imageUrl,alt:"Printable Image"},null,8,Qx)]),m("div",Zx,[m("button",{class:"bg-sw-navy hover:bg-sw-pink text-white font-bold py-2 px-4 rounded",onClick:t[0]||(t[0]=(...a)=>i.printImage&&i.printImage(...a))}," Print Voucher "),m("a",{download:"../assets/Images/Voucher.png",class:"bg-sw-navy hover:bg-sw-pink text-white font-bold py-2 px-4 rounded ml-4",onClick:t[1]||(t[1]=(...a)=>i.downloadImage&&i.downloadImage(...a))}," Download Voucher ")])])])])):(ie(),pe("div",eE,[tE,te(o,{to:"/login",class:"bg-sw-navy hover:bg-sw-pink text-white font-bold py-2 px-4 rounded mt-4"},{default:Ve(()=>[he(" Log In ")]),_:1})]))}const rE=Fe($x,[["render",nE],["__scopeId","data-v-c2694e04"]]),sE={name:"NotFoundPage"},iE={class:"py-10 bg-white"},oE=Qn('<div class="container"><div class="row"><div class="col-sm-12"><div class="col-sm-10 col-sm-offset-1 text-center"><div class="four_zero_four_bg"><h1 class="mb-10 text-2xl font-bold text-sw-navy justify-center">Page Not Found</h1></div><div class="contant_box_404"><h3 class="text-sm font-bold text-sw-navy align-center"> Look like you&#39;re lost </h3><p class="mb-5">the page you are looking for not avaible!</p><a href="/" class="px-6 py-3 text-sm font-bold leading-none text-white transition duration-300 rounded-2xl hover:bg-sw-blue focus:ring-4 focus:ring-sw-purple-blue-100 bg-sw-navy">Go to Home</a></div></div></div></div></div>',1),aE=[oE];function lE(e,t,n,r,s,i){return ie(),pe("section",iE,aE)}const cE=Fe(sE,[["render",lE]]),uE=[{path:"/",component:A1},{path:"/product",component:j1},{path:"/about",component:ex},{path:"/login",component:Pc},{path:"/logout",component:Pc},{path:"/room-booking",component:ox},{path:"/signup",name:"Signup",component:Mx},{path:"/profile",component:rE,meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",name:"NotFound",component:cE}],fE=b0({history:M_(),routes:uE,scrollBehavior(e,t,n){return n||{top:0}}});function Nc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Nc(Object(n),!0).forEach(function(r){ye(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Nc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Zs(e){"@babel/helpers - typeof";return Zs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zs(e)}function dE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Lc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function hE(e,t,n){return t&&Lc(e.prototype,t),n&&Lc(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ma(e,t){return mE(e)||vE(e,t)||Nd(e,t)||yE()}function es(e){return pE(e)||gE(e)||Nd(e)||bE()}function pE(e){if(Array.isArray(e))return Do(e)}function mE(e){if(Array.isArray(e))return e}function gE(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function vE(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],s=!0,i=!1,o,a;try{for(n=n.call(e);!(s=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));s=!0);}catch(l){i=!0,a=l}finally{try{!s&&n.return!=null&&n.return()}finally{if(i)throw a}}return r}}function Nd(e,t){if(e){if(typeof e=="string")return Do(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Do(e,t)}}function Do(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function bE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Mc=function(){},Da={},Ld={},Md=null,Dd={mark:Mc,measure:Mc};try{typeof window<"u"&&(Da=window),typeof document<"u"&&(Ld=document),typeof MutationObserver<"u"&&(Md=MutationObserver),typeof performance<"u"&&(Dd=performance)}catch{}var _E=Da.navigator||{},Dc=_E.userAgent,Uc=Dc===void 0?"":Dc,Yt=Da,ue=Ld,$c=Md,fs=Dd;Yt.document;var At=!!ue.documentElement&&!!ue.head&&typeof ue.addEventListener=="function"&&typeof ue.createElement=="function",Ud=~Uc.indexOf("MSIE")||~Uc.indexOf("Trident/"),ds,hs,ps,ms,gs,Et="___FONT_AWESOME___",Uo=16,$d="fa",Fd="svg-inline--fa",xn="data-fa-i2svg",$o="data-fa-pseudo-element",wE="data-fa-pseudo-element-pending",Ua="data-prefix",$a="data-icon",Fc="fontawesome-i2svg",xE="async",EE=["HTML","HEAD","STYLE","SCRIPT"],jd=function(){try{return!0}catch{return!1}}(),ce="classic",ge="sharp",Fa=[ce,ge];function ts(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ce]}})}var Nr=ts((ds={},ye(ds,ce,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),ye(ds,ge,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),ds)),Lr=ts((hs={},ye(hs,ce,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ye(hs,ge,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),hs)),Mr=ts((ps={},ye(ps,ce,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ye(ps,ge,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),ps)),SE=ts((ms={},ye(ms,ce,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ye(ms,ge,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),ms)),IE=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Bd="fa-layers-text",kE=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,TE=ts((gs={},ye(gs,ce,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ye(gs,ge,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),gs)),Hd=[1,2,3,4,5,6,7,8,9,10],AE=Hd.concat([11,12,13,14,15,16,17,18,19,20]),CE=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],fn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Dr=new Set;Object.keys(Lr[ce]).map(Dr.add.bind(Dr));Object.keys(Lr[ge]).map(Dr.add.bind(Dr));var OE=[].concat(Fa,es(Dr),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",fn.GROUP,fn.SWAP_OPACITY,fn.PRIMARY,fn.SECONDARY]).concat(Hd.map(function(e){return"".concat(e,"x")})).concat(AE.map(function(e){return"w-".concat(e)})),br=Yt.FontAwesomeConfig||{};function RE(e){var t=ue.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function PE(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ue&&typeof ue.querySelector=="function"){var NE=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];NE.forEach(function(e){var t=Ma(e,2),n=t[0],r=t[1],s=PE(RE(n));s!=null&&(br[r]=s)})}var Vd={styleDefault:"solid",familyDefault:"classic",cssPrefix:$d,replacementClass:Fd,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};br.familyPrefix&&(br.cssPrefix=br.familyPrefix);var Jn=L(L({},Vd),br);Jn.autoReplaceSvg||(Jn.observeMutations=!1);var U={};Object.keys(Vd).forEach(function(e){Object.defineProperty(U,e,{enumerable:!0,set:function(n){Jn[e]=n,yr.forEach(function(r){return r(U)})},get:function(){return Jn[e]}})});Object.defineProperty(U,"familyPrefix",{enumerable:!0,set:function(t){Jn.cssPrefix=t,yr.forEach(function(n){return n(U)})},get:function(){return Jn.cssPrefix}});Yt.FontAwesomeConfig=U;var yr=[];function LE(e){return yr.push(e),function(){yr.splice(yr.indexOf(e),1)}}var Mt=Uo,lt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ME(e){if(!(!e||!At)){var t=ue.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ue.head.childNodes,r=null,s=n.length-1;s>-1;s--){var i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ue.head.insertBefore(t,r),e}}var DE="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ur(){for(var e=12,t="";e-- >0;)t+=DE[Math.random()*62|0];return t}function tr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ja(e){return e.classList?tr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function zd(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function UE(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(zd(e[n]),'" ')},"").trim()}function Ai(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ba(e){return e.size!==lt.size||e.x!==lt.x||e.y!==lt.y||e.rotate!==lt.rotate||e.flipX||e.flipY}function $E(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:c}}function FE(e){var t=e.transform,n=e.width,r=n===void 0?Uo:n,s=e.height,i=s===void 0?Uo:s,o=e.startCentered,a=o===void 0?!1:o,l="";return a&&Ud?l+="translate(".concat(t.x/Mt-r/2,"em, ").concat(t.y/Mt-i/2,"em) "):a?l+="translate(calc(-50% + ".concat(t.x/Mt,"em), calc(-50% + ").concat(t.y/Mt,"em)) "):l+="translate(".concat(t.x/Mt,"em, ").concat(t.y/Mt,"em) "),l+="scale(".concat(t.size/Mt*(t.flipX?-1:1),", ").concat(t.size/Mt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var jE=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Wd(){var e=$d,t=Fd,n=U.cssPrefix,r=U.replacementClass,s=jE;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}var jc=!1;function Zi(){U.autoAddCss&&!jc&&(ME(Wd()),jc=!0)}var BE={mixout:function(){return{dom:{css:Wd,insertCss:Zi}}},hooks:function(){return{beforeDOMElementCreation:function(){Zi()},beforeI2svg:function(){Zi()}}}},St=Yt||{};St[Et]||(St[Et]={});St[Et].styles||(St[Et].styles={});St[Et].hooks||(St[Et].hooks={});St[Et].shims||(St[Et].shims=[]);var Xe=St[Et],Kd=[],HE=function e(){ue.removeEventListener("DOMContentLoaded",e),ei=1,Kd.map(function(t){return t()})},ei=!1;At&&(ei=(ue.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ue.readyState),ei||ue.addEventListener("DOMContentLoaded",HE));function VE(e){At&&(ei?setTimeout(e,0):Kd.push(e))}function ns(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,s=e.children,i=s===void 0?[]:s;return typeof e=="string"?zd(e):"<".concat(t," ").concat(UE(r),">").concat(i.map(ns).join(""),"</").concat(t,">")}function Bc(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var zE=function(t,n){return function(r,s,i,o){return t.call(n,r,s,i,o)}},eo=function(t,n,r,s){var i=Object.keys(t),o=i.length,a=s!==void 0?zE(n,s):n,l,c,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)c=i[l],u=a(u,t[c],c,t);return u};function WE(e){for(var t=[],n=0,r=e.length;n<r;){var s=e.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((s&1023)<<10)+(i&1023)+65536):(t.push(s),n--)}else t.push(s)}return t}function Fo(e){var t=WE(e);return t.length===1?t[0].toString(16):null}function KE(e,t){var n=e.length,r=e.charCodeAt(t),s;return r>=55296&&r<=56319&&n>t+1&&(s=e.charCodeAt(t+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function Hc(e){return Object.keys(e).reduce(function(t,n){var r=e[n],s=!!r.icon;return s?t[r.iconName]=r.icon:t[n]=r,t},{})}function jo(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,s=r===void 0?!1:r,i=Hc(t);typeof Xe.hooks.addPack=="function"&&!s?Xe.hooks.addPack(e,Hc(t)):Xe.styles[e]=L(L({},Xe.styles[e]||{}),i),e==="fas"&&jo("fa",t)}var vs,bs,ys,Rn=Xe.styles,qE=Xe.shims,GE=(vs={},ye(vs,ce,Object.values(Mr[ce])),ye(vs,ge,Object.values(Mr[ge])),vs),Ha=null,qd={},Gd={},Yd={},Jd={},Xd={},YE=(bs={},ye(bs,ce,Object.keys(Nr[ce])),ye(bs,ge,Object.keys(Nr[ge])),bs);function JE(e){return~OE.indexOf(e)}function XE(e,t){var n=t.split("-"),r=n[0],s=n.slice(1).join("-");return r===e&&s!==""&&!JE(s)?s:null}var Qd=function(){var t=function(i){return eo(Rn,function(o,a,l){return o[l]=eo(a,i,{}),o},{})};qd=t(function(s,i,o){if(i[3]&&(s[i[3]]=o),i[2]){var a=i[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){s[l.toString(16)]=o})}return s}),Gd=t(function(s,i,o){if(s[o]=o,i[2]){var a=i[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){s[l]=o})}return s}),Xd=t(function(s,i,o){var a=i[2];return s[o]=o,a.forEach(function(l){s[l]=o}),s});var n="far"in Rn||U.autoFetchSvg,r=eo(qE,function(s,i){var o=i[0],a=i[1],l=i[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(s.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(s.unicodes[o.toString(16)]={prefix:a,iconName:l}),s},{names:{},unicodes:{}});Yd=r.names,Jd=r.unicodes,Ha=Ci(U.styleDefault,{family:U.familyDefault})};LE(function(e){Ha=Ci(e.styleDefault,{family:U.familyDefault})});Qd();function Va(e,t){return(qd[e]||{})[t]}function QE(e,t){return(Gd[e]||{})[t]}function dn(e,t){return(Xd[e]||{})[t]}function Zd(e){return Yd[e]||{prefix:null,iconName:null}}function ZE(e){var t=Jd[e],n=Va("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Jt(){return Ha}var za=function(){return{prefix:null,iconName:null,rest:[]}};function Ci(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ce:n,s=Nr[r][e],i=Lr[r][e]||Lr[r][s],o=e in Xe.styles?e:null;return i||o||null}var Vc=(ys={},ye(ys,ce,Object.keys(Mr[ce])),ye(ys,ge,Object.keys(Mr[ge])),ys);function Oi(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,s=r===void 0?!1:r,i=(t={},ye(t,ce,"".concat(U.cssPrefix,"-").concat(ce)),ye(t,ge,"".concat(U.cssPrefix,"-").concat(ge)),t),o=null,a=ce;(e.includes(i[ce])||e.some(function(c){return Vc[ce].includes(c)}))&&(a=ce),(e.includes(i[ge])||e.some(function(c){return Vc[ge].includes(c)}))&&(a=ge);var l=e.reduce(function(c,u){var f=XE(U.cssPrefix,u);if(Rn[u]?(u=GE[a].includes(u)?SE[a][u]:u,o=u,c.prefix=u):YE[a].indexOf(u)>-1?(o=u,c.prefix=Ci(u,{family:a})):f?c.iconName=f:u!==U.replacementClass&&u!==i[ce]&&u!==i[ge]&&c.rest.push(u),!s&&c.prefix&&c.iconName){var p=o==="fa"?Zd(c.iconName):{},g=dn(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||g||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!Rn.far&&Rn.fas&&!U.autoFetchSvg&&(c.prefix="fas")}return c},za());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===ge&&(Rn.fass||U.autoFetchSvg)&&(l.prefix="fass",l.iconName=dn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Jt()||"fas"),l}var eS=function(){function e(){dE(this,e),this.definitions={}}return hE(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];var o=s.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=L(L({},n.definitions[a]||{}),o[a]),jo(a,o[a]);var l=Mr[ce][a];l&&jo(l,o[a]),Qd()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(i){var o=s[i],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[a][f]=c)}),n[a][l]=c}),n}}]),e}(),zc=[],Pn={},Hn={},tS=Object.keys(Hn);function nS(e,t){var n=t.mixoutsTo;return zc=e,Pn={},Object.keys(Hn).forEach(function(r){tS.indexOf(r)===-1&&delete Hn[r]}),zc.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(o){typeof s[o]=="function"&&(n[o]=s[o]),Zs(s[o])==="object"&&Object.keys(s[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=s[o][a]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Pn[o]||(Pn[o]=[]),Pn[o].push(i[o])})}r.provides&&r.provides(Hn)}),n}function Bo(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];var i=Pn[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function En(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var s=Pn[e]||[];s.forEach(function(i){i.apply(null,n)})}function It(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Hn[e]?Hn[e].apply(null,t):void 0}function Ho(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Jt();if(t)return t=dn(n,t)||t,Bc(eh.definitions,n,t)||Bc(Xe.styles,n,t)}var eh=new eS,rS=function(){U.autoReplaceSvg=!1,U.observeMutations=!1,En("noAuto")},sS={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return At?(En("beforeI2svg",t),It("pseudoElements2svg",t),It("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;U.autoReplaceSvg===!1&&(U.autoReplaceSvg=!0),U.observeMutations=!0,VE(function(){oS({autoReplaceSvgRoot:n}),En("watch",t)})}},iS={icon:function(t){if(t===null)return null;if(Zs(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:dn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ci(t[0]);return{prefix:r,iconName:dn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(U.cssPrefix,"-"))>-1||t.match(IE))){var s=Oi(t.split(" "),{skipLookups:!0});return{prefix:s.prefix||Jt(),iconName:dn(s.prefix,s.iconName)||s.iconName}}if(typeof t=="string"){var i=Jt();return{prefix:i,iconName:dn(i,t)||t}}}},He={noAuto:rS,config:U,dom:sS,parse:iS,library:eh,findIconDefinition:Ho,toHtml:ns},oS=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ue:n;(Object.keys(Xe.styles).length>0||U.autoFetchSvg)&&At&&U.autoReplaceSvg&&He.dom.i2svg({node:r})};function Ri(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ns(r)})}}),Object.defineProperty(e,"node",{get:function(){if(At){var r=ue.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function aS(e){var t=e.children,n=e.main,r=e.mask,s=e.attributes,i=e.styles,o=e.transform;if(Ba(o)&&n.found&&!r.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};s.style=Ai(L(L({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:t}]}function lS(e){var t=e.prefix,n=e.iconName,r=e.children,s=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(U.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:L(L({},s),{},{id:o}),children:r}]}]}function Wa(e){var t=e.icons,n=t.main,r=t.mask,s=e.prefix,i=e.iconName,o=e.transform,a=e.symbol,l=e.title,c=e.maskId,u=e.titleId,f=e.extra,p=e.watchable,g=p===void 0?!1:p,b=r.found?r:n,_=b.width,O=b.height,y=s==="fak",S=[U.replacementClass,i?"".concat(U.cssPrefix,"-").concat(i):""].filter(function(ve){return f.classes.indexOf(ve)===-1}).filter(function(ve){return ve!==""||!!ve}).concat(f.classes).join(" "),C={children:[],attributes:L(L({},f.attributes),{},{"data-prefix":s,"data-icon":i,class:S,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(O)})},F=y&&!~f.classes.indexOf("fa-fw")?{width:"".concat(_/O*16*.0625,"em")}:{};g&&(C.attributes[xn]=""),l&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(u||Ur())},children:[l]}),delete C.attributes.title);var K=L(L({},C),{},{prefix:s,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:L(L({},F),f.styles)}),j=r.found&&n.found?It("generateAbstractMask",K)||{children:[],attributes:{}}:It("generateAbstractIcon",K)||{children:[],attributes:{}},Q=j.children,_e=j.attributes;return K.children=Q,K.attributes=_e,a?lS(K):aS(K)}function Wc(e){var t=e.content,n=e.width,r=e.height,s=e.transform,i=e.title,o=e.extra,a=e.watchable,l=a===void 0?!1:a,c=L(L(L({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[xn]="");var u=L({},o.styles);Ba(s)&&(u.transform=FE({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=Ai(u);f.length>0&&(c.style=f);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function cS(e){var t=e.content,n=e.title,r=e.extra,s=L(L(L({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Ai(r.styles);i.length>0&&(s.style=i);var o=[];return o.push({tag:"span",attributes:s,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var to=Xe.styles;function Vo(e){var t=e[0],n=e[1],r=e.slice(4),s=Ma(r,1),i=s[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(U.cssPrefix,"-").concat(fn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(U.cssPrefix,"-").concat(fn.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(U.cssPrefix,"-").concat(fn.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var uS={found:!1,width:512,height:512};function fS(e,t){!jd&&!U.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function zo(e,t){var n=t;return t==="fa"&&U.styleDefault!==null&&(t=Jt()),new Promise(function(r,s){if(It("missingIconAbstract"),n==="fa"){var i=Zd(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&to[t]&&to[t][e]){var o=to[t][e];return r(Vo(o))}fS(e,t),r(L(L({},uS),{},{icon:U.showMissingIcons&&e?It("missingIconAbstract")||{}:{}}))})}var Kc=function(){},Wo=U.measurePerformance&&fs&&fs.mark&&fs.measure?fs:{mark:Kc,measure:Kc},fr='FA "6.5.1"',dS=function(t){return Wo.mark("".concat(fr," ").concat(t," begins")),function(){return th(t)}},th=function(t){Wo.mark("".concat(fr," ").concat(t," ends")),Wo.measure("".concat(fr," ").concat(t),"".concat(fr," ").concat(t," begins"),"".concat(fr," ").concat(t," ends"))},Ka={begin:dS,end:th},Ns=function(){};function qc(e){var t=e.getAttribute?e.getAttribute(xn):null;return typeof t=="string"}function hS(e){var t=e.getAttribute?e.getAttribute(Ua):null,n=e.getAttribute?e.getAttribute($a):null;return t&&n}function pS(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(U.replacementClass)}function mS(){if(U.autoReplaceSvg===!0)return Ls.replace;var e=Ls[U.autoReplaceSvg];return e||Ls.replace}function gS(e){return ue.createElementNS("http://www.w3.org/2000/svg",e)}function vS(e){return ue.createElement(e)}function nh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?gS:vS:n;if(typeof e=="string")return ue.createTextNode(e);var s=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){s.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){s.appendChild(nh(o,{ceFn:r}))}),s}function bS(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ls={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(s){n.parentNode.insertBefore(nh(s),n)}),n.getAttribute(xn)===null&&U.keepOriginalSource){var r=ue.createComment(bS(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ja(n).indexOf(U.replacementClass))return Ls.replace(t);var s=new RegExp("".concat(U.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(a,l){return l===U.replacementClass||l.match(s)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(a){return ns(a)}).join(`
`);n.setAttribute(xn,""),n.innerHTML=o}};function Gc(e){e()}function rh(e,t){var n=typeof t=="function"?t:Ns;if(e.length===0)n();else{var r=Gc;U.mutateApproach===xE&&(r=Yt.requestAnimationFrame||Gc),r(function(){var s=mS(),i=Ka.begin("mutate");e.map(s),i(),n()})}}var qa=!1;function sh(){qa=!0}function Ko(){qa=!1}var ti=null;function Yc(e){if($c&&U.observeMutations){var t=e.treeCallback,n=t===void 0?Ns:t,r=e.nodeCallback,s=r===void 0?Ns:r,i=e.pseudoElementsCallback,o=i===void 0?Ns:i,a=e.observeMutationsRoot,l=a===void 0?ue:a;ti=new $c(function(c){if(!qa){var u=Jt();tr(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!qc(f.addedNodes[0])&&(U.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&U.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&qc(f.target)&&~CE.indexOf(f.attributeName))if(f.attributeName==="class"&&hS(f.target)){var p=Oi(ja(f.target)),g=p.prefix,b=p.iconName;f.target.setAttribute(Ua,g||u),b&&f.target.setAttribute($a,b)}else pS(f.target)&&s(f.target)})}}),At&&ti.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function yS(){ti&&ti.disconnect()}function _S(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,s){var i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function wS(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",s=Oi(ja(e));return s.prefix||(s.prefix=Jt()),t&&n&&(s.prefix=t,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=QE(s.prefix,e.innerText)||Va(s.prefix,Fo(e.innerText))),!s.iconName&&U.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=e.firstChild.data)),s}function xS(e){var t=tr(e.attributes).reduce(function(s,i){return s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return U.autoA11y&&(n?t["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(r||Ur()):(t["aria-hidden"]="true",t.focusable="false")),t}function ES(){return{iconName:null,title:null,titleId:null,prefix:null,transform:lt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Jc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=wS(e),r=n.iconName,s=n.prefix,i=n.rest,o=xS(e),a=Bo("parseNodeAttributes",{},e),l=t.styleParser?_S(e):[];return L({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:s,transform:lt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},a)}var SS=Xe.styles;function ih(e){var t=U.autoReplaceSvg==="nest"?Jc(e,{styleParser:!1}):Jc(e);return~t.extra.classes.indexOf(Bd)?It("generateLayersText",e,t):It("generateSvgReplacementMutation",e,t)}var Xt=new Set;Fa.map(function(e){Xt.add("fa-".concat(e))});Object.keys(Nr[ce]).map(Xt.add.bind(Xt));Object.keys(Nr[ge]).map(Xt.add.bind(Xt));Xt=es(Xt);function Xc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!At)return Promise.resolve();var n=ue.documentElement.classList,r=function(f){return n.add("".concat(Fc,"-").concat(f))},s=function(f){return n.remove("".concat(Fc,"-").concat(f))},i=U.autoFetchSvg?Xt:Fa.map(function(u){return"fa-".concat(u)}).concat(Object.keys(SS));i.includes("fa")||i.push("fa");var o=[".".concat(Bd,":not([").concat(xn,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(xn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=tr(e.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();var l=Ka.begin("onTree"),c=a.reduce(function(u,f){try{var p=ih(f);p&&u.push(p)}catch(g){jd||g.name==="MissingIcon"&&console.error(g)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(p){rh(p,function(){r("active"),r("complete"),s("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(p){l(),f(p)})})}function IS(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ih(e).then(function(n){n&&rh([n],t)})}function kS(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ho(t||{}),s=n.mask;return s&&(s=(s||{}).icon?s:Ho(s||{})),e(r,L(L({},n),{},{mask:s}))}}var TS=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,s=r===void 0?lt:r,i=n.symbol,o=i===void 0?!1:i,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,f=n.title,p=f===void 0?null:f,g=n.titleId,b=g===void 0?null:g,_=n.classes,O=_===void 0?[]:_,y=n.attributes,S=y===void 0?{}:y,C=n.styles,F=C===void 0?{}:C;if(t){var K=t.prefix,j=t.iconName,Q=t.icon;return Ri(L({type:"icon"},t),function(){return En("beforeDOMElementCreation",{iconDefinition:t,params:n}),U.autoA11y&&(p?S["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(b||Ur()):(S["aria-hidden"]="true",S.focusable="false")),Wa({icons:{main:Vo(Q),mask:l?Vo(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:K,iconName:j,transform:L(L({},lt),s),symbol:o,title:p,maskId:u,titleId:b,extra:{attributes:S,styles:F,classes:O}})})}},AS={mixout:function(){return{icon:kS(TS)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Xc,n.nodeCallback=IS,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,s=r===void 0?ue:r,i=n.callback,o=i===void 0?function(){}:i;return Xc(s,o)},t.generateSvgReplacementMutation=function(n,r){var s=r.iconName,i=r.title,o=r.titleId,a=r.prefix,l=r.transform,c=r.symbol,u=r.mask,f=r.maskId,p=r.extra;return new Promise(function(g,b){Promise.all([zo(s,a),u.iconName?zo(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var O=Ma(_,2),y=O[0],S=O[1];g([n,Wa({icons:{main:y,mask:S},prefix:a,iconName:s,transform:l,symbol:c,maskId:f,title:i,titleId:o,extra:p,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(n){var r=n.children,s=n.attributes,i=n.main,o=n.transform,a=n.styles,l=Ai(a);l.length>0&&(s.style=l);var c;return Ba(o)&&(c=It("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:s}}}},CS={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,i=s===void 0?[]:s;return Ri({type:"layer"},function(){En("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(U.cssPrefix,"-layers")].concat(es(i)).join(" ")},children:o}]})}}}},OS={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,i=s===void 0?null:s,o=r.classes,a=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,f=u===void 0?{}:u;return Ri({type:"counter",content:n},function(){return En("beforeDOMElementCreation",{content:n,params:r}),cS({content:n.toString(),title:i,extra:{attributes:c,styles:f,classes:["".concat(U.cssPrefix,"-layers-counter")].concat(es(a))}})})}}}},RS={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,i=s===void 0?lt:s,o=r.title,a=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,f=u===void 0?{}:u,p=r.styles,g=p===void 0?{}:p;return Ri({type:"text",content:n},function(){return En("beforeDOMElementCreation",{content:n,params:r}),Wc({content:n,transform:L(L({},lt),i),title:a,extra:{attributes:f,styles:g,classes:["".concat(U.cssPrefix,"-layers-text")].concat(es(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var s=r.title,i=r.transform,o=r.extra,a=null,l=null;if(Ud){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return U.autoA11y&&!s&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Wc({content:n.innerHTML,width:a,height:l,transform:i,title:s,extra:o,watchable:!0})])}}},PS=new RegExp('"',"ug"),Qc=[1105920,1112319];function NS(e){var t=e.replace(PS,""),n=KE(t,0),r=n>=Qc[0]&&n<=Qc[1],s=t.length===2?t[0]===t[1]:!1;return{value:Fo(s?t[0]:t),isSecondary:r||s}}function Zc(e,t){var n="".concat(wE).concat(t.replace(":","-"));return new Promise(function(r,s){if(e.getAttribute(n)!==null)return r();var i=tr(e.children),o=i.filter(function(Q){return Q.getAttribute($o)===t})[0],a=Yt.getComputedStyle(e,t),l=a.getPropertyValue("font-family").match(kE),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var f=a.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?ge:ce,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Lr[p][l[2].toLowerCase()]:TE[p][c],b=NS(f),_=b.value,O=b.isSecondary,y=l[0].startsWith("FontAwesome"),S=Va(g,_),C=S;if(y){var F=ZE(_);F.iconName&&F.prefix&&(S=F.iconName,g=F.prefix)}if(S&&!O&&(!o||o.getAttribute(Ua)!==g||o.getAttribute($a)!==C)){e.setAttribute(n,C),o&&e.removeChild(o);var K=ES(),j=K.extra;j.attributes[$o]=t,zo(S,g).then(function(Q){var _e=Wa(L(L({},K),{},{icons:{main:Q,mask:za()},prefix:g,iconName:C,extra:j,watchable:!0})),ve=ue.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ve,e.firstChild):e.appendChild(ve),ve.outerHTML=_e.map(function(Pe){return ns(Pe)}).join(`
`),e.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function LS(e){return Promise.all([Zc(e,"::before"),Zc(e,"::after")])}function MS(e){return e.parentNode!==document.head&&!~EE.indexOf(e.tagName.toUpperCase())&&!e.getAttribute($o)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function eu(e){if(At)return new Promise(function(t,n){var r=tr(e.querySelectorAll("*")).filter(MS).map(LS),s=Ka.begin("searchPseudoElements");sh(),Promise.all(r).then(function(){s(),Ko(),t()}).catch(function(){s(),Ko(),n()})})}var DS={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=eu,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,s=r===void 0?ue:r;U.searchPseudoElements&&eu(s)}}},tu=!1,US={mixout:function(){return{dom:{unwatch:function(){sh(),tu=!0}}}},hooks:function(){return{bootstrap:function(){Yc(Bo("mutationObserverCallbacks",{}))},noAuto:function(){yS()},watch:function(n){var r=n.observeMutationsRoot;tu?Ko():Yc(Bo("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},nu=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,s){var i=s.toLowerCase().split("-"),o=i[0],a=i.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},$S={mixout:function(){return{parse:{transform:function(n){return nu(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-transform");return s&&(n.transform=nu(s)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,s=n.transform,i=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(s.x*32,", ").concat(s.y*32,") "),c="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),u="rotate(".concat(s.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:a,inner:f,path:p};return{tag:"g",attributes:L({},g.outer),children:[{tag:"g",attributes:L({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:L(L({},r.icon.attributes),g.path)}]}]}}}},no={x:0,y:0,width:"100%",height:"100%"};function ru(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function FS(e){return e.tag==="g"?e.children:[e]}var jS={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-mask"),i=s?Oi(s.split(" ").map(function(o){return o.trim()})):za();return i.prefix||(i.prefix=Jt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,s=n.attributes,i=n.main,o=n.mask,a=n.maskId,l=n.transform,c=i.width,u=i.icon,f=o.width,p=o.icon,g=$E({transform:l,containerWidth:f,iconWidth:c}),b={tag:"rect",attributes:L(L({},no),{},{fill:"white"})},_=u.children?{children:u.children.map(ru)}:{},O={tag:"g",attributes:L({},g.inner),children:[ru(L({tag:u.tag,attributes:L(L({},u.attributes),g.path)},_))]},y={tag:"g",attributes:L({},g.outer),children:[O]},S="mask-".concat(a||Ur()),C="clip-".concat(a||Ur()),F={tag:"mask",attributes:L(L({},no),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,y]},K={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:FS(p)},F]};return r.push(K,{tag:"rect",attributes:L({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(S,")")},no)}),{children:r,attributes:s}}}},BS={provides:function(t){var n=!1;Yt.matchMedia&&(n=Yt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:L(L({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=L(L({},i),{},{attributeName:"opacity"}),a={tag:"circle",attributes:L(L({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:L(L({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:L(L({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:L(L({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:L(L({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:L(L({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:L(L({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},HS={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-symbol"),i=s===null?!1:s===""?!0:s;return n.symbol=i,n}}}},VS=[BE,AS,CS,OS,RS,DS,US,$S,jS,BS,HS];nS(VS,{mixoutsTo:He});He.noAuto;He.config;var zS=He.library;He.dom;var qo=He.parse;He.findIconDefinition;He.toHtml;var WS=He.icon;He.layer;He.text;He.counter;function su(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function gt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?su(Object(n),!0).forEach(function(r){Le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):su(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ni(e){"@babel/helpers - typeof";return ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ni(e)}function Le(e,t,n){return t=YS(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function KS(e,t){if(e==null)return{};var n={},r=Object.keys(e),s,i;for(i=0;i<r.length;i++)s=r[i],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function qS(e,t){if(e==null)return{};var n=KS(e,t),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function GS(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function YS(e){var t=GS(e,"string");return typeof t=="symbol"?t:String(t)}var JS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},oh={exports:{}};(function(e){(function(t){var n=function(y,S,C){if(!c(S)||f(S)||p(S)||g(S)||l(S))return S;var F,K=0,j=0;if(u(S))for(F=[],j=S.length;K<j;K++)F.push(n(y,S[K],C));else{F={};for(var Q in S)Object.prototype.hasOwnProperty.call(S,Q)&&(F[y(Q,C)]=n(y,S[Q],C))}return F},r=function(y,S){S=S||{};var C=S.separator||"_",F=S.split||/(?=[A-Z])/;return y.split(F).join(C)},s=function(y){return b(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(S,C){return C?C.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var S=s(y);return S.substr(0,1).toUpperCase()+S.substr(1)},o=function(y,S){return r(y,S).toLowerCase()},a=Object.prototype.toString,l=function(y){return typeof y=="function"},c=function(y){return y===Object(y)},u=function(y){return a.call(y)=="[object Array]"},f=function(y){return a.call(y)=="[object Date]"},p=function(y){return a.call(y)=="[object RegExp]"},g=function(y){return a.call(y)=="[object Boolean]"},b=function(y){return y=y-0,y===y},_=function(y,S){var C=S&&"process"in S?S.process:S;return typeof C!="function"?y:function(F,K){return C(F,y,K)}},O={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,S){return n(_(s,S),y)},decamelizeKeys:function(y,S){return n(_(o,S),y,S)},pascalizeKeys:function(y,S){return n(_(i,S),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=O:t.humps=O})(JS)})(oh);var XS=oh.exports,QS=["class","style"];function ZS(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),s=XS.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[s]=i,t},{})}function eI(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ah(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ah(l)}),s=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.class=eI(u);break;case"style":l.style=ZS(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=qS(n,QS);return da(e.tag,gt(gt(gt({},t),{},{class:s.class,style:gt(gt({},s.style),o)},s.attrs),a),r)}var lh=!1;try{lh=!0}catch{}function tI(){if(!lh&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function ro(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Le({},e,t):{}}function nI(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Le(t,"fa-".concat(e.size),e.size!==null),Le(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),Le(t,"fa-pull-".concat(e.pull),e.pull!==null),Le(t,"fa-swap-opacity",e.swapOpacity),Le(t,"fa-bounce",e.bounce),Le(t,"fa-shake",e.shake),Le(t,"fa-beat",e.beat),Le(t,"fa-fade",e.fade),Le(t,"fa-beat-fade",e.beatFade),Le(t,"fa-flash",e.flash),Le(t,"fa-spin-pulse",e.spinPulse),Le(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function iu(e){if(e&&ni(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(qo.icon)return qo.icon(e);if(e===null)return null;if(ni(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var rI=la({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,s=Se(function(){return iu(t.icon)}),i=Se(function(){return ro("classes",nI(t))}),o=Se(function(){return ro("transform",typeof t.transform=="string"?qo.transform(t.transform):t.transform)}),a=Se(function(){return ro("mask",iu(t.mask))}),l=Se(function(){return WS(s.value,gt(gt(gt(gt({},i.value),o.value),a.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});dr(l,function(u){if(!u)return tI("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var c=Se(function(){return l.value?ah(l.value.abstract[0],{},r):null});return function(){return c.value}}}),sI={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},iI={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},oI={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},aI={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},lI="firebase",cI="10.7.2";/**
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
 */Fn(lI,cI,"app");const uI={apiKey:"AIzaSyD82fhD2ps4LWQVy4aVqm5oBv-AInFP6uU",authDomain:"sallysweet.firebaseapp.com",projectId:"sallysweet",storageBucket:"sallysweet.appspot.com",messagingSenderId:"702286638574",appId:"1:702286638574:web:27bc9f23dce495e0dcf2ff"};gf(uI);zS.add(sI,oI,iI,aI);const Ga=km(R0);Ga.component("font-awesome-icon",rI);Ga.use(fE);Ga.mount("#app");
