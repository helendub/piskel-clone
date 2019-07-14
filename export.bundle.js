!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}({10:function(e,t,n){var r;e.exports=function e(t,n,i){function s(a,h){if(!n[a]){if(!t[a]){var l="function"==typeof r&&r;if(!h&&l)return r(a,!0);if(o)return o(a,!0);var f=new Error("Cannot find module '"+a+"'");throw f.code="MODULE_NOT_FOUND",f}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){var n=t[a][1][e];return s(n||e)},u,u.exports,e,t,n,i)}return n[a].exports}for(var o="function"==typeof r&&r,a=0;a<i.length;a++)s(i[a]);return s}({1:[function(e,t,n){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(e){return"function"==typeof e}function s(e){return"object"==typeof e&&null!==e}function o(e){return void 0===e}t.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,n,r,a,h,l;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var f=new Error('Uncaught, unspecified "error" event. ('+t+")");throw f.context=t,f}if(o(n=this._events[e]))return!1;if(i(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:a=Array.prototype.slice.call(arguments,1),n.apply(this,a)}else if(s(n))for(a=Array.prototype.slice.call(arguments,1),l=n.slice(),r=l.length,h=0;h<r;h++)l[h].apply(this,a);return!0},r.prototype.addListener=function(e,t){var n;if(!i(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,i(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned&&(n=o(this._maxListeners)?r.defaultMaxListeners:this._maxListeners)&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){if(!i(t))throw TypeError("listener must be a function");var n=!1;function r(){this.removeListener(e,r),n||(n=!0,t.apply(this,arguments))}return r.listener=t,this.on(e,r),this},r.prototype.removeListener=function(e,t){var n,r,o,a;if(!i(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],o=n.length,r=-1,n===t||i(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(n)){for(a=o;a-- >0;)if(n[a]===t||n[a].listener&&n[a].listener===t){r=a;break}if(r<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(i(n=this._events[e]))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){return this._events&&this._events[e]?i(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(i(t))return 1;if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}},{}],2:[function(e,t,n){var r,i,s,o,a;a=navigator.userAgent.toLowerCase(),o=navigator.platform.toLowerCase(),r=a.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0],s="ie"===r[1]&&document.documentMode,(i={name:"version"===r[1]?r[3]:r[1],version:s||parseFloat("opera"===r[1]&&r[4]?r[4]:r[2]),platform:{name:a.match(/ip(?:ad|od|hone)/)?"ios":(a.match(/(?:webos|android)/)||o.match(/mac|win|linux/)||["other"])[0]}})[i.name]=!0,i[i.name+parseInt(i.version,10)]=!0,i.platform[i.platform.name]=!0,t.exports=i},{}],3:[function(e,t,n){var r,i,s,o={}.hasOwnProperty,a=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1},h=[].slice;r=e("events").EventEmitter,s=e("./browser.coffee"),i=function(e){var t,n;function r(e){var n,r,i;for(r in this.running=!1,this.options={},this.frames=[],this.freeWorkers=[],this.activeWorkers=[],this.setOptions(e),t)i=t[r],null==(n=this.options)[r]&&(n[r]=i)}return function(e,t){for(var n in t)o.call(t,n)&&(e[n]=t[n]);function r(){this.constructor=e}r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype}(r,e),t={workerScript:"gif.worker.js",workers:2,repeat:0,background:"#fff",quality:10,width:null,height:null,transparent:null,debug:!1,dither:!1},n={delay:500,copy:!1},r.prototype.setOption=function(e,t){if(this.options[e]=t,null!=this._canvas&&("width"===e||"height"===e))return this._canvas[e]=t},r.prototype.setOptions=function(e){var t,n,r;for(t in n=[],e)o.call(e,t)&&(r=e[t],n.push(this.setOption(t,r)));return n},r.prototype.addFrame=function(e,t){var r,i;for(i in null==t&&(t={}),(r={}).transparent=this.options.transparent,n)r[i]=t[i]||n[i];if(null==this.options.width&&this.setOption("width",e.width),null==this.options.height&&this.setOption("height",e.height),"undefined"!=typeof ImageData&&null!==ImageData&&e instanceof ImageData)r.data=e.data;else if("undefined"!=typeof CanvasRenderingContext2D&&null!==CanvasRenderingContext2D&&e instanceof CanvasRenderingContext2D||"undefined"!=typeof WebGLRenderingContext&&null!==WebGLRenderingContext&&e instanceof WebGLRenderingContext)t.copy?r.data=this.getContextData(e):r.context=e;else{if(null==e.childNodes)throw new Error("Invalid image");t.copy?r.data=this.getImageData(e):r.image=e}return this.frames.push(r)},r.prototype.render=function(){var e,t,n;if(this.running)throw new Error("Already running");if(null==this.options.width||null==this.options.height)throw new Error("Width and height must be set prior to rendering");if(this.running=!0,this.nextFrame=0,this.finishedFrames=0,this.imageParts=function(){var e,t,n;for(n=[],e=0,t=this.frames.length;0<=t?e<t:e>t;0<=t?++e:--e)n.push(null);return n}.call(this),t=this.spawnWorkers(),!0===this.options.globalPalette)this.renderNextFrame();else for(e=0,n=t;0<=n?e<n:e>n;0<=n?++e:--e)this.renderNextFrame();return this.emit("start"),this.emit("progress",0)},r.prototype.abort=function(){for(var e;null!=(e=this.activeWorkers.shift());)this.log("killing active worker"),e.terminate();return this.running=!1,this.emit("abort")},r.prototype.spawnWorkers=function(){var e,t,n,r;return e=Math.min(this.options.workers,this.frames.length),function(){n=[];for(var r=t=this.freeWorkers.length;t<=e?r<e:r>e;t<=e?r++:r--)n.push(r);return n}.apply(this).forEach((r=this,function(e){var t;return r.log("spawning worker "+e),(t=new Worker(r.options.workerScript)).onmessage=function(e){return r.activeWorkers.splice(r.activeWorkers.indexOf(t),1),r.freeWorkers.push(t),r.frameFinished(e.data)},r.freeWorkers.push(t)})),e},r.prototype.frameFinished=function(e){var t,n;if(this.log("frame "+e.index+" finished - "+this.activeWorkers.length+" active"),this.finishedFrames++,this.emit("progress",this.finishedFrames/this.frames.length),this.imageParts[e.index]=e,!0===this.options.globalPalette&&(this.options.globalPalette=e.globalPalette,this.log("global palette analyzed"),this.frames.length>2))for(t=1,n=this.freeWorkers.length;1<=n?t<n:t>n;1<=n?++t:--t)this.renderNextFrame();return a.call(this.imageParts,null)>=0?this.renderNextFrame():this.finishRendering()},r.prototype.finishRendering=function(){var e,t,n,r,i,s,o,a,h,l,f,u,p,c,d,v;for(a=0,c=this.imageParts,i=0,h=c.length;i<h;i++)t=c[i],a+=(t.data.length-1)*t.pageSize+t.cursor;for(a+=t.pageSize-t.cursor,this.log("rendering finished - filesize "+Math.round(a/1e3)+"kb"),e=new Uint8Array(a),u=0,d=this.imageParts,s=0,l=d.length;s<l;s++)for(t=d[s],v=t.data,n=o=0,f=v.length;o<f;n=++o)p=v[n],e.set(p,u),n===t.data.length-1?u+=t.cursor:u+=t.pageSize;return r=new Blob([e],{type:"image/gif"}),this.emit("finished",r,e)},r.prototype.renderNextFrame=function(){var e,t,n;if(0===this.freeWorkers.length)throw new Error("No free workers");if(!(this.nextFrame>=this.frames.length))return e=this.frames[this.nextFrame++],n=this.freeWorkers.shift(),t=this.getTask(e),this.log("starting frame "+(t.index+1)+" of "+this.frames.length),this.activeWorkers.push(n),n.postMessage(t)},r.prototype.getContextData=function(e){return e.getImageData(0,0,this.options.width,this.options.height).data},r.prototype.getImageData=function(e){var t;return null==this._canvas&&(this._canvas=document.createElement("canvas"),this._canvas.width=this.options.width,this._canvas.height=this.options.height),(t=this._canvas.getContext("2d")).setFill=this.options.background,t.fillRect(0,0,this.options.width,this.options.height),t.drawImage(e,0,0),this.getContextData(t)},r.prototype.getTask=function(e){var t,n;if(t=this.frames.indexOf(e),n={index:t,last:t===this.frames.length-1,delay:e.delay,transparent:e.transparent,width:this.options.width,height:this.options.height,quality:this.options.quality,dither:this.options.dither,globalPalette:this.options.globalPalette,repeat:this.options.repeat,canTransfer:"chrome"===s.name},null!=e.data)n.data=e.data;else if(null!=e.context)n.data=this.getContextData(e.context);else{if(null==e.image)throw new Error("Invalid frame");n.data=this.getImageData(e.image)}return n},r.prototype.log=function(){var e;if(e=1<=arguments.length?h.call(arguments,0):[],this.options.debug)return console.log.apply(console,e)},r}(r),t.exports=i},{"./browser.coffee":2,events:1}]},{},[3])(3)}});
//# sourceMappingURL=export.bundle.js.map