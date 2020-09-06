const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const vueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new vueLoaderPlugin()
    ],
    module:{
        rules: [
            {test: /\.css$/, use: ['style-loader','css-loader']},
            {test: /\.(png|jpg|gif|bmp|jpeg)$/, use: 'url-loader'},
            {test: /\.vue$/, use: 'vue-loader'},
            {test: /\.svg|ttf|woff|eot$/, use: 'file-loader'},
            {test: /\.js$/, use: 'babel-loader',exclude: /node_modules/}
        ]
    },
    resolve: {
        alias: {
            // "vue$":"vue/dist/vue.js"
        }
    }
}