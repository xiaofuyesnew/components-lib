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
    init(node);
}

function init(node) {
    if (node.style.display !== 'block') {
        node.style.display = 'block';
    }
    var popup = node.nextElementSibling;
    var span = popup.getElementsByTagName('span');
    popup.setAttribute('style', 'width:300px;height:200px;background-color: #eee;border-radius: 5px;border: 1px solid #ccc;');
    span[1].setAttribute('style', 'display:block;width: 0;height: 0;float:left;border-bottom: 10px solid #eee;border-left: 10px solid transparent;border-right: 10px solid transparent;margin-top:-10px;margin-left:20%;')
    span[0].setAttribute('style', 'display:block;width: 0;height: 0;float:left;border-bottom: 10px solid #ccc;border-left: 10px solid transparent;border-right: 10px solid transparent;margin-top:-11px;margin-left:20%;')
}


popup({
    node: "popup1"
})
popup({
    node: "popup2"
})
