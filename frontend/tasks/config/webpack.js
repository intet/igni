'use strict';
let path = require('path');
let webpack = require('webpack');
let config = require('./index').client;

module.exports = {
    entry: {
        boot: './src/boot.js',
        vendor: './src/vendor.js'
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
                    presets: ['es2015'],
                    plugins: [
                        'angular2-annotations',
                        'transform-decorators-legacy',
                        'transform-class-properties',
                        'transform-flow-strip-types'
                    ]
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
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor', filename: 'vendor.js'
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        })
    ],
    devtool: 'cheap-source-map'
};
