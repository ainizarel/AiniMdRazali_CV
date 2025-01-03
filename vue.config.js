const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: '/AiniMdRazali_CV/', // Ensure the public path is correctly set for deployment

  css: {
    loaderOptions: {
      sass: {
        // Add global SCSS variables or mixins if necessary
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },

  configureWebpack: {
    optimization: {
      minimize: true, // Ensure minimization happens
    },
  },

  chainWebpack: (config) => {
    // Add safe parsing for PostCSS to avoid issues with unexpected characters
    config.module
      .rule('css')
      .oneOf('normal')
      .use('postcss-loader')
      .tap((options) => ({
        ...options,
        postcssOptions: {
          plugins: [
            require('postcss-safe-parser'), // Safe parser to handle unexpected CSS
          ],
        },
      }));
  },
});
