var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.old.js');

new WebpackDevServer(webpack(config), {
  hot: true,
  inline:true,
  colors: true,
 
}).listen(3001, 'localhost', function(err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:3001');
});
