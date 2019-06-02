module.exports = {
    entry: {
        entry: './index'
    },
    output: {
        path: '/',
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: {
            index: './index.html'
        }
    },
    module: {
        rules: [{
            test: /\.(gif|jpe?g|png|svg)$/,
            use: {
                loader: 'file-loader'
            }
        },
        {
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    cacheDirectory: false,
                    presets: ['module:metro-react-native-babel-preset'],
                    plugins: [
                        '@babel/plugin-transform-runtime'
                    ]
                }
            }
        }]
    },
    resolve: {
        extensions: [
            '.web.js',
            '.js',
            '.json'
        ],
        alias: {
            'react-native$': 'react-native-web/dist/cjs'
        }
    },
    mode: 'development',
    devtool: 'cheap-module-eval-source-map'
};