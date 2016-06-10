const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const helpers = require('./config/helpers');

module.exports = {
    entry: {
        'app': './src/main.ts'
    },

    output: {
        path: helpers.root('./cordova/www'),
        filename: '[name].[hash].js'
    },

    plugins: [
        new CopyWebpackPlugin([{
            from: 'src/assets',
            to: 'assets'
        }]),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),

        function ReactOnDonePlugin() {
            this.plugin('done', function () {
                console.log('Webpack: \u001b[32;1mDONE!\u001b[0m');
            })
        },
        function ReactOnWatchRunPlugin() {
            this.plugin('watch-run', function (watching, callback) {
                console.log('\u001b[30;1m' + new Date() + '\u001b[0m');
                callback();
            });
        }
    ]
};