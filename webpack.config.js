const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HashedModuleIdsPlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = env => {
  return {
    entry: {
      FirstComp: './assets/js/components/FirstComp.js',
      SApp: './assets/js/components/svelte/SvelteApp.js',
      main: './assets/js/main.js'
    },
    output: {
      path: path.resolve(__dirname, 'public/js/dist'),
      filename: '[name].js'
    },
    resolve: {
      alias: { svelte: path.resolve('node_modules', 'svelte') },
      extensions: ['.mjs', '.js', '.svelte'],
      mainFields: ['svelte', 'browser', 'module', 'main']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'prettier-loader']
        },
        { test: /\.svelte$/, exclude: /node_modules/, use: 'svelte-loader' },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
            'postcss-loader'
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css'
      }),
      new HtmlWebpackPlugin({
        inject: false,
        hash: true,
        template: './assets/index.html',
        children: false,
        filename: '../index.html'
      }),
      new HashedModuleIdsPlugin(),
      new CleanWebpackPlugin()
    ],
    optimization: {
  moduleIds: 'hashed',
  runtimeChunk: 'single',
  splitChunks: {
    chunks: 'all',
    maxInitialRequests: Infinity,
    minSize: 0,
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name(module) {
          // get the name. E.g. node_modules/packageName/not/this/part.js
          // or node_modules/packageName
          const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
          // npm package names are URL-safe, but some servers don't like @ symbols
          return `npm.${packageName.replace('@', '')}`;
        },
      },
    },
  },
  minimizer: [
    new TerserPlugin({
      terserOptions: {
        compress: false,
        mangle: false,
        output: {
          beautify: env.NODE_ENV !== 'production' ? true : false
        }
      }
    })
  ]
}
  };
};
