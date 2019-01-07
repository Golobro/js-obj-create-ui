function $(id){
    return document.getElementById(id);
}

function qs(el){
    return document.querySelector(el);
}

function qa(el){
    return document.querySelectorAll(el);
}

function creaEl(el){
    return document.createElement(el);
}

function renderData(el, template){
    return el.innerHTML = template;
}

function display(el, template){
    if(template === 'show'){
        el.style.display = 'block';
    } else if (template === 'hide') {
        el.style.display = 'none';
    } else if (template === 'visbl'){
        el.style.visibility = 'visible';
    } else if (template === 'hiddn'){
        el.style.visibility = 'hidden';
    }
}

function css(el, css, val){
    if(css === 'padbtm'){
        el.style.paddingBottom = val;
    } else if (css === 'height'){
        el.style.height = val;
    } else if (css === 'bg'){
        el.style.background = val;    
    } else if (css === 'transish'){
        el.style.transition = val;
    }
}