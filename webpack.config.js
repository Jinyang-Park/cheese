const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
// const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development', // 실서비스: production
  resolve: {
    extensions: ['.js', '.jsx'],
    fallback: {
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      os: require.resolve('os-browserify/browser'),
      url: require.resolve('url'),
      assert: require.resolve('assert'),
      util: require.resolve('util/'),
    },
    // alias: {
    //   './App': path.resolve(__dirname, 'client/App'),
    // },
  },
  entry:
    // 합쳐질 파일 요소들 입력
    './client/index.jsx',
  output: {
    filename: 'bundle.js', // 웹팩 빌드 후 최종적으로 만들어질 파일
    path: path.resolve(__dirname, 'dist'), // 빌드 위치
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // 대상 설정 정규식
        // exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets', // 이미지가 저장될 경로를 지정합니다.
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // {
      //   test: /\.json$/,
      //   loader: 'json5-loader',
      //   type: 'javascript/auto',
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/public/index.html', // 템플릿 설정
      minify: true, // 압축 설정

      // template에 해당하는 파일에 dotenv 사용을 위한 설정
      // env: {
      //   REACT_APP_NAVER_CLIENT_ID: process.env.REACT_APP_NAVER_CLIENT_ID,
      // },
    }),
    new CleanWebpackPlugin(),
    // dotenv 사용을 위한 설정
    // new webpack.DefinePlugin({
    //   'process.env': JSON.stringify(process.env),
    // }),
    // new Dotenv(),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
  ],
  // resolve: {
  //   fallback: {
  //     http: require.resolve('stream-http'),
  //     https: require.resolve('https-browserify'),
  //     crypto: require.resolve('crypto-browserify'),
  //     stream: require.resolve('stream-browserify'),
  //     os: require.resolve('os-browserify/browser'),
  //     url: require.resolve('url'),
  //     assert: require.resolve('assert'),
  //   },
  // },
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        // target: 'https://search.naver.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
    // static: {
    //   directory: path.resolve(__dirname, 'dist'),
    // },
    port: 3000,
    hot: true, // 핫 모듈 교체 활성화
    compress: true, // 압축 유무
    open: true, // 기본 브라우저에서 실행
    historyApiFallback: true, // connect-history-api-fallback error 방지
  },
};
