const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  entry: './app/app.tsx',
  output: {
    path: path.resolve(__dirname, './public'),
    publicPath: '/public/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        // Загрузчик для шрифтов
        test: /.(eot|ttf|woff|woff2|svg)(\?.+)?$/,
        exclude: /images/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10000,
              name: './fonts/Icons/[name].[ext]',
            },
          },
        ],
      },
      {
        // Загрузчик для изображений
        test: /\.(gif|jpg|webp|png|svg)$/,
        exclude: /fonts/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './images/[name].[ext]',
            },
          },
        ],
      },
      {
        // Загрузчик для scss файлов
        test: /\.scss$/,
        exclude: [/node_modules/, /public/],
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer()],
            },
          },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
};
