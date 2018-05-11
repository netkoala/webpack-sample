"use strict";

var path = require('path');
var webpack = require('webpack')
var merge = require('webpack-merge');
var config = require('../config/base')
var baseConfig = require('./webpack.base.conf.js');
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
//var portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

module.exports = merge(baseConfig, {
    mode: 'development',
    module: {
        rules:[
            {
                test: /\.css$/,
                loader: [
                    {
                        loader: "style-loader"
                    },
                    { 
                        loader: "css-loader"
                    }
                ]
            },
        ]
    },
    devtool: config.dev.devtool,

    // these devServer options should be customized in /config/index.js
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: {
            rewrites: [
                { from: /.*/, to: path.posix.join('/', 'index.html') },
            ],
        },
        hot: true,
        contentBase: false, // since we use CopyWebpackPlugin.
        compress: true,
        host: HOST || config.dev.host, // can be overwritten by process.env.HOST
        port: PORT || config.dev.port, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        open: false,
        overlay: config.dev.errorOverlay
            ? { warnings: false, errors: true }
            : false,
        publicPath: config.dev.assetsPublicPath,
        proxy: {},
        quiet: true, // necessary for FriendlyErrorsPlugin
        watchOptions: {
            poll: config.dev.poll
        }
    },
    optimization: { 
        splitChunks: {
            cacheGroups: {
                vendors: {
                    chunks: 'all',
                    name: "vendors",
                    test: '/vendor|[\\/]node_modules[\\/]/'
                },
            }
        },
        runtimeChunk: {
            name: "manifest"
        },
        
        // webpack4 NamedModulesPlugin->optimization.namedModules(development 默認開啟)
        namedModules: true,
         // webpack4 NoEmitOnErrorsPlugin -> optimization.noEmitOnErrors
        noEmitOnErrors: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../config/dev.env')
        }),
        //啟用熱加載 HMR
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
});

// module.exports = new Promise((resolve, reject) => {
//     portfinder.basePort = process.env.PORT || config.dev.port
//     portfinder.getPort((err, port) => {
//         if (err) {
//             reject(err)
//         } else {
//             // publish the new Port, necessary for e2e tests
//             process.env.PORT = port
//             // add port to devServer config
//             devWebpackConfig.devServer.port = port

//             // Add FriendlyErrorsPlugin
//             // devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
//             //     compilationSuccessInfo: {
//             //         messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
//             //     },
//             //     onErrors: config.dev.notifyOnErrors
//             //         ? utils.createNotifierCallback()
//             //         : undefined
//             // }))

//             resolve(devWebpackConfig)
//         }
//     })
// })
