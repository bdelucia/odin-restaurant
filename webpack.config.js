const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', // Path to your HTML file
    }),
    ],
    devServer: {
        static: './dist', // Serve from the "dist" folder
    },
};