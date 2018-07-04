# webpack_project
webpack超详细配置
Step1: 创建项目文件夹, 名字自起, 但路径名不要包含中文, 以及项目名也不要叫”webpack”, 并且不要包含大写字母.
Step2: 接下来创建并编写配置文件. 首先我们先介绍几个配置文件的参数. 
   entry： 是 页面入口文件配置 （html文件引入唯一的js 文件）
   output：对应输出项配置 
     path ：入口文件最终要输出到哪里，
     filename：输出文件的名称
     publicPath：公共资源路径
Step3: 在你的项目目录下创建webpack.config.js配置文件, 通过这个文件进行webpack的配置, 并且还要创建一些路径保存基本文件.
Step4: 在src的js下创建一个入口文件, 我创建的叫做entry.js, 在项目目录再创建一个index.html用来调试使用. 编写webpack.config.js文件
   //webpack.config.js
   module.exports = {
       entry : './src/js/entry.js',//入口文件
       output : {//输出文件
           filename : 'index.js',//输出文件名
           path : __dirname + '/out'//输出文件路径
       },
   }
我们随便在index.html和入口文件entry.js写点什么看看是否成功配置, 
//index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>ss</title>
</head>
<body>
111
    <script src="./out/index.js"></script>//注意在这里引入的是打包完成的js文件
</body>
</html>

//entry.js
console.log('1234');

之后使用Git Bash here 或者 cmd cd命令使目录为当前项目目录, 输入webpack或者webpack -w命令, 查看index.html是否成功console出1234;
(webpack 和 webpack -w 区别 
webpack -w可以对项目打包并且实时监控, 当前配置文件下的文件如果发生更改时重新打包, 但如果webpack的配置文件即webpack.config.js更改时还是要通过webpack进行打包.(退出webpack -w 操作 ctrl+c)
)