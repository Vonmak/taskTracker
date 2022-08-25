module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://localhost:4175',
          changeOrigin: true,
          logLevel: 'debug',
          pathRewrite: { '^/api': '/' },
        },
      },
    },
  }