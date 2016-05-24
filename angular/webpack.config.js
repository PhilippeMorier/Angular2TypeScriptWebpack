const helpers = require('./config/helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'app': './src/main.ts',
    },

    output: {
        path: helpers.root('../cordova/www'),
        filename: '[name].[hash].js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
}