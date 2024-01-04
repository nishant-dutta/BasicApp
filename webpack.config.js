// module.exports = {
//     entry: './src/app.js',
//     output: {
//         filename: './app.bundle.js'
//     },
//     mode: 'development'
// }

var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.join(__dirname, 'dist');
var APP_DIR = path.join(__dirname, 'src');

var config = {
    mode: 'development',
    entry: APP_DIR + '/app.js',
    output: {
        path: BUILD_DIR,
        filename: 'app.bundle.js',
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
                test: /.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}

module.exports = config;