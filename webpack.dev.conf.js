// nodejs 中的path模块
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// 引入基本配置
var config = require('./webpack.config');

config.output.publicPath = '/';

config.plugins = [
    //new webpack.DefinePlugin({
    //    'process.env':{
    //        NODE_ENV: '"production"'
    //    }
    //}),
    //new webpack.optimize.OccurrenceOrderPlugin(),
    //new webpack.HotModuleReplacementPlugin(),
    //new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
        filename:'style/main[hash:8].css',
        allChunks: true
    }),
    new HtmlWebpackPlugin({
        filename: './index.html',
        template: path.resolve(__dirname, './src/index.html'),
        inject: true
    })
];

//// 动态向入口配置中注入 webpack-hot-middleware/client 使用webpack文件
//Object.keys(config.entry).forEach(function (name, i) {
//    config.entry[name] = ['./dev-client'].concat(config.entry[name])
//});

module.exports = config;