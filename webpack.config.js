const HtmlWebpackPlugin = require('html-webpack-plugin');
const execSync = require('child_process').execSync;

const helpers = require('./config/helpers.js');

module.exports = {
    entry: {
        'app': './src/main.ts',
        'spec': './src/spec.js'
    },

    output: {
        path: helpers.root('./cordova/www'),
        filename: '[name].[hash].js'
    },

    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/assets/favicon.ico',
            excludeChunks: ['spec']
        }),

        function ReactOnWebpackWatchRunEventPlugin() {
            this.plugin('run', function (watching, callback) {
                rimraf('./cordova/www/*');
                callback();
            });
        },

        function ReactOnWebpackWatchRunEventPlugin() {
            this.plugin('watch-run', function (watching, callback) {

                rimraf('./cordova/www/*.{js,html}');

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

        function ReactOnWebpackDoneEventPlugin() {
            this.plugin('done', function () {
                execSync('npm run cordova build browser', {stdio: [process.stdin, process.stdout, process.stderr]});
                console.log('└── \u001b[32;1mCordova\u001b[0m');

                execSync('npm run karma start', {stdio: [process.stdin, process.stdout, process.stderr]});
                console.log('└── \u001b[32;1mKarma\u001b[0m');
            });
        }
    ]
};

function rimraf(pattern) {
    execSync('npm run rimraf -- ' + pattern, {stdio: [process.stdin, process.stdout, process.stderr]});
    console.log('└── \u001b[32;1mClean\u001b[0m');
}