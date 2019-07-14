!function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=9)}({9:function(t,e,o){"use strict";o.r(e),o.d(e,"default",function(){return r});class r{constructor(t,e,o){this.colorLayer="",this.currentCanvas=t,this.canvasSize=o,this.currentFrame=e,this.currentColor=document.getElementById("first-color")}hexToRgb(t){this.test="";const e=t.match(/[a-f0-9]{2}/gi);return e&&3===e.length?e.map(t=>parseInt(t,16)):null}matchStartColor(t,e){const o=this.colorLayer.data[t],r=this.colorLayer.data[t+1],n=this.colorLayer.data[t+2],a=this.colorLayer.data[t+3];return o===e[0]&&r===e[1]&&n===e[2]&&a===e[3]}colorPixel(t){const e=this.hexToRgb(this.currentColor.value);this.colorLayer.data[t]=e[0],this.colorLayer.data[t+1]=e[1],this.colorLayer.data[t+2]=e[2],this.colorLayer.data[t+3]=255}colorFilling(t,e){this.test="";const o=this.currentCanvas.getContext("2d"),r=[[t,e]];this.colorLayer=o.getImageData(0,0,this.currentCanvas.width,this.currentCanvas.height);const n=o.getImageData(t,e,1,1).data;for(;r.length;){let t,e,o;const a=r.pop(),s=a[0];let c=a[1];for(t=4*Math.floor(c*this.currentCanvas.width+s);c>=0&&this.matchStartColor(t,n);)t-=4*this.currentCanvas.width,c-=1;for(t+=4*this.currentCanvas.width,++c,e=!1,o=!1;c<this.currentCanvas.height-1&&this.matchStartColor(t,n);)this.colorPixel(t),s>0&&(this.matchStartColor(t-4,n)?e||(r.push([s-1,c]),e=!0):e&&(e=!1)),s<this.currentCanvas.width-1&&(this.matchStartColor(t+4,n)?o||(r.push([s+1,c]),o=!0):o&&(o=!1)),t+=4*this.currentCanvas.width,c+=1}o.putImageData(this.colorLayer,0,0);const a=document.getElementById(`canvas${this.currentFrame}`),s=a.getContext("2d");s.clearRect(0,0,a.width,a.height),s.drawImage(this.currentCanvas,0,0,a.width,a.height)}RGBToHex(t,e,o){this.test="";let r=t.toString(16),n=e.toString(16),a=o.toString(16);return 1===r.length&&(r=`0${t}`),1===n.length&&(n=`0${e}`),1===a.length&&(a=`0${o}`),`#${r}${n}${a}`}currentCanvasHandlers(){const t=this.currentCanvas.getContext("2d"),e=this.currentCanvas.getBoundingClientRect(),o=document.getElementById("img-pen"),r=document.getElementById("img-bucket"),n=document.createElement("canvas");n.width=640,n.height=640;const a=document.getElementById("coordinates");let s=!1,c=0,i=0,l=0,u=0;function d(o){let n=o.clientX-e.left,a=o.clientY-e.top;document.body.className.includes("cursor-bucket")&&(n+=r.width,a+=r.height);const s=t.getImageData(n,a,1,1).data;if(document.body.className.includes("cursor-color-picker")){const t=this.RGBToHex(s[0],s[1],s[2]);this.currentColor.value=t}else document.body.className.includes("cursor-bucket")&&this.colorFilling(n,a)}function h(r){if((document.body.className.includes("cursor-pen")||document.body.className.includes("cursor-eraser")||document.body.className.includes("cursor-line")||document.body.className.includes("cursor-rectangle"))&&(l=r.clientX-e.left,u=r.clientY-e.top+o.height,l=10*Math.floor(l/10),u=10*Math.floor(u/10),s=!0,document.body.className.includes("cursor-line")||document.body.className.includes("cursor-rectangle"))){c=l,i=u;const e=t.getImageData(0,0,640,640);n.getContext("2d").clearRect(0,0,640,640),n.getContext("2d").putImageData(e,0,0)}}function m(r){this.currentColor=document.getElementById("first-color");const d=64/this.canvasSize;if(document.body.className.includes("cursor-pen")||document.body.className.includes("cursor-eraser"))!0===s&&(t.beginPath(),t.rect(l,u,10*d,10*d),document.body.className.includes("cursor-pen")?(t.globalCompositeOperation="source-over",t.fillStyle=this.currentColor.value):document.body.className.includes("cursor-eraser")&&(t.globalCompositeOperation="destination-out",t.fillStyle="rgba(255,0,0,0.5);"),t.fill()),l=r.clientX-e.left,u=r.clientY-e.top+o.height,l=10*Math.floor(l/10),u=10*Math.floor(u/10);else if(document.body.className.includes("cursor-line")&&!0===s){l=r.clientX-e.left,u=r.clientY-e.top+o.height,l=10*Math.floor(l/10),u=10*Math.floor(u/10);const a=n.getContext("2d").getImageData(0,0,640,640);t.clearRect(0,0,640,640),t.putImageData(a,0,0),t.beginPath(),t.globalCompositeOperation="source-over",t.moveTo(c,i),t.lineWidth=640/this.canvasSize,t.strokeStyle=this.currentColor.value,t.lineTo(l,u),t.stroke()}else if(document.body.className.includes("cursor-rectangle")&&!0===s){l=r.clientX-e.left,u=r.clientY-e.top+o.height,l=10*Math.floor(l/10),u=10*Math.floor(u/10);const a=n.getContext("2d").getImageData(0,0,640,640);t.clearRect(0,0,640,640),t.putImageData(a,0,0),t.beginPath(),t.globalCompositeOperation="source-over",t.moveTo(c,i),t.lineWidth=640/this.canvasSize,t.strokeStyle=this.currentColor.value,t.strokeRect(Math.min(l,c),Math.min(u,i),Math.abs(l-c),Math.abs(u-i)),t.stroke()}const h=r.clientX-e.left,m=r.clientY-e.top;a.innerHTML=`X: ${h} Y: ${m}`}function g(){this.currentColor=document.getElementById("first-color");const e=64/this.canvasSize;document.body.className.includes("cursor-pen")||document.body.className.includes("cursor-eraser")?!0===s&&(t.beginPath(),t.rect(l,u,10*e,10*e),document.body.className.includes("cursor-pen")?(t.globalCompositeOperation="source-over",t.fillStyle=this.currentColor.value):(t.globalCompositeOperation="destination-out",t.fillStyle="rgba(255,0,0,0.5);"),t.fill()):document.body.className.includes("cursor-line")&&(t.strokeStyle=this.currentColor.value,t.fillStyle=this.currentColor.value,t.lineTo(l,u),t.closePath()),l=0,u=0,s=!1;const o=document.getElementById(`canvas${this.currentFrame}`),r=o.getContext("2d");r.clearRect(0,0,o.width,o.height),r.drawImage(this.currentCanvas,0,0,o.width,o.height)}this.currentCanvas.removeEventListener("click",d.bind(this)),this.currentCanvas.addEventListener("click",d.bind(this)),this.currentCanvas.removeEventListener("mousedown",h.bind(this)),this.currentCanvas.addEventListener("mousedown",h.bind(this)),this.currentCanvas.removeEventListener("mousemove",m.bind(this)),this.currentCanvas.addEventListener("mousemove",m.bind(this)),this.currentCanvas.removeEventListener("mouseup",g.bind(this)),this.currentCanvas.addEventListener("mouseup",g.bind(this))}}}});
//# sourceMappingURL=tools.bundle.js.map