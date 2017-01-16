/**
 * @file
 * @author zdying
 */

"use strict";

let webpack = require('webpack');
// let WebpackMd5Hash = require('webpack-md5-hash');
let env = process.env.NODE_ENV || 'development';

const FILE_NAME_MAP = {
    'development': "[name]@version.js",
    'production' : "[name].bundle@[chunkhash].js"
};

module.exports = {
    context: __dirname,
    text: 'text111',
    entry: {
        test: './src/test',
        app: './src/scripts/app.js',
        lib: ['react', 'react-dom', 'redux', 'react-redux', 'react-router']
    },
    output: {
        path: __dirname + '/prd',
        filename: FILE_NAME_MAP[env],
        // `hot module replace` 必须要有`publicPath`
        publicPath: '/hot/prd'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'react-hmre']
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.less$/,
                loader: "style!css!less?strictMath&noIeCompat"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?name=public/source/[name].[ext]&hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
        ]
    },
    plugins: [
        // new WebpackMd5Hash(),
        new webpack.optimize.CommonsChunkPlugin("lib", FILE_NAME_MAP[env]),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
        function() {
            this.plugin("done", function(stats) {
                // console.log(JSON.stringify(stats.toJson()));
                // var ver = [];
                // var assetsByChunkName = stats.toJson().assetsByChunkName;
                // for(var key in assetsByChunkName){
                //     console.log(key, assetsByChunkName[key]);
                //     ver.push(assetsByChunkName[key].replace(/(\w+?)@(\w+)\.(js|css)/, '$1.$3#$2'))
                // }
                // require("fs").writeFileSync(
                //     "./versions.mapping",
                //     ver.join('\n'));
            });
        }
    ],
    devServer: {
        quiet: true,
        // historyApiFallback: true,
        port: 8888,
        proxy: {
            "/dist/prd/*": {
                target: 'http://localhost:8880',
                rewrite: function (req) {
                    var reg = /\/prd\/(.*?)@\w+\.(js|css)$/;
                    var url = req.url.replace(reg, '/dev/$1.$2');
                    console.log(req.url, ' ==> ', url);
                    req.url = url;
                },
            }
        }
    },
    resolve: {
        // root: [__dirname + '/node_modulesss']
    }
};
