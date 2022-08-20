const { resolve } = require("path");
const LodashWebpackPlugin = require("lodash-webpack-plugin");
const webpack = require("webpack");

const cdn = {
  prod: {
    css: [
      "https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.9/theme-chalk/index.min.css",
    ],
    prefetchJs: [
      "https://cdn.bootcdn.net/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",
    ],
    preloadJs: [
      "https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.9/index.min.js",
    ],
  },
  dev: {
    css: [],
    prefetchJs: [],
    preloadJs: [],
  },
};
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vue: {
            name: "chunk-vue",
            test: /[\\/]node_modules[\\/]vue(.*)/,
            priority: 10,
            chunks: "initial",
          },
          element: {
            name: "chunk-element",
            test: /[\\/]node_modules[\\/]element-ui[\\/]/,
            priority: 10,
            chunks: "initial",
          },
        },
      },
    },
  },
  chainWebpack: (config) => {
    // config.when(process.env.NODE_ENV === "production").externals = {
    //   html2canvas: "html2canvas",
    //   "element-ui": "ELEMENT",
    // };
    config.plugin("LodashWebpackPlugin").use(LodashWebpackPlugin);
    config
      .plugin("ContextReplacementPlugin")
      .use(webpack.ContextReplacementPlugin, [/moment[/\\]locale$/, /zh-cn/]);
    config.plugin("html").tap((options) => {
      if (process.env.NODE_ENV === "production") {
        options[0].cdn = cdn.prod;
      } else {
        options[0].cdn = cdn.dev;
      }
      return options;
    });
  },
};
