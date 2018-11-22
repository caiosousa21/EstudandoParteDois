const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

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
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Gerenciador de Saidas'
        }),
       // new webpack.optimize.OccurrenceOrderPlugin(),//para usar hmr junto com middleware
        new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoEmitOnErrorsPlugin()//mesma coisa
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath:'/'
    }
};