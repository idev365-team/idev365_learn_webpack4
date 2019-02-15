const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin")
module.exports={
    entry:{
        index:"./src/index.js"
    },
    mode:'development',
    module:{
        rules:[
            { 
                test:/.css$/, 
                use:ExtractTextWebpackPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                })
            },
            { 
                test:/.less$/, 
                use:ExtractTextWebpackPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','less-loader']
                })
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
        }),
        new ExtractTextWebpackPlugin("styles.css")
    ]
}