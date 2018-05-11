'use strict'
const path = require('path')
const config = require('../config/base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
var miniCssSetting = {
    css: [
        'vue-style-loader',
        MiniCssExtractPlugin.loader,
        'css-loader'
    ]
}
module.exports = {
    //基礎目錄，絕對路徑，用於從配置中解析入口起點(entry point)和 loader
    context: path.resolve(__dirname, '../'),
    entry: {//入口點
        // vendors: ['vue'],
        vendors: [ path.resolve(__dirname, '../src/Content/js/vendor/jquery-3.2.1.js'), 'vue', 'vue-router' ],

        index: path.resolve(__dirname, '../src/index.js') //指定要編譯的檔案位置
    },
    output: {
        path: config.build.assetsRoot, // 儲存圖片與JS檔案的目錄
        filename: 'Content/js/[name].bundle.js',// [name] 會依據上面 entry 的屬性名稱變動
        //filename: "Content/js/build.js",//指定編譯後結果檔案位置
        // webpack 使用 require() 時參考的路徑，例如圖片的路徑
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue'], //require() 時不需要加入副檔名
        alias: {
            'vue': 'vue/dist/vue.js',//指定 vue 對應使用的真實 js 檔案
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    //extractCSS: process.env.NODE_ENV === 'production',
                    loaders: process.env.NODE_ENV === 'production' ? miniCssSetting : {}
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    useRelativePath: true,
                    emitFile: false,
                    name: '[name].[ext]'
                }
            }
        ]
    }
}
