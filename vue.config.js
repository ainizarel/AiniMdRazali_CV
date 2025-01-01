const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/AiniMdRazali_CV/', // Set the public path for your application
  css: {
    loaderOptions: {
      sass: {
        // Add global SCSS if needed (optional)
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },
});
