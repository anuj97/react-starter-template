const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.js',
   devServer: {
      inline: true,
      port: 3000
   },
   output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
   module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          }
        },
        {
          test: /\.(scss)$/,
          use: [
            {
              loader: 'style-loader', // inject CSS to page
            }, 
            {
              loader: 'css-loader', // translates CSS into CommonJS modules
            }, 
            {
              loader: 'postcss-loader', // Run post css actions
              options: {
                plugins: function () { // post css plugins, can be exported to postcss.config.js
                  return [
                    require('precss'),
                    require('autoprefixer')
                  ];
                }
              }
            }, 
            {
              loader: 'sass-loader' // compiles Sass to CSS
            },
          ]
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html',
         filename: 'index.html'
      })
   ],
}