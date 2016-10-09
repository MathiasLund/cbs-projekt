var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './app/client.js',
    output: {
        path: 'dist',
        filename: 'client.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015','react']
                }
            }
        ],
    }
};
