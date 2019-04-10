const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    base:{
        mode:'development',
        //development模式下output不需要path路径，因为文件存在缓存内，加快访问速度
        output:{
            //多入口文件配置[name],生成js文件随入口文件名字，如是单入口直接写bundle.js
            filename:'[name].js'
        },
        
        devtool:'source-map'
    },
    plugins:[
        /* new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../index.html')
        }), */
        new MiniCssExtractPlugin({
            filename: '[name]-[contenthash].css'
        })
    ]
}