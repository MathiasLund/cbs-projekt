var webpack = require('webpack');

module.exports = {
    entry: './app/server.js',
    output: {
        path: 'dist',
        filename: 'server.js'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel',
                include: __dirname + '/src',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ],
    }
};
