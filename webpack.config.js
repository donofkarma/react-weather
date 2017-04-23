const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
    // app entry
    entry: './app/index.js',
    // bundle output
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/' // force all page requests to /
    },
    // loaders
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
        ]
    },
    // dev server settings
    devServer: {
        historyApiFallback: true
    },
    // plugins
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    );
}

module.exports = config;
