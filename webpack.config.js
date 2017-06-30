module.exports = {
    entry: './src/main',
    output: {
        path: './build',
        filename: 'main.js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: '/node_modules'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders:[
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    vue: {
        loaders: {
            js: 'babel'
        }
    }
}