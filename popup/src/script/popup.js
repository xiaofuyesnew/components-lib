/**
 * 
 * @file popup.js
 * @author 黄河水
 * @create 2017-04-05
 * @description
 *     点击弹出层的效果
 * 
 */

/**
 * @method Popup
 * @param {object} config 
 * @function
 *     弹出层对象构造函数
 */
function popup(config) {
    
    //定义相关的变量
    var node = document.getElementById(config.node),    //主节点
        el = document.createElement(config.type.main),
        mnbd = document.createElement('div'),   //要插入的主要元素
        arrow = document.createElement('span'),
        def = {
            bgColor: '#eee',
            bdColor: '#ccc'
        };

    //初始化外围
    node.style.position = 'relative';

    //判断是否显示input的部分
    if (config.type.show) {
        el.setAttribute('type', config.type.type);

        if (el.style.display !== 'block') {
            el.style.display = 'block';
        }

        if (config.type.class.length) {
            var classContent = '';

            for (var i = 0; i < config.type.class.length; i++) {

                if (i === config.type.class.length - 1) {
                    classContent += config.type.class[i];
                } else {
                    classContent += (config.type.class[i] + ' ');
                }
            }
            el.setAttribute('class', classContent);
        }
        node.appendChild(el);
    }

    //主体配置
    mnbd.setAttribute('style', `
        position:absolute;
        top:0;
        left:0;
        width:300px;
        height:200px;
        background-color: ${config.bgColor || def.bgColor};
        border:1px solid ${config.bdColor || def.bdColor};
        border-radius: 5px;
    `)
    //注入及配置尖角
    mnbd.appendChild(arrow);
    //主体注入
    node.appendChild(mnbd);
}

function init(node) {
    addType(node, )
    /*
    if (node.style.display !== 'block') {
        node.style.display = 'block';
    }
    var popup = node.nextElementSibling;
    var span = popup.getElementsByTagName('span');
    popup.setAttribute('style', 'width:300px;height:200px;background-color: #eee;border-radius: 5px;border: 1px solid #ccc;');
    span[1].setAttribute('style', 'display:block;width: 0;height: 0;float:left;border-bottom: 10px solid #eee;border-left: 10px solid transparent;border-right: 10px solid transparent;margin-top:-10px;margin-left:20%;')
    span[0].setAttribute('style', 'display:block;width: 0;height: 0;float:left;border-bottom: 10px solid #ccc;border-left: 10px solid transparent;border-right: 10px solid transparent;margin-top:-11px;margin-left:20%;')

    */
}
