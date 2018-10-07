const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'output/'),
        filename: 'js/bundle.min.js',
        publicPath: '/',
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'src/'),
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.less$/,
            include: path.resolve(__dirname, 'src/less/'),
            use: [ "style-loader", "css-loader", "less-loader"]
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/,
            include: path.resolve(__dirname, 'src/images/'),
            // use: ['url-loader?limit=10000', 'img-loader']
            loader: 'file-loader?name=./images/[name].[ext]'
        }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    devServer: {
        contentBase: path.join(__dirname, 'output'),
        port: 5000,
        inline: true,
        hot: true
    },
    plugins: [
    ]
};