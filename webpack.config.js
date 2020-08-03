const path = require("path");
// const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin"); // 压缩文件
const webpackConfigProd = {
  target: "electron-main",
  mode: "production", // 生产环境
  entry: "./renderer/main.ts", // 入口文件
  output: {
    path: path.resolve(__dirname, "./public")
    // 打包多个出口文件
    // filename: "js/[name].[chunkhash:8].js", // chunkhash 文件级的更新 hash所有文件的更新
    // publicPath: "./"
  },
  node: {
    Buffer: false,
    buffer: false,
    __dirname: false,
    __filename: false
  },
  devtool: "none",
  // externals: {
  //   jquery: "jQuery"
  // },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            // loader: 'ts-loader',
            loader: "awesome-typescript-loader",
            options: {
              reportFiles: ["src/**/*.{ts,tsx}"],
              useCache: true,
              useBabel: true,
              babelCore: "@babel/core"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // new UglifyjsWebpackPlugin({
    //   uglifyOptions: {
    //     // display warnings when dropping unreachable code or unused declarations etc.
    //     warnings: false,
    //     ie8: true,
    //     compress: {
    //       drop_debugger: false // (default: true) -- remove debugger; statements
    //       // -- Pass true to discard calls to console.* functions. If you wish to drop a specific function call such as console.info and/or retain side effects from function arguments after dropping the function call then use pure_funcs instead
    //       // drop_console: true
    //     }
    //   }
    // })
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  }
};
module.exports = webpackConfigProd;
