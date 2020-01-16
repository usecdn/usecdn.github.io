function initLoader(){
    document.documentElement.classList.add('js-loading');
    document.body.setAttribute('pending','');
    document.body.removeAttribute('ready');
};
function initApp(){
    document.documentElement.classList.add('js');
    document.documentElement.classList.remove('js-loading');
    document.body.removeAttribute('pending');
    document.body.setAttribute('ready','');
};
if(window.parent.frames[0] != window.self){initLoader()}
document.addEventListener('readystatechange',event=>{
    if(event.target.readyState==='interactive'){initLoader()}
    else if(event.target.readyState==='complete'){initApp()}
});

const components = (function () {
    let q=document,
    o=0,
    body=q.getElementsByTagName('body')[0],
    head=q.getElementsByTagName('head')[0],
    html=q.documentElement,
    sitemask=q.querySelector('.sitemask'),
    error='The error occurred was not found element';
    function get(variable){let query=window.location.search.substring(1),vars=query.split('&');for(let i=0;i<vars.length;i++){let pair=vars[i].split('=');if(pair[0]==variable){return pair[1]}}return(!1)};
    function context(event){event.preventDefault()};
    function nope(){};
    function options(){
        let link=window.location.protocol+'//'+window.location.host+window.location.pathname,
        headline=q.title,
        states=get('states');
        if(states==='reload'){setTimeout(() => window.location.reload(true),500);history.replaceState(null,headline,link);};
    };
    function theme(){
        let meta=q.querySelector('meta[name="theme-color"]'),
        toggle=q.querySelector('[data-rsp="switch__theme"]'),
        local=localStorage.getItem('theme'),
        session=sessionStorage.getItem('theme'),
        params=get('theme');
        if(typeof(toggle) != 'undefined' && toggle != null){
            try{
                function dark(){
                    if(toggle.checked==!0){
                        html.classList.add('dark');
                        meta.setAttribute('content','#000000');
                        localStorage.setItem('theme','dark');
                        sessionStorage.setItem('theme','dark');
                    }
                };
                function light(){
                    if(toggle.checked==!1){
                        html.classList.remove('dark');
                        meta.setAttribute('content','#ffffff');
                        localStorage.removeItem('theme');
                        sessionStorage.removeItem('theme');
                    }
                };
                toggle.addEventListener('click',dark,false);
                toggle.addEventListener('click',light,false);
                toggle.addEventListener('contextmenu',context,false);
                switch(local){
                    case 'dark':dark();toggle.checked=!0;break;
                    default:light();toggle.checked=!1
                };
                switch(session){
                    case 'dark':dark();toggle.checked=!0;break;
                    default:light();toggle.checked=!1
                };
                if(params==='dark'){
                    html.classList.add('dark');
                    meta.setAttribute('content','#000000');
                    localStorage.setItem('theme','dark');
                    sessionStorage.setItem('theme','dark');
                    toggle.checked=!0
                };
                if(params==='light'){
                    html.classList.remove('dark');
                    meta.setAttribute('content','#ffffff');
                    localStorage.removeItem('theme');
                    sessionStorage.removeItem('theme');
                    toggle.checked=!1
                };
                function darker(){
                    let mode=html.getAttribute('class');
                    if(mode==='dark'){
                        html.classList.add('dark');
                        meta.setAttribute('content','#000000');
                        localStorage.setItem('theme','dark');
                        sessionStorage.setItem('theme','dark');
                        toggle.checked=!0
                    }
                };
                setTimeout(() => darker(), 1000);
            }
            catch(e){throw new SyntaxError(error)}
        }
    };
    function layout(){
        let page=q.querySelector('[data-page]');
        if(typeof(page) != 'undefined' && page != null){
            let type=page.getAttribute('data-page');
            body.setAttribute('data-layout',type);
            body.removeAttribute('error');
        };
        let notfound=q.querySelector('.error');
        if(typeof(notfound) != 'undefined' && notfound != null){
            body.setAttribute('error','');
        };

    };
    function header(){
        let row=q.querySelector('.header');
        if(typeof(row) != 'undefined' && row != null){
            try{
                let smooth=new SmoothScroll('a[href*="#"]',{ignore:'[data-ignore]',header:'.header',topOnEmptyHash:true,speed:300,speedAsDuration:true,durationMax:null,durationMin:null,clip:true,updateURL:false,popstate:false,emitEvents:true});

                let position=56;
                window.addEventListener('scroll',function(){
                    if((body.getBoundingClientRect()).top>position){body.removeAttribute('header')}
                    else{body.setAttribute('header','')};
                    if(window.pageYOffset>row.offsetTop){body.setAttribute('scroll','')}
                    else{body.removeAttribute('header');body.removeAttribute('scroll')}
                    position=(body.getBoundingClientRect()).top;
                });

            }
            catch(e){throw new SyntaxError(error)}
        }
    };
    function image(){
        let images=q.querySelector('.img');
        if(typeof(images) != 'undefined' && images != null){
            const leniwiec=new Leniwiec('.img',{root:null,rootMargin:'0px',threshold:1,errorClassName:'is-error',loadedClassName:'is-loaded',onLoad:(element,src)=>{element.classList.remove('res')}});
            if(q.querySelector('.load__all_img')){
                leniwiec.loadAll()
            }
        }
    };
    function components(){
        if(typeof window.history.pushState !== 'function'){return}
        options();
        theme();
        layout();
        header();
        image();
    };
    return components;
}());

document.addEventListener('DOMContentLoaded',components);

const saskia=(
    function(){
        function shouldServeDefault(href){return href.origin===location.origin}
        function createPage(title,content,status,timestamp){return{title:title||'',content:content||'',status:status||0,timestamp:timestamp||new Date(),}}
        function setContent(root,page){document.title=page.title;root.innerHTML=page.content}
        function fromResponse(selector,response,text){let fragment=document.createDocumentFragment();let fragRoot=document.createElement('html');fragment.appendChild(fragRoot);fragRoot.innerHTML=text;let title=fragRoot.querySelector('title').textContent;let root=fragRoot.querySelector(selector);let content=root?root.innerHTML:'';return{title:title,content:content}}
        function updateState(state,url,title,push){if(push){history.pushState(state||{},title,url)}else{history.replaceState(state||{},title,url)}}
        function defaultErrorHandler(){return{title:'Ooops. Something went wrong — Rizky Saskia Putra',content:'<div aria-atomic="true" aria-live="assertive" aria-modal="true" class="error" role="alertdialog"><strong class="error__title">Error</strong><h1 class="error__code">505</h1><p class="error__subtitle">Ooops. Something went wrong.</p></div><div data-page="article"></div>',code:500,timestamp:new Date(),}}
        function scrollToAnchor(name){requestAnimationFrame(function(){let anchor;if(name in document.anchors){anchor=document.anchors[name]}else{anchor=document.getElementById(anchor)}if(anchor){anchor.scrollIntoView({behavior:'smooth',block:'end',inline:'nearest'})}})}
        function noop(){}
        function normalizePathname(pathname){return'/'+pathname.replace(/\/+/g,'/').replace(/^\/|\/$/g,'')}
        function keyFromUrlDefault(url){return normalizePathname(url.pathname)+url.search}
        function saskia(selector,options){if(typeof window.history.pushState!=='function'){return}options=options||{};let onReady=options.onReady||noop;let onLoading=options.onLoading||noop;let onMounting=options.onMounting||noop;let onError=options.onError||console.error.bind(console);let keyFromUrl=options.keyFromUrl||keyFromUrlDefault;let fromError=options.fromError||defaultErrorHandler;let shouldServe=options.shouldServe||shouldServeDefault;let shouldReload=options.shouldReload||noop;let current=0;let isLoading=!1;let element=document.querySelector(selector);if(!element){throw new Error('Element "'+selector+'" not found')}let currentUrl=new URL(document.location);let currentPage=createPage(document.title,element.innerHTML,200);let cache={};cache[keyFromUrl(currentUrl)]=currentPage;
        function render(url,page,push){updateState(null,url,page.title,push);onMounting(page,url);setContent(element,page);onReady(page);if(push&&url.hash.length>1){scrollToAnchor(url.hash.slice(1))}}updateState({scroll:window.scrollY},currentUrl,currentPage.title,!1);
        function goto(url,push){let cacheKey=keyFromUrl(url);if(cacheKey in cache){let cachedPage=cache[cacheKey];if(shouldReload(cachedPage)!==!0){render(url,cachedPage,push);return}}updateState(null,url,url,push);let requestId=++current;fetch(url).then(function(res){return res.text().then((function(text){return{res:res,text:text,}}))}).finally(function(){isLoading=!1}).then(function(result){let res=result.res;let text=result.text;let page=fromResponse(selector,res,text);cache[cacheKey]=page;page.status=res.status;page.timestamp=new Date();if(requestId!==current){return}render(url,page,!1)}).catch(function(error){if(requestId===current){let page=fromError(error);render(url,page,!1)}throw error}).catch(onError);isLoading=!0;onLoading(url)}
        function onClick(e){if(e.target.nodeName!=='A'){return}e.preventDefault();window.scrollTo(0,0);let url=new URL(e.target.href||document.location);if(!shouldServe(url,e.target)){return}goto(url,!isLoading)}
        function onPopState(e){goto(new URL(document.location),!1);requestAnimationFrame(function(){window.scrollTo(0,e.state.scroll||0)})}
        let scrollDebounceTimeout;
        function onScroll(){if(scrollDebounceTimeout){return}scrollDebounceTimeout=setTimeout(function(){updateState({scroll:window.scrollY},document.location,document.title,!1);scrollDebounceTimeout=null},100)}
        document.body.addEventListener('click',onClick);
        window.addEventListener('popstate',onPopState);
    }
    return saskia
}());

const main=document.getElementById('main');
if(typeof(main) != 'undefined' && main != null){
    let server=new saskia('#main',{
        onReady(page){components()}
    });
}