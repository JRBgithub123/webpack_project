require('../css/index.css');//引入css文件
var demo1=require('../js/demo1.js');
demo1.init();

var myImg = new Image();
myImg.src=require('../img/1.jpg');//当前模块引入图片
document.body.appendChild(myImg);
