!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){e.exports=n.p+"assets/02c6f66729d2060ac8345c61623c1492.png"},function(e,t,n){e.exports=n.p+"assets/5ff12bc30fe2412f1408e4d51aeb307f.png"},function(e,t,n){e.exports=n.p+"assets/4c51d4c79e9353afcb9c6de4a52fa4e6.png"},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return o});var r=n(0),a=n.n(r),s=n(1),i=n.n(s),c=n(2),d=n.n(c);class o{constructor(e){this.win=e}async init(){const e=this.win,t=e.document.getElementById("squares-background");this.bladskijJS="";for(let n=0;n<4160;n+=1){const r=e.document.createElement("div");r.classList.add("square"),t.appendChild(r),n%65==0&&(n+=1),n%2==0?t.lastChild.classList.add("square-dark"):t.lastChild.classList.add("square-light")}}async addFrame(e,t){const n=this.win,r=document.createElement("div"),s=n.document.querySelector(".frame-wrapper"),c=n.document.querySelector(".frames");r.classList="frame-item",r.id=`frame-item${e}`,r.draggable=!0;const o=document.createElement("canvas");o.width=s.clientWidth,o.height=s.clientWidth,c.appendChild(r),o.id=`canvas${e}`,o.className="canvas-frame",r.appendChild(o);const l=document.createElement("div"),u=e>0?`<div class="delete-frame"><img class="delete-img" src="${a.a}"></div>`:"";l.innerHTML=`<div class="frame-number">${e}</div>${u}<div class="drag-frame"><img class="drag-img" src="${i.a}"></div><div class="copy-frame"><img class="copy-img" src="${d.a}"></div>`,r.appendChild(l),l.classList="instruments",l.id=`instruments${e}`,t.push(o)}}}]);
//# sourceMappingURL=view.bundle.js.map