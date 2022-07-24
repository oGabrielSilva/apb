const path = require('path');
const { mode } = require('./package.json');

module.exports = {
  entry: './src/www/main.ts',
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: { configFile: 'web.tsconfig.json' },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    filename: 'bundle.js',
    path:
      mode === 'production'
        ? path.resolve(__dirname, 'dist', 'public', 'js')
        : path.resolve(__dirname, 'src', 'public', 'js'),
  },
};
