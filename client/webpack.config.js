const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'main.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
      },
    module: {
        rules: [
            {
                // Hey webpack compiler, when you come across a path that resolves to a '.js' file 
                // inside of a require()/import statement, 
                // use the babel-loader to transform it before you add it to the bundle."
                test: /\.(jsx|js)$/,
                // exculde node modules
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
        ]
    },
    plugins: [
        // finds and serves root html file
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        })
    ]
}