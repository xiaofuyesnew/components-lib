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
        position:absolute;
        width:${config.width || def.width};
        height:${config.height || def.height};
    `);

    //注入配置上传节点
    node.appendChild(document.createElement('input'));

    var fileInput =  node.getElementsByTagName('input')[0];

    fileInput.setAttribute('type', 'file');
    fileInput.setAttribute('style', `
        position:absolute;
        border:none;
        padding:0;
        width:${config.width || def.width};
        height:${config.height || def.height};
        cursor: pointer;
        opacity:0;
    `);
}

