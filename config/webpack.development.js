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
        devtool:'source-map',
        devServer:{
            port:3002,
            open:true,
        },
        proxy:{
            '^/api':{
                target:'http://localhost:5000',
                pathRewrite:{
                    '^/api':'/'
                }
            }
        }
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: '[name]-[contenthash].css'
        })
    ]
}