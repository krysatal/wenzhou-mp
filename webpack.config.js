const path = require('path') // 文件处理路径模块
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin') //自动创建html文件
// const CleanWebpackPlugin = require('clean-webpack-plugin') // 打包的时候删除没用的文件
module.exports = {
    devtool: "cheap-module-eval-source-map",
    entry: {
        main: "./src/index.js" // 配置入口文件
    },
    // bundle输出在当前文件路径下名为bundle.js
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [' ','.css','.less','.js','.json']
    },
    module: {
        rules: [
            {
                //转换css文件
                test: /\.css$/,
                use: [
                    {loader: require.resolve('style-loader')},
                    {loader: require.resolve('css-loader')}
                ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: require.resolve('style-loader') // creates style nodes from JS strings
                }, {
                    loader: require.resolve('css-loader') // translates CSS into CommonJS
                }, {
                    loader: require.resolve('less-loader'), // compiles Less to CSS
                    options: {
                        javascriptEnabled: true
                    }
                }]
            },
            {
                //转换scss文件
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
                // 加载时顺序从右向左
            },
            {
                // 转换文件png|svg|jpg|gif
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: './build',
        historyApiFallback: true,
        host: '0.0.0.0'
    },
    plugins: [
        // new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: "src/index.html"
        })

    ]
}
