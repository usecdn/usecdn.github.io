function initLoader(){document.documentElement.classList.add("js-loading");document.body.setAttribute("pending","");document.body.removeAttribute("ready")}function initApp(){document.documentElement.classList.add("js");document.documentElement.classList.remove("js-loading");document.body.removeAttribute("pending");document.body.setAttribute("ready","")}window.parent.frames[0]!=window.self&&initLoader();
document.addEventListener("readystatechange",function(h){"interactive"===h.target.readyState?initLoader():"complete"===h.target.readyState&&initApp()});
var components=function(){function h(b){for(var c=window.location.search.substring(1).split("&"),d=0;d<c.length;d++){var e=c[d].split("=");if(e[0]==b)return e[1]}return!1}function n(b){b.preventDefault()}function t(){var b=window.location.protocol+"//"+window.location.host+window.location.pathname,c=d.title,e=h("states"),a=h("source");"reload"===e&&(setTimeout(function(){return window.location.reload(!0)},500),history.replaceState(null,c,b));a&&history.replaceState(null,c,b)}function u(){var b=d.querySelector('meta[name="theme-color"]'),
c=d.querySelector('[data-rsp="switch__theme"]'),e=localStorage.getItem("theme"),a=sessionStorage.getItem("theme"),g=h("theme");if("undefined"!=typeof c&&null!=c)try{var f=function(){0==c.checked&&(k.classList.remove("dark"),b.setAttribute("content","#ffffff"),localStorage.removeItem("theme"),sessionStorage.removeItem("theme"))},l=function(){1==c.checked&&(k.classList.add("dark"),b.setAttribute("content","#000000"),localStorage.setItem("theme","dark"),sessionStorage.setItem("theme","dark"))};c.addEventListener("click",
l,!1);c.addEventListener("click",f,!1);c.addEventListener("contextmenu",n,!1);switch(e){case "dark":l();c.checked=!0;break;default:f(),c.checked=!1}switch(a){case "dark":l();c.checked=!0;break;default:f(),c.checked=!1}"dark"===g&&(k.classList.add("dark"),b.setAttribute("content","#000000"),localStorage.setItem("theme","dark"),sessionStorage.setItem("theme","dark"),c.checked=!0);"light"===g&&(k.classList.remove("dark"),b.setAttribute("content","#ffffff"),localStorage.removeItem("theme"),sessionStorage.removeItem("theme"),
c.checked=!1);setTimeout(function(){"dark"===k.getAttribute("class")&&(k.classList.add("dark"),b.setAttribute("content","#000000"),localStorage.setItem("theme","dark"),sessionStorage.setItem("theme","dark"),c.checked=!0)},1E3)}catch(p){throw new SyntaxError("The error occurred was not found element");}}function m(){var b=d.querySelector(".header");if("undefined"!=typeof b&&null!=b)try{new SmoothScroll('a[href*="#"]',{ignore:"[data-ignore]",header:".header",topOnEmptyHash:!0,speed:300,speedAsDuration:!0,
durationMax:null,durationMin:null,clip:!0,updateURL:!1,popstate:!1,emitEvents:!0});var c=56;window.addEventListener("scroll",function(){e.getBoundingClientRect().top>c?e.removeAttribute("header"):e.setAttribute("header","");window.pageYOffset>b.offsetTop?e.setAttribute("scroll",""):(e.removeAttribute("header"),e.removeAttribute("scroll"));c=e.getBoundingClientRect().top})}catch(r){throw new SyntaxError("The error occurred was not found element");}}function v(){var b=d.querySelector(".img");"undefined"!=
typeof b&&null!=b&&(b=new Leniwiec(".img",{root:null,rootMargin:"0px",threshold:1,errorClassName:"is-error",loadedClassName:"is-loaded",onLoad:function(b,d){b.classList.remove("res")}}),d.querySelector(".load__all_img")&&b.loadAll())}function g(){var b=d.querySelector(".header__search");if("undefined"!=typeof b&&null!=b){var c=function(){e.removeAttribute("search");b.setAttribute("aria-hidden","true");a.blur();f.removeAttribute("visible");f.removeAttribute("for-search")},a=d.querySelector(".header__search_input");
d.querySelector(".tap__search").addEventListener("click",function(){e.setAttribute("search","");b.setAttribute("aria-hidden","false");a.focus();f.setAttribute("visible","");f.setAttribute("for-search","");f.addEventListener("click",c,!1);window.addEventListener("scroll",c)},!1)}}function a(){var b=d.querySelector(".tap__subscribe");if("undefined"!=typeof b&&null!=b){var c=function(){a.remove();e.removeAttribute("subscribe");f.removeAttribute("visible");f.removeAttribute("for-subscribe")},a=d.createElement("div");
a.setAttribute("aria-labelledby","subscribe__title");a.setAttribute("aria-describedby","subscribe__subtitle");a.setAttribute("class","subscribe");a.setAttribute("role","dialog");a.innerHTML='<div class="subscribe__row"><div class="subscribe__row_start"><h4 class="subscribe__title" id="subscribe__title">Subscribe to the Newsletter</h4><p class="subscribe__subtitle" id="subscribe__subtitle">Get the latest and greatest from Rizky Saskia Putra delivered straight to your inbox.</p></div><div class="subscribe__row_center"><form aria-label="Subscribe" action="https://feedburner.google.com/fb/a/mailverify?uri=rizkysaskiaputra" class="subscribe__form" method="post"><label for="email"><input aria-hidden="true" name="uri" type="hidden" value="rizkysaskiaputra"/><input aria-hidden="true" name="loc" type="hidden" value="en_US"/><input class="subscribe__form_input" id="email" name="email" placeholder="Enter your email address" type="email"/></label><button class="subscribe__form_submit" title="Subscribe" type="submit">Subscribe</button></form></div><div class="subscribe__row_end"><p class="subscribe__licence">*Mail delivered by <a href="https://feedburner.google.com/" rel="noopener" target="_blank"><span>Google Feedburner</span></a>.</p></div></div>';
b.addEventListener("click",function(){var b=d.querySelector(".subscribe");"undefined"!=typeof b&&null!=b&&b.remove();e.appendChild(a);e.setAttribute("subscribe","");f.setAttribute("visible","");f.setAttribute("for-subscribe","");f.addEventListener("click",c,!1);window.addEventListener("scroll",c)},!1)}}var d=document,e=d.getElementsByTagName("body")[0];d.getElementsByTagName("head");var k=d.documentElement,f=d.querySelector(".sitemask");return function(){if("function"===typeof window.history.pushState){t();
u();var b=d.querySelector("[data-page]");"undefined"!=typeof b&&null!=b&&(b=b.getAttribute("data-page"),e.setAttribute("data-layout",b),e.removeAttribute("error"));b=d.querySelector(".error");"undefined"!=typeof b&&null!=b&&e.setAttribute("error","");m();v();g();a()}}}();document.addEventListener("DOMContentLoaded",components);
var saskia=function(){function h(g){return g.origin===location.origin}function n(g,a,d,e){e?history.pushState(g||{},d,a):history.replaceState(g||{},d,a)}function t(){return{title:"Ooops. Something went wrong \u2014 Rizky Saskia Putra",content:'<div aria-atomic="true" aria-live="assertive" aria-modal="true" class="error" role="alertdialog"><strong class="error__title">Error</strong><h1 class="error__code">505</h1><p class="error__subtitle">Ooops. Something went wrong.</p></div><div data-page="article"></div>',
code:500,timestamp:new Date}}function u(g){requestAnimationFrame(function(){var a;(a=g in document.anchors?document.anchors[g]:document.getElementById(a))&&a.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})})}function m(){}function v(g){return"/"+g.pathname.replace(/\/+/g,"/").replace(/^\/|\/$/g,"")+g.search}return function(g,a){function d(a,c,d){n(null,a,c.title,d);b(c,a);var e=w;document.title=c.title;e.innerHTML=c.content;k(c);d&&1<a.hash.length&&u(a.hash.slice(1))}function e(b,
a){var e=r(b);if(e in q){var h=q[e];if(!0!==B(h)){d(b,h,a);return}}n(null,b,b,a);var k=++l;fetch(b).then(function(b){return b.text().then(function(a){return{res:b,text:a}})})["finally"](function(){p=!1}).then(function(a){var c=a.res,f=a.text,h=document.createDocumentFragment();a=document.createElement("html");h.appendChild(a);a.innerHTML=f;f=a.querySelector("title").textContent;a=a.querySelector(g);a={title:f,content:a?a.innerHTML:""};q[e]=a;a.status=c.status;a.timestamp=new Date;k===l&&d(b,a,!1)})["catch"](function(a){if(k===
l){var c=z(a);d(b,c,!1)}throw a;})["catch"](c);p=!0;f(b)}if("function"===typeof window.history.pushState){a=a||{};var k=a.onReady||m,f=a.onLoading||m,b=a.onMounting||m,c=a.onError||console.error.bind(console),r=a.keyFromUrl||v,z=a.fromError||t,A=a.shouldServe||h,B=a.shouldReload||m,l=0,p=!1,w=document.querySelector(g);if(!w)throw Error('Element "'+g+'" not found');var x=new URL(document.location),y={title:document.title||"",content:w.innerHTML||"",status:200,timestamp:new Date},q={};q[r(x)]=y;n({scroll:window.scrollY},
x,y.title,!1);document.body.addEventListener("click",function(a){if("A"===a.target.nodeName){a.preventDefault();var b=new URL(a.target.href||document.location);A(b,a.target)&&e(b,!p)}});window.addEventListener("popstate",function(a){e(new URL(document.location),!1);requestAnimationFrame(function(){window.scrollTo(0,a.state.scroll||0)})})}}}(),main=document.getElementById("main");
if("undefined"!=typeof main&&null!=main)var server=new saskia("#main",{onReady:function(h){components();window.scrollTo(0,0)}});