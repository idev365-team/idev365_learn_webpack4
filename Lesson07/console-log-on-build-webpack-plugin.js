const pluginName = 'ConsoleOnBuildWebpackPlugin'
class ConsoleOnBuildWebpackPlugin{
    apply(compiler){
        compiler.hooks.run.tap(pluginName,compilation=>{
            console.log('The webpack build progress is starting!!!')
        })
    }
}
module.exports = ConsoleOnBuildWebpackPlugin;