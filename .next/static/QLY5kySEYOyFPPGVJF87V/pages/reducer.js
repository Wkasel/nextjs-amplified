(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"6e9T":function(t,e,r){"use strict";r.r(e);var n=r("rePB");function o(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function i(t){return!!t&&!!t[B]}function u(t){return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);return!e||e===Object.prototype}(t)||Array.isArray(t)||!!t[$]||!!t.constructor[$]||d(t)||y(t))}function c(t,e,r){void 0===r&&(r=!1),0===f(t)?(r?Object.keys:C)(t).forEach((function(n){r&&"symbol"==typeof n||e(n,t[n],t)})):t.forEach((function(r,n){return e(n,r,t)}))}function f(t){var e=t[B];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:d(t)?2:y(t)?3:0}function a(t,e){return 2===f(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function s(t,e){return 2===f(t)?t.get(e):t[e]}function l(t,e,r){var n=f(t);2===n?t.set(e,r):3===n?(t.delete(e),t.add(r)):t[e]=r}function p(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}function d(t){return W&&t instanceof Map}function y(t){return J&&t instanceof Set}function h(t){return t.o||t.t}function b(t){if(Array.isArray(t))return t.slice();var e=L(t);delete e[B];for(var r=C(e),n=0;n<r.length;n++){var o=r[n],i=e[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(e[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:t[o]})}return Object.create(Object.getPrototypeOf(t),e)}function v(t,e){Object.isFrozen(t)||i(t)||!u(t)||(f(t)>1&&(t.set=t.add=t.clear=t.delete=P),Object.freeze(t),e&&c(t,(function(t,e){return v(e,!0)}),!0))}function P(){o(2)}function O(t){var e=q[t];return e||o(19,t),e}function g(){return M}function w(t,e){e&&(O("Patches"),t.u=[],t.s=[],t.v=e)}function m(t){j(t),t.p.forEach(S),t.p=null}function j(t){t===M&&(M=t.l)}function A(t){return M={p:[],l:M,h:t,m:!0,_:0}}function S(t){var e=t[B];0===e.i||1===e.i?e.j():e.O=!0}function D(t,e){e._=e.p.length;var r=e.p[0],n=void 0!==t&&t!==r;return e.h.g||O("ES5").S(e,t,n),n?(r[B].P&&(m(e),o(4)),u(t)&&(t=_(e,t),e.l||x(e,t)),e.u&&O("Patches").M(r[B],t,e.u,e.s)):t=_(e,r,[]),m(e),e.u&&e.v(e.u,e.s),t!==X?t:void 0}function _(t,e,r){if(null==(n=e)||"object"!=typeof n||Object.isFrozen(n))return e;var n,o=e[B];if(!o)return c(e,(function(n,i){return E(t,o,e,n,i,r)}),!0),e;if(o.A!==t)return e;if(!o.P)return x(t,o.t,!0),o.t;if(!o.I){o.I=!0,o.A._--;var i=4===o.i||5===o.i?o.o=b(o.k):o.o;c(i,(function(e,n){return E(t,o,i,e,n,r)})),x(t,i,!1),r&&t.u&&O("Patches").R(o,r,t.u,t.s)}return o.o}function E(t,e,r,n,o,c){if(i(o)){var f=_(t,o,c&&e&&3!==e.i&&!a(e.D,n)?c.concat(n):void 0);if(l(r,n,f),!i(f))return;t.m=!1}if(u(o)&&!Object.isFrozen(o)){if(!t.h.N&&t._<1)return;_(t,o),e&&e.A.l||x(t,o)}}function x(t,e,r){void 0===r&&(r=!1),t.h.N&&t.m&&v(e,r)}function k(t,e){var r=t[B];return(r?h(r):t)[e]}function F(t){t.P||(t.P=!0,t.l&&F(t.l))}function N(t){t.o||(t.o=b(t.t))}function z(t,e,r){var n=d(e)?O("MapSet").T(e,r):y(e)?O("MapSet").F(e,r):t.g?function(t,e){var r=Array.isArray(t),n={i:r?1:0,A:e?e.A:g(),P:!1,I:!1,D:{},l:e,t:t,k:null,o:null,j:null,C:!1},o=n,i=G;r&&(o=[n],i=H);var u=Proxy.revocable(o,i),c=u.revoke,f=u.proxy;return n.k=f,n.j=c,f}(e,r):O("ES5").J(e,r);return(r?r.A:g()).p.push(n),n}function I(t){return i(t)||o(22,t),function t(e){if(!u(e))return e;var r,n=e[B],o=f(e);if(n){if(!n.P&&(n.i<4||!O("ES5").K(n)))return n.t;n.I=!0,r=R(e,o),n.I=!1}else r=R(e,o);return c(r,(function(e,o){n&&s(n.t,e)===o||l(r,e,t(o))})),3===o?new Set(r):r}(t)}function R(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return b(t)}var K,M,T="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),W="undefined"!=typeof Map,J="undefined"!=typeof Set,U="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,X=T?Symbol("immer-nothing"):((K={})["immer-nothing"]=!0,K),$=T?Symbol("immer-draftable"):"__$immer_draftable",B=T?Symbol("immer-state"):"__$immer_state",C=("undefined"!=typeof Symbol&&Symbol.iterator,"undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames),L=Object.getOwnPropertyDescriptors||function(t){var e={};return C(t).forEach((function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)})),e},q={},G={get:function(t,e){if(e===B)return t;var r=h(t);if(!a(r,e))return function(t,e,r){if(r in e)for(var n=Object.getPrototypeOf(e);n;){var o,i=Object.getOwnPropertyDescriptor(n,r);if(i)return"value"in i?i.value:null===(o=i.get)||void 0===o?void 0:o.call(t.k);n=Object.getPrototypeOf(n)}}(t,r,e);var n=r[e];return t.I||!u(n)?n:n===k(t.t,e)?(N(t),t.o[e]=z(t.A.h,n,t)):n},has:function(t,e){return e in h(t)},ownKeys:function(t){return Reflect.ownKeys(h(t))},set:function(t,e,r){if(t.D[e]=!0,!t.P){if(p(r,k(h(t),e))&&void 0!==r)return!0;N(t),F(t)}return t.o[e]=r,!0},deleteProperty:function(t,e){return void 0!==k(t.t,e)||e in t.t?(t.D[e]=!1,N(t),F(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=h(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:n.enumerable,value:r[e]}:n},defineProperty:function(){o(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){o(12)}},H={};c(G,(function(t,e){H[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),H.deleteProperty=function(t,e){return G.deleteProperty.call(this,t[0],e)},H.set=function(t,e,r){return G.set.call(this,t[0],e,r,t[0])};var Q=new(function(){function t(t){this.g=U,this.N=!1,"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var e=t.prototype;return e.produce=function(t,e,r){if("function"==typeof t&&"function"!=typeof e){var n=e;e=t;var i=this;return function(t){var r=this;void 0===t&&(t=n);for(var o=arguments.length,u=Array(o>1?o-1:0),c=1;c<o;c++)u[c-1]=arguments[c];return i.produce(t,(function(t){var n;return(n=e).call.apply(n,[r,t].concat(u))}))}}var c;if("function"!=typeof e&&o(6),void 0!==r&&"function"!=typeof r&&o(7),u(t)){var f=A(this),a=z(this,t,void 0),s=!0;try{c=e(a),s=!1}finally{s?m(f):j(f)}return"undefined"!=typeof Promise&&c instanceof Promise?c.then((function(t){return w(f,r),D(t,f)}),(function(t){throw m(f),t})):(w(f,r),D(c,f))}if(!t||"object"!=typeof t){if((c=e(t))===X)return;return void 0===c&&(c=t),this.N&&v(c,!0),c}o(21,t)},e.produceWithPatches=function(t,e){var r,n,o=this;return"function"==typeof t?function(e){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return o.produceWithPatches(e,(function(e){return t.apply(void 0,[e].concat(n))}))}:[this.produce(t,e,(function(t,e){r=t,n=e})),r,n]},e.createDraft=function(t){u(t)||o(8),i(t)&&(t=I(t));var e=A(this),r=z(this,t,void 0);return r[B].C=!0,j(e),r},e.finishDraft=function(t,e){var r=(t&&t[B]).A;return w(r,e),D(void 0,r)},e.setAutoFreeze=function(t){this.N=t},e.setUseProxies=function(t){t&&!U&&o(20),this.g=t},e.applyPatches=function(t,e){var r;for(r=e.length-1;r>=0;r--){var n=e[r];if(0===n.path.length&&"replace"===n.op){t=n.value;break}}var o=O("Patches").$;return i(t)?o(t,e):this.produce(t,(function(t){return o(t,e.slice(r+1))}))},t}()),V=Q.produce,Y=(Q.produceWithPatches.bind(Q),Q.setAutoFreeze.bind(Q),Q.setUseProxies.bind(Q),Q.applyPatches.bind(Q),Q.createDraft.bind(Q),Q.finishDraft.bind(Q),V);function Z(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}e.default=function(t,e){switch(e.type){case"set-current":return Y(t,(function(t){t.currentTodo=e.payload}));case"add":return Y(t,(function(t){t.todos.push(e.payload)}));case"update":var r=t.todos.findIndex((function(t){return t.id===e.payload.id}));return-1===r?t:Y(t,(function(t){t.todos[r]=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},e.payload)}));case"delete":var o=t.todos.findIndex((function(t){return t.id===e.payload.id}));return-1===o?t:Y(t,(function(t){t.todos.splice(o,1)}));default:throw new Error("Unsupported action ".concat(JSON.stringify(e)))}}},L8ns:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reducer",function(){return r("6e9T")}])},rePB:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))}},[["L8ns",0]]]);