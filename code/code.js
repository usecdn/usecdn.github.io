function initLoader(){
    document.body.setAttribute('pending','');
    document.body.removeAttribute('ready');
};
function initApp(){
    document.body.removeAttribute('pending');
    document.body.setAttribute('ready','');
};
if(window.parent.frames[0] != window.self){initLoader()}
document.addEventListener('readystatechange',event=>{
    try{
        if(event.target.readyState==='interactive'){initLoader()}
        else if(event.target.readyState==='complete'){initApp()}
    }
    catch(e){throw new SyntaxError('The page not be loaded')}
});
window.addEventListener('beforeunload',initLoader);
function htmlEscape(s) {
    return s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

function code(){
    let input=document.querySelector('.codeprint__input'),
        result=document.querySelector('.codeprint__result'),
        print=document.querySelector('.codeprint__js');
    function update(e){
        let text=htmlEscape(e.target.value);
        text=text.replace(/&lt;script src[\s\S]*?&gt;&lt;\/script&gt;|&lt;!--\?[\s\S]*?--&gt;|&lt;pre\b[\s\S]*?&lt;\/pre&gt;/g,'<span class="operative">$&<\/span>')

        print.innerHTML = text;
        PR.prettyPrint();
        result.innerHTML = print.innerHTML;
    }
    input.addEventListener('input', update);
};

document.addEventListener('DOMContentLoaded',code);