const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    base:{
        mode:'production',
        output:{
            path:path.resolve(__dirname,'../build'),
            filename:'./js/[name].js'
        }
    },
    plugins:[
        /*  new HtmlWebpackPlugin({
             template:path.resolve(__dirname,'../index.html')
         }), */
        new MiniCssExtractPlugin({
            filename: './css/[name]-[contenthash].css'
        })
    ]
}