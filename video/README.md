# 视频插件

基于[video.js](http://videojs.com/)的视频播放插件

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
    <!-- 样式，ie支持，主体程序，配置文件：必须 -->
    <link href="static/lib/css/video-js.css" rel="stylesheet">
    <script src="static/lib/js/videojs-ie8.js"></script>
    <script src="static/lib/js/video.js"></script>
    <script src="static/js/vdj.config.js"></script>

</head>
<body>

    <!-- 视频页面部分:可配置视频区域大小、封面图片等 -->
    <video class="video-js vjs-default-skin" controls preload="none" width="800" height="600" poster="static/image/oceans.png" data-setup='{"techOrder": ["html5", "flash"]}'>
        <source src="static/video/oceans.flv" type="video/x-flv">
        <source src="static/video/oceans.mp4" type="video/mp4">
        <source src="static/video/oceans.webm" type="video/webm">
        <source src="static/video/oceans.ogv" type="video/ogg">
        <!-- 不支持播放时给予提示 -->
        <p class="vjs-no-js">该浏览器不支持HTML5和Flash视频播放，请安装Flash插件或更换浏览器Chrome或者FireFox！</p>
    </video>

</body>
```
