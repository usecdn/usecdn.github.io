var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(a){var f=0;return function(){return f<a.length?{done:!1,value:a[f++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.makeIterator=function(a){var f="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return f?f.call(a):$jscomp.arrayIterator(a)};$jscomp.arrayFromIterator=function(a){for(var f,h=[];!(f=a.next()).done;)h.push(f.value);return h};
$jscomp.arrayFromIterable=function(a){return a instanceof Array?a:$jscomp.arrayFromIterator($jscomp.makeIterator(a))};
!function(a,f){"object"==typeof exports&&"undefined"!=typeof module?f(exports):"function"==typeof define&&define.amd?define(["exports"],f):f(a.quicklink={})}(this,function(a){function f(a){return new Promise(function(c,b,g){(g=new XMLHttpRequest).open("GET",a,g.withCredentials=!0);g.onload=function(){200===g.status?c():b()};g.send()})}function h(a,b,g){if(!(g=navigator.connection)||!g.saveData&&!/2g/.test(g.effectiveType))return Promise.all([].concat(a).map(function(a){if(!m.has(a))return m.add(a),
(b?function(a){return window.fetch?fetch(a,{credentials:"include"}):f(a)}:d)((new URL(a,location.href)).toString())}))}var b,d=(b=document.createElement("link")).relList&&b.relList.supports&&b.relList.supports("prefetch")?function(a){return new Promise(function(b,c,g){(g=document.createElement("link")).rel="prefetch";g.href=a;g.onload=b;g.onerror=c;document.head.appendChild(g)})}:f,g=window.requestIdleCallback||function(a){var b=Date.now();return setTimeout(function(){a({didTimeout:!1,timeRemaining:function(){return Math.max(0,
50-(Date.now()-b))}})},1)},m=new Set;a.listen=function(a){if(a||(a={}),window.IntersectionObserver){var b=function(a){function b(){c<a&&0<g.length&&(g.shift()(),c++)}a=a||1;var g=[],c=0;return[function(a){1<g.push(a)||b()},function(){c--;b()}]}(a.throttle||1/0),c=b[0],d=b[1],x=a.limit||1/0,q=a.origins||[location.hostname],l=a.ignores||[];b=a.timeoutFn||g;var f=new IntersectionObserver(function(b){b.forEach(function(b){b.isIntersecting&&(f.unobserve(b=b.target),m.size<x&&c(function(){h(b.href,a.priority).then(d)["catch"](function(b){d();
a.onError&&a.onError(b)})}))})});return b(function(){(a.el||document).querySelectorAll("a").forEach(function(a){q.length&&!q.includes(a.hostname)||function k(a,b){return Array.isArray(b)?b.some(function(b){return k(a,b)}):(b.test||b).call(b,a.href,a)}(a,l)||f.observe(a)})},{timeout:a.timeout||2E3}),function(){m.clear();f.disconnect()}}};a.prefetch=h});
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(a){var f=(this.document||this.ownerDocument).querySelectorAll(a),h=this;do for(a=f.length;0<=--a&&f.item(a)!==h;);while(0>a&&(h=h.parentElement));return h});
(function(){function a(a,h){h=h||{bubbles:!1,cancelable:!1,detail:void 0};var b=document.createEvent("CustomEvent");return b.initCustomEvent(a,h.bubbles,h.cancelable,h.detail),b}if("function"==typeof window.CustomEvent)return!1;a.prototype=window.Event.prototype;window.CustomEvent=a})();
(function(){for(var a=0,f=["ms","moz","webkit","o"],h=0;h<f.length&&!window.requestAnimationFrame;++h)window.requestAnimationFrame=window[f[h]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[f[h]+"CancelAnimationFrame"]||window[f[h]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(b,d){var g=(new Date).getTime(),m=Math.max(0,16-(g-a)),c=window.setTimeout(function(){b(g+m)},m);return a=g+m,c});window.cancelAnimationFrame||(window.cancelAnimationFrame=
function(a){clearTimeout(a)})})();
(function(a,f){"function"==typeof define&&define.amd?define([],function(){return f(a)}):"object"==typeof exports?module.exports=f(a):a.SmoothScroll=f(a)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,function(a){var f={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},h=function(){var a={};return Array.prototype.forEach.call(arguments,
function(b){for(var g in b){if(!b.hasOwnProperty(g))break;a[g]=b[g]}}),a},b=function(a){try{var b=decodeURIComponent(a)}catch(l){b=a}return b},d=function(a){"#"===a.charAt(0)&&(a=a.substr(1));for(var b=String(a),g=b.length,c=-1,d="",m=b.charCodeAt(0);++c<g;){if(0===(a=b.charCodeAt(c)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");1<=a&&31>=a||127==a||0===c&&48<=a&&57>=a||1===c&&48<=a&&57>=a&&45===m?d+="\\"+a.toString(16)+" ":d+=128<=a||45===a||95===a||48<=a&&57>=
a||65<=a&&90>=a||97<=a&&122>=a?b.charAt(c):"\\"+b.charAt(c)}try{var h=decodeURIComponent("#"+d)}catch(t){h="#"+d}return h},g=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},m=function(b,c,d,h){var m=0;if(b.offsetParent){do m+=b.offsetTop,b=b.offsetParent;while(b)}return m=Math.max(m-c-d,0),h&&(m=Math.min(m,g()-a.innerHeight)),
m},c=function(b){return b?parseInt(a.getComputedStyle(b).height,10)+b.offsetTop:0},B=function(a,b){var g=b.speedAsDuration?b.speed:Math.abs(a/1E3*b.speed);return b.durationMax&&g>b.durationMax?b.durationMax:b.durationMin&&g<b.durationMin?b.durationMin:g},A=function(a,b,g){b||history.pushState&&g.updateURL&&history.pushState({smoothScroll:JSON.stringify(g),anchor:a.id},document.title,a===document.documentElement?"#top":"#"+a.id)},D=function(b,g,c,m){g.emitEvents&&"function"==typeof a.CustomEvent&&
(b=new CustomEvent(b,{bubbles:!0,detail:{anchor:c,toggle:m}}),document.dispatchEvent(b))};return function(x,q){var l,w,p,v,u,t,k={cancelScroll:function(a){cancelAnimationFrame(t);t=null;a||D("scrollCancel",l)},animateScroll:function(b,e,d){var n=h(l||f,d||{}),z="[object Number]"===Object.prototype.toString.call(b);d=z||!b.tagName?null:b;if(z||d){var q=a.pageYOffset;n.header&&!p&&(p=document.querySelector(n.header));v||(v=c(p));var r,C,u,x=z?b:m(d,v,parseInt("function"==typeof n.offset?n.offset(b,
e):n.offset,10),n.clip),w=x-q,y=g(),E=0,H=B(w,n),F=function(g){r||(r=g);E+=g-r;C=E/parseInt(H,10);C=1<C?1:C;var c=C;var d;c=("easeInQuad"===n.easing&&(d=c*c),"easeOutQuad"===n.easing&&(d=c*(2-c)),"easeInOutQuad"===n.easing&&(d=.5>c?2*c*c:(4-2*c)*c-1),"easeInCubic"===n.easing&&(d=c*c*c),"easeOutCubic"===n.easing&&(d=--c*c*c+1),"easeInOutCubic"===n.easing&&(d=.5>c?4*c*c*c:(c-1)*(2*c-2)*(2*c-2)+1),"easeInQuart"===n.easing&&(d=c*c*c*c),"easeOutQuart"===n.easing&&(d=1- --c*c*c*c),"easeInOutQuart"===n.easing&&
(d=.5>c?8*c*c*c*c:1-8*--c*c*c*c),"easeInQuint"===n.easing&&(d=c*c*c*c*c),"easeOutQuint"===n.easing&&(d=1+--c*c*c*c*c),"easeInOutQuint"===n.easing&&(d=.5>c?16*c*c*c*c*c:1+16*--c*c*c*c*c),n.customEasing&&(d=n.customEasing(c)),d||c);u=q+w*c;a.scrollTo(0,Math.floor(u));d=a.pageYOffset;u==x||d==x||(q<x&&a.innerHeight+d)>=y?(k.cancelScroll(!0),0===b&&document.body.focus(),z||(b.focus(),document.activeElement!==b&&(b.setAttribute("tabindex","-1"),b.focus(),b.style.outline="none"),a.scrollTo(0,x)),d=(D("scrollStop",
n,b,e),r=null,t=null,!0)):d=void 0;d||(t=a.requestAnimationFrame(F),r=g)};0===a.pageYOffset&&a.scrollTo(0,0);A(b,z,n);D("scrollStart",n,b,e);k.cancelScroll(!0);a.requestAnimationFrame(F)}}},e=function(c){if(!("matchMedia"in a&&a.matchMedia("(prefers-reduced-motion)").matches||0!==c.button||c.metaKey||c.ctrlKey)&&"closest"in c.target&&(w=c.target.closest(x))&&"a"===w.tagName.toLowerCase()&&!c.target.closest(l.ignore)&&w.hostname===a.location.hostname&&w.pathname===a.location.pathname&&/#/.test(w.href)){var g=
d(b(w.hash)),e=l.topOnEmptyHash&&"#"===g?document.documentElement:document.querySelector(g);if(e=e||"#rizkysaskiaputra"!==g?e:document.documentElement)c.preventDefault(),history.replaceState&&l.updateURL&&!history.state&&(c=(c=a.location.hash)||a.pageYOffset,history.replaceState({smoothScroll:JSON.stringify(l),anchor:c||a.pageYOffset},document.title,c||a.location.href)),k.animateScroll(e,w)}},y=function(a){null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(l)&&
((a=history.state.anchor)&&0!==a&&!(a=document.querySelector(d(b(history.state.anchor))))||k.animateScroll(a,null,{updateURL:!1}))},r=function(a){u||(u=setTimeout(function(){u=null;v=c(p)},66))};return k.destroy=function(){l&&(document.removeEventListener("click",e,!1),a.removeEventListener("resize",r,!1),a.removeEventListener("popstate",y,!1),k.cancelScroll(),l=null,w=null,p=null,v=null,u=null,t=null)},k.init=function(b){if(!("querySelector"in document&&"addEventListener"in a&&"requestAnimationFrame"in
a&&"closest"in a.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";k.destroy();l=h(f,b||{});p=l.header?document.querySelector(l.header):null;v=c(p);document.addEventListener("click",e,!1);p&&a.addEventListener("resize",r,!1);l.updateURL&&l.popstate&&a.addEventListener("popstate",y,!1)},k.init(q),k}});
!function(a,f){"object"==typeof exports&&"undefined"!=typeof module?module.exports=f():"function"==typeof define&&define.amd?define(f):a.MenuSpy=f()}(this,function(){var a=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a},f=function(a){a=a.getBoundingClientRect();return{top:a.top+window.pageYOffset,left:a.left+window.pageXOffset}},h=function(a,b){a.classList?a.classList.remove(b):a.className=a.className.replace(new RegExp("(^|\\b)"+b.split(" ").join("|")+"(\\b|$)","gi")," ")},
b=function(a,b){var c=null;return function(){var g=arguments,d=this;c||(c=setTimeout(function(){return c=0,a.apply(d,g)},b))}},d=function(g,d){var c=this;g&&(this.element="string"==typeof g?document.querySelector(g):g,this.options=a({menuItemSelector:'a[href^="#"]',activeClass:"active",threshold:15,enableLocationHash:!0,hashTimeout:600,callback:null},d),this.assignValues(),this.debouncedAssignValuesFn=b(function(){return c.assignValues()}),window.addEventListener("resize",this.debouncedAssignValuesFn),
this.debouncedHashFn=b(function(){var a=c.lastInViewElm?"#"+c.lastInViewElm.id:"#";if(history.replaceState)history.replaceState(null,null,a);else{var b=window.pageYOffset||document.documentElement.scrollTop;window.location.hash=a;window.scrollTo(0,b)}},this.options.hashTimeout),this.cacheItems(),this.scrollFn())};return d.prototype.assignValues=function(){this.currScrollTop=0;this.lastInViewElm=null;this.menuHeight=this.element.offsetHeight+this.options.threshold;this.menuItems=[].slice.call(this.element.querySelectorAll(this.options.menuItemSelector));
this.raf=null},d.prototype.cacheItems=function(){this.scrollItems=this.menuItems.map(function(a){var b=a.dataset.target?document.querySelector(a.dataset.target):document.getElementById(a.hash.slice(1));return!!b&&{elm:a,target:b,offset:Math.floor(f(b).top)}});this.scrollItems=this.scrollItems.filter(Boolean).sort(function(a,b){return a.offset-b.offset})},d.prototype.tick=function(){var a=this.currScrollTop+this.menuHeight,b=this.scrollItems.filter(function(b){return b.offset<a});this.activateItem(b.pop())},
d.prototype.activateItem=function(a){var b=this,c=this.options,d=c.activeClass,g=c.callback;if(!a)return this.scrollItems.forEach(function(a){return h(a.elm.parentNode,d)}),this.lastInViewElm=null,void(this.options.enableLocationHash&&this.debouncedHashFn());this.lastInViewElm!==a.target&&(this.lastInViewElm=a.target,this.scrollItems.forEach(function(c){h(c.elm.parentNode,d);if(c.target===a.target){var f=c.elm.parentNode;if(f.classList)f.classList.add(d);else{var m=f.className.split(" ");-1===m.indexOf(d)&&
m.push(d);f.className=m.join(" ")}"function"==typeof g&&g.call(b,c);b.options.enableLocationHash&&b.debouncedHashFn()}}))},d.prototype.scrollFn=function(){var a=window.pageYOffset||document.documentElement.scrollTop;this.currScrollTop!==a&&(this.currScrollTop=a,this.tick());this.raf=window.requestAnimationFrame(this.scrollFn.bind(this))},d.prototype.destroy=function(){this.raf&&window.cancelAnimationFrame(this.raf);window.removeEventListener("resize",this.debouncedAssignValuesFn)},d});
!function(a,f){"object"==typeof exports&&"undefined"!=typeof module?module.exports=f():"function"==typeof define&&define.amd?define(f):(a=a||self).Leniwiec=f()}(this,function(){var a=function(a,d){for(var b=[],h=1;h<arguments.length;++h)b[h-1]=arguments[h];if("function"==typeof a)return a.apply(null,$jscomp.arrayFromIterable(b))},f={root:null,rootMargin:"0px",threshold:0,errorClassName:"is-error",loadedClassName:"is-loaded",onLoad:null,onError:null},h=function(a,d){d=void 0===d?{}:d;this.elements=
h.getElements(a);this.config=Object.assign({},f,d);this.observer=this.createObserver();("undefined"!=typeof window&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent))&&this.loadAll()};h.prototype.createObserver=function(){var a=this.config,d=a.root,g=a.rootMargin;a=a.threshold;d=new IntersectionObserver(this.callback.bind(this),{root:d,rootMargin:g,threshold:a});g=$jscomp.makeIterator(this.elements);for(a=g.next();!a.done;a=g.next())d.observe(a.value);
return d};h.prototype.callback=function(a){var b=this;a.forEach(function(a){var d=a.target;a.isIntersecting&&b.loadAndUnobserve(d)})};h.prototype.loadAndUnobserve=function(a){this.load(a);this.observer.unobserve(a)};h.prototype.load=function(a){var b=this.getTargetAttributes(a);a.hasAttribute("data-load-image")?this.loadImg(a,b,[b.src]):"IMG"===a.tagName?this.setImg(a,b):"PICTURE"===a.tagName?this.setPicture(a,b):this.setBackgroundImage(a,b)};h.prototype.loadImg=function(a,d,g){d=d.src;var b=new Image;
this.bindTargetCallbacks(b,a,g);b.setAttribute("src",d)};h.prototype.setImg=function(a,d){var b=d.src;this.bindTargetCallbacks(a,a);a.setAttribute("src",b)};h.prototype.setBackgroundImage=function(a,d){var b=d.src,h=new Image;this.bindTargetCallbacks(h,a);h.setAttribute("src",b);a.style.backgroundImage="url("+b+")"};h.prototype.setPicture=function(a,d){var b=d.src,h=d.alt,c=new Image;this.bindTargetCallbacks(c,a);c.setAttribute("src",b);c.setAttribute("alt",h);a.appendChild(c)};h.prototype.getTargetAttributes=
function(a){var b=a.dataset;return{src:a.dataset.src||a.dataset.backgroundImage||a.dataset.loadImage||"",alt:void 0===b.alt?"":b.alt}};h.prototype.bindTargetCallbacks=function(b,d,g){var h=this;g=void 0===g?[]:g;var c=this.config,f=c.loadedClassName,A=c.errorClassName;b.addEventListener("load",function(){d.classList.add(f);a.apply(null,[h.config.onLoad,d].concat($jscomp.arrayFromIterable(g)))});b.addEventListener("error",function(){d.classList.add(A);a.apply(null,[h.config.onError,d].concat($jscomp.arrayFromIterable(g)))})};
h.prototype.loadAll=function(){for(var a=$jscomp.makeIterator(this.elements),d=a.next();!d.done;d=a.next())this.loadAndUnobserve(d.value)};h.prototype.observe=function(a){this.observer.observe(a)};h.prototype.unmount=function(){this.observer.disconnect()};h.getElements=function(a){if("string"==typeof a)return Array.from(document.querySelectorAll(a));if(a instanceof NodeList)return Array.from(a);if(a instanceof HTMLElement)return[a];if(a instanceof Array)return a;throw Error("Passed elements should be a string selector, NodeList, HTMLElement, Node, HTMLElement[] or Node[]");
};return h});
(function(a,f){"object"===typeof exports&&"undefined"!==typeof module?module.exports=f():"function"===typeof define&&define.amd?define(f):a.mediumZoom=f()})(this,function(){var a=Object.assign||function(a){for(var c=1;c<arguments.length;c++){var b=arguments[c],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d])}return a},f=function(a){return"IMG"===a.tagName},h=function(a){return a&&1===a.nodeType},b=function(a){try{return Array.isArray(a)?a.filter(f):NodeList.prototype.isPrototypeOf(a)?[].slice.call(a).filter(f):
h(a)?[a].filter(f):"string"===typeof a?[].slice.call(document.querySelectorAll(a)).filter(f):[]}catch(B){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\n");}},d=function(a){a=document.createElement("div");a.classList.add("img__bg");return a},g=function(a){var b=a.getBoundingClientRect(),c=b.top,d=b.left,h=b.width;b=b.height;a=a.cloneNode();var g=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||
0,f=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;a.removeAttribute("id");a.style.position="absolute";a.style.top=c+g+"px";a.style.left=d+f+"px";a.style.width=h+"px";a.style.height=b+"px";a.style.transform="";return a},m=function(b,d){var c=a({bubbles:!1,cancelable:!1,detail:void 0},d);if("function"===typeof window.CustomEvent)return new CustomEvent(b,c);var h=document.createEvent("CustomEvent");h.initCustomEvent(b,c.bubbles,c.cancelable,c.detail);return h};
return function A(f){var B=window.Promise||function(a){function b(){}a(b,b)},x=function(){for(var a=arguments.length,d=Array(a),e=0;e<a;e++)d[e]=arguments[e];var h=d.reduce(function(a,d){return[].concat(a,b(d))},[]);h.filter(function(a){return-1===p.indexOf(a)}).forEach(function(a){p.push(a);a.classList.add("img__zoom")});v.forEach(function(a){var b=a.type,d=a.listener,e=a.options;h.forEach(function(a){a.addEventListener(b,d,e)})});return r},q=function(){var b=(0<arguments.length&&void 0!==arguments[0]?
arguments[0]:{}).target,d=function(){var b={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},d=void 0,g=void 0;if(k.container)if(k.container instanceof Object)b=a({},b,k.container),d=b.width-b.left-b.right-2*k.margin,g=b.height-b.top-b.bottom-2*k.margin;else{var f=(h(k.container)?k.container:document.querySelector(k.container)).getBoundingClientRect();b=a({},b,{width:f.width,height:f.height,left:f.left,top:f.top})}d=d||b.width-
2*k.margin;g=g||b.height-2*k.margin;var n=e.zoomedHd||e.original;f=".svg"===(n.currentSrc||n.src).substr(-4).toLowerCase()?d:n.naturalWidth||d;var l=".svg"===(n.currentSrc||n.src).substr(-4).toLowerCase()?g:n.naturalHeight||g;n=n.getBoundingClientRect();var r=n.width,m=n.height;f=Math.min(Math.min(f,d)/r,Math.min(l,g)/m);b="scale("+f+") translate3d("+(-n.left+(d-r)/2+k.margin+b.left)/f+"px, "+(-n.top+(g-m)/2+k.margin+b.top)/f+"px, 0)";e.zoomed.style.transform=b;e.zoomedHd&&(e.zoomedHd.style.transform=
b)};return new B(function(a){if(b&&-1===p.indexOf(b))a(r);else if(e.zoomed)a(r);else{if(b)e.original=b;else if(0<p.length)e.original=p[0];else{a(r);return}e.original.dispatchEvent(m("-img:open",{detail:{zoom:r}}));t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;u=!0;e.zoomed=g(e.original);document.body.appendChild(y);if(k.template){var f=h(k.template)?k.template:document.querySelector(k.template);e.template=document.createElement("div");e.template.appendChild(f.content.cloneNode(!0));
document.body.appendChild(e.template)}document.body.appendChild(e.zoomed);window.requestAnimationFrame(function(){document.body.classList.add("img__body")});e.original.classList.add("img__hidden");e.zoomed.classList.add("img__zoomed");e.zoomed.addEventListener("click",l);e.zoomed.addEventListener("transitionend",function G(){u=!1;e.zoomed.removeEventListener("transitionend",G);e.original.dispatchEvent(m("-img:opened",{detail:{zoom:r}}));a(r)});if(e.original.getAttribute("data-original")){e.zoomedHd=
e.zoomed.cloneNode();e.zoomedHd.removeAttribute("srcset");e.zoomedHd.removeAttribute("sizes");e.zoomedHd.src=e.zoomed.getAttribute("data-original");e.zoomedHd.onerror=function(){clearInterval(n);console.warn("Unable to reach the zoom image target "+e.zoomedHd.src);e.zoomedHd=null;d()};var n=setInterval(function(){e.zoomedHd.complete&&(clearInterval(n),e.zoomedHd.classList.add("img__zoomed"),e.zoomedHd.addEventListener("click",l),document.body.appendChild(e.zoomedHd),d())},10)}else if(e.original.hasAttribute("srcset")){e.zoomedHd=
e.zoomed.cloneNode();e.zoomedHd.removeAttribute("sizes");var q=e.zoomedHd.addEventListener("load",function(){e.zoomedHd.removeEventListener("load",q);e.zoomedHd.classList.add("img__zoomed");e.zoomedHd.addEventListener("click",l);document.body.appendChild(e.zoomedHd);d()})}else d()}})},l=function(){return new B(function(a){u||!e.original?a(r):(u=!0,document.body.classList.remove("img__body"),e.zoomed.style.transform="",e.zoomedHd&&(e.zoomedHd.style.transform=""),e.template&&(e.template.style.transition=
"opacity 150ms",e.template.style.opacity=0),e.original.dispatchEvent(m("-img:close",{detail:{zoom:r}})),e.zoomed.addEventListener("transitionend",function z(){e.original.classList.remove("img__hidden");document.body.removeChild(e.zoomed);e.zoomedHd&&document.body.removeChild(e.zoomedHd);document.body.removeChild(y);e.zoomed.classList.remove("img__zoomed");e.template&&document.body.removeChild(e.template);u=!1;e.zoomed.removeEventListener("transitionend",z);e.original.dispatchEvent(m("-img:closed",
{detail:{zoom:r}}));e.original=null;e.zoomed=null;e.zoomedHd=null;e.template=null;a(r)}))})},w=function(){var a=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).target;return e.original?l():q({target:a})},p=[],v=[],u=!1,t=0,k=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(f)?k=f:(f||"string"===typeof f)&&x(f);k=a({margin:0,background:"#0e0e0e",scrollOffset:40,container:null,
template:null},k);var y=d(k.background);document.addEventListener("click",function(a){a=a.target;a===y?l():-1!==p.indexOf(a)&&w({target:a})});document.addEventListener("keyup",function(a){27===(a.keyCode||a.which)&&l()});document.addEventListener("scroll",function(){!u&&e.original&&Math.abs(t-(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0))>k.scrollOffset&&setTimeout(l,150)});window.addEventListener("resize",l);var r={open:q,close:l,toggle:w,update:function(){var b=
0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};b.background&&(y.style.background=b.background);b.container&&b.container instanceof Object&&(b.container=a({},k.container,b.container));if(b.template){var d=h(b.template)?b.template:document.querySelector(b.template);b.template=d}k=a({},k,b);p.forEach(function(a){a.dispatchEvent(m("-img:update",{detail:{zoom:r}}))});return r},clone:function(){return A(a({},k,0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}))},attach:x,detach:function(){for(var a=
arguments.length,d=Array(a),g=0;g<a;g++)d[g]=arguments[g];e.zoomed&&l();var f=0<d.length?d.reduce(function(a,d){return[].concat(a,b(d))},[]):p;f.forEach(function(a){a.classList.remove("img__zoom");a.dispatchEvent(m("-img:detach",{detail:{zoom:r}}))});p=p.filter(function(a){return-1===f.indexOf(a)});return r},on:function(a,b){var d=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};p.forEach(function(e){e.addEventListener("-img:"+a,b,d)});v.push({type:"-img:"+a,listener:b,options:d});return r},
off:function(a,b){var d=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};p.forEach(function(e){e.removeEventListener("-img:"+a,b,d)});v=v.filter(function(d){return!(d.type==="-img:"+a&&d.listener.toString()===b.toString())});return r},getOptions:function(){return k},getImages:function(){return p},getZoomedImage:function(){return e.original}};return r}});
(function(){if("undefined"!==typeof window&&window.addEventListener){var a=Object.create(null),f,h=function(){clearTimeout(f);f=setTimeout(m,100)},b=function(){},d=function(){window.addEventListener("resize",h,!1);window.addEventListener("orientationchange",h,!1);if(window.MutationObserver){var a=new MutationObserver(h);a.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0});b=function(){try{a.disconnect(),window.removeEventListener("resize",h,!1),window.removeEventListener("orientationchange",
h,!1)}catch(A){}}}else document.documentElement.addEventListener("DOMSubtreeModified",h,!1),b=function(){document.documentElement.removeEventListener("DOMSubtreeModified",h,!1);window.removeEventListener("resize",h,!1);window.removeEventListener("orientationchange",h,!1)}},g=function(a){function b(a){if(void 0!==a.protocol)var b=a;else b=document.createElement("a"),b.href=a;return b.protocol.replace(/:/g,"")+b.host}if(window.XMLHttpRequest){var c=new XMLHttpRequest;var d=b(location);a=b(a);c=void 0===
c.withCredentials&&""!==a&&a!==d?XDomainRequest||void 0:XMLHttpRequest}return c};var m=function(){function c(){--w;0===w&&(b(),d())}function f(b){return function(){!0!==a[b.base]&&(b.useEl.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#"+b.hash),b.useEl.hasAttribute("href")&&b.useEl.setAttribute("href","#"+b.hash))}}function h(a){return function(){var b=document.body,d=document.createElement("x");a.onload=null;d.innerHTML=a.responseText;if(d=d.getElementsByTagName("svg")[0])d.setAttribute("aria-hidden",
"true"),d.style.position="absolute",d.style.width=0,d.style.height=0,d.style.overflow="hidden",b.insertBefore(d,b.firstChild);c()}}function m(a){return function(){a.onerror=null;a.ontimeout=null;c()}}var q,l,w=0;b();var p=document.getElementsByTagName("use");for(l=0;l<p.length;l+=1){try{var v=p[l].getBoundingClientRect()}catch(e){v=!1}var u=(q=p[l].getAttribute("href")||p[l].getAttributeNS("http://www.w3.org/1999/xlink","href")||p[l].getAttribute("xlink:href"))&&q.split?q.split("#"):["",""];var t=
u[0];u=u[1];var k=v&&0===v.left&&0===v.right&&0===v.top&&0===v.bottom;v&&0===v.width&&0===v.height&&!k?(p[l].hasAttribute("href")&&p[l].setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",q),t.length&&(q=a[t],!0!==q&&setTimeout(f({useEl:p[l],base:t,hash:u}),0),void 0===q&&(u=g(t),void 0!==u&&(q=new u,a[t]=q,q.onload=h(q),q.onerror=m(q),q.ontimeout=m(q),q.open("GET",t),q.send(),w+=1)))):k?t.length&&a[t]&&setTimeout(f({useEl:p[l],base:t,hash:u}),0):void 0===a[t]?a[t]=!0:a[t].onload&&(a[t].abort(),
delete a[t].onload,a[t]=!0)}p="";w+=1;c()};var c=function(){window.removeEventListener("load",c,!1);f=setTimeout(m,0)};"complete"!==document.readyState?window.addEventListener("load",c,!1):c()}})();