const path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './app.js',
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'bundle.js',
        publicPath: '/static/',
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
       ],
    },
    resolve: {
        alias: {
            'admin-on-rest': path.join(__dirname, '.', 'src'),
        },
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        },

        __CLIENT__: true,
        __SERVER__: false,
        __DEVELOPMENT__: false,
        __DEVTOOLS__: false
      }),

      // optimizations
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
    ]
};
