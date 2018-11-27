const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    mode:'development',
    entry: {
        //mdw:'webpack-hot-middleware/client',
        app:'./src/index.js',
    },
    devtool:'inline-source-map',
    devServer:{
        contentBase: './dist',
        hot: true
    },
    module:{
        rules:[{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Progressive Web Aplication'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath:'/'
    }
};