const currentTask = process.env.npm_lifecycle_event
var webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [
            {test: /\.js$/, loader: 'babel-loader', exclude:/node_modules/},
            {test: /\.jsx$/, loader: 'babel-loader', exclude:/node_modules/},
            {test: /\.(scss|css)$/ , use:['style-loader','css-loader', 'sass-loader']}
        ]
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify('development')
        // })
    ],
    output:{
        filename: 'bundle.js',
        path: __dirname + '/public'
    }
}

if(currentTask == "build"){
    config.mode = "production"
    config.module.rules[2].use[0] = MiniCssExtractPlugin.loader
    config.plugins.push(new MiniCssExtractPlugin({filename: "main.css"}))

}

module.exports = config