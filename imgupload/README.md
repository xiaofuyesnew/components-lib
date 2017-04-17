# 图片上传插件

基于H5的File API编写的头像（图片）预览上传插件

使用：
```html
<!DOCTYPE html>
<body>
    <!-- 插入插件主节点 -->
    <div id="imgupload"></div>

    <!-- 必须：插入imgupload函数文件 -->
    <script src="static/js/imgupload.js"></script>
    <script>
        imgupload({
            node: "imgupload",  //插入插件的节点id
            width: "200px",     //插件宽度
            height: "200px",    //插件高度
            class: [],          //插件样式关联的class名
            extra: {            //扩展显示（显示不同尺寸的预览，暂不启用）
                small: true,
                middle: true,
                large: true,
            },
            ajax: {             //ajax相关配置，定义接受文件的接口和传输类型
                url: '',
                type: ''
            }
        });
    </script>
</body>
```

该插件可以base64编码格式预览图片，在预览图片的同时进行ajax图片上传。