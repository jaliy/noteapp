
var webpack = require('webpack');

module.exports = {
    entry: ["./src/main.js"],
    output: {
        path: __dirname + "/dist",
        filename: "build.js",
        chunkFilename: "[id].build.js",
        publicPath: "/noteapp/1-combine/dist/",
    },
    module: {
  		loaders: [{
	  			test: /\.js$/,
	  			exclude: /(node_modules|bower_components)/,
	  			loader: 'babel', // 'babel-loader' is also a valid name to reference
	  			query: {
	    			presets: ['es2015']
	  			}
			},
	      	{
	        	test: /\.vue$/,
	        	loader: 'vue'
      		}
		]
	},
    plugins: [
    	// 提公用js到common.js文件中
    	new webpack.optimize.CommonsChunkPlugin('common.js'),
    ],
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extension: ['', '.js'],
        // 别名
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
};