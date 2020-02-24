module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://mall-pre.springboot.cn',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    },
    productionSourceMap: true, //本地调试可为true，线上打包改为false
    chainWebpack: (config) => {
        config.plugins.delete('prefetch')
    }
}