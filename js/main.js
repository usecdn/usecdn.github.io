function initLoader(){document.documentElement.classList.add("js-loading");document.body.setAttribute("pending","");document.body.removeAttribute("ready")}function initApp(){document.documentElement.classList.add("js");document.documentElement.classList.remove("js-loading");document.body.removeAttribute("pending");document.body.setAttribute("ready","")}window.parent.frames[0]!=window.self&&initLoader();
document.addEventListener("readystatechange",function(f){"interactive"===f.target.readyState?initLoader():"complete"===f.target.readyState&&initApp()});
var components=function(){function f(b){for(var a=window.location.search.substring(1).split("&"),c=0;c<a.length;c++){var d=a[c].split("=");if(d[0]==b)return d[1]}return!1}function h(b){b.preventDefault()}function k(){var b=window.location.protocol+"//"+window.location.host+window.location.pathname,a=c.title;"reload"===f("states")&&(setTimeout(function(){return window.location.reload(!0)},500),history.replaceState(null,a,b))}function p(){var b=c.querySelector('meta[name="theme-color"]'),a=c.querySelector('[data-rsp="switch__theme"]'),
e=localStorage.getItem("theme"),k=sessionStorage.getItem("theme"),m=f("theme");if("undefined"!=typeof a&&null!=a)try{var g=function(){0==a.checked&&(d.classList.remove("dark"),b.setAttribute("content","#ffffff"),localStorage.removeItem("theme"),sessionStorage.removeItem("theme"))},l=function(){1==a.checked&&(d.classList.add("dark"),b.setAttribute("content","#000000"),localStorage.setItem("theme","dark"),sessionStorage.setItem("theme","dark"))};a.addEventListener("click",l,!1);a.addEventListener("click",
g,!1);a.addEventListener("contextmenu",h,!1);switch(e){case "dark":l();a.checked=!0;break;default:g(),a.checked=!1}switch(k){case "dark":l();a.checked=!0;break;default:g(),a.checked=!1}"dark"===m&&(d.classList.add("dark"),b.setAttribute("content","#000000"),localStorage.setItem("theme","dark"),sessionStorage.setItem("theme","dark"),a.checked=!0);"light"===m&&(d.classList.remove("dark"),b.setAttribute("content","#ffffff"),localStorage.removeItem("theme"),sessionStorage.removeItem("theme"),a.checked=
!1);setTimeout(function(){"dark"===d.getAttribute("class")&&(d.classList.add("dark"),b.setAttribute("content","#000000"),localStorage.setItem("theme","dark"),sessionStorage.setItem("theme","dark"),a.checked=!0)},1E3)}catch(w){throw new SyntaxError("The error occurred was not found element");}}function e(){var b=c.querySelector(".header");if("undefined"!=typeof b&&null!=b)try{new SmoothScroll('a[href*="#"]',{ignore:"[data-ignore]",header:".header",topOnEmptyHash:!0,speed:300,speedAsDuration:!0,durationMax:null,
durationMin:null,clip:!0,updateURL:!1,popstate:!1,emitEvents:!0});var d=56;window.addEventListener("scroll",function(){a.getBoundingClientRect().top>d?a.removeAttribute("header"):a.setAttribute("header","");window.pageYOffset>b.offsetTop?a.setAttribute("scroll",""):(a.removeAttribute("header"),a.removeAttribute("scroll"));d=a.getBoundingClientRect().top})}catch(v){throw new SyntaxError("The error occurred was not found element");}}function q(){var a=c.querySelector(".img");"undefined"!=typeof a&&
null!=a&&(a=new Leniwiec(".img",{root:null,rootMargin:"0px",threshold:1,errorClassName:"is-error",loadedClassName:"is-loaded",onLoad:function(a,c){a.classList.remove("res")}}),c.querySelector(".load__all_img")&&a.loadAll())}var c=document,a=c.getElementsByTagName("body")[0];c.getElementsByTagName("head");var d=c.documentElement;c.querySelector(".sitemask");return function(){if("function"===typeof window.history.pushState){k();p();var b=c.querySelector("[data-page]");"undefined"!=typeof b&&null!=b&&
(b=b.getAttribute("data-page"),a.setAttribute("data-layout",b),a.removeAttribute("error"));b=c.querySelector(".error");"undefined"!=typeof b&&null!=b&&a.setAttribute("error","");e();q()}}}();document.addEventListener("DOMContentLoaded",components);
var saskia=function(){function f(c){return c.origin===location.origin}function h(c,a,d,b){b?history.pushState(c||{},d,a):history.replaceState(c||{},d,a)}function k(){return{title:"Ooops. Something went wrong \u2014 Rizky Saskia Putra",content:'<div aria-atomic="true" aria-live="assertive" aria-modal="true" class="error" role="alertdialog"><strong class="error__title">Error</strong><h1 class="error__code">505</h1><p class="error__subtitle">Ooops. Something went wrong.</p></div><div data-page="article"></div>',code:500,
timestamp:new Date}}function p(c){requestAnimationFrame(function(){var a;(a=c in document.anchors?document.anchors[c]:document.getElementById(a))&&a.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})})}function e(){}function q(c){return"/"+c.pathname.replace(/\/+/g,"/").replace(/^\/|\/$/g,"")+c.search}return function(c,a){function d(a,c,b){h(null,a,c.title,b);B(c,a);var d=r;document.title=c.title;d.innerHTML=c.content;A(c);b&&1<a.hash.length&&p(a.hash.slice(1))}function b(a,b){var f=
g(a);if(f in n){var e=n[f];if(!0!==C(e)){d(a,e,b);return}}h(null,a,a,b);var x=++t;fetch(a).then(function(a){return a.text().then(function(c){return{res:a,text:c}})})["finally"](function(){u=!1}).then(function(b){var e=b.res,g=b.text,h=document.createDocumentFragment();b=document.createElement("html");h.appendChild(b);b.innerHTML=g;g=b.querySelector("title").textContent;b=b.querySelector(c);b={title:g,content:b?b.innerHTML:""};n[f]=b;b.status=e.status;b.timestamp=new Date;x===t&&d(a,b,!1)})["catch"](function(b){if(x===
t){var c=l(b);d(a,c,!1)}throw b;})["catch"](m);u=!0;v(a)}if("function"===typeof window.history.pushState){a=a||{};var A=a.onReady||e,v=a.onLoading||e,B=a.onMounting||e,m=a.onError||console.error.bind(console),g=a.keyFromUrl||q,l=a.fromError||k,w=a.shouldServe||f,C=a.shouldReload||e,t=0,u=!1,r=document.querySelector(c);if(!r)throw Error('Element "'+c+'" not found');var y=new URL(document.location),z={title:document.title||"",content:r.innerHTML||"",status:200,timestamp:new Date},n={};n[g(y)]=z;h({scroll:window.scrollY},
y,z.title,!1);document.body.addEventListener("click",function(a){if("A"===a.target.nodeName){a.preventDefault();window.scrollTo(0,0);var c=new URL(a.target.href||document.location);w(c,a.target)&&b(c,!u)}});window.addEventListener("popstate",function(a){b(new URL(document.location),!1);requestAnimationFrame(function(){window.scrollTo(0,a.state.scroll||0)})})}}}(),main=document.getElementById("main");if("undefined"!=typeof main&&null!=main)var server=new saskia("#main",{onReady:function(f){components()}});
