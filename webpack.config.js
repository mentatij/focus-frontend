const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
            test: /\.css$/,
            include: path.resolve(__dirname, 'src/css/'),
            use: [ "style-loader", "css-loader"]
        },
        {
            test: /\.less$/,
            include: path.resolve(__dirname, 'src/less/'),
            use: [ "style-loader", "css-loader", "less-loader"]
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/,
            include: path.resolve(__dirname, 'src/images/'),
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
        new CopyWebpackPlugin([{
            from: 'src/*.html',
            to: '[name].html'
        }])
    ]
};