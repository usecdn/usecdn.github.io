function initLoader(){document.body.setAttribute("pending","");document.body.removeAttribute("ready")}function initApp(){document.body.removeAttribute("pending");document.body.setAttribute("ready","")}window.parent.frames[0]!=window.self&&initLoader();document.addEventListener("readystatechange",function(k){try{"interactive"===k.target.readyState?initLoader():"complete"===k.target.readyState&&initApp()}catch(u){throw new SyntaxError("The page not be loaded");}});
window.addEventListener("beforeunload",initLoader);
var components=function(){function k(b){for(var c=window.location.search.substring(1).split("&"),a=0;a<c.length;a++){var d=c[a].split("=");if(d[0]==b)return d[1]}return!1}function u(){var b=window.location.protocol+"//"+window.location.host+window.location.pathname,c=window.location.hash,a=d.title,h=k("states"),e=k("source"),m=k("site");if("reload"===h)try{"reload"===h&&m?h&&(w.classList.remove("js"),setTimeout(function(){return window.location.reload(!0)},500),history.replaceState(null,a,b+"?site="+
m+"&m=0")):(w.classList.remove("js"),setTimeout(function(){return window.location.reload(!0)},500),history.replaceState(null,a,b))}catch(B){throw new SyntaxError("An error occurred not found the param states=reload");}if(m){var p=d.querySelector(".preview__site");if("undefined"!=typeof p&&null!=p)try{h=function(){history.go(-1);setTimeout(function(){return window.location.reload(!0)},500)},d.querySelector(".tap__back").addEventListener("click",h,!1),m?setTimeout(function(){p.setAttribute("src",m)},
500):h()}catch(B){throw new SyntaxError("An error occurred not found the .preview__site element");}}if(e)try{history.replaceState(null,a,b)}catch(B){throw new SyntaxError("An error occurred not found the param source");}if(c)try{var r=c.replace("#",""),v=d.querySelector("#"+r),D=new SmoothScroll;setTimeout(function(){return D.animateScroll(v)},1E3)}catch(B){throw new SyntaxError("An error occurred not found the hash section");}}function x(){function b(){w.classList.add("dark");d.setAttribute("content",
"#131916");localStorage.setItem("theme","dark")}function c(){w.classList.remove("dark");d.setAttribute("content","#ffffff");localStorage.removeItem("theme")}var a=localStorage.getItem("theme"),d=document.querySelector('meta[name="theme-color"]'),e=window.matchMedia("(prefers-color-scheme: dark)");try{switch(a){case "dark":b();break;default:c()}}catch(m){throw new SyntaxError("There was a problem reading local data");}e.addListener(function(a){a.matches?setTimeout(function(){return b()},0):setTimeout(function(){return c()},
0)})}function q(b){if("none"===b.style.display)return!1;b=b.getBoundingClientRect();return 0<=b.top&&0<=b.left&&b.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&b.right<=(window.innerWidth||document.documentElement.clientWidth)}function f(b,c){c=Object.assign({},{top:2,bottom:3,addIds:!0,addLinks:!0,listType:"u",filter:!1},c);for(var a=document.getElementById(b.replace(/#/g,"")),d=[],e=c.top;e<=c.bottom;e++)d.push("h"+e);d=document.querySelectorAll(d.join(","));d=c.filter?Array.prototype.slice.call(d).filter(function(a){return!a.matches(c.filter)}):
Array.prototype.slice.call(d);if(c.addIds){var m=[];d.forEach(function(a){if(a.id)return m.push(a.id);for(var b=a.textContent.replace(/[^A-Z,a-z]/g,"").toLowerCase();-1!==m.indexOf(b);)b+="z";m.push(b);a.id=b})}var p=c.top,r="<"+c.listType+'l class="toc__nav_list">';d.forEach(function(a){var b=parseInt(a.tagName.replace(/[a-z,A-Z]/g,"")),d='<li class="toc__nav_item" data-level="'+b+'">';c.addLinks&&(d+='<button aria-label="'+a.textContent+'" class="toc__nav_link" data-section="#'+a.id+'">');d+=a.textContent;
c.addLinks&&(d+="</button>");a=d+"</li>";r=b===p?r+a:b<p?r+(("</"+c.listType+"l>").repeat(p-b)+a):r+('<li class="toc__nav_item"><'+c.listType+'l class="toc__nav_list">'+a);p=b});a.insertAdjacentHTML("beforeend",r)}function C(){var b=d.querySelector(".article");if("undefined"!=typeof b&&null!=b)try{var c=b.querySelectorAll(".share[data-href]");Array.prototype.forEach.call(c,function(a){var b=a.getAttribute("data-href"),d=window.btoa(b);a.addEventListener("click",function(){sessionStorage.setItem("session",
d)});a.setAttribute("href","./redirect.html?m=0")})}catch(e){throw new SyntaxError("An error occurred not found the .share[data-href] element");}b=d.querySelector(".toc");if("undefined"!=typeof b&&null!=b)try{var a=d.createElement("nav"),h=d.createElement("span");a.setAttribute("aria-labelledby","article__navigation");a.setAttribute("class","toc__nav");a.setAttribute("id","toc__nav");b.innerHTML="";b.appendChild(a);h.setAttribute("class","toc__nav_title");h.setAttribute("id","article__navigation");
h.innerHTML="Contents";a.appendChild(h);f("#toc__nav",{addIds:!0,addLinks:!0,top:2,bottom:3,listType:"u",filter:"[data-ignore]"});b.setAttribute("aria-hidden","false");b.setAttribute("toc","")}catch(e){throw new SyntaxError("An error occurred not found the .toc element");}a=d.querySelectorAll(".toc__nav_link");if("undefined"!=typeof a&&null!=a)try{Array.prototype.forEach.call(a,function(a){a.getAttribute("data-section");a.addEventListener("click",function(){var b=new SmoothScroll,c=a.getAttribute("data-section");
c=d.querySelector(c);b.animateScroll(c,c,{ignore:"[data-ignore]",header:".header",topOnEmptyHash:!0,speed:300,speedAsDuration:!0,durationMax:null,durationMin:null,clip:!0,updateURL:!1,popstate:!1,emitEvents:!0});setTimeout(function(){l.setAttribute("header","");l.setAttribute("scroll","")},1E3)},!1)})}catch(e){throw new SyntaxError("An error occurred not found the .toc__nav_link element");}a=d.querySelectorAll(".copy__btn");if("undefined"!=typeof a&&null!=a)try{Array.prototype.forEach.call(a,function(a){a.remove()})}catch(e){throw new SyntaxError("An error occurred not found the .copy__btn element");
}a=d.querySelectorAll(".copy");if("undefined"!=typeof a&&null!=a)try{"undefined"===typeof window.orientation&&Array.prototype.forEach.call(a,function(a){function b(){a.removeAttribute("disabled");a.removeAttribute("focus")}var c=a.getAttribute("id"),e=d.createElement("button"),h=window.location.protocol+"//"+window.location.host+window.location.pathname+"#"+c;e.setAttribute("aria-label","Copy link");e.setAttribute("class","copy__btn");e.setAttribute("title","Copy link to this section");e.setAttribute("role",
"button");a.appendChild(e);e.addEventListener("click",function(){navigator.clipboard.writeText(h);try{document.execCommand("copy"),a.setAttribute("focus",""),setTimeout(function(){return b()},2E3)}catch(D){a.setAttribute("disabled",""),setTimeout(function(){return b()},2E3)}},!1)})}catch(e){throw new SyntaxError("An error occurred not found the .copy element");}a=d.querySelectorAll(".moreless__more");if("undefined"!=typeof a&&null!=a)try{Array.prototype.forEach.call(a,function(a){a.remove()})}catch(e){throw new SyntaxError("An error occurred not found the .moreless__more element");
}a=d.querySelectorAll(".moreless__less");if("undefined"!=typeof a&&null!=a)try{Array.prototype.forEach.call(a,function(a){a.remove()})}catch(e){throw new SyntaxError("An error occurred not found the .moreless__less element");}a=d.querySelectorAll(".moreless");if("undefined"!=typeof a&&null!=a)try{Array.prototype.forEach.call(a,function(a){var b=d.createElement("span"),c=d.createElement("span");b.setAttribute("class","moreless__more");b.innerHTML="See more";a.appendChild(b);c.setAttribute("class",
"moreless__less");c.innerHTML="See less";a.appendChild(c);a.setAttribute("aria-expanded","false");b.addEventListener("click",function(){a.setAttribute("more","");a.setAttribute("aria-expanded","true")},!1);c.addEventListener("click",function(){a.removeAttribute("more");a.setAttribute("aria-expanded","false")},!1)})}catch(e){throw new SyntaxError("An error occurred not found the .moreless element");}a=d.querySelectorAll(".nextprev__link");if("undefined"!=typeof a&&null!=a)try{Array.prototype.forEach.call(a,
function(a){var b=a.getAttribute("href"),c=d.createElement("strong"),e=new XMLHttpRequest;e.open("GET",b,!0);e.send();c.setAttribute("class","nextprev__article_subtitle");c.innerHTML="&#8226; &#8226; &#8226;";b=a.querySelector(".nextprev__article_subtitle");if("undefined"!=typeof b&&null!=b)try{b.remove()}catch(v){throw new SyntaxError("An error occurred not found the .nextprev__article_subtitle element");}a.appendChild(c);window.addEventListener("scroll",function(){q(a)&&setTimeout(function(){if(200===
e.status){var a=e.response;a=(new DOMParser).parseFromString(a,"text/html").querySelector("title").innerHTML;c.innerHTML=a.replace(" \u2014 Rizky Saskia Putra","")}else c.innerHTML="&#8226; &#8226; &#8226;"},200)})})}catch(e){throw new SyntaxError("An error occurred not found the .nextprev__link element");}}function t(){var b=d.querySelector(".header");if("undefined"!=typeof b&&null!=b)try{new SmoothScroll('a[href*="#"]',{ignore:"[data-ignore]",header:".header",topOnEmptyHash:!0,speed:300,speedAsDuration:!0,
durationMax:null,durationMin:null,clip:!0,updateURL:!1,popstate:!1,emitEvents:!0});var c=56;window.addEventListener("scroll",function(){l.getBoundingClientRect().top>c?l.removeAttribute("header"):l.setAttribute("header","");window.pageYOffset>b.offsetTop?l.setAttribute("scroll",""):(l.removeAttribute("header"),l.removeAttribute("scroll"));c=l.getBoundingClientRect().top})}catch(a){throw new SyntaxError("An error occurred not found the .header element");}}function g(){var b=d.querySelectorAll("amp-img");
if("undefined"!=typeof b&&null!=b)try{Array.prototype.forEach.call(b,function(b){var a=d.createElement("img"),c=b.parentNode;a.setAttribute("alt",b.getAttribute("alt"));a.setAttribute("class","img");a.setAttribute("data-src",b.getAttribute("src"));a.setAttribute("height",b.getAttribute("height"));"loading"in HTMLImageElement.prototype&&a.setAttribute("loading","lazy");a.setAttribute("src",b.getAttribute("data-src"));a.setAttribute("role","presentation");a.setAttribute("width",b.getAttribute("width"));
c.insertBefore(a,b);b.remove()})}catch(c){throw new SyntaxError("An error occurred not found the amp-img element");}b=d.querySelector(".img");if("undefined"!=typeof b&&null!=b)try{setTimeout(function(){var b=new Leniwiec(".img",{root:null,rootMargin:"112px",threshold:1,errorClassName:"img__error",loadedClassName:"img__loaded",onError:function(a){a.setAttribute("alt","Failed to load image, try to refresh this page");window.location.reload(!0)}});d.querySelector(".img__load_all")&&b.loadAll()},500)}catch(c){throw new SyntaxError("An error occurred not found the .img element");
}b=d.querySelectorAll('img[role="presentation"]');if("undefined"!=typeof b&&null!=b)try{Array.prototype.forEach.call(b,function(b){mediumZoom(b)})}catch(c){throw new SyntaxError('An error occurred not found the .img[role="presentation"] element');}}function y(){var b=d.querySelector(".header__search");if("undefined"!=typeof b&&null!=b)try{var c=function(){l.removeAttribute("search");b.setAttribute("aria-hidden","true");a.blur();n.removeAttribute("visible");n.removeAttribute("for-search")},a=d.querySelector(".header__search_input");
d.querySelector(".tap__search").addEventListener("click",function(){l.setAttribute("search","");b.setAttribute("aria-hidden","false");a.focus();n.setAttribute("visible","");n.setAttribute("for-search","");n.addEventListener("click",c,!1);window.addEventListener("scroll",c)},!1)}catch(h){throw new SyntaxError("An error occurred not found the .header__search element");}}function z(){var b=d.querySelector(".tap__subscribe");if("undefined"!=typeof b&&null!=b)try{var c=function(){a.remove();l.removeAttribute("subscribe");
n.removeAttribute("visible");n.removeAttribute("for-subscribe")},a=d.createElement("div");a.setAttribute("aria-labelledby","subscribe__title");a.setAttribute("aria-describedby","subscribe__subtitle");a.setAttribute("class","subscribe");a.setAttribute("role","alertdialog");a.innerHTML='<div class="subscribe__row" role="document" tabindex="0"><div class="subscribe__row_start"><h4 class="subscribe__title" id="subscribe__title">Subscribe to the Newsletter</h4><p class="subscribe__subtitle" id="subscribe__subtitle">Get the latest and greatest from Rizky Saskia Putra delivered straight to your inbox.</p></div><div class="subscribe__row_center"><form aria-label="Subscribe" action="https://feedburner.google.com/fb/a/mailverify?uri=rizkysaskiaputra" class="subscribe__form" method="post"><label for="email"><input aria-hidden="true" name="uri" type="hidden" value="rizkysaskiaputra"/><input aria-hidden="true" name="loc" type="hidden" value="en_US"/><input class="subscribe__form_input" id="email" name="email" placeholder="Enter your email address" type="email"/></label><button class="subscribe__form_submit" title="Subscribe" type="submit">Subscribe</button></form></div><div class="subscribe__row_end"><p class="subscribe__licence">*Mail delivered by <a href="https://feedburner.google.com/" rel="noopener" target="_blank"><span>Google Feedburner</span></a>.</p></div></div>';
b.addEventListener("click",function(){var b=d.querySelector(".subscribe");"undefined"!=typeof b&&null!=b&&b.remove();A.appendChild(a);l.setAttribute("subscribe","");n.setAttribute("visible","");n.setAttribute("for-subscribe","");n.addEventListener("click",c,!1);window.addEventListener("scroll",c)},!1)}catch(h){throw new SyntaxError("An error occurred not found the .tap__subscribe element");}}var d=document,l=d.getElementsByTagName("body")[0];d.getElementsByTagName("head");var w=d.documentElement,
n=d.querySelector(".ui__mask"),A=d.querySelector(".ui__bg");return function(){if("function"===typeof window.history.pushState){u();x();var b=d.querySelector("[data-page]");if("undefined"!=typeof b&&null!=b)try{var c=b.getAttribute("data-page");l.setAttribute("data-layout",c);l.removeAttribute("error");if("share"===c){var a=sessionStorage.getItem("session"),h=window.atob(a);a?(window.location.href=h,sessionStorage.removeItem("session")):window.location.href="https://rizkysaskiaputra.blogspot.com/?source=redirect&code=null"}}catch(e){throw new SyntaxError("An error occurred not found the [data-page] element");
}b=d.querySelector(".error");if("undefined"!=typeof b&&null!=b)try{l.setAttribute("error","")}catch(e){throw new SyntaxError("An error occurred not found the .error element");}C();t();g();y();z()}}}();document.addEventListener("DOMContentLoaded",components);
var saskia=function(){function k(t){return t.origin===location.origin}function u(t,g,f,k){k?history.pushState(t||{},f,g):history.replaceState(t||{},f,g)}function x(){return{title:"Ooops. Something went wrong \u2014 Rizky Saskia Putra",content:'<div aria-atomic="true" aria-live="assertive" aria-modal="true" class="error" role="alertdialog"><strong class="error__title">Error</strong><h1 class="error__code">505</h1><p class="error__subtitle">Ooops. Something went wrong.</p></div><div data-page="article"></div>',code:500,
timestamp:new Date}}function q(f){requestAnimationFrame(function(){var g;(g=f in document.anchors?document.anchors[f]:document.getElementById(g))&&g.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})})}function f(){}function C(f){return"/"+f.pathname.replace(/\/+/g,"/").replace(/^\/|\/$/g,"")+f.search}return function(t,g){function y(a,b,c){u(null,a,b.title,c);w(b,a);var e=m;document.title=b.title;e.innerHTML=b.content;d(b);c&&1<a.hash.length&&q(a.hash.slice(1))}function z(c,d){var f=
A(c);if(f in v){var g=v[f];if(!0!==a(g)){y(c,g,d);return}}u(null,c,c,d);var k=++h;fetch(c).then(function(a){return a.text().then(function(b){return{res:a,text:b}})})["finally"](function(){e=!1}).then(function(a){var b=a.res,d=a.text,e=document.createDocumentFragment();a=document.createElement("html");e.appendChild(a);a.innerHTML=d;d=a.querySelector("title").textContent;a=a.querySelector(t);a={title:d,content:a?a.innerHTML:""};v[f]=a;a.status=b.status;a.timestamp=new Date;k===h&&y(c,a,!1)})["catch"](function(a){if(k===
h){var d=b(a);y(c,d,!1)}throw a;})["catch"](n);e=!0;l(c)}if("function"===typeof window.history.pushState){g=g||{};var d=g.onReady||f,l=g.onLoading||f,w=g.onMounting||f,n=g.onError||console.error.bind(console),A=g.keyFromUrl||C,b=g.fromError||x,c=g.shouldServe||k,a=g.shouldReload||f,h=0,e=!1,m=document.querySelector(t);if(!m)throw Error('Element "'+t+'" not found');var p=new URL(document.location),r={title:document.title||"",content:m.innerHTML||"",status:200,timestamp:new Date},v={};v[A(p)]=r;u({scroll:window.scrollY},
p,r.title,!1);document.body.addEventListener("click",function(a){if("A"===a.target.nodeName){a.preventDefault();var b=new URL(a.target.href||document.location);c(b,a.target)&&z(b,!e)}});window.addEventListener("popstate",function(a){z(new URL(document.location),!1)})}}}();
document.addEventListener("DOMContentLoaded",function(){var k=document.getElementById("main");if("undefined"!=typeof k&&null!=k)try{var u=function(){q.setAttribute("aria-hidden","true");q.removeAttribute("loading");setTimeout(function(){q.innerHTML=""},500)},x=function(f){q.innerHTML='<div class="progress__primary_bar"><div class="progress__primary_bar_inner"></div></div><div class="progress__secondary_bar"><div class="progress__secondary_bar_inner"></div></div>';q.setAttribute("aria-hidden","false");
q.setAttribute("loading","")};quicklink.listen({el:k,timeout:2E3,ignores:[/\/api\/?/,function(f){return f.includes(".zip")},function(f){return f.includes("#")},function(f,k){return k.hasAttribute("noprefetch")}]});"scrollRestoration"in history&&(history.scrollRestoration="auto");var q=document.querySelector(".progress");q.setAttribute("type","indeterminate");new saskia("#main",{onLoading:function(f){x()},onReady:function(f){components();window.scrollTo(0,0);setTimeout(function(){return u()},2500)}});
window.addEventListener("beforeunload",x)}catch(f){throw new SyntaxError("The error occurred was not found element");}});