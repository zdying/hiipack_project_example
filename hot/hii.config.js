/**
 * @file 项目配置
 * @author zdying
 */


// var a = require('babel-preset-react-hmre');
// var webpack = require('webpack');

// var path = require('path');

// console.log(require.resolve('babel-preset-react-hmre'));
// console.log(require.resolve('asap'));

// console.log('__hii__', __hii__.env, __hii__);
// console.log(webpack);

module.exports = {
    /**
     * 需要单独打包的第三方库
     * 例如: {lib: ['react', 'react-dom']}
     * 会把'react'和'react-dom'打包到lib.js
     */
    library: {
        lib: ['react', 'react-dom', 'redux', 'react-redux']
    },
    extend: {
        module: {
            loaders: [
                {test: /\.mustache$/, loader: 'mustache-loader'}
            ]
        }
    },
    /**
     * 业务代码入口
     */
    entry: {
        app: "src/app",
    },
    /**
     * 别名
     */
    alias: {
        'root': 'src/'
    },
    babel: {
        presets: [
            __hii__.resolve('babel-preset-react'),
            __hii__.resolve('babel-preset-es2015'),
            require.resolve('babel-preset-react-hmre')
        ]
    }
    /**
     * 静态文件(直接复制, 不做处理)
     */
    // statics: {
    //     from: 'src/static',
    //     to: 'statics'
    // }
};
