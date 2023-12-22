const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {entryConfig, outputConfig, wbConfig} = require("./webpack.config.shared");

const devServer = {
    static: {
        directory: path.join(__dirname, outputConfig.destPath),
    },
    historyApiFallback: true,
    port: 3000,
};

module.exports = (_, options) => 
{
    return {
        mode: options.mode,
        entry: entryConfig,
        devServer,
        target: "web",
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.scss$/,
                    use: [
                        "style-loader",
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        ["postcss-preset-env"],
                                    ],
                                },
                            },
                        },
                        "sass-loader"
                    ],
                },
                {
                    test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                    loader: "file-loader",
                    options: {
                        name: "[path][name].[ext]",
                    },
                },
            ],
        },
        resolve: { extensions: [".tsx", ".ts", ".js"] },
        output: {
            filename: "js/[name].bundle.js",
            path: path.resolve(__dirname, outputConfig.destPath),
            publicPath: "/",
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html",
                favicon: "./public/favicon.ico",
                inject: true,
                minify: false
            }),
        ]
    };
};