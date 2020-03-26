const proxy = require('http-proxy-middleware');
console.log(proxy);
module.exports = function(app) {
    app.use(
        '/api',
        proxy.createProxyMiddleware({
            target: 'http://m.kugou.com?json=true',
            changeOrigin: true,
            pathRewrite: {
                "^/api": ""
            }
        })
    )
}
