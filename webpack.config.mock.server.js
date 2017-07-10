/**
 * Created by xiajun on 2017/4/5.
 */
// 引入必要的模块
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.dev.conf');
var fs = require('fs');
var path = require('path');
var chokidar = require('chokidar');
var history = require('connect-history-api-fallback');

// 创建一个express实例
var app = express();

// 调用webpack并把配置传递过去
var compiler = webpack(config);

// 使用 webpack-dev-middleware 中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
});

//// 使用 webpack-hot-middleware 中间件
//var hotMiddleware = require('webpack-hot-middleware')(compiler);
//// webpack插件，监听html文件改变事件
//compiler.plugin('compilation', function (compilation) {
//    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
//        // 发布事件
//        hotMiddleware.publish({ action: 'reload' });
//        cb()
//    })
//});

// 注册中间件
app.use(devMiddleware);
app.use(history());

////// 注册中间件
//app.use(hotMiddleware);


//mock数据配置
var mockDir = path.resolve('./mock');
fs.readdirSync(mockDir).forEach(function (file) {
    var mock = require(path.resolve(mockDir, file));
    try { //异常捕获
        app.use(mock.url, function (req,res) {
            delete require.cache[require.resolve(path.resolve(mockDir, file))];
            var mocks = require(path.resolve(mockDir, file));
            if(mocks.status){
                res.status(mocks.status)
            }
            res.json(mocks.data);
        });
    } catch (err) {

    }
});

//监听如果添加了文件配置接口
chokidar.watch(mockDir).on('change', function (file) {
    if(file.split('.')[1] == 'js'){
        try { //异常捕获
            if(require.cache[require.resolve(file)]){
                delete require.cache[require.resolve(file)];
            }
            var mock = require(file);
            if(mock.url){
                app.use(mock.url, function (req,res) {
                    delete require.cache[require.resolve(file)];
                    var mocks= require(file);
                    if(mocks.status){
                        res.status(mocks.status)
                    }
                    res.json(mocks.data);

                });
            }
        } catch (err) {
            console.log(err)
        }
    }
});

// 监听 8888端口，开启服务器
app.listen(8084, function (err) {
    if (err) {
        console.log(err);
        return
    }
    console.log('Listening at http://localhost:8082')
});
