const CompressionWebpackPlugin = require("compression-webpack-plugin");
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  configureWebpack: config => {
    if (isProd) {
      // 配置webpack 压缩
      config.plugins.push(
        new CompressionWebpackPlugin({
          test: /\.js$|\.html$|\.css$/,
          // 超过4kb压缩
          threshold: 4096
        })
      );
    }
  },
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            hack: `true; @import "~@/style/vant-ui.less";`
          }
        }
      }
    }
  },
  // TODO 不太懂css
  // css: {
  //   // 是否将css 提取到独立的文件,生产环境提取，开发环境不提取
  //   extract: !!isProd,
  //   // 开发模式开启css sourcemap
  //   sourceMap: !isProd,
  //   loaderOptions: {
  //     less: {
  //       lessOptions: {
  //         modifyVars: {
  //           hack: 'true;@import "~@/style/_variables.less"',
  //         },
  //       },
  //     },
  //   },
  // },
  devServer: {
    port: 9001,
    open: true
  }
};
