var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.join(__dirname, 'dist');
var APP_DIR = path.join(__dirname, 'src');

var config = {
    mode: 'development',
    entry: APP_DIR + '/app.js',
    output: {
        path: BUILD_DIR,
        filename: '[name].[chunkhash].js',
    },
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    reuseExistingChunk: true,
                    idHint: 'vendors',
                },
            }
        }
    },
    module: {
        rules : [
            {
                test: /\.(js|jsx)$/,
                // include: APP_DIR,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: 'file-loader'
            }
        ]
    },
    devServer:{
        compress: true, // Enable gzip compression for everything served
        port: 9000, // Port on which dev server runs
        headers: {
            user: 'nishant'
            // add custom response headers to be present on dev env like authentication token
        },
        open: true, // open on browser after dev server is ready
        // hot: true // turn on Hot Module Replacement
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}

module.exports = config;