# Echarts二次封装

基于[Echarts](http://echarts.baidu.com/index.html)的二次封装

使用：

下载本代码包，终端进入本目录
```bash
#下载，找到下载后的liteditor文件夹
git clone https://github.com/xiaofuyesnew/components-lib.git

#安装依赖包
npm install

#二次开发预览，对应文件夹dev
npm run dev

#打包发布，对应文件夹dist
npm run build

```

在dist文件夹下提取相应的文件使用，基本使用如下

```html
<head>
    ...
    <!-- Echarts主文件 -->
    <script src="static/lib/js/echarts.js"></script>
</head>
<body>

    <!-- echarts节点，自定义属性用于装载后台数据配置JSON字符串 -->
    <div id="bar" style="width:640px;height:480px;float:left;" data-echarts='{"title":{"text": "Echarts 柱状图"},"tooltip": {},"legend": {"data":["销量"]},"xAxis": {"data": ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},"yAxis": {},"series": [{"name": "销量","type": "bar","data": [5, 20, 36, 10, 10, 20]}]}'></div>
    ...

    <!-- 自定义封装的配置函数文件 -->
    <script src="static/js/mychart.js"></script>
    <script>

        /**
         * 调用配置函数
         * 两个参数
         * 1.注入echarts的节点id
         * 2.该节点对应的数据(该数据为php从数据库取得数据后
         * 包装成的配置对应JSON字符串)
         */
        myChart('bar', 'data-echarts');
    </script>
</body>
```


配置详情，请参照
[Echarts配置项文档](http://echarts.baidu.com/option.html)