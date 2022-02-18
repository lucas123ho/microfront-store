const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PORT = 3000;

module.exports = {
    entry: "./test/src/index.js",
    target: "web",
    mode: "development",
    devServer: {
        port: PORT,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-env"],
                        plugins: ["@babel/plugin-transform-runtime"],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./test/public/index.html",
        }),
    ],
};
