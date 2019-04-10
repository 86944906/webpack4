const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = function(env, argv){
    env = env || {};
    let con = null;
    if(env.development){
        con = require('./config/webpack.development');
    }else{
        con = require('./config/webpack.production');
    }
   
    return {
        //单个入口文件
        // entry:'./src/js/index',
        entry:{
            index:'./src/js/index.js',
            index2:'./src/js/index2.js'
        },
        module:{
            rules:[
                {
                    test:/\.js$/i,
                    use:[{
                        loader:'babel-loader',
                        options:{
                            presets:['@babel/preset-env']
                        }
                    }]
                },
                {
                    test:/\.css$/i,
                    use:[
                        //'style-loader',
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader:'postcss-loader',
                            options:{
                                plugins:[
                                    require('autoprefixer')
                                ]
                            }
                        }
                    ]
                },
                {
                    test:/\.less$/i,
                    use:[
                        //'style-loader',
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader:'postcss-loader',
                            options:{
                                plugins:[
                                    require('autoprefixer')
                                ]
                            }
                        },
                        'less-loader'
                    ]
                },
                {
                    test:/\.(png|jpg|gif|svg)/i,
                    use:[{
                        loader:'url-loader',
                        options:{
                            outputPath:'imgs/',
                            limit:4*1024
                        }
                    }]
                },
                {
                    test:/\.html$/i,
                    use:['html-withimg-loader']
                }
            ]
        },
        plugins:[
            new HtmlWebpackPlugin({
                template:path.resolve(__dirname,'./index.html')
            }),
            ...con['plugins']
        ],
        ...con['base']
    }
    
}




/* {
    entry:'./src/js/index',
    output:{
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/i,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }]
            },
            {
                test:/\.css$/i,
                use:['style-loader','css-loader',{
                    loader:'postcss-loader',
                    options:{
                        plugins:[
                            require('autoprefixer')
                        ]
                    }
                }]
            },
            {
                test:/\.less$/i,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.(png|jpg|gif|svg)/i,
                use:[{
                    loader:'url-loader',
                    options:{
                        outputPath:'imgs/',
                        limit:4*1024
                    }
                }]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html')
        })
    ],
    devtool:'source-map'
} */