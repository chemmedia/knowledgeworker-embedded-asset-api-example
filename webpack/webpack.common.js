const paths = require('./paths');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [paths.src + '/app/index.ts'],
    output: {
        path: paths.build,
        filename: '[name].[contenthash:8].js',
        chunkFilename: '[name].[contenthash:8].chunk.js',
        publicPath: 'auto',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: paths.public + '/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(ts)$/,
                include: [paths.src],
                use: [
                    {
                        loader: require.resolve('ts-loader'),
                    },
                ],
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: {sourceMap: true, importLoaders: 1}},
                    {loader: 'postcss-loader', options: {sourceMap: true}},
                    {loader: 'sass-loader', options: {sourceMap: true}},
                ],
            },
            {test: /\.(?:ico|gif|png|jpg|jpeg|woff(2)?|eot|ttf|otf|svg)$/i, type: 'asset'},
        ],
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
}
