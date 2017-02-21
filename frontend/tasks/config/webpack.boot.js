'use strict';
let path = require('path');
let webpack = require('webpack');
let config = require('./index').client;

module.exports = {
    entry: {
        boot: './src/boot.js'
    },
    output: {
        path: path.resolve(__dirname, '../../', config.destination),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules)/,
                query: {
                    presets: ['es2015', 'angular2']
                }
            },
            {
                test: /\.ts(x?)$/,
                loader: 'ts',
                exclude: /(node_modules)/,
                query: {
                    presets: ['es2015', 'angular2']
                }
            },
            {
                test: /\.html$/,
                loader: 'raw?minimize=false'
            },
            {
                test: /\.css$/,
                loader: 'raw?minimize=false'
            }

        ],
        noParse: [/.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/]
    },

    resolve: {
        extensions: ['*', '.js', '.json']
    },

    plugins: [
        new webpack.DefinePlugin({
            ENVIRONMENT: JSON.stringify('development')
        })
    ],

    devtool: 'cheap-source-map'
};
