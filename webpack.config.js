var HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist/',
        filename: "app.bundle.js"
    },
    plugins: [new HtmlWebPackPlugin({
            template: './src/index.html',
            hash: true
                // hash:true 很重要保持和服务器一致的操作，
                //minify:{collapseWhitespace:true}//实际开发生产项目中使用
        }),
        new ExtractTextPlugin('style.css')
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader']
            })
        }]
    }
}