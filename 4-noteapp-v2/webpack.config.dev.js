
var baseWebpackConfig = require('./webpack.config');
var merge = require('webpack-merge');

module.exports = merge(baseWebpackConfig, {
    output: {
        publicPath: "http://localhost:8080/dist/",
    }
})
