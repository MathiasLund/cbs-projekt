var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './app/server.js',
    target: 'node',
    output: {
        path: 'dist',
        filename: 'server.js'
    },
    module: {
        loaders: [
            { test: /\.js$/,
                loaders: [
                    'babel-loader'
                ]
            },
            { test:  /\.json$/, loader: 'json-loader' },
        ]
    },
};
