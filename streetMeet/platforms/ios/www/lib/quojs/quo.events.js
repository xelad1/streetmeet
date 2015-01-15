/**
 * QuoJS - Micro #JavaScript Library for Mobile Devices.
 * @version v3.0.6
 * @link    http://quojs.tapquo.com
 * @author  Javi Jimenez Villar (@soyjavi) (https://twitter.com/soyjavi)
 * @license MIT
 */
(function(){"use strict";!function(n){var t,e,r,u,i,o,c,a,l,f,d,s,v;return t=1,u={},r={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"},e={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",touch:"click",orientationchange:"resize"},i=/complete|loaded|interactive/,n.fn.on=function(t,e,r){return null==e||"function"===n.toType(e)?this.bind(t,e):this.delegate(e,t,r)},n.fn.off=function(t,e,r){return null==e||"function"===n.toType(e)?this.unbind(t,e):this.undelegate(e,t,r)},n.fn.ready=function(t){return i.test(document.readyState)?t.call(this,n):n.fn.addEvent(document,"DOMContentLoaded",function(){return t.call(this,n)})},n.fn.bind=function(n,t){return this.forEach(function(e){return s(e,n,t)})},n.fn.unbind=function(n,t){return this.each(function(){return v(this,n,t)})},n.fn.delegate=function(t,e,r){return this.each(function(u,i){return s(i,e,r,t,function(e){return function(r){var u,c;return c=n(r.target).closest(t,i).get(0),c?(u=n.extend(o(r),{currentTarget:c,liveFired:i}),e.apply(c,[u].concat([].slice.call(arguments,1)))):void 0}})})},n.fn.undelegate=function(n,t,e){return this.each(function(){return v(this,t,e,n)})},n.fn.trigger=function(t,e,r){return"string"===n.toType(t)&&(t=l(t,e)),null!=r&&(t.originalEvent=r),this.each(function(){return this.dispatchEvent(t)})},n.fn.addEvent=function(n,t,e){return n.addEventListener?n.addEventListener(t,e,!1):n.attachEvent?n.attachEvent("on"+t,e):n["on"+t]=e},n.fn.removeEvent=function(n,t,e){return n.removeEventListener?n.removeEventListener(t,e,!1):n.detachEvent?n.detachEvent("on"+t,e):n["on"+t]=null},l=function(n,t){var e;return e=document.createEvent("Events"),e.initEvent(n,!0,!0,null,null,null,null,null,null,null,null,null,null,null,null),t&&(e.touch=t),e},s=function(t,e,r,i,o){var l,f,s,v;return e=a(e),s=d(t),f=u[s]||(u[s]=[]),l=o&&o(r,e),v={event:e,callback:r,selector:i,proxy:c(l,r,t),delegate:l,index:f.length},f.push(v),n.fn.addEvent(t,v.event,v.proxy)},v=function(t,e,r,i){var o;return e=a(e),o=d(t),f(o,e,r,i).forEach(function(e){return delete u[o][e.index],n.fn.removeEvent(t,e.event,e.proxy)})},d=function(n){return n._id||(n._id=t++)},a=function(t){var r;return r=("function"==typeof n.isMobile?n.isMobile():void 0)?t:e[t],r||t},c=function(n,t,e){var r;return t=n||t,r=function(n){var r;return r=t.apply(e,[n].concat(n.data)),r===!1&&n.preventDefault(),r}},f=function(n,t,e,r){return(u[n]||[]).filter(function(n){return!(!n||t&&n.event!==t||e&&n.callback!==e||r&&n.selector!==r)})},o=function(t){var e;return e=n.extend({originalEvent:t},t),n.each(r,function(n,r){return e[n]=function(){return this[r]=function(){return!0},t[n].apply(t,arguments)},e[r]=function(){return!1}}),e}}(Quo)}).call(this);