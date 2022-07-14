const paths = require('./paths');

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    target: 'web',
    devServer: {
        static: {
            directory: paths.public
        },
        open: true,
        port: 8080,
    }
})
