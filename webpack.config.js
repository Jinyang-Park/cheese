const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development', // 실서비스: production
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry:
    // 합쳐질 파일 요소들 입력
    './client/index.jsx',
  output: {
    filename: 'bundle.js', // 웹팩 빌드 후 최종적으로 만들어질 파일
    path: path.resolve(__dirname, 'dist'), // 빌드 위치
    publicPath: '/',
  },
  // externals: {
  //   // axios 써드파디 라이브러리는 패키지로 제공될때 이미 빌드 과정을 거쳤기 때문에 빌드 프로세스에서 제외하는것이 좋다.
  //   axios: 'axios', // axios
  // },
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
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/public/index.html', // 템플릿 설정
      minify: true, // 압축 설정
    }),
    new CleanWebpackPlugin(),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: './node_modules/axios/dist/axios.min.js',
    //       to: './axios.min.js',
    //     },
    //   ],
    // }),
  ],
  devServer: {
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
