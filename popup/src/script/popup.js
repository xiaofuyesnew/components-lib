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
    var popup = node.nextElementSibling
    console.log(popup);
    popup.setAttribute('style', 'width:300px;height:200px;background-color: #e3e3e3;border-radius: 5px;');
    /*
    document.styleSheets[0].addRule('.popup::before','color: green'); // 支持IE*/
    /*
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
        }`, 0); // 支持非IE的现代浏览器*/
    console.log(document.styleSheets[0])
    if (!document.styleSheets[0]) {
        console.log('cssok')
    }
}

var config1 = {
        node: "popup1"
    },
    config2 = {
        node: "popup2"
    }

popup(config1)
popup(config2)
