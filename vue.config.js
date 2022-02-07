module.exports = {
  pages: {
    index: {
      entry: "src/main.ts",
      title: "Harachin.lab"
    }
  },

  configureWebpack: {
    devServer: {
      watchOptions: {
        poll: true
      }
    }
  },
};
