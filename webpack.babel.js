export default {
    devtool: "source-map",

    entry: "./src/index",

    output: {
        libraryTarget: "umd",
        filename: "./release/index.jsx"
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    externals: [
        {
            react: {
                root: "React",
                commonjs2: "react",
                commonjs: "react",
                amd: "react"
            }
        }
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true
                    }
                }
            }
        ]
    }
};
