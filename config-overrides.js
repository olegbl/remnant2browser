const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlInlineCssWebpackPlugin =
  require('html-inline-css-webpack-plugin').default;
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');

module.exports = {
  webpack: function (config, env) {
    //inline css and scripts right after chunk plugin.
    //chunk plugin will not be present for development build and thats ok.
    const inlineChunkHtmlPlugin = config.plugins.find(
      (element) => element.constructor.name === 'InlineChunkHtmlPlugin',
    );
    if (inlineChunkHtmlPlugin) {
      config.plugins.splice(
        config.plugins.indexOf(inlineChunkHtmlPlugin),
        0,
        new HtmlInlineCssWebpackPlugin(),
        new HtmlInlineScriptPlugin(),
      );
    }

    //Override HtmlWebpack plugin with preserving all options and modifying what we want
    const htmlWebpackPlugin = config.plugins.find(
      (element) => element.constructor.name === 'HtmlWebpackPlugin',
    );
    config.plugins.splice(
      config.plugins.indexOf(htmlWebpackPlugin),
      1,
      new HtmlWebpackPlugin({
        ...htmlWebpackPlugin.userOptions,
        inject: 'body',
      }),
    );

    return config;
  },
};
