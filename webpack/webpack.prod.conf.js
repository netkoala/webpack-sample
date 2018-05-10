"use strict";
var path = require('path');
var config = require('../config/base')
var webpack = require('webpack')
var merge = require('webpack-merge');
var baseConfig = require('./webpack.base.conf.js');
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(baseConfig, {
    mode: 'production',
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            minimize: true || {/* CSSNano Options */ }
                        }
                    }
                ]
                // loader: ExtractTextPlugin.extract({
                //     use: [
                //         {
                //             loader: 'css-loader',
                //             options: {
                //                 url: false,
                //                 minimize: true || {/* CSSNano Options */ }
                //             }
                //         }
                //     ]
                // })
            }
        ]
    },
    devtool: config.build.productionSourceMap ? config.build.devtool : false,
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../config/prod.env')
        }),
        new CopyWebpackPlugin([
            {
                from: './src/Content/images',
                to: path.resolve(__dirname, '../dist/Content/images')
            }
        ]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: 'Content/css/[name].css'
        })
        // new ExtractTextPlugin({
        //     filename: 'Content/css/[name].css',
        //     allChunks: true
        // })
    ]
});
