var webpack = require('webpack')

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    module: {
        rules: [
            {test: /\.js$/, loader: 'babel-loader', exclude:/node_modules/},
            {test: /\.jsx$/, loader: 'babel-loader', exclude:/node_modules/},
            {test: /\.(scss|css)$/ , use:['style-loader','css-loader', 'sass-loader']}
        ]
    }, 
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    output:{
        filename: 'bundle.js',
        path: __dirname + '/public'
    }
}