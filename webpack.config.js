const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: './dist/bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { test: /\.tsx?$/, loader: 'tslint' },
    ],
    preLoaders: [
      { test: /\.js$/, loader: 'source-map-loader' },
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
};
