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
    var node = document.getElementById(config.node)
    console.log(node.offsetHeight)
    init(node)
}

function init(node) {
    if (node.style.display !== 'block') {
        node.style.display = 'block'
    }
    var popup = node.nextElementSibling
    console.log(popup)
    popup.setAttribute('style', 'width:100px;height:100px;background-color: #e3e3e3;')
    /*
    document.styleSheets[0].addRule('.popup::before','color: green'); // 支持IE*/
    document.styleSheets[0].insertRule('.popup::before {width:20px;height:20px;background-color: #e3e3e3;float:left;}', 0); // 支持非IE的现代浏览器
}

var config1 = {
        node: "popup1"
    },
    config2 = {
        node: "popup2"
    }

popup(config1)
popup(config2)
