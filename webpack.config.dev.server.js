/**
 * Created by xiajun on 2017/4/5.
 */
// 引入必要的模块
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.dev.conf');
var proxyMiddleware = require('proxy-middleware');
var url = require('url');
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


//代理中间件 配置代理 通过proxy-middleware插件
var proxyTo1 = function () {
    //服务器地址
    //var serverAddress = 'http://192.168.216.34:8080/rsms/';
    var serverAddress = 'http://192.168.216.237:8080/rsms_2.0/';
    //代理路径
    var route = '/rsms_2.0/';
    var serverOptions = url.parse(serverAddress);
    serverOptions.route = route;
    return proxyMiddleware(serverOptions);
};
//注册中间件
app.use(proxyTo1());

// 监听 8888端口，开启服务器
app.listen(8082, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:8082')
});