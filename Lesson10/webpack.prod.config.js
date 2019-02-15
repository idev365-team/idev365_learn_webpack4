const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

const dist_dir = 'dist'
module.exports=WebpackMerge(baseConfig,{
    mode:'production',
    output:{
        path:path.resolve(__dirname,dist_dir)
    },
    plugins:[
        new CleanWebpackPlugin(dist_dir),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            title:'App Prod'
        }),
    ]
})