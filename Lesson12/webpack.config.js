const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:"development",
    entry:"./src/index.js",
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:[
                    {
                        loader:"babel-loader",
                        options:{
                            presets:[
                                "@babel/preset-react",
                                "@babel/preset-env",
                            ]
                        }
                    }
                ]
            },
            {
                test:/\.css$/,
                use:[
                    "style-loader",
                    "css-loader",
                ]
            },
            {
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ]
            },
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
        })
    ]

}