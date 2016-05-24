const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin  = require('copy-webpack-plugin');

const helpers = require('./config/helpers');

module.exports = {
    entry: {
        'app': './src/main.ts',
    },

    output: {
        path: helpers.root('../cordova/www'),
        filename: '[name].[hash].js'
    },

    plugins: [
        new CopyWebpackPlugin([{
            from: 'src/assets',
            to: 'assets'
        }]),
        
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
}