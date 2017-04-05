var layer = {
    //提示框
    msg: msg,
    //弹出层
    confirm: confirm
};
//普通提示层
function msg(msg, cssitem) {
    var cssobj = shellcss(cssitem);
    var vdom = creat('div');
    setCss(vdom, cssobj);
    vdom.innerHTML = msg;
    vdom.setAttribute('class', 'layer-msg');
    document.body.appendChild(vdom);
    show(vdom);
    setTimeout(function() {
        hide(vdom);
    }, 2500);
};

//弹出层 
function confirm(obj) {
    var vdom = creat('div');
    var shadow = creat('div');
    var content = creat('div');

    // 背景
    shadow.setAttribute('style', 'position: fixed;width: 100%;height: 100%;background-color: rgba(0,0,0,.4);transition: all 300ms ease-out;opacity: 0;');
    // 设置class
    vdom.setAttribute('class', 'layer-confirm');
    shadow.setAttribute('class', 'layer-bg');
    content.setAttribute('class', 'layer-confirm-content');
    content.style.color = '#333';
    if (typeof obj.content === 'string') {
    	content.innerHTML = obj.content;
    }else {
    	content.appendChild(obj.content);
    };
    //显示背景
    showShadow(shadow);
    //点击背景弹层消失
    shadow.addEventListener('click', function() {
        hide(vdom);
        hideShadow(shadow);
    });

    //用户未定义颜色则默认为白色
    if (!obj.css.backgroundColor) {
        obj.css.backgroundColor = '#fff';
    };
    //用数字0会被自动转化为false
    obj.css.padding = '0';
    var cssobj = shellcss(obj.css);
    setCss(vdom, cssobj);
    //生成标题
    if (obj.title) {
        var title = obj.title;
        generateTitle(title, vdom, shadow);
    };
    vdom.appendChild(content);
    //生成btn
    if (obj.btns) {
        var btns = creat('div');
        btns.style.display = 'flex';
        btns.style.justifyContent = 'center';
        vdom.appendChild(btns);
        btns.setAttribute('class', 'layer-confirm-btns');
        for (var i = 0; i < obj.btns.length; i++) {
            if (i === 0) {
                obj.btns[i].css.marginLeft = '0';
            }
            generateBtn(obj.btns[i], btns, vdom, shadow);
        };

    };
    document.body.appendChild(vdom);
    show(vdom);
};

//处理用户传入的css
function shellcss(css) {
    return {
        width: css.width,
        height: css.height || '46px',
        'line-height': css.lineHeight || '46px',
        'background-color': css.backgroundColor || 'rgba(0,0,0,.4)',
        position: 'fixed',
        left: '50%',
        top: css.top || '36%',
        padding: css.padding || '0 16px',
        transform: 'translate(-50%,-50%) scale(0)',
        color: css.color || '#fff',
        opacity: 0,
        'border-radius': css.borderRadius || '6px',
        'text-align': 'center',
        transition: 'all 300ms ease-out',
        'box-shadow': css.boxShadow || '0 0 40px rgba(0,0,0,.1)',
        'overflow': css.overflow || 'hidden'
    };
};
//设置样式函数
function setCss(dom, cssobj) {
    var cssitem = '';
    for (var key in cssobj) {
        dom.style.key = cssobj[key];
        cssitem += key + ':' + cssobj[key] + ';';
    }
    dom.setAttribute('style', cssitem);
};
//显示/隐藏弹窗
function show(vdom) {
    setTimeout(function() {
        vdom.style.opacity = 1;
        vdom.style.transform = 'translate(-50%,-50%) scale(1)';
    }, 0);
};

function hide(vdom) {
    vdom.style.opacity = 0;
    vdom.style.transform = 'translate(-50%,-50%) scale(0)';
    setTimeout(function() {
        vdom.remove();
    }, 600);

};
//显示/隐藏背景
function showShadow(dom) {
    document.body.appendChild(dom);
    setTimeout(function() {
        dom.style.opacity = 1;
    }, 0)
};

function hideShadow(dom) {
    dom.style.opacity = 0;
    setTimeout(function() {
        dom.remove();
    }, 600)
};
//生成title
function generateTitle(obj, dom, vshadow) {
    var title = creat('div');
    title.setAttribute('class', 'layer-confirm-title');
    title.innerHTML = obj.text;
    if (!obj.css) {
        obj.css = {};
    };
    if (obj.close) {
        var close = creat('span');
        close.setAttribute('class', 'layer-confirm-title-close');
        var cCss = obj.close.css;
        if (!cCss) {
            cCss = {};
        };
        var cssitem = closecss(cCss);
        setCss(close, cssitem)
        title.appendChild(close);
        close.addEventListener('click', function() {
            hide(dom);
            hideShadow(vshadow);
        });
    };
    var cssitem = titlecss(obj.css);
    setCss(title, cssitem);
    dom.appendChild(title);
};


//生成按钮
function generateBtn(inbtn, dom, vdom, shadow) {
    var btn = creat('div');
    btn.setAttribute('class', 'layer-confirm-btn');
    btn.innerHTML = inbtn.text;

    function hidelayer() {
        hide(vdom);
        hideShadow(shadow);
    }

    console.log(inbtn.async)
    if (inbtn.click && !inbtn.async) {
        btn.addEventListener('click', function() {
            inbtn.click(hidelayer);
            hidelayer();
        });

    }else if(inbtn.click){
    	btn.addEventListener('click', function() {
            inbtn.click(hidelayer);
        });
    } else {
        btn.addEventListener('click', function() {
            hidelayer();
        });
    };

    setCss(btn, btncss(inbtn.css));
    dom.appendChild(btn);
};
//文字的样式
function titlecss(cssitem) {
    return {
        'line-height': cssitem.lineHeight || '42px',
        'font-size': cssitem.fontSize || '14px',
        'background-color': cssitem.backgroundColor || '#f8f8f8',
        color: cssitem.color || '#333',
        'text-align': cssitem.textAlign || 'center',
        'position': 'relative',
        'border-bottom': cssitem.borderBottom || '1px solid #ccc',
        'border-top': cssitem.borderTop || '',
        'border-left': cssitem.borderLeft || '',
        'border-right': cssitem.borderRight || ''
    }
};
//close的样式
function closecss(cssitem) {
    return {
        'width': cssitem.width || '42px',
        'height': cssitem.height || '42px',
        'cursor': 'pointer',
        'position': 'absolute',
        'right': '0',
        'top': '0',
        'background-color': cssitem.backgroundColor || 'pink',
        'background-image': 'url(./close.png)',
        'background-repeat': 'no-repeat',
        'background-position': 'center center',
        'background-size': cssitem.backgroundSize || '30px 30px'
    };
};

function btncss(cssitem) {
    return {
        width: cssitem.width || '80px',
        height: cssitem.height || '34px',
        'font-size': cssitem.fontSize || '14px',
        'background-color': cssitem.backgroundColor || 'pink',
        'line-height': cssitem.lineHeight || '34px',
        color: cssitem.color || '#333',
        'cursor': 'pointer',
        'border-radius': cssitem.borderRadius || '6px',
        'margin-left': cssitem.marginLeft || '10px'
    };
};
// 生成dom
function creat(el) {
    return document.createElement(el);
};
