module.exports = {
  pages: {
    index: {
      // エントリーポイント
      entry: "src/main.ts",
      title: "Harachin.lab",
    },
  },

  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/scss/global.scss";`,
      },
    },
  },

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
};
