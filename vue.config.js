module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import '~@/assets/styles/main.scss';
          @import '~@/assets/styles/properties.scss';
        `
      }
    }
  }
}