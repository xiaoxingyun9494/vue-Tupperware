//1:html-webpack-plugin
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
//2:entry
//3:output
//4:module -->loader
//5:使用第一步的plugins

module.exports = {
    entry: {
        'main': './main.js'
    },
    externals: {
        "BMap": "BMap"
    },
    output: {
        path: __dirname + '/dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [{
                test: /\.less$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
            }, {
                test: /\.(png|jpg|gif|ttf|svg)$/,
                loader: 'url-loader?limit=4096'
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            }, {
                test: /\.vue$/,
                loader: 'vue-loader' //vue-template-compiler
            },



        ]

    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]

}
