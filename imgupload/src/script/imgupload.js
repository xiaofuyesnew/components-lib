function imgupload(config) {
    var node = document.getElementById(config.node),
        def = {
            width: "200px",
            height: "200px",
        };
    
    //配置主体节点
    if (config.class.length) {
        let attr = '';
        for (var i = 0; i < config.class.length; i++) {
            if (i > 0) {
                attr += ' ' + config.class[i];
            } else {
                attr += config.class[i];
            }
        }
        node.setAttribute('class', attr)
    }
    node.setAttribute('style', `
        position:relative;
    `)

    //注入配置预览节点
    node.appendChild(document.createElement('img'));

    var fileShow = node.getElementsByTagName('img')[0];

    fileShow.setAttribute('style', `
        width:${config.width || def.width};
        height:${config.height || def.height};
    `);

    //注入配置上传节点
    node.appendChild(document.createElement('input'));

    var fileInput =  node.getElementsByTagName('input')[0];

    fileInput.setAttribute('type', 'file');
    fileInput.setAttribute('style', `
        position:absolute;
        left:0;
        top:0;
        border:none;
        padding:0;
        width:${config.width || def.width};
        height:${config.height || def.height};
        cursor: pointer;
        opacity:0;
    `);

    //时间监听
    fileInput.addEventListener('change', () => {
        
        //清空预览图片
        fileShow.setAttribute('src', '');

        if (!fileInput.value) {
            return;
        }


        console.log(fileInput.files);
        var file = fileInput.files[0];

        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && 
                file.type !== 'image/gif') {
            console.log('不是有效的文件格式！');
            return;
        }

        //文件读取
        var reader = new FileReader();
        reader.onload = (e) => {
            var data = e.target.result;
            fileShow.setAttribute('src', data);
        }
        reader.readAsDataURL(file);


        //可选接口ajax上传文件,暂时不启用
        /*
        $.ajax({
            url: "server api",
            type: "POST",
            data: fileInput.files,
            success: () => {
                console.log('上传成功')
            }
        })
         */
    })
}

