const ConsoleLogOnBuildWebpackPlugin = require('./console-log-on-build-webpack-plugin')

module.exports = {
    mode:'development',
    plugins:[
        new ConsoleLogOnBuildWebpackPlugin()
    ]
}