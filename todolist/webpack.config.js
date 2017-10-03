let path = require('path');
let webpack = require('webpack');
let HtmlwebpackPlugin  = require('html-webpack-plugin');

let ROOT_PATH = path.resolve(__dirname);
let APP_PATH = path.resolve(ROOT_PATH, 'index');
module.exports = {
    entry: './index.jsx',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/,
                include: APP_PATH
            }    ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'My first react+flux todo  app'
        })
    ]
};