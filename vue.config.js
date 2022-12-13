const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {        
    host: 'localhost',
    port: 8080,
    https: false,
    hot: false,
    proxy: null
  },
})
