/**
 * Created by Dylanwoo on 2017/11/8.
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname+"/index.js",
    output: {
        path: __dirname+"/build",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use:
                    { loader: "babel-loader" },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use:[{
                    loader: "style-loader"
                },{
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                },{
                    loader: "postcss-loader"
                }]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有'),
        new webpack.HotModuleReplacementPlugin()    //webpack的热更新模块
    ],
    devServer: {
        port: 8081,
        hot: true,
        inline:true,
        historyApiFallback: true,
        contentBase: "./public"
    }
};
