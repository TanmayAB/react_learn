var path = require('path');
var webpack = require('webpack');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

console.log("path is "+ __dirname)
module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    publicPath:'/dist'
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js?$/,
  	loader:'babel-loader',
        exclude: /node_modules\/(?!other-module)/,
	options: {
 	  presets: ["react","es2015","stage-0"]
	}
      }
    ]
  }//,
//  plugins:[
//    new UglifyJsPlugin()
//  ]
};

