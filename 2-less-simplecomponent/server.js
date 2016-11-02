var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require("./webpack.config.dev.js");
config.entry.unshift("webpack-dev-server/client?http://localhost:8080/","webpack/hot/dev-server");
config.plugins.push(new webpack.HotModuleReplacementPlugin());
var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
	
    publicPath: config.output.publicPath,
    
	hot: true,
	
    historyApiFallback: true,
});
server.listen(8080);