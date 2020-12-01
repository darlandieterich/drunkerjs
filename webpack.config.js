const pkg = require('./package.json');
const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const production = process.env.NODE_ENV === 'production' || false;

const banner = `DrunkerJS v${pkg.version}`;

module.exports = {
    entry: [
        './src/drunker.js',
        'webpack-dev-server/client?http://0.0.0.0:8080'
    ],
    mode: 'production',
    output: {
        filename: production ? 'drunker.min.js' : 'drunker.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'Drunker',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    },
    optimization: {
        minimize: production,
        minimizer: [
            new UglifyJSPlugin({
                parallel: require('os').cpus().length,
                uglifyOptions: {
                    ie8: false,
                    keep_fnames: false,
                    output: {
                        beautify: false,
                        comments: (node, {value, type}) => type == 'comment2' && value.startsWith('!')
                    }
                }
            })
        ]
    },
    plugins: [new webpack.BannerPlugin({ banner })]
};