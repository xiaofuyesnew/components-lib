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
    var node = document.getElementById(config.node);
    console.log(node.offsetHeight);
    init(node);
}

function init(node) {
    if (node.style.display !== 'block') {
        node.style.display = 'block';
    }
    var popup = node.nextElementSibling;
    var span = popup.getElementsByTagName('span');
    popup.setAttribute('style', 'width:300px;height:200px;background-color: #eee;border-radius: 5px;border: 1px solid #ccc;margin-top: 20px;');
    span[1].setAttribute('style', 'display:block;width: 0;height: 0;float:left;border-bottom: 10px solid #eee;border-left: 10px solid transparent;border-right: 10px solid transparent;margin-top:-10px;margin-left:20%;')
    span[0].setAttribute('style', 'display:block;width: 0;height: 0;float:left;border-bottom: 10px solid #ccc;border-left: 10px solid transparent;border-right: 10px solid transparent;margin-top:-11px;margin-left:20%;')
    popup.getElementsByClassName('content')
    console.log(popup.getElementsByClassName('content')[0])
    //.setAttribute('style', 'width: 100%;')
    /*
    document.styleSheets[0].addRule('.popup::before','color: green'); // 支持IE*/
    /*
     // 支持非IE的现代浏览器
    console.log(document.styleSheets[0].cssRules)
    if (!document.styleSheets[0].cssRules.length) {
        console.log('cssok')
        document.styleSheets[0].insertRule(
            `.popup::before {
                content: "";
                width: 0;
                height: 0;
                border-bottom: 10px solid #e3e3e3;
                float: left;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                margin-top:-10px;
                margin-left:20%;
            }`, 0);
    }*/
}


popup({
    node: "popup1"
})
popup({
    node: "popup2"
})
