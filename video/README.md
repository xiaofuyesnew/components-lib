# 富文本编辑器(lite)

基于[wangEditor](http://www.kancloud.cn/wangfupeng/wangeditor2/113961)的轻量级富文本编辑器

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
注意：fonts文件夹需要与css文件夹在同一个目录下，否则编辑器功能按钮无法显示

```html
<head>
    ...
    <!-- 插入css样式：必须 -->
    <link rel="stylesheet" href="static/lib/css/wangEditor.css">
</head>
...
<body>
    <!-- 父级节点用于定义编辑器的宽度：需要使用时添加-->
    <div style="width: 1100px;">
        <!-- 主体节点用于添加编辑器，同时编辑器高度在此定义：必须 -->
        <div id="editor" style="height:200px;">
            <!-- 初始化内容： 非必须 -->
            <p>请输入内容...</p>
        </div>
    </div>

    <!-- 依赖的库，jquery和主体程序 -->
    <script src="static/lib/js/jquery-2.2.1.js"></script>
    <script src="static/lib/js/wangEditor.js"></script>
    <!-- 实例化代码 -->
    <script>
        //实例化参数是页面结构中的编辑器主体节点id
        var editor = new wangEditor('editor');

        editor.config.uploadImgUrl = '/upload';

        // 配置自定义参数
        editor.config.uploadParams = {
            
        };

        // 设置 headers
        editor.config.uploadHeaders = {
            'Accept' : 'text/x-json'
        };

        // 隐藏掉插入网络图片功能。该配置，只有在你正确配置了图片上传功能之后才可用。
        editor.config.hideLinkImg = true;

        editor.create();

        //自定义补丁，点击浏览器初始提示语消失
        $('#editor').click(function () {
            if ($($('#editor p')[0]).html() === '请输入内容...') {
                $($('#editor p')[0]).remove();
            }
        })
    </script>
</body>
```


自定义扩展方法，请参照
[wangEditor文档](http://www.kancloud.cn/wangfupeng/wangeditor2/113961)