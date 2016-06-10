const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const exec = require('child_process').exec;

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

        function ReactOnWatchRunPlugin() {
            this.plugin('watch-run', function (watching, callback) {
                var currentDate = new Date();
                console.log();
                console.log(
                    'Built: '
                    + currentDate.getDate() + '.' + (currentDate.getMonth() + 1) + '.' + currentDate.getFullYear()
                    + ' - \u001b[33;1m'
                    + currentDate.getHours() + ':' + currentDate.getMinutes() + '.' + currentDate.getSeconds()
                    + '\u001b[0m');
                callback();
            });
        },

        function ReactOnDonePlugin() {
            this.plugin('done', function () {

                exec('npm run cordova build browser', function (error, stdout, stderr) {
                    console.log('Cordova:');

                    if (error !== null) {
                        console.log('└── \u001b[31;1mFailed\u001b[0m building browser platform');
                        console.log('   └── ' + stderr.split('\r\n\n')[0]);
                    }
                    else {
                        console.log('└── \u001b[32;1mSuccessfully\u001b[0m browser platform builded');
                    }
                });
            })
        }
    ]
};