const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  mode: 'production',
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
  },
  entry: './client/index.jsx', // 합쳐질 파일 요소들 입력
  output: {
    filename: 'bundle.js', // 웹팩 빌드 후 최종적으로 만들어질 파일
    path: path.resolve(__dirname, 'dist'), // 빌드 위치
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // 대상 설정 정규식
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets', // 이미지가 저장될 경로를 지정합니다.
            },
          },
          {
            loader: 'url-loader', // 먼저 url-loader를 적용
            options: {
              limit: 8192, // 파일 크기가 이 값(단위: 바이트) 미만이면 Base64 URL로 변환합니다.
              name: '[name].[ext]',
              outputPath: 'assets', // 이미지가 저장될 경로를 지정합니다.
              fallback: require.resolve('file-loader'), // url-loader가 파일 크기 제한을 초과하는 경우 file-loader를 사용하도록 설정
            },
          },
          {
            loader: 'image-webpack-loader', // 그 다음에 image-webpack-loader를 적용
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/public/index.html', // 템플릿 설정
      minify: true, // 압축 설정
    }),
    new CleanWebpackPlugin(),
    // dotenv 사용을 위한 설정
    new webpack.DefinePlugin({
      'process.env.MYSQLHOST': JSON.stringify(process.env.MYSQLHOST),
      'process.env.MYSQLPORT': JSON.stringify(process.env.MYSQLPORT),
      'process.env.MYSQLUSER': JSON.stringify(process.env.MYSQLUSER),
      'process.env.MYSQLPASSWORD': JSON.stringify(process.env.MYSQLPASSWORD),
      'process.env.MYSQLDATABASE': JSON.stringify(process.env.MYSQLDATABASE),
      'process.env.PORT': JSON.stringify(process.env.PORT),
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
  ],
  devServer: {
    server: {
      type: 'https',
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    proxy: {
      '/api': {
        target: 'https://localhost:443', // HTTPS 포트로 변경
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
    port: 443, // HTTPS 포트로 변경
    hot: true, // 핫 모듈 교체 활성화
    compress: true, // 압축 유무
    open: true, // 기본 브라우저에서 실행
    historyApiFallback: true, // connect-history-api-fallback error 방지
  },
};
