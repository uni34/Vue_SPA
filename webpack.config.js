const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
 entry: './src/main.js',
 devServer: {
    historyApiFallback: true
  },
 output: {
   path: path.resolve(__dirname, './dist'),
   publicPath: '/dist/',
   filename: 'build.js'
 },
 module: {
   rules: [
     {
       test: /\.vue$/,
       loader: 'vue-loader'
     },
     { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
     {
        test: /\.json$/,
        loader: 'json-loader'
      },
    {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },{
       test: /.js$/,
       use: 'babel-loader'
     },
     {
       test: /\.(png|jpg|gif|svg)$/,
     loader: 'file-loader',
     options: {
       name: '[name].[ext]',
     }
      },
     {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
    }
   ]
 },
 plugins: [
   new VueLoaderPlugin()
 ]
}
