const webpack = require("webpack");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  pwa: {
    name: "Covinfo",
    themeColor: "#0b091b",
    msTileColor: "#0b091b",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "#0b091b",
    iconPaths: {
      favicon32: "icons/favicon-32x32.png"
    }
  },
  css: {
    sourceMap: true
  }
};
