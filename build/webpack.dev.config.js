/*
 * @Author: atdow
 * @Date: 2021-05-11 15:23:00
 * @LastEditors: null
 * @LastEditTime: 2021-05-21 18:24:53
 * @Description: file content
 */
const webpack = require('webpack');
const path = require('path');
const {smart} = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const WebpackBar = require('webpackbar');
// const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
// const manifestJson = require('../public/dll/dllLibs.manifest.json');
const common = require('./common');
const { publicPath } = require("./config")

// const port = process.env.npm_package_config_port || 3000;
// const host = process.env.npm_package_config_host || 'localhost';
// console.log("port:",port)
// console.log("host:",host)
// console.log(" process:", process)



const styleLoaders = common.getStyleLoaders({
    cssModule: true,
});

module.exports = smart(baseConfig, {
    mode: 'development',
    // devtool: 'cheap-module-eval-source-map',
    devtool: 'source-map',
    output: {
        // 开发环境下，filename 不能使用 contenthash/chunkhash
        filename: 'js/[name].[hash:8].bundle.js',
        chunkFilename: 'js/[name].chunk.js',
        publicPath: '/',
        // publicPath: publicPath,
    },
    module: {
        rules: [].concat(styleLoaders),
    },
    plugins: [ 
        // 添加进度条
        new WebpackBar({
            color:'orange',
            reporter:{
                allDone(context) {
                    // console.log(" ")
                    // console.log("App running at:")
                    // console.log("- Local:",`http://localhost:8888${publicPath}`)
                    // console.log("- Network:",` http://192.168.8.50:8888${publicPath}`)
                    console.log("请在打开的网址后面加上：" + publicPath)
                }
            }
        }),
        new FriendlyErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // dll 不要和 splitChunks 一起使用，会出问题
        // dll 对于 webpack 4 来说，貌似提升的速度不大明显
        // new DllReferencePlugin({
        //     manifest: manifestJson
        // }),
    ],
    watchOptions: {
        aggregateTimeout: 500,
        poll: 1000,
        ignored: /node_modules/
    },
    devServer: {
        contentBase: './',
        // publicPath: publicPath, // new
        disableHostCheck: true,
        host: '0.0.0.0',
        useLocalIp: true,
        port: 8888,
        historyApiFallback: true,
        inline: true,
        hot: true,
        overlay: {
            errors: true,
            warnings: true,
        },
        // open: true,
        // openPage:'dist/index.html',
    },
    // proxy:{}
})





