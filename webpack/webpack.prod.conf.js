"use strict";
const path = require('path');
const config = require('../config/base')
const webpack = require('webpack')
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf.js');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
            }
        ]
    },
    devtool: config.build.productionSourceMap ? config.build.devtool : false,
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
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '..')
        }),
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
    ]
});
