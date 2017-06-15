const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

let config = {
    // app entry
    entry: [
        'babel-polyfill',
        './app/index.js'
    ],
    // bundle output
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/' // force all page requests to /
    },
    // loaders
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    'babel-loader',
                    'eslint-loader'
                ]
            }
        ]
    },
    // dev server settings
    devServer: {
        historyApiFallback: true
    },
    // plugins
    plugins: [
        // copy static assets
        new CopyWebpackPlugin([
            {
                context: 'src/images/public',
                from: '**/*',
                to: 'assets/images'
            }
        ]),
        // force webpack-dev-server to write files to /dist
        new WriteFilePlugin(),
        // copy and update html with js path
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        }),
        // expose env vars to the bundle process
        new Dotenv({
            path: './.env'
        })
    ]
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        // set env to production
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        // minify js
        new webpack.optimize.UglifyJsPlugin()
    );
}

module.exports = config;
