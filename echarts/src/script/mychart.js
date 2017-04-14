function myChart(node, config) {

    var obj = echarts.init(document.getElementById(node)),
        option = JSON.parse(document.getElementById(node).getAttribute(config));
            
    obj.setOption(option);
}